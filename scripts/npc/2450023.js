


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	���� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2152019

	���ǽ� �̸� : ������Ÿ�� �Խ���

	���ǽð� �ִ� �� : �ѽ� ��Ÿ�� : �ѽ� ��Ÿ�� ���� (101000100)

	���ǽ� ���� : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
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
	    var cps ="#b[#h #] : #d����Ʈ#k�� �����ϰ������ ���� ����Ʈ�� ����.....?\r\n\r\n";
            cps += "#e                      <����Ʈ ���>   #n                            ";
            cps += "#L1##b#e[�ѽ� ��Ÿ��]  #k#e�ѽ��� ��Ź#n\r\n\r\n";
            cps += "#l   ���� : #e<#v2048214# #t2048214# 1��>#n#l\r\n";
            cps += "#L5##b#e[�ѽ� ��Ÿ��]  #k#e������ ������ I#n\r\n\r\n";
            cps += "#l   ���� : #e<#v2048305# ����ų� ����ɷ� �ο� �ֹ��� 1��>#n#l\r\n";
            cps += "#L6##b#e[�ѽ� ��Ÿ��]  #k#e������ ������ II#n\r\n\r\n";
            cps += "#l   ���� : #e<#v2049360# #t2049360# 1��>#n#l\r\n";
            cps += "#L2##b#e[�ѽ� ��Ÿ��]#k  #e����� ����#k#e#n\r\n\r\n";
            cps += "#l   ���� : #e<#v4310058# #t4310058# 1��>\r\n";
            cps += "#L3##b[�ѽ� ��Ÿ��]#k  #e�Ƶ����� �ӹ�#k#e#n\r\n\r\n";
            cps += "#l   ���� : #e<#v2049153# #t2049153# 1��>#n\r\n";
 	    cps += "#L4##b#e[�ѽ� ��Ÿ��]#k  #e�ѽ� ��Ÿ���� �Ҷ�#k#e#n\r\n\r\n";
            cps += "#l   #e            < 4�� �� �� 1>\r\n#n";
            cps += "#l   ���� : #e<#v1122150# #t1122150# 1��>\r\n#n   �ɼ� : #r[�ý���:150/����50/��Ƚ50]#k#n\r\n";
            cps += "#l   ���� : #e<#v1112735# #t1112735# 1��>\r\n#n   �ɼ� : #b[�ý���:100/����50/��Ƚ0]#k#n\r\n";
            cps += "#l   ���� : #e<#v1112665# #t1112665# 1��>\r\n#n   �ɼ� : #g[�ý���:50/����40/��Ƚ40]#k#n\r\n";
            cps += "#l   ���� : #e<#v1112664# #t1112664# 1��>\r\n#n   �ɼ� : #d[�ý���:50/����30/��Ƚ30]#k#n\r\n";
	    cm.sendSimple(cps);

		} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(1061006);
		} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(9075111);
		} else if (selection == 3) {
		cm.dispose();
		cm.openNpc(2030013);
		} else if (selection == 4) {
		cm.dispose();
		cm.openNpc(1022000);
		} else if (selection == 5) {
		cm.dispose();
		cm.warp(910130102, 0);
		} else if (selection == 6) {
		cm.dispose();
		cm.warp(910530101, 0);
		}
	}
}