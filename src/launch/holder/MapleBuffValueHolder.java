/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.holder;

import client.skills.SkillStatEffect;

public class MapleBuffValueHolder {

    public long startTime;
    public SkillStatEffect effect;

    public MapleBuffValueHolder(final long startTime, final SkillStatEffect effect) {
	this.startTime = startTime;
	this.effect = effect;
    }
}
