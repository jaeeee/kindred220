/*
  ������ ���
 */

maple = [
"#e1 �޼�#n - #i2000005##z2000005# #r100��#k",
"#e1 �޼�#n - #i2001556##z2001556# #r50��#k",
"#e1 �޼�#n - #i2060003##z2060003# #r1000��#k",
"#e1 �޼�#n - #i2061000##z2061000# #r1000��#k",
"#e1 �޼�#n - #i2070011##z2070011# #r1000��#k"]



function start() { 
   var text = "�Һ������ ������ ���ſ������� ȯ���մϴ�.\r\n�� �Һ�����۵��� ��� �޼ҷ� �����Ͻ� �� �ֽ��ϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
//	if(cm.haveItem(4310034, 100)) { 
//            cm.gainItem(4310034,-100); 
//           cm.gainItem(2049360,100);
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2000005, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2001556, 50);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 2) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2060003, 1000);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 3) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2070011, 1000);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 4) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2070011, 1000);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 5) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5062010, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 6) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2049509, 5);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 7) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5062500, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 8) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2048306, 5);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 9) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2048213, 5);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 10) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5064300, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 11) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5064000, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 12) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5064100, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 13) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5063100, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
}
}