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
            cm.sendOk("�ȳ��Ͻÿ�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("���Ըӽ� �Ͻ� �Ÿ� ������ �����ּ���\r\n#r�Ѽ����� ������ ����� �¿��Ѵ�.");
        } else if (status == 1) {
            cm.sendGetText("�󸶸� �Ž� �ǰ���? #b�̱� ���#k ���� #r3��#k�� �帳�ϴ�. #b�� ���#k #r����#k�� �� ã�ư��ϴ�.");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("#r" + fee + "#k ���� ����ϰڽ��ϱ�?");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("#h #���� �����ϰ� �ִ� �ݾ� ���� �� ���� ���� ����ϼ̽��ϴ�.");
                cm.dispose();
            } else if (cm.getText() < 0) {
                cm.sendOk("0���� ����� �� �մϴ�.");
                cm.dispose();
            } else {
                if (chance <= 1) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 2) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 3) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 4) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 5) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 6) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 7) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 8) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 9) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 10) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 11) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 12) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 13) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 14) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 15) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 16) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 17) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 18) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 19) {
                    cm.gainMeso(-fee);
                    cm.sendNext("���ӿ��� �й��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 20) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 21) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 22) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 23) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 24) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
                else if (chance == 25) {
                    cm.gainMeso(fee * 3);
                    cm.sendNext("���ӿ��� �¸��ϼ̽��ϴ�.");
                    cm.dispose();
                }
            }
        }
    }
}  