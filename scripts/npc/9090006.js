/*

제작자 : 닉네임 (zmqkf4430)유기

*/
function start() {
    status = -1;
    action(1, 0, 0);
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
            var chat = "#r연이 온라인#k에 오신 것을 환영합니다.#b\r\n";
            chat += "\r\n#L0#핑키 드래곤 스킬을 배우겠습니다.(공3)";
            chat += "\r\n#L1#아이스 드래곤 스킬을 배우겠습니다.(공5)";
            chat += "\r\n#L2#레드 드래곤 스킬을 배우겠습니다.(공7)\r\n";
            chat += "\r\n#L3#말랑핑크빈 스킬을 배우겠습니다.(공3)";
            chat += "\r\n#L4#말랑핑크빈 스킬을 배우겠습니다.(공5)";
            chat += "\r\n#L5#말랑핑크빈 스킬을 배우겠습니다.(공7)\r\n";
            chat += "\r\n#L6#상어의기운 스킬을 배우겠습니다.(공3)";
            chat += "\r\n#L7#상어의기운 스킬을 배우겠습니다.(공5)";
            chat += "\r\n#L8#상어의기운 스킬을 배우겠습니다.(공7)\r\n";
            chat += "\r\n#L9#곰때문이야 스킬을 배우겠습니다.(공3)";
            chat += "\r\n#L10#곰때문이야 스킬을 배우겠습니다.(공5)";
            chat += "\r\n#L11#곰때문이야 스킬을 배우겠습니다.(공7)";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
         if ((cm.haveItem(5000243, 1))) {
        var chat = "드래곤의놀라운축복 #rLv.1#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000020,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000243#핑키드래곤 이 있어야 합니다.");
        cm.dispose();
}
} else if (selection == 1) {
         if ((cm.haveItem(5000244, 1))) {
        var chat = "드래곤의놀라운축복 #rLv.2#k 스킬이 지급되었습니다.";
         cm.teachSkill(80000021,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000244#아이스드래곤 이 있어야 합니다.");
        cm.dispose();
}
} else if (selection == 2) {
         if ((cm.haveItem(5000245, 1))) {
        var chat = "드래곤의놀라운축복 #rLv.3#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000022,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000245#레드드래곤 이 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 3) {
         if ((cm.haveItem(5000240, 1))) {
        var chat = "핑크빈매니아 #rLv.1#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000017,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000240#말랑핑크빈 이 1마리가 있어야 합니다.");
        cm.dispose();
       }
} else if (selection == 4) {
         if ((cm.haveItem(5000240, 2))) {
        var chat = "핑크빈매니아 #rLv.2#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000018,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000240#말랑핑크빈 이 2마리가 있어야 합니다.");
        cm.dispose();
    }
} else if (selection == 5) {
         if ((cm.haveItem(5000240, 3))) {
        var chat = "핑크빈매니아 #rLv.3#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000019,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000240#말랑핑크빈 이 3마리가 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 6) {
         if ((cm.haveItem(5000239, 1))) {
        var chat = "상어의기운 #rLv.1#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000013,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000239#어항속상어 가 1마리가 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 7) {
         if ((cm.haveItem(5000239, 2))) {
        var chat = "상어의기운 #rLv.2#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000014,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000239#어항속상어 가 2마리가 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 8) {
         if ((cm.haveItem(5000239, 3))) {
        var chat = "상어의기운 #rLv.3#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000015,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000239#어항속상어 가 3마리가 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 9) {
         if ((cm.haveItem(5000249, 1))) {
        var chat = "곰때문이야 #rLv.1#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000026,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000249#베이지 곰돌이 가 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 10) {
         if ((cm.haveItem(5000250, 1))) {
        var chat = "곰때문이야 #rLv.2#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000027,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000250#핑크 곰돌이 가 있어야 합니다.");
        cm.dispose();
        }
} else if (selection == 11) {
         if ((cm.haveItem(5000251, 1))) {
        var chat = "곰때문이야 #rLv.3#k 스킬이 지급되었습니다.";
        cm.teachSkill(80000028,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000251#하늘 곰돌이 가 있어야 합니다.");
        cm.dispose();
        }
      }
   }
  }
}


