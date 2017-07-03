


/*

	히나 온라인 소스 팩의 스크립트 입니다.

        제작 : 티썬

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 


*/

importPackage(Packages.client.items);
importPackage(Packages.client.inventory);
importPackage(java.lang);
importPackage(Packages.tools.RandomStream);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
            var inner = Randomizer.rand(1);
            cm.getPlayer().addInnerExp(inner);
            cm.getPlayer().message("명예치가 "+inner+"만큼 상승 하였습니다.");
            cm.gainItem(2431174, -1);
 cm.dispose();
    }
}


