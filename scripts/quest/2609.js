/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ������ ��

	���ǽ� ���� : ����Ʈ


*/

var status = -1;
importPackage(Packages.client.items);
importPackage(Packages.client.stats);
importPackage(Packages.client.inventory);
function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else if (mode == 0 && status == 2) {
            qm.sendNext("�׷�����? ���� �� �����غ��ð� �ٽ� ���� �ɾ��ּ���.");
            qm.dispose();
            return;
        }
        else if (mode == 0)
            status--;
        if (status == 0) {
            if (qm.getQuestStatus(2609) == 0) {
                qm.useItem(2022963);
                qm.forceStartQuest();
                qm.dispose();
                return;
            }
            if (qm.getPlayer().getBuffedValue(BuffStats.SPEED) == null) {
                qm.dispose();
                return;
            }
            qm.sendNext("#h #? ���� ������? ����� �Ǽ�... ��? ȫ�ư� ��������...? ...�� �༮, �� �׷� �̻��� �峭�� ġ��... �츮 ��� ���̵尡 �������� ������ ���� ���� ���ݾƿ�. ȫ���� �峭�� ���̴� �Ű� ���� ������. �츮�� ����� �ŷ��ؿ�.");
        } else if (status == 1) {
            qm.sendNextPrev("���� �ŷڿ� ���� ������ ����̶�� �̾߱Ⱑ �޶�����������. ��� ���̵带 ������ ������ ������ ���� �����ôٸ� ����� ������ ������.");
        } else if (status == 2) {
            qm.askAcceptDecline("�׺��� �̷� �峭���� ġ�� �� ���� ����� ������ �Ϸ�� ����̱���. �ڼ�, ����... ��� �����̷� ������ �غ� �� ���� ��������. �׷� #b�α׷� ����#k�ϰھ��? �������� �ӹ��� ���� �غ�ܰ迡 �����ϴ� �ſ���.");
        } else if (status == 3) {
            qm.getPlayer().getInventory(PureInventoryType.EQUIP).setSlotLimit(qm.getPlayer().getInventory(PureInventoryType.EQUIP).getSlotLimit() + 4);
            qm.getPlayer().getInventory(PureInventoryType.ETC).setSlotLimit(qm.getPlayer().getInventory(PureInventoryType.ETC).getSlotLimit() + 4);
            qm.getPlayer().send(Packages.packet.creators.MainPacketCreator.getPlayerInfo(qm.getPlayer()));
            qm.sendNext("�̷μ� ����� �����̿���. ���� �̵����� ����� ����� ��������... �׷��⿡ ������ ����� ��ȭ���� �����̰� �Ǿ� ��ũ�ε忡�� ������ �� �ְ���.");
            qm.forceCompleteQuest();
            qm.getPlayer().changeJob(400);
            qm.resetStats(4,25,4,4);
            qm.gainItem(1332063, 1);
            qm.gainItem(1142107, 1);
        } else if (status == 4) {
            qm.sendNext("�̵����� �ϴ��� �Ϲ����� ������ ������ �ٸ����� �ʾƿ�. ������ LUK�� �߽ɽ�������, DEX�� ������������ ���ܿ�. ���� �ø��� ���� �𸣸� #b�ڵ����#k�� ����ϸ� �˴ϴ�.");
        } else if (status == 5) {
            qm.sendNextPrev("��, �׸���... ������ Ȱ���� �Ϸ��� �ʿ��� ������ ������? ����� ���, ��Ÿ ������ �������� ������ �÷Ⱦ��.  �κ��丮�� �������� Ȱ���� ���ϰ���.");
        } else if (status == 6) {
            qm.sendPrev("��! ���� ��ſ��� �� ���� �����������. �������ʹ� ȫ�ư� �ٽ� �� �� ����� �ӹ��� �˷��� �ſ���. �׷�... �������.");
        } else if (status == 7) {
            qm.spawnNPCTemp(1057001, -54, 152);
            qm.dispose();
        }
    }
}
