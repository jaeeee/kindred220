/*
    	! �� ��ũ��Ʈ�� Pure Developmest of KMS�� �Ϻ��Դϴ�.
    	! �� ��ũ��Ʈ�� ���� ������ ���� ������ �Ұ����մϴ�.
    	! �� �ּ��� �������� ���ǰ� ������ ������ �����մϴ�.
    	Copyright �� 2012 Scripts Maker	�絹�� <rhkddbs_4399@naver.com>
					��ũ�� <doomgate17@naver.com>
					��ȣ <baekhoms@naver.com>
					������ <junir0542@naver.com>
*/

var status = 0;
var mapcod = Array(200000110,200000120,200000130,200000140,200000150,200000160,200000170);
var mapnam = Array("���丮�� ���Ϸ���","���긮����","������","������","�Ƹ���Ʈ","������","������Ÿ����");
var select = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
	    cm.sendNext("���ô� �������� ������� �ٽ� �ѹ� Ȯ���Ͻ� �Ŀ� ���� ���ؼ� �°������� �̵��ϵ��� �ϼ���. �� �ð��� ������ ������ �ð��� �� ���߼ž� �մϴ�!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "������ �����̼ǿ��� ���� �°����� �ֽ��ϴ�. �������� ���� ����� �� �°����� ã�� ���ž� �Ѵ�ϴ�. ��� ������ ���� �踦 Ÿ�� ���� �°������� ���ðھ��?#b\r\n";
	    for (var i = 0; i < mapcod.length; i++) {
		chat += "#L" + i + "#" + mapnam[i] + "�� ���ϴ� �踦 Ÿ�� �°���\r\n#l";
	    }
	    cm.sendSimple(chat);
        } else if (status == 1) {
	    select = selection;
	    cm.sendYesNo("���� ��θ� �߸� ������ ��Ż�� ���� ���� �ִ� ������ ���ƿ��� �� ������ �Ƚ��ϼ���. #b" + mapnam[selection] + "�� �̵��Ͻðھ��?");
        } else if (status == 2) {
	    cm.warp(mapcod[select]);
	    cm.dispose();
	}
    }
}