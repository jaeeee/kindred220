/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.life;

public class SummonAttackEntry {

    private MapleMonster mob;
    private int damage;

    public SummonAttackEntry(MapleMonster mob, int damage) {
	super();
	this.mob = mob;
	this.damage = damage;
    }

    public MapleMonster getMonster() {
	return mob;
    }

    public int getDamage() {
	return damage;
    }
}
