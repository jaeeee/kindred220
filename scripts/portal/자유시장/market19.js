function enter(pi) {
    pi.playPortalSE();
    pi.setSavedMapId(pi.getMapId());
    pi.warp(910000000, "out00");
    return true;
}
