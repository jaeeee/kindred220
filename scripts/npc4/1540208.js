


var cash = 0;

function start() {
 if (true) {
    var tmp_str = "";
    tmp_str += "#fn나눔고딕##fs17# #e#d:: 상점 시스템 ::#n#k\r\n ";
    tmp_str += "#fn나눔고딕##fs13##L1##r[편리]#k#b캐시상점#k";
    tmp_str += "#L2##r[상점]#k#b후원상점#k";
　　tmp_str += "#L3##r[상점]#k#b뎀지스킨#k#l\r\n";　　
    tmp_str += "#L4##r[경매]#k#b경매이용#k";
    tmp_str += "#L5##r[페션]#k#b코디상점#k";
    tmp_str += "#L6##r[상점]#k#b무기상점#k";
    tmp_str += "\r\n#L7##r[상점]#k#b고/소 상점#k#l\r\n\r\n\r\n";　
    
    cm.sendSimple (tmp_str);	
	} else {
    var tmp_str = "긴급 광장으로 이동";
    tmp_str += "#b\r\n#L16#광장으로 이동한다";
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
		cm.sendOk("다시 한번 둘러보는게 어떨까?"); 
	}
}	