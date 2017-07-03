var status;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
cm.warp(105000000);
cm.getPlayer().setKeyValue("lutas","start");
cm.sendNextS("뭐야, 낡긴 했어도 주문서는 아무 이상도 없잖아, 다시 돌아가야겠다.",2);	
cm.dispose();
}
}
}