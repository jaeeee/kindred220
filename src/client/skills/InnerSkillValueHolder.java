/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.skills;

/**
 *
 * @author �ֿ��� <virgo_s_t@naver.com>
 */
public class InnerSkillValueHolder {
    
    private int skillId = 0;
    private byte skillLevel = 0;
    private byte maxLevel = 0;
    private byte rank = 0;
    
    public InnerSkillValueHolder(int skillId, byte skillLevel, byte maxLevel, byte rank) {
        this.skillId = skillId;
        this.skillLevel = skillLevel;
        this.maxLevel = maxLevel;
        this.rank = rank;
    }
    
    public int getSkillId() {
        return skillId;
    }
    
    public byte getSkillLevel() {
        return skillLevel;
    }
    
    public byte getMaxLevel() {
        return maxLevel;
    }
    
    public byte getRank() {
        return rank;
    }
}
