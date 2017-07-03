/*

Copyright ⓒ 2013 Spirit Corporaion. All Rights Reserved.

leader.스피릿온라인 (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.우비 (guri__s@nate.com)
Make.공석 (iureal@nate.com)

이 스크립트는 스피릿온라인에만 사용됩니다.
만약 유출이 되더라도 이 주석은 삭제하지 않으셨으면 좋겠습니다.

*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var jessica = "나처럼 강해지고싶나?\r\n";
		jessica += "그렇다면 #r각성#k을 해보도록!!\r\n#b";
                if(cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getKeyValue("rkrtjd") == null) {
                jessica += "\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n";
		jessica += "#L0#각성의 구슬(시작가능)";
		} else if (cm.getPlayer().getKeyValue("rkrtjd") == "start" && !cm.haveItem(4033302)) {
                jessica += "\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n";
		jessica += "#L1#각성의 구슬(진행중)";		
		} else if (cm.getPlayer().getKeyValue("rkrtjd") == "start" && cm.haveItem(4033302)) {
                jessica += "\r\n#fUI/UIWindow.img/UtilDlgEx/list3#\r\n";
		jessica += "#L2#각성의 구슬(완료)";
		} else if (cm.getPlayer().getLevel() < 200) {
		jessica += "#b각성의 구슬 진행 조건 : 레벨 200#k";
		}
		cm.sendSimple(jessica);
		if(cm.getPlayer().getKeyValue("rkrtjd") == "clear") {
		cm.dispose();
		} else if (cm.getPlayer().getLevel() < 200) {
		cm.dispose();
		}
	} else if (status == 1) {
	if(selection == 0) {
	cm.sendYesNo("강함이란 여러방면이 존재한다 하지만 진정한 강함은 내면의 강함! 내면을 강화하는 방법은 다양하다 #b키루#k 님에게서 #b어빌리티 강화#k를 하는것도 방법중에 하나지 하지만 그것은 아이템에 의존하는거에 불과하다!!\r\n나는 수련을 해왓지 그수련의 끝에는 #r각성#k 이 존재하더군 보아하니 너도 #r각성#k을 하면 더욱더 강해질수있을거 같은데 어때? 나의 제자로 들어와보겠어?");
	} else if (selection == 1) {
	cm.sendOk("침착하게 보스를 처치해보는거다!!");
	cm.dispose();
	} else if (selection == 2) {
	if (!cm.haveItem(2430492) && cm.haveItem(4033302) && cm.getPlayer().getKeyValue("rkrtjd") == "start") {
	cm.getPlayer().setKeyValue("rkrtjd","clear");
	cm.gainItem(4033302,-1);
	cm.gainItem(2430492,1);
	cm.sendOk("역시 나의눈은 틀리지 않았어 좋아! 너는 이제부터 나의 제자다!! 이제부터 #r각성#k 과 #b각성의 구슬#k 에대해서 설명을 해주겠다.\r\n\r\n#e<각성의 구슬>#n\r\n#b각성의 구슬#k을 소유하고 몬스터를 잡다보면 #b여신의 눈물#k을 드롭되는것을 볼수 있을거다. #b여신의 눈물#k에서는 #r각성 포인트#k가 나오지만 매번 나오는것은 아니니깐 주의하도록! 그렇게 #r각성 포인트 1,000#k 을 모으면 #b각성의 구슬#k로 각성을 할수있게 된다. 이정도의 설명이면 충분히 이해했을거라고 생각한다.\r\n\r\n#e<퀘스트 완료 아이템>#n\r\n#i2430492##b#z2430492##k");
	cm.dispose();	
		}	
	}
} else if (status == 2) {
if(!cm.haveItem(2430492) && cm.getPlayer().getKeyValue("rkrtjd") == null) {
cm.getPlayer().setKeyValue("rkrtjd","start");
cm.sendOk("좋았어! 그럼 나의 제자가 될정도의 그릇인지 확인을 해봐야겟어 현재 #b미스틱 게이트#k 라는것때문에 보스들이 활발해진건 알고있나? 너의 시험은 간단해 #b미스틱 게이트#k에 진입한후 보스를 처치하고 전리품을 가지고 오면된다.\r\n\r\n#e<퀘스트 전리품>#n\r\n[#i4033302##b#z4033302#(1)#k]"); 
		cm.dispose();
	}
		}
	}
}