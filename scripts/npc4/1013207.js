function start() {status = -1;action (1, 0, 0);}
function action(mode, type, selection) {if (mode == -1 || mode == 0) {cm.dispose();return;}if (mode == 1) {status++;}
if (status == 0) {
var chat = "안녕 나는 눈사람이라고해.나는 겨울 이벤트 1 담당자야";
chat += "\r\n\r\n#L1##b눈꽃 코인을 모아왔어!";
chat += "\r\n#L0#겨울이벤트1 은 어떻게 하는거야?#l";
cm.sendSimple(chat);
} else if (status == 1) {
if(selection == 0) {
cm.sendOk("#r겨울 이벤트1#k 에대해서 설명을 해줄게~즐기는 방법은 아주 간단해!\r\n모든 몬스터들에게서 드롭되는 #i4310014##b#t4310014##k 를 #r100개#k를 모은후 나에게 건내주면 되는거야 #b#t4310014##k 를 나에게 건내주고나면 내가 눈사람 잡는곳에 대려다 줄게! 눈사람 몬스터 한테 드롭되는 것은 #b최고급 아이템이 들어잇는 #i2430499##b#t2430499##k 라고! \r\n\r\n#r ※참고: 겨울 상자 안에는 홍보템급 겨울맞이 세트와 폭풍성장의 비약 등 고급아이템이 들어잇습니다.");
cm.dispose();
} else if(selection == 1) {
if(cm.haveItem(4310014,100)) {
if(cm.getPlayerCount(914100010) == 0) {
cm.playerMessage(1, "눈사람 맵에 입장했습니다. 몬스터 끝까지 잡고 나가주시길 바랍니다. 나갈때는 채팅창에 @광장 하시면 됩니다.");
cm.gainItem(4310014, -100);
cm.timeMoveMap(101050000, 914100010, 300);
cm.spawnMob(9500317, 2003,86);
cm.dispose();
} else {
cm.sendOk("이미 다른 사람이 눈사람을 잡고잇어. 다른 채널에서 진행해 주거나 대기하길 바래");
}
} else {
cm.sendOk("#i4310014##b#t4310014##k 100개가 부족한거 같은대?");
cm.dispose();
}
}
}
}
