/*
  ������ ���
 */

maple = [
"#e#d [������ ����Ʈ�� �����ϰڽ��ϴ�]. #n\r\n",
"#e#d#i3994661# [1��- ���� ���� ��ȯ] #n\r\n"]

function start() { 
   var text = "#e#d���� ������ ��ȯ�Ͻ÷���#i3994661#�� �ʿ��մϴ� �������� ����Ʈ�� �������ս��ϴ�#n\r\n "

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
            cm.sendOk("#i3994661# 2���� ���� ������ ��ȯ�߽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i3994661# 2���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
}
}
}