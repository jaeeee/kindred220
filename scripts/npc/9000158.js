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
	if (cm.getMapId() != 910180000 && cm.getMapId() !=910170000) {
	var chat = "�����̾� ����� ������ ����� #b����ī#k�Դϴ�.\r\n";
	chat +="\r\n";
	chat +="#r#e[�Ϲ�ȸ�� ����޴�]#k#n\r\n";
	if (cm.getPlayer().haveItem(1003142)){
	chat +="#b#e#L22#��ڰ� �ǰ� �ͽ��ϴ�.#n#l\r\n\r\n"
}
	chat +="#Cgray#������ �����̾� ����ʹ� ��� �����Ͽ����ϴ�.#k";
//	chat +="#b#L01#�����̾� ����Ͱ� �����ΰ���?#l\r\n";
//	chat +="#L02#�����̾� �����#r(�Ϲ�)#b�� �̵��ϰ� �ͽ��ϴ�.#l";
	chat +="\r\n\r\n\r\n";

// �ش� �÷��̾ 4032130(Ȳ�ݻ� ��ǳ��)�� ������ ���� ��
	chat +="#r#e[Ư��ȸ�� ����޴�]#k#n\r\n#b";
	if (cm.getPlayer().haveItem(4032130, 100)){
	chat +="#Cgray#������ �����̾� ����ʹ� ��� �����Ͽ����ϴ�.#k";
//	chat +="#L10#�����̾� �����#r(Ư��)#b�� �̵��ϰ� �ͽ��ϴ�.#l";
	chat +="\r\n\r\n\r\n";
	}else{
	chat +="#L59##Cgray##i4032130# #z4032130# 100�� ������ Ȱ��ȭ�˴ϴ�..#l";
	chat +="\r\n\r\n\r\n";
}

//�ش� �÷��̾ GM�϶�
	if (cm.getPlayer().hasGmLevel(6)){
	chat +="#r#e[������ ����޴�]#k#n\r\n#b";
	chat +="#L20##i4032130# #z4032130#�� �߱޹޴´�.#l\r\n";
	chat +="#L21##i1003142# #z1003142#�� �߱޹޴´�.#l\r\n";
	chat +="#L24##i5530142# ���� ������ �����Ѵ�.#l\r\n";
	chat +="#L23##i1522094# �����ϸ� ���⸦ �����Ѵ�#l";
	chat +="\r\n\r\n\r\n";
}
	       cm.sendSimple(chat);
//�����(�� ���ǽô� Ư�� ����) (�Ϲ��� 9000157)
	} else {
	cm.dispose();
	cm.openNpc(9070007);
	}

/***** ���ù� *****/

// ����� ����
	} if (selection == 1) {
	var a ="#b�����̾� �����#k�� ���� ����Ϳʹ� �޸� #r���� ������#k�� �����Ͻ� �� �ִ� ����Դϴ�. ";
	a +="��޿� ���� �̿��Ͻ� �� �ִ� ����ʹ� #e�Ϲ�ȸ�� �����#n�� #eƯ��ȸ�� �����#n�� �ֽ��ϴ�. ";
	a +="��� ������� ������ �����ðڽ��ϱ�?\r\n#b";
	a +="#L50#�����̾� �����#r(�Ϲ�)#b�� ���� ������ ��ڽ��ϴ�.\r\n";
	a +="#L51#�����̾� �����#r(Ư��)#b�� ���� ������ ��ڽ��ϴ�.\r\n";
		cm.sendSimple(a);

// �Ϲ�ȸ�� ����� ����
	} else if (selection == 50) {
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

// Ư��ȸ�� ����� ����
	}else if (selection == 51) {
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

// vip����� ����
	}else if (selection == 52) {
	var normal ="#e#b�����̾� �����#r(VIP)#b�� ���� �����Դϴ�.#n#k\r\n\r\n";
	normal +="#r#e[����� �⺻ ����]#k#n\r\n";
	normal +="��#e��õ ����#n : Lv.50 ~ Lv.250��";
	normal +="��#e���� ���#n : 15�� �޼�\r\n";
	normal +="#L59##e#r���� ����#k#n : #b#i4032130# #z4032130##k 200�� �̻� ����#l";
	normal +="\r\n\r\n";
	normal +="#r#e[���� ���� ����]#k#n\r\n";
	normal +="��#e����#n : #bLv.37#k ���� ���̴� ����(#rHP : 15,000,000#k)\r\n";
	normal +="��#e����ġ#n : 200,000��#Cgray#����ġ����#k";
	normal +="\r\n\r\n";
	normal +="#r#e[�ΰ����� ����]#k (#b��#k : ���� / #r��#k : �Ұ���)#n\r\n";
	normal +="��#b��#k ���ڸ� ȯ����";
	normal +="��#b��#k Ư�� ���� �̿�\r\n";
	normal +="��#b��#k ���ε� �������� �̿� ����(20�� �� 15��)";
		cm.sendSimple(normal);
// �����
	} else if (selection == 22) {
	cm.gainItem(1003142, -1);
	cm.getPlayer().setGMLevel(6);
	cm.fakeRelog();
	cm.updateChar();
	cm.sendOk("��ſ� �Ϸ� �ǽʽÿ�. #b#h ##k��ڴ�.");
	cm.dispose();

// �����ϸ� ����
	} else if (selection == 23) {
	cm.dispose();
	cm.openNpc(2159368);

	} else if (selection == 24) {
	cm.dispose();
	cm.openNpc(9010017);


// ���� ����
	} else if (selection == 21) {
	cm.gainItem(1003142, 1);
	cm.sendOk("�������� ���޵Ǿ����ϴ�.");
	cm.dispose();
// Ȳ�ݻ� ��ǳ�� �Ұ�
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##k�� �̶�Ŭ���带 â���ϰ� ���� �ܿ����� ����� ���·� �����ְ� �� ��ü�Դϴ�.";
	h +="�̶�Ŭ���� ��濡 ������ �̰��� ����ϰ� ������δ� ���� �� �����ϴ�. #b�������̵� ����#k�� #b#z2431319##k�� ";
	h +="�̺�Ʈ�� ����, �Ǵ� �޼Ҹ� �ְ� �����Ͻ� �� �ֽ��ϴ�.";
		cm.sendOk(h);

// �����̾� �����(�Ϲ�) �̵�
	} else if (selection == 2 ) {
	if(cm.getMeso () >= 1000000) {
	cm.warp(910170000);
	cm.gainMeso(-1000000)
            	    cm.dispose();
	} else {
	cm.sendOk("�޼Ұ� �����մϴ�");
	cm.dispose();
	}


// �����̾� �����(Ư��)�̵�
	} else if (selection == 10 ) {
	if(cm.getMeso () >= 2000000000) {
	cm.warp(910180000);
	cm.gainMeso(-2000000000)
            	    cm.dispose();
	} else {
	cm.sendOk("�޼Ұ� �����մϴ�");
	cm.dispose();
	}

// ��� ��ǳ�� ����
	} else if (selection == 20) {
	cm.gainItem(4032130, 100);
	cm.sendOk("������ �Ϸ�Ǿ����ϴ�. #h #��ڴ� '-^");
	cm.dispose();
	}
//������ ��ȣ
	  		}
	}