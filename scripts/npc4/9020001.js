

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
		var sungwoo = "#k황금단풍잎, 빨간단추를 가져오면 메소로 교환해주지 호호호.\r\n\r\n#l";
		sungwoo += "　#b#L1##r황금단풍잎 1개를 150만 메소로 교환합니다.\r\n#l";
		sungwoo += "　#b#L3##r황금단풍잎 10개를 1500만 메소로 교환합니다.\r\n#l";
		sungwoo += "　#b#L4##r빨간단추 10개를 1500만 메소로 교환합니다.\r\n#l";
		sungwoo += "　#b#L2##r빨간단추 1개를 150만 메소로 교환합니다.\r\n#l";
		cm.sendSimple(sungwoo);

	} else if (status == 1) {
             if (selection == 0) {
               if(cm.getMeso() >= 300000){
               cm.gainItem(5062000,30);
               cm.gainMeso(-300000);
               cm.sendOk("미라클 큐브 30개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 1) {
        if (cm.haveItem(4033247, 1)){
               cm.gainItem(4033247,-1);
               cm.gainMeso(1500000);
               cm.sendOk("100만 메소를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
}
} else if (selection == 11) {
               if(cm.getMeso() >= 700000){
               cm.gainItem(5000296,1);
               cm.gainMeso(-700000);
               cm.sendOk("마스터 미라클 큐브 30개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 8) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062010,30);
               cm.gainMeso(-3000000);
               cm.sendOk("블랙 큐브 30개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 10) {
               if(cm.getMeso() >= 500000){
               cm.gainItem(2460003,50);
               cm.gainMeso(-500000);
               cm.sendOk("돋보기 50개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 2) {
        if (cm.haveItem(4310016, 1)){
               cm.gainItem(4310016,-1);
               cm.gainMeso(1500000);
               cm.sendOk("100만 메소를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 3) {
        if (cm.haveItem(4033247, 10)){
               cm.gainItem(4033247,-10);
               cm.gainMeso(15000000);
               cm.sendOk("황단 10개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 4) {
        if (cm.haveItem(4310016, 10)){
               cm.gainItem(4310016,-10);
               cm.gainMeso(15000000);
               cm.sendOk("빨간단추 를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 5) {
               if(cm.getMeso() >= 300000){
               cm.gainItem(2049408,1);
               cm.gainMeso(-300000);
               cm.sendOk("잠재능력 부여주문서 1장을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 6) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049301,1);
               cm.gainMeso(-100000); 
              cm.sendOk("장비강화 주문서 1장을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 7) {
               if(cm.getMeso() >= 500000){
               cm.gainItem(2049303,1);
               cm.gainMeso(-500000);
               cm.sendOk("고급 장비강화 주문서 1장을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
}
}
}
}

