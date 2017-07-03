/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
        if (splitted[0].equals("!��")) {
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
                c.getPlayer().message("0~3������ �Է� �����մϴ�.");
            }
        } else if (splitted[0].equals("!������Ʈ")) {
            c.getPlayer().message("���� �ʿ� �ִ� ������Ʈ ���� " + c.getPlayer().getMap().getMapObjectSize() + "�� �Դϴ�.");
        }
    }

    @Override
    public CommandDefinition[] getDefinition() {
        return new CommandDefinition[]{
            new CommandDefinition("��", "<��Ÿ��>", "���� ��ġ�� �ش� ���� �����մϴ�.", 6),
            new CommandDefinition("������Ʈ", "", "������Ʈ ���� �����ɴϴ�.", 6),};
    }
}
