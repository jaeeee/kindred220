/*


내꼬임


*/


var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
 if (mode == -1) {
         cm.dispose();
     } else {
         if (mode == 0 && status == 0) {
              cm.dispose();
              return;
         }
         if (mode == 1)
              status++;
         else
              status--;
         if (status == 0) {
var j_coin = cm.itemQuantity(4310026);
   var text = "홍보 상점 입니다.\r\n";
   text += "\r\n#e#b현재 고객님이 보유하고 계신 증표는 #r#n#e"+j_coin+"#k #e개입니다.#k\r\n";
   text += "\r\n\r\n#l#e<장갑>#n";
   text += "\r\n#L3##i1082392# - 올탯50 공10 - #r8개/잠재:총댐20퍼,올텟20퍼,보공40퍼#k\r\n\r\n";
   text += "\r\n\r\n#l#e< 후원 랭킹 이벤트 아이템 >#n";
   text += "\r\n#L4# #i1142656# 후원 랭킹 1등 유저용 #r1개#k";   
   text += "\r\n#L5# #i1102377# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L6# #i1102378# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L7# #i1102511# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L8# #i1102629# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L9# #i1102450# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L10# #i1102451# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L11# #i1102546# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L12# #i1102547# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L13# #i1102548# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L14# #i1102572# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L15# #i1102624# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L16# #i1102532# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L17# #i1102630# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L18# #i1102644# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L19# #i1102466# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L20# #i1102643# - 올탯50 공10 - #r5개#k";
   text += "\r\n\r\n#l#e<장비>#n";
   text += "\r\n#L21# #i1052671# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L22# #i1002665# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L23# #i1052137##z1052137# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L24# #i1702299##z1702299# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L25# #i1702442##z1702442# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L26# #i1702211##z1702211# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L27# #i1002738##z1002738# - 올탯50 공10 - #r5개#k";
   text += "\r\n#L28# #i1702309##z1702309# - 올탯50 공10 - #r5개#k";
   cm.sendSimple(text);
  } else if (status == 1) {
   if (selection == 0) {
    if (cm.haveItem(4001620, 1500)) {
     cm.gainItem(4001620, -1500);
     cm.gainItem(4310067, 1000);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 3) {
    if (cm.haveItem(4001620, 8)) {
     cm.gainItem(4001620, -8);
     cm.gainSponserItem(1082392,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 4) {
    if (cm.haveItem(1322013, 1)) {
     cm.gainItem(1322013, -1);
     cm.gainSponserItem(1142656,'[후원랭커]',5000,3500,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 5) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102377,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 6) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102378,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 7) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102511,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 8) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102629,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 9) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102450,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 10) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102451,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 11) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102546,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 12) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102547,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 13) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102548,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 14) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102572,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 15) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102624,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 16) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102532,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 17) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102630,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 18) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102644,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 19) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102466,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 20) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1102643,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 21) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1052671,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 22) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1002665,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 23) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1052137,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 24) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1702299,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 25) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1702442,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 26) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1702211,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 27) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1002738,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 28) {
    if (cm.haveItem(4001620, 5)) {
     cm.gainItem(4001620, -5);
     cm.gainSponserItem(1702309,'[홍보]',50,10,0);
     cm.sendOk("교환이 완료되었습니다.");
     cm.dispose();
    } else {
     cm.sendOk("증표가 부족합니다.");
     cm.dispose();
    }
   }
  }
 }
}