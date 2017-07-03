
/*

제작자 : ljw5992@naver.com

*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);



var status = -1;
var givefame = Math.floor(Math.random()*1) + 100;


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

			
 	cm.sendGetText("#e< 환생 안내 >#n\r\n\r\n환생 포인트 : #r100#k \r\n환생 가능 레벨 : #r205#k\r\n#b환생을 하시려면 #r환생#k#b을 쳐주세요.#k\r\n#r환생을 하신 뒤에는 레벨이 150 이 됩니다. ");
	}


                        else if (status == 1) {
			if (cm.getText().equals("환생") && cm.getPlayer().getLevel() >= 205 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(150);
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(5,"< 환생 > "+ cm.getPlayer().getName()+"님께서 환생하셨습니다. " + cm.getPlayer().getName()+ " 님의 환생포인트 : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")"));			cm.getPlayer().addFame(givefame);
			cm.getPlayer().gainAp(givefame);
			cm.getPlayer().setReborns(cm.getPlayer().getReborns() + 1);
			//cm.resetStats(4,4,4,4);
			cm.fakeRelog();
			cm.updateChar();
			cm.dispose();


		} else {

		var text = cm.getText();
		cm.sendOk("입력된 문자 : #e#d"+text+"#k#n\r\n#b레벨#k이 부족하지 않은지 확인해주세요.\r\n\r\n");
		cm.dispose();

			
		}
    }
}
	