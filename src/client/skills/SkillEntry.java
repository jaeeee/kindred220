/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.skills;


public class SkillEntry {

    public final byte skillevel;
    public final byte masterlevel;
    public final long expiration;

    public SkillEntry(final byte skillevel, final byte masterlevel, final long expiration) {
	this.skillevel = skillevel;
	this.masterlevel = masterlevel;
	this.expiration = expiration;
    }
}
