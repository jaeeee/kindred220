/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package client;

import java.util.Map;
import java.util.Map.Entry;
import java.util.HashMap;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import packet.transfer.write.WritingPacket;

import database.MYSQL;

public class MapleKeyLayout {

    private boolean changed = false;
    private final Map<Integer, MapleKeyBinding> keymap = new HashMap<Integer, MapleKeyBinding>();

    public final Map<Integer, MapleKeyBinding> Layout() {
	changed = true;
	return keymap;
    }

    public final void writeData(final WritingPacket mplew) {
	MapleKeyBinding binding;
	for (int x = 0; x < 89; x++) {
	    binding = keymap.get(Integer.valueOf(x));
	    if (binding != null) {
		mplew.write(binding.getType());
		mplew.writeInt(binding.getAction());
	    } else {
		mplew.write(0);
		mplew.writeInt(0);
	    }
	}
    }

    public final void saveKeys(final int charid) throws SQLException {
	if (!changed || keymap.size() == 0) {
	    return;
	}
	Connection con = MYSQL.getConnection();

	PreparedStatement ps = con.prepareStatement("DELETE FROM keymap WHERE characterid = ?");
	ps.setInt(1, charid);
	ps.execute();
	ps.close();

	boolean first = true;
	StringBuilder query = new StringBuilder();

	for (Entry<Integer, MapleKeyBinding> keybinding : keymap.entrySet()) {
	    if (first) {
		first = false;
		query.append("INSERT INTO keymap VALUES (");
	    } else {
		query.append(",(");
	    }
	    query.append("DEFAULT,");
	    query.append(charid).append(",");
	    query.append(keybinding.getKey().intValue()).append(",");
	    query.append(keybinding.getValue().getType()).append(",");
	    query.append(keybinding.getValue().getAction()).append(")");
	}
	ps = con.prepareStatement(query.toString());
	ps.execute();
	ps.close();
    }
}
