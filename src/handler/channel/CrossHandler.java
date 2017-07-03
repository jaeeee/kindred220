/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package handler.channel;

import client.MapleCharacter;
import packet.creators.MainPacketCreator;
import packet.transfer.read.ReadingMaple;

/**
 *
 * @author Asteria
 */
public class CrossHandler {
    public static void CrossChapter(ReadingMaple rm, MapleCharacter chr) {
        int chapter = rm.readShort();
        switch(Integer.parseInt(chr.getKeyValue("cross"))) {
            case 6:
                chr.gainSpirit(3700031,1);
                chr.gainSpirit(4310029, 10);
                chr.setKeyValue("chapter", chr.getKeyValue("chapter") + ";r=1");
                chr.send(MainPacketCreator.updateInfoQuest(0x670, chr.getKeyValue("chapter")));
                chr.setKeyValue("cross", "7");
                break;
            case 12:
                chr.gainSpirit(3700032,1);
                chr.gainSpirit(4310029, 100);
                chr.setKeyValue("chapter2", chr.getKeyValue("chapter2") + ";r=1");
                chr.send(MainPacketCreator.updateInfoQuest(0x671, chr.getKeyValue("chapter2")));
                chr.setKeyValue("cross", "13");
                break;
            case 18:
                chr.gainSpirit(3700033,1);
                chr.gainSpirit(4310029, 20);
                chr.setKeyValue("chapter3", chr.getKeyValue("chapter3") + ";r=1");
                chr.send(MainPacketCreator.updateInfoQuest(0x674, chr.getKeyValue("chapter3")));
                chr.setKeyValue("cross", "19");                
                break;
            case 24:
                chr.gainSpirit(3700034,1);
                chr.gainSpirit(4310029, 30);
                chr.setKeyValue("chapter4", chr.getKeyValue("chapter4") + ";r=1");
                chr.send(MainPacketCreator.updateInfoQuest(0x673, chr.getKeyValue("chapter4")));
                chr.setKeyValue("cross", "25");                
                break;
            default:
                chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, "이미 챕터를 완료 하셨습니다.", "00 00", (byte) 0));
                chr.ea();
                return;
        }
        chr.getClient().getSession().write(MainPacketCreator.getNPCTalk(2144004, (byte) 0, chr.getKeyValue("cross") == "25" ? "저희 크로스 헌터를 대신하여 모든 챕터를 완료 해주신걸 진심으로 감사 드립니다." : "챕터 완료를 축하드립니다.", "00 00", (byte) 0));
        chr.ea();
    }
}
