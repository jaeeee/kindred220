/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package client.skills;

import client.MapleCharacter;
import java.lang.ref.WeakReference;
import packet.creators.MainPacketCreator;

public class CancelCooldownAction implements Runnable {

    private int skillId;
    private WeakReference<MapleCharacter> target;

    public CancelCooldownAction(MapleCharacter target, int skillId) {
	this.target = new WeakReference<MapleCharacter>(target);
	this.skillId = skillId;
    }

    @Override
    public void run() {
	final MapleCharacter realTarget = target.get();
	if (realTarget != null) {
	    realTarget.removeCooldown(skillId);
	    realTarget.getClient().getSession().write(MainPacketCreator.skillCooldown(skillId, 0));
	}
    }
}
