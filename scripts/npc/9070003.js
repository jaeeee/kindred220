importPackage(Packages.packet.creators);

var status = -1;

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
	var text = "���丮�� ��� �����ø� Ư���� ������ ���� �� �ִ� ��� �˰� ��Ű���?\r\n";
		if(cm.getPlayer().getKeyValue("31232") == 1) {
		text += "#L0##r��#d ���丮 : ���� ��#l\r\n";
		}
		if(cm.getPlayer().getKeyValue("3872") == 1) {
		text += "#L1##r��#d ���丮 : Ȳ�ݻ��#l\r\n";
		}
		if(cm.getPlayer().getKeyValue("31328") == 1) {
		text += "#L2##r��#d ���丮 : ��Ÿ��ƽ �׸���ũ#l\r\n";
		}
		if(cm.getPlayer().getKeyValue("3521") == 1) {
		text += "#L3##r��#d ���丮 : �ð��� ����#l\r\n";
		}
		if(cm.getPlayer().getKeyValue("32524") == 1) {
		text += "#L4##r��#d ���丮 : ũ��Ƽ�ƽ�#l\r\n";
		}
	cm.sendSimple(text);


	} else if (status == 1) {
		sL = selection;
		var StoryName = sL == 0 ? "���� ��#k��" :
				sL == 1 ? "Ȳ�ݻ��#k��" :
				sL == 2 ? "��Ÿ��ƽ �׸���ũ#k��" :
				sL == 3 ? "�ð��� ����#k��" :
				sL == 4 ? "ũ��Ƽ�ƽ�" : "";
		var s = sL == 0 ? 0 : 1
		itemSet = new Array(
					new Array(2432532, 4310015, 4001832, 5064000, 5064100, 5062009),
					new Array(2049300, 4310015, 4001832, 5064000, 5064100, 5062009),
					new Array(2049300, 3994720, 4310015, 4001832, 5062010, 5062500),
					new Array(1022232, 2430482, 2049704, 3994720, 4310015, 4310119, 4001832, 5062010));
		itemQty = new Array(
					new Array(1, 100, 300, 1, 1, 20),
					new Array(2, 150, 300, 3, 3, 25),
					new Array(1, 100, 100, 200, 20, 10),
					new Array(1, 1, 1, 200, 700, 1000, 1500, 300));
		GiveItem = itemSet[sL];
		Quantity = itemQty[sL];
		var text = "#b���丮 : "+StoryName+" ��� ���̱���! ���ϵ帳�ϴ�. å�� �д� ��ſ��� �ƴ� �ڿ��Դ� ������ �غ�Ǿ� �ֽ��ϴ�.\r\n\r\n";
		text += "#fUI/UIWindow.img/QuestIcon/4/0#";

		for(var i = 0; i < GiveItem.length; i++){
		text += "\r\n#i"+GiveItem[i]+"# #z"+GiveItem[i]+"# "+Quantity[i]+"�� #k";
		}
		cm.sendNext(text);

	} else if (status == 2) {
		GivenCheck();
		for (var i = 0; i < GiveItem.length; i++){
		cm.gainItem(GiveItem[i], Quantity[i]);
		showText = Quantity[i] == 1 ? "" : " "+Quantity[i]+"��"
		showItem = GiveItem[i] == 4001832 ? "�ֹ��� ����" :
			   GiveItem[i] == 4310015 ? "������ ��ǥ" :
			   GiveItem[i] == 4310119 ? "�Ǹ��ý� ����" : Packages.server.items.ItemInformation.getInstance().getName(GiveItem[i])
		cm.getPlayer().send(MainPacketCreator.getGMText(6, "�������� ȹ���Ͽ����ϴ�. ("+showItem+""+showText+")"));	
		}

		cm.dispose();

	}
	
}
}

function GivenCheck() {
	switch (sL) {
	case 0:
	cm.getPlayer().setKeyValue("31232", 2);
	return;

	case 1:
	cm.getPlayer().setKeyValue("3872", 2);
	return;

	case 2:
	cm.getPlayer().setKeyValue("31328", 2);
	return;

	case 3:
	cm.getPlayer().setKeyValue("3521", 2);
	return;

	case 4:
	cm.getPlayer().setKeyValue("32524", 2);
	return;

	}

}