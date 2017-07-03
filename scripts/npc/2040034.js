var status;
var minLevel = 35;
var maxLevel = 55;
var minPlayers = 1;
var maxPlayers = 6;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        if (cm.getParty() == null) { // No Party
            cm.sendOk("From here on above, this place is full of dangerous objects and monsters, so I can't let you make your way up anymore. If you're intrested in saving us and bringing peace back to Ludibrium, however, that's a different story. If you want to defeat a powerful creature residing at the very top, then please gather up your party members. It won't be easy, but ... I think you can do it.");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("If you want to try the quest, please tell the #bleader of your party#k to talk to me.");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPlayers || inMap > maxPlayers) {
                cm.sendOk("Your party is not a party of "+minPlayers+". Please make sure all your members are present and qualified to participate in this quest. I see #b" + inMap + "#k of your party members are here. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("Please make sure all your members are present and qualified to participate in this quest. This PQ requires players ranging from level "+minLevel+" to level "+maxLevel+". I see #b" + levelValid + "#k members are in the right level range. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else {
                var em = cm.getEventManager("LudiPQ");
                if (em == null) {
                    cm.sendOk("This PQ is currently unavailable.");
                } else if (em.getProperty("LPQOpen").equals("true")) {
                    // Begin the PQ.
                    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons GMS DOESNT DO THIS!!!
                    //party = cm.getPlayer().getEventInstance().getPlayers();
                    //cm.removeFromParty(4001023, party);
                    //cm.removeFromParty(4001022, party);
                    em.setProperty("LPQOpen" , "false");
                } else {
                    cm.sendNext("There is already another party inside. Please wait !");
                }
                cm.dispose();
            }
        }
    }
}