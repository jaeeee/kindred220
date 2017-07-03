/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
