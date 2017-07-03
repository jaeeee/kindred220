/*

	Ndrive 유물교환 스크립트

	엔피시아이디 : 1012112

	엔피시 이름 : 토리

	엔피시가 있는 맵 : 헤네시스 : 헤네시스공원 (100000200)

	엔피시 설명 : 유물교환


*/
importPackage(Packages.client);
var status = 0;

function start() {
    status = -1;
    action (1, 0, 0);
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
        var chat = "#e저는 #r유물점수교환#k NPC입니다.\r\n원하시는 아이템을 골라주세요.#n\r\n\r\n#b내 유물점수 : #e"+(cm.getPlayer().getRelic()) +"점#n\r\n\r\n\r\n";
        chat += "보상 Comming Soon";
        chat += "#b#L2##i3010365##z3010365# #r(필요점수 : 2222점)#l\r\n";
        chat += "#b#L4##i1003527##z1003527# #r(필요점수 : 22000점)#l\r\n";
        chat += "#b#L8##i1112941##z1112941# #r(필요점수 : 14444점)#l\r\n";
        chat += "#b#L9##i4001832##z4001832# x5000 #r(필요점수 : 30000점)#l\r\n";
        chat += "#b#L0##i1142407##z1142407# #r(필요점수 : 30000점)#l\r\n";
        chat += "#b#L5##i1022138##z1022138# #r(필요점수 : 36000점)#l\r\n";
        chat += "#b#L3##i1012316##z1012316# #r(필요점수 : 44000점)#l\r\n";
        chat += "#b#L6##i1112320##z1112320# #r(필요점수 : 6666점)#l\r\n";
       chat += "#b#L7##i1112940##z1112940# #r(필요점수 : 14444점)#l\r\n";
       chat += "#b#L8##i1112941##z1112941# #r(필요점수 : 14444점)#l\r\n";
        cm.sendSimple(chat);
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getRelic() >= 30000) {
                cm.sendYesNo("#e정말 #i1142407##b#z1142407##k으로 교환하시겠습니까?#n");
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         } else if (selection == 2) {
            if (cm.getPlayer().getRelic() >= 2222) {
                cm.sendYesNo("#e정말 #i3010365##b#z3010365##k로 교환하시겠습니까?#n");
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         } else if (selection == 3) {
            if (cm.getPlayer().getRelic() >= 44000) {
                cm.sendYesNo("#e정말 #i1012316##b#z1012316##k으로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         } else if (selection == 4) {
            if (cm.getPlayer().getRelic() >= 22000) {
                cm.sendYesNo("#e정말 #i1003527##b#z1003527##k로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         } else if (selection == 5) {
            if (cm.getPlayer().getRelic() >= 36000) {
                cm.sendYesNo("#e정말 #i1022138##b#z1022138##k으로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         } else if (selection == 6) {
            if (cm.getPlayer().getRelic() >= 6666) {
                cm.sendYesNo("#e정말 #i1112320##b#z1112320##k으로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
}
 } else if (selection == 7) {
            if (cm.getPlayer().getRelic() >= 14444) {
                cm.sendYesNo("#e정말 #i1112940##b#z1112940##k으로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
}
 } else if (selection == 8) {
            if (cm.getPlayer().getRelic() >= 14444) {
                cm.sendYesNo("#e정말 #i1112941##b#z1112941##k으로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         
 } else if (selection == 9) {
            if (cm.getPlayer().getRelic() >= 30000) {
                cm.sendYesNo("#e정말 #i4001832##z4001832#x5000#k 으로 교환하시겠습니까?#n");
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
                status++;
            } else {
                cm.sendOk("#e#r유물점수#k가 부족합니다.#n");
                cm.dispose();
            }
         }         
    } else if (status == 2) {
       cm.getPlayer().addRelic(-30000);
       cm.gainItem(1142407, 1);
       cm.dispose();
    } else if (status == 3) {
       cm.getPlayer().addRelic(-500);
       cm.gainItem(2000005, 20);
       cm.dispose();
    } else if (status == 4) {
       cm.getPlayer().addRelic(-2222);
       cm.gainItem(3010365, 1);
       cm.dispose();
    } else if (status == 5) {
       cm.getPlayer().addRelic(-44000);
       cm.gainItem(1012316, 1);
       cm.dispose();
    } else if (status == 6) {
       cm.getPlayer().addRelic(-22000);
       cm.gainItem(1003527, 1);
       cm.dispose();
    } else if (status == 7) {
       cm.getPlayer().addRelic(-36000);
       cm.gainItem(1022138, 1);
       cm.dispose();
    } else if (status == 8) {
       cm.getPlayer().addRelic(-6666);
       cm.gainItem(1112320, 1);
       cm.dispose();
    } else if (status == 9) {
       cm.getPlayer().addRelic(-14444);
       cm.gainItem(1112940, 1);
       cm.dispose();
    } else if (status == 10) {
       cm.getPlayer().addRelic(-14444);
       cm.gainItem(1112941, 1);
       cm.dispose();
       } else if (status == 11) {
       cm.getPlayer().addRelic(-30000);
       cm.gainItem(4001832, 5000);
       cm.dispose();    
    }
  }
}