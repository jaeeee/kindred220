function start() {
 cm.sendSimple ("#L0##k#b���带 �̿��ϰڽ��ϴ�#k#l#n\r\n#L1##k#d���带 �̿����� �ʰڽ��ϴ�#k#l#n")

function action(mode, type, selection) {
 cm.getPlayer().setKeyValue("hellmode", "1");
 cm.warp(100000000, 0);
 if (selection == 0) {
  cm.enterCS();
 } else if (selection == 1) {
  cm.warp(100000000, 0);
  cm.dispose();
 }
}
}