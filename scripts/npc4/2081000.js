


/*

	���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9900001

	���ǽ� �̸� : �Ծ���

	���ǽð� �ִ� �� : ���丮�Ʒε� : �����Ͼ� (180000000)

	���ǽ� ���� : MISSINGNO


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
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        if(cm.getQuestStatus(31331) <= 1){ 
        cm.completeQuest(31331);
        cm.dispose();
        return;
       } else {
       cm.getPlayer().dropMessage(1, "�̹� �轺Ʈ �Ϸ��ϼ̽��ϴ�");
cm.dispose();
    }

}
}