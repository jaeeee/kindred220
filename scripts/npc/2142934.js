/*
  ������ ���
 */

maple = [
"#d#i4310027# 5���� - #i2430446##z2430446#(����) 1�� ��ȯ",
"#i4310027# 5���� - #i2430447##z2430447#(������) 1�� ��ȯ",
"#i4310027# 5���� - #i2430449##z2430449#(����) 1�� ��ȯ",
"#i4310027# 5���� - #i2430451##z2430451#(����) 1�� ��ȯ#k"]


function start() { 
   var text = "���� ������ ����Ʈ���� Ư�� �����Դϴ�\r\n�����۵��� �����ϽǷ��� #i4310027# ���ʿ��մϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430446,1); 
            cm.sendOk("#i4310027# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430447,1); 
            cm.sendOk("#i4310027# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430449,1); 
            cm.sendOk("#i4310027# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430451,1); 
            cm.sendOk("#i4310027# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
}
}