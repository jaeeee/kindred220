

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
		var sungwoo = "#k저는 서버 이용에 편리한 아이템들을 판매하고있는 할매요.\r\n\r\n#l";
		sungwoo += "#r#e     　　 　　[ 큐브 관련 아이템 ]#k#n\r\n";
		sungwoo += "　#b#L10##r1#k#b 메소로 #i2460003##k(#t2460003#)#b 50개 구매#k\r\n#l";
		sungwoo += "　#b#L0##r30만#k#b 메소로 #i5062000##k(#t5062000#)#b #k\r\n#l";
		sungwoo += "　#b#L1##r70만#k#b 메소로 #i5062002##k(#t5062000#)#b 30개 구매#k\r\n#l";
		sungwoo += "　#b#L2##r100만#k#b 메소로 #i5062005##k(#t5062005#)#b 30개 구매#k\r\n#l";
		sungwoo += "　#b#L3##r200만#k#b 메소로 #i5062006##k(#t5062006#)#b 30개 구매#k\r\n#l";
		sungwoo += "　#b#L4##r300만#k#b 메소로 #i5062009##k(#t5062009#)#b 100개 구매#k\r\n#l";
		sungwoo += "  #b#L13##r300만#k#b 메소로 #i5062010##k(#t5062010#)#b 100개 구매#k\r\n#l";
                sungwoo += "  #b#L14##r300만#k#b 메소로 #i5062500##k마에미큐#b 100개 구매#k\r\n#l\r\n";
		sungwoo += "#r#e      　　　　[ 주문서 관련 아이템 ]#k#n\r\n";
		sungwoo += "　#b#L5##r5만#k#b 메소로 #i2049408##k#r#t2049408##k#b 5개 구매#k\r\n#l";
		sungwoo += "　#b#L6##r5만#k#b 메소로 #i2049301##k#r#t2049301##b#k #b5개 구매#k\r\n#l";
		sungwoo += "　#b#L7##r10만#k#b 메소로 #i2049303##k#r#t2049303##b#k #b10개 구매#k\r\n#l";
		sungwoo += "　#b#L8##r5만#k#b 메소로 #i2049152##k#r놀긍혼#k#b 7개 구매#k\r\n#l";
		sungwoo += "　#b#L11##r10만#k#b 메소로 #i2049152##k#r놀긍혼#k#b 15개 구매#k\r\n#l";
		sungwoo += "　#b#L9##r5만#k#b 메소로 #i2049360##r놀장강#k#b 250개 구매#k\r\n#l";
		sungwoo += "　#b#L12##r10만#k#b 메소로 #i2049360##k#r놀장강#k#b 550개 구매#k\r\n#l";
                sungwoo += "#r#e      　　　　[ 강화 관련 아이템 ]#k#n\r\n";
                sungwoo += "　#b#L50##r5만#k#b 메소로 #i2470000##k(#t2470010#)#b 5개 구매#k\r\n#l";
                sungwoo += "　#b#L51##r5만#k#b 메소로 #i2049509##k(#t2049509#)#b 5개 구매#k\r\n#l";
                sungwoo += "　#b#L52##r10만#k#b 메소로 #i2048306##k(스놀장)#b 10개 구매#k\r\n#l";
                sungwoo += "　#b#L53##r10만#k#b 메소로 #i2048721##k(#t2048721#)#b 10개 구매#k\r\n#l";
                sungwoo += "　#b#L54##r10만#k#b 메소로 #i5063100##k(#t5063100#)#b 100개 구매#k\r\n#l";
                sungwoo += "　#b#L55##r10만#k#b 메소로 #i5064100##k(#t5064100#)#b 100개 구매#k\r\n#l";
                sungwoo += "　#b#L56##r10만#k#b 메소로 #i5064000##k(#t5064000#)#b 100개 구매#k\r\n#l";
                sungwoo += "　#b#L57##r10만#k#b 메소로 #i5064300##k(#t5064300#)#b 100개 구매#k\r\n#l";
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
} else if (selection == 13) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062010,100);
               cm.gainMeso(-3000000);
               cm.sendOk("완료.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 12) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049360,550);
               cm.gainMeso(-100000);
               cm.sendOk("완료.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 11) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049152,15);
               cm.gainMeso(-100000);
               cm.sendOk("완료.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 1) {
               if(cm.getMeso() >= 700000){
               cm.gainItem(5062002,30);
               cm.gainMeso(-700000);
               cm.sendOk("마스터 미라클 큐브 30개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 8) {
               if(cm.getMeso() >= 50000){
               cm.gainItem(2049152,7);
               cm.gainMeso(-50000);
               cm.sendOk("혼돈의 주문서를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               }
} else if (selection == 9) {
               if(cm.getMeso() >= 7000000){
               cm.gainItem(2049360,250);
               cm.gainMeso(-50000);
               cm.sendOk("놀라운 장비강화 주문서를 구매했습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
}
} else if (selection == 10) {
               if(cm.getMeso() >= 1){
               cm.gainItem(2460003,50);
               cm.gainMeso(-1);
               cm.sendOk("돋보기 50개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 2) {
               if(cm.getMeso() >= 1000000){
               cm.gainItem(5062005,30);
               cm.gainMeso(-1000000);
               cm.sendOk("어메이징 미라클 큐브 30개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 3) {
               if(cm.getMeso() >= 2000000){
               cm.gainItem(5062006,30);
               cm.gainMeso(-2000000);
               cm.sendOk("플레티넘 미라클 큐브 30개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 4) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062009,100);
               cm.gainMeso(-3000000);
               cm.sendOk("레드 큐브 100개를 구매하셔습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 5) {
               if(cm.getMeso() >= 300000){
               cm.gainItem(2049704,5);
               cm.gainMeso(-50000);
               cm.sendOk("잠재능력 부여주문서 1장을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 6) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049301,5);
               cm.gainMeso(-50000); 
              cm.sendOk("장비강화 주문서 5장을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 7) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2049303,10);
               cm.gainMeso(-100000);
               cm.sendOk("고급 장비강화 주문서 10장을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 50) {
               if(cm.getMeso() >= 50000){
               cm.gainItem(2470000,5);
               cm.gainMeso(-50000);
               cm.sendOk("황금망치 5개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 51) {
               if(cm.getMeso() >= 50000){
               cm.gainItem(2049509,5);
               cm.gainMeso(-50000);
               cm.sendOk("금빛 각인장 5개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 14) {
               if(cm.getMeso() >= 3000000){
               cm.gainItem(5062500,100);
               cm.gainMeso(-3000000);
               cm.sendOk(" 마스터 에디셔널 미라클 큐브100개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 52) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2048306,10);
               cm.gainMeso(-100000);
               cm.sendOk(" 스페셜 에디셔널 잠재능력 부여 스크롤100개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 53) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(2048721,10);
               cm.gainMeso(-100000);
               cm.sendOk(" 영원한 환생으 불꽃10개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 54) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5063100,100);
               cm.gainMeso(-100000);
               cm.sendOk(" 럭키 프로텍트 쉴드100개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 55) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5064100,100);
               cm.gainMeso(-100000);
               cm.sendOk(" 세이프티 쉴드100개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 56) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5064000,100);
               cm.gainMeso(-100000);
               cm.sendOk(" 프로텍트 쉴드100개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
} else if (selection == 57) {
               if(cm.getMeso() >= 100000){
               cm.gainItem(5064300,100);
               cm.gainMeso(-100000);
               cm.sendOk(" 리커버리 쉴드100개을 구매하셨습니다.");
               cm.dispose();
               } else {
               cm.sendOk("물건을 구매하기엔, 메소가 부족한거같은데?");
               cm.dispose();
               } 
}
}
}
}

