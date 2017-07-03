/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.skills;

/**
 *
 * @author 최용재 <virgo_s_t@naver.com>
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
