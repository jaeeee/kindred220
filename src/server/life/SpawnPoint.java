/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.life;

import java.awt.Point;
import java.util.concurrent.atomic.AtomicInteger;

import server.maps.MapleMap;
import packet.creators.MainPacketCreator;

public class SpawnPoint extends Spawns {

	private MapleMonster monster;
	private Point pos;
	private long nextPossibleSpawn;
	private int mobTime;
	private AtomicInteger spawnedMonsters = new AtomicInteger(0);
	private boolean immobile;
	private String msg;

	public SpawnPoint(final MapleMonster monster, final Point pos, final int mobTime, final String msg) {
		this.monster = monster;
		this.pos = pos;
		this.mobTime = mobTime * 1000;
		this.msg = msg;
		this.immobile = !monster.getStats().getMobile();
		this.nextPossibleSpawn = System.currentTimeMillis();
	}

	@Override
	public final MapleMonster getMonster() {
		return monster;
	}

	@Override
	public final boolean shouldSpawn() {
		if (mobTime < 0) {
			return false;
		}
		// regular spawnpoints should spawn a maximum of 3 monsters; immobile
		// spawnpoints or spawnpoints with mobtime a
		// maximum of 1
		if (((mobTime != 0 || immobile) && spawnedMonsters.get() > 0) || spawnedMonsters.get() > 1) {
			return false;
		}
		return nextPossibleSpawn <= System.currentTimeMillis();
	}

	@Override
	public final MapleMonster spawnMonster(final MapleMap map) {
		final MapleMonster mob = new MapleMonster(monster);
		mob.setPosition(pos);
		if (map.getChangeableMobOrigin() != null) {
			mob.changeableMob(map.getChangeableMobOrigin());
		}
//		if (map.getChannel() == 20) {
//			System.out.println("welcome to channel 20 hoes");
//		mob.multiplyStats(10);
//		}
		spawnedMonsters.incrementAndGet();
		mob.addListener(new MonsterListener() {

			@Override
			public void monsterKilled() {
				nextPossibleSpawn = System.currentTimeMillis();

				if (mobTime > 0) {
					nextPossibleSpawn += mobTime;
				}
				spawnedMonsters.decrementAndGet();
			}
		});
		map.spawnMonster(mob, -2);

		if (msg != null) {
			map.broadcastMessage(MainPacketCreator.serverNotice(6, msg));
		}
		return mob;
	}
}
