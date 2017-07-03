/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.items;

import client.MapleCharacter;
import client.skills.SkillStatEffect;
import server.life.Element;

public interface ISkill {

    public abstract int getId();
    
    public abstract SkillStatEffect getEffect(int level);
    
    public abstract SkillStatEffect getEffect(MapleCharacter chr, int level);
    
    public abstract byte getMaxLevel();
    
    public abstract int getAnimationTime();
    
    public abstract boolean canBeLearnedBy(int job);
    
    public abstract boolean isFourthJob();
    
    public abstract boolean getAction();
    
    public abstract Element getElement();
    
    public abstract boolean isBeginnerSkill();
    
    public abstract boolean hasRequiredSkill();
    
    public abstract boolean isInvisible();
    
    public abstract boolean isChargeSkill();
    
    public abstract boolean CheckMasterLevel();
    
    public abstract int getRequiredSkillLevel();
    
    public abstract int getRequiredSkillId();
    
    public abstract int getMasterLevel();
    
    public abstract boolean canCombatOrdered();
    
    public abstract boolean haveMasterLevel();
    
    public abstract boolean ishyper();
    
}
