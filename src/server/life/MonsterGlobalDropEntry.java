/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.life;

public class MonsterGlobalDropEntry {

    public MonsterGlobalDropEntry(int itemId, int chance, int continent, byte dropType, int Minimum, int Maximum, int questid) {
	this.itemId = itemId;
	this.chance = chance;
	this.dropType = dropType;
	this.questid = questid;
	this.Minimum = Minimum;
	this.Maximum = Maximum;
    }
    public byte dropType;
    public int itemId, chance, Minimum, Maximum, questid;
}