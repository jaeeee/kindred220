/*
Cosmos Project ��׾�
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
var mainc = "#r�������� ���� npc �Դϴ�.";
mainc += "#r\n\r\n#b#L0#��̳ʽ� ����#l";
mainc += "\r\n#b#L1#ī���� ����#l";
mainc += "\r\n#b#L2#������ ������ �ҿ︵#l";
mainc += "\r\n#b#L3#���󽽷��̾� ��������";
mainc += "\r\n#b#L4#���� ī��Ʈ";
mainc += "\r\n#b#L5#�޸������� ����ȭ��";
mainc += "\r\n#b#L6#������ �ҿ�ǵ�";
mainc += "\r\n#b#L7#��ī�� �ű׳�";
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

} else if (status == 2) {
        if (selection == 100) {
if(cm.getJob() == 2700){
cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2710){
cm.addEquip(-10, 1352401, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2711){
cm.addEquip(-10, 1352402, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2712){
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
if(cm.getJob() == 6100){
cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 6110){
cm.addEquip(-10, 1352501, 0, 10, 10, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 6111){
cm.addEquip(-10, 1352502, 0, 20, 20, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 6112){
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
if(cm.getJob() == 6500){
cm.addEquip(-12, 1352601, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 6510){
cm.addEquip(-12, 1352602, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 6511){
cm.addEquip(-12, 1352603, 0, 20, 20, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 6512){
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
if(cm.getJob() == 3100){
cm.addEquip(-10, 1099001, 0, 0, 0, 0, 0, 20);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 3110){
cm.addEquip(-10, 1099002, 0, 0, 0, 0, 0, 50);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 3111){
cm.addEquip(-10, 1099003, 0, 20, 20, 0, 0, 80);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 3112){
cm.addEquip(-10, 1099004, 0, 30, 30, 0, 0, 110); //���� ��������
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("����� �������δ� �ش� �������� ���� �� �����ϴ�.");
cm.dispose();
}
}




        if (selection == 500) {
if(cm.getJob() == 2400){
cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2410){
cm.addEquip(-10, 1352101, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2411){
cm.addEquip(-10, 1352102, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2412){
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
if(cm.getJob() == 2300){
cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2310){
cm.addEquip(-10, 1352001, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2311){
cm.addEquip(-10, 1352002, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 2312){
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
if(cm.getJob() == 5100){
cm.addEquip(-10, 1098000, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 5110){
cm.addEquip(-10, 1098001, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 5111){
cm.addEquip(-10, 1098002, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 5112){
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
if(cm.getJob() == 3500){
cm.addEquip(-10, 1352700, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 3510){
cm.addEquip(-10, 1352701, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 3511){
cm.addEquip(-10, 1352702, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if(cm.getJob() == 3512){
cm.addEquip(-10, 1352703, 0, 0, 0, 0, 0, 0); //��ī�� �ű׳�
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