importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendNext("\r\n�ȳ��ϼ���~ ��. #b#h0##k��? ������ Ŀ�׽���� �ų����̺�Ʈ�� �������µ� ���� ��������? �������̳İ�? ������, õ���Ǹ�Ҹ� ���� ������ ����ȸ�� �����ݾƿ�~ �ҽ��� �������ó׿�.");
        } else if (status == 1) {
            qm.sendYesNo("��·��, �� ����ȸ�� �����̿���~ #b#h0##k�Ե� �� ���ż� ���� ������ ������ �ּ���~ �����Ͻø� �ٷ� �̰� Ŀ�׽������ �̵��Ͻ� �� ������ �ſ���!"); 
        } else if (status == 2) {
            qm.sendOk("��~! ����� ���ο� ��, �����Ƽ�� ������ ��Ƚ��ϴ�. ĳ���� ����â�� ���ؼ� Ȯ���غ�����~!");
            qm.dispose();
        } else if (status == 3) {
            qm.sendOk("�����Ƽ�� �����ϸ� ���ܰ� ������ ������ �ٽ� Ȯ�����ּ���~!");
            qm.dispose();
        }
    }
}