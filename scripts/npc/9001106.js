 /*
# ������ : ���K [melon_dev@nate.com]
# �⡡�� : ���� ����Ʈ
*/
importPackage(Packages.tools.RandomStream);
importPackage(Packages.server.items);
importPackage(Packages.client.items);
var servername = "MelonStyle"
reqitem = [4033664, 4031092, 4009051, 4009090, 4009049, 4031136];  qwan = [100, 200, 100, 100, 50, 5]; 
// reqitem : [���ȸ�� , ����ǰ , �ȵ���̵� ��ǰ , �ð� �¿� ��ǰ , ��� �ý��� ��ǰ
rewitem = [3994353, 3994354, 3994355, 3994356, 3994357, 3994358, 3700135];  rewmeso = 5000000; 
// rewitem : ����Ʈ�Ϸ� ��ǥ or ���� rewmeso : ������ ����Ʈ���� �Ϸ������� ��� �޼�
var status = -1;
function start() {
    status = -1;
    action (1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    if (status == -1) {
       cm.dispose();
       return;
    }
    if (status == 0) {
    var hello = "�ȳ��ϼ��� #b"+servername+"#k ����Ʈ NPC�Դϴ�.\r\n";
         hello += "�Ͻð� ���� ����Ʈ�� ������ �ּ���.\r\n\r\n";
         hello += "#b��� ����Ʈ�� �Ϸ�#k�� �� ������ �־����ϴ�.\r\n\r\n";
         hello += "#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n";
         if (cm.haveItem(rewitem[6], 1)) {
         hello += "����Ʈ�� �̹� ��� Ŭ���� �ϼ̽��ϴ�.";
         } else if (cm.haveItem(rewitem[5], 1)) {
         hello += "#r#L100#���� �ޱ�#k\r\n";
         } else if (cm.haveItem(rewitem[4], 1)) {
         hello += "#r#L5#Lv. 6#b  ����� ����#k\r\n";
         } else if (cm.haveItem(rewitem[3], 1)) {
         hello += "#r#L4#Lv. 5#b  ������ �ʿ���#k\r\n";
         } else if (cm.haveItem(rewitem[2], 1)) {
         hello += "#r#L3#Lv. 4#b  �������� ���ѱ� ���#k\r\n";
         } else if (cm.haveItem(rewitem[1], 1)) {
         hello += "#r#L2#Lv. 3#b  ������ ��ǰ#k\r\n"
         } else if (cm.haveItem(rewitem[0], 1)) {
         hello += "#r#L1#Lv. 2#b  ���ִ� ���Ŀ丮#k\r\n"
         } else {
         hello += "#r#L0#Lv. 1#b  ������ �׷���#k\r\n"
     }
    cm.sendSimple(hello);
    return;
        } else if (status == 1) {
          if (selection == 0) {
         var say0 = "�ȳ��ϼ��� #b#h0##k��!\r\n�̰� ���� ���� �����ϴٰ� ���� �Ҿ���Ƚ��ϴ�.\r\n";
             say0 += "�������� ���ư��� ���� ���ּ� ��ǰ�� �ʿ��մϴ�.\r\n"
             say0 += "��� ���� ���� ���� �ֽðھ��?\r\n������ ��� �ֽŴٸ� ������ ����� �帮��.\r\n\r\n";
             say0 += "#b#L6#�˰ھ� ����ٰ�!#k\r\n"
             say0 += "#d#L7#�̾� �ð��� ���.#k\r\n"
             say0 += "#r#L8#���� �� ��ƿԾ�.#k"
             cm.sendSimple(say0);
         } else if (selection == 1) {
         var say1 = "���Ŀ丮�� �ҷ��µ�, ���İ� ���ڶ��.. \r\n#b#h0#��! #k";
             say1 += "Ȥ�� ������ ������ �� �� �ֳ���?\r\n"
             say1 += "���ִ� ���İ� �Բ� ���� Ǫ���ϰ� ì���ٲ���~\r\n\r\n";
             say1 += "#b#L10#����.#k\r\n"
             say1 += "#d#L11#����.#k\r\n"
             say1 += "#r#L12#�Ϸ�#k"
             cm.sendSimple(say1);
       } else if (selection == 2) {
         var say2 = "#b#h0#��! #k���� ���� ���ο� ��̰� ������\r\n";
             say2 += "�ٷ� �κ� ������ε���, �׷��� ������ ������\r\n"
             say2 += "��ǰ�� �����ؿ�.. �� ������ �ֽǼ� �ֳ���?\r\n\r\n";
             say2 += "#b#L20#�翬����, �������ٲ�~#k\r\n"
             say2 += "#b#L21#���߿� ���ٰ�, �̾���#k\r\n"
             say2 += "#b#L22#�� ���� �Ծ�!#k"
             cm.sendSimple(say2);
  } else if (selection == 3) {
         var say3 = "#b#h0#��! #k���� ���� ����� ����µ���,\r\n";
             say3 += "� ������ ��Ÿ�� ������ ���Ⱦ��\r\n"
             say3 += "Ȥ�� ��ã�� �ֽ� �� �ֳ���??\r\n\r\n";
             say3 += "#b#L30#�翬����, ��ã���ٲ�#k\r\n"
             say3 += "#b#L31#���� �ٺ�..#k\r\n"
             say3 += "#b#L32#�� ���� �Ծ�!#k"
             cm.sendSimple(say3);
  } else if (selection == 4) {
         var say4 = "#b#h0#��! #k���� �� ������ ����ȸ�� �Ѵ�ϴ�!\r\n";
             say4 += "������, ������ ������ ���� ���Ѵٳ׿�\r\n"
             say4 += "�������ؼ� ���� �� ������ �ּ���!\r\n\r\n";
             say4 += "#b#L40#�׷�, ���ݸ� ��ٷ�#k\r\n"
             say4 += "#b#L41#�̾���.. �ð��� ����#k\r\n"
             say4 += "#b#L42#�� ���� �Ծ�!#k"
             cm.sendSimple(say4);
  } else if (selection == 5) {
         var say5 = "#b#h0#��! #k������ ���� �����Դϴ�.\r\n";
             say5 += "Ÿ���� ��縦 ����� ���� ���Դϴ�.\r\n"
             say5 += "�Ͻ� ��Ⱑ �����Ű���?\r\n\r\n";
             say5 += "#b#L50#���� �ٷ� ��������#k\r\n"
             say5 += "#b#L51#���� �غ� �ȉ��#k\r\n"
             say5 += "#b#L52#�� ���� �Ծ�!#k"
             cm.sendSimple(say5);
}
      } else if (status == 2) {
// sorry0~sorry6 = �ڽ��� ������ �ִ� ����Ʈ1~6�� ���Ǿ����� ����
// soso0~6 = �ڽ��� �� ��ƾ� �ϴ� ���� ������ ���� 
var sorry0 = cm.itemQuantity(4000001);  var sorry1 = cm.itemQuantity(4000996);  
var sorry2 = cm.itemQuantity(4000364);  var sorry3 = cm.itemQuantity(4000296);
var sorry4 = cm.itemQuantity(4000446);  var sorry5 = cm.itemQuantity(4000653);
var soso0 = qwan[0] - sorry0;  var soso1 = qwan[1] - sorry1;
var soso2 = qwan[2] - sorry2;  var soso3 = qwan[3] - sorry3;
var soso4 = qwan[4] - sorry4;  var soso5 = qwan[5] - sorry5;
       if (selection == 6) {
         cm.sendOk("�����մϴ�. �׷� #i"+reqitem[0]+"##b[#z"+reqitem[0]+"#]#k #r"+qwan[0]+"��#k��ŭ ��Ź�帳�ϴ�.");
         cm.dispose();
       } else if (selection == 7) {
          cm.sendOk("�׷� �Ҽ����׿�.. ���߿��� �����ּ���.");
          cm.dispose();
       } else if (selection == 8) {
          if (cm.haveItem(reqitem[0], qwan[0])) {
          cm.gainItem(reqitem[0], -qwan[0]);
          cm.gainItem(rewitem[0], 1);
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� ��ǰ�� �����Ѱ� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[0]+"##z"+reqitem[0]+"##k��(��) #r"+sorry0+" ��#k �̸�,\r\n"
          + "���� #b"+ soso0 + "��#k�� �����մϴ�. ���� ��ƿ� �ּ���!");
          cm.dispose();
}
       } else if (selection == 10) {
         cm.sendOk("����~ �׷��� #i"+reqitem[1]+"##b[#z"+reqitem[1]+"#]#k #r"+qwan[1]+"��#k�� �����~");
         cm.dispose();
       } else if (selection == 11) {
          cm.sendOk("�׷� �Ҽ����׿�.. ���߿��� �����ּ���~");
          cm.dispose();
       } else if (selection == 12) {
          if (cm.haveItem(reqitem[1], qwan[1])) {
          cm.gainItem(reqitem[1], -qwan[1]);
          cm.gainItem(rewitem[1], 1);
          cm.gainItem(rewitem[0], -1);
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� �� ���� ���Ű� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[1]+"##z"+reqitem[1]+"##k��(��) #r"+sorry1+" ��#k �̸�,\r\n"
          + "���� #b"+ soso1 + "��#k�� �����մϴ�. ���� �� ��ƿ� �ּ���!");
          cm.dispose();
}
       } else if (selection == 20) {
         cm.sendOk("����~ �׷��� #i"+reqitem[2]+"##b[#z"+reqitem[2]+"#]#k #r"+qwan[2]+"��#k�� �����~");
         cm.dispose();
       } else if (selection == 21) {
          cm.sendOk("�׷� �Ҽ����׿�.. ���߿��� �����ּ���~");
          cm.dispose();
       } else if (selection == 22) {
          if (cm.haveItem(reqitem[2], qwan[2])) {
          cm.gainItem(reqitem[2], -qwan[2]);
          cm.gainItem(rewitem[2], 1);
          cm.gainItem(rewitem[1], -1);
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� �� ���� ���Ű� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[2]+"##z"+reqitem[2]+"##k��(��) #r"+sorry2+" ��#k �̸�,\r\n"
          + "���� #b"+ soso2 + "��#k�� �����մϴ�. ���� �� ��ƿ� �ּ���!");
          cm.dispose();
}
       } else if (selection == 30) {
         cm.sendOk("����~ �׷��� #i"+reqitem[3]+"##b[#z"+reqitem[3]+"#]#k #r"+qwan[3]+"��#k�� �����~");
         cm.dispose();
       } else if (selection == 31) {
          cm.sendOk("�׷� �Ҽ����׿�.. ���߿��� �����ּ���~");
          cm.dispose();
       } else if (selection == 32) {
          if (cm.haveItem(reqitem[3], qwan[3])) {
          cm.gainItem(reqitem[3], -qwan[3]);
          cm.gainItem(rewitem[3], 1);
          cm.gainItem(rewitem[2], -1);
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� �� ���� ���Ű� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[3]+"##z"+reqitem[3]+"##k��(��) #r"+sorry3+" ��#k �̸�,\r\n"
          + "���� #b"+ soso3 + "��#k�� �����մϴ�. ���� �� ��ƿ� �ּ���!");
          cm.dispose();
}
       } else if (selection == 40) {
         cm.sendOk("����~ �׷��� #i"+reqitem[4]+"##b[#z"+reqitem[4]+"#]#k #r"+qwan[4]+"��#k�� �����~");
         cm.dispose();
       } else if (selection == 41) {
          cm.sendOk("�׷� �Ҽ����׿�.. ���߿��� �����ּ���~");
          cm.dispose();
       } else if (selection == 42) {
          if (cm.haveItem(reqitem[4], qwan[4])) {
          cm.gainItem(reqitem[4], -qwan[4]);
          cm.gainItem(rewitem[4], 1);
          cm.gainItem(rewitem[3], -1);
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� �� ���� ���Ű� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[4]+"##z"+reqitem[4]+"##k��(��) #r"+sorry4+" ��#k �̸�,\r\n"
          + "���� #b"+ soso4 + "��#k�� �����մϴ�. ���� �� ��ƿ� �ּ���!");
          cm.dispose();
}
       } else if (selection == 50) {
         cm.sendOk("#i"+reqitem[5]+"##b[#z"+reqitem[5]+"#]#k #r"+qwan[5]+"��#k�� ������ ������!");
         cm.dispose();
       } else if (selection == 51) {
          cm.sendOk("���߿� �����ϽŴٴ�, �˰ڽ��ϴ�.");
          cm.dispose();
       } else if (selection == 52) {
          if (cm.haveItem(reqitem[5], qwan[5])) {
          cm.gainItem(reqitem[5], -qwan[5]);
          cm.gainItem(rewitem[4], -1);
          cm.gainItem(rewitem[5], 1)
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� �� ���� ���Ű� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[5]+"##z"+reqitem[5]+"##k��(��) #r"+sorry5+" ��#k �̸�,\r\n"
          + "���� #b"+ soso5 + "��#k�� �����մϴ�. ���� �� ��ƿ� �ּ���!");
          cm.dispose();
}
        } else if (selection == 100) {
           cm.gainItem(rewitem[6], 1);
           cm.gainMeso(rewmeso);
           cm.sendOk("���� ������ �Ϸ�Ǿ����ϴ�");
           cm.dispose();
}
        }
}
