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
    cm.sendSimple ("#b�ȳ��ϼ���. �� ��� �������� ���Ĵ� #e�ﷹ��#n��� �մϴ�.\r\n��󺸼���!!#k" +"#k\r\n#L80#������ ����" +"#k\r\n#L81#���� ����" +"#k\r\n#L82#���� ����" +"#k\r\n#L83#�ü� ����" +"#k\r\n#L84#���� ����" +"#k\r\n#L85#���� ����" +"#k\r\n#L87#ĳ�� ����" +"#k\r\n#L86#��Ÿ ����");
      } else if (selection == 80) {
               cm.sendSimple (" ������. #e#d" +
            "#k\r\n#L0##r������ �Ź�" +
            "#k\r\n#L1##r������ ��+����" +
            "#k\r\n#L2##r������ �尩" +
            "#k\r\n#L3##r������ ����" +
            "#k\r\n#L4##r������ ����" +
            "#k\r\n#L5##r������, ���� �ϵ�" +
            "#k\r\n#L6##r������, ���� ������");
      } else if (selection == 81) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L7##b���� �Ź�" +
            "#k\r\n#L8##b���� ����" +
            "#k\r\n#L9##b���� ����" +
            "#k\r\n#L10##b���� ��+����" +
            "#l\r\n#L11##b���� �尩" +
            "#l\r\n#L12##b���� ����" +
            "#l\r\n#L13##b���� ����" +
            "#l\r\n#L14##b����, ���� Į" +
            "#k\r\n#L15##b����, ���� �ƴ�" +
            "#k\r\n#L16##b���� ǥâ");
      } else if (selection == 82) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L17##d���� �Ź�" +
            "#k\r\n#L18##d���� ����" +
            "#k\r\n#L19##d���� ����" +
            "#k\r\n#L20##d���� ��+����" +
            "#k\r\n#L21##d���� �尩" +
            "#k\r\n#L22##d���� ����" +
            "#k\r\n#L23##d���� ����" +
            "#k\r\n#L24##d����, ���� �Ѽյ���" +
            "#k\r\n#L25##d����, ���� �μյ���" +
            "#k\r\n#L26##d����, ���� �Ѽ�bWs(?)" +
            "#k\r\n#L27##d����, ���� �μ�bWs(?)" +
            "#k\r\n#L28##d����, ���� �Ѽ�Į" +
            "#k\r\n#L29##d����, ���� �μ�Į" +
            "#k\r\n#L30##d����, ���� â" +
            "#k\r\n#L31##d����, ���� ����");
      } else if (selection == 83) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L32##g�ü� �Ź�" +
            "#k\r\n#L33##g�ü� ��+����" +
            "#k\r\n#L34##g�ü� �尩" +
            "#k\r\n#L35##g�ü� ����" +
            "#k\r\n#L36##g�ü�, ���� Ȱ" +
            "#k\r\n#L37##g�ü�, ���� ����" +
            "#k\r\n#L38##g�ü� ȭ��");
      } else if (selection == 84) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L76##b���� ��Ŭ" +
            "#k\r\n#L71##b���� ��" +
            "#k\r\n#L72##b���� �Ҹ�" +
            "#k\r\n#L73##b���� ����" +
            "#k\r\n#L74##b���� ��+����" +
            "#k\r\n#L101##b���� �尩" +
            "#k\r\n#L75##b���� �Ź�");
      } else if (selection == 85) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L105#���� ����" +
            "\r\n#L104#���� ����" +
            "\r\n#L102#���� ����" +
            "#k\r\n#L39#������ ����" +
            "\r\n#L40#�Ͱ���" +
            "\r\n#L41#�����, �� �Ǽ�����" +
            "\r\n#L42#����" +
            "\r\n#L43#���� �Ź�" +
            "\r\n#L44#���� ����" +
            "\r\n#L45#���� �尩" +
            "\r\n#L46#���� ��+����" +
            "\r\n#L47#���� ����" +
            "\r\n#L48#���� ���� ���� ����");
      } else if (selection == 86) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L94#�ֹ���" +
            "\r\n#L50#Ȯ����, ����Ƽ��, ������, ���̵�" +
            "\r\n#L51#����, ����" +
            "\r\n#L52#���� ������" +
            "\r\n#L57#����" +
            "\r\n#L53#����Ʈ");
      } else if (selection == 87) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L55#��" +
            "\r\n#L56#�� ���, ����, �ֹ���, å" +
            "\r\n#L100#ĳ�� ����" +
            "\r\n#L95#ĳ�� ����" +
            "\r\n#L96#ĳ�� ����" +
            "\r\n#L97#ĳ�� ��+����" +
            "\r\n#L99#ĳ�� ����" +
            "\r\n#L69#ĳ�� ǥâ" +
            "\r\n#L60#ĳ�� �尩" +
            "\r\n#L98#ĳ�� �Ź�" +
            "\r\n#L59#ĳ�� ����" +
            "\r\n#L61#ĳ�� ����" +
            "\r\n#L62#����" +
            "\r\n#L64#�̸��" +
            "\r\n#L65#ĳ�� �Ͱ���" +
            "\r\n#L66#�� �Ǽ�����" +
            "\r\n#L67#��� �Ǽ�����" +
            "\r\n#L68#����Ʈ" +
            "\r\n#L70#�޽���" +
            "\r\n#L103##rĳ�� ��ȯ");
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
                cm.sendSimple ("�󸶳� �ص帱���?#e#d" +
                 "#k\r\n#L89##r1�� ĳ�ô� 20�� �޼�" +
                 "#k\r\n#L90##r2�� ĳ�ô� 40�� �޼�" +
                 "#k\r\n#L91##r3�� ĳ�ô� 60�� �޼�" +
                 "#k\r\n#L92##r4�� ĳ�ô� 80�� �޼�" +
                 "#k\r\n#L93##r5�� ĳ�ô� 100�� �޼�");
      } else if (selection == 89) {
        if (cm.getMeso < 200000) {
                   cm.sendOk ("#r�޼�#k�� ����� �ִ��� Ȯ�����ּ���.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-200000);
                   cm.modifyNX(10000,4);
                   cm.dispose();
                   }
      } else if (selection == 90) {
        if (cm.getMeso < 400000) {
                   cm.sendOk ("#r�޼�#k�� ����� �ִ��� Ȯ�����ּ���.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-400000);
                   cm.modifyNX(20000,4);
                   cm.dispose();
                   }
      } else if (selection == 91) {
        if (cm.getMeso < 600000) {
                   cm.sendOk ("#r�޼�#k�� ����� �ִ��� Ȯ�����ּ���.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-600000);
                   cm.modifyNX(30000,4);
                   cm.dispose();
                   }
      } else if (selection == 92) {
        if (cm.getMeso < 800000) {
                   cm.sendOk ("#r�޼�#k�� ����� �ִ��� Ȯ�����ּ���.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-800000);
                   cm.modifyNX(40000,4);
                   cm.dispose();
                   }
      } else if (selection == 93) {
        if (cm.getMeso < 1000000) {
                   cm.sendOk ("#r�޼�#k�� ����� �ִ��� Ȯ�����ּ���.");
                   cm.dispose();
      } else {
                   cm.gainMeso (-1000000);
                   cm.modifyNX(50000,4);
                   cm.dispose();
                   }
            }
      }
}