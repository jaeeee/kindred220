/*

Copyright �� 2013 Spirit Corporaion. All Rights Reserved.

leader.���Ǹ��¶��� (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.��� (guri__s@nate.com)
Make.���� (iureal@nate.com)

�� ��ũ��Ʈ�� ���Ǹ��¶��ο��� ���˴ϴ�.
���� ������ �Ǵ��� �� �ּ��� �������� ���������� ���ڽ��ϴ�.

*/

var status = 0;

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
		var jessica = "���Ǹ� �¶��� ���� #bNPC#k�Դϴ�.\r\n";
		jessica += "������ ���͵帱���?\r\n\r\n#b";
		jessica += "#e#r  <ĳ�ü�>#n\r\n#b";
                jessica += "#L18#ĳ�� ���� ";
		jessica += "#L17#ĳ�ü� �̵�\r\n\r\n\r\n#l";
		jessica += "#e#r  <ĳ���� �κ�>#n\r\n#b";
                jessica += "#L9#���� ";
                jessica += "#L2#��ų������ ";
                jessica += "#L12#���� �� ����\r\n\r\n\r\n#l";
                jessica += "#e#r  <���� ����>#n#b\r\n";
                jessica += "#L13#���� ���� ";
                jessica += "#L19#���ɵȸ� Ȯ��\r\n\r\n\r\n#l";
		jessica += "#e#r  <���� ���>#n#b\r\n";
		jessica += "#L1#��� �̵� ";
                jessica += "#L3#�Խ��� �̿�\r\n\r\n\r\n#l";
		jessica += "#e#r  <���� ���>#n#b\r\n";
                jessica += "#L11#���̽��� �� ";
                jessica += "#L21#������� ����\r\n";
		cm.sendSimple(jessica);

	} else if (status == 1) {
	if (selection == 0) {
		cm.dispose();
		cm.openNpc(1012000);

	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(1012000);

	} else if (selection == 2) {
                if(cm.getPlayer().getJob() == 10112) {
                cm.sendOk("#e#b����#n#k �������� #r#e��Ÿ#n#k ���Լ��� ��ų�����Ͱ� �����մϴ�.");
                cm.dispose();
                return;
                } 
                cm.sendOk("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.\r\n#e@��ų������#n#k ��ɾ�ε� ��ų�����Ͱ� �����մϴ�.");
                cm.getPlayer().maxSkillMaster();
                cm.dispose();
	} else if (selection == 3) {
		cm.dispose();
		cm.openNpc(9010014);

	} else if (selection == 4) {
		cm.sendSimple(cm.getForceMap(cm.getPlayer().getSia()));
		cm.dispose();

	} else if (selection == 5) {
		cm.dispose();
		cm.openNpc(2159380);

	} else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9000000);

	} else if (selection == 7) {
		cm.openShop(9000064);
		cm.dispose();
        } else if (selection == 9) {
                cm.sendOk("���Ǹ���Ÿ�� ������ �ڵ��������� �Ǿ��ֽ��ϴ�.");
                cm.dispose();
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1095003);

        } else if (selection == 10) {
                cm.warp(100000000);
                cm.dispose();

        } else if (selection == 11) {
                cm.warp(910001000);
                cm.dispose();

	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9900000);

        } else if (selection == 13) {
               if(cm.getPlayer().getSia() == 1){
               cm.getPlayer().HelloSia();
              cm.giveBuff(2311003,20);
          //     cm.teachSkill(80000007,3,3);
               cm.dispose();
               } else if(cm.getPlayer().getSia() == 2){
               cm.getPlayer().HelloSia1();
               cm.giveBuff(1101006,20);
               cm.dispose();
               }else{
               cm.sendOk("������ ���ٸ� ������ ������ �����ϴ�.");
}
	} else if (selection == 14) {
		cm.dispose();
		cm.openNpc(2154002);

        } else if (selection == 15) {
               cm.sendPendant();
               cm.dispose();

        } else if (selection == 17) {
		cm.dispose();
		cm.enterCS();
		return;
        } else if (selection == 18) {
                cm.sendOk("ĳ�������� @ĳ�� �����ұݾ� �� �̿��Ͻø� �˴ϴ�.\r\n#r�� : @ĳ�� 1000");
                cm.dispose();
        } else if (selection == 19) {
  cm.sendOk(cm.getForceMap(cm.getPlayer().getSia()));
  cm.dispose();
        } else if (selection == 20) {
                if(cm.getMeso() >= 1000000) {
                  cm.sendOk("100���޼Ҹ� �Һ��Ͽ� ���̵���ų�� ���̽��ϴ�.");
                  cm.teachSkill(80001000, 1, 1);
                  cm.dispose();
                } else {
                  cm.sendOk("�޼Ұ� �����Ͽ� ���̵� ��ų�� ���� �����ϴ�.");
                  cm.dispose();
             }
        } else if (selection == 21) {
            var spirit = "� ��Ḧ �����Ͻðپ��?\r\n\r\n";
            spirit += "#r#L1#���� ������#l#k";
            spirit += "#b#L2#��/��/�� ��������#l#k\r\n";
            cm.sendSimple(spirit);
		status = 1;
	} else if (selection == 22) {
           cm.sendSimple(cm.notic());
           cm.dispose();
         }
        } else if (status == 2) {
            if (selection == 1) {
            cm.openShop(9000064);
            cm.dispose();
           } else if (selection == 2) {
            cm.openShop(2159342);
            cm.dispose();
}
}
}
}