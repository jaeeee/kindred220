/*

Copyright �� 2013 Spirit Corporaion. All Rights Reserved.

leader.��ǳ�ٿ¶���
�� ��ũ��Ʈ�� ��ǳ�ٿ¶��ο��� ���˴ϴ�.
���� ������ �Ǵ��� �� �ּ��� �������� ���������� ���ڽ��ϴ�.

*/

var status = 0;
var jessicaj = new Array(15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);
var jessicarebirth = new Array(20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var jessica = "�ݰ���!!\r\n";
		jessica += "���� #r����#k�� ����ϰ��ִ� #r�߷���#k�����!!\r\n#b";
                jessica += "#r" + cm.getPlayer().getName() + "#k ���� ��������Ʈ�� #b" + cm.getPlayer().getSSpirit() + " #k����Ʈ ��ŭ�־�.\r\n#b";
		jessica += "#L0#������ ���� �ñ���!!\r\n";
		jessica += "#L1#������ ��Ź�Ұ�";
		cm.sendSimple(jessica);

	} else if (status == 1) {
		if (selection == 0) {
			var jessica2 = "#r����#k�̶�?\r\n\r\n#b";
			jessica2 += "���� 200 > 180\r\n";
			jessica2 += "Abillit Points 15 ~ 30 ���� ����\r\n";
			jessica2 += "��������Ʈ 20 ~ 30 ���� ����\r\n\r\n#k";
			jessica2 += "#e���Ӱ�#n �ٽ� �¾�°��� ���ϴ°ž� ȯ���� ��������� ������ �ٸ���";
			cm.sendPrev(jessica2);
			cm.dispose();
		} else if (selection == 1) {
			var jessica = jessicaj[Math.floor(Math.random() * jessicaj.length)];
			var jessica2 = jessicarebirth[Math.floor(Math.random() * jessicarebirth.length)];
			var Jessica = cm.getPlayer().getSSpirit() + jessica2;
                      if(cm.getPlayer().getJob() != 10112) {
			if (cm.getPlayer().getLevel() >= 200) {
				cm.getPlayer().setLevel(180);
				cm.gainAp(jessica);
				cm.getPlayer().setRebirth(Jessica);
				cm.getPlayer().saveToDB(false, false);
				cm.reloadChar();
				cm.sendOk("#bAbillit Points + " + jessica + "\r\n���� ����Ʈ + " + jessica2 + "\r\n���� ����Ʈ �հ� : " + cm.getPlayer().getSSpirit() + "\r\n\r\n#r���Ӱ� �ٽ� �¾�� ������!!");
				cm.dispose();
	                } else {
				cm.sendOk("#r�ʿ� ����#k\r\n\r\n#b���� 200\r\n#k�ٽ� �¾��ŭ ������ ���ѰŰ�����?");
				cm.dispose();
		        } 
} else {
                                cm.sendOk("#r����#k ������ #b����#k �� �Ұ�����!!");
                                cm.dispose();
}
}
}
}
}