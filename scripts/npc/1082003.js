var status = -1;

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
		cm.sendSimple("#n#b                 FoxK style#l#kof #rThe enhanced system.#k\r\n\r\n#r#L1#Socket strengthen#k#l#b#L2#Items up to strengthen#l#k#d#L0#Items strengthening property#l#k");
        } else if (status == 1) {
		if (selection == 0) {
			cm.sendOk("#ePlease haejusigil strengthen the current system properties using the Socket system and preparing an option up to the system.#k");
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(3000149);
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(3001011);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(2150004);
	return;

		}
		cm.dispose();
	}
    
}
