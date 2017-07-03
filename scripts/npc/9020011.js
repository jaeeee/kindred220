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
            var chat = "#e애송이로군 .. 더 이상 관여하지마라 . 애송이 ~ 하하하하 #n\r\n";
            chat += "\r\n#L0# 두 번째 퀘스트를 시작합니다..";
            cm.sendSimple(chat);
        } else if (selection == 0) {
cm.spawnMob(8870000,0,0);
cm.dispose();
            
}

}
}