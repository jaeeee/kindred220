/*
���� : (Dhae) dhae0107
���� : ���ι� ������
�ڵ� : 2433913 (��ƼX���� ��������Ų)
���� : ���� ���� ���ǽ�
*/

function start() {    status = -1;    action(1, 1, 0);}
function action(mode, type, selection) {
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}

��Ų�ڵ� = (2433913);
��Ų��ȣ = (26);

if (status == 0) {
	cm.gainItem(2433913, -1)
	cm.setDamageSkin(26);
	cm.showMessage("������ ��Ų�� ���� �Ǿ����ϴ�.");
	cm.dispose();
}
}