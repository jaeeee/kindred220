


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��) - �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	ȣ���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9900003

	���ǽ� �̸� : ���ǳ�

	���ǽð� �ִ� �� : ���丮�Ʒε� : �����Ͼ� (180000000)

	���ǽ� ���� : MISSINGNO


*/
importPackage(Packages.server.maps);
//���� : 5120030
//���� : 5120023
//�ٸ��� : 5120022
//���ɸ��� : 5120017
var status = -1;
var select = 0;
var icon = 5120023;
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

	if (status == 0) {
            if (cm.getPlayer().hasGmLevel(6)) {
                cm.sendSimple("#L0#ȭ���߾ӿ� ���ڶ���(��������)#l\r\n#L1#OX�ð�����(��������)#l\r\n\r\n\r\n#L2#(���ѽð��������� ���)������ O#l\r\n\r\n#L3#(���ѽð��������� ���)������ X#l\r\n\r\n#L4#�뷡 ����ϱ�");
            } else {
                cm.sendOk("�̺�Ʈ �ʿ� ���Ű��� ȯ���մϴ�! ^^");
                cm.dispose();
                return;
            }
	}
    else if (status == 1) {
        select = selection;
        if (cm.getPlayer().hasGmLevel(6)) {//
		if (select == 0) {
                    cm.sendGetText("ȭ�� �߾ӿ� ��� ����?");
		} else if (select == 1) {
                    cm.sendGetNumber("���ӽð��� �󸶳�? (�ʴ���)", 1, 1, 300);
                } else if (select == 2) {
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.removeMapEffect());
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(5, "������ O �Դϴ�!"));
                    cm.getPlayer().getMap().broadcastMessage(new MapleMapEffect("������ O �Դϴ�!", icon).makeStartData());
                    var it = cm.getPlayer().getMap().getAllPlayerThreadSafe().iterator();
                    var map = cm.getClient().getChannelServer().getMapFactory().getMap(100000000);
                    while (it.hasNext()) {
                        var chr = it.next();
                        if (!checkPosO(chr.getPosition()) && !chr.isGM()) {
                            chr.Message("��Ÿ���׿�! ������ O �����!  OX ����� ����Ǽ̽��ϴ�. ���� �̺�Ʈ�� ������ �ּ���!");
                            chr.changeMap(map, map.getPortal(0));
			    chr.gainMeso(10000000);
                            cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(6, chr.getName() + "���� OX����� ������߽��ϴ�!"));
                        }
                    }
                    cm.dispose()
                } else if (select == 3) {
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.removeMapEffect());
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(5, "������ X �Դϴ�!"));
                    cm.getPlayer().getMap().broadcastMessage(new MapleMapEffect("������ X �Դϴ�!", icon).makeStartData());
                    var it = cm.getPlayer().getMap().getAllPlayer().iterator();
                    var map = cm.getClient().getChannelServer().getMapFactory().getMap(100000000);
                    while (it.hasNext()) {
                        var chr = it.next();
                        if (!checkPosX(chr.getPosition()) && !chr.isGM()) {
                            chr.Message("��Ÿ���׿�! ������ X �����!  OX ����� ����Ǽ̽��ϴ�. ���� �̺�Ʈ�� ������ �ּ���!");
                            chr.changeMap(map, map.getPortal(0));
			    chr.gainMeso(10000000);
                            cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(6, chr.getName() + "���� OX����� ������߽��ϴ�!"));
                        }
                    }
                    cm.dispose();
                } else if (select == 4) {
			cm.dispose();
			cm.changeMusic("Bgm39/StarPlanetMainEvent");
		}
	} else {
	    cm.sendOk("�̺�Ʈ �ʿ� ���Ű��� ȯ���մϴ�! ^^");
            cm.dispose();
            return;
	}
    } else if (status == 2) {
            if (select == 0) {
		cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.removeMapEffect());
		cm.getPlayer().getMap().broadcastMessage(new MapleMapEffect(cm.getText(), icon).makeStartData());
                    cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getGMText(8, cm.getText()));
            } else if (select == 1) {
                cm.getPlayer().getMap().broadcastMessage(Packages.packet.creators.MainPacketCreator.getClock(selection));
            }
	    cm.dispose();
    }
}



function checkPosO(pos) {
    var ltx = -965;
    var lty = -156;
    var rbx = -308;
    var rby = 334;
    var curx = pos.getX();
    var cury = pos.getY();
    return curx >= ltx && cury >= lty && curx <= rbx && cury <= rby;
}

function checkPosX(pos) {
    var ltx = -147;
    var lty = -156;
    var rbx = 502;
    var rby = 334;
    var curx = pos.getX();
    var cury = pos.getY();
    return curx >= ltx && cury >= lty && curx <= rbx && cury <= rby;
}