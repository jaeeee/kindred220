/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.MapleItempot;
import client.MapleItempotMain;
import client.items.MapleInventoryType;
import client.MapleClient;
import constants.GameConstants;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import tools.RandomStream.Randomizer;

/**
 *
 * @author 4차원
 */
public class ItempotHandler {
    public static void putItempot(ReadingMaple rm, MapleClient c) {
        int itemid = rm.readInt();
        int slot = rm.readInt();
        int targetslot = rm.readInt();
        
        if (targetslot == 0) { // 아이템팟 사용후 메세지
            c.getPlayer().dropMessage(1, "[Y] 키를 누르신 후에 키울 아이템팟을 아무 슬롯에 이동시켜주세요.");
            MapleItempotMain.getInstance().getImp(c.getPlayer().getId(), slot);
            c.send(MainPacketCreator.resetActions()); // 플레이어를 움직일수 있게함
            return;
        }
        
        ItemInformation ii = ItemInformation.getInstance(); // 아이템정보를 불러옴
        MapleItempot imp = new MapleItempot(ii.getImpLifeid(itemid), targetslot, c.getPlayer().getId()); // 쿼리정보를 불러옴
        MapleItempotMain.getInstance().putImp(c.getPlayer().getId(), imp); // 아이템팟을 서버에 추가함
        c.send(MainPacketCreator.showItempotAction(imp, true)); // 아이템팟 패킷을 보냄
        InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, (byte) slot, (short) 1, false); // 아이템팟을 인벤토리에서 삭제
        c.send(MainPacketCreator.resetActions()); // 플레이어를 움직일수 있게함
    }
    
    public static void removeItempot(ReadingMaple rm, MapleClient c) {
        int slot = rm.readInt();
        MapleItempotMain.getInstance().removeImp(c.getPlayer().getId(), slot);
        c.send(MainPacketCreator.showItempotAction(new MapleItempot(0,slot,0,0), false));
        c.send(MainPacketCreator.resetActions());
    }
    
    public static void feedItempot(ReadingMaple rm, MapleClient c) {
        int itemid = rm.readInt();
        int slot = rm.readInt();
        int targetslot = rm.readInt();
        int increaseFullness = (GameConstants.getInventoryType(itemid) == MapleInventoryType.ETC ? 1 : 5);
        int random = Randomizer.nextInt(20);
        MapleItempotMain mib = MapleItempotMain.getInstance();
        MapleItempot imp = mib.getImp(c.getPlayer().getId(), targetslot);
        if (imp.getStatus() == 1 || imp.getStatus() == 2) {
            if (random == 1) {
                increaseFullness *= 2+Randomizer.nextInt(1);
                imp.gainFullness(increaseFullness);
                imp.gainCloseness(1+Randomizer.nextInt(imp.getIncClose()));
                MainPacketCreator.serverNotice(6, "아이템 팟이 좋은 아이템을 먹어 포만감이 크게 증가하고 친밀도가 증가합니다.");
            }
            if (imp.getStatus() == 2) {
                imp.setStatus(1);
                imp.gainFullness(increaseFullness);
                imp.setLastFeedTime(System.currentTimeMillis());
            } else if (imp.getStatus() == 1) {
                if (imp.getIncCloseLeft() > 0) {
                    imp.gainCloseness(1+Randomizer.nextInt(imp.getIncClose()));
                    imp.setIncCloseLeft(imp.getIncCloseLeft()-1);
                    imp.setLastFeedTime(System.currentTimeMillis());
                }
                    imp.gainFullness(increaseFullness);
            }
            
            if (imp.getFullness() >= imp.getMaxFull()) {
                imp.setStatus(3);
                imp.setSleepTime(System.currentTimeMillis() + (21 * 60 * 60 * 1000));
            } 
        }
        c.send(MainPacketCreator.showItempotAction(imp, true));
        InventoryManipulator.removeFromSlot(c, GameConstants.getInventoryType(itemid), (byte) slot, (short) 1, false);
        c.send(MainPacketCreator.resetActions());
    }
    
    public static void cureItempot(ReadingMaple rm, MapleClient c) {
        int itemid = rm.readInt();
        int slot = rm.readInt();
        int targetslot = rm.readInt();
        MapleItempotMain mib = MapleItempotMain.getInstance();
        MapleItempot imp = mib.getImp(c.getPlayer().getId(), targetslot);
        if (imp.getStatus() == 4) {
                imp.gainCloseness(1+Randomizer.nextInt(imp.getIncClose()));
                imp.setLastFeedTime(System.currentTimeMillis());
                if (imp.getFullness() <= 0) {
                    imp.setFullness(0);
                    imp.setStatus(2);
                } else {
                    imp.setStatus(1);
                }
        }
        c.send(MainPacketCreator.showItempotAction(imp, true));
        InventoryManipulator.removeFromSlot(c, GameConstants.getInventoryType(itemid), (byte) slot, (short) 1, false);
        c.send(MainPacketCreator.resetActions());
    }
}
