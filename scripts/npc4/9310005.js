/*
���� : ����(pongpong___@naver.com)
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
        	cm.TimeMoveMap(931000610, 1000000, 120);
		cm.sendOk("�� ������Ģ�� ���ݵǴ� ��ų� ���� �ൿ�� �߱�. �̰����� \r\n#b2��#k���� �ݼ��ϰ��־�! �׸��� �����\r\n#r�������Ḧ �ϰų� ���� �ٽ� Ŭ���Ұ�� ó������ �ٽ� #b2��#k�� ��ٷ����ϴ� ��ȸ���� �׳ɱ�ٷ�#k\r\n�׷��� �� �׷����� �ϰ�׷����� ��.. �ݼ��̳���!!#k");
		cm.dispose();
	}
		
    }
