/*
���� : (Dhae) dhae0107
���� : ���ι� ������
�ڵ� : 1061008 (�����ǿ��[���� ȯ��] - ������)
���� : ȯ������ ���ǽ�
*/

������ = [2048723, 2049323, 2049153, 1122017]; // ������ �ڵ�
���� = [1000, 2000, 3000, 4000]; // ������ ����
���� = [10, 20, 10, 1]; // ������ ���Խ� ���� �� ����




function start() {    status = -1;    action(1, 0, 0);}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {	cm.dispose();	return;	}
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}


if (status == 0) {
	�� = "�ȳ��Ѱ���~ ���� �߱����� �� ���� �������̴���~\r\n���� �� ���� �� ������ �ѷ�������~ #e#b:��#n#k\r\n\r\n"
	��+= "#r#e�������� ȯ�� : "+cm.getPlayer().getFame()+"#n#k\r\n"
	for(i=0; i<������.length; i++) {
	��+= "#L"+i+"##i"+������[i]+"##z"+������[i]+"# #b#e< "+����[i]+" : "+����[i]+" >#n#k\r\n\r\n";}
	cm.sendSimple(��);


}else if(status == 1){
	if (cm.getPlayer().getFame() >= ����[selection] && cm.canHold(������[selection])) {
		cm.getPlayer().addFame(-����[selection]);		
		cm.gainItem(������[selection], ����[selection]);
		cm.fakeRelog();	
		cm.updateChar();
		cm.sendOk(����[selection] +"ȯ���� �޾Ҵ���~#b< #i"+������[selection]+"##z"+������[selection]+"# >#k�� �� �޾ҳ���~?\r\n���� �Ž���#r#e< "+cm.getPlayer().getFame()+"ȯ�� >#k#n����~!");
		cm.dispose();
	}else{
		cm.sendOk("ȯ�� �Ǵ� �κ��� �������� ������ Ȯ���غ�����~!");
		cm.dispose();
  }
 }
}