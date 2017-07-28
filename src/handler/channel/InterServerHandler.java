/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleItempotMain;
import client.MaplePlayerIdNamePair;
import client.MapleQuestStatus;
import client.items.Equip;
import client.items.ISkill;
import client.items.MapleInventoryType;
import client.skills.PhantomSteelSkill;
import client.skills.SkillEntry;
import client.skills.SkillFactory;
import client.skills.SteelSkillEntry;
import client.stats.BuffStats;
import client.stats.PlayerStat;
import community.*;
import constants.GameConstants;
import constants.KindredConstants;
import constants.ServerConstants;
import constants.programs.ControlUnit;
import constants.subclasses.setScriptableNPC;
import database.MYSQL;
import handler.duey.DueyHandler;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import launch.ChannelServer;
import launch.helpers.ChracterTransfer;
import launch.helpers.MaplePlayerIdChannelPair;
import launch.holder.MapleBuffValueHolder;
import launch.world.WorldBroadcasting;
import launch.world.WorldCommunity;
import packet.creators.CashPacket;
import packet.creators.MainPacketCreator;
import packet.creators.SoulWeaponPacket;
import packet.creators.UIPacket;
import packet.skills.AngelicBusterSkill;
import packet.skills.ZeroSkill;
import packet.transfer.read.ReadingMaple;
import packet.transfer.write.Packet;
import provider.MapleData;
import provider.MapleDataProviderFactory;
import provider.MapleDataTool;
import scripting.NPCScriptManager;
import server.items.ItemInformation;
import server.items.MapleAuction;
import server.maps.FieldLimitType;
import server.maps.MapleMap;
import server.quest.MapleQuest;
import server.shops.IMapleCharacterShop;
import tools.CurrentTime;
import tools.StringUtil;
import tools.RandomStream.Randomizer;

public class InterServerHandler {

	public static final void EnterMTS(final MapleClient c) {
		final MapleMap map = c.getChannelServer().getMapFactory().getMap(910000000);
		c.getPlayer().changeMap(map, map.getPortal(0));
	}

	public static final void EnterCS(final MapleClient c, final MapleCharacter chr, final boolean ScriptEnter) {
		if (!chr.isAlive()) {
			c.getSession().write(MainPacketCreator.resetActions());
			return;
		}
		if (ScriptEnter && ServerConstants.cshopNpc != 0) {
			NPCScriptManager.getInstance().start(c, ServerConstants.cshopNpc);
			c.getSession().write(MainPacketCreator.resetActions());
			return;
		} // ?
		final ChannelServer ch = ChannelServer.getInstance(c.getChannel());

		String ip = ServerConstants.getServerHost(c);

		if (ip == null) { // Cash Shop not init yet
			c.getSession().write(MainPacketCreator.serverNotice(5, "캐시샵을 현재 사용할 수 없습니다."));
			return;
		}

		if (chr.getTrade() != null) {
			MapleUserTrade.cancelTrade(chr.getTrade());
		}
		if (chr.getBuffedValue(BuffStats.SUMMON) != null) {
			chr.cancelEffectFromBuffStat(BuffStats.SUMMON, -1);
		}
		if (chr.getBuffedValue(BuffStats.PUPPET) != null) {
			chr.cancelEffectFromBuffStat(BuffStats.PUPPET, -1);
		}
		if (chr.getBuffedValue(BuffStats.DUMMY_EFFECT) != null) {
			chr.cancelEffectFromBuffStat(BuffStats.DUMMY_EFFECT, -1);
		}
		final IMapleCharacterShop shop = chr.getPlayerShop();
		if (shop != null) {
			shop.removeVisitor(chr);
			if (shop.isOwner(chr)) {
				shop.setOpen(true);
			}
		}

		if (chr.getMessenger() != null) {
			MapleMultiChatCharacter messengerplayer = new MapleMultiChatCharacter(chr);
			WorldCommunity.leaveMessenger(chr.getMessenger().getId(), messengerplayer);
		}
		ChannelServer.addBuffsToStorage(chr.getId(), chr.getAllBuffs());
		ChannelServer.addCooldownsToStorage(chr.getId(), chr.getAllCooldowns());
		ChannelServer.addDiseaseToStorage(chr.getId(), chr.getAllDiseases());
		ChannelServer.ChannelChange_Data(new ChracterTransfer(chr), chr.getId(), -10);
		ch.removePlayer(chr);
		c.updateLoginState(MapleClient.CHANGE_CHANNEL, c.getSessionIPAddress());

		c.getSession().write(
				MainPacketCreator.getChannelChange(ServerConstants.cashShopPort, ServerConstants.getServerHost(c))); // default
																														// cashshop
																														// port
		chr.saveToDB(false, false);
		chr.getMap().removePlayer(chr);
		c.setPlayer(null);
	}

	public static void Loggedin(final int playerid, final MapleClient c) {

		final ChannelServer channelServer = c.getChannelServer();
		MapleCharacter player;
		final ChracterTransfer transfer = channelServer.getPlayerStorage().getPendingCharacter(playerid);

		if (transfer == null) { // Player isn't in storage, probably isn't CC
			player = MapleCharacter.loadCharFromDB(playerid, c, true);
		} else {
			player = MapleCharacter.ReconstructChr(transfer, c, true);
		}
		if (player == null) {
			System.out.println("ERROR!!!!!! CANNOT LOAD CHARACTER FROM DB!!");
			return;
		}
		c.setPlayer(player);
		c.setAccID(player.getAccountID());
		c.loadAuthData();
		c.getPlayer().setmorphGage(0);

		final int state = c.getLoginState();

		boolean allowLogin = false;

		if (state == MapleClient.LOGIN_SERVER_TRANSITION || state == MapleClient.CHANGE_CHANNEL) {
			if (!ChannelServer.isCharacterListConnected(c.loadCharacterNames(), true)) {
				allowLogin = true;
			}
		}
		if (!allowLogin) {
			c.setPlayer(null);
			c.getSession().close();
			if (!ServerConstants.realese) {
				System.out.println("not allow login - " + c.getAccountName() + " from " + c.getSessionIPAddress()
						+ " / state : " + state);
			}
			return;
		}
		c.updateLoginState(MapleClient.LOGIN_LOGGEDIN, c.getSessionIPAddress());

		final ChannelServer cserv = ChannelServer.getInstance(c.getChannel());
		cserv.addPlayer(player);
		c.getPlayer().giveCoolDowns(ChannelServer.getCooldownsFromStorage(player.getId()));
		c.getSession().write(MainPacketCreator.HeadTitle(player.HeadTitle()));
		c.getSession().write(MainPacketCreator.getPlayerInfo(player));
		player.getMap().addPlayer(player);

		try {
			player.expirationTask();
		} catch (Exception e) {
			if (!ServerConstants.realese) {
				e.printStackTrace();
			}
		}

		if (player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -27) != null
				&& player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -28) != null) {
			// Android Spawn
			if (player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -27).getAndroid() != null) {
				player.setAndroid(player.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -27).getAndroid());
			}
		}
		final Map<ISkill, SkillEntry> skills = c.getPlayer().getSkills();
		final Map<ISkill, SkillEntry> skillscopy = new LinkedHashMap<ISkill, SkillEntry>(skills);
		for (final Entry<ISkill, SkillEntry> skill : skillscopy.entrySet()) {
			{
				player.updateSkillPacket(skill.getKey().getId(), (byte) player.getSkillLevel(skill.getKey().getId()),
						(byte) skill.getKey().getMaxLevel());
			}
		}

		try {
			// Start of buffs
			final List<MapleBuffValueHolder> buffs = ChannelServer.getBuffsFromStorage(player.getId());
			if (buffs != null) {
				player.silentGiveBuffs(buffs);
			}
			c.getPlayer().giveSilentDebuff(ChannelServer.getDiseaseFromStorage(player.getId()));

			// Start of buddylist
			final int buddyIds[] = player.getBuddylist().getBuddyIds();
			WorldBroadcasting.loggedOn(player.getName(), player.getId(), c.getChannel(), buddyIds);
			final MaplePlayerIdChannelPair[] onlineBuddies = WorldCommunity.multiBuddyFind(player.getId(), buddyIds);
			for (MaplePlayerIdChannelPair onlineBuddy : onlineBuddies) {
				final BuddylistEntry ble = player.getBuddylist().get(onlineBuddy.getCharacterId());
				ble.setChannel(onlineBuddy.getChannel());
				player.getBuddylist().put(ble);
			}
			c.getSession().write(MainPacketCreator.updateBuddylist(player.getBuddylist().getBuddies(), 10, 0));

			if (player.getGuildId() > 0) {

				ChannelServer.setGuildMemberOnline(player.getMGC(), true, c.getChannel());
				c.getSession().write(MainPacketCreator.showGuildInfo(player));
				final MapleGuild gs = ChannelServer.getGuild(player.getGuildId());
				if (gs != null) {
					final List<Packet> packetList = ChannelServer.getAllianceInfo(gs.getAllianceId(), true);
					if (packetList != null) {
						for (Packet pack : packetList) {
							if (pack != null) {
								c.getSession().write(pack);
							}
						}
					}
				} else { // guild not found, change guild id
					player.setGuildId(0);
					player.setGuildRank((byte) 5);
					player.setAllianceRank((byte) 5);
					player.saveGuildStatus();
				}
			}
		} catch (Exception e) {
		}
		player.showNote();
		player.updatePartyMemberHP();
		c.getSession().write(MainPacketCreator.showMaplePoint(player));
		if (GameConstants.isPhantom(player.getJob())) {
			c.getSession().write(MainPacketCreator.cardAmount(c.getPlayer().getCardStack()));
		}

		for (MapleQuestStatus status : player.getStartedQuests()) {
			if (status.hasMobKills()) {
				c.getSession().write(MainPacketCreator.updateQuestMobKills(status));
			}
		}

		if (player.getJob() == 132) { // 다크나이트
			player.checkBerserk();
		}
		if (player.getQuickSlot().getQuickSlot().size() == 8) {
			c.send(MainPacketCreator.getQuickSlot(player.getQuickSlot().getQuickSlot()));
		}

		if (DueyHandler.DueyItemSize(player.getName()) > 0) {
			player.send(DueyHandler.DueyMessage(28));
		}

		/* 컨트롤 패널 접속자 수 추가 */
		if (!ControlUnit.현재접속자.contains(player.getName())) {
			ControlUnit.동접(player.getName());
			ControlUnit.접속자수.setText(String.valueOf((int) (Integer.parseInt(ControlUnit.접속자수.getText()) + 1)));
		}

		/* 제로 젠더 겹칠시 초기화 */
		if ((player.getGender() == 0) && (player.getSecondGender() == 0)
				&& (GameConstants.isZero(player.getJob()) || (player.getGender() == 1)
						&& (player.getSecondGender() == 1) && (GameConstants.isZero(player.getJob())))) {
			player.setGender((byte) 1);
			player.setSecondGender((byte) 0);
		}

		/* 제로가 아닐시 젠더 사용안함 처리 */
		if (!GameConstants.isZero(c.getPlayer().getJob())) {
			c.getPlayer().setSecondGender((byte) -1);
		} else {
			c.send(ZeroSkill.Clothes(player.getBetaClothes()));
		}

		/* 소울인챈터 */
		if ((player.isEquippedSoulWeapon()) && (transfer == null)) {
			player.setSoulCount(0);
			c.send(SoulWeaponPacket.giveSoulGauge(player.getSoulCount(), player.getEquippedSoulSkill()));
		}

		/* 최대데미지 해제 */
		if (ServerConstants.UnlockMaxDamage) {
			player.unlockMaxDamage();
		}

		/* 정령의 펜던트 */
		if (player.getInventory(MapleInventoryType.EQUIPPED).findById(1122017) != null) {
			player.equipPendantOfSpirit();
		}

		/* 오픈게이트 */
		c.getPlayer().setKeyValue("opengate", null);
		c.getPlayer().setKeyValue("count", null);

		/* 펜던트 슬롯 */
		if (!c.getPlayer().getStat().getJC()) {
			c.getPlayer().getStat().setJC(true);
		}

		// /* 피버 타임 */
		// if (ServerConstants.feverTime) {
		// c.getSession().write(MainPacketCreator.feverTime());
		// }

		if (c.getPlayer().getLevel() != 1) {
			for (byte channel : KindredConstants.BUFFED_CHANNELS) {
				if (c.getPlayer().getClient().getChannel() == channel) {
					c.getPlayer().Message(7,
							"You have a entered a buffed channel. Mobs will be stronger but will yield more experience.");
					c.getSession().write(ZeroSkill.NPCTalk("You have entered a buffed channel; increased difficulty and exclusive drops unlocked."));
//					return;
					break;
			} else {
				c.getPlayer().Message(7,
						"You have entered a regular channel. Some item drops will not be available.");
//				c.getSession().write(ZeroSkill.NPCTalk("You have entered a regular channel. Some item drops will not be available."));
//				return;
				break;
			}
		}
		}
		// c.getPlayer().getStat().recalcLocalStats();

		/* 서버 접속시 메세지 */
		// c.getPlayer().send(UIPacket.detailShowInfo("즐거운 메이플 세상 ! " +
		// ServerConstants.serverName + "에 오신걸 환영합니다.", false));
		c.getSession().write(MainPacketCreator.serverMessage(ServerConstants.serverMessage));
		if (player.getLevel() < 10 && player.getMapId() == ServerConstants.startMap
				|| player.getJob() >= 10000 && player.getMapId() == ServerConstants.startMap) {
			// c.getSession().write(ZeroSkill.NPCTalk(ServerConstants.beginner));
			WorldBroadcasting.broadcastMessage(MainPacketCreator.getGMText(5,
					"[System] Please welcome <" + c.getPlayer().getName() + "" + "> to Kindred!"));
//			c.getPlayer().send(UIPacket.showPopupMessage(ServerConstants.beginner));
			/**
			 * Maxing all skills (after tutorial login)
			 */
			int jobid = c.getPlayer().getJob();
			MapleData data = MapleDataProviderFactory.getDataProvider(MapleDataProviderFactory.fileInWZPath("Skill.wz"))
					.getData(StringUtil.getLeftPaddedStr("" + c.getPlayer().getJob(), '0', 3) + ".img");
			final ISkill skills1 = null;
			byte maxLevel = 0;
			// c.getPlayer().Message(7,
			// ServerConstants.serverName + ">>Skills are maxed, Skill Master
			// has been completed.");
			if (GameConstants.isDemonSlayer(c.getPlayer().getJob())) {
			}
			c.getPlayer().maxskill(3100);
			c.getPlayer().maxskill(3001);
			c.getPlayer().maxskill(3110);
			c.getPlayer().maxskill(3111);
			c.getPlayer().maxskill(3112);
			if (GameConstants.isZero(c.getPlayer().getJob())) {
				c.getPlayer().maxskill(10100);
				c.getPlayer().maxskill(10110);
				c.getPlayer().maxskill(10111);
				c.getPlayer().maxskill(10112);
				c.getPlayer().Message(5, "Skill Master has been completed");
				return;
			}
			if (c.getPlayer().getJob() == 3210) {
				c.getPlayer().changeSkillLevel(32101000, (byte) 20, (byte) 20);
				c.getPlayer().changeSkillLevel(32101001, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32101003, (byte) 20, (byte) 20);
				c.getPlayer().changeSkillLevel(32101004, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32100006, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32101005, (byte) 10, (byte) 10);
				c.getPlayer().changeSkillLevel(32100007, (byte) 5, (byte) 5);
				c.getPlayer().changeSkillLevel(32100008, (byte) 10, (byte) 10);
				return;
			}
			for (MapleData skill : data) {
				if (skill != null) {
					for (MapleData skillId : skill.getChildren()) {
						if (!skillId.getName().equals("icon")) {
							maxLevel = (byte) MapleDataTool.getIntConvert("maxLevel", skillId.getChildByPath("common"),
									0);
							if (MapleDataTool.getIntConvert("invisible", skillId, 0) == 0) { // 스킬창에
								// 안보이는
								// 스킬은
								// 올리지않음
								if (c.getPlayer().getLevel() >= MapleDataTool.getIntConvert("reqLev", skillId, 0)
										&& Integer.parseInt(skillId.getName()) != 12101022
										&& Integer.parseInt(skillId.getName()) != 12110025) {
									boolean is4number = skillId.getName().length() == 8;
									String charJob = null;
									if (is4number) {
										charJob = skillId.getName().substring(0, 4);
									} else {
										charJob = skillId.getName().substring(0, 3);
									}
									System.out.println(charJob);
									if (Integer.parseInt(charJob) == c.getPlayer().getJob()) {
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
			c.getPlayer().saveToDB(false, false);
			/**
			 * End of maxing skills
			 */
		} else if (player.getMapId() != 101050000 && player.getMapId() != 931000310) {
			// c.getSession().write(ZeroSkill.NPCTalk(ServerConstants.serverNotice));
			c.getSession().write(MainPacketCreator.sendHint(ServerConstants.serverHint, 300, 15));
		}
		if (GameConstants.isXenon(player.getJob())) {
			player.startSurPlus();
		}
		if (GameConstants.isDemonAvenger(c.getPlayer().getJob())) {
			c.send(MainPacketCreator.giveDemonWatk(c.getPlayer().getStat().getHp()));
		}
		c.getSession().write(CashPacket.pendantSlot(true));
		player.sendMacros();
		c.getSession().write(MainPacketCreator.getKeymap(player.getKeyLayout()));
		if (player.getKeyValue("chapter") != null) {
			player.send(MainPacketCreator.updateInfoQuest(0x670, player.getKeyValue("chapter")));
		}
		if (player.getKeyValue("chapter2") != null) {
			player.send(MainPacketCreator.updateInfoQuest(0x671, player.getKeyValue("chapter2")));
		}
		if (player.getKeyValue("chapter3") != null) {
			player.send(MainPacketCreator.updateInfoQuest(0x672, player.getKeyValue("chapter3")));
		}
		if (player.getKeyValue("chapter4") != null) {
			player.send(MainPacketCreator.updateInfoQuest(0x673, player.getKeyValue("chapter4")));
		}
		if (WorldCommunity.아르미) {
			player.send(MainPacketCreator.startMapEffect("아르미 : 우와~ 예쁜 폭죽이 터졌어요!", 5120009, true));
		}
		if (MapleAuction.경매장메소회수(player.getName()) > 0) {
			player.dropMessage(1, "Auction house item(s) sold. Please collect your mesos through Eggrich in FM.");
		}
		if (MapleAuction.마감(player.getName()) > 0) {
			player.dropMessage(1,
					"경매장에 있는 아이템 " + MapleAuction.마감(player.getName()) + "개가 마감 되었습니다.\r\n(3일안에 회수해가지 않으면 자동삭제 됩니다.)");
		}
		if (GameConstants.isKOC(player.getJob()) && player.getLevel() >= 100) {
			if (player.getSkillLevel(Integer.parseInt(String.valueOf(player.getJob() + "1000"))) <= 0) {
				player.teachSkill(Integer.parseInt(String.valueOf(player.getJob() + "1000")), (byte) 0, SkillFactory
						.getSkill(Integer.parseInt(String.valueOf(player.getJob() + "1000"))).getMaxLevel());
			}
		}
		if (c.getPlayer().getStat().ChDelay == 0) {
			c.getPlayer().getStat().ChDelay = 1;
		} else {
			c.getPlayer().getStat().ChDelay = System.currentTimeMillis();
		}
		c.sendProcessCheck();
	}

	public static final void ChangeChannel(final ReadingMaple rh, final MapleClient c, final MapleCharacter chr) {
		if (!chr.isAlive()) {
			c.getSession().write(MainPacketCreator.resetActions());
			return;
		}
		final int channel = rh.readByte();
		if (c.getPlayer() != null) {
			if (c.getPlayer().getStat().ChDelay > 1) {
				if ((System.currentTimeMillis() - c.getPlayer().getStat().ChDelay) < 5500) {
					c.getPlayer().dropMessage(1, "You can change channels after 5 seconds.");
					c.getPlayer().send(MainPacketCreator.resetActions());
					return;
				}
			}
		}
		final ChannelServer toch = ChannelServer.getInstance(channel);

		if (FieldLimitType.ChannelSwitch.check(chr.getMap().getFieldLimit()) || channel == c.getChannel()) {
			c.getSession().close();
			return;
		} else if (toch == null || toch.isShutdown()) {
			c.getSession().write(MainPacketCreator.serverNotice(5, "현재 접근할 수 없습니다."));
			return;
		}

		if (chr.getTrade() != null) {
			MapleUserTrade.cancelTrade(chr.getTrade());
		}
		if (chr.getBuffedValue(BuffStats.SUMMON) != null) {
			chr.cancelEffectFromBuffStat(BuffStats.SUMMON, -1);
		}
		if (chr.getBuffedValue(BuffStats.PUPPET) != null) {
			chr.cancelEffectFromBuffStat(BuffStats.PUPPET, -1);
		}
		if (chr.getBuffedValue(BuffStats.DUMMY_EFFECT) != null) {
			chr.cancelEffectFromBuffStat(BuffStats.DUMMY_EFFECT, -1);
		}
		final IMapleCharacterShop shop = chr.getPlayerShop();
		if (shop != null) {
			shop.removeVisitor(chr);
			if (shop.isOwner(chr)) {
				shop.setOpen(true);
			}
		}

		final ChannelServer ch = ChannelServer.getInstance(c.getChannel());
		if (chr.getMessenger() != null) {
			WorldCommunity.silentLeaveMessenger(chr.getMessenger().getId(), new MapleMultiChatCharacter(chr));
		}
		ChannelServer.addBuffsToStorage(chr.getId(), chr.getAllBuffs());
		ChannelServer.addCooldownsToStorage(chr.getId(), chr.getAllCooldowns());
		ChannelServer.addDiseaseToStorage(chr.getId(), chr.getAllDiseases());
		ChannelServer.ChannelChange_Data(new ChracterTransfer(chr), chr.getId(), channel);
		ch.removePlayer(chr);
		c.updateLoginState(MapleClient.CHANGE_CHANNEL, c.getSessionIPAddress());
		c.getSession().write(MainPacketCreator.getChannelChange(ServerConstants.basePorts + (channel),
				ServerConstants.getServerHost(c)));
		chr.saveToDB(false, false);
		chr.getMap().removePlayer(chr);
		c.setPlayer(null);
	}
}
