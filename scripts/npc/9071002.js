importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client.items);

var status = -1;
var spirit = 0;
var collab = 0;
var ticket = 0;
var questid = 0;
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
	var etc = cm.getPlayer().getInventory(MapleInventoryType.ETC);
	var chat = "�ȳ�~ ���� �� ����? ������ũ�� �̿��Ϸ��� �翬�� ���� ã�ƿ;���. ���� �� ���ָ� ���ھ�?\r\n#b";
	chat += "#L0# #i4001513#  #z4001513# ��ȯ�ϱ�#l\r\n";
	chat += "#L1# #i4001515#  #z4001515# ��ȯ�ϱ�#l\r\n";
	chat += "#L2# #i4001521#  #z4001521# ��ȯ�ϱ�#l\r\n";
	chat += "#L3# #i4031138# #r���� Ƽ�� �����ϱ�#l\r\n";
	cm.sendSimple(chat);

	} else if (status == 1) {
	selected = selection;
	spirit = selection == 0 ? 1 : selection == 1 ? 2 : selection == 2 ? 3 : 4
	var t_1 = selection == 0 ? 4001513 : selection == 1 ? 4001515 : selection == 2 ? 4001521 : 0
	var t_2 = selection == 0 ? 4001514 : selection == 1 ? 4001516 : selection == 2 ? 4001522 : 0

		if(selected != 3) {
		cm.sendGetNumber("#b#z"+t_1+"##k 10��� #b#z"+t_2+"##k 1������ ��ȯ�� �� �־�. �� �� ��ȯ�ҷ�?", 1, 0, cm.itemQuantity(t_1)/10);
		}
		
		else if(selected == 3){
		var chat = "��~���� �̷��� �ȵ�����, ��� �� ����� ���Ƽ� Ư���� �Ǹ��ϴ°ž�. #rƼ�� ������ ������� 1�δ� �Ϸ翡 �� 20��#k�� �Ȳ���. ��, ���ǰָ����� ����̾�! \r\n#b";
		chat += "#L0##z4001514# 5�� �޼�#l\r\n";
		chat += "#L1##z4001516# 10�� �޼�#l\r\n";
		chat += "#L2##t4001522# 20�� �޼�#l#k";
		spirit = 4;
		cm.sendSimple(chat);
		}

	} else if (status == 2) {
		buyitem = selection;
		if(spirit != 4) {
		var t_3 = spirit == 1 ? 4001513 : spirit == 2 ? 4001515 : 4001521
		var t_4 = spirit == 1 ? 4001514 : spirit == 2 ? 4001516 : 4001522
		cm.sendYesNo("���� #b#z"+t_3+"# "+selection*10+"��#k�� #b#z"+t_4+"# "+selection+"��#k���� ��ȯ�Ҳ���? �� �� ��ȯ�ϸ� �ٽ� �������� �ٲٱ� �Ұ����ϴϱ� ������ �����ص��� ��.");
		spirit = t_3 == 4001513 ? 4001514 : t_3 == 4001515 ? 4001516 : 4001522
		collab = 1;
		}

		else {
		selected = selection
		var t_5 = selected == 0 ? 4001514 : selected == 1 ? 4001516 : 4001522
		var t_6 = selected == 0 ? 50000 : selected  == 1 ? 100000 : 200000
		var questid = selected == 0 ? 7902 : selected == 1 ? 7903 : 7904
		cm.sendGetNumber("#b#z"+t_5+"##k�� �����ϰ� �����ž�? �� ��� #b"+t_6/10000+"�� �޼�#k�� �Ǹ��ϰ� �־�. �� �� �����ҷ�?",1,1,cm.getPlayer().getInventory(MapleInventoryType.ETC).getNumFreeSlot()*100);
		ticket = t_5 == 4001514 ? 4001514 : t_5 == 4001516 ? 4001516 : 4001522
		collab = 2;
		}


	} else if (status == 3) {
		if(collab == 1) {
			var rob = spirit == 4001514 ? 4001513 : spirit == 4001516 ? 4001515 : 4001521
			if(!cm.canHold(spirit)) {
			cm.sendOk("�� �κ��丮 ��Ÿ���� �� ���� ����. ���� �ٽ� ���� �ɾ���~");
			cm.dispsoe();
			} else {
			cm.gainItem(spirit, buyitem);
			cm.gainItem(rob, -buyitem*10);
			cm.sendOk("#b#z"+spirit+"# "+buyitem+"��#k�� �� �߾���? �׷� ������ũ���� ��ſ� �ð� �������� ��~ ������.");
			cm.dispose();
			}
		}

		else if(collab == 2) {
		var questid = t_6 == 50000 ? 7902 : t_6 == 100000 ? 7903 : 7904
		var meso = t_6 == 50000 ? 50000 : t_6 == 100000 ? 100000 : 200000
		var date = Calendar.getInstance().get(Calendar.YEAR)%100+"/"+StringUtil.getLeftPaddedStr(Calendar.getInstance().get(Calendar.MONTH)+"", "0", 2)+"/"+Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
			if (cm.getPlayer().getOneInfoQuest(questid, "eNum").equals("20") && cm.getPlayer().getOneInfoQuest(questid, "lastDate").equals(date)) {
			cm.sendOk("�� �̹� ���� 20���� �����߾�. �� �̻��� �����~ �̷��� ���ǰָ��� ��ġæ�ٱ�. ���� �ٽ� ��~");
			cm.dispose();
//			return;
			} else {
				if (cm.getPlayer().getMeso() < meso * selection){
					cm.sendOk("�޼Ұ� �����Ѱ�? ���� ���ǰָ� ���� ����ϴ°����� �̷��°� �ƴ϶�� ������.");
					cm.dispose();
				} else {
					cm.sendOk("#b#z"+ticket+"# "+selection+"��#k�� �� �߾���? �׷� ������ũ���� ��ſ� �ð� �������� ��~ ������.");
					cm.gainMeso(-meso*selection)
					cm.gainItem(ticket, selection)
					cm.dispose();
						if (!cm.getPlayer().getOneInfoQuest(questid, "lastDate").equals(date)) {
						cm.getPlayer().updateOneInfoQuest(questid, "eNum", "1");
						cm.getPlayer().updateOneInfoQuest(questid, "lastDate", date);
						} else {
						var eNum = Integer.parseInt(cm.getPlayer().getOneInfoQuest(questid, "eNum"));
						cm.getPlayer().updateOneInfoQuest(questid, "eNum", (eNum+1)+"");
            					}
					}
				}
			}
		}
	}
}