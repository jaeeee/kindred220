var maps = new Array(

new Array(980000000, 50000),
new Array(980000000, 50000),
new Array(926100600, 50000),
new Array(101050000, 30000),
new Array(101000000, 30000),
new Array(120000000, 30000),
new Array(130000000, 30000),
new Array(140000000, 30000),
new Array(105000000, 30000),
new Array(240000000, 100000),
new Array(220000000, 100000),
new Array(260000000, 100000),
new Array(310000000, 200000),
new Array(200000000, 100000),
new Array(211000000, 100000),
new Array(250000000, 150000),
new Array(230000000, 150000),
new Array(270000000, 150000)

);
var status = -1;
var select = -1;

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
        
        cm.dispose();
        cm.openNpc(9000086);
        return;
        var text = "��Ƽ����Ʈ�� ����ڴ�.\r\n���� �̵��ϰ� ������?\r\n#b";
        for (var i = 0; i < maps.length; i++) {
            text += "#L"+i+"##m"+maps[i][0]+"##l\r\n"
        }
        cm.sendSimple(text);
    } else if (status == 1) {
        select = selection;
        cm.sendYesNo("������� ���� #b#m"+maps[select][0]+"##k �¾�? ����� "+maps[select][1]+"�޼Ҿ�. ���� �̵��ϰ� �;�?");
    } else if (status == 2) {
        if (cm.getPlayer().getMeso() >= maps[select][1]) {
            cm.gainMeso(-maps[select][1]);
            cm.warp(maps[select][0]);
            cm.dispose();
        } else {
            cm.sendOk("�޼Ҵ� �� ������ �ִ°� �¾�? �ٽ��ѹ� Ȯ���� ��.");
            cm.dispose();
        }
    }
}


