function start() {
 cm.sendSimple ("#L1##k#b헬모드로진행하겠습니다(경험치 : 15배)#k#l#n\r\n#L2##b헬모드로진행하지않겠습니다(서버배율)#k#l#n\r\n#L3##b헬모드의장점을보겠습니다#k#l#n")
}

function action(mode, type, selection) {
 cm.dispose();
 if (selection == 0) {
  cm.enterCS();
 } else if (selection == 1) {
  cm.getPlayer().setKeyValue("hellmode", "1");
  cm.warp(109090200, 0);
  cm.gainMeso(5000000);
 } else if (selection == 2) {
  cm.warp(109090200, 0);
  cm.gainMeso(5000000);
 } else if (selection == 3) {
  cm.sendOk("헬모드로 선택할시엔\r\n 레벨업마다 AP를 1~10 랜덤으로 더주고 음감도더드립니다")
  cm.dispose();
 }
}