/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.items;

import client.stats.EquipStats;
import java.util.ArrayList;
import java.util.List;
import tools.Pair;

public interface IEquip extends IItem {

    public static enum ScrollResult {
	SUCCESS, FAIL, CURSE
    }

    public byte getUpgradeSlots();

    public byte getLevel();

    public byte getViciousHammer();

    public byte getItemLevel();

    public int getItemEXP();

    public short getStr();

    public short getDex();

    public short getInt();

    public short getLuk();

    public short getHp();

    public short getMp();

    public short getWatk();

    public short getMatk();

    public short getWdef();

    public short getMdef();

    public short getAcc();

    public short getAvoid();
    
    public short getHands();

    public short getSpeed();

    public short getJump();
	
    public int getDurability();

    public byte getEnhance();

    public byte getState();
    
    public byte getLines();
    
    public byte getFire();
    
    public byte getStarForce();
    
    public int getPotential1();

    public int getPotential2();

    public int getPotential3();
    
    public int getPotential4();
      
    public int getPotential5();
    
    public int getPotential6();
    
    public int getPotential7();
    
    public int getanvil();
    
    public short getHpR();

    public short getMpR();
    
    public byte getBossDamage();
    
    public byte getAllDamageP();
    
    public byte getAllStatP();
    
    public short getDownLevel();

    public short getIgnoreWdef();
    
    public short getSoulEnchanter();
    
    public short getSoulPotential();
    
    public short getSoulName();
    
    public int getSoulSkill();
    
}
