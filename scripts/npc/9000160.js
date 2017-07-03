function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "클라라 저는 모든 상품을 판매하고 있습니다.\r\n\r\n#n"
	    chat += "#e< 파프상점 >#l#k\r\n";
            chat += "#L16##i2431938#파프니르무기#k";
            chat += "#L17##i1003801#파프니르방어#k\r\n";
            chat += "#e< 소비상점 >#l#k\r\n";
            chat += "#L18##i2640016#줌서상점#k";
            chat += "#L19##d#i3010636#의자상점#k"; 
            chat += "#L22##d#i1112400#악세상점#k"; 
            chat += "#L20##r#i1352003#보조무기#k"; 
            chat += "#L50##i2640016#소비상점#k\r\n";          
            chat += "#e#r< 후원상점 >#l#k\r\n";
            chat += "#L100##r#i4310067#후원상점(1)#k\r\n"; 
            chat += "#L101##r#i4310067#후원상점(2)#k\r\n"; 
            chat += "#e< 앱솔상점 >#l#k\r\n"; 
            chat += "#L2000##i2434340#앱솔랩스무기#k"; 
            chat += "#L2001##i1004422#앱솔랩스방어#k\r\n";  
            chat += "#e< 타일런트상점 >#l#k\r\n";
            chat += "#L555##i2433453#타일런트#k";

	    cm.sendSimple(chat);



		
             } else if (selection == 1) {
		cm.dispose();
		cm.openShop (10651);
             } else if (selection == 2) {
		cm.openShop(1011100);
		cm.dispose();
             } else if (selection == 3) {
		cm.dispose();
		cm.openNpc(1043001);
             } else if (selection == 4) {
		cm.openShop(10004);
		cm.dispose();
             } else if (selection == 5) {
		cm.openShop(10001);
		cm.dispose();
             } else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9010031);
             } else if (selection == 7) {
		cm.dispose();
		cm.openNpc(9010035);
             } else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1033233);
             } else if (selection == 9) {
		cm.dispose();
		cm.openNpc(1022002);
             } else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9072201);
             } else if (selection == 11) {
		cm.dispose();
		cm.openNpc(1052003);
             } else if (selection == 12) {
		cm.openShop(11);
		cm.dispose();
             } else if (selection == 13) {
		cm.dispose();
		cm.openNpc(1032003);
             } else if (selection == 14) {
		cm.dispose();
		cm.openNpc(1092017);
             } else if (selection == 15) {
		cm.dispose();
		cm.openNpc(1064024);
             } else if (selection == 16) {
		cm.dispose();
		cm.openNpc(2040028);
             } else if (selection == 17) {
		cm.dispose();
		cm.openNpc(1012111);
             } else if (selection == 18) {
		cm.dispose();
		cm.openNpc(1010100);
             } else if (selection == 19) {
		cm.dispose();
		cm.openNpc(9390013);
             } else if (selection == 20) {
		cm.dispose();
		cm.openNpc(1012114);
             } else if (selection == 100) {
		cm.dispose();
		cm.openNpc(9330028); 
             } else if (selection == 101) {
		cm.dispose();
		cm.openNpc(9000226); 
             } else if (selection == 102) {
		cm.dispose();
		cm.openNpc(9000344);  
             } else if (selection == 50) {
		cm.dispose();
		cm.openNpc(1012103);   
             } else if (selection == 2000) {
		cm.dispose();
		cm.openNpc(1061006);   
             } else if (selection == 2001) {
		cm.dispose();
		cm.openNpc(2002001);
             } else if (selection == 22) {
		cm.dispose();
		cm.openNpc(12100); 
             } else if (selection == 555) {
		cm.dispose();
		cm.openNpc(1022000);          
		}
	} 
}