/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
 * @author 4����
 */
public class ItempotHandler {
    public static void putItempot(ReadingMaple rm, MapleClient c) {
        int itemid = rm.readInt();
        int slot = rm.readInt();
        int targetslot = rm.readInt();
        
        if (targetslot == 0) { // �������� ����� �޼���
            c.getPlayer().dropMessage(1, "[Y] Ű�� ������ �Ŀ� Ű�� ���������� �ƹ� ���Կ� �̵������ּ���.");
            MapleItempotMain.getInstance().getImp(c.getPlayer().getId(), slot);
            c.send(MainPacketCreator.resetActions()); // �÷��̾ �����ϼ� �ְ���
            return;
        }
        
        ItemInformation ii = ItemInformation.getInstance(); // ������������ �ҷ���
        MapleItempot imp = new MapleItempot(ii.getImpLifeid(itemid), targetslot, c.getPlayer().getId()); // ���������� �ҷ���
        MapleItempotMain.getInstance().putImp(c.getPlayer().getId(), imp); // ���������� ������ �߰���
        c.send(MainPacketCreator.showItempotAction(imp, true)); // �������� ��Ŷ�� ����
        InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, (byte) slot, (short) 1, false); // ���������� �κ��丮���� ����
        c.send(MainPacketCreator.resetActions()); // �÷��̾ �����ϼ� �ְ���
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
                MainPacketCreator.serverNotice(6, "������ ���� ���� �������� �Ծ� �������� ũ�� �����ϰ� ģ�е��� �����մϴ�.");
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
