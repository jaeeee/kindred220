

/*

�Ͽ���� �׸��� ���K(melon_dev@nate.com)
���� 11���� ������ ��ǰ�̶���?

*/

var status = -1;
var star = "#fUI/UIToolTip/Item/Equip/Star/Star#"

function start() {
    status = -1;
    action (1, 0, 0);
}


function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }
    if (status == -1) {
       cm.dispose();
}
    if (status == 0) {
        var ask = "#e#b�ڰ�#n#k�� ���߽� �п��Դ� #e#r���� ��#k#n�� ������ �帮�ڽ��ϴ�.\r\n\r\n"
            ask+= "#L0#"+star+"#b �����Ƽ�� �����ϱ� ���� ������ �����ΰ���?\r\n";
            ask+= "#L1#"+star+"#b �����Ƽ �缳���� ��� �ϴ� ���ΰ���?\r\n";
         //   ask+= "#L2#"+star+"#b ���� �����Ƽ�� ������ ���ڽ��ϴ�.";
        cm.sendSimple(ask);
        return;
     } else if (status == 1) {
      if (selection == 0) {
        var how = "#r���� ��#k�� �ޱ� ���ؼ��� �Ʒ��� ���� ������ �ʿ��մϴ�.\r\n\r\n"; 
            how+= ""+star+" #r��Ÿ�ý��ۿ��� �������� �� �Ͻø� ���\r\n";
            how+= ""+star+" #r�����Ƽ�� ����˴ϴ�.";
            cm.sendOk(how);
            cm.dispose();
        } else if (selection == 1) {
        var reset = "#b�����Ƽ �缳���� �Ϸ��� ������ ���� �������� �ʿ��մϴ�.#k\r\n"
            reset+="#i2431174# #r[#t2431174#]#k\r\n�� ���������� ��ġ�� �׾Ƽ� �缳�� �Ͻ� �� �ֽ��ϴ�.\r\n"
            reset+="#t2431174#�� �������� 30%�� Ȯ���� ����˴ϴ�."
            cm.sendOk(reset);
            cm.dispose();
            return;
       } else if (selection == 2) {
         if (cm.getPlayer().getLevel() < 130) {
            cm.sendOk("������ #b130 �̻�#k���� �����Ƿ� ���� �帱 �� �����ϴ�.");
            cm.dispose();
         } else if (cm.getPlayer().getMeso() < 5000000) {
            cm.sendOk("�޼Ұ� ������ ���� �帱 �� �����ϴ�.");
            cm.dispose();
          } else if (cm.getPlayer().getInnerLevel() >= 4) {
            cm.sendOk("�̹� ������� ����Ǿ����ϴ�.");
          } else {
            cm.getPlayer().innerLevelUp();
	    cm.getPlayer().dropMessage(6, "������ ���� ����� ���� ��ȭ�Ǿ����ϴ�.");
            cm.gainMeso(-5000000);
            cm.reloadChar();
            cm.dispose();
        }
       
}
}

    }


    

