/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
