
/*

������ : ljw5992@naver.com

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

			
 	cm.sendGetText("#e< ȯ�� �ȳ� >#n\r\n\r\nȯ�� ����Ʈ : #r100#k \r\nȯ�� ���� ���� : #r205#k\r\n#bȯ���� �Ͻ÷��� #rȯ��#k#b�� ���ּ���.#k\r\n#rȯ���� �Ͻ� �ڿ��� ������ 150 �� �˴ϴ�. ");
	}


                        else if (status == 1) {
			if (cm.getText().equals("ȯ��") && cm.getPlayer().getLevel() >= 205 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(150);
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(5,"< ȯ�� > "+ cm.getPlayer().getName()+"�Բ��� ȯ���ϼ̽��ϴ�. " + cm.getPlayer().getName()+ " ���� ȯ������Ʈ : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")"));			cm.getPlayer().addFame(givefame);
			cm.getPlayer().gainAp(givefame);
			cm.getPlayer().setReborns(cm.getPlayer().getReborns() + 1);
			//cm.resetStats(4,4,4,4);
			cm.fakeRelog();
			cm.updateChar();
			cm.dispose();


		} else {

		var text = cm.getText();
		cm.sendOk("�Էµ� ���� : #e#d"+text+"#k#n\r\n#b����#k�� �������� ������ Ȯ�����ּ���.\r\n\r\n");
		cm.dispose();

			
		}
    }
}
	