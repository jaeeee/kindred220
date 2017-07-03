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
            var chat = "안녕하세요. #b눈사람#k을 소환하시겠습니까? \r\n#b눈사람#k은 3단계 진화를하며, #v5062100# #t5062100# 를 드랍합니다. \r\n\r\n";
            chat += "\r\n#L0#네 알겠습니다. 소환하겠습니다.";
            cm.sendSimple(chat);
        } else if (selection == 0) {
cm.spawnMob(9300762,100,0);
cm.dispose();
            
}

}
}