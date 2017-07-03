function enter(pi) {
    pi.playPortalSE();
    pi.warp(pi.getSavedLocation("MULUNG_DOJO"), 0);
    pi.clearSavedLocation("MULUNG_DOJO");
}