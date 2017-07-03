/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package community;

/**
 *
 * @author 에반테이르
 */
public enum MapleExpeditionType {
    BARLOG(2000, 45, 200, 6),
    NORMAL_ZAKUM(2002, 50, 200, 30),
    NORMAL_HORNTAIL(2003, 80, 200, 30),
    PINKBEAN(2004, 120, 200, 30),
    CHAOS_ZAKUM(2005, 100, 200, 30),
    CHAOS_HORNTAIL(2006, 110, 200, 30),
    VONLEON(2007, 120, 200, 18),
    CYGNUS(2008, 17, 200, 30),
    AKAYRUM(2009, 120, 200, 18),
    HILA(2010, 120, 200, 6),
    CHAOS_PINKBEAN(2011, 170, 200, 30);
    
    /*
     * 노말발록 C2 00 3F D0 07 00 00 2000
     * 노말자쿰 C2 00 3F D2 07 00 00 2002
     * 노말혼텔 C2 00 3F D3 07 00 00 2003
     * 핑크빈 C2 00 3F D4 07 00 00 2004
     * 카오스 자쿰 C2 00 3F D5 07 00 00 2005
     * 카오스 혼테일 C2 00 3F D6 07 00 00 2006
     * 반레온 C2 00 3F D7 07 00 00 2007
     * 시그너스 C2 00 3F D8 07 00 00 2008
     * 아카이럼 C2 00 3F D9 07 00 00 2009
     * 힐라 C2 00 3F DA 07 00 00 2010
     * 
     */
    public int code, minlv, maxlv, maxplayer;
    private MapleExpeditionType(int a,int b,int c,int e) {
        this.code = a;
        this.minlv = b;
        this.maxlv = c;
        this.maxplayer = e;
    }
    public static MapleExpeditionType getById (int id) {
        for (MapleExpeditionType het : MapleExpeditionType.values()) {
            if (het.code == id) {
                return het;
            }
        }
        return null;
    }
}
