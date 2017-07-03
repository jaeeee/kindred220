/*

제작자 : on1128@naver.com

*/
importPackage(java.lang);
importPackage(Packages.launch.world);
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
	chat += "\r\n#k#n현재 환생포인트 #e:#n #r"+cm.getPlayer().getFame()+"#k　변생 가능 레벨 #e:#n #r250#k\r\n변생을 할경우 레벨 10의 초보자로 돌아가며 999의스탯이 주어집니다. 변생을 한후에 캐시샵을 눌러 전직하기를 통해 전직을 하시면 됩니다.\r\n";

                    if (cm.getPlayer().getLevel() >= 250 && cm.canHold(4310034) && cm.getPlayer().getFame() >= 10000) {
                        chat += "\r\n#L1#변생하기!";
			cm.sendSimple(chat);

	}
		else {
		chat += "\r\n\r\n#r환포가 10000이넘어야됩니다.#k\r\n";
		cm.sendOk(chat);
		cm.dispose();

}


	} if (selection == 1) {
cm.getPlayer().setJob(0);
cm.getPlayer().setLevel(110);
cm.getPlayer().addFame(-8000);
cm.getPlayer().gainAp(999);
cm.warp(100000000, 0);
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"님께서 변생을 하셧습니다."+cm.getPlayer().getName()+"님의 환생포인트는"+cm.getPlayer().getFame()+"점입니다. "));
cm.fakeRelog();
cm.updateChar();
cm.dispose();
    }
	
}