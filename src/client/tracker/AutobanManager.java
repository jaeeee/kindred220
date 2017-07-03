package client.tracker;

import client.MapleClient;
import launch.world.WorldBroadcasting;
import packet.creators.MainPacketCreator;
import java.util.*;
import launch.world.WorldBroadcasting;

public class AutobanManager implements Runnable {

    private static class ExpirationEntry implements Comparable<ExpirationEntry> {

	public long time;
	public int acc;
	public int points;

	public ExpirationEntry(long time, int acc, int points) {
	    this.time = time;
	    this.acc = acc;
	    this.points = points;
	}

	public int compareTo(AutobanManager.ExpirationEntry o) {
	    return (int) (time - o.time);
	}
    }
    private Map<Integer, Integer> points = new HashMap<Integer, Integer>();
    private Map<Integer, List<String>> reasons = new HashMap<Integer, List<String>>();
    private Set<ExpirationEntry> expirations = new TreeSet<ExpirationEntry>();
    private static final int AUTOBAN_POINTS = 1000;
    private static AutobanManager instance = new AutobanManager();

    public static final AutobanManager getInstance() {
	return instance;
    }

    public final void autoban(final MapleClient c, final String reason) {
	if (c.getPlayer().isGM()) {
	    c.getPlayer().dropMessage(5, "[GM경고] 오토밴이 감지됨 : " + reason);
	    return;
	}
	addPoints(c, AUTOBAN_POINTS, 0, reason);
    }

    public final synchronized void addPoints(final MapleClient c, final int points, final long expiration, final String reason) {
	List<String> reasonList;
	final int acc = c.getPlayer().getAccountID();

	if (this.points.containsKey(acc)) {
	    final int SavedPoints = this.points.get(acc);
	    if (SavedPoints >= AUTOBAN_POINTS) { // Already auto ban'd.
		return;
	    }
	    this.points.put(acc, SavedPoints + points); // Add
	    reasonList = this.reasons.get(acc);
	    reasonList.add(reason);
	} else {
	    this.points.put(acc, points);
	    reasonList = new LinkedList<String>();
	    reasonList.add(reason);
	    this.reasons.put(acc, reasonList);
	}

	if (this.points.get(acc) >= AUTOBAN_POINTS) { // See if it's sufficient to auto ban
	    if (c.getPlayer().isGM()) {
		c.getPlayer().dropMessage(5, "[WARNING] A/b triggled : " + reason);
		return;
	    }
	    final StringBuilder sb = new StringBuilder("a/b ");
	    sb.append(c.getPlayer().getName());
	    sb.append(" (IP ");
	    sb.append(c.getSession().getRemoteAddress().toString());
	    sb.append("): ");
	    for (final String s : reasons.get(acc)) {
		sb.append(s);
		sb.append(", ");
	    }
		WorldBroadcasting.broadcastMessage(MainPacketCreator.serverNotice(0, "" + c.getPlayer().getName() + " 님이 시스템에 의해 자동으로 밴 되었습니다. (마지막 이유: " + reason + ")").getBytes());
	
	   // c.getPlayer().ban(sb.toString(), false, true);
	 //   c.disconnect(true, false);
	} else {
	    if (expiration > 0) {
		expirations.add(new ExpirationEntry(System.currentTimeMillis() + expiration, acc, points));
	    }
	}
    }

    public final void run() {
//	final long now = System.currentTimeMillis();
//	for (final ExpirationEntry e : expirations) {
//	    if (e.time <= now) {
//		this.points.put(e.acc, this.points.get(e.acc) - e.points);
//	    } else {
//		return;
//	    }
//	}
    }
}