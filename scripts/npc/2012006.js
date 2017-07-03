/*
    	! 이 스크립트는 Pure Developmest of KMS의 일부입니다.
    	! 이 스크립트는 무단 수정과 무단 배포가 불가능합니다.
    	! 이 주석은 제작자의 동의가 있을시 수정이 가능합니다.
    	Copyright ⓒ 2012 Scripts Maker	루돌프 <rhkddbs_4399@naver.com>
					주크블랙 <doomgate17@naver.com>
					백호 <baekhoms@naver.com>
					엘도라도 <junir0542@naver.com>
*/

var status = 0;
var mapcod = Array(200000110,200000120,200000130,200000140,200000150,200000160,200000170);
var mapnam = Array("빅토리아 아일랜드","루디브리엄으","리프레","무릉으","아리안트","에레브","에델슈타인으");
var select = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
	    cm.sendNext("가시는 목적지가 어디인지 다시 한번 확인하신 후에 저를 통해서 승강장으로 이동하도록 하세요. 배 시간이 정해져 있으니 시간을 잘 맞추셔야 합니다!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "오르비스 스테이션에는 많은 승강장이 있습니다. 목적지에 따라 제대로 된 승강장을 찾아 가셔야 한답니다. 어느 곳으로 가는 배를 타기 위한 승강장으로 가시겠어요?#b\r\n";
	    for (var i = 0; i < mapcod.length; i++) {
		chat += "#L" + i + "#" + mapnam[i] + "로 향하는 배를 타는 승강장\r\n#l";
	    }
	    cm.sendSimple(chat);
        } else if (status == 1) {
	    select = selection;
	    cm.sendYesNo("만일 통로를 잘못 들어섰더라도 포탈을 통해 제가 있는 곳으로 돌아오실 수 있으니 안심하세요. #b" + mapnam[selection] + "로 이동하시겠어요?");
        } else if (status == 2) {
	    cm.warp(mapcod[select]);
	    cm.dispose();
	}
    }
}