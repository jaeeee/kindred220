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
cm.sendSimple("�ȳ��ϼ��� ������ �����ϴ� NPC�Դϴ�.\r\n �������� �����ϸ� #b������ �̶�Ŭ ť��#k�� 1~20�� �������� ���ɴϴ�. ������ ������� 100�� �޼Ұ� �ʿ�����\r\n�Ϸ� ���Ƿ���??\r\n\r\n#L0#���ݴ����ؾ���!#l");
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
cm.sendYesNo("������ �������� ���� �Ͻǰ̴ϱ�?");
} 
} else if (status == 4){
 if (cm.getMeso() > 1000000) {
cm.sendOk("���������� ���� �Ǿ����ϴ�.");
cm.gainMeso(-1000000);
cm.Return(j);
cm.dispose();
}else{
cm.sendOk("�ڳ� ���̾��°� ������?");
cm.dispose();
}
}
}