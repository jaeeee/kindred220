
/* 대륙이동 정거장 */


var status = -1;
var mapid = 0;
var mapname = "";

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
        mapid = cm.getPlayer().getMapId();
        mapname = "#m"+mapid+"#";
        
        switch (mapid) {
            case 100000000:
            case 101000000:
            case 102000000:
            case 103000000:
            case 104000000:
            case 120000100:
            case 105000000:
                mapid = 104020100;
                mapname = "여섯갈래 정거장";
                break;
            case 220000000:
                mapid = 220000100;
                mapname = "루디브리엄 정거장";
                break;
            case 240000000:
                mapid = 240000100;
                mapname = "리프레 정거장";
                break;
            case 310000000:
                mapid = 310000010;
                mapname = "에델슈타인 임시공항";
                break;
            case 260000000:
                mapid = 260000100;
                mapname = "아리안트 정거장";
                break;
            case 250000000:
                mapid = 250000100;
                mapname = "무릉 사원";
                break;
            case 200000000:
                mapid = 200000100;
                mapname = "오르비스 스테이션";
                break;
        }
        
        cm.sendYesNo("가장 가까운 대륙 이동 정거장 <#b"+mapname+"#k> 맵으로 이동합니다. 정말 이동하시겠습니까?");
    } else if (status == 1) {
        cm.warp(mapid, 0);
        cm.dispose();
    }
}


