/*
제작 : (Dhae) dhae0107
목적 : 공부및 배포용
코드 : 1061008 (슬리피우드[만능 환포] - 오서방)
설명 : 환포상점 엔피시
*/

아이템 = [2048723, 2049323, 2049153, 1122017]; // 아이템 코드
가격 = [1000, 2000, 3000, 4000]; // 아이템 가격
수량 = [10, 20, 10, 1]; // 아이템 구입시 지급 할 수량




function start() {    status = -1;    action(1, 0, 0);}
function action(mode, type, selection) {
    if (status == 0 && mode == 0) {	cm.dispose();	return;	}
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}


if (status == 0) {
	말 = "안녕한가해~ 나는 중국에서 온 상인 오서방이다해~\r\n없는 것 빼곤 다 있으니 둘러보라해~ #e#b:）#n#k\r\n\r\n"
	말+= "#r#e소지중인 환포 : "+cm.getPlayer().getFame()+"#n#k\r\n"
	for(i=0; i<아이템.length; i++) {
	말+= "#L"+i+"##i"+아이템[i]+"##z"+아이템[i]+"# #b#e< "+수량[i]+" : "+가격[i]+" >#n#k\r\n\r\n";}
	cm.sendSimple(말);


}else if(status == 1){
	if (cm.getPlayer().getFame() >= 가격[selection] && cm.canHold(아이템[selection])) {
		cm.getPlayer().addFame(-가격[selection]);		
		cm.gainItem(아이템[selection], 수량[selection]);
		cm.fakeRelog();	
		cm.updateChar();
		cm.sendOk(가격[selection] +"환포를 받았다해~#b< #i"+아이템[selection]+"##z"+아이템[selection]+"# >#k은 잘 받았나해~?\r\n여기 거스름#r#e< "+cm.getPlayer().getFame()+"환포 >#k#n다해~!");
		cm.dispose();
	}else{
		cm.sendOk("환포 또는 인벤이 부족하진 않은지 확인해보라해~!");
		cm.dispose();
  }
 }
}