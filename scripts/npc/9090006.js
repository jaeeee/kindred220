/*

������ : �г��� (zmqkf4430)����

*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var chat = "#r���� �¶���#k�� ���� ���� ȯ���մϴ�.#b\r\n";
            chat += "\r\n#L0#��Ű �巡�� ��ų�� ���ڽ��ϴ�.(��3)";
            chat += "\r\n#L1#���̽� �巡�� ��ų�� ���ڽ��ϴ�.(��5)";
            chat += "\r\n#L2#���� �巡�� ��ų�� ���ڽ��ϴ�.(��7)\r\n";
            chat += "\r\n#L3#������ũ�� ��ų�� ���ڽ��ϴ�.(��3)";
            chat += "\r\n#L4#������ũ�� ��ų�� ���ڽ��ϴ�.(��5)";
            chat += "\r\n#L5#������ũ�� ��ų�� ���ڽ��ϴ�.(��7)\r\n";
            chat += "\r\n#L6#����Ǳ�� ��ų�� ���ڽ��ϴ�.(��3)";
            chat += "\r\n#L7#����Ǳ�� ��ų�� ���ڽ��ϴ�.(��5)";
            chat += "\r\n#L8#����Ǳ�� ��ų�� ���ڽ��ϴ�.(��7)\r\n";
            chat += "\r\n#L9#�������̾� ��ų�� ���ڽ��ϴ�.(��3)";
            chat += "\r\n#L10#�������̾� ��ų�� ���ڽ��ϴ�.(��5)";
            chat += "\r\n#L11#�������̾� ��ų�� ���ڽ��ϴ�.(��7)";
            cm.sendSimple(chat);
        } else if (status == 1) {
            if (selection == 0) {
         if ((cm.haveItem(5000243, 1))) {
        var chat = "�巡���ǳ����ູ #rLv.1#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000020,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000243#��Ű�巡�� �� �־�� �մϴ�.");
        cm.dispose();
}
} else if (selection == 1) {
         if ((cm.haveItem(5000244, 1))) {
        var chat = "�巡���ǳ����ູ #rLv.2#k ��ų�� ���޵Ǿ����ϴ�.";
         cm.teachSkill(80000021,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000244#���̽��巡�� �� �־�� �մϴ�.");
        cm.dispose();
}
} else if (selection == 2) {
         if ((cm.haveItem(5000245, 1))) {
        var chat = "�巡���ǳ����ູ #rLv.3#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000022,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000245#����巡�� �� �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 3) {
         if ((cm.haveItem(5000240, 1))) {
        var chat = "��ũ��ŴϾ� #rLv.1#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000017,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000240#������ũ�� �� 1������ �־�� �մϴ�.");
        cm.dispose();
       }
} else if (selection == 4) {
         if ((cm.haveItem(5000240, 2))) {
        var chat = "��ũ��ŴϾ� #rLv.2#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000018,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000240#������ũ�� �� 2������ �־�� �մϴ�.");
        cm.dispose();
    }
} else if (selection == 5) {
         if ((cm.haveItem(5000240, 3))) {
        var chat = "��ũ��ŴϾ� #rLv.3#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000019,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000240#������ũ�� �� 3������ �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 6) {
         if ((cm.haveItem(5000239, 1))) {
        var chat = "����Ǳ�� #rLv.1#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000013,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000239#���׼ӻ�� �� 1������ �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 7) {
         if ((cm.haveItem(5000239, 2))) {
        var chat = "����Ǳ�� #rLv.2#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000014,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000239#���׼ӻ�� �� 2������ �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 8) {
         if ((cm.haveItem(5000239, 3))) {
        var chat = "����Ǳ�� #rLv.3#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000015,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000239#���׼ӻ�� �� 3������ �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 9) {
         if ((cm.haveItem(5000249, 1))) {
        var chat = "�������̾� #rLv.1#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000026,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000249#������ ������ �� �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 10) {
         if ((cm.haveItem(5000250, 1))) {
        var chat = "�������̾� #rLv.2#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000027,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000250#��ũ ������ �� �־�� �մϴ�.");
        cm.dispose();
        }
} else if (selection == 11) {
         if ((cm.haveItem(5000251, 1))) {
        var chat = "�������̾� #rLv.3#k ��ų�� ���޵Ǿ����ϴ�.";
        cm.teachSkill(80000028,1,1); 
        cm.sendNext(chat);
        cm.dispose();
        }
     else {
        cm.sendOk("#i 5000251#�ϴ� ������ �� �־�� �մϴ�.");
        cm.dispose();
        }
      }
   }
  }
}


