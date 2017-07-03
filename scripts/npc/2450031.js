importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8900000; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 400; //필요한 아이템 갯수
var map = 105200610; //맵코드
var bn = "카오스 피에르"; //보스이름
var back = 1000000; //돌아갈 맵 코드
var x = -181; //소환x좌표 
var y = -100; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("안녕하세요. #b르티에#k라고합니다. 피에르를 소환하고싶으신건가요? #b(4인 파티 권장)#k\r\n#L1##b카오스 피에르 소환#L2#크로스헌터 마스터의 권한\r\n#L3#죽이라는 메세지가 반복될시 클릭<킬올시스템>");
		
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

		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();

		} else if(selection == 2) {
	        if (cm.haveItem(1142354,1)){
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터 마스터의 권한] "+ cm.getPlayer().getName()+" 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"를 소환하셨습니다!")); // 게임 채팅서버알림 메세지 
	        cm.spawnMob(boss,x,y);
	        cm.dispose();
	        } else {
	        cm.sendOk("안타깝지만 #b크로스헌터 마스터#k가 아니십니다.");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


