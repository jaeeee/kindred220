function act() {
    rm.changeMusic("Bgm14/HonTale");
    rm.spawnMonster(8810026,71,260);
    rm.getMap().killMonster(rm.getMap().getMonsterById(8810026));
    rm.createMapMonitor(240050400,"sp");
}