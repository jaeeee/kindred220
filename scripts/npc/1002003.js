var status = -1;

function start() {
    cm.sendYesNo("... You look more friends? What? You would not try to deal with me?");
}

function action(mode, type, selection) {
    status++;
    if (mode < 1) {
        if(mode == 0)
            cm.sendNext(status == 0 ? "Like that..? Guess whether I thought a lot of friends. Ohgena find this idea again later turns " : "Are you clear method has 10 million right? I'm sorry, but if the money to be friends list neulryeojul eopdane the maximum number.");
        cm.dispose();
        return;
    }
    if (status == 0)          
        cm.sendYesNo("Good. 10 million inner method only five people more'll lengthening list of friends. What?");
    else if (status == 1) {
        var capacity = cm.getPlayer().getBuddylist().getCapacity();
        if (capacity >= 100 || cm.getMeso() < 10000000) {
            cm.sendNext("Is it clear Methodist 10 million has correctly? Or already I do not know what your friends list filled with tight 100 people.");
        } else {
            cm.gainMeso(-10000000);
            cm.getPlayer().setBuddyCapacity(capacity + 5);
            cm.sendOk("Four aided by increasing your friend list. If further increase or played back to me to say.");
        }
        cm.dispose();
    }
}