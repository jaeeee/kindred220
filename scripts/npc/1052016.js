/*
���� ��ũ��Ʈ
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
 
        var text = "#e#r[FoxK style Empress Shop]#n#k\r\n";
	text += "��#b��This store #v 4310034#Available at.#k\r\n";
	text += "��#b��If there are no coins Justice does not require Exchange.#k\r\n";
	text += "��#r��Add item inquiry <FoxK>Please contact.#k\r\n";

	text += "#e#b[Empress Weapon Box]#k#n #e(#v 4310034#2)#n\r\n";
	text += "#L2106##v 2430368#\r\n\r\n";
	text += "#e#b[Raven Horn Series]#k#n #e(#v 4310034#2)#n\r\n";
	text += "#L19##v 1003175##l"
	text += "#L155##v 1102278##l"
	text += "#L15##v 1082298#";
	text += "#L16##v 1052317#";
	text += "#L3000##v 1072488#";
	text += "#L3001##v 1152112#\r\n\r\n";
	text += "#e#b[Dragon Tail series]#k#n #e(#v 4310034#2)#n\r\n";
	text += "#L122##v 1003173#";
        text += "#L123##v 1102276#";
	text += "#L32##v 1082296#";
	text += "#L33##v 1052315#";
	text += "#L50##v 1072486#";
	text += "#L41##v 1152110#\r\n\r\n";
	text += "#e#b[Falcon Wing Series]#k#n #e(#v 4310034#2)#n\r\n";
	text += "#L37##i1003174#";
	text += "#L38##i1102277#";
	text += "#L39##i1082297#";
	text += "#L11##i1052316#";
	text += "#L12##i1072487#";
	text += "#L13##i1152111##l\r\n\r\n";
	text += "#e#b[Lion Heart Series]#k#n #e(#v 4310034#2)#n\r\n\r\n";
	text += "#L3008##i1003172#";
	text += "#L66##i1102275#";
	text += "#L24##i1082295#";
	text += "#L3009##i1052314#";
	text += "#L3010##i1072485#";
	text += "#L3011##i1152108#";
	text += "#l\r\n\r\n";
	text += "#e#b[Shark Tooth Series]#k#n #e(#v 4310034#2)#n\r\n";
	text += "#L64##i1003176#";
	text += "#L61##i1102279#";
	text += "#L62##i1082299#";
	text += "#L63##i1052318#";
	text += "#L65##i1072489#";
	text += "#L27##i1152113#";

	cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 2){
	    item = 2;
	    cost = 2000;
	    quantity = 4000;
	    name = "Maple Leafs";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#k#epoint#nWould you like to buy a?");

	}else if (sel == 2106) {
	    item = 2430368;
	    quantity = 1;
	    name = "Box of evil";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2119) {
	    item = 1702405;
	    quantity = 1;
	    cost = 1000;
	    name = "Starlight Heart yosulbong";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2120) {
	    item = 1702443;
	    quantity = 1;
	    cost = 1000;
	    name = "Appointment of the Puppeteer";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2148) {
	    item = 1702347;
	    quantity = 1;
	    cost = 1000;
	    name = "Fortune slash";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2159) {
	    item = 1702466;
	    quantity = 1;
	    cost = 1000;
	    name = "Mint chocolatier stick";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2100) {
	    item = 1003867;
	    quantity = 1;
	    cost = 1000;
	    name = "Nice shot sseonkaep";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2101) {
	    item = 1042264;
	    quantity = 1;
	    cost = 1000;
	    name = "Kara golf Nasir";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2102) {
	    item = 1060182;
	    quantity = 1;
	    cost = 1000;
	    name = "Golf shorts";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2103) {
	    item = 1061206;
	    quantity = 1;
	    cost = 1000;
	    name = "Golf Skirt";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2104) {
	    item = 1072823;
	    quantity = 1;
	    cost = 1000;
	    name = "Golf Shoes";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2105) {
	    item = 1082527;
	    quantity = 1;
	    cost = 1000;
	    name = "Golf Gloves";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2107) {
	    item = 1003865;
	    quantity = 1;
	    cost = 1000;
	    name = "Starlight Narae";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2108) {
	    item = 1050284;
	    quantity = 1;
	    cost = 1000;
	    name = "Jinling doryeong";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2109) {
	    item = 1051350;
	    quantity = 1;
	    cost = 1000;
	    name = "Mistress ban";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2110) {
	    item = 1072821;
	    quantity = 1;
	    cost = 1000;
	    name = "Jinling kkotsin";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2112) {
	    item = 1102564;
	    quantity = 1;
	    cost = 1000;
	    name = "Cheonuimubong";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2113) {
	    item = 1702423;
	    quantity = 1;
	    cost = 1000;
	    name = "wisp";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2114) {
	    item = 1003892;
	    quantity = 1;
	    cost = 1000;
	    name = "Diamond Reef";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2115) {
	    item = 1051352;
	    quantity = 1;
	    cost = 1000;
	    name = "Tereumidoreu";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2116) {
	    item = 1072831;
	    quantity = 1;
	    cost = 1000;
	    name = "Flame Boots";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2117) {
	    item = 1102583;
	    quantity = 1;
	    cost = 1000;
	    name = "Baby Dragon Forbidden";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2118) {
	    item = 1702433;
	    quantity = 1;
	    cost = 1000;
	    name = "Salamander";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");

	}else if (sel == 2121) {
	    item = 1003909;
	    quantity = 1;
	    cost = 1000;
	    name = "Pink Soda Cap";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2122) {
	    item = 1050291;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ű ���̽���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2123) {
	    item = 1051357;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ű ���̽���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2124) {
	    item = 1072836;
	    quantity = 1;
	    cost = 1000;
	    name = "���̽��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2125) {
	    item = 1102593;
	    quantity = 1;
	    cost = 1000;
	    name = "�εս� �߱���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2126) {
	    item = 1702442;
	    quantity = 1;
	    cost = 1000;
	    name = "�߱���Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2127) {
	    item = 1003920;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ͽ��̾� �䵵��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2128) {
	    item = 1050293;
	    quantity = 1;
	    cost = 1000;
	    name = "�غ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2129) {
	    item = 1051359;
	    quantity = 1;
	    cost = 1000;
	    name = "�غ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2130) {
	    item = 1072843;
	    quantity = 1;
	    cost = 1000;
	    name = "������� �ö�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2131) {
	    item = 1702446;
	    quantity = 1;
	    cost = 1000;
	    name = "�شް� �Բ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2132) {
	    item = 1003945;
	    quantity = 1;
	    cost = 1000;
	    name = "���۽�Ÿ ũ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2133) {
	    item = 1050296;
	    quantity = 1;
	    cost = 1000;
	    name = "���۽�Ÿ ��Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2134) {
	    item = 1051362;
	    quantity = 1;
	    cost = 1000;
	    name = "���۽�Ÿ ���ǽ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2135) {
	    item = 1072852;
	    quantity = 1;
	    cost = 1000;
	    name = "���۽�Ÿ ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2136) {
	    item = 1102608;
	    quantity = 1;
	    cost = 1000;
	    name = "���۽�Ÿ �̷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2137) {
	    item = 1702451;
	    quantity = 1;
	    cost = 1000;
	    name = "���۽�Ÿ ����ũ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");


	}else if (sel == 2138) {
	    item = 1003953;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2139) {
	    item = 1050298;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2140) {
	    item = 1051365;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ÿ ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2143) {
	    item = 1702453;
	    quantity = 1;
	    cost = 1000;
	    name = "�ƽ�Ʈ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2144) {
	    item = 1003776;
	    quantity = 1;
	    cost = 1000;
	    name = "�������� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2145) {
	    item = 1052587;
	    quantity = 1;
	    cost = 1000;
	    name = "�������� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2146) {
	    item = 1082493;
	    quantity = 1;
	    cost = 1000;
	    name = "�������� �����尩";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2147) {
	    item = 1702454;
	    quantity = 1;
	    cost = 1000;
	    name = "�ĵ� ��dog ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2149) {
	    item = 1003957;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ʈ ���Ҿ��̽�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2150) {
	    item = 1003958;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ ���Ҿ��̽�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2151) {
	    item = 1050300;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ���̽�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2152) {
	    item = 1051367;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ���̽�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2153) {
	    item = 1072862;
	    quantity = 1;
	    cost = 1000;
	    name = "��ƮǪ�� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2154) {
	    item = 1702457;
	    quantity = 1;
	    cost = 1000;
	    name = "���̽��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2155) {
	    item = 1003965;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ����Ż";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2156) {
	    item = 1052661;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2157) {
	    item = 1082549;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �����尩";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2158) {
	    item = 1702461;
	    quantity = 1;
	    cost = 1000;
	    name = "ȿ�� ���� ���Ƹ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2171) {
	    item = 1003971;
	    quantity = 1;
	    cost = 1000;
	    name = "��縮�� �䵵��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2160) {
	    item = 1003972;
	    quantity = 1;
	    cost = 1000;
	    name = "��縮�� ���̽�ĸ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2161) {
	    item = 1050302;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ʋ���� ǰ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2162) {
	    item = 1051369;
	    quantity = 1;
	    cost = 1000;
	    name = "���̵��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2163) {
	    item = 1072868;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2164) {
	    item = 1702464;
	    quantity = 1;
	    cost = 1000;
	    name = "��¦��¦ ģ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");


	}else if (sel == 2165) {
	    item = 1003955;
	    quantity = 1;
	    cost = 1000;
	    name = "�θ� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2166) {
	    item = 1050299;
	    quantity = 1;
	    cost = 1000;
	    name = "���̺� Ǫī";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2167) {
	    item = 1051366;
	    quantity = 1;
	    cost = 1000;
	    name = "���̺� ��ī";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2168) {
	    item = 1072860;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ÿ ��Ŭ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2169) {
	    item = 1082555;
	    quantity = 1;
	    cost = 1000;
	    name = "�� ����ũ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");

	}else if (sel == 2170) {
	    item = 1702456;
	    quantity = 1;
	    cost = 1000;
	    name = "�� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
































	}else if (sel == 1000){
	    item = 3700010;
	    cost = 30000;
	    quantity = 1;
	    name = "���� ������ ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#k#epoint#nWould you like to buy a?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 999) {
	    item = 1012289;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 1000;
	    name = "���� �Ź�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �尩";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �Ͱ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �Ȱ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 1001) {
	    item = 1112904;
	    quantity = 1;
	    cost = 1000;
	    name = "���κ��� ��Ÿ ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2000) {
	    item = 1001075;
	    quantity = 1;
	    cost = 1000;
	    name = "�������� ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2001) {
	    item = 1051277;
	    quantity = 1;
	    cost = 1000;
	    name = "�ñ׳ʽ� �巹��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2003) {
	    item = 1071037;
	    quantity = 1;
	    cost = 1000;
	    name = "�ñ׳ʽ� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2004) {
	    item = 1102356;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ���޶���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2005) {
	    item = 1702347;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �÷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2037) {
	    item = 1003422;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���̺� �丣�ҳ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2038) {
	    item = 1050226;
	    quantity = 1;
	    cost = 1000;
	    name = "���丮�� ���� ��Ʈ(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2040) {
	    item = 1051276;
	    quantity = 1;
	    cost = 1000;
	    name = "���丮�� ���� ��Ʈ(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2039) {
	    item = 1070024;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���� ����(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2041) {
	    item = 1071036;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���� ����(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2042) {
	    item = 1102355;
	    quantity = 1;
	    cost = 1000;
	    name = "��� �����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3000) {
	    item = 1072488;
	    quantity = 1;
	    cost = 2000;
	    name = "���̺�ȥ ü�̼�����";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3001) {
	    item = 1152112;
	    quantity = 1;
	    cost = 2000;
	    name = "���̺�ȥ ü�̼����";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3002) {
	    item = 1004081;
	    quantity = 1;
	    cost = 2000;
	    name = "�ҿﺣ�� �ĵ�";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3003) {
	    item = 1003965;
	    quantity = 1;
	    cost = 2000;
	    name = "���� ����Ż";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3004) {
	    item = 1003776;
	    quantity = 1;
	    cost = 2000;
	    name = "�������� ����";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3005) {
	    item = 1052587;
	    quantity = 1;
	    cost = 2000;
	    name = "�������� ������";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3006) {
	    item = 1082493;
	    quantity = 1;
	    cost = 2000;
	    name = "�������� �����尩";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3007) {
	    item = 1052655;
	    quantity = 1;
	    cost = 2000;
	    name = "�ҿﺣ�� �ǻ�";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");





	}else if (sel == 2010) {
	    item = 1000062;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2011) {
	    item = 1040192;
	    quantity = 1;
	    cost = 1000;
	    name = "�׸� �䳢Ƽ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2012) {
	    item = 1060180;
	    quantity = 1;
	    cost = 1000;
	    name = "�ָ� ȣ�ڹ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2013) {
	    item = 1001089;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2014) {
	    item = 1041194;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ �䳢Ƽ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2015) {
	    item = 1061203;
	    quantity = 1;
	    cost = 1000;
	    name = "�ָ� ȣ��ġ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 2016) {
	    item = 1002824;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ��������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2017) {
	    item = 1003083;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �̽�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4001168# #e2dog#nWould you like to purchase?");
	}else if (sel == 2018) {
	    item = 1102349;
	    quantity = 1;
	    cost = 1000;
	    name = "��������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2019) {
	    item = 1003855;
	    quantity = 1;
	    cost = 1000;
	    name = "�� ���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2020) {
	    item = 1052245;
	    quantity = 1;
	    cost = 1000;
	    name = "�ٻ�� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2021) {
	    item = 1072438;
	    quantity = 1;
	    cost = 1000;
	    name = "�ٻ�� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2022) {
	    item = 1003842;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ĸ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2023) {
	    item = 1051349;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ���ǽ�(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2024) {
	    item = 1072816;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2025) {
	    item = 1082525;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� �۷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2026) {
	    item = 1102554;
	    quantity = 1;
	    cost = 1000;
	    name = "��ť���� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2027) {
	    item = 1003831;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� �Ӹ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2028) {
	    item = 1052605;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� �������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2029) {
	    item = 1072808;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2030) {
	    item = 1082520;
	    quantity = 1;
	    cost = 1000;
	    name = "�Ʊ�� ���尩";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2031) {
	    item = 1003503;
	    quantity = 1;
	    cost = 1000;
	    name = "�ٸ����� Ƽ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2032) {
	    item = 1050232;
	    quantity = 1;
	    cost = 1000;
	    name = "ĳ���� ƼŸ��(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2033) {
	    item = 1051282;
	    quantity = 1;
	    cost = 1000;
	    name = "����� ƼŸ��(��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2034) {
	    item = 1702352;
	    quantity = 1;
	    cost = 1000;
	    name = "������� Ƽ��Ǭ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2035) {
	    item = 1052579;
	    quantity = 1;
	    cost = 1000;
	    name = "����ƽ �׿� ��Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2036) {
	    item = 1072782;
	    quantity = 1;
	    cost = 1000;
	    name = "����ƽ �׿� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 2099) {
	    item = 1082505;
	    quantity = 1;
	    cost = 1000;
	    name = "����ƽ �׿� �۷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");






	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 1000;
	    name = "�����ɷ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 2000;
	    name = "�����Ÿ�� �ƿ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 11) {
	    item = 1052316;                //140
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��Ƽ�ν�Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 12) {
	    item = 1072487;
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��Ƽ�κ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 13) {
	    item = 1152111;
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��Ƽ�μ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 1000;
	    name = "�ɺ�� ��dog��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 15) {
	    item = 1082298;
	    quantity = 1;
	    cost = 2000;
	    name = "���̺�ȥ ü�̼��۷���";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 16) {
	    item = 1052317;
	    quantity = 1;
	    cost = 2000;
	    name = "���̺�ȥ ü�̼��Ƹ�";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 2000;
	    name = "��Ű���� ��dog";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 2000;
	    name = "������Ʈ�� ��dog";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 19) {
	    item = 1003175;
	    quantity = 1;
	    cost = 2000;
	    name = "���̺�ȥ ü�̼���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 20) {
	    item = 2430130;
	    quantity = 1;
	    cost = 1500;
	    name = "���������� ������ ĸ��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#k#epoint#nWould you like to buy a?");
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��Ƽ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#k#epoint#nWould you like to buy a?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "�Ŵ� ��������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#k#epoint#nWould you like to buy a?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3000;                 //80
	    quantity = 5;
	    name = "������ ȥ�� �ֹ��� 50%";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#k#epoint#nWould you like to buy a?");
	}else if (sel == 24) {
	    item = 1082295;
	    quantity = 1;
	    cost = 4500;
	    name = "���̿���Ʈ ��Ʋ�극�̼�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");

	}else if (sel == 25) {
	    item = 1102450;             
	    quantity = 1;
	    cost = 2000;
	    name = "������ũ �ƿ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");

	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 2000;
	    name = "��ũ�Ͻ� �ƿ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 27) {
	    item = 1152113;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� ��Ű�ۼ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 28) {
	    item = 1702270;
	    quantity = 1;
	    cost = 1000;
	    name = "������ ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 29) {
	    item = 1702271;
	    quantity = 1;
	    cost = 1000;
	    name = "�̸����� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 30) {
	    item = 1702272;
	    quantity = 1;
	    cost = 1000;
	    name = "��ī��Ʈ�� ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 31) {
	    item = 1702273;
	    quantity = 1;
	    cost = 1000;
	    name = "ȣũ������ ��ȣ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 32) {
	    item = 1082296;
	    quantity = 1;
	    cost = 1000;
	    name = "�巡������ �������ǽ�Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 33) {
	    item = 1052315;
	    quantity = 1;
	    cost = 1000;
	    name = "�巡������ �������κ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 34) {
	    item = 1702366;
	    quantity = 1;
	    cost = 1000;
	    name = "�õ� ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 35) {
	    item = 1702400;
	    quantity = 1;
	    cost = 1000;
	    name = "������ �䳢����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 36) {
	    item = 1702488;
	    quantity = 1;
	    cost = 1000;
	    name = "������ �������� ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 37) {
	    item = 1003174;
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��Ƽ��ĸ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 38) {
	    item = 11102277;
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��Ƽ��������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 39) {
	    item = 1082297;
	    quantity = 1;
	    cost = 2000;
	    name = "������ ��Ƽ�α۷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 40) {
	    item = 1102309;
	    quantity = 1;
	    cost = 2000;
	    name = "�ߴ����� ��dog";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 41) {
	    item = 1152110;
	    quantity = 1;
	    cost = 1000;
	    name = "�巡������ ���������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 42) {
	    item = 1702217;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ű Ʃ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 43) {
	    item = 1702375;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ʋ��Ƽ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 44) {
	    item = 1702336;
	    quantity = 1;
	    cost = 1000;
	    name = "�ε� ���佺Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 45) {
	    item = 1702367;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���Ǿ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 46) {
	    item = 1702368;
	    quantity = 1;
	    cost = 1000;
	    name = "���̸��� ���Ǿ�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 47) {
	    item = 1702397;
	    quantity = 1;
	    cost = 1000;
	    name = "�ƷվƷ� �̸���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 48) {
	    item = 1702174;
	    quantity = 1;
	    cost = 1000;
	    name = "�ɺ��� ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 53) {
	    item = 1702399;
	    quantity = 1;
	    cost = 1000;
	    name = "�׿� ����Ʈ ���̹�";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 50) {
	    item = 1072486;
	    quantity = 1;
	    cost = 1000;
	    name = "�巡������ ����������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 51) {
	    item = 1702328;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� �ֻ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 52) {
	    item = 1702415;
	    quantity = 1;
	    cost = 1000;
	    name = "�޲ٴ� ���� ��dog";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 49) {
	    item = 1702365;
	    quantity = 1;
	    cost = 1000;
	    name = "�����̴� �簣����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 55) {
	    item = 1000051;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���Ǹ� ��� (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 56) {
	    item = 1000050;
	    quantity = 1;
	    cost = 1000;
	    name = "��Ʈ ����� ũ����Ż (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 57) {
	    item = 1001077;
	    quantity = 1;
	    cost = 1000;
	    name = "���� ���Ǹ� ��� (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 58) {
	    item = 1001076;
	    quantity = 1;
	    cost = 1000;
	    name = "ü�� ����� ũ����Ż (��)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 61) {
	    item = 1102279;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� ��Ű��������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 62) {
	    item = 1082299;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� ��Ű�۱۷���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 63) {
	    item = 1052318;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� ��Ű����Ʈ";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 64) {
	    item = 1003176;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� ��Ű����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 65) {
	    item = 1072489;
	    quantity = 1;
	    cost = 1000;
	    name = "��ũ���� ��Ű�ۺ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 59) {
	    item = 1102385;
	    quantity = 1;
	    cost = 1000;
	    name = "�轺 �ɷ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 60) {
	    item = 1102386;
	    quantity = 1;
	    cost = 1000;
	    name = "���� �ɷ��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 54) {
	    item = 1102453;
	    quantity = 1;
	    cost = 2000;
	    name = "����̾��";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 66) {
	    item = 1102275;
	    quantity = 1;
	    cost = 4500;
	    name = "���̿���Ʈ ��Ʋ������";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3008) {
	    item = 1003172;
	    quantity = 1;
	    cost = 4500;
	    name = "���̿���Ʈ ��Ʋ�︧";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3009) {
	    item = 1052314;
	    quantity = 1;
	    cost = 4500;
	    name = "���̿���Ʈ ��Ʋ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3010) {
	    item = 1072485;
	    quantity = 1;
	    cost = 4500;
	    name = "���̿���Ʈ ��Ʋ����";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 3011) {
	    item = 1152108;
	    quantity = 1;
	    cost = 1000;
	    name = "���̿���Ʈ ��Ʋ���";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");

	}else if (sel == 67) {
	    item = 1702456;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 68) {
	    item = 1002785;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���κ��� ��ĸ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 69) {
	    item = 1022068;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "ȭ��Ʈ ���̵�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 70) {
	    item = 1042142;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���κ��� ž";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 71) {
	    item = 1062093;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�׷��� �׸� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 72) {
	    item = 1050227;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ʈ ����� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 73) {
	    item = 1051278;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "ü�� ����� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 74) {
	    item = 1050228;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ��Ʈ (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 75) {
	    item = 1051279;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ��Ʈ (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 76) {
	    item = 1072646;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 77) {
	    item = 1102367;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ���Ǹ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 78) {
	    item = 1702348;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "����� �÷���ũ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 79) {
	    item = 1002943;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���Ϸ� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 80) {
	    item = 1050152;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���Ϸ��� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 81) {
	    item = 1051180;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���Ϸ��� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 82) {
	    item = 1003636;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "����ƽ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 83) {
	    item = 1052536;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ��Ÿ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 84) {
	    item = 1102491;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ϵ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 85) {
	    item = 1042241;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ö��� ���̿÷�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 86) {
	    item = 1062156;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "������ũ ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 87) {
	    item = 1042237;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��� ���Ϸ� ����Ʈ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 88) {
	    item = 1062043;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�� ��Ÿ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 89) {
	    item = 1003376;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�޸𸮾� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 90) {
	    item = 1050210;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ϴ��ϴ� �ػ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 91) {
	    item = 1051256;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ϴ��ϴ� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 92) {
	    item = 1702334;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "ũ����Ż ��Ÿ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 93) {
	    item = 1003217;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɵ��� �Ӹ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 94) {
	    item = 1050188;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɵ��� �Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 95) {
	    item = 1070006;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� �Ź�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 96) {
	    item = 1702306;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɹٶ� ���ʼ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 97) {
	    item = 1003109;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� �ĵ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 98) {
	    item = 1052275;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� ¤�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 99) {
	    item = 1072448;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 100) {
	    item = 1102245;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ش� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 101) {
	    item = 1702275;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���κ��� ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 102) {
	    item = 1002995;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���̺� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 103) {
	    item = 1052209;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���̺� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 104) {
	    item = 1051192;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��� ������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 105) {
	    item = 1702289;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ξ� ���� ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 106) {
	    item = 1000058;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ǫ�� ��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 107) {
	    item = 1001085;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ�ȫ ����Ӹ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 108) {
	    item = 1050247;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ǫ�� ��Ǻ���";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 109) {
	    item = 1051302;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ�ȫ �ƾ��Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 110) {
	    item = 1070028;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��Ǫ�� ��ǲɽ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 111) {
	    item = 1071044;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ�ȫ �ƾ��ɽ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 112) {
	    item = 1050142;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ĵ� ǻ�� �Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 113) {
	    item = 1051166;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�巹�� ǻ�� �Ѻ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 114) {
	    item = 1702174;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ɺ��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 115) {
	    item = 1002878;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ������ ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 116) {
	    item = 1052178;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "���� ��Ʈ";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 117) {
	    item = 1002885;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "��ũ �巹�� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 118) {
	    item = 1051261;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�޸��� ��Ÿ��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 119) {
	    item = 1001062;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 120) {
	    item = 1051220;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� �巹��";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 121) {
	    item = 1081007;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�����ں��� �尩";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 122) {
	    item = 1003173;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�巡������ ����������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 123) {
	    item = 1102276;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�巡������ ������������";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 124) {
	    item = 1050178;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 125) {
	    item = 1070019;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 126) {
	    item = 1100001;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�������� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 127) {
	    item = 1000021;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �庸�� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 128) {
	    item = 1050114;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �庸�� �ǻ� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 129) {
	    item = 1010004;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �庸�� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 130) {
	    item = 1000022;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� ���� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 131) {
	    item = 1050115;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� ���� �ǻ� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 132) {
	    item = 1010005;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� ���� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 133) {
	    item = 1001028;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� ���� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 134) {
	    item = 1051115;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� �ǻ� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 135) {
	    item = 1071010;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�ؽ� �ڹ̺��� �Ź� (��)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 200) {
	    item = 1052661;
	    quantity = 1;
	    cost = 2000;
	    name = "���� ������";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 201) {
	    item = 1072856;
	    quantity = 1;
	    cost = 2000;
	    name = "�ҿﺣ�� ���� ����";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 150) {
	    item = 2048712;
	    quantity = 1;
	    cost = 1000;
	    name = "ȯ���� �Ҳ� ����100";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"dog#kThe #b"+cost+"#k#epoint#nWould you like to buy a?");
	}else if (sel == 151) {
	    item = 2048701;
	    quantity = 1;
	    cost = 1000;
	    name = "ȯ���� �Ҳ� ����110";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"dog#kThe #b"+cost+"#k#epoint#nWould you like to buy a?");
	}else if (sel == 152) {
	    item = 2048702;
	    quantity = 1;
	    cost = 1600;
	    name = "ȯ���� �Ҳ� ����120";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"dog#kThe #b"+cost+"#k#epoint#nWould you like to buy a?");
	}else if (sel == 153) {
	    item = 2048703;
	    quantity = 1;
	    cost = 1800;
	    name = "ȯ���� �Ҳ� ����130";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"dog#kThe #b"+cost+"#k#epoint#nWould you like to buy a?");
	}else if (sel == 154) {
	    item = 2048704;
	    quantity = 1;
	    cost = 2000;
	    name = "ȯ���� �Ҳ� ����140";
	    cm.sendYesNo("���� #i"+item+"##b"+quantity+"dog#kThe #b"+cost+"#k#epoint#nWould you like to buy a?");
	}else if (sel == 3012) {
	    item = 1003854;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�޼��� ���� ����";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3013) {
	    item = 1032185;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "�޼��� ���� �Ҳ�";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3014) {
	    item = 1122249;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Horn Tail necklace dream";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3015) {
	    item = 1052611;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Pink empty suit of your dreams";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3016) {
	    item = 1072818;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Balrog shoes of your dreams";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3024) {
	    item = 1082549;
	    quantity = 1;
	    cost = 2000;
	    name = "Cluck glove puppets";
	    equip = 1;
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4001168# #e2dog#nWould you like to purchase?");
	}else if (sel == 3025) {
	    item = 1112238;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Ink painting bubble ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");


	}else if (sel == 3018) {
	    item = 1112900;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Ralralra notes ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3019) {
	    item = 1112901;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Syabang syabang ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3020) {
	    item = 1112908;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Aurora ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3021) {
	    item = 1112924;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Lemon Shooting Star Ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3022) {
	    item = 1112925;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Blue Shooting Star Ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}else if (sel == 3023) {
	    item = 1112926;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Pink Shooting Star Ring";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");





	}else if (sel == 155) {
	    item = 1102278;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Raven Chaser Cape Horn";
            cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 156) {
	    item = 1001065;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Pink Angel Wing Cap (W)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 157) {
	    item = 1051252;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Pink Angel uniform (women)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #v4310034# #e2dog#nWould you like to purchase?");
	}else if (sel == 158) {
	    item = 1071031;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "Pink Angel Wing Shoes (Women)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"dog#kThe #Cgray##e"+cost+"#n#r + ��#k#epoint#nWould you like to buy a?");
	}
    }else if (status == 2){
if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("Exchange of want Supportpoint�� #b"+meso+"point Is that correct?\r\nAfter the exchange #r"+meso*20000+"Tome��#kThe You can get.");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
            cm.gainItem(4310034, -2);
	    cm.sendOk("#b#ePurchase completed#n#k");
	    cm.gainItem(item, quantity);
	    cm.dispose();
	    }else {
	    if(cm.getRC() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("#b"+(cost)+" Supportpoint#kThe using #b"+name+"#k "+quantity+"dogThe Bought.");
	    cm.sendOk("The purchase has been completed.");
	    cm.playerMessage(""+(cost)+" SupportpointThe using "+name+" "+quantity+"dogThe Bought.");
	    cm.gainRC(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("SupportpointNot enough.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("This inventory space.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getRC() > meso&&cm.getMeso()+(meso*20000) > 2147483647){
		cm.sendOk("There are too many smiles.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getRC() > meso&&cm.getMeso()+(meso*20000) <= 2147483647){
		cm.gainMeso(meso*20000);
		cm.gainRC(-meso);
		cm.sendOk("SupportpointThe He converted to methods.");
		cm.dispose();
	    }else{
		cm.sendOk("SupportpointNot enough.");
		cm.dispose();
		}
	}else{
	
	allstat = cm.getText()/100 * 6;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("decided SupportpointPlease write according to the unit.\r\n#r�� 100 Supportpoint#k = #bAll stats ��6#k");
	    cm.dispose();
	}else{
	cm.sendGetText("\r\n#eSelections#n : #i"+item+"# #z"+item+"#\r\n#eItem prices#n : #b#e"+cost
+"#npoint#k\r\n\r\n#e#Cgray#�� "+text1+" Supportpoint = All stats ��"+allstat+" #k#n\r\n#r�� 500 Supportpoint#k = #bATK / +3 hp#k");
        }
	}else{
	cm.sendOk("You can enter only numbers.");
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
	    cm.sendOk("Please write according to the unit of the sponsor specified point.\r\n#r�� 500 Supportpoint#k = #bATK / +3 hp#k");
	    cm.dispose();
	}else{
	cm.sendYesNo("#eSelections#n : #i"+item+"# #z"+item+"#\r\n#eItem prices#n : #b#e"+cost3+"#npoint\r\n\r\n#e#Cgray#�� "+text1+" Supportpoint = #rAll stats ��"+allstat+" #Cgray##n\r\n#e#Cgray#�� "+text2+" Supportpoint = #rDamage / hp +"+damage+" #k#n\r\n\r\n�� Are you sure you want the item of production?");
    	}
	}else{
	cm.sendOk("You can enter only numbers.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getRC() >= cost3){
	cm.sendOk("#b"+(cost3)+" Supportpoint#kThe using #b"+name+"#kof(The) It was produced.");
	cm.playerMessage(""+(cost3)+" SupportpointThe using "+name+"of(The) It was produced.");
	cm.gainSponserItem(item,'[Supportitem]',allstat,damage,0);
	cm.gainRC(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("SupportpointNot enough.");
	}
	}else{
	cm.dispose();
	}
}
