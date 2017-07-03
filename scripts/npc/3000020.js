/*
  제작자 우비
 */

maple = [
"#d#i4310027# 5개 - #i2430443##z2430443#(145제 무기상자) ",
"#i4310027# 10개 - #i1152154##t1152154#(올스텟50 공마30) ",
"#i4310027# 10개 - #i1032200##t1032200#(올스텟50 공마30) ",
"#i4310027# 10개 - #i1113055##t1113055#(올스텟50 공마30) #k"]


function start() { 
   var text = "여기 아이템 리스트들은 마이스터 상점입니다\r\n아이템들을 구매하실려면 #i4310027# 가필요합니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310027, 5)) { 
            cm.gainItem(4310027,-5); 
            cm.gainItem(2430443,1); 
            cm.sendOk("#i4310027# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainHongboJangbi(1152154,1); 
            cm.sendOk("#i4310027# 10개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainHongboJangbi(1032200,1); 
            cm.sendOk("#i4310027# 10개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4310027, 10)) { 
            cm.gainItem(4310027,-10); 
            cm.gainHongboJangbi(1113055,1); 
            cm.sendOk("#i4310027# 10개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310027# 10개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
}
}