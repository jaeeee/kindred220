function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;



/* 
 *    selection 1~20  ����
 *    selection 20~40 �̵�
 *    selection 40~ ����
 */



        if (status == 0) {
	    var chat = "��#e#d#r#i3604000##d�޸� ��� �ý��� #L54##fs13##r�ڸ޸� �ʱ��ڿ� �ޱ��#k\r\n#n"  
            chat +=  "\r\n#e#d#r#i2023355##r�޸� ��ŷ �ý���#k\r\n";
  	    chat += "#L40##d������ŷ#k";
	    chat += "#L41##râ����#k";
	    chat += "#L46##b�����ϱ�#k";	    
	    chat += "#L42##gĳ������#k\r\n";
            chat +=  "\r\n#e#d#r#i2048722##r�޸� ȯ������ �ý���#k\r\n";
	    chat += "#L45##dȯ���ϱ�#k";
	    chat += "#L55##g�����ϱ�#k";
	    chat += "#L50##r��������#k";
	    chat += "#L48##b�Ƿ�����#k\r\n";
            chat +=  "\r\n#e#d#r#i4161001##r�޸� �����ȳ� �ý���#k\r\n";
	    chat += "#L49##g�۳����#k";
	    chat += "#L59##b��ų����#k";
            chat += "#L43##d�����ϱ�#k";
            chat += "#L61##r�����ȳ�#k\r\n";
            chat +=  "\r\n#e#d#r#i2470003##r�޸� ��ȭ �ý���#k\r\n";
            chat += "#L53##b�ʿ���ȭ#k";
            chat += "#L62##r������ǰ#k";
            chat += "#L57##b�ξ�̱�#k";
            chat += "#L60##d�����̿�#k";
            chat +=  "\r\n#e#d#r#i5680289##r�޸� ���� #b<2>#k #r�ý���#k\r\n";
            chat += "#L51##r��������#k";
            chat += "#L58##d�������#k";
            chat += "#L56##b�ҿ����#k";
            chat += "#L70##r�����̱�ȯ#k";
	    if (cm.getPlayer().hasGmLevel(6)){
	    chat += "\r\n#l#k\r\n\r\n#e�����¡���GM���� ���ǽá����¡�#k\r\n";
	    chat += "#L200#�Ŀ����ۨ�"; 
            chat += "#L201#������¨�"; 
            chat += "#L202#GM���̵���\r\n";  
            chat += "#L203#����X��";  
            chat += "#L204#�гۺ����";   
	}

	    cm.sendSimple(chat);
 
           
	/* ���� �κ� */

             } else if (selection == 40) {
		cm.dispose();
		cm.openNpc(9076004);

             } else if (selection == 41) {
		cm.dispose();
		cm.openNpc(2460020);

            } else if (selection == 42) {
		cm.dispose();
                	cm.openNpc(9010046);

             } else if (selection == 43) {
	        	cm.dispose();
		cm.openNpc(2460022);

             } else if (selection == 44) {
		cm.dispose();
		cm.openNpc(1032114);

             } else if (selection == 45) {
		cm.dispose();
		cm.openNpc(9000006);

             } else if (selection == 46) {
		cm.dispose();
		cm.openNpc(9000056);

             } else if (selection == 47) {
		cm.dispose();
		cm.openNpc(1012117);
 
            } else if (selection == 48) {
		cm.dispose();
		cm.openNpc(1012121);

             } else if (selection == 49) {
		cm.dispose();
		cm.openNpc(2102002);

             } else if (selection == 50) {
		cm.dispose();
		cm.openNpc(12101);

            } else if (selection == 51) {
		cm.dispose();
		cm.openNpc(9000095);

            } else if (selection == 52) {
		cm.dispose();
		cm.openNpc(1002006);

            } else if (selection == 53) {
		cm.dispose();
		cm.openNpc(1052125);

            } else if (selection == 54) {
		cm.dispose();
		cm.openNpc(9000002);

            } else if (selection == 55) {
		cm.dispose();
		cm.openNpc(2040050);

            } else if (selection == 56) {
		cm.dispose();
		cm.openNpc(2150004);
            } else if (selection == 57) {
		cm.dispose();
		cm.openNpc(2159415);

            } else if (selection == 58) {
		cm.dispose();
		cm.openNpc(1103002);
          
            } else if (selection == 59) {
		cm.dispose();
		cm.openNpc(1002006);
 
            } else if (selection == 60) {
		cm.dispose();
		cm.openNpc(9000269);

            } else if (selection == 61) {
		cm.dispose();
		cm.openNpc(9000185);

            } else if (selection == 62) {
		cm.dispose();
		cm.openNpc(1402202);

            } else if (selection == 70) {
		cm.dispose();
		cm.openNpc(1201002);

   
	/* ���� �κ� */
             } else if (selection == 200) {
		cm.dispose();
		cm.openNpc(3000107); 
              } else if (selection == 201) {
		cm.dispose();
		cm.openNpc(2040002);  
              } else if (selection == 202) {
		cm.warp(180000000,0);
		cm.dispose(); 
              } else if (selection == 203) {
		cm.warp(0,0);
		cm.dispose();
              } else if (selection == 204) {
		cm.dispose();
		cm.openNpc(9201022);                                        
		}
    	}
}

