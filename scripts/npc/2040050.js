/*
		���̽� ��Ÿ�� ��ũ��Ʈ
		
		������ : ���̽��Ŵ���(race_adm)

		�뵵 : ���� ���Ǿ�
*/
var status = 0;
var select=0;
function start() {


    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getPlayer().getRewardDB().size() == 0) {
		cm.sendOk("#h0#���� ������ ���� �������� �����.");
		cm.dispose();
		return;
	    }
		cm.sendSimple("�ȳ��ϼ���! #h0#��! ���� �������� ������ �ּ���.\r\n\r\n#b"+cm.getPlayer().printRewardsSaves());
        } else if (status == 1) {
		select = selection;
		cm.sendYesNo("���� ���� �������� �����ðڽ��ϱ�?\r\n\r\n#b#i"+cm.getPlayer().getRewardsSavedItem(select)[0]+"# #z"+cm.getPlayer().getRewardsSavedItem(select)[0]+"# "+cm.getPlayer().getRewardsSavedItem(select)[1]+" ��");
	} else if (status == 2) {
		if(cm.canHold(cm.getPlayer().getRewardsSavedItem(select)[0])) {
			cm.gainItem(cm.getPlayer().getRewardsSavedItem(select)[0],cm.getPlayer().getRewardsSavedItem(select)[1]);
			cm.sendOk("�������� ���������� ���޵Ǿ����ϴ�.");
			cm.dispose();
			cm.getPlayer().removeRewardsDB(cm.getPlayer().getRewardsSavedItem(select)[0],cm.getPlayer().getRewardsSavedItem(select)[1],cm.getPlayer().getId());
		} else {
			cm.sendOk("�˼��մϴ�. ������ �κ��丮 ������ Ȯ���Ͻ� �� �ٽ� �õ��� �ּ���.");
			cm.dispose();
		}
	}
    }
}

