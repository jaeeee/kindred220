/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client.skills;

import java.util.concurrent.ScheduledFuture;

public class CoolDownValueHolder {

    public int skillId;
    public long startTime;
    public long length;
    public ScheduledFuture<?> timer;

    public CoolDownValueHolder(int skillId, long startTime, long length, ScheduledFuture<?> timer) {
	super();
	this.skillId = skillId;
	this.startTime = startTime;
	this.length = length;
	this.timer = timer;
    }
}
