importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
var sel;
var job;
var selt;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {

    	var takejob = "������ ���Ͻô� �������� ����ּ���. ������ �ٽ� ����ų �� ������, ������ �߸� �������� �ʰ� �������ּ���.\r\n\r\n#r�ؾ����� ������ ���� �������� �������� ��� �����ּ���.\r\n\r\n#n#k(#e#b���� 200#n#k �̻�, ȯ������Ʈ #e#b3000#n#k �̻� �վ�� #e#b����#n#k�� �����մϴ�.)\r\n\r\n";
		takejob += "#b#L0#���谡#l������";	
		takejob += "#L1000#�ñ׳ʽ�#l����\r\n";
		takejob += "#L2000#�ƶ�#l��������";
		takejob += "#L2001#����#l��������\r\n";
		takejob += "#L2002#�޸�������#l��";
		takejob += "#L2003#����#l��������\r\n";
		takejob += "#L2004#��̳ʽ�#l����";
		takejob += "#L3000#����������#l��\r\n";
		takejob += "#L5000#������#l������";
		takejob += "#L6000#ī����#l������\r\n";
		takejob += "#L6001#������������#l";
		takejob += "#L3001#����#l��������\r\n";
		takejob += "#L3002#����#l��������#k\r\n";
		takejob += "#r#L2#������ �������� �˰� �ͽ��ϴ�.\r\n";
		takejob += "#r#L1#�ٽ� �ѹ� ������ ���ڽ��ϴ�.\r\n";
        	cm.sendSimple(takejob);
        } else if (status == 1) {
		job = selection;
		if (cm.getPlayer().getFame()>=3000 && job != 2 && cm.getPlayer().getLevel() >= 200){
		if (job == 0){
		sel = "#b[���谡]#k��";
		selt = "[���谡]��";
		} else if (job == 1000) {
		sel = "#b[�ñ׳ʽ�]#k��"
		selt = "[�ñ׳ʽ�]��"
		} else if (job == 2000) {
		sel = "#b[�ƶ�]#k����"
		selt = "[�ƶ�]����"
		} else if (job == 2001) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		} else if (job == 2002) {
		sel = "#b[�޸�������]#k��"
		selt = "[�޸�������]��"
		} else if (job == 2003) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		} else if (job == 2004) {
		sel = "#b[��̳ʽ�]#k��"
		selt = "[��̳ʽ�]��"
		} else if (job == 3000) {
		sel = "#b[����������]#k��"
		selt = "[����������]��"
		} else if (job == 5000) {
		sel = "#b[������]#k��"
		selt = "[������]��"
		} else if (job == 6000) {
		sel = "#b[ī����]#k��"
		selt = "[ī����]��"
		} else if (job == 6001) {
		sel = "#b[������������]#k��"
		set = "[������������]��"
		} else if (job == 3001) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		} else if (job == 3002) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		}
		if (job != 1){
		cm.sendYesNo("���� #e#b"+sel+"#n#k ������ �Ͻðڽ��ϱ�?\r\n\r\n#e#r�غ���#n#k�� �ܼ� ���ɿ� ���� �ǵ����� ������ ������ ������ �� �̿����ּ���.#k");
		} else if (job == 1) {
		cm.sendOk("������ �����ϰ� �ٽ� ���� �ɾ��ּ���.");
		cm.dispose();
		}
		} else if (job == 2){
		cm.sendOk(" ������ #b���ο� ���������� �ٽ� �¾�°�#k�� ���մϴ�. ������ �ϸ� #b���� ������ �ִ� ������ ������ ó������ �ٽ� ����#k�Ҽ� �ְԵ˴ϴ�.\r\n ������ ȯ������Ʈ 1000�� �ʿ��ϸ�, �Ұ����ϰ� �ٸ� �������� �������� ��� �ǵ��� �� ������ �����ϰ� ������ �ּž��մϴ�.\r\n #r���� �������� �������� �����ϰ� ������ �ϰ� �ȴٸ� �������� �ʱ�ȭ�� �ɼ��� �ֽ��ϴ�.#k �� ���ǻ����� ������ä ������ �� ��쿡�� ������ �Ұ����մϴ�.");
		cm.dispose();
		} else {
		if (job == 1) {
		cm.sendOk("������ �����ϰ� �ٽ� ���� �ɾ��ּ���.");
		cm.dispose();
		} else {
		cm.sendOk("#e#bȯ������Ʈ#n#k�� #e#r����#n#k�ϰų� ���������� ���� �ʽ��ϴ�.\r\n#e#b����#n#k�� #e#r3000#n#k #e#bȯ������Ʈ#n#k�� #e#b�ʿ�#n#k�մϴ�.");
		cm.dispose();
		}
	
	}
	} else if (status == 2) {
		cm.getPlayer().skillReset();
		cm.changeJob(job);
		var total = cm.getPlayer().getStat().getStr() + cm.getPlayer().getStat().getDex() + cm.getPlayer().getStat().getLuk() + cm.getPlayer().getStat().getInt() + cm.getPlayer().getRemainingAp() - 16;
		cm.getPlayer().setLevel(1);
		cm.getPlayer().getStat().setStr(4);
		cm.getPlayer().getStat().setInt(4);
		cm.getPlayer().getStat().setLuk(4);
		cm.getPlayer().getStat().setDex(4);
		cm.setAp(total);
		cm.getPlayer().addFame(-3000);
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[���¶���] : ���ϵ帳�ϴ�! ["+ cm.getPlayer().getName()+"] �Բ��� "+selt+" �����ϼ̽��ϴ�!"));
		cm.sendOk(""+sel+" ������ �Ϸ�Ǿ����ϴ�.");
		cm.getPlayer().saveToDB(false, false);
		cm.fakeRelog();
		cm.updateChar();
		cm.doReborn();
		cm.warp(109090200);
		cm.dispose();
	} else {
	cm.sendOk("������ �����ϰ� �ٽ� ���� �ɾ��ּ���.");
	cm.dispose();
	}

}
