/*

�� ��ũ��Ʈ�� �ƾ߳�(riel0216)�� ���� �Ͽ����� �Ǹ� ���߽� ayanopack@nate.com���� ���� �ֽñ� �ٶ�� �� ������ ������ �����ֽñ� �ٶ��ϴ�.

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
        var ayano = "    #e#fs14#���� ��𼭵� ���ϰ� ������ �̿��غ���!";
        ayano += "\r\n������������������������������������������";     
        ayano += "#e#L0##fs12#ĳ�û���";
        ayano += "#e#L40##fs12#ĳ������";
        ayano += "#e#L2##fs12#�Ŀ�����";
        ayano += "#e#L3##fs12#���̵�����\r\n";
        ayano += "#e#L4##fs12#���ڻ���";
        ayano += "#e#L5##fs12#��������";
        ayano += "#e#L6##fs12#�ֹ�������";
        ayano += "#e#L7##fs12#���ǻ���\r\n";
        ayano += "#e#L8##fs12#ȫ������";
        ayano += "#e#L9##fs12#��������Ų����";
        ayano += "#e#L11##fs12#���λ���";
        ayano += "#e#L12##fs12#�⼮üũ";
        ayano += "#e#L42##fs12#������";
        ayano += "#e#L43##fs12#�ξ�̱�";
       
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#     ����� �ȴ°� ����! ���ϰ� �̵�����!";
        ayano += "\r\n������������������������������������������";   
        ayano += "#e#L13##fs12#�����̵�";
        ayano += "#e#L14##fs12#�����̵�";
        ayano += "#e#L15##fs12#�����̵�";
        ayano += "#e#L33##fs12#��Ծ�\r\n";
        ayano += "#e#L41##fs12#������ũ";

        ayano += "\r\n#l#k\r\n\r\n#e#fs14#            ���� ���� ����� ������!";
        ayano += "\r\n������������������������������������������"; 
        ayano += "#e#L17##fs12#���������";
        ayano += "#e#L18##fs12#�޼һ����";
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#      Ư���Ѱ� ���°ǰ�? Ư���� ������!";
        ayano += "\r\n������������������������������������������"; 
        ayano += "#e#L19##fs12#���õ�";
        ayano += "#e#L20##fs12#��Ÿ��ġ";
        ayano += "#e#L21##fs12#����";
        ayano += "#e#L22##fs12#���å��";
        ayano += "#e#L23##fs12#�ζ�\r\n";
        ayano += "#e#L24##fs12#����";
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#                  ������ ������!";
        ayano += "\r\n������������������������������������������"; 
        ayano += "#e#L25##fs12#����";
        ayano += "#e#L26##fs12#�Ƿ�������";
        ayano += "#e#L27##fs12#ȯ��";
        ayano += "#e#L28##fs12#����";
        ayano += "#e#L29##fs12#BGM����\r\n";
        ayano += "#e#L30##fs12#�����ϱ�";
        ayano += "#e#L31##fs12#â��";
        ayano += "#e#L32##fs12#���";
        ayano += "#e#L34##fs12#�����Ƽ";
        ayano += "#e#L35##fs12#���ʱ�ȭ\r\n";
        ayano += "#e#L36##fs12#��������";
        ayano += "#e#L37##fs12#��������";
        ayano += "#e#L38##fs12#�Խ���";
        ayano += "#e#L39##fs12#ģ��Ȯ��";
        if (cm.getPlayer().hasGmLevel(10)){
        ayano += "\r\n#l#k\r\n\r\n#e#fs14#                    ��� ���";
        ayano += "\r\n������������������������������������������"; 
        ayano += "#e#L300##fs12#�Ŀ�����";
        ayano += "#e#L301##fs12#��������";
        ayano += "#e#L302##fs12#��ڸ�";
        ayano += "#e#L303##fs12#��������\r\n";
        ayano += "#e#L304##fs12#�̸�����";
        ayano += "#e#L305##fs12#��������";
        ayano += "#e#L307##fs12#��μ�ȯ";
        ayano += "#e#L308##fs12#�ø�����\r\n";
        ayano += "#e#L309##fs12#�ڵ��̵�";
        ayano += "#e#L310##fs12#�ڵ����";
        ayano += "#e#L311##fs12#�������";
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
