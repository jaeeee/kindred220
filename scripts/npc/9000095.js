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
var mainc = "#r#h0##k�� ���� �������������� ����� #r#eŸ�Ӻ��Ż���#k �Դϴ�.#k\r\n#k#n#b(������ �´� �������⸦ �����Ͻø�) \r\n#r#e(�ڵ����� ������ �´� �������Ⱑ �����˴ϴ�)#k\r\n\r\n";
mainc += "#L11##r(�ٱ�Ÿ �������� �������⸦ �����Ѵ١�)\r\n\r\n#k#n";
mainc += "#b#L0##i1352405##z1352405#\r\n";
mainc += "#b#L1##i1352503##z1352503#\r\n";
mainc += "#b#L2##i1352604##z1352604#\r\n";
mainc += "#b#L3##i1099010##z1099010#\r\n";
mainc += "#b#L4##i1352103##z1352103#\r\n";
mainc += "#b#L5##i1352003##z1352003#\r\n";
mainc += "#b#L6##i1098003##z1098003#\r\n";
mainc += "#b#L7##i1352703##z1352703#\r\n";
mainc += "#b#L8##i1190201##z1190201#\r\n";
mainc += "#b#L9##i1353005##z1353005#\r\n";
mainc += "#b#L10##i1353104##z1353104#\r\n";
cm.sendSimple(mainc);
} else if (status == 1) {

	if (selection == 11) {
	cm.openShop(9072100);
	cm.dispose();
	}

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
soulring += "\r\n#r���â ���� �ڸ�(���ʾƷ�)�� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
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
var mss = "#b��ī�� �ű׳�";
mss += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
mss += "\r\n#b#L800#��ī�� �ű׳�";
cm.sendSimple(mss);
}
	if (selection ==8) {
var mss = "#b������ ��������";
mss += "\r\n#r���â �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
mss += "\r\n#b#L900##i1190201##t1190201# �ޱ�";
cm.sendSimple(mss);
}
	if (selection ==9) {
var controller = "#b���� ��Ʈ�ѷ�";
controller += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
controller += "\r\n#b#L901#���� ��Ʈ�ѷ� �ޱ�";
cm.sendSimple(controller);
}
	if (selection ==10) {
var controller = "#b���� ����";
controller += "\r\n#r���â ���� �ڸ��� �ٸ��������� ������� �������� �ش�������� �����մϴ�.";
controller += "\r\n#b#L902#���� ���� �ޱ�";
cm.sendSimple(controller);
}
} else if (status == 2) {
        if (selection == 100) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352401, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352402, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352403, 0, 0, 0, 0, 0, 0); //��̳ʽ� ����
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}



        if (selection == 200) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352501, 0, 10, 10, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352502, 0, 20, 20, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352503, 0, 30, 30, 0, 0, 0);  //ī���� ����
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}



        if (selection == 300) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-12, 1352601, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-12, 1352602, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-12, 1352603, 0, 20, 20, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-12, 1352604, 0, 30, 30, 0, 0, 0);  //���� �ҿ︵
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}


        if (selection == 400) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1099001, 0, 0, 0, 0, 0, 20);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1099002, 0, 0, 0, 0, 0, 50);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1099003, 0, 20, 20, 0, 0, 80);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1099004, 0, 30, 30, 0, 0, 110); //���� ��������
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}


       if (selection == 902) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 20);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1353101, 0, 0, 0, 0, 0, 50);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1353102, 0, 20, 20, 0, 0, 80);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1353103, 0, 30, 30, 0, 0, 110); //���� ��������
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}




        if (selection == 500) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352101, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352102, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352103, 0, 0, 0, 0, 0, 0); //���� ī��Ʈ
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}




        if (selection == 600) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352001, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352002, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352003, 0, 0, 0, 0, 0, 0); //�޸� ����ȭ��
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}


        if (selection == 700) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1098000, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1098001, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1098002, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1098003, 0, 0, 0, 0, 0, 0); //������ �ҿ�ǵ�
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}

if (selection == 800) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352700, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352701, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352702, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352703, 0, 0, 0, 0, 0, 0); //��ī�� �ű׳�
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}
if (selection == 900) {
			cm.gainItem(1190201, 1);
cm.dispose();
}
if (selection == 901) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1353001, 1, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1353002, 2, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1353003, 5, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1353004, 10, 0, 0, 0, 0, 0); //���� ��Ʈ�ѷ�
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}
}
}