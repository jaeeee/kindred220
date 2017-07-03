/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * πË¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package client.commands;

import client.MapleClient;
import constants.ServerConstants;
import launch.world.WorldConnected;
import java.util.Map;

public class ConnectedCommand implements Command {

    @Override
    public void execute(MapleClient c, String[] splittedLine) throws Exception, IllegalCommandSyntaxException {

	    Map<Integer, Integer> connected = WorldConnected.getConnected(c.getWorld());
	    StringBuilder conStr = new StringBuilder("People currently connected: ");
	    boolean first = true;
	    for (int i : connected.keySet()) {
		if (!first) {
		    conStr.append(", ");
		} else {
		    first = false;
		}
		if (i == 0) {
		    conStr.append("√—: ");
		    conStr.append(connected.get(i));
		} else {
		    conStr.append("Channel");
		    conStr.append(i);
		    conStr.append(": ");
		    conStr.append(connected.get(i));
		}
	    }
	    c.getPlayer().dropMessage(6, conStr.toString());
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		     new CommandDefinition("connected", "", "Prints out the number of users connected to each channel.", 1)
	};
    }
}
