importPackage(Packages.launch.world);
    
function start() {
    status = -1;
    if (WorldCommunity.startTotoTime > 0) cm.sendSimple("#e스포츠 토토#n\r\n#r" + WorldCommunity.team_1 + "(" + WorldCommunity.team_1_rate + "배)#k VS #b" + WorldCommunity.team_2 + "(" + WorldCommunity.team_2_rate + "배)\r\n#d\r\n#L0# 베팅#l\r\n#L1# 스포츠토토란?#l");
    else {
        cm.sendOk("스포츠 토토가 진행중이지 않습니다.");
        cm.dispose();
    }
}

function action(m, t, s) {
    if (m != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (s == 1 && status < 1) {
        cm.sendOk("#b스포츠토토#k란 스포츠 경기에 메소를 걸어 베팅한 팀이 이기면 그 팀의 배율만큼 메소를 획득하는 일종의 #r도박#k입니다.\r\n#r#e※주의사항 : 19개월 이하 어린이들은 참여할 수 없습니다.");
        cm.dispose();
    } else if (cm.getPlayer().getKeyValue2("SportsToto_Team") != -1 && cm.getPlayer().getKeyValue2("SportsToto_Bet") != -1) {
        cm.sendOk((cm.getPlayer().getKeyValue2("SportsToto_Team") == 1 ? WorldCommunity.team_1 : WorldCommunity.team_2) + " 팀에 " + cm.getPlayer().getKeyValue2("SportsToto_Bet") + " 메소를 거셨네요. 행운을 빕니다!");
        cm.dispose();
    } else {
        if (status == 0) {
            cm.sendSimple("어떤 팀에 베팅을 하시겠습니까?\r\n#L1# #r" + WorldCommunity.team_1 + "(" + WorldCommunity.team_1_rate + "배)#l#k#l\r\n#b#L2# " + WorldCommunity.team_2 + "(" + WorldCommunity.team_2_rate + "배)#l");
            cm.getPlayer().initToto();
        } else if (status == 1) {
            cm.getPlayer().setKeyValue2("SportsToto_Team", s);
            cm.sendGetNumber("얼마를 베팅하시겠습니까?", 50000, 0, cm.getPlayer().getMeso());
        } else if (status == 2) {
            if (cm.getPlayer() < s) {
                cm.sendOk("메소가 부족합니다.");
                cm.dispose();
                return;
            }
            cm.getPlayer().setKeyValue2("SportsToto_Bet", s);
            cm.getPlayer().gainMeso(-s);
        }
    }
}