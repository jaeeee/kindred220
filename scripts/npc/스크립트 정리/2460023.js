function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;

       if (status == 0) {
	    var chat = "#e<��Ƽ : ����������>#n\r\n\r\n"
	    chat += "�ȳ��ϼ���. ���� ���� ������ ���� �� �ñ��� ���� ���ƿ�. �ֳĸ� ���� ������ �Ǿ� �ִ� ���� ���� ���尡 ������ �ٸ��� �װ͵� ��û �ٸ��� �����־����ϴ�. "; 
                    chat += "�ֺ����� ���ϴ� ���� ���� ������ϴ�. #r���� ������#k�� ������ �������� ������ ���� ���带 �����ϰ� �ִ´ٴ� ���� �׷��� �����е��� ������ �ʿ��մϴ�. �����ּ���!!\r\n";
	    chat += "\r\n#r( ���� ���� : 100�̻� )";
                    chat += "\r\n#b#L1# ���� ������ #l";
	    chat += "#L2# ī���� ���� ������ #l\r\n";
	    chat += "\r\n#r( ���� ���� : 120�̻� )";
	    chat += "\r\n#b#L3# �븻 ȥ���� ������ #l";
	    chat += "#b#L4# ī���� ȥ���� ������ #l\r\n";
	    chat += "\r\n#r( ���� ���� : 160�̻� )";
	    chat += "\r\n#b#L5# ��ũ�� ������ #l";
	    chat += "#b#L6# ī���� ��ũ�� ������ #l\r\n";
	    chat += "\r\n#r( ���� ���� : 140�̻� )";
	    chat += "\r\n#b#L7# �� ���� ������ #l";
	    chat += "#b#L8# ��ī�̷� ������ #l";
	    chat += "#b#L9# ���� ������ #l\r\n";
	    chat += "\r\n#r( ���� ���� : 170�̻� )";
	    chat += "\r\n#b#L10# �ñ׳ʽ� ������ #l";
	    chat += "#b#L11# �ű׳ʽ� ������ #l";

	    cm.sendSimple(chat);

             } else if (selection == 1) {
		cm.warp(211042400);
		cm.dispose();

             } else if (selection == 2) {
		cm.warp(211042401);
		cm.dispose();

             } else if (selection == 3) {
		cm.warp(240050400);
		cm.dispose();

             } else if (selection == 4) {
		cm.warp(240050400);
		cm.dispose();

             } else if (selection == 5) {
		cm.warp(270040000);
		cm.dispose();

             } else if (selection == 6) {
		cm.warp(270040000);
		cm.dispose();

             } else if (selection == 7) {
		cm.warp(230030101);
		cm.dispose();

             } else if (selection == 8) {
		cm.warp(230030101);
		cm.dispose();

             } else if (selection == 9) {
		cm.warp(230030101);
		cm.dispose();

            } else if (selection == 10) {
		cm.warp(230030101);
		cm.dispose();

            } else if (selection == 11) {
		cm.warp(109090000,0);
		cm.dispose();
	    cm.dispose();
		}
    	}
}

