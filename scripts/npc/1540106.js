/*
���� : (Dhae) dhae0107
���� : ���ι� ������
�ڵ� : 2040052 (@ȯ�� ��ɾ� - �缭 ����)
���� : ȯ������ ���ǽ� (ȯ�� > �����̵� > ȯ���� ���� �� ������ �̵�)
*/

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);
importPackage(Packages.tools.RandomStream);

var k = "#fUI/UIToolTip/Item/Equip/Star/Star#"

������ = (4310067) // ȯ���� ���� �� ������
���� = Randomizer.rand(10, 50); // ���� �� ������ ����
ȯ�� = Randomizer.rand(50, 100); // ȯ�� ��ġ
���� = (100) // ȯ���� ����
ȯ�� = (200) // ȯ�� ���� ����
���� = (331001000) // �̵� �� ����



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
if(cm.getPlayer().getKeyValue("ȯ��") == null) {; cm.getPlayer().setKeyValue("ȯ��", 0); }
    if (status == 0 && mode == 0) {	cm.dispose();	return;	}
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}

if (status == 0) {
	�� = "�ȳ��ϼ��� #b#h ##k��"
	��+= "\r\n\r\n#e#b#h ##k���� ȯ������Ʈ : #r"+cm.getPlayer().getFame()+"#k#n  /  #fn���� ���#ȹ�� ȯ�� : #d#e50~100#n#k"
	��+= "\r\n#b#e#fn##h ##k���� ���� : #r"+cm.getPlayerStat("LVL")+"#n#k  /  #fn���� ���#ȯ�� ���� ���� : #e#d"+ȯ��+"#n#k"
        ��+= "\r\nȯ���� ȹ�� ������ : #fn���� ���##e#d#z"+������+"# 10~50��#fn##fs#"

        if (cm.getPlayer().getLevel() <= ȯ�� && cm.canHold(������)) {
	��+= "\r\n#L0##b#e"+k+" ȯ���� ����#n�ϰڽ��ϴ�."
}else{
	��+= "\r\n\r\n#r#eȯ���� �ʿ��� ���� �Ǵ� ������â�� �����մϴ�."}
	
	if(cm.getPlayer().getKeyValue("ȯ��") == 1) {
	��+= "\r\n#L1##b#e"+k+" �����ִ� ��#n���� ���ư�����"
}
	cm.sendSimple(��);


}else if (status == 1) {
if (selection == 0) {
	cm.saveLocation("WORLDTOUR");
	cm.getPlayer().setKeyValue("ȯ��",1)
	cm.warp(����);
	cm.getPlayer().setLevel(����);
	cm.gainItem(������, ����);
	cm.getPlayer().gainAp(ȯ��);
	cm.getPlayer().addFame(ȯ��);
	cm.fakeRelog();
	cm.updateChar();
	cm.dispose();
	cm.dispose();
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"��"+ cm.getPlayer().getName()+"���Բ��� ȯ���� �����ϼ̽��ϴ�. ��"+ cm.getPlayer().getName()+"������ ȯ�� : " +cm.getPlayer().getFame()+" > " +(cm.getPlayer().getFame()+ȯ��)+"(+"+ȯ��+")"));cm.getPlayer().addFame(ȯ��);


}else if(selection == 1) {
	cm.warp(cm.getSavedLocation("WORLDTOUR"));
	cm.clearSavedLocation("WORLDTOUR");
	cm.getPlayer().setKeyValue("ȯ��",0)
	cm.dispose();
  }
 }
}
