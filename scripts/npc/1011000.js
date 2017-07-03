/*


RaceMS 전용 스크립트 입니다.


*/
var siaa=Math.floor(Math.random()*2+1);
 var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
    cm.sendSimple ("#bHello?\r Online Information is the core forces of informing enpissi.\r\npresent #h0#S appeal points #r#e["+cm.getPlayer().getSiapoint()+"] #n#k#bA. \r\nWhat do you know?\r\n\r\n" +"#k\r\n#L80##r[Core Online] Iranian forces?#k" +"#k\r\n#L81#[Core line] I wonder my forces!#r" +"#k\r\n#L83#[Core Online]Forces of the occupied territories");
      } else if (selection == 80) {
               cm.sendSimple (" Choose. #e#d" +
            "#k\r\n#L0##rWhat are the forces?" +
            "#k\r\n#L7##rI want to know which forces!" +
            "#k\r\n#L2##rIs the forces of change?");
      } else if (selection == 81) {
               cm.sendSimple ("Please choose. #e#d" +
            "#k\r\n#L7##bCurrently my forces"+
            "#k\r\n#L8##bI do not have forces ㅠㅠ");
  cm.dispose();
      } else if (selection == 0) {
        cm.sendOk ("\r\n #bEvery Iranian forces Carrick specific powers are given jimyeo Map occupation forces during the same source, they are eligible for benefits. You can also arrange additional services with other forces during the occupation getting points.")
	cm.dispose();
      } else if (selection == 7) {
        cm.sendOk ("\r\n #bHello #h0#sir!#k \r\npresent #h0#S are forces #r#e["+cm.getPlayer().sia()+"]#n#k A.")
	cm.dispose();
      } else if (selection == 2) {
        cm.sendOk ("\r\n #r#e Forces can not bakkusil.")
	cm.dispose();
      } else if (selection == 32) {
		if (cm.haveItem(4310071,3)) {
		    if (cm.canHold(4310069)) {
			cm.gainItem(4310069,1);
		        cm.sendOk("#i4310071##z4310071#3개로 #i4310069##z4310069#1Dogs were exchanged.");
			cm.gainItem(4310071, -3);
			cm.dispose();
		    } else {
		        cm.sendOk("There is no empty space on the other square.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#i4310071##z4310071#This is insufficient.");
		    cm.dispose();
}
      } else if (selection == 33) {
		if (cm.haveItem(4310070,5)) {
		    if (cm.canHold(4310069)) {
			cm.gainItem(4310069,1);
		        cm.sendOk("#i4310070##z4310070#5개로 #i4310069##z4310069#1Dogs were exchanged.");
			cm.gainItem(4310070, -5);
			cm.dispose();
		    } else {
		        cm.sendOk("There is no empty space on the other square.");
		        cm.dispose();
		    }
		} else {
		    cm.sendOk("#i4310070##z4310070#This is insufficient.");
		    cm.dispose();
}
      } else if (selection == 8) {
	cm.dispose();
        cm.openNpc(1012100);
	return;
      } else if (selection == 19) {
	cm.dispose();
	cm.openNpc(9040004);
	return;
}
}
}