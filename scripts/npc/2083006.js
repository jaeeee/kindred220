/*
 ����ũ��Ʈ�� ���۱��� �Ʒ� ���ο��� �ֽ��ϴ�.
 ����(4_dill) / ������� �����ҽ� �����Ҳ���.
*/

var status = 0;
var maps = new Array("240070101", "240070200", "240070300", "240070400", "240070500", "240070600");
var mapNames = new Array("#b[�׿���Ƽ 2021��] ����� ������", "#b[�׿���Ƽ 2099��] �ѹ��� �׸� �Ա�", "#b[�׿���Ƽ 2215��] ���ݸ��� ���� ������", "#b[�׿���Ƽ 2216��] ���㰡 �� ���ñ�����", "#b[�׿���Ƽ 2230��] ������ Ÿ�� �κ�", "#b[�׿���Ƽ 2503��] õ������ ��Ӹ�");
var maplist = new Array("100000000");
var map = new Array("��׽ý�");

var warp = new Array("��������", "����Ϳ���");
var selectedMap = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status == 1 && mode == 0) {
            cm.sendNext("������ �� �ƿ�~");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("\r\n�ȳ��ϼ���? Ÿ�Ӱ���Ʈ�Դϴ�.\r\n���� �׿���Ƽ�� �������ѵ帳�ϴ�.\r\n������ ���� ���� �̿����ּ���!");
	} else if (status == 1) {
		var msg = "#e#h #�� ���ϴ� ��������� �������ּ���#n";
		for (var i = 100; i < 102; i++) {
		msg += "\r\n#b#L" + i + "# " + warp[i-100] + "#l";
		}
		cm.sendSimple(msg);
	} else if (status == 4) {
          	var place = "#e#h #�� �������� �������ּ���#n";
		for (var i = 0; i < maplist.length; i++) {
		place += "\r\n#b#L" + i + "# " + map[i] + "#l";
                }
           	cm.sendSimple(place);
        } else if (status == 5) {
		    selectedMap = selection;
                    cm.sendYesNo("������ �� ������ �̵��Ͻðڽ��ϱ�?");
        } else if (status == 6) {
                        cm.warp(maplist[selectedMap], 0);
                        cm.dispose();
	} else if (status == 7) {
          	var where = "#e#h #�� �������� �������ּ���#n";
		for (var i = 0; i < maps.length; i++) {
		where += "\r\n#b#L" + i + "# " + mapNames[i] + "#l";
                }
           	cm.sendSimple(where);
        } else if (status == 8) {
		    selectedMap = selection;
                    cm.sendYesNo("������ �� �� ���� �̵��Ͻðڽ��ϱ�?");
        } else if (status == 9) {
                        cm.warp(maps[selectedMap], 0);
                        cm.dispose();
	} else if (selection == 100) {
		cm.sendNext("\r\n���� ���� ����Ʈ�� �ҷ��ɴϴ�.")
		status++;
	} else if (selection == 101) {
		cm.sendNext("\r\n�׿���Ƽ ���� ����Ʈ�� �ҷ��ɴϴ�.")
		status++;
		status++;
		status++;
		status++;
		}
	}
}