/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */


package community;

import client.MaplePlayerIdNamePair;
import client.MapleClient;
import client.MaplePlayerIdNamePair;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Deque;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.Map;
import database.MYSQL;
import packet.creators.MainPacketCreator;

public class BuddyList {

    public static enum BuddyOperation {

	ADDED, DELETED
    }

    public static enum BuddyAddResult {

	BUDDYLIST_FULL, ALREADY_ON_LIST, OK
    }
    private Map<Integer, BuddylistEntry> buddies = new LinkedHashMap<Integer, BuddylistEntry>();
    private int capacity;
    private Deque<MaplePlayerIdNamePair> pendingRequests = new LinkedList<MaplePlayerIdNamePair>();

    public BuddyList(int capacity) {
	super();
	this.capacity = capacity;
    }

    public boolean contains(int characterId) {
	return buddies.containsKey(Integer.valueOf(characterId));
    }

    public boolean containsVisible(int characterId) {
	BuddylistEntry ble = buddies.get(characterId);
	if (ble == null) {
	    return false;
	}
	return ble.isVisible();
    }

    public int getCapacity() {
	return capacity;
    }

    public void setCapacity(int capacity) {
	this.capacity = capacity;
    }

    public BuddylistEntry get(int characterId) {
	return buddies.get(Integer.valueOf(characterId));
    }

    public BuddylistEntry get(String characterName) {
	String lowerCaseName = characterName.toLowerCase();
	for (BuddylistEntry ble : buddies.values()) {
	    if (ble.getName().toLowerCase().equals(lowerCaseName)) {
		return ble;
	    }
	}
	return null;
    }

    public void put(BuddylistEntry entry) {
	buddies.put(Integer.valueOf(entry.getCharacterId()), entry);
    }

    public void remove(int characterId) {
	buddies.remove(Integer.valueOf(characterId));
    }

    public Collection<BuddylistEntry> getBuddies() {
	return buddies.values();
    }

    public boolean isFull() {
	return buddies.size() >= capacity;
    }

    public int[] getBuddyIds() {
	int buddyIds[] = new int[buddies.size()];
	int i = 0;
	for (BuddylistEntry ble : buddies.values()) {
	    buddyIds[i++] = ble.getCharacterId();
	}
	return buddyIds;
    }

    public void loadFromTransfer(final Map<MaplePlayerIdNamePair, Boolean> data) {
	MaplePlayerIdNamePair buddyid;
	boolean pair;
	for (final Map.Entry<MaplePlayerIdNamePair, Boolean> qs : data.entrySet()) {
	    buddyid = qs.getKey();
	    pair = qs.getValue();
	    if (!pair) {
		pendingRequests.push(buddyid);
	    } else {
		put(new BuddylistEntry(buddyid.getName(), buddyid.getId(), "그룹 미지정", -1, true, buddyid.getLevel(), buddyid.getJob()));
	    }
	}
    }

    public void loadFromDb(int characterId) throws SQLException {
	Connection con = MYSQL.getConnection();
	PreparedStatement ps = con.prepareStatement("SELECT b.buddyid, b.pending, c.name as buddyname, c.job as buddyjob, c.level as buddylevel, b.groupname FROM buddies as b, characters as c WHERE c.id = b.buddyid AND b.characterid = ?");
	ps.setInt(1, characterId);
	ResultSet rs = ps.executeQuery();
	while (rs.next()) {
	    int buddyid = rs.getInt("buddyid");
	    String buddyname = rs.getString("buddyname");
	    if (rs.getInt("pending") == 1) {
		pendingRequests.push(new MaplePlayerIdNamePair(buddyid, buddyname, rs.getInt("buddylevel"), rs.getInt("buddyjob")));
	    } else {
		put(new BuddylistEntry(buddyname, buddyid, rs.getString("groupname"), -1, true, rs.getInt("buddylevel"), rs.getInt("buddyjob")));
	    }
	}
	rs.close();
	ps.close();

	ps = con.prepareStatement("DELETE FROM buddies WHERE pending = 1 AND characterid = ?");
	ps.setInt(1, characterId);
	ps.executeUpdate();
	ps.close();
    }


    public MaplePlayerIdNamePair pollPendingRequest() {
	return pendingRequests.pollLast();
    }

    public void addBuddyRequest(MapleClient c, int cidFrom, String nameFrom, int channelFrom, int levelFrom, int jobFrom, String groupName) {
        put(new BuddylistEntry(nameFrom, cidFrom, groupName, channelFrom, false, levelFrom, jobFrom));
        if (pendingRequests.isEmpty()) {
            c.getSession().write(MainPacketCreator.requestBuddylistAdd(cidFrom, nameFrom, levelFrom, jobFrom, c));
        } else {
            pendingRequests.push(new MaplePlayerIdNamePair(cidFrom, nameFrom, levelFrom, jobFrom));
        }
    }
}