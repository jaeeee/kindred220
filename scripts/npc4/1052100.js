importPackage(Packages.constants);
importPackage(Packages.packet.creators);
var status = 0;
var invs = Array(1, 5);
var invv;
var selected;
var slot_1 = Array();
/*

����� �� �� �� (ria__adm) �� �ø�
�����ڴ� ����ε� ��
��ó ����� ū�ϳ�

*/



var slot_2 = Array();
var statsSel;
var hoo = 0;

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status--;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
    if (cm.haveItem(4310064,1)) {
            var ask = "#d#e�ʿ���ȭ#n#k �� �ð��ִ� �� �����ٳ� �Դϴ�.\r\n\r\n#r#e�ʿ���ȭ#n#k #b�� #e12�� �̻�#n���� �����ϸ� #e�ִ�30������#n �ø��Ǽ� �ֽ��ϴ�.#d#e [��ȭ ������: 40%����]#n#k\r\n\r\n#g#e[1ȸ ��ȭ��] �ý�������: 6~12, ��/������: 4~8#k#n\r\n\r\n #b ����� #e#r#z2049360# 30��#n#k #b�Դϴ�. \r\n#v4310064#�̶� ���� ��ȭ �Ͻ÷��� ���� �Է����ֽð� �ƴҽ� �ƹ��ų� �Է����ּ��� \r\n(���� #r#e������ 100%#n#k#b + #e�߰�����#n + �Ҹ���尭 #e10��#n ����)#k";
        cm.sendGetText(ask);
     } else {
       var ask = "#fn�������##e#b#fs20#�ʿ���ȭ��?#n\r\n\r\n#l#fs15#�ʿ���ȭ�� 12�� �̻� �������� 30�� ���� ��ȭ�ϴ� �ý����Դϴ�.#n\r\n \r\n\r\n#k#b#e#fs20#�ʿ���ȭ�� ����ϳ���?#n\r\n#fs15#��ȭ�� �ʿ��� �������� #k#r#i2049360##z2049360# 10��#k#b �Դϴ�. ��ȭ �������� #k#r40%#k#b���� �̸� 1ȸ��ȭ�� #k#r�ý���  6~12 ���ݷ�/���� 4~8#k#b �� �����մϴ�. \r\n\r\n#fs20##r#e������ �����ø� �����մϴ�.#n#k";
        cm.sendNext(ask);
        cm.setGetText("����");
      }
    } else if (status == 1) {
      if (cm.getText().equals("��")) {
      hoo = 50;
      } 
        
        var ok = false;
        var option = "#fn�������##fs20##e#r�ʿ���ȭ�� �������� ������ �ּ���#n#k\r\n#b";
        for (var x = 0; x < invs.length; x++) {
            var inv = cm.getInventory(invs[x]);
            for (var i = 0; i <= inv.getSlotLimit(); i++) {
                if (x == 0) {
                    slot_1.push(i);
                } else {
                    slot_2.push(i);
                }
                var it = inv.getItem(i);
                if (it == null) {
                    continue;
                }

                var itemid = it.getItemId();
                if (cm.isCash(it.getItemId())) {
                    var itemid = 0;
                } else {
                    var itemid = it.getItemId();
                }
                if (!GameConstants.isEquip(itemid)) {
                    continue;
                }
                ok = true;
                option += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "##l";
            }
        }
        if (!ok) {
            cm.sendOk("�������� ���׿�. Ȥ�� �����ϰ� ��Ű� �ƴѰ���?");
            cm.dispose();
            return;
        }
        cm.sendSimple(option + "#k");
    } else if (status == 2) {
        invv = selection / 1000;
        selected = selection % 1000;
        var inzz = cm.getInventory(invv);
        if (invv == invs[0]) {
            statsSel = inzz.getItem(slot_1[selected]);
        } else {
            statsSel = inzz.getItem(slot_2[selected]);
        }
        if (statsSel == null) {
            cm.sendOk("�����Դϴ�. �ٽ� �õ����ּ���.");
            cm.dispose();
            return;
        }
        if (statsSel.getEnhance() >= 30 || statsSel.getEnhance() < 12) {
            cm.sendOk("�ʿ� ��ȭ�� �� �� �����ϴ�.");
            cm.dispose();
            return;
        }
        if (!cm.haveItem(2049360,10)) {
            cm.sendOk("#e#r#z2049360##k#n�� �����մϴ�.");
            cm.dispose();
            return;
        }
           if (hoo == 50) {
            cm.gainItem(4310064,-1);
            cm.gainItem(2049360,10);
        }
        if ((Math.floor(Math.random() * 100) + 1) >= 50 + hoo) {
          //  cm.fakeRelog();
         //   cm.updateChar();
            cm.sendOk("#fUI/UIWindow2.img/aswanResult/resultWindow/resultImage/fail#");
        cm.gainItem(2049360,-10);
            cm.dispose();
            return;
        }
        var als = Array (6,7,8,9,10,10,11,12);
	      var atk = Array (4,5,6,7,7,8);
	      var alst = Math.floor(Math.random() * als.length);
	      var amtk = Math.floor(Math.random() * atk.length);
        statsSel.setStr(statsSel.getStr() + als[alst] + hoo / 10);
        statsSel.setDex(statsSel.getDex() + als[alst] + hoo / 10);
        statsSel.setInt(statsSel.getInt() + als[alst] + hoo / 10);
        statsSel.setLuk(statsSel.getLuk() + als[alst] + hoo / 10);
        statsSel.setWatk(statsSel.getWatk() + atk[amtk]+ hoo / 25);
        statsSel.setMatk(statsSel.getMatk() + atk[amtk]+ hoo / 25);
        statsSel.setEnhance(statsSel.getEnhance() + 1);
        cm.getPlayer().send(MainPacketCreator.updateEquipSlot(statsSel));
        cm.sendOk("#fUI/UIWindow2.img/aswanResult/resultWindow/resultImage/victory#");
        cm.gainItem(2049360,-10);
        cm.dispose();
    }
}






