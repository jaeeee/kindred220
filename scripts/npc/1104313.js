

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


 var chat = "Did you meet senior article?#b\r\n";
                    if (cm.getJob() == 1111 || cm.getJob() == 1112 || cm.getJob() == 1211 || cm.getJob() == 1212 || cm.getJob() == 1311 || cm.getJob() == 1312 || cm.getJob() == 1411 || cm.getJob() == 1412 || cm.getJob() == 1511 || cm.getJob() == 1512) { // ���� üũ
                        chat += "\r\n#L99#Yes, I am a senior articles.";
						cm.sendSimple(chat);
					}
					else {
		   				chat += "\r\nI'm not yet a senior articles.";
						cm.sendOk(chat);
						cm.dispose();
					}
} if (selection == 99) {

 var chat = "Do you fit 120 levels?#b\r\n";
                    if (cm.getPlayer().getLevel() >= 120) { // ���� 120 Ȯ��
                        chat += "\r\n#L1#Yes, my level is 120.";
						cm.sendSimple(chat);
					}
					else {
		   				chat += "\r\nI'm still not 120 ϴ Joop �.";
						cm.sendOk(chat);
						cm.dispose();
					}

} if (selection == 1) {



 var chat = "It deserves to be enough angular arch. If the Maple Leafs 300 brought by former Moro'll Palace.#b\r\n";
                    if (cm.haveItem(4001126,300)) { // �������� �ִ��� üũ
                        chat += "\r\n#L10#I've collected the 300 Maple Leaf.";
						cm.sendSimple(chat);
					}
					else {
		   				chat += "\r\nYet I did not collect the 300 Maple Leaf.";
						cm.sendOk(chat);
						cm.dispose();
					}

} if (selection == 10) {



 var chat = "Choose Palace know you want to.#b\r\n";
                    if (cm.haveItem(4001126,300)) { // Ȥ�� �� ��Ȳ�� ��ǳ�� ������ 300���� �ٽ� üũ
		      cm.gainItem(4001126, -300);
                         chat += "\r\n#L100#����";
			 chat += "\r\n#L1000#������";
			 chat += "\r\n#L10000#�ü�";
			 chat += "\r\n#L100000#����";
			 chat += "\r\n#L1000000#����";
						cm.sendSimple(chat);
					}
					else {
		   				chat += "\r\nMaple Leafs lost the 300. I'll try again.";
						cm.sendOk(chat);
						cm.dispose();
					}
} if (selection == 100) {

cm.changeJob(100); // ���� ����
cm.getPlayer().skillReset(); // ��ų�ʱ�ȭ
cm.teachSkill(1075,5,5); // ��ų����
cm.teachSkill(74,1,1);
cm.getPlayer().setLevel(50); // ��������
cm.getPlayer().getStat().setDex(4); // ���� �ʱ�ȭ
cm.getPlayer().getStat().setStr(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setLuk(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setInt(4); // ��Ʈ �ʱ�ȭ
                cm.getPlayer().gainSP(100); // ��ų����Ʈ 100����
		cm.getPlayer().gainAp(300); // ��������Ʈ 300����
		cm.gainItem(1082290,1);
		cm.gainItem(1003159,1);
		cm.gainItem(1052304,1);
		cm.gainItem(1072476,1);
		cm.gainItem(1402092,1);
		cm.gainItem(1432082,1);
                cm.fakeRelog();
                cm.updateChar();
cm.dispose();

} if (selection == 1000) {

cm.changeJob(200); // ���� ����
cm.getPlayer().skillReset(); // ��ų�ʱ�ȭ
cm.teachSkill(1076,5,5); // ��ų����
cm.teachSkill(74,1,1);
cm.getPlayer().setLevel(50); // ��������
cm.getPlayer().getStat().setDex(4); // ���� �ʱ�ȭ
cm.getPlayer().getStat().setStr(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setLuk(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setInt(4); // ��Ʈ �ʱ�ȭ
                cm.getPlayer().gainSP(100); // ��ų����Ʈ 100����
		cm.getPlayer().gainAp(300); // ��������Ʈ 300����
		cm.gainItem(1082290,1);
		cm.gainItem(1003159,1);
		cm.gainItem(1052304,1);
		cm.gainItem(1072476,1);
		cm.gainItem(1372081,1);
                cm.fakeRelog();
                cm.updateChar();
cm.dispose();

} if (selection == 10000) {

cm.changeJob(300); // ���� ����
cm.getPlayer().skillReset(); // ��ų�ʱ�ȭ
cm.teachSkill(1077,5,5); // ��ų����
cm.teachSkill(74,1,1);
cm.getPlayer().setLevel(50); // ��������
cm.getPlayer().getStat().setDex(4); // ���� �ʱ�ȭ
cm.getPlayer().getStat().setStr(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setLuk(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setInt(4); // ��Ʈ �ʱ�ȭ
                cm.getPlayer().gainSP(100); // ��ų����Ʈ 100����
		cm.getPlayer().gainAp(300); // ��������Ʈ 300����
		cm.gainItem(1082290,1);
		cm.gainItem(1003159,1);
		cm.gainItem(1052304,1);
		cm.gainItem(1072476,1);
		cm.gainItem(1452108,1);
		cm.gainItem(1462095,1);
                cm.fakeRelog();
                cm.updateChar();
cm.dispose();

} if (selection == 100000) {

cm.changeJob(400); // ���� ����
cm.getPlayer().skillReset(); // ��ų�ʱ�ȭ
cm.teachSkill(1078,5,5); // ��ų����
cm.teachSkill(74,1,1);
cm.getPlayer().setLevel(50); // ��������
cm.getPlayer().getStat().setDex(4); // ���� �ʱ�ȭ
cm.getPlayer().getStat().setStr(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setLuk(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setInt(4); // ��Ʈ �ʱ�ȭ
                cm.getPlayer().gainSP(100); // ��ų����Ʈ 100����
		cm.getPlayer().gainAp(300); // ��������Ʈ 300����
		cm.gainItem(1082290,1);
		cm.gainItem(1003159,1);
		cm.gainItem(1052304,1);
		cm.gainItem(1072476,1);
		cm.gainItem(1332127,1);
		cm.gainItem(1472119,1);
                cm.fakeRelog();
                cm.updateChar();
cm.dispose();

} if (selection == 1000000) {

cm.changeJob(500); // ���� ����
cm.getPlayer().skillReset(); // ��ų�ʱ�ȭ
cm.teachSkill(1079,5,5); // ��ų����
cm.teachSkill(74,1,1);
cm.getPlayer().setLevel(50); // ��������
cm.getPlayer().getStat().setDex(4); // ���� �ʱ�ȭ
cm.getPlayer().getStat().setStr(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setLuk(4); // �� �ʱ�ȭ
cm.getPlayer().getStat().setInt(4); // ��Ʈ �ʱ�ȭ
                cm.getPlayer().gainSP(100); // ��ų����Ʈ 100����
		cm.getPlayer().gainAp(300); // ��������Ʈ 300����
		cm.gainItem(1082290,1);
		cm.gainItem(1003159,1);
		cm.gainItem(1052304,1);
		cm.gainItem(1072476,1);
		cm.gainItem(1482081,1);
		cm.gainItem(1492082,1);
                cm.fakeRelog();
                cm.updateChar();
cm.dispose();


}
}
}
