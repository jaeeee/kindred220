importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(java.awt);
importPackage(Packages.client);
importPackage(Packages.server.life);
importPackage(Packages.main.world);
importPackage(Packages.tools.RandomStream);

var boss = 8920100; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 200; //필요한 아이템 갯수
var map = 940020000; //맵코드
var bn = "펜타곤 침공"; //보스이름
var back = 1000000; //돌아갈 맵 코드
var x = 2553; //소환x좌표 
var y = 29; //소환y좌표

var status = -1;

function timelimit(time, term) {
	var nowtime = new Date;
	var nowhour = nowtime.getHours();

	if((nowhour < time) || (nowhour > time + term)) {
		return 0;
	} else {
		return 1;
	}
}

        function start() { status = -1; action (1, 0, 0);}


function action(mode, type, selection) {
	if (mode == 0) { cm.dispose(); return; }
	if (mode == 1) { status++; }
	if (status == 0) {

	cm.sendSimple("가장 먼저 꼭대기에 도착하는 유저에게 매일 이벤트 후원 마일리지가 지급됩니다! 꼭대기에 올라간 뒤 카페 스크린샷 게시판에 인증 스크린샷을 올려주세요! 선착순 3명에게 후원 마일리지가 지급됩니다.\r\n\r\n#r#e단, 오후 6시 ~ 오후 9시 사이에 올려야만 인정#k#n\r\n#L1##b이벤트맵 인내의 숲 이동");
		
		} else if(status == 1) {
		if((timelimit(18,3)) || (timelimit(18,3))) {
					cm.sendOk("이벤트 오픈 시간이 아닙니다.");
                                        dispose();
                                        return;
			cm.sendOK("이벤트 오픈 시간이 아닙니다.");	
				}
		if(selection == 1) {//소환
                        cm.warp(910130102);
			cm.dispose();

		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("남아있는 보스는 처리하지않고 뭐하는거지?");
			cm.dispose();
		} else {
                        cm.playerMessage(5, "모든 보스를 처치 후 각 난이도에 맞는 코인을 얻고 피타스를 통해 이 곳에서 빠져나가세요!");
                        cm.playerMessage(5, "HARD 난이도 코인 : 매그너스 코인");
                        cm.playerMessage(5, "파티장이 코인을 소유한채로 피타스에게 보상 받기 메뉴를 클릭해야합니다.");      
			cm.spawnMob(8900000,1664,29);
			cm.spawnMob(8900001,1885,29);
			cm.spawnMob(8900002,2452,29);
			cm.spawnMob(8870000,2674,29);
			cm.spawnMob(8920000,2136,29);
			cm.dispose();
                }

		} else if(selection == 5) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("남아있는 보스는 처리하지않고 뭐하는거지?");
		        cm.dispose();
			return;
			}
	                if (!cm.haveItem (4310058, 1)) {
			cm.sendOk("매그너스 코인을 당장 가져와!\r\n(파티장이 소유 하고있어야합니다)");
			cm.dispose();
               	} else {
                        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "< "+(cm.getClient().getChannel()+1) +"채널 > "+ cm.getPlayer().getName()+" 님의 원정대가 판테온 침공을 막고 성공적으로 탈출하였습니다! "));
                        cm.playerMessage(6, "펜릴에게 보상을 받고 마을로 이동하세요.");    
			cm.allPartyWarp(940011000, true);
			cm.dispose();
	        }
		} else if(selection == 2) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("남아있는 보스는 처리하지않고 뭐하는거지?");
			return;
			}
	                if (!cm.haveItem (4310059, 1)) {
			cm.sendOk("그림자 상인단 코인을 당장 가져와!\r\n(파티장이 소유 하고있어야합니다)");
			cm.dispose();
               	} else {
                        WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "< "+(cm.getClient().getChannel()+1) +"채널 > "+ cm.getPlayer().getName()+" 님의 원정대가 판테온 침공을 막고 성공적으로 탈출하였습니다! "));
                        cm.playerMessage(6, "라니아에게 보상을 받고 마을로 이동하세요.");
			cm.allPartyWarp(910141110, true);  
			cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


