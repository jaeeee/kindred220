/*
������ : ���� (ljw5992@naver.com) / (dbg_yeane@nate.com)
*/

var want;
var potential1;
var potential2;
var potential3;
var thing;

var mage = new Array(new Array(1, 1003173, 1), new Array(1, 1102276, 1), new Array(1, 1082296, 1), new Array(1, 1052315, 1), new Array(1, 1072486, 1)); //���� - �巡������

var archer = new Array(new Array(1, 1003174, 1), new Array(1, 1102277, 1), new Array(1, 1082297, 1), new Array(1, 1052316, 1), new Array(1, 1072487, 1)); //�ü� - ������

var thief = new Array(new Array(1, 1003175, 1), new Array(1, 1102278, 1), new Array(1, 1082298, 1), new Array(1, 1052317, 1), new Array(1, 1072488, 1)); //���� - ���̺�ȥ

var knight = new Array(new Array(1, 1003172, 1),new Array(1, 1102275, 1), new Array(1, 1082295, 1), new Array(1, 1052314, 1), new Array(1, 1072485, 1)); //���� - ���̿���Ʈ

var pirate = new Array(new Array(1, 1003176, 1), new Array(1, 1102279, 1), new Array(1, 1082299, 1), new Array(1, 1052318, 1), new Array(1, 1072489, 1)); //���� - ��ũ��

var itemCategorys = new Array("���硡 ��- �����巡������","�ü����� - ����������","�������� - �������̺�ȥ","���硡�� - �������̿���Ʈ","�������� - ������ũ����");

var status = -1;
var menuSelect = -1;
var select = -1;
var levelselect = -1;

var grade;

var cost = 0;
	
var result_a = 0;
var result_b = 0;
var result_c = 0;
var result_d = 0;
var totalresult = 0;


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
	
        var trade = "�ȳ��ϼ���. #b���� ��#k ���� NPC�Դϴ�.\r\n�����Ͻ� �������� ������ �������ּ���.\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "���ϴ� �������� ��󺸼���.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #b[#z"+itemsArray[i][1]+"#]\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("�����Ͻ� �������� #i"+itemsArray[select][1]+"##b[#z"+itemsArray[select][1]+"#]#k �½��ϱ�?");
    } else if (status == 3) {
	var itemsArray = getArray(menuSelect);
	levelselect = selection;
	var spfirst = "#b���� ���#k�� �������ּ���.\r\n";
	spfirst += "#L2000##r����#k ������#b[����,������,������]#k\r\n";
	spfirst += "#L3000##r����ũ#k ����#b[����,������,������]#k\r\n";
	spfirst += "#L4000##r�����帮#k ��#b[������,������,������]#k\r\n";
	cm.sendSimple(spfirst);
    } else if (status == 4) {
		if (selection == 2000) {
		cost = 10000000;
		} else if (selection == 3000){
		cost = 30000000;
		} else if (selection == 4000){
		cost = 100000000;
		}
	result_a = cost;
 	if (selection == 2000) {
	thing = 2;
	grade = 18;
	var selfirst = "#r#e[����]#n#k�� �����ϼ̽��ϴ�. #bù��° ���� �ɼ�#k�� �������ּ���.\r\n";
	selfirst += "#L20041##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20042##b��ø#k���� ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20043##b����#k�� ��������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20044##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30041##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30042##b��ø#k���� ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30043##b����#k�� ��������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30044##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	cm.sendSimple(selfirst);
	} else if (selection == 3000){
	thing = 3;
	grade = 19;
	var selfirst = "#r#e[����ũ]#n#k�� �����ϼ̽��ϴ�. #bù��° ���� �ɼ�#k�� �������ּ���.\r\n";
	selfirst += "#L20041##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20042##b��ø#k���� ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20043##b����#k�� ��������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20044##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30041##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30042##b��ø#k���� ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30043##b����#k�� ��������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30044##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L40041##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
	selfirst += "#L40042##b��ø#k���� ������#r����%#k������#b[������,������,������]#k\r\n";
	selfirst += "#L40043##b����#k�� ��������#r����%#k������#b[������,������,������]#k\r\n";
	selfirst += "#L40044##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
	cm.sendSimple(selfirst);
	} else if (selection == 4000){
	thing = 4;
	grade = 20;
	var selfirst = "#r#e[�����帮]#n#k�� �����ϼ̽��ϴ�. #bù��° ���� �ɼ�#k�� �������ּ���.\r\n";
	selfirst += "#L20041##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20042##b��ø#k���� ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20043##b����#k�� ��������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L20044##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30041##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30042##b��ø#k���� ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30043##b����#k�� ��������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L30044##b��#k������ ������#r��%#k��������#b[����,������,������]#k\r\n";
	selfirst += "#L40041##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
	selfirst += "#L40042##b��ø#k���� ������#r����%#k������#b[������,������,������]#k\r\n";
	selfirst += "#L40043##b����#k�� ��������#r����%#k������#b[������,������,������]#k\r\n";
	selfirst += "#L40044##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
	cm.sendSimple(selfirst);
	} 
	}else if (status == 5){
		if (selection == 20041 || selection == 20042 || selection == 20043|| selection == 20044){
		cost = 30000000;
		} else if (selection == 30041 ||selection == 30042 ||selection == 30043|| selection == 30044){
		cost = 80000000;
		} else if (selection == 40041 ||selection == 40042 ||selection == 40043|| selection == 40044){
		cost = 300000000;
		}
	result_b = cost;
	potential1 = selection
		if (selection >= 0 && thing == 2) {
		var seltwice = "#b�ι�° ���� �ɼ�#k�� �������ּ���.\r\n";
		seltwice += "#L20041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 3) {
		var seltwice = "#b�ι�° ���� �ɼ�#k�� �������ּ���.\r\n";
		seltwice += "#L20041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 4) {
		var seltwice = "#b�ι�° ���� �ɼ�#k�� �������ּ���.\r\n";
		seltwice += "#L20041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L40041##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
		seltwice += "#L40042##b��ø#k���� ������#r����%#k������#b[������,������,������]#k\r\n";
		seltwice += "#L40043##b����#k�� ��������#r����%#k������#b[������,������,������]#k\r\n";
		seltwice += "#L40044##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
		cm.sendSimple(seltwice);
		}
	}else if (status == 6){
		if (selection == 20041 || selection == 20042 || selection == 20043 || selection == 20044){
		cost = 30000000;
		} else if (selection == 30041 ||selection == 30042 ||selection == 30043|| selection == 30044){
		cost = 80000000;
		} else if (selection == 40041 ||selection == 40042 ||selection == 40043|| selection == 40044){
		cost = 300000000;
		}
	result_c = cost;
	potential2 = selection
		if (selection >= 0 && thing == 2) {
		var seltwice = "#b����° ���� �ɼ�#k�� �������ּ���.\r\n";
		seltwice += "#L20041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 3) {
		var seltwice = "#b����° ���� �ɼ�#k�� �������ּ���.\r\n";
		seltwice += "#L20041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		cm.sendSimple(seltwice);
		}
		if (selection >= 0 && thing == 4) {
		var seltwice = "#b����° ���� �ɼ�#k�� �������ּ���.\r\n";
		seltwice += "#L20041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L20044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30041##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30042##b��ø#k���� ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30043##b����#k�� ��������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L30044##b��#k������ ������#r��%#k������#b[����,������,������]#k\r\n";
		seltwice += "#L40041##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
		seltwice += "#L40042##b��ø#k���� ������#r����%#k������#b[������,������,������]#k\r\n";
		seltwice += "#L40043##b����#k�� ��������#r����%#k������#b[������,������,������]#k\r\n";
		seltwice += "#L40044##b��#k������ ������#r����%#k������#b[������,������,������]#k\r\n";
		cm.sendSimple(seltwice);
		}
	}else if (status == 7){
	potential3 = selection;
		if (selection == 20041 || selection == 20042 || selection == 20043|| selection == 20044){
		cost = 30000000;
		} else if (selection == 30041 ||selection == 30042 ||selection == 30043|| selection == 30044){
		cost = 80000000;
		} else if (selection == 40041 ||selection == 40042 ||selection == 40043|| selection == 40044){
		cost = 300000000;
		}
	result_d = cost;
	totalresult = result_a + result_b + result_c + result_d;

	var itemsArray = getArray(menuSelect);
	cm.sendYesNo("�ֹ��Ͻ� �������� ���Ÿ� ���Ͻø� #b#e[��]#n#k �ƴ϶�� #r#e[�ƴϿ�]#n#k�� �����ּ���.\r\n\r\n#e[�� ���ۺ��]#n\r\n#b����Ƽ�� ����#k : #r20��#k\r\n#b�޼�#k : #r"+totalresult+" �޼�#k");
	}else if (status == 8){
	var itemsArray = getArray(menuSelect);
	if (cm.getMeso() >= totalresult){
		if (cm.canHold(itemsArray[select][1])){
			if (cm.haveItem(4310034, 20)){	
	cm.sendOk("�ֹ��Ͻ� �������� ������ �Ϸ�Ǿ����ϴ�.");
        cm.gainPotentialItem(itemsArray[select][1],1,thing,grade,potential1,potential2,potential3);
	cm.gainMeso(-totalresult);
	cm.gainItem(4310034, -20);
	cm.dispose();
			}else{
			cm.sendOk("����Ƽ�� ������ �����մϴ�.");
			cm.dispose();
			}
		}else{
		cm.sendOk("�κ��丮 ������ �����մϴ�.");
		cm.dispose();
		}

	}else{
	cm.sendOk("�޼Ұ� �����մϴ�.");
	cm.dispose();
	}
    }
}

function getArray(sel) {
if (sel==0)return mage;
if (sel==1)return archer;
if (sel==2)return thief;
if (sel==3)return knight;
if (sel==4)return pirate;
}
