function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;



/* 
 *    selection 1~20  상점
 *    selection 20~40 이동
 *    selection 40~ 편의
 */



        if (status == 0) {
	    var chat = "　#e#d#r#i3604000##d메리 기능 시스템 #L54##fs13##r★메리 초기자원 받기★#k\r\n#n"  
            chat +=  "\r\n#e#d#r#i2023355##r메리 랭킹 시스템#k\r\n";
  	    chat += "#L40##d서버랭킹#k";
	    chat += "#L41##r창고사용#k";
	    chat += "#L46##b선물하기#k";	    
	    chat += "#L42##g캐시충전#k\r\n";
            chat +=  "\r\n#e#d#r#i2048722##r메리 환생변생 시스템#k\r\n";
	    chat += "#L45##d환생하기#k";
	    chat += "#L55##g변생하기#k";
	    chat += "#L50##r전구제거#k";
	    chat += "#L48##b의류수거#k\r\n";
            chat +=  "\r\n#e#d#r#i4161001##r메리 서버안내 시스템#k\r\n";
	    chat += "#L49##g글남기기#k";
	    chat += "#L59##b스킬마슽#k";
            chat += "#L43##d성형하기#k";
            chat += "#L61##r서버안내#k\r\n";
            chat +=  "\r\n#e#d#r#i2470003##r메리 강화 시스템#k\r\n";
            chat += "#L53##b초월강화#k";
            chat += "#L62##r만렙상품#k";
            chat += "#L57##b로얄뽑기#k";
            chat += "#L60##d돌림이용#k";
            chat +=  "\r\n#e#d#r#i5680289##r메리 상점 #b<2>#k #r시스템#k\r\n";
            chat += "#L51##r보조무기#k";
            chat += "#L58##d라딩상점#k";
            chat += "#L56##b소울상점#k";
            chat += "#L70##r눈송이교환#k";
	    if (cm.getPlayer().hasGmLevel(6)){
	    chat += "\r\n#l#k\r\n\r\n#e　《◈《『GM전용 엔피시』》◈》#k\r\n";
	    chat += "#L200#후원제작①"; 
            chat += "#L201#고유출력②"; 
            chat += "#L202#GM맵이동③\r\n";  
            chat += "#L203#노출X④";  
            chat += "#L204#닉넴변경⑤";   
	}

	    cm.sendSimple(chat);
 
           
	/* 편의 부분 */

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

   
	/* 지엠 부분 */
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

