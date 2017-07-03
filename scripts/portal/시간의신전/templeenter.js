importPackage(Packages.client.stats);
function enter(pi) {
    pi.getPlayer().cancelEffectFromBuffStat(BuffStats.MORPH, 2210016);
    pi.warp(270000100);
    return true;
}