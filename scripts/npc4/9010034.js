


/*


	* (Pure Development Source Script)

	���ǽþ��̵� : 9010034

	���ǽ� �̸� : �ñ׳ʽ�

	���ǽð� �ִ� �� : ���������Ͽ� (109040004)

	���ǽ� ���� : 2������ ���� �Ϸ�


*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;
var time = 300000;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
       if (checkTime(cm) && checkPos(cm)) {

       // WorldBroadcasting.broadcast(MainPacketCreator.getGMText(10, cm.getPlayer().getName()+" ���� ���� �̺�Ʈ�� �����ϼ̽��ϴ�. ���ʽ��������� �����Ǽ� �ֱ�~")); //
	//cm.warp(100000000);
        //var it = cm.getPlayer().getMap().getAllPlayerThreadSafe().iterator();
       // var map = cm.getClient().getChannelServer().getMapFactory().getMap(100000000);
       // while (it.hasNext()) {
        //    var chr = it.next();
        //    chr.changeMap(map, map.getPortal(0));
       // }
        //cm.dispose();
       // return;

	//}
            if (isHack(cm) && !cm.getPlayer().hasGmLevel(5)) {
                
                WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"��(��) �ڵ� �� ���� ��ɿ� ���� ���ܵǾ����ϴ�."));
                cm.getPlayer().ban("�� ��� (2������)", true, false);
                cm.getClient().getSession().close();
                return;
            }
            cm.sendYesNo("��! ����Ͻó׿�~! �̷��� ���� �ð����� �����Ͻ����� �������! ���� ���� ������ �����Ͻðھ��?");
        } else if (!checkPos(cm)) {
            cm.getPlayer().message(5, "�Ÿ��� �ʹ� �־� ��ȭ�� �� �� ����.");
            cm.dispose();
        } else if (!checkTime(cm)) {
            cm.sendOk("��.. �̹� ���� �ð��� ���� �� ���ƿ�. �˼������� ������ �ϼż� �ٽ� ������ �ּ���!");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.getPlayer().Message(7, "�̹� ������ ���� ���� 20���� ��� ���� ������ �ֽø� �ſ�! ä���� �ű�ų� ������ ����� ù ���ú��� �ٽ� �ϼž� �ؿ�!!");
        cm.warp(103050370, 0);
        cm.dispose();
    }
}

function checkPos(cm) {
    var ltx = 588;
    var lty = -1950;
    var rbx = 900;
    var rby = -1780;
    var curx = cm.getPlayer().getPosition().getX();
    var cury = cm.getPlayer().getPosition().getY();
    return curx >= ltx && cury >= lty && curx <= rbx && cury <= rby;
}

function checkTime(cm) {
    if (cm.getPlayer().getKeyValue2("2ndTrialStartTime") == -1) {
        return false;
    }
    var startTime = cm.getPlayer().getKeyValue2("2ndTrialStartTime");
    return time > (System.currentTimeMillis() / 1000) - startTime;
}

function isHack(cm) {
    var startTime = cm.getPlayer().getKeyValue("2ndTrialStartTime");
    return (System.currentTimeMillis() / 1000) - startTime < 60000;
}