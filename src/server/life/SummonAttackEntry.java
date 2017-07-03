/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
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
