
importPackage(Packages.packet.creators);
/*
    CelphisMs NPC ����
*/


var status = 0;
var selected = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
 cm.dispose();
 return;
    }
    if (mode == 1)
 status++;
    else
 status--;
	if (status == 0) {
		if (cm.getPlayer().getMapId() != 940020000 && cm.getPlayer().getMapId() != 109090000) {
			cm.warp(940020000);
			cm.dispose();
		//} else if (cm.getPlayer().hasGmLevel(6)) {
                } else {
		cm.sendSimple("������ ���忡 ���Ű��� ȯ���մϴ� ������ �Ͻðڽ��ϱ�?\r\n\r\n#b#L0##s100001264# PVP �����忡 ���� �ϰڽ��ϴ�. #s100001263##l\r\n\r\n#L1#         PVP ������ ��ȯ�ϰ� �ͽ��ϴ�.        #l");
		}
   	} else if (status == 1) {
		selected = selection;
		if (selection == 0) {
			cm.sendYesNo("pvp�� �ּ� 2���� �ʿ��ϸ� ���Ѵٸ� ���� �ο����� ������� ��Ƽ�������Ͽ� ���������ε� �ο�� �ּ��ϴ�. �����Ͻðٽ��ϱ�?");
     		} else if (selection == 1) {
			cm.sendSimple("��..�����.. �ڳ��� ���������� #r#e"+cm.getPlayer().getSpiritp()+"#n#k ���̱�...\r\n��� ���ϴ� �������� ��󺸰Գ�.\r\n#b#L19##l����\r\n --------------------�Һ�/��Ÿ��--------------------#k\r\n#L0##i4000313# Ȳ�� ��ǳ�� 100�� #r(25��)#k#l\r\n#L1##i4001126# ��ǳ�� 500�� #r(25��)#k#l\r\n#L2##i2431507# �����ϸ����� ���� ������ 1�� #r(35��)#k#l\r\n#L3##v2022856# �ִ� HP/MP + 10000 #r(35��)#k#l\r\n#L4##i2431967# ũ��Ƽ�ƽ� ��������Ų #r(44��)#k#l\r\n" + 
			"#L5##i2430529# �ҷ��� ��¦ ���� x11 #r(40��)#k#l\r\n\r\n#b-----------------------����-----------------------\r\n#k#e#r<�߰�����>#k#dA+#k#r+#k#n:����30%/#e#rS#k#n:����50%/#e#rSS#k#n�̻�:����60%#l\r\n#L6##i1082147# #b#eB+#n#k �밡�� ���尩[����222/����22] #r(49��)#k#l\r\n#L7##i1082148# #d#eA+#n#k �밡�� ���尩[����333/����66] #r(111��)#k#l\r\n#L11##i1082146# #r#eS+#n#k �밡�� ���尩[����666/����136] #r(255��)#k#l\r\n#L14##i1113070# #e#dA+#k#r+#k#n ��Į�� ��[����333/����66] #r(155��)#k#l\r\n#L8##i1113055# #e#rS#k#n ���̽��͸�[����555/����111] #r(255��)#k#l\r\n#L9##i1032200# #e#rS#k#n ���̽��� �̾[����555/����111] #r(255��)#k#l\r\n#L10##i1152154# #e#rS#k#n ���̽��� ���[����555/����111]#r(255��)#k#l\r\n#L12##i1072381# #r#eSS#n#k �ƶ��� ����ȭ[����1111/����222] #r(555��)#k#l\r\n#L15##i1122280# #r#eSS+#n#k ������ �Ҵ�Ʈ[����1999/����199] #r(799��)#k#l\r\n#L13##i1003721# #r#eSSS#n#k ������ Ƽ�ƶ�[����2222/����444] #r(888��)#k#l");
		}
	} else if (status == 2) {
		if (selected == 0) {
			if (cm.getMap().getCharactersSize() >= 1 && cm.getParty().getMembers().size() >= 1 && cm.getPlayer().getMapId() == 940020000) {
			// if (cm.getPlayer().getMapId() != 940020000) {
				if (!cm.getMap().getCharactersSize() > 0) {
					cm.sendOk("�̹� �ٸ� ���� �����ϰ� �ֽ��ϴ�. ���������� ��ٷ��ּ���");
				} else {
					cm.startBatch();
					cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("aswan/stageEff/stage"));
					cm.getPlayer().getMap().broadcastMessage(MainPacketCreator.showEffect("aswan/stageEff/number/1"));
				}
			} else {
				cm.sendOk("2�� �̻��� �ƴϰų� ����� ��Ƽ�� ������ �����̽��ϴ�.");
			}
		} else if (selected == 1) {
			switch(selection) {
				case 0: {
					if (cm.getPlayer().getSpiritp() >= 25) {
						cm.getPlayer().addSpiritPoint(-25);
						cm.gainItem(4000313, 100);	
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
	}
         break;
				case 1: {
					if (cm.getPlayer().getSpiritp() >= 25) {
						cm.getPlayer().addSpiritPoint(-25);
						cm.gainItem(4001126, 500);
		       cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 2: {
					if (cm.getPlayer().getSpiritp() >= 35) {
						cm.gainItem(2431507, 1);
						cm.getPlayer().addSpiritPoint(-35);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 3: {
					if (cm.getPlayer().getSpiritp() >= 35) {
							var jessh = cm.getPlayer().getStat().getMaxHp() + 10000;
		          var jessm = cm.getPlayer().getStat().getMaxMp() + 10000;
		       cm.getPlayer().addSpiritPoint(-35);
		       cm.getPlayer().getStat().setMaxHp(jessh);
		       cm.getPlayer().getStat().setMaxMp(jessm);
		       cm.getPlayer().saveToDB(false, false);
		       cm.reloadChar();
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 4: {
					if (cm.getPlayer().getSpiritp() >= 44) {
						cm.getPlayer().addSpiritPoint(-44);
						cm.gainItem(2431967, 1);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 5: {
					if (cm.getPlayer().getSpiritp() >= 30) {
						cm.gainItem(2430529,11);
							cm.getPlayer().addSpiritPoint(-30);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 6: {
					if (cm.getPlayer().getSpiritp() >= 49) {
       makeSponserItem(1082147,222,22,0,0,0,0,0);
						cm.getPlayer().addSpiritPoint(-49);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 7: {
					if (cm.getPlayer().getSpiritp() >= 111) {
						makeSponserItem(1082148,333,66,0,0,0,0,0);
						cm.getPlayer().addSpiritPoint(-111);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 8: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1113055,555,111,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 9: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1032200,555,111,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 10: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1152154,555,111,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 11: {
					if (cm.getPlayer().getSpiritp() >= 255) {
						makeSponserItem(1082146,666,132,20,3,60002,60002,60005);
						cm.getPlayer().addSpiritPoint(-255);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 12: {
					if (cm.getPlayer().getSpiritp() >= 555) {
					  cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");
						makeSponserItem(1072381,1111,222,20,3,60002,60002,60002);
            cm.getPlayer().addSpiritPoint(-555);
						} else {
						cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 13: {
					if (cm.getPlayer().getSpiritp() >= 888) {
					  cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");
						makeSponserItem(1003721,2222,444,20,3,60002,60002,60002);
            cm.getPlayer().addSpiritPoint(-888);
						} else {
						cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 14: {
					if (cm.getPlayer().getSpiritp() >= 155) {
						makeSponserItem(1113070,333,66,19,1,60002,60005,0);
						cm.getPlayer().addSpiritPoint(-155);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
				case 15: {
					if (cm.getPlayer().getSpiritp() >= 799) {
						makeSponserItem(1122280,1999,199,20,3,60002,60002,60002);
						cm.getPlayer().addSpiritPoint(-799);
									cm.sendOk("���������� ������ �Ϸ�Ǿ����ϴ�.");} else {cm.sendOk("�ڳ״� ���������� �����ϱ�.. ������ �ο��� ���������� �� �������� �ٽÿ���.");
					}
				}
				break;
			}
		}
		cm.dispose();
	}
 }
 
function makeSponserItem(itemid,allstat,atk,state,line,jam,gam,zam) {
	var ii = Packages.server.items.ItemInformation.getInstance();
	var item = ii.getEquipById(itemid);
	item.setStr(allstat);
	item.setDex(allstat);
	item.setInt(allstat);
	item.setLuk(allstat);
	item.setWatk(atk);
	item.setMatk(atk);
  item.setState(state);
	item.setLines(line);
	item.setPotential1(jam);
	item.setPotential2(gam);
	item.setPotential3(zam);
  item.setOwner(cm.getPlayer().getName());
	Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(),item,false);
}