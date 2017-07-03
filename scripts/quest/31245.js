/*
파란돌륜군
*/
importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendNextS("\r\n\r\n#b(하인즈에게 이곳에서 보고 들은 것을 전해주었다.)", 2);
        } else if (status == 1) {
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}