/*
제작 : (Dhae) dhae0107
목적 : 공부및 배포용
코드 : 2040052 (@환생 명령어 - 사서 위즈)
설명 : 환생진행 엔피시 (환생 > 마을이동 > 환생을 진행 한 곳으로 이동)
*/

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(Packages.tools.RandomStream);

var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"

아이템 = (4310067) // 환생시 지급 할 아이템
개수 = Randomizer.rand(10, 50); // 지급 할 아이템 개수
환포 = Randomizer.rand(50, 100); // 환포 수치
레벨 = (100) // 환생시 레벨
환렙 = (200) // 환생 가능 레벨
마을 = (331001000) // 이동 할 마을



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
if(cm.getPlayer().getKeyValue("환생") == null) {; cm.getPlayer().setKeyValue("환생", 0); }
    if (status == 0 && mode == 0) {	cm.dispose();	return;	}
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}

if (status == 0) {
	말 = "안녕하세요 #b#h ##k님"
	말+= "\r\n\r\n#e#b#h ##k님의 환생포인트 : #r"+cm.getPlayer().getFame()+"#k#n  /  #fn맑은 고딕#획득 환포 : #d#e50~100#n#k"
	말+= "\r\n#b#e#fn##h ##k님의 레벨 : #r"+cm.getPlayerStat("LVL")+"#n#k  /  #fn맑은 고딕#환생 가능 레벨 : #e#d"+환렙+"#n#k"
        말+= "\r\n환생시 획득 아이템 : #fn맑은 고딕##e#d#z"+아이템+"# 10~50개#fn##fs#"

        if (cm.getPlayer().getLevel() <= 환렙 && cm.canHold(아이템)) {
	말+= "\r\n#L0##b#e"+k+" 환생을 진행#n하겠습니다."
}else{
	말+= "\r\n\r\n#r#e환생에 필요한 레벨 또는 아이템창이 부족합니다."}
	
	if(cm.getPlayer().getKeyValue("환생") == 1) {
	말+= "\r\n#L1##b#e"+k+" 원래있던 맵#n으로 돌아갈래요"
}
	cm.sendSimple(말);


}else if (status == 1) {
if (selection == 0) {
	cm.saveLocation("WORLDTOUR");
	cm.getPlayer().setKeyValue("환생",1)
	cm.warp(마을);
	cm.getPlayer().setLevel(레벨);
	cm.gainItem(아이템, 개수);
	cm.getPlayer().gainAp(환포);
	cm.getPlayer().addFame(환포);
	cm.fakeRelog();
	cm.updateChar();
	cm.dispose();
	cm.dispose();
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"「"+ cm.getPlayer().getName()+"」님께서 환생을 진행하셨습니다. 「"+ cm.getPlayer().getName()+"」님의 환포 : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+환포)+"(+"+환포+")"));cm.getPlayer().addFame(환포);


}else if(selection == 1) {
	cm.warp(cm.getSavedLocation("WORLDTOUR"));
	cm.clearSavedLocation("WORLDTOUR");
	cm.getPlayer().setKeyValue("환생",0)
	cm.dispose();
  }
 }
}
