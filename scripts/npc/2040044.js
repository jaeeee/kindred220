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
                    preamble = eim.getProperty("leader9thpreamble");
                    if (preamble == null) {
                        cm.sendNext("Welcome to the ninth stage of Ludibrium PQ. I need you to defeat Alishar to save Ludibrium. Bring me the #b#t4001023##k once he has been dealt with.  Defeating Alishar is no easy task.  Work with eachother and be sure to have items to counter afflictions.");
                        eim.setProperty("leader9thpreamble","done");
                        cm.dispose();
                    }
                    else { // check how many they have compared to number of party members
                                    // check for stage completed
                                    var complete = eim.getProperty("9stageclear");
                                    if (complete != null) {
                                         var em = cm.getEventManager("LudiPQbonus");
                if (em == null) {
                    cm.sendOk("The bonus is currently unavailable.");
                } else if (em.getProperty("LPQbonusOpen").equals("true")) {
                    // Begin the bonus.
                    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    em.setProperty("LPQbonusOpen" , "false");
                    cm.getEventManager("LudiPQ").setProperty("LPQOpen" , "true");
                } else {
                    cm.sendNext("Something is wrong.  Click on me again.");
                }
                cm.dispose();
                                    }
                                    else {
                            if (cm.itemQuantity(4001023) < 1) {
                                cm.sendNext("I'm sorry, but you haven't gotten the #b#t4001023##k from Alishar, yet.");
                                cm.dispose();
                            }
                            else {
                                cm.sendNext("Congratulations on defeating Alishar! You have saved Ludibrium! Please speak with me again and I will take your party into the bonus stage.");
                                clear(9,eim,cm);
                                cm.givePartyExp(6600, party);
                                cm.gainItem(4001023, -1);
                                cm.dispose();
                            }
                        }
                    }
                }
            }
            else { // non leader
                var eim = cm.getPlayer().getEventInstance();
                pstring = "member9thpreamble" + cm.getPlayer().getId().toString();
                preamble = eim.getProperty(pstring);
                if (status == 0 && preamble == null) {
                    var qstring = "member9th" + cm.getPlayer().getId().toString();
                    var question = eim.getProperty(qstring);
                    if (question == null) {
                        qstring = "FUCK";
                    }
                    cm.sendNext("Hurry and defeat Alishar.");

                }
                
                else if (status == 1) {
                    if (preamble == null) {
                        cm.sendOk("Ok, best of luck to you!");
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
eim.setProperty("9stageclear","true");
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