/*
제작 : (Dhae) dhae0107
목적 : 공부및 배포용
코드 : 11100 (@변생[변생하기] - 루시)
설명 : 변생 진행 엔피시
*/

별 = "#fUI/UIToolTip/Item/Equip/Star/Star#"
숫자1 = "#fUI/UIWindowBT.img/MonsterBattleCollection2/RankingPage/tearTitle/rankingNumber/1#"
숫자2 = "#fUI/UIWindowBT.img/MonsterBattleCollection2/RankingPage/tearTitle/rankingNumber/2#"

환포 = (1000); // 변생에 필요한 환포
변렙 = (230) // 변생 가능 레벨
이동 = (980030010) // 전직엔피시가 있는 곳



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {	cm.dispose();	return;	}
    if (status == 3 && mode == 0) {	cm.sendOk("신중히 선택해주시기 바랍니다.");	cm.dispose();	return;	}
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}

if (status == 0) {
	cm.sendOk("#r#e※변생시 주의 사항※#k#n\n#fs20#\r\n\r\n"+숫자1+"#fs# 변생전 #b#e장착중인 모든 아이템을 장착해제#n#k합니다.\r\n"+숫자2+" #b#e< @저장 >을 이용해 장비를 저장#n#k해주세요.\r\n\r\n#fn맑은 고딕##e#d< 위 항목 미 숙지로 생기는 불이익은 책임지지 않습니다. >");
	
}else if(status == 1){
	말 = "안녕하세요 #b#h ##k님\r\n\r\n"
	말+= "변생 가능 환포 : #r#e"+환포+"↑(이상)#k  /  #fn맑은 고딕##e#b#h ##k님의 환포 : #d"+cm.getPlayer().getFame()+"#k#n#fn#\r\n"
	말+= "변생 가능 레벨 : #r#e"+변렙+"#k  /  #fn맑은 고딕##k#n#e#b#h ##k님의 레벨 : #d"+cm.getPlayerStat("LVL")+"#n#k#fn#\r\n\r\n"
	말+= "#L0#"+별+" #b#e변생을 진행#n하겠습니다.\r\n"
	말+= "#L1#"+별+" #e변생이란 무엇#n인가요"
	cm.sendSimple(말);


}else if(status == 2){
	if (selection == 0) {
	if (cm.getPlayer().getLevel() >= 변렙 && cm.getPlayer().getFame() >= 환포) {
	말 = "#b#e< 모험가 & 시그너스 >#k#n\r\n"
	말+= "#L0# 모험가 #L1000# 시그너스 #L5000# 미하일 \r\n\r\n\r\n#l"
	말+= "#b#e< 영웅 직업군 >#k#n\r\n"
	말+= "#L2000# 아란 #L2001# 에반 #L2002# 메르세데스 #L2003# 팬텀 #L2004# 루미너스 #L2005# 은월\r\n\r\n\r\n#l"
	말+= "#b#e< 레지스탕스 >#n#k\r\n"
	말+= "#L3000# 레지스탕스 #L3001# 데몬 #L3002# 제논\r\n\r\n\r\n#l"
	말+= "#b#e< 노바 >#n#k\r\n"
	말+= "#L6000# 카이저 #L6001# 엔젤릭버스터"
	cm.sendSimple(말);
}else{
	cm.sendOk("환생에 필요한 레벨 또는 환생 포인트가 부족합니다.#fs15#\r\n\r\n#fn맑은 고딕##e#b#h ##k님의 환포 : #r"+cm.getPlayer().getFame()+"#k / #d필요 : "+환포+"↑(이상)#k\r\n#e#b#h ##k님의 레벨 : #r"+cm.getPlayerStat("LVL")+"#k / #d필요 : "+변렙+"");
	cm.dispose();}

	}else if(selection == 1) {
	cm.sendOk("#e#b< 변생이란? >#n#k\r\n\r\n레벨 10으로 되돌려 #r#e새로운 직업군을 갖는 것#n#k 입니다.\r\n변생시 #r#e[키셋팅]에 저장된 스킬은 초기화되지 않습니다#n#k.");
	cm.dispose();}


}else if(status == 3){
	직업 = selection;
	if (직업 == 0) {
	이름 = "#b< 모험가 >#k가" 
	}else if(직업 == 1000) {
	이름 = "#b< 시그너스 >#k기"
	}else if(직업 == 2000) {
	이름 = "#b< 아란 >#k이"
	}else if(직업 == 2001) {
	이름 = "#b< 에반 >#k이"
	}else if(직업 == 2002) {
	이름 = "#b< 메르세데스 >#k가" 
	}else if(직업 == 2003) {
	이름 = "#b< 팬텀 >#k이"
	}else if(직업 == 2004) {
	이름 = "#b< 루미너스 >#k가"
	}else if(직업 == 2005) {
	이름 = "#b< 은월 >#k이"
	}else if(직업 == 3000) {
	이름 = "#b< 레지스탕스 >#k가"
	}else if(직업 == 3001) {
	이름 = "#b< 데몬 >#k이"
	}else if(직업 == 3002) {
	이름 = "#b< 제논 >#k이"
	}else if(직업 == 5000) {
	이름 = "#b< 미하일 >#k이"
	}else if(직업 == 6000) {
	이름 = "#b< 카이저 >#k가"
	}else if(job == 6001) {
	이름 = "#b< 엔젤릭버스터 >#k가"
	}if (직업 != 1){
	cm.sendYesNo("선택하신 직업은 "+이름+" 맞습니까?");}


}else if(status == 4){
	cm.unequipEverything();
	스텟 = cm.getPlayer().getStat();
	올텟 = 스텟.getStr() + 스텟.getDex() + 스텟.getLuk() + 스텟.getInt() + cm.getPlayer().getRemainingAp() - 16;
	스텟.setStr(4);
	스텟.setDex(4);
	스텟.setInt(4);
	스텟.setLuk(4);
	cm.getPlayer().skillReset();
	cm.changeJob(직업);
	cm.getPlayer().addFame(-환포);
	cm.getPlayer().setLevel(1);
	cm.getPlayer().setRemainingAp(올텟);
	cm.warp(이동);
	cm.fakeRelog();
	cm.updateChar();
	cm.dispose();
 }
}
