
importPackage(java.text);

function enter(pi) {
if (pi.getPlayer().getMapId() == 270010100) { /* Ÿ�ӷε� : �߾��� ��1 */
	if(pi.getQuestStatus(3501) == 2) {
		pi.warp(270010110);
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);
		pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270010200) { /* Ÿ�ӷε� : �߾��� ��2 */
	if(pi.getQuestStatus(3502) == 2) {
		pi.warp(270010300);
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);
                pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270010300) { /* Ÿ�ӷε� : �߾��� ��3 */
	if(pi.getQuestStatus(3503) == 2) {
		pi.warp(270010400);
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);
                pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270010400) { /* Ÿ�ӷε� : �߾��� ��4 */
	if(pi.getQuestStatus(3504) == 2) {
		pi.warp(270010500);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);
pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270010500) { /* Ÿ�ӷε� : �߾��� ��5 */
	if(pi.getQuestStatus(3507) == 2) {
		pi.warp(270020000);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);
pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270020100) { /* Ÿ�ӷε� : ��ȸ�� ��1 */
	if(pi.getQuestStatus(3508) == 2) {
		pi.warp(270020200);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);
pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270020200) { /* Ÿ�ӷε� : ��ȸ�� ��2 */
	if(pi.getQuestStatus(3509) == 2) {
		pi.warp(270020300);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270020300) { /* Ÿ�ӷε� : ��ȸ�� ��3 */
	if(pi.getQuestStatus(3510) == 2) {
		pi.warp(270020400);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270020400) { /* Ÿ�ӷε� : ��ȸ�� ��4 */
	if(pi.getQuestStatus(3511) == 2) {
		pi.warp(270020500);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270020500) { /* Ÿ�ӷε� : ��ȸ�� ��5 */
	if(pi.getQuestStatus(3514) == 2) {
		pi.warp(270030000);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270030100) { /* Ÿ�ӷε� : ������ ��1 */
	if(pi.getQuestStatus(3514) == 2) {
		pi.warp(270030200);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270030200) { /* Ÿ�ӷε� : ������ ��2 */
	if(pi.getQuestStatus(3515) == 2) {
		pi.warp(270030300);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270030300) { /* Ÿ�ӷε� : ������ ��3 */
	if(pi.getQuestStatus(3516) == 2) {
		pi.warp(270030400);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270030400) { /* Ÿ�ӷε� : ������ ��4 */
	if(pi.getQuestStatus(3517) == 2) {
		pi.warp(270030410);
		
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270030500) { /* Ÿ�ӷε� : ������ ��5 */
	if(pi.haveItem(4032002, 1)) {
            pi.gainItem(4032002, -1);
		pi.warp(270040000);
		return true;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}
else if (pi.getPlayer().getMapId() == 270040000) { /* ���� ���� �� : �μ��� ȸ�� */
	if(pi.getQuestStatus(3521) == 2) {
		pi.warp(270040100);
		//pi.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(5, "�ŵ��� Ȳȥ ���� ����Ʈ �������̹Ƿ� ������ �Ұ��� �մϴ�."));
		return false;
	} else {
		pi.warp(pi.getPlayer().getMapId(),0);pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
		return false;
	}
}

	
pi.warp(pi.getPlayer().getMapId(),0);
pi.playerMessage(5, "�� �� ���� ���� ���� �� �̻� ������ �� ����.");
return false;

}