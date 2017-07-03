var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
    cm.sendSimple ("#b안녕하세요?\r\n저는 운영자 전용 모든템을팔고있습니다.\r\n" +"#k\r\n#L80#마법사(루미너스) 상점" +"#k\r\n#L81#도적(팬텀) 상점" +"#k\r\n#L82#전사(카이저) 상점" +"#k\r\n#L83#궁수(메르세데스) 상점" +"#k\r\n#L84#해적(캐논슈터,엔젤릭버스터) 상점" +"#k\r\n#L85#공용 상점" + "#k\r\n#L86#기타 상점" + "#k\r\n#L87#주문서 상점#k");
      } else if (selection == 80) {
               cm.sendSimple (" 고르세요. #e#d" +
            "#k\r\n#L0##r마법사 신발" +
            "#k\r\n#L123##r마법사 상의" +
            "#k\r\n#L124##r마법사 하의" +
            "#k\r\n#L1##r마법사 전신" +
            "#k\r\n#L2##r마법사 장갑" +
            "#k\r\n#L3##r마법사 모자" +
            "#k\r\n#L153##r마법사 망토" +
            "#k\r\n#L4##r마법사 방패" +
            "#k\r\n#L125##r마법사 드래곤장비" +
            "#k\r\n#L5##r마법사 완드" +
            "#k\r\n#L6##r마법사 스태프" +
            "#k\r\n#L284##r루미너스 샤이닝로드");
      } else if (selection == 81) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L7##b도적 신발" +
            "#k\r\n#L8##b도적 상의" +
            "#k\r\n#L9##b도적 하의" +
            "#k\r\n#L10##b도적 전신" +
            "#l\r\n#L11##b도적 장갑" +
            "#l\r\n#L12##b도적 모자" +
            "#k\r\n#L154##b도적 망토" +
            "#l\r\n#L13##b도적 방패" +
            "#l\r\n#L126##b도적 귀고리,얼굴장식" +
            "#l\r\n#L14##b도적 단검" +
            "#k\r\n#L15##b도적 아대" +
            "#l\r\n#L106##b듀얼블레이드 블레이드" +
            "#l\r\n#L109##b팬텀 케인" +
            "#l\r\n#L152##b팬텀 카드" +
            "#k\r\n#L16##b도적 표창");
      } else if (selection == 82) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L17##d전사 신발" +
            "#k\r\n#L18##d전사 하의" +
            "#k\r\n#L19##d전사 상의" +
            "#k\r\n#L20##d전사 전신" +
            "#k\r\n#L21##d전사 장갑" +
            "#k\r\n#L22##d전사 모자" +
            "#k\r\n#L155##d전사 망토" +
            "#k\r\n#L23##d전사 방패" +
            "#k\r\n#L24##d전사 한손도끼" +
            "#k\r\n#L25##d전사 두손도끼" +
            "#k\r\n#L26##d전사 한손둔기" +
            "#k\r\n#L27##d전사 두손둔기" +
            "#k\r\n#L28##d전사 한손검" +
            "#k\r\n#L29##d전사 두손검" +
            "#k\r\n#L30##d전사 창" +
            "#k\r\n#L31##d전사 폴암");
      } else if (selection == 83) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L32##g궁수 신발" +
            "#k\r\n#L33##g궁수 전신" +
            "#k\r\n#L34##g궁수 장갑" +
            "#k\r\n#L35##g궁수 모자" +
            "#k\r\n#L121##g궁수 상의" +
            "#k\r\n#L122##g궁수 하의" +
            "#k\r\n#L156##g궁수 망토" +
            "#k\r\n#L36##g궁수 활" +
            "#k\r\n#L37##g궁수 석궁" +
            "#k\r\n#L108##g메르세데스 듀얼궁" +
            "#k\r\n#L110##g메르세데스 마법화살" +
            "#k\r\n#L38##g궁수 화살");
      } else if (selection == 84) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L76##b해적 너클" +
            "#k\r\n#L71##b해적 총" +
            "#k\r\n#L107##b캐논슈터 핸드캐논" +
            "#k\r\n#L72##b해적 불릿" +
            "#k\r\n#L73##b해적 모자" +
            "#k\r\n#L149##b해적 망토" +
            "#k\r\n#L74##b해적 전신" +
            "#k\r\n#L101##b해적 장갑" +
            "#k\r\n#L75##b해적 신발" +
	"#k\r\n#L375##b엔젤릭버스터 소울슈터");
      } else if (selection == 85) {
               cm.sendSimple ("고르세요. #e#d" +
            "\r\n#L44#공용 모자" +
            "\r\n#L44#공용 모자" +
            "\r\n#L45#공용 장갑" +
            "\r\n#L43#공용 신발" +
            "\r\n#L46#공용 전신" +
            "\r\n#L111#공용 상의" +
            "\r\n#L104#공용 하의" +
            "\r\n#L47#공용 방패" +
            "\r\n#L112#공용 귀고리" +
            "\r\n#L102#공용 망토" +
            "\r\n#L113#훈장" +
            "\r\n#L114#눈장식" +
            "\r\n#L115#얼굴장식" +
            "\r\n#L116#팬던트" +
            "\r\n#L117#벨트" +
            "\r\n#L118#반지" +
            "\r\n#L119#어깨장식" +
            "\r\n#L120#포켓");
      } else if (selection == 86) {
               cm.sendSimple ("고르세요. #e#d" +
            "\r\n#L145#스킬북" +
            "\r\n#L146#설치, 의자" +
            "\r\n#L147#라이딩" +
            "\r\n#L157#보스 소환템" +
            "\r\n#L148#소비1");
      } else if (selection == 87) {
               cm.sendSimple ("고르세요. #e#d" +
            "\r\n#L127#검,도끼,둔기" +
            "\r\n#L128#창,폴암,활,석궁,완드,스태프" +
            "\r\n#L129#단검,아대,총,너클" +
            "\r\n#L130#블레이드,핸드캐논,듀얼궁,케인" +
            "\r\n#L131#투구" +
            "\r\n#L132#장갑" +
            "\r\n#L133#신발" +
            "\r\n#L134#전신" +
            "\r\n#L135#상의" +
            "\r\n#L136#하의" +
            "\r\n#L137#방패" +
            "\r\n#L138#귀장식" +
            "\r\n#L139#망토" +
            "\r\n#L140#벨트" +
            "\r\n#L141#반지" +
            "\r\n#L142#펫장비,펫먹이" +
            "\r\n#L143#연성서" +
            "\r\n#L144#기타 주문서");
      } else if (selection == 105) {
        cm.openShop (10095);
        cm.dispose();
      } else if (selection == 104) {
        cm.openShop (10094);
        cm.dispose();
      } else if (selection == 102) {
        cm.openShop (10086);
        cm.dispose();
      } else if (selection == 101) {
        cm.openShop (10092);
        cm.dispose();
      } else if (selection == 100) {
        cm.openShop (10081);
        cm.dispose();
      } else if (selection == 99) {
        cm.openShop (10080);
        cm.dispose();
      } else if (selection == 98) {
        cm.openShop (10083);
        cm.dispose();
      } else if (selection == 97) {
        cm.openShop (10082);
        cm.dispose();
      } else if (selection == 96) {
        cm.openShop (10085);
        cm.dispose();
      } else if (selection == 95) {
        cm.openShop (10084);
        cm.dispose();
      } else if (selection == 94) {
        cm.openShop (7777);
        cm.dispose();
      } else if (selection == 0) {
        cm.openShop (10000);
        cm.dispose();
      } else if (selection == 1) {
        cm.openShop (10001);
        cm.dispose();
      } else if (selection == 2) {
        cm.openShop (10002);
        cm.dispose();
      } else if (selection == 3) {
        cm.openShop (10003);
        cm.dispose();
      } else if (selection == 4) {
        cm.openShop (10004);
        cm.dispose();
      } else if (selection == 5) {
        cm.openShop (10005);
        cm.dispose();
      } else if (selection == 6) {
        cm.openShop (10006);
        cm.dispose();
      } else if (selection == 7) {
        cm.openShop (10007);
        cm.dispose();
      } else if (selection == 8) {
        cm.openShop (10008);
        cm.dispose();
      } else if (selection == 9) {
        cm.openShop (10009);
        cm.dispose();
      } else if (selection == 10) {
        cm.openShop (10010);
        cm.dispose();
      } else if (selection == 11) {
        cm.openShop (10011);
        cm.dispose();
      } else if (selection == 12) {
        cm.openShop (10012);
        cm.dispose();
      } else if (selection == 13) {
        cm.openShop (10013);
        cm.dispose();
      } else if (selection == 14) {
        cm.openShop (10014);
        cm.dispose();
      } else if (selection == 15) {
        cm.openShop (10015);
        cm.dispose();
      } else if (selection == 16) {
        cm.openShop (10038);
        cm.dispose();
      } else if (selection == 17) {
        cm.openShop (10016);
        cm.dispose();
      } else if (selection == 18) {
        cm.openShop (10017);
        cm.dispose();
      } else if (selection == 19) {
        cm.openShop (10018);
        cm.dispose();
      } else if (selection == 20) {
        cm.openShop (10019);
        cm.dispose();
      } else if (selection == 21) {
        cm.openShop (10020);
        cm.dispose();
      } else if (selection == 22) {
        cm.openShop (10021);
        cm.dispose();
      } else if (selection == 23) {
        cm.openShop (10022);
        cm.dispose();
      } else if (selection == 24) {
        cm.openShop (10023);
        cm.dispose();
      } else if (selection == 25) {
        cm.openShop (10024);
        cm.dispose();
      } else if (selection == 26) {
        cm.openShop (10025);
        cm.dispose();
      } else if (selection == 27) {
        cm.openShop (10026);
        cm.dispose();
      } else if (selection == 28) {
        cm.openShop (10027);
        cm.dispose();
      } else if (selection == 29) {
        cm.openShop (10028);
        cm.dispose();
      } else if (selection == 30) {
        cm.openShop (10029);
        cm.dispose();
      } else if (selection == 31) {
        cm.openShop (10030);
        cm.dispose();
      } else if (selection == 32) {
        cm.openShop (10031);
        cm.dispose();
      } else if (selection == 33) {
        cm.openShop (10032);
        cm.dispose();
      } else if (selection == 34) {
        cm.openShop (10033);
        cm.dispose();
      } else if (selection == 35) {
        cm.openShop (10034);
        cm.dispose();
      } else if (selection == 36) {
        cm.openShop (10035);
        cm.dispose();
      } else if (selection == 37) {
        cm.openShop (10036);
        cm.dispose();
      } else if (selection == 38) {
        cm.openShop (10037);
        cm.dispose();
      } else if (selection == 39) {
        cm.openShop (10051);
        cm.dispose();
      } else if (selection == 40) {
        cm.openShop (10039);
        cm.dispose();
      } else if (selection == 41) {
        cm.openShop (10040);
        cm.dispose();
      } else if (selection == 42) {
        cm.openShop (10041);
        cm.dispose();
      } else if (selection == 43) {
        cm.openShop (10042);
        cm.dispose();
      } else if (selection == 44) {
        cm.openShop (10043);
        cm.dispose();
      } else if (selection == 45) {
        cm.openShop (10044);
        cm.dispose();
      } else if (selection == 46) {
        cm.openShop (10045);
        cm.dispose();
      } else if (selection == 47) {
        cm.openShop (10046);
        cm.dispose();
      } else if (selection == 48) {
        cm.openShop (10047);
        cm.dispose();
      } else if (selection == 49) {
        cm.openShop (10048);
        cm.dispose();
      } else if (selection == 50) {
        cm.openShop (10048);
        cm.dispose();
      } else if (selection == 51) {
        cm.openShop (10049);
        cm.dispose();
      } else if (selection == 52) {
        cm.openShop (10050);
        cm.dispose();
      } else if (selection == 53) {
        cm.openShop (10052);
        cm.dispose();
      } else if (selection == 54) {
        cm.openShop (10053);
        cm.dispose();
      } else if (selection == 55) {
        cm.openShop (10054);
        cm.dispose();
      } else if (selection == 56) {
        cm.openShop (10055);
        cm.dispose();
      } else if (selection == 57) {
        cm.openShop (10056);
        cm.dispose();
      } else if (selection == 58) {
        cm.openShop (10057);
        cm.dispose();
      } else if (selection == 59) {
        cm.openShop (10058);
        cm.dispose();
      } else if (selection == 60) {
        cm.openShop (10059);
        cm.dispose();
      } else if (selection == 61) {
        cm.openShop (10060);
        cm.dispose();
      } else if (selection == 62) {
        cm.openShop (10061);
        cm.dispose();
      } else if (selection == 63) {
        cm.openShop (10513);
        cm.dispose();
      } else if (selection == 64) {
        cm.openShop (10063);
        cm.dispose();
      } else if (selection == 65) {
        cm.openShop (10064);
        cm.dispose();
      } else if (selection == 66) {
        cm.openShop (10065);
        cm.dispose();
      } else if (selection == 67) {
        cm.openShop (10066);
        cm.dispose();
      } else if (selection == 68) {
        cm.openShop (10067);
        cm.dispose();
      } else if (selection == 69) {
        cm.openShop (10068);
        cm.dispose();
      } else if (selection == 70) {
        cm.openShop (10069);
        cm.dispose();
      } else if (selection == 71) {
        cm.openShop (10088);
        cm.dispose();
      } else if (selection == 72) {
        cm.openShop (10089);
        cm.dispose();
      } else if (selection == 73) {
        cm.openShop (10090);
        cm.dispose();
      } else if (selection == 74) {
        cm.openShop (10091);
        cm.dispose();
      } else if (selection == 106) {
        cm.openShop (10106);
        cm.dispose();
      } else if (selection == 107) {
        cm.openShop (10107);
        cm.dispose();
      } else if (selection == 108) {
        cm.openShop (10108);
        cm.dispose();
      } else if (selection == 109) {
        cm.openShop (10109);
        cm.dispose();
      } else if (selection == 110) {
        cm.openShop (10110);
        cm.dispose();
      } else if (selection == 111) {
        cm.openShop (10111);
        cm.dispose();
      } else if (selection == 112) {
        cm.openShop (10112);
        cm.dispose();
      } else if (selection == 113) {
        cm.openShop (10113);
        cm.dispose();
      } else if (selection == 142) {
        cm.openShop (10142);
        cm.dispose();
      } else if (selection == 143) {
        cm.openShop (10143);
        cm.dispose();
      } else if (selection == 144) {
        cm.openShop (10144);
        cm.dispose();
      } else if (selection == 145) {
        cm.openShop (10145);
        cm.dispose();
      } else if (selection == 146) {
        cm.openShop (10146);
        cm.dispose();
      } else if (selection == 147) {
        cm.openShop (10147);
        cm.dispose();
      } else if (selection == 148) {
        cm.openShop (10148);
        cm.dispose();
      } else if (selection == 150) {
        cm.openShop (10150);
        cm.dispose();
      } else if (selection == 151) {
        cm.openShop (10151);
        cm.dispose();
      } else if (selection == 114) {
        cm.openShop (10114);
        cm.dispose();
      } else if (selection == 115) {
        cm.openShop (10115);
        cm.dispose();
      } else if (selection == 116) {
        cm.openShop (10116);
        cm.dispose();
      } else if (selection == 117) {
        cm.openShop (10117);
        cm.dispose();
      } else if (selection == 118) {
        cm.openShop (10118);
        cm.dispose();
      } else if (selection == 119) {
        cm.openShop (10119);
        cm.dispose();
      } else if (selection == 120) {
        cm.openShop (10120);
        cm.dispose();
      } else if (selection == 121) {
        cm.openShop (10121);
        cm.dispose();
      } else if (selection == 122) {
        cm.openShop (10122);
        cm.dispose();
      } else if (selection == 123) {
        cm.openShop (10123);
        cm.dispose();
      } else if (selection == 124) {
        cm.openShop (10124);
        cm.dispose();
      } else if (selection == 125) {
        cm.openShop (10125);
        cm.dispose();
      } else if (selection == 126) {
        cm.openShop (10126);
        cm.dispose();
      } else if (selection == 127) {
        cm.openShop (10127);
        cm.dispose();
      } else if (selection == 128) {
        cm.openShop (10128);
        cm.dispose();
      } else if (selection == 129) {
        cm.openShop (10129);
        cm.dispose();
      } else if (selection == 130) {
        cm.openShop (10130);
        cm.dispose();
      } else if (selection == 131) {
        cm.openShop (10131);
        cm.dispose();
      } else if (selection == 132) {
        cm.openShop (10132);
        cm.dispose();
      } else if (selection == 133) {
        cm.openShop (10133);
        cm.dispose();
      } else if (selection == 134) {
        cm.openShop (10134);
        cm.dispose();
      } else if (selection == 135) {
        cm.openShop (10135);
        cm.dispose();
      } else if (selection == 136) {
        cm.openShop (10136);
        cm.dispose();
      } else if (selection == 137) {
        cm.openShop (10137);
        cm.dispose();
      } else if (selection == 138) {
        cm.openShop (10138);
        cm.dispose();
      } else if (selection == 139) {
        cm.openShop (10139);
        cm.dispose();
      } else if (selection == 140) {
        cm.openShop (10140);
        cm.dispose();
      } else if (selection == 141) {
        cm.openShop (10141);
        cm.dispose();
      } else if (selection == 75) {
        cm.openShop (10093);
        cm.dispose();
      } else if (selection == 76) {
        cm.openShop (10087);
        cm.dispose();
      } else if (selection == 152) {
        cm.openShop (2003);
        cm.dispose();
      } else if (selection == 153) {
        cm.openShop (2001);
        cm.dispose();
      } else if (selection == 154) {
        cm.openShop (2002);
        cm.dispose();
      } else if (selection == 155) {
        cm.openShop (2004);
        cm.dispose();
      } else if (selection == 156) {
        cm.openShop (2005);
        cm.dispose();
      } else if (selection == 149) {
        cm.openShop (2006);
        cm.dispose();
      } else if (selection == 157) {
        cm.openShop (2007);
        cm.dispose();
      } else if (selection == 284) {
        cm.openShop (2008);
        cm.dispose();
      } else if (selection == 375) {
        cm.openShop (2010);
        cm.dispose();
      	    } 
            }
      }