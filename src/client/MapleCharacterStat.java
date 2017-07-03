/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client;

import client.items.*;
import client.skills.Skill;
import client.skills.SkillEntry;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import client.stats.BuffStats;
import client.stats.PlayerStat;
import constants.GameConstants;
import constants.ServerConstants;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;
import launch.ChannelServer;
import packet.creators.MainPacketCreator;
import packet.transfer.write.WritingPacket;
import server.items.ItemInformation;
import server.items.StructSetItem;
import server.items.StructSetItem.SetItem;
import server.maps.MapleMap;
import server.maps.MapleSubSummon;
import tools.HexTool;
import tools.Timer;

public class MapleCharacterStat {

    private transient WeakReference<MapleCharacter> chr;
    public int str, dex, luk, int_, maxhp, maxmp, mp, saintsaver;
    public long hp, ChDelay = 0;
    private transient int localmaxhp, localmaxmp;
    public transient int calculateOriginMaxHp, calculateOriginMaxMp;
    private int ambition=0, insight=0, willpower=0, diligence=0, empathy=0, charm=0;
    private transient Map <Integer, Integer> demonForce = new HashMap <Integer, Integer>();
    private Map<Integer, Integer> setHandling = new HashMap(), damageIncrease = new HashMap();
    public transient short passive_sharpeye_min_percent, passive_sharpeye_percent, passive_sharpeye_rate;
    private transient int magic,  watk,  hands,  accuracy, minAttack, maxAttack, wmastery, mmastery;
    private transient int localstr,  localdex,  localluk,  localint_;
    private transient int incAllItemHP, incAllItemMP;
    public transient double expBuff, dam_r,  bossdam_r;
    public transient int recoverHP,  recoverMP,  mpconReduce,  incMesoProp,  incRewardProp,  DAMreflect,  DAMreflect_rate,  mpRestore,  hpRecover,  hpRecoverProp,  mpRecover,  mpRecoverProp,  RecoveryUP,  incAllskill;
    public transient int percent_hp, percent_mp, percent_str, percent_dex, percent_int, percent_luk, percent_acc, percent_atk, percent_matk, speed, jump, ignoreTargetDEF;
    private int morph = 0;
    private int morph2 = 10000;
    private boolean jc = false;
    private MapleSubSummon ss = null;
    private int ���������� = 0;
  
    public MapleCharacterStat(final MapleCharacter chr) {
	// TODO, move str/dex/int etc here -_-
	this.chr = new WeakReference<MapleCharacter>(chr);
    }
    
    public int getForce(int room) {
        if (demonForce.containsKey(room)) {
            
            return demonForce.get(room);
        }
        return 0;
    }
    
    public void setForce(int room, int amount) {
        demonForce.put(room, amount);
    }
    
    public int addForce(int amount) {
        int room = demonForce.size() + 1;
        demonForce.put(room, amount);
        return room;
    }
    
    public void setSubSummon(MapleSubSummon ss) {
        this.ss = ss;
    }
    
    public MapleSubSummon getSubSummon() {
        return ss;
    }
    
    public void setMorph(int amount) {
        morph = amount;
    }
    
    public int addMorph(int amount) {
        morph += amount;
        return morph;
    }
    
    public int getMorph() {
        return morph;
    }
    
    public void setMorph2(int amount) {
        morph2 = amount;
    }
    
    
    public int addMorph2(int amount) {
        morph2 += amount;
        return morph2;
    }
    
    public void setAmbition(int value) {
        this.ambition = value;
    }
    public int getAmbition() {
        return this.ambition;
    }
    public void setInsight(int value) {
        this.insight = value;
    }
    public int getInsight() {
        return this.insight;
    }
    public void setWillPower(int value) {
        this.willpower = value;
    }
    public int getWillPower() {
        return this.willpower;
    }
    public void setDiligence(int value) {
        this.diligence = value;
    }
    public int getDiligence() {
        return this.diligence;
    }
    public void setEmpathy(int value) {
        this.empathy = value;
    }
    public int getEmpathy() {
        return this.empathy;
    }
    public void setCharm(int value) {
        this.charm = value;
    }
    public int getCharm() {
        return this.charm;
    }
    
    public final void init() {
        recalcLocalStats();
    }
    
    public final int getLocalStr() {
        return localstr;
        
    }
    
    public final int getLocalDex() {
        return localdex;
    }
    
    public final int getLocalInt() {
        return localint_;
    }
    
    public final int getLocalLuk() {
        return localluk;
    }
    
    public final int getWMastery() {
        return wmastery;
    }
    
    public final int getMMastery() {
        return mmastery;
    }
    
    public final int getWAtk() {
        return watk;
    }
    
    public final int getMAtk() {
        return magic;
    }
    
    public final int getMinAttack() {
        return minAttack;
    }
    
    public final int getMaxAttack() {
        return maxAttack;
    }
    
    public final int getPercentWatk() {
        return percent_atk;
    }
    
    public final int getPercentMatk() {
        return percent_matk;
    }
    
    public final int getPercentStr() {
        return percent_str;
    }
    
    public final int getPercentDex() {
        return percent_dex;
    }
    
    public final int getPercentInt() {
        return percent_int;
    }
    
    public final int getPercentLuk() {
        return percent_luk;
    }

    public final int getStr() {
	return str;
    }

    public final int getDex() {
	return dex;
    }

    public final int getLuk() {
	return luk;
    }

    public final int getInt() {
	return int_;
    }

    public final void setStr(final int str) {
	this.str = str;
    }

    public final void setDex(final int dex) {
	this.dex = dex;
    }

    public final void setLuk(final int luk) {
	this.luk = luk;
    }

    public final void setInt(final int int_) {
	this.int_ = int_;
    }

    public final boolean setHp(final long newhp) {
	return setHp(newhp, false);
    }

   public final boolean setHp(long newhp, boolean silent) {
	final long oldHp = hp;
	long thp = newhp;
        thp = Math.max(0, thp);
        thp = Math.min(localmaxhp, thp);
	this.hp = thp;

	final MapleCharacter chra = chr.get();
	if (chra != null) {
	    if (oldHp > hp && !chra.isAlive() && chra.getMapId() != 109090300) {
                if (chra.getBuffedValue(BuffStats.LUCK_PHANTOM_THIEF) != null) { //�� ���� ���ҽ���
                    /* ���� x���� �𸣰�����, ��Ȱ�� x���� ����� ü���� %�� ȸ���Ǵ°ɷ� �����ϰ� ����. */
                    int percentage = chra.getBuffedValue(BuffStats.LUCK_PHANTOM_THIEF).intValue();
                    this.hp = (int) (localmaxhp * (percentage / 100.0D));
                    this.mp = (int) (localmaxmp * (percentage / 100.0D));
                    chra.updateSingleStat(client.stats.PlayerStat.HP, this.hp);
                    chra.updateSingleStat(client.stats.PlayerStat.MP, this.mp);
                    chra.Message("�� ���� ���ҽ����� ȿ���� ������ ����� ȸ���߽��ϴ�.");
                    chra.cancelEffectFromBuffStat(BuffStats.LUCK_PHANTOM_THIEF, -1);
                    //TODO: ����Ʈ�� �ֳ�? �ִٸ� ����Ʈ �߰� �ʿ�
                } else if (chra.getBuffedValue(BuffStats.HEAVENS_DOOR) != null) {
                  this.hp = chra.getStat().getMaxHp();
                  chra.updateSingleStat(PlayerStat.HP, this.hp);
                  chra.cancelEffectFromBuffStat(BuffStats.HEAVENS_DOOR, -1);
                } else if (chra.getBuffedValue(BuffStats.TIME_REWIND) != null) {
                    this.hp = chra.getStat().getMaxHp();
                    chra.updateSingleStat(PlayerStat.HP, this.hp);
                    chra.getClient().getSession().write(MainPacketCreator.showOwnBuffEffect(100001272, 8));
                    chra.cancelEffectFromBuffStat(BuffStats.TIME_REWIND, -1);
                } else if (chra.getSkillLevel(1320016) > 0 || chra.getSkillLevel(1320019) > 0 && !chra.reincooling()) {
                    this.hp = chra.getStat().getMaxHp();
                    this.mp = chra.getStat().getMaxMp();
                    chra.giveBuff(1320019, chra.getSkillLevel(1320016) > 0 ? chra.getSkillLevel(1320016) : chra.getSkillLevel(1320019));
                    chra.setReinCooling(true);
                    Timer.MapTimer.getInstance().schedule(new Runnable() {
                        @Override
                        public final void run() {
                            chra.setReinCooling(false);
                        }
                    }, 360000);
                }
            }
	    if (!silent) {
		chra.updatePartyMemberHP();
            }
            if (GameConstants.isDemonAvenger(chra.getJob())) {
                chra.send(MainPacketCreator.giveDemonWatk(hp));
            }
	}
	return hp != oldHp;
    }

    public final boolean setMp(final int newmp) {
	final int oldMp = mp;
	int tmp = newmp;
        tmp = Math.max(0, tmp);
        tmp = Math.min(localmaxmp, tmp);
	this.mp = tmp;
	return mp != oldMp;
    }
    

    public final boolean setMp(final int newmp, final MapleCharacter chra) {
        final int oldMp = mp;
        int tmp = newmp;
        if (tmp < 0) {
            tmp = 0;
        }
        if (tmp > localmaxmp) {
            tmp = localmaxmp;
        }
        this.mp = tmp;
        return mp != oldMp;
    }    
    
    public final void setMaxHp(final int hp) {
	this.maxhp = hp;
        this.setCurrentMaxHp(hp);
    }

    public final void setInfo(int maxhp, int maxmp, int hp, int mp) {
        this.maxhp = maxhp;
        this.maxmp = maxmp;
        this.hp = hp;
        this.mp = mp;
    }
    
   public final void setMaxMp(final int mp) {
	this.maxmp = mp;
        this.setCurrentMaxMp(mp);
    }

    public final long getHp() {
	return hp;
    }

    public final int getMaxHp() {
	return maxhp;
    }

    public final int getMp() {
	return mp;
    }

    public final int getMaxMp() {
	return maxmp;
    }
    
    
    public final int getCurrentMaxHp() {
	return localmaxhp;
    }
    
    public final int setCurrentMaxHp(int h) {
	return localmaxhp = h;
    }
    
    public final int getCurrentMaxMp() {
	return localmaxmp;
    }
    
    public final int setCurrentMaxMp(int j) {
	return localmaxmp = j;
    }

    private void handlePotential(StructPotentialItem pot, MapleCharacter player) {
        localstr += pot.incSTR;
        localdex += pot.incDEX;
        localint_ += pot.incINT;
        localluk += pot.incLUK;
        watk += pot.incPAD;
        magic += pot.incINT + pot.incMAD;
        speed += pot.incSpeed;
        jump += pot.incJump;
        accuracy += pot.incACC;
        incAllskill += pot.incAllskill;
        percent_hp += pot.incMHPr;
        percent_mp += pot.incMMPr;
        percent_str += pot.incSTRr;
        percent_dex += pot.incDEXr;
        percent_int += pot.incINTr;
        percent_luk += pot.incLUKr;
        percent_acc += pot.incACCr;
        percent_atk += pot.incPADr;
        percent_matk += pot.incMADr;
        passive_sharpeye_rate += pot.incCr;
        if (!pot.boss) {
            dam_r = (double) Math.max(pot.incDAMr, dam_r);
        } else {
            bossdam_r = (double) Math.max(pot.incDAMr, bossdam_r); //SET, not add
        }
        recoverHP += pot.RecoveryHP;
        recoverMP += pot.RecoveryMP;
        RecoveryUP += pot.RecoveryUP;
        if (pot.HP > 0) {
            hpRecover += pot.HP;
            hpRecoverProp += pot.prop;
        }
        if (pot.MP > 0) {
            mpRecover += pot.MP;
            mpRecoverProp += pot.prop;
        }
        mpconReduce += pot.mpconReduce;
        incMesoProp += pot.incMesoProp;
        incRewardProp += pot.incRewardProp;
        if (pot.DAMreflect > 0) {
            DAMreflect += pot.DAMreflect;
            DAMreflect_rate += pot.prop;
        }
        mpRestore += pot.mpRestore;
        if (pot.skillID > 0 && player.getSkillLevel(pot.skillID) <= 0) {
            player.changeSkillLevel((Skill) SkillFactory.getSkill(getSkillByJob(pot.skillID, player.getJob())), (byte) 1, (byte) 1);
        }
    }

    public void recalcLocalStats() {
        try {
        ItemInformation ii = ItemInformation.getInstance();
        StructPotentialItem pot;
        dam_r = 0.0;
        bossdam_r = 0.0;
        recoverHP = 0;
        recoverMP = 0;
        mpconReduce = 0;
        incMesoProp = 0;
        incRewardProp = 0;
        DAMreflect = 0;
        DAMreflect_rate = 0;
        hpRecover = 0;
        hpRecoverProp = 0;
        mpRecover = 0;
        mpRecoverProp = 0;
        mpRestore = 0;
        RecoveryUP = 0;
        incAllskill = 0;
        percent_hp = 0;
        percent_mp = 0;
        percent_str = 0;
        percent_dex = 0;
        percent_int = 0;
        percent_luk = 0;
        percent_acc = 0;
        percent_atk = 0;
        percent_matk = 0;
        speed = 100;
        jump = 100;
        localdex = getDex();
        localint_ = getInt();
        localstr = getStr();
        localluk = getLuk();
        localmaxhp = getMaxHp();
        localmaxmp = getMaxMp();
        magic = localint_;
        watk = 0;
        passive_sharpeye_rate = 5;
        passive_sharpeye_min_percent = 20;
        passive_sharpeye_percent = 50;
        setHandling.clear();
	MapleCharacter chra = chr.get(); // �̰� ���� �Ǽ� ������ �ߴ°Űŵ翩
        //������ ����
        if (chra.getKeyValue("Skill_111_Used") == null) {
            if (chra.getSkillLevel(111) > 0) {
                byte slot = (byte)SkillFactory.getSkill(112).getEffect(1).getX();
                chra.getInventory(MapleInventoryType.EQUIP).addSlot(slot);
                chra.getInventory(MapleInventoryType.USE).addSlot(slot);
                chra.getInventory(MapleInventoryType.ETC).addSlot(slot);
                chra.getInventory(MapleInventoryType.SETUP).addSlot(slot);
                chra.inventoryslot_changed = true;
                chra.setKeyValue("Skill_111_Used", "1");
            }
        }
        //������ ����2
        if (chra.getKeyValue("Skill_112_Used") == null) {
            if (chra.getSkillLevel(112) > 0) {
                byte slot = (byte)SkillFactory.getSkill(112).getEffect(1).getX();
                chra.getInventory(MapleInventoryType.EQUIP).addSlot(slot);
                chra.getInventory(MapleInventoryType.USE).addSlot(slot);
                chra.getInventory(MapleInventoryType.ETC).addSlot(slot);
                chra.getInventory(MapleInventoryType.SETUP).addSlot(slot);
                    chra.inventoryslot_changed = true;
                chra.setKeyValue("Skill_112_Used", "1");
            }
        }
        //���� �ڰ�
        if (chra.getKeyValue("Skill_20020112_Used") == null) {
            if (chra.getSkillLevel(20020112) > 0) {
                setCharm(getCharm() + 11040);
                chra.setKeyValue("Skill_20020112_Used", "1");
            }
        }
        //���� �����ͷ�Ƽ
        if (chra.getKeyValue("Skill_20030206_Used") == null) {
            if (chra.getSkillLevel(20030206) > 0) {
                setDiligence(getDiligence() + 4563);
                setInsight(getInsight() + 4563);
                chra.setKeyValue("Skill_20030206_Used", "1");
            }
        }
        //����� ����
        if (chra.getKeyValue("Skill_30010185_Used") == null) {
            if (chra.getSkillLevel(30010185) > 0) {
                setAmbition(getAmbition() + 4563);
                setWillPower(getWillPower() + 4563);
                chra.setKeyValue("Skill_30010185_Used", "1");
            }
        }
        if (GameConstants.getTraitLevel(getEmpathy()) >= 5) {
            localmaxmp += (Math.floor(GameConstants.getTraitLevel(getEmpathy()) / 5) * 100);
        }
        if (GameConstants.getTraitLevel(getWillPower()) >= 5) {
            localmaxhp += (Math.floor(GameConstants.getTraitLevel(getWillPower()) / 5) * 100);
        }
        
        for (IItem item : chra.getInventory(MapleInventoryType.EQUIPPED)) { 
            final IEquip equip = (IEquip) item;
            accuracy += equip.getAcc();
            localdex += equip.getDex();
            localint_ += equip.getInt();
            localstr += equip.getStr();
            localluk += equip.getLuk();
            magic += equip.getMatk();
            watk += equip.getWatk();
            speed += equip.getSpeed();
            jump += equip.getJump();
            localmaxhp += equip.getHp();
            localmaxmp += equip.getMp();
            percent_hp += equip.getHpR();
            percent_mp += equip.getMpR();
        }
        //updateEquipMaxHpMaxMp();

        for (IItem item : chra.getInventory(MapleInventoryType.EQUIPPED)) { 
            final IEquip equip = (IEquip) item;
            
            if (equip.getState() > 1) {
                int[] potentials = {equip.getPotential1(), equip.getPotential2(), equip.getPotential3(), equip.getPotential4(), equip.getPotential5()};
                for (int i : potentials) {
                    if (i > 0) {
                        if (ii.getReqLevel(equip.getItemId()) >= 10) {
                            pot = ii.getPotentialInfo(i).get((ii.getReqLevel(equip.getItemId()) / 10) -1);
                            if (pot != null) {
                                localmaxhp += pot.incMHP;
                                localmaxmp += pot.incMMP;
                                handlePotential(pot, chra);
                            }
                        } else {
                            pot = ii.getPotentialInfo(i).get(0);
                            if (pot != null) {
                                localmaxhp += pot.incMHP;
                                localmaxmp += pot.incMMP;
                                handlePotential(pot, chra);
                            }
                        }
                    }
                }
            }
            
            //��Ʈ������ ���밹�� ���ϱ�
            Integer setItemId = ii.getSetItemId(equip.getItemId());
            if (setItemId != null && setItemId > 0) {
                int value = 1;
                if (setHandling.containsKey(setItemId)) {
                    value += setHandling.get(setItemId).intValue();
                }
                setHandling.put(setItemId, value); //id of Set, number of items to go with the set
            }
        }
        Iterator iter = setHandling.entrySet().iterator();
        Map.Entry entry;
        while (iter.hasNext()) {
            entry = (Map.Entry) iter.next();
            StructSetItem set = ii.getSetItem(((Integer) entry.getKey()).intValue());
            if (set != null) {
                Map<Integer, SetItem> itemz = set.getItems();
                for (Entry ent : itemz.entrySet()) {
                    if (((Integer) ent.getKey()).intValue() <= ((Integer) entry.getValue()).intValue()) {
                        StructSetItem.SetItem se = (StructSetItem.SetItem) ent.getValue();
                        localstr += se.incSTR + se.incAllStat;
                        localdex += se.incDEX + se.incAllStat;
                        localint_ += se.incINT + se.incAllStat;
                        localluk += se.incLUK + se.incAllStat;
                        watk += se.incPAD;
                        magic += se.incMAD;
                        speed += se.incSpeed;
                        accuracy += se.incACC;
                        localmaxhp += se.incMHP;
                        localmaxmp += se.incMMP;
                        percent_hp += se.incMHPr;
                        percent_mp += se.incMMPr;
                    }
                }
            }
        }
        
        
        calculateStatAttack(chra);
        

        int maxhp_plus = 0;
        int maxmp_plus = 0;
        for (String strid : ServerConstants.hp_skillid_real) {
                int skillid = Integer.parseInt(strid);
                if (chra.getSkillLevel(skillid) > 0 && SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getLv2Mhp() > 0) {
                    maxhp_plus += (SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getLv2Mhp()) * chra.getLevel();
                } 
                if (chra.getSkillLevel(skillid) > 0 && SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMhpX() > 0) {
                    maxhp_plus += SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMhpX();
                }
                if (chra.getSkillLevel(skillid) > 0 && SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMhpR() > 0) {
                    percent_hp += SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMhpR();
                }
                if (chra.getSkillLevel(skillid) > 0 && SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getLv2Mmp() > 0) {
                    maxmp_plus += (SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getLv2Mmp()) * chra.getLevel();
                } 
                if (chra.getSkillLevel(skillid) > 0 && SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMmpX() > 0) {
                    maxmp_plus += SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMmpX();
                }
                if (chra.getSkillLevel(skillid) > 0 && SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMmpR() > 0) {
                    percent_mp += SkillFactory.getSkill(skillid).getEffect(chra.getSkillLevel(skillid)).getMmpR();
                }
        }

        if (chra.getBuffedValue(BuffStats.COMBAT_ORDERS) != null) {
            incAllskill += chra.getBuffedValue(BuffStats.COMBAT_ORDERS).intValue();
        }
        if (GameConstants.isDemonSlayer(chra.getJob()) && GameConstants.isDemonAvenger(chra.getJob())) {
            localmaxmp = maxmp;
            IItem shield = chra.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10);
            if (shield != null) {
                localmaxmp += ((Equip) shield).getMp();
            }
        }
      
        localstr += (int) (localstr * percent_str) / 100.0D;
        localdex += (int) (localdex * percent_dex) / 100.0D;
        localint_ += (int) (localint_ * percent_int) / 100.0D;
        localluk += (int) (localluk * percent_luk) / 100.0D;
        localmaxhp += maxhp_plus;
        localmaxhp += (int) (localmaxhp * (percent_hp * 0.01D));
        localmaxmp += maxmp_plus;
        localmaxmp += (int) (localmaxmp * (percent_mp * 0.01D));
        //calcMP, calcHP�� �̿��Ͽ� localmaxhp, localmaxhp�� ���� �ν��Ͱ� ���ϱ�.
	Integer buff;
        buff = chra.getBuffedValue(BuffStats.STACK_HP);
        if (buff != null) {
            localmaxhp += buff.intValue();
        }
        buff = chra.getBuffedValue(BuffStats.STACK_MP);
        if (buff != null) {
            localmaxmp += buff.intValue();
        }
	buff = chra.getBuffedValue(BuffStats.MAXHP);
	if (buff != null) {
	    localmaxhp += Math.round((buff.doubleValue() / 100.0D) * localmaxhp);
	}
	buff = chra.getBuffedValue(BuffStats.MAXMP);
	if (buff != null) {
	    localmaxmp += Math.round((buff.doubleValue() / 100.0D) * localmaxmp);
	}
	buff = chra.getBuffedValue(BuffStats.MAXHP_PHANTOM_R);
	if (buff != null) {
	    localmaxhp += Math.round((buff.doubleValue() / 100.0D) * localmaxhp);
	}
	buff = chra.getBuffedValue(BuffStats.MAXMP_PHANTOM_R);
	if (buff != null) {
	    localmaxmp += Math.round((buff.doubleValue() / 100.0D) * localmaxmp);
	}
	buff = chra.getBuffedValue(BuffStats.MONSTER_RIDING);
	if (buff != null && chra.getBuffedValue(BuffStats.MONSTER_RIDING, 33001001) != null) {
	    localmaxhp += Math.round((0.4D) * localmaxhp);
	}

	buff = chra.getBuffedValue(BuffStats.SWALLOW_MPMAX);
	if (buff != null) {
	    localmaxmp += Math.round((buff.doubleValue() / 100.0D) * localmaxmp);
	}
	buff = chra.getBuffedValue(BuffStats.BISTFORM_HP);
	if (buff != null) {
	    localmaxhp += Math.round((buff.doubleValue() / 100.0D) * localmaxhp);
	}
	buff = chra.getBuffedValue(BuffStats.SPIRIT_LINK);
	if (buff != null) {
	    localmaxhp += Math.round((buff.doubleValue() / 100.0D) * localmaxhp);
	}
	buff = chra.getBuffedValue(BuffStats.ROLL_OF_DICE);
	if (buff != null) {
            int rand1 = 0;
            int rand2 = 0;
            rand1 = buff.intValue() & 0xF;
            rand2 = buff.intValue() & 0xF0;
            if (rand1 == 3 && rand2 == 3) {
                localmaxhp += Math.round((60 / 100.0D) * localmaxhp);
            } else if (rand1 == 3) {
                localmaxhp += Math.round((30 / 100.0D) * localmaxhp);
            }
	}
	buff = chra.getBuffedValue(BuffStats.ROLL_OF_DICE);
	if (buff != null) {
            int rand1 = 0;
            int rand2 = 0;
            rand1 = buff.intValue() & 0xF;
            rand2 = buff.intValue() & 0xF0;
            if (rand1 == 3 && rand2 == 3) {
                localmaxmp += Math.round((60 / 100.0D) * localmaxmp);
            } else if (rand1 == 3 || (rand1 == 1 && rand2 == 3)) {
                localmaxmp += Math.round((60 / 100.0D) * localmaxmp);
            }
	}
        buff = chra.getBuffedValue(BuffStats.ENHANCED_MAXHP);
        if (buff != null) {
            localmaxhp += buff.intValue();
        }
        buff = chra.getBuffedValue(BuffStats.ENHANCED_MAXMP);
        if (buff != null) {
            localmaxmp += buff.intValue();
        }
        
        buff = chra.getBuffedValue(BuffStats.CONVERSION);
        if (buff != null) {
            localmaxhp += (int) (Math.round((buff.intValue() / 100.0D) + localmaxhp));
        }
        
        accuracy += (int) (accuracy * percent_acc) / 100.0D;
        watk += (int) (watk * percent_atk) / 100.0D;
        magic += (int) (magic * percent_matk) / 100.0D;
        
        localmaxhp = Math.min(500000, localmaxhp);
        localmaxmp = Math.min(500000, localmaxmp);
        hp = Math.min (hp, localmaxhp);
        mp = Math.min (mp, localmaxmp);
	chra.updatePartyMemberHP();
        calcPassiveSharpEye(chra);
        } catch (NullPointerException ex) {
        }
    }

    public final int getIncAllSkill() {
        return incAllskill;
    }
    
    public final void giveDemonWatk(MapleCharacter chra) {
        chra.send(MainPacketCreator.giveDemonWatk(localmaxhp));
    }
    
    public final void connectData(final WritingPacket mplew) {
	mplew.writeShort(str); // str
	mplew.writeShort(dex); // dex
	mplew.writeShort(int_); // int
	mplew.writeShort(luk); // luk
	mplew.writeInt(hp); // hp
	mplew.writeInt(maxhp); // maxhp
	mplew.writeInt(mp); // mp
	mplew.writeInt(maxmp); // maxmp
    }
    
    public final void ZeroData(final WritingPacket packet, final MapleCharacter chr) {
        packet.writeInt(0);
        packet.writeInt(0);
        packet.write(0xFF);
        packet.write(0xFF);
        packet.write(chr.getSecondGender());
        packet.writeInt(maxhp);
        packet.writeInt(maxmp);
        packet.write(chr.getSecondSkinColor());
        packet.writeInt(chr.getSecondHair());
        packet.writeInt(chr.getSecondFace());
        packet.writeInt(hp);
        packet.writeInt(mp);
        packet.writeInt(0); //1.2.220+
        packet.writeInt(-1); //1.2.220+
        packet.writeInt(0); //1.2.220+
    }

    public static final int getSkillByJob(final int skillID, final int job) {
        if (GameConstants.isKOC(job)) {
            return skillID + 10000000;
        } else if (GameConstants.isAran(job)) {
            return skillID + 20000000;
        } else if (GameConstants.isEvan(job)) {
            return skillID + 20010000;
        } else if (GameConstants.isDemonSlayer(job) || GameConstants.isDemonAvenger(job)) {
            return skillID + 30010000;
	} else if (GameConstants.isXenon(job)) {
	    return skillID + 30020000;
	} else if (GameConstants.isMercedes(job)) {
            return skillID + 20020000;
	} else if (GameConstants.isPhantom(job)) {
            return skillID + 20030000;
	} else if (GameConstants.isLuminous(job)) {
            return skillID + 20040000;
	} else if (GameConstants.isMikhail(job)) {
            return skillID + 50000000;
	} else if (GameConstants.isKaiser(job)) {
            return skillID + 60000000;
	} else if (GameConstants.isAngelicBuster(job)) {
	    return skillID + 60010000;
        } else if (GameConstants.isResistance(job)) {
            return skillID + 30000000;
	}
        return skillID;
    }
    
    private final void calcPassiveSharpEye(final MapleCharacter player) {
        if (GameConstants.isResistance(player.getJob())) {
            ISkill critSkill = (Skill) SkillFactory.getSkill(30000022);
            int critlevel = player.getSkillLevel(critSkill);
            if (critlevel > 0) {
                passive_sharpeye_rate += critSkill.getEffect(critlevel).getProb();
                this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
            }
            critSkill = (Skill) SkillFactory.getSkill(30010022);
            critlevel = player.getSkillLevel(critSkill);
            if (critlevel > 0) {
                passive_sharpeye_rate += critSkill.getEffect(critlevel).getProb();
                this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
            }
        }
        switch (player.getJob()) { // Apply passive Critical bonus
            //������ �����ϰ� ���, ���� ȥ�� ��� ����
            case 400:
            case 410:
            case 411:
            case 412: 
            case 420: 
            case 421: 
            case 422: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(4100001);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getProb());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                final ISkill bx = (Skill) SkillFactory.getSkill(4110012);
                final int bof = player.getSkillLevel(bx);
                    if (bof > 0) {
                        SkillStatEffect eff;
                        eff = bx.getEffect(bof);
                        damageIncrease.put(4001344, eff.getDAMRate());
                        damageIncrease.put(4101008, eff.getDAMRate());
                        damageIncrease.put(4101009, eff.getDAMRate());
                        damageIncrease.put(4101010, eff.getDAMRate());
                    }
                break;
            }  
            case 110:
            case 111:
            case 112: {
                SkillStatEffect eff;
                final ISkill bx = (Skill) SkillFactory.getSkill(1110009);
                final int bof = player.getSkillLevel(bx);
                if (bof > 0) {
                    eff = bx.getEffect(bof);
                    dam_r *= eff.getDamage() / 100.0;
                    bossdam_r *= eff.getDamage() / 100.0;
                }
                ISkill bx2 = (Skill) SkillFactory.getSkill(1120012);
                int bof2 = player.getSkillLevel(bx2);
                if (bof2 > 0) {
                    this.ignoreTargetDEF += bx.getEffect(bof2).getIgnoreMob();
                }
            }
            case 300:
            case 310:
            case 311:
            case 312:
            case 320:
            case 321:
            case 322: { // Bowman
                final ISkill critSkill = (Skill) SkillFactory.getSkill(3000001);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getProb());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                SkillStatEffect eff;
                final ISkill bx2 = (Skill) SkillFactory.getSkill(3120011);
                final int bof2 = player.getSkillLevel(bx2);
                if (bof2 > 0) {
                    eff = bx2.getEffect(bof2);
                    percent_hp += eff.getPercentHP();
                    ignoreTargetDEF += eff.getIgnoreMob();
                }
                final ISkill bx3 = (Skill) SkillFactory.getSkill(3220009);
                final int bof3 = player.getSkillLevel(bx3);
                if (bof3 > 0) {
                    eff = bx3.getEffect(bof3);
                    percent_hp += eff.getPercentHP();
                    ignoreTargetDEF += eff.getIgnoreMob();
                }
                break;
            }
            case 1410:
            case 1411:
            case 1412: { // Night Walker
                final ISkill critSkill = (Skill) SkillFactory.getSkill(14100001);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getProb());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 3100:
            case 3110:
            case 3111:
            case 3112: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(31100006); //TODO LEGEND, not final
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    this.watk += critSkill.getEffect(critlevel).getAttackX();
                    return;
                }
                break;
            }
            case 2002:
            case 2300:
            case 2310:
            case 2311:
            case 2312: {            
//                final ISkill bx = (Skill) SkillFactory.getSkill(20021110);
//                final int bof = player.getSkillLevel(bx);
//                if (bof > 0) {
//                    expBuff *= (bx.getEffect(bof).getEXPRate() + 100.0) / 100.0;
//                }
                final ISkill critSkill = (Skill) SkillFactory.getSkill(23000003);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 3210:
            case 3211:
            case 3212: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(32100006);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 434: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(4340010);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getProb());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 520:
            case 521:
            case 522: {
                final ISkill critSkill1 = (Skill) SkillFactory.getSkill(5000007);
                final int critlevel1 = player.getSkillLevel(5000007);
                if (critlevel1 > 0) {
                    this.passive_sharpeye_rate += (short) critSkill1.getEffect(critlevel1).getCr();
                    this.passive_sharpeye_min_percent += critSkill1.getEffect(critlevel1).getCriticalMin();
                }
                final ISkill critSkill = (Skill) SkillFactory.getSkill(5200007);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 1211:
            case 1212: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(12110000);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 530:
            case 531:
            case 532: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(5300004);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 510:
            case 511:
            case 512: { // Buccaner, Viper
                final ISkill critSkill = (Skill) SkillFactory.getSkill(5000007);
                final int critlevel = player.getSkillLevel(5000007);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) critSkill.getEffect(critlevel).getCr();
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                }
                final ISkill critSkill2 = (Skill) SkillFactory.getSkill(5110011);
                final int critlevel2 = player.getSkillLevel(5110011);
                if (critlevel2 > 0) {
                    this.passive_sharpeye_rate += (short) critSkill2.getEffect(critlevel2).getCr();
                    this.passive_sharpeye_min_percent += critSkill2.getEffect(critlevel2).getCriticalMin();
                }
                break;
            }
            case 1511:
            case 1512: {
                final ISkill critSkill2 = (Skill) SkillFactory.getSkill(15110009);
                final int critlevel2 = player.getSkillLevel(critSkill2);
                if (critlevel2 > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill2.getEffect(critlevel2).getProb());
                    this.passive_sharpeye_min_percent += critSkill2.getEffect(critlevel2).getCriticalMin();
                    return;
                }
                break;
            }
            case 2111:
            case 2112: {
                final ISkill critSkill = (Skill) SkillFactory.getSkill(21110000);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) ((critSkill.getEffect(critlevel).getX() * critSkill.getEffect(critlevel).getY()) + critSkill.getEffect(critlevel).getCr());
                    return;
                }
                break;
            }
            case 210:
            case 211:
            case 212: {
                SkillStatEffect eff;
                final ISkill id = (Skill) SkillFactory.getSkill(2120010);
                final int level = player.getSkillLevel(id);
                if (level > 0) {
                    eff = id.getEffect(level);
                    dam_r *= (eff.getX() * eff.getY() + 100.0) / 100.0;
                    bossdam_r *= (eff.getX() * eff.getY() + 100.0) / 100.0;
                }
                break;
            }
            case 220:
            case 221:
            case 222: { 
                SkillStatEffect eff;
                final ISkill id2 = (Skill) SkillFactory.getSkill(2220010);
                final int level2 = player.getSkillLevel(id2);
                if (level2 > 0) {
                    eff = id2.getEffect(level2);
                    dam_r *= (eff.getX() * eff.getY() + 100.0) / 100.0;
                    bossdam_r *= (eff.getX() * eff.getY() + 100.0) / 100.0;
                    ignoreTargetDEF += eff.getIgnoreMob();
                }
                break;
            }
            case 230:
            case 231:
            case 232: { //���
                SkillStatEffect eff;
                final ISkill id3 = (Skill) SkillFactory.getSkill(2220010);
                final int level3 = player.getSkillLevel(id3);
                if (level3 > 0) {
                    eff = id3.getEffect(level3);
                    dam_r *= (eff.getX() * eff.getY() + 100.0) / 100.0;
                    bossdam_r *= (eff.getX() * eff.getY() + 100.0) / 100.0;
                    ignoreTargetDEF += eff.getIgnoreMob();
                }
                break;
            }
            case 1300:
            case 1310:
            case 1311:
            case 1312: { // Bowman
                final ISkill critSkill = (Skill) SkillFactory.getSkill(13000000);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getProb());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 2001:
            case 2210:
            case 2211:
            case 2212:
            case 2213:
            case 2214:
            case 2215:
            case 2216:
            case 2217:
            case 2218: { //Evan
                final ISkill critSkill = (Skill) SkillFactory.getSkill(22140000);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getProb());
                    this.passive_sharpeye_min_percent += critSkill.getEffect(critlevel).getCriticalMin();
                    return;
                }
                break;
            }
            case 2003:
            case 2400:
            case 2410:
            case 2411:
            case 2412: { //����
                final ISkill critSkill = (Skill) SkillFactory.getSkill(24110007);
                final int critlevel = player.getSkillLevel(critSkill);
                if (critlevel > 0) {
                    this.passive_sharpeye_rate += (short) (critSkill.getEffect(critlevel).getCr());
                    return;
                }
                break;
            }
        }
        
        /* ���ٰ� �߰��� �ؾߵ��� �𸣰ھ �׳� ���⿡ �߰�... ��������� ����/�̵� ��Ź..*/
        MapleCharacter chra = chr.get();
        if (chra.getBuffedValue(BuffStats.ROLL_OF_DICE) != null) {
            int rand1 = 0;
            int rand2 = 0;
            rand1 = chra.getBuffedValue(BuffStats.ROLL_OF_DICE).intValue() & 0xF;
            rand2 = chra.getBuffedValue(BuffStats.ROLL_OF_DICE).intValue() & 0xF0;
            if (rand1 == 4 && rand2 == 4) {
                this.passive_sharpeye_rate += 30;
            }
            else if (rand1 == 4 || (rand1 == 1 && rand2 == 4)) {
                this.passive_sharpeye_rate += 15;
            }
        }
        
        
    }
    
    public final short passive_sharpeye_min_percent() {
        return passive_sharpeye_min_percent;
    }

    public final short passive_sharpeye_percent() {
        return passive_sharpeye_percent;
    }

    public final short passive_sharpeye_rate() {
        return passive_sharpeye_rate;
    }
    
    public final int getEquipIncHP() {
        return incAllItemHP;
    }
    public final int getEquipIncMP() {
        return incAllItemMP;
    }
    public final void addSaintSaver(int amount) {
//        MapleCharacter hpz = chr.get();
//        if (hpz != null) {
//            if (hpz.getBuffedValue(BuffStats.SAINT_SAVER) == null) {
//                saintsaver = Math.min(500, saintsaver+amount);
//                hpz.send(MainPacketCreator.saintSaver(hpz));
//            }
//        }
    }
    public final int getSaintSaver() {
        return saintsaver;
    }
    
    
    public final void calculateStatAttack(MapleCharacter chr) {
        wmastery = 20;
        mmastery = 20;
        PlayerJobType jobtype = getJobStatType(chr.getJob());
        if (jobtype == null) {
        //    System.err.println("[ X ] ���� ���ݷ� ��� �� ������ �߻�. - �� �� ���� ���� �ڵ��Դϴ�. : " + chr.getJob());
            return;
        }

        IItem weapon1 = chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11);
        IItem weapon2 = chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10);
        if (weapon2 != null) {
            if (GameConstants.getWeaponType(weapon2.getItemId()) == MapleWeaponType.NOT_A_WEAPON) {
                weapon2 = null;
            }
        }


        if (weapon1 == null) { //���� ������
            minAttack = 0;
            maxAttack = 0;
            return;
        }

        calculateAttackSkillPassive(chr);

        int allAttack = 0;
        if (jobtype == PlayerJobType.INT) {
            allAttack = (int) (magic * (1 + (percent_matk / 100.0D)));
        } else {
            allAttack = (int) (watk * (1 + (percent_atk / 100.0D)));
        }
        long primaryStat = 0;
        int secondaryStat = 0;
        int allPrimaryStat = 0;
        int allSecondaryStat = 0;
        if (jobtype == PlayerJobType.DEX) {
            primaryStat = localdex;
            secondaryStat = localstr;
            allPrimaryStat = (int) (primaryStat * (1 + (percent_dex / 100.0D)));
            allSecondaryStat = (int) (secondaryStat * (1 + (percent_str / 100.0D)));
        } else if (jobtype == PlayerJobType.INT) {
            primaryStat = localint_;
            secondaryStat = localluk;
            allPrimaryStat = (int) (primaryStat * (1 + (percent_int / 100.0D)));
            allSecondaryStat = (int) (secondaryStat * (1 + (percent_luk / 100.0D)));
        } else if (jobtype == PlayerJobType.LUK) {
            primaryStat = localluk;
            if (GameConstants.isXenon(chr.getJob())) {
            secondaryStat = localstr;
            allPrimaryStat = (int) ((primaryStat * (1 + (percent_luk / 100.0D))) / 3);
            allSecondaryStat = (int) (secondaryStat * (1 + (percent_dex / 100.0D)));
            } else {
            secondaryStat = localdex;
            allPrimaryStat = (int) (primaryStat * (1 + (percent_luk / 100.0D)));
            allSecondaryStat = (int) (secondaryStat * (1 + (percent_dex / 100.0D)));
            }
        } else if (jobtype == PlayerJobType.STR) {
            primaryStat = localstr;
            secondaryStat = localdex;
            allPrimaryStat = (int) (primaryStat * (1 + (percent_str / 100.0D)));
            allSecondaryStat = (int) (secondaryStat * (1 + (percent_dex / 100.0D)));
        } else if (jobtype == PlayerJobType.HP) {
            primaryStat = hp;
            secondaryStat = localstr;
            if (hp / localmaxhp >= 0.7) {
            allPrimaryStat = (int) (primaryStat / 20);//1 / 20
            } else {
                allPrimaryStat = (int) ((localmaxhp * 0.7) / 20);
            }
            allSecondaryStat = (int) ((secondaryStat * (1 + (percent_hp / 100.0D))) / 2);//10 : 5
        }


        float weapon1Multiplier = 0;
        if (weapon1 != null) {
            weapon1Multiplier = GameConstants.getWeaponType(weapon1.getItemId()).getMaxDamageMultiplier();
        }
        float weapon2Multiplier = 0;
        if (weapon2 != null) {
            weapon2Multiplier = GameConstants.getWeaponType(weapon2.getItemId()).getMaxDamageMultiplier();
        }
        maxAttack = (int) ((weapon1Multiplier * ((allPrimaryStat * 4) + allSecondaryStat)) * (allAttack / 100.0D));
        if (weapon2 != null) {
            maxAttack += (int) (weapon2Multiplier * ((allPrimaryStat * 4) + allSecondaryStat) * ((allAttack / 100.0D)));
        }
        if (jobtype == PlayerJobType.INT) {
            minAttack = (int) (maxAttack * (mmastery / 100.0D));
        } else {
            minAttack = (int) (maxAttack * (wmastery / 100.0D));
        }
    }

    public enum PlayerJobType {

        STR(0),
        DEX(1),
        LUK(2),
        INT(3),
        HP(4);
        private int type;

        private PlayerJobType(int d) {
            this.type = d;
        }

        public int getType() {
            return type;
        }
    }

    public PlayerJobType getJobStatType(int job) {
        switch (job) {
            case 0:
            case 100:
            case 110:
            case 111:
            case 112:
            case 120:
            case 121:
            case 122:
            case 130:
            case 131:
            case 132:
            case 1000:
            case 1100:
            case 1110:
            case 1111:
            case 1112:
            case 2000:
            case 2100:
            case 2110:
            case 2111:
            case 2112:
            case 2005:
            case 2500:
            case 2510:
            case 2511:
            case 2512:
            case 2001:
            case 5000:
            case 3000:
            case 3001:
            case 3100:
            case 3110:
            case 3111:
            case 3112:
            case 5100:
            case 5110:
            case 5111:
            case 5112:
            case 1500:
            case 1510:
            case 1511:
            case 1512:
            case 500:
            case 510:
            case 511:
            case 512:
            case 900:
            case 800:
            case 6000:
            case 6100:
            case 6110:
            case 6111:
            case 6112:
            case 10000:
            case 10100:
            case 10110:
            case 10111:
            case 10112:
                return PlayerJobType.STR;
            case 200:
            case 210:
            case 211:
            case 212:
            case 220:
            case 221:
            case 222:
            case 230:
            case 231:
            case 232:
            case 1200:
            case 1210:
            case 1211:
            case 1212:
            case 2200:
            case 2210:
            case 2211:
            case 2212:
            case 2213:
            case 2214:
            case 2215:
            case 2216:
            case 2217:
            case 2218:
            case 3200:
            case 3210:
            case 3211:
            case 3212:
            case 2004:
            case 2700:
            case 2710:
            case 2711:
            case 2712:
                return PlayerJobType.INT;
            case 300:
            case 310:
            case 311:
            case 312:
            case 320:
            case 321:
            case 322:
            case 1300:
            case 1310:
            case 1311:
            case 1312:
            case 2300:
            case 2310:
            case 2311:
            case 2312:
            case 3300:
            case 3310:
            case 3311:
            case 3312:
            case 520:
            case 521:
            case 522:
            case 3500:
            case 3510:
            case 3511:
            case 3512:
            case 6001:
            case 6500:
            case 6510:
            case 6511:
            case 6512:
                return PlayerJobType.DEX;
            case 400:
            case 410:
            case 411:
            case 412:
            case 420:
            case 421:
            case 422:
            case 430:
            case 431:
            case 432:
            case 433:
            case 434:
            case 1400:
            case 1410:
            case 1411:
            case 1412:
            case 2400:
            case 2410:
            case 2411:
            case 2412:
            case 3600:
            case 3610:
            case 3611:
            case 3612:
                return PlayerJobType.LUK;      
            case 3101:
            case 3120:
            case 3121:
            case 3122:
                return PlayerJobType.HP;
        }
        return PlayerJobType.STR;
    }
    
    public final void calculateAttackSkillPassive(MapleCharacter chr) {
        
        
        if (chr.getBuffedValue(BuffStats.MAPLE_WARRIOR) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.MAPLE_WARRIOR);
            this.percent_dex += buff;
            this.percent_str += buff;
            this.percent_int += buff;
            this.percent_luk += buff;
        }
        if (chr.getBuffedValue(BuffStats.STACK_ALLSTAT) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.STACK_ALLSTAT);
            this.percent_dex += buff;
            this.percent_str += buff;
            this.percent_int += buff;
            this.percent_luk += buff;
        }
        if (chr.getBuffedValue(BuffStats.STACK_WATK) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.STACK_WATK);
            this.watk += buff;
        }
        if (chr.getBuffedValue(BuffStats.STACK_MATK) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.STACK_MATK);
            this.magic += buff;
        }
        if (chr.getBuffedValue(BuffStats.WATK) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.WATK);
            this.watk += buff;
        }
        if (chr.getBuffedValue(BuffStats.MATK) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.MATK);
            this.magic += buff;
        }
        if (chr.getBuffedValue(BuffStats.DMG_INC) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.DMG_INC);
            this.percent_atk += buff;
        }
        if (chr.getBuffedValue(BuffStats.BISTFORM_DAMAGE) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.BISTFORM_DAMAGE);
            this.percent_atk += buff;
        }
        if (chr.getBuffedValue(BuffStats.DAMAGE_R_PHANTOM) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.DAMAGE_R_PHANTOM);
            this.percent_atk += buff;
        }
        if (chr.getBuffedValue(BuffStats.FINAL_CUT) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.FINAL_CUT);
            this.percent_atk += buff;
        }
        if (chr.getBuffedValue(BuffStats.COMBO) != null) {
            Integer count = chr.getBuffedValue(BuffStats.COMBO);
            int buff = chr.getBuffedSkillEffect(BuffStats.COMBO).getSkillStats().getStats("damR");
            this.percent_atk += buff * count;
        }
        if (chr.getBuffedValue(BuffStats.ENRAGE) != null) {
            int buff = chr.getBuffedSkillEffect(BuffStats.ENRAGE).getSkillStats().getStats("x");
            this.percent_atk += buff;
        }
        if (chr.getBuffedValue(BuffStats.ADVANCED_BLESSING) != null) {
            int buff = chr.getBuffedSkillEffect(BuffStats.ADVANCED_BLESSING).getSkillStats().getStats("x");
            this.percent_atk += buff;
            int buff2 = chr.getBuffedSkillEffect(BuffStats.ADVANCED_BLESSING).getSkillStats().getStats("y");
            this.percent_matk += buff2;
        }
	if (chr.getBuffedValue(BuffStats.ROLL_OF_DICE) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.ROLL_OF_DICE);
            int rand1 = 0;
            int rand2 = 0;
            rand1 = buff.intValue() & 0xF;
            rand2 = buff.intValue() & 0xF0;
            if (rand1 == 3 && rand2 == 3) {
                percent_atk += 40;
            } else if (rand1 == 3) {
                percent_atk += 20;
            }
	}
        if (chr.getBuffedValue(BuffStats.ENHANCED_WATK) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.ENHANCED_WATK);
            this.watk += buff;
        }
        if (chr.getBuffedValue(BuffStats.ENHANCED_MATK) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.ENHANCED_MATK);
            this.magic += buff;
        }
        if (chr.getBuffedValue(BuffStats.DEX_UP) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.DEX_UP);
            this.localdex += buff;
        }
        if (chr.getBuffedValue(BuffStats.STR_UP) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.STR_UP);
            this.localstr += buff;
        }
        if (chr.getBuffedValue(BuffStats.BLESS) != null) {
            Integer buff = chr.getBuffedValue(BuffStats.BLESS);
            this.watk += buff;
            this.magic += buff;
        }
        if (chr.getBuffedValue(BuffStats.BEHOLDER) != null) {
            this.wmastery += chr.getBuffedSkillEffect(BuffStats.BEHOLDER).getSkillStats().getStats("mastery");
        }
        if (chr.getBuffedValue(BuffStats.DAMAGE_R_PHANTOM) != null) {
            if (chr.getBuffedValue(BuffStats.DAMAGE_R_PHANTOM, 5121015) != null) {
                if (MapleWeaponType.KNUCKLE == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                    this.wmastery = chr.getBuffedSkillEffect(BuffStats.DAMAGE_R_PHANTOM).getSkillStats().getStats("mastery");
                }
            }
        }
        
        
        for (Entry<ISkill, SkillEntry> se : chr.getSkills().entrySet()) {
            try {
                if (se.getKey() == null) {
                    continue;
                }
                if (se.getValue() == null) {
                    continue;
                }
                if (se.getValue().skillevel <= 0) {
                    continue;
                }
                if (chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11) == null) {
                    continue;
                }
                if (chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10) == null) {
                    continue;
                }
                SkillStatEffect eff = se.getKey().getEffect(chr.getSkillLevel(se.getKey().getId()));
                if (eff == null) {
                    continue;
                }
                if (eff.getSkillStats().getStats("padX") > 0) {
                    this.watk += eff.getSkillStats().getStats("padX");
                }
                if (eff.getSkillStats().getStats("madX") > 0) {
                    this.magic += eff.getSkillStats().getStats("madX");
                }
                if (eff.getSkillStats().getStats("strX") > 0) {
                    this.localstr += eff.getSkillStats().getStats("strX");
                }
                if (eff.getSkillStats().getStats("dexX") > 0) {
                    this.localdex += eff.getSkillStats().getStats("dexX");
                }
                if (eff.getSkillStats().getStats("intX") > 0) {
                    this.localint_ += eff.getSkillStats().getStats("intX");
                }
                if (eff.getSkillStats().getStats("lukX") > 0) {
                    this.localluk += eff.getSkillStats().getStats("lukX");
                }
                if (se.getKey().getId() == 2310008) {
                    this.percent_matk += eff.getSkillStats().getStats("damR");
                }
                if (se.getKey().getId() == 2110001) {
                    this.percent_matk += eff.getSkillStats().getStats("y");
                }
                if (se.getKey().getId() == 2210001) {
                    this.percent_matk += eff.getSkillStats().getStats("y");
                }
                if (GameConstants.getBOF_ForJob(chr.getJob()) == se.getKey().getId()) {
                    this.watk += eff.getSkillStats().getStats("x");
                    this.magic += eff.getSkillStats().getStats("y");
                }
                if (GameConstants.getBOE_ForJob(chr.getJob()) == se.getKey().getId()) {
                    this.watk += eff.getSkillStats().getStats("x");
                    this.magic += eff.getSkillStats().getStats("y");
                }
                boolean masterymodifed = false;
                if (eff.getSkillStats().getStats("mastery") > 0) {
                    switch (se.getKey().getId()) {
                        case 2310008:
                            this.mmastery = eff.getSkillStats().getStats("mastery");//
                            masterymodifed = true;
                            break;
                        case 22170002:
                            this.mmastery = eff.getSkillStats().getStats("mastery");//
                            this.magic += eff.getSkillStats().getStats("x");
                            masterymodifed = true;
                            break;
                        case 22120002:
                            if (!masterymodifed)
                            this.mmastery += eff.getSkillStats().getStats("mastery");
                            this.magic += eff.getSkillStats().getStats("x");
                            break;
                        case 2100006:
                        case 2200006:
                        case 2300006:
                        case 12100007:
                            if (!masterymodifed)
                            this.mmastery += eff.getSkillStats().getStats("mastery");
                            break;
                        case 32100006:
                            if (MapleWeaponType.STAFF == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.mmastery += eff.getSkillStats().getStats("mastery");
                                this.magic += eff.getSkillStats().getStats("x");
                            }
                            break;
                        case 3120005:
                        case 13110003:
                            if (MapleWeaponType.BOW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                this.watk += eff.getSkillStats().getStats("x");
                                masterymodifed = true;
                            }
                            break;
                        case 3100000:
                        case 13100000:
                            if (MapleWeaponType.BOW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 3220004:
                        case 33120000:
                            if (MapleWeaponType.CROSSBOW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                this.watk += eff.getSkillStats().getStats("x");
                                masterymodifed = true;
                            }
                            break;
                        case 3200000:
                        case 33100000:
                            if (MapleWeaponType.CROSSBOW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 4100000:
                        case 14100000:
                            if (MapleWeaponType.CLAW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 4120012:
                            if (MapleWeaponType.CLAW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                this.watk += eff.getSkillStats().getStats("x");
                                masterymodifed = true;
                            }
                            break;
                        case 4200000:
                            if (MapleWeaponType.DAGGER == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 4220012:
                            if (MapleWeaponType.DAGGER == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                this.watk += eff.getSkillStats().getStats("x");
                                masterymodifed = true;
                            }
                            break;
                        case 4300000:
                            if (MapleWeaponType.DAGGER == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())
                            && MapleWeaponType.KATARA == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 4340013:
                            if (MapleWeaponType.DAGGER == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())
                            && MapleWeaponType.KATARA == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -10).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                this.watk += eff.getSkillStats().getStats("x");
                                masterymodifed = true;
                            }
                            break;
                        case 15100001:
                        case 5100001:
                            if (MapleWeaponType.KNUCKLE == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 5200000:
                            if (MapleWeaponType.GUN == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 5220020:
                            if (MapleWeaponType.GUN == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                masterymodifed = true;
                            }
                            break;
                        case 1220010:
                            if (chr.getBuffedValue(BuffStats.WK_CHARGE) != null || chr.getBuffedValue(BuffStats.LIGHTNING_CHARGE) != null) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                masterymodifed = true;
                            }
                            break;
                        case 11100000:
                            if (MapleWeaponType.SWORD1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId()) || 
                                MapleWeaponType.SWORD2H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 21100000:
                            if (MapleWeaponType.POLE_ARM == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                                masterymodifed = true;
                            }
                            break;
                        case 21120001:
                            if (MapleWeaponType.POLE_ARM == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 35100000:
                            if (!masterymodifed)
                            this.wmastery += eff.getSkillStats().getStats("mastery");
                            break;
                        case 5300005:
                            if (MapleWeaponType.HANDCANNON == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 23100005:
                            if (MapleWeaponType.DUALBOW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 23120009:
                            if (MapleWeaponType.DUALBOW == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                this.watk += eff.getSkillStats().getStats("x");
                                masterymodifed = true;
                            }
                            break;
                        case 31100004:
                            if (MapleWeaponType.AXE1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId()) ||
                                MapleWeaponType.BLUNT1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 31120008:
                            if (MapleWeaponType.AXE1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId()) ||
                                MapleWeaponType.BLUNT1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                masterymodifed = true;
                            }
                            break;
                        case 24100004:
                            if (MapleWeaponType.CAIN == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 24120006:
                            if (MapleWeaponType.CAIN == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                masterymodifed = true;
                            }
                            break;
                        case 51100001:
                            if (MapleWeaponType.SWORD1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                            if (!masterymodifed)
                                this.wmastery += eff.getSkillStats().getStats("mastery");
                            }
                            break;
                        case 51120001:
                            if (MapleWeaponType.SWORD1H == GameConstants.getWeaponType(chr.getInventory(MapleInventoryType.EQUIPPED).getItem((short) -11).getItemId())) {
                                this.wmastery = eff.getSkillStats().getStats("mastery");//
                                masterymodifed = true;
                            }
                            break;
                    }
                }
            } catch (Exception e) {
                if (!ServerConstants.realese) e.printStackTrace();
               // if (se.getKey() != null)
                 //   System.err.println("[ X ] ���� ���ݷ��� ����ϴ� �� ���� �߻�.  ��ų : "+se.getKey().getId());
            }
        }
    }
    
    public boolean getJC() {
        return this.jc;
    }
    
    public void �����������߰�(int a) {
        this.���������� += a;
    }
    
    public int ����������() {
        return this.����������;
    }
    
    public void setJC(boolean a) {
        this.jc = a;
    }
}
