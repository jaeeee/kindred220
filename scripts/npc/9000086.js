
/* ����̵� ������ */


var status = -1;
var mapid = 0;
var mapname = "";

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
        mapid = cm.getPlayer().getMapId();
        mapname = "#m"+mapid+"#";
        
        switch (mapid) {
            case 100000000:
            case 101000000:
            case 102000000:
            case 103000000:
            case 104000000:
            case 120000100:
            case 105000000:
                mapid = 104020100;
                mapname = "�������� ������";
                break;
            case 220000000:
                mapid = 220000100;
                mapname = "���긮�� ������";
                break;
            case 240000000:
                mapid = 240000100;
                mapname = "������ ������";
                break;
            case 310000000:
                mapid = 310000010;
                mapname = "������Ÿ�� �ӽð���";
                break;
            case 260000000:
                mapid = 260000100;
                mapname = "�Ƹ���Ʈ ������";
                break;
            case 250000000:
                mapid = 250000100;
                mapname = "���� ���";
                break;
            case 200000000:
                mapid = 200000100;
                mapname = "������ �����̼�";
                break;
        }
        
        cm.sendYesNo("���� ����� ��� �̵� ������ <#b"+mapname+"#k> ������ �̵��մϴ�. ���� �̵��Ͻðڽ��ϱ�?");
    } else if (status == 1) {
        cm.warp(mapid, 0);
        cm.dispose();
    }
}


