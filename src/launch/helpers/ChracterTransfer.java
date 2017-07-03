/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package launch.helpers;

import client.*;
import client.items.ISkill;
import client.skills.SkillEntry;
import client.stats.BuffStats;
import client.stats.BuffStatsValueHolder;
import community.BuddylistEntry;
import server.quest.MapleQuest;
import java.io.Externalizable;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectOutput;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import launch.holder.MapleBuffValueHolder;

public class ChracterTransfer implements Externalizable {

    public int characterid, accountid, fame, str, dex, int_, luk, maxhp, maxmp, mp, hpApUsed, mpApUsed,
	    remainingAp, hair, hair2, face, mapid, innerexp, innerlevel,
	    initialSpawnPoint, rank, rankMove, worldRank, worldRankMove, guildid,
	    buddysize, partyid, messengerid, messengerposition, dojo, nxcash, vpoints, MaplePoints, realcash,
	    mount_level, mount_itemid, mount_Fatigue, mount_exp, reborns, subcategory, headtitle, cardStack, fatigue, petAutoHP, petAutoMP, exeedCount;
    public byte channel, dojoRecord, gender, secondGender, skinColor, secondSkinColor, gmLevel, guildrank, alliancerank;
    public short job;
    public boolean  monitored, hidden, petLoot, isFinalFiguration, checkMech;
    public Object quickslot, evolving;
    public long hp, lastfametime, TranferTime, exp, meso;
    public String name, accountname, BlessOfFairy, BlessOfEmpress;
    public short level;
    public Object inventorys, skillmacro, keymap, savedlocation, famedcharacters, cashinventory, steelskills,
	    storage, rocks, wishlist, InfoQuest, remainingSp, rebuyList, profession, stats, innerSkills, aswanShopList, android, extendedSlots;
    public final Map<MaplePlayerIdNamePair, Boolean> buddies = new LinkedHashMap<MaplePlayerIdNamePair, Boolean>();
    public final Map<Integer, Object> Quest = new LinkedHashMap<Integer, Object>(); // Questid instead of MapleQuest, as it's huge. Cant be transporting MapleQuest.java
    public final Map<Integer, Object> Skills = new LinkedHashMap<Integer, Object>(); // Skillid instead of Skill.java, as it's huge. Cant be transporting Skill.java and MapleStatEffect.java
    public int face2, ambition, insight, willpower, diligence, empathy, charm, wp, askguildid;
    public Map<String, String> CustomValues = new HashMap<String, String>();
    public Map<String, Integer> CustomValues2 = new HashMap<String, Integer>();
    public MaplePet[] pets = new MaplePet[3];
    public Integer effectssy;
    public String chatban;
    public int rankpoint, gp, boss, mistic, Soul, betaclothes;

    public ChracterTransfer(final MapleCharacter chr) {
	this.characterid = chr.getId();
	this.accountid = chr.getAccountID();
	this.accountname = chr.getClient().getAccountName();
	this.channel = (byte) chr.getClient().getChannel();
	this.nxcash = chr.getCSPoints(1);
        this.vpoints = chr.getVPoints();
        this.vpoints = chr.getVPoints();
	this.MaplePoints = chr.getCSPoints(2);
	this.name = chr.getName();
	this.fame = chr.getFame();
	this.gender = (byte) chr.getGender();
        this.secondGender = (byte) chr.getSecondGender();
	this.level = chr.getLevel();
	this.str = chr.getStat().getStr();
	this.dex = chr.getStat().getDex();
	this.int_ = chr.getStat().getInt();
	this.luk = chr.getStat().getLuk();
	this.hp = chr.getStat().getHp();
	this.mp = chr.getStat().getMp();
	this.maxhp = chr.getStat().getMaxHp();
	this.maxmp = chr.getStat().getMaxMp();
	this.exp = chr.getExp();
	this.hpApUsed = chr.getHpApUsed();
	this.mpApUsed = chr.getMpApUsed();
	this.remainingAp = chr.getRemainingAp();
	this.remainingSp = chr.getRemainingSps();
	this.meso = chr.getMeso();
	this.skinColor = chr.getSkinColor();
        this.secondSkinColor = chr.getSecondSkinColor();
	this.job = chr.getJob();
	this.hair = chr.getHair();
        this.hair2 = chr.getSecondHair();
	this.face = chr.getFace();
	this.face2 = chr.getSecondFace();
        this.wp = chr.getWP();
        this.askguildid = chr.getAskGuildid();
	this.mapid = chr.getMapId();
	this.initialSpawnPoint = chr.getInitialSpawnpoint();
	this.rank = chr.getRank();
	this.rankMove = chr.getRankMove();
	this.worldRank = (byte) chr.getWorldRank();
	this.worldRankMove = chr.getWorldRankMove();
	this.guildid = chr.getGuildId();
	this.guildrank = (byte) chr.getGuildRank();
	this.alliancerank = (byte) chr.getAllianceRank();
	this.gmLevel = (byte) chr.getGMLevel();
	this.subcategory = chr.getSubcategory();
        this.rankpoint = chr.getRankPoint();
        this.gp = chr.getGP();
        this.boss = chr.getboss();
        this.mistic = chr.getMistic();
        this.Soul = chr.getSoulCount();
        this.chatban = chr.getChatban();
        this.betaclothes = chr.getBetaClothes();
        this.cashinventory = chr.getCashInventory();
        this.quickslot = chr.getQuickSlot();
        this.CustomValues = chr.getCustomValues();
        this.CustomValues2 = chr.getCustomValues2();
        this.steelskills = chr.getSteelSkills();
        this.hidden = chr.isHidden();
        this.checkMech = chr.checkMech;
        this.effectssy = chr.effectssy;
        this.realcash = chr.getRC();
	for (final BuddylistEntry qs : chr.getBuddylist().getBuddies()) {
	    this.buddies.put(new MaplePlayerIdNamePair(qs.getCharacterId(), qs.getName(), qs.getLevel(), qs.getJob()), qs.isVisible());
	}
	this.buddysize = chr.getBuddyCapacity();

	this.partyid = chr.getPartyId();

	if (chr.getMessenger() != null) {
	    this.messengerid = chr.getMessenger().getId();
	    this.messengerposition = chr.getMessengerPosition();
	} else {
	    messengerid = 0;
	    messengerposition = 4;
	}

	this.dojo = chr.getDojo();
	this.dojoRecord = (byte) chr.getDojoRecord();
        this.reborns = chr.getReborns();
	this.InfoQuest = chr.getInfoQuest_Map();

	for (final Map.Entry<MapleQuest, MapleQuestStatus> qs : chr.getQuest_Map().entrySet()) {
	    this.Quest.put(qs.getKey().getId(), qs.getValue());
	}

	this.inventorys = chr.getInventorys();

	for (final Map.Entry<ISkill, SkillEntry> qs : chr.getSkills().entrySet()) {
	    this.Skills.put(qs.getKey().getId(), qs.getValue());
	}
        /*
	for (final Map.Entry<BuffStats, List<BuffStatsValueHolder>> ef : chr.getEffects().entrySet()) {
            if (!this.effects.containsKey(ef.getKey())) {
                this.effects.put(ef.getKey(), new ArrayList<BuffStatsValueHolder>());
            }
            this.effects.get(ef.getKey()).addAll(ef.getValue());
	}
         * 
         */

	this.BlessOfFairy = chr.getBlessOfFairyOrigin();
	this.BlessOfEmpress = chr.getBlessOfEmpressOrigin();
	this.skillmacro = chr.getMacros();
	this.keymap = chr.getKeyLayout();
	this.savedlocation = chr.getSavedLocations();
	this.famedcharacters = chr.getFamedCharacters();
	this.lastfametime = chr.getLastFameTime();
	this.storage = chr.getStorage();
	this.rocks = chr.getTrockMaps();
	this.wishlist = chr.getWishlist();
        this.rebuyList = chr.getRebuyList();
	this.headtitle = chr.getHeadTitle();
        this.cardStack = chr.getCardStack();
        this.profession = chr.getProfession();

	final MapleMount mount = chr.getMount();
	this.mount_itemid = mount.getItemId();
	this.mount_Fatigue = mount.getFatigue();
	this.mount_level = mount.getLevel();
	this.mount_exp = mount.getExp();
        this.stats = chr.getStat();
        this.innerexp = chr.getInnerExp();
        this.innerlevel = chr.getInnerLevel();
        this.isFinalFiguration = chr.isFinalFiguration;
        this.innerSkills = chr.getInnerSkills();
        this.aswanShopList = chr.getAswanShop();
        this.android = chr.getAndroid();
        this.pets = chr.getPets();
        this.petLoot = chr.getPetLoot();
        this.petAutoHP = chr.getPetAutoHP();
        this.petAutoMP = chr.getPetAutoMP();
        this.extendedSlots = chr.getExtendedSlots();
    }

    @Override
    public void readExternal(final ObjectInput in) throws IOException, ClassNotFoundException {
	this.characterid = in.readInt();
	this.accountid = in.readInt();
	this.accountname = (String) in.readObject();
	this.channel = in.readByte();
	this.nxcash = in.readInt();
        this.vpoints = in.readInt();
	this.MaplePoints = in.readInt();
	this.name = (String) in.readObject();
	this.fame = in.readInt();
	this.gender = in.readByte();
        this.secondGender = in.readByte();
	this.level = in.readShort();
	this.str = in.readInt();
	this.dex = in.readInt();
	this.int_ = in.readInt();
	this.luk = in.readInt();
	this.hp = in.readInt();
	this.mp = in.readInt();
	this.maxhp = in.readInt();
	this.maxmp = in.readInt();
	this.exp = in.readLong();
	this.hpApUsed = in.readInt();
	this.mpApUsed = in.readInt();
	this.remainingAp = in.readInt();
	this.remainingSp = in.readObject();
	this.meso = in.readLong();
	this.skinColor = in.readByte();
        this.secondSkinColor = in.readByte();
	this.job = in.readShort();
	this.hair = in.readInt();
        this.hair2 = in.readInt();
	this.face = in.readInt();
	this.face2 = in.readInt();
        this.wp = in.readInt();
        this.askguildid = in.readInt();
	this.mapid = in.readInt();
	this.initialSpawnPoint = in.readByte();
	this.rank = in.readInt();
	this.rankMove = in.readInt();
	this.worldRank = in.readInt();
	this.worldRankMove = in.readInt();
	this.guildid = in.readInt();
	this.guildrank = in.readByte();
	this.alliancerank = in.readByte();
	this.gmLevel = in.readByte();

	this.BlessOfFairy = (String) in.readObject();
	this.BlessOfEmpress = (String) in.readObject();

	this.skillmacro = in.readObject();
	this.keymap = in.readObject();
	this.savedlocation = in.readObject();
	this.famedcharacters = in.readObject();
	this.lastfametime = in.readLong();
	this.storage = in.readObject();
	this.rocks = in.readObject();
	this.wishlist = in.readObject();
	this.mount_itemid = in.readInt();
	this.mount_Fatigue = in.readInt();
	this.mount_level = in.readInt();
	this.mount_exp = in.readInt();
	this.partyid = in.readInt();
	this.messengerid = in.readInt();
	this.messengerposition = in.readInt();
	this.dojo = in.readInt();
	this.dojoRecord = in.readByte();
        this.reborns = in.readInt();
	this.inventorys = in.readObject();
	this.InfoQuest = in.readObject();
        this.profession = in.readObject();
        this.stats = in.readObject();
        this.realcash = in.readInt();
        this.rankpoint = in.readInt();
        this.gp = in.readInt();
        this.boss = in.readInt();
        this.mistic = in.readInt();
        this.Soul = in.readInt();
        this.chatban = in.readLine();
        this.betaclothes = in.readInt();
	final int skillsize = in.readShort();
	int skillid;
	Object skill; // SkillEntry
	for (int i = 0; i < skillsize; i++) {
	    skillid = in.readInt();
	    skill = in.readObject();
	    this.Skills.put(skillid, skill);
	}
        
	this.buddysize = in.readShort();
	final short addedbuddysize = in.readShort();
	for (int i = 0; i < addedbuddysize; i++) {
	    buddies.put(new MaplePlayerIdNamePair(in.readInt(), in.readUTF(), in.readInt(), in.readInt()), in.readBoolean());
	}

	final int questsize = in.readShort();
	int quest;
	Object queststatus;
	for (int i = 0; i < questsize; i++) {
	    quest = in.readInt();
	    queststatus = in.readObject();
	    this.Quest.put(quest, queststatus);
	}
        this.cashinventory = in.readObject();
        this.quickslot = in.readObject();
        this.CustomValues = (Map<String, String>) in.readObject();
        this.CustomValues2 = (Map<String, Integer>) in.readObject();
        this.steelskills = in.readObject();
        this.rebuyList = in.readObject();
        this.headtitle = in.readInt();
        this.cardStack = in.readInt();
        this.monitored = in.readByte() == 1;
        this.checkMech = in.readByte() == 1;
        this.hidden = in.readByte() == 1;
        this.effectssy = in.readInt();
        this.innerexp = in.readInt();
        this.innerlevel = in.readInt();
        this.isFinalFiguration = in.readByte() == 1;
        this.innerSkills = in.readObject();
        this.aswanShopList = in.readObject();
        this.android = in.readObject();
        this.extendedSlots = in.readObject();
	TranferTime = System.currentTimeMillis();
    }

    @Override
    public void writeExternal(final ObjectOutput out) throws IOException {
	out.writeInt(this.characterid);
	out.writeInt(this.accountid);
	out.writeObject(this.accountname);
	out.write(this.channel);
	out.writeInt(this.nxcash);
        out.writeInt(this.vpoints);
	out.writeInt(this.MaplePoints);
	out.writeObject(this.name);
	out.writeInt(this.fame);
	out.write(this.gender);
        out.write(this.secondGender);
	out.writeShort(this.level);
	out.writeInt(this.str);
	out.writeInt(this.dex);
	out.writeInt(this.int_);
	out.writeInt(this.luk);
	out.writeLong(this.hp);
	out.writeInt(this.mp);
	out.writeInt(this.maxhp);
	out.writeInt(this.maxmp);
	out.writeLong(this.exp);
	out.writeInt(this.hpApUsed);
	out.writeInt(this.mpApUsed);
	out.writeInt(this.remainingAp);
	out.writeObject(this.remainingSp);
	out.writeLong(this.meso);
	out.write(this.skinColor);
        out.write(this.secondSkinColor);
	out.writeShort(this.job);
	out.writeInt(this.hair);
        out.writeInt(this.hair2);
	out.writeInt(this.face);
	out.writeInt(this.face2);
        out.writeInt(this.wp);
        out.writeInt(this.askguildid);
	out.writeInt(this.mapid);
	out.write(this.initialSpawnPoint);
	out.writeInt(this.rank);
	out.writeInt(this.rankMove);
	out.writeInt(this.worldRank);
	out.writeInt(this.worldRankMove);
	out.writeInt(this.guildid);
	out.write(this.guildrank);
	out.write(this.alliancerank);
	out.write(this.gmLevel);
  //      out.write(this.exeedCount);
        
	out.writeObject(this.BlessOfFairy);
	out.writeObject(this.BlessOfEmpress);

	out.writeObject(this.skillmacro);
	out.writeObject(this.keymap);
	out.writeObject(this.savedlocation);
	out.writeObject(this.famedcharacters);
	out.writeLong(this.lastfametime);
	out.writeObject(this.storage);
	out.writeObject(this.rocks);
	out.writeObject(this.wishlist);
	out.writeInt(this.mount_itemid);
	out.writeInt(this.mount_Fatigue);
	out.writeInt(this.mount_level);
	out.writeInt(this.mount_exp);
	out.writeInt(this.partyid);
	out.writeInt(this.messengerid);
	out.writeInt(this.messengerposition);
	out.writeInt(this.dojo);
	out.write(this.dojoRecord);
        out.writeInt(this.reborns);
	out.writeObject(this.inventorys);
	out.writeObject(this.InfoQuest);
        out.writeObject(this.profession);
        out.writeObject(this.stats);
        out.writeInt(this.realcash);
        out.writeInt(this.rankpoint);
        out.writeInt(this.gp);
        out.writeInt(this.boss);
        out.writeInt(this.mistic);
        out.writeInt(this.Soul);
        out.writeUTF(this.chatban);
        out.writeInt(this.betaclothes);
	out.writeShort(this.Skills.size());
	for (final Map.Entry<Integer, Object> qs : this.Skills.entrySet()) {
	    out.writeInt(qs.getKey()); // Questid instead of Skill, as it's huge :(
	    out.writeObject(qs.getValue());
	    // Bless of fairy is transported here too.
	}

	out.writeShort(this.buddysize);
	out.writeShort(this.buddies.size());
	for (final Map.Entry<MaplePlayerIdNamePair, Boolean> qs : this.buddies.entrySet()) {
	    out.writeInt(qs.getKey().getId());
	    out.writeUTF(qs.getKey().getName());
            out.writeInt(qs.getKey().getLevel());
            out.writeInt(qs.getKey().getJob());
	    out.writeBoolean(qs.getValue());
	}
	
	out.writeShort(this.Quest.size());
	for (final Map.Entry<Integer, Object> qs : this.Quest.entrySet()) {
	    out.writeInt(qs.getKey()); // Questid instead of MapleQuest, as it's huge :(
	    out.writeObject(qs.getValue());
	}
        out.writeObject(this.cashinventory);
        out.writeObject(this.quickslot);
        out.writeObject(this.CustomValues);
        out.writeObject(this.CustomValues2);
        out.writeObject(this.steelskills);
        out.writeObject(this.rebuyList);
        out.writeInt(this.headtitle);
        out.writeInt(this.cardStack);
        out.writeByte(this.monitored ? 1 : 0);
        out.writeByte(this.checkMech ? 1 : 0);
        out.writeByte(this.hidden ? 1 : 0);
        out.writeInt(this.effectssy);
        out.writeInt(this.innerexp);
        out.writeInt(this.innerlevel);
        out.writeByte(this.isFinalFiguration ? 1 : 0);
        out.writeObject(this.innerSkills);
        out.writeObject(this.aswanShopList);
        out.writeObject(this.android);
        out.writeObject(this.extendedSlots);
    }
}
