/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
