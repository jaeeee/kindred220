


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	�Ҵ� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1064017

	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��Ÿ�� : �ɿ��� ���� (105200410)

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
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNextS("��.....",2);
} else {
	cm.sendNext("����� �ڿ�! ���� #r'�� ��'#k�� �濡 ���Ϸ� �ϴ°�!");
}    
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNext("�ܿ� ������ ���ݿ� �����������ٴ�, �װ� �󸶳� �㹫�Ͷ��� �Ҹ��� �ش���� ������ �˰ڴ���?");
} else {
	cm.sendNextS("��,����?!",2);
}
} else if (status == 2) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNext("�̰����� �� ���� �� ���� ������ ��ȣ�ڰ� �� �ִ�. ��������� �ɸ� ������ Ǯ�� �ʹٸ� �츮 ��θ� �����߷��߸� �Ѵ�.������ �� �����δ� �� �� �ϳ��� �̱� �� ���� ���̴�.");
} else {
	cm.sendNext("���� �����Ͻ� #r'�� ��'#k�� ����� ������ ��ȣ�� #b����#k�̴�. ����� �ڿ�, ���� �̰��� ���� �鿩���� #r'�� ��'#k�� �ɱ⸦ ������������.");
}
} else if (status == 3) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNext("�װ� �󸶳� ���߰;��� �������� �˾Ҵٸ� �� ������! �� ��õ�� ���, �̹����� ����ָ�. �ٽô� �̰��� ���� ������ ���Ŷ�.���� �� �� �ٽ� �ں�� ����.");
} else {	
	cm.sendNextS("������ ��ȣ��? Ȥ�� ������� ������ �� ����� �ʾ�?",2);
}
} else if (status == 4) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.warp(105200001);
	cm.dispose();
	cm.openNpc(1064001);	
} else {
	cm.sendNext("������ #r'�� ��'#k���� ���Ͻ� ���̴�.���� #r'�� ��'#k�� �� ���� ������� ������ ��Ű�� ���� ���̴�.");
}
} else if (status == 5) {
	cm.sendNextS("#r'�� ��'#k�̶�� �� Ȥ�� �� �� ���� �ȴ븦 �ߵ��� �ٷ� �� ����?",2); 
} else if (status == 6) {
	cm.sendNext("���Ķ�! �� ������ ���� �Կ� �ø� �� �ִ� ���� �ƴϽô�! �����Ͻ� #r'�� ��'#k�� �� �տ� �� ������ �������� ���� �����̴�,�� ���� #r'�� ��'#k�� �� �տ� ������ �ݾ�� �� ���̴�!");
} else if (status == 7) {
	cm.sendNextS("���� �׿� �ο���� �� �Ƴ�. �׿� ���� ������ ���� �����̾ �츮�� ���ᰡ �Ǿ� ���� �Բ� �ϰ� �־�. �׷��ϱ� ���� �츮�� �Բ�.....",2);
} else if (status == 8) {
	cm.sendNext("���� ������ ����ڳ��� #r'�� ��'#k�� ������ �ϴٴ�,�� ���� ���� �װ� ���� �Էα���!");
} else if (status == 9) {
	cm.sendNextS("���� �����ϴ� �� ����� �� ����. �׷��ٸ� ������ �� ������ �˾Ƴ��� ���ۿ�!",2);
} else if (status == 10) {
	cm.sendNext("�� ������ ���� ������? �׷��ٸ� �� ������ ���ƺ��ƶ�!");
	cm.getPlayer().setKeyValue("ba","attack");
} else if (status == 11) {
	cm.getPlayer().setHp2();
	cm.dispose();
}
}
