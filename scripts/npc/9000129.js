/*

Copyright �� 2013 Spirit Corporaion. All Rights Reserved.

leader.���Ǹ��¶��� (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.��� (guri__s@nate.com)
member.���� (iureal@nate.com)
member.����ε� ()


�� ��ũ��Ʈ�� ���Ǹ��¶��ο��� ���˴ϴ�.
���� ������ �Ǵ��� �� �ּ��� �������� ���������� ���ڽ��ϴ�.

*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var jessica = "�� ������ ������ #b��� ũ����Ʈ ��#k �� ��� ũ����Ʈ �� �ռ��Ҽ��ִ� �ɷ������� ";
		jessica += "#b������ ��� ũ����Ʈ ��#k �� �ռ��ϱ����ؼ� �׿��´�#b ��� ũ����Ʈ#k �� �ʿ��� ";
		jessica += "�ѹ� ��� ũ����Ʈ ���� �ռ��غ��ھ�?\r\n\r\n#b";
                jessica += "#e#r[��� ũ����Ʈ ��]#n\r\n#b";
                jessica += "#L17#100000 / " + cm.getMeso() + " �޼� = #i1112762#\r\n\r\n\r\n#l";
		jessica += "#e#r[���� ���]#n\r\n#b";
                jessica += "#L16##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4440000#" + cm.itemQuantity(4440000) + " /1 = #i1112763#\r\n";
                jessica += "#L12##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4440100#" + cm.itemQuantity(4440100) + " /1 = #i1112764#\r\n";
		jessica += "#L0##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4440200#" + cm.itemQuantity(4440200) + " /1 = #i1112765#\r\n";
                jessica += "#L2##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4440300#" + cm.itemQuantity(4440300) + " /1 = #i1112766#\r\n\r\n\r\n#l";
		jessica += "#e#r[����� ���]#n#b\r\n";
	        jessica += "#L20##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4441000#" + cm.itemQuantity(4441000) + " /1 = #i1112767#\r\n";
                jessica += "#L21##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4441100#" + cm.itemQuantity(4441100) + " /1 = #i1112768#\r\n";
		jessica += "#L22##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4441200#" + cm.itemQuantity(4441200) + " /1 = #i1112769#\r\n";
                jessica += "#L23##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4441300#" + cm.itemQuantity(4441300) + " /1 = #i1112770#\r\n\r\n\r\n#l";
		jessica += "#e#r[������ ���]#n#b\r\n";
	        jessica += "#L24##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4442000#" + cm.itemQuantity(4442000) + " /1 = #i1112771#\r\n";
                jessica += "#L25##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4442100#" + cm.itemQuantity(4442100) + " /1 = #i1112772#\r\n";
		jessica += "#L26##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4442200#" + cm.itemQuantity(4442200) + " /1 = #i1112773#\r\n";
                jessica += "#L27##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4442300#" + cm.itemQuantity(4442300) + " /1 = #i1112774#\r\n\r\n\r\n#l";
		jessica += "#e#r[��ø�� ���]#n#b\r\n";
	        jessica += "#L28##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4443000#" + cm.itemQuantity(4443000) + " /1 = #i1112775#\r\n";
                jessica += "#L29##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4443100#" + cm.itemQuantity(4443100) + " /1 = #i1112776#\r\n";
		jessica += "#L30##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4443200#" + cm.itemQuantity(4443200) + " /1 = #i1112777#\r\n";
                jessica += "#L31##i1112762# " + cm.itemQuantity(1112762) + "/1 #i4443300#" + cm.itemQuantity(4443300) + " /1 = #i1112778#\r\n\r\n\r\n#l";
		cm.sendSimple(jessica);

	} else if (status == 1) {
        if (selection == 17) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(1112762,1);
               cm.gainMeso(-100000);
               cm.sendOk("#b��� ũ����Ʈ ��#k �� ���� ���â�� �־�J���� Ȯ���غ�~");
               cm.dispose();
               } else {
               cm.sendOk("#b��� ũ����Ʈ ��#k �� �����ϱ⿡�� �޼Ұ� �����ѰŰ�����?");
               cm.dispose();
               } 
}else if (selection == 16) {
               if(cm.haveItem(1112762, 1) && cm.haveItem(4440000, 1)) {
               cm.gainItem(1112762, -1);
               cm.gainItem(4440000, -1);
               cm.gainItem(1112767, 1);
               cm.sendOk("#bS�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
               cm.dispose();
               } else {
               cm.sendOk("#bS�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
               cm.dispose();
               }   
} else if (selection == 12) {
if(cm.haveItem(1112762, 1) && cm.haveItem(4440100, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4440100, -1);
cm.gainItem(1112764, 1);
cm.sendOk("#bA�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
cm.sendOk("#bA�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
cm.dispose();
}
} else if (selection == 0) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4440200, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4440200, -1);
cm.gainItem(1112765, 1);
cm.sendOk("#bB�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
}else{
cm.sendOk("#bB�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
cm.disose();
}
} else if (selection == 2) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4440300, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4440300, -1);
cm.gainItem(1112766, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 20) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4441000, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4441000, -1);
cm.gainItem(1112767, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 21) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4441100, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4441100, -1);
cm.gainItem(1112768, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 22) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4441200, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4441200, -1);
cm.gainItem(1112769, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 23) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4441300, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4441300, -1);
cm.gainItem(1112770, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 24) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4442000, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4442000, -1);
cm.gainItem(1112771, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 25) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4442100, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4442100, -1);
cm.gainItem(1112772, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 26) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4442200, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4442200, -1);
cm.gainItem(1112773, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 27) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4442300, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4442300, -1);
cm.gainItem(1112774, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 28) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4443000, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4443000, -1);
cm.gainItem(1112775, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 29) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4443100, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4443100, -1);
cm.gainItem(1112776, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 30) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4443200, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4443200, -1);
cm.gainItem(1112777, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
} else if (selection == 31) {
if (cm.haveItem(1112762, 1) && cm.haveItem(4443300, 1)) {
cm.gainItem(1112762, -1);
cm.gainItem(4443300, -1);
cm.gainItem(1112778, 1);
cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �ռ��� �Ϸ�Ǿ���");
cm.dispose();
}else{
    cm.sendOk("#bC�� ��� ũ����Ʈ ��#k �� �ռ��ϱ⿡�� ��ᰡ �����ѰŰ�����?");
}
}
        }
    }
}