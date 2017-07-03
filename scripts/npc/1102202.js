importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
var givefame = Math.floor(Math.random()*200+1);
var givecoin = Math.floor(Math.random()*10+1);
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
		bonus = (cm.getPlayer().getLevel()-200)*5
	}else{
		bonus = 0;
	}
 	cm.sendGetText("Sign in reincarnation #bLevel changed to 30#kAnd, #bAll stats are replaced by four#kYou. And#b#k It will be switched to the current number of stat points as the reincarnate x100.\r\n#rLevel 5 of reincarnation can get more points per level is more than 200.#k\r\n\r\n#k#nCurrent reincarnation point #e:#n #r"+cm.getPlayer().getFame()+"#k¢®¢®Reborn possible level #e:#n #r200#k\r\nWhen can I get reincarnated reincarnation point #e:#n #r1#e~#n200 random#b(+"+bonus+")#k#k\r\nJustice coin that can be obtained upon reincarnation #e:#n #r1#e~#n10More random#k\r\n\r\n#Cgray#To reincarnation #b'Rebirth'#k#Cgray#Please enter a.#k\r\n\r\nIf reincarnated 35 times, you get the awakening one's' title");
	}


                        else if (status == 1) {
			if (cm.getText().equals("Rebirth") && cm.getPlayer().getLevel() >= 200 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(1);
			if (cm.getReborns() == 34){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[Notice awakening] : ["+ cm.getPlayer().getName()+"] He manifested God standing!:"));
			cm.getPlayer().setHStatus(5);
			}else if(cm.getReborns() != 34){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[Reincarnation News] : ["+ cm.getPlayer().getName()+"] Dear standing reincarnation ago! [Reincarnation point : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame+bonus)+"(+"+givefame+")(+"+bonus+")/(Coin+"+givecoin+")]"));
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
			cm.gainItem(2431033, cm.getPlayer().getReborns()-300);
			}
			cm.fakeRelog();
			cm.getPlayer().saveToDB(false, false);
			cm.getPlayer().dropMessage(5, "This automatically saved with the reincarnation has been completed.");
			cm.updateChar();
			cm.doReborn();
			cm.getPlayer().send(MainPacketCreator.sendHint("Current reincarnation point : "+cm.getPlayer().getFame(),200,20))
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(100000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
                                      cm.gainExp(1000000);
			cm.dispose();


		} else {
		var text = cm.getText();
		cm.sendOk("Character input : #e#d"+text+"#k#n\r\n\r\nFailed. #b'Rebirth'#k Please check that you have entered it correctly.\r\nor #bInventory#kI #blevel#kPlease make sure that is not enough.\r\n\r\n");
		cm.dispose();	
	}
    }
}