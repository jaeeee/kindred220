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
        ���� �������� 0���� 99����
        �̵� �������� 100���� 199����
        ������ �������� 200���� 299����
        ��� �������� 300���� 399����
        */
        var choose = "#fUI/CashShop.img/CSEffect/new/0##fn������� Extrabold##fs13# ��ȭ�¶��� ���� ���� �Դϴ�.\r\n\r\n";
       choose += "#L16##r[NEW]#k #b�Ŀ�����#k#l";
        choose += "#L4##r[HOT]#k #bȫ������#k#l\r\n\r\n";
        choose += "#L0##fs 13##r[HOT]#k #bĳ�û����̵�#k";
        choose += "#L5##r[HOT] #b�������ɻ���#k#l\r\n\r\n";
        choose += "#L7798##r[NEW]#k #b������ڻ���#k#l";
        choose += "#L2015##r[NEW]#k #b���� ĳ�� ����#k#l\r\n\r\n";
        choose += "#L2##r[HOT]#k #b�ۼַ��� ����#k#l";
        choose += "#L1541##r[HOT]#k #b�����ϸ� ����#k#l\r\n\r\n";
        choose += "#L5555##r[HOT]#k #b��������#k#l";
        choose += "#L13##r[NEW]#k #b������ ��Ų ����#k#l\r\n\r\n";
        if (cm.getPlayer().hasGmLevel(100)){
        choose += "\r\n#l#k\r\n\r\n#d#e�� �� �� �� �� �� ��#n #r(��ڸ� ���̴� �޴�)#k\r\n";
        choose += "#e#d#L300#�Ŀ�����#k";
        choose += "#e#g#L301#��������#k";
        choose += "#e#r#L302#��ڸ�#k";
        choose += "#e#b#L303#��������#k\r\n";
        choose += "#e#d#L304#�к��ϱ�#k";
        choose += "#e#g#L305#�Ѹ޼���#k";
        choose += "#e#r#L306#�������#K";
  }
        cm.sendSimple(choose);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
		cm.dispose();
	cm.openCS();
 } else if (s == 1) {
  cm.openNpc (1012111);
 } else if (s == 2) {
  cm.openNpc (1033200);
 } else if (s == 3) {
  cm.openShop (10056);
 } else if (s == 7178) {
  cm.openNpc (1033200);
 } else if (s == 2002) {
  cm.openShop (1032003);
 } else if (s == 7798) {
  cm.openShop (9390013);
 } else if (s == 7799) {
  cm.openNpc (2150004);
 } else if (s == 4) {
  cm.openNpc (1032104); 
 } else if (s == 2015) {
  cm.openNpc (1103001);
 } else if (s == 5) {
  cm.openNpc (9000185);
 } else if (s == 6) {
  cm.openNpc (2001000);
 } else if (s == 2001) {
  cm.openNpc (1040001);
 } else if (s == 7) {
  cm.openShop (80804);
 } else if (s == 8) {
  cm.openNpc (1103002);
 } else if (s == 9) {
  cm.openNpc (9000052); 
 } else if (s == 10) {
  cm.openNpc (9000008); 
 } else if (s == 11) {
  cm.openNpc (9000019); 
 } else if (s == 12) {
  cm.openNpc (1012102); 
 } else if (s == 13) {
  cm.openNpc (9300003); 
 } else if (s == 14) {
  cm.openNpc (9000131);
 } else if (s == 15) {
  cm.openNpc (9073008);
 } else if (s == 2001) {
  cm.openNpc (1033210);
 } else if (s == 16) {
  cm.openNpc (1092013);
 } else if (s == 17) {
  cm.openNpc (2010011);
 } else if (s == 18) {
  cm.openNpc (9071003);
 } else if (s == 20) {
  cm.openNpc (1010100);
 } else if (s == 21) {
  cm.openNpc (1063016);
 } else if (s == 22) {
cm.warp (271000000, 0);
 } else if (s == 23) {
cm.warp (270000000, 0);
 } else if (s == 24) {
  cm.warp(100000001, 0);
 } else if (s == 25) {
cm.warp (910000000, 0);
 } else if (s == 26) {
  cm.openNpc (9310009);
 } else if (s == 27) {
cm.warp (109090000, 0);
 } else if (s == 28) {
cm.warp (910530000, 0);
 } else if (s == 2000) {
cm.openNpc (9000143);
 } else if (s == 29) {
  cm.openNpc (9072200);  
 } else if (s == 30) {
  cm.openNpc (9010022);
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
  cm.openNpc (2192002); 
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
  cm.openNpc(1033105);
 } else if (s == 201) {
  cm.openNpc(1002003);
 } else if (s == 202) {
  cm.openNpc(12101);
 } else if (s == 203) {
  cm.openNpc(9310001);
 } else if (s == 204) {
  cm.openNpc(9250022);
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
  cm.openNpc(2470044);
 } else if (s == 304) {
  cm.openNpc(9201022);
 } else if (s == 305) {
  cm.openNpc(9010017);
 } else if (s == 306) {
  cm.openNpc(9250009);
 } else if (s == 9999){
  cm.openNpc(1052013);
 } else if (s == 19999){
  cm.openNpc(9076004);
 } else if (s == 5555){
  cm.openNpc(1012114); 
 } else if (s == 5556){
  cm.openShop(10651);
 } else if (s == 5557){
  cm.openShop(9020004);
 } else if (s == 1541) {
  cm.openNpc(9000037);
 } else if (s == 1542) {
  cm.openShop(1022001);
        }
    }
}

