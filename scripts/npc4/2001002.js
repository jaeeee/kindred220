function start() {
    cm.sendSimple("어느 방에 #e#b입장#n#k하시겠습니까?\n\r #l #b#e#L0#[첫번째 방]\n\r #l #L1#[두번째 방]\n\r #l #L2#[세번째 방]\n\r #l #L3#[네번째 방]\n\r #l #L4#[다섯번째 방]");
}function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000006 + selection, 0);
    }    cm.dispose();
}