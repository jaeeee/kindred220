/*
  ������ �� ��(kkilook_adm)
 */

maple = [
"#i4310027# 10���� - #i1102481# �α�ȯ [����]",
"#i4310027# 10���� - #i1102482# �α�ȯ [������]",
"#i4310027# 10���� - #i1102483# �α�ȯ [�ü�]",
"#i4310027# 10���� - #i1102484# �α�ȯ [����]",
"#i4310027# 10���� - #i1102485# �α�ȯ [����]",

"#i4310027# 10���� - #i1072743# �α�ȯ [����]",
"#i4310027# 10���� - #i1072744# �α�ȯ [������]",
"#i4310027# 10���� - #i1072745# �α�ȯ [�ü�]",
"#i4310027# 10���� - #i1072746# �α�ȯ [����]",
"#i4310027# 10���� - #i1072747# �α�ȯ [����]",

"#i4310027# 10���� - #i1132174# �α�ȯ [����]",
"#i4310027# 10���� - #i1132175# �α�ȯ [������]",
"#i4310027# 10���� - #i1132176# �α�ȯ [�ü�]",
"#i4310027# 10���� - #i1132177# �α�ȯ [����]",
"#i4310027# 10���� - #i1132178# �α�ȯ [����]",
//��
"#i4310027# 10���� - #i1003797# �α�ȯ [����]",
"#i4310027# 10���� - #i1003798# �α�ȯ [������]",
"#i4310027# 10���� - #i1003799# �α�ȯ [�ü�]",
"#i4310027# 10���� - #i1003800# �α�ȯ [����]",
"#i4310027# 10���� - #i1003801# �α�ȯ [����]",

"#i4310027# 10���� - #i1042254# �α�ȯ [����]",
"#i4310027# 10���� - #i1042255# �α�ȯ [������]",
"#i4310027# 10���� - #i1042256# �α�ȯ [�ü�]",
"#i4310027# 10���� - #i1042257# �α�ȯ [����]",
"#i4310027# 10���� - #i1042258# �α�ȯ [����]",

"#i4310027# 10���� - #i1062165# �α�ȯ [����]",
"#i4310027# 10���� - #i1062166# �α�ȯ [������]",
"#i4310027# 10���� - #i1062167# �α�ȯ [�ü�]",
"#i4310027# 10���� - #i1062168# �α�ȯ [����]",
"#i4310027# 10���� - #i1062169# �α�ȯ [����]",]

function start() { 
   var text = "#e�ȳ��ϼ��� ȫ�������� 150�� ��� ����Դϴ�.#k#e#r\r\n �����۵��� �����ϽǷ��� #i4310027# ���ʿ��մϴ�.#k"

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1102481,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1102482,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1102483,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1102484,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1102485,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 5) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1072743,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1072744,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 7) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1072745,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1072746,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 9) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1072747,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 10) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1132174,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 11) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1132175,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1132176,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1132177,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 14) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1132178,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 15) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1003797,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 16) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1003798,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 17) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1003799,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
}

        } else if (selection == 18) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1003800,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 19) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1003801,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 20) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1042254,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 21) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1042255,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 22) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1042256,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 23) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1042257,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 24) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1042258,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 25) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1062165,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 26) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1062166,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 27) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1062167,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 28) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1062168,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 29) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1062169,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 30) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1122150,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 31) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1032093,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 32) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1012058,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 33) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(1022114,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 34) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1082392,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 35) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1112400,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();

}

        } else if (selection == 36) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainItem(1182006,1); 
            cm.sendOk("#i4310027# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();
        }      
    }  
}
