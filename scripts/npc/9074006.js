/*
�귿 
�輱��(Dbgkr)
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
            cm.sendOk("�ȳ��Ͻÿ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�귿(�����ӽ�) �̶��������غ��������ʴϱ� ? ������� 10�� �޼��Դϴ�. �ϽǰŸ� �����������ּ���");
        } else if (status == 1) {
            cm.sendGetText("�󸶳� �ɷ�? �̱�� ����2��ιް� ���� ��������! ������ 10,0000�޼Ҵ� �̱������ ���������ٴ°� ������!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k �޼Ҹ� �ɰŴ�?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("�κ��丮�ȿ� �ִµ����� �ǵ��� ������ �峭��������.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0�޼Ұɸ� �ȵǴ°� ����?");
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