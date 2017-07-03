function act() {
    rm.killAllMob();
	if(rm.PinkBean()) {
	rm.spawnMonster(8820108);
	} else {
    rm.spawnMonster(8820008);
	}
}