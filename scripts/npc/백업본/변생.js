/*

������ : on1128@naver.com

*/
importPackage(java.lang);
importPackage(Packages.launch.world);
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
	chat += "\r\n#k#n���� ȯ������Ʈ #e:#n #r"+cm.getPlayer().getFame()+"#k������ ���� ���� #e:#n #r250#k\r\n������ �Ұ�� ���� 10�� �ʺ��ڷ� ���ư��� 999�ǽ����� �־����ϴ�. ������ ���Ŀ� ĳ�ü��� ���� �����ϱ⸦ ���� ������ �Ͻø� �˴ϴ�.\r\n";

                    if (cm.getPlayer().getLevel() >= 250 && cm.canHold(4310034) && cm.getPlayer().getFame() >= 10000) {
                        chat += "\r\n#L1#�����ϱ�!";
			cm.sendSimple(chat);

	}
		else {
		chat += "\r\n\r\n#rȯ���� 10000�̳Ѿ�ߵ˴ϴ�.#k\r\n";
		cm.sendOk(chat);
		cm.dispose();

}


	} if (selection == 1) {
cm.getPlayer().setJob(0);
cm.getPlayer().setLevel(110);
cm.getPlayer().addFame(-8000);
cm.getPlayer().gainAp(999);
cm.warp(100000000, 0);
WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, ""+cm.getPlayer().getName()+"�Բ��� ������ �ϼ˽��ϴ�."+cm.getPlayer().getName()+"���� ȯ������Ʈ��"+cm.getPlayer().getFame()+"���Դϴ�. "));
cm.fakeRelog();
cm.updateChar();
cm.dispose();
    }
	
}