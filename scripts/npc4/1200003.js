var price;
var status = -1;

function start() {
    if (cm.getJobId() > 0 && cm.getJobId() <= 910 || cm.getJobId() > 1000 && cm.getJobId() <= 1512 || cm.getJobId() > 2000) {
        price = 800;
    } else {
        price = 80;
    }
    if (!cm.haveItem(4032338)) {
        cm.sendYesNo("혹시 리엔을 떠나려는 거야? 이 배를 타면 빅토리아 아일랜드의 #b리스항구#k까지 데려다 줄 수 있긴 한데... #b요금 "+ price +"#k메소를 내야 해. 리스항구로 가겠어?");
    } else {
        cm.sendNext("혹시 리엔을 떠나려는 거야? 이 배를 타면 빅토리아 아일랜드의 #b리스항구#k까지 데려다 줄 수 있어. 요금은 800메소인데... 어라? 그건 리린의 편지잖아?");
    }
}

function action(mode, type, selection){
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == -1) {
            cm.sendNext("갈 생각이 없으면 말고.");
            cm.dispose();	
        }
        if (mode == 0 && status == 0) {
            cm.sendNext("리엔에서 해야 할 일이 남은 모양이지? 알았어. 리린의 편지만 있다면 태워다 줄 테니까, 나중에 다시 오라고.");
            cm.dispose();	
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getMeso() >= price && !cm.haveItem(4032338)) {
                cm.gainMeso(-price);
                cm.TimeMoveMap(200090071, 104000000, 60);
                cm.dispose();
            } else if (cm.getMeso() < price && !cm.haveItem(4032338)) {
                cm.sendNext("어이~ 돈도없이 우리 배를 타려고 하나? 배를 타려면 돈을 갖고 오라고~!");
                cm.dispose();	
            } else {
                cm.sendAcceptDecline("리린의 편지를 가진 사람이라면 공짜로 태워줄 수 있지. 자, 그럼 바로 리스항구로 출발하겠어?");
            }
        } else if (status == 1) {
            if (cm.haveItem(4032338)) {
                cm.TimeMoveMap(200090071, 104000000, 60);
                cm.dispose();
            }
        }
    }
}

