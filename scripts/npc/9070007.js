/* ����ī */

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

/***** ��ȭ�ϱ� *****/
// �÷��̾ �����̾� ����Ϳ� ���� ��
	if (cm.getMapId() !=910180000) {
	var chat ="#b�����̾� �����#r(�Ϲ�)#k�� ���� ���� ȯ���մϴ�!\r\n\r\n";
	chat +="#r#e[�Ϲ�ȸ�� ����޴�]#k#n\r\n";
	chat +="#b#L03#�����̾� �����#r(�Ϲ�)#b�� ���� ������ ��´�.#l\r\n";
	chat +="#b#L01#����� ��ġ�� ������ ���ư���.#l\r\n";
	cm.sendSimple(chat);

	} else {
	var chat ="#b�����̾� �����#r(Ư��)#k�� ���� ���� ȯ���մϴ�!\r\n\r\n";
	chat +="#r#e[Ư��ȸ�� ����޴�]#k#n\r\n";
	chat +="#b#L02#�����̾� �����#r(Ư��)#b�� ���� ������ ��´�.#l\r\n";
	chat +="#b#L01#����� ��ġ�� ������ ���ư���.#l";
	chat +="\r\n\r\n\r\n";
	chat +="#r#e[Ư��ȸ�� �ΰ�����]#k#n\r\n#b";
	chat +="#L90#ȯ���� �ϰڽ��ϴ�.\r\n";
	chat +="#L91##r#z2431349##b�� ��ڽ��ϴ�. (500�� �޼�)\r\n";
	cm.sendSimple(chat);
	}

// �ش� �÷��̾ 4032130(Ȳ�ݻ� ��ǳ��)�� ������ ���� ��

/***** ���ù� *****/

// ����� ����
	} if (selection == 1) {
	cm.dispose();
	cm.warp(1000000);
	cm.sendOk("������ �� �̿����ּ���. �����մϴ�.");

// Ư��ȸ�� ����� ����
	}else if (selection == 2) {
	var normal ="#e#b�����̾� �����#r(Ư��)#b�� ���� �����Դϴ�.#n#k\r\n\r\n";
	normal +="#r#e[����� �⺻ ����]#k#n\r\n";
	normal +="��#e��õ ����#n : Lv.50 ~ Lv.250��";
	normal +="��#e���� ���#n : 20�� �޼�\r\n";
	normal +="#L59##e#r���� ����#k#n : #b#i4032130# #z4032130##k 100�� �̻� ����#l";
	normal +="\r\n\r\n";
	normal +="#r#e[���� ���� ����]#k#n\r\n";
	normal +="��#e����#n : #bLv.37#k ���� ���̴� ����(#rHP : 15,000,000#k)\r\n";
	normal +="��#e����ġ#n : 200,000��#Cgray#����ġ����#k";
	normal +="\r\n\r\n";
	normal +="#r#e[�ΰ����� ����]#k (#b��#k : ���� / #r��#k : �Ұ���)#n\r\n";
	normal +="��#b��#k ���ڸ� ȯ����";
	normal +="��#b��#k Ư�� ���� �̿�";
		cm.sendSimple(normal);

// �Ϲݻ���� ����
	} else if (selection == 3) {
	var normal ="#e#b�����̾� �����#r(�Ϲ�)#b�� ���� �����Դϴ�.#n#k\r\n\r\n";
	normal +="#r#e[����� �⺻ ����]#k#n\r\n";
	normal +="��#e��õ ����#n : Lv.13 ~ Lv.200��";
	normal +="��#e���� ���#n : 100�� �޼�";
	normal +="\r\n\r\n";
	normal +="#r#e[���� ���� ����]#k#n\r\n";
	normal +="��#e����#n : #bLv.37#k ���� ���̴� ����(#rHP : 150,000#k)\r\n";
	normal +="��#e����ġ#n : 30,000��#Cgray#����ġ����#k";
	normal +="\r\n\r\n";
	normal +="#r#e[�ΰ����� ����]#k#n\r\n";
	normal +="��#Cgray#�ش� ���̵������� �ΰ����񽺸� �̿��Ͻ� �� �����ϴ�.";
		cm.sendSimple(normal);


// ȯ��
	} else if (selection == 90) {
	cm.dispose();
	cm.openNpc(9000006);

// Ȧ�ɹ��� ����
	} else if (selection == 91 ) {
	if(cm.getMeso () >= 5000000) {
	cm.gainItem(2431349, 1)
	cm.gainMeso(-5000000)
            	    cm.dispose();
	} else {
	cm.sendOk("�޼Ұ� �����մϴ�");
	cm.dispose();
	}

// Ȳ�ݻ� ��ǳ�� �Ұ�
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##k�� �̶�Ŭ���带 â���ϰ� ���� �ܿ����� ����� ���·� �����ְ� �� ��ü�Դϴ�.";
	h +="�̶�Ŭ���� ��濡 ������ �̰��� ����ϰ� ������δ� ���� �� �����ϴ�. #b�������̵� ����#k�� #b#z2431319##k�� ";
	h +="�̺�Ʈ�� ����, �Ǵ� �޼Ҹ� �ְ� �����Ͻ� �� �ֽ��ϴ�.";
		cm.sendOk(h);
}
//������ ��ȣ
	  		}
	}