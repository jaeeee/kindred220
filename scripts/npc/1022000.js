/*
     Copyright �� 2012- ONLineWorld Allright Reserved.

    �� ��ũ��Ʈ�� �¶��ο����� �������� OnS�� ������ ������ ��ũ��Ʈ�Դϴ�.
    �� ���� �� �Խ�, �� �ٸ� ���� ����̺꿡 ������ �����ϴ� ���� ���ϸ�,
    �������� ��� ���� �� �ּ��� ����� ���� ������� �ƴ��մϴ�.

    ������ ���� �ʴ� �̻� �� ��ũ��Ʈ�� ���� �� �� ����,
    ���� �������� ���ǰ� ������ �˰� �Ǹ�

    OnS�� ����<kkong1001@naver.com>���� ������ ���ֽñ� �ٶ��ϴ�.

    NPC : ���
 */

var chat = "#b#h0##k�� �ȳ��ϼ���! �������ɻ����̿���.\r\n";
var menu = ["#b���� ����#k", "#b������ ����#k", "#b�ü� ����#k\r\n", "#b���� ����#k", "#b���� ����#k\r\n"];
var common = [["�ȵ���̵�", 121211], ["����", 10001], ["�Ͱ�", 10004], ["����", 10007], ["�尩", 10008], ["�ѹ���", 10009], ["����", 10010]];
var warrior =  [["�Ѽյ���", 10116], ["�μյ���", 10117], ["�Ѽյб�", 10118], ["�μյб�", 10119], ["����", 10126], ["â", 10127], ["�Ѽհ�", 10129], ["�μհ�", 10130], ["�������", 10115]];
var mage = [["������", 10228], ["�ϵ�", 10231], ["���̴׷ε�", 10232]];
var archer = [["ȭ��", 10416], ["Ȱ", 10320], ["����", 10322], ["��󺸿��", 10337]];
var thief = [["�ƴ�", 10421], ["ǥâ", 11], ["�ܰ�", 10423], ["�������ҵ�", 10801], ["���̵�", 10431], ["����", 10436]];
var pirate = [["ĳ��", 10515], ["�ҿｴ��", 10533], ["��Ŭ", 10525]];
var cash = [[" #b1.��� �ֹ�����,���� + 7��(+7)/��Ƽ��(+9),", 10601], ["2.����ֹ��� #r����,�尭,Ȳ��,���� ��", 9000152]];
var Soul = [["����,������,������ũ Ƽ��", 9020004]];
var vvvv = [["������ �ȵ���̵�", 121211], ["���� ��ű�(����,��,��Ʈ,���Ʈ ��)", 121212]];
var vvvf = [["���� #r[HOT&NEW]#k �� ���ڵ� (1)", 121213], ["���� #r[HOT&NEW]#k �� ���ڵ� (2)", 121214], ["���� #r[HOT&NEW]#k �� ���ڵ� (3)", 121215]];
var vvvd = [["���� #r[HOT&NEW]#k �� �ʺ��ڿ빫���", 1021001]];
var vvvq = [["#r[NEW] ť�� ,���α�ȯ ����#k", 123456]];

c = -1;
npc = 0;

function start() {
	//cm.dispose();
    var text = "";
    for (var i = 0; i < menu.length; i++) text+= "#L" + i + "#" + menu[i] + "#l";
    cm.sendSimple(text);
}

function action(m, t, s) {
    if (m != 1) {
        cm.dispose();
        return;
    } else npc++;
    if (npc == 1) {
        c = s;
        talk = "#b";
        for (var j = 0; j < shops(s).length; j++) talk += "#L" + j + "# " + shops(s)[j][0] +"#l\r\n";
        cm.sendSimple(talk);
    } else if (npc == 2) {
        cm.openShop(shops(c)[s][1]);
        cm.dispose();
    }
}

function shops(s) {
    s -= 1;
    switch (s) {
        case -1: return warrior;
        case 0: return mage;
        case 1: return archer;
        case 2: return thief;
        case 3: return pirate;
        case 4: return vvve;
        case 5: return vvvq;
        case 6: return cash;
        case 7: return coin;
        case 8: return vvvv;
        case 9: return vvvf;
        case 10: return vvvd;
    }
    return common;
}
