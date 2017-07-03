/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.life;

import server.maps.MapleMap;

public abstract class Spawns {
    public abstract MapleMonster getMonster();
    public abstract boolean shouldSpawn();
    public abstract MapleMonster spawnMonster(MapleMap map);
}