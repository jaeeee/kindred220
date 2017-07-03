/*

제작자 : ljw5992@naver.com / dbg_yeane@nate.com
기능 수정 : time_amd@nate.com

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
        /*
        상점 셀렉션은 0부터 99까지
        이동 셀렉션은 100부터 199까지
        컨텐츠 셀렉션은 200부터 299까
        운영자 설렉션은 300부터 399까지
        */
       var choose = "#fn나눔고딕 Extrabold##fs18##e#d#k#fn나눔고딕 Extrabold##fs13#\r\n";

choose += "#k#r#n"
choose += "#k#r#n";
        choose += "#d#L1#[어빌리티]#k#n";
        choose += "#d#L5#[라이딩샵]#k";
        choose += "#d#L90#[템버리기]#k";
        choose += "#d#L9#[스킬학습]#k\r\n";
choose += "#k#r#n";
        choose += "#d#L30#[폭업사냥]#k";
        choose += "#d#L17#[길드업무]#k"; 
        choose += "#d#L18#[몬파셔틀]#n#k";
        choose += "#d#L107#[루타비스]#k\r\n";
choose += "#k#r#n";
        choose += "#d#L205#[캐시충전]#k";
        choose += "#d#L201#[성형헤어]#k";
        choose += "#d#L202#[현접오류]#k";
        choose += "#d#L117#[옵초기화]#k\r\n";
choose += "#k#r#n";
        choose += "#d#L89#[서버랭킹]#k";
        choose += "#d#L86#[환생하기]#k";
        choose += "#d#L2#[보조무기]#k";
        choose += "#d#L206#[도박하기]#k\r\n";
choose += "#k#r#n";
        choose += "#d#L84#[후원신청]#k";
        choose += "#d#L103#[인내의숲]#k";
        choose += "#d#L203#[선물하기]#k";
        choose += "#d#L23#[미스틱필드]#k\r\n";
       

        cm.sendSimple(choose);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.enterCS();
 } else if (s == 1) {
  cm.openNpc (9201020);
 } else if (s == 2) {
  cm.openNpc (1012114);
 } else if (s == 3) {
  cm.openNpc (9075307);
 } else if (s == 4) {
  cm.openNpc (2040028); 
 } else if (s == 5) {
  cm.openNpc (1103002);
 } else if (s == 6) {
  cm.openNpc (2001000);
 } else if (s == 7) {
  cm.openShop (102063);
 } else if (s == 30023) {
  cm.openNpc (2192002);
 } else if (s == 9) {
  cm.openNpc (1401000); 
 } else if (s == 10) {
  cm.openNpc (9000008); 
 } else if (s == 11) {
  cm.openNpc (9000019); 
 } else if (s == 12) {
  cm.openNpc (1012102); 
 } else if (s == 13) {
cm.warp (262000300, 0); 
 } else if (s == 14) {
  cm.openNpc (9000131);
 } else if (s == 15) {
  cm.openNpc (9073008);
 } else if (s == 16) {
  cm.openNpc (22000);
 } else if (s == 17) {
  cm.openNpc (2010011);
 } else if (s == 18) {
  cm.openNpc (9071003);
 } else if (s == 20) {
  cm.openNpc (1012009);
 } else if (s == 21) {
  cm.openNpc (1063016);
 } else if (s == 22) {
cm.warp (271000000, 0);
 } else if (s == 23) {
  cm.openNpc (9070010);
 } else if (s == 24) {
  cm.warp(100000001, 0);
 } else if (s == 25) {
cm.warp (910000000, 0);
 } else if (s == 26) {
  cm.openNpc (1063016);
 } else if (s == 27) {
cm.warp (109090000, 0);
 } else if (s == 28) {
cm.warp (910530000, 0);
 } else if (s == 29) {
  cm.openNpc (9072200);  
 } else if (s == 30) {
  cm.openNpc (2144015);
 } else if (s == 31) {
  cm.openNpc (9000158);
 } else if (s == 32) {
  cm.openNpc (2530009);
 } else if (s == 34) {
  cm.openNpc(2101014);
 } else if (s == 35) {
  cm.openNpc(2159415);                 
 } else if (s == 36) {
  cm.openNpc (1032101);
 } else if (s == 80) {
  cm.openNpc (1104313); 
 } else if (s == 81) {
  cm.openNpc (2300000); 
 } else if (s == 82) {
  cm.openNpc (9000155); 
 } else if (s == 83) {
  cm.openNpc (2191005);  
 } else if (s == 84) {
  cm.openNpc (9040011);
 } else if (s == 85) {
  cm.openNpc (1094000);
 } else if (s == 86) {
  cm.openNpc (2040052);
 } else if (s == 87) {
  cm.openNpc (3001108);
 } else if (s == 89) {
  cm.openNpc (2131004); 
 } else if (s == 90) {
  cm.openNpc (1012121); 
 } else if (s == 92) {
  cm.openNpc (9050009);
 } else if (s == 93) {
  cm.openNpc (9050009);
 } else if (s == 94) {
  cm.openNpc (1032201);
 } else if (s == 100) {
cm.warp (109090000, 0);
 } else if (s == 101) {
  cm.openNpc (9000100);
 } else if (s == 102) {
cm.warp (100000002, 0);
 } else if (s == 103) {
  cm.openNpc (1012006);
 } else if (s == 104) {
  cm.openNpc (3001108);
 } else if (s == 105) {
  cm.openNpc (2180000);
 } else if (s == 106) {
cm.warp (101000100, 0);
 } else if (s == 107) {
  cm.warp(105200000, 0);
 } else if (s == 108) {
cm.warp (910028300, 0);
 } else if (s == 109) {
  cm.openNpc (22000);
 } else if (s == 110) {
  cm.openNpc (1012115);
 } else if (s == 111) {
  cm.openNpc (1012107);
 } else if (s == 112) {
  cm.openNpc (2040029);
 } else if (s == 113) {
  cm.openNpc (2142001);
 } else if (s == 114) {
  cm.openNpc (9072200);
 } else if (s == 115) {
  cm.openNpc (2041022);
 } else if (s == 116) {
cm.warp(931000500, 0);
 } else if (s == 117) {
  cm.openNpc (2084000);
 } else if (s == 118) {
  cm.openNpc (9900003);
 } else if (s == 130) {
  cm.openNpc (2131002);
 } else if (s == 200) {
  cm.openShop(102029);
 } else if (s == 201) {
  cm.openNpc(2460022);
 } else if (s == 202) {
  cm.openNpc(2152012);
 } else if (s == 203) {
  cm.openNpc(9310001);
 } else if (s == 204) {
  cm.openNpc(9250022);
} else if (s == 205) {
  cm.openNpc(1032004);
} else if (s == 206) {
  cm.openNpc(1052013);
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
 } else if (s == 306) {
  cm.openNpc(9250009);
 } else if (s == 307) {
  cm.openNpc(9075302);
 } else if (s == 308) {
  cm.openNpc(9072200);
 } else if (s == 309) {
  cm.openNpc(9090102);
 } else if (s == 340) {
  cm.openNpc(2159449);
 } else if (s == 311) {
  cm.openNpc(2134001);
 } else if (s == 321) {
  cm.openNpc(9000218);
 } else if (s == 3001) {
  cm.openNpc(9000160);
 } else if (s == 30021) {
  cm.openNpc(9000019);


        }
    }
}
