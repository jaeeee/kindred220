/*
  ������ ���
 */

maple = [
"#i4310034# 10���� - #i4032521# 1�� ��ȯ"]


function start() { 
   var text = "VIPƼ���� �����ϴ� Ư�� �����Դϴ�\r\nVIPƼ���� �����ϽǷ��� Ư������ �ʿ��մϴ�."

   for (var i = 0; i < maple.length; i++) 
       text += "\r\n#L" + i + "#" + maple[i] + "#l"; 
   cm.sendSimple(text); 
} 

function action(mode, type, selection) { 
    cm.dispose(); 
        if (selection == 0) { 
	if(cm.haveItem(4310034, 10)) { 
            cm.gainItem(4310034,-10); 
            cm.gainItem(4032521,1); 
            cm.sendOk("#i4310034# 10���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310034# 10���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        } 
}
}