/*

������ : ljw5992@naver.com

*/
importPackage(java.lang);
importPackage(Packages.main.world);
importPackage(Packages.packet.creators);

var status = -1;
var givefame = Math.floor(Math.random()*200);
var givecoin = Math.floor(Math.random()*7);

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

 	var chat = ""
	chat += "\r\n#k#n���� ȯ������Ʈ #e:#n #r"+cm.getPlayer().getFame()+"#k��ȯ�� ���� ���� #e:#n #r200#k\r\nȯ���� ���� �� �ִ� ȯ������Ʈ #e:#n #r1#e~#n200 ����#k\r\nȯ���� ���� �� �ִ� ����Ƽ������ #e:#n #r1#e~#n7�� ����#k\r\n";


                    if (cm.getPlayer().getLevel() >= 140 && cm.canHold(4310034)) {
                        chat += "\r\n#L1#ȯ���Ѵ�.";
			cm.sendSimple(chat);

	}
		else {
		chat += "\r\n\r\n������ �����ϰų� ������â�� ���� �� �ִ�.";
		cm.sendOk(chat);
		cm.dispose();

}


	} if (selection == 1) {
cm.getPlayer().setLevel(140);

WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[ȯ������] :: ["+ cm.getPlayer().getName()+"] �Բ��� ȯ���ϼ̽��ϴ�! [" + cm.getPlayer().getName()+ "] ���� ȯ������Ʈ : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+givefame)+"(+"+givefame+")"));

cm.getPlayer().addFame(givefame);
cm.gainItem(4310034,givecoin);
cm.getPlayer().gainAp(-250);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
    }
	
}