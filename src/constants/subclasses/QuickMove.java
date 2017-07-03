/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package constants.subclasses;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class QuickMove {
    private static Map<Integer, List<QuickMoveEntry>> quickmoves = new HashMap<Integer, List<QuickMoveEntry>>();
    
    public static void doMain() {
        
        List<QuickMoveTownProperties> towns = new ArrayList<QuickMoveTownProperties>();
        towns.add(new QuickMoveTownProperties(100000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(101000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(910000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(103000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(104000000, true, false, true, false, false, true, true));
        towns.add(new QuickMoveTownProperties(120000100, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(105000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(211000000, true, true, true, false, true, true, true));
        towns.add(new QuickMoveTownProperties(220000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(221000000, true, true, true, false, true, true, true));
        towns.add(new QuickMoveTownProperties(222000000, true, true, true, false, true, true, true));
        towns.add(new QuickMoveTownProperties(240000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(230000000, true, true, true, false, true, true, true));
        towns.add(new QuickMoveTownProperties(251000000, true, true, true, false, true, true, true));
        towns.add(new QuickMoveTownProperties(310000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(261000000, true, true, true, false, true, true, true));
        towns.add(new QuickMoveTownProperties(260000000, true, true, true, true, true, true, true));
        towns.add(new QuickMoveTownProperties(250000000, true, true, true, true, true, false, true));
        towns.add(new QuickMoveTownProperties(200000000, true, true, true, true, true, false, true));
        
        for (QuickMoveTownProperties qmtp : towns) {
            List<QuickMoveEntry> asd = new ArrayList<QuickMoveEntry>();
            if (qmtp.a) {
                asd.add(new QuickMoveEntry("", 9010022, 2, 10, "파티 퀘스트 등 각종 컨텐츠 맵으로 이동시켜주는 #c<차원의 거울>#을 이용한다."));
            }
            if (qmtp.b) {
                asd.add(new QuickMoveEntry("", 9071003, 1, 20, "파티원들과 힘을 합쳐 강력한 몬스터들을 공략할 수 있는 파티 플레이존\n#c<몬스터 파크>#로 이동한다.\n#c레벨 60 이상, 레벨 95 미만 혹은 레벨 135 이상 참여 가능"));
            }
            if (qmtp.c) {
                asd.add(new QuickMoveEntry("", 9000086, 5, 0, "다른 대륙 이동으로 이동할 수 있는 가장 가까운 #c<대륙 이동 정거장>#으로 이동한다."));
            }
            if (qmtp.d) {
                asd.add(new QuickMoveEntry("", 9000159, 3, 0, "다른 유저들과 아이템을 거래할 수 있는 #c<자유 시장>#으로 이동한다."));
            }
            if (qmtp.e) {
                asd.add(new QuickMoveEntry("", 9000088, 4, 30, "전문 기술의 마을 #c<마이스터 빌>#로 이동한다.\n#c레벨 30이상 부터 이동 가능."));
            }
            if (qmtp.f) {
                asd.add(new QuickMoveEntry("", 9000089, 6, 0, "인근의 주요 지역으로 캐릭터를 이동시켜 주는 #c<택시>#를 이용한다."));
            }
            quickmoves.put(qmtp.townid, asd);
        }
        
        
    }
    
    
    public static List<QuickMoveEntry> getQuickMoves(int mapid) {
        return quickmoves.get(mapid);
    }
    
    public static class QuickMoveTownProperties {
        boolean a,b,c,d,e,f,g,h,i,j,k,l;
        int townid;
        public QuickMoveTownProperties (int townid, boolean mirror, boolean mpark, boolean platform, boolean market, boolean profession, boolean taxi, boolean royalstyle) {
            this.townid = townid; a = mirror; b = mpark; c = platform; d = market ; e = profession ; f = taxi; g =  royalstyle;
        }
    }
    
    
}
