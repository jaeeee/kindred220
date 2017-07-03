/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
