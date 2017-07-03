/*
  제작자 우비
 */

maple = [
"#e#d [팬텀의 퀘스트를 진행하겠습니다]. #n\r\n",
"#e#d#i3994661# [1개- 괴도 팬텀 소환] #n\r\n"]

function start() { 
   var text = "#e#d괴도 팬텀을 소환하시려면#i3994661#가 필요합니다 아이템은 퀘스트로 받을수잇습니다#n\r\n "

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
            cm.warp(303090210); 
            cm.dispose();
        
        } else if (selection == 1) { 
	if(cm.haveItem(3994661, 2)) { 
            cm.gainItem(3994661,-2); 
            cm.spawnMob(9300762,0,0);
            cm.sendOk("#i3994661# 2개로 괴도 팬텀을 소환했습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i3994661# 2개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
}
}
}