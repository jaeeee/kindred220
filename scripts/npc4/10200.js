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
    cm.sendSimple ("#b안녕하세요. 전 모든 아이템을 다파는 #e헬레나#n라고 합니다.\r\n골라보세요!!#k" +"#k\r\n#L80#마법사 상점" +"#k\r\n#L81#도적 상점" +"#k\r\n#L82#전사 상점" +"#k\r\n#L83#궁수 상점" +"#k\r\n#L84#해적 상점" +"#k\r\n#L85#공용 상점" +"#k\r\n#L87#캐시 상점" +"#k\r\n#L86#기타 상점");
      } else if (selection == 80) {
               cm.sendSimple (" 고르세요. #e#d" +
            "#k\r\n#L0##r마법사 신발" +
            "#k\r\n#L1##r마법사 상+하의" +
            "#k\r\n#L2##r마법사 장갑" +
            "#k\r\n#L3##r마법사 모자" +
            "#k\r\n#L4##r마법사 방패" +
            "#k\r\n#L5##r마법사, 공용 완드" +
            "#k\r\n#L6##r마법사, 공용 스태프");
      } else if (selection == 81) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L7##b도적 신발" +
            "#k\r\n#L8##b도적 하의" +
            "#k\r\n#L9##b도적 상의" +
            "#k\r\n#L10##b도적 상+하의" +
            "#l\r\n#L11##b도적 장갑" +
            "#l\r\n#L12##b도적 모자" +
            "#l\r\n#L13##b도적 방패" +
            "#l\r\n#L14##b도적, 공용 칼" +
            "#k\r\n#L15##b도적, 공용 아대" +
            "#k\r\n#L16##b도적 표창");
      } else if (selection == 82) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L17##d전사 신발" +
            "#k\r\n#L18##d전사 하의" +
            "#k\r\n#L19##d전사 상의" +
            "#k\r\n#L20##d전사 상+하의" +
            "#k\r\n#L21##d전사 장갑" +
            "#k\r\n#L22##d전사 모자" +
            "#k\r\n#L23##d전사 방패" +
            "#k\r\n#L24##d전사, 공용 한손도끼" +
            "#k\r\n#L25##d전사, 공용 두손도끼" +
            "#k\r\n#L26##d전사, 공용 한손bWs(?)" +
            "#k\r\n#L27##d전사, 공용 두손bWs(?)" +
            "#k\r\n#L28##d전사, 공용 한손칼" +
            "#k\r\n#L29##d전사, 공용 두손칼" +
            "#k\r\n#L30##d전사, 공용 창" +
            "#k\r\n#L31##d전사, 공용 폴암");
      } else if (selection == 83) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L32##g궁수 신발" +
            "#k\r\n#L33##g궁수 상+하의" +
            "#k\r\n#L34##g궁수 장갑" +
            "#k\r\n#L35##g궁수 모자" +
            "#k\r\n#L36##g궁수, 공용 활" +
            "#k\r\n#L37##g궁수, 공용 석궁" +
            "#k\r\n#L38##g궁수 화살");
      } else if (selection == 84) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L76##b해적 너클" +
            "#k\r\n#L71##b해적 총" +
            "#k\r\n#L72##b해적 불릿" +
            "#k\r\n#L73##b해적 모자" +
            "#k\r\n#L74##b해적 상+하의" +
            "#k\r\n#L101##b해적 장갑" +
            "#k\r\n#L75##b해적 신발");
      } else if (selection == 85) {
               cm.sendSimple ("고르세요. #e#d" +
            "\r\n#L105#공용 무기" +
            "\r\n#L104#공용 하의" +
            "\r\n#L102#공용 망토" +
            "#k\r\n#L39#메이플 무기" +
            "\r\n#L40#귀걸이" +
            "\r\n#L41#목걸이, 얼굴 악세서리" +
            "\r\n#L42#망토" +
            "\r\n#L43#공용 신발" +
            "\r\n#L44#공용 모자" +
            "\r\n#L45#공용 장갑" +
            "\r\n#L46#공용 상+하의" +
            "\r\n#L47#공용 방패" +
            "\r\n#L48#레벨 제한 없는 무기");
      } else if (selection == 86) {
               cm.sendSimple ("고르세요. #e#d" +
            "\r\n#L94#주문서" +
            "\r\n#L50#확성기, 도박티켓, 바위석, 라이딩" +
            "\r\n#L51#버프, 포션" +
            "\r\n#L52#보스 아이템" +
            "\r\n#L57#의자" +
            "\r\n#L53#마운트");
      } else if (selection == 87) {
               cm.sendSimple ("고르세요. #e#d" +
            "\r\n#L55#펫" +
            "\r\n#L56#펫 장비, 먹이, 주문서, 책" +
            "\r\n#L100#캐시 모자" +
            "\r\n#L95#캐시 상의" +
            "\r\n#L96#캐시 하의" +
            "\r\n#L97#캐시 상+하의" +
            "\r\n#L99#캐시 무기" +
            "\r\n#L69#캐시 표창" +
            "\r\n#L60#캐시 장갑" +
            "\r\n#L98#캐시 신발" +
            "\r\n#L59#캐시 망토" +
            "\r\n#L61#캐시 방패" +
            "\r\n#L62#반지" +
            "\r\n#L64#이모션" +
            "\r\n#L65#캐시 귀걸이" +
            "\r\n#L66#눈 악세서리" +
            "\r\n#L67#모든 악세서리" +
            "\r\n#L68#이펙트" +
            "\r\n#L70#메신저" +
            "\r\n#L103##r캐시 교환");
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
        cm.openShop (100320);
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
        cm.openShop (10062);
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
      } else if (selection == 75) {
        cm.openShop (10093);
        cm.dispose();
      } else if (selection == 76) {
        cm.openShop (10087);
        cm.dispose();
      } else if (selection == 103) {
                cm.sendSimple ("얼마나 해드릴까요?#e#d" +
                 "#k\r\n#L89##r1만 캐시당 20만 메소" +
                 "#k\r\n#L90##r2만 캐시당 40만 메소" +
                 "#k\r\n#L91##r3만 캐시당 60만 메소" +
                 "#k\r\n#L92##r4만 캐시당 80만 메소" +
                 "#k\r\n#L93##r5만 캐시당 100만 메소");
      } else if (selection == 89) {
        if (cm.getMeso < 200000) {
                   cm.sendOk ("#r메소#k가 충분히 있는지 확인해주세요.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-200000);
                   cm.modifyNX(10000,4);
                   cm.dispose();
                   }
      } else if (selection == 90) {
        if (cm.getMeso < 400000) {
                   cm.sendOk ("#r메소#k가 충분히 있는지 확인해주세요.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-400000);
                   cm.modifyNX(20000,4);
                   cm.dispose();
                   }
      } else if (selection == 91) {
        if (cm.getMeso < 600000) {
                   cm.sendOk ("#r메소#k가 충분히 있는지 확인해주세요.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-600000);
                   cm.modifyNX(30000,4);
                   cm.dispose();
                   }
      } else if (selection == 92) {
        if (cm.getMeso < 800000) {
                   cm.sendOk ("#r메소#k가 충분히 있는지 확인해주세요.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-800000);
                   cm.modifyNX(40000,4);
                   cm.dispose();
                   }
      } else if (selection == 93) {
        if (cm.getMeso < 1000000) {
                   cm.sendOk ("#r메소#k가 충분히 있는지 확인해주세요.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-1000000);
                   cm.modifyNX(50000,4);
                   cm.dispose();
                   }
            }
      }
}