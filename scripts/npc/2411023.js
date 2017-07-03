importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);



var status = -1;
var givefame = Math.floor(Math.random()*50+100);
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
		bonus = (cm.getPlayer().getLevel()-200)*10
	}else{
		bonus = 0;
	}
 	cm.sendYesNo("#e#b<환생 개편 안내>#n#k\r\n\r\n#e#b환생#n#k을 하시면 #e#b레벨#n#k이 #e#b10#n#k으로 바뀌고, #e#b모든 스텟이 #e#r4#n#k로 바뀝#k니다. #e#b레벨 200#n#k부터 #e#b환생#n#k이 가능합니다.\r\n\r\n정말 #e#b환생#n#k하시겠습니까?\r\n\r\n(#e#r은월#n#k은 #e#r오류#n#k로 인하여 #e#b레벨 20#n#k으로 #e#b환생#n#k됩니다.)\r\n");
	}
                        else if (status == 1) {
			if (cm.getPlayer().getLevel() >= 200) {
			var fame = cm.getPlayer().getFame();
			cm.getPlayer().setLevel(1);
			cm.gainExp(15);
			cm.gainExp(34);
			cm.gainExp(57);
			cm.gainExp(92);
			cm.gainExp(135);
			cm.gainExp(372);
			cm.gainExp(560);
			cm.gainExp(840);
			cm.gainExp(1242);
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[노블온라인] : ["+ cm.getPlayer().getName()+"] 님께서 환생하셨습니다! [환생포인트 : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame+bonus)+" (+"+givefame+") (+"+bonus+")"));
			cm.getPlayer().addFame(givefame+bonus);
			cm.getPlayer().getStat().setStr(4);
			cm.getPlayer().getStat().setInt(4);
			cm.getPlayer().getStat().setLuk(4);
			cm.getPlayer().getStat().setDex(4);
			cm.setAp(fame);
			if (cm.getPlayer().getJob() == 2005 || cm.getPlayer().getJob() == 2500 || cm.getPlayer().getJob() == 2510 || cm.getPlayer().getJob() == 2511 || cm.getPlayer().getJob == 2512) {
			cm.gainExp(1242);
			cm.gainExp(1242);
			cm.gainExp(1242);
			cm.gainExp(1242);
			cm.gainExp(1242);
			cm.gainExp(1490);
			cm.gainExp(1788);
			cm.gainExp(2145);
			cm.gainExp(2574);
			cm.gainExp(3088);
			} 			
			cm.fakeRelog();
			cm.getPlayer().saveToDB(false, false);
			cm.getPlayer().dropMessage(5, "환생과 함께 자동저장이 완료되었습니다.");
			cm.updateChar();
			cm.getPlayer().send(MainPacketCreator.sendHint("현재 환생포인트 : "+cm.getPlayer().getFame(),200,20))
			cm.dispose();


		} else {
		cm.sendOk("#b레벨#k이 부족하지 않은지 확인해주세요.\r\n\r\n");
		cm.dispose();	
	}
    }
}