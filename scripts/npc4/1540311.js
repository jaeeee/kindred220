/*
importPackage(Packages.packet.creators);
importPackage(Packages.packet.skills);
importPackage(Packages.constants);
importPackage(Packages.handler.duey);

var status = -1;
var sel = 0;
var cash = "#fUI/SpiritNPC.img/BtAllReset/mouseOver/0#";
var vote = "#fUI/SpiritNPC.img/BtAllReset/pressed/0#";
var warp = "#fUI/SpiritNPC.img/backgrnd2#";
var shop = "#fUI/SpiritNPC.img/backgrnd#";
var help = "#fUI/SpiritNPC.img/BtAllReset/disabled/0#";
var constants = "#fUI/SpiritNPC.img/BtAllReset/normal/0#";

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
       /// cm.sendOk("��ſ� ���� �Ǽ���.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        var rand = Math.random() * 1000;
	var chat = "#e#b�޸����丮 #bLv."+cm.getPlayer().getLevel()+" #r#h ##k�� ȯ���մϴ�!\r\n#e#b�޸����丮#n#k�� #e#r����������#n#k #e#d�Ʒ��� �����ȳ��� ���ø� \r\n�˴ϴ�.";
	chat += "\r\n��#L0#" + cash + "#l ";
	chat += "#L1#" + vote + "#l";
	chat += "\r\n��#L2#" + warp + "#l ";
	chat += "#L3#" + shop + "#l";
	chat += "\r\n��#L4#" + help + "#l ";
	chat += "#L5#" + constants + "#l\r\n\r\n\r\n";
	if (cm.getPlayer().getGMLevel() > 9) {
	chat += "#e#b  �ؼ����������#n#k\r\n";
	chat += "#L6##e�����ۺ���#l     ";
	chat += "#L7##e����������#l     ";
	chat += "#L8##e��������#l       \r\n";
	chat += "#L9##e�ø�����#l        ";
	chat += "#L10##eDB����#l         ";
	chat += "#L11##e������������#l   ";
	chat += "#L12##e����������#l     ";
	chat += "#L13##e�Ŀ�����#l        ";
	chat += "#L14##e��������#l        ";
}
	cm.sendSimple(chat);
  } else if (status == 1) {
	if(selection == 0) {
		sel = 100;
		cm.sendYesNo("���� #bĳ�ü�#k�� �̿��Ͻðھ��? #rŰ������ #eESC#n�� ���� �۾��� ����� �� �ֽ��ϴ�.#k");
	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(9000230);
	} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(1012000);
	} else if (selection == 3) {
		cm.warp(1000000, 0)
	} else if (selection == 4) {
		var notice = "#e#r[���� ������ �ȳ�]#k#n\r\n"
		notice += "��1. ���� ��� : Human \r\n��2. ���� ������ : Human Project \r\n\r\n"
	notice += "\r\n#e#r[���� ��� �ȳ�]#k#n\r\n"
		notice += "��1. �ֿ� ��� ���ǽô� ��� �߾� ���忡 �ֽ��ϴ�.\r\n";
		notice += "��2. �޸����丮�� �ڵ����� �ý����� ����ϰ� �ֽ��ϴ�.\r\n";
                notice += "��3. �Ŀ����� �ñ����� �Ŀ������� ���ø� �ڼ��ϰ� ���Ǽ� �ֽ��ϴ�..\r\n";
		notice += "#e#r[���� ���ǻ��� �ȳ�]#k#n\r\n"
		notice += "��1. ������ ��Ӿ� ��� �� �ο�(�ο�����)�� �� ��쿡�� ������ ������ �ʰ� #e���� ����#n�� ���� �� �ֽ��ϴ�.";
        notice += "\r\n#e#r[���� ����� �ȳ�]#k#n\r\n"
                notice += "��1. �����е鰣�� ���뵵 �ſ� �߿��մϴ� ������ ������� ������� #e�޸����丮 ����#n�鿡�� ���� �����Ͻð� ���� �𸣰ڴ� �����ø� ����� ã���ּ���.";
	notice += "\n\r\n#e#r[���� ������ �̿� �ȳ�]#k#n\r\n"	
                notice += "��#e#d1. �޸��ý� �������� ��������ðų� ���������� �̿��Ͻð� �����ø� ����(����)�� MARKET PLACE ��Ż�� ������ּ���.\r\n";
                notice += "��#e#d2. �������忡 ����� �������� ����Ͻð� �����ø� ĳ�������� ����(����)�� NPC �����帯 ���� �����Ͻø� �˴ϴ�.\r\n";
                cm.sendNext(notice);
		cm.dispose();
	} else if (selection == 5) {
		var text = "���޸����丮 #bLv."+cm.getPlayer().getLevel()+" #r#h ##k�� ȯ���մϴ�.\r\n\r\n";
		text += "��#e#r< �ΰ� ��� >#n\r\n#b";
		text += "#L9010031#��Mary Story��õ�Ρ�#l\r\n";
		text += "#L9010033#���� ���� �ٲٱ�#l\r\n";
                //text += "#L9201000##r��Ƽ����Ʈ ����#k#l\r\n";
		text += "#L12101#���� ���� ��ŷ Ȯ���ϱ�#l\r\n";
		text += "#L2010011#�޸����丮 ���ý���#l\r\n";
                text += "#L1002006#������ ��ų �������ϱ�#l\r\n";
                text += "#L2400006#�޸����丮 �������� ��ų�������ϱ�#l\r\n";
                text += "#L2400005#�޸����丮 �������� �������޹ޱ�#l\r\n";
                text += "#L1061008#���޸����丮 ȯ��������#l\r\n";
		text += "#L1012005#���޸����丮 ȯ���ϱ⢾#l\r\n";
		text += "#L2080008#�޸����丮 �����ϱ�#l\r\n\r\n";
                text += "#L9001040#�ڸ޸����丮 �⼮üũ �ϱ��#l\r\n\r\n";
                text += "#L9001047#���޸����丮 ��ǳ�ٱ�ȯ��#l\r\n\r\n";
		text += "#L1052013#��������#l";
		text += "#L1052012#�ø�����";	
                text += "#L9000002#���ڹޱ�";
                text += "#L9000160#���ɻ���\r\n"; 
                text += "#L9000134##r����̱�";	
                text += "#L9030300#������̿�";  
                text += "#L9000344#�ڵ����";                                 
		cm.sendSimple(text);
	} else if (selection == 6) {
		cm.dispose();
		cm.openNpc(9090008);
	} else if (selection == 7) {
		cm.dispose();
		cm.openNpc(9900002);
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(1052013);
	} else if (selection == 9) {
		cm.dispose();
		cm.openNpc(1052012);
	} else if (selection == 10) {
		cm.dispose();
		cm.openNpc(9900001);
	} else if (selection == 11) {
		cm.dispose();
		cm.openNpc(9090102);
	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9000056);
	} else if (selection == 13) {
		cm.getPlayer().gainRC(2000000000);
		cm.sendOk("#e#b�Ŀ�����Ʈ#n#k ���� #e#b�Ϸ�!#n#k");
		cm.dispose();
	} else if (selection == 14) {
		cm.dispose();
		cm.openNpc(9120000);
	}
  } else if (status == 2) {
	if(sel == 100) {
	cm.dispose();
	cm.openCS();
	} else {
	sel = selection;
	if (sel > 0) {
	cm.dispose();
	cm.openNpc(sel);
	}
	}
	} else {
		cm.dispose();
	}
}
*/
/*

�Ϳ��÷��� ���ɿ��ǽ�

*/
importPackage(Packages.packet.creators);

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
	if(cm.getPlayer().getMapId() == 141040000 || cm.getPlayer().getMapId() == 922000009 || cm.getPlayer().getMapId() == 922000000 || cm.getPlayer().getMapId() == 130000101 || cm.getPlayer().getMapId() == 123456789){
cm.sendOk("#fn����#���⼱ Ʈ���̵带 �̿��ϽǼ� �����ϴ�. \r\n�����÷��� ä��â�� @������ �����ּ���");
	   } else {
				var jessica = " ��#fUI/CashShop.img/CSStatus/BtN/normal/0#  #fn������� Extrabold##fs20##r#h ##k #fn������� Extrabold##fs16# ���� �����Դϴ�.#fn������� Extrabold##fs12#\r\n ��#e����#n#b : "+ cm.getPlayer().getLevel() +"��#k#e�޼�#n#b : " + cm.getPlayer().getMeso()+ " #k#e��������#n#b : " + cm.getPlayer().getRC()+ " #k#ePoint#n";              
                if (cm.getJob() == 2217 || cm.getJob() == 2218){
      		jessica += "\r\n#L1##b#e���� ������#n(���ݿ��Ը� ���̴� �޴�)#k";
}
      if (cm.getJob() == 3500 || cm.getJob() == 3510 || cm.getJob() == 3511){
      		jessica += "\r\n#L1482##b#e��ī�� �����ϱ�#k";
}
                jessica += "\r\n\r\n��������#fUI/CashShop.img/CSEffect/hot/0#������ ������  #fUI/CashShop.img/CSEffect/new/0#��������������#fUI/CashShop.img/CSEffect/event/0#\r\n#l��";
                jessica += "#L1##fs20##i5450011# #r����#k  ";
                jessica += "#L2##fs20##i5044000# #b����#k  ";
                jessica += "#L3##fs20##i3994247# #g���#k";
		cm.sendSimple(jessica);
}
       

	} else if (status == 1) {
	if (selection == 0) {
		cm.dispose();
		cm.openNpc(2480013);

	} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(2142109);

	} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(1012000);

	} else if (selection == 3) {
		cm.dispose();
		cm.openNpc(2134008);

	} else if (selection == 4) {
		cm.sendOk(cm.getForceMap(cm.getPlayer().getSia()));
		cm.dispose();
	} else if (selection == 1482) {
		cm.dispose();
cm.openNpc(9390013);

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
                cm.openShop(2159342);
                cm.dispose();
	} else if (selection == 8) {
		cm.dispose();
		cm.openNpc(2134008);
	} else if (selection == 22) {
		cm.dispose();
		cm.openNpc(2001000);
	} else if (selection == 23) {
		cm.dispose();
		cm.openNpc(1032008);
	} else if (selection == 24) {
		cm.dispose();
		cm.openNpc(9000058);
		} else if (selection == 111) {
cm.setDamageSkin("0");
cm.showMessage("������ ��Ų�� ���� �Ǿ����ϴ�.");
cm.getPlayer().send(MainPacketCreator.resetAction());
return;
        } else if (selection == 10) {
                cm.warp(101050000);
                cm.dispose();
        } else if (selection == 11) {
                cm.warp(910001000);
                cm.dispose();
        } else if (selection == 21) {
                cm.warp(910000000);
                cm.dispose();
	} else if (selection == 12) {
		cm.dispose();
		cm.openNpc(9900000);
	} else if (selection == 88) {
		cm.dispose();
		cm.openNpc(2420040);
} else if (selection == 90) {
                cm.gainItem(2430675, 1);
		cm.dispose();
} else if (selection == 88) {
		cm.dispose();
		cm.openNpc(2420040);
 } else if (selection == 19) {
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
               cm.dispose();
               cm.openNpc(1012102);
        } else if (selection == 17) {
		cm.dispose();
		cm.EnterCS();
		return;
        } else if (selection == 18) {
                cm.dispose();
                cm.openNpc(9010032);

}
}
}
}