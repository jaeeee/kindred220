/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants.subclasses;

import client.MapleClient;
import packet.creators.MainPacketCreator;
import tools.Pair;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author 에반테이르
 */
public class setScriptableNPC {
    private static List<Pair<Integer, String>> npcs = new ArrayList<Pair<Integer, String>>();
    
    public static void doMain() {
        npcs.add(new Pair<Integer, String>(1033221, "나를 범해주세요~♡")); //어린시절의 헬레나
        npcs.add(new Pair<Integer, String>(1012107, "안녕하세요~")); //유타...
        npcs.add(new Pair<Integer, String>(1012102, "단풍잎을 캐시로 교환하고 싶어요.")); //피아
        npcs.add(new Pair<Integer, String>(2144016, "스킬을 받고 싶어요.")); //시간의 여신 륀느
        
        npcs.add(new Pair<Integer, String>(9001001, "1")); //
        npcs.add(new Pair<Integer, String>(9001002, "2")); //
        npcs.add(new Pair<Integer, String>(9001005, "3")); //
    }
    
    public static void sendPacket(MapleClient ha) {
        ha.send(MainPacketCreator.setNPCScriptable(npcs));
    }
    
    
}
