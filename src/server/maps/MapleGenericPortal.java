/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package server.maps;

import constants.ServerConstants;
import java.awt.Point;

import client.MapleClient;
import launch.ChannelServer;
import scripting.PortalScriptManager;
import packet.creators.MainPacketCreator;
import scripting.NPCScriptManager;

public class MapleGenericPortal implements MaplePortal {

    private String name, target, scriptName;
    private Point position;
    private int targetmap, type, id;

    public MapleGenericPortal(final int type) {
	this.type = type;
    }

    @Override
    public final int getId() {
	return id;
    }

    public final void setId(int id) {
	this.id = id;
    }

    @Override
    public final String getName() {
	return name;
    }

    @Override
    public final Point getPosition() {
	return position;
    }

    @Override
    public final String getTarget() {
	return target;
    }

    @Override
    public final int getTargetMapId() {
	return targetmap;
    }

    @Override
    public final int getType() {
	return type;
    }

    @Override
    public final String getScriptName() {
	return scriptName;
    }

    public final void setName(final String name) {
	this.name = name;
    }

    public final void setPosition(final Point position) {
	this.position = position;
    }

    public final void setTarget(final String target) {
	this.target = target;
    }

    public final void setTargetMapId(final int targetmapid) {
	this.targetmap = targetmapid;
    }

    @Override
    public final void setScriptName(final String scriptName) {
	this.scriptName = scriptName;
    }

    @Override
    public final void enterPortal(final MapleClient c) {
	if (getScriptName() != null) {
	    final MapleMap currentmap = c.getPlayer().getMap();
            c.getPlayer().checkFollow();
	    try {
		PortalScriptManager.getInstance().executePortalScript(this, c);
		if (c.getPlayer().getMap() == currentmap) { // Character is still on the same map.
		    c.getSession().write(MainPacketCreator.resetActions());
		}
	    } catch (final Exception e) {
		c.getSession().write(MainPacketCreator.resetActions());
		if (!ServerConstants.realese) e.printStackTrace();
	    }
	} else if (getTargetMapId() != 999999999) {
	    MapleMap to = null;
            if (c.getPlayer().getEventInstance() == null) {
                to = ChannelServer.getInstance(c.getChannel()).getMapFactory().getMap(getTargetMapId());
            } else {
                to = c.getPlayer().getEventInstance().getMapFactory().getMap(getTargetMapId());
            }
	    c.getPlayer().changeMap(to, to.getPortal(getTarget()) == null ? to.getPortal(0) : to.getPortal(getTarget())); //late resolving makes this harder but prevents us from loading the whole world at once
	}
    }
}