importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8860003; //보스 코드
var chaso = 8810130; // 카오스 보스 코드
var item = 3994385; //필요한 아이템 코드
var count = 2500; //필요한 아이템 갯수
var Ccount = 35; //필요한 카오스 소환 아이템 갯수
var map = 240060200; //맵코드
var bn = "어둠에 빠진나"; //보스이름
var back = 401100200; //돌아갈 맵 코드
var x = -200; //소환x좌표 
var y = 260; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {
	var magnus = "#b#e어리석은 모험가여.#n #r검은 마법사#k 한테 도전하기 위하여 이곳으로 온겐가.. #e우선 자네를 테스트 해보겠네#k\r\e#r2분안#k에 #b몬스터#k를 잡고 #r열쇠#k를 구하여 \r\e#r다음 스토리를 진행하시오#k.#n\r\n"
	magnus += "#L1##i"+item+"# #r#z"+item+"# #e"+count+"개#k#n로 #e"+bn+"#n 소환한다.\r\n"
	magnus += "#L2#다음 스토리를 진행한다.#r마을#k은 @광장..\r\n"
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
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "퀘스트진행알리미 : "+cm.getPlayer().getName()+"님이 "+(cm.getClient().getChannel()+1)+"채널에서 "+bn+"을 소환했습니다.")); // 게임 채팅서버알림 메세지 
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
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(8, "퀘스트진행알리미 : "+cm.getPlayer().getName()+"님이 "+(cm.getClient().getChannel()+1)+"채널에서 "+Cbn+"을 소환했습니다.")); // 게임 채팅서버알림 메세지 
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


