/*
  ������ �̺�
 */

maple = [
"#e#d [�ϰ���° ����Ʈ�� �����ϰڽ��ϴ�]. #n\r\n",
"#e#d [���� �������� ������ ����] #n\r\n"]

function start() { 
   var text = "#e#d���� �������� ������ �����Ϸ��� #i 2430071# �� �ʿ��մϴ�.#n\r\n "

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
            cm.sendOk("#e#d [������ ����Ʈ] ���� �������� �濡 �����߽��ϴ�#n\r\n");
            cm.dispose(); 
        } else {
            cm.sendOk("#i2430071# 1���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
}
}
}