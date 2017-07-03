/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * πË¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package client.commands;

import java.util.HashMap;

import server.maps.MaplePortal;
import server.maps.MapleMap;
import client.MapleClient;

public class MapleoCommands implements Command {

    private static final HashMap<String, Integer> Mapleomaps = new HashMap<String, Integer>();

    public MapleoCommands() {
	Mapleomaps.put("gm", 180000000);
	Mapleomaps.put("south", 60000);
	Mapleomaps.put("amherst", 1010000);
	Mapleomaps.put("henesys", 100000000);
	Mapleomaps.put("ellinia", 101000000);
	Mapleomaps.put("perion", 102000000);
	Mapleomaps.put("kerning", 103000000);
	Mapleomaps.put("lith", 104000000);
	Mapleomaps.put("sleepywood", 105000000);
	Mapleomaps.put("florina", 110000000);
	Mapleomaps.put("orbis", 200000000);
	Mapleomaps.put("happy", 209000000);
	Mapleomaps.put("elnath", 211000000);
	Mapleomaps.put("ludi", 220000000);
	Mapleomaps.put("aqua", 230000000);
	Mapleomaps.put("leafre", 240000000);
	Mapleomaps.put("mulung", 250000000);
	Mapleomaps.put("herb", 251000000);
	Mapleomaps.put("omega", 221000000);
	Mapleomaps.put("korean", 222000000);
	Mapleomaps.put("sha", 990000000);
	Mapleomaps.put("aquaroad", 230040420);
	Mapleomaps.put("horntail", 240060200);
	Mapleomaps.put("griffey", 240020101);
	Mapleomaps.put("manon", 240020401);
	Mapleomaps.put("zakum", 280030000);
	Mapleomaps.put("papu", 220080001);
	Mapleomaps.put("shrine", 800000000);
	Mapleomaps.put("ariant", 260000100);
	Mapleomaps.put("naut", 120000000);
	Mapleomaps.put("xi", 740000000);
	Mapleomaps.put("thai", 500000000);
	Mapleomaps.put("ereve", 130000000);
	Mapleomaps.put("altaire", 300000000);
	Mapleomaps.put("threedoors", 270000000);
	Mapleomaps.put("pinkbean", 270050100);
	Mapleomaps.put("rien", 140000000);
	Mapleomaps.put("gm2", 180000001);
	Mapleomaps.put("edel", 310000000);
	Mapleomaps.put("edelcity", 310000001);
    }

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
	if (splitted.length < 2) {
	    c.getPlayer().dropMessage(6, "How to use: !move <map name>  If you enter a !move map you can see a list of available maps.");
	} else {
	    if (Mapleomaps.containsKey(splitted[1])) {
		MapleMap target = c.getChannelServer().getMapFactory().getMap(Mapleomaps.get(splitted[1]));
		MaplePortal targetPortal = target.getPortal(0);
		c.getPlayer().changeMap(target, targetPortal);
	    } else {
		if (splitted[1].equals("map")) {
		    c.getPlayer().dropMessage(6, "Available map list.");
		    StringBuilder sb = new StringBuilder();
		    for (String s : Mapleomaps.keySet()) {
			sb.append(s + ", ");
		    }
		    c.getPlayer().dropMessage(6, sb.substring(0, sb.length() - 2));
		} else {
		    c.getPlayer().dropMessage(6, "The syntax is incorrect.! If you enter the move map, you can see a list of available maps.");
		}
	    }
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
            new CommandDefinition("move", "?", "Go to enter a town / maps.", 1)
        };
    }
}
