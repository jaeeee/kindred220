
/*

������ : ljw5992@naver.com

*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);



var status = -1;
var givefame = Math.floor(Math.random()*1) + 49;


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

			
 	cm.sendGetText("\r\n#k#n���� ȯ������Ʈ #e:#n #r"+cm.getPlayer().getFame()+"#k��ȯ�� ���� ���� #e:#n #r200#k\r\nȯ���� ���� �� �ִ� ȯ������Ʈ(AP = ����) #e:#n #r50 #k\r\n#k\r\n\r\nȯ�� �Ͻ÷��� #b'ȯ��'#k�� �Է����ּ���.");
	}


                        else if (status == 1) {
			if (cm.getText().equals("ȯ��") && cm.getPlayer().getLevel() >= 200 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(170);
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[ȯ������] :: ["+ cm.getPlayer().getName()+"] �Բ��� ȯ���ϼ̽��ϴ�! [" + cm.getPlayer().getName()+ "] ���� ȯ������Ʈ : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")"));
			cm.getPlayer().addFame(givefame);
			cm.getPlayer().gainAp(givefame);
			cm.getPlayer().setReborns(cm.getPlayer().getReborns() + 1);
			//cm.resetStats(4,4,4,4);
			cm.fakeRelog();
			cm.getPlayer().saveToDB(false, false);
			cm.getPlayer().dropMessage(5, "ȯ���� �Բ� �ڵ������� �Ϸ�Ǿ����ϴ�.");
			cm.updateChar();
			cm.dispose();


		} else {

		var text = cm.getText();
		cm.sendOk("�Էµ� ���� : #e#d"+text+"#k#n\r\n\r\n�����߽��ϴ�. #b'��'#k ��� ����� �Է��ߴ��� Ȯ�����ּ���.\r\n�Ǵ� #b�κ��丮#k�� #b����#k�� �������� ������ Ȯ�����ּ���.\r\n\r\n");
		cm.dispose();

			
		}
    }
}
	