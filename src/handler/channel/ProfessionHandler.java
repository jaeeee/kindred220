/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.MapleClient;
import client.MapleCharacter;
import client.MapleProfession;
import client.MapleProfessionType;
import client.items.*;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import client.skills.SkillStats;
import constants.GameConstants;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import server.items.MapleProfessionRecipe;
import server.items.MapleProfessionRecipeEntry;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.maps.MapleExtractor;
import server.maps.MapleMapObjectType;
import tools.CurrentTime;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Triple;
import java.util.List;

/**
 *
 * @author 에반테이르
 */
public class ProfessionHandler {
    public static void startGathering(ReadingMaple rh, MapleClient c) {
        //49 01 AC A0 37 00
        int oid = rh.readInt();
        if (c.getPlayer().getMap().getMapObject(oid) != null) {
            long lastused = ((long) c.getPlayer().getKeyValue2("Gathering_lastUsed") + 8L) * 1000L;
            //c.getPlayer().message(lastused + " / " + System.currentTimeMillis() + " / " + System.currentTimeMillis() / 1000);
            if (lastused > System.currentTimeMillis()) {
                c.getPlayer().message(5, "아직 채집을 할 수 없습니다.");
                return;
            }
            c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showGathering(c.getPlayer().getId(), c.getPlayer().getGatherTool(c.getPlayer().getProfession().getFirstProfession())));
            c.getPlayer().send(MainPacketCreator.startGathering(oid, 11)); // 0x0B
            c.getPlayer().setKeyValue2("Gathering_lastUsed", Integer.valueOf((int) (System.currentTimeMillis() / 1000)));
        } else {
            return;
        }
    }
    
    public static void getProfessionInfo(ReadingMaple rh, MapleClient c) {
        String skillid = rh.readMapleAsciiString();
        int level = rh.readInt();
        int level2 = rh.readInt();
        int rate = 0;
        if (skillid.startsWith("9200") || skillid.startsWith("9201")) {
            rate = 100;
        } else if (skillid.equals("honorLeveling")) { //명성치 퍼센트
            c.send(MainPacketCreator.getProfessionInfo(skillid, level, level2, c.getPlayer().getInnerNextExp()));
            return;
        } else {
            if (!skillid.startsWith("920")) {
                return; //?
            }
            final int skilllevel;
            if (Integer.parseInt(skillid) == c.getPlayer().getProfession().getFirstProfessionSkill()) {
                skilllevel = c.getPlayer().getProfession().getFirstProfessionLevel();
            } else {
                skilllevel = c.getPlayer().getProfession().getSecondProfessionLevel();
            }
            rate = Math.max(0, 100 - ((level + 1) - skilllevel) * 20);
        }
        //E4 00
        //E5 00 A0 01 00 00 10 0E 00 00
        c.send(MainPacketCreator.getProfessionInfo(skillid, level, level2, rate));
    }
    
    public static void professionMakeEffect(ReadingMaple rh, MapleClient c) {
        String effect = rh.readMapleAsciiString();
        int duration = rh.readInt();
        if (duration > 6000 || duration < 3000) {
            duration = 4000;
        }
        int value = rh.readInt();//effect.endsWith("Extract") ? 0 : 1;
        c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.showProfessionMakeEffect(c.getPlayer().getId(), effect, duration, value), false);
        c.send(MainPacketCreator.showOwnProfessionMakeEffect(c.getPlayer().getId(),effect, duration, value));
    }
    
    public static void professionMakeTime(ReadingMaple rh, MapleClient c) {
        int animation = rh.readInt();
        int duration = rh.readInt();
        c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MainPacketCreator.showProfessionMakeSomething(c.getPlayer().getId(), animation, duration), true);
    }
    
    public static void professionMake(ReadingMaple rh, MapleClient c) {
        MapleCharacter chr = c.getPlayer();
        int skillid = rh.readInt();
        
        MapleProfessionRecipeEntry data = MapleProfessionRecipe.getInstance().getRecipe(skillid);
        int profSkill = (skillid / 10000) * 10000;
        MapleProfessionType profType = MapleProfessionType.getProfessionById(profSkill);
        int playerSkillLevel, playerSkillExp, fatigue;
        if (chr.getProfession().getFirstProfession() == profType) {
            playerSkillLevel = chr.getProfession().getFirstProfessionLevel();
            playerSkillExp = chr.getProfession().getFirstProfessionExp();
        } else {
            playerSkillLevel = chr.getProfession().getSecondProfessionLevel();
            playerSkillExp = chr.getProfession().getSecondProfessionExp();
        }
        
        //if (playerSkillLevel < data.getReqSkillLevel()) {
        //    System.err.println("[오류] 전문기술 제작 필요 레벨이 부족합니다.");
        //    return;
        //}
        CraftGrade cg = CraftGrade.GOOD;
        IItem maked = null;
        ItemInformation ii = ItemInformation.getInstance();
        if (skillid == 92049000) { //disassembling
            final int extractorId = rh.readInt();
            final int itemId = rh.readInt();
            final int reqLevel = ii.getReqLevel(itemId);
            final IItem item = chr.getInventory(MapleInventoryType.EQUIP).findById(itemId);
            if (item == null || chr.getInventory(MapleInventoryType.ETC).isFull()) {
                return;
            }
            if (extractorId <= 0 && (playerSkillLevel == 0 || playerSkillLevel < (reqLevel > 130 ? 6 : ((reqLevel - 30) / 20)))) {
                return;
            } else if (extractorId > 0) {
                final MapleCharacter extract = chr.getMap().getCharacterById_InMap(extractorId);
                if (extract == null || extract.getExtractor() == null) {
                    return;
                }
                final MapleExtractor extractor = extract.getExtractor();
                if (extractor.owner != chr.getId()) { //fee
                    if (chr.getMeso() < extractor.fee) {
                        return;
                    }
                    final SkillStatEffect eff = ii.getItemEffect(extractor.itemId);
                    if (eff != null && eff.getSkillStats().getStats("useLevel") < reqLevel) {
                        return;
                    }
                    chr.gainMeso(-extractor.fee, true);
                    final MapleCharacter owner = chr.getMap().getCharacterById_InMap(extractor.owner);
                    if (owner != null && owner.getMeso() < (Integer.MAX_VALUE - extractor.fee)) {
                        owner.gainMeso(extractor.fee, true);
                        owner.Message(6, "분해기 수수료로 "+extractor.fee+"메소를 얻었습니다.");
                    }
                }
            }
            int toGet = 4021016;
            int quantity = (short) Randomizer.rand(3, GameConstants.isWeapon(itemId) || GameConstants.isOverall(itemId) ? 11 : 7);
            if (reqLevel <= 60) {
                toGet = 4021013;
            } else if (reqLevel <= 90) {
                toGet = 4021014;
            } else if (reqLevel <= 120) {
                toGet = 4021015;
            }
            if (quantity <= 5) {
                cg = CraftGrade.SOSO;
            }
            if (Randomizer.isSuccess(20) && toGet != 4021016) {
                toGet++;
                quantity = 1;
                cg = CraftGrade.COOL;
            }
            fatigue = 3;
            InventoryManipulator.addById(c, toGet, (short) quantity, null, null, 0, CurrentTime.getAllCurrentTime()+"에 "+c.getPlayer().getName()+"이(가) 전문기술로 제작한 아이템.");
            InventoryManipulator.removeFromSlot(c, MapleInventoryType.EQUIP, item.getPosition(), (byte) 1, false);
            chr.getProfession().addFatigue(data.getIncFatigability());
            chr.addDiligence(cg.exp);
            chr.getMap().broadcastMessage(chr, MainPacketCreator.showProfessionMakeResult(chr.getId(), skillid, cg.grade, toGet, quantity, 0), true);
        } else if (skillid == 92049001) { //fusing. /mindfuck
            final int itemId = rh.readInt();
            final long invId1 = rh.readLong();
            final long invId2 = rh.readLong();
            final int reqLevel = ii.getReqLevel(itemId);
            Equip item1 = (Equip) chr.getInventory(MapleInventoryType.EQUIP).findById(itemId);
            Equip item2 = (Equip) chr.getInventory(MapleInventoryType.EQUIP).findById(itemId);
            for (short i = 0; i < chr.getInventory(MapleInventoryType.EQUIP).getSlotLimit(); i++) {
                IItem item = chr.getInventory(MapleInventoryType.EQUIP).getItem(i);
                if (item != null && item.getItemId() == itemId && item != item1 && item != item2) {
                    if (item1 == null) {
                        item1 = (Equip) item;
                    } else if (item2 == null) {
                        item2 = (Equip) item;
                        break;
                    }
                }
            }
            if (item1 == null || item2 == null) {
                return;
            }
            if (playerSkillLevel < (reqLevel > 130 ? 6 : ((reqLevel - 30) / 20))) {
                return;
            }
            int potentialChance = (playerSkillLevel * 2);
            if (item1.getState() > 0 && item2.getState() > 0) {
                potentialChance = 100;
            } else if (item1.getState() > 0 || item2.getState() > 0) {
                potentialChance *= 2;
            }
            //use average stats if scrolled.
            Equip newEquip = ii.fuse(item1.getLevel() > 0 ? (Equip) ii.getEquipById(itemId) : item1, item2.getLevel() > 0 ? (Equip) ii.getEquipById(itemId) : item2);
            final int newStat = ii.getTotalStat(newEquip);
            if (newStat > ii.getTotalStat(item1) || newStat > ii.getTotalStat(item2)) {
                cg = CraftGrade.COOL;
            } else if (newStat < ii.getTotalStat(item1) || newStat < ii.getTotalStat(item2)) {
                cg = CraftGrade.SOSO;
            }
            boolean isAcc = GameConstants.isAccessory(newEquip.getItemId());
            if (Randomizer.nextInt(100) < (newEquip.getUpgradeSlots() > 0 || potentialChance >= 100 ? potentialChance : (potentialChance / 2))) {
                newEquip.resetPotential_Fuse(playerSkillLevel > 5, isAcc);
            }
            newEquip.setFlag((short) ItemFlag.CRAFT.getValue());
            newEquip.setOwner(chr.getName());
            int toGet = newEquip.getItemId();
            int exp = (60 - ((playerSkillLevel - 1) * 2));
            fatigue = 3;
            InventoryManipulator.removeFromSlot(c, MapleInventoryType.EQUIP, item1.getPosition(), (byte) 1, false);
            InventoryManipulator.removeFromSlot(c, MapleInventoryType.EQUIP, item2.getPosition(), (byte) 1, false);
            newEquip.setGMLog(CurrentTime.getAllCurrentTime()+"에 "+c.getPlayer().getName()+"이(가) 전문기술로 제작한 아이템.");
            InventoryManipulator.addbyItem(c, newEquip);
            chr.getProfession().addFatigue(data.getIncFatigability());
            chr.addDiligence(cg.exp);
            chr.getMap().broadcastMessage(chr, MainPacketCreator.showProfessionMakeResult(chr.getId(), skillid, cg.grade, toGet, 1, exp), true);
        } else {
            List<Pair<Integer, Integer>> recipes = data.getRecipe();
            List<Triple<Integer, Integer, Integer>> targets = data.getTargets();
            for (Pair<Integer, Integer> p : recipes) {
                if (!chr.haveItem(p.getLeft(), p.getRight(), false, true)) {
                    return;
                }
            }
            fatigue = chr.getProfession().getFatigue();
            if (playerSkillExp < data.getReqSkillProficiency()) {
                System.err.println("[오류] 전문기술 제작 필요 숙련도가 부족합니다.");
                return;
            }
            if (fatigue + data.getIncFatigability() > 200) {
                System.err.println("[오류] 전문기술 제작 필요 피로도가 부족합니다.");
                return;
            }
            if (chr.getSkillLevel(skillid) == 0 && data.getNeedOpenItem() == 1) {
                return;
            }
            for (Pair<Integer, Integer> p : recipes) {
                chr.gainItem(p.getLeft(), (short) -p.getRight().shortValue(), false, -1, "전문기술로 만들어진 아이템");
            }
            if (Randomizer.nextInt(100) < (100 - (data.getReqSkillLevel() - playerSkillLevel) * 20) || ((skillid / 10000) <= 9201)) {
                int rand = Randomizer.nextInt(100);
                Triple<Integer, Integer, Integer> t = null;
                while (true) {
                    t = targets.get(Randomizer.rand(0, targets.size()-1));
                    if (t.getThird() >= rand) {
                        break;
                    } else {
                        rand = Randomizer.nextInt(100);
                    }
                }
                if (GameConstants.isEquip(t.getFirst())) {
                    Equip equip = (Equip) ii.getEquipById(t.getFirst());
                    if (Randomizer.isSuccess(playerSkillLevel * 2)) {
                        equip = ii.randomizeStats(equip, true);
                    }
                    if (profType != MapleProfessionType.ACC) {
                        if (Randomizer.isSuccess(playerSkillLevel * (equip.getUpgradeSlots() > 0 ? 2 : 1))) {
                            equip.setState((byte) (Randomizer.isSuccess(2) ? 2 : 1));
                            if (equip.getState() > 1) {
                                equip.setLines((byte) (Randomizer.nextBoolean() ? 2 : 3));
                            }
                        }
                    }
                    maked = equip;
                    maked.setFlag((short) ItemFlag.CRAFT.getValue());
                    maked.setOwner(c.getPlayer().getName());
                } else {
                    maked = new Item(t.getFirst(), (short) 0, t.getSecond().shortValue(), (short) ItemFlag.KARMA_EQ.getValue());
                }
                cg = CraftGrade.COOL;
                if (data.getPeriod() > -1) {
                    maked.setExpiration(System.currentTimeMillis() + ((long) data.getPeriod() * 60 * 1000));
                }
                maked.setGMLog(CurrentTime.getAllCurrentTime()+" 에 "+skillid+" 기술로 제작됨");
                if (data.getNeedOpenItem() == 1) {
                    chr.changeSkillLevel(SkillFactory.getSkill(skillid), (byte) 0, (byte) 0);
                }
            } else {
                cg = CraftGrade.FAIL;
            }
            int exp = data.getIncSkillProficiency(playerSkillLevel);
            if (data.getIncSkillProficiency(playerSkillLevel) > 0 && playerSkillLevel < 10) {
                if (Randomizer.nextInt(100) < GameConstants.getTraitLevel(chr.getStat().getDiligence()) / 5) {
                    exp *= 2;
                }
                MapleProfession pro = c.getPlayer().getProfession();
                if (profType == pro.getFirstProfession()) {
                    pro.addFirstProfessionExp(exp);
                    c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getFirstProfessionSkill()), (byte) 1, (byte) 10);
                } else if (profType == pro.getSecondProfession()) {
                    pro.addSecondProfessionExp(exp);
                    c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getSecondProfessionSkill()), (byte) 1, (byte) 10);
                }
                if (pro.getFirstProfessionExp() == GameConstants.getProfessionExpNeededForLevel(pro.getFirstProfessionLevel())) {
                    chr.Message(6, MapleProfessionType.getNameByProfession(pro.getFirstProfession())+"의 숙련도가 현재레벨의 최대치가 되었습니다. 레벨업 해주세요.");
                    chr.send(MainPacketCreator.playSound("profession/levelup"));
                } else if (pro.getSecondProfessionExp() == GameConstants.getProfessionExpNeededForLevel(pro.getSecondProfessionLevel())) {
                    chr.Message(6, MapleProfessionType.getNameByProfession(pro.getSecondProfession())+"의 숙련도가 현재레벨의 최대치가 되었습니다. 레벨업 해주세요.");
                    chr.send(MainPacketCreator.playSound("profession/levelup"));
                } else {
                    chr.Message(6, MapleProfessionType.getNameByProfession(profType) + "의 숙련도가 증가하였습니다. (+" + exp + ")");
                }
            } else {
                exp = 0;
            }
            if (maked != null) {
                InventoryManipulator.addFromDrop(c, maked, true);
            }
            chr.getProfession().addFatigue(data.getIncFatigability());
            chr.addDiligence(cg.exp);
            chr.getMap().broadcastMessage(chr, MainPacketCreator.showProfessionMakeResult(chr.getId(), skillid, cg.grade, maked == null ? 0 : maked.getItemId(), maked == null ? 0 : maked.getQuantity(), exp), true);
        }
        c.getPlayer().setKeyValue("LastRecoveredFatigue", System.currentTimeMillis()+"");
    }
    
    public enum CraftGrade {
        FAIL (15, 0),
        SOSO (19, 30),
        GOOD (20, 40),
        COOL (21, 50);
        public int grade, exp;
        private CraftGrade(int grade, int exp) {
            this.grade=grade;
            this.exp = exp;
        }
    }
    
    public static final void spawnExtractor (ReadingMaple rh, MapleClient c) {
        MapleCharacter chr = c.getPlayer();
        if (chr == null || !chr.isAlive() || chr.getMap() == null) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        final int itemId = rh.readInt();
        final int fee = rh.readInt();
        final IItem toUse = chr.getInventory(MapleInventoryType.SETUP).findById(itemId);
        if (toUse == null || toUse.getQuantity() < 1 || itemId / 10000 != 304 || fee <= 0 || chr.getExtractor() != null || !chr.getMap().isTown()) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        chr.setExtractor(new MapleExtractor(chr, itemId, fee, chr.getMap().getFootholds().findMaple(chr.getPosition()).getId())); //no clue about time left
        chr.getMap().spawnExtractor(chr.getExtractor());
    }
    
    public static final void useRecipe(ReadingMaple rh, MapleClient c) {
        rh.skip(4); //tick count
        final short slot = rh.readShort();
        final int itemid = rh.readInt();
        final MapleCharacter chr = c.getPlayer();
        if (chr.getInventory(MapleInventoryType.USE).getItem(slot).getItemId() != itemid) {
            chr.ea();
            System.err.println("[오류] 슬롯에 있는 아이템과 사용한 아이템이 다릅니다.");
            return;
        }
        ItemInformation ii = ItemInformation.getInstance();
        SkillStats spec = ii.getItemEffect(itemid).getSkillStats();
        int recipe = spec.getStats("recipe");
        chr.changeSkillLevel(SkillFactory.getSkill(recipe), (byte) 1, (byte) 1);
        InventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, slot, (short) 1, false, true);
        chr.ea();
    }
    
    public static final void useBag(ReadingMaple rh, MapleClient c) {
        //7F 00 B4 22 B6 0E 03 00 19 12 42 00
        //29 01 00 00 00 00 19 12 42 00 01 00
        MapleCharacter chr = c.getPlayer();
        if (chr == null || !chr.isAlive() || chr.getMap() == null) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        rh.skip(4);
        final short slot = (short) rh.readShort();
        final int itemId = rh.readInt();
        final IItem toUse = chr.getInventory(MapleInventoryType.ETC).getItem(slot);

        if (toUse == null || toUse.getQuantity() < 1 || toUse.getItemId() != itemId || itemId / 10000 != 433) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        boolean firstTime = !chr.getExtendedSlots().contains(toUse.getUniqueId());
        if (firstTime) {
            chr.getExtendedSlots().add(toUse.getUniqueId());
            short flag = toUse.getFlag();
            flag |= ItemFlag.UNTRADEABLE.getValue();
            toUse.setFlag(flag);
//                    c.getPlayer().extendedslots_changed = true;
            c.getSession().write(MainPacketCreator.updateSpecialItemUse(toUse, (byte) 4, true, chr));
        }
        c.getSession().write(MainPacketCreator.openBag(chr.getExtendedSlots().indexOf(toUse.getUniqueId()), itemId, firstTime));
        c.getSession().write(MainPacketCreator.resetActions());
    }
    
    //E3 00 01 CF 7B 05 -> 아이템제작
    
    public static final void SwitchBag(final ReadingMaple slea, final MapleClient c) {
        if (c.getPlayer().hasBlockedInventory()) { //hack
            return;
        }
        slea.readInt();       //c.getPlayer().updateTick(slea.readInt());
        final short src = (short) slea.readInt();                                       //01 00
        final short dst = (short) slea.readInt();                                            //00 00
        if (src < 100 || dst < 100) {
            return;
        }
        InventoryManipulator.move(c, MapleInventoryType.ETC, src, dst);
    }

    
    public static final void MoveBag(final ReadingMaple slea, final MapleClient c) {
        if (c.getPlayer().hasBlockedInventory()) { //hack
            return;
        }
        slea.readInt();       //c.getPlayer().updateTick(slea.readInt());
        final boolean srcFirst = slea.readInt() > 0;
        short dst = (short) slea.readInt();                                       //01 00
        if (slea.readByte() != 4) { //must be etc) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        short src = slea.readShort();                                            //00 00
        InventoryManipulator.move(c, MapleInventoryType.ETC, srcFirst ? dst : src, srcFirst ? src : dst);
    }
}
