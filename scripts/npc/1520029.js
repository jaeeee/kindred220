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
            var chat = "�ȳ��ϼ���. #b��������#k�� ��ȯ�Ͻðڽ��ϱ�? \r\n#b��������#k�� #v2590014# #t2591186# �� ����մϴ�. \r\n\r\n";
            chat += "\r\n#L0#�� �˰ڽ��ϴ�. ��ȯ�ϰڽ��ϴ�.";
            cm.sendSimple(chat);
        } else if (selection == 0) {
cm.spawnMob(9300762,0,0);
cm.dispose();
            
}

}
}