/* 이 주석은 지우지 마셨으면 합니다.

출처 : 자유인 (timeisruunin) by Miracle CMNT

*/

importPackage(Packages.client.items);

var status = -1;

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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendGetText("#b#i5510000# #z5510000##k의 갯수를 입력해주세요.\r\n#Cgray#(1개당 300,000 메소)");
	} else if (status == 1) {
	var text = cm.getText();
	cm.sendYesNo("정말 #b"+text+"#k개를 구입하시겠습니까? 가격은 #b#e"+text*300000+" #n#k메소입니다.");
	
} else if (status == 2) {
	var leftslot = cm.getPlayer().getInventory(DbgInventoryType.CASH).getNumFreeSlot();
	var text = cm.getText();
	if (leftslot < text*1/100) {
	cm.sendOk("캐시칸의 공간이 부족합니다. 캐시칸의 공간을 비우시거나 현재 비어있는 공간의 갯수만큼 입력해주시기 바랍니다.\r\n#Cgray#(캐시창 한 칸에는 #z5510000# 100개가 들어갈 수 있으며 캐시창은 총 60개의 공간이 존재합니다.)");
	cm.dispose();


} else if (cm.getMeso() < text*300000) {

	var meso1 = cm.getMeso();
	var meso2 = text*300000;
	var money = meso2-meso1;
	cm.sendOk("메소가 부족합니다. 자세한 사항은 아래를 확인해주세요.#e\r\n\r\n#Cgray#아이템의 가격 : #r"+meso2+"#k 메소#b (갯수 : "+text+"개)#k\r\n#Cgray#보유중인 메소 : #r"+meso1+"#k 메소\r\n#Cgray#부족한 메소 : #r"+money+"#k 메소");		
cm.dispose();

	
} else {
	var meso1 = cm.getMeso();
	var meso2 = text*300000;
	var money2 = meso1-meso2;
cm.gainItem(5510000, text);
	cm.gainMeso(-meso2);
	cm.sendOk("구입에 성공하였습니다. 다음에 또 이용해주세요.\r\n\r\n#r#e[구매 품목] #b#z5510000##k ×"+text+"#n\r\n#r#e[구입 가격] #b"+meso2+"#k 메소\r\n#r[남은 메소]#k #b"+money2+"#k 메소");
	cm.dispose();
}
}
}