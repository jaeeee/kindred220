//1012112 �丮
function start(){
	var txt = "#e<��Ƽ����Ʈ : ������ ��>#n\r\n";
	txt += "�ȳ��ϼ���? ���� �丮��� �ؿ�. �޸��̲� ����� �����̳���?";
	txt += "�� ���� �޸��̲��� �Ǿ�� �Ƹ��ٿ� ����̿���.\r\n";
	txt += "�׷��� �� ���� ����ִ� �����̶�� ȣ���̰� ���� �谡 ���� ���� ���� ã�� �ִٰ� �ϳ׿�. ";
	txt += "�����ڴԲ��� �޸��̲� ������� ���� ��Ƽ����� �Բ� ���� ��� �����̸� �������� �����ðھ��?\r\n\r\n#b"
	txt += "#L0#�޸��̲� ������� ����.\r\n";
	txt += "#L1#�� ���ڸ� �ް� �;��.\r\n";
	txt += "#L2#�޸��̲� ����� ���� ������ ��´�.\r\n";
	txt += "#L3#���� ���� ���� Ƚ���� �˰� �;��.";
	cm.sendSimple(txt);
}

var status = -1;
var sel;

function startEvent(event){
	if (cm.getParty() != null) {
		if(cm.getDisconnected(event) != null && cm.getPartyMembers().size()>=2) {
			cm.getDisconnected(event).registerPlayer(cm.getPlayer());
		} else if(cm.isLeader()) {
			cm.getEventManager(event).startInstance(cm.getParty(), cm.getMap());
			cm.warp(910010000);
		} else {
			cm.sendOk("�������� �ź��� ����� ������ ���̹Ƿ� ȥ�ڼ��� �� �� ����ϴ�. �� �ȿ� ���� �ʹٸ�, ����� ���� ��Ƽ�� ��Ƽ���� ������ ���� �ɾ��ּž� �ؿ�. ��Ƽ�忡�� ��Ź�� ������.");
		}
	} else {
		cm.sendNext("�����ڴ��� ���� ��Ƽ���� 2���̻��� �ƴ϶� �����Ͻ� �� �����. ���� 30�̻��� 2���̻� ��Ƽ���� �־�� �����Ͻ� �� ������ Ȯ���Ͻð� �ٽ� ������ ���� �ɾ��ּ���.");
	}
	cm.dispose();
}


function trade(reward,quantity){
	if(cm.canHold(reward)){
		if(cm.haveItem(4001101,quantity)){
			cm.gainItem(4001101,-quantity);
			cm.gainItem(reward,1);
			cm.sendNext("����� �ֽ� ��! ���ְ� �� �԰ڽ��ϴ�~");
		}else{
			cm.sendOk("���� ������ �ִ°� Ȯ���Ѱ���? ���� ��� ������.");
		}
	}else{
		cm.sendOk("�κ��丮 ������ �����ؿ�.");
	}
	cm.dispose();
}

function action(mode,type,selection){
	if(mode==1){status++;}
	else{status--;cm.dispose();}

	if(status==0){
		sel = selection;
		if(selection==0){
			startEvent("�̺�Ʈ");
			cm.dispose();
		}else if(selection==1){
			cm.sendSimple("���! �� ���ڸ� ���� �����ôٱ���? �� ���� ������ ���� �ֽø� ���ڸ� �帱����. ���� �� ���� �ֽ� ������?\r\n#b#L10# ������ �� 10�� - �Ӹ� ���� �� �ϳ� \r\n#L50# ������ �� 50�� - �Ӹ� ���� �� �ϳ� ");
		}else if(selection==2){
			cm.sendOk("#e<��Ƽ����Ʈ : ������ ��>#n\r\n������ #b�޸��̲� ���#k���� �����Ѵٴ� �ź��� �䳢 ����. #b������#k���� #r������ ��#k�� ������ ���谡���� #b��׽ý�����#k�� #b�丮#k�� ã�� �־��.������ ������ ������ �޸��̲� ������ �ɾ� �������� �ҷ����� �ؿ�. #r�� 10��#k�� �� ���� ������ ������ �����鿡�Լ� ������ �����ϰ� �����ּ���.\r\n- #e����#n : 30���� �̻� (��õ���� : 30 ~ 49)\r\n- #e���ѽð�#n : 10��\r\n- #e�����ο�#n : 2 ~ 6��\r\n- #eȹ�� ������1#n : #i1003418##t1003418#\r\n�� �� �������� ��#b(�� 10���� �丮���� �ָ� ȹ�� ����)#k\r\n- #eȹ�� ������2#n : #i1003419##t1003419#\r\n������  �������� #b(�� 50���� �丮���� �ָ� ȹ�� ����)#k");
			cm.dispose();
		}else if(selection==3){
			cm.sendNext("���� ���� ���� Ƚ���� @@ȸ�Դϴ�.");
			cm.dispose();
		}
	}else if(status==1){
		if(sel==1){
			selection==10?trade(1003418,10):trade(1003419,50);
		}
	}
}

