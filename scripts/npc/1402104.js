/*
  제작자 우비
 */

maple = [
"#i4310014# 5개로 - #i2431941# 1개 교환"]


function start() { 
   var text = "타직업 마이스터 장비로 바꾼  #i4310014#으로 마이스터 무기 상자를 구매하실수있습니다."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310014, 5)) { 
            cm.gainItem(4310014,-5); 
            cm.gainItem(2431941,1); 
            cm.sendOk("#i4310014# 5개로 선택하신 아이템으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310014# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        } 

}
}