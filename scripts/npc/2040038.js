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
                    preamble = eim.getProperty("leader3rdpreamble");
                    if (preamble == null) {
                        cm.sendNext("���긮�� ��Ƽ����Ʈ ����° ���������� ���Ű��� ȯ���մϴ�! #b#t4001022##k 32���� �������� ������ �������ּ���. ����� ������ ������ �ȵ˴ϴ�.");
                        eim.setProperty("leader3rdpreamble","done");
                        cm.dispose();
                    }
                    else { // check how many they have compared to number of party members
                                    // check for stage completed
                                    var complete = eim.getProperty("3stageclear");
                                    if (complete != null) {
                                        cm.sendNext("Please proceed in the Party Quest, the portal opened!");
                                        cm.dispose();
                                    }
                                    else {
                            if (cm.itemQuantity(4001022) != 32) {
                                cm.sendNext("�� ���������� Ŭ���� �ϱ� ���ؼ��� #b#t4001022##k 32���� �ʿ��մϴ�.");
                                cm.dispose();
                            }
                            else {
                                cm.sendNext("����° �������� Ŭ��� ���ϵ帳�ϴ�! ��Ż�� ���� ��Ƚ��ϴ�.");
                                clear(3,eim,cm);
                                cm.givePartyExp(4200, party);
                                cm.gainItem(4001022, -32);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
            else { // non leader
                var eim = cm.getPlayer().getEventInstance();
                pstring = "member3rdpreamble" + cm.getPlayer().getId().toString();
                preamble = eim.getProperty(pstring);
                if (status == 0 && preamble == null) {
                    var qstring = "member3rd" + cm.getPlayer().getId().toString();
                    var question = eim.getProperty(qstring);
                    if (question == null) {
                        qstring = "FUCK";
                    }
                    cm.sendNext("Welcome to the thrid stage of Ludibrium PQ. Please gather up 32 #b#t4001022#'s#k.  Be sure not to miss any. If they disappear your party will fail!");

                }
                else if (status == 0) {// otherwise
                                // check for stage completed
                                var complete = eim.getProperty("3stageclear");
                                if (complete != null) {
                                    cm.sendNext("��Ż�� ���Ƚ��ϴ�!");
                                    cm.dispose();
                                }
                                else {
                            cm.sendOk("���������� Ŭ���� �Ͻ� �Ŀ� ���� �ɾ��ּ���.");
                            cm.dispose();
                    }
                }
                else if (status == 1) {
                    if (preamble == null) {
                        cm.sendOk("��ſ��� �ְ��� ����� �ֱ⸦!");
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
eim.setProperty("3stageclear","true");
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