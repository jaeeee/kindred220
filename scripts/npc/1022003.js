/*
�Ŀ� ��ũ��Ʈ
*/

var status = -1;

var cost;
var item;
var quantity;
var name;
var allstat;
var damage;
var upgrade;
var equip = 0;
var cost2;
var cost3;
var cost4;
var text1;
var text2;
var meso;
var buymeso;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
 
        var text = "#e#r[�Ŀ�����Ʈ ��������]#n#k\r\n";
	text += "���� #b#h #���� #r"+cm.getRC()+"#b ����Ʈ�� �����ϰ� �ֽ��ϴ�.#k\r\n";
	text += "���� #r�Ŀ�����Ʈ ��2�� ���� �̺�Ʈ�� �������Դϴ�.#k\r\n";
	text += "���� ������ �߰� ���Ǵ� �����ڿ��� �������ּ���.";
	text += "\r\n\r\n\r\n"

	text += "#e#b[Ư�� ��ȯ ������]#k#n\r\n";
	text += "#L19##i2028048# �޼� (1:80000)#l����"
	text += "#L155##i1522095# ��Į������#l\r\n"
	text += "#L1000##i3700010# [#r1��, #Cgray#30000��#k]#l��#e��#n";
	text += "#L2##i4001126# [#r4000��, #Cgray#2000��#k]\r\n";
	text += "#L15##i4310034# [#r10��, #Cgray#2500��#k]����  ";
	text += "#L16##i4310058# [#r1��, #Cgray#6000��#k]#l";
	text +="\r\n\r\n\r\n"

	text += "#e#b[�Һ� ������]#k#n\r\n";
	text += "#L20##i2430130# - [#r1��, #Cgray#1500��#k]����";
	text += "#L23##i2049129# - [#r5��, #Cgray#3000��#k]#l";
	text += "\r\n\r\n\r\n"

/*
	text += "#L150# #i2048712# (1000��)";
	text += "#L151# #i2048701# (1300��)";
	text += "#L152# #i2048702# (1600��)\r\n";
	text += "#L153# #i2048703# (1800��)";
	text += "#L154# #i2048704# (2000��)\r\n\r\n";
*/

	text += "#e#b[�Ϲ� ��� ������]#k#n\r\n";
	text += "#L200##i1112586# - [#Cgray#2500#r + ��#Cgray#��#k]����";
	text += "#L201##i1112663# - [#Cgray#3500#r + ��#Cgray#��#k]\r\n";
	text += "#L66##i1142558# - [#Cgray#3500��#k] ���� #e�� #n";
	text += "#L24##i1142593# - [#Cgray#5000��#k]#l";
	text +=" \r\n\r\n\r\n";

	text += "#e#b[���� ������ ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L3##i1002186#";
	text += "#L999##i1012289#";
	text += "#L7##i1032024#";
	text += "#L8##i1022079#";
	text += "#L5##i1072153#";
	text += "#L6##i1082102#";
	text += "#L4##i1102039##l";
	text += "\r\n\r\n\r\n";
/*
	text += "\r\n#l#e<�ؽ� ��Ʈ>#n\r\n";
	text += "#L127# #i1000021# (�⺻ 1200(+a)��)����";
	text += "#L128# #i1050114# (�⺻ 1500(+a)��)\r\n";
	text += "#L129# #i1010004# (�⺻ 1200(+a)��)����";
	text += "#L130# #i1000022# (�⺻ 1200(+a)��)\r\n";
	text += "#L131# #i1050115# (�⺻ 1500(+a)��)����";
	text += "#L132# #i1010005# (�⺻ 1200(+a)��)\r\n";
	text += "#L133# #i1001028# (�⺻ 1200(+a)��)����";
	text += "#L134# #i1051115# (�⺻ 1500(+a)��)\r\n";
	text += "#L135# #i1071010# (�⺻ 1200(+a)��)\r\n\r\n";
*/

	text += "#e#b[��Ĳ�� ���κ��� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L68##i1002785#";
	text += "#L69##i1022068#";
	text += "#L70##i1042142#";
	text += "#L71##i1062093#";
	text += "#L41##i1702155#";
	text += "#L1001##i1112904##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�ξ� ���κ��� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L97##i1003109#";
	text += "#L98##i1052275#";
	text += "#L99##i1072448#";
	text += "#L100##i1102245#";
	text += "#L101##i1702275##l";
	text += "#L2100##i5010101##l";
	text += "\r\n\r\n\r\n";
	
	text += "#e#b[������ ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L64##i1003398#";
	text += "#L61##i1003399#";
	text += "#L62##i1003400#";
	text += "#L63##i1003401#";
	text += "#L65##i1003402#\r\n";
	text += "#L27##i1702269#";
	text += "#L28##i1702270#";
	text += "#L29##i1702271#";
	text += "#L30##i1702272#";
	text += "#L31##i1702273##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�ñ׳ʽ� ��Ʈ#r(��)#b]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2000##i1001075#";
	text += "#L2001##i1051277#";
	text += "#L2003##i1071037#";
	text += "#L2004##i1102356#";
	text += "#L2005##i1702347##l";
	text += "\r\n\r\n\r\n"

	text += "#e#b[��Ŀ�� ���� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2037##i1003422#";
	text += "#L2038##i1050226#";
	text += "#L2039##i1070024#";
	text += "#L2040##i1051276#";
	text += "#L2041##i1071036#";
	text += "#L2042##i1102355##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[���� ����� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L56##i1000050##l";
	text += "#L72##i1050227##l";
	text += "#L58##i1001076##l";
	text += "#L73##i1051278##l";
	text += "#L78##i1702348##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[���� ���Ǹ� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L55##i1000051#";
	text += "#L74##i1050228#";
	text += "#L57##i1001077#";
	text += "#L75##i1051279#";
	text += "#L76##i1072646#";
	text += "#L77##i1102367##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[���� ����/�� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L79##i1002943#";
	text += "#L80##i1050152#";
	text += "#L81##i1051180#";
	text += "#L42##i1702217##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�ξ� ���̺� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L102##i1002995#";
	text += "#L103##i1052209#";
	text += "#L104##i1051192#";
	text += "#L105##i1702289##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[����� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L82##i1003636#";
	text += "#L83##i1052536#";
	text += "#L84##i1102491#";
	text += "#L43##i1702375##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[��ũ/�� ���Ǿ� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L85##i1042241#";
	text += "#L86##i1062156#";
	text += "#L45##i1702367##l��  ";
	text += "#L87##i1042237#";
	text += "#L88##i1062043#";
//	text += "#L54##i1102453#";
	text += "#L46##i1702368##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[õ���� �ÿ�/ǻ�� �Ѻ� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
//	text += "#L89##i1003376#";
	text += "#L90##i1050210#";
	text += "#L91##i1051256#";
	text += "#L92##i1702334##l#e�� #n";
	text += "#L112##i1050142#";
	text += "#L113##i1051166#";
	text += "#L114##i1702174##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�ɵ��� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L93##i1003217#";
	text += "#L94##i1050188#";
	text += "#L95##i1070006#";
	text += "#L14##i1102290#";
	text += "#L96##i1702306##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�ɾƾ�/��Ǫ�� ��� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L107##i1001085#";
	text += "#L109##i1051302#";
	text += "#L111##i1071044##l�� ";
	text += "#L106##i1000058#";
	text += "#L108##i1050247#";
	text += "#L110##i1070028##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[������ ��/��ũ���� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L117##i1002885#";
	text += "#L118##i1051261##l��";
	text += "#L156##i1001065#";
	text += "#L157##i1051252#";
	text += "#L158##i1071031#";
	text += "#L51##i1702328##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�����ں���/�������� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L119##i1001062#";
	text += "#L120##i1051220#";
	text += "#L121##i1081007##l��";
	text += "#L123##i1000042#";
	text += "#L124##i1050178#";
	text += "#L125##i1070019##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[������ �䳢 ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2010##i1000062#";
	text += "#L2011##i1040192#";
	text += "#L2012##i1060180##l��  ";
	text += "#L2013##i1001089#";
	text += "#L2014##i1041194#";
	text += "#L2015##i1061203##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�ĸ��� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2016##i1002824#";
	text += "#L2017##i1003083#";
	text += "#L2018##i1102349##l#e�� #n";
	text += "#L2019##i1003855#";
	text += "#L2020##i1052245#";
	text += "#L2021##i1072438##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[��ť���� ��Ʈ#r(��)#b]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2022##i1003842#";
	text += "#L2023##i1051349#";
	text += "#L2024##i1072816#";
	text += "#L2025##i1082525#";
	text += "#L2026##i1102554##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[�Ʊ�� ��� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2027##i1003831#";
	text += "#L2028##i1052605#";
	text += "#L2029##i1072808#";
	text += "#L2030##i1082520#";
	text += "#L52##i1702415##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[������ ȫ�� ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2031##i1003503#";
	text += "#L2032##i1050232#";
	text += "#L2033##i1051282#";
	text += "#L2034##i1702352##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[����ƽ ��Ʈ]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L2035##i1052579#";
	text += "#L2036##i1072782#";
	text += "#L2099##i1082505#";
	text += "#L53##i1702399##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[���׷��̵� ����]#k#n (���� : #Cgray#2000#r + ��#Cgray#��#k)\r\n";
	text += "#L37##i1102546#";
	text += "#L38##i1102547#";
	text += "#L39##i1102548#";
	text += "#L11##i1102376#";
	text += "#L12##i1102377#";
	text += "#L13##i1102378##l\r\n";
	text += "#L17##i1102307#";
	text += "#L18##i1102308#";
	text += "#L40##i1102309##l#e #n";
	text += "#L10##i1102466#";
	text += "#L25##i1102450#";
	text += "#L26##i1102451##l";
	text += "\r\n\r\n\r\n";

/*
	text += "#L9##i1102511#";
	text += "#L59##i1102385#";
	text += "#L60##i1102386#";
*/
/*
	text += "\r\n#l#e<����>#n\r\n\r\n";
	text += "#L21# #i3010519# 1��(400��)����������";
	text += "#L22# #i3010520# 1��(400��)\r\n\r\n";
*/
	text += "#e#b[���׷��̵� ����]#k#n (���� : #Cgray#1000#r + ��#Cgray#��#k)\r\n";
	text += "#L122##i1702291#";
	text += "#L32##i1702361#";
	text += "#L33##i1702365#";
	text += "#L50##i1702364#";
	text += "#L41##i1702155#"; // ���κ��콺Ÿ
	text += "#L49##i1702196#\r\n";
	text += "#L67##i1702211#";
	text += "#L35##i1702400#";
	text += "#L34##i1702366#";
	text += "#L48##i1702398#";
	text += "#L36##i1702416#";
	text += "#L47##i1702397##l"; // �̸���

        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 2){
	    item = 4001126;
	    cost = 2000;
	    quantity = 4000;
	    name = "��ǳ��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2100){
	    item = 5010101;
	    cost = 1000;
	    quantity = 1;
	    name = "���κ��� ��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 1000){
	    item = 3700010;
	    cost = 30000;
	    quantity = 1;
	    name = "���� ������ ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 999) {
	    item = 1012289;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 100;
	    name = "���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 1000;
	    name = "���� �Ź�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �尩";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �Ͱ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �Ȱ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 1001) {
	    item = 1112904;
	    quantity = 1;
	    cost = 1000;
	    name = "���κ��� ��Ÿ ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2000) {
	    item = 1001075;
	    quantity = 1;
	    cost = 1000;
	    name = "�������� ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2001) {
	    item = 1051277;
	    quantity = 1;
	    cost = 1000;
	    name = "�ñ׳ʽ� �巹��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2003) {
	    item = 1071037;
	    quantity = 1;
	    cost = 1000;
	    name = "�ñ׳ʽ� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2004) {
	    item = 1102356;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ���޶���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2005) {
	    item = 1702347;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �÷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2037) {
	    item = 1003422;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���̺� �丣�ҳ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2038) {
	    item = 1050226;
	    quantity = 1;
	    cost = 1000;
	    name = "���丮�� ���� ��Ʈ(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2040) {
	    item = 1051276;
	    quantity = 1;
	    cost = 1000;
	    name = "���丮�� ���� ��Ʈ(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2039) {
	    item = 1070024;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���� ����(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2041) {
	    item = 1071036;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���� ����(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2042) {
	    item = 1102355;
	    quantity = 1;
	    cost = 1000;
	    name = "��� �����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2010) {
	    item = 1000062;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2011) {
	    item = 1040192;
	    quantity = 1;
	    cost = 1000;
	    name = "�׸� �䳢Ƽ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2012) {
	    item = 1060180;
	    quantity = 1;
	    cost = 1000;
	    name = "�ָ� ȣ�ڹ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2013) {
	    item = 1001089;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2014) {
	    item = 1041194;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ �䳢Ƽ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2015) {
	    item = 1061203;
	    quantity = 1;
	    cost = 1000;
	    name = "�ָ� ȣ��ġ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2016) {
	    item = 1002824;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ��������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2017) {
	    item = 1003083;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �̽�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2018) {
	    item = 1102349;
	    quantity = 1;
	    cost = 1000;
	    name = "��������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2019) {
	    item = 1003855;
	    quantity = 1;
	    cost = 1000;
	    name = "�� ���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2020) {
	    item = 1052245;
	    quantity = 1;
	    cost = 1000;
	    name = "�ٻ�� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2021) {
	    item = 1072438;
	    quantity = 1;
	    cost = 1000;
	    name = "�ٻ�� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2022) {
	    item = 1003842;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ĸ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2023) {
	    item = 1051349;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ���ǽ�(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2024) {
	    item = 1072816;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2025) {
	    item = 1082525;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� �۷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2026) {
	    item = 1102554;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2027) {
	    item = 1003831;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� �Ӹ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2028) {
	    item = 1052605;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� �������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2029) {
	    item = 1072808;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2030) {
	    item = 1082520;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� ���尩";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2031) {
	    item = 1003503;
	    quantity = 1;
	    cost = 1000;
	    name = "�ٸ����� Ƽ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2032) {
	    item = 1050232;
	    quantity = 1;
	    cost = 1000;
	    name = "ĳ���� ƼŸ��(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2033) {
	    item = 1051282;
	    quantity = 1;
	    cost = 1000;
	    name = "����� ƼŸ��(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2034) {
	    item = 1702352;
	    quantity = 1;
	    cost = 1000;
	    name = "������� Ƽ��Ǭ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2035) {
	    item = 1052579;
	    quantity = 1;
	    cost = 1000;
	    name = "����ƽ �׿� ��Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2036) {
	    item = 1072782;
	    quantity = 1;
	    cost = 1000;
	    name = "����ƽ �׿� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2099) {
	    item = 1082505;
	    quantity = 1;
	    cost = 1000;
	    name = "����ƽ �׿� �۷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");






	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 1000;
	    name = "�����ɷ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 2000;
	    name = "�����Ÿ�� �ƿ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 11) {
	    item = 1102376;                //140
	    quantity = 1;
	    cost = 2000;
	    name = "������ �÷ζ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 12) {
	    item = 1102377;
	    quantity = 1;
	    cost = 2000;
	    name = "������ �̽�ƽ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 13) {
	    item = 1102378;
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��ε�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 1000;
	    name = "�ɺ�� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 15) {
	    item = 4310034;
	    quantity = 10;
	    cost = 2500;
	    name = "����Ƽ�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 6000;
	    name = "�ű׳ʽ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 2000;
	    name = "��Ű���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 2000;
	    name = "������Ʈ�� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 19) {
	    buymeso =1;
	    cm.sendGetText("�޼ҷ� ȯ���� ���Ͻô� �Ŀ�����Ʈ�� �Է����ּ���\r\n\r\n#r�� 1 �Ŀ�����Ʈ#k = #b80000�޼�#k");
	}else if (sel == 20) {
	    item = 2430130;
	    quantity = 1;
	    cost = 1500;
	    name = "���������� ������ ĸ��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��Ƽ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3000;                 //80
	    quantity = 5;
	    name = "������ ȥ�� �ֹ��� 50%";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 24) {
	    item = 1142593;
	    quantity = 1;
	    cost = 5000;
	    name = "�ڡ�13���� ���ڡ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 25) {
	    item = 1102450;             //180
	    quantity = 1;
	    cost = 2000;
	    name = "������ũ �ƿ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 2000;
	    name = "��ũ�Ͻ� �ƿ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 27) {
	    item = 1702269;
	    quantity = 1;
	    cost = 1000;
	    name = "�������� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 28) {
	    item = 1702270;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 29) {
	    item = 1702271;
	    quantity = 1;
	    cost = 1000;
	    name = "�̸����� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 30) {
	    item = 1702272;
	    quantity = 1;
	    cost = 1000;
	    name = "��ī��Ʈ�� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 31) {
	    item = 1702273;
	    quantity = 1;
	    cost = 1000;
	    name = "ȣũ������ ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 32) {
	    item = 1702361;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ȣũ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 33) {
	    item = 1702365;
	    quantity = 1;
	    cost = 1000;
	    name = "�����̴� �簣����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 34) {
	    item = 1702366;
	    quantity = 1;
	    cost = 1000;
	    name = "�õ� ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 35) {
	    item = 1702400;
	    quantity = 1;
	    cost = 1000;
	    name = "������ �䳢����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 36) {
	    item = 1702416;
	    quantity = 1;
	    cost = 1000;
	    name = "����� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 37) {
	    item = 1102546;
	    quantity = 1;
	    cost = 2000;
	    name = "�Ķ����� ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 38) {
	    item = 1102547;
	    quantity = 1;
	    cost = 2000;
	    name = "�ڼ����� ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 39) {
	    item = 1102548;
	    quantity = 1;
	    cost = 2000;
	    name = "�ٻ��� ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 40) {
	    item = 1102309;
	    quantity = 1;
	    cost = 2000;
	    name = "�ߴ����� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 41) {
	    item = 1702155;
	    quantity = 1;
	    cost = 1000;
	    name = "���κ��� ��Ÿ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 42) {
	    item = 1702217;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ű Ʃ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 43) {
	    item = 1702375;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ʋ��Ƽ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 44) {
	    item = 1702336;
	    quantity = 1;
	    cost = 1000;
	    name = "�ε� ���佺Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 45) {
	    item = 1702367;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���Ǿ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 46) {
	    item = 1702368;
	    quantity = 1;
	    cost = 1000;
	    name = "���̸��� ���Ǿ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 47) {
	    item = 1702397;
	    quantity = 1;
	    cost = 1000;
	    name = "�ƷվƷ� �̸���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 48) {
	    item = 1702398;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 53) {
	    item = 1702399;
	    quantity = 1;
	    cost = 1000;
	    name = "�׿� ����Ʈ ���̹�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 50) {
	    item = 1702364;
	    quantity = 1;
	    cost = 1000;
	    name = "�巡�� �����̺�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 51) {
	    item = 1702328;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� �ֻ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 52) {
	    item = 1702415;
	    quantity = 1;
	    cost = 1000;
	    name = "�޲ٴ� ���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 49) {
	    item = 1702196;
	    quantity = 1;
	    cost = 1000;
	    name = "���ƶ� �Ķ���!";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 55) {
	    item = 1000051;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���Ǹ� ��� (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 56) {
	    item = 1000050;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ʈ ����� ũ����Ż (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 57) {
	    item = 1001077;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���Ǹ� ��� (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 58) {
	    item = 1001076;
	    quantity = 1;
	    cost = 1000;
	    name = "ü�� ����� ũ����Ż (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 61) {
	    item = 1003399;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 62) {
	    item = 1003400;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ �̸���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 63) {
	    item = 1003401;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ ��ī��Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 64) {
	    item = 1003398;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 65) {
	    item = 1003402;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ ȣũ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 59) {
	    item = 1102385;
	    quantity = 1;
	    cost = 1000;
	    name = "�轺 �ɷ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 60) {
	    item = 1102386;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �ɷ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 54) {
	    item = 1102453;
	    quantity = 1;
	    cost = 2000;
	    name = "����̾��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 66) {
	    item = 1142558;
	    quantity = 1;
	    cost = 3100;
	    name = "�𸮹�Ƽ�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 67) {
	    item = 1702211;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���ڵ� ��ƽ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 68) {
	    item = 1002785;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���κ��� ��ĸ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 69) {
	    item = 1022068;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "ȭ��Ʈ ���̵�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 70) {
	    item = 1042142;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���κ��� ž";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 71) {
	    item = 1062093;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�׷��� �׸� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 72) {
	    item = 1050227;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ʈ ����� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 73) {
	    item = 1051278;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "ü�� ����� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 74) {
	    item = 1050228;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ��Ʈ (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 75) {
	    item = 1051279;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ��Ʈ (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 76) {
	    item = 1072646;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 77) {
	    item = 1102367;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 78) {
	    item = 1702348;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "����� �÷���ũ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 79) {
	    item = 1002943;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���Ϸ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 80) {
	    item = 1050152;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���Ϸ��� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 81) {
	    item = 1051180;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���Ϸ��� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 82) {
	    item = 1003636;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "����ƽ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 83) {
	    item = 1052536;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ��Ÿ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 84) {
	    item = 1102491;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ϵ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 85) {
	    item = 1042241;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ö��� ���̿÷�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 86) {
	    item = 1062156;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "������ũ ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 87) {
	    item = 1042237;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��� ���Ϸ� ����Ʈ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 88) {
	    item = 1062043;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�� ��Ÿ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 89) {
	    item = 1003376;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�޸𸮾� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 90) {
	    item = 1050210;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ϴ��ϴ� �ػ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 91) {
	    item = 1051256;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ϴ��ϴ� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 92) {
	    item = 1702334;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "ũ����Ż ��Ÿ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 93) {
	    item = 1003217;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɵ��� �Ӹ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 94) {
	    item = 1050188;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɵ��� �Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 95) {
	    item = 1070006;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� �Ź�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 96) {
	    item = 1702306;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɹٶ� ���ʼ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 97) {
	    item = 1003109;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� �ĵ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 98) {
	    item = 1052275;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� ¤�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 99) {
	    item = 1072448;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 100) {
	    item = 1102245;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ش� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 101) {
	    item = 1702275;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 102) {
	    item = 1002995;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���̺� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 103) {
	    item = 1052209;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���̺� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 104) {
	    item = 1051192;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 105) {
	    item = 1702289;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���� ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 106) {
	    item = 1000058;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ǫ�� ��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 107) {
	    item = 1001085;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ�ȫ ����Ӹ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 108) {
	    item = 1050247;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ǫ�� ��Ǻ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 109) {
	    item = 1051302;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ�ȫ �ƾ��Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 110) {
	    item = 1070028;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ǫ�� ��ǲɽ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 111) {
	    item = 1071044;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ�ȫ �ƾ��ɽ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 112) {
	    item = 1050142;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ĵ� ǻ�� �Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 113) {
	    item = 1051166;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�巹�� ǻ�� �Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 114) {
	    item = 1702174;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 115) {
	    item = 1002878;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ������ ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 116) {
	    item = 1052178;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ��Ʈ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 117) {
	    item = 1002885;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ũ �巹�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 118) {
	    item = 1051261;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�޸��� ��Ÿ��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 119) {
	    item = 1001062;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 120) {
	    item = 1051220;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� �巹��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 121) {
	    item = 1081007;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� �尩";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 122) {
	    item = 1702291;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� ��ä";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 123) {
	    item = 1000042;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 124) {
	    item = 1050178;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 125) {
	    item = 1070019;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 126) {
	    item = 1100001;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 127) {
	    item = 1000021;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �庸�� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 128) {
	    item = 1050114;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �庸�� �ǻ� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 129) {
	    item = 1010004;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �庸�� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 130) {
	    item = 1000022;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� ���� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 131) {
	    item = 1050115;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� ���� �ǻ� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 132) {
	    item = 1010005;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� ���� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 133) {
	    item = 1001028;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 134) {
	    item = 1051115;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� �ǻ� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 135) {
	    item = 1071010;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� �Ź� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 200) {
	    item = 1112586;
	    quantity = 1;
	    cost = 2500;
	    equip = 1;
	    name = "��ũ ������ ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 201) {
	    item = 1112663;
	    quantity = 1;
	    cost = 3500;
	    equip = 1;
	    name = "ȭ��Ʈ ������ ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 150) {
	    item = 2048712;
	    quantity = 1;
	    cost = 1000;
	    name = "ȯ���� �Ҳ� ����100";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 151) {
	    item = 2048701;
	    quantity = 1;
	    cost = 1000;
	    name = "ȯ���� �Ҳ� ����110";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 152) {
	    item = 2048702;
	    quantity = 1;
	    cost = 1600;
	    name = "ȯ���� �Ҳ� ����120";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 153) {
	    item = 2048703;
	    quantity = 1;
	    cost = 1800;
	    name = "ȯ���� �Ҳ� ����130";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 154) {
	    item = 2048704;
	    quantity = 1;
	    cost = 2000;
	    name = "ȯ���� �Ҳ� ����140";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 155) {
	    cm.dispose();
	    cm.openNpc(2182002);
	}else if (sel == 156) {
	    item = 1001065;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ũ���� �� ĸ (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 157) {
	    item = 1051252;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ũ���� ������ (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 158) {
	    item = 1071031;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ũ���� �� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"��#k�� #Cgray##e"+cost+"#n#r + ��#k#e����Ʈ#n�� �����Ͻðڽ��ϱ�?");
	}
    }else if (status == 2){
if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("ȯ���� ���Ͻô� �Ŀ�����Ʈ�� #b"+meso+"����Ʈ �½��ϱ�?\r\nȯ�� �� #r"+meso*80000+"�޼�#k�� ������ �� �ֽ��ϴ�.");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("\r\n#e���� ������#n : #i"+item+"# #z"+item+"#\r\n#e������ ����#n : #b#e"+cost+"#n����Ʈ#k\r\n\r\n#r�� 100 �Ŀ�����Ʈ#k = #b�ý��� ��6#k\r\n");
	    }else {
	    if(cm.getRC() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("#b"+(cost)+" �Ŀ�����Ʈ#k�� ����Ͽ� #b"+name+"#k "+quantity+"���� �����Ͽ����ϴ�.");
//	    cm.sendOk("���Ű� �Ϸ�Ǿ����ϴ�.");
	    cm.playerMessage(""+(cost)+" �Ŀ�����Ʈ�� ����Ͽ� "+name+" "+quantity+"���� �����ϼ̽��ϴ�.");
	    cm.gainRC(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("�κ��丮 ������ �����մϴ�.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getRC() > meso&&cm.getMeso()+(meso*80000) > 2147483647){
		cm.sendOk("�޼Ұ� �ʹ� �����ϴ�.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getRC() > meso&&cm.getMeso()+(meso*80000) <= 2147483647){
		cm.gainMeso(meso*80000);
		cm.gainRC(-meso);
		cm.sendOk("�Ŀ�����Ʈ�� �޼ҷ� ȯ���ϼ̽��ϴ�.");
		cm.dispose();
	    }else{
		cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
		cm.dispose();
		}
	}else{
	
	allstat = cm.getText()/100 * 6;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n#r�� 100 �Ŀ�����Ʈ#k = #b�ý��� ��6#k");
	    cm.dispose();
	}else{
	cm.sendGetText("\r\n#e���� ������#n : #i"+item+"# #z"+item+"#\r\n#e������ ����#n : #b#e"+cost2+"#n����Ʈ#k\r\n\r\n#e#Cgray#�� "+text1+" �Ŀ�����Ʈ = �ý��� ��"+allstat+" #k#n\r\n#r�� 500 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��3#k");
        }
	}else{
	cm.sendOk("���ڸ� �Է°����մϴ�.");
	cm.dispose();
	}
}
    }else if(status == 4){
	damage = cm.getText()/500 * 3;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%500) == 0){
	    cm.sendOk("������ �Ŀ�����Ʈ�� ������ ���߾� �����ּ���.\r\n#r�� 500 �Ŀ�����Ʈ#k = #b���ݷ�/���� ��3#k");
	    cm.dispose();
	}else{
	cm.sendYesNo("#e���� ������#n : #i"+item+"# #z"+item+"#\r\n#e������ ����#n : #b#e"+cost3+"#n����Ʈ\r\n\r\n#e#Cgray#�� "+text1+" �Ŀ�����Ʈ = #r�ý��� ��"+allstat+" #Cgray##n\r\n#e#Cgray#�� "+text2+" �Ŀ�����Ʈ = #r���ݷ�/���� ��"+damage+" #k#n\r\n\r\n�� �� �������� ���� �Ͻðڽ��ϱ�?");
    	}
	}else{
	cm.sendOk("���ڸ� �Է°����մϴ�.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getRC() >= cost3){
	cm.sendOk("#b"+(cost3)+" �Ŀ�����Ʈ#k�� ����Ͽ� #b"+name+"#k��(��) �����ϼ̽��ϴ�.");
	cm.playerMessage(""+(cost3)+" �Ŀ�����Ʈ�� ����Ͽ� "+name+"��(��) �����ϼ̽��ϴ�.");
	cm.gainSponserItem(item,'[�Ŀ�������]',allstat,damage,0);
	cm.gainRC(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("�Ŀ�����Ʈ�� �����մϴ�.");
	}
	}else{
	cm.dispose();
	}
}

