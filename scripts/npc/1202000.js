var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (cm.getPlayer().getMapId() != 140090000) {
        if (status == 0) {
	    cm.sendSimple("���� �ñ��Ͻ� �� �ֳ���? �ִٸ� �ٽ� �� �� ������ �帱��\r\n�䣮\r\n#L0##b���� ������?#l\r\n#L1#���� �����?#l\r\n#L2#�� ������?#l\r\n#L3#���ݺ��� �ؾ� �� ���� �˷���.#l\r\n#L4#�κ��丮�� ���� �˷���.#l\r\n#L5#��ų�� ��� �ø���?#l\r\n#L6#��� ������� �˰� �;�.#l\r\n#L7#�� ������? �������� ��� �����?#l\r\n#L8#���ڴ� ��� �μ� �� �־�?#l\r\n#L9#���ڿ� �ɰ� �;�.#l");
	} else {
    	    cm.summonMsg(selection);
    	    cm.dispose();
	}
    } else {
    	if (cm.getInfoQuest(21019).equals("")) {
	    if (status == 0) {
	    	cm.sendNext("���� ����̱���...!");
	    } else if (status == 1) {
	    	cm.sendNextPrevS("...��?",2);
	    } else if (status == 2) {
	    	cm.sendNextPrev("��ٸ��� �־����. �����... ���� ������� �ο�� ������ ����⸦...!");
	    } else if (status == 3) {
	    	cm.sendNextPrevS("...���� ���� �ϴ� ����? �� ������...?",2);
	    } else if (status == 4) {
	    	cm.sendNextPrevS("�ƴ�... �� ����ü ������...? �ƹ��͵� ��ﳪ�� �ʾ�... ��... �Ӹ��� ����!",2);
	    } else if (status == 5) {
	    	cm.updateInfoQuest(21019,"helper=clear");
	    	cm.showWZEffect("Effect/Direction1.img/aranTutorial/face",0);
	    	cm.showWZEffect("Effect/Direction1.img/aranTutorial/ClickLirin",0);
	    	cm.playerSummonHint(true);
	    	cm.dispose();
	    }
    	} else {
	    if (status == 0) {
	    	cm.sendNext("����������?");
	    } else if (status == 1) {
	        cm.sendNextPrevS("��... �ƹ��͵� ��ﳪ�� �ʾ�... ����� �����? �׸��� �� ������?",2);
	    } else if (status == 2) {
	    	cm.sendNextPrev("ħ���ϼ���. ���� �������� ���ְ� ����� ����� ��������... �ƹ��͵� ��ﳪ�� �ʴ´ٰ� �����Ͻ� �ʿ� �����. ���ݺ��� �ñ��Ͻ� �Ϳ� ���� �������� ������ �帱�Կ�.");
	    } else if (status == 3) {
	    	cm.sendNextPrev("����� �����̿���. ���� �� �� ���� ������� �ο� ������ ���带 ������. ������ ������ ���� ���� �������� ���ֿ� �ɷ� ���� �ӿ� �� �ð� ���� ���� ���Ҿ��. �׷��鼭 ��ﵵ ��� �Ұ� ���Ұ��.");
	    } else if (status == 4) {
	    	cm.sendNextPrev("�̰��� ���� ���̶�� �ؿ�. ���� �����簡 ����� ���� ������. ���ַ� ���� ���Ŀ� ���� �ʰ� �׻� ������ ������ �ڵ��� �־��. ����� ���� ���� ���� ����� ������ �߰� �Ǿ����.");
	    } else if (status == 5) {
	    	cm.sendNextPrev("�� �̸��� �����̿���. ���� ������ �� ������. ���� ������ ���� ������ ���� ���� ������ ���ƿ��� ��ٷ� �Ծ��. �׸���... ���� ����� ã�Ƴ������. ����. �ٷ� ���⿡��...");
	    } else if (status == 6) {
	    	cm.sendNextPrev("�� ���� �ʹ� ���� ������ ��ȱ���. ������ �������� ���ϼŵ� ��� �����. ���� ��� ���� �˰� �ǽ� �״�... #b�׺��� � ������ ����.#k ������ ������ ������ �𸣴� ���� ������ ���� ������ �˷��帱�Կ�.");
	    } else if (status == 7) {
	    	cm.warp(140090100,0);
	    	cm.playerSummonHint(true);
	    	cm.dispose();
	    }
    	}
    }
}