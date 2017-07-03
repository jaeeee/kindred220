/*
  제작자 우비
 */

maple = [
"#i4001188# 1000개로 - #i4310066# 10개 교환",
"#i4001187# 1000개로 - #i4310066# 10개 교환",
"#i4001189# 1000개로 - #i4310066# 10개 교환",
"=======================================",
"#i4001188# 2000개로 - #i1112400#(올스텟 300) 1개 교환",
"#i4001187# 2000개로 - #i1112400#(올스텟 300) 1개 교환",
"#i4001189# 2000개로 - #i1112400#(올스텟 300) 1개 교환",
"=======================================",
"#i4001188# 3000개로 - #i1182006#(올스텟 500) 1개 교환",
"#i4001187# 3000개로 - #i1182006#(올스텟 500) 1개 교환",
"#i4001189# 3000개로 - #i1182006#(올스텟 500) 1개 교환",
"=======================================",
"#i4001188# 5000개로 - #i1142144#(올스텟 1000) 1개 교환",
"#i4001187# 5000개로 - #i1142144#(올스텟 1000) 1개 교환",
"#i4001189# 5000개로 - #i1142144#(올스텟 1000) 1개 교환",
"=======================================",
"#i4001188# 10000개로 - #i1012003#(올스텟 2000) 1개 교환",
"#i4001187# 10000개로 - #i1012003#(올스텟 2000) 1개 교환",
"#i4001189# 10000개로 - #i1012003#(올스텟 2000) 1개 교환",]

function start() { 
   var text = "낚시 하다가 얻은 물고기를 각종템으로 교환할수있습니다.."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4001188, 1000)) { 
            cm.gainItem(4001188,-1000); 
            cm.gainItem(4310066,10); 
            cm.sendOk("#i3994747# 1000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1000개가 있는지 다시 이벤토리창에서 확인하세요");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(4001187, 1000)) { 
            cm.gainItem(4001187,-1000); 
            cm.gainItem(4310066,10); 
            cm.sendOk("#i3994748# 1000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk(" 물고기가 1000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(4001189, 1000)) { 
            cm.gainItem(4001189,-1000); 
            cm.gainItem(4310066,10); 
            cm.sendOk("#i3994749# 1000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 1000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(4001188, 2000)) { 
            cm.gainItem(4001188,-2000); 
            cm.gainSponserItem(1112400,'[타임]',300,0,0);
            cm.sendOk("#i3994747# 2000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 2000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(4001187, 2000)) { 
            cm.gainItem(4001187,-2000); 
            cm.gainSponserItem(1112400,'[타임]',300,0,0);
            cm.sendOk("#i3994748# 2000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 2000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(4001189, 2000)) { 
            cm.gainItem(4001189, -2000); 
            cm.gainSponserItem(1112400,'[타임]',300,0,0);
            cm.sendOk("#i3994749# 2000개로 선택하신 아이템으로 교환하셨습니다..");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 2000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(4001188, 3000)) { 
            cm.gainItem(4001188,-3000); 
            cm.gainSponserItem(1182006,'[타임]',500,0,0);
            cm.sendOk("#i2049360# 3000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 3000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(4001187, 3000)) { 
            cm.gainItem(4001187,-3000); 
            cm.gainSponserItem(1182006,'[타임]',500,0,0);
            cm.sendOk("#2049360# 3000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 3000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(4001189, 3000)) { 
            cm.gainItem(4001189, -3000); 
            cm.gainSponserItem(1182006,'[타임]',500,0,0);
            cm.sendOk("#i2049360# 3000개로 선택하신 아이템으로 교환하셨습니다..");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 3000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(4001188, 5000)) { 
            cm.gainItem(4001188,-5000); 
            cm.gainSponserItem(1142144,'[타임]',1000,0,0);
            cm.sendOk("#i3994747# 5000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 5000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 13) { 
	if(cm.haveItem(4001187, 5000)) { 
            cm.gainItem(4001187,-5000); 
            cm.gainSponserItem(1142144,'[타임]',1000,0,0);
            cm.sendOk("#i3994748# 5000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 5000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(4001189, 5000)) { 
            cm.gainItem(4001189, -5000); 
            cm.gainSponserItem(1142144,'[타임]',1000,0,0);
            cm.sendOk("#i3994749# 5000개로 선택하신 아이템으로 교환하셨습니다..");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 5000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 16) { 
	if(cm.haveItem(4001188, 10000)) { 
            cm.gainItem(4001188,-10000); 
            cm.gainSponserItem(1012003,'[타임]',2000,0,0);
            cm.sendOk("#i3994747# 10000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 10000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
        } else if (selection == 17) { 
	if(cm.haveItem(4001187, 10000)) { 
            cm.gainItem(4001187,-10000); 
            cm.gainSponserItem(1012003,'[타임]',2000,0,0);
            cm.sendOk("#i3994748# 10000개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 10000개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();
}
        } else if (selection == 18) { 
	if(cm.haveItem(4001189, 10000)) { 
            cm.gainItem(4001189, -10000); 
            cm.gainSponserItem(1012003,'[타임]',2000,0,0);
            cm.sendOk("#i3994749# 10000개로 선택하신 아이템으로 교환하셨습니다..");
            cm.dispose(); 
        } else {
            cm.sendOk("물고기가 10000개가 있는지 다시 이벤토리창에서 확인하세요..");
            cm.dispose();
}
}
}