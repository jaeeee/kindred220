/*
 * @Author ���̷���(v_ir_us) / �Ͽ�(ifhayo)
 */
var list1 = [1000088,1050380,1073084,1102848,1702620]; // Ű�׽ý� ��Ʈ
var list2 = [1004568,1050372,1073079,1102844,1702607]; // �������콺 ��Ʈ
var list3 = [1004541,1050370,1073075,1702595,1102836]; // Ƽ��Ƽ ��Ʈ
var list4 = [1004527,1050368,1070069,1102831,1702591]; // �ö��� ��Ʈ
var list5_1 = [1004530,1052942,1082657,1102685,1702505]; // ���� ��Ʈ
var list6 = [1004486,1050364,1073056,1102822,1702586]; // �� ��Ʈ
var list7 = [1004528,1052941,1072783,1102832,1102766]; // ���� ��Ʈ
var list8 = [1004192,1050335,1072943,1102706,1702528,1112949]; // ��ε� ��Ʈ
var list9 = [1004180,1042319,1062207,1082588,1072934,1702523]; // ȣ������ ������ ��Ʈ
var list10 = [1004158,1050322,1070061,1102688,1702512]; // ��Ƽ ���̾ ��Ʈ
var list11 = [1004117,1050318,1702501]; // �������� ��Ʈ
var list12 = [1000074,1050319,1070059,1102674,1702503]; // ������� ��ǳ ��Ʈ
var list13 = [1000090,1050384,1080009]; // ��� ��Ʈ
var weapons = [1702291,1702361,1702365,1702364,1702155,1702196,1702211,1702400,1702366,1702398,1702416,1702397,1702424,1702444,1702443,1702340,1702466,1702453,1702457,1702464,1702473,1702470,1702476,1702458,1702486,1702487,1702488,1702485,1702497,1702455,1702405,1702469]; // ���׷��̵� ����
var seraphim = [1702180,1702188,1702313,1702314,1702315,1702316]; // ���׷��̵� ������
var listname = ["","Ű�׽ý� ��Ʈ","�������콺 ��Ʈ","Ƽ��Ƽ ��Ʈ","�ö��� ��Ʈ","���� ��Ʈ","�� ��Ʈ","���� ��Ʈ","��ε� ��Ʈ","ȣ������ ������ ��Ʈ","��Ƽ ���̾ ��Ʈ","�������� ��Ʈ","������� ��ǳ ��Ʈ","��� ��Ʈ","���� ��Ʈ","�ɵ��� ��Ʈ","�ɾƾ�/��Ǫ�� ��� ��Ʈ","������ ��/��ũ���� ��Ʈ","�����ں���/�������� ��Ʈ","������ �䳢 ��Ʈ","�ĸ��� ��Ʈ","��ť���� ��Ʈ#r(��)#b","�Ʊ�� ��� ��Ʈ","������ ȫ�� ��Ʈ","����ƽ ��Ʈ","���� ��Ʈ","�ݹ�� ��Ʈ","�����Ǵ� ��Ʈ#r(��)#b","������ �߱� ��Ʈ","�ÿ��� �ٴ� ��Ʈ","���۽�Ÿ ��Ʈ","���� ���� ��Ʈ","����Ʈ �������� ��Ʈ","���̽� ��� ��Ʈ","������ ��Ʈ","���̵�/��Ŭ�� ��Ʈ","������ �� ��Ʈ","�������� ������ ��Ʈ","����Ʈ/���� �׷� ��Ʈ#r(��)#b","�׷���/��ũ �׷� ��Ʈ","�������� ��Ʈ","����� �ҾǸ� ��Ʈ","�Ͽ��� ������ ��Ʈ","�̱����� ���� ��Ʈ","���� ��Ʈ","Blavy ����/�ҿﺣ�� ��Ʈ","������ ���� ��Ʈ","����Ȧ�� ��Ʈ","Ű�׽ý� ��Ʈ","���׷��̵� ����","���׷��̵� ������"]
        
var seclist = [1112135,1112141,1112142,1112144,1112146,1112148,1112150,1112238,1112252,1112253,1112256,1112258,1112259,1112262];
var badge = [1182006,1182011,1182023,1182067,1182064,1182069];
var caps = [1004029,1003492,1003493,1003494,1003495,1003496,1003131,1003132,1003133,1003846,1003847,1003860,1003873,1003874,1003875,1003876,1003877,1003878,1004034,1003542,1003543,1003544,1003545,1003546,1003547,1004026,1004027,1004028,1003807,1003954,1003901];
var accessory_1 = [1022223,1022188,1022174,1022177,1022187,1022196];
var accessory_2 = [1012450,1012374,1012415,1012379,1012176,1012388,1012384];
var coats = [1042292,1042238,1042240,1042265,1042260,1042287,1042267,1042268,1042269,1042271,1042272,1042278,1042285,1042286,1042290,1042279,1042280,1042281,1042282]; // 1042287 / 1042285 ĿƮ(?)
var pants = [1062174,1062185,1062171,1062172,1062174,1062176,1062179];
var longcoats = [1050316,1051387,1052671,1050215,1051262,1052618,1052619];
var capes = [1102546,1102547,1102548,1102376,1102377,1102378,1102307,1102308,1102309,1102466,1102572,1102624,1102630,1102450,1102451,1102643,1102511,1102629,1102615,1102625];
var seclistname = ["","���� ���� ������","��ǳ�� ���� ������","���� ������","���׷��̵� ����","���׷��̵� �Ǽ�����","���׷��̵� ����","���׷��̵� ����","���׷��̵� �ѹ���","���׷��̵� ����"];

function start() {
	 status = -1;
   	mile = "(���� : #Cgray#1000#r + ��#Cgray#�Ŀ�����Ʈ#k)\r\n";
	showInfo();
}

function action(mode,type,selection) {
	if (mode == 1) {
	status++;
	}
	if (mode == 0 || mode == -1) {
	cm.dispose();
	return;
}
	if (status == 0) {
	selected = selection;
	if (selected == 999999) {
	showSecondShop();
    } else if (selected == 19) {
        cm.sendGetText("������ ��� �Ŀ�����Ʈ�� ��ȯ�Ͻðڽ��ϱ�?\r\n#r�� 1���� #k = #b10000�Ŀ�����Ʈ#k");
	} else if (selected == 1738){
	showExplanation();
	} else {
	itemid = selection;
	cm.sendYesNo("#b#i"+itemid+"# #z"+itemid+"# #r 1��#k�� #Cgray##e1000#n#r + @#k#e�Ŀ�����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	cost = 1000;
}
	} else if (status == 1) {
	if (selected == 999999) {
	cost = capes.toString().search(selection) % 8 == 0 ? 2000 : badge.toString().search(selection) % 8 == 0 ? 3000 : 1500;
	itemid = selection;
	cm.sendYesNo("#b#i"+itemid+"# #z"+itemid+"# #r 1��#k�� #Cgray##e"+cost+"#n#r + @#k#e�Ŀ�����Ʈ#n�� �����Ͻðڽ��ϱ�?");
    } else if (selected == 19) {
        meso = cm.getText();
        cm.sendYesNo("ȯ���� ���Ͻô� �����۰����� #b"+meso+" ���½��ϱ�?\r\n#kȯ�� �� #r"+meso*10000+ "�Ŀ���Ʈ#k�� ������ �� �ֽ��ϴ�.");
	} else {
        cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#r�� 1000 �Ŀ�����Ʈ#k = #b�ý��� ��100#k\r\n",1,1,cm.getPlayer().getRC());
}
	} else if (status == 2) {
	if (selected == 999999) {
	cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#r�� 1000 �Ŀ�����Ʈ#k = #b�ý��� ��100#k\r\n",1,1,cm.getPlayer().getRC());
        } else if (selected == 19) {
            if (cm.haveItem(4310027, meso)) {
                cm.gainItem(4310027, -1*meso);
                cm.gainRC(10000 * meso);
                sendHint("���� �Ŀ�����Ʈ�� ��ȯ�ϼ̽��ϴ�.",200,20);
                cm.dispose();
            } else {
		sendHint("������ �����մϴ�.",200,20);
                cm.dipsose();
                cm.gainItem(4310027, -1*meso);
                cm.gainRC(10000 * meso);
                sendHint("���� �Ŀ�����Ʈ�� ��ȯ�ϼ̽��ϴ�.",200,20);
                cm.dispose();
        }
        } else {
	if (selection % 1000 != 0) {
	sendHint("������ �Ŀ�����Ʈ ������ ���߾� �����ּ���.\r\n#r 1000 �Ŀ�����Ʈ#k = #b�ý��� ��100#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/2000 * 200;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = �ý��� ��"+allstat+" #k#n\r\n#r�� 100 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��10#k",1,1,cm.getPlayer().getRC());
}
}
	} else if (status == 3) {
	if (selected == 999999) {
	if (selection % 100 != 0) {
	sendHint("������ �Ŀ�����Ʈ ������ ���߾� �����ּ���.\r\n#r 1000 �Ŀ�����Ʈ#k = #b�ý��� ��100#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/2000 * 200;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = �ý��� ��"+allstat+" #k#n\r\n#r�� 100 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��10#k",1,1,cm.getPlayer().getRC());
}
	} else {
	if (selection % 100 != 0) {
	sendHint("������ �Ŀ�����Ʈ ������ ���߾� �����ּ���.\r\n#r 100 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��10#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/2000 * 200;
	atkprice = selection;
	cm.sendYesNo("#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = #r�ý��� ��"+allstat+" #Cgray##n\r\n#e#Cgray#�� "+atkprice+" �Ŀ�����Ʈ = #r���ݷ�/���� ��"+atk+" #k#n\r\n\r\n�� �� �������� ���� �Ͻðڽ��ϱ�?");
}
}
	} else if (status == 4) {
	if (selected == 999999) {
	if (selection % 500 != 0) {
	sendHint("������ �Ŀ�����Ʈ ������ ���߾� �����ּ���.\r\n#r 1000 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��100#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/2000 * 200;
	atkprice = selection;
	cm.sendYesNo("#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = #r�ý��� ��"+allstat+" #Cgray##n\r\n#e#Cgray#�� "+atkprice+" �Ŀ�����Ʈ = #r���ݷ�/���� ��"+atk+" #k#n\r\n\r\n�� �� �������� ���� �Ͻðڽ��ϱ�?");
	}
	} else {
	makeSponserItem(itemid,allstat,atk);
	finish(cost,itemid);
}
        } else if (status == 5) {
         makeSponserItem(itemid,allstat,atk);
        finish(cost,itemid);
}
}

function finish(cost,itemid) {
    cm.sendOk("#b"+cost+" �Ŀ�����Ʈ#k�� ����Ͽ� #b#i"+itemid+"# #z"+itemid+"##k��(��) �����Ͽ����ϴ�.");
	cm.playerMessage(cost+" �Ŀ�����Ʈ�� ����Ͽ� "+Packages.server.items.ItemInformation.getInstance().getName(itemid)+"��(��) �����Ͽ����ϴ�.");
	cm.gainRC(-cost);
	cm.dispose();
}

function makeSponserItem(itemid,allstat,atk) {
	var ii = Packages.server.items.ItemInformation.getInstance();
	var item = ii.getEquipById(itemid);
	item.setStr(allstat);
	item.setDex(allstat);
	item.setInt(allstat);
	item.setLuk(allstat);
	item.setWatk(atk);
	item.setMatk(atk);
	item.setOwner("[�Ŀ�������]");
	Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
}
        
function sendHint(message,x,y) {
	return cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.sendHint(message,x,y));
}

function showInfo() {
    var text = "#e#r<�Ŀ�����Ʈ ��>#n#k\r\n";
	//text += "#L1738##e#z2431872# ȹ�� ����� �ñ��ϼ���?#l#n\r\n\r\n";
	text += "���� #b#h #���� ���� �Ŀ�����Ʈ : #e#r"+cm.getRC()+"#n#k\r\n";
	text += "���� ������ �߰� ���Ǵ� �����ڿ��� �������ּ���.\r\n";
	//text += "#e#b[���� ��� ������]#k#n\r\n#L999999##fs 12##d���� �������� �Ѿ�� #k\r\n\r\n#l";
        //text += "#e#b[Ư�� ��ȯ ������]#k#n\r\n#L19##i4310027# #e���� ��ȯ�ϱ�#l (1:10000)\r\n\r\n\r\n";
        text += showItemList(1,0,list1,list1.length,true);        text += showItemList(2,0,list2,list2.length,true);        text += showItemList(3,0,list3,list3.length,true);        text += showItemList(4,0,list4,list4.length,true);
        text += showItemList(5,0,list5_1,list5_1.length,true);       
        text += showItemList(6,0,list6,list6.length,true);        
        text += showItemList(7,0,list7,list7.length,true);
        text += showItemList(8,0,list8,list8.length,true);        text += showItemList(9,0,list9,list9.length,true);        text += showItemList(10,0,list10,list10.length,true);        text += showItemList(11,0,list11,list11.length,true);
        text += showItemList(12,0,list12,list12.length,true);               
        text += showItemList(13,0,list13,list13.length,true);            
       
	cm.sendSimple(text);
}

function showSecondShop() {
	var i;
	var info = "(���� : #Cgray#1500~3000#r + ��#Cgray#�Ŀ�����Ʈ#k)\r\n";
	var text = "#d���� �������� ���ư����� ESC�� �����ּ���.#k\r\n\r\n";
	text += "#e#b["+seclistname[1]+"]#k#n " + info;
	for (i = 0; i < 7; text += "#L"+seclist[i]+"##i"+seclist[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[2]+"]#k#n " + info;	
	for (i = 7; i < 14; text += "#L"+seclist[i]+"##i"+seclist[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[3]+"]#k#n " + info;	
	for (i = 0; i < badge.length; text += "#L"+badge[i]+"##i"+badge[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[4]+"]#k#n " + info;	
	for (i = 0; i < 6; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 12; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 12; i < 18; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 18; i < 25; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 25; i < 31; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[5]+"]#k#n " + info;	
	for (i = 0; i < accessory_1.length; text += "#L"+accessory_1[i]+"##i"+accessory_1[i]+"##l",i++);	text += "\r\n";
	for (i = 0; i < accessory_2.length; text += "#L"+accessory_2[i]+"##i"+accessory_2[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[6]+"]#k#n " + info;
	for (i = 0; i < 6; text += "#L"+coats[i]+"##i"+coats[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 13; text += "#L"+coats[i]+"##i"+coats[i]+"##l",i++);	text += "\r\n";
	for (i = 13; i < 19; text += "#L"+coats[i]+"##i"+coats[i]+"##l",i++);	text += "\r\n";
	text += "\r\n\r\n\r\n#e#b["+seclistname[7]+"]#k#n " + info;
	for (i = 0; i < pants.length; text += "#L"+pants[i]+"##i"+pants[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[8]+"]#k#n " + info;
	for (i = 0; i < longcoats.length; text += "#L"+longcoats[i]+"##i"+longcoats[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[9]+"]#k#n " + info;
	for (i = 0; i < 6; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 12; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 12; i < 18; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 18; i < 20; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	cm.sendSimple(text);
}

function showExplanation() {
	cm.sendOk("#e#r<�Ű��� ���� : �Ŀ�����Ʈ��>#k : �Ŀ�����Ʈ�� ���ô�!~#n\r\n\r\n���� ������ ������ �������� �Ŀ�����Ʈ�� ȹ���մϴ�.\r\n���� �������̵� �������� ������ �� �ֽ��ϴ�.\r\n���� �̺�Ʈ�� ���� ȹ���� �� �ֽ��ϴ�.\r\n\r\n�� ������ Ȯ�����ֽð�, ������ ȹ���Ͻñ� �ٶ��ϴ�.");
	    cm.dispose();
}

function showItemList2(num,arr,mode) {
    var text = "#e#b["+listname[num]+"]#k#n " + mile;
	var num = mode == 1 ? 2 : 3;
    for (var i = 0; i < num; text += "#L"+arr[i]+"##i"+arr[i]+"##l",i++);
    text += "�� ";
    for (var ii = num; ii < 6; text += "#L"+arr[ii]+"##i"+arr[ii]+"##l",ii++);
    text += "\r\n\r\n\r\n";
    return text;
}

function showItemList(num,b,arr,length,showname) {
    var text = "";
    if (showname) {
    text += "#e#b["+listname[num]+"]#k#n " + mile;
    }
    for (var i = b; i < length; text += "#L"+arr[i]+"##i"+arr[i]+"##l",i++);
    text += "\r\n\r\n\r\n";
    return text;
}