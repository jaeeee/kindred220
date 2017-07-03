package client.tracker;

import constants.GameConstants;
import client.MapleCharacter;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import server.life.MapleMonster;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;
import tools.StringUtil;
import tools.Timer.CheatTimer;
import java.awt.Point;
import java.awt.Rectangle;
import java.lang.ref.WeakReference;
import java.util.*;
import java.util.concurrent.ScheduledFuture;

public class CheatTracker {

    private Map<CheatingOffense, CheatingOffenseEntry> offenses = Collections.synchronizedMap(new LinkedHashMap<CheatingOffense, CheatingOffenseEntry>());
    private final WeakReference<MapleCharacter> chr;
    private int lastAttackTickCount = 0;
    private byte Attack_tickResetCount = 0;
    private long Server_ClientAtkTickDiff = 0;
    private long lastDamage = 0;
    private long takingDamageSince;
    private int numSequentialDamage = 0;
    private long lastDamageTakenTime = 0;
    private byte numZeroDamageTaken = 0;
    private int numSequentialSummonAttack = 0;
    private long summonSummonTime = 0;
    private long lastASmegaTime = 0;
    private int numSameDamage = 0;
    private Point lastMonsterMove;
    private long lastMonsterMoveTime;
    private boolean lastMonsterMoveCheck;
    private int monsterMoveCount;
    private int attacksWithoutHit = 0;
    private ScheduledFuture<?> invalidationTask;

    public CheatTracker(final MapleCharacter chr) {
	this.chr = new WeakReference<MapleCharacter>(chr);
	invalidationTask = CheatTimer.getInstance().register(new InvalidationTask(), 60000);
	takingDamageSince = System.currentTimeMillis();
    }

    public final void checkAttack(final int skillId, final int tickcount) {
//	final short AtkDelay = GameConstants.getAttackDelay(skillId);
//	if ((tickcount - lastAttackTickCount) < AtkDelay) {
//	    registerOffense(CheatingOffense.FASTATTACK);
//	}
//	final long STime_TC = System.currentTimeMillis() - tickcount; // hack = - more
//	if (Server_ClientAtkTickDiff - STime_TC > 250) { // 250 is the ping, TODO
//	    registerOffense(CheatingOffense.FASTATTACK2);
	}
 //       Attack_tickResetCount++;
//	if (Attack_tickResetCount >= (AtkDelay <= 200 ? 2 : 4)) {
//	    Attack_tickResetCount = 0;
////////	    Server_ClientAtkTickDiff = STime_TC;
//	}
//	lastAttackTickCount = tickcount;
//    }

    public final void checkTakeDamage(final int damage) {
	numSequentialDamage++;
	lastDamageTakenTime = System.currentTimeMillis();
	if (lastDamageTakenTime - takingDamageSince / 500 < numSequentialDamage) {
//	    registerOffense(CheatingOffense.FAST_TAKE_DAMAGE);
	}
	if (lastDamageTakenTime - lastDamageTakenTime > 4500) {
	    takingDamageSince = lastDamageTakenTime;
	    numSequentialDamage = 0;
	}
	if (damage == 0) {
	    numZeroDamageTaken++;
	    if (numZeroDamageTaken >= 35) { // Num count MSEA a/b players
		numZeroDamageTaken = 0;
//		registerOffense(CheatingOffense.HIGH_AVOID);
	    }
	} else if (damage != -1) {
	    numZeroDamageTaken = 0;
	}
    }

    public final void checkSameDamage(final int dmg) {
	if (dmg > 1 && lastDamage == dmg) {
	    numSameDamage++;

	    if (numSameDamage > 5) {
		numSameDamage = 0;
//		registerOffense(CheatingOffense.SAME_DAMAGE, numSameDamage + " times: " + dmg);
	    }
	} else {
	    lastDamage = dmg;
	    numSameDamage = 0;
	}
    }
    private final Rectangle calculateBoundingBox(final Point posFrom, final boolean facingLeft, int ltx, int lty, int rbx, int rby) {
	Point mylt;
	Point myrb;
	if (facingLeft) {
	    mylt = new Point(ltx + posFrom.x, lty + posFrom.y);
	    myrb = new Point(rbx + posFrom.x, rby + posFrom.y);
	} else {
	    myrb = new Point(ltx * -1 + posFrom.x, rby + posFrom.y);
	    mylt = new Point(rbx * -1 + posFrom.x, lty + posFrom.y);
	}
	return new Rectangle(mylt.x, mylt.y, myrb.x - mylt.x, myrb.y - mylt.y);
    }
    
    public final void checkMoveMonster(MapleMonster mob) {
        if (GameConstants.getBossReturnMap(mob.getMap().getId()) != -1) {
            return;
        }
        if (GameConstants.isExceptionBanMapId(mob.getMap().getId())) {
            return;
        }
        
        if (lastMonsterMoveCheck && lastMonsterMoveTime + 10000 < System.currentTimeMillis()) {
            List<MapleMapObject> d = mob.getMap().getMapObjectsInRect(calculateBoundingBox(mob.getPosition(), mob.isFacingLeft(), -80,-80,80,80), Collections.singletonList(MapleMapObjectType.MONSTER));
            int size = d.size();
            for (MapleMapObject obj : d) {
                MapleMonster mobtest = (MapleMonster) obj;
                if(mobtest.getStats().isBoss()) {
                    size--;
                }
            }
            if (size > 10) {
//                registerOffense(CheatingOffense.MOVE_MONSTERS);
                lastMonsterMoveTime = System.currentTimeMillis();
            } else {
                lastMonsterMoveCheck = false;
                lastMonsterMoveTime = System.currentTimeMillis();
            }
        } else if (!lastMonsterMoveCheck) {
            List<MapleMapObject> d = mob.getMap().getMapObjectsInRect(calculateBoundingBox(mob.getPosition(), mob.isFacingLeft(), -80,-80,80,80), Collections.singletonList(MapleMapObjectType.MONSTER));
            int size = d.size();
            for (MapleMapObject obj : d) {
                MapleMonster mobtest = (MapleMonster) obj;
                if(mobtest.getStats().isBoss()) {
                    size--;
                }
            }
            if (size > 10) {
                lastMonsterMoveCheck = true;
                lastMonsterMoveTime = System.currentTimeMillis();
            }
        }
    }

    public final void resetSummonAttack() {
	summonSummonTime = System.currentTimeMillis();
	numSequentialSummonAttack = 0;
    }

    public final boolean checkSummonAttack() {
	numSequentialSummonAttack++;
	if ((System.currentTimeMillis() - summonSummonTime) / (2000 + 1) < numSequentialSummonAttack) {
	    return false;
	}
	return true;
    }

    public final int getAttacksWithoutHit() {
	return attacksWithoutHit;
    }

    public final void setAttacksWithoutHit(final boolean increase) {
	if (increase) {
	    this.attacksWithoutHit++;
	} else {
	    this.attacksWithoutHit = 0;
	}
    }

    public final void registerOffense(final CheatingOffense offense) {
	registerOffense(offense, null);
    }

    public final void registerOffense(final CheatingOffense offense, final String param) {
	final MapleCharacter chrhardref = chr.get();
	if (chrhardref == null || !offense.isEnabled()) {
	    return;
	}
	CheatingOffenseEntry entry = offenses.get(offense);
	if (entry != null && entry.isExpired()) {
	    expireEntry(entry);
	    entry = null;
	}
	if (entry == null) {
	    entry = new CheatingOffenseEntry(offense, chrhardref.getId());
	}
	if (param != null) {
	    entry.setParam(param);
	}
	entry.incrementCount();
	if (offense.shouldAutoban(entry.getCount())) {
	    final byte type = offense.getBanType();
	    if (type == 1) {
		AutobanManager.getInstance().autoban(chrhardref.getClient(), StringUtil.makeEnumHumanReadable(offense.name()));
	    } else if (type == 2) {
		if (!chrhardref.isGM()) {
                    System.out.println(chrhardref.getName()+"이(가) 핵 감지로 인해 연결이 끊겼습니다. : "+StringUtil.makeEnumHumanReadable(offense.name()));
                    WorldBroadcasting.broadcastGM(MainPacketCreator.getGMText(6, chrhardref.getName()+"이(가) 핵 감지로 인해 연결이 끊겼습니다. : "+StringUtil.makeEnumHumanReadable(offense.name())).getBytes());
		  //  chrhardref.getClient().getSession().close();
		} else {
		    chrhardref.dropMessage(5, "[경고] 핵이 감지되었습니다. : " + offense.toString());
		}
	    }
	    return;
	}
	offenses.put(offense, entry);
	CheatingOffensePersister.getInstance().persistEntry(entry);
    }
        
    public boolean canAvatarSmega() {
	if (lastASmegaTime + 300000 > System.currentTimeMillis() && chr.get() != null && !chr.get().isGM()) {
	    return false;
	}
	lastASmegaTime = System.currentTimeMillis();
	return true;
    }

    public final void expireEntry(final CheatingOffenseEntry coe) {
	offenses.remove(coe.getOffense());
    }

    public final int getPoints() {
	int ret = 0;
	CheatingOffenseEntry[] offenses_copy;
	synchronized (offenses) {
	    offenses_copy = offenses.values().toArray(new CheatingOffenseEntry[offenses.size()]);
	}
	for (final CheatingOffenseEntry entry : offenses_copy) {
	    if (entry.isExpired()) {
		expireEntry(entry);
	    } else {
		ret += entry.getPoints();
	    }
	}
	return ret;
    }

    public final Map<CheatingOffense, CheatingOffenseEntry> getOffenses() {
	return Collections.unmodifiableMap(offenses);
    }

    public final String getSummary() {
	final StringBuilder ret = new StringBuilder();
	final List<CheatingOffenseEntry> offenseList = new ArrayList<CheatingOffenseEntry>();
	synchronized (offenses) {
	    for (final CheatingOffenseEntry entry : offenses.values()) {
		if (!entry.isExpired()) {
		    offenseList.add(entry);
		}
	    }
	}
	Collections.sort(offenseList, new Comparator<CheatingOffenseEntry>() {

	    @Override
	    public final int compare(final CheatingOffenseEntry o1, final CheatingOffenseEntry o2) {
		final int thisVal = o1.getPoints();
		final int anotherVal = o2.getPoints();
		return (thisVal < anotherVal ? 1 : (thisVal == anotherVal ? 0 : -1));
	    }
	});
	final int to = Math.min(offenseList.size(), 4);
	for (int x = 0; x < to; x++) {
	    ret.append(StringUtil.makeEnumHumanReadable(offenseList.get(x).getOffense().name()));
	    ret.append(": ");
	    ret.append(offenseList.get(x).getCount());
            if (offenseList.get(x).getParam() != null && !offenseList.get(x).getParam().equals("")) {
                ret.append("-(");
                ret.append(offenseList.get(x).getParam());
                ret.append(")");
            }
	    if (x != to - 1) {
		ret.append(" ");
	    }
	}
	return ret.toString();
    }

    public final void dispose() {
	if (invalidationTask != null) {
	    invalidationTask.cancel(false);
	}
	invalidationTask = null;
    }

    private final class InvalidationTask implements Runnable {

	@Override
	public final void run() {
	    CheatingOffenseEntry[] offenses_copy;
	    synchronized (offenses) {
		offenses_copy = offenses.values().toArray(new CheatingOffenseEntry[offenses.size()]);
	    }
	    for (CheatingOffenseEntry offense : offenses_copy) {
		if (offense.isExpired()) {
		    expireEntry(offense);
		}
	    }
	    if (chr.get() == null) {
		dispose();
	    }
	}
    }
}
