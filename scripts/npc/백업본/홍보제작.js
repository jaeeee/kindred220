/*
ȫ�� ��ũ��Ʈ
*/

var status = -1;

var cost;
var item;
var quantity;
var name;
var allstat;
var damage;
var mhp;
var equip = 0;
var cost2;
var cost3;
var cost4;
var text1;
var text2;
var cash;
var buycash;
var buymeso;
var meso;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.openShop (1012008);
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
//\r\n = ����
//#b = �Ķ��۾�
//#r = �����۾�
//#k = �����۾�
//#e = �����۾�
//#n = ����۾�
//#Cgray# = ȸ���۾�
 
        var text = "�ȳ��ϼ��� #b#h0##k��. ȫ�������� ���Ű��� ȯ���մϴ�.\r\n#r�ؾ����� �߰� ���Ǵ� #e#k'�Ŵ��� �� ��'#r#n���� ���ּ���.#k\r\n";
	text += "\r\n#rȫ�� ��� �����̶�? �ؿ� �������� ��� ȫ�� ����Ʈ�� ������ ���� �ɼ�(�ý���,����)�� �ڱ⸶����� �����ϴ� �ý����Դϴ�. ȫ������Ʈ 100�� �ý���20,����3 �Դϴ�.#k\r\n";
	text += "\r\n#e�������� ȫ������Ʈ#n : #r"+cm.getPlayer().getHBPT()+"#k����Ʈ\r\n\r\n";
	text += "\r\n#l#e<�ؽ� ��Ʈ>#n\r\n";
	text += "#L127# #i1000021# (�⺻ 100(+a)��)";
	text += "#L128# #i1050114# (�⺻ 100(+a)��)\r\n";
	text += "#L129# #i1010004# (�⺻ 100(+a)��)";
	text += "#L130# #i1000022# (�⺻ 100(+a)��)\r\n";
	text += "#L131# #i1050115# (�⺻ 100(+a)��)";
	text += "#L132# #i1010005# (�⺻ 100(+a)��)\r\n";
	text += "#L133# #i1001028# (�⺻ 100(+a)��)";
	text += "#L134# #i1051115# (�⺻ 100(+a)��)\r\n";
	text += "#L135# #i1071010# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<���κ��� ��Ʈ>#n\r\n";
	text += "#L68# #i1002785# (�⺻ 100(+a)��)";
	text += "#L69# #i1022068# (�⺻ 100(+a)��)\r\n";
	text += "#L70# #i1042142# (�⺻ 100(+a)��)";
	text += "#L71# #i1062093# (�⺻ 100(+a)��)\r\n";
	text += "#L41# #i1702155# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<���� ��Ʈ>#n\r\n";
	text += "#L64# #i1003398# (�⺻ 100(+a)��)";
	text += "#L27# #i1702269# (�⺻ 100(+a)��)\r\n";
	text += "#L61# #i1003399# (�⺻ 100(+a)��)";
	text += "#L28# #i1702270# (�⺻ 100(+a)��)\r\n";
	text += "#L62# #i1003400# (�⺻ 100(+a)��)";
	text += "#L29# #i1702271# (�⺻ 100(+a)��)\r\n";
	text += "#L63# #i1003401# (�⺻ 100(+a)��)";
	text += "#L30# #i1702272# (�⺻ 100(+a)��)\r\n";
	text += "#L65# #i1003402# (�⺻ 100(+a)��)";
	text += "#L31# #i1702273# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<����� ��Ʈ>#n\r\n";
	text += "#L56# #i1000050# (�⺻ 100(+a)��)";
	text += "#L72# #i1050227# (�⺻ 100(+a)��)\r\n";
	text += "#L58# #i1001076# (�⺻ 100(+a)��)";
	text += "#L73# #i1051278# (�⺻ 100(+a)��)\r\n";
	text += "#L78# #i1702348# (�⺻ 800(+a)��)\r\n\r\n";
	text += "\r\n#l#e<���� ��ǳ�� ��Ʈ>#n\r\n";
	text += "#L55# #i1000051# (�⺻ 100(+a)��)";
	text += "#L57# #i1001077# (�⺻ 100(+a)��)\r\n";
	text += "#L74# #i1050228# (�⺻ 100(+a)��)";
	text += "#L75# #i1051279# (�⺻ 100(+a)��)\r\n";
	text += "#L76# #i1072646# (�⺻ 100(+a)��)";
	text += "#L77# #i1102367# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<���� ��Ʈ>#n\r\n";
	text += "#L79# #i1002943# (�⺻ 100(+a)��)";
	text += "#L80# #i1050152# (�⺻ 100(+a)��)\r\n";
	text += "#L81# #i1051180# (�⺻ 100(+a)��)";
	text += "#L42# #i1702217# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<����� ��Ʈ>#n\r\n";
	text += "#L82# #i1003636# (�⺻ 100(+a)��)";
	text += "#L83# #i1052536# (�⺻ 100(+a)��)\r\n";
	text += "#L84# #i1102491# (�⺻ 100(+a)��)";
	text += "#L43# #i1702375# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<��ũ ���Ǿ� ��Ʈ>#n\r\n";
	text += "#L85# #i1042241# (�⺻ 100(+a)��)";
	text += "#L86# #i1062156# (�⺻ 100(+a)��)\r\n";
	text += "#L54# #i1102453# (�⺻ 100(+a)��)";
	text += "#L45# #i1702367# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�� ���Ǿ� ��Ʈ>#n\r\n";
	text += "#L87# #i1042237# (�⺻ 100(+a)��)";
	text += "#L88# #i1062043# (�⺻ 100(+a)��)\r\n";
	text += "#L54# #i1102453# (�⺻ 100(+a)��)";
	text += "#L46# #i1702368# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<õ���� �ÿ� ��Ʈ>#n\r\n";
	text += "#L89# #i1003376# (�⺻ 100(+a)��)";
	text += "#L90# #i1050210# (�⺻ 100(+a)��)\r\n";
	text += "#L91# #i1051256# (�⺻ 100(+a)��)";
	text += "#L92# #i1702334# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�ɵ��� ��Ʈ>#n\r\n";
	text += "#L93# #i1003217# (�⺻ 100(+a)��)";
	text += "#L94# #i1050188# (�⺻ 100(+a)��)\r\n";
	text += "#L95# #i1070006# (�⺻ 100(+a)��)";
	text += "#L14# #i1102290# (�⺻ 100(+a)��)\r\n";
	text += "#L96# #i1702306# (�⺻ 800(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�ξ� ���κ��� ��Ʈ>#n\r\n";
	text += "#L97# #i1003109# (�⺻ 100(+a)��)";
	text += "#L98# #i1052275# (�⺻ 100(+a)��)\r\n";
	text += "#L99# #i1072448# (�⺻ 100(+a)��)";
	text += "#L100# #i1102245# (�⺻ 100(+a)��)\r\n";
	text += "#L101# #i1702275# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�ξ� ���̺� ��Ʈ>#n\r\n";
	text += "#L102# #i1002995# (�⺻ 100(+a)��)";
	text += "#L103# #i1052209# (�⺻ 100(+a)��)\r\n";
	text += "#L104# #i1051192# (�⺻ 100(+a)��)";
	text += "#L105# #i1702289# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�ɺ�ȫ�ƾ� / ��Ǫ�� ���>#n\r\n";
	text += "#L106# #i1000058# (�⺻ 100(+a)��)";
	text += "#L107# #i1001085# (�⺻ 100(+a)��)\r\n";
	text += "#L108# #i1050247# (�⺻ 100(+a)��)";
	text += "#L109# #i1051302# (�⺻ 100(+a)��)\r\n";
	text += "#L110# #i1070028# (�⺻ 100(+a)��)";
	text += "#L111# #i1071044# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<ǻ�� �Ѻ� ��Ʈ>#n\r\n";
	text += "#L112# #i1050142# (�⺻ 100(+a)��)";
	text += "#L113# #i1051166# (�⺻ 100(+a)��)\r\n";
	text += "#L114# #i1702174# (�⺻ 100(+a)��)\r\n\w\n";
	text += "\r\n#l#e<��¦ ���� ��Ʈ>#n\r\n";
	text += "#L115# #i1002878# (�⺻ 100(+a)��)";
	text += "#L116# #i1052178# (�⺻ 100(+a)��)\r\n";
	text += "#L67# #i1702211# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<������ �� ��Ʈ>#n\r\n";
	text += "#L117# #i1002885# (�⺻ 100(+a)��)";
	text += "#L118# #i1051261# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�����ں��� ��Ʈ>#n\r\n";
	text += "#L119# #i1001062# (�⺻ 100(+a)��)";
	text += "#L120# #i1051220# (�⺻ 100(+a)��)\r\n";
	text += "#L121# #i1081007# (�⺻ 100(+a)��)";
	text += "#L122# #i1702291# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<�������� ��Ʈ>#n\r\n";
	text += "#L123# #i1000042# (�⺻ 100(+a)��)";
	text += "#L124# #i1050178# (�⺻ 100(+a)��)\r\n";
	text += "#L125# #i1070019# (�⺻ 100(+a)��)";
	text += "#L126# #i1100001# (�⺻ 100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<��͸���>#n\r\n";
	text += "#L9# #i1102511# (�⺻ 1500(+a)��)";
	text += "#L59# #i1102385# (�⺻100(+a)��)\r\n";
	text += "#L60# #i1102386# (�⺻100(+a)��)";
	text += "#L10# #i1102466# (�⺻100(+a)��)\r\n";
	text += "#L11# #i1102376# (�⺻100(+a)��)";
	text += "#L12# #i1102377# (�⺻100(+a)��)\r\n";
	text += "#L13# #i1102378# (�⺻100(+a)��)";
	text += "#L17# #i1102307# (�⺻100(+a)��)\r\n";
	text += "#L18# #i1102308# (�⺻100(+a)��)";
	text += "#L40# #i1102309# (�⺻100(+a)��)\r\n";
	text += "#L25# #i1102450# (�⺻100(+a)��)";
	text += "#L26# #i1102451# (�⺻100(+a)��)\r\n";
	text += "#L37# #i1102546# (�⺻100(+a)��)";
	text += "#L38# #i1102547# (�⺻100(+a)��)\r\n";
	text += "#L39# #i1102548# (�⺻100(+a)��)\r\n\r\n";
	text += "\r\n#l#e<��͹���>#n\r\n";
	text += "#L32# #i1702361# (�⺻100(+a)��)";
	text += "#L33# #i1702365# (�⺻100(+a)��)\r\n";
	text += "#L34# #i1702366# (�⺻100(+a)��)";
	text += "#L35# #i1702400# (�⺻100(+a)��)\r\n";
	text += "#L36# #i1702416# (�⺻100(+a)��)";
	text += "#L49# #i1702196# (�⺻100(+a)��)\r\n";
	text += "#L41# #i1702155# (�⺻100(+a)��)";
	text += "#L47# #i1702397# (�⺻100(+a)��)\r\n";
	text += "#L48# #i1702398# (�⺻100(+a)��)";
	text += "#L53# #i1702399# (�⺻100(+a)��)\r\n";
	text += "#L50# #i1702364# (�⺻100(+a)��)";
	text += "#L51# #i1702328# (�⺻100(+a)��)\r\n";
	text += "#L52# #i1702415# (�⺻100(+a)��)\r\n\r\n";

        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1){
	    item = 4001126;
	    cost = 1000;
	    quantity = 2000;
	    name = "��ǳ��";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 2) {
	    item = 4001126;
	    cost = 2000;                 //80
	    quantity = 4000;
	    name = "��ǳ��";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 100;
	    name = "�������";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 100;
	    name = "�������";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 100;
	    name = "����Ź�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 100;
	    name = "�����尩";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 100;
	    name = "����Ͱ�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 100;
	    name = "����Ȱ�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 100;
	    name = "�����ɷ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 100;
	    name = "�����Ÿ���ƿ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 11) {
	    item = 1102376;                //140
	    quantity = 1;
	    cost = 100;
	    name = "�������÷ζ�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 12) {
	    item = 1102377;
	    quantity = 1;
	    cost = 100;
	    name = "�����ɹ̽�ƽ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 13) {
	    item = 1102378;
	    quantity = 1;
	    cost = 100;
	    name = "�����ɸ�ε�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 100;
	    name = "�ɺ�ܳ�����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 15) {
	    item = 4310034;
	    quantity = 10;
	    cost = 100;
	    name = "����Ƽ�� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 100;
	    name = "�ű׳ʽ� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 100;
	    name = "��Ű���� ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 100;
	    name = "������Ʈ�� ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 19) {
 cm.sendGetText("ȫ������Ʈ�� �󸶳� ����Ͻðھ��?");
	buymeso = 1;
	}else if (sel == 191) {
 cm.sendGetText("ȫ������Ʈ�� �󸶳� ����Ͻðھ��?");
	buycash = 1;
}else if (sel == 20) {
	   cm.dispose();
	cm.openNpc(1013001);
           return;
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��Ƽ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��������";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3200;                 //80
	    quantity = 5;
	    name = "������ ȥ�� �ֹ��� 50%";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b"+cost+"#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 24) {
	    item = 1142593;
	    quantity = 1;
	    cost = 4900;
	    name = "�ڡ�13���� ���ڡ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 25) {
	    item = 1102450;             //180
	    quantity = 1;
	    cost = 100;
	    name = "������ũ �ƿ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ�Ͻ� �ƿ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 27) {
	    item = 1702269;
	    quantity = 1;
	    cost = 100;
	    name = "�������� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 28) {
	    item = 1702270;
	    quantity = 1;
	    cost = 100;
	    name = "������ ��ȣ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 29) {
	    item = 1702271;
	    quantity = 1;
	    cost = 100;
	    name = "�̸����� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 30) {
	    item = 1702272;
	    quantity = 1;
	    cost = 100;
	    name = "��ī��Ʈ�� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 31) {
	    item = 1702273;
	    quantity = 1;
	    cost = 100;
	    name = "ȣũ������ ��ȣ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 32) {
	    item = 1702361;
	    quantity = 1;
	    cost = 100;
	    name = "���� ȣũ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 33) {
	    item = 1702365;
	    quantity = 1;
	    cost = 100;
	    name = "�����̴� �簣����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 34) {
	    item = 1702366;
	    quantity = 1;
	    cost = 100;
	    name = "�õ� ���";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 35) {
	    item = 1702400;
	    quantity = 1;
	    cost = 100;
	    name = "������ �䳢����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 36) {
	    item = 1702416;
	    quantity = 1;
	    cost = 100;
	    name = "����� ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 37) {
	    item = 1102546;
	    quantity = 1;
	    cost = 100;
	    name = "�Ķ����� ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 38) {
	    item = 1102547;
	    quantity = 1;
	    cost = 100;
	    name = "�ڼ����� ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 39) {
	    item = 1102548;
	    quantity = 1;
	    cost = 100;
	    name = "�ٻ��� ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 40) {
	    item = 1102309;
	    quantity = 1;
	    cost = 100;
	    name = "�ߴ����� ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 41) {
	    item = 1702155;
	    quantity = 1;
	    cost = 100;
	    name = "���κ��� ��Ÿ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 42) {
	    item = 1702217;
	    quantity = 1;
	    cost = 100;
	    name = "��Ű Ʃ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 43) {
	    item = 1702375;
	    quantity = 1;
	    cost = 100;
	    name = "��Ʋ��Ƽ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 44) {
	    item = 1702336;
	    quantity = 1;
	    cost = 100;
	    name = "�ε� ���佺Ʈ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 45) {
	    item = 1702367;
	    quantity = 1;
	    cost = 100;
	    name = "���� ���Ǿ�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 46) {
	    item = 1702368;
	    quantity = 1;
	    cost = 100;
	    name = "���̸��� ���Ǿ�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 47) {
	    item = 1702397;
	    quantity = 1;
	    cost = 100;
	    name = "�ƷվƷ� �̸���";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 48) {
	    item = 1702398;
	    quantity = 1;
	    cost = 100;
	    name = "������ ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 53) {
	    item = 1702399;
	    quantity = 1;
	    cost = 100;
	    name = "�׿� ����Ʈ ���̹�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 50) {
	    item = 1702364;
	    quantity = 1;
	    cost = 100;
	    name = "�巡�� �����̺�";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 51) {
	    item = 1702328;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ���� �ֻ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 52) {
	    item = 1702415;
	    quantity = 1;
	    cost = 100;
	    name = "�޲ٴ� ���� ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 49) {
	    item = 1702196;
	    quantity = 1;
	    cost = 100;
	    name = "���ƶ� �Ķ���!";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 55) {
	    item = 1000051;
	    quantity = 1;
	    cost = 100;
	    name = "���� ��ǳ�� ��� (��)";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 56) {
	    item = 1000050;
	    quantity = 1;
	    cost = 100;
	    name = "��Ʈ ����� ũ����Ż (��)";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 57) {
	    item = 1001077;
	    quantity = 1;
	    cost = 100;
	    name = "���� ��ǳ�� ��� (��)";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 58) {
	    item = 1001076;
	    quantity = 1;
	    cost = 100;
	    name = "ü�� ����� ũ����Ż (��)";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 61) {
	    item = 1003399;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 62) {
	    item = 1003400;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ �̸���";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 63) {
	    item = 1003401;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ ��ī��Ʈ";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 64) {
	    item = 1003398;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ ������";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 65) {
	    item = 1003402;
	    quantity = 1;
	    cost = 100;
	    name = "��ũ ȣũ����";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 59) {
	    item = 1102385;
	    quantity = 1;
	    cost = 100;
	    name = "�轺 �ɷ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 60) {
	    item = 1102386;
	    quantity = 1;
	    cost = 100;
	    name = "���� �ɷ��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 54) {
	    item = 1102453;
	    quantity = 1;
	    cost = 100;
	    name = "����̾��";
	    equip = 1;
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 66) {
	    item = 1142558;
	    quantity = 1;
	    cost = 3100;
	    name = "�𸮹�Ƽ�� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+")#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 67) {
	    item = 1702211;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���ڵ� ��ƽ";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 68) {
	    item = 1002785;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���κ��� ��ĸ";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 69) {
	    item = 1022068;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "ȭ��Ʈ ���̵�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 70) {
	    item = 1042142;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���κ��� ž";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 71) {
	    item = 1062093;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�׷��� �׸� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 72) {
	    item = 1050227;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��Ʈ ����� ������";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 73) {
	    item = 1051278;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "ü�� ����� ������";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 74) {
	    item = 1050228;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ��ǳ�� ��Ʈ (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 75) {
	    item = 1051279;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ��ǳ�� ��Ʈ (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 76) {
	    item = 1072646;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ��ǳ�� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 77) {
	    item = 1102367;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ��ǳ�� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 78) {
	    item = 1702348;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "����� �÷���ũ";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 79) {
	    item = 1002943;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���Ϸ� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 80) {
	    item = 1050152;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���Ϸ��� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 81) {
	    item = 1051180;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���Ϸ��� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 82) {
	    item = 1003636;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "����ƽ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 83) {
	    item = 1052536;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ��Ÿ������";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 84) {
	    item = 1102491;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��ϵ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 85) {
	    item = 1042241;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ö��� ���̿÷�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 86) {
	    item = 1062156;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "������ũ ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 87) {
	    item = 1042237;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��� ���Ϸ� ����Ʈ";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 88) {
	    item = 1062043;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�� ��Ÿ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 89) {
	    item = 1003376;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�޸𸮾� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 90) {
	    item = 1050210;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ϴ��ϴ� �ػ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 91) {
	    item = 1051256;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ϴ��ϴ� ������";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 92) {
	    item = 1702334;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "ũ����Ż ��Ÿ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 93) {
	    item = 1003217;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɵ��� �Ӹ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 94) {
	    item = 1050188;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɵ��� �Ѻ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 95) {
	    item = 1070006;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� �Ź�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 96) {
	    item = 1702306;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɹٶ� ���ʼ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 97) {
	    item = 1003109;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���κ��� �ĵ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 98) {
	    item = 1052275;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���κ��� ¤�� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 99) {
	    item = 1072448;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���κ��� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 100) {
	    item = 1102245;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ش� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 101) {
	    item = 1702275;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���κ��� ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 102) {
	    item = 1002995;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���̺� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 103) {
	    item = 1052209;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���̺� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 104) {
	    item = 1051192;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��� ������";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 105) {
	    item = 1702289;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ξ� ���� ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 106) {
	    item = 1000058;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��Ǫ�� ��� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 107) {
	    item = 1001085;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɺ�ȫ ����Ӹ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 108) {
	    item = 1050247;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��Ǫ�� ��Ǻ���";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 109) {
	    item = 1051302;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɺ�ȫ �ƾ��Ѻ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 110) {
	    item = 1070028;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��Ǫ�� ��ǲɽ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 111) {
	    item = 1071044;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɺ�ȫ �ƾ��ɽ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 112) {
	    item = 1050142;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ĵ� ǻ�� �Ѻ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 113) {
	    item = 1051166;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�巹�� ǻ�� �Ѻ�";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 114) {
	    item = 1702174;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ɺ��� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 115) {
	    item = 1002878;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ������ ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 116) {
	    item = 1052178;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "���� ��Ʈ";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 117) {
	    item = 1002885;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "��ũ �巹�� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 118) {
	    item = 1051261;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�޸��� ��Ÿ��";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 119) {
	    item = 1001062;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�����ں��� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 120) {
	    item = 1051220;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�����ں��� �巹��";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 121) {
	    item = 1081007;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�����ں��� �尩";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 122) {
	    item = 1702291;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�����ں��� ��ä";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 123) {
	    item = 1000042;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 124) {
	    item = 1050178;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 125) {
	    item = 1070019;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 126) {
	    item = 1100001;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 127) {
	    item = 1000021;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� �庸�� ���� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 128) {
	    item = 1050114;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� �庸�� �ǻ� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 129) {
	    item = 1010004;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� �庸�� ���� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 130) {
	    item = 1000022;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� ���� ���� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 131) {
	    item = 1050115;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� ���� �ǻ� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 132) {
	    item = 1010005;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� ���� ���� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 133) {
	    item = 1001028;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� ���� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 134) {
	    item = 1051115;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� �ǻ� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 135) {
	    item = 1071010;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� �Ź� (��)";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 200) {
	    item = 1112586;
	    quantity = 1;
	    cost = 2500;
	    equip = 1;
	    name = "��ũ ������ ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}else if (sel == 201) {
	    item = 1112663;
	    quantity = 1;
	    cost = 3500;
	    equip = 1;
	    name = "ȭ��Ʈ ������ ����";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"��#k�� #b("+cost+"+a)#k����Ʈ�� �����Ͻðڽ��ϱ�?");
	}
    }else if (status == 2){
if (buycash == 1){
	cash = cm.getText();
	cm.sendYesNo("ȯ���� ���Ͻô� ȫ������Ʈ�� #b"+cash+"��("+cash*100+"ĳ��)#k �½��ϱ�?");
} else if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("ȯ���� ���Ͻô� ȫ������Ʈ�� #b"+meso+"��("+meso*20000+"�޼�)#k �½��ϱ�?");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("������ ������ (���� ���� : #b"+cost+"����Ʈ)#k\r\n\r\n#i"+item+"#\r\n#r�ý��ݰ� ���ݷ�,����#k�� ������ �ݾ��� �Է��ϼ���\r\n#r100 ȫ������Ʈ#k = #b�ý���15 ����1");
	    }else {
	    if(cm.getPlayer().getHBPT() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("�����ϼ̽��ϴ�.");
	    cm.playerMessage(""+(cost)+"���� ����Ͽ� "+name+" "+quantity+"���� �����ϼ̽��ϴ�.");
	    cm.getPlayer().gainHBPT(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("ȫ������Ʈ�� �����մϴ�.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("�κ��丮 ������ �����մϴ�.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buycash == 1){
	    if(cash>0 &&cm.getPlayer().getHBPT() > cash&&cm.getPlayer().getNX()+(cash*100) > 900000){
		cm.sendOk("ĳ�ð� �ʹ� �����ϴ�.");
	    	cm.dispose();
	    }else if (cash>0 && cm.getPlayer().getHBPT() > cash&&cm.getPlayer().getNX()+(cash*100) <= 900000){
		cm.getPlayer().modifyCSPoints(1, cash * 100, false);
		cm.getPlayer().gainHBPT(-cash);
		cm.sendOk("ȫ������Ʈ�� ĳ�÷� ȯ���ϼ̽��ϴ�.");
		cm.dispose();
	    }else{
		cm.sendOk("ȫ������Ʈ�� �����մϴ�.");
		cm.dispose();
		}
	} else if(buymeso == 1){
	    if(meso>0 &&cm.getPlayer().getHBPT() > meso&&cm.getMeso()+(meso*20000) > 9999999999){
		cm.sendOk("�޼Ұ� �ʹ� �����ϴ�.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getPlayer().getHBPT() > meso&&cm.getMeso()+(meso*20000) <= 9999999999){
		cm.gainMeso(meso*20000);
		cm.getPlayer().gainHBPT(-meso);
		cm.sendOk("ȫ������Ʈ�� �޼ҷ� ȯ���ϼ̽��ϴ�.");
		cm.dispose();
	    }else{
		cm.sendOk("ȫ������Ʈ�� �����մϴ�.");
		cm.dispose();
		}
	}else{
	
	allstat = cm.getText()/100 * 20;
	damage = cm.getText()/100 * 3
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("������ ȫ������Ʈ�� ������ ���߾� �����ּ���. ���鵵 �����մϴ�. \r\n��(ȫ������Ʈ 100 �� = �ý��� 20 , ����3)");
	    cm.dispose();
	}else{
	cm.sendGetText("������ ������ (���� ���� : #b"+cost2+"����Ʈ#k)\r\n\r\n#i"+item+"#\r\n#r���� �Է��� �ɼ� ("+text1+"����Ʈ (�ý���+"+allstat+" ��,��"+damage+"))#k\r\n���Ͻô� #r�ִ�HP (����������)#k�� �Է��ϼ���\r\n#r(������ ����)100 ȫ������Ʈ#k = #b�ִ�HP 100#k ���鵵 �����մϴ�.");
        }
	}else{
	cm.sendOk("�߸� �Է��ϼ̽��ϴ�.");
	cm.dispose();
	}
}
    }else if(status == 4){
	mhp = cm.getText()/100 * 500;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%100) == 0){
	    cm.sendOk("������ ȫ������Ʈ�� ������ ���߾� �����ּ���. ���鵵 �����մϴ�.\r\n��(ȫ������Ʈ 100 = �ִ�HP 500)");
	    cm.dispose();
	}else{
	cm.sendYesNo("������ ������ (���� ���� : #b"+cost3+"#k)\r\n\r\n#i"+item+"#\r\n#r("+text1+"����Ʈ (�ý���+"+allstat+" ��,��+"+damage+"))#k\r\n#r("+text2+"����Ʈ (�ִ�HP+"+mhp+"))#k\r\n\r\n������ �������� ���� �Ͻðڽ��ϱ�?");
    	}
	}else{
	cm.sendOk("�߸� �Է��ϼ̽��ϴ�.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getPlayer().getHBPT() >= cost3){
	cm.sendOk(""+(cost3)+"���� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.playerMessage(""+(cost3)+"���� ����Ͽ� "+name+"�� �����ϼ̽��ϴ�.");
	cm.gainHpItem(item,'[ȫ��������]',allstat,damage,mhp);
	cm.getPlayer().gainHBPT(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("ȫ������Ʈ�� �����մϴ�.");
	}
	}else{
	cm.dispose();
	}
}

