


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	호옹이 에 의해 만들어 졌습니다.

	엔피시아이디 : 9900003

	엔피시 이름 : 스피넬

	엔피시가 있는 맵 : 빅토리아로드 : 엘리니아 (180000000)

	엔피시 설명 : MISSINGNO


*/
importPackage(Packages.server.maps);
//사탕 : 5120030
//요정 : 5120023
//줄리엣 : 5120022
//라케리스 : 5120017
var status = -1;
var select = 0;
var icon = 5120023;
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
            if (cm.getPlayer().hasGmLevel(6)) {
                cm.sendSimple("#L0#화면중앙에 글자띄우기(문제내기)#l\r\n#L1#OX시간제한(문제냈음)#l\r\n\r\n\r\n#L2#(제한시간지났을때 사용)정답은 O#l\r\n\r\n#L3#(제한시간지났을때 사용)정답은 X#l\r\n\r\n#L4#노래 재생하기");
            } else {
                cm.sendOk("이벤트 맵에 오신것을 환영합니다! ^^");
                cm.dispose();
                return;
            }
	}
    else if (status == 1) {
        select = selection;
        if (cm.getPlayer().hasGmLevel(6)) {//
		if (select == 0) {
                    cm.sendGetText("화면 중앙에 띄울 글자?");
		} else if (select == 1) {
                    cm.sendGetNumber("지속시간은 얼마나? (초단위)", 1, 1, 300);
                } else if (select == 2) {
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.removeMapEffect());
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(5, "정답은 O 입니다!"));
                    cm.getPlayer().getMap().broadcastMessage(new MapleMapEffect("정답은 O 입니다!", icon).makeStartData());
                    var it = cm.getPlayer().getMap().getAllPlayerThreadSafe().iterator();
                    var map = cm.getClient().getChannelServer().getMapFactory().getMap(100000000);
                    while (it.hasNext()) {
                        var chr = it.next();
                        if (!checkPosO(chr.getPosition()) && !chr.isGM()) {
                            chr.Message("안타깝네요! 정답은 O 였어요!  OX 퀴즈에서 퇴출되셨습니다. 다음 이벤트에 도전해 주세요!");
                            chr.changeMap(map, map.getPortal(0));
			    chr.gainMeso(10000000);
                            cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(6, chr.getName() + "님이 OX퀴즈에서 퇴장당했습니다!"));
                        }
                    }
                    cm.dispose()
                } else if (select == 3) {
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.removeMapEffect());
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(5, "정답은 X 입니다!"));
                    cm.getPlayer().getMap().broadcastMessage(new MapleMapEffect("정답은 X 입니다!", icon).makeStartData());
                    var it = cm.getPlayer().getMap().getAllPlayer().iterator();
                    var map = cm.getClient().getChannelServer().getMapFactory().getMap(100000000);
                    while (it.hasNext()) {
                        var chr = it.next();
                        if (!checkPosX(chr.getPosition()) && !chr.isGM()) {
                            chr.Message("안타깝네요! 정답은 X 였어요!  OX 퀴즈에서 퇴출되셨습니다. 다음 이벤트에 도전해 주세요!");
                            chr.changeMap(map, map.getPortal(0));
			    chr.gainMeso(10000000);
                            cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(6, chr.getName() + "님이 OX퀴즈에서 퇴장당했습니다!"));
                        }
                    }
                    cm.dispose();
                } else if (select == 4) {
			cm.dispose();
			cm.changeMusic("Bgm39/StarPlanetMainEvent");
		}
	} else {
	    cm.sendOk("이벤트 맵에 오신것을 환영합니다! ^^");
            cm.dispose();
            return;
	}
    } else if (status == 2) {
            if (select == 0) {
		cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.removeMapEffect());
		cm.getPlayer().getMap().broadcastMessage(new MapleMapEffect(cm.getText(), icon).makeStartData());
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(8, cm.getText()));
            } else if (select == 1) {
                cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getClock(selection));
            }
	    cm.dispose();
    }
}



function checkPosO(pos) {
    var ltx = -965;
    var lty = -156;
    var rbx = -308;
    var rby = 334;
    var curx = pos.getX();
    var cury = pos.getY();
    return curx >= ltx && cury >= lty && curx <= rbx && cury <= rby;
}

function checkPosX(pos) {
    var ltx = -147;
    var lty = -156;
    var rbx = 502;
    var rby = 334;
    var curx = pos.getX();
    var cury = pos.getY();
    return curx >= ltx && cury >= lty && curx <= rbx && cury <= rby;
}