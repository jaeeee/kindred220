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
 * @author �������̸�
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
