/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package launch.holder;

import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import client.MapleCharacterUtil;
import client.MapleCharacter;
import packet.transfer.write.Packet;
import launch.helpers.ChracterTransfer;
import constants.subclasses.PlayerData;
import tools.Timer.WorldTimer;

public class MaplePlayerHolder {

    private final Lock mutex = new ReentrantLock();
    private final Lock mutex2 = new ReentrantLock();
    private final Map<String, MapleCharacter> nameToChar = new HashMap<String, MapleCharacter>();
    private final Map<Integer, MapleCharacter> idToChar = new HashMap<Integer, MapleCharacter>();
    private final Map<Integer, ChracterTransfer> PendingCharacter = new HashMap<Integer, ChracterTransfer>();
    private final Map<Integer, Object> effects = new HashMap<Integer, Object>();
    
    public MaplePlayerHolder() {
	// Prune once every 15 minutes
	WorldTimer.getInstance().schedule(new PersistingTask(), 900000);
    }

    public final void registerPlayer(final MapleCharacter chr) {
	mutex.lock();
	try {
	    nameToChar.put(chr.getName().toLowerCase(), chr);
	    idToChar.put(chr.getId(), chr);
            if (effects.get(chr.getId()) == null)
                effects.put(chr.getId(), new Object());
	} finally {
	    mutex.unlock();
	}
    }

    public final void registerPendingPlayer(final ChracterTransfer chr, final int playerid) {
	mutex2.lock();
	try {
	    PendingCharacter.put(playerid, chr);//new Pair(System.currentTimeMillis(), chr));
	} finally {
	    mutex2.unlock();
	}
    }

    public final void deregisterPlayer(final MapleCharacter chr) {
	mutex.lock();
	try {
	    nameToChar.remove(chr.getName().toLowerCase());
	    idToChar.remove(chr.getId());
	} finally {
	    mutex.unlock();
	}
    }

    public final void deregisterPendingPlayer(final int charid) {
	mutex2.lock();
	try {
            if (PendingCharacter.get(charid) != null)
	    PendingCharacter.remove(charid);
	} finally {
	    mutex2.unlock();
	}
    }

    public final ChracterTransfer getPendingCharacter(final int charid) {
	final ChracterTransfer toreturn = PendingCharacter.get(charid);//.right;
	if (toreturn != null) {
	    deregisterPendingPlayer(charid);
	}
	return toreturn;
    }

    public final MapleCharacter getCharacterByName(final String name) {
	return nameToChar.get(name.toLowerCase());
    }
    
    public final Object getEffect(final int id) {
	return effects.get(id);
    }
    
    public final MapleCharacter getCharacterById(final int id) {
	return idToChar.get(id);
    }

    public final int getConnectedClients() {
	return idToChar.size();
    }
    
    public final int getNotGmConnectedClients() {
        int people = 0;
        mutex.lock();
        try {
            for (MapleCharacter hp : nameToChar.values()) {
                if (!hp.isGM()) {
                    people ++;
                }
            }
        } finally {
            mutex.unlock();
        }
        return people;
    }
    
    public final Map<String, MapleCharacter> getAllCharacters() {
        return nameToChar;
    }
    
    public final void saveAll() {
        mutex.lock();
        try {
            for (MapleCharacter hp : nameToChar.values()) {
                hp.saveToDB(false, false);
            }
        } finally {
            mutex.unlock();
        }
    }

    public final void disconnectAll() {
	mutex.lock();
	try {
	    final Iterator<MapleCharacter> itr = nameToChar.values().iterator();
	    MapleCharacter chr;
	    while (itr.hasNext()) {
		chr = itr.next();
		chr.getClient().disconnect(false, false);
		chr.getClient().getSession().close();
		itr.remove();
	    }
	} finally {
	    mutex.unlock();
	}
    }

    public final String getOnlinePlayers(final boolean byGM) {
	final StringBuilder sb = new StringBuilder();
	if (byGM) {
	    mutex.lock();
	    try {
		final Iterator<MapleCharacter> itr = nameToChar.values().iterator();
		while (itr.hasNext()) {
		    sb.append(", ");
		}
	    } finally {
		mutex.unlock();
	    }
	} else {
	    mutex.lock();
	    try {
		final Iterator<MapleCharacter> itr = nameToChar.values().iterator();
		MapleCharacter chr;
		while (itr.hasNext()) {
		    chr = itr.next();

		    if (!chr.isGM()) {
			sb.append(", ");
		    }
		}
	    } finally {
		mutex.unlock();
	    }
	}
	return sb.toString();
    }

    public final void broadcastPacket(final Packet data) {
	mutex.lock();
	try {
	    final Iterator<MapleCharacter> itr = nameToChar.values().iterator();
	    while (itr.hasNext()) {
		itr.next().getClient().getSession().write(data);
	    }
	} finally {
	    mutex.unlock();
	}
    }

    public final void broadcastSmegaPacket(final Packet data) {
	mutex.lock();
	try {
	    final Iterator<MapleCharacter> itr = nameToChar.values().iterator();
	    MapleCharacter chr;
	    while (itr.hasNext()) {
		chr = itr.next();

		if (chr.getClient().isLoggedIn() && chr.getSmega()) {
		    chr.getClient().getSession().write(data);
		}
	    }
	} finally {
	    mutex.unlock();
	}
    }

    public final void broadcastGMPacket(final Packet data) {
	mutex.lock();
	try {
	    final Iterator<MapleCharacter> itr = nameToChar.values().iterator();
	    MapleCharacter chr;
	    while (itr.hasNext()) {
		chr = itr.next();

		if (chr.getClient().isLoggedIn() && chr.hasGmLevel((byte) 3)) {
		    chr.getClient().getSession().write(data);
		}
	    }
	} finally {
	    mutex.unlock();
	}
    }

    
    public class PersistingTask implements Runnable {

	@Override
	public void run() {
	    mutex2.lock();
	    try {
		final long currenttime = System.currentTimeMillis();
		final Iterator<Map.Entry<Integer, ChracterTransfer>> itr = PendingCharacter.entrySet().iterator();

		while (itr.hasNext()) {
		    if (currenttime - itr.next().getValue().TranferTime > 40000) { // 40 sec
			itr.remove();
		    }
		}
		WorldTimer.getInstance().schedule(new PersistingTask(), 900000);
	    } finally {
		mutex2.unlock();
	    }
	}
    }
}
