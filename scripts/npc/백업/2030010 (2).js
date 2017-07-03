importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(java.util);
importPackage(Packages.client.stats);


//var boss = 8860000; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 100; //필요한 아이템 갯수
var map = 280030100; //맵코드
var bn = "자쿰"; //보스이름
var back = 100000000; //돌아갈 맵 코드
//var x = 7; //소환x좌표 
//var y = -160; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("자네, 자쿰을 만나러온건가?\r\n#L1##b자쿰을 소환한다.\r\n\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("자쿰을 소환하려면 단풍잎 100개가 필요하다네.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(4, "["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"을 소환하셨습니다!")); // 게임 채팅서버알림 메세지 
			cm.gainItem(item,-count);
 			cm.spawnMob(8800000,-20,-216);
 			cm.spawnMob(8800003,-20,-216);
 			cm.spawnMob(8800004,-20,-216);
 			cm.spawnMob(8800005,-20,-216);
 			cm.spawnMob(8800006,-20,-216);
 			cm.spawnMob(8800007,-20,-216);
 			cm.spawnMob(8800008,-20,-216);
 			cm.spawnMob(8800009,-20,-216);
 			cm.spawnMob(8800010,-20,-216);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0){
    	    		cm.killAllMob();
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"을 처치하셨습니다!"));
			cm.dispose();
			}else {
			cm.sendOk("몹이 한마리도 소환되어 있지 않아.");
			}
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


