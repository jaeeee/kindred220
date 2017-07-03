/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package community;

/**
 *
 * @author �������̸�
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
     * �븻�߷� C2 00 3F D0 07 00 00 2000
     * �븻���� C2 00 3F D2 07 00 00 2002
     * �븻ȥ�� C2 00 3F D3 07 00 00 2003
     * ��ũ�� C2 00 3F D4 07 00 00 2004
     * ī���� ���� C2 00 3F D5 07 00 00 2005
     * ī���� ȥ���� C2 00 3F D6 07 00 00 2006
     * �ݷ��� C2 00 3F D7 07 00 00 2007
     * �ñ׳ʽ� C2 00 3F D8 07 00 00 2008
     * ��ī�̷� C2 00 3F D9 07 00 00 2009
     * ���� C2 00 3F DA 07 00 00 2010
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
