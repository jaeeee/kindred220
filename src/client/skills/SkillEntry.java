/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
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
