/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package handler.channel;

import client.MapleClient;
import client.MapleCharacter;
import community.MapleAlliance;
import community.MapleGuild;
import launch.ChannelServer;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;
import packet.transfer.write.Packet;

public class AllianceHandler {

    public static final void AllianceOperatopn(final ReadingMaple rh, final MapleClient c, boolean denied) {
        if (c.getPlayer().getGuildId() <= 0) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        final MapleGuild gs = ChannelServer.getGuild(c.getPlayer().getGuildId());
        if (gs == null) {
            c.getSession().write(MainPacketCreator.resetActions());
            return;
        }
        //System.out.println("Unhandled GuildAlliance \n" + rh.toString());
        byte op = rh.readByte();
        if (c.getPlayer().getGuildRank() != 1 && op != 1) { //only updating doesn't need guild leader
            return;
        }
        if (op == 22) {
            denied = true;
        }
        int leaderid = 0;
        if (gs.getAllianceId() > 0) {
            leaderid = ChannelServer.getAllianceLeader(gs.getAllianceId());
        }
        //accept invite, and deny invite don't need allianceid.
        if (op != 4 && !denied) {
            if (gs.getAllianceId() <= 0 || leaderid <= 0) {
                return;
            }
        } else if (leaderid > 0 || gs.getAllianceId() > 0) { //infact, if they have allianceid it's suspicious
            return;
        }
        if (denied) {
            DenyInvite(c, gs);
            return;
        }
        MapleCharacter chr;
        int inviteid;
        switch (op) {
            case 1: //load... must be in world op

                for (Packet pack : ChannelServer.getAllianceInfo(gs.getAllianceId(), false)) {
                    if (pack != null) {
                        c.getSession().write(pack);
                    }
                }
                break;
            case 3: //invite
                final int newGuild = ChannelServer.getGuildLeader(rh.readMapleAsciiString());
                if (newGuild > 0 && c.getPlayer().getAllianceRank() == 1 && leaderid == c.getPlayer().getId()) {
                    chr = c.getChannelServer().getPlayerStorage().getCharacterById(newGuild);
                    if (chr != null && chr.getGuildId() > 0 && ChannelServer.canInvite(gs.getAllianceId())) {
                        chr.getClient().getSession().write(MainPacketCreator.sendAllianceInvite(ChannelServer.getAlliance(gs.getAllianceId()).getName(), c.getPlayer()));
                        ChannelServer.setInvitedId(chr.getGuildId(), gs.getAllianceId());
                    } else {
		        c.getPlayer().dropMessage(1, "Make sure the leader of the guild is online and in your channel.");
		    }
                } else {
		    c.getPlayer().dropMessage(1, "That Guild was not found. Please enter the correct Guild Name. (Not the player name)");
		}
                break;
            case 4: //accept invite... guildid that invited(int, a/b check) -> guildname that was invited? but we dont care about that
                inviteid = ChannelServer.getInvitedId(c.getPlayer().getGuildId());
                if (inviteid > 0) {
                    if (!ChannelServer.addGuildToAlliance(inviteid, c.getPlayer().getGuildId())) {
                        c.getPlayer().dropMessage(5, "An error occured when adding guild.");
                    }
                    ChannelServer.setInvitedId(c.getPlayer().getGuildId(), 0);
                }
                break;
            case 2: //leave; nothing
            case 6: //expel, guildid(int) -> allianceid(don't care, a/b check)
                final int gid;
                if (op == 6 && rh.available() >= 4) {
                    gid = rh.readInt();
                    if (rh.available() >= 4 && gs.getAllianceId() != rh.readInt()) {
                        break;
                    }
                } else {
                    gid = c.getPlayer().getGuildId();
                }
                if (c.getPlayer().getAllianceRank() <= 2 && (c.getPlayer().getAllianceRank() == 1 || c.getPlayer().getGuildId() == gid)) {
                    if (!ChannelServer.removeGuildFromAlliance(gs.getAllianceId(), gid, c.getPlayer().getGuildId() != gid)) {
                        c.getPlayer().dropMessage(5, "An error occured when removing guild.");
                    }
                }
                break;
            case 7: //change leader
                if (c.getPlayer().getAllianceRank() == 1 && leaderid == c.getPlayer().getId()) {
                    if (!ChannelServer.changeAllianceLeader(gs.getAllianceId(), rh.readInt())) {
                        c.getPlayer().dropMessage(5, "An error occured when changing leader.");
                    }
                }
                break;
            case 8: //title update
                if (c.getPlayer().getAllianceRank() == 1 && leaderid == c.getPlayer().getId()) {
                    String[] ranks = new String[5];
                    for (int i = 0; i < 5; i++) {
                        ranks[i] = rh.readMapleAsciiString();
                    }
                    ChannelServer.updateAllianceRanks(gs.getAllianceId(), ranks);
                }
                break;
            case 9:
                if (c.getPlayer().getAllianceRank() <= 2) {
                    if (!ChannelServer.changeAllianceRank(gs.getAllianceId(), rh.readInt(), rh.readByte())) {
                        c.getPlayer().dropMessage(5, "An error occured when changing rank.");
                    }
                }
                break;
            case 10: //notice update
                if (c.getPlayer().getAllianceRank() <= 2) {
                    final String notice = rh.readMapleAsciiString();
                    if (notice.length() > 100) {
                        break;
                    }
                    ChannelServer.updateAllianceNotice(gs.getAllianceId(), notice);
                }
                break;
            default:
                System.out.println("Unhandled GuildAlliance op: " + op + ", \n" + rh.toString());
                break;
        }
        //c.getSession().write(MainPacketCreator.enableActions());
    }

    public static final void DenyInvite(MapleClient c, final MapleGuild gs) { //playername that invited -> guildname that was invited but we also don't care
        final int inviteid = ChannelServer.getInvitedId(c.getPlayer().getGuildId());
        if (inviteid > 0) {
            final int newAlliance = ChannelServer.getAllianceLeader(inviteid);
            if (newAlliance > 0) {
                final MapleCharacter chr = c.getChannelServer().getPlayerStorage().getCharacterById(newAlliance);
                if (chr != null) {
                    chr.dropMessage(5, gs.getName() + " Guild has rejected the Guild Union invitation.");
                }
                ChannelServer.setInvitedId(c.getPlayer().getGuildId(), 0);
            }
        }
        //c.getSession().write(MainPacketCreator.enableActions());
    }
}
