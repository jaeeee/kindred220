/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package community;

public class GuildRankingInfo {

    private String name;
    private int gp, logo, logocolor, logobg, logobgcolor;

    public GuildRankingInfo(String name, int gp, int logo, int logocolor, int logobg, int logobgcolor) {
	this.name = name;
	this.gp = gp;
	this.logo = logo;
	this.logocolor = logocolor;
	this.logobg = logobg;
	this.logobgcolor = logobgcolor;
    }

    public String getName() {
	return name;
    }

    public int getGP() {
	return gp;
    }

    public int getLogo() {
	return logo;
    }

    public int getLogoColor() {
	return logocolor;
    }

    public int getLogoBg() {
	return logobg;
    }

    public int getLogoBgColor() {
	return logobgcolor;
    }
}
