/*
  ������ ���
 */

maple = [
"#i1212077#���̽��� Ÿ���佺    -   #i4310014# 1�� ��ȯ",
"#i1222072#���̽��� ����������    -    #i4310014# 1�� ��ȯ",
"#i1242076#���̽��� ���ø�����  -    #i4310014# 1�� ��ȯ",
"#i1302285#���̽��� �۶��콺  -    #i4310014# 1�� ��ȯ",
"#i1312162#���̽��� ��Ŭ����     -    #i4310014# 1�� ��ȯ",
"#i1322213#���̽��� ���ظ�        -    #i4310014# 1�� ��ȯ",
"#i1332235#���̽��� īŸ��        -    #i4310014# 1�� ��ȯ",
"#i1342084#���̽��� ���̵�     -    #i4310014# 1�� ��ȯ",
"#i1362099#���̽��� �丣�ҳ�     -    #i4310014# 1�� ��ȯ",
"#i1372186#���̽��� �̺�ϵ�     -    #i4310014# 1�� ��ȯ",
"#i1402204#���̽��� Ŭ���̸��  -    #i4310014# 1�� ��ȯ",
"#i1432176#���̽��� ��Ʋ���Ǿ�  -    #i4310014# 1�� ��ȯ",
"#i1442232#���̽��� �����        -    #i4310014# 1�� ��ȯ",
"#i1452214#���̽��� ��Ʋ����     -    #i4310014# 1�� ��ȯ",
"#i1462202#���̽��� ũ�ν�����  -    #i4310014# 1�� ��ȯ",
"#i1472223#���̽��� ��ũ������  -    #i4310014# 1�� ��ȯ",
"#i1482177#���̽��� �׸���Ŭ��  -    #i4310014# 1�� ��ȯ",
"#i1492188#���̽��� ���Ǵ�Ƽ     -    #i4310014# 1�� ��ȯ",
"#i1522103#���̽��� �̱���        -    #i4310014# 1�� ��ȯ",
"#i1532106#���̽��� ũ����        -    #i4310014# 1�� ��ȯ",
"#i1382220#���̽��� ��Ʋ������  -    #i4310014# 1�� ��ȯ"]



function start() { 
   var text = "VIP ����� ���� Ÿ���� ���̽��� ��� #i4310014# ���� ��ȯ�ϽǼ��ֽ��ϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(1212077, 1)) { 
            cm.gainItem(1212077,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(1222072, 1)) { 
            cm.gainItem(1222072,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(1242076, 1)) { 
            cm.gainItem(1242076,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(1302285, 1)) { 
            cm.gainItem(1302285,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(1312162, 1)) { 
            cm.gainItem(1312162,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(1322213, 1)) { 
            cm.gainItem(1322213,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(1332235, 1)) { 
            cm.gainItem(1332235,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 7) { 
	if(cm.haveItem(1342084, 1)) { 
            cm.gainItem(1342084,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(1362099, 1)) { 
            cm.gainItem(1362099,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(1372186, 1)) { 
            cm.gainItem(1372186,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(1402204, 1)) { 
            cm.gainItem(1402204,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 11) { 
	if(cm.haveItem(1432176, 1)) { 
            cm.gainItem(1432176,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(1442232, 1)) { 
            cm.gainItem(1442232,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
 }
        } else if (selection == 13) { 
	if(cm.haveItem(1452214, 1)) { 
            cm.gainItem(1452214,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(1462202, 1)) { 
            cm.gainItem(1462202,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 15) { 
	if(cm.haveItem(1472223, 1)) { 
            cm.gainItem(1472223,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 16) { 
	if(cm.haveItem(1482177, 1)) { 
            cm.gainItem(1482177,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 17) { 
	if(cm.haveItem(1492188, 1)) { 
            cm.gainItem(1492188,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 18) { 
	if(cm.haveItem(1522103, 1)) { 
            cm.gainItem(1522103,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 19) { 
	if(cm.haveItem(1532106, 1)) { 
            cm.gainItem(1532106,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 20) { 
	if(cm.haveItem(1382220, 1)) { 
            cm.gainItem(1382220,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("Ÿ���� ���̽��� ��� #i4310014#���� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("�ش��ϴ� ���̽��� ��� �ִ��� Ȯ���ϼ���.");
            cm.dispose();
}
}
}