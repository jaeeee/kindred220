importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8880000; //보스 코드
var item = 4033113; //
var count = 210; // 필요한 아이템 갯수2
var map = 401060100; //맵코드
var bn = "매그너스"; //보스이름
var back = 100000000; //돌아갈 맵 코드
var x = 2431; //소환x좌표 
var y = -1300; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {
	var magnus = "#e폭군의 왕좌#n에 오신 것을 환영합니다. 저는 #e매그너스#n입니다.\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"##k #e"+count+"#n개로 #e"+bn+"#n를 소환한다.\r\n"
	magnus += "#L2##i2030000# 헤네시스로 돌아간다.\r\n"
	magnus += "#L3##e#r필드 위의 모든 몬스터를 제거한다."
	cm.sendSimple(magnus)

		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("필드 위에 몬스터가 남아있습니다. 몬스터가 보이면 잡아주시고, 보이지 않는다면 저를 통해 몬스터를 없애주세요.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("#e"+bn+"#n을(를) 소환하려면 #e#i"+item+"# #z"+item+"# "+count+"개#n가 필요합니다.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "보스소환알리미 : "+cm.getPlayer().getName()+"님이 "+(cm.getClient().getChannel()+1)+"채널에서 "+bn+"를 소환했습니다.")); // 게임 채팅서버알림 메세지
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();
		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();
		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


