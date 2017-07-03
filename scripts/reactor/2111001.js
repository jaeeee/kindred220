function act() {
    rm.spawnFakeMonster(8800000);
    for (i=8800003; i<8800011; i++) {
	rm.spawnMonster(i);
    }
}
