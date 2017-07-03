importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 9300762; //보스 코드수
var map = 322090120; //맵코드
var bn = "괴도 팬텀"; //보스이름
var back = 100000000; //돌아갈 맵 코드
var x = 200; //소환x좌표 
var y = 190; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("1000만메소로 "+bn+"을(를) 소환하겠습니까? \r\n\r\n#L1##r1800만메소로 "+bn+" 소환\r\n#l#L2#마을로 가기#l#k\r\n\r\n#l#L3##b계속죽이라고할때클릭해주세요.<킬올시스템>\r\n		(아이템 드랍은 되지않습니다.)#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 10000) {
			cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
			cm.dispose();
		} else if (cm.getMeso() <= 10000000) {
			cm.sendOk(""+bn+"을 소환하려면 1000만메소가 필요합니다.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "::::::::["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 힐라를 소환하셨습니다.::::::::"));  
			cm.gainMeso(-10000000);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(1000000, 0);
			cm.dispose();
		} else if(selection == 3) {
    	    		cm.killAllMob();
			//WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, ＊＊＊＊["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"를 킬올시켰습니다.<스틸자제>＊＊＊＊"));
			cm.dispose();
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


