/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package scripting;

import constants.ServerConstants;
import client.MapleClient;
import database.MYSQL;
import server.maps.MapleReactor;
import server.maps.ReactorDropEntry;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import javax.script.Invocable;
import javax.script.ScriptEngine;

public class ReactorScriptManager extends AbstractScriptManager {

    private static final ReactorScriptManager instance = new ReactorScriptManager();
    private final Map<Integer, List<ReactorDropEntry>> drops = new HashMap<Integer, List<ReactorDropEntry>>();

    public static final ReactorScriptManager getInstance() {
	return instance;
    }

    public final void act(final MapleClient c, final MapleReactor reactor) {
	try {
	    final Invocable iv = getInvocable("reactor/" + reactor.getReactorId() + ".js", c);
	    final ScriptEngine scriptengine = (ScriptEngine) iv;
	    if (iv == null) {
		return;
	    }
	    ReactorActionManager rm = new ReactorActionManager(c, reactor);

	    scriptengine.put("rm", rm);
	    ReactorScript rs = iv.getInterface(ReactorScript.class);
	    rs.act();
	} catch (Exception e) {
            if (!ServerConstants.realese) e.printStackTrace();
	    System.err.println("Error executing reactor script." + e);
	}
    }

    public final List<ReactorDropEntry> getDrops(final int rid) {
	List<ReactorDropEntry> ret = drops.get(rid);
	if (ret != null) {
	    return ret;
	}
	ret = new LinkedList<ReactorDropEntry>();

	PreparedStatement ps = null;
	ResultSet rs = null;

	try {
	    Connection con = MYSQL.getConnection();
	    ps = con.prepareStatement("SELECT * FROM reactordrops WHERE reactorid = ?");
	    ps.setInt(1, rid);
	    rs = ps.executeQuery();

	    while (rs.next()) {
		ret.add(new ReactorDropEntry(rs.getInt("itemid"), rs.getInt("chance"), rs.getInt("questid")));
	    }
	    rs.close();
	    ps.close();
	} catch (final SQLException e) {
	    System.err.println("Could not retrieve drops for reactor " + rid + e);
	    return ret;
	} finally {
	    try {
		if (rs != null) {
		    rs.close();
		}
		if (ps != null) {
		    ps.close();
		}
	    } catch (SQLException ignore) {
		return ret;
	    }
	}
	drops.put(rid, ret);
	return ret;
    }

    public final void clearDrops() {
	drops.clear();
    }
}
