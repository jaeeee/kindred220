/*
���� : (Dhae) dhae0107
���� : ���ι� ������
�ڵ� : 11100 (@����[�����ϱ�] - ���)
���� : ���� ���� ���ǽ�
*/

�� = "#fUI/UIToolTip/Item/Equip/Star/Star#"
����1 = "#fUI/UIWindowBT.img/MonsterBattleCollection2/RankingPage/tearTitle/rankingNumber/1#"
����2 = "#fUI/UIWindowBT.img/MonsterBattleCollection2/RankingPage/tearTitle/rankingNumber/2#"

ȯ�� = (1000); // ������ �ʿ��� ȯ��
���� = (230) // ���� ���� ����
�̵� = (980030010) // �������ǽð� �ִ� ��



function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {	cm.dispose();	return;	}
    if (status == 3 && mode == 0) {	cm.sendOk("������ �������ֽñ� �ٶ��ϴ�.");	cm.dispose();	return;	}
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}

if (status == 0) {
	cm.sendOk("#r#e�غ����� ���� ���ס�#k#n\n#fs20#\r\n\r\n"+����1+"#fs# ������ #b#e�������� ��� �������� ��������#n#k�մϴ�.\r\n"+����2+" #b#e< @���� >�� �̿��� ��� ����#n#k���ּ���.\r\n\r\n#fn���� ���##e#d< �� �׸� �� ������ ����� �������� å������ �ʽ��ϴ�. >");
	
}else if(status == 1){
	�� = "�ȳ��ϼ��� #b#h ##k��\r\n\r\n"
	��+= "���� ���� ȯ�� : #r#e"+ȯ��+"��(�̻�)#k  /  #fn���� ���##e#b#h ##k���� ȯ�� : #d"+cm.getPlayer().getFame()+"#k#n#fn#\r\n"
	��+= "���� ���� ���� : #r#e"+����+"#k  /  #fn���� ���##k#n#e#b#h ##k���� ���� : #d"+cm.getPlayerStat("LVL")+"#n#k#fn#\r\n\r\n"
	��+= "#L0#"+��+" #b#e������ ����#n�ϰڽ��ϴ�.\r\n"
	��+= "#L1#"+��+" #e�����̶� ����#n�ΰ���"
	cm.sendSimple(��);


}else if(status == 2){
	if (selection == 0) {
	if (cm.getPlayer().getLevel() >= ���� && cm.getPlayer().getFame() >= ȯ��) {
	�� = "#b#e< ���谡 & �ñ׳ʽ� >#k#n\r\n"
	��+= "#L0# ���谡 #L1000# �ñ׳ʽ� #L5000# ������ \r\n\r\n\r\n#l"
	��+= "#b#e< ���� ������ >#k#n\r\n"
	��+= "#L2000# �ƶ� #L2001# ���� #L2002# �޸������� #L2003# ���� #L2004# ��̳ʽ� #L2005# ����\r\n\r\n\r\n#l"
	��+= "#b#e< ���������� >#n#k\r\n"
	��+= "#L3000# ���������� #L3001# ���� #L3002# ����\r\n\r\n\r\n#l"
	��+= "#b#e< ��� >#n#k\r\n"
	��+= "#L6000# ī���� #L6001# ������������"
	cm.sendSimple(��);
}else{
	cm.sendOk("ȯ���� �ʿ��� ���� �Ǵ� ȯ�� ����Ʈ�� �����մϴ�.#fs15#\r\n\r\n#fn���� ���##e#b#h ##k���� ȯ�� : #r"+cm.getPlayer().getFame()+"#k / #d�ʿ� : "+ȯ��+"��(�̻�)#k\r\n#e#b#h ##k���� ���� : #r"+cm.getPlayerStat("LVL")+"#k / #d�ʿ� : "+����+"");
	cm.dispose();}

	}else if(selection == 1) {
	cm.sendOk("#e#b< �����̶�? >#n#k\r\n\r\n���� 10���� �ǵ��� #r#e���ο� �������� ���� ��#n#k �Դϴ�.\r\n������ #r#e[Ű����]�� ����� ��ų�� �ʱ�ȭ���� �ʽ��ϴ�#n#k.");
	cm.dispose();}


}else if(status == 3){
	���� = selection;
	if (���� == 0) {
	�̸� = "#b< ���谡 >#k��" 
	}else if(���� == 1000) {
	�̸� = "#b< �ñ׳ʽ� >#k��"
	}else if(���� == 2000) {
	�̸� = "#b< �ƶ� >#k��"
	}else if(���� == 2001) {
	�̸� = "#b< ���� >#k��"
	}else if(���� == 2002) {
	�̸� = "#b< �޸������� >#k��" 
	}else if(���� == 2003) {
	�̸� = "#b< ���� >#k��"
	}else if(���� == 2004) {
	�̸� = "#b< ��̳ʽ� >#k��"
	}else if(���� == 2005) {
	�̸� = "#b< ���� >#k��"
	}else if(���� == 3000) {
	�̸� = "#b< ���������� >#k��"
	}else if(���� == 3001) {
	�̸� = "#b< ���� >#k��"
	}else if(���� == 3002) {
	�̸� = "#b< ���� >#k��"
	}else if(���� == 5000) {
	�̸� = "#b< ������ >#k��"
	}else if(���� == 6000) {
	�̸� = "#b< ī���� >#k��"
	}else if(job == 6001) {
	�̸� = "#b< ������������ >#k��"
	}if (���� != 1){
	cm.sendYesNo("�����Ͻ� ������ "+�̸�+" �½��ϱ�?");}


}else if(status == 4){
	cm.unequipEverything();
	���� = cm.getPlayer().getStat();
	���� = ����.getStr() + ����.getDex() + ����.getLuk() + ����.getInt() + cm.getPlayer().getRemainingAp() - 16;
	����.setStr(4);
	����.setDex(4);
	����.setInt(4);
	����.setLuk(4);
	cm.getPlayer().skillReset();
	cm.changeJob(����);
	cm.getPlayer().addFame(-ȯ��);
	cm.getPlayer().setLevel(1);
	cm.getPlayer().setRemainingAp(����);
	cm.warp(�̵�);
	cm.fakeRelog();
	cm.updateChar();
	cm.dispose();
 }
}
