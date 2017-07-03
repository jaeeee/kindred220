importPackage(Packages.constants);
importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var invs = Array(1, 5);
var invv;
var selected;
var slot_1 = Array();



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
        var ask = "#b#e25성 강화#n는 확률이 100% 입니다.\r\n#e< 한번에 #i4310014# 1개가 소모됩니다. >#n\r\n\r\n<주의사항>:이 코인을쓸때는 장비강화를 아무것도 하지않은 템이여야만 합니다";
        cm.sendYesNo(ask);
    } else if (status == 1) {
        var ok = false;
        var option = "강화할 아이템을 선택해 주세요\r\n#b";
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
                option += "#L" + (invs[x] * 1000 + i) + "##v" + itemid + "##t" + itemid +
                        "##l\r\n";
            }
        }
        if (!ok) {
            cm.sendOk("아이템이 없습니다. 장비창을 확인해주세요.");
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
            cm.sendOk("오류가 발생했습니다. 잠시후 다시 시도해주세요.");
            cm.dispose();
            return;
        }
        if (statsSel.getEnhance() >= 25 ) {
            cm.sendOk("이미 25성 강화가 되어있습니다.");
            cm.dispose();
            return;
	}
        if(!cm.haveItem(4310014, 1)) {
            cm.sendOk("초월강화는 #i4310014# 이 아이템이 1개 필요합니다.");
            cm.dispose();
            return;
        }
        if ((Math.floor(Math.random() * 100) + 1) >= 100 + hoo) {
            cm.gainItem(4310014, -1);
            cm.fakeRelog();
	    cm.updateChar();
        cm.sendOk("#fs 50##fn궁서체# #r강화 실패..#k");
            cm.dispose();
            return;
        }
        statsSel.setStr(statsSel.getStr() + 500);
        statsSel.setDex(statsSel.getDex() + 500);
        statsSel.setInt(statsSel.getInt() + 500);
        statsSel.setLuk(statsSel.getLuk() + 500);
        statsSel.setWatk(statsSel.getWatk() + 700);
        statsSel.setMatk(statsSel.getMatk() + 700);
        statsSel.setEnhance(statsSel.getEnhance() + 25);
        cm.gainItem(4310014, -1);
        cm.fakeRelog();
        cm.updateChar();
        cm.sendOk("#fs 50##fn궁서체# #b강화 성공!#k");
}
}