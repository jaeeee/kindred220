importPackage(Packages.packet.creators);
importPackage(Packages.handling.world);
importPackage(Packages.client.items);
importPackage(Packages.server.items);
importPackage(Packages.launch.world);
importPackage(Packages.main.world);
importPackage(Packages.tools);
importPackage(java.lang);

�޷� = new Date();

��   = �޷�.getFullYear();
��   = �޷�.getMonth() + 1;
��   = �޷�.getDate();
�Ͽ� = �޷�.getDay();
���� = �޷�.getHours() < 12 ? "����" : "����"			
��   = �޷�.getHours() > 12 ? �޷�.getHours() - 12 : �޷�.getHours();
��   = �޷�.getMinutes();
��   = �޷�.getSeconds();
���� = �Ͽ� == 0 ? "�Ͽ���" : �Ͽ� == 1 ? "������" : �Ͽ� == 2 ? "ȭ����" : �Ͽ� == 3 ? "������" : �Ͽ� == 4 ? "�����" : �Ͽ� == 5 ? "�ݿ���" : "�����";
�ð� = ""+��+"�� "+��+"�� "+��+"�� "+����+" "+����+" "+��+"�� "+��+"�� "+��+"�� ";

�ָ�� = new Array(
new Array(2049704, 4),
new Array(2433019, 0),
new Array(2450042, 4),
new Array(2470000, 2),
new Array(4310080, 999),
new Array(5530662, 0)
)

�ִ�÷ = new Array(
new Array(1142374, ""),
new Array(1702168, "(#r�ý��� +1000 / ���ݷ� +100#b)"),
new Array(2432354, ""),
new Array(2432636, ""),
new Array(3010584, ""),
new Array(3700044, "(#rRVIP Īȣ#b)"),
new Array(3700045, "(#rVVIP Īȣ#b)"),
new Array(3700046, "(#rVIP Īȣ#b)"),
new Array(5530558, ""),
new Array(5530559, ""),
new Array(5530560, ""),
new Array(5530588, ""),
new Array(5530615, ""),
new Array(5530616, ""),
new Array(5530691, ""),
new Array(5530692, "")


)

�̺�Ʈ = [
["�̺�Ʈ ���� ��", "�Ŀ�5���̺�Ʈ��."],
["�̺�Ʈ ���� ��", "�غ���"]
]

var check = 0;
var status = -1;
var sel = -1;


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
	}

	if(status == 0){
	cm.sendSimple("���� �ð� �� "+�ð�+"\r\n"
		+ "���� ���� �� ����ġ #e#r"+cm.getClient().getChannelServer().getExpRate()+"#k#n�� �� "
		+ "�޼� #e#r"+cm.getClient().getChannelServer().getDropRate()+"#k#n�� �� "
		+ "��� #e#r"+cm.getClient().getChannelServer().getMesoRate()+"#k#n��\r\n\r\n#b"
		+ "#L9##e��Ÿ�� ������ �ް�;��.#b(#r#z4001395##b)\r\n#fs12##n"
		+ "#L1##e���� �������� �̺�Ʈ�� �˰� �;��. #b(#r�� "+�̺�Ʈ.length+"��#b)\r\n\r\n#fs12##n"
		+ "#L6##b�⼮üũ ������ �ް� �;��. (#r����ġ 2�� ����#b)#b\r\n#fs12##n"
		+ "#L0##b#r�غ���#k."
		);


	}else if(status == 1){
	���� = selection;
	switch(����) {
		case 1:
		var str = "���� �������� �̺�Ʈ �Դϴ�. ���� �ڼ��� ������ Ȩ�������� Ȯ�� �� �ּ���.\r\n\r\n"
		for(var i = 0; i < �̺�Ʈ.length; i++){
			str += "��#e#r��#k#fs13# "+�̺�Ʈ[i][0]+"#fs12##n#b\r\n";
			str += "��#fn�������#"+�̺�Ʈ[i][1]+"#fn����#\r\n\r\n";

		}
		cm.sendNext(str);
		cm.dispose();
		break;

		case 6:
			if(cm.getParty() != null) {
				if(cm.BossCheck("�⼮üũ", 3)) {
				cm.BossAdd("�⼮üũ");
				cm.gainItem(2450042, 1);
				cm.sendOk("���õ� ��ſ� �Ϸ� ��������~. �̰� ��ڴ��� �帮�� ���� �����Դϴ�.");
				WorldBroadcasting.broadcast(MainPacketCreator.getGMText(20, ""+cm.getPlayer().getName()+" ���� �⼮üũ�� �ϼ̽��ϴ�. ("+�ð�+")"));	
				} else {
				cm.sendOk("�̹� ������ �⼮üũ�� �Ͽ����ϴ�. ���� �� �̿����ּ���~!");
				}
			} else {
			cm.sendOk("�⼮üũ�� ��Ƽ�� ����� �Ŀ� �����մϴ�. #b/��Ƽ�����#k�� ä��â�� ġ�ų� #b����Ű P#k�� ������ ��Ƽ�� ����� �� �ֽ��ϴ�.");

			}
		cm.dispose();			
		break;

		case 7:
		��� = [2640000, 2640004, 2640001, 2640005, 2028208]
		���� = [200,     200,     200,     200,     100]

		��ȯ = "#fs11##Cgray#��û��#k#fs12# �������� �Ǽ��� ����� �Ұ����� �������� ���޵Ǽ̳���? ����� ������ ���������� ��ȯ�ص帮���� �ϰڽ��ϴ�.\r\n#b"
		for (var i = 0; i < ���.length; i++) {
		��ȯ += "#L"+i+"# #i"+���[i]+"# #z"+���[i]+"# #r(���� : "+cm.itemQuantity(���[i])+")#b\r\n";
		}
		cm.sendSimple(��ȯ);
		break;


		case 9:
			if(cm.haveItem(4001395)) {
			hT  = "��Ÿ������ ���� #r#i4001395# #z4001395##k �������� ��ȯ�Ͻðھ��?\r\n\r\n#r";
			hT += "�κ��丮�� �� ĭ�� ���������� 4ĭ �̻��� �־�� ���������� ������ �����մϴ�. ";
			hT += "#e�κ��丮 �������� ���� ���� ���� �������� ������� �Ұ����մϴ�.#k#n\r\n\r\n\r\n";
	
			hT += "#fs20##fna������M#����������100% ���� ������#fs12##fn����#\r\n";
			hT += "������������������������������������������������������\r\n";
				for(i = 0; i < �ָ��.length; i++) {
				hT += "��#b#i"+�ָ��[i][0]+"# #z"+�ָ��[i][0]+"# (#r�ִ� "+Integer(�ָ��[i][1]+1)+"��#b)\r\n"
				}
			hT += "\r\n\r\n#fs20##fna������M#���������� #r��÷ ���� ������#fs12##fn����#\r\n";
			hT += "������������������������������������������������������\r\n";
				for(i = 0; i < �ִ�÷.length; i++) {
				hT += "��#b#i"+�ִ�÷[i][0]+"# #z"+�ִ�÷[i][0]+"# "+�ִ�÷[i][1]+"\r\n"
				}
			
			cm.sendYesNo(hT);
			} else {
			cm.sendOk("��Ÿ�� ���� ���� �Ⱓ�� �ƴϰų� �̹� �����ϼ̽��ϴ�. ������ �ٽ� �õ����ּ���.")
			cm.dispose();
			}
		break;
		
	}

	}else if(status == 2){
	switch(����) {

		case 7:
		if(cm.haveItem(���[selection])) {
			if(cm.canHold(4310119)) {
				cm.gainItem(���[selection], -1);
				cm.gainItem(4310119, ����[selection]);
				cm.sendOk("���� �̿뿡 ������ ��� �˼��մϴ�. ���������� ��ȯ�� �Ϸ�Ǿ����ϴ�.");
			} else {
			cm.sendOk("�κ��丮�� ���� ������ ���ų� ���޹������� �������� ���� �������� �� �ֽ��ϴ�. �κ��丮�� Ȯ���غ��ð�, �ٽ� �õ����ּ���.");
			}
		} else {
		cm.sendOk("������ #i"+���[selection]+"# #b#z"+���[selection]+"##k �������� �����ϽŰ� �³���? #h #���� �κ��丮�� �ƹ��� ã�ƺ��� �������� �ʳ׿䡦 ");
		}
		cm.dispose();
		break;


		case 9:
		cm.gainItem(4001395, -1);
		isLucky  = Math.floor(Math.random() * 300);
		getRate0 = Math.floor(Math.random() * �ָ��[0][1]+1);
		getRate1 = Math.floor(Math.random() * �ָ��[1][1]+1);
		getRate2 = Math.floor(Math.random() * �ָ��[2][1]+1);
		getRate3 = Math.floor(Math.random() * �ָ��[3][1]+1);
		getRate4 = Math.floor(Math.random() * �ָ��[4][1]+1);
		getRate5 = Math.floor(Math.random() * �ָ��[5][1]+1);

		gV = "#i4001395# #r#z4001395##k�� �� ���� �������� �Ʒ��� �������� ���Խ��ϴ�.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n"
		gV += "#i"+�ָ��[0][0]+"# #z"+�ָ��[0][0]+"# "+getRate0+"��\r\n"
		gV += "#i"+�ָ��[1][0]+"# #z"+�ָ��[1][0]+"# "+getRate1+"��\r\n"
		gV += "#i"+�ָ��[2][0]+"# #z"+�ָ��[2][0]+"# "+getRate2+"��\r\n"
		gV += "#i"+�ָ��[3][0]+"# #z"+�ָ��[3][0]+"# "+getRate3+"��\r\n"
		gV += "#i"+�ָ��[4][0]+"# #z"+�ָ��[4][0]+"# "+getRate4+"��\r\n"
		gV += "#i"+�ָ��[5][0]+"# #z"+�ָ��[5][0]+"# "+getRate5+"��\r\n"

		cm.sendNext(gV);

		cm.gainItem(�ָ��[0][0], getRate0);
		cm.gainItem(�ָ��[1][0], getRate1);
		cm.gainItem(�ָ��[2][0], getRate2);
		cm.gainItem(�ָ��[3][0], getRate3);
		cm.gainItem(�ָ��[4][0], getRate4);
		cm.gainItem(�ָ��[5][0], getRate5);

			switch(isLucky){
			case 1:   case 10:  case 21:  case 31:  case 41:  gainOther = �ִ�÷[0][0]; break;
			case 51:  case 61:  case 71:  case 81:  case 91:  gainOther = �ִ�÷[1][0]; break;
			case 101: case 111: case 121: case 131: case 141: gainOther = �ִ�÷[2][0]; break;
			case 151: case 161: case 171: case 181: case 191: gainOther = �ִ�÷[3][0]; break;
			case 201: case 211: case 221: case 231: case 241: gainOther = �ִ�÷[4][0]; break;
			case 251: case 261: case 271: case 281: case 291: gainOther = �ִ�÷[5][0]; break;

			case 2:   case 20:  case 22:  case 32:  case 42:  gainOther = �ִ�÷[6][0]; break;
			case 52:  case 62:  case 72:  case 82:  case 92:  gainOther = �ִ�÷[7][0]; break;
			case 102: case 112: case 122: case 132: case 142: gainOther = �ִ�÷[8][0]; break;
			case 152: case 162: case 172: case 182: case 192: gainOther = �ִ�÷[9][0]; break;
			case 202: case 212: case 222: case 232: case 242: gainOther = �ִ�÷[10][0]; break;
			case 252: case 262: case 272: case 282: case 292: gainOther = �ִ�÷[11][0]; break;

			case 3:   case 4:   case 5:   case 6:   case 7:   gainOther = �ִ�÷[12][0]; break;
			case 53:  case 54:  case 55:  case 56:  case 57:  gainOther = �ִ�÷[13][0]; break;
			case 153: case 154: case 155: case 156: case 157: gainOther = �ִ�÷[14][0]; break;
			case 203: case 204: case 205: case 206: case 207: gainOther = �ִ�÷[15][0]; break;


			default: gainOther = 0; break;
			}
		break;

	}

	} else if (status == 3) {
		switch(gainOther) {
		case 0: cm.dispose(); break;
		default:
		cm.sendNext("#e#r"+isLucky+"#k#n\r\n\r\n���? #h #���� #i4001395# #r#z4001395##k�� ���� �� �ִ� �� ��������? ��ø���!");
		}
	} else if (status == 4) {
	WorldBroadcasting.broadcast(MainPacketCreator.getGMText(20, "[��Ÿ��] "+cm.getPlayer().getName()+" ���� ["+Packages.server.items.ItemInformation.getInstance().getName(gainOther)+"] �������� ȹ���ϼ̽��ϴ�. ��� �������ּ���~"));
	cm.sendOk("#i4001395# #r#z4001395##k���� �Ʒ��� �������� �߰��� ���Խ��ϴ�. ���ϵ����~\r\n\r\n"
		+ "#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i"+gainOther+"# #z"+gainOther+"#");
			if(gainOther != 1702168) { cm.gainItem(gainOther, 1); } else {
			var ii = Packages.server.items.ItemInformation.getInstance();
			var item = ii.getEquipById(gainOther);
			item.setStr(1000);
			item.setDex(1000);
			item.setInt(1000);
			item.setLuk(1000);
			item.setWatk(100);
			item.setMatk(100);
			item.setOwner(""+ cm.getPlayer().getName()+"");
			Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
			}
	cm.dispose();
	}
}