/*
  ������ ���
 */

maple = [
"#i4001212# 10���� - #i4032521# 1�� ��ȯ",
"#i3994385# 1000���� - #i4032521# 1�� ��ȯ",
"#i4032521# 1���� - #i4001212# 8�� ��ȯ",
"#i4032521# 1���� - #i3994385# 800�� ��ȯ"]


function start() { 
   var text = "VIPƼ���� ��ȯ�ϴ� Ư�� �����Դϴ�\r\nVIPƼ���� �����ϽǷ��� Ư������ �ʿ��մϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4001212, 10)) { 
            cm.gainItem(4001212,-10); 
            cm.gainItem(4032521,1); 
            cm.sendOk("#i4001212# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4001212# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(3994385, 1000)) { 
            cm.gainItem(3994385,-1000); 
            cm.gainItem(4032521,1); 
            cm.sendOk("#i3994385# 1000���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i3994385# 1000���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4032521, 1)) { 
            cm.gainItem(4032521,-1); 
            cm.gainItem(4001212,8); 
            cm.sendOk("#i4032521# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4032521# 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4032521, 1)) { 
            cm.gainItem(4032521,-1); 
            cm.gainItem(3994385,800); 
            cm.sendOk("#i4032521# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4032521# 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
}
}