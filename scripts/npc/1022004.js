/*

제작자 : ljw5992@naver.com

*/
importPackage(java.lang);
importPackage(Packages.main.world);
importPackage(Packages.packet.creators);

var status = -1;
var givefame = Math.floor(Math.random()*200);
var givecoin = Math.floor(Math.random()*7);

function start() {
    status = -1;
    action (1, 0, 0);
}
	
function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {

 	var chat = ""
	chat += "\r\n#k#n현재 환생포인트 #e:#n #r"+cm.getPlayer().getFame()+"#k　환생 가능 레벨 #e:#n #r210#k\r\n환생시 얻을 수 있는 환생포인트 #e: #r900#k\r\n환생시 얻을 수 있는 스텟포인트 #e: #r700#k\r\n";
                    if (cm.getPlayer().getLevel() >= 210 && cm.getPlayer().getJob() != 10112) {
                    if (cm.getPlayer().getFame() >= 70000) {
                        chat += "\r\n#L1#환생하겠습니다";
			cm.sendSimple(chat);
	}
}
		else {
		chat += "\r\n#r아직 210이 되지 못했습니다.#k\r\n#b(또는 제로는 환생불가합니다.)#k";
		cm.sendOk(chat);
		cm.dispose();

}


	} if (selection == 1) {

cm.getPlayer().setLevel(170);
cm.getPlayer().addFame(900);
cm.getPlayer().gainAp(700);
cm.fakeRelog();
cm.updateChar();
cm.dispose();

    }
	
}