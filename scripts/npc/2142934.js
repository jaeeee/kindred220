/*
  제작자 우비
 */

maple = [
"#d#i4310027# 5개로 - #i2430446##z2430446#(모자) 1개 교환",
"#i4310027# 5개로 - #i2430447##z2430447#(상하의) 1개 교환",
"#i4310027# 5개로 - #i2430449##z2430449#(망토) 1개 교환",
"#i4310027# 5개로 - #i2430451##z2430451#(무기) 1개 교환#k"]


function start() { 
   var text = "여기 아이템 리스트들은 특수 상점입니다\r\n아이템들을 구매하실려면 #i4310027# 가필요합니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430446,1); 
            cm.sendOk("#i4310027# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430447,1); 
            cm.sendOk("#i4310027# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430449,1); 
            cm.sendOk("#i4310027# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430451,1); 
            cm.sendOk("#i4310027# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
}
}