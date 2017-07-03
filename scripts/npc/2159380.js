function start(){
status = -1;
action(1,0,0);
var i = 0;
var j = 0;
}
function action(mode,type,selection){
if(mode < 0)
cm.dispose();
if (mode == 1)
status ++;
else
status --;

if(status == 0){
cm.sendSimple("안녕하세요 아이템 분해하는 NPC입니다.\r\n 아이템을 분해하면 #b마스터 미라클 큐브#k가 1~20개 랜덤으로 나옵니다. 하지만 수수료로 100만 메소가 필요하죠\r\n하로 가실래요??\r\n\r\n#L0#지금당장해야죠!#l");
} else if (status == 1){
if(selection == 0){
cm.sendSimple(cm.ItemList(cm.getClient()));
i = 1;
}
} else if (status == 2){
if (i == 1){
cm.sendSimple(cm.ItemView(cm.getClient(),selection));
}
else
{
cm.dispose();
}
} else if (status == 3){
if(i == 1){
j = selection;
cm.sendYesNo("정말로 아이템을 분해 하실겁니까?");
} 
} else if (status == 4){
 if (cm.getMeso() > 1000000) {
cm.sendOk("성공적으로 분해 되었습니다.");
cm.gainMeso(-1000000);
cm.Return(j);
cm.dispose();
}else{
cm.sendOk("자내 돈이없는거 같은대?");
cm.dispose();
}
}
}