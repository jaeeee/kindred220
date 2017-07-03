importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8800000; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 200; //필요한 아이템 갯수
var map = 280030100; //맵코드
var bn = "자쿰"; //보스이름
var back = 1000000; //돌아갈 맵 코드
var x = 7; //소환x좌표 
var y = -160; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("미스틱 보스들의 판테온 침공을 막아주세요...!\r\n\r\n(/) #r#eEASY#k#n보스의 개체가 조정되었습니다.\r\n(/) #r#eHARD#k#n모드는 현재 이용이 불가능합니다.\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#L1##b판테온 침공 처단");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
				if (cm.getPlayer().getParty() == null) {
				cm.sendOk("파티가 없으면 입장이 불가능해요.");
			        cm.dispose();
			} else if (!cm.isLeader()) {
				cm.sendOk("파티장을 데려오세요!");
				cm.dispose();
		        } else if (!cm.allMembersHere()) {
				cm.sendOk("다른 원정대원들은 어디간거죠?");
				cm.dispose();
			} else if (cm.getClient().getChannelServer().getMapFactory().getMap(940020000).getCharactersSize() > 0) {
				cm.sendOk("이미 다른 원정대가 침공을 막고계셔요!");
				cm.dispose();
		} else {    
		        cm.allPartyWarp(940020000, true);
	                cm.getPlayer().send(MainPacketCreator.sendHint("어서 피타스에게 가보자!",300,20));
	                cm.getPlayer().send(UIPacket.detailShowInfo("판테온이 미스틱 보스들에 의해 침공 당하였습니다!"));
			cm.dispose();
                }

		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();

		} else if(selection == 2) {
	        if (cm.haveItem(1142354,1)){
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터 마스터의 권한] "+ cm.getPlayer().getName()+" 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"을 소환하셨습니다!")); // 게임 채팅서버알림 메세지 
	        cm.spawnMob(boss,x,y);
 		cm.spawnMob(8800003,-20,-216);
 		cm.spawnMob(8800004,-20,-216);
 		cm.spawnMob(8800005,-20,-216);
 		cm.spawnMob(8800006,-20,-216);
 		cm.spawnMob(8800007,-20,-216);
 		cm.spawnMob(8800008,-20,-216);
 		cm.spawnMob(8800009,-20,-216);
 		cm.spawnMob(8800010,-20,-216);
	        cm.dispose();
	        } else {
	        cm.sendOk("흠..자네는 #b크로스헌터 마스터#k가 아닌데?");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


