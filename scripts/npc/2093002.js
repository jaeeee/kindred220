/*

본 스크립트는 아야노(riel0216)이 제작 하엿으며 판매 적발시 ayanopack@nate.com으로 연락 주시길 바라며 이 내용은 지우지 말아주시길 바랍니다.

*/

 

var status = -1;

function start() {
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
        var ayano = "    #e#fs14#언제 어디서든 편하게 상점을 이용해보자!";
        ayano += "\r\n─────────────────────";     
        ayano += "#e#L0##fs12#캐시상점";
        ayano += "#e#L40##fs12#캐시충전";
        ayano += "#e#L2##fs12#후원상점";
        ayano += "#e#L3##fs12#라이딩상점\r\n";
        ayano += "#e#L4##fs12#의자상점";
        ayano += "#e#L5##fs12#직업상점";
        ayano += "#e#L6##fs12#주문서상점";
        ayano += "#e#L7##fs12#포션상점\r\n";
        ayano += "#e#L8##fs12#홍보상점";
        ayano += "#e#L9##fs12#데미지스킨상점";
        ayano += "#e#L11##fs12#코인상점";
        ayano += "#e#L12##fs12#출석체크";
        ayano += "#e#L42##fs12#쥬얼상점";
        ayano += "#e#L43##fs12#로얄뽑기";
       
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#     힘들게 걷는건 가라! 편하게 이동하자!";
        ayano += "\r\n─────────────────────";   
        ayano += "#e#L13##fs12#각종이동";
        ayano += "#e#L14##fs12#보스이동";
        ayano += "#e#L15##fs12#쉼터이동";
        ayano += "#e#L33##fs12#재규어\r\n";
        ayano += "#e#L41##fs12#몬스터파크";

        ayano += "\r\n#l#k\r\n\r\n#e#fs14#            더욱 빠른 성장과 돈벌이!";
        ayano += "\r\n─────────────────────"; 
        ayano += "#e#L17##fs12#폭업사냥터";
        ayano += "#e#L18##fs12#메소사냥터";
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#      특별한건 없는건가? 특별한 컨텐츠!";
        ayano += "\r\n─────────────────────"; 
        ayano += "#e#L19##fs12#더시드";
        ayano += "#e#L20##fs12#베타납치";
        ayano += "#e#L21##fs12#스우";
        ayano += "#e#L22##fs12#펫산책로";
        ayano += "#e#L23##fs12#로또\r\n";
        ayano += "#e#L24##fs12#도박";
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#                  나머지 컨텐츠!";
        ayano += "\r\n─────────────────────"; 
        ayano += "#e#L25##fs12#성형";
        ayano += "#e#L26##fs12#의류수거함";
        ayano += "#e#L27##fs12#환생";
        ayano += "#e#L28##fs12#변생";
        ayano += "#e#L29##fs12#BGM변경\r\n";
        ayano += "#e#L30##fs12#선물하기";
        ayano += "#e#L31##fs12#창고";
        ayano += "#e#L32##fs12#길드";
        ayano += "#e#L34##fs12#어빌리티";
        ayano += "#e#L35##fs12#옵초기화\r\n";
        ayano += "#e#L36##fs12#현접해제";
        ayano += "#e#L37##fs12#전구제거";
        ayano += "#e#L38##fs12#게시판";
        ayano += "#e#L39##fs12#친구확장";
        if (cm.getPlayer().hasGmLevel(10)){
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#                    운영자 기능";
        ayano += "\r\n─────────────────────"; 
        ayano += "#e#L300##fs12#후원제작";
        ayano += "#e#L301##fs12#복구제작";
        ayano += "#e#L302##fs12#운영자맵";
        ayano += "#e#L303##fs12#유저정보\r\n";
        ayano += "#e#L304##fs12#이름변경";
        ayano += "#e#L305##fs12#서버변경";
        ayano += "#e#L307##fs12#모두소환";
        ayano += "#e#L308##fs12#팅맵해제\r\n";
        ayano += "#e#L309##fs12#코드이동";
        ayano += "#e#L310##fs12#코드버프";
        ayano += "#e#L311##fs12#디비정리";
}
        cm.sendSimple(ayano);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.ayano();
 } else if (s == 1) {
  cm.openNpc (1103001);
 } else if (s == 2) {
  cm.openNpc (9010033);
 } else if (s == 3) {
  cm.openNpc (1032201);
 } else if (s == 4) {
  cm.openShop (1530040); 
 } else if (s == 5) {
  cm.openNpc (9000185);
 } else if (s == 6) {
  cm.openNpc (9020015); 
 } else if (s == 7) {
  cm.openShop (1530065);
 } else if (s == 8) {
  cm.openNpc (1530564); 
 } else if (s == 9) {
  cm.openNpc (1033105); 
 } else if (s == 10) {
  cm.openNpc (9000008); 
 } else if (s == 11) {
  cm.openShop (3002100); 
 } else if (s == 12) {
  cm.openNpc (9000274); 
 } else if (s == 13) {
  cm.openNpc (9000020);
 } else if (s == 14) {
  cm.openNpc (2460023);
 } else if (s == 15) {
cm.warp (100000000, 0);
 } else if (s == 16) {
  cm.openNpc (1002100);
 } else if (s == 17) {
  cm.openNpc (1012102);
 } else if (s == 18) {
  cm.warp(910160000, 0);
 } else if (s == 19) {
  cm.openNpc (2540000);
 } else if (s == 20) {
  cm.openNpc (2411024);
 } else if (s == 21) {
  cm.openNpc (1401004);
 } else if (s == 22) {
  cm.openNpc (1012006);
 } else if (s == 23) {
  cm.openNpc (9250022);
 } else if (s == 24) {
  cm.openNpc (1052013);
 } else if (s == 25) {
  cm.openNpc (2460022);
 } else if (s == 26) {
  cm.openNpc (1012121);
 } else if (s == 27) {
  cm.openNpc (2040052);
 } else if (s == 28) {
 cm.openNpc (11100);  
 } else if (s == 29) {
 cm.openNpc (1081001);  
 } else if (s == 30) {
  cm.openNpc (9010009); 
} else if (s == 31) {
  cm.openNpc (1012009);  
 } else if (s == 32) {
  cm.openNpc (2010011);
 } else if (s == 33) {
cm.warp(931000500, 0);
 } else if (s == 34) {
  cm.openNpc (2520014); 
 } else if (s == 35) {
  cm.openNpc (2084000); 
 } else if (s == 36) {
  cm.openNpc (2040002);  
 } else if (s == 37) {
  cm.openNpc (12101);
 } else if (s == 38) {
  cm.openNpc (2102002);
 } else if (s == 39) {
  cm.openNpc (1002003);
 } else if (s == 40) {
  cm.openNpc (9010046);
 } else if (s == 41) {
  cm.openNpc (9071003); 
 } else if (s == 42) {
  cm.openNpc (2530009); 
 } else if (s == 43) {
  cm.openNpc (9000172);
} else if (s == 300) {
  cm.openNpc(3000107);
 } else if (s == 301) {
  cm.openNpc(9090008);
 } else if (s == 302) {
cm.warp (180000000, 0);
 } else if (s == 303) {
  cm.openNpc(2470044);
 } else if (s == 304) {
  cm.openNpc(9201022);
 } else if (s == 305) {
  cm.openNpc(9010017);
 } else if (s == 307) {
  cm.openNpc(9010044);
 } else if (s == 308) {
  cm.openNpc(1012114);
 } else if (s == 309) {
  cm.openNpc(9000143);
 } else if (s == 310) {
  cm.openNpc(1402301);
 } else if (s == 311) {
  cm.openNpc(9900001);
        }
    }
}
