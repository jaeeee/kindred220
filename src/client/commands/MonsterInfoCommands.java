/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¹èÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package client.commands;

import java.util.Arrays;

import client.MapleClient;
import server.life.MapleMonster;
import server.maps.MapleMap;
import server.maps.MapleMapObject;
import server.maps.MapleMapObjectType;

public class MonsterInfoCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {

	MapleMap map = c.getPlayer().getMap();
	double range = Double.POSITIVE_INFINITY;

	if (splitted.length > 1) {
	    int irange = Integer.parseInt(splitted[1]);
	    if (splitted.length <= 2) {
		range = irange * irange;
	    } else {
		map = c.getChannelServer().getMapFactory().getMap(Integer.parseInt(splitted[2]));
	    }
	}
	if (splitted[0].equals("!killall")) {
	    MapleMonster mob;
	    for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
		mob = (MapleMonster) monstermo;
		map.killMonster(mob, c.getPlayer(), false, false, (byte) 1);
	    }
	} else if (splitted[0].equals("!killall2")) {
	    MapleMonster mob;
	    for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
		mob = (MapleMonster) monstermo;
		map.killMonster(mob, c.getPlayer(), true, false, (byte) 1);
	    }
	} else if (splitted[0].equals("!killalldrops")) {
	    map.killAllMonsters(false);
	    
	} else if (splitted[0].equals("!mobinfo")) {
	    MapleMonster mob;
	    for (MapleMapObject monstermo : map.getMapObjectsInRange(c.getPlayer().getPosition(), range, Arrays.asList(MapleMapObjectType.MONSTER))) {
		mob = (MapleMonster) monstermo;
		c.getPlayer().dropMessage(6, "Mob " + mob.toString());
	    }
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("killall", "(<range>) (<Map ID>)", "Kill all the monsters. If the map ID is defined, the range values are ignored.", 5),
		    new CommandDefinition("killall2", "(<range>) (<Map ID>)", "Is to kill all the monsters, the monsters are not revived by another monster. Loose translation", 5),
		    new CommandDefinition("killalldrop", "(<range>) (<Map ID>)", "Kill all the monsters, the monsters also drop their items.", 5),
		    new CommandDefinition("mobinfo", "", "Print all monsters in current map.", 5)
	};
    }
}
