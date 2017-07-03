/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package server.life;

public class MapleNPCStats {

    private String name;
    private int FH, RX0, RX1, CY;

    public MapleNPCStats(String name) {
	this.name = name;
    }

    public String getName() {
	return name;
    }

    public void setName(String name) {
	this.name = name;
    }


    public int getFH() {
        return FH;
    }

    public int getRX0() {
        return RX0;
    }

    public int getRX1() {
        return RX1;
    }

    public int getCY() {
        return CY;
    }


    public void setFH(int FH) {
        this.FH = FH;
    }

    public void setRX0(int RX0) {
        this.RX0 = RX0;
    }

    public void setRX1(int RX1) {
        this.RX1 = RX1;
    }

    public void setCY(int CY) {
        this.CY = CY;
    }

}
