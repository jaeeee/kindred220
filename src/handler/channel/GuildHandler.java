/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.items.ISkill;
import java.util.Iterator;

import client.MapleCharacter;
import client.MapleClient;
import client.skills.Skill;
import client.skills.SkillFactory;
import client.skills.SkillStatEffect;
import community.*;
import launch.ChannelServer;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;

public class GuildHandler {
    
    public static void DenyGuildRequest(ReadingMaple rh, MapleClient c) {
        int guildid = rh.readInt();
        Iterator<Invited> itr = invited.iterator();
        c.getPlayer().setGuildId(guildid);
        c.getPlayer().setGuildRank(5);
        itr.remove();
        int guildmax;
        guildmax = ChannelServer.addGuildMember(c.getPlayer().getMGC(), c);
        if (guildmax == 0) {
            c.getPlayer().dropMessage(1, "가입하려는 길드는 이미 정원이 꽉 찼습니다.");
            c.getPlayer().setGuildId(0);
            return;
        }
        c.getSession().write(MainPacketCreator.showGuildInfo(c.getPlayer()));
        c.getPlayer().saveGuildStatus();
        respawnPlayer(c.getPlayer());
    }

    private static boolean isGuildNameAcceptable(String name) {
	if (name.getBytes().length < 4 || name.getBytes().length > 12) {
	    return false;
	}
	return true;
    }

    private static void respawnPlayer(MapleCharacter mc) {
	mc.getMap().broadcastMessage(mc, MainPacketCreator.removePlayerFromMap(mc.getId()), false);
	mc.getMap().broadcastMessage(mc, MainPacketCreator.spawnPlayerMapobject(mc), false);
    }

    private static class Invited {

	public String name;
	public int gid;
	public long expiration;

	public Invited(String n, int id) {
	    name = n.toLowerCase();
	    gid = id;
	    expiration = System.currentTimeMillis() + 60 * 60 * 1000; // 1 hr expiration
	}

	@Override
	public boolean equals(Object other) {
	    if (!(other instanceof Invited)) {
		return false;
	    }
	    Invited oth = (Invited) other;
	    return (gid == oth.gid && name.equals(oth));
	}
    }
    private static java.util.List<Invited> invited = new java.util.LinkedList<Invited>();
    private static long nextPruneTime = System.currentTimeMillis() + 20 * 60 * 1000;

    public static void GuildOpertion(ReadingMaple rh, MapleClient c) {
	if (System.currentTimeMillis() >= nextPruneTime) {
	    Iterator<Invited> itr = invited.iterator();
	    Invited inv;
	    while (itr.hasNext()) {
		inv = itr.next();
		if (System.currentTimeMillis() >= inv.expiration) {
		    itr.remove();
		}
	    }
	    nextPruneTime = System.currentTimeMillis() + 20 * 60 * 1000;
	}
       
	switch (rh.readByte()) {
	    case 0x04: // Create guild+
		if (c.getPlayer().getGuildId() > 0) {
		    c.getPlayer().dropMessage(1, "이미 길드에 가입되어 있어 길드를 만들 수 없습니다.");
		    return;
		} else if (c.getPlayer().getMeso() < 1500000) {
		    c.getPlayer().dropMessage(1, "길드 제작에 필요한 메소 [150만 메소] 가 충분하지 않습니다.");
		    return;
		}
		String guildName = rh.readMapleAsciiString();

		if (!isGuildNameAcceptable(guildName)) {
		    c.getPlayer().dropMessage(1, "해당 길드 이름은 만들 수 없습니다.");
		    return;
		}
                int guildId;
                guildId = ChannelServer.createGuild(c.getPlayer().getId(), guildName);
		if (guildId == 0) {
		    c.getSession().write(MainPacketCreator.genericGuildMessage((byte) 0x1C));
		    return;
		}
		c.getPlayer().gainMeso(-1500000, true, false, true);
		c.getPlayer().setGuildId(guildId);
		c.getPlayer().setGuildRank(1);
		c.getPlayer().saveGuildStatus();
                c.getSession().write(MainPacketCreator.createGuildInfo(c.getPlayer()));
		respawnPlayer(c.getPlayer());
		break;
	    case 0x07: // invitation v207
		if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() > 2) { // 1 == guild master, 2 == jr
		    return;
		}
		String name = rh.readMapleAsciiString();
		MapleGuildResponse mgr = MapleGuild.sendInvite(c, name);

		if (mgr != null) {
		    c.getSession().write(mgr.getPacket());
		} else {
		    Invited inv = new Invited(name, c.getPlayer().getGuildId());
		    if (!invited.contains(inv)) {
			invited.add(inv);
		    }
		}
		break;
	    case 0x01: // accepted guild invitation 
		if (c.getPlayer().getGuildId() > 0) {
		    return;
		}
		guildId = rh.readInt();
		name = c.getPlayer().getName().toLowerCase();
		Iterator<Invited> itr = invited.iterator();

		while (itr.hasNext()) {
		    Invited inv = itr.next();
		    if (guildId == inv.gid && name.equals(inv.name)) {
			c.getPlayer().setGuildId(guildId);
			c.getPlayer().setGuildRank(5);
			itr.remove();

			int s;

			s = ChannelServer.addGuildMember(c.getPlayer().getMGC(),c);
			if (s == 0) {
			    c.getPlayer().dropMessage(1, "가입하려는 길드는 이미 정원이 꽉 찼습니다.");
			    c.getPlayer().setGuildId(0);
			    return;
			}
			c.getSession().write(MainPacketCreator.showGuildInfo(c.getPlayer()));
			c.getPlayer().saveGuildStatus();
			respawnPlayer(c.getPlayer());
			break;
		    }
		}
		break;
	    case 0x0B: // leaving
		int cid = rh.readInt();
		name = rh.readMapleAsciiString();

		if (cid != c.getPlayer().getId() || !name.equals(c.getPlayer().getName()) || c.getPlayer().getGuildId() <= 0) {
		    return;
		}
                ChannelServer.leaveGuild(c.getPlayer().getMGC());
		c.getSession().write(MainPacketCreator.showGuildInfo(null));
		c.getPlayer().setGuildId(0);
		c.getPlayer().saveGuildStatus();
		respawnPlayer(c.getPlayer());
		break;
	    case 0x0C: // Expel
		cid = rh.readInt();
		name = rh.readMapleAsciiString();

		if (c.getPlayer().getGuildRank() > 2 || c.getPlayer().getGuildId() <= 0) {
		    return;
		}
		ChannelServer.expelMember(c.getPlayer().getMGC(), name, cid);
		break;
	    case 0x12: // Guild rank titles change
		if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() != 1) {
		    return;
		}
		String ranks[] = new String[5];
		for (int i = 0; i < 5; i++) {
		    ranks[i] = rh.readMapleAsciiString();
		}
                ChannelServer.changeRankTitle(c.getPlayer().getGuildId(), ranks);
		break;
	    case 0x13: // Rank change
		cid = rh.readInt();
		byte newRank = rh.readByte();

		if ((newRank <= 1 || newRank > 5) || c.getPlayer().getGuildRank() > 2 || (newRank <= 2 && c.getPlayer().getGuildRank() != 1) || c.getPlayer().getGuildId() <= 0) {
		    return;
		}

		ChannelServer.changeRank(c.getPlayer().getGuildId(), cid, newRank);
		break;
	    case 0x14: // Guild emblem change
		if (c.getPlayer().getMeso() < 5000000) {
		    c.getPlayer().dropMessage(1, "길드 마크를 추가/수정 하기 위한 메소 [500만 메소] 가 충분하지 않습니다.");
		    return;
		}
		short bg = rh.readShort();
		byte bgcolor = rh.readByte();
		short logo = rh.readShort();
		byte logocolor = rh.readByte();
		ChannelServer.setGuildEmblem(c.getPlayer().getGuildId(), bg, bgcolor, logo, logocolor);
		c.getPlayer().gainMeso(-5000000, true, false, true);
		respawnPlayer(c.getPlayer());
		break;
            case 0x22: //guild skill purchase
                ISkill skilli = SkillFactory.getSkill(rh.readInt());
                if (c.getPlayer().getGuildId() <= 0 || skilli == null || skilli.getId() < 91000000) {
                    return;
                }
                int eff = ChannelServer.getSkillLevel(c.getPlayer().getGuildId(), skilli.getId()) + 1;
                if (eff > skilli.getMaxLevel()) {
                    return;
                }
                final SkillStatEffect skillid = skilli.getEffect(eff);
                if (skillid.getReqGuildLevel() <= 0 || c.getPlayer().getMeso() < skillid.getPrice() * 10000) {
                    return;
                }

                if (ChannelServer.purchaseSkill(c.getPlayer().getGuildId(), skillid.getSourceId(), c.getPlayer().getName(), c.getPlayer().getId())) {
                    c.getPlayer().gainMeso(-skillid.getPrice(), true);
                }
                break;
            case 0x23: //guild skill activation
                skilli = SkillFactory.getSkill(rh.readInt());
                if (c.getPlayer().getGuildId() <= 0 || skilli == null) {
                    return;
                }
                eff = ChannelServer.getSkillLevel(c.getPlayer().getGuildId(), skilli.getId());
                if (eff <= 0) {
                    return;
                }
                final SkillStatEffect skillii = skilli.getEffect(eff);
                if (skillii.getReqGuildLevel() < 0 || c.getPlayer().getMeso() < skillii.getExtendPrice() * 10000) {
                    return;
                }
                if (ChannelServer.activateSkill(c.getPlayer().getGuildId(), skillii.getSourceId(), c.getPlayer().getName())) {
                    c.getPlayer().gainMeso(-skillii.getExtendPrice() * 10000, true);
                }
                break;
	    case 0x28: // 길드장 위임
                cid = rh.readInt();
                if (c.getPlayer().getGuildId() <= 0 || c.getPlayer().getGuildRank() > 1) {
                    return;
                }
		ChannelServer.setGuildLeader(c.getPlayer().getGuildId(), cid);
                c.getPlayer().dropMessage(1, "길드마스터가 [" + c.getPlayer().getName() + "] 님에서 [" + cid + "]님으로 변경되었습니다.");
		break;
	}
    }
}
