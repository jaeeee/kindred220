/**
@author Jae
Kindred's Boss Teleporter/Dimensional Mirror
**/
var status = 0;
var mapid = Array(280030100,240060200,271040100,230040420,270050100,262031300,401060200,280030001,240060201,211070102,272020200,262031300,270051100,910700300,105200310, 302090300);
var bosscheck = false;
var bossname = "";


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
		var chat = "#eHello. I am Kindred's Boss teleporter.#n\r\n";
		chat += "\r\n#e#rREGULAR BOSSES#n#n";
chat += "\r\n#b#L0##fn������� Extrabold##fs13#Normal Zakum#l\r\n";
chat += "#L1##fn������� Extrabold##fs13#Normal Horntail#l\r\n";
chat += "#L7##fn������� Extrabold##fs13#Chaos Zakum#l\r\n";
chat += "#L8##fn������� Extrabold##fs13#Chaos Horntail#l\r\n";
chat += "#L9##fn������� Extrabold##fs13#Von Leon#l\r\n\r\n\r\n";
chat += "#k#e#fn������� Extrabold##fs13##rHARDER BOSSES#n#n\r\n#b";
chat += "#L2##fn������� Extrabold##fs13#HELL Cygnus#l\r\n";
//chat += "#L3##fn������� Extrabold##fs13#�Ǿƴ���#l\r\n";
chat += "#L4##fn������� Extrabold##fs13#Normal Pink Bean#l\r\n";
//chat += "#L5##fn������� Extrabold##fs13#����#l\r\n";
chat += "#L6##fn������� Extrabold##fs13#HELL Magnus#l\r\n";
chat += "#L10##fn������� Extrabold##fs13#HELL Arkarium#l\r\n";
chat += "#L15##fn������� Extrabold##fs13#Lotus#l\r\n";
//chat += "#L11##fn������� Extrabold##fs13#Arkarium#l\r\n";
chat += "\r\n\r\n#k#eDIMENSIONAL MIRROR#n\r\n#b";
chat += "#L12##fn������� Extrabold##fs13##rUse Mirror#n#l";
cm.sendSimple(chat); 
} else if (status == 1) {
if(selection == 12) {
cm.askMapSelection("#33# Dimension Invasion#43# Tower of Oz");
} else if (selection != 16) {
if (cm.getPlayer().getParty() == null) {
  cm.sendOk("You must be in a party.");
  cm.dispose();
  return;
}
if (cm.getClient().getChannelServer().getMapFactory().getMap(mapid[selection]).getCharactersSize() > 0) {
     cm.sendOk("Someone is inside already.");
     cm.dispose();
     return;
}
if (!cm.isLeader()) {
cm.sendOk("Please have the party leader speak to me.");
cm.dispose();
return;
}
if(selection == 0 || selection == 7) {
if(!cm.haveItem(4001017,1)){
cm.gainItem(4001017,1);
}
}
cm.resetMap(mapid[selection]);
if(mapid[selection] == mapid[15]) {
cm.warpParty(mapid[selection]);
cm.dispose();
return;
}
cm.PartyTimeMove(100050001,mapid[selection], 60 * 60);
if(mapid[selection] == 271040100) {
cm.spawnNpc(1033228,92,115);
}
if(mapid[selection] == 401060200) {
cm.spawnNpc(1033228,1933,-1347);
}
if(mapid[selection] == mapid[9]) {
cm.spawnNpc(1033228,-264,-181);
}
if(mapid[selection] == mapid[10]) {
cm.spawnNpc(1033228,146,-181);
}
if(mapid[selection] == mapid[13]) {
cm.spawnNpc(1033228,-144,443);
}
if(mapid[selection] == mapid[14]) {
cm.spawnNpc(1033228,48,135);
}
cm.dispose();
}
} else if (status == 2) {
	switch(selection) {
	case 32:
	if(cm.getQuestStatus(1800) == 0) {
	cm.completeQuest(1800);
	cm.completeQuest(1801);
	cm.completeQuest(1802);
	cm.completeQuest(1803);
	cm.completeQuest(1804);
	}
	cm.warp(957000000);
	break;
	case 33:
	cm.warp(940020000);
	break;
	case 38:
	cm.warp(301000000);
	break;
	case 39:
	cm.warp(302000000);
	break;	
	case 42:
	if(cm.getPlayer().getLevel() >= 125) {
	if(cm.getPlayer().getKeyValue("luta") == null) {
	cm.sendYesNo("#b������Ʈ#k ���� #b" + cm.getPlayer().getName() + "#k �Կ��� ���� �빫�� �ִٰ��մϴ�.\r\n(����Ʈ�� �����Ͻðڴٸ� '��'  ��ư�� �����ּ���)");
	} else {
	cm.dispose();
	cm.openNpc(1103005);
	}
	} else {
	cm.sendOk("#b��Ÿ�� ����Ʈ#k�� ���� 125���� ������ �����մϴ�.");
	cm.dispose();
	}
	break;
	case 43:
	cm.warp(992000000);
	break;
	}
	if (selection != 42)
	cm.dispose();
} else if (status == 3) {
	cm.getPlayer().setKeyValue("luta","start");
	cm.dispose();
	cm.openNpc(1103005);
}
} 
}