/*
룰렛 
김선일(Dbgkr)
*/



var status = 0;
var fee;
var chance = Math.floor(Math.random()*23+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("안녕하시오.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("룰렛(슬릇머신) 이란도박을해본적있으십니까 ? 수수료는 10만 메소입니다. 하실거면 다음을눌러주세요");
        } else if (status == 1) {
            cm.sendGetText("얼마나 걸래? 이기면 돈을2배로받고 지면 돈을잃지! 수수료 10,0000메소는 이기건지건 빠져나간다는걸 잊지마!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k 메소를 걸거니?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("인벤토리안에 있는돈보다 건돈이 더많아 장난하지말자.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0메소걸면 안되는거 몰라?");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4443000##v4441000#");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4441000##v4443000#");
                    cm.dispose();
                }
                else if (chance == 3) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4441000##v4443000#");
                    cm.dispose();
                }
else if (chance == 4) {
                    cm.gainMeso(fee * 2);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4441000##v4441000#");
                    cm.dispose();
                }
else if (chance == 5) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4442000##v4441000#");
                    cm.dispose();
                }
                else if (chance == 6) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4441000##v4442000#");
                    cm.dispose();
                }
                else if (chance == 7) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4443000##v4443000#");
                    cm.dispose();
                }
                else if (chance == 8) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4442000##v4442000#");
                    cm.dispose();
                }
                else if (chance == 9) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4443000##v4442000#");
                    cm.dispose();
                }
                else if (chance == 10) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4442000##v4443000#");
                    cm.dispose();
                }
                else if (chance == 11) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4440000##v4443000##v4442000#");
                    cm.dispose();
                }
                else if (chance == 12) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4440000##v4442000##v4443000#");
                    cm.dispose();
                }
                else if (chance == 13) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4440000##v4443000##v4443000#");
                    cm.dispose();
                }
                else if (chance == 14) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4440000##v4442000##v4442000#");
                    cm.dispose();
                }
                else if (chance == 15) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4440000##v4441000#");
                    cm.dispose();
                }
                else if (chance == 16) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4440000##v4440000#");
                    cm.dispose();
                }
                else if (chance == 17) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4441000##v4440000##v4440000#");
                    cm.dispose();
                }
                else if (chance == 18) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4442000##v4440000##v4440000#");
                    cm.dispose();
                }
                else if (chance == 19) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4443000##v4441000##v4441000#");
                    cm.dispose();
                }
                else if (chance == 20) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4442000##v4444000##v4443000#");
                    cm.dispose();
                }
                else if (chance == 21) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4443000##v4442000##v4444000#");
                    cm.dispose();
                }
                else if (chance == 22) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4443000##v4444000##v4442000#");
                    cm.dispose();
                }
                else if (chance == 23) {
                  cm.gainMeso(-fee);
                    cm.gainMeso(-100000);
                    cm.sendNext("#v4442000##v4444000##v4443000#");
                    cm.dispose();
                }
            }
        }
    }
}  