
var status = 0;
var points;
var sel;
var sel2;
var itemList = Array (1002357,1003112,1002971,1052202,1003621,1052526,1003622,1052527,1122000,1122076,1402179,1402180); // ������ ��� 
var number = Array (50,80,60,60,1000,1000,1500,1500,1000,2000,3000,5000);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (status <= 2 && mode == 0) {
            cm.dispose();
            return;
        }  
        if (mode == 0) {
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
             cm.sendSimple("����ϱ�?\r\n\r\n���� �԰� �ƴϸ� ��ġ�Ϸ� ������ �ʰڽ��ϱ�?\r\n\r\n#r�ٸ� �ǵ��� �ö��� ���� �ִ� ���� ���� ����� ������ �̵��ϰԵǴ� ���� �Ͻʽÿ�.#k\r\n#L0##b�ƴϸ� ��ġ�Ϸ� ���ڽ��ϴ�.")
            if (selection == 0) {
		if (cm.getClient().getChannelServer().getMapFactory().getMap(921133000).getCharactersSize() > 0) {
             cm.sendOk("�̹�, 10���� ���谡���� �������͸� ��ġ�Ϸ� �����߽��ϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
 	            return;
  		  }
  		 try {
                var em = cm.getEventManager("BossAni");
                em.startInstance(cm.getPlayer());
                cm.resetMap(921133000);
                cm.allPartyWarp(921133000, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
}
        }
    }
}