function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;



/* 
 *    selection 1~20  상점
 *    selection 20~40 이동
 *    selection 40~ 편의
 */



        if (status == 0) {
	    var chat = "　#e< 상 점 >\r\n#n"
	    chat += "#L1#캐쉬상점"; 
	    chat += "UI/UIWindow2/AdditionalOptionTooltip/rare"
    chat +=  "UI/UIWindow2/AdditionalOptionTooltip/epic"
   chat +=  "UI/UIWindow2/AdditionalOptionTooltip/unique";
	    chat += "#L3#후원상점";
	    chat += "#L5#경매하기#k#l\r\n\r\n\r\n"
	    chat += "   #e< 이 동 >\r\n#n"
	    chat += "#L20#이동하기";
            chat += "#L23#마을이동";
	    chat += "#L21#몬파이동";
	    chat += "#L22#기술마을\r\n";
	    chat += "#L24#길드업무#k";
	    chat += "#L29##r미스틱필드#k#l";
	    chat += "#L30##b보스원정대#k#l\r\n\r\n\r\n";
	    chat += "　#e< 편 의 >#n\r\n";
  	    chat += "#L40##r서버랭킹#k";
	    chat += "#L41#창고사용";
	    chat += "#L42#캐시충전";	    
	    chat += "#L43#성형하기\r\n";
	    chat += "#L45#환생하기";
	    chat += "#L46#선물하기";
	    chat += "#L48#의류수거";
	    chat += "#L49#글남기기\r\n";
	    chat += "#L50#전구제거";
	    chat += "#L51##b보조무기#k";
	    //chat += "#L52##e#b스킬마스터#k#l";
	    if (cm.getPlayer().hasGmLevel(6)){
	    chat += "\r\n#l#k\r\n\r\n#e　<GM전용>#n #r(운영자만 보이는 메뉴)#k\r\n";
	    chat += "#L200#후원제작";
	    chat += "#L201#복구제작";
	    chat += "#L202#캐릭식별";
            chat += "#L204#현접 제거\r\n";
            chat += "#L205#비밀번호 변경";
	    chat += "#L203#지엠맵\r\n";
	}

	    cm.sendSimple(chat);
	/* 상점 부분 */
             } else if (selection == 1) {
		cm.dispose();
		cm.enterCS();

             } else if (selection == 2) {
	        	cm.dispose();
		cm.openNpc(9000160);

             } else if (selection == 3) {
		cm.dispose();
		cm.openNpc(2400010);

             } else if (selection == 4) {
		cm.dispose();
		cm.openNpc(1043000);

             } else if (selection == 5) {
		cm.dispose();
		cm.openNpc(9030300);


	/* 이동 부분 */
             } else if (selection == 20) {
		cm.dispose();
		cm.openNpc(1012000);

             } else if (selection == 21) {
		cm.dispose();
		cm.openNpc(9071003);

             } else if (selection == 22) {
		cm.warp(910001000,0);
		cm.dispose();

             } else if (selection == 23) {
	        cm.dispose();
		cm.openNpc(3000012);

            } else if (selection == 24) {
		cm.dispose();
                	cm.openNpc(2010011);

            } else if (selection == 25) {
		cm.warp(109090000,0);
		cm.dispose();

            } else if (selection == 26) {
		cm.dispose();
		cm.openNpc(9010022);

            } else if (selection == 27) {
		cm.dispose();
		cm.openNpc(9070007);

            } else if (selection == 28) {
		cm.warp(100010001,0);
		cm.dispose();

            } else if (selection == 29) {
		cm.dispose();
		cm.openNpc(9070010);

            } else if (selection == 30) {
		cm.dispose();
		cm.openNpc(2460023);

	/* 편의 부분 */

             } else if (selection == 40) {
		cm.dispose();
		cm.openNpc(2411018);

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
		cm.openNpc(3000144);

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

	/* 지엠 부분 */
             } else if (selection == 200) {
		cm.dispose();
		cm.openNpc(3000107);
             } else if (selection == 201) {
		cm.dispose();
		cm.openNpc(9090008);
             } else if (selection == 202) {
		cm.dispose();
		cm.openNpc(2470044);
             } else if (selection == 204) {
		cm.dispose();
		cm.openNpc(1002100);
             } else if (selection == 205) {
		cm.dispose();
		cm.openNpc(2400002);
             } else if (selection == 203) {
		cm.warp(180000000,0);
		cm.dispose();
	    cm.dispose();
		}
    	}
}

