/*
  ������ ���
 */

maple = [
"#i3994742# 21���� - #i1382235# 1�� ��ȯ",
"#i3994742# 21���� - #i1402224# 1�� ��ȯ",
"#i3994742# 21���� - #i1402180# 1�� ��ȯ",
"=======================================",
"#i3994742# 22���� - #i1102309# 1�� ��ȯ",
"#i3994742# 22���� - #i1102308# 1�� ��ȯ",
"#i3994742# 22���� - #i1302253# 1�� ��ȯ",
"=======================================",
"#i3994742# 23���� - #i2431941# 1�� ��ȯ(���̽��͹���)",
"#i3994742# 23���� - #i2430452# 1�� ��ȯ(���ڻ���)",
"#i3994742# 28���� - #i4310070# 2�� ��ȯ",
"=======================================",
"#i3994742# 25���� - #i1112586# 1�� ��ȯ(All����500/����200)",
"#i3994742# 25���� - #i1152154# 1�� ��ȯ(All����500/����200)",
"#i3994742# 25���� - #i1113055# 1�� ��ȯ(All����500/����200)",]

function start() { 
   var text = "���� �ϴٰ� ���� ����⸦ ���������� ��ȯ�Ҽ��ֽ��ϴ�.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(3994745, 21)) { 
            cm.gainItem(3994745,-21); 
            cm.gainItem(1382235,1); 
            cm.sendOk("#i3994745# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(3994745, 21)) { 
            cm.gainItem(3994745,-21); 
            cm.gainItem(1402224,1); 
            cm.sendOk("#i3994745# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(3994745, 21)) { 
            cm.gainItem(3994745,-21); 
            cm.gainItem(1402180,1); 
            cm.sendOk("#i3994745# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(3994745, 22)) { 
            cm.gainItem(3994745,-22); 
            cm.gainItem(1102309,1); 
            cm.sendOk("#i3994745# 2���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(3994745, 22)) { 
            cm.gainItem(3994745,-22); 
            cm.gainItem(1102308,1); 
            cm.sendOk("#i3994745# 2���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(3994745, 22)) { 
            cm.gainItem(3994745,-22); 
            cm.gainItem(1102307,1); 
            cm.sendOk("#i3994745# 2���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(3994745, 23)) { 
            cm.gainItem(3994745,-23); 
            cm.gainItem(i2431941,1); 
            cm.sendOk("#i3994745# 3���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 3���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(3994745, 23)) { 
            cm.gainItem(3994745,-23); 
            cm.gainItem(2430452,1); 
            cm.sendOk("#i3994745# 3���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 3���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(3994745, 28)) { 
            cm.gainItem(3994745,-28); 
            cm.gainItem(4310070,2); 
            cm.sendOk("#i3994745# 3���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 3���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(3994745, 25)) { 
            cm.gainItem(3994745,-25); 
            cm.gainItem(1112586,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(3994745, 25)) { 
            cm.gainItem(3994745,-25); 
            cm.gainItem(1152154,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(3994745, 25)) { 
            cm.gainItem(3994745,-25); 
            cm.gainItem(1113055,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 16) { 
	if(cm.haveItem(3994745, 500)) { 
            cm.gainItem(3994745,-500); 
            cm.gainItem(3994742,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 17) { 
	if(cm.haveItem(3994745, 500)) { 
            cm.gainItem(3994745,-500); 
            cm.gainItem(3994742,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 18) { 
	if(cm.haveItem(3994745, 500)) { 
            cm.gainItem(3994745,-500); 
            cm.gainItem(3994742,1); 
            cm.sendOk("#i3994745# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
}
}