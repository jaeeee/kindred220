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
	    var chat = "Ŭ��� ���� ��� ��ǰ�� �Ǹ��ϰ� �ֽ��ϴ�.\r\n\r\n#n"
	    chat += "#e< �������� >#l#k\r\n";
            chat += "#L16##i2431938#�����ϸ�����#k";
            chat += "#L17##i1003801#�����ϸ����#k\r\n";
            chat += "#e< �Һ���� >#l#k\r\n";
            chat += "#L18##i2640016#�ܼ�����#k";
            chat += "#L19##d#i3010636#���ڻ���#k"; 
            chat += "#L22##d#i1112400#�Ǽ�����#k"; 
            chat += "#L20##r#i1352003#��������#k"; 
            chat += "#L50##i2640016#�Һ����#k\r\n";          
            chat += "#e#r< �Ŀ����� >#l#k\r\n";
            chat += "#L100##r#i4310067#�Ŀ�����(1)#k\r\n"; 
            chat += "#L101##r#i4310067#�Ŀ�����(2)#k\r\n"; 
            chat += "#e< �ۼֻ��� >#l#k\r\n"; 
            chat += "#L2000##i2434340#�ۼַ�������#k"; 
            chat += "#L2001##i1004422#�ۼַ������#k\r\n";  
            chat += "#e< Ÿ�Ϸ�Ʈ���� >#l#k\r\n";
            chat += "#L555##i2433453#Ÿ�Ϸ�Ʈ#k";

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