/*

������ : ljw5992@naver.com / dbg_yeane@nate.com
��� ���� : kkilook_adm@naver.com 

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
        ���� �������� 0���� 99����
        �̵� �������� 100���� 199����
        ������ �������� 200���� 299����
        */
        var choose = "           #e#d ���� �Ҽ��ִ� �ϵ��� ��� �����ٰ�! #n\r\n";
        choose += "     #e#b#L2#�̵�\r\n";
        choose += "     #e#r#L1#����\r\n";
        choose += "     #e#g#L3#������\r\n";
        choose += "     #e#d#L4#����\r\n";
        choose += "     #e#r#L5#���";
        cm.sendSimple(choose);
    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.enterCS();
 } else if (s == 1) {
  cm.openNpc (1530013);
 } else if (s == 2) {
  cm.openNpc (1012000);
 } else if (s == 3) {
  cm.openNpc (1530015);
 } else if (s == 4) {
  cm.openNpc (1530012); 
 } else if (s == 5) {
  cm.openNpc (9090008);
 } else if (s == 6) {
  cm.openNpc (9020015); 
 } else if (s == 7) {
  cm.openNpc (2040002);
 } else if (s == 8) {
  cm.openNpc (2040028); 
 } else if (s == 9) {
  cm.openNpc (1096010); 
 } else if (s == 10) {
  cm.openNpc (9000008); 
 } else if (s == 11) {
  cm.openNpc (1012000); 
 } else if (s == 12) {
  cm.openNpc (1012102); 
 } else if (s == 13) {
cm.warp (262000300, 0); 
 } else if (s == 14) {
  cm.openNpc (9000131);
 } else if (s == 15) {
  cm.openNpc (9073008);
 } else if (s == 16) {
  cm.openNpc (1002100);
 } else if (s == 17) {
  cm.openNpc (2010011);
 } else if (s == 18) {
  cm.openNpc (9071003);
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
  cm.openNpc (1063016);
 } else if (s == 27) {
cm.warp (109090000, 0);
 } else if (s == 28) {
cm.warp (910530000, 0);
 } else if (s == 31) {
  cm.openNpc (1033112);  
 } else if (s == 30) {
  cm.openNpc (9010022);
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
 } else if (s == 101) {
  cm.openNpc (9000100);
 } else if (s == 102) {
cm.warp (100000002, 0);
 } else if (s == 104) {
  cm.openNpc (3001108);
 } else if (s == 3010) {
  cm.openNpc (1402104);
 } else if (s == 105) {
  cm.openNpc (2180000);
 } else if (s == 107) {
  cm.warp(105200000, 0);
 } else if (s == 108) {
cm.warp (910028300, 0);
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
  cm.openNpc (1032212);
 } else if (s == 117) {
  cm.openNpc (2084000);
 } else if (s == 118) {
  cm.openNpc (9900003);
 } else if (s == 130) {
  cm.openNpc (1063016);
 } else if (s == 2000) {
  cm.openNpc(9330038);
 } else if (s == 3001) {
  cm.openNpc(2430024);
 } else if (s == 3002) {
  cm.openNpc(2144013);
 } else if (s == 119) {
  cm.openNpc(1404012);
 } else if (s == 3003) {
  cm.openNpc(1404012);
 } else if (s == 3007) {
  cm.openNpc(1104102);
 } else if (s == 3009) {
  cm.openNpc(9000266);
 } else if (s == 3006) {
  cm.openNpc(9000069);
 } else if (s == 3050) {
  cm.openNpc(1104205);
 } else if (s == 5000) {
  cm.openNpc(2540017);
 } else if (s == 50030) {
  cm.openNpc(9000069);
 } else if (s == 30060) {
  cm.openNpc(9010041);
 } else if (s == 5001) {
  cm.openNpc(2220000);
 } else if (s == 5002) {
  cm.openNpc(1104100);
 } else if (s == 50031) {
  cm.openNpc(2090100);
 } else if (s == 50032) {
  cm.openNpc(2084001);
 } else if (s == 58000) {
  cm.openNpc(1012104);



 } else if (s == 350) {
 cm.sendOk ("��ǰ���Ŀ��� �Ʒ���Ŀ� �°� �ۼ��ؼ� ���Ϸ� �����ּ���\r\n��ǰ���̸� : \r\n��ǰ���ɹ�ȣ : \r\n��ǰ�ǹ�������(���ǸӴ��ϰ��) : \r\n��ǰ�Ǳݾ� : \r\n���޹����г��� : \r\n kki_looking@naver.com ���� �̷��� ��Ŀ����纸���ø�\r\n�ִ��� ���������ص帮�ڽ��ϴ�.\r\n����ǥ�� www.coreple.kr.pe ������ ���հ���������\r\n�ѿ�� �� �ٸ�������״� �����Ŀ��̺Ұ����մϴ�.");
  
        }
    }
}
