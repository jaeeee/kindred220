/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.skills;

import java.io.Serializable;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */

public class SteelSkillEntry implements Serializable {
    static final long serialVersionUID = 1L;
    private int skillid, slot, skilllevel;
    private boolean equipped = false;
    
    public SteelSkillEntry(int skillid, int skilllevel) {
        this.skillid = skillid;
        this.skilllevel = skilllevel;
    }
    
    public void setSlot(int slot) {
        if (slot < 1 && slot > 4) {
            throw new RuntimeException("[����] �߸��� ������ �����Ǿ����ϴ�.");
        }
        this.slot = slot;
    }
    
    public void setEquipped ( boolean a) {
        this.equipped = a;
    }
    
    public boolean isEquipped() {
        return equipped;
    }

    public int getSkillId() {
        return skillid;
    }

    public int getSlot() {
        return slot;
    }
    
    public int getSlot(int index) {
        if (index == 1) {
            for (int i = 0; i < 4; ++i) {
                
            }
        }
        return slot;
    }
    
    public int getSkillLevel() {
        return skilllevel;
    }
    
    public static int getJobIndex(int skillid) {
        int jobid = skillid / 10000;
        if (jobid % 100 == 0) {
            return 1;
        } else if (jobid % 10 == 2) {
            return 4;
        } else if (jobid % 10 == 1) {
            return 3;
        } else if (jobid % 10 == 0) {
            return 2;
        }
        System.err.println("[����] ��ƿ ��ų ���� ������� ����. ��ų���̵� : " + skillid);
        return 0;
    }
    
    public static int getJobIndexB(int baseSkillId) {
        if (baseSkillId == 24001001) {
            return 1;
        } else if (baseSkillId == 24101001) {
            return 2;
        } else if (baseSkillId == 24111001) {
            return 3;
        } else if (baseSkillId == 24121001) {
            return 4;
        }
        System.err.println("[����] ��ƿ ��ų ���� ������� ����. ���̽� ��ų���̵� : " + baseSkillId);
        return 0;
    }
}