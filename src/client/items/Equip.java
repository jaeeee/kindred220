/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package client.items;

import client.MapleCharacter;
import client.stats.EquipStats;
import constants.GameConstants;
import tools.RandomStream.Randomizer;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import launch.ChannelServer;
import launch.LoginServer;
import packet.creators.MainPacketCreator;
import server.items.MapleRing;
import tools.Pair;

public class Equip extends Item implements IEquip, Serializable {

    private MapleRing ring = null;
    private byte upgradeSlots, level, vicioushammer, itemLevel, enhance, state, lines, fire = -1, bossdmg, alldmgp, allstatp, starforce;
    private short str, dex, _int, luk, hp, mp, watk, matk, wdef, mdef, acc, avoid, hands, speed, jump,  hpR, mpR, IgnoreWdef, downlevel, soulname, soulenchanter, soulpotential, charmExp;
    private int job, potential, durability = -1, potential1, potential2, potential3, potential4, potential5, potential6, potential7, anvil, itemEXP;
    private boolean amazing;
    private int soulskill;
    
    public Equip(int id, short position, short flag) {
	super(id, position, (short) 1, flag);
    }
    
    public void set(Equip e) {
        upgradeSlots = e.upgradeSlots;
        level = e.level;
        vicioushammer = e.vicioushammer;
        itemLevel = e.itemLevel;
        enhance = e.enhance;
        state = e.state;
        lines = e.lines;
        fire = e.fire;
        bossdmg = e.bossdmg;
        alldmgp = e.alldmgp;
        allstatp = e.allstatp;
        downlevel = e.downlevel;
        starforce = e.starforce;
        str = e.str;
        dex = e.dex;
        _int = e._int;
        luk = e.luk;
        hp = e.hp;
        mp = e.mp;
        watk = e.watk;
        matk = e.matk;
        wdef = e.wdef;
        mdef = e.mdef;
        acc = e.acc;
        avoid = e.avoid;
        hands = e.hands;
        speed = e.speed;
        jump = e.jump;
        hpR = e.hpR;
        mpR = e.mpR;
        IgnoreWdef = e.IgnoreWdef;
        soulname = e.soulname;
        soulenchanter = e.soulenchanter;
        soulpotential = e.soulpotential;
        job = e.job;
        potential = e.potential;
        durability = e.durability;
        potential1 = e.potential1;
        potential2 = e.potential2;
        potential3 = e.potential3;
        potential4 = e.potential4;
        potential5 = e.potential5;
        potential6 = e.potential6;
        potential7 = e.potential7;
        anvil = e.anvil;
        itemEXP = e.itemEXP;
        amazing = e.amazing;
        soulskill = e.soulskill;
    }

    @Override
    public IItem copy() {
	Equip ret = new Equip(getItemId(), getPosition(), getFlag());
	ret.str = str;
	ret.dex = dex;
	ret._int = _int;
	ret.luk = luk;
	ret.hp = hp;
	ret.mp = mp;
	ret.matk = matk;
	ret.mdef = mdef;
	ret.watk = watk;
	ret.wdef = wdef;
	ret.acc = acc;
	ret.avoid = avoid;
	ret.hands = hands;
	ret.speed = speed;
	ret.jump = jump;
        ret.enhance = enhance;
	ret.upgradeSlots = upgradeSlots;
	ret.level = level;
	ret.itemEXP = itemEXP;
	ret.itemLevel = itemLevel;
	ret.durability = durability;
        ret.vicioushammer = vicioushammer;
        ret.potential1 = potential1;
        ret.potential2 = potential2;
        ret.potential3 = potential3;
        ret.potential4 = potential4;
        ret.potential5 = potential5;
        ret.potential6 = potential6;
        ret.potential7 = potential7;
        ret.anvil = anvil;
        ret.hpR = hpR;
        ret.mpR = mpR;
        ret.state = state;
        ret.lines = lines;
        ret.fire = fire;
        ret.downlevel = downlevel;
        ret.bossdmg = bossdmg;
        ret.alldmgp = alldmgp;
        ret.allstatp = allstatp;
        ret.IgnoreWdef = IgnoreWdef;
        ret.soulenchanter = soulenchanter;
        ret.soulname = soulname;
        ret.soulskill = soulskill;
        ret.starforce = starforce;
        ret.soulpotential = soulpotential;
	ret.setOwner(getOwner());
	ret.setQuantity(getQuantity());
	ret.setExpiration(getExpiration());
        ret.setUniqueId(getUniqueId());
        ret.setCash(isCash());
	return ret;
    }

    @Override
    public byte getType() {
	return 1;
    }

    @Override
    public byte getUpgradeSlots() {
	return upgradeSlots;
    }

    @Override
    public short getStr() {
	return str;
    }
    
    @Override
    public short getDex() {
	return dex;
    }

    @Override
    public short getInt() {
	return _int;
    }

    @Override
    public short getLuk() {
	return luk;
    }

    @Override
    public short getHp() {
	return hp;
    }

    @Override
    public short getMp() {
	return mp;
    }

    @Override
    public short getWatk() {
	return watk;
    }

    @Override
    public short getMatk() {
	return matk;
    }

    @Override
    public short getWdef() {
	return wdef;
    }

    @Override
    public short getMdef() {
	return mdef;
    }

    @Override
    public short getAcc() {
	return acc;
    }

    @Override
    public short getAvoid() {
	return avoid;
    }

    @Override
    public short getHands() {
	return hands;
    }

    @Override
    public short getSpeed() {
	return speed;
    }

    @Override
    public short getJump() {
	return jump;
    }

    public int getJob() {
	return job;
    }

    public void setStr(short str) {
	if (str < 0) {
	    str = 0;
	}
	this.str = str;
    }
    
    public void addStr(short str) {
	if (str < 0) {
	    str = 0;
	}
	this.str += str;
    }

    public void setDex(short dex) {
	if (dex < 0) {
	    dex = 0;
	}
	this.dex = dex;
    }
    
     public void addDex(short dex) {
	if (dex < 0) {
	    dex = 0;
	}
	this.dex += dex;
    }

    public void setInt(short _int) {
	if (_int < 0) {
	    _int = 0;
	}
	this._int = _int;
    }

    public void setLuk(short luk) {
	if (luk < 0) {
	    luk = 0;
	}
	this.luk = luk;
    }

    public void setHp(short hp) {
	if (hp < 0) {
	    hp = 0;
	}
	this.hp = hp;
    }

    public void setMp(short mp) {
	if (mp < 0) {
	    mp = 0;
	}
	this.mp = mp;
    }

    public void setWatk(short watk) {
	if (watk < 0) {
	    watk = 0;
	}
	this.watk = watk;
    }
    
    public void addWatk(short watk) {
        if (watk < 0) {
	    watk = 0;
	}
        this.watk += watk;
    }

    public void setMatk(short matk) {
	if (matk < 0) {
	    matk = 0;
	}
	this.matk = matk;
    }

    public void setWdef(short wdef) {
	if (wdef < 0) {
	    wdef = 0;
	} else if (wdef > 255) {
	    wdef = 255;
	}
	this.wdef = wdef;
    }
    
    public void addWdef(short wdef) {
	if (wdef < 0) {
	    wdef = 0;
	} else if (wdef > 255) {
	    wdef = 255;
	}
	this.wdef += wdef;
    }

    public void setMdef(short mdef) {
	if (mdef < 0) {
	    mdef = 0;
	} else if (mdef > 255) {
	    mdef = 255;
	}
	this.mdef = mdef;
    }
    
    public void addMdef(short mdef) {
	if (mdef < 0) {
	    mdef = 0;
	} else if (mdef > 255) {
	    mdef = 255;
	}
	this.mdef += mdef;
    }

    public void setAcc(short acc) {
	if (acc < 0) {
	    acc = 0;
	}
	this.acc = acc;
    }
    
    public void addAcc(short acc) {
	if (acc < 0) {
	    acc = 0;
	}
	this.acc += acc;
    }

    public void setAvoid(short avoid) {
	if (avoid < 0) {
	    avoid = 0;
	}
	this.avoid = avoid;
    }

    public void setHands(short hands) {
	if (hands < 0) {
	    hands = 0;
	}
	this.hands = hands;
    }

    public void setSpeed(short speed) {
	if (speed < 0) {
	    speed = 0;
	}
	this.speed = speed;
    }

    public void setJump(short jump) {
	if (jump < 0) {
	    jump = 0;
	}
	this.jump = jump;
    }

    public void setUpgradeSlots(byte upgradeSlots) {
	this.upgradeSlots = upgradeSlots;
    }
    
    public void addUpgradeSlots(byte upgradeSlots) {
	this.upgradeSlots += upgradeSlots;
    }

    @Override
    public byte getLevel() {
	return level;
    }

    public void setLevel(byte level) {
	this.level = level;
    }

    @Override
    public byte getViciousHammer() {
	return vicioushammer;
    }

    public void setViciousHammer(byte ham) {
	vicioushammer = ham;
    }

    @Override
    public byte getItemLevel() {
	return 6;
    }

    public void setItemLevel(byte itemLevel) {
	if (itemLevel < 0) {
	    itemLevel = 0;
	}
	this.itemLevel = itemLevel;
    }

    @Override
    public int getItemEXP() {
	return itemEXP;
    }

    public void setItemEXP(int itemEXP) {
	if (itemEXP < 0) {
	    itemEXP = 0;
	}
	this.itemEXP = itemEXP;
    }

    @Override
    public void setQuantity(short quantity) {
	if (quantity < 0 || quantity > 1) {
	    throw new RuntimeException("Setting the quantity to " + quantity + " on an equip (itemid: " + getItemId() + ")");
	}
	super.setQuantity(quantity);
    }

    public void setJob(int job) {
	this.job = job;
    }

    @Override
    public int getDurability() {
        return durability;
    }

    public void setDurability(final int dur) {
        this.durability = dur;
    }

    @Override
    public byte getEnhance() {
        return enhance;
    }

    public void setEnhance(final byte en) {
        this.enhance = en;
    }

    @Override
    public int getPotential1() {
        return potential1;
    }

    public void setPotential1(final int en) {
        this.potential1 = en;
    }

    @Override
    public int getPotential2() {
        return potential2;
    }

    public void setPotential2(final int en) {
        this.potential2 = en;
    }

    @Override
    public int getPotential3() {
        return potential3;
    }

    public void setPotential3(final int en) {
        this.potential3 = en;
    }
    
    @Override
    public int getPotential4() {
        return potential4;
    }

    public void setPotential4(final int en) {
        this.potential4 = en;
    }
    
    @Override
    public int getPotential5() {
        return potential5;
    }

    public void setPotential5(final int en) {
        this.potential5 = en;
    }
    
    @Override
    public int getPotential6() {
        return potential6;
    }

    public void setPotential6(final int en) {
        this.potential6 = en;
    }    

    @Override
    public int getPotential7() {
        return potential7;
    }

    public void setPotential7(final int en) {
        this.potential7 = en;
    }    
    
    @Override
    public int getanvil() {
        return anvil;
    }

    public void setanvil(final int en) {
        this.anvil = en;
    }

    @Override
    public byte getState() {
        return state;
    }
    
    public void setState(byte state) {
        this.state = state;
    }
    
    @Override
    public byte getLines() {
        return lines;
    }
    
    public void setLines(byte lines) {
        this.lines = lines;
    }
    
    @Override
    public byte getFire() {
        return fire;
    }
    
    public void setFire(byte fire) {
        this.fire = fire;
    }
    
    public byte getStarForce() {
        return this.starforce;
    }
    
    public void setStarForce(byte starforce) {
        this.starforce = starforce;
    }

    public void renewPotential() {
        int epic = 7;
        int unique = 5;
        if (getState() == 17 && Randomizer.nextInt(100) <= epic) {
            setState((byte) 2);
            return;
        } else if (getState() == 18 && Randomizer.nextInt(100) <= unique) {
            setState((byte) 3);
            return;
        } else if (getState() == 19 && Randomizer.nextInt(100) <= 2) {
            setState((byte) 4);
            return;
        }
        setState((byte) (getState() - 16));
    }
    
    public void giveEpicAndRenew() {
        setPotential1(-18);
        setPotential2(0);
        setPotential3(0);
    }
    
    @Override
    public short getHpR() {
        return hpR;
    }

    public void setHpR(final short hp) {
        this.hpR = hp;
    }

    @Override
    public short getMpR() {
        return mpR;
    }

    public void setMpR(final short mp) {
        this.mpR = mp;
    }
    
    @Override
    public short getDownLevel() {
        return downlevel;
    }
    
    public void setDownLevel(short down) {
        this.downlevel = down;
    }
    
    @Override
    public byte getBossDamage() {
        return bossdmg;
    }
    
    public void setBossDamage(byte dmg) {
        this.bossdmg = dmg;
    }
    
    public void addBossDamage(byte dmg) {
        this.bossdmg += dmg;
    }

    @Override
    public byte getAllDamageP() {
        return alldmgp;
    }
    
    public void setAllDamageP(byte percent) {
        this.alldmgp = percent;
    }

    @Override
    public short getIgnoreWdef() {
        return IgnoreWdef;
    }
    
    public void setIgnoreWdef(short percent) {
        this.IgnoreWdef = percent;
    }
    
    public void addIgnoreWdef(short IgnoreWdef) {
        this.IgnoreWdef += IgnoreWdef;
    }
    
    @Override
    public byte getAllStatP() {
        return allstatp;
    }
    
    public void setAllStatP(byte percent) {
        this.allstatp = percent;
    }
    
    @Override
    public short getSoulEnchanter() {
        return soulenchanter;
    }
    
    public void setSoulEnchanter(final short soulenchanter) {
        this.soulenchanter = soulenchanter;
    }
    
    @Override
    public short getSoulPotential() {
        return this.soulpotential;
    }

    public void setSoulPotential(short soulpotential) {
        this.soulpotential = soulpotential;
    }
    
    @Override
    public short getSoulName() {
        return soulname;
    }
    
    public void setSoulName(final short soulname) {
        this.soulname = soulname;
    }
    
    @Override
    public int getSoulSkill() {
        return soulskill;
    }
    
    public void setSoulSkill(final int soulskill) {
        this.soulskill = soulskill;
    }
    
    public MapleRing getRing() {
        if (!GameConstants.isEffectRing(getItemId()) || getUniqueId() <= 0) {
            return null;
        }
        if (ring == null) {
            ring = MapleRing.loadFromDb(getUniqueId(), getPosition() < 0);
        }
        return ring;
    }
    
    public boolean isAmazing() {
        return amazing;
    }
    
    public void setAmazing(boolean amazing) {
        this.amazing = amazing;
    }
    
    public void resetPotential_Fuse(boolean a, boolean nopotential) { //equip first receive
        int epic = a ? 20 : 10;
        int unique = a ? 10 : 5;
        if (Randomizer.nextInt(100) <= epic && !nopotential) {
            setState((byte) 2);
        } else if (Randomizer.nextInt(100) <= unique && !nopotential) {
            setState((byte) 3);
        } else if (!nopotential) {
            setState((byte) 1);
        }
    }
    
    public short getCharmEXP() {
        return charmExp;
    }

    public void setCharmEXP(short s) {
        charmExp = s;
    } 
}