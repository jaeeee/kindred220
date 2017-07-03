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
 * @author 에반테이르
 */
public class StackedSkillEntry {
    private int skillid, value, bufflength;
    private long time;
    
    public StackedSkillEntry (int a, int b, long c, int d) {
        this.skillid = a;
        this.value = b;
        this.time = c;
        this.bufflength = d;
    }
    
    public int getSkillId() {
        return skillid;
    }
    
    public int getValue() {
        return value;
    }
    
    public long getTime() {
        return time;
    }
    
    public int getBuffLength() {
        return bufflength;
    }
}
