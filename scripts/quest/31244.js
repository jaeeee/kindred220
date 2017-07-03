/*
ÆÄ¶õµ¹·û±º
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

            qm.forceStartQuest();
            qm.dispose();
        }
    }
}