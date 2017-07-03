/*


  제작자 우비
 */

maple = [
"#e5백만 메소#n - #i2049153# 놀라운 긍정의 혼돈 주문서 #r10장#k",
"#e5백만 메소#n - #i4001832##z4001832# #r5000장#k",
"#e5백만 메소#n - #i2049360##z2049360# #r50장#k",
"#e5백만 메소#n - #i2049704# 레전드리 잠재능력 부여주문서 #r50장#k",
"#e5백만 메소#n - #i2048308# 에디셔널 잠재능력 부여주문서 #r50장#k",
"#e5백만 메소#n - #i2049512##z2049512# #r100개#k",
"#e5백만 메소#n - #i2048304##z2048304# #r100개#k",
"#e5백만 메소#n - #i5062009##z5062009# #r100개#k",
"#e5백만 메소#n - #i5062010##z5062010# #r100개#k",
"#e5백만 메소#n - #i5062500# 에디셔널 미라클 큐브 #r100개#k",
"#e5백만 메소#n - #i2531000# 프로텍트 쉴드 #r100개#k",
"#e5백만 메소#n - #i2532000# 세이프티 쉴드 #r100개#k",
"#e5백만 메소#n - #i2533000# 리커버리 쉴드 #r100개#k",
"#e5백만 메소#n - #i2046841# 얼티밋 악세 공줌 20% #r10개#k",
"#e5백만 메소#n - #i2046842# 얼티밋 악세 마줌 20% #r10개#k",
"#e5백만 메소#n - #i2046971# 얼티밋 한손 마줌 20% #r10개#k",
"#e5백만 메소#n - #i2046967# 얼티밋 한손 공줌 20% #r10개#k",
"#e5백만 메소#n - #i2047803# 얼티밋 두손 공줌 20% #r10개#k",
"#e5백만 메소#n - #i2047917# 얼티밋 방어구 강화 20% #r10개#k",
"#e5백만 메소#n - #i2470000##z2470000# #r100개#k",
"#e1억만 메소#n - #i4001715#동전(구매하기 1억) #r1개#k"]


function start() { 
   var text = "레어주문서 상점에 오신여러분을 환영합니다.\r\n밑 주문서들은 모두 메소로 구입하실 수 있습니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
//	if(cm.haveItem(4310034, 10)) { 
//            cm.gainItem(4310034,-10); 
//           cm.gainItem(2049153,30);
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049153, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();;
}
        } else if (selection == 1) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(4001832, 5000);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 2) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049360, 50);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 3) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049704, 50);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 4) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2048308, 50);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 5) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2049512, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 6) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2048304, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 7) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(5062009, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 8) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(5062010, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 9) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(5062500, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 10) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2531000, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 11) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2532000, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 12) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2533000, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 13) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046841, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 14) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046842, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 15) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046971, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 16) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2046967, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 17) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2047803, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 18) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2047917, 10);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 19) { 
if (cm.getPlayer().getMeso() >= 5000000) {
cm.gainMeso(-5000000);
cm.gainItem(2470000, 100);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
        } else if (selection == 20) { 
if (cm.getPlayer().getMeso() >= 100000000) {
cm.gainMeso(-100000000);
cm.gainItem(4001715, 1);
            cm.sendOk("선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("메소가 부족합니다.");
            cm.dispose();
}
}
}