/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

	엔피시아이디 : 9071004
	
	엔피시 이름 : 게이트

	엔피시가 있는 맵 : 몬스터파크

	엔피시 설명 : in01 포탈 게이트


*/


var status = -1;

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
        var text = "어느 곳으로 입장하시겠습니까?\r\n#r(레벨 115이상 160미만 유저 이용 가능)\r\n당신은 금일 몬스터 파크를 0회 클리어하였습니다. (메이플 계정 기준)\r\n#b#L5#이끼나무 숲(Lv.115~124)#l\r\n#L6#하늘 숲 수련장(Lv.120~129)#l\r\n#L7#해적단의 비밀 기지(Lv.125~134)#l\r\n#L8#이계의 전장(Lv.135~144)#l\r\n#L9#외딴 숲 위험 지역(Lv.140~149)#l\r\n#L10#금지된 시간(Lv.145~154)#l\r\n#L11#숨겨진 유적(Lv.150~159)#l#k";
        cm.sendSimple(text);
    } else if (status == 1) {
        var map = 100000000;
        switch (selection) {
            case 5:
                map = 953030000;
                break;
            case 6:
                map = 953040000;
                break;
            case 7:
                map = 953060000;
                break;
            case 8:
                map = 953070000;
                break;
            case 9:
                map = 953080000;
                break;
            case 10:
                map = 953050000;
                break;
            case 11:
                map = 953090000;
                break;
        }
        
        
        var party = cm.getPlayer().getParty();
        if (party == null) {
            if (!checkLevel(cm.getPlayer().getLevel(), 115, 159)) {
                cm.sendOk("파티원 중 레벨이 맞지 않는 파티원이 있습니다.\r\n#r135레벨 이상 165레벨 미만#k의 파티원만 입장할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001516, 1)) {
                cm.sendOk("파티원 중 입장권을 소지하지 않은 파티원이 있습니다.\r\n#r#i4001516# #t4001516##k이 있어야 입장할 수 있습니다.");
                cm.dispose();
                return;
            }
            
            
            cm.gainItem(4001516, -1);
            var em = cm.getEventManager("MonsterPark");
            var eim = em.readyInstance();
            eim.setProperty("Global_StartMap", map);
            eim.setProperty("Global_ExitMap", "951000000");
            eim.setProperty("Global_MinPerson", "1");
            eim.setProperty("Global_RewardMap", "951000000");
            eim.setProperty("CurrentStage", "1");
            eim.startEventTimer(1200000);
            eim.registerPlayer(cm.getPlayer());
            cm.dispose();
        } else {
            if (!cm.isLeader()) {
                cm.sendOk("파티장이 입장신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("파티원이 전원 이곳에 모여있어야 합니다.");
                cm.dispose();
                return;
            }
            var it = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            var ticketPass = true;
            var levelPass = true;
            while (it.hasNext()) {
                var chr = it.next();
                if (!chr.haveItem(4001516, 1, false, true)) {
                    ticketPass = false;
                    break;
                }
                if (!checkLevel(chr.getLevel(), 115, 159)) {
                    levelPass = false;
                    break;
                }
            }
            if (!ticketPass) {
                cm.sendOk("파티원 중 입장권을 소지하지 않은 파티원이 있습니다.\r\n#r#i4001516# #t4001516##k이 있어야 입장할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!levelPass) {
                cm.sendOk("파티원 중 레벨이 맞지 않는 파티원이 있습니다.\r\n#r135레벨 이상 165레벨 미만#k의 파티원만 입장할 수 있습니다.");
                cm.dispose();
                return;
            }
            var toRem = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
            while (toRem.hasNext()) {
                var chr = toRem.next();
                cm.gainItemTarget(chr, 4001516, -1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            }
            var em = cm.getEventManager("MonsterPark");
            var eim = em.readyInstance();
            eim.setProperty("Global_StartMap", map);
            eim.setProperty("Global_ExitMap", "951000000");
            eim.setProperty("Global_MinPerson", "1");
            eim.setProperty("Global_RewardMap", "951000000");
            eim.setProperty("CurrentStage", "1");
            eim.startEventTimer(1200000);
            eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
            cm.dispose();
        }
    }
}


function checkLevel(cur, min, max) {
    return (cur >= min && cur <= max);
}