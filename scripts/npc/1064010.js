/* ����ī

//	chat +="#Cgray#������ �����̾� ����ʹ� ��� �����Ͽ����ϴ�.#k";
 */

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
	var chat = "In charge of the special item drop-regional movement #bCesar#k A.";
	chat +="\r\n";
	//chat +="#r#e[]#k#n\r\n";
	//if (cm.haveItem(1003142)){
	//chat +="#b#e#L22#��ڰ� �ǰ� �ͽ��ϴ�.#n#l\r\n\r\n"
	chat +="#b#L01#Please describe the drop area.#l\r\n\r\n\r\n#k";
	chat +="#r#e           [����Ƽ�� �������]#k#n\r\n#b";
	chat +="#L2#������� #b����Ƽ��#k �� �����ϰڽ��ϴ�.#l\r\n";
	chat +="#L12#������� #b����Ƽ��#k ���� �ȳ���#l";
	chat +="\r\n\r\n\r\n";
	chat +="#r#e           [�������� �������]#k#n\r\n#b";
	chat +="#L3#������� #b��������#k �� �����ϰڽ��ϴ�.#l\r\n";
	chat +="#L13#������� #b��������#k ���� �ȳ���#l";
	chat +="\r\n\r\n\r\n";
	chat +="#r#e           [Royal Style ���� �������]#k#n\r\n#b";
	chat +="#L4#������� #bRoyal Style#k �� �����ϰڽ��ϴ�.#l\r\n";
	chat +="#L14#������� #bRoyal Style#k ���� �ȳ���#l";
	chat +="\r\n\r\n\r\n";
	chat +="#b#e                 [Ư�� �� ����޴�]#k#n\r\n#b";
	if (cm.haveItem(4032130,100)){
	chat +="#L10#Special Areas#r���������#k�� �̵��ϰ� �ͽ��ϴ�.#l\r\n";
	chat +="#L15#Special Areas #b���������#k ����� �ȳ���#l";
	chat +="\r\n\r\n\r\n";
	}else{
	chat +="#L59##Cgray##i4310027# #z4310027# 50�� ������ Ȱ��ȭ�˴ϴ�..#l";
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
        cm.dispose();
	var a ="Drop hunting areas�� �Ϻ� �������� �̿��ϱ����� �غ�� �ý����Դϴ�.\r\n";
	a +="Drop hunting areas�� �� 4������ �����Ǿ� �ֽ��ϴ�.";
	a +="�� �������� ����ϴ� �������� ���� �ٸ��ϴ�.";
	a +="��Ȥ ��������۵� ��ӵǱ⵵ The.";
		cm.sendOk(a);
// �Ϲ�ȸ�� ����� ����
	} else if (selection == 50) {
	var normal ="#e#b���� ���� ������ '#r �ǵ��� #k' �� ���� �����Դϴ�. #n#k\r\n\r\n";
	normal +="���� ���忡�� �������� ������ �̷��ϰ� �����ֽ��ϴ�.";
	normal +="��#e���� �����#n #r����#k �� ���Ե�� ���� ���Ұ��̴�.\r\n";
	normal +="���⼭ ���谡 ���ϴ°��� �ٷ� '#r �ǵ��� #k' ��� ����The.\r\n";
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
	cm.gainItem(4001760, -1);
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
	cm.sendOk("This item has been paid.");
	cm.dispose();
// Ȳ�ݻ� ��ǳ�� �Ұ�
	} else if (selection == 59) {
	cm.dispose();
	var h ="#b#z4032130##kYou can buy the sponsor-point hasilsu 5000p.";
	h +="The drop rate of monsters in this legendary coin five times. ";
	h +="This is the average experience of the monster in 3 billion cheon 7 ~ 8 3 eok cloth.";
	h +="#z4032130#It is not consumed. #b#z4032130##kIf you are in possession of a possible entry into the infiniteThe.";
		cm.sendOk(h);
// ������� �ȳ�
	} else if (selection == 12) {
	cm.dispose();
	var h ="#b< Maple Leaf drop-regional guidance >#k\r\n";
	h +="Name : However henchmen hip-hop cats\r\n";
	h +="Level : LV.30�̻� \r\n";
	h +="maxHP : 50000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="EXP : 100 \r\n";	
	h +="Drop items :#i4310080#Others etc.  \r\n";	
	cm.sendOk(h);
// ��߸�� �ȳ�
	} else if (selection == 13) {
	cm.dispose();
	var h ="#b< �������� ������� �ȳ� >#k\r\n";
	h +="Name : ���� ������\r\n";
	h +="Level : LV.100�̻� \r\n";
	h +="maxHP : 5000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="EXP : 100 \r\n";	
	h +="Drop items :#i4310088#Others etc.  \r\n";	
	cm.sendOk(h);
// �ϵ��� �ȳ�
	} else if (selection == 14) {
	cm.dispose();
	var h ="#b< Royal Style Drop area guides >#k\r\n";
	h +="name : Connie fallen frozen\r\n";
	h +="name : Skeletal fallen regon\r\n";
	h +="level : LV.130�̻� \r\n";
	h +="maxHP : 50000000 \r\n";
	h +="maxMP : 2000 \r\n";
	h +="Experience : 100 \r\n";	
	h +="Drop items :#i5680157#Others etc.  \r\n";	
	cm.sendOk(h);
// Ư����� �ȳ�
	} else if (selection == 15) {
	cm.dispose();
	var h ="#b< Drop all local guide >#k\r\n";
	h +="name : Hip-hop cats only executive\r\n";
	h +="level : LV.30�̻� \r\n";
	h +="maxHP : 100000 \r\n";
	h +="maxMP : 20000 \r\n";
	h +="Experience : 100 \r\n";	
	h +="Drop items :#i5680157##i4310088##i4310080#Drop rate twice that of!  \r\n";	
	cm.sendOk(h);
// �����̾� �����(����) �̵�
	} else if (selection == 2 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(910170000);
	cm.getPlayer().send(MainPacketCreator.sendHint("Drop hunting areas #bJustice#k You have to stand.\r\nHave fun hunting",300,20));
	cm.dispose();
	} else {
	cm.sendOk("Drop hunting areas #b<����Ƽ��>#k In order to demonstrate the #b#v3994789# One needs#kThe.\r\n#v3994789# silver #bConvenience store#kAvailable in..\r\nif, #v3994789#If you use both, #bConvenience storePurchase from#kplease do it.");
	cm.dispose();
	}
// �����̾� �����(�븻) �̵�
	} else if (selection == 3 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(252020300);
	cm.getPlayer().send(MainPacketCreator.sendHint("Drop hunting areas #bThe Bosco#k You have to stand.\r\nHave fun hunting",300,20));
        cm.dispose;
	} else {
	cm.sendOk("Drop hunting areas #b<��������>#k In order to demonstrate the #b#v3994789# One needs#kThe.\r\n#v3994789# silver #bConvenience store#kAvailable in..\r\nif, #v3994789#If you use both, #bConvenience storePurchase from#kplease do it.");
	cm.dispose();
	}
// �����̾� �����(�ϵ�) �̵�
	} else if (selection == 4 ) {
	if(cm.haveItem (3994789, 1)) {
	cm.gainItem(3994789, -1);
	cm.warp(272000400);
	cm.getPlayer().send(MainPacketCreator.sendHint("Drop hunting areas #bRoyal Style#k You have to stand.\r\nHave fun hunting",300,20));
        cm.dispose;
	} else {
	cm.sendOk("Drop hunting areas #b<Royal Style>#k In order to demonstrate the #b#v3994789# One needs#kThe.\r\n#v3994789# silver #bConvenience store#kAvailable in..\r\nif, #v3994789#If you use both, #bConvenience storePurchase from#kplease do it.");
	cm.dispose();
	}




// �����̾� �����(Ư��)�̵�
	} else if (selection == 10 ) {
	if(cm.getMeso () >= 1000) {
	cm.warp(910180000);
        cm.getPlayer().send(MainPacketCreator.sendHint("Special hunting  #bSpecial Areas#k You have to stand.\r\nHave fun hunting",300,20));
	cm.gainMeso(-1000)
        cm.dispose();
	} else {
	cm.sendOk("The lack Methodist");
	cm.dispose();
	}

// ��� ��ǳ�� ����
	} else if (selection == 20) {
	cm.gainItem(4032130, 100);
	cm.sendOk("The payment has been completed. #h #Ukon '-^");
	cm.dispose();
	}
//������ ��ȣ
	  		}
	}