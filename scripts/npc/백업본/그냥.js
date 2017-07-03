function start() {
 cm.sendSimple ("#L0##k#b헬모드를 이용하겠습니다#k#l#n\r\n#L1##k#d헬모드를 이용하지 않겠습니다#k#l#n")

function action(mode, type, selection) {
 cm.getPlayer().setKeyValue("hellmode", "1");
 cm.warp(223010200, 0);
 if (selection == 0) {
  cm.enterCS();
 } else if (selection == 1) {
  cm.warp(223010200, 0);
  cm.dispose();
 }
}
}