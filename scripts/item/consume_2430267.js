/*

	���� �� : Rian Story Team

	������ ���̵� : consume_2430267

 	������ �̸� : �����̾�PC�� �ð���
	
	������ ���� : �����̾�PC�濡���� ����� �� �ִ� �ð����̴�. ������� ���� ���ϴ� ������ �̵��� �� �ִ�. �α׾ƿ� �� �������. 30�п� 1���� ����� �� �ִ�.

*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
         cm.askMapSelection("#0#�������� ��#1# ��׽ý�#2# �����Ͼ�#3# �丮��#4# Ŀ�׽�Ƽ#5# �����ױ�#6# �����ǿ��#7# ��ƿ����#8# ������#9# ����#10# ������#11# ������#12# ���긮��#15# ����Ƹ���#16# ������#17# ����#18# ���ʸ���#19# �Ƹ���Ʈ#20# ����Ƽ��#21# ������Ÿ��#22# ���췼#23# ũ��Ƽ�ƽ�");
	    if (status == 0) {
		cm.warp(104020000);
		cm.dispose();

	    } else if(selection == 1) {
		cm.warp(100000000);
		cm.dispose();

	    } else if(selection == 2) {
		cm.warp(101000000);
		cm.dispose();

	    } else if(selection == 3) {
		cm.warp(102000000);
		cm.dispose();

	    } else if(selection == 4) {
		cm.warp(103000000);
		cm.dispose();

	    } else if(selection == 5) {
		cm.warp(104000000);
		cm.dispose();

	    } else if(selection == 6) {
		cm.warp(105000000);
		cm.dispose();

	    } else if(selection == 7) {
		cm.warp(120000000);
		cm.dispose();

	    } else if(selection == 8) {
		cm.warp(130000000);
		cm.dispose();

	    } else if(selection == 9) {
		cm.warp(140000000);
		cm.dispose();

	    } else if(selection == 10) {
		cm.warp(200000000);
		cm.dispose();

	    } else if(selection == 11) {
		cm.warp(211000000);
		cm.dispose();

	    } else if(selection == 12) {
		cm.warp(220000000);
		cm.dispose();

	    } else if(selection == 15) {
		cm.warp(230000000);
		cm.dispose();

	    } else if(selection == 16) {
		cm.warp(240000000);
		cm.dispose();

	    } else if(selection == 17) {
		cm.warp(250000000);
		cm.dispose();

	    } else if(selection == 18) {
		cm.warp(251000000);
		cm.dispose();

	    } else if(selection == 19) {
		cm.warp(260000000);
		cm.dispose();

	    } else if(selection == 20) {
		cm.warp(261000000);
		cm.dispose();

	    } else if(selection == 21) {
		cm.warp(310000000);
		cm.dispose();

	    } else if(selection == 22) {
		cm.warp(910150300);
		cm.dispose();

	    } else if(selection == 23) {
		cm.warp(241000000);
		cm.dispose();
	}
}
}
