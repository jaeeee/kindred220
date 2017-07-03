importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);



var status = -1;
var givefame = Math.floor(Math.random()*150+50);
var givecoin = Math.floor(Math.random()*5+1);
var bonus = 0;

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

	if (cm.getPlayer().getLevel()>200){
		bonus = (cm.getPlayer().getLevel()-200)*2
	}else{
		bonus = 0;
	}
 	cm.sendGetText("#e<환생 개편 안내>#n\r\n환생을 하시면 #b레벨이 50으로 바뀌#k고, #b모든스텟이 4로 바뀝#k니다. 그리고 #b현재 환생횟수x100 만큼 스탯포인트로 전환#k됩니다.\r\n#r레벨이 200이상이면 레벨당 2의 환생포인트를 더 받을 수 있습니다.#k\r\n\r\n#k#n현재 환생포인트 #e:#n #r"+cm.getPlayer().getFame()+"#k　환생 가능 레벨 #e:#n #r200#k\r\n환생시 얻을 수 있는 환생포인트 #e:#n #r50#e~#n150 랜덤#b(+"+bonus+")#k#k\r\n환생시 얻을 수 있는 저스티스코인 #e:#n #r1#e~#n5개 랜덤#k\r\n\r\n#Cgray#환생 하시려면 #b'환생'#k을 입력해주세요.");
	}


                        else if (status == 1) {
			if (cm.getText().equals("환생") && cm.getPlayer().getLevel() >= 200 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(50);
			if (cm.getReborns() == 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[각성공지] : ["+ cm.getPlayer().getName()+"] 님께서 각성하셨습니다!:"));
			cm.gainItem(3700004,1);
			}else if(cm.getReborns() != 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[환생공지] : ["+ cm.getPlayer().getName()+"] 님께서 환생하셨습니다! [환생포인트 : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame+bonus)+"(+"+givefame+")(+"+bonus+")/(코인+"+givecoin+")]"));
			}
			cm.getPlayer().addFame(givefame);
			cm.getPlayer().addFame(bonus);
			cm.gainItem(4310034,givecoin);
			cm.getPlayer().getStat().setStr(4);
			cm.getPlayer().getStat().setInt(4);
			cm.getPlayer().getStat().setLuk(4);
			cm.getPlayer().getStat().setDex(4);
			if(cm.getPlayer().getReborns() <= 300){
			cm.setAp((cm.getPlayer().getReborns()*100)+200);
			}else{
			cm.setAp(30000);
			//cm.gainItem(2431033, cm.getPlayer().getReborns()-300);
			}
			cm.fakeRelog();
			cm.getPlayer().saveToDB(false, false);
			cm.getPlayer().dropMessage(5, "환생과 함께 자동저장이 완료되었습니다.");
			cm.updateChar();
			cm.doReborn();
			cm.getPlayer().send(MainPacketCreator.sendHint("현재 환생포인트 : "+cm.getPlayer().getFame(),200,20))
			cm.dispose();


		} else {
		var text = cm.getText();
		cm.sendOk("입력된 문자 : #e#d"+text+"#k#n\r\n\r\n실패했습니다. #b'환생'#k 이라고 제대로 입력했는지 확인해주세요.\r\n또는 #b인벤토리#k나 #b레벨#k이 부족하지 않은지 확인해주세요.\r\n\r\n");
		cm.dispose();	
	}
    }
}