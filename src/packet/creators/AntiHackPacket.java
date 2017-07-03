/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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