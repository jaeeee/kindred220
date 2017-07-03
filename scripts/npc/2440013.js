/*
  제작자 우비
 */

maple = [
"#i3994742# 1개로 - #i1092035# 1개 교환",
"#i3994742# 1개로 - #i4310059# 2개 교환",
"#i3994742# 1개로 - #i1432009# 1개 교환",
"=======================================",
"#i3994742# 1개로 - #i1142249# 1개 교환",
"#i3994742# 1개로 - #i2049360# 15개 교환",
"#i3994742# 1개로 - #i1432008# 1개 교환",
"=======================================",
"#i3994742# 1개로 - #i1302162# 1개 교환",
"#i3994742# 1개로 - #i1132013# 1개 교환",
"#i3994742# 1개로 - #i1003449# 1개 교환",
"=======================================",
"#i3994742# 1개로 - #i1702363# 1개 교환",
"#i3994742# 2개로 - #i1112663# 1개 교환",
"#i3994742# 1500개로 - #i1002140# 1개 교환(All스텟2000/공마200)",]

function start() { 
   var text = "낚시 하다가 얻은 물고기를 각종템으로 교환할수있습니다.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1092035,1); 
            cm.sendOk("#i3994745# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(4310059,15); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1432009,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1142249,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1142249,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(2049360,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1432008,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1302162,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(3994742, 1)) { 
            cm.gainItem(3994742,-1); 
            cm.gainItem(1132013,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(3994745, 1)) { 
            cm.gainItem(3994745,-1); 
            cm.gainItem(1702363,1); 
            cm.sendOk("#i3994742# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(3994745, 221)) { 
            cm.gainItem(3994745,-221); 
            cm.gainItem(1112663,1); 
            cm.sendOk("#i3994742# 2개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(3994745, 1500)) { 
            cm.gainItem(3994745,-1500); 
            cm.gainItem(1002140,1); 
            cm.sendOk("#i3994742# 개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
}
}