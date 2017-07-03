function act() {
    rm.spawnFakeMonster(8800100);
    for (i=8800103; i<8800111; i++)
        rm.spawnMonster(i);
    rm.mapMessage(5, "불의 눈의 힘으로 자쿰나무에서 카오스자쿰이 소환되었습니다!");
    rm.closeMapDoor(211042300+isChaos(rm), 5400);
    rm.scheduleTimeMoveMap(280090000, 280030000+isChaos(rm), 5400, true);
    rm.scheduleBossRaidMap(5400);
    rm.setLastBossMap(280030000+isChaos(rm));
    rm.mapMessage(6, "[알림] 보스 레이드 타임아웃매니저 - 카오스자쿰 - 작동되었습니다. 행운을 빕니다!");
    rm.mapMessage(6, "[알림] 보스를 잡던 도중 튕길 경우 재접속시 @원정대재입장 명령어를 입력해주세요.");
    rm.mapMessage(5, "[경고] 보스 레이드가 시작되어 현재 채널에 현재 보스 쿨타임이 시작됩니다.");
    rm.allExpSetTimeValueCurrent("ChaosZakum_BattleStartTime");
}

function isChaos(rm) {
    return rm.getClient().getChannel() % 2;
}