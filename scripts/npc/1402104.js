/*
  ������ ���
 */

maple = [
"#i4310014# 5���� - #i2431941# 1�� ��ȯ"]


function start() { 
   var text = "Ÿ���� ���̽��� ���� �ٲ�  #i4310014#���� ���̽��� ���� ���ڸ� �����ϽǼ��ֽ��ϴ�."

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
            cm.sendOk("#i4310014# 5���� �����Ͻ� ���������� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310014# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        } 

}
}