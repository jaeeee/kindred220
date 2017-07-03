/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client;

/**
 *
 * @author 에반테이르
 */
public class SkillEffectEntry {
    
    private int skillId;
    private byte level;
    private byte flags;
    private byte speed;
    private byte unk;
    
    public SkillEffectEntry (int skillId, byte level, byte flags, byte speed, byte unk) {
        this.skillId = skillId;
        this.level = level;
        this.flags = flags;
        this.speed = speed;
        this.unk = unk;
    }
    
    public int getSkillId() {
        return skillId;
    }
    
    public byte getLevel() {
        return level;
    }
    
    public byte getFlags() {
        return flags;
    }
    
    public byte getSpeed() {
        return speed;
    }
    
    public byte getUnk() {
        return unk;
    }
}
