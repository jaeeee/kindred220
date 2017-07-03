/*
  제작자 우비
 */

maple = [
"#i1212077#마이스터 타나토스    -   #i4310014# 1개 교환",
"#i1222072#마이스터 엔젤릭슈터    -    #i4310014# 1개 교환",
"#i1242076#마이스터 스플릿엣지  -    #i4310014# 1개 교환",
"#i1302285#마이스터 글라디우스  -    #i4310014# 1개 교환",
"#i1312162#마이스터 위클리버     -    #i4310014# 1개 교환",
"#i1322213#마이스터 워해머        -    #i4310014# 1개 교환",
"#i1332235#마이스터 카타르        -    #i4310014# 1개 교환",
"#i1342084#마이스터 블레이드     -    #i4310014# 1개 교환",
"#i1362099#마이스터 페르소나     -    #i4310014# 1개 교환",
"#i1372186#마이스터 이블완드     -    #i4310014# 1개 교환",
"#i1402204#마이스터 클레이모어  -    #i4310014# 1개 교환",
"#i1432176#마이스터 배틀스피어  -    #i4310014# 1개 교환",
"#i1442232#마이스터 헬버드        -    #i4310014# 1개 교환",
"#i1452214#마이스터 배틀보우     -    #i4310014# 1개 교환",
"#i1462202#마이스터 크로스보우  -    #i4310014# 1개 교환",
"#i1472223#마이스터 다크슬레인  -    #i4310014# 1개 교환",
"#i1482177#마이스터 그리폰클로  -    #i4310014# 1개 교환",
"#i1492188#마이스터 인피니티     -    #i4310014# 1개 교환",
"#i1522103#마이스터 이글윙        -    #i4310014# 1개 교환",
"#i1532106#마이스터 크래쉬        -    #i4310014# 1개 교환",
"#i1382220#마이스터 배틀스태프  -    #i4310014# 1개 교환"]



function start() { 
   var text = "VIP 골드존 얻은 타직업 마이스터 장비를 #i4310014# 으로 교환하실수있습니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(1212077, 1)) { 
            cm.gainItem(1212077,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();;
        } 
        } else if (selection == 1) { 
	if(cm.haveItem(1222072, 1)) { 
            cm.gainItem(1222072,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 2) { 
	if(cm.haveItem(1242076, 1)) { 
            cm.gainItem(1242076,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 3) { 
	if(cm.haveItem(1302285, 1)) { 
            cm.gainItem(1302285,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 4) { 
	if(cm.haveItem(1312162, 1)) { 
            cm.gainItem(1312162,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 5) { 
	if(cm.haveItem(1322213, 1)) { 
            cm.gainItem(1322213,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 6) { 
	if(cm.haveItem(1332235, 1)) { 
            cm.gainItem(1332235,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 7) { 
	if(cm.haveItem(1342084, 1)) { 
            cm.gainItem(1342084,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 8) { 
	if(cm.haveItem(1362099, 1)) { 
            cm.gainItem(1362099,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 9) { 
	if(cm.haveItem(1372186, 1)) { 
            cm.gainItem(1372186,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 10) { 
	if(cm.haveItem(1402204, 1)) { 
            cm.gainItem(1402204,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 11) { 
	if(cm.haveItem(1432176, 1)) { 
            cm.gainItem(1432176,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 12) { 
	if(cm.haveItem(1442232, 1)) { 
            cm.gainItem(1442232,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
 }
        } else if (selection == 13) { 
	if(cm.haveItem(1452214, 1)) { 
            cm.gainItem(1452214,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 14) { 
	if(cm.haveItem(1462202, 1)) { 
            cm.gainItem(1462202,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 15) { 
	if(cm.haveItem(1472223, 1)) { 
            cm.gainItem(1472223,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 16) { 
	if(cm.haveItem(1482177, 1)) { 
            cm.gainItem(1482177,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 17) { 
	if(cm.haveItem(1492188, 1)) { 
            cm.gainItem(1492188,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 18) { 
	if(cm.haveItem(1522103, 1)) { 
            cm.gainItem(1522103,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 19) { 
	if(cm.haveItem(1532106, 1)) { 
            cm.gainItem(1532106,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
        } else if (selection == 20) { 
	if(cm.haveItem(1382220, 1)) { 
            cm.gainItem(1382220,-1); 
            cm.gainItem(4310014,1); 
            cm.sendOk("타직업 마이스터 장비를 #i4310014#으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("해당하는 마이스터 장비가 있는지 확인하세요.");
            cm.dispose();
}
}
}