


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	asdwdbd �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1012008

	���ǽ� �̸� : ī����

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý����Ӱ��� (100000203)

	���ǽ� ���� : �̴ϰ��� ������


*/

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
var mainc = "�ȳ�? �� ������Ÿ�� �������� ���� ���ǽþ�~\n��ſ� �Ϸ� ����~";
mainc += "#r\n\r\n#b#L0#��̳ʽ� ����#l";
mainc += "\r\n#b#L1#ī���� ����#l";
mainc += "\r\n#b#L2#������ ������ �ҿ︵#l";
mainc += "\r\n#b#L3#���󽽷��̾� ��������";
mainc += "\r\n#b#L4#���� ī��Ʈ";
mainc += "\r\n#b#L5#�޸������� ����ȭ��";
mainc += "\r\n#b#L6#������ �ҿ�ǵ�";
mainc += "\r\n#b#L7#������ ��������";
cm.sendSimple(mainc);
} else if (status == 1) {
        if (selection == 0) {
var ovc = "#b��̳ʽ� ���� ";
ovc += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
ovc += "#b\r\n#L100#��̳ʽ� ���� �ޱ�";
cm.sendSimple(ovc);
}
        if (selection == 1) {
var integer = "#bī���� ����";
integer += " \r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
integer += "\r\n#b#L200#ī���� ���� �ޱ�";
cm.sendSimple(integer);
}
        if (selection == 2) {
var soulring = "#b������ ������ �ҿ︵";
soulring += "\r\n#r���â �����ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
soulring += "\r\n#b#L300#������ ������ �ҿ︵ �ޱ�";
cm.sendSimple(soulring);
}
	if (selection ==3) {
var dfs = "#b���󽽷��̾� ��������";
dfs += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
dfs += "\r\n#b#L400#���󽽷��̾� �������� �ޱ�";
cm.sendSimple(dfs);
}
	if (selection ==4) {
var ptc = "#b���� ī��Ʈ";
ptc += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
ptc += "\r\n#b#L500#���� ī��Ʈ �ޱ�";
cm.sendSimple(ptc);
}
	if (selection ==5) {
var mma = "#b�޸������� ����ȭ��";
mma += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
mma += "\r\n#b#L600#�޸������� ����ȭ�� �ޱ�";
cm.sendSimple(mma);
}
	if (selection ==6) {
var mss = "#b������ �ҿ�ǵ�";
mss += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
mss += "\r\n#b#L700#������ �ҿｯ�� �ޱ�";
cm.sendSimple(mss);
}
	if (selection ==7) {
var mss = "#b������ ��������";
mss += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
mss += "\r\n#b#L800#������ �������� �ޱ�";
cm.sendSimple(mss);
}

} else if (status == 2) {
        if (selection == 100) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352400);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352401);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352402);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352403); //��̳ʽ� ����
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}



        if (selection == 200) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352500);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352501);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352502);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352503);  //ī���� ����
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}



        if (selection == 300) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352601);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352602);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352603);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352604);  //���� �ҿ︵
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}


        if (selection == 400) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1099001);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1099002);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1099003);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1099004); //���� ��������
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}




        if (selection == 500) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352100);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352101);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352102);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352103); //���� ī��Ʈ
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}




        if (selection == 600) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352000);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352001);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352002);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352003); //�޸� ����ȭ��
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}


        if (selection == 700) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1098000);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1098001);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1098002);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1098003); //������ �ҿ�ǵ�
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}

        if (selection == 800) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1099006);

cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1099007);

cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1099008);

cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1099009); //������ �ҿ�ǵ�

cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}



}
}