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
                    preamble = eim.getProperty("leader1stpreamble");
                    if (preamble == null) {
                        cm.sendNext("안녕하세요. 루디브리엄 파티퀘스트 첫번째 스테이지에 오신것을 환영합니다. 이곳엔 25마리의 몬스터들이 있습니다. 몬스터를 잡으면 #b#t4001022##k가 나옵니다. 그것들을 저에게 주시면 포탈을 열어 드리겠습니다.");
                        eim.setProperty("leader1stpreamble","done");
                        cm.dispose();
                    }
                    else { // check how many they have compared to number of party members
                                    // check for stage completed
                                    var complete = eim.getProperty("1stageclear");
                                    if (complete != null) {
                                        cm.sendNext("포탈이 열렸습니다!");
                                        cm.dispose();
                                    }
                                    else {
                            if (cm.itemQuantity(4001022) != 25) {
                                cm.sendNext("죄송하지만 이 스테이지를 클리어 하기 위해서는 #b#t4001022##k25개가 필요합니다.");
                                cm.dispose();
                            }
                            else {
                                cm.sendNext("첫번째 스테이지 클리어를 축하드립니다. 포탈을 열어 드렸습니다.");
                                clear(1,eim,cm);
                                cm.givePartyExp(3000, party);
                                cm.gainItem(4001022, -25);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
            else { // non leader
                var eim = cm.getPlayer().getEventInstance();
                pstring = "member1stpreamble" + cm.getPlayer().getId().toString();
                preamble = eim.getProperty(pstring);
                if (status == 0 && preamble == null) {
                    var qstring = "member1st" + cm.getPlayer().getId().toString();
                    var question = eim.getProperty(qstring);
                    if (question == null) {
                        qstring = "FUCK";
                    }
                    cm.sendNext("안녕하세요. 루디브리엄 파티퀘스트 첫번째 스테이지에 오신것을 환영합니다. 이곳엔 25마리의 몬스터들이 있습니다. 몬스터를 잡으면 #b#t4001022##k가 나옵니다. 그걸 저에게 주시면 포탈을 열어 드리겠습니다.");

                }
                else if (status == 0) {// otherwise
                                // check for stage completed
                                var complete = eim.getProperty("1stageclear");
                                if (complete != null) {
                                    cm.sendNext("포탈이 열렸습니다!");
                                    cm.dispose();
                                }
                                else {
                            cm.sendOk("스테이지를 클리어 하신 후에 대화를 걸어주세요.");
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
eim.setProperty("1stageclear","true");
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