// �ƽ��� Ī�� ��ũ��Ʈ
var status = -1;
var select = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        
        cm.dispose();
        cm.sendOk("�����ߴ� �ƽ����� ���簡 �̸� ������ ���� ���� �� �� ���� �˾Ұڴ°�? ����� �������� �鼺���� ������ ������ �ʾ�����...");
    }
}