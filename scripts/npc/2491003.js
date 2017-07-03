/*
  제작자 이브
 */

maple = [
"#e#d [일곱번째 퀘스트를 시작하겠습니다]. #n\r\n",
"#e#d [검은 마법사의 방으로 입장] #n\r\n"]

function start() { 
   var text = "#e#d검은 마법사의 방으로 입장하려면 #i 2430071# 가 필요합니다.#n\r\n "

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
           if(cm.haveItem(4031788, 1))
           if(cm.haveItem(4031013, 1))
           if(cm.haveItem(4009011, 1))
           if(cm.haveItem(4031064, 1))
           if(cm.haveItem(4032002, 1))
           if(cm.haveItem(4031195, 1))
           if(cm.haveItem(4000633, 1))
            cm.spawnMob(8930000,0,0);
            cm.dispose(); 
       
        } else if (selection == 1) { 
	if(cm.haveItem( 2430071, 1)) { 
            cm.gainItem(2430071,-1); 
            cm.warp(927020070); 
            cm.sendOk("#e#d [마지막 퀘스트] 검은 마법사의 방에 입장했습니다#n\r\n");
            cm.dispose(); 
        } else {
            cm.sendOk("#i2430071# 1개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
}
}
}