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
	chat += "\r\n#k#n���� ȯ������Ʈ #e:#n #r"+cm.getPlayer().getFame()+"#k��ȯ�� ���� ���� #e:#n #r210#k\r\nȯ���� ���� �� �ִ� ȯ������Ʈ #e: #r900#k\r\nȯ���� ���� �� �ִ� ��������Ʈ #e: #r700#k\r\n";
                    if (cm.getPlayer().getLevel() >= 210 && cm.getPlayer().getJob() != 10112) {
                    if (cm.getPlayer().getFame() >= 70000) {
                        chat += "\r\n#L1#ȯ���ϰڽ��ϴ�";
			cm.sendSimple(chat);
	}
}
		else {
		chat += "\r\n#r���� 210�� ���� ���߽��ϴ�.#k\r\n#b(�Ǵ� ���δ� ȯ���Ұ��մϴ�.)#k";
		cm.sendOk(chat);
		cm.dispose();

}


	} if (selection == 1) {

cm.getPlayer().setLevel(170);
cm.getPlayer().addFame(900);
cm.getPlayer().gainAp(700);
cm.fakeRelog();
cm.updateChar();
cm.dispose();

    }
	
}