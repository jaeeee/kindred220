


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : ���ʼ�ž

	���ǽ� ���� : 


*/


var status = -1;
var map = 106021500;
var exit = 106021400;

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
        cm.sendSimple("#b��ȥ���� �Ա�#k�� �̵��մϴ�. ���� �̵��Ͻðڽ��ϱ�?\r\n\r\n#b#L0#1. ����ŷ Ÿ�� (��Ƽ(1~6��)�� ���尡�� / ���� : 30�̻�)#l\r\n#L1#2. ��÷�Ÿ ���� (�ַθ� ���� / ���� : 30�̻�)#l#k")
    } else if (status == 1) {
        var em = cm.getEventManager("MiniDungeon");
        if (em == null) {
            cm.getPlayer().message(5, "�̴ϴ��� ��ũ��Ʈ�� ������ �߻��߽��ϴ�. GM���� ������ �ּ���.");
            return false;
        }
        if (selection == 0) {
            if (cm.getPlayer().getParty() != null) {
                if (!cm.allMembersHere()) {
                    cm.getPlayer().message(5, "��Ƽ���� ��� ���־�� ������ �� �ֽ��ϴ�.");
                }
                if (!cm.isLeader()) {
                    cm.getPlayer().message(5, "��Ƽ���� ������ �� �ֽ��ϴ�.");
                }
                em.setProperty("Leader_"+cm.getPlayer().getParty().getLeader().getId()+"_Exit", cm.getPlayer().getMapId()+"");
                em.setProperty("Leader_"+cm.getPlayer().getParty().getLeader().getId()+"_Map", map+"");
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.getPlayer().message(5, "�̴ϴ��� �ν��Ͻ��� ����Ǿ����ϴ�.");
                var eim = cm.getPlayer().getEventInstance();
                eim.startEventTimer(600000);
            } else {
                em.setProperty("Leader_"+cm.getPlayer().getId()+"_Exit", cm.getPlayer().getMapId()+"");
                em.setProperty("Leader_"+cm.getPlayer().getId()+"_Map", map+"");
                em.startInstance(cm.getPlayer());
                cm.getPlayer().message(5, "�̴ϴ��� �ν��Ͻ��� ����Ǿ����ϴ�.");
                var eim = cm.getPlayer().getEventInstance();
                eim.startEventTimer(600000);
            }
            cm.dispose();
        } else {
            cm.sendOk("���� �̱��� �Դϴ�.");
            cm.dispose();
        }
    }
}


