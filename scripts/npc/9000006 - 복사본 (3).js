/*

������ : ljw5992@naver.com

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

			
 	cm.sendGetText("\r\n#k#n���� ȯ������Ʈ #e:#n #r"+cm.getPlayer().getFame()+"#k��ȯ�� ���� ���� #e:#n #r200#k\r\nȯ���� ���� �� �ִ� ȯ������Ʈ #e:#n #r1#e~#n200 ����#k\r\nȯ���� ���� �� �ִ� ����Ƽ������ #e:#n #r1#e~#n5�� ����#k\r\n\r\nȯ���� �Ͻø� ��������Ʈ�� 270 �����մϴ�.\r\nȯ�� �Ͻ÷��� #b'ȯ��'#k�� �Է����ּ���.");
	}


                        else if (status == 1) {
			if (cm.getText().equals("ȯ��") && cm.getPlayer().getLevel() >= 200 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(140);
			if (cm.getReborns() == 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[��������] : ["+ cm.getPlayer().getName()+"] �Բ��� �����ϼ̽��ϴ�!:"));
			cm.gainItem(3700004,1);
			}else if(cm.getReborns() != 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[ȯ������] : ["+ cm.getPlayer().getName()+"] �Բ��� ȯ���ϼ̽��ϴ�! [ȯ������Ʈ : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")/(����+"+givecoin+")]"));
			}
			cm.getPlayer().addFame(givefame);
			cm.gainItem(4310034,givecoin);
			cm.getPlayer().gainAp(-270);
			cm.fakeRelog();
			cm.getPlayer().saveToDB(false, false);
			cm.getPlayer().dropMessage(5, "ȯ���� �Բ� �ڵ������� �Ϸ�Ǿ����ϴ�.");
			cm.updateChar();
			cm.doReborn();
			cm.dispose();


		} else {
		var text = cm.getText();
		cm.sendOk("�Էµ� ���� : #e#d"+text+"#k#n\r\n\r\n�����߽��ϴ�. #b'ȯ��'#k �̶�� ����� �Է��ߴ��� Ȯ�����ּ���.\r\n�Ǵ� #b�κ��丮#k�� #b����#k�� �������� ������ Ȯ�����ּ���.\r\n\r\n");
		cm.dispose();

			
		}
    }
	
}

