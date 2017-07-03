importPackage(Packages.packet.creators);
importPackage(java.awt);

var status;
var partyLdr;
var chatState;
var party;
var preamble;

function start() {
    status = -1;
    playerStatus = cm.isLeader();
    preamble = null;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
            if (playerStatus) { // party leader
                if (status == 0) {
                    var eim = cm.getPlayer().getEventInstance();
                    party = eim.getPlayers();
                    preamble = eim.getProperty("leader2ndpreamble");
                    if (preamble == null) {
                        cm.sendNext("루디브리엄 파티퀘스트 두번째 스테이지에 오신것을 환영합니다! #b#t4001022##15개를 모으신후 저에게 가져다주세요. 절대로 오차가 있으면 안됩니다.");
                        eim.setProperty("leader2ndpreamble","done");
                        cm.dispose();
                    }
                    else { // check how many they have compared to number of party members
                                    // check for stage completed
                                    var complete = eim.getProperty("2stageclear");
                                    if (complete != null) {
                                        cm.sendNext("포탈이 열렸습니다!");
                                        cm.dispose();
                                    }
                                    else {
                            if (cm.itemQuantity(4001022) != 15) {
                                cm.sendNext("이 스테이지를 클리어 하기 위해서는 #b#t4001022##k 15개가 필요합니다.");
                                cm.dispose();
                            }
                            else {
                                cm.sendNext("두번째 스테이지 클리어를 축하드립니다! 포탈을 열어 드렸습니다.");
                                clear(2,eim,cm);
                                cm.givePartyExp(3600, party);
                                cm.gainItem(4001022, -15);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
            else { // non leader
                var eim = cm.getPlayer().getEventInstance();
                pstring = "member2ndpreamble" + cm.getPlayer().getId().toString();
                preamble = eim.getProperty(pstring);
                if (status == 0 && preamble == null) {
                    var qstring = "member2nd" + cm.getPlayer().getId().toString();
                    var question = eim.getProperty(qstring);
                    if (question == null) {
                        qstring = "FUCK";
                    }
                    cm.sendNext("루디브리엄 파티퀘스트 두번째 스테이지에 오신것을 환영합니다! #b#t4001022##15개를 모으신후 저에게 가져다주세요. 절대로 오차가 있으면 안됩니다.");

                }
                else if (status == 0) {// otherwise
                                // check for stage completed
                                var complete = eim.getProperty("2stageclear");
                                if (complete != null) {
                                    cm.sendNext("포탈이 열렸습니다!");
                                    cm.dispose();
                                }
                                else {
                            cm.sendOk("스테이지를 클리어 하신 후에 말을 걸어주세요.");
                            cm.dispose();
                    }
                }
                else if (status == 1) {
                    if (preamble == null) {
                        cm.sendOk("당신에게 최고의 행운이 있기를!");
                        cm.dispose();
                    }
                    else { // shouldn't happen, if it does then just dispose
                        cm.dispose();
                    }

                }
                else if (status == 2) { // preamble completed
                    eim.setProperty(pstring,"done");
                    cm.dispose();
                }
                else { // shouldn't happen, but still...
                    eim.setProperty(pstring,"done"); // just to be sure
                    cm.dispose();
                }
            }
        }
    }

function clear(stage, eim, cm) {
eim.setProperty("2stageclear","true");
var packetef = MainPacketCreator.showEffect("quest/party/clear");
var packetsnd = MainPacketCreator.playSound("Party1/Clear");
var packetglow = MainPacketCreator.environmentChange("gate",2);
var map = eim.getMapInstance(cm.getPlayer().getMapId());
map.broadcastMessage(packetef);
map.broadcastMessage(packetsnd);
map.broadcastMessage(packetglow);
var mf = eim.getMapFactory();
map = mf.getMap(922010100 + stage * 100);
cm.givePartyExp(270, party);
}