/*

Copyright �� 2013 Spirit Corporaion. All Rights Reserved.

leader.���Ǹ��¶��� (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.��� (guri__s@nate.com)
Make.���� (iureal@nate.com)

�� ��ũ��Ʈ�� ���Ǹ��¶��ο��� ���˴ϴ�.
���� ������ �Ǵ��� �� �ּ��� �������� ���������� ���ڽ��ϴ�.

*/

var status = 0;
var jessica = Math.floor(Math.random() * 90);

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
	if (cm.haveItem(4310067, 100)) {
	if (cm.getPlayer().getStat().getMaxHp() < 60000 && cm.getPlayer().getStat().getMaxMp() < 60000) {
		cm.sendNext("�ȳ��ϼ���. #b" + cm.getPlayer().getName() + "��#k �����ý��丮 ���� ��� #b��Ƽ��#k �Դϴ�. \r\nOX��� ��� ���߽� ��쿡�� �÷��̾���� HP�� MP�� 1000 �÷��帳�ϴ�.\r\n��, �׷� ���� �����غ����?\r\n\r\n#r");
	} else {
		cm.sendOk("HP, MP�� 50000�̻���. ��ũ��Ʈ�� �ø��Ǽ� �����ϴ�.");
		cm.dispose();
		}
	} else {
		cm.sendOk("OX ��� �����Ͻ÷��� �Ʒ��� ���� �������� �ʿ��մϴ�.\r\n\r\n#b#i4310067# #t4310067# 100��");
		cm.dispose();
		}
	} else if (status == 1) {
	if (jessica > 0 && jessica < 10) {
		cm.sendGetText("#b�츮 ������ �̸���?");
		status = 1;

	} else if (jessica > 10 && jessica < 20) {
		cm.sendGetText("#b���� �����ϴ� �ְ� �������ʹ�?");
		status = 2;

	} else if (jessica > 20 && jessica < 30) {
		cm.sendGetText("#b ac�� + (ad+bc)m + bd �� �μ������Ͽ��� (���� ��������)");
		status = 3;

	} else if (jessica > 30 && jessica < 40) {
		cm.sendGetText("#b�������� �Ҷ����� �־����� ������ �̸���? \r\n#r(�پ������)");
		status = 4;

	} else if (jessica > 40 && jessica < 50) {
		cm.sendGetText("#b�޸� �¶����� Ȩ������ �ּҴ�?");
		status = 5;

	} else if (jessica > 50 && jessica < 60) {
		cm.sendGetText("#b�Ŵ��� �θŴ����� ����?");
		status = 6;

	} else if (jessica > 60 && jessica < 70) {
		cm.sendGetText("#b���� ������(�ֻ��)�� ��Ȯ�� ������? \r\n#r(�پ�� ����)\r\n#b�� : ????�� ????��"); // 12��8ó��
		status = 7;

	} else if (jessica > 70 && jessica < 80) {
		cm.sendGetText("#b�������� ĳ�� ������? \r\n#b�� : ????�� ????��"); // 5õ��
		status = 8;

	} else if (jessica > 80 && jessica < 90) {
		cm.sendGetText("#bNPC�� ���� �첨�� NPC��? \r\n#r(�پ������)");
		status = 9;
	} else {
		cm.sendOk("#b�ƽ��Ե�.. ������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 2) {
	if (cm.getText().equals("�޸� �¶���")) {
		cm.sendGetText("#b ac�� + (ad+bc)m + bd �� �μ������Ͽ��� (���� ��������)");
		status = 10;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 3) {
	if (cm.getText().equals("����")) {
		cm.sendGetText("#b�������� �Ҷ����� �־����� ������ �̸���? \r\n#r(�پ������)");
		status = 11;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 4) {
	if (cm.getText().equals("(am+b)(cm+d)")) {
		cm.sendGetText("#b���� ������(�ֻ��)�� ��Ȯ�� ������? \r\n#r(�پ�� ����)\r\n#b�� : ????�� ????��");
		status = 12;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 5) {
	if (cm.getText().equals("pc�� ����")) {
		cm.sendGetText("#bNPC�� ���� �첨�� NPC��? \r\n#r(�پ������)");
		status = 13;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 6) {
	if (cm.getText().equals("http://word.ce.do")) {
		cm.sendGetText("#b��ũ��Ʈ �����ڴ� ���� ������?");
		status = 14;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 7) {
	if (cm.getText().equals("�޸վ� ������")) {
		cm.sendGetText("#b�츮 ������ �̸���?");
		status = 15;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 8) {
	if (cm.getText().equals("12�� 8000��")) {
		cm.sendGetText("#b�������� ĳ�� ������? \r\n#b�� : ????�� ????��");
		status = 16;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 9) {
	if (cm.getText().equals("8300��")) {
		cm.sendGetText("#b���� �����ϴ� �ְ� �������ʹ�?");
		status = 17;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 10) {
	if (cm.getText().equals("���� �ҹ�")) {
		cm.sendGetText("#b�޸� �¶����� Ȩ������ �ּҴ�?");
		status = 18;
	} else {
		cm.sendOk("#b�ƽ��Ե�..������ Ʋ���̳׿�.");
		cm.dispose();
		}

	} else if (status == 11) {
	if (cm.getText().equals("(am+b)(cm+d)")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 12) {
	if (cm.getText().equals("pc������ ����")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 13) {
	if (cm.getText().equals("12�� 8000��")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 14) {
	if (cm.getText().equals("���� �ҹ�")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 15) {
	if (cm.getText().equals("�޸վ� ������")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 16) {
	if (cm.getText().equals("�޸տ¶���")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.getPlayer().saveToDB(false, false);
		cm.gainItem(4310067, -50);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + "");
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 17) {
	if (cm.getText().equals("8300��")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 18) {
	if (cm.getText().equals("����")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}

	} else if (status == 19) {
	if (cm.getText().equals("�޸�.�ŴϾ�.�ѱ�")) {
		var jessh = cm.getPlayer().getStat().getMaxHp() + 2000;
		var jessm = cm.getPlayer().getStat().getMaxMp() + 2000;
		cm.getPlayer().getStat().setMaxHp(jessh);
		cm.getPlayer().getStat().setMaxMp(jessm);
		cm.gainItem(4310067, -50);
		cm.getPlayer().saveToDB(false, false);
		cm.reloadChar();
		cm.sendOk("�����մϴ�! ��� ������ ���߼̽��ϴ�.\r\n\r\n#fUI/UIWindow.img/Quest/reward#\r\n\r\n#b�ִ� HP, MP + 1000\r\n�հ� : Hp : " + jessh + " Mp : " + jessm + ""); 
		cm.dispose();
	} else {
		cm.sendOk("#b����!! ������ 1�������� Ʋ���ôٴ�..��Ÿ�����.");
		cm.dispose();
		}
}
}
}