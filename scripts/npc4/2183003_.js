/*

     [ PlatinumMS ]

     �� ��ũ��Ʈ�� PlatinumMS ���� ������ ��ũ��Ʈ �Դϴ�.

     ��ũ��Ʈ �뵵 : �ƽ��� �ع��� NPC

*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.openPQUI(68);
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var txt1 = "#e<�ƽ��� �ع���>#n �ƽ��� �ع����� �����Ͻðڽ��ϱ�?\r\n";
        txt1 += "#b#L0# ���� ���� óġ�Ѵ�. (���� 120�̻�)\r\n";
        txt1 += "#b#L1# �ƽ��� �ع����� �����Ѵ�.\r\n";
        cm.sendSimple(txt1);
    } else if (status == 1) {
        if (selection == 0) {
            var txt2 = "������ ž �Ա��� �����帮�ڽ��ϴ�. ���� �� �������ּ���.";
            cm.sendSimple(txt2);
        } else if (selection == 1) {
            var txt3 = "��ġ�� ������ ȹ���Ͻ� �� �ֽ��ϴ�.\r\n\r\n#b#e�ع��� �ð��� �ƴϾ ������ �̿��� �����մϴ�.";
            cm.sendYesNo(txt3);
        }
    } else if (status == 2) {
        cm.openPQUI(68);
        cm.dispose();
    }
}