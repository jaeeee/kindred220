/*

Made by 가군
무단수정자제해주시길

*/

function start() {
    var tmp_str = "자격이 있는 사람이라면 시간 끌 필요 없이 원하는 곳으로 보내드릴 수도 있습니다. 자격이 있는 경우에만 말이예요... 어디로 가시겠어요?";
    tmp_str += "\r\n#b#L0#신록의 과거#l";
    tmp_str += "\r\n#b#L1#얼어붙은 과거#l";
    tmp_str += "\r\n#b#L2#불타는 과거#l";
    cm.sendSimple (tmp_str);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
         if (cm.getPlayer().getLevel() >= 140) {
      		cm.warp(270010000, "out00");
        	cm.dispose();
   	} else {
        	cm.sendOk("#b레벨 140 이상#k만 이동이 가능한 자격입니다. 당신은 자격이 없는 것 같군요...");
        	cm.dispose();
	}	
	} else if (selection == 1) {
         if (cm.getQuestStatus(3507) == 2) {
      		cm.warp(270020000, "out00");
      		cm.dispose();
  	 } else {
        	cm.sendOk("당신은 이 곳으로 갈 수 있는 자격이 없군요. 자격이 있는 사람만 이동이 가능해요...");
        	cm.dispose();
	}
	} else if (selection == 2) {
         if (cm.getQuestStatus(3514) == 2) {
      		cm.warp(270030000, "out00");
        	cm.dispose();
  	} else {
        	cm.sendOk("당신은 이 곳으로 갈 수 있는 자격이 없군요. 자격이 있는 사람만 이동이 가능해요...");
        	cm.dispose();
		}
	}
}