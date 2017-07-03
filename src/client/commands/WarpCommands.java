/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 배지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import client.MapleClient;
import client.MapleCharacter;
import launch.ChannelServer;
import launch.holder.MapleWhereAreYou;
import launch.world.WorldConnected;
import server.maps.MapleMap;
import server.maps.MaplePortal;

public class WarpCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
        ChannelServer cserv = c.getChannelServer();
        if (splitted[0].equals("!워프")) {
            MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
            if (victim != null) {
                c.getPlayer().changeMap(victim.getMap(), victim.getMap().findClosestSpawnpoint(victim.getPosition()));
            } else {
                MapleCharacter chr = null;
                for (ChannelServer cserv_ : ChannelServer.getAllInstances()) {
                    chr = cserv_.getPlayerStorage().getCharacterByName(splitted[1]);
                    if (chr != null) {
                        break;
                    }
                }
                if (chr != null) {
                    MapleWhereAreYou loc = WorldConnected.getLocation(splitted[1]);
                    c.getPlayer().dropMessage(6, "채널을 변경하여 워프합니다. 잠시만 기다려주세요.");
                    c.getPlayer().crossChannelWarp(c, loc.map, (byte) loc.channel);
                } else {
                    c.getPlayer().dropMessage(6, "대상 플레이어를 발견하지 못했습니다.");
                }
            }
        } else if (splitted[0].equals("!warphere")) {
            MapleCharacter victim = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
            if (victim != null) {
                victim.changeMap(c.getPlayer().getMap(), c.getPlayer().getMap().findClosestSpawnpoint(c.getPlayer().getPosition()));
            } else {
                MapleCharacter chr = null;
                for (ChannelServer cserv_ : ChannelServer.getAllInstances()) {
                    chr = cserv_.getPlayerStorage().getCharacterByName(splitted[1]);
                    if (chr != null) {
                        break;
                    }
                }
                if (chr != null) {
                    MapleWhereAreYou loc = WorldConnected.getLocation(c.getPlayer().getName());
                    chr.dropMessage(6, "채널을 변경하여 소환됩니다.");
                    chr.crossChannelWarp(chr.getClient(), loc.map, (byte) loc.channel);
                } else {
                    c.getPlayer().dropMessage(6, "대상 플레이어를 발견하지 못했습니다.");
                }
            }
        } else if (splitted[0].equals("!전체소환")) {
            for (MapleCharacter victim : cserv.getPlayerStorage().getAllCharacters().values()) {
                if (victim.getMapId() != c.getPlayer().getMapId()) {
                    victim.changeMap(c.getPlayer().getMap(), c.getPlayer().getPosition());
                } else {
                    MapleCharacter chr = null;
                    for (ChannelServer cserv_ : ChannelServer.getAllInstances()) {
                        chr = cserv_.getPlayerStorage().getAllCharacters().get(chr);
                        if (chr != null) {
                            break;
                        }
                    }
                    if (chr != null) {
                        MapleWhereAreYou loc = WorldConnected.getLocation(c.getPlayer().getName());
                        chr.dropMessage(6, "채널을 변경하여 소환됩니다.");
                        chr.crossChannelWarp(chr.getClient(), loc.map, (byte) loc.channel);
                    }
                    chr.dropMessage(6, "전체소환 되었습니다.");
                }
            }
        } else if (splitted[0].equals("!warp")) {
            MapleMap target = null;
            if (c.getPlayer().getEventInstance() != null) {
                target = c.getPlayer().getEventInstance().getMapFactory().getMap(Integer.parseInt(splitted[1]));
            } else {
                target = cserv.getMapFactory().getMap(Integer.parseInt(splitted[1]));
            }

            MaplePortal targetPortal = null;
            if (splitted.length > 2) {
                try {
                    targetPortal = target.getPortal(Integer.parseInt(splitted[2]));
                } catch (IndexOutOfBoundsException e) {
                    // noop, assume the gm didn't know how many portals there are
                    c.getPlayer().dropMessage(5, "Invalid portal selected.");
                } catch (NumberFormatException a) {
                    // noop, assume that the gm is drunk
                }
            }
            if (targetPortal == null) {
                targetPortal = target.getPortal(0);
            }
            c.getPlayer().changeMap(target, targetPortal);
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
        return new CommandDefinition[]{
            new CommandDefinition("워프", "<플레이어이름> (<타겟맵ID>)", "자신을 해당 플레이어에게 워프합니다. 맵 ID가 입력될 경우 입력한 플레이어를 해당 맵으로 이동시킵니다.", 2),
            new CommandDefinition("warphere", "<player name>", "Warps a player to you.", 2),
            new CommandDefinition("전체소환", "<전체소환>", "모든유저를 자신의 위치로 소환합니다.", 2),
            new CommandDefinition("warp", "<map ID>", "Warps to <MAP ID>.", 2),};

    }
}
