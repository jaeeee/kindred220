/*
  제작자 우비
 */

maple = [
"#i4000886# 1개로 - #i1112659# 1개 교환",
"#i4000886# 1개로 - #i1702277# 1개 교환",
"#i4000886# 1개로 - #i1142006# 1개 교환",
"#i4000886# 1개로 - #i4310034# 1개 교환",]

function start() { 
   var text = "#i4000886#초기자금 못받은 팬텀,메드세데스 등 캐릭터를 위한 NPC입니다.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(1112659,1); 
            cm.sendOk("#i4000886# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 쿠폰 1개가 있는지 다시 이벤토리창에서 확인하세요");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(1702277,1); 
            cm.sendOk("#i4000886# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 쿠폰 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(1142006,1); 
            cm.sendOk("#i4000886# 1개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("쿠폰 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(4000886, 1)) { 
            cm.gainItem(4000886,-1); 
            cm.gainItem(4310034,10); 
            cm.sendOk("#i4000886# 1개로 선택하신 아이템으로 교환하셨습니다");
            cm.dispose(); 
        } else {
            cm.sendOk(" 쿠폰 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(3994745, 2)) { 
            cm.gainItem(3994745,-2); 
            cm.gainItem(1102308,1); 
            cm.sendOk("#i3994745# 2개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(3994745, 2)) { 
            cm.gainItem(3994745,-2); 
            cm.gainItem(1102307,1); 
            cm.sendOk("#i3994745# 2개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(3994745, 3)) { 
            cm.gainItem(3994745,-3); 
            cm.gainItem(i2431941,1); 
            cm.sendOk("#i3994745# 3개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 3개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(3994745, 3)) { 
            cm.gainItem(3994745,-3); 
            cm.gainItem(2430452,1); 
            cm.sendOk("#i3994745# 3개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 3개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(3994745, 1)) { 
            cm.gainItem(3994745,-1); 
            cm.gainItem(4310070,2); 
            cm.sendOk("#i3994745# 3개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 3개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(3994745, 5)) { 
            cm.gainItem(3994745,-5); 
            cm.gainItem(1112586,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(3994745, 5)) { 
            cm.gainItem(3994745,-5); 
            cm.gainItem(1152154,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(3994745, 5)) { 
            cm.gainItem(3994745,-5); 
            cm.gainItem(1113055,1); 
            cm.sendOk("#i3994745# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
}
}