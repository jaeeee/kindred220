/*
  제작자 우비
 */

maple = [
"#e5만 메소#n - #i1122150##z1122150# ",
"#e5만 메소#n - #i1122104##z1122104# ",
"#e5만 메소#n - #i1113055##z1113055# ",
"#e5만 메소#n - #i1152154##z1152154# ",
"#e5만 메소#n - #i1032200##z1032200# ",
"#e5만 메소#n - #i1132085##z1132085# ",
"#e5만 메소#n - #i1113064##z1113064# ",
"#e5만 메소#n - #i1113063##z1113063# ",
"#e5만 메소#n - #i1022144##z1022144# ",
"#e5만 메소#n - #i1012478##z1012478# ",
"#e5만 메소#n - #i1190302##z1190302# ",
"#e5만 메소#n - #i1190001##z1190001# ",
"#e5만 메소#n - #i1672040##z1672040# ",
"#e5만 메소#n - #i1112400##z1112400# "]



function start() { 
   var text = "악세사리 상점에 오신여러분을 환영합니다.\r\n밑 악세사리들은 모두 메소로 구입하실 수 있습니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
//	if(cm.haveItem(4310034, 100)) { 
//            cm.gainItem(4310034,-100); 
//           cm.gainItem(1122150,1);
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1122150, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1122104, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 2) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1113055, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 3) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1152154, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 4) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1032200, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 5) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1132085, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 6) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1113064, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 7) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1113063, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 8) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1022144, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 9) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1012478, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 10) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1190302, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 11) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1190001, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 12) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1672040, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 13) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1662002, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 14) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1662003, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 15) { 
if (cm.getPlayer().getMeso() >= 1) {
cm.gainMeso(-50000);
cm.gainItem(1112400, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
}
}