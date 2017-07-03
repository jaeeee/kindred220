importPackage(java.sql);
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.tools);

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
                var rute = "#r#e<루타비스 동쪽 정원 입구>#k#l#n\r\n";
                if(cm.haveItem(4310027,1)) {
                } else {
                }
                rute += "루타비스 동쪽 봉인의 수호자인 #r반반#k이 지키고 있는 정원으로 가는 문이다. #r클리어 기록은 노멀의 경우 당일 자정, 카오스의 경우 매주 목요일 자정을 기준으로 초기화 됩니다.#k\r\n#d(현재 서버상의 오류로 반반을 잡으실 수 없습니다)#k\r\n";
                rute += "#L10##i4033611##b고목나무 열쇠를 사용하여 노말 모드로 이동한다.(125레벨 이상)\r\n";
                rute += "#L11##i4033611##b고목나무 열쇠를 사용하여 카오스 모드로 이동한다.(180레벨 이상)";
                cm.sendSimple(rute);
        
        } else if (selection == 10) {
        if (cm.getPlayer().getParty() == null) {
            cm.playerMessage(5, "파티가 존재하지 않습니다. 파티를 생성한 후 찾아와주세요.");
            cm.dispose();
            return;
            }
            if (!cm.allMembersHere()) {
                cm.playerMessage(5, "파티원이 같은 장소에 없습니다.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.playerMessage(5, "파티장만이 입장 신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
        if (cm.haveItem(4033611,1)) {
        cm.resetMap(105200100);
        cm.TimeMoveMap(105200100,105200000,900);
        cm.gainItem(4033611,-1);
        cm.spawnMob(7120110,806,221);
        cm.spawnMob(7120110,908,221);
        cm.spawnMob(7120110,1120,221);
        cm.spawnMob(7120110,1235,221);
        cm.spawnMob(7120110,1364,221);
        cm.spawnMob(7120110,1545,221);
        cm.spawnMob(7120110,1625,221);
        cm.spawnMob(7120110,1764,221);
        cm.spawnMob(7120110,1883,221);
        cm.spawnMob(7120110,1986,221);
        cm.spawnMob(7120110,2154,221);
        cm.spawnMob(7120110,2321,221);
        cm.spawnMob(7120110,2438,221);
        cm.spawnMob(7120110,2586,221);
        cm.spawnMob(7120110,2722,221);
        cm.spawnMob(7120110,2980,221);
        cm.spawnMob(7120110,3232,221);
        cm.dispose();
        } else {
        cm.sendOk("#i4033611##b#z4033611##k 부족한거같은데요?");
        cm.dispose();
        }
        } else if (selection == 11) {
        if (cm.getPlayer().getParty() == null) {
            cm.playerMessage(5, "파티가 존재하지 않습니다. 파티를 생성한 후 찾아와주세요.");
            cm.dispose();
            return;
            }
            if (!cm.allMembersHere()) {
                cm.playerMessage(5, "파티원이 같은 장소에 없습니다.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.playerMessage(5, "파티장만이 입장 신청을 할 수 있습니다.");
                cm.dispose();
                return;
            }
        if (cm.haveItem(4033611,1)) {
        cm.resetMap(105200500);
        cm.TimeMoveMap(105200500,105200000,900);
        cm.gainItem(4033611,-1);
        cm.spawnMob(7120112,806,221);
        cm.spawnMob(7120112,908,221);
        cm.spawnMob(7120112,1120,221);
        cm.spawnMob(7120112,1235,221);
        cm.spawnMob(7120112,1364,221);
        cm.spawnMob(7120112,1545,221);
        cm.spawnMob(7120112,1625,221);
        cm.spawnMob(7120112,1764,221);
        cm.spawnMob(7120112,1883,221);
        cm.spawnMob(7120112,1986,221);
        cm.spawnMob(7120112,2154,221);
        cm.spawnMob(7120112,2321,221);
        cm.spawnMob(7120112,2438,221);
        cm.spawnMob(7120112,2586,221);
        cm.spawnMob(7120112,2722,221);
        cm.spawnMob(7120112,2980,221);
        cm.spawnMob(7120112,3232,221);
        cm.dispose();
        } else {
        cm.sendOk("#i4033611##b#z4033611##k 부족한거같은데요?");
        cm.dispose();
        }
}
}
}