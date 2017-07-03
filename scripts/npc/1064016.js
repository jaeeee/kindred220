importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);



var boss = 8930000; //보스 코드
var item = 4310027; //필요한 아이템 코드
var count = 40; //필요한 아이템 갯수
var map = 105200819;//맵코드
var bn = "벨룸"; //보스이름
var back = 10000000; //돌아갈 맵 코드
var x = 7; //소환x좌표 
var y = -160; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"개#k로 "+bn+"을 소환하겠습니까? \r\n\r\n#L1##r#i"+item+"# #r"+count+"개#k로 "+bn+" 소환\r\n\r\n#L2##r#i"+item+"# #r"+count+"개#k로 카오스자쿰 소환#l#k\r\n\r\n#l#L4##b<킬올시스템>#l#k\r\n#L3##r헤네시스이동하기\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
			if (cm.getMonsterCount(map) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"을 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {

cm.gainItem(4310027,-40);
			
 			cm.spawnMob(8930000,-1479,443);
 			
			cm.dispose();
		}

		} else if(selection == 2) {

cm.gainItem(4310027,-40);
			
cm.spawnMob(8930000,-1479,443);


			cm.dispose();
		} else if(selection == 3) {
			if (cm.getMonsterCount(map) > 0){
    	    		cm.killAllMob();
			
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


