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
		var jessica = "��ó�� ��������ͳ�?\r\n";
		jessica += "�׷��ٸ� #r����#k�� �غ�����!!\r\n#b";
                if(cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getKeyValue("rkrtjd") == null) {
                jessica += "\r\n#fUI/UIWindow.img/UtilDlgEx/list1#\r\n";
		jessica += "#L0#������ ����(���۰���)";
		} else if (cm.getPlayer().getKeyValue("rkrtjd") == "start" && !cm.haveItem(4033302)) {
                jessica += "\r\n#fUI/UIWindow.img/UtilDlgEx/list0#\r\n";
		jessica += "#L1#������ ����(������)";		
		} else if (cm.getPlayer().getKeyValue("rkrtjd") == "start" && cm.haveItem(4033302)) {
                jessica += "\r\n#fUI/UIWindow.img/UtilDlgEx/list3#\r\n";
		jessica += "#L2#������ ����(�Ϸ�)";
		} else if (cm.getPlayer().getLevel() < 200) {
		jessica += "#b������ ���� ���� ���� : ���� 200#k";
		}
		cm.sendSimple(jessica);
		if(cm.getPlayer().getKeyValue("rkrtjd") == "clear") {
		cm.dispose();
		} else if (cm.getPlayer().getLevel() < 200) {
		cm.dispose();
		}
	} else if (status == 1) {
	if(selection == 0) {
	cm.sendYesNo("�����̶� ��������� �����Ѵ� ������ ������ ������ ������ ����! ������ ��ȭ�ϴ� ����� �پ��ϴ� #bŰ��#k �Կ��Լ� #b�����Ƽ ��ȭ#k�� �ϴ°͵� ����߿� �ϳ��� ������ �װ��� �����ۿ� �����ϴ°ſ� �Ұ��ϴ�!!\r\n���� ������ �ؿ��� �׼����� ������ #r����#k �� �����ϴ��� �����ϴ� �ʵ� #r����#k�� �ϸ� ����� �������������� ������ �? ���� ���ڷ� ���ͺ��ھ�?");
	} else if (selection == 1) {
	cm.sendOk("ħ���ϰ� ������ óġ�غ��°Ŵ�!!");
	cm.dispose();
	} else if (selection == 2) {
	if (!cm.haveItem(2430492) && cm.haveItem(4033302) && cm.getPlayer().getKeyValue("rkrtjd") == "start") {
	cm.getPlayer().setKeyValue("rkrtjd","clear");
	cm.gainItem(4033302,-1);
	cm.gainItem(2430492,1);
	cm.sendOk("���� ���Ǵ��� Ʋ���� �ʾҾ� ����! �ʴ� �������� ���� ���ڴ�!! �������� #r����#k �� #b������ ����#k �����ؼ� ������ ���ְڴ�.\r\n\r\n#e<������ ����>#n\r\n#b������ ����#k�� �����ϰ� ���͸� ��ٺ��� #b������ ����#k�� ��ӵǴ°��� ���� �����Ŵ�. #b������ ����#k������ #r���� ����Ʈ#k�� �������� �Ź� �����°��� �ƴϴϱ� �����ϵ���! �׷��� #r���� ����Ʈ 1,000#k �� ������ #b������ ����#k�� ������ �Ҽ��ְ� �ȴ�. �������� �����̸� ����� ���������Ŷ�� �����Ѵ�.\r\n\r\n#e<����Ʈ �Ϸ� ������>#n\r\n#i2430492##b#z2430492##k");
	cm.dispose();	
		}	
	}
} else if (status == 2) {
if(!cm.haveItem(2430492) && cm.getPlayer().getKeyValue("rkrtjd") == null) {
cm.getPlayer().setKeyValue("rkrtjd","start");
cm.sendOk("���Ҿ�! �׷� ���� ���ڰ� �������� �׸����� Ȯ���� �غ��߰پ� ���� #b�̽�ƽ ����Ʈ#k ��°Ͷ����� �������� Ȱ�������� �˰��ֳ�? ���� ������ ������ #b�̽�ƽ ����Ʈ#k�� �������� ������ óġ�ϰ� ����ǰ�� ������ ����ȴ�.\r\n\r\n#e<����Ʈ ����ǰ>#n\r\n[#i4033302##b#z4033302#(1)#k]"); 
		cm.dispose();
	}
		}
	}
}