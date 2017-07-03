var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
    } else {
        status++;
        if (status == 0) {
            qm.sendOk("자.이제 승강기에 올라타서 암벽거인한테 가보도록해!");
            qm.forceCompleteQuest();
        }
    }
}

