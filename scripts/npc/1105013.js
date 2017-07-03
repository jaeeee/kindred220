/*
∑ØΩ√æ» ∑Í∑ø
±Ëº±¿œ(hinakr)
*/



var status = 0;
var fee;
var chance = Math.floor(Math.random()*9+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("Hello.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("Have you ever played Russian roulette is a game? Such as gambling money ... gonna hang commission's method 100,000.");
        } else if (status == 1) {
            cm.sendGetText("How geolrae? When you win money quadrupled been losing money! Do not forget Hou exit fees meso 100,000 cases what it is!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k Are you smiling?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("More money in this inventory geondon Do not play no more.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0 andoeneungeo method calls if you do not know?");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(fee * 4);
                    cm.gainMeso(-100000);
                    cm.sendNext("Congratulations. Wins.");
                    cm.dispose();
                }
                else if (chance == 3) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    c.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance == 4) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance == 5) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance >= 6) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance >= 7) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance >= 8) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance >= 9) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
                else if (chance >= 10) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.getPlayer().getStat().setHp(0);
                    cm.getPlayer().getStat().setHp(0);
                    cm.fakeRelog();
                    cm.sendNext("The bullet through the head was you.");
                    cm.dispose();
                }
            }
        }
    }
}  