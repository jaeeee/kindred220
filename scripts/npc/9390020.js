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
   var text = "�������� ȯ�� ����Ʈ : #b#e"+cm.getPlayer().getFame()+"#k#n\r\n\r\n";
//   text += "#l#e<�尩>#n";
//   text += "\r\n#L3##i1082392# - �ý���(50) ��/��(10) - #r8��/����:�Ѵ�20��,����20��,����40��#k\r\n\r\n";
   text += "#l#e< �÷�Ƽ�� ��Ʈ >#n �ý���, ���ݷ�, ���� : 20\r\n";
   text += "#L100# #i1152136# #b#t1152136##k (1000P)\r\n";
   text += "#L101# #i1112679# #b#t1112679##k (1000P)\r\n\r\n";
   text += "#l#e< �������� ��Ʈ >#n �ý���, ���ݷ�, ���� : 20\r\n";
   text += "#L104# #i1112713# #b#t1112713##k (1000P)\r\n";
   text += "#L105# #i1132142# #b#t1132142##k (1000P)\r\n";
   text += "#L106# #i1152080# #b#t1152080##k (1000P)\r\n\r\n";
   text += "#l#e< ���� �κ� >#n �ý���, ���ݷ�, ���� : 200\r\n";
   text += "#L108# #i1142268# #b#t1142268##k (500P)\r\n";
   text += "#L109# #i1142074# #b#t1142074##k (500P)\r\n\r\n";
   text += "#l#e< �ȵ���̵� >#n\r\n";
   text += "#L110# #i1662002# #b#t1662002##k (300P)\r\n";
   text += "#L111# #i1662003# #b#t1662003##k (300P)\r\n";
   text += "#L112# #i1672000# #b#t1672000##k (50P)\r\n";
   text += "#L114# #i1672027# #b#t1672027##k (800P)\r\n\r\n";
   text += "#l#e< �Һ� �κ� >#n\r\n";
   text += "#L102# #i2049704# #b#t2049704##k (50P)";
   text += "\r\n#L103# #i2049360# #b#t2049360##k (50P)";
   text += "\r\n#L107# #i2048717# #b#t2048717##k (50P)\r\n\r\n";
   text += "#l#e< ��Ÿ ������ >#n\r\n";
   text += "#L113# #i4310113# #b���̵� ��ȯ ����#k (100P)";
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
   } else if (selection == 100) {
     if (cm.getPlayer().getFame() >= 1000) {
     cm.getPlayer().addFame(-1000);
     cm.gainSponserItem(1152136,'[ȯ��]',20,20,3);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 101) {
     if (cm.getPlayer().getFame() >= 1000) {
     cm.getPlayer().addFame(-1000);
     cm.gainSponserItem(1112679,'[ȯ��]',20,20,3);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 102) {
     if (cm.getPlayer().getFame() >= 50) {
     cm.getPlayer().addFame(-50);
     cm.gainItem(2049704, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 103) {
     if (cm.getPlayer().getFame() >= 50) {
     cm.getPlayer().addFame(-50);
     cm.gainItem(2049360, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 107) {
     if (cm.getPlayer().getFame() >= 50) {
     cm.getPlayer().addFame(-50);
     cm.gainItem(2048717, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 110) {
     if (cm.getPlayer().getFame() >= 300) {
     cm.getPlayer().addFame(-300);
     cm.gainItem(1662002, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 111) {
     if (cm.getPlayer().getFame() >= 300) {
     cm.getPlayer().addFame(-300);
     cm.gainItem(1662003, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 112) {
     if (cm.getPlayer().getFame() >= 50) {
     cm.getPlayer().addFame(-50);
     cm.gainItem(1672000, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 113) {
     if (cm.getPlayer().getFame() >= 100) {
     cm.getPlayer().addFame(-100);
     cm.gainItem(4310113, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 114) {
     if (cm.getPlayer().getFame() >= 800) {
     cm.getPlayer().addFame(-800);
     cm.gainItem(1672027, 1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 104) {
     if (cm.getPlayer().getFame() >= 1000) {
     cm.getPlayer().addFame(-1000);
     cm.gainSponserItem(1112713,'[ȯ��]',20,20,1);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 105) {
     if (cm.getPlayer().getFame() >= 1000) {
     cm.getPlayer().addFame(-1000);
     cm.gainSponserItem(1132142,'[ȯ��]',20,20,3);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 106) {
     if (cm.getPlayer().getFame() >= 1000) {
     cm.getPlayer().addFame(-1000);
     cm.gainSponserItem(1152080,'[ȯ��]',20,20,2);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 108) {
     if (cm.getPlayer().getFame() >= 500) {
     cm.getPlayer().addFame(-500);
     cm.gainSponserItem(1142268,'[ȯ��]',200,200,0);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
     cm.dispose();
    }
   } else if (selection == 109) {
     if (cm.getPlayer().getFame() >= 500) {
     cm.getPlayer().addFame(-500);
     cm.gainSponserItem(1142074,'[ȯ��]',200,200,0);
     cm.sendOk("������ ��ȯ�� �Ϸ�Ǿ����ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("ȯ�� ����Ʈ�� �����մϴ�!");
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