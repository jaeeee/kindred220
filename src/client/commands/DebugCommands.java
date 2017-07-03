/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import java.util.Arrays;
import java.util.List;

import client.MapleCharacter;
import client.MapleClient;
import launch.ChannelServer;
import server.maps.MaplePortal;
import server.maps.MapleMap;
import server.maps.MapleMapObjectType;
import server.maps.MapleMapObject;
import server.maps.MapleReactor;
import server.maps.MapleReactorFactory;
import server.maps.MapleReactorStats;
import server.quest.MapleQuest;
import packet.creators.MainPacketCreator;
import server.life.MapleNPC;
import server.life.MaplePlayerNPC;

public class DebugCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
	MapleCharacter player = c.getPlayer();
        
	if (splitted[0].equals("!clearquest")) {
	    MapleQuest.getInstance(Integer.parseInt(splitted[1])).forfeit(c.getPlayer());
	} else if (splitted[0].equals("!pinfo")) {
	    final MaplePortal portal = player.getMap().findClosestSpawnpoint(player.getPosition());
	    c.getPlayer().dropMessage(6, portal.getName() + " 포탈아이디: " + portal.getId() + " 스크립트: " + portal.getScriptName());
	} else if (splitted[0].equals("!printobject")) {
	    c.getPlayer().dropMessage(6, c.getPlayer().getMap().spawnDebug());
	} else if (splitted[0].equals("!threads")) {
	    Thread[] threads = new Thread[Thread.activeCount()];
	    Thread.enumerate(threads);
	    String filter = "";
	    if (splitted.length > 1) {
		filter = splitted[1];
	    }
	    for (int i = 0; i < threads.length; i++) {
		String tstring = threads[i].toString();
		if (tstring.toLowerCase().indexOf(filter.toLowerCase()) > -1) {
		    c.getPlayer().dropMessage(6, i + ": " + tstring);
		}
	    }
	} else if (splitted[0].equals("!trackpath")) {
	    if (splitted.length < 1) {
		throw new IllegalCommandSyntaxException(1);
	    }
	    Thread[] threads = new Thread[Thread.activeCount()];
	    Thread.enumerate(threads);
	    Thread t = threads[Integer.parseInt(splitted[1])];
	    c.getPlayer().dropMessage(6, t.toString() + ":");
	    for (StackTraceElement elem : t.getStackTrace()) {
		c.getPlayer().dropMessage(6, elem.toString());
	    }
	} else if (splitted[0].equals("!tpacket")) {
	    c.getSession().write(MainPacketCreator.getPlayerInfo(player));
	    player.getMap().removePlayer(player);
	    player.getMap().addPlayer(player);
	} else if (splitted[0].equals("!droptoggle")) {
	    player.getMap().toggleDrops();
	} else if (splitted[0].equals("!togglels")) {
            ChannelServer.allToggleMegaphoneMuteState();
	    c.getPlayer().dropMessage(6, "확성기 사용가능 상태 : " + (c.getChannelServer().getMegaphoneMuteState() ? "불가능" : "가능"));
	} else if (splitted[0].equalsIgnoreCase("!summonreactor")) {
	    MapleReactorStats reactorSt = MapleReactorFactory.getReactor(Integer.parseInt(splitted[1]));
	    MapleReactor reactor = new MapleReactor(reactorSt, Integer.parseInt(splitted[1]));
	    reactor.setDelay(-1);
	    reactor.setPosition(c.getPlayer().getPosition());
	    c.getPlayer().getMap().spawnReactor(reactor);
	} else if (splitted[0].equals("!reactorstroke")) {
	    c.getPlayer().getMap().getReactorByOid(Integer.parseInt(splitted[1])).hitReactor(c);
	} else if (splitted[0].equals("!listreactor") || splitted[0].equals("!cmapreactors")) {
	    MapleMap map = c.getPlayer().getMap();
	    List<MapleMapObject> reactors = map.getMapObjectsInRange(c.getPlayer().getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.REACTOR));
	    for (MapleMapObject reactorL : reactors) {
		MapleReactor reactor2l = (MapleReactor) reactorL;
		c.getPlayer().dropMessage(6, "리액터: 오브젝트id: " + reactor2l.getObjectId() + " 리액터ID: " + reactor2l.getReactorId() + " 위치: " + reactor2l.getPosition().toString() + " 상태: " + reactor2l.getState());
	    }
	} else if (splitted[0].equals("!killreactor")) {
	    MapleMap map = c.getPlayer().getMap();
	    List<MapleMapObject> reactors = map.getMapObjectsInRange(c.getPlayer().getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.REACTOR));
	    if (splitted[1].equals("모두")) {
		for (MapleMapObject reactorL : reactors) {
		    MapleReactor reactor2l = (MapleReactor) reactorL;
		    c.getPlayer().getMap().destroyReactor(reactor2l.getObjectId());
		}
	    } else {
		c.getPlayer().getMap().destroyReactor(Integer.parseInt(splitted[1]));
	    }
	} else if (splitted[0].equals("!reactorini")) {
	    c.getPlayer().getMap().resetReactors();
	} else if (splitted[0].equals("!reactorset")) {
	    c.getPlayer().getMap().setReactorState();
	} else if (splitted[0].equals("!cleardrops")) {
	    List<MapleMapObject> items = c.getPlayer().getMap().getMapObjectsInRange(c.getPlayer().getPosition(), Double.POSITIVE_INFINITY, Arrays.asList(MapleMapObjectType.ITEM));
	    for (MapleMapObject i : items) {
		c.getPlayer().getMap().removeMapObject(i);
		c.getPlayer().getMap().broadcastMessage(MainPacketCreator.removeItemFromMap(i.getObjectId(), 0, 0), i.getPosition());
	    }
	} else if (splitted[0].equals("!changeexp")) {
	    if (splitted.length > 1) {
		final int rate = Integer.parseInt(splitted[1]);
		c.getChannelServer().setExpRate(rate);
		c.getPlayer().dropMessage(6, "경험치 배율이 " + rate + "x 배로 수정되었습니다.");
	    } else {
		c.getPlayer().dropMessage(6, "How to use: !changeexp <number>");
	    }
	} else if (splitted[0].equals("!changedrop")) {
	    if (splitted.length > 1) {
		final int rate = Integer.parseInt(splitted[1]);
		c.getChannelServer().setDropRate(rate);
		c.getPlayer().dropMessage(6, "드롭 배율이 " + rate + "x 배로 수정되었습니다.");
	    } else {
		c.getPlayer().dropMessage(6, "How to use: !changedrop <number>");
	    }
	} else if (splitted[0].equals("!channeldc")) {
	    c.getChannelServer().getPlayerStorage().disconnectAll();
	} else if (splitted[0].equals("!npc")) {
            MapleMap map = c.getPlayer().getMap();
            c.getPlayer().Message("현재 맵 : "+map.getId()+" - "+map.getStreetName() + " : "+map.getMapName());
            for (MapleMapObject mo : map.getAllNPC()) {
                c.getPlayer().Message(7, ((MapleNPC) mo).getId() + " : " + ((MapleNPC) mo).getName());
            }
        } else if (splitted[0].equals("!cmapportal")) {
            MapleMap map = c.getPlayer().getMap();
            c.getPlayer().Message("현재 맵 : "+map.getId()+" - "+map.getStreetName() + " : "+map.getMapName());
            for (MaplePortal mp : map.getPortals()) {
                c.getPlayer().Message(7, mp.getId() + " : " + mp.getName() + " 스크립트 : "+mp.getScriptName() +" 목적지 : "+mp.getTarget());
            }
        } else if (splitted[0].equals("!cmapplayers")) {
            MapleMap map = c.getPlayer().getMap();
            c.getPlayer().Message("현재 맵 : "+map.getId()+" - "+map.getStreetName() + " : "+map.getMapName());
            for (MapleMapObject pr : map.getAllPlayer()) {
                c.getPlayer().Message(7, ((MapleCharacter) pr).getName());
            }
        } else if (splitted[0].equals("!unknown")) {
            int d = Integer.parseInt(splitted[1]);
            c.getPlayer().addInnerExp(d);
            c.getPlayer().message(5, "명예치가 "+d+" 상승했습니다.");
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("channeldc", "", "Exit connected to force all players of the current channel. Loose translation", 6),
		    new CommandDefinition("cleardrops", "", "Clear all drops in the current map.", 4),
		    new CommandDefinition("clearquest", "", "Erase all recieved quests.", 2),
		    new CommandDefinition("pinfo", "", "Print out the closest portal.", 2),
		    new CommandDefinition("printobject", "", "Prints the current recalled object. Loose translation", 5),
		    new CommandDefinition("togglels", "", "Change the loudspeaker enabled status of all channels. Loose translation", 5),
		    new CommandDefinition("threads", "", "Prints the active threads.", 6),
		    new CommandDefinition("trackpath", "<thread number>", "The thread that keeps track of how and where to start. Loose Translation", 6),
		    new CommandDefinition("tpacket", "", "Transfer the character information packet. Loose Translation", 6),
		    new CommandDefinition("droptoggle", "", "Toggle drops on and off on the current map.", 2),
		    new CommandDefinition("summonreactor", "<Reactor ID>", "Summons a reactor.", 4),
		    new CommandDefinition("reactorstroke", "<Reactor Object ID>", "Hit the reactor entered ID. Loose translation", 4),
		    new CommandDefinition("reactorini", "", "Create a state of all reactors to zero. WTF translation", 4),
		    new CommandDefinition("listreactor", "", "Print all the reactors of the current map.", 4),
		    new CommandDefinition("cmapreactors", "", "To print all the reactors of the current map.", 4),
                    new CommandDefinition("cmapplayers", "", "Print out all players in the current map.", 4),
		    new CommandDefinition("killreactor", "<Reactor ID>", "Destruction of the reactor that ID.", 4),
		    new CommandDefinition("reactorset", "<Reactor ID> <condition>", "You control the state of the reactor that ID. WTF translation", 4),
		    new CommandDefinition("changeexp", "<amount magnified>", "Adjust current channel exp rate.", 6),
		    new CommandDefinition("changedrop", "<amount magnified>", "Adjust current channel drop rate.", 6),
		    new CommandDefinition("npc", "", "Prints a list of all npc in the current map.", 1),
		    new CommandDefinition("cmapportal", "", "Prints a list of all of the portals on the current map..", 1),
		    new CommandDefinition("unknown", "", "Posted myeongseongchi. WTF ", 5)
		};
    }
}
