/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.skills;

import constants.ServerConstants;
import server.items.MapleProfessionRecipe;
import client.items.ISkill;
import java.io.File;
import java.util.HashMap;
import java.util.Map;

import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import tools.StringUtil;
import java.awt.Point;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.locks.ReentrantLock;

public class SkillFactory {

    public static final Map<Integer, ISkill> skills = new HashMap<Integer, ISkill>();
    public static final List<Integer> blockSkill = new LinkedList<Integer>();
    public static final Map<Integer, SummonSkillEntry> SummonSkillInformation = new HashMap<Integer, SummonSkillEntry>();
    public final static MapleData stringData = MapleDataProviderFactory.getDataProvider(new File("wz/String.wz")).getData("Skill.img");
    public static MapleDataProvider datasource = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"));
    public static MapleDataProvider stringDataWZ = MapleDataProviderFactory.getDataProvider(new File("wz/String.wz"));
    public static ReentrantLock lock = new ReentrantLock();
    public static boolean cached = false; // 온오프

    public static ISkill getSkill(int id) {
        ISkill ret = skills.get(id);
        if (ret != null) {
            return ret;
        }
        if (MapleProfessionRecipe.getInstance().getRecipe(id) != null) {
            lock.lock();
            try {
                ISkill fakeSkill = Skill.loadFromData(id, datasource.getData("9200.img").getChildByPath("skill/92000000"));
                skills.put(id, fakeSkill);
                return fakeSkill;
            } finally {
                lock.unlock();
            }
        }

        long now = System.currentTimeMillis();
        int skillid = 1000;
        if (!cached) {
            try {
                MapleData summonData = null;
                SummonSkillEntry sse;
                for (MapleData skillData : stringDataWZ.getData("Skill.img")) {
                    skillid = Integer.parseInt(skillData.getName());
                    if (skillid / 10000 != 001) {
                    MapleData skillData3 = datasource.getData(StringUtil.getLeftPaddedStr(String.valueOf(skillid / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(skillid), '0', 7));
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
                            //sse.range = (short) MapleDataTool.getInt("range/r", summon_data, 0);
                            sse.delay = MapleDataTool.getInt("effectAfter", summonData, 0) + MapleDataTool.getInt("attackAfter", summonData, 0);
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
                            SummonSkillInformation.put(skillid, sse);
                        }
                        ret = Skill.loadFromData(skillid, skillData3);            
                        skills.put(skillid, ret);
                    }
                    }
                }
            } catch (Exception e) {
                if (!ServerConstants.realese) {
                    e.printStackTrace();
                }
                return null;
            }  
            //System.out.println("[캐싱] " + skills.size() + "개 스킬 캐싱");
            cached = true;
        } else {
            if (blockSkill.contains(id)) {
                return null;
            }
            MapleData skillData3 = datasource.getData(StringUtil.getLeftPaddedStr(String.valueOf(id / 10000), '0', 3) + ".img").getChildByPath("skill/" + StringUtil.getLeftPaddedStr(String.valueOf(id), '0', 7));
            if (skillData3 != null) {
                ret = Skill.loadFromData(id, skillData3);
                skills.put(id, ret);
            } else {
                blockSkill.add(id);
            }
        }
        return ret;
    }

    public static final String getSkillName(final int id) {
        if (id == 0) {
            return "평타";
        }
        String strId = Integer.toString(id);
        strId = StringUtil.getLeftPaddedStr(strId, '0', 7);
        MapleData skillroot = stringData.getChildByPath(strId);
        if (skillroot != null) {
            return MapleDataTool.getString(skillroot.getChildByPath("name"), "");
        }
        return null;
    }

     public static final String 스킬설명(final int id,boolean a) {
        if (id == 0) {
            return "평타";
        }
        String strId = Integer.toString(id);
        strId = StringUtil.getLeftPaddedStr(strId, '0', 7);
        MapleData skillroot = stringData.getChildByPath(strId);
        if (skillroot != null) {
            return MapleDataTool.getString(skillroot.getChildByPath(a ? "desc" : "h"), "");
        }
        return null;
    }
    
    public static final SummonSkillEntry getSummonData(final int skillid) {
        return SummonSkillInformation.get(skillid);
    }
}
