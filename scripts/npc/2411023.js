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
 	cm.sendYesNo("#e#b<ȯ�� ���� �ȳ�>#n#k\r\n\r\n#e#bȯ��#n#k�� �Ͻø� #e#b����#n#k�� #e#b10#n#k���� �ٲ��, #e#b��� ������ #e#r4#n#k�� �ٲ�#k�ϴ�. #e#b���� 200#n#k���� #e#bȯ��#n#k�� �����մϴ�.\r\n\r\n���� #e#bȯ��#n#k�Ͻðڽ��ϱ�?\r\n\r\n(#e#r����#n#k�� #e#r����#n#k�� ���Ͽ� #e#b���� 20#n#k���� #e#bȯ��#n#k�˴ϴ�.)\r\n");
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
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[���¶���] : ["+ cm.getPlayer().getName()+"] �Բ��� ȯ���ϼ̽��ϴ�! [ȯ������Ʈ : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame+bonus)+" (+"+givefame+") (+"+bonus+")"));
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
			cm.getPlayer().dropMessage(5, "ȯ���� �Բ� �ڵ������� �Ϸ�Ǿ����ϴ�.");
			cm.updateChar();
			cm.getPlayer().send(MainPacketCreator.sendHint("���� ȯ������Ʈ : "+cm.getPlayer().getFame(),200,20))
			cm.dispose();


		} else {
		cm.sendOk("#b����#k�� �������� ������ Ȯ�����ּ���.\r\n\r\n");
		cm.dispose();	
	}
    }
}