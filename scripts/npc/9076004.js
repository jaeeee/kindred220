var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
    cm.sendSimple ("#e< ��ŷ : ��� ��ŷ >#n\r\n\r\n���� ��ŷ�� �˷��ִ� ��ŷ �Խ����Դϴ�. ���Ͻô� ���� �Ʒ� �׸񿡼� �������ּ���\r\n\r\n" +"#L81##r[ New ] #b���� ��ŷ#k" +"#k#L82##r[ HOT ] #b�ູ ����Ʈ ��ŷ#k");
      
       } else if (selection == 81) {
        cm.dispose();
        cm.openNpc(1400003);
       } else if (selection == 82) {
        cm.dispose();
        cm.openNpc(1002009);

     


      	    } 
         }
      }