/*�� ��ũ��Ʈ�� ���Ǹ��Ŵ����� ��ũ��Ʈ�� ������� ��ũ��Ʈ�Դϴ�.*/
importPackage(Packages.scripting);

var status = -1;
var name;
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
var chat = "����ϴ� ����� ��ȥ�� �ϰ�����Ű���?";
chat += "\r\n�׷��ٸ� �� ã�ƿ��̽��ϴ�.";
chat += "\r\n���� �����Ϳ¶����� Ŀ�õ��� ��ȥ�� ��� �ϰ��ִ� ���� ����մϴ�.";
if(cm.getPlayer().getWeId2() == 0) {
chat += "\r\n\r\n#L0##b����ϴ� ������� ��ȥ��û�� �ϰڽ��ϴ�.#l";
} else {
chat += "\r\n\r\n#L1##b����ϴ� ����� ��ȥ�� �ϰڽ��ϴ�.#l";
}
cm.sendSimple(chat);
} else if (status ==1) {
if(cm.getPlayer().getGender() != 1) {
cm.sendGetText("����Ͻôº��� �г����� �Է����ּ���");
} else {
cm.sendOk("ûȥ�� ���ں��� �ϴ°Ŷ��ϴ�~");
return;
}
} else if (status ==2) {
var we = 0;
name = cm.getText();
we = cm.getPlayer().getClient().getChannelServer().getCharacterByName(name);
if(selection == 0) {
if(we == 0) {
cm.sendOk("����Ͻôº��� �������� �ƴϳ׿�..");
reutrn;
}
cm.sendOk("����ϴ� �п��� ûȥ�� ��û �ϼ̾��.\r\n" + name + " ���� �³��� �Ѵٸ� ���� �ٽ� ã�ƿ��ּ���!!");
we.setWeName(cm.getPlayer().getName());
NPCScriptManager.getInstance().start(we.getClient(), 1002001);
cm.dispose();
} else if (selection == 1) {
if(we.WeCheck()) {
cm.sendOk("�ڱ׷� �Ƹ��ٿ� Ŀ�� �ѽ��� ź���Ѱ��� �����ϸ�!!\r\n��ȥ�� ����ġ���� �ϰڽ��ϴ�.!!\r\n�ູ�ϰ� �缼��!!!!");
we.setWe(cm.getPlayer().getId());
cm.getPlayer().setWe(we.getId());
cm.getPlayer().MakeCoupleRing();
we.MakeCoupleRing();
cm.dispose();
} else {
cm.sendOk("ûȥ�� ��ҵǼ̾��.. �ƽ�����..");
cm.dispose();
}
}
}
}
}