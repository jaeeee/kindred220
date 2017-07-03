importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(java.awt);
importPackage(Packages.client);
importPackage(Packages.server.life);
importPackage(Packages.main.world);
importPackage(Packages.tools.RandomStream);

var boss = 9300600; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 200; //필요한 아이템 갯수
var map = 940020000; //맵코드
var bn = "펜타곤 침공"; //보스이름
var back = 1000000; //돌아갈 맵 코드
var x = 2553; //소환x좌표 
var y = 29; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#e#r보스아레나#n#b를 진행 하시기전 #n#e#r설명서#n#b를 읽어주세요.\r\n#L5##e#r설명서\r\n#L1##fUI/UIWindow2/aswanStart/BtEasy/normal/0#\r\n#L2##fUI/UIWindow2/aswanStart/BtNormal/normal/0#\r\n#L3##fUI/UIWindow2/aswanStart/BtHard/normal/0#\r\n#L4##fUI/UIWindow2/aswanStart/BtHell/normal/0#");
		
		} else if(status == 1) {
                if (cm.getPlayer().getParty() == null) {
					cm.sendOk("파티 갑입후 오세요...");
					cm.dispose();
					return;
				}
				if (!cm.allMembersHere()) {
					cm.sendOk("혼자서는 무리 아닐까요..?");
					cm.dispose();
					return;
				}
				if (!cm.isLeader()) {
					cm.sendOk("다른 유저와 같이 해보시는게 어떤가요?");
					cm.dispose();
					return;
				}
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [EASY] 보스 아레나를 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[EASY]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[EASY] 난이도 보상 : 마리당 그림자 상단 코인 1개"); 
			cm.spawnMob(8950001,3800,45);
			cm.spawnMob(8950002,3800,45);
			cm.dispose();
                }

		} else if(selection == 5) {
                        cm.sendOk("#e#r모든 몬스터는 해당 맵에 동시에 소환 됩니다.#n\r\n#e#g[EASY]#n 하드힐라 노말아카이럼 노말반레온\r\n#e#d[NORMAL]#n 시그너스 하드매그너스 \r\n#e#b[HARD]#n 카오스블러디퀸 카오스삐에로 \r\n#e#r[HELL]#n 벨룸 카오스반반");

		} else if(selection == 2) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [NORMAL] 보스 아레나를 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[NORMAL]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[NORMAL] 난이도 보상 : 마리당 매그너스 코인 1개"); 
			cm.spawnMob(8850011,3800,45);
			cm.spawnMob(8880010,3800,45);
			cm.dispose();


	        }
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [HARD] 보스 아레나를 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[HARD]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[HARD] 난이도 보상 : 마리당 퀀커러스 코인 1개"); 
			cm.spawnMob(8920000,3800,45);
			cm.spawnMob(8900000,3800,45);
			cm.dispose();


	        }
		} else if(selection == 4) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [HELL] 보스 아레나를 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[HELL]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[HELL] 난이도 보상 : 마리당 엠퍼러스 코인 1개"); 
			cm.spawnMob(8910000,3800,45);
			cm.spawnMob(8930100,3800,45);
			cm.dispose();


	        }


		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


