function start() {
    cm.sendSimple("��� �濡 #e#b����#n#k�Ͻðڽ��ϱ�?\n\r #l #b#e#L0#[ù��° ��]\n\r #l #L1#[�ι�° ��]\n\r #l #L2#[����° ��]\n\r #l #L3#[�׹�° ��]\n\r #l #L4#[�ټ���° ��]");
}function action(mode, type, selection) {
    if (mode == 1) {
	cm.warp(209000006 + selection, 0);
    }    cm.dispose();
}