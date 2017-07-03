


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	자폭 에 의해 만들어 졌습니다.

	엔피시아이디 : 1012115

	엔피시 이름 : 헤네시스 풀숲

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 북쪽언덕 (100010000)

	엔피시 설명 : MISSINGNO


*/

/*var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendOk("Alive PureMS");
        cm.dispose();
        return;
    }
}*/
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
        컨텐츠 셀렉션은 200부터 299까지
        운영자 설렉션은 300부터 399까지
        */
        var choose = "#l#k#r#d!#b#eFoxonline#k#n#r#eWelcome to ohsingeol#n#k! \r\n#n";
        choose += "#e#d#L0#Cache stores#k";
        choose += "#e#d#L1#Fafnir#k";
        choose += "#e#d#L2#Empress shops#n#k";
        choose += "#e#d#L3#Sponsorship shop#k\r\n";
        choose += "#e#d#L4#PR shop#n#k";
        choose += "#e#d#L5#All the shops";
        choose += "#e#r#L6#Initial funding#k";
        choose += "#e#r#L7#Coin Exchange\r\n";
        choose += "#e#d#L8#Riding Shop";
        choose += "#e#b#L104#Rare Cache#k";
        choose += "#e#d#L29#To Auction#k";
        choose += "#e#b#L31#Coin Shop#k\r\n";
        choose += "#e#r#L32#Jewel Store";
        choose += "#e#r#L35#Royal Style#k";
        choose += "#e#r#L34#Drop area#k";
        choose += "#e#r#L36#Breaking boss#k";
        choose += "\r\n\r\n\r\n#l#k#r#d!\r\n#n";
        choose += "#e#d#L11#Moving#n#k";
        choose += "#e#d#L18#Shuttle monpa";
        choose += "#e#d#L130#The former";
        choose += "#e#d#L16#Fishing\r\n";
        choose += "#e#d#L107#Bis Rue";
        choose += "#e#d#L17#Guild Business";
        choose += "#e#d#L30#Pokeop hunting#k";
        choose += "#e#d#L85#Mini Games#k\r\n";
        choose += "#e#d#L103#Forest of Patience#k";
        choose += "#e#d#L106#Jakbang, nolbang#k";
        choose += "#e#d#L100#hide and seek#k";
        choose += "#e#d#L116#Jaguar map#k";
         choose += "\r\n\r\n\r\n#l#k#r#d!\r\n#n";
        choose += "#e#d#L9#Skills learned#n#k";
        choose += "#e#r#L15#To byeonsaeng#k";
        choose += "#e#d#L112#Hyeonjeop error#k";
        choose += "#e#d#L20#Warehouse being";
        choose += "#e\r\n#d#L81#Forming Hair#n#k";
        choose += "#e#d#L84#Sponsorship Application";
        choose += "#e#d#L82#Dolrimpan shop";
        choose += "#e#d#L110#Peuljeom Learning";
        choose += "#e\r\n#d#L89#Server Ranking#n";
        choose += "#e#r#L86#To reincarnation";
        choose += "#e#d#L117#Initialization Options";
        choose += "#e#d#L90#Discard system\r\n";
        choose += "#e#d#L83#To strengthen#k";
        choose += "#e#b#L200#Skin Damage#K";
        choose += "#e#r#L201#Friends extensions#k";
        choose += "#e#d#L202#Remove bulb#K\r\n";
        choose += "#e#d#L203#Gift#K";
        choose += "#e#d#L204#Powerball Lottery#K";
        choose += "#e#d#L205#Cache charge#K";
        choose += "#e#d#L206#Accessories for weapon#K";
        if (cm.getPlayer().hasGmLevel(6)){
        choose += "\r\n#l#k\r\n\r\n#d#eIf Em City's system #n #r(Only the operator menu that appears)#k\r\n";
        choose += "#e#d#L300#Sponsored by fabricated#k";
        choose += "#e#g#L301#Making recovery#k";
        choose += "#e#r#L302#Operators Map#k";
        choose += "#e#b#L303#User information#k\r\n";
        choose += "#e#d#L304#Nick change#k";
        choose += "#e#g#L305#Total Thanks#k";
        choose += "#e#r#L306#Off-duty changes#K";
  }
        cm.sendSimple(choose);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.enterCS();
 } else if (s == 1) {
  cm.openShop (12345);
 } else if (s == 2) {
  cm.openNpc (2140000);
 } else if (s == 3) {
  cm.openNpc (9000206);
 } else if (s == 4) {
  cm.openNpc (2006); 
 } else if (s == 5) {
  cm.openNpc (1013201);
 } else if (s == 6) {
  cm.openNpc (1032002);
 } else if (s == 7) {
  cm.openShop (80804);
 } else if (s == 8) {
  cm.openNpc (1032108);
 } else if (s == 9) {
  cm.openNpc (9100001); 
 } else if (s == 10) {
  cm.openNpc (1072002); 
 } else if (s == 11) {
  cm.openNpc (2001); 
 } else if (s == 12) {
  cm.openNpc (1012102); 
 } else if (s == 13) {
cm.warp (262000300, 0); 
 } else if (s == 14) {
  cm.openNpc (9000131);
 } else if (s == 15) {
  cm.openNpc (9073008);
 } else if (s == 16) {
  cm.openNpc (1013102);
 } else if (s == 17) {
  cm.openNpc (2010011);
 } else if (s == 18) {
  cm.openNpc (1013203);
 } else if (s == 20) {
  cm.openNpc (1033230);
 } else if (s == 21) {
  cm.openNpc (1033240);
 } else if (s == 22) {
cm.warp (271000000, 0);
 } else if (s == 23) {
cm.warp (270000000, 0);
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
  cm.openNpc (1043004);  
 } else if (s == 30) {
  cm.openNpc (9010022);
 } else if (s == 31) {
  cm.openNpc (1052133);
 } else if (s == 32) {
  cm.openNpc (1056000);
 } else if (s == 34) {
  cm.openNpc(1064010);
 } else if (s == 35) {
  cm.openNpc(2159415);                 
 } else if (s == 36) {
  cm.openNpc (1032101);
 } else if (s == 80) {
  cm.openNpc (1104313); 
 } else if (s == 81) {
  cm.openNpc (1064009); 
 } else if (s == 82) {
  cm.openNpc (1082000); 
 } else if (s == 83) {
  cm.openNpc (1082003);  
 } else if (s == 84) {
  cm.openNpc (9040011);
 } else if (s == 85) {
  cm.openNpc (1102006);
 } else if (s == 86) {
  cm.openNpc (1102202);
 } else if (s == 87) {
  cm.openNpc (3001108);
 } else if (s == 89) {
  cm.openNpc (1104002); 
 } else if (s == 90) {
  cm.openNpc (1104001); 
 } else if (s == 92) {
  cm.openNpc (1104314);
 } else if (s == 93) {
  cm.openNpc (9050009);
 } else if (s == 94) {
  cm.openNpc (1105006);
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
  cm.openNpc (1105013);
 } else if (s == 106) {
cm.warp (101000100, 0);
 } else if (s == 107) {
  cm.warp(105200000, 0);
 } else if (s == 108) {
cm.warp (910028300, 0);
 } else if (s == 109) {
  cm.openNpc (1106007);
 } else if (s == 110) {
  cm.openNpc (1011001);
 } else if (s == 111) {
  cm.openNpc (1011000);
 } else if (s == 112) {
  cm.openNpc (2040029);
 } else if (s == 113) {
  cm.openNpc (2142001);
 } else if (s == 114) {
  cm.openNpc (1032112);
 } else if (s == 115) {
  cm.openNpc (2041022);
 } else if (s == 116) {
cm.warp(931000500, 0);
 } else if (s == 117) {
  cm.openNpc (2084000);
 } else if (s == 118) {
  cm.openNpc (1032203);
 } else if (s == 130) {
  cm.openNpc (2131002);
 } else if (s == 200) {
  cm.openShop(80810);
 } else if (s == 201) {
  cm.openNpc(1002003);
 } else if (s == 202) {
  cm.openNpc(12101);
 } else if (s == 203) {
  cm.openNpc(9310001);
 } else if (s == 204) {
  cm.openNpc(1032202);
} else if (s == 205) {
  cm.openNpc(9010008);
} else if (s == 206) {
  cm.openNpc(9072101);
 } else if (s == 300) {
  cm.openNpc(3000107);
 } else if (s == 301) {
  cm.openNpc(9090008);
 } else if (s == 302) {
cm.warp (180000000, 0);
 } else if (s == 303) {
  cm.openNpc(1033204);
 } else if (s == 304) {
  cm.openNpc(9201022);
 } else if (s == 305) {
  cm.openNpc(9010017);
 } else if (s == 306) {
  cm.openNpc(9250009);

        }
    }
}

