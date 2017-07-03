/*
  제작자 우비
 */

maple = [
"#i4001212# 10개로 - #i4032521# 1개 교환",
"#i3994385# 1000개로 - #i4032521# 1개 교환",
"#i4032521# 1개로 - #i4001212# 8개 교환",
"#i4032521# 1개로 - #i3994385# 800개 교환"]


function start() { 
   var text = "VIP티켓을 교환하는 특수 상점입니다\r\nVIP티켓을 구매하실려면 특정템이 필요합니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4001212, 10)) { 
            cm.gainItem(4001212,-10); 
            cm.gainItem(4032521,1); 
            cm.sendOk("#i4001212# 10개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4001212# 10개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(3994385, 1000)) { 
            cm.gainItem(3994385,-1000); 
            cm.gainItem(4032521,1); 
            cm.sendOk("#i3994385# 1000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i3994385# 1000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4032521, 1)) { 
            cm.gainItem(4032521,-1); 
            cm.gainItem(4001212,8); 
            cm.sendOk("#i4032521# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4032521# 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4032521, 1)) { 
            cm.gainItem(4032521,-1); 
            cm.gainItem(3994385,800); 
            cm.sendOk("#i4032521# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4032521# 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
}
}