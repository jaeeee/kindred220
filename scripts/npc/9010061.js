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

	cm.sendSimple("#fUI/UIWindow2/aswan/rank/crown# #e#d보스 레이드\r\n#L1##i3994115##L2##i3994116##L3##i3994117##L4##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/rare##L21##e#b황금 단풍잎 흭득 가능#n#k\r\n#L5##i3994115##L6##i3994116##L7##i3994117##L8##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/epic##L22##e#d황금 단풍잎 흭득 가능#n#k\r\n#L9##i3994115##L10##i3994116##L11##i3994117##L12##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/unique##L23##e#r황금 단풍잎 흭득 가능#n#k\r\n#L13##i3994115##L14##i3994116##L15##i3994117##L16##i3994118#\r\n#fUI/UIWindow2/AdditionalOptionTooltip/legendary##L23##e#g황금 단풍잎 흭득 가능");
		
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
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [EASY] 보스 레이드 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[EASY]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[EASY] 난이도 보상 : 마리당 그림자 상단 코인 1개"); 
			cm.spawnMob(8860000,0,0);
			cm.spawnMob(8870100,0,0);
			cm.spawnMob(8840007,0,0);
			cm.dispose();
                }

		} else if(selection == 5) {
                        cm.sendOk("#e#r모든 몬스터는 해당 맵에 동시에 소환 됩니다.#n\r\n#e#g[EASY]#n 하드힐라 노말아카이럼 노말반레온\r\n#e#d[NORMAL]#n 시그너스 하드매그너스 \r\n#e#b[HARD]#n 카오스블러디퀸 카오스삐에로 \r\n#e#r[HELL]#n 벨룸 카오스반반");

		} else if(selection == 2) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [NORMAL] 보스 레이드 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[NORMAL]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[NORMAL] 난이도 보상 : 마리당 매그너스 코인 1개"); 
			cm.spawnMob(8850011,0,0);
			cm.spawnMob(8880010,0,0);
			cm.dispose();


	        }
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [HARD] 보스 레이드 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[HARD]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[HARD] 난이도 보상 : 마리당 퀀커러스 코인 1개"); 
			cm.spawnMob(8920000,0,0);
			cm.spawnMob(8900000,0,0);
			cm.dispose();


	        }
		} else if(selection == 4) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("현재 맵에 보스가 남아있습니다.");
			cm.dispose();
		} else {
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5," "+ cm.getPlayer().getName()+" 님의 파티가 "+(cm.getClient().getChannel()+1) +" 채널에서 [HELL] 보스 레이드 시작하셨습니다.")); // 게임 채팅서버알림 메세지   
                        cm.playerMessage(5, "[HELL]모든 보스몬스터를 잡아주시기 바랍니다.!");
                        cm.playerMessage(5, "[HELL] 난이도 보상 : 마리당 엠퍼러스 코인 1개"); 
			cm.spawnMob(8910000,0,0);
			cm.spawnMob(8930100,0,0);
			cm.dispose();


	        }


		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


