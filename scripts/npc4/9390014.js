/*
 * @Author ���̷���(v_ir_us) / �Ͽ�(ifhayo)
 */
var list1 = [1022230,1004181,1052762,1702525,1003089,1072443,1082272,1003836,1003837,1050210,1051256,1003376,1102325,1051176,1050148,1050208,1051254,1050186,1051218,1050303,1051371,1702277,1052601,1072809,1051348,1072810,1052603,1072811,1003367,1102326,1702330,1050209,1051255,1003460,1052438,1702350]; // 
var list2 = []; // 

var list3 = []; // ������

var list4 = []; // �ξ� ���κ���
var list5_1 = []; // ������ 1��Ʈ + 1004177
var list5_2 = []; // ������ 2��Ʈ
var list6 = []; // �ñ׳ʽ� ��Ʈ
var list7 = []; // ��Ŀ�� ���� ��Ʈ
var list8 = []; // ���� ����� ��Ʈ
var list9 = []; // ���� ���Ǹ�
var list10 = []; // ���� ���� ��Ʈ
var list11 = []; // �ξ� ���̺�
var list12 = [1003636,1052536,1102491,1702375,1102708,1102707,1004197]; // ����� ��Ʈ
var list13_5 = [1042241,1062156,1702367,1042237,1062043,1702368]; // ��ũ3/��3 ���Ǿ� ��Ʈ
var list14_5 = [1050210,1051256,1702334,1050142,1051166,1702174]; // õ���� �ÿ� ��Ʈ3/ǻ�� �Ѻ� ��Ʈ3
var list15 = [1003217,1050188,1070006,1102290,1702306]; // �ɵ��� ��Ʈ
var list16_5 = [1001085,1051302,1071044,1000058,1050247,1070028]; // �ɾƾ�3/��Ǫ�� ���3
var list17_5 = [1002885,1051261,1001065,1051252,1071031,1702328]; // ������ ��2/��ũ����4
var list18_5 = [1001062,1051220,1081007,1000042,1050178,1070019]; // �����ں���3/�������� ��Ʈ3
var list19 = [1000062,1040192,1060180,1001089,1041194,1061203]; // ������ �䳢 ��Ʈ
var list20 = [1002824,1003083,1102349,1003855,1052245,1072438]; //�ĸ��� ��Ʈ
var list21 = [1003842,1051349,1072816,1082525,1102554]; // ��ť���� ��Ʈ
var list22 = [1003831,1052605,1072808,1082520,1702415]; // �Ʊ�� ���
var list23 = [1003503,1050232,1051282,1702352]; // ������ ȫ��
var list24 = [1052579,1072782,1082505,1702399]; // ����ƽ ��Ʈ
var list25 = [1003867,1042264,1060182,1061206,1072823,1082527]; // ���� ��Ʈ
var list26 = [1003865,1050284,1051350,1072821,1102564,1702423]; // �ݹ�� ��Ʈ
var list27 = [1003892,1051352,1072831,1102583,1702433]; // �����Ǵ� ��Ʈ
var list28 = [1003909,1050291,1051357,1072836,1102593,1702442]; // ������ �߱� ��Ʈ
var list29 = [1003920,1050293,1051359,1072843,1702446]; // �ÿ��� �ٴ� ��Ʈ
var list30 = [1003945,1050296,1051362,1072852,1102608,1702451]; // ���۽�Ÿ ��Ʈ
var list31 = [1003953,1050298,1051365,1072859,1102616,1102617]; // ���� ���� ��Ʈ
var list32 = [1003776,1052587,1082493,1702454]; // ����Ʈ �������� ��Ʈ
var list33 = [1003957,1003958,1050300,1051367,1072862,1102619]; // ���̽� ��� ��Ʈ
var list34 = [1003965,1052661,1082549,1702461]; // ������ ��Ʈ
var list35 = [1003971,1003972,1050302,1051369,1072868,1102621]; // ���̵� ��Ŭ�� ��Ʈ
var list36 = [1003955,1050299,1051366,1072860,1082555,1702456]; // ������ �� ��Ʈ
var list37 = [1003968,1052667,1082552,1072867,1702467]; // �������� ������ ��Ʈ
var list38 = [1003951,1051374,1072857,1003952,1051375,1072858]; // ����Ʈ/���� �׷� ��Ʈ
var list39 = [1004003,1004004,1052074,1082166,1072742]; // �׷���/��ũ �׷� ��Ʈ
var list40 = [1003998,1050304,1051372,1072876,1082565,1702468]; // �������� ��Ʈ
var list41 = [1004000,1052674,1072877,1082560,1702471]; // ����� �ҾǸ� ��Ʈ
var list42 = [1004002,1050305,1051373,1070057,1071074,1102632]; // �Ͽ��� ������ ��Ʈ
var list43 = [1002962,1002973,1050153,1051182,1072748,1102620]; // �̱����� ���� ��Ʈ
var list44 = [1000069,1001092,1050311,1051383,1072901,1102667]; // ���� ��Ʈ
var list45 = [1003853,1082524,1072817,1004081,1052655,1072856]; // blavy����3/�ҿﺣ��3 ��Ʈ
var list46 = [1000070,1001093,1050312,1051384,1082580,1072908]; // ������ ���� ��Ʈ
var list47 = [1000072,1001095,1050310,1051382,1072897,1102669]; // ����Ȧ�� ��Ʈ
var list48 = [1000074,1001097,1050319,1051390,1070059,1071076]; // ������� ��ǳ ��Ʈ
var list49 = [1004117,1050318,1051389,1702501]; // �������� ��Ʈ
var list50 = [1004158,1050322,1051392,1070061,1071078,1102688]; // ��Ƽ ���̾ ��Ʈ
var list51 = [1004139,1082587,1052754,1102685,1702505]; // ��ũ �Ǵ� �䳢 ��Ʈ
var list52 = [1004180,1042319,1062207,1082588,1072934,1702523]; // ȣ������ ������ ��Ʈ
/* 
����5
����5

����11
����1

����1 + �Ȱ�1
*/

var seraphim = [1702180,1702188,1702313,1702314,1702315,1702316]; // ���׷��̵� ������
var listname = ["","�߰� �����۵�"]
        
var seclist = [1112135,1112141,1112142,1112144,1112146,1112148,1112150,1112149.1112151,1112154,1112145,1112155,1112151,1112238,1112252,1112253,1112256,1112258,1112259,1112262,1112261,1112266,1112257,1112267,1112263];

var caps = [1004029,1003492,1003493,1003494,1003495,1003496,1003131,1003132,1003133,1003846,1003847,1003860,1003873,1003874,1003875,1003876,1003877,1003878,1004034,1003542,1003543,1003544,1003545,1003546,1003547,1004026,1004027,1004028,1003807,1003954,1003901, 1004120, 1004164,1004165,1004166,1004167,1004168,1004169,1004170,1004171,1004175, 1004176];

//1042294


var accessory = [1012450,1012374,1012415,1012379,1012176,1012384,10124681022223,1022188,1022174,1022177,1022196,1022229];

var coats = [1042292,1042238,1042240,1042265,1042260,1042287,1042267,1042268,1042269,1042271,1042272,1042278,1042285,1042286,1042290,1042279,1042280,1042281,1042282];

var pants = [1062174,1062185,1062171,1062172,1062174,1062176,1062179];

var longcoats = [1050316,1051387,1052671,1050215,1051262,1052618,1052619];

var capes = [1102546,1102547,1102548,1102376,1102377,1102378,1102307,1102308,1102309,1102466,1102572,1102624,1102630,1102450,1102451,1102643,1102511,1102629,1102615,1102625, 1102675,1102250,1102695,1102694,1102700,1102644,1102674,1102688];

var weapon = [1702291,1702361,1702365,1702364,1702155,1702196,1702211,1702400,1702366,1702398,1702416,1702397,1702424,1702444,1702443,1702340,1702466,1702453,1702457,1702464,1702473,1702470,1702476,1702458,1702486,1702487,1702488,1702485,1702497,1702455,1702405,1702469,1702503,1702502,1702512,1702480,1702521]

var seclistname = ["","���� ���� ������","��ǳ�� ���� ������","���׷��̵� ����","���׷��̵� �Ǽ�����","���׷��̵� ����","���׷��̵� ����","���׷��̵� �ѹ���","���׷��̵� ����","���׷��̵� ����"];

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
	if (selected == 999998) {
		cm.dispose();
		cm.openNpc(9390014);
	} else if (selected == 999999) {
	showSecondShop();
    } else if (selected == 19) {
        cm.sendGetNumber("�޼ҷ� ȯ���� ���Ͻô� �Ŀ�����Ʈ�� �Է����ּ���\r\n#r�� 1 �Ŀ�����Ʈ#k = #b20000 �޼�#k",1,1,cm.getPlayer().getRC());
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
        meso = selection;
        cm.sendYesNo("ȯ���� ���Ͻô� �Ŀ�����Ʈ�� #b"+meso+" �Ŀ�����Ʈ �½��ϱ�?\r\n#kȯ�� �� #r"+meso*20000+ "�޼�#k�� ������ �� �ֽ��ϴ�.");
        meso *= 20000;
	} else {
        cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#r�� 100 �Ŀ�����Ʈ#k = #b�ý��� ��6#k\r\n",0,0,cm.getPlayer().getRC());
}
	} else if (status == 2) {
	if (selected == 999999) {
	cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#r�� 100 �Ŀ�����Ʈ#k = #b�ý��� ��6#k\r\n",0,0,cm.getPlayer().getRC());
        } else if (selected == 19) {
	    if (cm.getRC() < (meso / 20000)) {
		cm.sendOk("�Ŀ�����Ʈ�� ���� �մϴ�.");
		cm.dispose();
		return;
	    }
            if (cm.getMeso() + meso > 9999999999) {
                sendHint("�޼Ұ� �ʹ� �����ϴ�.",200,20);
                cm.dipsose();
            } else {
                cm.gainMeso(meso);
                cm.gainRC(meso / 20000);
                sendHint("�Ŀ�����Ʈ�� �޼ҷ� ȯ���ϼ̽��ϴ�.",250,20);
                cm.dispose();
            }
        } else {
	if (selection % 100 != 0) {
	sendHint("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n#r�� 100 �Ŀ�����Ʈ#k = #b�ý��� ��6#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/100 * 6;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = �ý��� ��"+allstat+" #k#n\r\n#r�� 500 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��3#k",0,0,cm.getPlayer().getRC());
}
}
	} else if (status == 3) {
	if (selected == 999999) {
	if (selection % 100 != 0) {
	sendHint("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n#r�� 100 �Ŀ�����Ʈ#k = #b�ý��� ��6#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	allstat = selection/100 * 6;
	allstatprice = selection;
	cm.sendGetNumber("\r\n#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ#k\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = �ý��� ��"+allstat+" #k#n\r\n#r�� 500 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��3#k",0,0,cm.getPlayer().getRC());
}
	} else {
	if (selection % 500 != 0) {
	sendHint("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n#r�� 500 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��3#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/500 * 3;
	atkprice = selection;
	cm.sendYesNo("#e���� ������#n : #i"+itemid+"# #z"+itemid+"#\r\n#e������ ����#n : #b#e"+cost+"#n �Ŀ�����Ʈ\r\n\r\n#e#Cgray#�� "+allstatprice+" �Ŀ�����Ʈ = #r�ý��� ��"+allstat+" #Cgray##n\r\n#e#Cgray#�� "+atkprice+" �Ŀ�����Ʈ = #r���ݷ�/���� ��"+atk+" #k#n\r\n\r\n�� �� �������� ���� �Ͻðڽ��ϱ�?");
}
}
	} else if (status == 4) {
	if (selected == 999999) {
	if (selection % 500 != 0) {
	sendHint("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n#r�� 500 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��3#k",270,30);
	cm.dispose();
	} else {
	cost += selection;
	atk = selection/500 * 3;
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
	if (cm.getRC() < cost) {
		cm.sendOk("�Ŀ�����Ʈ�� ���� �մϴ�.");
		cm.dispose();
		return;
	}
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
	item.setOwner("[�Ŀ�����]");
	Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
}
        
function sendHint(message,x,y) {
	return cm.getPlayer().getClient().getSession().write(Packages.packet.creators.MainPacketCreator.sendHint(message,x,y));
}

function showInfo() {
    var text = "�ȳ��ϼ���? ���� ������ �Ҿƹ����� �Ĵ� ������ �ܿ� �ٸ� �������� �Ǹ��ϰ� �־��";
	text += "\r\n\r\n";
	text += "���� #b#h #���� ���� �Ŀ�����Ʈ : #e#r"+cm.getRC()+"#n#k\r\n";
	text += "���� ������ �߰� ���Ǵ� �����ڿ��� �������ּ���.\r\n";
        text += "\r\n";
        text += showItemList(1,0,list1,list1.length,true);        text += showItemList(2,0,list2,list2.length,true);        text += showItemList(3,0,list3,list3.length,true);        text += showItemList(4,0,list4,list4.length,true);
        text += showItemList(5,0,list5_1,list5_1.length,true);        text += showItemList(5,0,list5_2,list5_2.length,false);        text += showItemList(6,0,list6,list6.length,true);        text += showItemList(7,0,list7,list7.length,true);
        text += showItemList(8,0,list8,list8.length,true);        text += showItemList(9,0,list9,list9.length,true);        text += showItemList(10,0,list10,list10.length,true);        text += showItemList(11,0,list11,list11.length,true);
        text += showItemList(12,0,list12,list12.length,true);        text += showItemList2(13,list13_5,0);        text += showItemList2(14,list14_5,0);        text += showItemList(15,0,list15,list15.length,true);
        text += showItemList2(16,list16_5,0);        text += showItemList2(17,list17_5,1);        text += showItemList2(18,list18_5,0);	text += showItemList(19,0,list19,list19.length,true);
	text += showItemList(20,0,list20,list20.length,true);	text += showItemList(21,0,list21,list21.length,true);	text += showItemList(22,0,list22,list22.length,true);
	text += showItemList(23,0,list23,list23.length,true);	text += showItemList(24,0,list24,list24.length,true);	text += showItemList(25,0,list25,list25.length,true);	
	text += showItemList(26,0,list26,list26.length,true);	text += showItemList(27,0,list27,list27.length,true);	text += showItemList(28,0,list28,list28.length,true);
	text += showItemList(29,0,list29,list29.length,true);	text += showItemList(30,0,list30,list30.length,true);	text += showItemList(31,0,list31,list31.length,true);
	text += showItemList(32,0,list32,list32.length,true);	text += showItemList(33,0,list33,list33.length,true);	text += showItemList(34,0,list34,list34.length,true);
	text += showItemList(35,0,list35,list35.length,true);	text += showItemList(36,0,list36,list36.length,true);	text += showItemList(37,0,list37,list37.length,true);
	text += showItemList(38,0,list38,list38.length,true);	text += showItemList(39,0,list39,list39.length,true);	text += showItemList(40,0,list40,list40.length,true);
	text += showItemList(41,0,list41,list41.length,true);	text += showItemList(42,0,list42,list42.length,true);	text += showItemList(43,0,list43,list43.length,true);
	text += showItemList(44,0,list44,list44.length,true);	text += showItemList2(45,list45,0);	text += showItemList(46,0,list46,list46.length,true);
	text += showItemList(47,0,list47,list47.length,true);	        
	text += showItemList(48,0,list48,list48.length,true);	        
	text += showItemList(49,0,list49,list49.length,true);
	text += showItemList(50,0,list50,list50.length,true);
	text += showItemList(51,0,list51,list51.length,true);
	text += showItemList(52,0,list52,list52.length,true);
	cm.sendSimple(text);
}

function showSecondShop() {
	var i;
	var info = "(���� : #Cgray#1500~3000#r + ��#Cgray#�Ŀ�����Ʈ#k)\r\n";
	var text = "#d���� �������� ���ư����� ESC�� �����ּ���.#k\r\n\r\n";
	text += "#e#b["+seclistname[1]+"]#k#n " + info;
	for (i = 0; i < 12; text += "#L"+seclist[i]+"##i"+seclist[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[2]+"]#k#n " + info;	
	for (i = 12; i < 24; text += "#L"+seclist[i]+"##i"+seclist[i]+"##l",i++);
	text += "\r\n\r\n\r\n#e#b["+seclistname[4]+"]#k#n " + info;	
	for (i = 0; i < 6; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 12; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 12; i < 18; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 18; i < 25; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 25; i < 31; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 31; i < 37; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";
	for (i = 37; i < 42; text += "#L"+caps[i]+"##i"+caps[i]+"##l",i++);	text += "\r\n";

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
	for (i = 18; i < 24; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";
	for (i = 24; i < 27; text += "#L"+capes[i]+"##i"+capes[i]+"##l",i++);	text += "\r\n";


	text += "\r\n\r\n\r\n#e#b["+seclistname[10]+"]#k#n " + info;
	for (i = 0; i < 6; text += "#L"+weapon[i]+"##i"+weapon[i]+"##l",i++);	text += "\r\n";
	for (i = 6; i < 12; text += "#L"+weapon[i]+"##i"+weapon[i]+"##l",i++);	text += "\r\n";
	for (i = 12; i < 18; text += "#L"+weapon[i]+"##i"+weapon[i]+"##l",i++);	text += "\r\n";
	for (i = 18; i < 24; text += "#L"+weapon[i]+"##i"+weapon[i]+"##l",i++);	text += "\r\n";
	for (i = 24; i < 30; text += "#L"+weapon[i]+"##i"+weapon[i]+"##l",i++);	text += "\r\n";
	for (i = 30; i < 36; text += "#L"+weapon[i]+"##i"+weapon[i]+"##l",i++);	text += "\r\n";

	cm.sendSimple(text);
}

function showExplanation() {
	cm.sendOk("#e#r<�Ű��� ���� : ��������>#k : �Ŀ�����Ʈ�� ���ô�!~#n\r\n\r\n���� ������ ������ �������� �Ŀ�����Ʈ�� ȹ���մϴ�.\r\n���� �������̵� �������� ������ �� �ֽ��ϴ�.\r\n���� �̺�Ʈ�� ���� ȹ���� �� �ֽ��ϴ�.\r\n\r\n�� ������ Ȯ�����ֽð�, ������ ȹ���Ͻñ� �ٶ��ϴ�.");
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