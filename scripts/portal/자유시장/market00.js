function enter(pi) {
    pi.playPortalSE();
    try {
        pi.warp(pi.getSavedMapId(), "market00");
    } catch (err) {
        pi.warp(100000000);
    }
    return true;
}
