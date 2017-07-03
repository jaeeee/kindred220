/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package community;

import constants.ServerConstants;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Iterator;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import client.MapleCharacter;
import client.MapleClient;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import database.MYSQL;
import packet.transfer.write.Packet;
import launch.ChannelServer;
import tools.StringUtil;
import packet.creators.MainPacketCreator;
import packet.transfer.write.WritingPacket;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import packet.creators.PacketProvider;

public class MapleGuild {

    private static enum BCOp {

	NONE, DISBAND, EMBELMCHANGE
    }
    private final List<MapleGuildCharacter> members;
    private List<MapleGuildApplication> addmembers;
    private final String rankTitles[] = new String[5]; // 1 = master, 2 = jr, 5 = lowest member
    private String name, notice;
    private int id, gp, logo, logoColor, leader, capacity, logoBG, logoBGColor, signature;
    private List<Integer> notifications = new ArrayList<Integer>();
    private boolean bDirty = true;
    private int allianceid = 0, invitedid = 0;
    private MapleAlliance ally;
    private Lock lock = new ReentrantLock();
    private byte level;    
    private final Map<Integer, GuildSkills> guildSkills = new HashMap<Integer, GuildSkills>();

    public MapleGuild(int guildid) {
	super();
	//int guildid = initiator.getGuildId();
	members = new CopyOnWriteArrayList<MapleGuildCharacter>();

	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT * FROM guilds WHERE guildid=" + guildid);
	    ResultSet rs = ps.executeQuery();

	    if (!rs.first()) {
		rs.close();
		ps.close();
		id = -1;
		return;
	    }
	    id = guildid;
	    name = rs.getString("name");
	    gp = rs.getInt("GP");
	    logo = rs.getInt("logo");
	    logoColor = rs.getInt("logoColor");
	    logoBG = rs.getInt("logoBG");
	    logoBGColor = rs.getInt("logoBGColor");
	    capacity = rs.getInt("capacity");
	    rankTitles[0] = rs.getString("rank1title");
	    rankTitles[1] = rs.getString("rank2title");
	    rankTitles[2] = rs.getString("rank3title");
	    rankTitles[3] = rs.getString("rank4title");
	    rankTitles[4] = rs.getString("rank5title");
	    leader = rs.getInt("leader");
	    notice = rs.getString("notice");
	    signature = rs.getInt("signature");
	    allianceid = rs.getInt("alliance");

	    rs.close();
	    ps.close();
            
            MapleAlliance alliance = ChannelServer.getAlliance(allianceid);
            if (alliance == null) {
                allianceid = 0;
            }
            
	    ps = con.prepareStatement("SELECT id, name, level, job, guildrank, alliancerank FROM characters WHERE guildid = ? ORDER BY guildrank ASC, name ASC");
	    ps.setInt(1, guildid);
	    rs = ps.executeQuery();

	    if (!rs.first()) {
		System.err.println("No members in guild.  Impossible...");
		rs.close();
		ps.close();
		return;
	    }
            boolean leaderCheck = false;
            byte gFix = 0, aFix = 0;
            do {
                int cid = rs.getInt("id");
                byte gRank = rs.getByte("guildrank"), aRank = rs.getByte("alliancerank");

                if (cid == leader) {
                    leaderCheck = true;
                    if (gRank != 1) { //needs updating to 1
                        gRank = 1;
                        gFix = 1;
                    }
                    if (alliance != null) {
                        if (alliance.getLeaderId() == cid && aRank != 1) {
                            aRank = 1;
                            aFix = 1;
                        } else if (alliance.getLeaderId() != cid && aRank != 2) {
                            aRank = 2;
                            aFix = 2;
                        }
                    }
                } else {
		    if (gRank == 1) {
			gRank = 2;
			gFix = 2;
		    }
		    if (aRank < 3) {
			aRank = 3;
			aFix = 3;
		    }
		}
		members.add(new MapleGuildCharacter(rs.getInt("id"), rs.getShort("level"), rs.getString("name"), (byte) -1, rs.getInt("job"), gRank, guildid, false, aRank));
	    } while (rs.next());
	//    setOnline(initiator.getId(), true, initiator.getChannel());
	    rs.close();
	    ps.close();
            ps = con.prepareStatement("SELECT * FROM guildskills WHERE guildid = ?");
            ps.setInt(1, guildid);
            rs = ps.executeQuery();
            while (rs.next()) {
		int sid = rs.getInt("skillid");
		if (sid < 91000000) { //hack
		    rs.close();
		    ps.close();
                    System.err.println("Skill " + sid + " is in guild " + id + ".  Impossible... guild is disbanding.");
                    writeToDB(true);
                    return;
		}
                guildSkills.put(sid, new GuildSkills(sid, rs.getInt("level"), rs.getLong("timestamp"), rs.getString("purchaser"), "")); //activators not saved
            }
            rs.close();
            ps.close();
	} catch (Exception se) {
	    System.err.println("unable to read guild information from sql" + se);
	    return;
	}
    }
    
    public final void writeToDB(final boolean bDisband) {
	try {
	    Connection con = MYSQL.getConnection();
	    if (!bDisband) {
		StringBuilder buf = new StringBuilder("UPDATE guilds SET GP = ?, logo = ?, logoColor = ?, logoBG = ?, logoBGColor = ?, ");
		for (int i = 1; i < 6; i++) {
		    buf.append("rank" + i + "title = ?, ");
		}
		buf.append("capacity = ?, " + "notice = ?, alliance = ? WHERE guildid = ?");

		PreparedStatement ps = con.prepareStatement(buf.toString());
		ps.setInt(1, gp);
		ps.setInt(2, logo);
		ps.setInt(3, logoColor);
		ps.setInt(4, logoBG);
		ps.setInt(5, logoBGColor);
		ps.setString(6, rankTitles[0]);
		ps.setString(7, rankTitles[1]);
		ps.setString(8, rankTitles[2]);
		ps.setString(9, rankTitles[3]);
		ps.setString(10, rankTitles[4]);
		ps.setInt(11, capacity);
		ps.setString(12, notice);
		ps.setInt(13, allianceid);
		ps.setInt(14, id);
		ps.execute();
		ps.close();
                
                ps = con.prepareStatement("DELETE FROM guildskills WHERE guildid = ?");
                ps.setInt(1, id);
                ps.execute();
                ps.close();

                ps = con.prepareStatement("INSERT INTO guildskills(`guildid`, `skillid`, `level`, `timestamp`, `purchaser`) VALUES(?, ?, ?, ?, ?)");
                ps.setInt(1, id);
                for (GuildSkills i : guildSkills.values()) {
                    ps.setInt(2, i.skillID);
                    ps.setByte(3, (byte) i.level);
                    ps.setLong(4, i.timestamp);
                    ps.setString(5, i.purchaser);
                    ps.execute();
                }
                ps.close();
		
	    } else {
		PreparedStatement ps = con.prepareStatement("UPDATE characters SET guildid = 0, guildrank = 5 WHERE guildid = ?");
		ps.setInt(1, id);
		ps.execute();
		ps.close();

		//delete the alliance
                if (allianceid > 0) {
                    final MapleAlliance alliance = ChannelServer.getAlliance(allianceid);
                    if (alliance != null) {
                        alliance.removeGuild(id, false);
                    }
                }
                
		ps = con.prepareStatement("DELETE FROM guilds WHERE guildid = ?");
		ps.setInt(1, id);
		ps.execute();
		ps.close();
                
                ps = con.prepareStatement("DELETE FROM guildskills WHERE guildid = ?");
                ps.setInt(1, id);
                ps.execute();
                ps.close();

		broadcast(MainPacketCreator.guildDisband(id));
	    }
	} catch (SQLException se) {
	    System.err.println("Error saving guild to SQL" + se);
	}
    }

    public Collection<GuildSkills> getSkills() {
        return guildSkills.values();
    }
    
    public GuildSkills getSkill(int sid) {
        if (guildSkills.containsKey(sid)) 
            return guildSkills.get(sid);
        return null;
    }
    
    public int getSkillLevel(int sid) {
        if (!guildSkills.containsKey(sid)) {
            return 0;
        }
        return guildSkills.get(sid).level;
    }

    public boolean activateSkill(int skill, String name) {
        if (!guildSkills.containsKey(skill)) {
            return false;
        }
        final GuildSkills ourSkill = guildSkills.get(skill);
        final SkillStatEffect skillid = SkillFactory.getSkill(skill).getEffect(ourSkill.level);
        if (ourSkill.timestamp > System.currentTimeMillis() || skillid.getPeriod() <= 0) {
            return false;
        }
        ourSkill.timestamp = System.currentTimeMillis() + (skillid.getPeriod() * 60000L);
        ourSkill.activator = name;
        broadcast(MainPacketCreator.guildSkillPurchased(id, skill, ourSkill.level, ourSkill.timestamp, ourSkill.purchaser, name));
        return true;
    }

    public boolean purchaseSkill(int skill, String name, int cid) {
        final SkillStatEffect skillid = SkillFactory.getSkill(skill).getEffect(getSkillLevel(skill) + 1);
      //  if (skillid.getReqGuildLevel() > getLevel() || skillid.getLevel() <= getSkillLevel(skill)) {
    //        return false;
    //    }
        GuildSkills ourSkill = guildSkills.get(skill);
        if (ourSkill == null) {
            ourSkill = new GuildSkills(skill, skillid.getLevel(), 0, name, name);
            guildSkills.put(skill, ourSkill);
        } else {
            ourSkill.level = skillid.getLevel();
            ourSkill.purchaser = name;
            ourSkill.activator = name;
        }
	if (skillid.getPeriod() <= 0) {
	    ourSkill.timestamp = -1L;
	} else {
            ourSkill.timestamp = System.currentTimeMillis() + (skillid.getPeriod() * 60000L);
	}
	//changed_skills = true;
      //  gainGP(1000, true, cid);
        broadcast(MainPacketCreator.guildSkillPurchased(id, skill, ourSkill.level, ourSkill.timestamp, name, name));
        return true;
    }
    
    public final byte getLevel() {
        return level;
    }

    public final int getId() {
	return id;
    }

    public final int getLeaderId() {
	return leader;
    }

    public final MapleCharacter getLeader(final MapleClient c) {
	return c.getChannelServer().getPlayerStorage().getCharacterById(leader);
    }

    public final int getGP() {
	return gp;
    }

    public final int getLogo() {
	return logo;
    }

    public final void setLogo(final int l) {
	logo = l;
    }

    public final int getLogoColor() {
	return logoColor;
    }

    public final void setLogoColor(final int c) {
	logoColor = c;
    }

    public final int getLogoBG() {
	return logoBG;
    }

    public final void setLogoBG(final int bg) {
	logoBG = bg;
    }

    public final int getLogoBGColor() {
	return logoBGColor;
    }

    public final void setLogoBGColor(final int c) {
	logoBGColor = c;
    }

    public final String getNotice() {
	if (notice == null) {
	    return "";
	}
	return notice;
    }

    public final int getAllianceId() {
	return allianceid;
    }

    public final String getName() {
	return name;
    }

    public final int getCapacity() {
	return capacity;
    }

    public final int getSignature() {
	return signature;
    }

    public final void broadcast(final Packet packet) {
	broadcast(packet, -1, BCOp.NONE);
    }

    public final void broadcast(final Packet packet, final int exception) {
	broadcast(packet, exception, BCOp.NONE);
    }

    // multi-purpose function that reaches every member of guild (except the character with exceptionId) in all channels with as little access to rmi as possible
    public final void broadcast(final Packet packet, final int exceptionId, final BCOp bcop) {
	lock.lock();
	try {
	    buildNotifications();

		    if (notifications.size() > 0) {
			if (bcop == BCOp.DISBAND) {
			    ChannelServer.setGuildAndRank(notifications, 0, 5, exceptionId);
			} else if (bcop == BCOp.EMBELMCHANGE) {
			    ChannelServer.changeEmblem(id, notifications, new MapleGuildContents(this));
			} else {
			    ChannelServer.sendPacket(notifications, packet, exceptionId);
			}
                    }
                
		    
	} finally {
	    lock.unlock();
	}
    }

    private final void buildNotifications() {
	// any function that calls this should be wrapped in synchronized(notifications) to make sure that it doesn't change before that function finishes with the updated notifications
	if (!bDirty) {
	    return;
	}
        
	 
	notifications.clear();
	for (final MapleGuildCharacter mgc : members) {
	    if (!mgc.isOnline()) {
		continue;
	    }
		notifications.add(mgc.getId());
	    
	}
    }

    public final void guildMessage(final Packet serverNotice) {
	for (final MapleGuildCharacter mgc : members) {
	    for (final ChannelServer cs : ChannelServer.getAllInstances()) {
		if (cs.getPlayerStorage().getCharacterById(mgc.getId()) != null) {
		    final MapleCharacter chr = cs.getPlayerStorage().getCharacterById(mgc.getId());
		    if (serverNotice != null) {
			chr.getClient().getSession().write(serverNotice);
		    } else {
			chr.getMap().removePlayer(chr);
			chr.getMap().addPlayer(chr);
		    }
		}
	    }
	}
    }

    public final void setOnline(final int cid, final boolean online, final int channel) {
	boolean bBroadcast = true;

	for (final MapleGuildCharacter mgc : members) {
	    if (mgc.getId() == cid) {
		if (mgc.isOnline() && online) {
		    bBroadcast = false;
		}
		mgc.setOnline(online);
		mgc.setChannel((byte) channel);
		break;
	    }
	}
	if (bBroadcast) {
	    broadcast(MainPacketCreator.guildMemberOnline(id, cid, online), cid);
            if (allianceid > 0) {
                ChannelServer.sendGuild(MainPacketCreator.allianceMemberOnline(allianceid, id, cid, online), id, allianceid);
            }
	}
	bDirty = true; // member formation has changed, update notifications
    }

    public final void guildChat(final String name, final int cid, final String msg) {
	broadcast(MainPacketCreator.multiChat(name, msg, 2), cid);
    }

    public final void allianceChat(final String name, final int cid, final String msg) {
	broadcast(MainPacketCreator.multiChat(name, msg, 3), cid);
    }

    public final String getRankTitle(final int rank) {
	return rankTitles[rank - 1];
    }

    // function to create guild, returns the guild id if successful, 0 if not
    public static final int createGuild(final int leaderId, final String name) {
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT guildid FROM guilds WHERE name = ?");
	    ps.setString(1, name);
	    ResultSet rs = ps.executeQuery();

	    if (rs.first()) {// name taken
		rs.close();
		ps.close();
		return 0;
	    }
	    ps.close();
	    rs.close();

	    ps = con.prepareStatement("INSERT INTO guilds (`leader`, `name`, `signature`, `alliance`) VALUES (?, ?, ?, 0)");
	    ps.setInt(1, leaderId);
	    ps.setString(2, name);
	    ps.setInt(3, (int) System.currentTimeMillis());
	    ps.execute();
	    ps.close();

	    ps = con.prepareStatement("SELECT guildid FROM guilds WHERE leader = ?");
	    ps.setInt(1, leaderId);
	    rs = ps.executeQuery();
	    rs.first();
	    final int result = rs.getInt("guildid");
	    rs.close();
	    ps.close();
	    return result;
	} catch (SQLException se) {
	    System.err.println("SQL THROW" + se);
	    return 0;
	}
    }

    public final int addGuildMember(final MapleGuildCharacter mgc, final MapleClient c) {
	// first of all, insert it into the members keeping alphabetical order of lowest ranks ;)
	lock.lock();
	try {
	    if (members.size() >= capacity) {
		return 0;
	    }
	    for (int i = members.size() - 1; i >= 0; i--) {
		if (members.get(i).getGuildRank() < 5 || members.get(i).getName().compareTo(mgc.getName()) < 0) {
		    members.add(i + 1, mgc);
		    bDirty = true;
		    break;
		}
	    }
	} finally {
	    lock.unlock();
	}
        c.getPlayer().setAskguildid(0);
	broadcast(MainPacketCreator.newGuildMember(mgc));
        if (allianceid > 0) {
            ChannelServer.sendGuild(allianceid);
        }
	return 1;
    }

    public final void leaveGuild(final MapleGuildCharacter mgc) {
	broadcast(MainPacketCreator.memberLeft(mgc, false));

	lock.lock();
	try {
            for (final MapleGuildCharacter omgc : members) {
                if (omgc.getId() == mgc.getId()) {
                    members.remove(omgc);
                }
            }
	    bDirty = true;
	} finally {
	    lock.unlock();
	}
        if (bDirty && allianceid > 0) {
            ChannelServer.sendGuild(allianceid);
        }
    }

    public final void expelMember(final MapleGuildCharacter initiator, final String name, final int cid) {
	final Iterator<MapleGuildCharacter> itr = members.iterator();
	while (itr.hasNext()) {
	    final MapleGuildCharacter mgc = itr.next();

	    if (mgc.getId() == cid && initiator.getGuildRank() < mgc.getGuildRank()) {
		broadcast(MainPacketCreator.memberLeft(mgc, true));

		bDirty = true;
		for (final MapleGuildCharacter omgc : members) {
                    if (omgc.getId() == mgc.getId()) {
                        members.remove(omgc);
                    }
                }

		    if (mgc.isOnline()) {
			ChannelServer.setGuildAndRank(cid, 0, 5, -1);
		    } else {
			try {
			    Connection con = MYSQL.getConnection();
			    PreparedStatement ps = con.prepareStatement("INSERT INTO notes (`to`, `from`, `message`, `timestamp`) VALUES (?, ?, ?, ?)");
			    ps.setString(1, mgc.getName());
			    ps.setString(2, initiator.getName());
			    ps.setString(3, "당신은 길드에서 추방되었습니다.");
			    ps.setLong(4, System.currentTimeMillis());
			    ps.executeUpdate();
			    ps.close();
			} catch (SQLException e) {
			    System.err.println("Error sending guild msg 'expelled'." + e);
			}
			ChannelServer.setOfflineGuildStatus((short) 0, (byte) 5, cid);
		    }
	    }
	}
        if (bDirty && allianceid > 0) {
            ChannelServer.sendGuild(allianceid);
        }
    }
    
    public final void changeARank() {
        changeARank(false);
    }

    public final void changeARank(final boolean leader) {
        if (allianceid <= 0) {
            return;
        }
        for (final MapleGuildCharacter mgc : members) {
            byte newRank = 3;
            if (this.leader == mgc.getId()) {
                newRank = (byte) (leader ? 1 : 2);
            }
            if (mgc.isOnline()) {
                ChannelServer.setGuildAndRank(mgc.getId(), this.id, mgc.getGuildRank(), newRank);
            } else {
                setOfflineGuildStatus(this.id, (byte) mgc.getGuildRank(), 3, (byte) newRank, mgc.getId());
            }
            mgc.setAllianceRank((byte) newRank);
        }
        ChannelServer.sendGuild(allianceid);
    }

    public final void changeARank(final int newRank) {
        if (allianceid <= 0) {
            return;
        }
        for (final MapleGuildCharacter mgc : members) {
            if (mgc.isOnline()) {
                ChannelServer.setGuildAndRank(mgc.getId(), this.id, mgc.getGuildRank(), newRank);
            } else {
                setOfflineGuildStatus(this.id, (byte) mgc.getGuildRank(), 3, (byte) newRank, mgc.getId());
            }
            mgc.setAllianceRank((byte) newRank);
        }
        ChannelServer.sendGuild(allianceid);
    }

    
    public final boolean changeARank(final int cid, final int newRank) {
        if (allianceid <= 0) {
            return false;
        }
        for (final MapleGuildCharacter mgc : members) {
            if (cid == mgc.getId()) {
                if (mgc.isOnline()) {
                    ChannelServer.setGuildAndRank(cid, this.id, mgc.getGuildRank(), newRank);
                } else {
                    setOfflineGuildStatus(this.id, (byte) mgc.getGuildRank(), 3, (byte) newRank, cid);
                }
                mgc.setAllianceRank((byte) newRank);
                ChannelServer.sendGuild(allianceid);
                return true;
            }
        }
        return false;
    }

    public final void changeGuildLeader(final int cid) {
        if (changeRank(cid, 1) && changeRank(leader, 2)) {
            
            if (allianceid > 0) {
		int aRank = getMGC(leader).getAllianceRank();
		if (aRank == 1) {
		    ChannelServer.changeAllianceLeader(allianceid, cid, true);
		} else {
                    changeARank(cid, aRank);
		}
                changeARank(leader, 3);
            }
            broadcast(MainPacketCreator.guildLeaderChanged(id, leader, cid, allianceid));
            this.leader = cid;
            try {
                Connection con = MYSQL.getConnection();
                PreparedStatement ps = con.prepareStatement("UPDATE guilds SET leader = ? WHERE guildid = ?");
                ps.setInt(1, cid);
                ps.setInt(2, id);
                ps.execute();
                ps.close();
            } catch (SQLException e) {
                System.err.println("Saving leaderid ERROR" + e);
            }
        }
    }
    
    public final boolean changeRank(final int cid, final int newRank) {
	for (final MapleGuildCharacter mgc : members) {
	    if (cid == mgc.getId()) {
		    if (mgc.isOnline()) {
			ChannelServer.setGuildAndRank(cid, this.id, newRank, -1);
		    } else {
			ChannelServer.setOfflineGuildStatus((short) this.id, (byte) newRank, cid);
		    }
		mgc.setGuildRank(newRank);
		broadcast(MainPacketCreator.changeRank(mgc));
		return true;
	    }
	}
	// it should never get to this point unless cid was incorrect o_O
	System.err.println("INFO: unable to find the correct id for changeRank({" + cid + "}, {" + newRank + "})");
        return false;
    }

    public final void setGuildNotice(final String notice) {
	this.notice = notice;
	broadcast(MainPacketCreator.guildNotice(id, notice));

	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE guilds SET notice = ? WHERE guildid = ?");
	    ps.setString(1, notice);
	    ps.setInt(2, id);
	    ps.execute();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Saving notice ERROR" + e);
	}
    }

    public final void createAlliance(final MapleClient c, final String name) {
	if (allianceid != 0) {
	    c.getPlayer().dropMessage(1, "이미 연합에 가입되어 있습니다.");
	    return;
	}
	if (checkAllianceName(name)) {
	    try {
		if (name.equals("") || id <= 0) {
		    return;
		}
		Connection con = MYSQL.getConnection();
		PreparedStatement ps = con.prepareStatement("INSERT INTO `alliances` (notice, name, guild1, guild2, guild3, guild4, guild5, rank1, rank2, rank3, rank4, rank5) VALUES ('', ?, ?, 0, 0, 0, 0, 'Master', 'Jr. Master', 'Member', 'Member', 'Member')");
		ps.setString(1, name);
		ps.setInt(2, id);
		ps.executeUpdate();
		ps.close();

		ps = con.prepareStatement("SELECT id FROM alliances WHERE guild1 = ?");
		ps.setInt(1, id);
		ResultSet rs = ps.executeQuery();
		if (rs.next()) {
		    allianceid = rs.getInt("id");
		}
		rs.close();
		ps.close();
		writeToDB(false);
		c.getPlayer().dropMessage(1, "연합이 성공적으로 만들어졌습니다.");
	    } catch (SQLException a) {
	    }
	} else {
	    c.getPlayer().dropMessage(1, "해당 이름은 이미 사용중입니다.");
	}
    }

    public final void memberLevelJobUpdate(final MapleGuildCharacter mgc) {
	for (final MapleGuildCharacter member : members) {
	    if (member.getId() == mgc.getId()) {
		member.setJobId(mgc.getJobId());
		member.setLevel((short) mgc.getLevel());
		broadcast(MainPacketCreator.guildMemberLevelJobUpdate(mgc));
                if (allianceid > 0) {
                    ChannelServer.sendGuild(MainPacketCreator.updateAlliance(mgc, allianceid), id, allianceid);
                }
		break;
	    }
	}
    }

    public final void changeRankTitle(final String[] ranks) {
	for (int i = 0; i < 5; i++) {
	    rankTitles[i] = ranks[i];
	}
	broadcast(MainPacketCreator.rankTitleChange(id, ranks));

	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE guilds SET rank1title = ?, rank2title = ?, rank3title = ?, rank4title = ?, rank5title = ? WHERE guildid = ?");
	    for (int i = 0; i < 5; i++) {
		ps.setString(i + 1, rankTitles[i]);
	    }
	    ps.setInt(6, id);
	    ps.execute();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Saving rankTitle ERROR" + e);
	}
    }

    public final void disbandGuild() {
	writeToDB(true);
	broadcast(null, -1, BCOp.DISBAND);
    }

    public final void setGuildEmblem(final short bg, final byte bgcolor, final short logo, final byte logocolor) {
	this.logoBG = bg;
	this.logoBGColor = bgcolor;
	this.logo = logo;
	this.logoColor = logocolor;
	broadcast(null, -1, BCOp.EMBELMCHANGE);

	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE guilds SET logo = ?, logoColor = ?, logoBG = ?, logoBGColor = ? WHERE guildid = ?");
	    ps.setInt(1, logo);
	    ps.setInt(2, logoColor);
	    ps.setInt(3, logoBG);
	    ps.setInt(4, logoBGColor);
	    ps.setInt(5, id);
	    ps.execute();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Saving guild logo / BG colo ERROR" + e);
	}
    }

    public final MapleGuildCharacter getMGC(final int cid) {
	for (final MapleGuildCharacter mgc : members) {
	    if (mgc.getId() == cid) {
		return mgc;
	    }
	}
	return null;
    }

    public final boolean increaseCapacity() {
	if (capacity >= 100 || ((capacity + 5) > 100)) {
	    return false;
	}
	capacity += 5;
	broadcast(MainPacketCreator.guildCapacityChange(this.id, this.capacity));

	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE guilds SET capacity = ? WHERE guildid = ?");
	    ps.setInt(1, this.capacity);
	    ps.setInt(2, this.id);
	    ps.execute();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Saving guild capacity ERROR" + e);
	}
	return true;
    }

    public final void gainGP(final int amount) {
	gp += amount;
	guildMessage(MainPacketCreator.updateGP(id, gp));
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("UPDATE guilds SET gp = ? WHERE guildid = ?");
	    ps.setInt(1, this.gp);
	    ps.setInt(2, this.id);
	    ps.execute();
	    ps.close();
	} catch (SQLException e) {
	    System.err.println("Saving guild point ERROR" + e);
	}
    }

    public final void addMemberData(final WritingPacket packet) {
	packet.writeShort(members.size());
	for (final MapleGuildCharacter mgc : members) {
	    packet.writeInt(mgc.getId());
	}
	for (final MapleGuildCharacter mgc : members) {
	    packet.writeAsciiString(StringUtil.getRightPaddedStr(mgc.getName(), '\0', 13));
	    packet.writeInt(mgc.getJobId());
	    packet.writeInt(mgc.getLevel());
	    packet.writeInt(mgc.getGuildRank());
	    packet.writeInt(mgc.isOnline() ? 1 : 0);
            packet.writeInt(3);
            packet.writeInt(500); // 기여도
            packet.writeInt(0);
            packet.writeInt(500); // IGP
            packet.writeLong(PacketProvider.getTime(-2));
	}
        packet.writeShort(0);
    }
    
    public final void addMemberData2(final WritingPacket mplew) {
	mplew.writeShort(members.size()); // byte -> Short 203v
	for (final MapleGuildCharacter mgc : members) {
	    mplew.writeInt(mgc.getId());
	}
	for (final MapleGuildCharacter mgc : members) {
	    mplew.writeAsciiString(StringUtil.getRightPaddedStr(mgc.getName(), '\0', 13));
	    mplew.writeInt(mgc.getJobId());
	    mplew.writeInt(mgc.getLevel());
	    mplew.writeInt(mgc.getGuildRank());
	    mplew.writeInt(mgc.isOnline() ? 1 : 0);
            mplew.writeInt(3);
            mplew.writeInt(500); // 기여도
            mplew.writeInt(0);
            mplew.writeInt(500); // IGP
            mplew.writeLong(PacketProvider.getTime(-2));
	}
    }

    // null indicates successful invitation being sent
    // keep in mind that this will be called by a handler most of the time
    // so this will be running mostly on a channel server, unlike the rest
    // of the class
    public static final MapleGuildResponse sendInvite(final MapleClient c, final String targetName) {
	final MapleCharacter mc = c.getChannelServer().getPlayerStorage().getCharacterByName(targetName);
	if (mc == null) {
	    return MapleGuildResponse.NOT_IN_CHANNEL;
	}
	if (mc.getGuildId() > 0) {
	    return MapleGuildResponse.ALREADY_IN_GUILD;
	}
        mc.setAskguildid(c.getPlayer().getGuildId());
	mc.getClient().getSession().write(MainPacketCreator.guildInvite(c.getPlayer().getGuildId(), c.getPlayer().getName(), c.getPlayer().getLevel(), c.getPlayer().getJob(), c.getPlayer().getId()));
	return null;
    }

    public final boolean checkAllianceName(final String name) {
	boolean canCreate = true;
	if (name.length() < 4 && name.length() > 13) {
	    canCreate = false;
	}
	try {
	    Connection con = MYSQL.getConnection();
	    PreparedStatement ps = con.prepareStatement("SELECT * FROM alliances WHERE name = ?");
	    ps.setString(1, name);
	    ResultSet rs = ps.executeQuery();
	    if (rs.first()) {
		canCreate = false;
	    }
	    rs.close();
	    ps.close();
	} catch (SQLException e) {
	}
	return canCreate;
    }
    
    public List<MapleGuildCharacter> getMembers() {
        return members;
    }
    
    public int getInvitedId() {
        return this.invitedid;
    }

    public void setInvitedId(int iid) {
        this.invitedid = iid;
    }

    public void setAllianceId(int a) {
        this.allianceid = a;
        try {
            Connection con = MYSQL.getConnection();
            PreparedStatement ps = con.prepareStatement("UPDATE guilds SET alliance = ? WHERE guildid = ?");
            ps.setInt(1, a);
            ps.setInt(2, id);
            ps.execute();
            ps.close();
        } catch (SQLException e) {
            System.err.println("Saving allianceid ERROR" + e);
        }
    }
    
    public static void setOfflineGuildStatus(int guildid, byte guildrank, int contribution, byte alliancerank, int cid) {
        try {
            java.sql.Connection con = MYSQL.getConnection();
            java.sql.PreparedStatement ps = con.prepareStatement("UPDATE characters SET guildid = ?, guildrank = ?, alliancerank = ? WHERE id = ?");
            ps.setInt(1, guildid);
            ps.setInt(2, guildrank);
            ps.setInt(3, alliancerank);
            ps.setInt(4, cid);
            ps.executeUpdate();
            ps.close();
        } catch (SQLException se) {
            System.out.println("SQLException: " + se.getLocalizedMessage());
            se.printStackTrace();
        }
    }
}
