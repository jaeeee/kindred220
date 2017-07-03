/*

제작자 : ljw5992@naver.com

*/

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);



var status = -1;
var givefame = Math.floor(Math.random()*200+1);
var givecoin = Math.floor(Math.random()*5+1);


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

			
 	cm.sendGetText("\r\n#k#n현재 환생포인트 #e:#n #r"+cm.getPlayer().getFame()+"#k　환생 가능 레벨 #e:#n #r200#k\r\n환생시 얻을 수 있는 환생포인트 #e:#n #r1#e~#n200 랜덤#k\r\n환생시 얻을 수 있는 저스티스코인 #e:#n #r1#e~#n5개 랜덤#k\r\n\r\n환생을 하시면 스탯포인트가 270 감소합니다.\r\n환생 하시려면 #b'환생'#k을 입력해주세요.");
	}


                        else if (status == 1) {
			if (cm.getText().equals("환생") && cm.getPlayer().getLevel() >= 200 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(140);
			if (cm.getReborns() == 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[각성공지] : ["+ cm.getPlayer().getName()+"] 님께서 각성하셨습니다!:"));
			cm.gainItem(3700004,1);
			}else if(cm.getReborns() != 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[환생공지] : ["+ cm.getPlayer().getName()+"] 님께서 환생하셨습니다! [환생포인트 : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")/(코인+"+givecoin+")]"));
			}
			cm.getPlayer().addFame(givefame);
			cm.gainItem(4310034,givecoin);
			cm.getPlayer().gainAp(-270);
			cm.fakeRelog();
			cm.getPlayer().saveToDB(false, false);
			cm.getPlayer().dropMessage(5, "환생과 함께 자동저장이 완료되었습니다.");
			cm.updateChar();
			cm.doReborn();
			cm.dispose();


		} else {
		var text = cm.getText();
		cm.sendOk("입력된 문자 : #e#d"+text+"#k#n\r\n\r\n실패했습니다. #b'환생'#k 이라고 제대로 입력했는지 확인해주세요.\r\n또는 #b인벤토리#k나 #b레벨#k이 부족하지 않은지 확인해주세요.\r\n\r\n");
		cm.dispose();

			
		}
    }
	
}

