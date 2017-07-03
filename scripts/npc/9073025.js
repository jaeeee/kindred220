importPackage(Packages.launch.world);
importPackage(Packages.tools.RandomStream);
var status = -1;
var zakumhand = Array(9300566,9300567,9300568,9300569,9300570,9300571,9300572,9300573);
var dragon = Array(9300580,9300581,9300582,9300583,9300584,9300585,9300586,9300587);
var x = 0;
var y = 0;
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
if(WorldConnected.mistic) {
if(!cm.isLeader()) {
cm.sendOk("파티장만이 문의봉인을 해제할수 있습니다.");
cm.dispose();
return;
}
if(cm.getMistic()) {
cm.sendOk("이미 문의 봉인이 해제되어 있습니다.");
cm.dispose();
return;
}
cm.sendYesNo("정말로 #d마계의문 봉인#k을 해제하시겠습니까?");
} else {
cm.sendOk("미스틱 게이트가 닫혀있습니다. 다음에 다시 와주십시오");
cm.dispose();
return;
}
} else if (status == 1) {
if(cm.getPlayer().getMapId() == 931050800) {
x = 3080;
y = 575;
} else if (cm.getPlayer().getMapId() == 931050810) {
x = -2084;
y = 29;
} else {
x = 55;
y = 392;
}
var a = Randomizer.nextInt(4);
switch(a) {
case 0:
cm.spawnMob(9300563,x,y);
for(var i = 0; i < 8; i ++) { 
cm.spawnMob(zakumhand[i],x,y);
}
break;
case 1:
for(var b = 0; b < 8; b ++) {
cm.spawnMob(dragon[b],x,y);
}
break;
case 2:
cm.spawnMob(9300594,x,y);
break;
case 3:
cm.spawnMob(9300600,x,y);
break;
case 4:
cm.spawnMob(9300608,x,y);
break;
}
cm.setMistic(true);
cm.dispose();
} else {
cm.dispose();
}
}
}