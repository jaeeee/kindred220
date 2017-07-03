importPackage(Packages.packet.creators);

var status = -1;

function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
	cm.dispose();
	} else {
	if (mode == 0) {
	cm.dispose();            
	return;        
	}        
	if (mode == 1)            
	status++;        
	else           
	status--;    

	if (status == 0) {
		if(cm.getMapId() == 252030000) {
		cm.dispose();
		cm.timeMoveMap(252030000, 252030100, 600);
		cm.killAllMob();
		cm.spawnMob(9100025, 873, 513);
		} else {
		cm.sendYesNo("라바나 퇴치를 그만두고 밖으로 나가시겠습니까?");
		}
	} else if (status == 1) {
		cm.warp(252030000, 0);
		cm.dispose();
	}
}
}