importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8880000; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 1000; //필요한 아이템 갯수
var map = 401060200; //맵코드
var bn = "매그너스"; //보스이름
var back = 1000000; //돌아갈 맵 코드
var x = 7; //소환x좌표 
var y = -200; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("(밖으로 나갈 수 없을거같다)");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"를 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"를 소환하셨습니다!")); // 게임 채팅서버알림 메세지 
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


