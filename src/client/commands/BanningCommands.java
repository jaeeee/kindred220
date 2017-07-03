/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import java.text.DateFormat;
import java.util.Calendar;

import client.MapleCharacter;
import client.MapleClient;
import database.MYSQL;
import launch.ChannelServer;
import tools.StringUtil;
import java.sql.PreparedStatement;

public class BanningCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception {
	ChannelServer cserv = c.getChannelServer();

	if (splitted[0].equals("!ban")) {
	    if (splitted.length < 3) {
		return;
	    }
	    final StringBuilder sb = new StringBuilder(c.getPlayer().getName());
	    sb.append(" banned ").append(splitted[1]).append(": ").append(StringUtil.joinStringFrom(splitted, 2));

	    final MapleCharacter target = cserv.getPlayerStorage().getCharacterByName(splitted[1]);

	    if (target != null) {
		sb.append(" (IP: ").append(target.getClient().getSession().getRemoteAddress().toString().split(":")[0]).append(")");
		if (target.ban(sb.toString(), true, false)) {
		    c.getPlayer().dropMessage(6, "Successfully banned the asshole.");
                    if (c.getPlayer().getKeyValue("Banned_Today") == null) {
                        c.getPlayer().setKeyValue("Banned_Today", "0");
                    }
                    c.getPlayer().setKeyValue("Banned_Today", (Integer.parseInt(c.getPlayer().getKeyValue("Banned_Today"))+1)+"");
		} else {
		    c.getPlayer().dropMessage(6, "Failed to ban that fucker.");
		}
	    } else {
		if (MapleCharacter.ban(splitted[1], sb.toString(), false)) {
		    c.getPlayer().dropMessage(6, splitted[1] + " Successfully banned offline.");
		} else {
		    c.getPlayer().dropMessage(6, splitted[1] + " Failed to fuckin ban.");
		}
	    }

	} else if (splitted[0].equals("!tempban")) {
	    final MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
	    final int reason = Integer.parseInt(splitted[2]);
	    final int numDay = Integer.parseInt(splitted[3]);

	    final Calendar cal = Calendar.getInstance();
	    cal.add(Calendar.DATE, numDay);
	    final DateFormat df = DateFormat.getInstance();

	    if (victim == null) {
		c.getPlayer().dropMessage(6, "해당 캐릭터를 찾을 수 없습니다.");
		return;
	    }
	    victim.tempban("기간 밴 : " + c.getPlayer().getName() + "", cal, reason, true);
	    c.getPlayer().dropMessage(6, "" + splitted[1] + " 캐릭터가 " + df.format(cal.getTime()) + " 까지 성공적으로 밴 되었습니다.");

	} else if (splitted[0].equals("!unban")) {
	    if (splitted.length < 1) {
		c.getPlayer().dropMessage(6, "!unban <IGN>");
	    } else {
		final byte result = c.unban(splitted[1]);
		if (result == -1) {
		    c.getPlayer().dropMessage(6, "해당 캐릭터를 발견하지 못했습니다.");
		} else if (result == -2) {
		    c.getPlayer().dropMessage(6, "캐릭터의 밴을 해제하는데 오류가 발생했습니다.");
		} else {
		    c.getPlayer().dropMessage(6, "캐릭터가 성공적으로 밴이 해제되었습니다.");
		}
	    }

	} else if (splitted[0].equals("!dc")) {
	    int level = 0;
	    MapleCharacter victim;
	    if (splitted[1].charAt(0) == '-') {
		level = StringUtil.countCharacters(splitted[1], 'f');
		victim = cserv.getPlayerStorage().getCharacterByName(splitted[2]);
	    } else {
		victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
	    }
            try {
                PreparedStatement ps = MYSQL.getConnection().prepareStatement("SELECT accountid WHERE id = ?");
                ps.setInt(1, victim.getId());
                
            } catch (Exception e) {

            }
	    if (level < 2) {
		victim.getClient().getSession().close();
		if (level >= 1) {
		    victim.getClient().disconnect(true, false);
		}
	    } else {
		c.getPlayer().dropMessage(6, "Please use dc -f instead.");
	    }
	}
    }

    @Override
    public CommandDefinition[] getDefinition() {
	return new CommandDefinition[]{
		    new CommandDefinition("ban", "<IGN> <Reason>", "Permanently banned the mac and IP.", 3),
                    new CommandDefinition("unban", "<IGN>", "Unbanned mac and IP.", 3),
		    new CommandDefinition("tempban", "<IGN> <Reason> <Amount of days>", "Ban for number of days.", 3),
		    new CommandDefinition("dc", "[-f] <IGN>", "Forced to terminate the connection of the character. If caught in hyeonjeop use the -f option.", 3)
	};
    }
}
