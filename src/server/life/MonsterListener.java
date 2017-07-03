/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package server.life;

public interface MonsterListener {

    /**
     *
     * @param monster The monster that was killed
     * @param highestDamageChar The char that did the highest damage to the monster. Can be null if that char is offline.
     */
    public void monsterKilled();
}
