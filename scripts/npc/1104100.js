/*
  ������ ���
 */

maple = [
"#i4000886# 1���� - #i1112659# 1�� ��ȯ",
"#i4000886# 1���� - #i1702277# 1�� ��ȯ",
"#i4000886# 1���� - #i1142006# 1�� ��ȯ",
"#i4000886# 1���� - #i4310034# 1�� ��ȯ",]

function start() { 
   var text = "#i4000886#�ʱ��ڱ� ������ ����,�޵弼���� �� ĳ���͸� ���� NPC�Դϴ�.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(1112659,1); 
            cm.sendOk("#i4000886# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ���� 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(1702277,1); 
            cm.sendOk("#i4000886# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ���� 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(1142006,1); 
            cm.sendOk("#i4000886# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("���� 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(4310034,10); 
            cm.sendOk("#i4000886# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�");
            cm.dispose(); 
        } else {
            cm.sendOk(" ���� 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(3994745, 2)) { 
            cm.gainItem(3994745,-2); 
            cm.gainItem(1102308,1); 
            cm.sendOk("#i3994745# 2���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(3994745, 2)) { 
            cm.gainItem(3994745,-2); 
            cm.gainItem(1102307,1); 
            cm.sendOk("#i3994745# 2���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(3994745, 3)) { 
            cm.gainItem(3994745,-3); 
            cm.gainItem(i2431941,1); 
            cm.sendOk("#i3994745# 3���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 3���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(3994745, 3)) { 
            cm.gainItem(3994745,-3); 
            cm.gainItem(2430452,1); 
            cm.sendOk("#i3994745# 3���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 3���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(3994745, 1)) { 
            cm.gainItem(3994745,-1); 
            cm.gainItem(4310070,2); 
            cm.sendOk("#i3994745# 3���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 3���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(3994745, 5)) { 
            cm.gainItem(3994745,-5); 
            cm.gainItem(1112586,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(3994745, 5)) { 
            cm.gainItem(3994745,-5); 
            cm.gainItem(1152154,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(3994745, 5)) { 
            cm.gainItem(3994745,-5); 
            cm.gainItem(1113055,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
}
}