/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : �ñ׳ʽ�

	���ǽð� �ִ� �� : ������

	���ǽ� ���� : �ñ׳ʽ� Ʃ�丮��


*/

importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else if (mode == 0 && status < 3)
            status--;
	else if (mode == 0 && status == 3) {
	    qm.sendOk("�����꿡 ���� ���� ȯ���մϴ�...");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("�˰� ��Ű���? ������ ������ ����� ��ȭ�ο� �������� ������ �ʴ� ���� ����� ���縮�� �־��. ������ ���带 ���� ��Ű���� ���� �������, �׸� ��Ȱ��Ű���� �ڵ�...");
        } else if (status == 1) {
            qm.sendNextPrev("����ϰ� ��Ȱ�� ������ ���� ���� ���µ�, �츮�� ���� ���ϴ� �ٶ� ���ۿ� ������. �ƴ�, ���δ� �������� �η����� �� ū ���� �Ǿ� �츮�� ������ ���� ������...");
        } else if (status == 2) {
            qm.askAcceptDecline("�׷����� ������ ���� �����Կ�. ����̶�� �� ��� ���� �̰ܳ��� ������ ���带 �����ֽ� �״ϱ��... �׷���? ��簡 �ǰڴٰ� �����Ͻ� ����̶��...\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i1142065# ������� ���� 1��");
        } else if (status == 3) {
	    qm.forceStartQuest();
	    qm.gainItem(1142065, 1);
	    qm.sendNext("����... �׷��� ����� �ֽ� �� �˾Ҿ��. ���� ������ ���� �� ���� ���ž� �ϰ�������");        
	    qm.forceCompleteQuest();
	    qm.dispose();
        }
    }
}