/*
������ : ���(vmfhvlfqhwlak@nate.com)
������ : Ÿ��(time_amd@nate.com)
*/


var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == 1) {
  status++;
 } else {
  status--;
  cm.dispose();
 }
 if (status == 0) {
  cm.sendYesNo("#b#z2430728##k �� ������ ����Ͻðڽ��ϱ�?");
 } else if (status == 1) {
cm.gainItem(2430728,-1);//������ �������
cm.teachSkill(80001149,1,1); // ��ų �ֱ�
cm.sendOk("���̵���ų�� ���������� ���� �Ǿ����ϴ�."); //�����Ŀ���Ʈ
cm.dispose();
}
}