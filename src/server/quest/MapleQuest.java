/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.quest;

import java.io.File;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import client.MapleCharacter;
import client.MapleQuestStatus;
import scripting.NPCScriptManager;
import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import packet.creators.MainPacketCreator;

public class MapleQuest {

    public static Map<Integer, MapleQuest> quests = new LinkedHashMap<Integer, MapleQuest>();
    protected int id;
    protected List<MapleQuestRequirement> startReqs;
    protected List<MapleQuestRequirement> completeReqs;
    protected List<MapleQuestAction> startActs;
    protected List<MapleQuestAction> completeActs;
    protected Map<Integer, Integer> relevantMobs;
    public boolean autoStart;
    public boolean autoPreComplete;
    public boolean repeatable = false, customend = false;
    public int medalItem = 0;
    public static final MapleDataProvider questData = MapleDataProviderFactory.getDataProvider(new File("wz/Quest.wz"));
    public static final MapleData actions = questData.getData("Act.img");
    public static final MapleData requirements = questData.getData("Check.img");
    public static final MapleData info = questData.getData("QuestInfo.img");
    public static Boolean questReady = Boolean.FALSE;

    public MapleQuest() {
	relevantMobs = new LinkedHashMap<Integer, Integer>();
    }
    
    public static void cacheMapleQuest() {
        synchronized(questReady) {
            if (!questReady) {
                System.out.println("[알림] 퀘스트 데이터 캐싱을 시작합니다.");
               long t = System.currentTimeMillis();
                for (MapleData d : actions.getChildren()) {
                    MapleQuest ret = new MapleQuest();
                    if (loadQuest(ret, Integer.parseInt(d.getName()))) {
                        quests.put(Integer.parseInt(d.getName()), ret);
                    }
                }
                 System.out.println("[알림] 퀘스트 데이터 캐싱이 완료되었습니다. 데이터 : " + quests.size() +" 소요시간 : "+(System.currentTimeMillis() - t)+"ms");
                questReady = Boolean.TRUE;
            }
        }
    }

    /** Creates a new instance of MapleQuest */
    public static boolean loadQuest(MapleQuest ret, int id) {
	ret.id = id;
	ret.relevantMobs = new LinkedHashMap<Integer, Integer>();
	// read reqs
	final MapleData basedata1 = requirements.getChildByPath(String.valueOf(id));
	final MapleData basedata2 = actions.getChildByPath(String.valueOf(id));

	if (basedata1 == null && basedata2 == null) {
	    return false;
	}
	//-------------------------------------------------
	final MapleData startReqData = basedata1.getChildByPath("0");
	ret.startReqs = new LinkedList<MapleQuestRequirement>();
	if (startReqData != null) {
	    for (MapleData startReq : startReqData.getChildren()) {
		final MapleQuestRequirementType type = MapleQuestRequirementType.getByWZName(startReq.getName());
		if (type.equals(MapleQuestRequirementType.interval)) {
		    ret.repeatable = true;
		}
		final MapleQuestRequirement req = new MapleQuestRequirement(ret, type, startReq);
		if (req.getType().equals(MapleQuestRequirementType.mob)) {
		    for (MapleData mob : startReq.getChildren()) {
			ret.relevantMobs.put(
				MapleDataTool.getInt(mob.getChildByPath("id")),
				MapleDataTool.getInt(mob.getChildByPath("count"), 0));
		    }
		}
		ret.startReqs.add(req);
	    }

	}
	//-------------------------------------------------
	final MapleData completeReqData = basedata1.getChildByPath("1");
	if (completeReqData.getChildByPath("endscript") != null) {
	    ret.customend = true;
	}
	ret.completeReqs = new LinkedList<MapleQuestRequirement>();
	if (completeReqData != null) {
	    for (MapleData completeReq : completeReqData.getChildren()) {
		MapleQuestRequirement req = new MapleQuestRequirement(ret, MapleQuestRequirementType.getByWZName(completeReq.getName()), completeReq);
		if (req.getType().equals(MapleQuestRequirementType.mob)) {
		    for (MapleData mob : completeReq.getChildren()) {
			ret.relevantMobs.put(
				MapleDataTool.getInt(mob.getChildByPath("id")),
				MapleDataTool.getInt(mob.getChildByPath("count"), 0));
		    }
		}
		ret.completeReqs.add(req);
	    }
	}
	// read acts
	final MapleData startActData = basedata2.getChildByPath("0");
	ret.startActs = new LinkedList<MapleQuestAction>();
	if (startActData != null) {
	    for (MapleData startAct : startActData.getChildren()) {
		ret.startActs.add(new MapleQuestAction(MapleQuestActionType.getByWZName(startAct.getName()), startAct, ret));
	    }
	}
	final MapleData completeActData = basedata2.getChildByPath("1");
	ret.completeActs = new LinkedList<MapleQuestAction>();

	if (completeActData != null) {
	    for (MapleData completeAct : completeActData.getChildren()) {
		ret.completeActs.add(new MapleQuestAction(MapleQuestActionType.getByWZName(completeAct.getName()), completeAct, ret));
	    }
	}
	final MapleData questInfo = info.getChildByPath(String.valueOf(id));
	ret.autoStart = MapleDataTool.getInt("autoStart", questInfo, 0) == 1;
	ret.autoPreComplete = MapleDataTool.getInt("autoPreComplete", questInfo, 0) == 1;
        ret.medalItem = MapleDataTool.getInt("viewMedalItem", questInfo, 0);

	return true;
    }

    public static MapleQuest getInstance(int id) {
        if (!questReady) {
            cacheMapleQuest();
        }
	MapleQuest ret = quests.get(id);
	if (ret == null) {
	    //ret = new MapleQuest();
	    //if (!loadQuest(ret, id)) {
		ret = new MapleCustomQuest(id);
	    //}
	    quests.put(id, ret);
	}
	return ret;
    }

    public boolean canStart(MapleCharacter c, Integer npcid) {
	if (c.getQuest(this).getStatus() != 0 && !(c.getQuest(this).getStatus() == 2 && repeatable)) {
	    return false;
	}
	for (MapleQuestRequirement r : startReqs) {
	    if (!r.check(c, npcid)) {
		return false;
	    }
	}
	return true;
    }

    public boolean canComplete(MapleCharacter c, Integer npcid) {
	if (c.getQuest(this).getStatus() != 1) {
	    return false;
	}
	for (MapleQuestRequirement r : completeReqs) {
	    if (!r.check(c, npcid)) {
		return false;
	    }
	}
	return true;
    }

    public final void RestoreLostItem(final MapleCharacter c, final int itemid) {
	for (final MapleQuestAction a : startActs) {
	    if (a.RestoreLostItem(c, itemid)) {
		break;
	    }
	}
    }

    public void start(MapleCharacter c, int npc) {
	    for (MapleQuestAction a : startActs) {
		a.runStart(c, null);
	    }
	    if (!customend) {
		final MapleQuestStatus oldStatus = c.getQuest(this);
		final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 1, npc);
		newStatus.setCompletionTime(oldStatus.getCompletionTime());
		newStatus.setForfeited(oldStatus.getForfeited());
		c.updateQuest(newStatus);
	    } else {
		NPCScriptManager.getInstance().endQuest(c.getClient(), npc, getId(), true);
	    }
    }
    
    public void start1(MapleCharacter c, int npc) {
	    for (MapleQuestAction a : startActs) {
		a.runStart(c, null);
	    }
            final MapleQuestStatus oldStatus = c.getQuest(this);
            final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 1, npc);
            newStatus.setCompletionTime(oldStatus.getCompletionTime());
            newStatus.setForfeited(oldStatus.getForfeited());
            c.updateQuest(newStatus);
            System.out.println("QuestFunction");
    }
    
    public void complete(MapleCharacter c, int npc) {
	complete(c, npc, null);
    }
    
    public int getMedalItem() {
        return medalItem;
    }

    public void complete(MapleCharacter c, int npc, Integer selection) {
	if (/*(autoPreComplete || checkNPCOnMap(c, npc)) && canComplete(c, npc)*/true) {
	    for (MapleQuestAction a : completeActs) {
		if (!a.checkEnd(c, selection)) {
		    return;
		}
	    }
	    for (MapleQuestAction a : completeActs) {
		a.runEnd(c, selection);
	    }
	    // we save forfeits only for logging purposes, they shouldn't matter anymore
	    // completion time is set by the constructor
	    final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 2, npc);
	    newStatus.setForfeited(c.getQuest(this).getForfeited());
	    c.updateQuest(newStatus);

	   c.getClient().getSession().write(MainPacketCreator.showSpecialEffect(13)); // Quest completion
	   c.getMap().broadcastMessage(c, MainPacketCreator.showSpecialEffect(c.getId(), 13), false);
	}
    }

    public void forfeit(MapleCharacter c) {
	if (c.getQuest(this).getStatus() != (byte) 1) {
	    return;
	}
	final MapleQuestStatus oldStatus = c.getQuest(this);
	final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 0);
	newStatus.setForfeited(oldStatus.getForfeited() + 1);
	newStatus.setCompletionTime(oldStatus.getCompletionTime());
	c.updateQuest(newStatus);
    }

    public void forceStart(MapleCharacter c, int npc, String customData) {
	final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 1, npc);
	newStatus.setForfeited(c.getQuest(this).getForfeited());
	newStatus.setCustomData(customData);
	c.updateQuest(newStatus);
    }

    public void forceComplete(MapleCharacter c, int npc) {
	final MapleQuestStatus newStatus = new MapleQuestStatus(this, (byte) 2, npc);
	newStatus.setForfeited(c.getQuest(this).getForfeited());
	c.updateQuest(newStatus);
    }

    public int getId() {
	return id;
    }

    public Map<Integer, Integer> getRelevantMobs() {
	return relevantMobs;
    }

    private boolean checkNPCOnMap(MapleCharacter player, int npcid) {
	return player.getMap().containsNPC(npcid) != -1;
    }
}
