/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package launch.helpers;

import client.items.ISkill;
import client.items.StructPotentialItem;
import client.skills.HyperSkillEntry;
import client.skills.Skill;
import client.skills.SkillFactory;
import static client.skills.SkillFactory.cached;
import client.skills.SummonSkillEntry;
import constants.ServerConstants;
import constants.GameConstants;
import java.awt.Point;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import static launch.Start.START;
import provider.MapleData;
import provider.MapleDataDirectoryEntry;
import provider.MapleDataFileEntry;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.items.MapleProfessionRecipe;
import server.items.MapleProfessionRecipeEntry;
import server.items.CashItemFactory;
import server.items.CashItemInfo;
import server.items.ItemInformation;
import server.items.PotentialOption;
import server.items.StructSetItem;
import server.quest.MapleQuest;
import tools.Pair;
import tools.StringUtil;
import tools.Triple;

public class MapleCacheData extends Thread {
        
    public void startCacheData() {
        LoadSkillData sd = new LoadSkillData();
        LoadItemData1 i1 = new LoadItemData1();
        LoadItemData2 i2 = new LoadItemData2();
        LoadItemData3 i3 = new LoadItemData3();
        LoadCashItemData cd = new LoadCashItemData();
        LoadQuestData lq = new LoadQuestData();
        LoadProfessionRecipeData pd = new LoadProfessionRecipeData();
        sd.start();
        lq.start();
        i1.start();
        i2.start();
        i3.start();
        cd.start();
        pd.start();
    }
}
class LoadQuestData extends Thread {
    @Override
    public void run() {
        cacheQuestData();
    }
    
    public void cacheQuestData() {
        synchronized(MapleQuest.questReady) {
            if (!MapleQuest.questReady) {
                for (MapleData d : MapleQuest.actions.getChildren()) {
                    MapleQuest ret = new MapleQuest();
                    if (MapleQuest.loadQuest(ret, Integer.parseInt(d.getName()))) {
                        MapleQuest.quests.put(Integer.parseInt(d.getName()), ret);
                    }
                }
                MapleQuest.questReady = Boolean.TRUE;
            }
        }
    }
}

class LoadSkillData extends Thread {
    @Override
    public void run() {
        cacheSkillData();
    }
    
    public static boolean isSkill(int i) {
        return (i >= 91000000 && i <= 91000015) || (i >= 91001016 && i <= 91001016);
    }
    
    public static ISkill cacheSkillData() {
        int id = 1;
        ISkill ret = SkillFactory.skills.get(id);
        if (ret != null) {
            return ret;
        }
        if (MapleProfessionRecipe.getInstance().getRecipe(id) != null) { //전문기술
            SkillFactory.lock.lock();
            try {
                ISkill fakeSkill = Skill.loadFromData(id, SkillFactory.datasource.getData("9200.img").getChildByPath("skill/92000000"));
                SkillFactory.skills.put(id, fakeSkill);
                return fakeSkill;
            } finally {
                SkillFactory.lock.unlock();
            }
        }
        int skillid;
        if (!SkillFactory.cached) {
            try {
                MapleData summonData = null; 
                SummonSkillEntry sse;
                HyperSkillEntry hse;
                for (MapleData skillData : SkillFactory.stringDataWZ.getData("Skill.img")) {
                    skillid = Integer.parseInt(skillData.getName());
                    if(!isSkill(skillid)) {
                    MapleData skillData3 = SkillFactory.datasource.getData(StringUtil.getLeftPaddedStr(String.valueOf(skillid / 10000 == 1 ? skillid : skillid / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(skillid), '0', 7));
                    if (skillData3 != null) {
                        summonData = skillData3.getChildByPath("summon/attack1/info");
                        if (summonData == null) {
                            MapleData summonData2 = skillData3.getChildByPath("summon/die/info"); //자폭스킬 (마인 등)
                            if (summonData2 != null) {
                                summonData = summonData2;
                            }
                        }
                        if (summonData != null) {
                            sse = new SummonSkillEntry();
                            sse.type = (byte) MapleDataTool.getInt("type", summonData, 0);
                            sse.mobCount = (byte) MapleDataTool.getInt("mobCount", summonData, 1);
                            sse.attackCount = (byte) MapleDataTool.getInt("attackCount", summonData, 1);
                            
                            if (summonData.getChildByPath("range/lt") != null) {
                                final MapleData ltd = summonData.getChildByPath("range/lt");
                                sse.lt = (Point) ltd.getData();
                                sse.rb = (Point) summonData.getChildByPath("range/rb").getData();
                            } else {
                                sse.lt = new Point(-100, -100);
                                sse.rb = new Point(100, 100);
                            }
                            sse.attackAfter = (short) (MapleDataTool.getInt("effectAfter", summonData, 0) + MapleDataTool.getInt("attackAfter", summonData, 0));
                            for (MapleData effect : summonData) {
                                if (effect.getChildren().size() > 0) {
                                    for (final MapleData effectEntry : effect) {
                                        sse.attackAfter += MapleDataTool.getIntConvert("delay", effectEntry, 0);
                                    }
                                }
                            }
                            MapleData aa = skillData3.getChildByPath("summon/attack1");
                            
                            if (skillData3.getChildByPath("summon/die/info") != null) { //자폭스킬 (마인 등)
                                aa = skillData3.getChildByPath("summon/die");
                            }
                            for (MapleData effect : aa) {
                                sse.attackAfter += MapleDataTool.getIntConvert("delay", effect, 0);
                            }
                            SkillFactory.SummonSkillInformation.put(skillid, sse);
                        }
                        ret = Skill.loadFromData(skillid, skillData3);
                        SkillFactory.skills.put(skillid, ret);
                        }
                    }
                }
            } catch(Exception e) {
                System.out.println(e);
                return null;
            }
            long END = System.currentTimeMillis();
            System.out.println("[알림] 서버 오픈이 정상적으로 완료 되었으며, 소요된 시간은 : " + (END - START) / 1000.0 + "초 입니다."); 
            ServerConstants.hp_skillid_real = ServerConstants.hp_skillid_dummy.split(",");
            SkillFactory.cached = true;
        } else {
           if (SkillFactory.blockSkill.contains(id)) {
               return null;
           }
           MapleData skillData3 = SkillFactory.datasource.getData(StringUtil.getLeftPaddedStr(String.valueOf(id / 10000 == 1 ? id : id / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(id), '0', 7));
            if (skillData3 != null) {
                ret = Skill.loadFromData(id, skillData3);
                SkillFactory.skills.put(id, ret);
            } else {
                SkillFactory.blockSkill.add(id);
            }
        }
        return ret;
    }
}

    /*
     * type - 장비 아이템
     * 0 : 전체
     * 10 : 무기
     * 11 : 무기 제외
     * 20 : 방패
     * 40 : 악세사리
     * 51 : 투구
     * 52 : 상의, 한벌옷
     * 53 : 하의
     * 54 : 장갑
     * 55 : 신발
     */

class LoadItemData1 extends Thread {
    @Override
    public void run() {
        cachePotentialItemData();

    }
    
    public void cachePotentialItemData() {
        final MapleData potsData = ItemInformation.getInstance().itemData.getData("ItemOption.img");
        StructPotentialItem item;
        List<StructPotentialItem> items = null;
        for (MapleData data : potsData) {
            items = new LinkedList<StructPotentialItem>();
            for (MapleData level : data.getChildByPath("level")) {
                item = new StructPotentialItem();
                item.optionType = MapleDataTool.getIntConvert("info/optionType", data, 0);
                item.reqLevel = MapleDataTool.getIntConvert("info/reqLevel", data, 0);
                item.weight = MapleDataTool.getIntConvert("info/weight", data, 0);
                item.string = MapleDataTool.getString("info/string", level, "");
                item.face = MapleDataTool.getString("face", level, "");
                item.boss = MapleDataTool.getIntConvert("boss", level, 0) > 0;
                item.potentialID = Integer.parseInt(data.getName());
                item.attackType = (short) MapleDataTool.getIntConvert("attackType", level, 0);
                item.incMHP = (short) MapleDataTool.getIntConvert("incMHP", level, 0);
                item.incMMP = (short) MapleDataTool.getIntConvert("incMMP", level, 0);
                item.incSTR = (byte) MapleDataTool.getIntConvert("incSTR", level, 0);
                item.incDEX = (byte) MapleDataTool.getIntConvert("incDEX", level, 0);
                item.incINT = (byte) MapleDataTool.getIntConvert("incINT", level, 0);
                item.incLUK = (byte) MapleDataTool.getIntConvert("incLUK", level, 0);
                item.incACC = (byte) MapleDataTool.getIntConvert("incACC", level, 0);
                item.incEVA = (byte) MapleDataTool.getIntConvert("incEVA", level, 0);
                item.incSpeed = (byte) MapleDataTool.getIntConvert("incSpeed", level, 0);
                item.incJump = (byte) MapleDataTool.getIntConvert("incJump", level, 0);
                item.incPAD = (byte) MapleDataTool.getIntConvert("incPAD", level, 0);
                item.incMAD = (byte) MapleDataTool.getIntConvert("incMAD", level, 0);
                item.incPDD = (byte) MapleDataTool.getIntConvert("incPDD", level, 0);
                item.incMDD = (byte) MapleDataTool.getIntConvert("incMDD", level, 0);
                item.prop = (byte) MapleDataTool.getIntConvert("prop", level, 0);
                item.time = (byte) MapleDataTool.getIntConvert("time", level, 0);
                item.incSTRr = (byte) MapleDataTool.getIntConvert("incSTRr", level, 0);
                item.incDEXr = (byte) MapleDataTool.getIntConvert("incDEXr", level, 0);
                item.incINTr = (byte) MapleDataTool.getIntConvert("incINTr", level, 0);
                item.incLUKr = (byte) MapleDataTool.getIntConvert("incLUKr", level, 0);
                item.incMHPr = (byte) MapleDataTool.getIntConvert("incMHPr", level, 0);
                item.incMMPr = (byte) MapleDataTool.getIntConvert("incMMPr", level, 0);
                item.incACCr = (byte) MapleDataTool.getIntConvert("incACCr", level, 0);
                item.incEVAr = (byte) MapleDataTool.getIntConvert("incEVAr", level, 0);
                item.incPADr = (byte) MapleDataTool.getIntConvert("incPADr", level, 0);
                item.incMADr = (byte) MapleDataTool.getIntConvert("incMADr", level, 0);
                item.incPDDr = (byte) MapleDataTool.getIntConvert("incPDDr", level, 0);
                item.incMDDr = (byte) MapleDataTool.getIntConvert("incMDDr", level, 0);
                item.incCr = (byte) MapleDataTool.getIntConvert("incCr", level, 0);
                item.incDAMr = (byte) MapleDataTool.getIntConvert("incDAMr", level, 0);
                item.RecoveryHP = (byte) MapleDataTool.getIntConvert("RecoveryHP", level, 0);
                item.RecoveryMP = (byte) MapleDataTool.getIntConvert("RecoveryMP", level, 0);
                item.HP = (byte) MapleDataTool.getIntConvert("HP", level, 0);
                item.MP = (byte) MapleDataTool.getIntConvert("MP", level, 0);
                item.level = (byte) MapleDataTool.getIntConvert("level", level, 0);
                item.ignoreTargetDEF = (byte) MapleDataTool.getIntConvert("ignoreTargetDEF", level, 0);
                item.ignoreDAM = (byte) MapleDataTool.getIntConvert("ignoreDAM", level, 0);
                item.DAMreflect = (byte) MapleDataTool.getIntConvert("DAMreflect", level, 0);
                item.mpconReduce = (byte) MapleDataTool.getIntConvert("mpconReduce", level, 0);
                item.mpRestore = (byte) MapleDataTool.getIntConvert("mpRestore", level, 0);
                item.incMesoProp = (byte) MapleDataTool.getIntConvert("incMesoProp", level, 0);
                item.incRewardProp = (byte) MapleDataTool.getIntConvert("incRewardProp", level, 0);
                item.incAllskill = (byte) MapleDataTool.getIntConvert("incAllskill", level, 0);
                item.ignoreDAMr = (byte) MapleDataTool.getIntConvert("ignoreDAMr", level, 0);
                item.RecoveryUP = (byte) MapleDataTool.getIntConvert("RecoveryUP", level, 0);
                switch (item.potentialID) {
                    case 31001://쓸만한 헤이스트
                    case 31002://쓸만한 미스틱 도어
                    case 31003://쓸만한 샤프 아이즈
                    case 31004://쓸만한 하이퍼 바디
                        item.skillID = 0;//(short) (item.potentialID - 23001);
                        break;
                    case 41005://쓸만한 컴뱃 오더스
                    case 41006://쓸만한 어드밴스드 블레스
                    case 41007://쓸만한 윈드 부스터
                        item.skillID = 0;//(short) (item.potentialID - 33001);//수정필요
                        break;
                    default:
                        item.skillID = 0;
                        break;
                }
                items.add(item);
            }
            ItemInformation.getInstance().potentialCache.put(Integer.parseInt(data.getName()), items);
        }
    }
}

class LoadItemData2 extends Thread {
    @Override
    public void run() {
        cachePotentialOptionData();
    }
    
    public void cachePotentialOptionData() {
        final MapleData potsData = ItemInformation.getInstance().itemData.getData("ItemOption.img");
        for (MapleData data : potsData) {
            int potentialID = Integer.parseInt(data.getName());
            int type = MapleDataTool.getIntConvert("info/optionType", data, 0);
            int level = 0;
            Map<Integer, List<Integer>> option = new HashMap<Integer, List<Integer>>();
            List<Integer> id = new ArrayList<Integer>(100);
            if (potentialID > 0 && potentialID < 906 || potentialID > 2000 && potentialID < 2906) { //1단계 옵션
                level = 1;
            } else if ((potentialID > 10000 && potentialID < 10292) || (potentialID > 20000 && potentialID < 20015)
                    || (potentialID > 30000 && potentialID < 30015) || (potentialID > 40000 && potentialID < 40015)
                    || (potentialID > 12000 && potentialID < 12802) || (potentialID > 22000 && potentialID < 22015)
                    || (potentialID > 32000 && potentialID < 32015) || (potentialID > 42000 && potentialID < 42015)) { //2단계 옵션
                level = 2;
            } else if ((potentialID > 20040 && potentialID < 20407) || (potentialID > 22040 && potentialID < 22803)) { //3단계 옵션
                level = 3;
            } else if ((potentialID > 30040 && potentialID < 31005) || (potentialID > 32040 && potentialID < 32803)) { //4단계 옵션
                level = 4;
            } else if ((potentialID > 40040 && potentialID < 41007) || (potentialID > 42040 && potentialID < 42803) || potentialID > 60000) { //5단계 옵션
                level = 5;
            }
            if (ItemInformation.getInstance().potentialOpCache.containsKey(level)) {
                if (ItemInformation.getInstance().potentialOpCache.get(level).getPotentialOption().get(type) != null) {
                    id = ItemInformation.getInstance().potentialOpCache.get(level).getPotentialOption().get(type);
                }
                id.add(potentialID);
                ItemInformation.getInstance().potentialOpCache.get(level).getPotentialOption().put(type, id);
            } else {
                id.add(potentialID);
                option.put(type, id);
                ItemInformation.getInstance().potentialOpCache.put(level, new PotentialOption(option));
            }
        }
    }
}

class LoadItemData3 extends Thread {
    @Override
    public void run() {
        cacheEquipOptionData();
    }
    
    public void cacheEquipOptionData() {
        final MapleData setsData = ItemInformation.getInstance().etcData.getData("SetItemInfo.img");
        StructSetItem itemz = null;
        StructSetItem.SetItem itez;
        for (MapleData dat : setsData) {
            itemz = new StructSetItem();
            itemz.setItemID = Integer.parseInt(dat.getName());
            itemz.completeCount = (byte) MapleDataTool.getIntConvert("completeCount", dat, 0);
            for (MapleData level : dat.getChildByPath("Effect")) {
                itez = new StructSetItem.SetItem();
                itez.incPDD = MapleDataTool.getIntConvert("incPDD", level, 0);
                itez.incMDD = MapleDataTool.getIntConvert("incMDD", level, 0);
                itez.incSTR = MapleDataTool.getIntConvert("incSTR", level, 0);
                itez.incDEX = MapleDataTool.getIntConvert("incDEX", level, 0);
                itez.incINT = MapleDataTool.getIntConvert("incINT", level, 0);
                itez.incLUK = MapleDataTool.getIntConvert("incLUK", level, 0);
                itez.incACC = MapleDataTool.getIntConvert("incACC", level, 0);
                itez.incPAD = MapleDataTool.getIntConvert("incPAD", level, 0);
                itez.incMAD = MapleDataTool.getIntConvert("incMAD", level, 0);
                itez.incSpeed = MapleDataTool.getIntConvert("incSpeed", level, 0);
                itez.incMHP = MapleDataTool.getIntConvert("incMHP", level, 0);
                itez.incMMP = MapleDataTool.getIntConvert("incMMP", level, 0);
                itez.incMHPr = MapleDataTool.getIntConvert("incMHPr", level, 0);
                itez.incMMPr = MapleDataTool.getIntConvert("incMMPr", level, 0);
                itez.incAllStat = MapleDataTool.getIntConvert("incAllStat", level, 0);
                itez.option1 = MapleDataTool.getIntConvert("Option/1/option", level, 0);
                itez.option2 = MapleDataTool.getIntConvert("Option/2/option", level, 0);
                itez.option1Level = MapleDataTool.getIntConvert("Option/1/level", level, 0);
                itez.option2Level = MapleDataTool.getIntConvert("Option/2/level", level, 0);
                itemz.items.put(Integer.parseInt(level.getName()), itez);
            }
            ItemInformation.getInstance().setItems.put(itemz.setItemID, itemz);
        }
    }
}


class LoadCashItemData extends Thread {
    @Override
    public void run() {
        cacheCashItemData();
    }
    
    public void cacheCashItemData() {
        int i = 0;
	for (MapleData field : CashItemFactory.getInstance().data.getData("Commodity.img").getChildren()) {
            int itemId = MapleDataTool.getIntConvert("ItemId", field, 0);
	    boolean onSale = itemId > 0;
            int period = 0;
            if (GameConstants.isPet(itemId)) { //펫
                period = MapleDataTool.getIntConvert("life", CashItemFactory.getInstance().petData.getData(itemId + ".img").getChildByPath("info"));
            } else {
                period = MapleDataTool.getIntConvert("Period", field, 0);
            }
	    if (onSale) {
                final CashItemInfo stats = new CashItemInfo(
                MapleDataTool.getIntConvert("ItemId", field),
                MapleDataTool.getIntConvert("Count", field, 1),
                MapleDataTool.getIntConvert("Price", field, 0), period);
                CashItemFactory.getInstance().itemStats.put(MapleDataTool.getIntConvert("SN", field, 0), stats);
	    }
            i++;
	}
    }
}

class LoadProfessionRecipeData extends Thread {
    @Override
    public void run() {
        cacheProfessionRecipeData();
    }
    
    public void cacheProfessionRecipeData() {
        MapleDataProvider skillData = MapleDataProviderFactory.getDataProvider(new File("wz/Skill.wz"));
        MapleDataDirectoryEntry dir = skillData.getRoot();
        List<Pair<Integer, Integer>> recipe = new ArrayList<Pair<Integer, Integer>>();
        List<Triple<Integer, Integer, Integer>> target = new ArrayList<Triple<Integer, Integer, Integer>>();
        for (MapleDataFileEntry file : dir.getFiles()) {
            if (file.getName().startsWith("Recipe_")) {
                MapleData data = skillData.getData(file.getName());
                for (MapleData skill : data.getChildren()) {

                    int reqSkillLevel = MapleDataTool.getInt("reqSkillLevel", skill, 0);
                    int reqSkillProficiency = MapleDataTool.getInt("reqSkillProficiency", skill, 0);
                    int incSkillProficiency = MapleDataTool.getInt("incSkillProficiency", skill, 0);
                    int incFatigability = MapleDataTool.getInt("incFatigability", skill, 0);
                    int needOpenItem = MapleDataTool.getInt("needOpenItem", skill, 0);
                    int period = MapleDataTool.getInt("period", skill, -1);
                    
                    for (MapleData targetData : skill.getChildByPath("target")) {
                        target.add(new Triple<Integer, Integer, Integer>(MapleDataTool.getInt("item", targetData, 0), MapleDataTool.getInt("count", targetData, 0), MapleDataTool.getInt("probWeight", targetData, 100)));
                    }
                    for (MapleData recipeData : skill.getChildByPath("recipe")) {
                        recipe.add(new Pair<Integer, Integer>(MapleDataTool.getInt("item", recipeData, 0), MapleDataTool.getInt("count", recipeData, 0)));
                    }
                    MapleProfessionRecipeEntry entry = new MapleProfessionRecipeEntry(recipe, target, reqSkillLevel, reqSkillProficiency, incSkillProficiency, incFatigability, needOpenItem, period);
                    MapleProfessionRecipe.getInstance().recipes.put(Integer.parseInt(skill.getName()), entry);
                }
            }
        }
    }
}