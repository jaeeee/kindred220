importPackage
var status = 0;
var sele = 0;
var price = 0;
var itemSelection = 0;

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
	    var chat = "����� �ý����Դϴ� : �׸��� �������ּ��� \r\n";
	    chat += "#L0#������ ���#l";
	    chat += "#L1#��ϵ� ������ ��ȸ#l";
	    chat += "#L2#��ϵ� ������ �˻�#l";
	    chat += "\r\n#L3#������ ������ ��ȸ#l";
	    chat += "#L4#�޼� ��ȸ#l\r\n\r\n#r(������ ������ �������� ã�ư��� �����ô� �е��� ���̵� ���� ��� �Դϴ�)";
    	    cm.sendSimple(chat);
        } else if (status == 1) {
	    sele = selection;
	    if (sele == 0) {
    	    	cm.sendSimple("����Ͻ� �������� �������ּ��� : \r\n" + cm.getAllItem());
            } else if (sele == 1) {
    	    	cm.sendSimple("��ϵ� ������ ����Դϴ� : \r\n" + cm.getAllAuctionItemsToScript());
	    } else if (sele == 2) {
	        cm.sendGetText("�˻�� �Է� ���ּ���.");
	    } else if (sele == 3) {
    	    	cm.sendSimple("������ �����۵� �Դϴ�. : \r\n" + cm.getAllBuyItemToScript());
	    } else if (sele == 4) {
   	    	cm.sendYesNo(cm.getPlayer().getAuctionMeso() + "�޼Ҹ� ���� �� �ֽ��ϴ�. �����ðڽ��ϱ�?");
	    }
        } else if (status == 2) {
	    itemSelection = selection;
	    if (sele == 0) {
	        cm.sendGetText("���� �������� �����ּ���!");
            } else if (sele == 1) {
	        cm.sendGetText(cm.itemDateSting(itemSelection) + "\r\n �󸶿� ���� �Ͻðڽ��ϱ�?");
            } else if (sele == 2) {
		cm.sendSimple("�˻���� : \r\n" + cm.searchAuctionItemFromString(cm.getText()));
		status = 1;
	        sele = 1;
	    } else if (sele == 3) {
	        cm.sendOk(cm.addAuction(itemSelection) ? "�������� �����߽��ϴ�." : "�޼Ұ� �����մϴ�.");
	    } else if (sele == 4) {
		cm.gainMeso(cm.getPlayer().getAuctionMeso());
		cm.getPlayer().setAuctionMeso(0);
	    }
	} else if (status == 3) {
	    price = cm.getText();
	    if (sele == 0) {
	    	cm.setAuctionItem(itemSelection, price);
            } else if (sele == 1) {
	        if (cm.setAuctionNow(price, itemSelection)) {
			cm.setNowChrId(itemSelection);
			cm.sendOk("������ �����߽��ϴ�!");
	        } else {
			cm.sendOk("������ �����߽��ϴ�!");
	        }
           	cm.dispose();
	    }
	}
    }
}