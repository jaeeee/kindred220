/*본 스크립트는 스피릿매니저의 스크립트로 만들어진 스크립트입니다.*/
importPackage(Packages.launch.world);
importPackage(Packages.database);
importPackage(java.sql);
importPackage(java.lang);
var status = -1;
var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY mistic DESC LIMIT 10").executeQuery();
var mapid = Array(931050800,931050810,931050820);
var mitemid = Array(1002357,1142503,1042243,1122000,1142504,1142500,1003579,1142502,1012332,1142501);
var mcoinnn = Array(4033302,4033302,4033303,4033303,4033303,4033311,4033304,4033304,4033312,4033312);
var mnumber = Array(5,10,5,5,10,10,5,10,5,10);
var itemid = Array(1012331,1022148,1032156,1122208,1132182,1142505);
var number = Array(100,100,100,300,500,800);
var oldsel = 0;
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
var chat = "시련속의 시련 미스틱 게이트...\r\n\r\n";
chat += "#b#L0#미스틱 게이트란 무엇인가요#l\r\n";
if(WorldConnected.mistic) {
chat += "#L1##b미스틱 게이트를 통과 하겠습니다.#l\r\m";
}
chat += "#L2#미스틱 포인트 랭킹을 보겠습니다.\r\n";
chat += "#L3#전리품으로 아이템을 교환하겠습니다.#l\r\n";
cm.sendSimple(chat);
} else if (status == 1) {
if(selection == 0) {
cm.sendOk("#b미스틱 게이트#k를 거쳐서 가게되는 #d또다른 세계#k는 #r지금까지의 보스들과는 다른 막강한 보스들과의 치열한 전투를#k 벌일수있는 곳입니다.막강한 보스들을 처치하고나면 전리품이 나오며 #b전리품으로 다양한 아이템도 교환이#k 가능합니다.\r\n#r※미스틱 게이트는 3시간에 한번씩 1시간동안 열립니다.");
cm.dispose();
} else if (selection == 1) {
if(cm.getPlayer().getParty() == null) {
cm.sendOk("#b미스틱 게이트#k는 혼자서는 불가능한 도전이기 때문에 자신을 지켜줄수있는 #b파티원이#k 동행해야 합니다.");
cm.dispose();
return;
}
if(!cm.isLeader()) {
cm.sendOk("#b미스틱 게이트#k는 파티장 만이 입장을 선두할수 있습니다.");
cm.dispose();
return;
}
cm.sendSimple("현재 미스틱 게이트 로 이동 가능한 곳입니다.#b\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#L0#헤네시스 미스틱 필드#l\r\n#L1#판테온 미스틱 필드#l\r\n#L2#리프레 미스틱 필드#l");
} else if (selection == 2) {
cm.getPlayer().saveToDB(false,false);
var i = 0;
        var print = new StringBuilder();
        while (rank.next()) {
if(rank.getInt("mistic") > 0) {
            i++;
            print.append(Integer(i)).append("위　#b").append(rank.getString("name")).append("　#k미스틱 포인트 : ").append(Integer(rank.getInt("mistic"))).append("\r\n");
}
}
	if(i==0) {
	cm.sendOk("아직까지는 랭커들이 없지만 #b" + cm.getPlayer().getName() + "#k 님이 랭커가 되보시는건 어떤가요?");
	} else {
	cm.sendOk("현재 미스틱 포인트 상위 " + i + "위 랭커들 입니다.\r\n"+print.toString());
	}
    cm.dispose();
} else if (selection == 3) {
cm.sendSimple("교환하실 종류를 선택해 주십시오#b\r\n\r\n#L1#미스틱 포인트로 아이템 교환#l\r\n#L0#미스틱 전리품으로 아이템 교환#l");
oldsel = 1;
}
} else if (status == 2) {
if(oldsel == 1) {
if(selection == 0) {
oldsel = 2;
var chat = "교환하실 아이템을 선택해 주십시오#b\r\n\r\n";
for(var i = 0; i < mitemid.length; i ++) {
chat += "#L" + i + "##i" + mitemid[i] + "##z" + mitemid[i] + "# : #i" + mcoinnn[i] + "# " + mnumber[i] + " 개\r\n";
}
cm.sendSimple(chat);
} else if (selection == 1) {
oldsel = 3;
var chat = "교환하실 아이템을 선택해 주십시오#b\r\n현재 소유중이신 포인트는 " + cm.getPlayer().getMistic() + " 포인트 입니다.\r\n\r\n";
for (var i = 0; i < itemid.length; i ++) {
chat += "#L" + i + "##i" + itemid[i] + "##z" + itemid[i] + "# : " + number[i] + " 포인트\r\n";
}
cm.sendSimple(chat);
}
} else {
if(cm.getPlayerCount(mapid[selection]) >= 1) {
cm.sendOk("이미 다른 파티가 게이트에서 전투를 치루고 있습니다.");
cm.dispose();
return;
}
cm.resetMap(mapid[selection]);
cm.allPartyWarp(mapid[selection],true);
cm.dispose();
}
} else if (status == 3) {
if(oldsel == 2) {
if(cm.haveItem(mcoinnn[selection],mnumber[selection])) {
cm.gainItem(mcoinnn[selection],-mnumber[selection]);
cm.gainItem(mitemid[selection],1);
cm.sendOk("전리품을 아이템으로 교환을 완료하였습니다.");
cm.dispose();
} else {
cm.sendOk("전리품이 아이템을 교환하기에는 부족합니다.");
cm.dispose();
}
} else if (oldsel == 3) {
if(cm.getPlayer().getMistic() >= number[selection]) {
cm.getPlayer().addMistic(-number[selection]);
cm.gainItem(itemid[selection],1);
cm.sendOk("미스틱 포인트를 아이템으로 교환을 완료하였습니다.");
cm.dispose();
} else {
cm.sendOk("미스틱 포인트가 아이템을 교환하기에는 부족합니다.");
cm.dispose();
}
}
}
}
}