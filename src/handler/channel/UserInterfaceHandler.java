/*
 * ArcStory Project
 * ÃÖÁÖ¿ø sch2307@naver.com
 * ÀÌÁØ junny_adm@naver.com
 * ¿ìÁöÈÆ raccoonfox69@gmail.com
 * °­Á¤±Ô ku3135@nate.com
 * ±èÁøÈ« designer@inerve.kr
 */

package handler.channel;

import client.MapleClient;
import scripting.NPCScriptManager;
import scripting.EventManager;
import packet.creators.MainPacketCreator;

public class UserInterfaceHandler {

    public static void CygnusSummon_NPCRequest(MapleClient ha) {
	NPCScriptManager.getInstance().start(ha, 1101008);
    }


    public static void ShipObjectRequest(int mapid, MapleClient ha) {
	// BB 00 6C 24 05 06 00 - Ellinia
        // BB 00 6E 1C 4E 0E 00 - Leafre

        EventManager em;
        int effect = 3; // 1 = Coming, 3 = going, 1034 = balrog
        try {
            switch (mapid) {
                case 104020110: // Ellinia Station >> Orbis
                case 200000111: // Orbis Station >> Ellinia
                    em = ha.getChannelServer().getEventSM().getEventManager("Boats");
                    if (em.getProperty("docked").equals("true")) {
                        effect = 1548;
                    }
                    break;
                case 200000121: // Orbis Station >> Ludi
                case 220000110: // Ludi Station >> Orbis
                    em = ha.getChannelServer().getEventSM().getEventManager("Trains");
                    if (em.getProperty("docked").equals("true")) {
                        effect = 1548;
                    }
                    break;
                case 200000151: // Orbis Station >> Ariant
                case 260000100: // Ariant Station >> Orbis
                    em = ha.getChannelServer().getEventSM().getEventManager("Geenie");
                    if (em.getProperty("docked").equals("true")) {
                        effect = 1548;
                    }
                    break;
                case 240000110: // Leafre Station >> Orbis
                case 200000131: // Orbis Station >> Leafre
                    em = ha.getChannelServer().getEventSM().getEventManager("Cabin");
                    if (em.getProperty("docked").equals("true")) {
                        effect = 1548;
                    }
                    break;
                case 200090010: // During the ride to Orbis
                case 200090000: // During the ride to Ellinia
                    em = ha.getChannelServer().getEventSM().getEventManager("Boats");
                    if (em.getProperty("haveBalrog").equals("true")) {
                        effect = 1034;
                    } else {
                        return; // shyt, fixme!
                    }
                    break;
                default:
                    System.out.println("Unhandled ship object, MapID : " + mapid);
                    break;
            }

            if (effect != 3) {
                ha.getSession().write(MainPacketCreator.boatPacket(effect));
            } else {
                ha.getSession().write(MainPacketCreator.boatPacket2(effect));
            }
        } catch (NullPointerException npe) {
            ha.getSession().write(MainPacketCreator.boatPacket2(3));
        }
    }
}
