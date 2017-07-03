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
cm.sendSimple("반갑다!! 나는 아이템 분해하는 대장장이지\r\n아이템을 분해하면 #e#g마스터 미라클 큐브#n#k가 1~20개 랜덤으로 나온다내. 하지만 수수료로 100만 메소가 필요하지\r\n어떤가 아이템을 분해 해보겟나?\r\n\r\n#L0#지금당장해야죠!#l");
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
cm.sendYesNo("정말로 아이템을 분해 할껀가?\r\n한번 분해한 아이템은 다시 되돌리수 없다는걸 알아두게나.");
} 
} else if (status == 4){
 if (cm.getMeso() > 1000000) {
cm.sendOk("아이템이 성공적으로 분해가되엇내");
cm.gainMeso(-1000000);
cm.Return(j);
cm.dispose();
}else{
cm.sendOk("자내 돈이없는거 같은대?");
cm.dispose();
}
} else {
cm.sendOk("아직은 강화하기에 무서우신가보죠?");
cm.dispose();
}
}