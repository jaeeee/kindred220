/*
  ������ ���
 */

maple = [
"#e1�� �޼�#n - #i2432465##z2432465# #r1��#k",
"#e1�� �޼�#n - #i2431966##z2431966# #r1��#k",
"#e1�� �޼�#n-  #i2432131##z2432131# #r1��#k",
"#e1�� �޼�#n - #i2432207##z2432207# #r1��#k",
"#e1�� �޼�#n - #i2432479##z2432479# #r1��#k",
"#e1�� �޼�#n - #i2433655##z2433655# #r1��#k",
"#e1�� �޼�#n - #i2433913##z2433913# #r1��#k",
"#e1�� �޼�#n - #i2432973##z2432973# #r1��#k",
"#e1�� �޼�#n - #i2433178##z2433178# #r1��#k",
"#e1�� �޼�#n - #i2433456##z2433456# #r1��#k",
"#e1�� �޼�#n - #i2433715##z2433715# #r1��#k",
"#e1�� �޼�#n - #i2433804##z2433804# #r1��#k",
"#e1�� �޼�#n - #i2433980##z2433980# #r1��#k",
"#e1�� �޼�#n - #i2433919##z2433919# #r1��#k",
"#e1�� �޼�#n - #i2433981##z2433981# #r1��#k",
"#e1�� �޼�#n - #i2433990##z2433990# #r1��#k",
"#e1�� �޼�#n - #i2434248##z2434248# #r1��#k",
"#e1�� �޼�#n - #i2434274##z2434274# #r1��#k",
"#e1�� �޼�#n - #i2434289##z2434289# #r1��#k",
"#e1�� �޼�#n - #i2434390##z2434390# #r1��#k",
"#e1�� �޼�#n - #i2433804##z2433804# #r1��#k",
"#e1�� �޼�#n - #i2434391##z2434391# #r1��#k"]


function start() { 
   var text = "#r������#k#d��Ų#k ������ ���ſ������� ȯ���մϴ�.\r\n�� #r������#k #d��Ų#k ���� ��� �޼ҷ� �����Ͻ� �� �ֽ��ϴ�."

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
cm.gainMeso(-100000000);
cm.gainItem(2432465, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2431966, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
        } 
        } else if (selection == 2) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2432131, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
        } 
        } else if (selection == 3) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2432207, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
        } 
        } else if (selection == 4) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2432479, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
        } 
        } else if (selection == 5) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433655, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
     } 
        } else if (selection == 6) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433913, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 7) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2432973, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 8) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433178, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 9) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433456, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 10) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433715, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 11) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433804, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 12) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433980, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 13) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433919, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 14) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433981, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 15) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433990, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 16) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2434248, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 17) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2434274, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 18) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2434289, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 19) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2434390, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 20) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2433804, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
} 
        } else if (selection == 21) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-100000000);
cm.gainItem(2434391, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
  

}
}
}