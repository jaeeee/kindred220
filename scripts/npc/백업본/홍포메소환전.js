/*

홍보 포인트 메소환전 스크립트
제작 : class_adm@nate.com

*/

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {

	cm.sendYesNo("안녕하세요 #h0#님.#b메소 환전#k을 하시겠습니까?\r\n#b 1 홍보포인트#k당 #r500000#k 메소를 얻으실 수 있습니다.\r\n현재 #h0#님의 홍보포인트는 #r#e"+cm.getPlayer().getHBPT()+" #n#k입니다.\r\n만약 환전을 원하신다면 #b[예]#k버튼을 눌러주시고 \r\n아니라면 #r[아니오]#k버튼을 눌러주세요.");
	}else if (status == 1){
	cm.sendGetText("환전 할 홍보포인트를 적어주세요. \r\n반드시 #r숫자#k만 입력해주시기 바랍니다.");
	}else if (status == 2){
	var text = cm.getText();
	if (cm.getPlayer().getHBPT() >= text){
        cm.sendOk("환전이 완료되었습니다.");
	cm.gainMeso(text*500000);
	cm.getPlayer().gainHBPT(-text);
        cm.dispose();
	}else {
	cm.sendOk("홍보포인트가 부족하거나, 메소가 너무 많습니다.");
	cm.dispose();
	}
}
}
