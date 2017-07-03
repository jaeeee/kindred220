/*
  제작자 우비
 */

maple = [
"#i3994742# 21개로 - #i1382235# 1개 교환",
"#i3994742# 21개로 - #i1402224# 1개 교환",
"#i3994742# 21개로 - #i1402180# 1개 교환",
"=======================================",
"#i3994742# 22개로 - #i1102309# 1개 교환",
"#i3994742# 22개로 - #i1102308# 1개 교환",
"#i3994742# 22개로 - #i1302253# 1개 교환",
"=======================================",
"#i3994742# 23개로 - #i2431941# 1개 교환(마이스터무기)",
"#i3994742# 23개로 - #i2430452# 1개 교환(의자상자)",
"#i3994742# 28개로 - #i4310070# 2개 교환",
"=======================================",
"#i3994742# 25개로 - #i1112586# 1개 교환(All스텟500/공마200)",
"#i3994742# 25개로 - #i1152154# 1개 교환(All스텟500/공마200)",
"#i3994742# 25개로 - #i1113055# 1개 교환(All스텟500/공마200)",]

function start() { 
   var text = "낚시 하다가 얻은 물고기를 각종템으로 교환할수있습니다.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(3994745, 21)) { 
            cm.gainItem(3994745,-21); 
            cm.gainItem(1382235,1); 
            cm.sendOk("#i3994745# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(3994745, 21)) { 
            cm.gainItem(3994745,-21); 
            cm.gainItem(1402224,1); 
            cm.sendOk("#i3994745# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(3994745, 21)) { 
            cm.gainItem(3994745,-21); 
            cm.gainItem(1402180,1); 
            cm.sendOk("#i3994745# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(3994745, 22)) { 
            cm.gainItem(3994745,-22); 
            cm.gainItem(1102309,1); 
            cm.sendOk("#i3994745# 2개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(3994745, 22)) { 
            cm.gainItem(3994745,-22); 
            cm.gainItem(1102308,1); 
            cm.sendOk("#i3994745# 2개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(3994745, 22)) { 
            cm.gainItem(3994745,-22); 
            cm.gainItem(1102307,1); 
            cm.sendOk("#i3994745# 2개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(3994745, 23)) { 
            cm.gainItem(3994745,-23); 
            cm.gainItem(i2431941,1); 
            cm.sendOk("#i3994745# 3개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 3개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(3994745, 23)) { 
            cm.gainItem(3994745,-23); 
            cm.gainItem(2430452,1); 
            cm.sendOk("#i3994745# 3개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 3개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(3994745, 28)) { 
            cm.gainItem(3994745,-28); 
            cm.gainItem(4310070,2); 
            cm.sendOk("#i3994745# 3개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 3개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(3994745, 25)) { 
            cm.gainItem(3994745,-25); 
            cm.gainItem(1112586,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(3994745, 25)) { 
            cm.gainItem(3994745,-25); 
            cm.gainItem(1152154,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(3994745, 25)) { 
            cm.gainItem(3994745,-25); 
            cm.gainItem(1113055,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 16) { 
	if(cm.haveItem(3994745, 500)) { 
            cm.gainItem(3994745,-500); 
            cm.gainItem(3994742,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 17) { 
	if(cm.haveItem(3994745, 500)) { 
            cm.gainItem(3994745,-500); 
            cm.gainItem(3994742,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 18) { 
	if(cm.haveItem(3994745, 500)) { 
            cm.gainItem(3994745,-500); 
            cm.gainItem(3994742,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
}
}