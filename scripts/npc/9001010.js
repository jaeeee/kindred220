var status = -1;
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
if (status == 0) {
var chat = "#e#r제로#k #e#b스킬마스터#k#n를 담당하고있는 #e#r요원 아이쓰~!#k#n 라고 합니다.\r\n";
chat += "#e#b스킬마스터#k#n를 해보시겠어요?\r\n\r\n";
chat += "#b[레벨 100] : 1차 스킬마스터\r\n";
chat += "[레벨 130] : 2차 스킬마스터\r\n";
chat += "[레벨 150] : 3차 스킬마스터\r\n";
chat += "[레벨 180] : 4차 스킬마스터\r\n";
chat += "[레벨 190] : 쉐도우 레인\r\n";
if(cm.getPlayer().getLevel() >= 190) {
chat += "#b#L1#네 쉐도우레인 을 습득 하겠습니다.#l\r\n";
}
if(cm.getPlayer().getLevel() >= 100) {
chat += "#b#L0# 1차 스킬마스터를 하겠습니다.#l\r\n";
} 
if(cm.getPlayer().getLevel() >= 130) {
chat += "#b#L2# 2차 스킬마스터를 하겠습니다. (WP 500 이상)#l\r\n";
}
if(cm.getPlayer().getLevel() >= 150) {
chat += "#b#L3# 3차 스킬마스터를 하겠습니다. (WP 1000 이상)#l\r\n";
}
if(cm.getPlayer().getLevel() >= 180) {
chat += "#b#L4# 4차 스킬마스터를 하겠습니다. (WP 1500 이상)#l\r\n";
}

cm.sendSimple(chat);
} else if (status == 1) {
if (selection == 1) {
cm.teachSkill(100001283,1,1);
cm.sendOk("#e#b쉐도우레인#k#n 습득을 완료 하였습니다.");
cm.dispose();
} else if (selection == 0) {
if(cm.getJob() == 10112) {
if (cm.getPlayer().getLevel() >= 100) {
cm.sendOk("#e#b스킬마스터#k#n 가 완료 되었습니다.");
cm.getPlayer().maxskill1(10100);
cm.dispose();
}
} else {
cm.sendOk("#e#r제로#k#n 직업군만 가능합니다.");
cm.dispose();
}

} else if (selection == 2) {
if (cm.getPlayer().getLevel() >= 130 && cm.getPlayer().getWP() >= 500) {
cm.sendOk("#e#b스킬마스터#k#n 가 완료 되었습니다.");
cm.getPlayer().maxskill1(10110);
cm.getPlayer().setWP(cm.getPlayer().getWP() - 500);
cm.dispose();
} else {
cm.sendOk("#e#r제로#k#n 직업군만 가능합니다.  (wp 500 이상)");
cm.dispose();
}

} else if (selection == 3) {
if(cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getWP() >= 1000) {
cm.sendOk("#e#b스킬마스터#k#n 가 완료 되었습니다.");
cm.getPlayer().maxskill1(10111);
cm.getPlayer().setWP(cm.getPlayer().getWP() - 1000);
cm.dispose();
} else {
cm.sendOk("#e#r제로#k#n 직업군만 가능합니다.  (wp 1000 이상)");
cm.dispose();
}

} else if (selection == 4) {
if (cm.getPlayer().getLevel() >= 180 && cm.getPlayer().getWP() >= 1500) {
cm.sendOk("#e#b스킬마스터#k#n 가 완료 되었습니다.");
cm.getPlayer().maxskill1(10112);
cm.getPlayer().setWP(cm.getPlayer().getWP() - 1500);
cm.dispose();
} else {
cm.sendOk("#e#r제로#k#n 직업군만 가능합니다. 또는 (wp 1500 이상)");
cm.dispose();
}

}
} else {
cm.dispose();
}
}
