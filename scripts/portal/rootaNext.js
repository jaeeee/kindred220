function enter(pi) {
if(pi.getMonsterCount(pi.getPlayer().getMapId()) == 0) {
switch(pi.getPlayer().getMapId()) {
case 105200100:
pi.resetMap(105200130);
pi.PartyTimeMove(105200000,105200130,1800);
pi.spawnMob(8910001,-91,-455);
break;
case 105200200:
pi.resetMap(105200210);
pi.PartyTimeMove(105200000,105200210,1800);
pi.spawnMob(8900100,517,551);
break;
case 105200300:
pi.resetMap(105200313);
pi.PartyTimeMove(105200000,105200313,1800);
pi.spawnMob(8920100,88,135);
break;
case 105200400:
pi.resetMap(105200411);
pi.PartyTimeMove(105200000,105200411,1800);
pi.spawnMob(8930100,-145,443);
break;
}
} else {
pi.getPlayer().Message(6,"�ʿ� �ִ� ���͸� ��� óġ�� �ֽʽÿ�.");
}
}