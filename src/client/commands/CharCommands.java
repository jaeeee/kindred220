/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import client.items.IItem;
import constants.GameConstants;
import client.items.Item;
import client.items.Equip;
import client.MapleClient;
import client.items.MapleInventoryType;
import client.stats.PlayerStat;
import static client.commands.CommandProcessor.getOptionalIntArg;
import server.items.InventoryManipulator;
import server.items.ItemInformation;
import tools.CurrentTime;

public class CharCommands implements Command {

	@Override
	public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
		switch (splitted[0]) {
		case "!item":
			final int itemId = Integer.parseInt(splitted[1]);
			final short quantity = (short) getOptionalIntArg(splitted, 2, 1);

			if (c.getPlayer().getGMLevel() < 6) {
				for (int i : GameConstants.itemBlock) {
					if (itemId == i) {
						c.getPlayer().dropMessage(5, "해당 아이템은 당신의 GM 레벨로는 생성 하실수 없습니다.");
					}
				}
			}
			ItemInformation ii = ItemInformation.getInstance();
			if (GameConstants.isPet(itemId)) {
				c.getPlayer().dropMessage(5, "펫은 캐시샵을 이용해주시기 바랍니다.");
			} else if (!ii.itemExists(itemId)) {
				c.getPlayer().dropMessage(5, itemId + " 번 아이템은 존재하지 않습니다.");
			} else {
				IItem item;
				if (GameConstants.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
					item = ii.randomizeStats((Equip) ii.getEquipById(itemId), true);
				} else {
					item = new Item(itemId, (byte) 0, (short) quantity, (byte) 0);
				}
				item.setOwner(c.getPlayer().getName());
				item.setGMLog(CurrentTime.getAllCurrentTime() + "에 " + c.getPlayer().getName() + "의 명령어로 얻은 아이템.");
				InventoryManipulator.addbyItem(c, item);
			}
			break;
		case "!job":
			int job = Integer.parseInt(splitted[1]);
			c.getPlayer().changeJob(job);
			c.getPlayer().dropMessage(5, "Changed job to " + job);
			break;
		case "!meso":
			long amount = Long.parseLong(splitted[1]);
			long total = amount + c.getPlayer().getMeso();
			if (total > Long.MAX_VALUE) {
				c.getPlayer().dropMessage(5, "You cannot exceed " + Long.MAX_VALUE + " mesos.");
			} else {
				c.getPlayer().gainMeso(amount, true);
				c.getPlayer().dropMessage(5, "Successfully gained " + amount + " mesos.");
			}
			break;
		case "!sgm":
			int msgType = Integer.parseInt(splitted[1]);
			c.getPlayer().dropMessage(msgType, "This is a type " + msgType + " message.");
			break;
		case "!level":
			c.getPlayer().setLevel(Short.parseShort(splitted[1]));
			c.getPlayer().levelUp();
			if (c.getPlayer().getExp() < 0) {
				c.getPlayer().gainExp(-c.getPlayer().getExp(), false, false, true);
			}
			break;
		case "!maxme":
			c.getPlayer().getStat().setAmbition(32767);
			c.getPlayer().getStat().setCharm(32767);
			c.getPlayer().getStat().setDex(32767);
			c.getPlayer().getStat().setDiligence(32767);
			c.getPlayer().getStat().setEmpathy(32767);
			c.getPlayer().getStat().setInsight(32767);
			c.getPlayer().getStat().setInt(32767);
			c.getPlayer().getStat().setLuk(32767);
			c.getPlayer().getStat().setMaxHp(500000);
			if (!GameConstants.isZero(c.getPlayer().getJob())) {
				c.getPlayer().getStat().setMaxMp(500000);
				c.getPlayer().getStat().setMp(500000);
			}
			c.getPlayer().getStat().setHp(500000);
			c.getPlayer().getStat().setStr(32767);
			c.getPlayer().getStat().setWillPower(32767);
			c.getPlayer().updateSingleStat(PlayerStat.STR, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.DEX, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.INT, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.LUK, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.CHARISMA, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.WILLPOWER, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.INSIGHT, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.CHARM, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.CRAFT, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.SENSE, 32767);
			c.getPlayer().updateSingleStat(PlayerStat.MAXHP, 500000);
			if (!GameConstants.isZero(c.getPlayer().getJob())) {
				c.getPlayer().updateSingleStat(PlayerStat.MAXMP, 500000);
				c.getPlayer().updateSingleStat(PlayerStat.MP, 500000);
			}
			c.getPlayer().updateSingleStat(PlayerStat.HP, 500000);
			break;
		case "!noobme":
			c.getPlayer().getStat().setAmbition(0);
			c.getPlayer().getStat().setCharm(0);
			c.getPlayer().getStat().setDex(4);
			c.getPlayer().getStat().setDiligence(0);
			c.getPlayer().getStat().setEmpathy(0);
			c.getPlayer().getStat().setInsight(0);
			c.getPlayer().getStat().setInt(4);
			c.getPlayer().getStat().setLuk(4);
			c.getPlayer().getStat().setMaxHp(1000);
			c.getPlayer().getStat().setMaxMp(1000);
			c.getPlayer().getStat().setHp(1000);
			c.getPlayer().getStat().setMp(1000);
			c.getPlayer().getStat().setStr(4);
			c.getPlayer().getStat().setWillPower(0);
			c.getPlayer().updateSingleStat(PlayerStat.STR, 4);
			c.getPlayer().updateSingleStat(PlayerStat.DEX, 4);
			c.getPlayer().updateSingleStat(PlayerStat.INT, 4);
			c.getPlayer().updateSingleStat(PlayerStat.LUK, 4);
			c.getPlayer().updateSingleStat(PlayerStat.CHARISMA, 0);
			c.getPlayer().updateSingleStat(PlayerStat.WILLPOWER, 0);
			c.getPlayer().updateSingleStat(PlayerStat.INSIGHT, 0);
			c.getPlayer().updateSingleStat(PlayerStat.CHARM, 0);
			c.getPlayer().updateSingleStat(PlayerStat.CRAFT, 0);
			c.getPlayer().updateSingleStat(PlayerStat.SENSE, 0);
			c.getPlayer().updateSingleStat(PlayerStat.MAXHP, 1000);
			c.getPlayer().updateSingleStat(PlayerStat.MAXMP, 1000);
			c.getPlayer().updateSingleStat(PlayerStat.MP, 1000);
			c.getPlayer().updateSingleStat(PlayerStat.HP, 1000);
			break;
		case "!proitem":
			int item = Integer.parseInt(splitted[1]);
			String name = c.getPlayer().getName();
			short allstat = (short) Integer.parseInt(splitted[2]);
			short damage = (short) Integer.parseInt(splitted[3]);
			byte upgradeslot = (byte) Integer.parseInt(splitted[4]);
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
				c.getPlayer().dropMessage(5, "success! usage: !proitem <item id> <allstat> <damage> <upgrade slots>");
			} else {
				c.getPlayer().dropMessage(5, "afk no work");
				c.getPlayer().dropMessage(5, "usage: !proitem <item id> <allstat> <damage> <upgrade slots>");
			}
			break;
		case "!whereami":
			c.getPlayer().dropMessage(5, "You are on map " + c.getPlayer().getMap().getId());
			break;
		}
	}

	@Override
	public CommandDefinition[] getDefinition() {
		return new CommandDefinition[] {
				new CommandDefinition("item", "<item ID> (<amount>)", "Allows you to spawn an item.", 2),
				new CommandDefinition("job", "<job ID>", "Changes character job.", 2),
				new CommandDefinition("meso", "<amount>", "Adds 'x' amount mesos.", 2),
				new CommandDefinition("sgm", "<value>", "Debugger for game messages.", 2),
				new CommandDefinition("level", "<value>", "Changes character to certain level.", 2),
				new CommandDefinition("maxme", "", "maxes you.", 2),
				new CommandDefinition("noobme", "", "noobs you", 2), 
				new CommandDefinition("proitem", "", "xd", 2),
				new CommandDefinition("whereami", "", "", 2)};
	}

	// public void gainSponserItem(int item,final String name, short allstat,
	// short damage, byte upgradeslot) {
	//
	// }
}
