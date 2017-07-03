importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
var sel;
var job;
var selt;
var startmap = 910027100;

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

    	var takejob = "������ ���Ͻô� �������� ����ּ���. ������ �ٽ� ����ų �� ������, ������ �߸� �������� �ʰ� �������ּ���.\r\n\r\n#r�ؾ����� ������ ���� �������� �������� ��� �����ּ���.\r\n";
		takejob += "\r\n#k��� ���������� ���� �Ͻðڽ��ϱ�?\r\n"
		takejob += "#b#L0#���谡#l����";	
		takejob += "#L1300#����극��Ŀ#l";
		takejob += "#L1500#��Ʈ����Ŀ#l������\r\n";
		takejob += "#L2000#�ƶ�������#l";
		takejob += "#L2001#����#l��������";
		takejob += "#L2002#�޸�������#l����\r\n";
		takejob += "#L2003#����#l������";
		takejob += "#L2004#��̳ʽ�#l����";
		takejob += "#L3000#����������#l����\r\n";
		takejob += "#L5000#������#l����";
		takejob += "#L6000#ī����#l������";
		takejob += "#L6001#������������#l��\r\n";
		takejob += "#L3001#����#l������";
		takejob += "#L3002#����#l��������#k\r\n";
		takejob += "#r#L2#������ �������� �˰� �ͽ��ϴ�.\r\n";
		takejob += "#r#L1#�ٽ� �ѹ� ������ ���ڽ��ϴ�.\r\n";
        	cm.sendSimple(takejob);
        } else if (status == 1) {
		job = selection;
		if (cm.getPlayer().getFame()>=1000 && job != 2 && cm.getPlayer()){
		if (job == 0){
		sel = "#b[���谡]#k��";
		selt = "[���谡]��";
		} else if (job == 1300) {
		sel = "#b[����극��Ŀ]#k��"
		selt = "[����극��Ŀ]��"
		} else if (job == 1500) {
		sel = "#b[��Ʈ����Ŀ]#k��"
		selt = "[��Ʈ����Ŀ]��"
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
		selt = "[������������]��"
		} else if (job == 3001) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		} else if (job == 3002) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		}
		if (job != 1){
		cm.sendOk("���� "+sel+" ������ �Ͻðڽ��ϱ�?\r\n\r\n#r�غ����� �ܼ� ���ɿ� ���� �ǵ����� ������ ������ �������� �̿����ּ���.#k");
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
		cm.sendOk(" ȯ������Ʈ�� �����մϴ�.\r\n ������ #b1000#k�� ȯ������Ʈ�� �ʿ��մϴ�.");
		cm.dispose();
		}
		}

	} else if (status == 2) {
		cm.getPlayer().skillReset();
		cm.changeJob(job);
		if(job==1300||job==1500){
		cm.warp(1000000, 0);
		cm.getPlayer().setLevel(10);
		}else{
		cm.warp(startmap, 0);
		cm.getPlayer().setLevel(1);
		}
		var gp = cm.getPlayer();
		var stat = gp.getStat();
		var total = stat.getStr() + stat.getDex() + stat.getLuk() + stat.getInt() + gp.getRemainingAp() - 16;
		stat.setStr(4);
		stat.setDex(4);
		stat.setInt(4);
		stat.setLuk(4);
		gp.setRemainingAp(total + cm.getPlayer().getFame());
		cm.getPlayer().setExp(0);
		cm.getPlayer().addFame(-1000);
		cm.unequipEverything();

		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(2,"[��������] : ���ϵ帳�ϴ�! ["+ cm.getPlayer().getName()+"] �Բ��� "+selt+" �����ϼ̽��ϴ�!"));
		cm.sendOk(""+sel+" ������ �Ϸ�Ǿ����ϴ�.");
		cm.fakeRelog();
		cm.updateChar();
		cm.dispose();
	} else {
	cm.sendOk("������ �����ϰ� �ٽ� ���� �ɾ��ּ���.");
	cm.dispose();
	}

}
