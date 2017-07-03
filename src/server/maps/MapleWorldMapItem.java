/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package server.maps;

import client.MapleClient;
import client.MapleCharacter;
import client.items.IItem;
import client.items.IEquip;
import packet.creators.MainPacketCreator;
import java.awt.Point;

public class MapleWorldMapItem extends AbstractHinaMapObject {

    protected IItem item;
    protected MapleMapObject dropper;
    protected int character_ownerid, meso, questid = -1;
    protected long droppedTime;
    protected byte type;
    protected boolean pickedUp = false, playerDrop;
    protected IEquip equip;
    protected boolean fly, touch;
    protected int gradiant, speed;
    
    public MapleWorldMapItem(IItem item, Point position, MapleMapObject dropper, MapleCharacter owner, byte type, boolean playerDrop) {
	setPosition(position);
	this.item = item;
	this.dropper = dropper;
	this.character_ownerid = owner.getId();
	this.meso = 0;
	this.type = type;
	this.playerDrop = playerDrop;
        this.droppedTime = System.currentTimeMillis();
    }

    public MapleWorldMapItem(IItem item, Point position, MapleMapObject dropper, MapleCharacter owner, byte type, boolean playerDrop, IEquip equip) {
	setPosition(position);
	this.item = item;
	this.dropper = dropper;
	this.character_ownerid = owner.getId();
	this.meso = 0;
	this.type = type;
	this.playerDrop = playerDrop;
        this.droppedTime = System.currentTimeMillis();
        this.equip = equip;
    }
    
    public MapleWorldMapItem(IItem item, Point position, MapleMapObject dropper, MapleCharacter owner, byte type, boolean playerDrop, IEquip equip, boolean fly, boolean touch, int gradiant, int speed) {
	setPosition(position);
	this.item = item;
	this.dropper = dropper;
	this.character_ownerid = owner.getId();
	this.meso = 0;
	this.type = type;
	this.playerDrop = playerDrop;
        this.droppedTime = System.currentTimeMillis();
        this.equip = equip;
        this.fly = fly;
        this.touch = touch;
        this.gradiant = gradiant;
        this.speed = speed;
    }

    public MapleWorldMapItem(IItem item, Point position, MapleMapObject dropper, MapleCharacter owner, byte type, boolean playerDrop, int questid) {
	setPosition(position);
	this.item = item;
	this.dropper = dropper;
	this.character_ownerid = owner.getId();
	this.meso = 0;
	this.type = type;
	this.playerDrop = playerDrop;
	this.questid = questid;
        this.droppedTime = System.currentTimeMillis();
    }

    public MapleWorldMapItem(int meso, Point position, MapleMapObject dropper, MapleCharacter owner, byte type, boolean playerDrop) {
	setPosition(position);
	this.item = null;
	this.dropper = dropper;
	this.character_ownerid = owner.getId();
	this.meso = meso;
	this.type = type;
	this.playerDrop = playerDrop;
        this.droppedTime = System.currentTimeMillis();
    }

    public final IItem getItem() {
	return item;
    }
    
    public final IEquip getEquip() {
	return equip;
    }
    
    public final int getQuest() {
	return questid;
    }
    
    public final long getDroppedTime() {
        return droppedTime;
    }

    public final int getItemId() {
	if (getMeso() > 0) {
	    return meso;
	}
	return item.getItemId();
    }

    public final MapleMapObject getDropper() {
	return dropper;
    }

    public final int getOwner() {
	return character_ownerid;
    }
   
    public final int getMeso() {
	return meso;
    }

    public final boolean isPlayerDrop() {
	return playerDrop;
    }
    
    public final boolean isFly() {
        return fly;
    }
    
    public final boolean isTouch() {
        return touch;
    }
    
    public final int getGradiant() {
        return gradiant;
    }
    
    public final int getSpeed() {
        return speed;
    }

    public final boolean isPickedUp() {
	return pickedUp;
    }

    public void setPickedUp(final boolean pickedUp) {
	this.pickedUp = pickedUp;
    }

    public byte getDropType() {
	return type;
    }

    @Override
    public final MapleMapObjectType getType() {
	return MapleMapObjectType.ITEM;
    }

    @Override
    public void sendSpawnData(final MapleClient client) {
	if (questid <= 0 || client.getPlayer().getQuestStatus(questid) == 1) {
	   client.getSession().write(MainPacketCreator.dropItemFromMapObject(this, getPosition(), getPosition(), (byte) 2));
	}
    }

    @Override
    public void sendDestroyData(final MapleClient client) {
	client.getSession().write(MainPacketCreator.removeItemFromMap(getObjectId(), 1, 0));
    }
}