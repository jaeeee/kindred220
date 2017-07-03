importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8920002; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 200; //필요한 아이템 갯수
var map = 105200710; //맵코드
var bn = "카오스블러디 퀸"; //보스이름
var back = 10000; //돌아갈 맵 코드
var x = -197; //소환x좌표 
var y = 135; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"개#k로 "+bn+"을 소환하겠습니까? \r\n\r\n#L1##r#i"+item+"# #r"+count+"개#k로 "+bn+" 소환\r\n#l#L2#마을로 가기\r\n		(아이템 드랍은 되지않습니다.)#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"을 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {    
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "　　　　　　　::::::::["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"을 소환하셨습니다.::::::::")); // 게임 채팅서버알림 메세지 
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0){
    	    		cm.killAllMob();
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[보스] : ["+ cm.getPlayer().getName()+"] 님께서 벨룸을 소환하셧습니다.]")); // 게임 채팅서버알림 메세지 
			cm.dispose();
			}else {
			cm.sendOk("몹이 한마리도 소환되어 있지 않습니다.");
			}
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


