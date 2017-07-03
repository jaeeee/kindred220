/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package community;

public class MapleGuildContents {

    private String name;
    private short logoBG;
    private byte logoBGColor;
    private short logo;
    private byte logoColor;
    private int allianceid;

    public MapleGuildContents(MapleGuild g) {
	name = g.getName();
	logoBG = (short) g.getLogoBG();
	logoBGColor = (byte) g.getLogoBGColor();
	logo = (short) g.getLogo();
	logoColor = (byte) g.getLogoColor();
	allianceid = g.getAllianceId();
    }

    public String getName() {
	return name;
    }

    public short getLogoBG() {
	return logoBG;
    }

    public byte getLogoBGColor() {
	return logoBGColor;
    }

    public short getLogo() {
	return logo;
    }

    public byte getLogoColor() {
	return logoColor;
    }

    public int getAllianceId() {
	return allianceid;
    }
}
