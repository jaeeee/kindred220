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
 	cm.sendGetText("#e<ȯ�� ���� �ȳ�>#n\r\nȯ���� �Ͻø� #b������ 50���� �ٲ�#k��, #b��罺���� 4�� �ٲ�#k�ϴ�. �׸��� #b���� ȯ��Ƚ��x100 ��ŭ ��������Ʈ�� ��ȯ#k�˴ϴ�.\r\n#r������ 200�̻��̸� ������ 2�� ȯ������Ʈ�� �� ���� �� �ֽ��ϴ�.#k\r\n\r\n#k#n���� ȯ������Ʈ #e:#n #r"+cm.getPlayer().getFame()+"#k��ȯ�� ���� ���� #e:#n #r200#k\r\nȯ���� ���� �� �ִ� ȯ������Ʈ #e:#n #r50#e~#n150 ����#b(+"+bonus+")#k#k\r\nȯ���� ���� �� �ִ� ����Ƽ������ #e:#n #r1#e~#n5�� ����#k\r\n\r\n#Cgray#ȯ�� �Ͻ÷��� #b'ȯ��'#k�� �Է����ּ���.");
	}


                        else if (status == 1) {
			if (cm.getText().equals("ȯ��") && cm.getPlayer().getLevel() >= 200 && cm.canHold(4310034)) {
			cm.getPlayer().setLevel(50);
			if (cm.getReborns() == 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[��������] : ["+ cm.getPlayer().getName()+"] �Բ��� �����ϼ̽��ϴ�!:"));
			cm.gainItem(3700004,1);
			}else if(cm.getReborns() != 29){
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[ȯ������] : ["+ cm.getPlayer().getName()+"] �Բ��� ȯ���ϼ̽��ϴ�! [ȯ������Ʈ : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame+bonus)+"(+"+givefame+")(+"+bonus+")/(����+"+givecoin+")]"));
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
			cm.getPlayer().dropMessage(5, "ȯ���� �Բ� �ڵ������� �Ϸ�Ǿ����ϴ�.");
			cm.updateChar();
			cm.doReborn();
			cm.getPlayer().send(MainPacketCreator.sendHint("���� ȯ������Ʈ : "+cm.getPlayer().getFame(),200,20))
			cm.dispose();


		} else {
		var text = cm.getText();
		cm.sendOk("�Էµ� ���� : #e#d"+text+"#k#n\r\n\r\n�����߽��ϴ�. #b'ȯ��'#k �̶�� ����� �Է��ߴ��� Ȯ�����ּ���.\r\n�Ǵ� #b�κ��丮#k�� #b����#k�� �������� ������ Ȯ�����ּ���.\r\n\r\n");
		cm.dispose();	
	}
    }
}