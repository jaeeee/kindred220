/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package packet.creators;

import packet.opcode.SendPacketOpcode;
import packet.transfer.write.Packet;
import packet.transfer.write.WritingPacket;

public class AntiHackPacket {
    
    public static Packet sendProcessRequest() {
      WritingPacket packet = new WritingPacket();
      packet.writeShort(SendPacketOpcode.PROCESS_CHECK.getValue());
      packet.write(1);
      return packet.getPacket();
    }
}