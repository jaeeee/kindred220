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
		cm.sendSimple("#n#b      ¢®U¢®¢® FoxK style#l#kof #rSkill Master System¢®¢®¢®¢®¢®U#k\r\n\r\n#r#L1#[Learn vocational skills]#k#l#b#L2#[Horn of craftsmen]#l#k#d#L0#[Riding skills]#l#k");
        } else if (status == 1) {
		if (selection == 0) {
                   cm.dispose();
                 cm.openNpc(1103002);
	         return;
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(1095003);
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(1012117);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(1095003);
	return;

		}
		cm.dispose();
	}
    
}
