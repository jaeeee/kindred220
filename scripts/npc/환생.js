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
	chat += "\r\n#k#n현재 환생포인트 #e:#n #r"+cm.getPlayer().getFame()+"#k　환생 가능 레벨 #e:#n #r200#k\r\n환생시 얻을 수 있는 환생포인트 #e:#n #r1#e~#n200 랜덤#k\r\n환생시 얻을 수 있는 저스티스코인 #e:#n #r1#e~#n7개 랜덤#k\r\n";


                    if (cm.getPlayer().getLevel() >= 140 && cm.canHold(4310034)) {
                        chat += "\r\n#L1#환생한다.";
			cm.sendSimple(chat);

	}
		else {
		chat += "\r\n\r\n레벨이 부족하거나 아이템창이 가득 차 있다.";
		cm.sendOk(chat);
		cm.dispose();

}


	} if (selection == 1) {
cm.getPlayer().setLevel(140);

WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[환생공지] :: ["+ cm.getPlayer().getName()+"] 님께서 환생하셨습니다! [" + cm.getPlayer().getName()+ "] 님의 환생포인트 : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")"));

cm.getPlayer().addFame(givefame);
cm.gainItem(4310034,givecoin);
cm.getPlayer().gainAp(-250);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
    }
	
}