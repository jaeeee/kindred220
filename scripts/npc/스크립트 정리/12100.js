function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; } if (mode == 1) status++; else status--;


        if (status == 0) {
	    var chat = "���ʸ� �������� ���Ⱑ ��������. ��𿡼� �����ҷ�?\r\n#b"
	    chat += "#L1#���谡�� ������1\r\n"; 
                    chat += "#L2#���谡�� ������2\r\n";
	    chat += "#L3#���谡�� ������3\r\n";
	    chat += "#L4#���谡�� ������4\r\n";

	    cm.sendSimple(chat);

             } else if (selection == 1) {
		cm.warp(1010100,0); // �����÷ε� - ���谡 ������1
		cm.dispose();

             } else if (selection == 2) {
		cm.warp(1010200,0); // �����÷ε� - ���谡 ������2
		cm.dispose();

             } else if (selection == 3) {
		cm.warp(1010300,0); // �����÷ε� - ���谡 ������3
		cm.dispose();

             } else if (selection == 4) {
		cm.warp(1010400,0); // �����÷ε� - ���谡 ������4
		cm.dispose();
	    cm.dispose();
		}
    	}
}

