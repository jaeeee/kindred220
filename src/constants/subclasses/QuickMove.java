/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
                asd.add(new QuickMoveEntry("", 9010022, 2, 10, "��Ƽ ����Ʈ �� ���� ������ ������ �̵������ִ� #c<������ �ſ�>#�� �̿��Ѵ�."));
            }
            if (qmtp.b) {
                asd.add(new QuickMoveEntry("", 9071003, 1, 20, "��Ƽ����� ���� ���� ������ ���͵��� ������ �� �ִ� ��Ƽ �÷�����\n#c<���� ��ũ>#�� �̵��Ѵ�.\n#c���� 60 �̻�, ���� 95 �̸� Ȥ�� ���� 135 �̻� ���� ����"));
            }
            if (qmtp.c) {
                asd.add(new QuickMoveEntry("", 9000086, 5, 0, "�ٸ� ��� �̵����� �̵��� �� �ִ� ���� ����� #c<��� �̵� ������>#���� �̵��Ѵ�."));
            }
            if (qmtp.d) {
                asd.add(new QuickMoveEntry("", 9000159, 3, 0, "�ٸ� ������� �������� �ŷ��� �� �ִ� #c<���� ����>#���� �̵��Ѵ�."));
            }
            if (qmtp.e) {
                asd.add(new QuickMoveEntry("", 9000088, 4, 30, "���� ����� ���� #c<���̽��� ��>#�� �̵��Ѵ�.\n#c���� 30�̻� ���� �̵� ����."));
            }
            if (qmtp.f) {
                asd.add(new QuickMoveEntry("", 9000089, 6, 0, "�α��� �ֿ� �������� ĳ���͸� �̵����� �ִ� #c<�ý�>#�� �̿��Ѵ�."));
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
