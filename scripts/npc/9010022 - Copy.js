
var status = 0;
var mapid = Array(280030100,240060200,271040100,230040420,270050100,262031300,401060200,280030001,240060201,211070102,272020200,262031300,270051100,910700300,105200310);
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
		var chat = "#e현재 사냥 가능한 던전들은 이렇습니다.#n\r\n";
		chat += "\r\n#e#r<노말 보스 원정대>#n#n";
chat += "\r\n#b#L0##fn나눔고딕 Extrabold##fs13#자쿰#l\r\n";
chat += "#L1##fn나눔고딕 Extrabold##fs13#혼테일#l\r\n";
chat += "#L2##fn나눔고딕 Extrabold##fs13#시그너스#l\r\n";
chat += "#L3##fn나눔고딕 Extrabold##fs13#피아누스#l\r\n";
chat += "#L4##fn나눔고딕 Extrabold##fs13#핑크빈#l\r\n";
chat += "#L5##fn나눔고딕 Extrabold##fs13#힐라#l\r\n";
chat += "#L6##fn나눔고딕 Extrabold##fs13#매그너스#l\r\n\r\n\r\n";
chat += "#k#e#fn나눔고딕 Extrabold##fs13##r<카오스 보스 원정대>#n#n\r\n#b";
chat += "#L7##fn나눔고딕 Extrabold##fs13#심연속 폐광의 군주 자쿰#l\r\n";
chat += "#L8##fn나눔고딕 Extrabold##fs13#용의 군주라 불리는 혼테일#l\r\n";
chat += "#L9##fn나눔고딕 Extrabold##fs13#검은마법사의 수문장 반 레온#l\r\n";
chat += "#L10##fn나눔고딕 Extrabold##fs13#시간을 탈취한자 아카이럼#l\r\n";
chat += "#L11##fn나눔고딕 Extrabold##fs13#아스완의 망령을 다스리는 힐라#l\r\n";
chat += "\r\n\r\n#k#e<차원의 문>#n\r\n#b";
chat += "#L12##fn나눔고딕 Extrabold##fs13##r차원의 문 이용하기#n#l";
cm.sendSimple(chat); 
} else if (status == 1) {
if(selection == 12) {
cm.askMapSelection("#33# 디멘션 인베이드#43# 더 시드");
} else if (selection != 15) {
if (cm.getPlayer().getParty() == null) {
  cm.sendOk("파티가 없으면 입장이 불가능합니다.");
  cm.dispose();
  return;
}
if (cm.getClient().getChannelServer().getMapFactory().getMap(mapid[selection]).getCharactersSize() > 0) {
     cm.sendOk("이미 다른 유저가 입장하였습니다. 다른채널을 이용해주시거나 잠시후에 도전해주십시오.");
     cm.dispose();
     return;
}
if (!cm.isLeader()) {
cm.sendOk("파티장을 통해서 입장해주시기 바랍니다.");
cm.dispose();
return;
}
if(selection == 0 || selection == 7) {
if(!cm.haveItem(4001017,1)){
cm.gainItem(4001017,1);
}
}
cm.resetMap(mapid[selection]);
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
if(selection == 15) {
cm.dispose();
cm.openNpc(9010032);
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
	cm.sendYesNo("#b나인하트#k 님이 #b" + cm.getPlayer().getName() + "#k 님에게 급한 용무가 있다고합니다.\r\n(퀘스트를 진행하시겠다면 '예'  버튼을 눌러주세요)");
	} else {
	cm.dispose();
	cm.openNpc(1103005);
	}
	} else {
	cm.sendOk("#b루타비스 퀘스트#k는 레벨 125부터 진행이 가능합니다.");
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