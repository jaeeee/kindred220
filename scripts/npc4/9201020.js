


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
if(cm.getPlayer().getKeyValue("�����Ƽ") == null) {; cm.getPlayer().setKeyValue("�����Ƽ",3); }

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
        var ask = "#e#r< ���ο�ɷ� :: �����Ƽ����!! >#n#k\r\n#b�����Ƽ#k�� �����ϱ� ���ؼ��� #r1�� �޼ҿ� 130 ��������#k �� ���� �̰��� �����ϰ� #b�����Ƽ �ɷ�#k�� �����Ű�ھ��?\r\n\r\n"
            ask+= "#L1##b �����Ƽ �缳���� ��� �ϴ� ���ΰ���?\r\n";
            ask+= "#L2##b ���� �����Ƽ�� ������ ���ڽ��ϴ�.";
        cm.sendSimple(ask);
        return;
     } else if (status == 1) {
      if (selection == 0) {
        var how = "#r���ο� ��#k�� �ޱ� ���ؼ��� �Ʒ��� ���� ������ �ʿ��մϴ�.\r\n\r\n"; 
            how+= ""+star+" #b����#k�� #r130 �̻�#k�̾�� �˴ϴ�.\r\n";
            how+= ""+star+" #b1�� �޼�#k�� �ʿ��մϴ�.";
            cm.sendOk(how);
            cm.dispose();
        } else if (selection == 1) {
        var reset = "#b�����Ƽ �缳���� �Ϸ��� ������ ���� �������� �ʿ��մϴ�.#k\r\n"
            reset+="#i2431174# #r[#t2431174#]#k\r\n�� ���������� ��ġ�� �÷��� [S] ����Ű���ִ� �ɷ�ġ����â���� �缳���� �ϽǼ��ֽ��ϴ�.\r\n"
            cm.sendOk(reset);
            cm.dispose();
            return;
       } else if (selection == 2) {
         if (cm.getPlayer().getLevel() < 130) {
            cm.sendOk("������ #b130 �̻�#k���� �����Ƿ� ���� �帱 �� �����ϴ�.");
            cm.dispose();
         } else if (cm.getPlayer().getMeso() < 100000000) {
            cm.sendOk("�޼Ұ� ������ ���� �帱 �� �����ϴ�.");
            cm.dispose();
          } else if (cm.getPlayer().getKeyValue("�����Ƽ") <= 0) {
            cm.sendOk("�̹� ������� ����Ǿ����ϴ�.");
          } else {
            cm.getPlayer().innerLevelUp();
	    cm.getPlayer().dropMessage(6, "��ڿ� ���� ����� ���� ��ȭ�Ǿ����ϴ�.");
            cm.gainMeso(-100000000);
            cm.fakeRelog();
            cm.updateChar();
            cm.getPlayer().setKeyValue("�����Ƽ",Number(cm.getPlayer().getKeyValue("�����Ƽ")) - 1)
            cm.dispose();
        }
       
}
}

    }


    

