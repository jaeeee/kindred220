/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import java.util.List;
import java.util.LinkedList;
import java.util.ArrayList;
import java.io.File;

import client.MapleClient;
import server.items.ItemInformation;
import tools.Pair;
import tools.StringUtil;

import provider.MapleData;
import provider.MapleDataProvider;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;

public class SearchCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
	if (splitted.length == 1) {
	    c.getPlayer().dropMessage(6, splitted[0] + ": <NPC> <MOB> <ITEM> <MAP> <SKILL>");
	} else {
	    String type = splitted[1];
	    String search = StringUtil.joinStringFrom(splitted, 2);
	    MapleData data = null;
	    MapleDataProvider dataProvider = MapleDataProviderFactory.getDataProvider(new File("wz/String2.wz"));
	    c.getPlayer().dropMessage(6, "<<타입: " + type + " | 검색어: " + search + ">>");

	    if (type.equalsIgnoreCase("NPC")) {
		List<String> retNpcs = new ArrayList<String>();
		data = dataProvider.getData("Npc.img");
		List<Pair<Integer, String>> npcPairList = new LinkedList<Pair<Integer, String>>();
		for (MapleData npcIdData : data.getChildren()) {
		    npcPairList.add(new Pair<Integer, String>(Integer.parseInt(npcIdData.getName()), MapleDataTool.getString(npcIdData.getChildByPath("name"), "NO-NAME")));
		}
		for (Pair<Integer, String> npcPair : npcPairList) {
		    if (npcPair.getRight().toLowerCase().contains(search.toLowerCase())) {
			retNpcs.add(npcPair.getLeft() + " - " + npcPair.getRight());
		    }
		}
		if (retNpcs != null && retNpcs.size() > 0) {
		    for (String singleRetNpc : retNpcs) {
			c.getPlayer().dropMessage(6, singleRetNpc);
		    }
		} else {
		    c.getPlayer().dropMessage(6, "발견된 NPC가 없습니다.");
		}

	    } else if (type.equalsIgnoreCase("MAP")) {
		List<String> retMaps = new ArrayList<String>();
		data = dataProvider.getData("Map.img");
		List<Pair<Integer, String>> mapPairList = new LinkedList<Pair<Integer, String>>();
		for (MapleData mapAreaData : data.getChildren()) {
		    for (MapleData mapIdData : mapAreaData.getChildren()) {
			mapPairList.add(new Pair<Integer, String>(Integer.parseInt(mapIdData.getName()), MapleDataTool.getString(mapIdData.getChildByPath("streetName"), "NO-NAME") + " - " + MapleDataTool.getString(mapIdData.getChildByPath("mapName"), "NO-NAME")));
		    }
		}
		for (Pair<Integer, String> mapPair : mapPairList) {
		    if (mapPair.getRight().toLowerCase().contains(search.toLowerCase())) {
			retMaps.add(mapPair.getLeft() + " - " + mapPair.getRight());
		    }
		}
		if (retMaps != null && retMaps.size() > 0) {
		    for (String singleRetMap : retMaps) {
			c.getPlayer().dropMessage(6, singleRetMap);
		    }
		} else {
		    c.getPlayer().dropMessage(6, "발견된 MAP이 없습니다.");
		}
	    } else if (type.equalsIgnoreCase("MOB")) {
		List<String> retMobs = new ArrayList<String>();
		data = dataProvider.getData("Mob.img");
		List<Pair<Integer, String>> mobPairList = new LinkedList<Pair<Integer, String>>();
		for (MapleData mobIdData : data.getChildren()) {
		    mobPairList.add(new Pair<Integer, String>(Integer.parseInt(mobIdData.getName()), MapleDataTool.getString(mobIdData.getChildByPath("name"), "NO-NAME")));
		}
		for (Pair<Integer, String> mobPair : mobPairList) {
		    if (mobPair.getRight().toLowerCase().contains(search.toLowerCase())) {
			retMobs.add(mobPair.getLeft() + " - " + mobPair.getRight());
		    }
		}
		if (retMobs != null && retMobs.size() > 0) {
		    for (String singleRetMob : retMobs) {
			c.getPlayer().dropMessage(6, singleRetMob);
		    }
		} else {
		    c.getPlayer().dropMessage(6, "발견된 몬스터가 없습니다.");
		}

	    } else if (type.equalsIgnoreCase("REACTOR")) {
		c.getPlayer().dropMessage(6, "NOT ADDED YET");

	    } else if (type.equalsIgnoreCase("item")) {
		List<String> retItems = new ArrayList<String>();
		for (Pair<Integer, String> itemPair : ItemInformation.getInstance().getAllItems()) {
		    if (itemPair.getRight().toLowerCase().contains(search.toLowerCase())) {
			retItems.add(itemPair.getLeft() + " - " + itemPair.getRight());
		    }
		}
		if (retItems != null && retItems.size() > 0) {
		    for (String singleRetItem : retItems) {
			c.getPlayer().dropMessage(6, singleRetItem);
		    }
		} else {
		    c.getPlayer().dropMessage(6, "발견된 ITEM이 없습니다.");
		}

	    } else if (type.equalsIgnoreCase("SKILL")) {
		List<String> retSkills = new ArrayList<String>();
		data = dataProvider.getData("Skill.img");
		List<Pair<Integer, String>> skillPairList = new LinkedList<Pair<Integer, String>>();
		for (MapleData skillIdData : data.getChildren()) {
		    skillPairList.add(new Pair<Integer, String>(Integer.parseInt(skillIdData.getName()), MapleDataTool.getString(skillIdData.getChildByPath("name"), "NO-NAME")));
		}
		for (Pair<Integer, String> skillPair : skillPairList) {
		    if (skillPair.getRight().toLowerCase().contains(search.toLowerCase())) {
			retSkills.add(skillPair.getLeft() + " - " + skillPair.getRight());
		    }
		}
		if (retSkills != null && retSkills.size() > 0) {
		    for (String singleRetSkill : retSkills) {
			c.getPlayer().dropMessage(6, singleRetSkill);
		    }
		} else {
		    c.getPlayer().dropMessage(6, "발견된 SKILL이 없습니다.");
		}
	    } else {
		c.getPlayer().dropMessage(6, "해당 검색은 처리할 수 없습니다.");
	    }
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("search", "<타입> <검색어>", "MAP, ITEM 등의 고유번호ID를 검색합니다.", 2),
		    new CommandDefinition("find", "<타입> <검색어>", "MAP, ITEM 등의 고유번호ID를 검색합니다.", 2)
	};
    }
}