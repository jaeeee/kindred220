importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(Packages.server.life); 


var boss = 8840000; //보스 코드
var item = 4033113; //필요한 아이템 코드
var count = 80; //필요한 아이템 갯수
var map = 211070100; //맵코드
var bn = "반레온"; //보스이름
var back = 100000000; //돌아갈 맵 코드
//var x = -228; //소환x좌표 
//var y = -160; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	var magnus = "#e반레온#n을 잡으시겠습니까?. 저는 #e소환NPC#n입니다.\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"# #e"+count+"개#k#n로 #e"+bn+"#n을 소환한다.\r\n"
	magnus += "#L2##i2030000# 헤네시스로 돌아간다.\r\n"
	magnus += "#L3##e#r필드 위의 모든 몬스터를 제거한다."
	cm.sendSimple(magnus)
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOK("필드 위에 몬스터가 남아있습니다. 몬스터가 보이면 잡아주시고, 보이지 않는다면 저를 통해 몬스터를 없애주세요.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk("#e"+bn+"#n을(를) 소환하려면 #e#i"+item+"# #z"+item+"# "+count+"개#n가 필요합니다.");
			cm.dispose();
		} else {   
			cm.gainItem(item,-count); 
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "보스소환알리미 : "+cm.getPlayer().getName()+"님이 "+(cm.getClient().getChannel()+1)+"채널에서 "+bn+"를 소환했습니다.")); // 게임 채팅서버알림 메세지
/*
		var over = new OverrideMonsterStats(); 
		var mob = DbgLifeProvider.getMonster(boss); 
		over.setOHp(6300000000); 
		mob.setOverrideStats(over); 
		cm.getPlayer().getMap().spawnMonsterOnGroundBelow(mob, cm.getPlayer().getPosition()); 
*/
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


