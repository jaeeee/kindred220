/*


������


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
   var text = "�̹��� ���Ӱ� ����� ������ ���� �����Դϴ�. ���� �������ÿ� ���޵Ǵ� #b���� ����#k���� �ý��ݰ� ���ݷ��̺��� �پ��� �����۰� ��ȯ�� �����ؿ�!\r\n\r\n";
   text += "���� ���� ������ ���� : #b"+j_coin+"#k��\r\n";
//   text += "#l#e<�尩>#n";
//   text += "\r\n#L3##i1082392# - �ý���(50) ��/��(10) - #r8��/����:�Ѵ�20��,����20��,����40��#k\r\n\r\n";
   text += "\r\n#l#e<����>#n";
   text += "\r\n#L4# #i1102376# - �ý���(50) ��/��(10) - #b10��#k";   
   text += "\r\n#L5# #i1102377# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L6# #i1102378# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L7# #i1102511# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L8# #i1102629# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L9# #i1102450# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L10# #i1102451# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L11# #i1102546# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L12# #i1102547# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L13# #i1102548# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L14# #i1102572# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L15# #i1102624# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L16# #i1102532# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L17# #i1102630# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L18# #i1102644# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L19# #i1102466# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L20# #i1102643# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n\r\n#l#e<���>#n";
   text += "\r\n#L21# #i1052671# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L22# #i1002665# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L23# #i1052137##z1052137# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L24# #i1702299##z1702299# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L25# #i1702442##z1702442# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L26# #i1702211##z1702211# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L27# #i1002738##z1002738# - �ý���(50) ��/��(10) - #b10��#k";
   text += "\r\n#L28# #i1702309##z1702309# - �ý���(50) ��/��(10) - #b10��#k";
   cm.sendSimple(text);
  } else if (status == 1) {
   if (selection == 0) {
    if (cm.haveItem(4310057, 1500)) {
     cm.gainItem(4310057, -1500);
     cm.gainItem(4310067, 1000);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 3) {
    if (cm.haveItem(4310057, 8)) {
     cm.gainItem(4310057, -8);
     cm.gainSponserItem(1082392,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 4) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102376,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 5) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102377,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 6) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102378,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 7) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102511,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 8) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102629,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 9) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102450,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 10) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102451,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 11) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102546,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 12) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102547,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 13) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102548,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 14) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102572,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 15) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102624,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 16) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102532,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 17) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102630,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 18) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102644,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 19) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102466,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 20) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1102643,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 21) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1052671,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 22) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1002665,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 23) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1052137,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 24) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702299,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 25) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702442,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 26) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702211,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 27) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1002738,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   } else if (selection == 28) {
    if (cm.haveItem(4310029, 10)) {
     cm.gainItem(4310029, -10);
     cm.gainSponserItem(1702309,'[������ ����]',50,10,0);
     cm.sendOk("��ȯ�� �Ϸ�Ǿ����!");
     cm.dispose();
    } else {
     cm.sendOk("#b���� ����#k(������ ����)�� �����մϴ�.");
     cm.dispose();
    }
   }
  }
 }
}