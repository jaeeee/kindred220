package server.bosses;

import client.MapleClient;
import java.util.LinkedList;
import java.util.List;
import packet.creators.BossPackets;
import server.maps.AbstractHinaMapObject;
import server.maps.MapleMap;
import server.maps.MapleMapObjectType;

/**
 *
 * @author syonkr
 */
public class ObtacleAtom extends AbstractHinaMapObject {
    private int type, posX, posY, speed, acceleration, unk, explospeed, angle, damageper, spawndelay, distance;
    
    public ObtacleAtom(int type, int posX, int posY, int speed, int acceleration, int unk, int explospeed, int damageper, int spawndelay, int distance, int angle) {
        this.type = type;
        this.posX = posX;
        this.posY = posY;
        this.speed = speed;
        this.acceleration = acceleration;
        this.unk = unk;
        this.explospeed = explospeed;
        this.damageper = damageper;
        this.spawndelay = spawndelay;
        this.distance = distance;
        this.angle = angle;
    }
    
    public int getTypeNum() {
        return type;
    }
    
    @Override
    public MapleMapObjectType getType() {
        return MapleMapObjectType.Atom;
    }
    
    public int getRuneType() {
        return type;
    }
    
    public int getPositionX() {
        return posX;
    }
    
    public int getPositionY() {
        return posY;
    }
    
    public int getMaxSpeed() {
        return speed;
    }
    
    public int getExplodeSpeed() {
        return explospeed;
    }
    
    public int getDamagePercent() {
        return damageper;
    }
    
    public int getUnk() {
        return unk;
    }
    
    public int getSpawnDelay() {
        return spawndelay;
    }
    
    public int getDistance() {
        return distance;
    }
    
    public int getAngle() {
        return angle;
    }
    
    public int getAcceleration() {
        return acceleration;
    }
    
    @Override
    public void sendSpawnData(MapleClient client) {
        List<ObtacleAtom> atoms = new LinkedList<ObtacleAtom>();
        atoms.add(this);
        client.getSession().write(BossPackets.spawnObtacleAtomBomb(atoms));
        atoms.clear();
    }
    
    public void sendSpawn(MapleClient client, List<ObtacleAtom> da) {
        client.getSession().write(BossPackets.spawnObtacleAtomBomb(da));
    }
    
    @Override
    public void sendDestroyData(MapleClient client) {
    }
}
