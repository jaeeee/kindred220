/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : Ű��

	���ǽð� �ִ� �� : ������ ��5

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
	    qm.sendOk("���͸� ����ؼ� ����ǰ�� ��� ���� �������� ���ϴ� �⺻���� ������ ������~");
	    qm.dispose();
	    return;
	}	
        if (status == 0) {
            qm.sendNext("#b(�ҵ��ҵ�...)#k");
        } else if (status == 1) {
	    qm.sendNextPrev("...��! ��¦�̾�! ������ ��� ���� �� �ٵ� �𸣰� �־���. �װ� Ű���� ���ϴ� �� �������? �ݰ���! ���� Ű�ƶ�� ��. Ư��� #b����#k�� ����� ����. �����꿡 �� ������� �ʿ��Ե� ���ڸ� �ϳ� ����� �� �����̾�.");
        } else if (status == 2) {
	    qm.sendNextPrev("���� ���� ���� �˾�? ���ڴ� ���͸� ������ ��ó�� ���⸦ �ֵѷ� �����ϸ� �ν��� �� �� �־�. ��, ���ʹ� ��ų�� ������ ���������� #b���ڴ� �Ϲݰ������θ� ������ �ȴ�#k�� �� ����ؾ� ��.");
        } else if (status == 3) {            
            qm.askAcceptDecline("���ڸ� ��� #b����#k�� #b����#k�� �ϳ����� ������! ��Ḹ ���̸� �ٷ� ���� ���ڸ� ����� �ٰ�. �׷� ��ٸ���!");        
        } else if (status == 4) {
	    qm.forceStartQuest();
            qm.dispose();
        }
    }
}

function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendNext("����� ������ ���ؿ� �ž�? ��� �� �� ����? ...�¾�! �̰� �ٷ� ������ ��ᰡ �Ǵ� ����� �����̾�! �׷� �ٷ� ���ڷ� ����� �ٰ�.");
        } else if (status == 1) {
	    qm.sendNext("��, ����� ���ھ�. ������? #b�Ƿ��� �� ���ڿ� ������ HP�� ���� ȸ��#k ��. �κ��丮 #b��ġâ#k�� �� ���� �״� Ȯ���� �� �Ŀ� #bŰ��#k���� ����. ȭ��ǥ�� ���� �������� ���� ���� �� �־�.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i3010060# ����� ���� 1��\r\n#fUI/UIWindow.img/QuestIcon/8/0# 95 exp");
        } else if (status == 2) {          
	    qm.forceCompleteQuest();
	    qm.gainItem(4032267, -1);
	    qm.gainItem(4032268, -1);
	    qm.gainItem(3010060, 1);
            qm.gainExp(95);
	    qm.dispose();
        }
    }
}