 /*
# ������ : ���K [melon_dev@nate.com]
# �⡡�� : ���� ����Ʈ
*/
importPackage(Packages.tools.RandomStream);
importPackage(Packages.server.items);
importPackage(Packages.client.items);
var servername = "������ �¶���"
reqitem = [4000985, 4000986, 4000987, 4000988, 4000989, 1152159];  qwan = [1, 1, 1, 1, 1, 1]; 
// reqitem : [1,2,3,4,5,6] ���ʴ�� ��� ���� ���� ��� �߾� qwan : �� �������� ��
rewitem = [4032375, 4032376, 4032377, 4032378, 4032379, 4033171];
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
         if (cm.haveItem(rewitem[5], 1)) {
         hello += "����Ʈ�� �̹� ��� Ŭ���� �ϼ̽��ϴ�.\r\n������ �ٸ� ���ǽ� ���� �����ñ� �ٶ��ϴ�.";
         } else if (cm.haveItem(rewitem[4], 1)) {
         hello += "#d#L5##i1113055#���̽��� ����#n #e#r�������ܰ�#k\r\n";
         } else if (cm.haveItem(rewitem[3], 1)) {
         hello += "#d#L4##i1113055#���̽��� ����#n #e#r5�ܰ�#k\r\n";
         } else if (cm.haveItem(rewitem[2], 1)) {
         hello += "#d#L3##i1113055#���̽��� ����#n #e#r4�ܰ�#k\r\n";
         } else if (cm.haveItem(rewitem[1], 1)) {
         hello += "#d#L2##i1113055#���̽��� ����#n #e#r3�ܰ�#k\r\n";
         } else if (cm.haveItem(rewitem[0], 1)) {
         hello += "#d#L1##i1113055#���̽��� ����#n #e#r2�ܰ�#k\r\n";
         } else {
         hello += "#d#L0##i1113055#���̽��� ����#n #e#r1�ܰ�#k\r\n";
}
    cm.sendSimple(hello);
    return;
        } else if (status == 1) {
          if (selection == 0) {
         var say0 = "�ȳ��ϼ��� #b#h0##k��!\r\n#i1113055##e#d���̽��� ����#n#k�� ����ðھ��?.\r\n";
             say0 += "������, #d���̽��� ����#n#k �� ����� ���ؼ��� \r\n#e#r���� �÷�#n#k �� �����մϴ�..\r\n"
             say0 += "#e#d���̽��� ����#n�� �÷ÿ� ���� �Ͻ� �ڽ��ϱ�?\r\n";
             say0 += "#e#g#L6#����Ʈ �����ϱ�#k\r\n"
             say0 += "#e#b#L7#����Ʈ �����ϱ�#k\r\n"
             say0 += "#e#r#L8#����Ʈ �Ϸ��ϱ�#k"
             cm.sendSimple(say0);
         } else if (selection == 1) {
         var say1 = "���� #i1113055##d#e���̽��� ����#n#k �� ����� ���ؼ���\r\n#e#r5����#n#k�� ��ᰡ ���ҽ��ϴ�.\r\n";
             say1 += "#e#g#L10#����Ʈ �����ϱ�#k\r\n"
             say1 += "#e#b#L11#����Ʈ �����ϱ�#k\r\n"
             say1 += "#e#r#L12#����Ʈ �Ϸ��ϱ�#k"
             cm.sendSimple(say1);
       } else if (selection == 2) {
         var say2 = "���� #i1113055##d#e���̽��� ����#n#k �� ����� ���ؼ���\r\n#e#r4����#n#k�� ��ᰡ ���ҽ��ϴ�.\r\n";
             say2 += "#e#g#L20#����Ʈ �����ϱ�#k\r\n"
             say2 += "#e#b#L21#����Ʈ �����ϱ�#k\r\n"
             say2 += "#e#r#L22#����Ʈ �Ϸ��ϱ�#k"
             cm.sendSimple(say2);
  } else if (selection == 3) {
         var say3 = "���� #i1113055##d#e���̽��� ����#n#k �� ����� ���ؼ���\r\n#e#r3����#n#k�� ��ᰡ ���ҽ��ϴ�.\r\n";
             say3 += "#e#g#L30#����Ʈ �����ϱ�#k\r\n"
             say3 += "#e#b#L31#����Ʈ �����ϱ�#k\r\n"
             say3 += "#e#r#L32#����Ʈ �Ϸ��ϱ�#k"
             cm.sendSimple(say3);
  } else if (selection == 4) {
         var say4 = "���� #i1113055##d#e���̽��� ����#n#k �� ����� ���ؼ���\r\n#e#r2����#n#k�� ��ᰡ ���ҽ��ϴ�.\r\n";
             say4 += "#e#g#L40#����Ʈ �����ϱ�#k\r\n"
             say4 += "#e#b#L41#����Ʈ �����ϱ�#k\r\n"
             say4 += "#e#r#L42#����Ʈ �Ϸ��ϱ�#k"
             cm.sendSimple(say4);
  } else if (selection == 5) {
         var say5 = "#b#h0#��! #k���� ��������� �Դϴ�.\r\n";
             say5 += "#e#gb#L50#����Ʈ �����ϱ�#k\r\n"
             say5 += "#e#b#L51#����Ʈ �����ϱ�#k\r\n"
             say5 += "#e#r#L52#����Ʈ �Ϸ��ϱ�#k"
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
         cm.sendOk("����~ �׷��� #i"+reqitem[0]+"##b[#z"+reqitem[0]+"#]#k #r"+qwan[0]+"��#k�� �����~");
         cm.dispose();
       } else if (selection == 7) {
          cm.sendOk("�׷� �Ҽ����׿�.. ���߿��� �����ּ���~");
          cm.dispose();
       } else if (selection == 8) {
          if (cm.haveItem(reqitem[0], qwan[0])) {
          cm.gainItem(reqitem[0], -qwan[0]);
          cm.gainItem(rewitem[0], 1);
            cm.showEffect(true,"monsterPark/clear");
            cm.playSound(true,"Party1/Clear");
          cm.dispose();
         } else {
          cm.sendOk("���� �� ���� ���Ű� ���ƿ�. #h0#��! \r\n������ ��� #b#i"+reqitem[0]+"##z"+reqitem[0]+"##k��(��) #r"+sorry0+" ��#k �̸�,\r\n"
          + "���� #b"+ soso0 + "��#k�� �����մϴ�. ���� �� ��ƿ� �ּ���!");
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
}
        }
}
  