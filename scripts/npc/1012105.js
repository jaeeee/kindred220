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
		var jessica = "#b������ �̿��#k�� ��ȯ�ص帮�� �ֽ��ϴ�.\r\n";
                jessica += "#L1##i4001780##e#b  ������ �̿�� -  #i4310119#  11�ֳ����� 100��";
		cm.sendSimple(jessica);

	} else if (status == 1) {
        if (selection == 1) {
              if(cm.haveItem(4310119,100)) {
                cm.sendOk("#i4001780##e#b������ �̿��#k���� #e#b��ȯ#n#k�� #e#b�Ϸ�#n#k�Ǿ����ϴ�.");
		cm.gainItem(4310119, -100);
                cm.gainItem(4001780, 1);
                cm.dispose();
               } else {
               cm.sendOk("#e#b#i4310119# 11�ֳ� ����#n#k�� #e#b100����#n#k �ִ��� #e#bȮ��#n#k�� ������.");
               cm.dispose();
}
}
}
}
}