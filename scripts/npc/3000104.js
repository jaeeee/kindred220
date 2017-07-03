importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 8880010; //보스 코드
var item = 4001126; //필요한 아이템 코드
var count = 500; //필요한 아이템 갯수
var map = 401060200; //맵코드
var bn = "매그너스"; //보스이름
var back = 1000000; //돌아갈 맵 코드
var x = 2381; //소환x좌표 
var y = -1347; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("이 곳은 매그너스의 성지, 절대 방심하지마세요.\r\n#L1##fUI/UIWindow2/aswanStart/BtEasy/normal/0\r\n\r\n#L3##b죽이라는 메세지가 반복될시 클릭#k<킬올시스템>\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list2\r\n\r\n\r\n#L8##b매그너스의 서신#k");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"를 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"(EASY)를 소환하셨습니다!")); // 게임 채팅서버알림 메세지 
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
                }

		} else if(selection == 3) {
    	    		cm.killAllMob();
			cm.dispose();

		} else if(selection == 7) {
    	    		cm.sendOk("준비중인 컨텐츠입니다, 더불어 유저분들의 의견을 받고있습니다. 카페에 있는 프리보드에 유저분들의 의견을 남겨주세요!");
			cm.dispose();

		} else if(selection == 8) {
    	    		cm.sendOk("준비중인 컨텐츠입니다, 더불어 유저분들의 의견을 받고있습니다. 카페에 있는 프리보드에 유저분들의 의견을 남겨주세요!");
			cm.dispose();

		} else if(selection == 5) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"를 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, "["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"(HELL)를 소환하셨습니다!"));
			cm.gainItem(item,-count);
			cm.spawnMob(8880002,2381,-1347);
			cm.dispose();
                }

		} else if(selection == 6) {
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"를 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {    
			WorldBroadcasting.broadcast(MainPacketCreator.getGMText(7, "["+ cm.getPlayer().getName()+"] 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"(HELL)를 소환하셨습니다!")); 
			cm.gainItem(item,-count);
			cm.spawnMob(8880010,2381,-1347);
			cm.dispose();
                }

		} else if(selection == 2) {
	        if (cm.haveItem(1142354,1)){
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(5, "[크로스헌터 마스터의 권한] "+ cm.getPlayer().getName()+" 님께서 "+(cm.getClient().getChannel()+1) +" 채널에서 "+bn+"을 소환하셨습니다!")); // 게임 채팅서버알림 메세지 
	        cm.spawnMob(boss,x,y);
	        cm.dispose();
	        } else {
	        cm.sendOk("당신은 #b크로스헌터 마스터#k가 아닙니다.");
	        cm.dispose();
	        }

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


