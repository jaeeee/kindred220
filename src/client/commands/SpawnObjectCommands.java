/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.commands;

import client.MapleClient;
import java.awt.Point;
import java.util.List;
import packet.creators.RunePacket;
import server.maps.MapleRune;

public class SpawnObjectCommands implements Command {

    @Override
    public void execute(MapleClient c, String[] splitted) throws Exception, IllegalCommandSyntaxException {
        if (splitted[0].equals("!룬")) {
            Point pos = c.getPlayer().getPosition();
            int type = Integer.parseInt(splitted[1]);
            if (type >= 0 && type <= 3) {
                MapleRune rune = new MapleRune(Integer.parseInt(splitted[1]), pos.x - 50, pos.y, c.getPlayer().getMap());
                List<MapleRune> runes = c.getPlayer().getMap().getAllRune();
                for (int i = 0; i < runes.size(); i++) {
                    c.getPlayer().getMap().removeMapObject(runes.get(i));
                }
                c.getPlayer().getMap().addMapObject(rune);
                c.getPlayer().getMap().broadcastMessage(RunePacket.spawnRune(rune, false));
                c.getPlayer().getMap().broadcastMessage(RunePacket.spawnRune(rune, true));
            } else {
                c.getPlayer().message("0~3까지만 입력 가능합니다.");
            }
        } else if (splitted[0].equals("!오브젝트")) {
            c.getPlayer().message("현재 맵에 있는 오브젝트 수는 " + c.getPlayer().getMap().getMapObjectSize() + "개 입니다.");
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
        return new CommandDefinition[]{
            new CommandDefinition("룬", "<룬타입>", "현재 위치에 해당 룬을 생성합니다.", 6),
            new CommandDefinition("오브젝트", "", "오브젝트 수를 가져옵니다.", 6),};
    }
}
