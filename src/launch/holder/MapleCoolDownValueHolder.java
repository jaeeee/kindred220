/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package launch.holder;


public class MapleCoolDownValueHolder {

    public int skillId;
    public long startTime;
    public long length;

    public MapleCoolDownValueHolder(final int skillId, final long startTime, final long length) {
	this.skillId = skillId;
	this.startTime = startTime;
	this.length = length;
    }
}
