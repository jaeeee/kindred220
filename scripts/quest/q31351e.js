/*

	ǻ�� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : ������)

	���ǽþ��̵� : 
	
	���ǽ� �̸� : Ű��

	���ǽð� �ִ� �� : ������ ��1

	���ǽ� ���� : �ñ׳ʽ� Ʃ�丮��


*/

importPackage(Packages.server.quest);

var status = -1;



function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendOK("���� ! ������ ������ óġ���ּ˱�!!");
        } else if (status == 1) {          
	    qm.forceCompleteQuest();
            qm.gainExp(4084953);
	    qm.dispose();
        }
    }
}