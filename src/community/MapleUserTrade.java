/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

/*package community;

 import server.items.InventoryManipulator;
 import java.util.LinkedList;
 import java.util.List;
 import client.items.IItem;
 import client.items.ItemFlag;
 import constants.GameConstants;
 import client.MapleCharacter;
 import client.items.MapleInventoryType;
 import packet.creators.MainPacketCreator;
 import packet.creators.PlayerShopPacket;

 public class MapleUserTrade {

 private MapleUserTrade partner = null;
 private final List<IItem> items = new LinkedList<IItem>();
 private List<IItem> exchangeItems;
 private long meso = 0, exchangeMeso = 0;
 private boolean locked = false;
 private final MapleCharacter chr;
 private final byte tradingslot;
 private byte rps = 0;
 public boolean cash = false;

 public MapleUserTrade(final byte tradingslot, final MapleCharacter chr) {
 this.tradingslot = tradingslot;
 this.chr = chr;
 }

 public final void CompleteTrade() {
 for (final IItem item : exchangeItems) {
 short flag = item.getFlag();

 if (ItemFlag.KARMA_EQ.check(flag)) {
 item.setFlag((short) (flag - ItemFlag.KARMA_EQ.getValue()));
 } else if (ItemFlag.KARMA_USE.check(flag) && !GameConstants.isEquip(item.getItemId())) {
 item.setFlag((short) (flag - ItemFlag.KARMA_USE.getValue()));
 }
 InventoryManipulator.addFromDrop(chr.getClient(), item, false);
 }
 if (exchangeMeso > 0) {
 chr.gainMeso(exchangeMeso - GameConstants.getTaxAmount(exchangeMeso), false, true, false);
 }
 exchangeMeso = 0;
 if (exchangeItems != null) { // just to be on the safe side...
 exchangeItems.clear();
 }
 chr.isTrade = false;
 chr.getClient().getSession().write(MainPacketCreator.TradeMessage(tradingslot, (byte) 0x07));
 }

 public final void cancel() {
 for (final IItem item : items) {
 InventoryManipulator.addFromDrop(chr.getClient(), item, false);
 }
 if (meso > 0) {
 chr.gainMeso(meso, false, true, false);
 }
 meso = 0;
 if (items != null) { // just to be on the safe side...
 items.clear();
 }
 if (chr.isTrade) {
 chr.getClient().getSession().write(MainPacketCreator.getTradeCancel(tradingslot));
 } else {
 chr.getClient().getSession().write(MainPacketCreator.ExitRPS());
 }

 chr.isTrade = false;
 }

 public final boolean isLocked() {
 return locked;
 }

 public final void setMeso(final int meso) {
 if (locked || partner == null || meso <= 0 || this.meso + meso <= 0) {
 return;
 }
 if (chr.getMeso() >= meso) {
 chr.gainMeso(-meso, false, true, false);
 this.meso += meso;
 chr.getClient().getSession().write(MainPacketCreator.getTradeMesoSet((byte) 0, this.meso));
 if (partner != null) {
 partner.getChr().getClient().getSession().write(MainPacketCreator.getTradeMesoSet((byte) 1, this.meso));
 }
 }
 }

 public final void addItem(final IItem item) {
 if (locked || partner == null) {
 return;
 }
 items.add(item);
 chr.getClient().getSession().write(MainPacketCreator.getTradeItemAdd((byte) 0, item));
 if (partner != null) {
 partner.getChr().getClient().getSession().write(MainPacketCreator.getTradeItemAdd((byte) 1, item));
 }
 }

 public final void chat(final String message) {
 chr.getClient().getSession().write(MainPacketCreator.getPlayerShopChat(chr, message, true));
 if (partner != null) {
 partner.getChr().getClient().getSession().write(MainPacketCreator.getPlayerShopChat(chr, message, false));
 }
 }

 public final MapleUserTrade getPartner() {
 return partner;
 }

 public final void setPartner(final MapleUserTrade partner) {
 if (locked) {
 return;
 }
 this.partner = partner;
 }

 public final MapleCharacter getChr() {
 return chr;
 }

 private final boolean check() {
 if (chr.getMeso() + exchangeMeso < 0) {
 return false;
 }
 byte eq = 0, use = 0, setup = 0, etc = 0;
 for (final IItem item : exchangeItems) {
 switch (GameConstants.getInventoryType(item.getItemId())) {
 case EQUIP:
 eq++;
 break;
 case USE:
 use++;
 break;
 case SETUP:
 setup++;
 break;
 case ETC:
 etc++;
 break;
 case CASH: // Not allowed, probably hacking
 return false;
 }
 }
 if (chr.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < eq
 || chr.getInventory(MapleInventoryType.USE).getNumFreeSlot() < use
 || chr.getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < setup
 || chr.getInventory(MapleInventoryType.ETC).getNumFreeSlot() < etc) {
 return false;
 }
 return true;
 }

 public final static void completeTrade(final MapleCharacter c) {
 final MapleUserTrade local = c.getTrade();
 final MapleUserTrade partner = local.getPartner();

 if (partner == null || local.locked) {
 return;
 }
 local.locked = true; // Locking the trade
 partner.getChr().getClient().getSession().write(MainPacketCreator.getTradeConfirmation());

 partner.exchangeItems = local.items; // Copy this to partner's trade since it's alreadt accepted
 partner.exchangeMeso = local.meso; // Copy this to partner's trade since it's alreadt accepted

 if (partner.isLocked()) { // Both locked
 if (!local.check() || !partner.check()) { // Check for full inventories
 // NOTE : IF accepted = other party but inventory is full, the item is lost.
 partner.cancel();
 local.cancel();

 c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "트레이드를 완료하는데 필요한 인벤토리 공간이 부족합니다."));
 partner.getChr().getClient().getSession().write(MainPacketCreator.serverNotice(5, "트레이드를 완료하는데 필요한 인벤토리 공간이 부족합니다."));
 } else {
 local.CompleteTrade();
 partner.CompleteTrade();
 }
 partner.getChr().setTrade(null);
 c.setTrade(null);
 }

 }

 public static final void cancelTrade(final MapleUserTrade Localtrade) {
 Localtrade.cancel();

 final MapleUserTrade partner = Localtrade.getPartner();
 if (partner != null) {
 partner.cancel();
 partner.getChr().setTrade(null);
 }
 Localtrade.chr.setTrade(null);
 }

 public static final void startTrade(MapleCharacter c, boolean isTrade, boolean iscash) {
 if (c.getLevel() < 60) {
 c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "레벨 60이상부터 트레이드 이용이 가능합니다."));
 return;
 }
 if (c.isDumeGM()) {
 c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "해당 캐릭터와는 교환이 불가능 합니다."));
 return;
 }
 if (c.getTrade() == null) {
 c.setTrade(new MapleUserTrade((byte) 0, c));
 c.isTrade = isTrade;
 c.getTrade().cash = iscash;
 c.getClient().getSession().write(MainPacketCreator.getTradeStart(c.getClient(), c.getTrade(), (byte) 0, isTrade));
 } else {
 c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "이미 트레이드 중입니다."));
 }
 }

 public static final void startTrade(final MapleCharacter c, boolean isTrade) {
 if (c.getLevel() < 60) {
 c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "레벨 60이상부터 트레이드 이용이 가능합니다."));
 return;
 }
 if (c.getTrade() == null) {
 c.setTrade(new MapleUserTrade((byte) 0, c));
 c.getClient().getSession().write(MainPacketCreator.getTradeStart(c.getClient(), c.getTrade(), (byte) 0, isTrade));
 c.isTrade = isTrade;
 } else {
 c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "이미 트레이드 중입니다."));
 }
 }

 public static final void inviteTrade(MapleCharacter c1, MapleCharacter c2, boolean isTrade) {
 if ((c2.getLevel() < 60) || (c1.getLevel() < 60)) {
 c1.getClient().getSession().write(MainPacketCreator.serverNotice(5, "레벨 60이상부터 트레이드 이용이 가능합니다."));
 cancelTrade(c1.getTrade());
 return;
 }
 if (c2.getTrade() == null) {
 c2.setTrade(new MapleUserTrade((byte) 1, c2));
 c2.getTrade().setPartner(c1.getTrade());
 c1.getTrade().setPartner(c2.getTrade());
 c2.getTrade().cash = c1.getTrade().cash;
 c2.getClient().getSession().write(MainPacketCreator.getTradeInvite(c1, isTrade));
 c1.isTrade = isTrade;
 c2.isTrade = isTrade;
 } else {
 c1.getClient().getSession().write(MainPacketCreator.serverNotice(5, "이미 누군가와 트레이드 중입니다."));
 cancelTrade(c1.getTrade());
 }
 }

 public static final void visitTrade(final MapleCharacter c1, final MapleCharacter c2, boolean isTrade) {
 if (c1.getTrade() != null && c1.getTrade().getPartner() == c2.getTrade() && c2.getTrade() != null && c2.getTrade().getPartner() == c1.getTrade()) {
 // We don't need to check for map here as the user is found via MapleMap.getCharacterById_InMap()
 c2.getClient().getSession().write(MainPacketCreator.getTradePartnerAdd(c1));
 c1.getClient().getSession().write(MainPacketCreator.getTradeStart(c1.getClient(), c1.getTrade(), (byte) 1, isTrade));
 } else {
 c1.getClient().getSession().write(MainPacketCreator.serverNotice(5, "상대방이 이미 트레이드를 종료했습니다."));
 }
 }

 public static final void declineTrade(final MapleCharacter c) {
 final MapleUserTrade trade = c.getTrade();
 if (trade != null) {
 if (trade.getPartner() != null) {
 MapleCharacter other = trade.getPartner().getChr();
 other.getTrade().cancel();
 other.setTrade(null);
 other.getClient().getSession().write(MainPacketCreator.serverNotice(5, c.getName() + " 님이 교환 요청을 거절하셨습니다."));
 }
 trade.cancel();
 c.setTrade(null);
 }
 }

 public void setRPS(byte rps) {
 this.rps = rps;
 }

 public byte getPRS() {
 return rps;
 }
 }*/
package community;

import client.MapleCharacter;
import client.MapleClient;
import client.items.IItem;
import client.items.ItemFlag;
import client.items.MapleInventory;
import client.items.MapleInventoryType;
import constants.GameConstants;
import java.util.LinkedList;
import java.util.List;
import packet.creators.MainPacketCreator;
import server.items.InventoryManipulator;

public class MapleUserTrade {

    private MapleUserTrade partner = null;
    private final List<IItem> items = new LinkedList();
    private List<IItem> exchangeItems;
    private long meso = 0L;
    private long exchangeMeso = 0L;
    private boolean locked = false;
    private final MapleCharacter chr;
    private final byte tradingslot;
    private byte rps = 0;
    public boolean cash = false;

    public MapleUserTrade(byte tradingslot, MapleCharacter chr) {
        this.tradingslot = tradingslot;
        this.chr = chr;
    }

    public final void CompleteTrade() {
        for (IItem item : this.exchangeItems) {
            short flag = item.getFlag();

            if (ItemFlag.KARMA_EQ.check(flag)) {
                item.setFlag((short) (flag - ItemFlag.KARMA_EQ.getValue()));
            } else if ((ItemFlag.KARMA_USE.check(flag)) && (!GameConstants.isEquip(item.getItemId()))) {
                item.setFlag((short) (flag - ItemFlag.KARMA_USE.getValue()));
            }
            InventoryManipulator.addFromDrop(this.chr.getClient(), item, false);
        }
        if (this.exchangeMeso > 0L) {
            this.chr.gainMeso(this.exchangeMeso - GameConstants.getTaxAmount(this.exchangeMeso), false, true, false);
        }
        this.exchangeMeso = 0L;
        if (this.exchangeItems != null) {
            this.exchangeItems.clear();
        }
        this.chr.isTrade = false;
        this.chr.getClient().getSession().write(MainPacketCreator.TradeMessage(this.tradingslot, (byte) 7));
    }

    public final void cancel() {
        for (IItem item : this.items) {
            InventoryManipulator.addFromDrop(this.chr.getClient(), item, false);
        }
        if (this.meso > 0L) {
            this.chr.gainMeso(this.meso, false, true, false);
        }
        this.meso = 0L;
        if (this.items != null) {
            this.items.clear();
        }
        if (this.chr.isTrade) {
            this.chr.getClient().getSession().write(MainPacketCreator.getTradeCancel(this.tradingslot));
        } else {
            this.chr.getClient().getSession().write(MainPacketCreator.ExitRPS());
        }
        this.chr.isTrade = false;
    }

    public final boolean isLocked() {
        return this.locked;
    }

    public final void setMeso(int meso) {
        if ((this.locked) || (this.partner == null) || (meso <= 0) || (this.meso + meso <= 0L)) {
            return;
        }
        if (this.chr.getMeso() >= meso) {
            this.chr.gainMeso(-meso, false, true, false);
            this.meso += meso;
            this.chr.getClient().getSession().write(MainPacketCreator.getTradeMesoSet((byte) 0, this.meso));
            if (this.partner != null) {
                this.partner.getChr().getClient().getSession().write(MainPacketCreator.getTradeMesoSet((byte) 1, this.meso));
            }
        }
    }

    public final void addItem(IItem item) {
        if ((this.locked) || (this.partner == null)) {
            return;
        }
        this.items.add(item);
        this.chr.getClient().getSession().write(MainPacketCreator.getTradeItemAdd((byte) 0, item));
        if (this.partner != null) {
            this.partner.getChr().getClient().getSession().write(MainPacketCreator.getTradeItemAdd((byte) 1, item));
        }
    }

    public final void chat(String message) {
        this.chr.getClient().getSession().write(MainPacketCreator.getPlayerShopChat(this.chr, message, true));
        if (this.partner != null) {
            this.partner.getChr().getClient().getSession().write(MainPacketCreator.getPlayerShopChat(this.chr, message, false));
        }
    }

    public final MapleUserTrade getPartner() {
        return this.partner;
    }

    public final void setPartner(MapleUserTrade partner) {
        if (this.locked) {
            return;
        }
        this.partner = partner;
    }

    public final MapleCharacter getChr() {
        return this.chr;
    }


    private final boolean check() {
        if (chr.getMeso() + exchangeMeso < 0) {
            return false;
        }
        byte eq = 0, use = 0, setup = 0, etc = 0;
        for (final IItem item : exchangeItems) {
            switch (GameConstants.getInventoryType(item.getItemId())) {
                case EQUIP:
                    eq++;
                    break;
                case USE:
                    use++;
                    break;
                case SETUP:
                    setup++;
                    break;
                case ETC:
                    etc++;
                    break;
                case CASH: // Not allowed, probably hacking
                    return false;
            }
        }
        if (chr.getInventory(MapleInventoryType.EQUIP).getNumFreeSlot() < eq
                || chr.getInventory(MapleInventoryType.USE).getNumFreeSlot() < use
                || chr.getInventory(MapleInventoryType.SETUP).getNumFreeSlot() < setup
                || chr.getInventory(MapleInventoryType.ETC).getNumFreeSlot() < etc) {
            return false;
        }
        return true;
    }

    public static final void completeTrade(MapleCharacter c) {
        MapleUserTrade local = c.getTrade();
        MapleUserTrade partner = local.getPartner();

        if ((partner == null) || (local.locked)) {
            return;
        }
        local.locked = true;
        partner.getChr().getClient().getSession().write(MainPacketCreator.getTradeConfirmation());

        partner.exchangeItems = local.items;
        partner.exchangeMeso = local.meso;

        if (partner.isLocked()) {
            if ((!local.check()) || (!partner.check())) {
                partner.cancel();
                local.cancel();

                c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "트레이드를 완료하는데 필요한 인벤토리 공간이 부족합니다."));
                partner.getChr().getClient().getSession().write(MainPacketCreator.serverNotice(5, "트레이드를 완료하는데 필요한 인벤토리 공간이 부족합니다."));
            } else {
                local.CompleteTrade();
                partner.CompleteTrade();
            }
            partner.getChr().setTrade(null);
            c.setTrade(null);
        }
    }

    public static final void cancelTrade(MapleUserTrade Localtrade) {
        Localtrade.cancel();

        MapleUserTrade partner = Localtrade.getPartner();
        if (partner != null) {
            partner.cancel();
            partner.getChr().setTrade(null);
        }
        Localtrade.chr.setTrade(null);
    }

    public static final void startTrade(MapleCharacter c, boolean isTrade, boolean iscash) {
        if (c.getLevel() < 60) {
            c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "레벨 60이상부터 트레이드 이용이 가능합니다."));
            return;
        }
        if (c.isDumeGM()) {
            c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "해당 캐릭터와는 교환이 불가능 합니다."));
            return;
        }
        if (c.getTrade() == null) {
            c.setTrade(new MapleUserTrade((byte) 0, c));
            c.isTrade = isTrade;
            c.getTrade().cash = iscash;
            c.getClient().getSession().write(MainPacketCreator.getTradeStart(c.getClient(), c.getTrade(), (byte) 0, isTrade));
        } else {
            c.getClient().getSession().write(MainPacketCreator.serverNotice(5, "이미 트레이드 중입니다."));
        }
    }

    public static final void inviteTrade(MapleCharacter c1, MapleCharacter c2, boolean isTrade) {
        if ((c2.getLevel() < 60) || (c1.getLevel() < 60)) {
            c1.getClient().getSession().write(MainPacketCreator.serverNotice(5, "레벨 60이상부터 트레이드 이용이 가능합니다."));
            cancelTrade(c1.getTrade());
            return;
        }
        if (c2.getTrade() == null) {
            c2.setTrade(new MapleUserTrade((byte) 1, c2));
            c2.getTrade().setPartner(c1.getTrade());
            c1.getTrade().setPartner(c2.getTrade());
            c2.getTrade().cash = c1.getTrade().cash;
            c2.getClient().getSession().write(MainPacketCreator.getTradeInvite(c1, isTrade));
            c1.isTrade = isTrade;
            c2.isTrade = isTrade;
        } else {
            c1.getClient().getSession().write(MainPacketCreator.serverNotice(5, "이미 누군가와 트레이드 중입니다."));
            cancelTrade(c1.getTrade());
        }
    }

    public static final void visitTrade(MapleCharacter c1, MapleCharacter c2, boolean isTrade) {
        if ((c1.getTrade() != null) && (c1.getTrade().getPartner() == c2.getTrade()) && (c2.getTrade() != null) && (c2.getTrade().getPartner() == c1.getTrade())) {
            c2.getClient().getSession().write(MainPacketCreator.getTradePartnerAdd(c1));
            c1.getClient().getSession().write(MainPacketCreator.getTradeStart(c1.getClient(), c1.getTrade(), (byte) 1, isTrade));
        } else {
            c1.getClient().getSession().write(MainPacketCreator.serverNotice(5, "상대방이 이미 트레이드를 종료했습니다."));
        }
    }

    public static final void declineTrade(MapleCharacter c) {
        MapleUserTrade trade = c.getTrade();
        if (trade != null) {
            if (trade.getPartner() != null) {
                MapleCharacter other = trade.getPartner().getChr();
                other.getTrade().cancel();
                other.setTrade(null);
                other.getClient().getSession().write(MainPacketCreator.serverNotice(5, c.getName() + " 님이 교환 요청을 거절하셨습니다."));
            }
            trade.cancel();
            c.setTrade(null);
        }
    }

    public void setRPS(byte rps) {
        this.rps = rps;
    }

    public byte getPRS() {
        return this.rps;
    }
}
