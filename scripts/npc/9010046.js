var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status--;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        var chat = "���Ͻô� �����ݾ��� ���ø�˴ϴ�~ ȯ���� ����ȵǿ�!#b"
            chat += "#k\r\n#L1##b100,000 �޼ҷ� 1000 ĳ�� �ٲٱ�";
	    chat += "#k\r\n#L2##b1,000,000 �޼ҷ� 10,000 ĳ�� �ٲٱ�";
            chat += "#k\r\n#L3##b10,000,000 �޼ҷ� 100,000 ĳ�� �ٲٱ�";
	    cm.sendSimple(chat);
	} else if (status == 1) {
 	  if (selection == 1) {
              if (cm.getPlayer().getMeso() >= 100000) {
                  cm.sendOk ("100000 �޼Ҹ� 1000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                  cm.gainMeso (-100000);
                  cm.gainNX (1000);
                  cm.dispose();
              } else {
                  cm.sendOk ("�޼Ұ� �����մϴ�!");
                  cm.dispose();
              }
          } else if (selection == 2) {
              if (cm.getPlayer().getMeso() >= 1000000) {
                  cm.sendOk ("1000000 �޼Ҹ� 10000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                  cm.gainMeso (-1000000);
                  cm.gainNX (10000);
                  cm.dispose();
              } else {
                  cm.sendOk ("�޼Ұ� �����մϴ�!");
                  cm.dispose();
              }
          } else if (selection == 3) {
              if (cm.getPlayer().getMeso() >= 10000000) {
                  cm.sendOk ("1000000 �޼Ҹ� 100000 ĳ�÷� ��ȯ�Ͽ����ϴ�!");
                  cm.gainMeso (-10000000);
                  cm.gainNX (100000);
                  cm.dispose();
              } else {
                  cm.sendOk ("�޼Ұ� �����մϴ�!");
                  cm.dispose();
              }
          }
        }
}