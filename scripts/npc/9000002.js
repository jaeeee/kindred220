
/*
	본 스크립트는 선히팩의 파일입니다.
	선히팩은 KMS 기준으로 만들어졌습니다.

	네이버 : 선우(seonwoo__@naver.com)

	엔피시 : 9000030
*/

var status = 0;

function start() {
	status = -1;
	action(1,0,0);
}


function action(mode , type , selection){
	if (mode == -1) {
		cm.dispose();
	} else {
	if (mode == 0 && (status == 0)) {
		cm.sendOk("안녕히 가세요.");
		cm.dispose();
	} 
	if (mode > 0)
	    status++;
	else
	    status--;
	if (status == 0) {
            cm.sendYesNo("#bHi~Hello#e휴먼온라인#n #e초기 지원 아이템#n을 보급중인 NPC입니다..\r\n지금#e휴먼온라인#n은 #i1004384##i1082634##i1052865##i1073019##i1142140#이 아이템들을\r\n배급 중입니다. #e#r(올스텟 500 , 공격력,마력 30)\r\n#r\r\n#b아이템을 받으시겠습니까??\r\n#r※장비칸 5칸을 남겨두세요~")
        } else if (status == 1){
           if (cm.getPlayer().getKeyValue(cm.getNpc()+"_Pure") == null) { 
	    cm.gainSponserItem(1004384,'[초기지원]',500,30,30); //개구디노모자
	    cm.gainSponserItem(1082634,'[초기지원]',500,30,30); //개구디노장갑
	    cm.gainSponserItem(1052865,'[초기지원]',500,30,30); //개구디노 한벌옷
	    cm.gainSponserItem(1073019,'[초기지원]',500,30,30); //개구디노신발
	    cm.gainSponserItem(1142140,'[초기지원]',500,30,30); //휴먼온라인유저
            cm.getPlayer().setKeyValue(cm.getNpc()+"_Pure", "1");
		        cm.sendOk("아이템이 지급되었습니다.");
			cm.dispose();
		    } else {
		        cm.sendOk("이미 받으셨습니다.");
		        cm.dispose();
			}
		}
	}
}