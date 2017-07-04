

package handler.skill;
/*
 * YorkDEV Project
 * 최주원 sch2307@nate.com
 * 주니 leejun860@nate.com
 */

import client.MapleClient;
import client.MapleCharacter;
import client.items.Equip;
import client.items.IEquip;
import client.items.MapleInventoryType;
import client.stats.ClothesStats;
import constants.GameConstants;
import handler.channel.InventoryHandler;

import java.awt.Point;
import packet.creators.MainPacketCreator;
import packet.skills.ZeroSkill;
import packet.transfer.read.ReadingMaple;
import tools.RandomStream.Randomizer;

public class ZeroHandler {
    
    private static int type;
    private static int position;
    private static boolean ConfirmTag;
    
    
    public static void ZeroWeaponInfo(final ReadingMaple rh, final MapleClient c) {
        MapleCharacter player = c.getPlayer();
        IEquip alpha;
        alpha = (IEquip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
        Equip ep = (Equip) alpha;
        int action = 1, level = 0, type =0;
        switch (ep.getItemId()) {
            case 1562000:
                type = 1;
                level = 100;
                break;
            case 1562001:
                type = 2;
                level = 110;
                break;
            case 1562002:
                type = 2;
                level = 120;
                break;
            case 1562003:
                type = 2;
                level = 130;
                break;
            case 1562004:
                type = 4;
                level = 140;
                break;
            case 1562005:
                type = 5;
                level = 150;
                break;
            case 15602006:
                type = 6;
                level = 160;
                break;
            case 1562007:
                action = 0;
                type = 0;
                level = 0;
                break;
        }
        if (player.getLevel() < level) {
            action = 0;
        }
        c.send(ZeroSkill.WeaponInfo(type, level, action, ep.getItemId()));
    }
    
    public static void ZeroWeaponLevelUp(final ReadingMaple rh, final MapleClient c) {
        rh.skip(7);
        IEquip beta;
        beta = (IEquip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-10);
        IEquip alpha;
        int betatype = 11;
        int alphatype = 12;
        alpha = (IEquip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem((short)-11);
        Equip nalphatype = (Equip) alpha;
        Equip nbetatype = (Equip) beta;
        nbetatype.setItemId(nbetatype.getItemId()+1);
        nalphatype.setItemId(nalphatype.getItemId()+1);
        if (nbetatype.getItemId() == 1562001) {
            nalphatype.setWatk((short) 100);
            
            nbetatype.setWatk((short) 102);
            nbetatype.setWdef((short) 80);
            nbetatype.setMdef((short) 35);
            nbetatype.addUpgradeSlots((byte) 7);
        } else if (nbetatype.getItemId() == 1562002) {
            nalphatype.addWatk((short) 3); // 103
            
            nbetatype.addWatk((short) 3); // 105
            nbetatype.addWdef((short) 10); // 90
            nbetatype.addMdef((short) 5); // 40
        } else if (nbetatype.getItemId() == 1562003) {
            nalphatype.addWatk((short) 2); // 105
            
            nbetatype.addWatk((short) 2); // 107
            nbetatype.addWdef((short) 10); // 100
            nbetatype.addMdef((short) 5); // 45
        } else if (nbetatype.getItemId() == 1562004) {
            nalphatype.addWatk((short) 7); // 112
            
            nbetatype.addWatk((short) 7); // 114
            nbetatype.addWdef((short) 10); // 110
            nbetatype.addMdef((short) 5); // 50
        } else if (nbetatype.getItemId() == 1562005) {
            nalphatype.addStr((short) 8);
            nalphatype.addDex((short) 4);
            nalphatype.addWatk((short) 5); // 117
            nalphatype.addAcc((short) 50); // 50
            nalphatype.addUpgradeSlots((byte) 1);
            
            nbetatype.addStr((short) 8);
            nbetatype.addDex((short) 4); 
            nbetatype.addWatk((short) 7); // 121
            nbetatype.addWdef((short) 10); // 120
            nbetatype.addMdef((short) 5); // 55
            nbetatype.addAcc((short) 50); // 50
            nbetatype.addUpgradeSlots((byte) 1);
        } else if (nbetatype.getItemId() == 1562006) {
            nalphatype.addStr((short) 27); // 35
            nalphatype.addDex((short) 16); // 20
            nalphatype.addWatk((short) 18); // 135
            nalphatype.addAcc((short) 50); // 100
            
            nbetatype.addStr((short) 27); // 35
            nbetatype.addDex((short) 16);  // 20
            nbetatype.addWatk((short) 18); // 139
            nbetatype.addWdef((short) 10); // 130
            nbetatype.addMdef((short) 5); // 60
            nbetatype.addAcc((short) 50); // 100
        } else if (nbetatype.getItemId() == 1562007) {
            nalphatype.addStr((short) 5); // 40
            nalphatype.addDex((short) 20); // 40
            nalphatype.addWatk((short) 34); // 169
            nalphatype.addAcc((short) 20); // 120
            nalphatype.addBossDamage((byte) 30); // 30
            nalphatype.addIgnoreWdef((short) 10); // 10
            
            nbetatype.addStr((short) 5); // 40
            nbetatype.addDex((short) 20);  // 40
            nbetatype.addWatk((short) 34); // 174
            nbetatype.addWdef((short) 20); // 150
            nbetatype.addMdef((short) 10); // 70
            nbetatype.addAcc((short) 20); // 120
            nbetatype.addBossDamage((byte) 30); // 30
            nbetatype.addIgnoreWdef((short) 10); // 10
        }
        c.send(ZeroSkill.WeaponLevelUp());
        c.send(MainPacketCreator.updateSpecialItemUseT(alpha, (byte)1, c.getPlayer(), alphatype));
        c.send(MainPacketCreator.updateSpecialItemUseT(beta, (byte)1, c.getPlayer(), betatype));
    }
    
    public static void ZeroScroll(final ReadingMaple rh, final MapleClient c) {
        int s_type = rh.readInt();
        type = s_type;
        int pos = rh.readInt();
        position = pos;
        rh.skip(8);
        int s_pos = rh.readInt();
        c.send(ZeroSkill.Scroll(s_pos));
    }
    
    public static void ZeroScrollStart(ReadingMaple rh, MapleCharacter chr, MapleClient c) {
        c.send(ZeroSkill.ScrollStart());

        IEquip equip1 = (IEquip)chr.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -10);
        IEquip equip2 = (IEquip)chr.getInventory(MapleInventoryType.EQUIPPED).getItem((byte) -11);
        Equip nEquip = (Equip)equip1;
        Equip nEquip2 = (Equip)equip2;
        if ((type == 2) && 
          (equip1.getItemId() != 1560000) && 
          (equip2.getItemId() % 1572000 >= 0) && (equip2.getItemId() % 1572000 <= 7)) {
          InventoryHandler.UseUpgradeScroll((byte) position, (byte) nEquip2.getPosition(), c, chr);
        }
    }
    
    public static void ZeroChat(final ReadingMaple rh, final MapleClient c, final String txt) {
        c.send(ZeroSkill.NPCTalk(txt));
    }
    
    public static void ZeroOpen(final ReadingMaple rh, final MapleClient c) {
        int type = rh.readInt();
        byte s_type = rh.readByte();
        if (s_type == 0) {
            rh.skip(1);
            c.send(ZeroSkill.Open(type));
        }
    }
    
    public static void ZeroTag(final ReadingMaple rh, final MapleClient c) {
        MapleCharacter player = c.getPlayer();
        final int RealTimeTF = rh.readInt(); 
        final int ChangeTF = rh.readInt();
        
        /* 해당 조건을 위에서 처리하는 이유 : SpawnPlayerMapObject의 혼동을 막기 위해서. */
        if ((player.getSecondGender() == 0) && (ConfirmTag)) {
            player.setGender((byte) 0);
            player.setSecondGender((byte) 1);
            ConfirmTag = false;
        } else if ((player.getSecondGender() == 1) && (ConfirmTag)) {
            player.setGender((byte) 1);
            player.setSecondGender((byte) 0);
            ConfirmTag = false;
        }
        
        if (player.getGender() == 1 && player.getSecondGender() == 0) { //addPlayerLooks 베타, addPlayerLooksZero 알파 처리.
            player.getMap().broadcastMessage(player, MainPacketCreator.updateCharLook(player, false), player.getPosition());
            player.send(ZeroSkill.ZeroTag(player, (byte) 1));
            player.send(ZeroSkill.genderUpdate()); 
            player.getMap().broadcastMessage(ZeroSkill.MultiTag(player));
            ConfirmTag = true;
        } else if (player.getGender() == 0 && player.getSecondGender() == 1) { //addPlayerLook 알파, addPlayerLooksZero 베타 처리.
            player.getMap().broadcastMessage(player, MainPacketCreator.updateCharLook(player, false), player.getPosition());
            player.send(ZeroSkill.ZeroTag(player, (byte) 0));
            player.send(ZeroSkill.genderUpdate()); 
            player.getMap().broadcastMessage(ZeroSkill.MultiTag(player));
            ConfirmTag = true;
        }
    }
    
    public static void ZeroClothes(int kind, int check, MapleClient c) {
        int value = ClothesStats.getValueByOrder(kind), bc = c.getPlayer().getBetaClothes();
        if (check == 1 && (bc & value) == 0) {
            c.getPlayer().pBetaClothes(value);
        } else if (check == 0 && (bc & value) != 0) { 
            c.getPlayer().mBetaClothes(value);
        } else { 
            //System.out.println("제로 공통 옷 처리 오류" + check + " " + bc + " " + value);
        }
        c.send(ZeroSkill.Clothes(c.getPlayer().getBetaClothes()));
        c.send(ZeroSkill.Reaction());
    }
    
    public static void ZeroShockWave(ReadingMaple rh, MapleClient c) { 
        int skillid = rh.readInt(); 
        if (skillid == 101000101) {
          int delay = rh.readInt();
          rh.skip(4);
          byte direction = rh.readByte();
          Point position = rh.readPos();
          rh.skip(1);
          c.getSession().write(ZeroSkill.shockWave(skillid, delay, direction, position));
        }
    }
}