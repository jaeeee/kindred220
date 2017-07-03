var status = 0;
var fee;
var chance = Math.floor(Math.random()*24+1);

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
            cm.sendNext("슬롯머신 하실 거면 다음을 눌러주세요\r\n#r한순간의 선택이 평생을 좌우한다.");
        } else if (status == 1) {
            cm.sendGetText("얼마를 거실 건가요? #b이길 경우#k 돈을 #r3배#k로 드립니다. #b질 경우#k #r본전#k도 못 찾아갑니다.");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k 원을 등록하겠습니까?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("#h #님이 소지하고 있는 금액 보다 더 많은 량을 등록하셨습니다.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0원은 등록을 못 합니다.");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 3) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 4) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 5) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 6) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 7) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 8) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 9) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 10) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 11) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 12) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 13) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 14) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 15) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 16) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 17) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 18) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 19) {
                    cm.gainMeso(-fee);
                    cm.sendNext("게임에서 패배하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 20) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 21) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 22) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 23) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 24) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
                else if (chance == 25) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("게임에서 승리하셨습니다.");
                    cm.dispose();
                }
            }
        }
    }
}  