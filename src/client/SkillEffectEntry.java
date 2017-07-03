/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client;

/**
 *
 * @author �������̸�
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
