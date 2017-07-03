/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package community;

import client.MapleCharacter;
import launch.ChannelServer;
import packet.transfer.write.Packet;
import java.util.*;
import java.util.Map.Entry;
import java.util.concurrent.locks.ReentrantLock;

/**
 *
 * @author 에반테이르
 */
public class MapleExpedition {
    Map<Integer, MapleParty> parties = new LinkedHashMap<Integer, MapleParty>();
    ReentrantLock lock = new ReentrantLock();
    private int leader;
    private MapleExpeditionType type;
    private int saveBossRaidMap = -1;
    private int saveBossRaidChannel = -1;
    private boolean clearedBoss = false;
    private List<Integer> deadchars = new LinkedList<Integer>();
    private int id;
    
    public MapleExpedition (int lead, MapleExpeditionType typ) {
        this.leader = lead;
        this.type = typ;
    }
    
    public boolean isBossKilled() {
        return clearedBoss;
    }
    
    public void setBossKilled(boolean kill) {
        this.clearedBoss = kill;
    }
    
    public int getPositionByPartyId(int id) {
        lock.lock();
        try {
            for (Entry<Integer, MapleParty> e : parties.entrySet()) {
                if (e.getValue().getId() == id) {
                    return e.getKey();
                }
            }
        } finally {
            lock.unlock();
        }
        
        return -1;
    }
    
    public void addDeadChar(int cid) {
        deadchars.add(cid);
    }
    
    public boolean containDeadChar(int cid) {
        return deadchars.contains(cid);
    }
    
    public int getLastBossMap() {
        return saveBossRaidMap;
    }
    
    public void setLastBossMap(int map) {
        this.saveBossRaidMap = map;
    }
    
    public int getLastBossChannel() {
        return saveBossRaidChannel;
    }
    
    public void setLastBossChannel(int cha) {
        this.saveBossRaidChannel = cha;
    }
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    public int getAllMemberSize() {
        lock.lock();
        try {
            int ret = 0;
            for (MapleParty party : getPartys()) {
                ret += party.getMembers().size();
            }
            return ret;
        } finally {
            lock.unlock();
        }
    }
    
    public int getLeader() {
        return leader;
    }
    
    public void setLeader(int le) {
        this.leader = le;
    }
    
    public MapleExpeditionType getType() {
        return type;
    }
    
    public Collection<MapleParty> getPartys() {
        return parties.values();
    }
    
    public void addParty(int num, MapleParty party) {
        lock.lock();
        try {
            if (parties.containsKey(num)) {
                parties.remove(num);
            }
            parties.put(num, party);
        } finally {
            lock.unlock();
        }
    }
    
    public void removeParty(int num) {
        lock.lock();
        try {
            if (parties.containsKey(num)) {
                parties.remove(num);
            }
        } finally {
            lock.unlock();
        }
    }
    
    public MapleParty getParty(int num) {
        lock.lock();
        try {
            return parties.get(num);
        } finally {
            lock.unlock();
        }
    }
    
    public boolean isContained(int num) {
        lock.lock();
        try {
            return parties.keySet().contains(num);
        } finally {
            lock.unlock();
        }
    }
    
    public int getNextFreeSlot() {
        if (parties.size() >= 6) {
            return -1;
        }
        lock.lock();
        try {
            for (int z = 0; z <= 4; z++) {
                if (!parties.keySet().contains(z)) {
                    return z;
                }
            }
            return -1;
        } finally {
            lock.unlock();
        }
    }
    
    
    public void broadcastMessage(Packet packet) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            lock.lock();
            try {
                for (MapleParty party : getPartys()) {
                    for (MaplePartyCharacter hpc : party.getMembers()) {
                        MapleCharacter hp = cserv.getPlayerStorage().getCharacterByName(hpc.getName());
                        if (hp != null) {
                            hp.send(packet);
                        }
                    }
                }
            } finally {
                lock.unlock();
            }
        }
    }
    
    public void broadcastMessage(MapleCharacter chr, Packet packet) {
        for (ChannelServer cserv : ChannelServer.getAllInstances()) {
            lock.lock();
            try {
                for (MapleParty party : getPartys()) {
                    for (MaplePartyCharacter hpc : party.getMembers()) {
                        MapleCharacter hp = cserv.getPlayerStorage().getCharacterByName(hpc.getName());
                        if (hp != null && hp.getId() != chr.getId()) {
                            hp.send(packet);
                        }
                    }
                }
            } finally {
                lock.unlock();
            }
        }
    }
}
