function act() {
    rm.spawnFakeMonster(8800100);
    for (i=8800103; i<8800111; i++)
        rm.spawnMonster(i);
    rm.mapMessage(5, "���� ���� ������ ���񳪹����� ī���������� ��ȯ�Ǿ����ϴ�!");
    rm.closeMapDoor(211042300+isChaos(rm), 5400);
    rm.scheduleTimeMoveMap(280090000, 280030000+isChaos(rm), 5400, true);
    rm.scheduleBossRaidMap(5400);
    rm.setLastBossMap(280030000+isChaos(rm));
    rm.mapMessage(6, "[�˸�] ���� ���̵� Ÿ�Ӿƿ��Ŵ��� - ī�������� - �۵��Ǿ����ϴ�. ����� ���ϴ�!");
    rm.mapMessage(6, "[�˸�] ������ ��� ���� ƨ�� ��� �����ӽ� @������������ ��ɾ �Է����ּ���.");
    rm.mapMessage(5, "[���] ���� ���̵尡 ���۵Ǿ� ���� ä�ο� ���� ���� ��Ÿ���� ���۵˴ϴ�.");
    rm.allExpSetTimeValueCurrent("ChaosZakum_BattleStartTime");
}

function isChaos(rm) {
    return rm.getClient().getChannel() % 2;
}