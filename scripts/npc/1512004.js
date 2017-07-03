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
var j_coin = cm.itemQuantity(4310029);
   var text = "이번에 새롭게 변경된 레벨업 코인 상점입니다. 일정 레벨업시에 지급되는 #b십자 코인#k으로 올스텟과 공격력이붙은 다양한 아이템과 교환이 가능해요!\r\n\r\n";
   text += "내가 가진 레벨업 코인 : #b"+j_coin+"#k개\r\n";
//   text += "#l#e<장갑>#n";
//   text += "\r\n#L3##i1082392# - 올스텟(50) 공/마(10) - #r8개/잠재:총댐20퍼,올텟20퍼,보공40퍼#k\r\n\r\n";
   text += "\r\n#l#e<날개>#n";
   text += "\r\n#L4# #i1102376# - 올스텟(50) 공/마(10) - #b10개#k";   
   text += "\r\n#L5# #i1102377# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L6# #i1102378# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L7# #i1102511# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L8# #i1102629# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L9# #i1102450# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L10# #i1102451# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L11# #i1102546# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L12# #i1102547# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L13# #i1102548# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L14# #i1102572# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L15# #i1102624# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L16# #i1102532# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L17# #i1102630# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L18# #i1102644# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L19# #i1102466# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L20# #i1102643# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n\r\n#l#e<장비>#n";
   text += "\r\n#L21# #i1052671# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L22# #i1002665# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L23# #i1052137##z1052137# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L24# #i1702299##z1702299# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L25# #i1702442##z1702442# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L26# #i1702211##z1702211# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L27# #i1002738##z1002738# - 올스텟(50) 공/마(10) - #b10개#k";
   text += "\r\n#L28# #i1702309##z1702309# - 올스텟(50) 공/마(10) - #b10개#k";
   cm.sendSimple(text);
  } else if (status == 1) {
   if (selection == 0) {
    if (cm.haveItem(4310057, 1500)) {
     cm.gainItem(4310057, -1500);
     cm.gainItem(4310067, 1000);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 3) {
    if (cm.haveItem(4310057, 8)) {
     cm.gainItem(4310057, -8);
     cm.gainSponserItem(1082392,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 4) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102376,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 5) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102377,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 6) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102378,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 7) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102511,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 8) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102629,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 9) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102450,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 10) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102451,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 11) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102546,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 12) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102547,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 13) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102548,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 14) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102572,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 15) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102624,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 16) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102532,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 17) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102630,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 18) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102644,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 19) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102466,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 20) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102643,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 21) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1052671,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 22) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1002665,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 23) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1052137,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 24) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702299,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 25) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702442,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 26) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702211,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 27) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1002738,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   } else if (selection == 28) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702309,'[레벨업 보상]',50,10,0);
     cm.sendOk("교환이 완료되었어요!");
     cm.dispose();
    } else {
     cm.sendOk("#b십자 코인#k(레벨업 코인)이 부족합니다.");
     cm.dispose();
    }
   }
  }
 }
}