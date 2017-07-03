/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.life;

public class MonsterDropEntry {

    public MonsterDropEntry(int itemId, int chance, int Minimum, int Maximum, int questid) {
	this.itemId = itemId;
	this.chance = chance;
	this.questid = questid;
	this.Minimum = Minimum;
	this.Maximum = Maximum;
    }
    public int itemId, chance, Minimum, Maximum, questid;
}