/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.stats;

import client.skills.SkillStatEffect;
import java.util.concurrent.ScheduledFuture;


public class BuffStatsValueHolder {

    public SkillStatEffect effect;
    public long startTime;
    public int value;
    public ScheduledFuture<?> schedule;

    public BuffStatsValueHolder(SkillStatEffect effect, long startTime, ScheduledFuture<?> schedule, int value) {
	super();
	this.effect = effect;
	this.startTime = startTime;
	this.schedule = schedule;
	this.value = value;
    }
}
