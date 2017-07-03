function start() {
status = -1;
action (1, 0, 0);
}
function action(mode, type, selection) {
if (mode == -1 || mode == 0) {
cm.dispose();
return;
}if (mode == 1) {
status++;
}
if (status == 0) {
var chat = "여기에 무슨 볼일이라도?";
chat += "\r\n\r\n#L1##b장난감 공장 4구역에 보내줘";
chat += "\r\n#L0#이 퀘스트는 어떻게 하는거야?#l";
chat += "\r\n#L2#보상아이템(장난감 칼)을 교환 하고싶어.";
chat += "\r\n#L3#밖으로 나갈래.";
cm.sendSimple(chat);
} else if (status == 1) {
if(selection == 0) {
cm.sendOk("#r장난감 공장 4구역#k 에대해서 설명을 해드리겟습니다. \r\n장난감 공장 4구역에 들어가시면 상자가 총 12개가 있습니다. 상자를 열게되면  #i4031092##b#t4031092##k 를 얻을 수 있습니다. 제한시간 15분 안에 그것을 10개 모은 후 공장장한테 가져가면 #r보상#k을 받을수 잇습니다. 네네? 보상이 뭐냐고요...? 그 보상은 저도 모르죠..");
cm.dispose();
} else if (selection == 3) {
cm.warp(101050000,0);
cm.dispose();
} else if (selection == 2) {
cm.dispose();
cm.openNpc(2040015);
} else if(selection == 1) {
if(cm.getPlayerCount(922000000) == 0) {
cm.playerMessage(1, "퀘스트 맵에 입장했습니다. 나갈때는 '나가는 문' 을 클릭 하시면 됩니다.");
cm.resetMap(922000000);
cm.timeMoveMap(922030100, 922000000, 1200);
cm.spawnMob(9100005, 469,-143);
cm.spawnMob(9100005, 1172,-84);
cm.spawnMob(9100005, 1354,-143);
cm.spawnMob(9100005, 2432,-86);
cm.spawnMob(9100005, 4321,-84);
cm.spawnMob(9100005, 4610,-84);
cm.spawnMob(9100005, -97,-143);
cm.spawnMob(9100006, 541,-82);
cm.spawnMob(9100006, 811,-84);
cm.spawnMob(9100006, 2971,-83);
cm.spawnMob(9100006, 4054,-84);
cm.spawnMob(9100006, -358,-143);
cm.dispose();
} else {
cm.sendOk("이미 다른 분이 퀘스트맵에 입장하였습니다. 다른 채널에서 진행해 주거나 대기하시길 바랍니다.");
}
}
}
}

