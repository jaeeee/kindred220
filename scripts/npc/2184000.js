


/*

���� ���̵� ��ũ��Ʈ


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode== 1) {
        status++;
    }

    if (status == 0) { 
        cm.sendSimple("��������� ���̵��� �����Ͽ� �ּ���.\r\n#k\r\n#L0#��ָ��#k\r\n#L1#�ϵ���");
      } else if (selection == 0) {
        cm.warp (262030300,0);
      } else if (selection == 1) {
        cm.warp (262031300,0);
        cm.dispose();
    }
}
