package client.skills;

import client.MapleCharacter;
import packet.transfer.write.WritingPacket;
import java.util.*;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class PhantomSteelSkill {
    // * ����Ʈ �ϳ��� ó���� ������ �� ������.. ������ �н�.
    List<SteelSkillEntry> job1Skills = new ArrayList<SteelSkillEntry>();
    List<SteelSkillEntry> job2Skills = new ArrayList<SteelSkillEntry>();
    List<SteelSkillEntry> job3Skills = new ArrayList<SteelSkillEntry>();
    List<SteelSkillEntry> job4Skills = new ArrayList<SteelSkillEntry>();
    
    
    public int getNextFreeSlot(int index) {
        List<SteelSkillEntry> task;
        if (index == 1) {
            task = job1Skills;
        } else if (index == 2) {
            task = job2Skills;
        } else if (index == 3) {
            task = job3Skills;
        } else if (index == 4) {
            task = job4Skills;
        } else {
            System.err.println("[����] �ε����� �ش����� �ʴ� ��ȣ�Դϴ�.");
            return -1;
        }
        int lastfree = 1;
        for (SteelSkillEntry sse : task) {
            if (sse.getSlot() > lastfree+1) {
                return lastfree;
            }
            lastfree++;
        }
        return lastfree;
    }
    
    public void addSkill(int index, SteelSkillEntry entry) {
        if (index == 1 && job1Skills.size() < 4) {
            entry.setSlot(getNextFreeSlot(index));
            job1Skills.add(entry);
        } else if (index == 2 && job2Skills.size() < 4) {
            entry.setSlot(getNextFreeSlot(index));
            job2Skills.add(entry);
        } else if (index == 3 && job3Skills.size() < 3) {
            entry.setSlot(getNextFreeSlot(index));
            job3Skills.add(entry);
        } else if (index == 4 && job4Skills.size() < 2) {
            entry.setSlot(getNextFreeSlot(index));
            job4Skills.add(entry);
        } else {
            System.err.println("[����] ���� ��ƿ ��ų �ε��� ������ �߸��Ǿ��ų� ������ �ʰ�.");
        }
    }
    
    public void addSkill (int index, int slot, SteelSkillEntry entry) {
        if (index == 1 && job1Skills.size() < 4) {
            entry.setSlot(slot);
            job1Skills.add(entry);
        } else if (index == 2 && job2Skills.size() < 4) {
            entry.setSlot(slot);
            job2Skills.add(entry);
        } else if (index == 3 && job3Skills.size() < 3) {
            entry.setSlot(slot);
            job3Skills.add(entry);
        } else if (index == 4 && job4Skills.size() < 2) {
            entry.setSlot(slot);
            job4Skills.add(entry);
        } else {
            System.err.println("[����] ���� ��ƿ ��ų �ε��� ������ �߸��Ǿ��ų� ������ �ʰ�.");
        }
    }
    
    public void setEquipped(int index, int slot, boolean equipped) {
        if (index == 1) {
            job1Skills.get(slot).setEquipped(equipped);
        } else if (index == 2) {
            job2Skills.get(slot).setEquipped(equipped);
        } else if (index == 3) {
            job3Skills.get(slot).setEquipped(equipped);
        } else if (index == 4) {
            job4Skills.get(slot).setEquipped(equipped);
        } else {
            System.err.println("[����] ��ų ������ �����Ͽ����ϴ�.");
        }
    }
    
    public SteelSkillEntry getSkillEntryById(int skillId) {
        for (int i = 1; i <= 4 ; ++i) {
            for (SteelSkillEntry sse : getSkillEntrys(i)) {
                if (sse.getSkillId() == skillId) {
                    return sse;
                }
            }
        }
        return null;
    }
    
    public boolean isExistSkill(int skillId) {
        for (int i = 1; i <= 4; ++i) {
            for (SteelSkillEntry sse : getSkillEntrys(i)) {
                if (sse.getSkillId() == skillId) { //�̹� ��ų�� ������
                    return true;
                }
            }
        }
        return false;
    }
    
    public List<SteelSkillEntry> getSkillEntrys(int index) {
        if (index == 1)
            return job1Skills;
        else if (index == 2)
            return job2Skills;
        else if (index == 3)
            return job3Skills;
        else if (index == 4)
            return job4Skills;
        else 
            return null;
    }
    
    public void deleteSkill(int skill) {
        int index = SteelSkillEntry.getJobIndex(skill);
        SteelSkillEntry toDelete = null;
        for (SteelSkillEntry sse : getSkillEntrys(index)) {
            if (sse.getSkillId() == skill) {
                toDelete = sse;
                break;
            }
        }
        if (toDelete!=null) {
            getSkillEntrys(index).remove(toDelete);
        }
    }
    
    public void deleteSkill(SteelSkillEntry sse) {
        getSkillEntrys(SteelSkillEntry.getJobIndex(sse.getSkillId())).remove(sse);
    }
    
    public void sortSkillEntrys(int index) {
        List<SteelSkillEntry> task;
        if (index == 1) {
            task = job1Skills;
        } else if (index == 2) {
            task = job2Skills;
        } else if (index == 3) {
            task = job3Skills;
        } else if (index == 4) {
            task = job4Skills;
        } else {
            System.err.println("[����] �ε����� �ش����� �ʴ� ��ȣ�Դϴ�.");
            return;
        }
        Comparator<SteelSkillEntry> com = new Comparator<SteelSkillEntry> () {
            @Override
            public int compare(SteelSkillEntry o1, SteelSkillEntry o2) {
                if (o1.getSlot() > o2.getSlot()) {
                    return 1;
                } else if (o1.getSlot() == o2.getSlot()) {
                    return 0;
                } else if (o1.getSlot() < o2.getSlot()) {
                    return -1;
                } else {
                    return 0;
                }
            }
        };
        Collections.sort(task, com);
        if (index == 1) {
            job1Skills = task;
        } else if (index == 2) {
            job2Skills = task;
        } else if (index == 3) {
            job3Skills = task;
        } else if (index == 4) {
            job4Skills = task;
        }
    }
    
    
    public void connectData(WritingPacket wh, MapleCharacter hp) {
        
        //��ģ ��ų ���(Steel Skills List)
        Map <Integer, Integer> equipped = new HashMap <Integer, Integer>();
        for (int i = 1; i <= 4; ++i) {
            sortSkillEntrys(i);
            for (SteelSkillEntry sse : getSkillEntrys(i)) {
                wh.writeInt(sse.getSkillId());
                if (sse.isEquipped()) {
                    equipped.put(i, sse.getSkillId());
                }
            }
            for (int p = getSkillEntrys(i).size(); p < (i <= 2 ? 4 : i == 3 ? 3 : 2); p++) {
                wh.writeInt(0);
            }
        }
        
        //������ ��ų ���(Equipped Skills List)
        for (int i = 1; i <= 4; ++i) {
            if (equipped.get(i) != null) {
                wh.writeInt(equipped.get(i).intValue());
            } else {
                wh.writeInt(0);
            }
        }
    }
}
