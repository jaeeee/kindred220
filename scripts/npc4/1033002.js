/*
  ������ ���
 */

maple = [
"#e1 �޼�#n - #i2049360##z2049360# #r100��#k",
"#e1 �޼�#n - #i2049153##z2049153# #r5��#k",
"#e1 �޼�#n- #i2049704# �����帮 ����ɷ� �ο��ֹ��� #r10��#k",
"#e1 �޼�#n - #i2470000##z2470000# #r5��#k",
"#e1 �޼�#n - #i5062009##z5062009# #r100��#k",
"#e1 �޼�#n - #i5062010##z5062010# #r100��#k",
"#e1 �޼�#n - #i2049509##z2049509# #r5��#k",
"#e1 �޼�#n - #i5062500##z5062500# #r100��#k",
"#e1 �޼�#n - #i2048306##r5��#k",
"#e1 �޼�#n - #i2048213##z2048213# #r5��#k",
"#e1 �޼�#n - #i5064300##z5064300# #r100��#k",
"#e1 �޼�#n - #i5064000##z5064000# #r100��#k",
"#e1 �޼�#n - #i5064100##z5064100# #r100��#k",
"#e1 �޼�#n - #i5063100##z5063100# #r100��#k",
"#e1 �޼�#n - #i2048721##z2048721# #r10��#k"]


function start() { 
   var text = "�����ֹ��� ������ ���ſ������� ȯ���մϴ�.\r\n�� �ֹ������� ��� �޼ҷ� �����Ͻ� �� �ֽ��ϴ�."

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
cm.gainItem(2049360, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2049153, 5);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 2) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2049704, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 3) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2470000, 5);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 4) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(5062009, 100);
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
        } else if (selection == 14) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-1);
cm.gainItem(2048717, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
}
}