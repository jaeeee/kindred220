importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8810026; //보스 코드
var chaso = 8810130; // 카오스 보스 코드
var item = 4033113; //필요한 아이템 코드
var count = 20; //필요한 아이템 갯수
var Ccount = 35; //필요한 카오스 소환 아이템 갯수
var map = 240060200; //맵코드
var bn = "혼테일"; //보스이름
var Cbn = "카오스 혼테일"; // 카오스 보스 이름
var back = 100000000; //돌아갈 맵 코드
var x = 140; //소환x좌표 
var y = 260; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {
	var magnus = "#e혼테일의 동굴#n에 오신 것을 환영합니다. 저는 #e나무뿌리 수정#n입니다.\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"# #e"+count+"개#k#n로 #e"+bn+"#n 소환한다.\r\n"
	magnus += "#L5##i"+item+"# #r#z"+item+"# #e"+Ccount+"개#k#n로 #e"+Cbn+"#n 소환한다.\r\n"
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
			cm.gainItem(item,-count);
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "보스소환알리미 : "+cm.getPlayer().getName()+"님이 "+(cm.getClient().getChannel()+1)+"채널에서 "+bn+"을 소환했습니다.")); // 게임 채팅서버알림 메세지 
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}


		} else if(selection == 5) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("필드 위에 몬스터가 남아있습니다. 몬스터가 보이면 잡아주시고, 보이지 않는다면 저를 통해 몬스터를 없애주세요.");

			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("#e"+bn+"#n을(를) 소환하려면 #e#i"+item+"# #z"+item+"# "+count+"개#n가 필요합니다.");
			cm.dispose();
		} else {    
			cm.gainItem(item,-count);
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "보스소환알리미 : "+cm.getPlayer().getName()+"님이 "+(cm.getClient().getChannel()+1)+"채널에서 "+Cbn+"을 소환했습니다.")); // 게임 채팅서버알림 메세지 
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
			cm.sendOk("필드 위에 몬스터가 없습니다. 다시 확인해주세요.");
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


