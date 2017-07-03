/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package server.life;

import server.maps.MapleMap;

public abstract class Spawns {
    public abstract MapleMonster getMonster();
    public abstract boolean shouldSpawn();
    public abstract MapleMonster spawnMonster(MapleMap map);
}