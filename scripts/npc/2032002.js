/*

                          ���� �� 1�ܰ� �ƿ�� ��ũ��Ʈ�Դϴ�.
                          ������ : ���� (qor6101@naver.com)

*/
var select = -1;
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
            cm.warp(280090000);
            cm.dispose();
            return;
        }
         cm.sendNext("�� ������ �����Ϸ� ���� �е��̱���. �����е��� ���� ��ǥ�� ��������� ������ ������ ���� �ʿ��� ������ �Լ��ϼž� �մϴ�. �� ������ �������� �켱�� ������ ��Ḧ ��� ���� �켱�̰�����. ����߿� �ϳ��� #b���� ����#k�� �ٷ� �̰����� ���� �� �ֽ��ϴ�. ���� ���� ���� �ƴ����� ������.");
    } else if (status == 1) {
         cm.sendNextPrev("�̰����� �� ���� ������ ���ϴ� �Ա��� �ֽ��ϴ�. ���� �ȿ��� ���ڵ��� �ִ� ���ڸ� �ı��� �� #b���� 7��#k�� �����ž� �մϴ�. ���ڴ� ��ų �������δ� �μ� �� ������ ������ �Ϲ� �������θ� Ÿ���� �� �� ������ ������ �ּ���. �� �� 7���� ���踦 ���� ���� �濡 �ִ� Ŀ�ٶ� �������ڿ� ����߸��� #b���� ����#k�� ���� �� ���� �̴ϴ�. ����߸��� �󸶰��� �ð��� ������ ���� �� ������ ��ٷ� ������.");
    } else if (status == 2) {
            cm.sendNextPrev("���� ��� ���ڿ� ���谡 �ִ°� �ƴմϴ�. ����ġ ���ߴ� ���� ������ ���� ������ �����ؾ� ����. ���ڸ� �����ϴ� ���� ���� ���� ������ �����µ� �̰͵� ��ƿ� �ֽø� Ʋ������ ���� ���� ���� �̴ϴ�. ���� ������ 30�� �̻� ��ƿ��ø� �˴ϴ�. ���� ������ �帱�� �ִ°� �����������.");
    } else if (status == 3) {
             var chat = "�� �ñ��� ���� �����Ű���?\r\n";
             chat += "\r\n#L0##b���� ����#k�� �����Խ��ϴ�.";
             chat += "\r\n#L1#�����z �����ϰ� �� ������ �����ϴ�.";
             cm.sendSimple(chat);
    } else if (status == 4) {
        select = selection;
        if (select == 0) {
            if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �ƴϽñ���. ��Ƽ���� ���� ���� �ɾ� ������ �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001018)) {
                cm.sendOk("��Ƽ������ �������� ���� ������ ��Ƽ���� ��� ��� ������ �ּž� �մϴ�. �ٽ� �� �� Ȯ���� �ּ���.");
                cm.dispose();
                return;
            }
            var paper = cm.haveItem(4001015, 30);
            if (paper) {                
	        cm.sendYesNo("#b���� ���� 1��#k�� ���� ���� #b" + cm.itemQuantity(4001015) + "��#k�� ��ƿ� �ּ̱���. ��Ƽ������ ������ ������ �̰� ���ΰ� �½��ϱ�?");
               } else {
                cm.sendYesNo("#b���� ���� 1��#k�� ������ ������������, #b���� ����#k�� #r30�� �̻� ������ ���ϼ̱���.#k ��Ƽ������ ������ ������ �̰� ���ΰ� �½��ϱ�?");
	}
        } else if (select == 1) {
            cm.sendYesNo("�����ϽŴٸ� ó������ �ٽ� �����ϼž� ���ٵ�... �Դٰ� ��Ƽ�� ��� �� �Բ� �����ϴ� ����Ʈ�̱� ������ �� ���̶� ���߿� �����ٸ� Ŭ��� ��������� �𸣴� ��... ���� �����ðھ��?");
        }
    } else if (status == 5) {
      cm.sendNext("�����ϴ�. �� �ʿ� ���� ��Ż�� ���� �Ƶ��񽺰� �ִ� ������ ���ư��� �� �ֽ��ϴ�. ��Ż�� ������ ���߿� ������ �ֽ� #b���� ����#k�� #b���� ���� ����#k���� ����� ��Ƽ�� �������� ������ �帳�ϴ�. �׷� 1�ܰ踦 Ŭ���� �ϽŰ��� ���ϵ帳�ϴ�. �ȳ���...");
    } else if (status == 6) {
	if (select == 0) {
            var paper = cm.haveItem(4001015, 30);
            var eim = cm.getPlayer().getEventInstance();
            cm.gainItem(4001018, -1);
            cm.givePartyItems(4031061, 1, cm.getClient().getChannelServer().getPartyMembers(cm.getParty()));
            if (paper) {
                cm.removeAll(4001015);
                cm.givePartyItems(2030007, 10, cm.getClient().getChannelServer().getPartyMembers(cm.getParty()));
            }
            var it = eim.getPlayers().iterator();
            while (it.hasNext()) {
                var chr = it.next();
                chr.setKeyValue("Quest_Zakum03", "1");
            }
	    cm.forceCompleteQuest(100001);
            eim.finishPQ();
            cm.dispose();
        } else if (select == 1) {
            var eim = cm.getPlayer().getEventInstance();
            if (!cm.isLeader()) {
                eim.leftParty(cm.getPlayer());
            } else {
                eim.disbandParty();
            }
      }
   }
}