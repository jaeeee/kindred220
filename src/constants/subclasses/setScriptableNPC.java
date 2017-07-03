/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package constants.subclasses;

import client.MapleClient;
import packet.creators.MainPacketCreator;
import tools.Pair;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author �������̸�
 */
public class setScriptableNPC {
    private static List<Pair<Integer, String>> npcs = new ArrayList<Pair<Integer, String>>();
    
    public static void doMain() {
        npcs.add(new Pair<Integer, String>(1033221, "���� �����ּ���~��")); //������� �ﷹ��
        npcs.add(new Pair<Integer, String>(1012107, "�ȳ��ϼ���~")); //��Ÿ...
        npcs.add(new Pair<Integer, String>(1012102, "��ǳ���� ĳ�÷� ��ȯ�ϰ� �;��.")); //�Ǿ�
        npcs.add(new Pair<Integer, String>(2144016, "��ų�� �ް� �;��.")); //�ð��� ���� ����
        
        npcs.add(new Pair<Integer, String>(9001001, "1")); //
        npcs.add(new Pair<Integer, String>(9001002, "2")); //
        npcs.add(new Pair<Integer, String>(9001005, "3")); //
    }
    
    public static void sendPacket(MapleClient ha) {
        ha.send(MainPacketCreator.setNPCScriptable(npcs));
    }
    
    
}
