/*
 * ǻ��¶��� �ҽ� ��ũ��Ʈ �Դϴ�.
 * 
 * ��Ż��ġ : 
 * ��Ż���� : 
 * 
 * ���� : ��ũ��
 * 
 */

function enter(pi) {
	if(pi.getPlayer().getKeyValue("luta") == null) {
	cm.sendNextS("��.. ���� �̷����� ��Ż�� �־���?",2);
	pi.dispose();
	} else {
	pi.warp(105010200);
	if(pi.getPlayer().getKeyValue("luta") == "start") {
	pi.sendNextS("��濡 �Ȱ��� �ڿ��ؼ� �þ߸� ������ �� ����. ���� ������ �𸣴� �����ؾ߰ڴ�.");
	}
	pi.dispose();
	}
}