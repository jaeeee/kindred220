/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package community;

import packet.creators.MainPacketCreator;
import packet.transfer.write.Packet;

public enum MapleGuildResponse {

    NOT_IN_CHANNEL(0x30), //0x30
    ALREADY_IN_GUILD(0x2E),
    NOT_IN_GUILD(0x33);
    private int value;

    private MapleGuildResponse(int val) {
	value = val;
    }

    public int getValue() {
	return value;
    }

    public Packet getPacket() {
	return MainPacketCreator.genericGuildMessage((byte) value);
    }
}
