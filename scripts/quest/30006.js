var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
qm.sendNextS("�ϴ� �� ������ Ǯ�� ���ؼ��� ���� ħ���ڵ��� ��ü���� �ľ��ؾ� �� �� ����.",2);
} else if (status == 1) {
qm.sendNext("������ �׵��� �̹� ��� ���� ���ȴ°�?");
} else if (status == 2) {
qm.sendNextS("Ȥ�� �����ִ� �ܼ��� ������ �𸣴ϱ� ã�ƺ���. Ȥ�� ���⿡ �ִ� �� ���� ���� ���ؼ� �˰� �ִ� �� �־�?",2);
} else if (status == 3) {
qm.sendNext("�� ���� ���� ������ �༮���� �������� ����. ���� �� �� ������ ���������� ��� �õ��غôµ�, ���� �ɷ��ִ� ���� �������� ���� ���� ������.");
} else if (status == 4) {
qm.sendNextS("Ȥ�� �� �� �ۿ� ���� �ܼ��� �ɸ��� ���� �������� ������? ���� �� �� �� ������.... ��? �̰� ����?",2);
} else if (status == 5) {
qm.showWZEffect("Effect/Summon.img/36",0);
qm.sendNext("�;�, �� ���� �Ͼ�� ������ �־�!");
} else if (status == 6) {
qm.sendNextS("��ü �̰� ���� ������? ��, ��? ��,���� ���� ����!",2);
} else if (status == 7) {
qm.sendNext("#b" + qm.getPlayer().getName() + "#k!!!");
} else if (status == 8) {
qm.warp(105200410);
qm.dispose();
}
}
}