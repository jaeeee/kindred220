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
//"#k#L85#���� ������"
	var o = "���Ϳ� �ο���� ���� ��� �־�� �ϴ� ���̶��.\r\n";
	o += "#L82##i2430254# ���� �������� ��� �����ϰڽ��ϴ�.\r\n";
	o += "#L80##i2430268# ������ �������� ��� �����ϰڽ��ϴ�.\r\n";
	o += "#L83##i2430284# �ü� �������� ��� �����ϰڽ��ϴ�.\r\n";
	o += "#L81##i2430386# ���� �������� ��� �����ϰڽ��ϴ�.\r\n";
	o += "#L84##i2430389# ���� �������� ��� �����ϰڽ��ϴ�.\r\n";
	o += "#L85##i2430389##b ���� �������� ��� �����ϰڽ��ϴ�.";
	cm.sendSimple(o);

      } else if (selection == 80) {
	var m = "#e#i2430268# #r������ ������#k�� ��� �����ϼ̽��ϴ�.#n\r\n\r\n";
	m += "#e#b[������ ������ ��]#k#n\r\n"
	m += "#L3#����"
	m += "#L123#����"
	m += "#L123#����"
	m += "#L1#����"
	m += "#L0#�Ź�"
	m += "#L2#�尩"
	m += "#L153#����"
	m += "#L4#����#l\r\n\r\n\r\n"
	m += "#e#b[������ ������ ����]#k#n\r\n"
	m += "#L5#�ϵ� #Cgray#(��ũ������, ���, ���� ������ ��õ)#k\r\n"
	m += "#L6#������ #Cgray#(��ũ������, ���, ����, ��Ʋ������ ������ ��õ)#k\r\n"
	m += "#L10001#���̴׷ε� #Cgray#(��̳ʽ� ������ ��õ)#k"
	cm.sendSimple(m);

      } else if (selection == 81) {
	var t = "#e#i2430386# #r���� ������#k�� ��� �����ϼ̽��ϴ�.#n\r\n\r\n";
	t += "#e#b[���� ������ ��]#k#n\r\n"
	t += "#L12#����"
	t += "#L8#����"
	t += "#L9#����"
	t += "#L10#����"
	t += "#L7#�Ź�"
	t += "#L11#�尩"
	t += "#L13#����#l\r\n\r\n\r\n"
	t += "#e#b[���� ������ ����]#k#n\r\n"
	t += "#L14#�ܰ� #Cgray#(������, �����̴� ������ ��õ)#k\r\n"
	t += "#L106#���̵� #Cgray#(�����̴� ������ ��õ)#k\r\n"
	t += "#L15#�ƴ� #Cgray#(����Ʈ�ε� ������ ��õ)#k\r\n"
	t += "#L109#���� #Cgray#(���� ������ ��õ)#k\r\n"
	t += "#L10004#�������ҵ� #Cgray#(���� ������ ��õ)#k"
	cm.sendSimple(t);

      } else if (selection == 82) {
	var w = "#e#i2430254# #r���� ������#k�� ��� �����ϼ̽��ϴ�.#n\r\n\r\n";
	w += "#e#b[���� ������ ��]#k#n\r\n"
	w += "#L22#����"
	w += "#L19#����"
	w += "#L18#����"
	w += "#L20#����"
	w += "#L17#�Ź�"
	w += "#L21#�尩"
	w += "#L23#����#l\r\n\r\n\r\n"
	w += "#e#b[���� ������ ����]#k#n\r\n"
	w += "#L28#�Ѽհ� #Cgray#(���谡 ����,������ ������ ��õ)#k\r\n"
	w += "#L24#�Ѽյ��� #Cgray#(���谡 ����, ���󽽷��̾� ������ ��õ)#k\r\n"
	w += "#L26#�Ѽյб� #Cgray#(���谡 ����, ���󽽷��̾� ������ ��õ)#k\r\n"
	w += "#L29#�μհ� #Cgray#(���谡 ����, ī���� ������ ��õ)#k\r\n"
	w += "#L30#â"
	w += "#L31#���� #Cgray#(���谡 ����, �ƶ� ������ ��õ)#k\r\n"
	w += "#L10003#������� #Cgray#(������ ������ ��õ)#k"
	cm.sendSimple(w);

      } else if (selection == 83) {
	var b = "#e#i2430284# #r�ü� ������#k�� ��� �����ϼ̽��ϴ�.#n\r\n\r\n";
	b += "#e#b[�ü� ������ ��]#k#n\r\n"
	b += "#L35#����"
	b += "#L121#����"
	b += "#L122#����"
	b += "#L33#����"
	b += "#L32#�Ź�"
	b += "#L34#�尩\r\n\r\n\r\n#l"
	b += "#e#b[�ü� ������ ����]#k#n\r\n"
	b += "#L36#Ȱ #Cgray#(���츶����, ����극��Ŀ ������ ��õ)#k\r\n"
	b += "#L37#���� #Cgray#(�ű�, ���ϵ����� ������ ��õ)#k\r\n"
	b += "#L108#��� ����� #Cgray#(�޸������� ������ ��õ)#k"
	cm.sendSimple(b);

      } else if (selection == 84) {
	var p = "#e#i2430389# #r���� ������#k�� ��� �����ϼ̽��ϴ�.#n\r\n\r\n";
	p += "#e#b[���� ������ ��]#k#n\r\n"
	p += "#L73#����"
	p += "#L74#����"
	p += "#L75#�Ź�"
	p += "#L101#�尩\r\n\r\n\r\n#l"
	p += "#e#b[���� ������ ����]#k#n\r\n"
	p += "#L76#��Ŭ #Cgray#(������, ��Ʈ����Ŀ ������ ��õ)#k\r\n"
	p += "#L71#�� #Cgray#(ĸƾ, ��ī�� ������ ��õ)#k\r\n"
	p += "#L107#�ڵ�ĳ�� #Cgray#(ĳ���� ������ ��õ)#k\r\n"
	p += "#L198#�ҿｴ�� #Cgray#(������������ ������ ��õ)#k"
	cm.sendSimple(p);

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
            "\r\n#L120#��Ĺ #r(�����Ұ���)#k");
      } else if (selection == 86) {
               cm.sendSimple ("������. #e#d" +
            "\r\n#L145#��ų��" +
            "\r\n#L146#��ġ, ����" +
            "\r\n#L147#���̵�" +
            "\r\n#L148#�Һ������");
      } else if (selection == 87) {
		cm.dispose();
                cm.openNpc (9010038);
      } else if (selection == 601) {
	cm.dispose();
	cm.openNpc (1012003);
      } else if (selection == 603) {
	cm.dispose();
	cm.openNpc (1012105);
      } else if (selection == 604) {
        cm.openShop (1012008);
	cm.dispose();


/*cm.sendSimple ("������. #e#d" +
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
            "\r\n#L142#�����" +
            "\r\n#L143#������");*/

      } else if (selection == 600) {
	cm.dispose();
        cm.openNpc (9000013);
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
      } else if (selection == 10000) {
        cm.openShop (1012104);
        cm.dispose();
      } else if (selection == 10001) {
        cm.openShop (3000137);
        cm.dispose();
      } else if (selection == 10002) {
	cm.dispose();
        cm.openNpc (2090100);
      } else if (selection == 10003) {
        cm.openShop (3000136);
        cm.dispose();
      } else if (selection == 10004) {
        cm.openShop (3000135);
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
      } else if (selection == 200) {
        cm.openShop (100070);
        cm.dispose();
      } else if (selection == 201) {
        cm.openShop (100071);
        cm.dispose();
      } else if (selection == 202) {
        cm.openShop (100073);
        cm.dispose();
      } else if (selection == 203) {
        cm.openShop (100072);
        cm.dispose();
      } else if (selection == 204) {
        cm.openShop (100075);
        cm.dispose();
      } else if (selection == 197) {
        cm.openShop (1012122);
        cm.dispose();
      } else if (selection == 198) {
        cm.openShop (11100);
        cm.dispose();
      }
		}
      }