

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        
        if (cm.getPlayer().getEventInstance() == null) {
            cm.warp(951000000);
            cm.dispose();
            return;
        }
        cm.sendYesNo("��? ���� �����ڴٰ�? ���� ������ ������?");
        
    } else if (status == 1) {
      cm.sendNext("�̷�.. �ټ��� ������.. �� ������ �ʹٸ� ������ �ְڳ�. ������ �� ������.")  ;
    } else if (status == 2) {
        var eim = cm.getPlayer().getEventInstance();
        if (cm.getPlayer().getParty() != null) {
            if (!cm.isLeader()) {
                eim.leftParty(cm.getPlayer());
            } else {
                eim.disbandParty();
            }
        } else {
            eim.unregisterPlayer(cm.getPlayer());
            cm.warp(951000000);
        }
        cm.dispose();
    }
}
