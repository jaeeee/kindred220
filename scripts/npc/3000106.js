/* ����ī

//	chat +="#Cgray#������ �����̾� ����ʹ� ��� �����Ͽ����ϴ�.#k";
 */

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

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
	if (cm.getMapId() != 910180000 && cm.getMapId() !=910170000) {
	var chat = "�ű׳ʽ� �̳�.. �ż��� ���׿��� ħ���ϴٴ�, �ƹ�ư ���谡�Բ� ����帳�ϴ�. �� ���Ǹ� �޾��ֽ�����...\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list3\r\n\r\n#L20##b������ �ްڽ��ϴ�.#k\r\n";
	//chat +="#r#e[]#k#n\r\n";
	//if (cm.haveItem(1003142)){
	//chat +="#b#e#L22#��ڰ� �ǰ� �ͽ��ϴ�.#n#l\r\n\r\n"
	if (cm.haveItem(4032130,100)){
	chat +="#L10#Ư������#r��� �������#k���� �̵��ϰ� �ͽ��ϴ�.#l\r\n";
	chat +="#L15#Ư������ #b��� �������#k ����� �ȳ�#l";
	chat +="\r\n\r\n\r\n";
}
//�ش� �÷��̾ GM�϶�
//	if (cm.getPlayer().hasGmLevel(6)){
//	chat +="#r#e[������ ����޴�]#k#n\r\n#b";
//	chat +="#L20##i4032130# #z4032130#�� �߱޹޴´�.#l\r\n";
//	chat +="#L21##i1003142# #z1003142#�� �߱޹޴´�.#l\r\n";
//	chat +="#L24##i5530142# ���� ������ �����Ѵ�.#l\r\n";
//	chat +="#L23##i1522094# �����ϸ� ���⸦ �����Ѵ�#l";
	chat +="\r\n\r\n\r\n";

	       cm.sendSimple(chat);
//�����(�� ���ǽô� Ư�� ����)
	} else {
	cm.dispose();
	cm.openNpc(9070007);
	}

/***** ���ù� *****/

// ����� ����
	} if (selection == 1) {
	if(cm.haveItem (1142354, 1)) {
	cm.playerMessage(5, "[�޼� ����� TIP] 10��,100��,500�� �޼ҵ����� Ȯ�������� ����ǰ�, �������ȸ� �޼ҷ� ��ȯ �����մϴ�.")
        cm.warp(240092300);
        cm.dispose();
        } else {
	cm.sendOk("����, ���� #bũ�ν����� ������#k�� ��Ī�ϴ°ſ���?!");
	cm.dispose();
        }
// �Ϲ�ȸ�� ����� ����
	} else if (selection == 50) {
	var normal ="#e#b���� ���� ������ '#r �ǵ��� #k' �� ���� �����Դϴ�. #n#k\r\n\r\n";
	normal +="���� ���忡�� �������� ������ �̷��ϰ� �����ֽ��ϴ�.";
	normal +="��#e���� �����#n #r����#k �� ���Ե�� ���� ���Ұ��̴�.\r\n";
	normal +="���⼭ ���谡 ���ϴ°��� �ٷ� '#r �ǵ��� #k' ��� �����մϴ�.\r\n";
	normal +="������ #e���� �����#n �� ���ؼ��� �ƴ� �ٰ� �����ϴ�.\r\n\r\n";
	normal +="�ϴ� ���谡�� ������ �پ��� ��ν� ������ �����ּ���";
		cm.sendSimple(normal);

// ��ν� ������ �˷��� ����
	}else if (selection == 51) {
	var normal ="#e#b��ν� ������ #r����#k�� #b���谡#k�� �����Ǿ��ֽ��ϴ�.n#k\r\n\r\n";
		cm.sendSimple(normal);

// vip����� ����
	}else if (selection == 52) {
	var normal ="#e#b���ν� ������ #r����������#k�� #b�ñ׳ʽ�#k�� �����Ǿ��ֽ��ϴ�.#k\r\n\r\n";
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
	var h ="#b#z4032130##k�� �Ŀ�����Ʈ 5000p�� �����ϽǼ� �ֽ��ϴ�.";
	h +="�� ���� ������ ���������� ��ӷ��� 5���Դϴ�.";
	h +="�� ���� ������ ��հ���ġ�� 3��7õ~3��8õ�Դϴ�.";
	h +="#z4032130#�� �Ҹ���� �ʽ��ϴ�. #b#z4032130##k�� �����ϰ� ������ �������� �����̰����մϴ�.";
		cm.sendOk(h);
// ������� �ȳ�
	} else if (selection == 12) {
	cm.dispose();
	var h ="#b< 10�ֳ� ��ǳ�� ������� �ȳ� >#k\r\n";
	h +="�̸� : ���� ���̴� ����\r\n";
	h +="���� : LV.30�̻� \r\n";
	h +="maxHP : 50000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="����ġ : 100 \r\n";	
	h +="��Ӿ����� :#i4310080#�� ���  \r\n";	
	cm.sendOk(h);
// ��߸�� �ȳ�
	} else if (selection == 13) {
	cm.dispose();
	var h ="#b< �������� ������� �ȳ� >#k\r\n";
	h +="�̸� : ���� ������\r\n";
	h +="���� : LV.100�̻� \r\n";
	h +="maxHP : 5000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="����ġ : 100 \r\n";	
	h +="��Ӿ����� :#i4310088#�� ���  \r\n";	
	cm.sendOk(h);
// �ϵ��� �ȳ�
	} else if (selection == 14) {
	cm.dispose();
	var h ="#b< �ξ⽺Ÿ�� ������� �ȳ� >#k\r\n";
	h +="�̸� : Ÿ���� �ڴϾ�\r\n";
	h +="�̸� : Ÿ���� ���̷���\r\n";
	h +="���� : LV.130�̻� \r\n";
	h +="maxHP : 50000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="����ġ : 100 \r\n";	
	h +="��Ӿ����� :#i5680157#�� ���  \r\n";	
	cm.sendOk(h);
// Ư����� �ȳ�
	} else if (selection == 15) {
	cm.dispose();
	var h ="#b< ��� ������� �ȳ� >#k\r\n";
	h +="�̸� : ���� ���̴� ����\r\n";
	h +="���� : LV.30�̻� \r\n";
	h +="maxHP : 100000 \r\n";
	h +="maxMP : 20000 \r\n";
	h +="����ġ : 100 \r\n";	
	h +="��Ӿ����� :#i5680157##i4310088##i4310080#�� ��ӷ�2��!  \r\n";	
	cm.sendOk(h);
	} else if (selection == 1001) {
	cm.dispose();
	var h ="#b< Ÿ�̹� ���� ������� �ȳ� >#k\r\n";
	h +="�̸� : ���� ��� ������\r\n";
	h +="���� : LV.120�̻� \r\n";
	h +="maxHP : ?? \r\n";
	h +="maxMP : ?? \r\n";
	h +="����ġ : ?? \r\n";	
	h +="��Ӿ����� : #i4310085# #b#z4310085##k";	
	cm.sendOk(h);
// �����̾� �����(����) �̵�
	} else if (selection == 2 ) {
	if(cm.haveItem (1142350, 1) && cm.haveItem (4001083, 1) && cm.haveItem(4033311, 1) && cm.haveItem(1122000, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.gainItem(1122000, -1);
	cm.gainItem(1142350, -1);
	cm.sendOk("���� ��� #b���� ũ�ν�����#k���Ǽ˱���. ���ϵ帳�ϴ�.")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[ũ�ν�����] "+ cm.getPlayer().getName()+"�Բ��� ���� ũ�ν����Ͱ��Ǽ̽��ϴ�.")); // ��ü �˸� 
	cm.gainItem(1142352, 1);
	cm.dispose();
	} else {
	cm.sendOk("#b�߽� ũ�ν�����#k�� �ǽð� �Ŀ� �� �������� ��� �� ��ǥ�� �Ʒ� �����۵��� ��ƿ�����.\r\n#e< �ʿ��� ��ǥ >#n\r\n#i4001083# #b#t4001083##k, #i4033311# #b#t4033311##k\r\n#i1122000# #b#t1122000##k, #i1142350# #b#t1142350##k");
	cm.dispose();
	}
	} else if (selection == 1000 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(252010300);
	cm.getPlayer().send(MainPacketCreator.sendHint("#bŸ�̹� ����#k ȹ�� ������ �����ϼ̽��ϴ�.\r\n��ſ� ��� �Ǽ���",300,20));
	cm.dispose();
	} else {
	cm.sendOk("�����Ϸ��� #b#v3994789##k ������ �ʿ��մϴ�.");
	cm.dispose();
	}
// �����̾� �����(�븻) �̵�
	} else if (selection == 3 ) {
	if(cm.haveItem (1142352, 1) && cm.haveItem (4001083, 1) && cm.haveItem(4033311, 1) && cm.haveItem(1122000, 1) && cm.haveItem(3994793, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.gainItem(1122000, -1);
	cm.gainItem(3994793, -1);
	cm.gainItem(1142352, -1);
	cm.sendOk("���� #b���� ũ�ν�����#k�� �ǽôٴ� ���� �������´��� Ʋ�������ϴ�. �ƹ�ư ���ϵ帳�ϴ�.")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[ũ�ν�����] "+ cm.getPlayer().getName()+"�Բ��� ���� ũ�ν����Ͱ��Ǽ̽��ϴ�.")); // ��ü �˸� 
	cm.gainItem(1142353, 1);
	cm.dispose();
	} else {
	cm.sendOk("#b���� ũ�ν�����#k�� �ǽð� �Ŀ� �� �������� ��� �� ��ǥ�� �Ʒ� �����۵��� ��ƿ�����.\r\n#e< �ʿ��� ��ǥ >#n\r\n#i4001083# #b#t4001083##k, #i4033311# #b#t4033311##k\r\n#i1122000# #b#t1122000##k, #i3994793# #b#t3994793##k\r\n#i1142352# #b#t1142352##k");
	cm.dispose();
	}
// �����̾� �����(�ϵ�) �̵�
	} else if (selection == 4 ) {
	if(cm.haveItem (1142353, 1) && cm.haveItem (4001083, 1) && cm.haveItem(4033311, 1) && cm.haveItem(1122000, 1) && cm.haveItem(3994793, 1) && cm.haveItem(4033312, 1) && cm.haveItem(4033304, 1) && cm.haveItem(4000659, 1) && cm.haveItem(1003719, 1) && cm.haveItem(1003721, 1) && cm.haveItem(1003722, 1)) {
	cm.gainItem(4033311, -1);
	cm.gainItem(4001083, -1);
	cm.gainItem(1122000, -1);
	cm.gainItem(3994793, -1);
	cm.gainItem(4033312, -1);
	cm.gainItem(4033304, -1);
	cm.gainItem(4000659, -1);
	cm.gainItem(1003719, -1);
	cm.gainItem(1003721, -1);
	cm.gainItem(1003722, -1);
	cm.gainItem(1142353, -1);
	cm.sendOk("���� #bũ�ν����� ������#k���Ǽ˱���! ������ ������ �����ϽŰ� �������� ���ϵ帳�ϴ�. #b������ ũ�ν�����#k�� ���� �����ñ�!")
        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[ũ�ν�����] "+ cm.getPlayer().getName()+"�Բ��� ��ϸ����丮 �ְ� ũ�ν����� �����Ͱ��Ǽ̽��ϴ�. ��ε� �������ּ���!")); // ��ü �˸� 
	cm.gainItem(1142354, 1);
	cm.dispose();
	} else {
	cm.sendOk("#b���� ũ�ν�����#k�� �ǽð� �Ŀ� �� �������� ��� �� ��ǥ�� �Ʒ� �����۵��� ��ƿ�����.\r\n#e< �ʿ��� ��ǥ >#n\r\n#i4001083# #b#t4001083##k, #i4033311# #b#t4033311##k\r\n#i1122000# #b#t1122000##k, #i3994793# #b#t3994793##k\r\n#i4033312# #b#t4033312#, #i4033304# #b#t4033304##k\r\n#i4000659# #b#t4000659##k, #i1003719# #b#t1003719##k\r\n#i1003721# #b#t1003721##k, #i1003722# #b#t1003722##k\r\n#i1142353# #b#t1142353##k");
	cm.dispose();
	}




// �����̾� �����(Ư��)�̵�
	} else if (selection == 10 ) {
	if(cm.getMeso () >= 1000) {
	cm.warp(910180000);
        cm.getPlayer().send(MainPacketCreator.sendHint("#b�����̾� �����#k�� �����ϼ̽��ϴ�.\r\n��ſ� ��� �Ǽ���",300,20));
	cm.gainMeso(-1000)
        cm.dispose();
	} else {
	cm.sendOk("�޼Ұ� �����մϴ�");
	cm.dispose();
	}

// ��� ��ǳ�� ����
	} else if (selection == 20) {
        cm.warp(100030102);
	cm.sendOk("�κ��丮 �Һ�â�� ��Ÿâ�� Ȯ���غ�������.");
	cm.gainItem(2431404, 10);
	cm.gainItem(4310079, 20);
	cm.gainItem(4310058, -99);
	cm.dispose();
	}
//������ ��ȣ
	  		}
	}