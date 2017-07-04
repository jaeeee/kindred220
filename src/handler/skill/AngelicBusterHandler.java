/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package handler.skill;

import constants.GameConstants;
import client.MapleClient;
import client.MapleCharacter;
import client.items.Equip;
import client.items.MapleInventoryType;
import packet.creators.MainPacketCreator;
import packet.skills.AngelicBusterSkill;
import packet.transfer.read.ReadingMaple;
import server.maps.MapleMap;

public class AngelicBusterHandler {
    public static void DressUpRequest(final MapleCharacter chr, ReadingMaple rh) {
        int code = rh.readInt();
        switch (code) {
            case 5010093:
                chr.getMap().broadcastMessage(MainPacketCreator.updateCharLook(chr, true));
                chr.getMap().broadcastMessage(AngelicBusterSkill.updateDress(code, chr));
                break;
            case 5010094:
                chr.getMap().broadcastMessage(MainPacketCreator.updateCharLook(chr, true));
                chr.getMap().broadcastMessage(AngelicBusterSkill.updateDress(code, chr));
                break;
        }
    }
    
    public static void DressUpTime(final ReadingMaple rh, MapleCharacter chr) {
        byte type = rh.readByte();
        if (type == 1) {
            if (GameConstants.isAngelicBuster(chr.getJob())) {
                chr.send(AngelicBusterSkill.DressUpTime(type, (short) 7707));
                chr.send(AngelicBusterSkill.DressUpTime(type, (short) -21810));
                chr.getMap().broadcastMessage(MainPacketCreator.updateCharLook(chr, true));
            }
        } else {
            chr.send(MainPacketCreator.resetActions());
            chr.getMap().broadcastMessage(MainPacketCreator.updateCharLook(chr, false));
            return;
        }
    }

    public static void AngelicBusterCoordinate(final MapleClient c, short x, short y) {
    	Equip equip = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(x);
    	equip.setPosition(y);
    	c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).addFromDB(equip);
    	c.getPlayer().getInventory(MapleInventoryType.EQUIP).removeSlot(x);
    	c.getSession().write(MainPacketCreator.moveInventoryItem(MapleInventoryType.EQUIP, x, y, (byte) 2, false, false));
    	c.getPlayer().saveToDB(false, false);
        }     	
    }
