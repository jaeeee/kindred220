/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.maps;

public class ReactorDropEntry {

    public ReactorDropEntry(int itemId, int chance, int questid) {
	this.itemId = itemId;
	this.chance = chance;
	this.questid = questid;
    }
    public int itemId, chance, questid;
    public int assignedRangeStart, assignedRangeLength;
}

