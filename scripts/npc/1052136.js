var names = Array("Ŀ�׽����� �κ�", "1�� 2�� : ����Ƽ ����", "3�� 4�� : ���� ����", "5�� 6�� : �Ƿ� ���� & ��� ����", "7�� 8�� : ���� ���� & VIP ��", "Ŀ�׽����� ������ ������");

var mid = Array("103040000", "103040100", "103040200", "103040300", "103040400", "103020020");




function start() {

    status = -1;

    action(1, 0, 0);

}




function action(mode, type, selection) {

    if (mode == -1) {

        cm.dispose();

    } else {

        if (mode == 0) {

            cm.dispose();

            return;

        }

        if (mode == 1)

            status++;

        else

            status--;

        if (status == 0) {                

            text = "���������͸� �̿��� ���ϴ� ������ �̵��� �� �ֽ��ϴ�. �� ������ �̵��ϱ� ���Ͻʴϱ�?\r\n"; 

            for (var i = 0; i < names.length; text += "#L"+i+"##b"+names[i]+"#k\r\n#l", i++); 

            cm.sendSimple(text);

        } else if (status == 1) {

            cm.sendNext(""+names[selection]+"���� �̵��մϴ�. �̵��� ��ġ �����ø� ESC�� �����ּ���.");

            map = mid[selection];

        } else if (status == 2) {

            cm.warp(map, "enter00");

            cm.dispose();

        }

    }
}


