function start() {
status = -1;
action (1, 0, 0);
}
function action(mode, type, selection) {
if (mode == -1 || mode == 0) {
cm.dispose();
return;
}if (mode == 1) {
status++;
}
if (status == 0) {
var chat = "���⿡ ���� �����̶�?";
chat += "\r\n\r\n#L1##b�峭�� ���� 4������ ������";
chat += "\r\n#L0#�� ����Ʈ�� ��� �ϴ°ž�?#l";
chat += "\r\n#L2#���������(�峭�� Į)�� ��ȯ �ϰ�;�.";
chat += "\r\n#L3#������ ������.";
cm.sendSimple(chat);
} else if (status == 1) {
if(selection == 0) {
cm.sendOk("#r�峭�� ���� 4����#k �����ؼ� ������ �ص帮�ٽ��ϴ�. \r\n�峭�� ���� 4������ ���ø� ���ڰ� �� 12���� �ֽ��ϴ�. ���ڸ� ���ԵǸ�  #i4031092##b#t4031092##k �� ���� �� �ֽ��ϴ�. ���ѽð� 15�� �ȿ� �װ��� 10�� ���� �� ���������� �������� #r����#k�� ������ �ս��ϴ�. �׳�? ������ ���İ��...? �� ������ ���� ����..");
cm.dispose();
} else if (selection == 3) {
cm.warp(101050000,0);
cm.dispose();
} else if (selection == 2) {
cm.dispose();
cm.openNpc(2040015);
} else if(selection == 1) {
if(cm.getPlayerCount(922000000) == 0) {
cm.playerMessage(1, "����Ʈ �ʿ� �����߽��ϴ�. �������� '������ ��' �� Ŭ�� �Ͻø� �˴ϴ�.");
cm.resetMap(922000000);
cm.timeMoveMap(922030100, 922000000, 1200);
cm.spawnMob(9100005, 469,-143);
cm.spawnMob(9100005, 1172,-84);
cm.spawnMob(9100005, 1354,-143);
cm.spawnMob(9100005, 2432,-86);
cm.spawnMob(9100005, 4321,-84);
cm.spawnMob(9100005, 4610,-84);
cm.spawnMob(9100005, -97,-143);
cm.spawnMob(9100006, 541,-82);
cm.spawnMob(9100006, 811,-84);
cm.spawnMob(9100006, 2971,-83);
cm.spawnMob(9100006, 4054,-84);
cm.spawnMob(9100006, -358,-143);
cm.dispose();
} else {
cm.sendOk("�̹� �ٸ� ���� ����Ʈ�ʿ� �����Ͽ����ϴ�. �ٸ� ä�ο��� ������ �ְų� ����Ͻñ� �ٶ��ϴ�.");
}
}
}
}

