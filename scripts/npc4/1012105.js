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
		var jessica = "#b돌림판 이용권#k을 교환해드리고 있습니다.\r\n";
                jessica += "#L1##i4001780##e#b  돌림판 이용권 -  #i4310119#  11주년코인 100개";
		cm.sendSimple(jessica);

	} else if (status == 1) {
        if (selection == 1) {
              if(cm.haveItem(4310119,100)) {
                cm.sendOk("#i4001780##e#b돌림판 이용권#k으로 #e#b교환#n#k이 #e#b완료#n#k되었습니다.");
		cm.gainItem(4310119, -100);
                cm.gainItem(4001780, 1);
                cm.dispose();
               } else {
               cm.sendOk("#e#b#i4310119# 11주년 코인#n#k이 #e#b100개가#n#k 있는지 #e#b확인#n#k해 보세요.");
               cm.dispose();
}
}
}
}
}