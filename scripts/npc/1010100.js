/*


  ������ ���
 */

maple = [
"#e5�鸸 �޼�#n - #i2049153# ���� ������ ȥ�� �ֹ��� #r10��#k",
"#e5�鸸 �޼�#n - #i4001832##z4001832# #r5000��#k",
"#e5�鸸 �޼�#n - #i2049360##z2049360# #r50��#k",
"#e5�鸸 �޼�#n - #i2049704# �����帮 ����ɷ� �ο��ֹ��� #r50��#k",
"#e5�鸸 �޼�#n - #i2048308# ����ų� ����ɷ� �ο��ֹ��� #r50��#k",
"#e5�鸸 �޼�#n - #i2049512##z2049512# #r100��#k",
"#e5�鸸 �޼�#n - #i2048304##z2048304# #r100��#k",
"#e5�鸸 �޼�#n - #i5062009##z5062009# #r100��#k",
"#e5�鸸 �޼�#n - #i5062010##z5062010# #r100��#k",
"#e5�鸸 �޼�#n - #i5062500# ����ų� �̶�Ŭ ť�� #r100��#k",
"#e5�鸸 �޼�#n - #i2531000# ������Ʈ ���� #r100��#k",
"#e5�鸸 �޼�#n - #i2532000# ������Ƽ ���� #r100��#k",
"#e5�鸸 �޼�#n - #i2533000# ��Ŀ���� ���� #r100��#k",
"#e5�鸸 �޼�#n - #i2046841# ��Ƽ�� �Ǽ� ���� 20% #r10��#k",
"#e5�鸸 �޼�#n - #i2046842# ��Ƽ�� �Ǽ� ���� 20% #r10��#k",
"#e5�鸸 �޼�#n - #i2046971# ��Ƽ�� �Ѽ� ���� 20% #r10��#k",
"#e5�鸸 �޼�#n - #i2046967# ��Ƽ�� �Ѽ� ���� 20% #r10��#k",
"#e5�鸸 �޼�#n - #i2047803# ��Ƽ�� �μ� ���� 20% #r10��#k",
"#e5�鸸 �޼�#n - #i2047917# ��Ƽ�� �� ��ȭ 20% #r10��#k",
"#e5�鸸 �޼�#n - #i2470000##z2470000# #r100��#k",
"#e1�︸ �޼�#n - #i4001715#����(�����ϱ� 1��) #r1��#k"]


function start() { 
   var text = "�����ֹ��� ������ ���ſ������� ȯ���մϴ�.\r\n�� �ֹ������� ��� �޼ҷ� �����Ͻ� �� �ֽ��ϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
//	if(cm.haveItem(4310034, 10)) { 
//            cm.gainItem(4310034,-10); 
//           cm.gainItem(2049153,30);
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049153, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();;
}
        } else if (selection == 1) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(4001832, 5000);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 2) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049360, 50);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 3) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049704, 50);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 4) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2048308, 50);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 5) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049512, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 6) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2048304, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 7) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(5062009, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 8) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(5062010, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 9) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(5062500, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 10) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2531000, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 11) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2532000, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 12) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2533000, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 13) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046841, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 14) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046842, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 15) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046971, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 16) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046967, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 17) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2047803, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 18) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2047917, 10);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 19) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2470000, 100);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
        } else if (selection == 20) { 
if (cm.getPlayer().getMeso() >= 100000000) {
cm.gainMeso(-100000000);
cm.gainItem(4001715, 1);
            cm.sendOk("�����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�޼Ұ� �����մϴ�.");
            cm.dispose();
}
}
}