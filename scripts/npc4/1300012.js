


/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 동쪽성탑

	엔피시 설명 : 


*/


var status = -1;
var map = 106021500;
var exit = 106021400;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        cm.sendSimple("#b결혼식장 입구#k로 이동합니다. 어디로 이동하시겠습니까?\r\n\r\n#b#L0#1. 페페킹 타도 (파티(1~6인)만 입장가능 / 레벨 : 30이상)#l\r\n#L1#2. 비올레타 구출 (솔로만 가능 / 레벨 : 30이상)#l#k")
    } else if (status == 1) {
        var em = cm.getEventManager("MiniDungeon");
        if (em == null) {
            cm.getPlayer().message(5, "미니던전 스크립트에 오류가 발생했습니다. GM에게 문의해 주세요.");
            return false;
        }
        if (selection == 0) {
            if (cm.getPlayer().getParty() != null) {
                if (!cm.allMembersHere()) {
                    cm.getPlayer().message(5, "파티원이 모두 모여있어야 입장할 수 있습니다.");
                }
                if (!cm.isLeader()) {
                    cm.getPlayer().message(5, "파티장이 입장할 수 있습니다.");
                }
                em.setProperty("Leader_"+cm.getPlayer().getParty().getLeader().getId()+"_Exit", cm.getPlayer().getMapId()+"");
                em.setProperty("Leader_"+cm.getPlayer().getParty().getLeader().getId()+"_Map", map+"");
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                cm.getPlayer().message(5, "미니던전 인스턴스에 입장되었습니다.");
                var eim = cm.getPlayer().getEventInstance();
                eim.startEventTimer(600000);
            } else {
                em.setProperty("Leader_"+cm.getPlayer().getId()+"_Exit", cm.getPlayer().getMapId()+"");
                em.setProperty("Leader_"+cm.getPlayer().getId()+"_Map", map+"");
                em.startInstance(cm.getPlayer());
                cm.getPlayer().message(5, "미니던전 인스턴스에 입장되었습니다.");
                var eim = cm.getPlayer().getEventInstance();
                eim.startEventTimer(600000);
            }
            cm.dispose();
        } else {
            cm.sendOk("현재 미구현 입니다.");
            cm.dispose();
        }
    }
}


