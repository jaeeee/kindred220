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
    cm.sendSimple ("#b�ȳ��ϼ���?\r\n���� ��� ���� ��������Ȱ��ֽ��ϴ�.\r\n" +"#k\r\n#L80#������(��̳ʽ�) ����" +"#k\r\n#L81#����(����) ����" +"#k\r\n#L82#����(ī����) ����" +"#k\r\n#L83#�ü�(�޸�������) ����" +"#k\r\n#L84#����(ĳ����,������������) ����" +"#k\r\n#L85#���� ����" + "#k\r\n#L86#��Ÿ ����" + "#k\r\n#L87#�ֹ��� ����#k");
      } else if (selection == 80) {
               cm.sendSimple (" ������. #e#d" +
            "#k\r\n#L0##r������ �Ź�" +
            "#k\r\n#L123##r������ ����" +
            "#k\r\n#L124##r������ ����" +
            "#k\r\n#L1##r������ ����" +
            "#k\r\n#L2##r������ �尩" +
            "#k\r\n#L3##r������ ����" +
            "#k\r\n#L153##r������ ����" +
            "#k\r\n#L4##r������ ����" +
            "#k\r\n#L125##r������ �巡�����" +
            "#k\r\n#L5##r������ �ϵ�" +
            "#k\r\n#L6##r������ ������" +
            "#k\r\n#L284##r��̳ʽ� ���̴׷ε�");
      } else if (selection == 81) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L7##b���� �Ź�" +
            "#k\r\n#L8##b���� ����" +
            "#k\r\n#L9##b���� ����" +
            "#k\r\n#L10##b���� ����" +
            "#l\r\n#L11##b���� �尩" +
            "#l\r\n#L12##b���� ����" +
            "#k\r\n#L154##b���� ����" +
            "#l\r\n#L13##b���� ����" +
            "#l\r\n#L126##b���� �Ͱ�,�����" +
            "#l\r\n#L14##b���� �ܰ�" +
            "#k\r\n#L15##b���� �ƴ�" +
            "#l\r\n#L106##b�����̵� ���̵�" +
            "#l\r\n#L109##b���� ����" +
            "#l\r\n#L152##b���� ī��" +
            "#k\r\n#L16##b���� ǥâ");
      } else if (selection == 82) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L17##d���� �Ź�" +
            "#k\r\n#L18##d���� ����" +
            "#k\r\n#L19##d���� ����" +
            "#k\r\n#L20##d���� ����" +
            "#k\r\n#L21##d���� �尩" +
            "#k\r\n#L22##d���� ����" +
            "#k\r\n#L155##d���� ����" +
            "#k\r\n#L23##d���� ����" +
            "#k\r\n#L24##d���� �Ѽյ���" +
            "#k\r\n#L25##d���� �μյ���" +
            "#k\r\n#L26##d���� �Ѽյб�" +
            "#k\r\n#L27##d���� �μյб�" +
            "#k\r\n#L28##d���� �Ѽհ�" +
            "#k\r\n#L29##d���� �μհ�" +
            "#k\r\n#L30##d���� â" +
            "#k\r\n#L31##d���� ����");
      } else if (selection == 83) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L32##g�ü� �Ź�" +
            "#k\r\n#L33##g�ü� ����" +
            "#k\r\n#L34##g�ü� �尩" +
            "#k\r\n#L35##g�ü� ����" +
            "#k\r\n#L121##g�ü� ����" +
            "#k\r\n#L122##g�ü� ����" +
            "#k\r\n#L156##g�ü� ����" +
            "#k\r\n#L36##g�ü� Ȱ" +
            "#k\r\n#L37##g�ü� ����" +
            "#k\r\n#L108##g�޸������� ����" +
            "#k\r\n#L110##g�޸������� ����ȭ��" +
            "#k\r\n#L38##g�ü� ȭ��");
      } else if (selection == 84) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L76##b���� ��Ŭ" +
            "#k\r\n#L71##b���� ��" +
            "#k\r\n#L107##bĳ���� �ڵ�ĳ��" +
            "#k\r\n#L72##b���� �Ҹ�" +
            "#k\r\n#L73##b���� ����" +
            "#k\r\n#L149##b���� ����" +
            "#k\r\n#L74##b���� ����" +
            "#k\r\n#L101##b���� �尩" +
            "#k\r\n#L75##b���� �Ź�" +
	"#k\r\n#L375##b������������ �ҿｴ��");
      } else if (selection == 85) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L44#���� ����" +
            "\r\n#L44#���� ����" +
            "\r\n#L45#���� �尩" +
            "\r\n#L43#���� �Ź�" +
            "\r\n#L46#���� ����" +
            "\r\n#L111#���� ����" +
            "\r\n#L104#���� ����" +
            "\r\n#L47#���� ����" +
            "\r\n#L112#���� �Ͱ�" +
            "\r\n#L102#���� ����" +
            "\r\n#L113#����" +
            "\r\n#L114#�����" +
            "\r\n#L115#�����" +
            "\r\n#L116#�Ҵ�Ʈ" +
            "\r\n#L117#��Ʈ" +
            "\r\n#L118#����" +
            "\r\n#L119#������" +
            "\r\n#L120#����");
      } else if (selection == 86) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L145#��ų��" +
            "\r\n#L146#��ġ, ����" +
            "\r\n#L147#���̵�" +
            "\r\n#L157#���� ��ȯ��" +
            "\r\n#L148#�Һ�1");
      } else if (selection == 87) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L127#��,����,�б�" +
            "\r\n#L128#â,����,Ȱ,����,�ϵ�,������" +
            "\r\n#L129#�ܰ�,�ƴ�,��,��Ŭ" +
            "\r\n#L130#���̵�,�ڵ�ĳ��,����,����" +
            "\r\n#L131#����" +
            "\r\n#L132#�尩" +
            "\r\n#L133#�Ź�" +
            "\r\n#L134#����" +
            "\r\n#L135#����" +
            "\r\n#L136#����" +
            "\r\n#L137#����" +
            "\r\n#L138#�����" +
            "\r\n#L139#����" +
            "\r\n#L140#��Ʈ" +
            "\r\n#L141#����" +
            "\r\n#L142#�����,�����" +
            "\r\n#L143#������" +
            "\r\n#L144#��Ÿ �ֹ���");
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