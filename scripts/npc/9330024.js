importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);


var boss = 9300519; //보스 코드
var item = 4310059; //필요한 아이템 코드
var count = 1; //필요한 아이템 갯수
var map = 931050433; //맵코드
var bn = "각성한 라이카"; //보스이름
var back = 100000000; //돌아갈 맵 코드
var x = -457; //소환x좌표
var y = 181; //소환y좌표

var status = -1;


	function start() {
	action(1, 0, 0);
	}

	function action(mode, type, selection) {
	status++;
	if (status == 0) {

	cm.sendSimple("#i"+item+"# #r"+count+"개#k로 "+bn+"를 소환하겠습니까? \r\n\r\n#L1##r#i"+item+"# #r"+count+"개#k로 "+bn+" 소환\r\n#l#L2#마을로 가기#l#k\r\n");
		
		} else if(status == 1) {
		if(selection == 1) {//소환
 if (cm.getMonsterCount(931050433) > 0) {
			cm.sendOk("모든 몬스터를 전멸시켜야 합니다.");
			cm.dispose();
		} else if (!cm.haveItem(item, count)) {
			cm.sendOk(""+bn+"을 소환하려면 #i"+item+"#"+count+"개가 필요합니다.");
			cm.dispose();
		} else {     
			cm.gainItem(item,-count);
			cm.spawnMob(boss,x,y);
			cm.dispose();
		}

		} else if(selection == 2) {
			cm.warp(back, 0);
			cm.dispose();

		} else {
			cm.dispose();
		}

		} else {
			cm.dispose();
		}

		}


