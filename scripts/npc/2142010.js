/*
  ������ ���
 */

maple = [
"#i3994742# 1���� - #i1092035# 1�� ��ȯ",
"#i3994742# 1���� - #i4310059# 2�� ��ȯ",
"#i3994742# 1���� - #i1432009# 1�� ��ȯ",
"=======================================",
"#i3994742# 1���� - #i1142249# 1�� ��ȯ",
"#i3994742# 1���� - #i2049360# 15�� ��ȯ",
"#i3994742# 1���� - #i1432008# 1�� ��ȯ",
"=======================================",
"#i3994742# 1���� - #i1302162# 1�� ��ȯ",
"#i3994742# 1���� - #i1132013# 1�� ��ȯ",
"#i3994742# 1���� - #i1003449# 1�� ��ȯ",
"=======================================",
"#i3994742# 1���� - #i1702363# 1�� ��ȯ",
"#i3994742# 2���� - #i1112663# 1�� ��ȯ",
"#i3994742# 1500���� - #i1002140# 1�� ��ȯ(All����2000/����200)",]

function start() { 
   var text = "���� �ϴٰ� ���� ����⸦ ���������� ��ȯ�Ҽ��ֽ��ϴ�.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1092035,1); 
            cm.sendOk("#i3994745# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(4310059,15); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1432009,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1142249,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1142249,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(2049360,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1432008,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1302162,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1132013,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(3994745, 1)) { 
            cm.gainItem(3994745,-1); 
            cm.gainItem(1702363,1); 
            cm.sendOk("#i3994742# 1���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(3994745, 221)) { 
            cm.gainItem(3994745,-221); 
            cm.gainItem(1112663,1); 
            cm.sendOk("#i3994742# 2���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk(" ����Ⱑ 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(3994745, 1500)) { 
            cm.gainItem(3994745,-1500); 
            cm.gainItem(1002140,1); 
            cm.sendOk("#i3994742# ���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("����Ⱑ ���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
}
}