/*
  ������ ���
 */

maple = [
"#d#i4310027# 5�� - #i2430443##z2430443#(145�� �������) ",
"#i4310027# 10�� - #i1152154##t1152154#(�ý���50 ����30) ",
"#i4310027# 10�� - #i1032200##t1032200#(�ý���50 ����30) ",
"#i4310027# 10�� - #i1113055##t1113055#(�ý���50 ����30) #k"]


function start() { 
   var text = "���� ������ ����Ʈ���� ���̽��� �����Դϴ�\r\n�����۵��� �����ϽǷ��� #i4310027# ���ʿ��մϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430443,1); 
            cm.sendOk("#i4310027# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainHongboJangbi(1152154,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainHongboJangbi(1032200,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainHongboJangbi(1113055,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
}
}