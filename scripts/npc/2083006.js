/*
 본스크립트의 저작권은 아래 지인에게 있습니다.
 포딜(4_dill) / 허락없이 배포할시 나뻐할꼬얌.
*/

var status = 0;
var maps = new Array("240070101", "240070200", "240070300", "240070400", "240070500", "240070600");
var mapNames = new Array("#b[네오시티 2021년] 평범한 놀이터", "#b[네오시티 2099년] 한밤의 항만 입구", "#b[네오시티 2215년] 폭격맞은 도심 상점가", "#b[네오시티 2216년] 폐허가 된 도시교차로", "#b[네오시티 2230년] 위험한 타워 로비", "#b[네오시티 2503년] 천공함의 뱃머리");
var maplist = new Array("100000000");
var map = new Array("헤네시스");

var warp = new Array("마을워프", "사냥터워프");
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 1 && mode == 0) {
            cm.sendNext("다음에 또 뵈요~");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("\r\n안녕하세요? 타임게이트입니다.\r\n저는 네오시티로 워프시켜드립니다.\r\n앞으로 저를 많이 이용해주세요!");
	} else if (status == 1) {
		var msg = "#e#h #님 원하는 워프방식을 선택해주세요#n";
		for (var i = 100; i < 102; i++) {
		msg += "\r\n#b#L" + i + "# " + warp[i-100] + "#l";
		}
		cm.sendSimple(msg);
	} else if (status == 4) {
          	var place = "#e#h #님 목적지를 선택해주세요#n";
		for (var i = 0; i < maplist.length; i++) {
		place += "\r\n#b#L" + i + "# " + map[i] + "#l";
                }
           	cm.sendSimple(place);
        } else if (status == 5) {
		    selectedMap = selection;
                    cm.sendYesNo("정말로 이 마을로 이동하시겠습니까?");
        } else if (status == 6) {
                        cm.warp(maplist[selectedMap], 0);
                        cm.dispose();
	} else if (status == 7) {
          	var where = "#e#h #님 목적지를 선택해주세요#n";
		for (var i = 0; i < maps.length; i++) {
		where += "\r\n#b#L" + i + "# " + mapNames[i] + "#l";
                }
           	cm.sendSimple(where);
        } else if (status == 8) {
		    selectedMap = selection;
                    cm.sendYesNo("정말로 이 곳 으로 이동하시겠습니까?");
        } else if (status == 9) {
                        cm.warp(maps[selectedMap], 0);
                        cm.dispose();
	} else if (selection == 100) {
		cm.sendNext("\r\n마을 워프 리스트를 불러옵니다.")
		status++;
	} else if (selection == 101) {
		cm.sendNext("\r\n네오시티 워프 리스트를 불러옵니다.")
		status++;
		status++;
		status++;
		status++;
		}
	}
}