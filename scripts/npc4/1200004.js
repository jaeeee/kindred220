
var price;
var status = 0;

function start() {
    if (cm.getJobId() > 0 && cm.getJobId() <= 910 || cm.getJobId() > 1000 && cm.getJobId() <= 1512 || cm.getJobId() > 2000) {
        price = 800
    } else {
        price = 80;
    }
    cm.sendYesNo("혹시 빅토리아 아일랜드를 떠나 우리 마을로 갈 생각이야? 이 배를 타면 #b리엔#k까지 데려다 줄 수 있긴 한데... #b요금 "+ price +"#k메소를 내야 해. 리엔으로 가겠어?");
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.sendNext("흠... 갈 생각이 없으면 어쩔 수 없지. 인간에게는 좀 척박하지만 펭귄에게는 참 좋은 지역인데...");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        switch(status) {
            case 1:
            if (cm.getMeso() >= price) {
                cm.gainMeso(-price);
                cm.TimeMoveMap(200090060, 140020300, 60);
                cm.dispose();
            } else {
                cm.sendNext("어이~ 돈도없이 우리 배를 타려고 하나? 배를 타려면 돈을 갖고 오라고~!");
                cm.dispose();	
            }
        }
    }
}

