importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
var sel;
var job;
var selt;
var startmap = 222020110;

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

    	var takejob = "#r��[�ʼ�] ������ ���� �������� �������� ��� �����ּ���. \r\n#r + ������ �ҽ� �Ŀ�,ȫ��,����,��������Ʈ�� �ʱ�ȭ�˴ϴ�.\r\n#b��õ������: �Ҹ�-�����-ī���� / ĳ��-���谡��\r\n#b��õ������: ��� ������� ��� / ���� - �ƶ�(���Ϸ�)";
		takejob += "\r\n#k��� ���������� ���� �Ͻðڽ��ϱ�?\r\n"
		takejob += "#e#r#L0#���谡#l����";	
		takejob += "#L1000#�ñ׳ʽ�#l������#n#k\r\n";
		takejob += "#b#L2000#�ƶ�������#l";
		takejob += "#L2001#����#l��������";
		takejob += "#L1100#�ҿ︶����#l����\r\n";
		takejob += "#L2004#��̳ʽ�#l��";
		takejob += "#L3000#����������#l��";
		takejob += "#L5000#������#l��\r\n";
		takejob += "#L6000#ī����#l����";
		takejob += "#L6001#������������#l";
		takejob += "#L3001#����#l����\r\n";
		takejob += "#L3002#����#l��������#k\r\n";
		takejob += "\r\n#r#L2#������ �������� �˰� �ͽ��ϴ�.\r\n";
        	cm.sendSimple(takejob);
        } else if (status == 1) {
		job = selection;
		if (cm.getPlayer().getLevel() >= 250 && cm.getPlayer().getJob() != 10112 && cm.getPlayer().getFame()>=5000 && job != 2 && cm.getPlayer()){
		if (job == 0){
		sel = "#b[���谡]#k��";
		selt = "[���谡]��";
		} else if (job == 1000) {
		sel = "#b[�ñ׳ʽ�]#k��"
		selt = "[�ñ׳ʽ�]��"
		} else if (job == 1000) {
		sel = "#b[�ñ׳ʽ�]#k��"
		selt = "[�ñ׳ʽ�]��"
		} else if (job == 2000) {
		sel = "#b[�ƶ�]#k����"
		selt = "[�ƶ�]����"
		} else if (job == 2001) {
		sel = "#b[����]#k����"
		selt = "[����]����"
		} else if (job == 1100) {
		sel = "#b[�ҿ︶����]#k��"
		selt = "[�ҿ︶����]��"
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
		cm.sendOk(" ������ #b���ο� ���������� �ٽ� �¾�°�#k�� ���մϴ�. ������ �ϸ� #b���� ������ �ִ� ����, ����� ������ ��ų�� ������ ó������ �ٽ� ����#k�Ҽ� �ְԵ˴ϴ�.\r\n ������ ȯ������Ʈ 5000�� �ʿ��ϸ�, �Ұ����ϰ� �ٸ� �������� �������� ��� �ǵ��� �� ������ �����ϰ� ������ �ּž��մϴ�.\r\n #r���� �������� �������� �����ϰ� ������ �ϰ� �ȴٸ� �������� �ʱ�ȭ�� �ɼ��� �ֽ��ϴ�.#k �� ���ǻ����� ������ä ������ �� ��쿡�� ������ �Ұ����մϴ�.");
		cm.dispose();
		} else {
		if (job == 1) {
		cm.sendOk("������ �����ϰ� �ٽ� ���� �ɾ��ּ���.");
		cm.dispose();
		} else {
		cm.sendOk(" ȯ������Ʈ�� �����ϰų� ������ #r250#k�� �ƴմϴ�. ����� ���� �������� ������ �Ұ��մϴ�. \r\n ������ #b5000#k�� ȯ������Ʈ�� �ʿ��մϴ�.");
		cm.dispose();
		}
		}

	} else if (status == 2) {
		cm.changeJob(job);
		if(job==0){
		cm.warp(100000000, 0);
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
		cm.getPlayer().addFame(-5000);
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
