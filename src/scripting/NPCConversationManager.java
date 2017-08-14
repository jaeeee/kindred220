/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package scripting;

import constants.GameConstants;
import constants.programs.HighRanking;
import constants.programs.HighRanking.RankingData;
import constants.programs.MedalRanking;
import constants.programs.MedalRanking.MedalRankHolder;
import client.MapleClient;
import client.MapleKeyBinding;
import client.MapleCharacter;
import client.MaplePet;
import client.MapleProfession;
import client.MapleProfessionType;
import client.items.*;
import client.skills.InnerAbillity;
import client.skills.InnerSkillValueHolder;
import client.skills.SkillEntry;
import client.skills.SkillFactory;
import static client.skills.SkillFactory.stringData;
import client.stats.DiseaseStats;
import client.stats.PlayerStat;
import community.*;
import constants.ServerConstants;
import constants.subclasses.HighRankingType;
import database.MYSQL;
import handler.channel.HiredMerchantHandler;
import handler.channel.InterServerHandler;
import static handler.channel.InventoryHandler.potential;
import handler.duey.DueyHandler;
import java.awt.Point;
import java.io.File;
import launch.ChannelServer;
import launch.LoginServer;
import packet.creators.MainPacketCreator;
import packet.creators.PlayerShopPacket;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import server.maps.AramiaFireWorks;
import server.maps.Event_DojoAgent;
import server.maps.MapleMap;
import server.quest.MapleQuest;
import server.shops.MapleShopFactory;
import tools.Pair;
import tools.RandomStream.Randomizer;
import tools.Timer.EtcTimer;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import launch.world.WorldBroadcasting;
import launch.world.WorldCommunity;
import static launch.world.WorldCommunity.아르미;
import packet.creators.UIPacket;
import provider.MapleData;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import server.life.MobSkillFactory;
import server.maps.MapleMapObject;
import server.maps.MaplePortal;
import server.maps.MapleReactor;
import server.maps.MapleReactorFactory;
import server.maps.MapleReactorStats;
import server.maps.PotSystem;
import tools.StringUtil;

public class NPCConversationManager extends AbstractPlayerInteraction {
	private MapleClient c;
	private int npc, questid;
	private String getText;
	private byte type; // -1 = NPC, 0 = start quest, 1 = end quest
	private String path;
	public boolean pendingDisposal = false;

	public NPCConversationManager(MapleClient c, int npc, int questid, byte type) {
		super(c);
		this.c = c;
		this.npc = npc;
		this.questid = questid;
		this.type = type;
	}

	public String getServerName() {
		return ServerConstants.serverName;
	}

	public int getNpc() {
		return npc;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public static int MAX_REBORNS = 3;

	public int getReborns() {
		return getPlayer().getReborns();
	}

	public int getVPoints() {
		return getPlayer().getVPoints();
	}

	public void gainVPoints(int gainedpoints) {
		c.getPlayer().gainVPoints(gainedpoints);
	}

	public int getNX() {
		return getPlayer().getNX();
	}

	public int getQuest() {
		return questid;
	}

	public void sendNext(String text, int id) {
		if (text.contains("#L")) {
			sendSimple(text);
			return;
		}
		this.c.getSession().write(MainPacketCreator.getNPCTalk(id, (byte) 0, text, "00 01", (byte) 0));
	}

	public EquipWorthCalculator newEWC() {
		return EquipWorthCalculator.ewc();
	}

	public String getWeaponEquip() {
		StringBuilder string = new StringBuilder();
		for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP).list()) {
			if (GameConstants.isWeapon(item.getItemId()))
				string.append("#L" + item.getPosition() + "##i" + item.getItemId() + "##l\r\n");
		}
		return string.toString();
	}

	public String getAllEquip() {
		StringBuilder string = new StringBuilder();
		for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP).list()) {
			string.append("#L" + item.getPosition() + "##i" + item.getItemId() + "##l\r\n");
		}
		return string.toString();
	}

	public String getAllItem() {
		StringBuilder string = new StringBuilder();
		for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP).list()) {
			string.append("#L" + item.getUniqueId() + "##i " + item.getItemId() + "#\r\n");
		}
		return string.toString();
	}

	public Equip getEquip(byte slot) {
		return (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem(slot);
	}

	public void giveBuff(int skill, int level) {
		SkillFactory.getSkill(skill).getEffect(level).applyTo(c.getPlayer());
	}

	public byte getType() {
		return type;
	}

	public void safeDispose() {
		pendingDisposal = true;
	}

	public void dispose() {
		NPCScriptManager.getInstance().dispose(c);
	}

	public void askMapSelection(final String sel) {
		c.getSession().write(MainPacketCreator.getMapSelection(npc, sel));
	}

	public void sendPlaces(String text) {
		getClient().getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0x10, text, "", (byte) 0));
	}

	public void sendNext(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01", (byte) 0));
	}

	public void sendNextS(String text, byte type) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01", type));
	}

	public void sendSimpleS(String text, byte type) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 5, text, "", (byte) type));
	}

	public void sendSimpleS(String text, byte type, int speaker) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 5, text, "", (byte) type, speaker));
	}

	public void sendNextS(String text, byte type, int speaker) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "00 01", type, speaker));
	}

	public void sendPrev(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00", (byte) 0));
	}

	public void sendPrevS(String text, byte type) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00", type));
	}

	public void sendPrevS(String text, byte type, int speaker) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "01 00", type, speaker));
	}

	public void sendNextPrev(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01", (byte) 0));
	}

	public void sendNextPrevS(String text, byte type) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01", type));
	}

	public void sendNextPrevS(String text, byte type, int speaker) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "01 01", type, speaker));
	}

	public void sendOk(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", (byte) 0));
	}

	public void sendSpirit(String text, boolean Simple, int npcid) {
		c.getSession().write(Simple ? MainPacketCreator.newgetNPCTalk(npc, text)
				: MainPacketCreator.NPCTalk(npcid != 0 ? npcid : npc, text));
	}

	public void sendOkS(String text, byte type) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", type));
	}

	public void sendOkS(String text, byte type, int speaker) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 0, text, "00 00", type, speaker));
	}

	public void sendYesNo(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 2, text, "", (byte) 0));
	}

	public void sendYesNoS(String text, byte type) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 2, text, "", type));
	}

	public void sendYesNoS(String text, byte type, int speaker) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 2, text, "", type, speaker));
	}

	public void askAcceptDecline(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 15, text, "", (byte) 0));
	}

	public void askAcceptDeclineNoESC(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 16, text, "", (byte) 0));
	}

	public void askAvatar(String text, int... args) {
		c.getSession().write(MainPacketCreator.getNPCTalkStyle(npc, text, args));
	}

	public void askAvatarZero(String text, int[] fargs, int[] sargs) {
		c.getSession().write(MainPacketCreator.getNPCTalkStyleZero(npc, text, fargs, sargs));
	}

	public void askAvatarAndroid(String text, int... args) {
		c.getSession().write(MainPacketCreator.getNPCTalkStyleAndroid(npc, text, args));
	}

	public void sendSimple(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalk(npc, (byte) 5, text, "", (byte) 0));
	}

	public void sendGetNumber(String text, int def, int min, int max) {
		c.getSession().write(MainPacketCreator.getNPCTalkNum(npc, text, def, min, max));
	}

	public void sendGetText(String text) {
		c.getSession().write(MainPacketCreator.getNPCTalkText(npc, text));
	}

	public void sendStyle(String text, int styles[]) {
		c.getSession().write(MainPacketCreator.getNPCTalkStyle(npc, text, styles));
	}

	public void setGetText(String text) {
		this.getText = text;
	}

	public String getText() {
		return getText;
	}

	public int setRandomAvatar(int ticket, int... args_all) {
		if (!haveItem(ticket)) {
			return -1;
		}
		gainItem(ticket, (short) -1);

		int args = args_all[Randomizer.nextInt(args_all.length)];
		if (args < 100) {
			c.getPlayer().setSkinColor((byte) args);
			c.getPlayer().updateSingleStat(PlayerStat.SKIN, args);
		} else if (args < 30000) {
			c.getPlayer().setFace(args);
			c.getPlayer().updateSingleStat(PlayerStat.FACE, args);
		} else {
			c.getPlayer().setHair(args);
			c.getPlayer().updateSingleStat(PlayerStat.HAIR, args);
		}
		c.getPlayer().equipChanged();
		return 1;
	}

	public int setAvatar(int ticket, int args) {
		if (ticket != 0 && ticket != 4000000) {
			if (!haveItem(ticket)) {
				return -1;
			}
			gainItem(ticket, (short) -1);
		}
		if (args < 100) {
			c.getPlayer().setSkinColor((byte) args);
			c.getPlayer().updateSingleStat(PlayerStat.SKIN, args);
		} else if (args < 30000) {
			c.getPlayer().setFace(args);
			c.getPlayer().updateSingleStat(PlayerStat.FACE, args);
		} else {
			c.getPlayer().setHair(args);
			c.getPlayer().updateSingleStat(PlayerStat.HAIR, args);
		}
		c.getPlayer().equipChanged();
		return 1;
	}

	public void setSkin(byte skinColor) {
		c.getPlayer().setSkinColor(skinColor);
		c.getPlayer().updateSingleStat(PlayerStat.SKIN, skinColor);
		c.getPlayer().equipChanged();
	}

	public void setFace(int faceId) {
		c.getPlayer().setFace(faceId);
		c.getPlayer().updateSingleStat(PlayerStat.FACE, faceId);
		c.getPlayer().equipChanged();
	}

	public void setHair(int hairId) {
		c.getPlayer().setHair(hairId);
		c.getPlayer().updateSingleStat(PlayerStat.HAIR, hairId);
		c.getPlayer().equipChanged();
	}

	public void setFaceAndroid(int faceId) {
		c.getPlayer().getAndroid().setFace(faceId);
		c.getPlayer().updateAndroid();
	}

	public void setHairAndroid(int hairId) {
		c.getPlayer().getAndroid().setHair(hairId);
		c.getPlayer().updateAndroid();
	}

	public void setSkinColorAndroid(int skinId) {
		c.getPlayer().getAndroid().setSkinColor(skinId);
		c.getPlayer().updateAndroid();
	}

	public int getAndroidGender() {
		int itemid = c.getPlayer().getAndroid().getItemId();
		return ItemInformation.getInstance().getAndroidBasicSettings(ItemInformation.getInstance().getAndroid(itemid))
				.getGender();
	}

	public void sendStorage() {
		if (getPlayer().getLevel() < 120) {
			getPlayer().dropMessage(1, "120레벨 이상부터 창고이용이 가능합니다.");
			return;
		}
		c.getPlayer().setConversation(4);
		c.getPlayer().getStorage().send2ndPWChecking(c, npc, false);
		c.getPlayer().ea();
	}

	public void sendCompose() { // Celphis
		try {
			c.getPlayer().setConversation(4);
			c.getPlayer().getStorage().send2ndPWChecking(c, npc, true);
			c.getPlayer().dropMessage(1, "첫번째 장비템을 첫번째 슬롯으로 옮겨주세요");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	public void openShop(int id) {
		MapleShopFactory.getInstance().getShop(id).sendShop(c);
	}

	public void changeJob(int job) {
		c.getPlayer().changeJob(job);
	}

	public void startQuest(int id) {
		MapleQuest.getInstance(id).start(getPlayer(), npc);
	}

	public void completeQuest(int id) {
		MapleQuest.getInstance(id).complete(getPlayer(), npc);
	}

	public void forfeitQuest(int id) {
		MapleQuest.getInstance(id).forfeit(getPlayer());
	}

	public void forceStartQuest() {
		MapleQuest.getInstance(questid).forceStart(getPlayer(), getNpc(), null);
	}

	public void forceStartQuest(int id) {
		MapleQuest.getInstance(id).forceStart(getPlayer(), getNpc(), null);
	}

	public void forceStartQuest(String customData) {
		MapleQuest.getInstance(questid).forceStart(getPlayer(), getNpc(), customData);
	}

	public void forceCompleteQuest() {
		MapleQuest.getInstance(questid).forceComplete(getPlayer(), getNpc());
	}

	public String getQuestCustomData() {
		return c.getPlayer().getQuestNAdd(MapleQuest.getInstance(questid)).getCustomData();
	}

	public void setQuestCustomData(String customData) {
		getPlayer().getQuestNAdd(MapleQuest.getInstance(questid)).setCustomData(customData);
	}

	public String getQuestCustomData(int qid) {
		return c.getPlayer().getQuestNAdd(MapleQuest.getInstance(qid)).getCustomData();
	}

	public void setQuestCustomData(int qid, String customData) {
		getPlayer().getQuestNAdd(MapleQuest.getInstance(qid)).setCustomData(customData);
	}

	public long getMeso() {
		return getPlayer().getMeso();
	}

	public void gainAp(final int amount) {
		c.getPlayer().gainAp(amount);
	}

	public void setAp(final int amount) {
		c.getPlayer().setAp(amount);
	}

	public void ApReset() {
		c.getPlayer().updateSingleStat(PlayerStat.STR, 4);
		c.getPlayer().updateSingleStat(PlayerStat.DEX, 4);
		c.getPlayer().updateSingleStat(PlayerStat.INT, 4);
		c.getPlayer().updateSingleStat(PlayerStat.LUK, 4);
	}

	public void gainSp(final int amount) {
		c.getPlayer().gainSP(amount);
	}

	public void gainMeso(int gain) {
		c.getPlayer().gainMeso(gain, true, false, true);
	}

	public void gainExp(int gain) {
		c.getPlayer().gainExp(gain, true, true, true);
	}

	public void getGMLevel() {
		c.getPlayer().getGMLevel();
	}

	public void expandInventory(byte type, int amt) {
		c.getPlayer().getInventory(MapleInventoryType.getByType(type)).addSlot((byte) 4);
		c.getPlayer().inventoryslot_changed = true;
	}

	public void unequipEverything() {
		MapleInventory equipped = getPlayer().getInventory(MapleInventoryType.EQUIPPED);
		MapleInventory equip = getPlayer().getInventory(MapleInventoryType.EQUIP);
		List<Short> ids = new LinkedList<Short>();
		for (IItem item : equipped.list()) {
			ids.add(item.getPosition());
		}
		for (short id : ids) {
			InventoryManipulator.unequip(getC(), id, equip.getNextFreeSlot());
		}
	}

	public final void clearSkills() {
		Map<ISkill, SkillEntry> skills = getPlayer().getSkills();
		for (Entry<ISkill, SkillEntry> skill : skills.entrySet()) {
			getPlayer().changeSkillLevel(skill.getKey(), (byte) 0, (byte) 0);
		}
	}

	public final boolean isCash(final int itemid) {
		return ItemInformation.getInstance().isCash(itemid);
	}

	public boolean hasSkill(int skillid) {
		ISkill theSkill = SkillFactory.getSkill(skillid);
		if (theSkill != null) {
			return c.getPlayer().getSkillLevel(theSkill) > 0;
		}
		return false;
	}

	public MapleCharacter getChar() {
		return getPlayer();
	}

	public MapleClient getC() {
		return c;
	}

	public void showEffect(boolean broadcast, String effect) {
		if (broadcast) {
			c.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect(effect));
		} else {
			c.getSession().write(MainPacketCreator.showEffect(effect));
		}
	}

	public void playSound(boolean broadcast, String sound) {
		if (broadcast) {
			c.getPlayer().getMap().broadcastMessage(MainPacketCreator.playSound(sound));
		} else {
			c.getSession().write(MainPacketCreator.playSound(sound));
		}
	}

	public void environmentChange(boolean broadcast, String env) {
		if (broadcast) {
			c.getPlayer().getMap().broadcastMessage(MainPacketCreator.environmentChange(env, 2));
		} else {
			c.getSession().write(MainPacketCreator.environmentChange(env, 2));
		}
	}

	public static void MapleStar(MapleCharacter chr) {
		int rank1 = 0;
		int rank2 = 0;
		int i = 0;
		boolean check = false;
		try {
			ResultSet sql = MYSQL.getConnection()
					.prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY fame DESC LIMIT 2")
					.executeQuery();
			while (sql.next()) {
				i++;
				if (i == 1) {
					rank1 = sql.getInt("id");
					check = true;
				} else if (i == 2) {
					rank2 = sql.getInt("id");
				}
			}
			sql.close();
		} catch (SQLException ex) {
			System.out.println("MapleStar 갱신중 오류발생 : " + ex);
		}
		if (check) {
			chr.send(UIPacket.MapleStar(chr.getClient(), chr, chr, rank1, rank2));
		}
	}

	public void ChangeHeadTitle(byte i) {
		if (i == 0) {
			getPlayer()
					.setKeyValue2("HeadTitle",
							Randomizer.isSuccess(50) ? +Randomizer.rand(10000, 90000) + Randomizer.rand(1000, 9000)
									: Randomizer.isSuccess(50) ? Randomizer.rand(1000, 9000)
											: 0 + Randomizer.rand(100, 900) + Randomizer.rand(10, 90)
													+ Randomizer.rand(1, 9));
			List<Integer> num_ = new ArrayList<Integer>();
			int num = getPlayer().getKeyValue2("HaedTitle");
			int aa = num / 10000;
			int bb = num / 1000 - aa * 10;
			int cc = num / 100 - (aa * 100 + bb * 10);
			int dd = num / 10 - (aa * 1000 + bb * 100 + cc * 10);
			int ee = num / 1 - (aa * 10000 + bb * 1000 + cc * 100 + dd * 10);
			num_.add(aa);
			num_.add(bb);
			num_.add(cc);
			num_.add(dd);
			num_.add(ee);
			getPlayer().send(MainPacketCreator.HeadTitle(num_));
			sendOk("유저님의 왕관칭호가 성공적으로 변경되었습니다.\\r\\n#r채널이동을 해야 정상적으로 변경이 완료됩니다.#k");
		} else {
			getPlayer().setKeyValue2("HeadTitle", 000000);
			List<Integer> num_ = new ArrayList<Integer>();
			num_.add(0);
			num_.add(0);
			num_.add(0);
			num_.add(0);
			num_.add(0);
			getPlayer().send(MainPacketCreator.HeadTitle(num_));
			sendOk("유저님의 왕관칭호가 성공적으로 제거되었습니다.\\r\\n#r채널이동을 해야 정상적으로 변경이 완료됩니다.#k");
		}
		getPlayer().getMap().broadcastMessage(MainPacketCreator.removePlayerFromMap(getPlayer().getId()));
		getPlayer().getMap().broadcastMessage(MainPacketCreator.spawnPlayerMapobject(getPlayer()));
	}

	public void sendRebornRank() {
		String chat = "#e환생포인트 랭킹#n\r\n";
		try {
			int index = 0;
			ResultSet rs = MYSQL.getConnection()
					.prepareStatement("SELECT * FROM `characters` order by `reborns` desc limit 10").executeQuery();
			while (rs.next()) {
				index++;
				chat += "\r\n" + index + "위. " + rs.getString("name") + ", 환생 포인트 : " + rs.getInt("reborns");
			}
		} catch (Exception e) {
		}
		sendOk(chat);
	}

	public void updateBuddyCapacity(int capacity) {
		c.getPlayer().setBuddyCapacity(capacity);
	}

	public int getBuddyCapacity() {
		return c.getPlayer().getBuddyCapacity();
	}

	public int partyMembersInMap() {
		int inMap = 0;
		for (MapleCharacter char2 : getPlayer().getMap().getCharacters()) {
			if (char2.getParty() == getPlayer().getParty()) {
				inMap++;
			}
		}
		return inMap;
	}

	public List<MapleCharacter> getPartyMembers() {
		if (getPlayer().getParty() == null) {
			return null;
		}
		List<MapleCharacter> chars = new LinkedList<MapleCharacter>(); // creates
																		// an
																		// empty
																		// array
																		// full
																		// of
																		// shit..
		for (ChannelServer channel : ChannelServer.getAllInstances()) {
			for (MapleCharacter chr : channel.getPartyMembers(getPlayer().getParty())) {
				if (chr != null) { // double check <3
					chars.add(chr);
				}
			}
		}
		return chars;
	}

	public void warpPartyWithExp(int mapId, int exp) {
		MapleMap target = getMap(mapId);
		for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
			MapleCharacter curChar = c.getChannelServer().getPlayerStorage().getCharacterByName(chr.getName());
			if ((curChar.getEventInstance() == null && getPlayer().getEventInstance() == null)
					|| curChar.getEventInstance() == getPlayer().getEventInstance()) {
				curChar.changeMap(target, target.getPortal(0));
				curChar.gainExp(exp, true, false, true);
			}
		}
	}

	public void warpPartyWithExpMeso(int mapId, int exp, int meso) {
		MapleMap target = getMap(mapId);
		for (MaplePartyCharacter chr : getPlayer().getParty().getMembers()) {
			MapleCharacter curChar = c.getChannelServer().getPlayerStorage().getCharacterByName(chr.getName());
			if ((curChar.getEventInstance() == null && getPlayer().getEventInstance() == null)
					|| curChar.getEventInstance() == getPlayer().getEventInstance()) {
				curChar.changeMap(target, target.getPortal(0));
				curChar.gainExp(exp, true, false, true);
				curChar.gainMeso(meso, true);
			}
		}
	}

	public int itemQuantity(int itemid) {
		return getPlayer().getInventory(GameConstants.getInventoryType(itemid)).countById(itemid);
	}

	public int getSkillLevel(int skillid) {
		return getPlayer().getSkillLevel(skillid);
	}

	public void resetReactors() {
		getPlayer().getMap().resetReactors();
	}

	public void genericGuildMessage(int code) {
		c.getSession().write(MainPacketCreator.genericGuildMessage((byte) code));
	}

	public void disbandGuild() {
		final int gid = c.getPlayer().getGuildId();
		if (gid <= 0 || c.getPlayer().getGuildRank() != 1) {
			return;
		}
		ChannelServer.disbandGuild(gid);
	}

	public void doReborn() {
		if (getPlayer().getReborns() < MAX_REBORNS) {
			getPlayer().setReborns(getPlayer().getReborns() + 1);
			List<Pair<PlayerStat, Long>> reborns = new ArrayList<Pair<PlayerStat, Long>>(4);
			getPlayer().setLevel(1);
			getPlayer().setExp(0);
			reborns.add(new Pair<PlayerStat, Long>(PlayerStat.LEVEL, Long.valueOf(1)));
			reborns.add(new Pair<PlayerStat, Long>(PlayerStat.EXP, Long.valueOf(0)));
		} else {
			getPlayer().getClient().getSession()
					.write(MainPacketCreator.serverNotice(6, "You have reached the maximum amount of rebirths!"));
		}
	}

	public void increaseGuildCapacity() {
		if (c.getPlayer().getMeso() < 5000000) {
			c.getSession().write(MainPacketCreator.serverNotice(1, "500만 메소가 충분하지 않습니다."));
			return;
		}
		final int gid = c.getPlayer().getGuildId();
		if (gid <= 0) {
			return;
		}
		ChannelServer.increaseGuildCapacity(gid);
		c.getPlayer().gainMeso(-5000000, true, false, true);
	}

	public boolean createAlliance(String alliancename) {
		MapleParty pt = c.getPlayer().getParty();
		MapleCharacter otherChar = c.getChannelServer().getPlayerStorage()
				.getCharacterById(pt.getMemberByIndex(1).getId());
		if (otherChar == null || otherChar.getId() == c.getPlayer().getId()) {
			return false;
		}
		try {
			return ChannelServer.createAlliance(alliancename, c.getPlayer().getId(), otherChar.getId(),
					c.getPlayer().getGuildId(), otherChar.getGuildId());
		} catch (Exception re) {
			re.printStackTrace();
			return false;
		}
	}

	public boolean addCapacityToAlliance() {
		try {
			final MapleGuild gs = ChannelServer.getGuild(c.getPlayer().getGuildId());
			if (gs != null && c.getPlayer().getGuildRank() == 1 && c.getPlayer().getAllianceRank() == 1) {
				if (ChannelServer.getAllianceLeader(gs.getAllianceId()) == c.getPlayer().getId()
						&& ChannelServer.changeAllianceCapacity(gs.getAllianceId())) {
					gainMeso(-MapleAlliance.CHANGE_CAPACITY_COST);
					return true;
				}
			}
		} catch (Exception re) {
			re.printStackTrace();
		}
		return false;
	}

	public boolean disbandAlliance() {
		try {
			final MapleGuild gs = ChannelServer.getGuild(c.getPlayer().getGuildId());
			if (gs != null && c.getPlayer().getGuildRank() == 1 && c.getPlayer().getAllianceRank() == 1) {
				if (ChannelServer.getAllianceLeader(gs.getAllianceId()) == c.getPlayer().getId()
						&& ChannelServer.disbandAlliance(gs.getAllianceId())) {
					return true;
				}
			}
		} catch (Exception re) {
			re.printStackTrace();
		}
		return false;
	}

	public void displayGuildRanks() {
		c.getSession().write(MainPacketCreator.showGuildRanks(npc, MapleGuildRanking.getInstance().getRank()));
	}

	public boolean removePlayerFromInstance() {
		if (c.getPlayer().getEventInstance() != null) {
			c.getPlayer().getEventInstance().removePlayer(c.getPlayer());
			return true;
		}
		return false;
	}

	public boolean isPlayerInstance() {
		if (c.getPlayer().getEventInstance() != null) {
			return true;
		}
		return false;
	}

	public void changeStat(byte slot, int type, short amount) {
		Equip sel = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIPPED).getItem(slot);
		switch (type) {
		case 0:
			sel.setStr(amount);
			break;
		case 1:
			sel.setDex(amount);
			break;
		case 2:
			sel.setInt(amount);
			break;
		case 3:
			sel.setLuk(amount);
			break;
		case 4:
			sel.setHp(amount);
			break;
		case 5:
			sel.setMp(amount);
			break;
		case 6:
			sel.setWatk(amount);
			break;
		case 7:
			sel.setMatk(amount);
			break;
		case 8:
			sel.setWdef(amount);
			break;
		case 9:
			sel.setMdef(amount);
			break;
		case 10:
			sel.setAcc(amount);
			break;
		case 11:
			sel.setAvoid(amount);
			break;
		case 12:
			sel.setHands(amount);
			break;
		case 13:
			sel.setSpeed(amount);
			break;
		case 14:
			sel.setJump(amount);
			break;
		case 15:
			sel.setUpgradeSlots((byte) amount);
			break;
		case 16:
			sel.setViciousHammer((byte) amount);
			break;
		case 17:
			sel.setLevel((byte) amount);
			break;
		default:
			break;
		}
		c.getPlayer().equipChanged();
	}

	public void giveMerchantMesos() {
		long mesos = 0;
		try {
			Connection con = (Connection) MYSQL.getConnection();
			PreparedStatement ps = (PreparedStatement) con
					.prepareStatement("SELECT * FROM hiredmerchants WHERE merchantid = ?");
			ps.setInt(1, getPlayer().getId());
			ResultSet rs = ps.executeQuery();
			if (!rs.next()) {
				rs.close();
				ps.close();
			} else {
				mesos = rs.getLong("mesos");
			}
			rs.close();
			ps.close();

			ps = (PreparedStatement) con.prepareStatement("UPDATE hiredmerchants SET mesos = 0 WHERE merchantid = ?");
			ps.setInt(1, getPlayer().getId());
			ps.executeUpdate();
			ps.close();

		} catch (SQLException ex) {
			System.err.println("Error gaining mesos in hired merchant" + ex);
		}
		c.getPlayer().gainMeso((int) mesos, true);
	}

	public long getMerchantMesos() {
		long mesos = 0;
		try {
			Connection con = (Connection) MYSQL.getConnection();
			PreparedStatement ps = (PreparedStatement) con
					.prepareStatement("SELECT * FROM hiredmerchants WHERE merchantid = ?");
			ps.setInt(1, getPlayer().getId());
			ResultSet rs = ps.executeQuery();
			if (!rs.next()) {
				rs.close();
				ps.close();
			} else {
				mesos = rs.getLong("mesos");
			}
			rs.close();
			ps.close();
		} catch (SQLException ex) {
			System.err.println("Error gaining mesos in hired merchant" + ex);
		}
		return mesos;
	}

	public void openMerchantItemStore() {
		this.c.getPlayer().setConversation(3);
		HiredMerchantHandler.displayMerch(this.c);
		this.c.getSession().write(MainPacketCreator.resetActions());
	}

	public final int getDojoPoints() {
		return c.getPlayer().getDojo();
	}

	public final int getDojoRecord() {
		return c.getPlayer().getDojoRecord();
	}

	public void setDojoRecord(final boolean reset) {
		c.getPlayer().setDojoRecord(reset);
	}

	public boolean start_DojoAgent(final boolean dojo, final boolean party) {
		if (dojo) {
			return Event_DojoAgent.warpStartDojo(c.getPlayer(), party);
		}
		return Event_DojoAgent.warpStartAgent(c.getPlayer(), party);
	}

	public final short getKegs() {
		return AramiaFireWorks.getInstance().getKegsPercentage();
	}

	public void giveKegs(final int kegs) {
		AramiaFireWorks.getInstance().giveKegs(c.getPlayer(), kegs);
	}

	public final MapleInventory getInventory(byte type) {
		return c.getPlayer().getInventory(MapleInventoryType.getByType(type));
	}

	public void resetStats(final int str, final int dex, final int int_, final int luk) {
		List<Pair<PlayerStat, Long>> stats = new ArrayList<Pair<PlayerStat, Long>>(2);
		final MapleCharacter chr = c.getPlayer();
		int total = chr.getStat().getStr() + chr.getStat().getDex() + chr.getStat().getLuk() + chr.getStat().getInt()
				+ chr.getRemainingAp();

		total -= str;
		chr.getStat().setStr(str);

		total -= dex;
		chr.getStat().setDex(dex);

		total -= int_;
		chr.getStat().setInt(int_);

		total -= luk;
		chr.getStat().setLuk(luk);

		chr.setRemainingAp(total);
		stats.add(new Pair<PlayerStat, Long>(PlayerStat.STR, (long) str));
		stats.add(new Pair<PlayerStat, Long>(PlayerStat.DEX, (long) dex));
		stats.add(new Pair<PlayerStat, Long>(PlayerStat.INT, (long) int_));
		stats.add(new Pair<PlayerStat, Long>(PlayerStat.LUK, (long) luk));
		stats.add(new Pair<PlayerStat, Long>(PlayerStat.AVAILABLEAP, (long) total));
		c.getSession().write(MainPacketCreator.updatePlayerStats(stats, false, c.getPlayer().getJob()));
	}

	public final boolean dropItem(int slot, int invType, int quantity) {
		MapleInventoryType inv = MapleInventoryType.getByType((byte) invType);
		if (inv == null) {
			return false;
		}
		InventoryManipulator.drop(c, inv, (short) slot, (short) quantity);
		return true;
	}

	public void maxStats() {
		List<Pair<PlayerStat, Long>> statup = new ArrayList<Pair<PlayerStat, Long>>(2);

		c.getPlayer().setRemainingAp(0);
		c.getPlayer().setRemainingSp(0);
		c.getPlayer().getStat().setStr(32767);
		c.getPlayer().getStat().setDex(32767);
		c.getPlayer().getStat().setInt(32767);
		c.getPlayer().getStat().setLuk(32767);

		c.getPlayer().getStat().setHp(99999);
		c.getPlayer().getStat().setMp(99999);
		c.getPlayer().getStat().setMaxHp(99999);
		c.getPlayer().getStat().setMaxMp(99999);

		statup.add(new Pair(PlayerStat.STR, Long.valueOf(32767)));
		statup.add(new Pair(PlayerStat.DEX, Long.valueOf(32767)));
		statup.add(new Pair(PlayerStat.LUK, Long.valueOf(32767)));
		statup.add(new Pair(PlayerStat.INT, Long.valueOf(32767)));
		statup.add(new Pair(PlayerStat.HP, Long.valueOf(99999)));
		statup.add(new Pair(PlayerStat.MAXHP, Long.valueOf(99999)));
		statup.add(new Pair(PlayerStat.MP, Long.valueOf(99999)));
		statup.add(new Pair(PlayerStat.MAXMP, Long.valueOf(99999)));
		statup.add(new Pair(PlayerStat.AVAILABLEAP, Long.valueOf(0)));
		statup.add(new Pair(PlayerStat.AVAILABLESP, Long.valueOf(0)));

		c.getSession().write(MainPacketCreator.updatePlayerStats(statup, c.getPlayer().getJob()));
	}

	/// 원정대
	/// 이전버전/////////////////////////////////////////////////////////////////////////
	public MapleSquadLegacy getSquad(String type) {
		return c.getChannelServer().getMapleSquad(type);
	}

	public int getSquadAvailability(String type) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad == null) {
			return -1;
		}
		return squad.getStatus();
	}

	public void registerSquad(String type, int minutes, String startText) {
		final MapleSquadLegacy squad = new MapleSquadLegacy(c.getChannel(), type, c.getPlayer(), minutes * 60 * 1000);
		final MapleMap map = c.getPlayer().getMap();

		map.broadcastMessage(MainPacketCreator.getClock(minutes * 60));
		map.broadcastMessage(MainPacketCreator.serverNotice(6, c.getPlayer().getName() + startText));
		c.getChannelServer().addMapleSquad(squad, type);
	}

	public boolean getSquadList(String type, byte type_) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad == null) {
			return false;
		}
		if (type_ == 0) { // Normal viewing
			sendNext(squad.getSquadMemberString(type_));
		} else if (type_ == 1) { // Squad Leader banning, Check out banned
									// participant
			sendSimple(squad.getSquadMemberString(type_));
		} else if (type_ == 2) {
			if (squad.getBannedMemberSize() > 0) {
				sendSimple(squad.getSquadMemberString(type_));
			} else {
				sendNext(squad.getSquadMemberString(type_));
			}
		}
		return true;
	}

	public byte isSquadLeader(String type) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad == null) {
			return -1;
		} else {
			if (squad.getLeader().getId() == c.getPlayer().getId()) {
				return 1;
			} else {
				return 0;
			}
		}
	}

	public void banMember(String type, int pos) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad != null) {
			squad.banMember(pos);
		}
	}

	public void acceptMember(String type, int pos) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad != null) {
			squad.acceptMember(pos);
		}
	}

	public int addMember(String type, boolean join) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad != null) {
			return squad.addMember(c.getPlayer(), join);
		}
		return -1;
	}

	public byte isSquadMember(String type) {
		final MapleSquadLegacy squad = c.getChannelServer().getMapleSquad(type);
		if (squad == null) {
			return -1;
		} else {
			if (squad.getMembers().contains(c.getPlayer())) {
				return 1;
			} else if (squad.isBanned(c.getPlayer())) {
				return 2;
			} else {
				return 0;
			}
		}
	}

	public String getHighRanking(int type) {
		if (HighRanking.getInstance().getData(type).getRankings().isEmpty()) {
			return "현재 해당하는 랭킹이 없습니다.\r\n\r\n※ 랭킹은 1시간 주기로 업데이트 됩니다.\r\n\r\n";
		}

		String ret = "선택하신 랭킹은 아래와 같습니다.\r\n\r\n※ 랭킹은 1시간 주기로 업데이트 됩니다.\r\n\r\n";
		int i = 1;
		for (RankingData rd : HighRanking.getInstance().getData(type).getRankings()) {
			if (type == HighRankingType.FirstAdvance.getType()) {
				int time = rd.getValue1();
				int min = time / 60;
				int sec = time % 60;
				int left = time % 1000;
				ret += "#e" + i + ". #n#b" + rd.getName() + "#k 클리어시간 : " + min + "분 " + sec + "초 0." + left + "\r\n";
			} else if (type == HighRankingType.SecondAdvance.getType()) {
				int time = rd.getValue1();
				int min = time / 60;
				int sec = time % 60;
				int left = time % 1000;
				ret += "#e" + i + ". #n#b" + rd.getName() + "#k 클리어시간 : " + min + "분 " + sec + "초 0." + left + "\r\n";
			} else if (type == HighRankingType.ThirdAdvance.getType()) {
				int time = rd.getValue1();
				int min = time / 60;
				int sec = time % 60;
				int left = time % 1000;
				ret += "#e" + i + ". #n#b" + rd.getName() + "#k 클리어시간 : " + min + "분 " + sec + "초 남은라이프 : "
						+ rd.getValue2() + " 실패 : " + rd.getValue3() + "\r\n";
			} else if (type == HighRankingType.ForthAdvance.getType()) {
				int time = rd.getValue1();
				int min = time / 60;
				int sec = time % 60;
				int left = time % 1000;
				ret += "#e" + i + ". #n#b" + rd.getName() + "#k 클리어시간 : " + min + "분 " + sec + "초 0." + left + "\r\n";
			}
		}
		return ret;
	}

	public void setProfession(int index, int skill) {
		MapleProfession pro = c.getPlayer().getProfession();
		if (index == 1) {
			pro.setFirstProfession(MapleProfessionType.getProfessionById(skill));
			pro.setFirstProfessionExp(0);
			pro.setFirstProfessionLevel(1);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(skill), (byte) 1, (byte) 10);
		} else if (index == 2) {
			pro.setSecondProfession(MapleProfessionType.getProfessionById(skill));
			pro.setSecondProfessionExp(0);
			pro.setSecondProfessionLevel(1);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(skill), (byte) 1, (byte) 10);
		}
	}

	public void deleteProfession(int index) {
		MapleProfession pro = c.getPlayer().getProfession();
		if (index == 1) {
			pro.setFirstProfessionExp(0);
			pro.setFirstProfessionLevel(0);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getFirstProfessionSkill()), (byte) 0, (byte) 0);
			pro.setFirstProfession(MapleProfessionType.NONE);
		} else if (index == 2) {
			pro.setSecondProfessionExp(0);
			pro.setSecondProfessionLevel(0);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getSecondProfessionSkill()), (byte) 0, (byte) 0);
			pro.setSecondProfession(MapleProfessionType.NONE);
		}
	}

	public void levelUpProfession(int index) {
		MapleProfession pro = c.getPlayer().getProfession();
		if (index == 1) {
			pro.setFirstProfessionExp(0);
			pro.addFirstProfessionLevel(1);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getFirstProfessionSkill()), (byte) 1, (byte) 10);
		} else if (index == 2) {
			pro.setSecondProfessionExp(0);
			pro.addSecondProfessionLevel(1);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(pro.getSecondProfessionSkill()), (byte) 1, (byte) 10);
		}
	}

	public int getProfession(int index) {
		if (index == 1)
			return c.getPlayer().getProfession().getFirstProfessionSkill();
		else if (index == 2)
			return c.getPlayer().getProfession().getSecondProfessionSkill();
		return 0;
	}

	public String printRanking(String type, int limit) {
		int i = 0;
		String ret = "";
		for (MedalRankHolder mrh : MedalRanking.getInstance().getRanks(type)) {
			if (i < limit) {
				ret += "#b#e" + i + ".#n " + mrh.name + " : " + mrh.value + "#k\r\n";
			} else {
				break;
			}
		}
		return ret;
	}

	public void setExpEvent(int rate, int time) {
		final int origin = ChannelServer.getInstance(0).getExpRate();
		long period = time * 1000L;
		for (ChannelServer cserv : ChannelServer.getAllInstances()) {
			cserv.setExpRate(rate);
			cserv.broadcastPacket(MainPacketCreator.getGMText(7, "[이벤트] 경험치 배율 이벤트가 시작되었습니다!"));
		}
		EtcTimer t = EtcTimer.getInstance();
		Runnable r = new Runnable() {
			@Override
			public void run() {
				for (ChannelServer cserv : ChannelServer.getAllInstances()) {
					cserv.setExpRate(origin);
					cserv.broadcastPacket(MainPacketCreator.getGMText(7, "[이벤트] 경험치 배율 이벤트가 종료되었습니다."));
				}
			}
		};
		t.schedule(r, period);
	}

	public void setDropEvent(int rate, int time) {
		final int origin = ChannelServer.getInstance(0).getDropRate();
		long period = time * 1000L;
		for (ChannelServer cserv : ChannelServer.getAllInstances()) {
			cserv.setDropRate(rate);
			cserv.broadcastPacket(MainPacketCreator.getGMText(7, "[이벤트] 드롭 배율 이벤트가 시작되었습니다!"));
		}
		EtcTimer t = EtcTimer.getInstance();
		Runnable r = new Runnable() {
			@Override
			public void run() {
				for (ChannelServer cserv : ChannelServer.getAllInstances()) {
					cserv.setDropRate(origin);
					cserv.broadcastPacket(MainPacketCreator.getGMText(7, "[이벤트] 드롭 배율 이벤트가 종료되었습니다."));
				}
			}
		};
		t.schedule(r, period);
	}

	public void setMesoEvent(int rate, int time) {
		final byte origin = (byte) ChannelServer.getInstance(0).getMesoRate();
		long period = time * 1000L;
		for (ChannelServer cserv : ChannelServer.getAllInstances()) {
			cserv.setMesoRate((byte) rate);
			cserv.broadcastPacket(MainPacketCreator.getGMText(7, "[이벤트] 메소 배율 이벤트가 시작되었습니다!"));
		}
		EtcTimer t = EtcTimer.getInstance();
		Runnable r = new Runnable() {
			@Override
			public void run() {
				for (ChannelServer cserv : ChannelServer.getAllInstances()) {
					cserv.setMesoRate(origin);
					cserv.broadcastPacket(MainPacketCreator.getGMText(7, "[이벤트] 메소 배율 이벤트가 종료되었습니다."));
				}
			}
		};
		t.schedule(r, period);
	}

	public void setTempMessage(String text, int time) {
		final String origin = LoginServer.getInstance().getEventMessage();
		long period = time * 1000L;
		LoginServer.getInstance().setEventMessage(text);
		EtcTimer t = EtcTimer.getInstance();
		Runnable r = new Runnable() {
			@Override
			public void run() {
				LoginServer.getInstance().setEventMessage(origin);
			}
		};
		t.schedule(r, period);
	}

	public void changeMap(int mapid) {
		ChannelServer cserv = c.getChannelServer();
		MapleMap target = null;
		if (c.getPlayer().getEventInstance() != null) {
			target = c.getPlayer().getEventInstance().getMapFactory().getMap(mapid);
		} else {
			target = cserv.getMapFactory().getMap(mapid);
		}

		MaplePortal targetPortal = null;
		if (mapid > 0) {
			try {
				targetPortal = target.getPortal(0);
			} catch (IndexOutOfBoundsException e) {
				// noop, assume the gm didn't know how many portals there are
				c.getPlayer().dropMessage(5, "Invalid portal selected.");
			} catch (NumberFormatException a) {
				// noop, assume that the gm is drunk
			}
		}
		if (targetPortal == null) {
			targetPortal = target.getPortal(0);
		}
		c.getPlayer().changeMap(target, targetPortal);
	}

	public void setName(String name) {
		String[] blocks = { "GM", "요크", "주니", "지훈", "정규" };
		for (String b : blocks)
			if (name.indexOf(b) != -1)
				return;
		for (char c : name.toCharArray()) {
			if (!(c > 'a' && c < 'z') && !(c > '가' && c < '하'))
				return;
		}
		if (!(name.length() > 1))
			return;
		Connection con = MYSQL.getConnection();
		PreparedStatement ps;
		try {
			ps = con.prepareStatement("SELECT * FROM `characters` WHERE `name` = ?");
			ps.setString(1, name);
			if (!ps.executeQuery().next()) {
				getPlayer().setName(name);
				ps = con.prepareStatement("UPDATE `characters` SET `name` = ? WHERE `id` = ?");
				ps.setString(1, name);
				ps.setInt(2, getPlayer().getId());
				ps.executeUpdate();
			}
			ps.close();
			getPlayer().getClient().getSession().close();
		} catch (SQLException ex) {
			System.out.println("닉네임 변경 실패");
		}
	}

	public void setInnerAbility(int level) {
		if (level >= 30) {
			InnerSkillValueHolder isvh = InnerAbillity.getInstance().renewSkill(0, -1);
			c.getPlayer().getInnerSkills().add(isvh);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(isvh.getSkillId()), isvh.getSkillLevel(),
					isvh.getSkillLevel());
		} else if (level >= 60) {
			InnerSkillValueHolder isvh = InnerAbillity.getInstance().renewSkill(Randomizer.rand(0, 2), -1);
			c.getPlayer().getInnerSkills().add(isvh);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(isvh.getSkillId()), isvh.getSkillLevel(),
					isvh.getSkillLevel());
		} else if (level >= 100) {
			InnerSkillValueHolder isvh = InnerAbillity.getInstance().renewSkill(Randomizer.rand(1, 3), -1);
			c.getPlayer().getInnerSkills().add(isvh);
			c.getPlayer().changeSkillLevel(SkillFactory.getSkill(isvh.getSkillId()), isvh.getSkillLevel(),
					isvh.getSkillLevel());
		}
	}

	public void setInnerStats() {
		InnerSkillValueHolder isvh = InnerAbillity.getInstance().renewSkill(0, -1);
		c.getPlayer().getInnerSkills().add(isvh);
		c.getPlayer().changeSkillLevel(SkillFactory.getSkill(isvh.getSkillId()), isvh.getSkillLevel(),
				isvh.getSkillLevel());
//		c.getPlayer().send(MainPacketCreator.getPlayerInfo(c.getPlayer()));
//		MapleMap currentMap = c.getPlayer().getMap();
//		currentMap.removePlayer(c.getPlayer());
//		currentMap.addPlayer(c.getPlayer());
	}

	public void invitedRPS() {
		if (c.getPlayer().getKeyValue2("RPS") != 0) {
			MapleCharacter ochr = c.getPlayer().getMap().getCharacterById_InMap(c.getPlayer().getKeyValue2("RPSOTHER"));
			if (ochr.getMeso() >= c.getPlayer().getKeyValue2("RPS")) {
				ochr.setKeyValue2("RPS", c.getPlayer().getKeyValue2("RPS"));
				ochr.setKeyValue2("RPSOTHER", c.getPlayer().getId());
				NPCScriptManager.getInstance().start(ochr.getClient(), 2100, "RPSACCEPT");
			} else {
				c.getPlayer().dropMessage(1, "상대방 메소가 부족합니다.");
			}
		} else {
			c.getPlayer().dropMessage(1, "메소가 설정되지 않았습니다.");
		}

	}

	public void acceptRPS() {
		MapleCharacter ochr = c.getPlayer().getMap().getCharacterById_InMap(c.getPlayer().getKeyValue2("RPSOTHER"));
		MapleUserTrade.inviteTrade(ochr, c.getPlayer(), false);
	}

	public void openCS() {
		InterServerHandler.EnterCS(c, c.getPlayer(), false);
	}

	public String MakeGuildPot() {
		try {
			boolean isExist = false;
			MapleReactor react = null;
			if (PotSystem.getPotId(getPlayer().getGuildId()) != 0) {
				return "이미 설치되있습니다.";
			}
			for (final MapleMapObject remo : getPlayer().getMap().getAllReactor()) {
				react = (MapleReactor) remo;
				if (react.getGuildid() == 0) {
					continue;
				} else if ((react.getPosition().getX() - 100 < getPlayer().getPosition().getX()
						&& react.getPosition().getX() + 100 > getPlayer().getPosition().getX())
						&& (react.getPosition().getY() - 50 < getPlayer().getPosition().getY()
								&& react.getPosition().getY() + 50 > getPlayer().getPosition().getY())) {
					isExist = true;
					return "타 길드 분재랑은 겹치지 못합니다.";
				}

			}

			if (!isExist) {
				int[] rids = { 100000, 100002 };
				int randrid = rids[Randomizer.rand(0, 1)];
				final MapleReactorStats stats = MapleReactorFactory.getReactor(randrid);
				final MapleReactor myReactor = new MapleReactor(stats, randrid, getPlayer().getGuildId());
				stats.setFacingDirection((byte) 0);
				myReactor.setPosition(c.getPlayer().getPosition());
				myReactor.setDelay(0);
				myReactor.setState((byte) 0);
				myReactor.setName(getPlayer().getGuild().getName());
				PotSystem.addPot(getPlayer().getGuildId(), myReactor.getReactorId(), 0);
				c.getPlayer().getMap().spawnReactor(myReactor);

				Connection con = MYSQL.getConnection();
				PreparedStatement ps = con
						.prepareStatement("INSERT INTO pots (rid,`name`,x,y,gid,channel) VALUES ( ?, ?, ?, ?,?,?)");
				ps.setInt(1, myReactor.getReactorId());
				ps.setString(2, getPlayer().getGuild().getName());
				ps.setInt(3, myReactor.getPosition().x);
				ps.setInt(4, myReactor.getPosition().y);
				ps.setInt(5, getPlayer().getGuildId());
				ps.setInt(6, getClient().getChannel());
				ps.executeUpdate();
				return "성공적으로 설치되었습니다.";
			}
			return "설치에 실패하셨습니다.";
		} catch (Exception ex) {
			ex.printStackTrace();
			return "오류가 발생하여 설치하지 못했습니다.";
		}
	}

	public int getRC() {
		return getPlayer().getRC();
	}

	public void setRC(int rc) {
		getPlayer().gainRC(rc - getRC());
	}

	public void startCatch() {
		final int MaxCatchSize = (getMap().getCharactersSize() / 5) * 2;
		int CatchSize = 0;
		String CatchingName = "", CatchingName2 = "";

		MapleMap map = ChannelServer.getInstance(getClient().getChannel()).getMapFactory().getMap(109090300);
		map.stopCatch();
		List<MapleCharacter> players = new ArrayList<MapleCharacter>();
		players.addAll(getMap().getCharacters());
		Collections.addAll(players);
		Collections.shuffle(players);
		for (MapleCharacter chr : players) {
			chr.cancelAllBuffs();
			if (MaxCatchSize > CatchSize) {
				chr.isCatching = true;
				chr.isCatched = false;
				chr.changeMap(map, new Point(875, -453));
				CatchingName += chr.getName() + ",";
				CatchingName2 += chr.getName() + "\r\n";
				CatchSize++;
				chr.giveDebuff(DiseaseStats.STUN, MobSkillFactory.getMobSkill(123, 1));
			} else {
				chr.isCatched = true;
				chr.isCatching = false;
				chr.changeMap(map, new Point(-592, -451));
			}
		}

		map.broadcastMessage(MainPacketCreator.serverNotice(1, "[술래 목록]\r\n" + CatchingName2));
		map.broadcastMessage(MainPacketCreator.serverNotice(6, "[술래 목록] " + CatchingName));
		map.startCatch();
	}

	public void gainSponserItem(int item, final String name, short allstat, short damage, byte upgradeslot) {
		if (GameConstants.isEquip(item)) {
			Equip Item = (Equip) ItemInformation.getInstance().getEquipById(item);
			Item.setOwner(name);
			Item.setStr(allstat);
			Item.setDex(allstat);
			Item.setInt(allstat);
			Item.setLuk(allstat);
			Item.setWatk(damage);
			Item.setMatk(damage);
			Item.setUpgradeSlots(upgradeslot);
			InventoryManipulator.addFromDrop(c, Item, false);
		} else {
			gainItem(item, allstat, damage);
		}
	}

	public void gainPotentialItem(int item, int quantity, byte grade, byte thing, int potential1, int potential2,
			int potential3) {
		if (GameConstants.isEquip(item)) {
			Equip Item = (Equip) ItemInformation.getInstance().getEquipById(item);
			Item.setLines(grade);
			Item.setState(thing);
			Item.setPotential1(potential1);
			Item.setPotential2(potential2);
			Item.setPotential3(potential3);
			InventoryManipulator.addFromDrop(c, Item, false);
		}
	}

	public String getHyperSkills(byte type) {
		MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"))
				.getData(StringUtil.getLeftPaddedStr("" + (getPlayer().getJob() == 2218 ? 2217 : getPlayer().getJob()),
						'0', 3) + ".img");
		int skillid = 0;
		String Lists = "";
		for (MapleData skill : data) {
			if (skill != null) {
				for (MapleData skillId : skill.getChildren()) {
					if (!skillId.getName().equals("icon")) {
						if (MapleDataTool.getIntConvert("hyper", skillId, 120) == type) {
							if ((MapleDataTool.getIntConvert("reqLev", skillId, 0) <= getPlayer().getLevel())
									|| (getPlayer().getReborns() > 50 && getPlayer().getLevel() >= 140)) {
								skillid = Integer.parseInt(skillId.getName());
								if (getPlayer().getSkillLevel(skillid) == 0) {
									Lists += "#L" + skillid + "##s" + skillid + "# #q" + skillid + "##l\r\n";
								}
							}
						}
					}
				}
			}
		}
		return Lists;
	}

	public String giveHyperSp() {
		boolean reborn = getPlayer().getReborns() > 50;
		if (getPlayer().getLevel() >= 140) {
			if ((!reborn && getPlayer().getKeyValue2("hyper140") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper140") != 2)) {
				getPlayer().setKeyValue2("hyper140", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper1", getPlayer().getKeyValue2("hyper1") + 1);
				getPlayer().setKeyValue2("hyper2", getPlayer().getKeyValue2("hyper2") + 1);
			}
		}
		if (getPlayer().getLevel() >= 150) {
			if ((!reborn && getPlayer().getKeyValue2("hyper150") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper150") != 2)) {
				getPlayer().setKeyValue2("hyper150", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper1", getPlayer().getKeyValue2("hyper1") + 1);
				getPlayer().setKeyValue2("hyper3", getPlayer().getKeyValue2("hyper3") + 1);
			}
		}
		if (getPlayer().getLevel() >= 160) {
			if ((!reborn && getPlayer().getKeyValue2("hyper160") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper160") != 2)) {
				getPlayer().setKeyValue2("hyper160", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper1", getPlayer().getKeyValue2("hyper1") + 1);
				getPlayer().setKeyValue2("hyper2", getPlayer().getKeyValue2("hyper2") + 1);
			}
		}
		if (getPlayer().getLevel() >= 170) {
			if ((!reborn && getPlayer().getKeyValue2("hyper170") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper170") != 2)) {
				getPlayer().setKeyValue2("hyper170", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper1", getPlayer().getKeyValue2("hyper1") + 1);
				getPlayer().setKeyValue2("hyper3", getPlayer().getKeyValue2("hyper3") + 1);
			}
		}
		if (getPlayer().getLevel() >= 180) {
			if ((!reborn && getPlayer().getKeyValue2("hyper180") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper180") != 2)) {
				getPlayer().setKeyValue2("hyper180", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper2", getPlayer().getKeyValue2("hyper3") + 1);
			}
		}
		if (getPlayer().getLevel() >= 190) {
			if ((!reborn && getPlayer().getKeyValue2("hyper190") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper190") != 2)) {
				getPlayer().setKeyValue2("hyper190", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper1", getPlayer().getKeyValue2("hyper1") + 1);
				getPlayer().setKeyValue2("hyper2", getPlayer().getKeyValue2("hyper2") + 1);
			}
		}
		if (getPlayer().getLevel() >= 200) {
			if ((!reborn && getPlayer().getKeyValue2("hyper200") != 1)
					|| (reborn && getPlayer().getKeyValue2("hyper200") != 2)) {
				getPlayer().setKeyValue2("hyper200", reborn ? 2 : 1);
				getPlayer().setKeyValue2("hyper1", getPlayer().getKeyValue2("hyper1") + 1);
				getPlayer().setKeyValue2("hyper2", getPlayer().getKeyValue2("hyper2") + 1);
				getPlayer().setKeyValue2("hyper3", getPlayer().getKeyValue2("hyper3") + 1);
			}
		}
		getPlayer().setKeyValue2("hyper", 1);
		return "성공적으로 하이퍼 스킬 SP가 지급되었습니다.";
	}

	public static void 아이템별명(MapleCharacter player, byte pos, final String name) {
		MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
		Equip eq = (Equip) equip.getItem(pos);
		eq.setOwner(name);
	}

	public static String ItemList(MapleClient c, String error) {
		boolean a = false;
		StringBuilder str = new StringBuilder();
		MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
		List<String> stra = new LinkedList<String>();
		for (IItem item : equip.list()) {
			stra.add("#L" + item.getPosition() + "##v" + item.getItemId() + "##l\r\n");
			a = true;
		}
		if (!a) {
			stra.add(error);
			NPCScriptManager.getInstance().dispose(c);
		}
		for (String strb : stra) {
			str.append(strb);
		}
		return str.toString();
	}

	public void setMistic(boolean a) {
		getPlayer().getMap().setMistic(a);
	}

	public boolean getMistic() {
		return getPlayer().getMap().getMistic();
	}

	public String 마스터리북() {
		MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"))
				.getData(StringUtil.getLeftPaddedStr("" + getJob(), '0', 3) + ".img");
		int a = 0;
		StringBuilder str = new StringBuilder();
		for (MapleData skill : data) {
			if (skill != null) {
				for (MapleData skillId : skill.getChildren()) {
					if (!skillId.getName().equals("icon")) {
						byte maxlevel = (byte) MapleDataTool.getIntConvert("maxLevel", skillId.getChildByPath("common"),
								0);
						if (MapleDataTool.getIntConvert("invisible", skillId, 0) == 0
								&& !(MapleDataTool.getIntConvert("reqLev", skillId, 0) > 0)
								&& Integer.parseInt(skillId.getName()) != 12110025
								&& Integer.parseInt(skillId.getName()) != 12101022) {
							try {
								if (getPlayer().getSkillLevel(Integer.parseInt(skillId.getName())) < maxlevel) {
									a++;
									str.append("#L" + Integer.parseInt(skillId.getName()) + "# #s"
											+ Integer.parseInt(skillId.getName()) + "# #fn돋움##fs14##e#q"
											+ Integer.parseInt(skillId.getName()) + "##n#fs##fn##l\r\n");
								}
							} catch (NumberFormatException e) {
								continue;
							}
						}
					}
				}
			}
		}
		if (a == 0) {
			str.append("#fn돋움##fs14##e더이상 마스터할 스킬이 없습니다.#n#fs##fn#\r\n");
		}
		return str.toString();
	}

	public String SoulItemList(MapleClient c, String b) {
		boolean a = false;
		String end;
		StringBuilder str = new StringBuilder();
		MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
		List<String> stra = new LinkedList<String>();
		for (IItem item : equip.list()) {
			Equip eq = (Equip) equip.getItem(item.getPosition());
			if (eq.getSoulEnchanter() != 0) {
				stra.add("#b#L" + item.getPosition() + "##i" + item.getItemId() + "##t" + item.getItemId() + "##l\r\n");
				a = true;
			}
		}
		if (a) {
			for (String strb : stra) {
				str.append(strb);
			}
			end = b + "\r\n\r\n#b" + str;
			return end;
		} else {
			StringBuilder str1 = new StringBuilder();
			str1.append("소울을 감정할 아이템이 존재하지 않습니다.");
			return str1.toString();
		}
	}

	public String SoulItem(byte pos, boolean a) {
		MapleInventory equip = getPlayer().getInventory(MapleInventoryType.EQUIP);
		Equip eq = (Equip) equip.getItem(pos);
		if (a) {
			return "" + eq.getSoulSkill();
		} else {
			return "" + eq.getSoulEnchanter();
		}
	}

	public String getSoulSkillName(int i) {
		return SkillFactory.getSkillName(i);
	}

	public String 스킬설명(final int id, boolean a) {
		String strId = Integer.toString(id);
		strId = StringUtil.getLeftPaddedStr(strId, '0', 7);
		MapleData skillroot = stringData.getChildByPath(strId);
		if (skillroot != null) {
			return MapleDataTool.getString(skillroot.getChildByPath(a ? "desc" : "h"), "");
		}
		return null;
	}

	public int getTheSidTower(int i) {
		return GameConstants.getTheSidTower(i);
	}

	public int getTheSidMap(int i) {
		return GameConstants.getTheSidMap(i);
	}

	public void showMessage(String txt) {
		getPlayer().send(MainPacketCreator.showMessage(txt));
	}

	public void openDuey(boolean item) {
		if (getPlayer().getLevel() >= 120) {
			getPlayer().send(DueyHandler.sendDuey(item ? 10 : 9, getPlayer().getName()));
		} else {
			getPlayer().dropMessage(1, "레벨 120 이상부터 사용이 가능 합니다.");
			getPlayer().ea();
		}
	}

	public void BuyPET(int Petitem) {
		int uniqueid = Petitem;
		Item itemr = new Item(Petitem, (short) 1, (short) 1, (short) 0);
		itemr.setExpiration(2475606994921L);
		final MaplePet pet = MaplePet.createPet(Petitem, itemr.getExpiration());
		itemr.setPet(pet);
		itemr.setUniqueId(pet.getUniqueId());
		InventoryManipulator.addbyItem(c, itemr);
		InventoryManipulator.addFromDrop(getClient(), itemr, false);
	}

	public void 돌림판추가(int itemid, int num) {
		try {
			Connection con = MYSQL.getConnection();
			PreparedStatement ps = null;
			String query = "INSERT into `rolling` (`itemid`, `num`, `check`) VALUES ('";
			query = new StringBuilder().append(query).append(itemid).toString();
			query = new StringBuilder().append(query).append("', '").toString();
			query = new StringBuilder().append(query).append(num).toString();
			query = new StringBuilder().append(query).append("', '").toString();
			query = new StringBuilder().append(query).append(1).toString();
			query = new StringBuilder().append(query).append("')").toString();
			ps = con.prepareStatement(query);
			ps.executeUpdate();
			ps.close();
		} catch (SQLException ex) {
			System.out.println(ex);
		}
	}

	public int 엠블렘() {
		int itemid[] = { 1182000, 1182001, 1182002, 1182003, 1182005, 1182006, 1182007, 1182009, 1182010, 1182011,
				1182019, 1182021, 1182022, 1182023, 1182053, 1182056, 1182058, 1182059, 1182061, 1182062, 1182063,
				1182064, 1182066, 1182067, 1182069, 1182071, 1190000, 1190001 };
		short option[] = { 10, 15, 10, 15, 5, 10, 50, 80, 30, 40, 200, 400, 500, 700, 10, 15, 10, 15, 10, 15, 10, 15,
				20, 30, 20, 30, 10, 15 };
		int 확률 = Randomizer.nextInt(itemid.length);
		int real[] = { itemid[확률], (option[확률] + Randomizer.nextInt(5)) };
		Equip 장비 = (Equip) ItemInformation.getInstance().getEquipById(real[0]);
		if (real[0] == itemid[0] || real[0] == itemid[1]) {
			장비.setSpeed((short) real[1]);
		} else if (real[0] == itemid[2] || real[0] == itemid[3]) {
			장비.setJump((short) real[1]);
		} else if (real[0] == itemid[4] || real[0] == itemid[5]) {
			장비.setIgnoreWdef((short) real[1]);
		} else if (real[0] == itemid[6] || real[0] == itemid[7]) {
			장비.setMdef((short) real[1]);
			장비.setWdef((short) real[1]);
		} else if (real[0] == itemid[8] || real[0] == itemid[9]) {
			장비.setSpeed((short) real[1]);
			장비.setJump((short) real[1]);
		} else if (real[0] == itemid[10] || real[0] == itemid[11]) {
			장비.setHp((short) real[1]);
		} else if (real[0] == itemid[12] || real[0] == itemid[13]) {
			장비.setMp((short) real[1]);
		} else if (real[0] == itemid[14] || real[0] == itemid[15]) {
			장비.setLuk((short) real[1]);
		} else if (real[0] == itemid[16] || real[0] == itemid[17]) {
			장비.setDex((short) real[1]);
		} else if (real[0] == itemid[18] || real[0] == itemid[19]) {
			장비.setStr((short) real[1]);
		} else if (real[0] == itemid[20] || real[0] == itemid[21]) {
			장비.setInt((short) real[1]);
		} else if (real[0] == itemid[22] || real[0] == itemid[23]) {
			장비.setWatk((short) real[1]);
		} else if (real[0] == itemid[24] || real[0] == itemid[25]) {
			장비.setMatk((short) real[1]);
		} else if (real[0] == itemid[26] || real[0] == itemid[27]) {
			장비.setBossDamage((byte) real[1]);
		}
		장비.setState((byte) 18);
		장비.setLines((byte) 3);
		{
			int level = 2;
			int temp = level;
			int a = 0;
			while (temp > 1) {
				if (temp > 1) {
					--temp;
					++a;
				}
			}
			장비.setPotential1(potential(level, a, true, 장비.getItemId()));
			장비.setPotential2(potential(level, a, false, 장비.getItemId()));
			장비.setPotential3(장비.getLines() == 3 ? potential(level, a, false, 장비.getItemId()) : 0);
		}
		InventoryManipulator.addFromDrop(c, 장비, false);
		return real[0];
	}

	public int 평균레벨(MapleCharacter chr) {
		int a = 0;
		for (final MapleCharacter partymem : chr.getClient().getChannelServer().getPartyMembers(chr.getParty())) {
			a += partymem.getLevel();
		}
		return (a / chr.getParty().getMembers().size());
	}

	public boolean isRespawn() {
		return getPlayer().getMap().isRespawn();
	}

	public void setRespawn(boolean a) {
		getPlayer().getMap().setRespawn(a);
	}

	public void startTime() {
		getPlayer().time = System.currentTimeMillis();
	}

	public int getTime() {
		return (int) ((System.currentTimeMillis() - getPlayer().time) / 1000);
	}

	public void 아르미() {
		WorldCommunity.아르미();
	}

	public void 아르미끝() {
		WorldBroadcasting.broadcastMessage(
				MainPacketCreator.startMapEffect("아르미 : 여러분 아쉽지만 화약이 다 떨어져 버렸어요 ㅠ.ㅠ 다음에 또 만나요~", 5120009, true));
		아르미 = false;
	}

	public void HyperSkillMax() {
		MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"))
				.getData(StringUtil.getLeftPaddedStr("" + c.getPlayer().getJob(), '0', 3) + ".img");
		final ISkill skills = null;
		byte maxLevel = 0;
		for (MapleData skill : data) {
			if (skill != null) {

				for (MapleData skillId : skill.getChildren()) {
					if (!skillId.getName().equals("icon")) {
						maxLevel = (byte) MapleDataTool.getIntConvert("maxLevel", skillId.getChildByPath("common"), 0);
						if (MapleDataTool.getIntConvert("invisible", skillId, 0) == 0
								&& MapleDataTool.getIntConvert("reqLev", skillId, 0) > 0) { // 스킬창에
																							// 안보이는
																							// 스킬은
																							// 올리지않음
							if (c.getPlayer().getLevel() >= MapleDataTool.getIntConvert("reqLev", skillId, 0)) {
								c.getPlayer().changeSkillLevel(
										SkillFactory.getSkill(Integer.parseInt(skillId.getName())), maxLevel,
										SkillFactory.getSkill(Integer.parseInt(skillId.getName())).isFourthJob()
												? maxLevel : 0);
							}
						}
					}
				}
			}
		}
	}

	public void 베타구출() {
		getPlayer().getMap().베타구출(getPlayer(), 1);
	}

	public String EquipList(MapleClient c) {
		StringBuilder str = new StringBuilder();
		MapleInventory equip = c.getPlayer().getInventory(MapleInventoryType.EQUIP);
		List<String> stra = new LinkedList<>();
		for (IItem item : equip.list()) {
			stra.add("#L" + item.getPosition() + "##v" + item.getItemId() + "##l");
		}
		for (String strb : stra) {
			str.append(strb);
		}
		return str.toString();
	}

	public int getItemID(byte slot) {
		MapleInventory equip = getPlayer().getInventory(MapleInventoryType.EQUIP);
		Equip eu = (Equip) equip.getItem(slot);
		return equip.getItem(slot).getItemId();
	}

	public void gainEpicItem(byte slot, MapleCharacter player, short str, short dex, short Int, short luk, short wa,
			short ma) {
		MapleInventory equip = player.getInventory(MapleInventoryType.EQUIP);
		Equip eu = (Equip) equip.getItem(slot);
		int item = equip.getItem(slot).getItemId();
		// MapleJob job = eu.getJob();
		short hand = eu.getHands();
		byte level = eu.getLevel();
		Equip nItem = new Equip(item, equip.getNextFreeSlot(), (byte) 0);
		nItem.setStr(str); // STR
		nItem.setDex(dex); // DEX
		nItem.setInt(Int); // INT
		nItem.setLuk(luk); // LUK
		nItem.setWatk(wa);
		nItem.setMatk(ma);
		nItem.setMdef((short) (eu.getMdef() + str));
		nItem.setWdef((short) (eu.getWdef() + str));
		nItem.setStarForce(eu.getStarForce());
		nItem.setBossDamage(eu.getBossDamage());
		nItem.setIgnoreWdef(eu.getIgnoreWdef());
		nItem.setUpgradeSlots(nItem.getUpgradeSlots()); // Can Upgrade amount
		nItem.setJob(0);
		nItem.setHands(hand);
		nItem.setLevel(level);
		nItem.setLines(eu.getLines());
		nItem.setState(eu.getState());
		nItem.setPotential1(eu.getPotential1());
		nItem.setPotential2(eu.getPotential2());
		nItem.setPotential3(eu.getPotential3());
		nItem.setPotential4(eu.getPotential4());
		nItem.setPotential5(eu.getPotential5());
		nItem.setPotential6(eu.getPotential6());
		nItem.setPotential7(eu.getPotential7());
		nItem.setSoulEnchanter(eu.getSoulEnchanter());
		nItem.setSoulName(eu.getSoulName());
		;
		nItem.setUpgradeSlots(eu.getUpgradeSlots());
		nItem.setSoulSkill(eu.getSoulSkill());
		nItem.setSoulPotential(eu.getSoulPotential());
		nItem.setOwner("[SYSTEM]");
		// nItem.setRingId(-1);
		// player.getInventory(MapleInventoryType.EQUIP).removeItem(slot);
		InventoryManipulator.removeFromSlot(c, MapleInventoryType.EQUIP, slot, (short) 1, false);
		InventoryManipulator.addbyItem(c, nItem);
		// player.getInventory(MapleInventoryType.EQUIP).addItem(nItem);
	}

	public void SearchItem(String gomgo) {
		NPCConversationManager cm = this;
		if (gomgo.getBytes().length < 4) {
			cm.sendOk("검색어는 2글자 이상이어야 합니다.");
			cm.dispose();
			return;
		}
		c.send(UIPacket.greenShowInfo(gomgo + "(으)로 검색중입니다. 잠시만 기다려주세요."));
		String chat = "";
		ItemInformation ii = ItemInformation.getInstance();
		int g = 0;
		List<String> retItems = new ArrayList<String>();
		for (Pair<Integer, String> itemPair : ItemInformation.getInstance().getAllEquips()) {
			if (itemPair.getRight().toLowerCase().contains(gomgo.toLowerCase())) {
				if (ii.isCash(itemPair.getLeft())) {
					if (itemPair.getLeft() / 100000 >= 1) {
						chat += "#L" + itemPair.getLeft() + "# #i" + itemPair.getLeft() + "# #fs14##b"
								+ itemPair.getRight() + "#fs12##k#l\r\n";
						g++;
					}
				}
			}
		}
		if (g != 0) {
			cm.sendSimple(chat);
		} else {
			chat = "발견된 아이템이 없습니다.";
			cm.sendOk(chat);
			cm.dispose();
		}
	}

	int getRandomIntInclusive(int min, int max) {
		min = (int) Math.ceil(min);
		max = (int) Math.floor(max);
		return (int) (Math.floor(Math.random() * (max - min + 1)) + min);
	}

	public void broadcastMessage(String message) {
		WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(5, message));
	}

	public void changeKeyBinding(int key, int type, int action) {
		MapleKeyBinding mkb = new MapleKeyBinding(type, action);
		getPlayer().changeKeybinding(key, mkb);
		getClient().getSession().write(MainPacketCreator.getKeymap(getPlayer().getKeyLayout()));
	}
}
