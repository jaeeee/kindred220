


var cash = 0;

function start() {
 if (true) {
    var tmp_str = "";
    tmp_str += "#fn�������##fs17# #e#d:: ���� �ý��� ::#n#k\r\n ";
    tmp_str += "#fn�������##fs13##L1##r[��]#k#bĳ�û���#k";
    tmp_str += "#L2##r[����]#k#b�Ŀ�����#k";
����tmp_str += "#L3##r[����]#k#b������Ų#k#l\r\n";����
    tmp_str += "#L4##r[���]#k#b����̿�#k";
    tmp_str += "#L5##r[���]#k#b�ڵ����#k";
    tmp_str += "#L6##r[����]#k#b�������#k";
    tmp_str += "\r\n#L7##r[����]#k#b��/�� ����#k#l\r\n\r\n\r\n";��
    
    cm.sendSimple (tmp_str);	
	} else {
    var tmp_str = "��� �������� �̵�";
    tmp_str += "#b\r\n#L16#�������� �̵��Ѵ�";
    cm.sendSimple (tmp_str);
	}
}
function action(mode, type, selection) {
	cm.dispose();
	    if (selection == 0) {
            	    cm.openShop(600000); 
            
            } else if (selection == 1) {
		cm.dispose();
	cm.openCS();

} else if (selection == 2) {
        	    cm.openNpc(2010006);
} else if (selection == 3) {
        	    cm.openNpc(9300003);
} else if (selection == 4) {
        	    cm.openNpc(9030300);
} else if (selection == 5) {
        	    cm.openNpc(1012009);
} else if (selection == 6) {
        	    cm.openShop(11000);
} else if (selection == 7) {
        	    cm.openNpc(1052104);













            } else if (selection == 175) {
        	    cm.warp(101050000);
            
	} else {
		cm.sendOk("�ٽ� �ѹ� �ѷ����°� ���?"); 
	}
}	