/*
	���췼 �ź��� ��Ż
	�������� �����Ͻ�
*/

	function start() {
			if (cm.getJob() == 2002) {
    			var tmp_str = "(�� �̻� ���췼�� �� ���� ���ٸ� �ź��� ��Ż�� ���� �ٸ� ������ �� �� �ִ�.... ��� ������ ����?)";
    			tmp_str += "\r\n#L5##b�����Ͼ�";
    			tmp_str += "\r\n#L6##b��׽ý�";
    			tmp_str += "\r\n#L7##b�丮��";
    			tmp_str += "\r\n#L8##bĿ�׽�Ƽ";
    			tmp_str += "\r\n#L9##b�����ǿ��";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2300) {
    			var tmp_str = "(�� �̻� ���췼�� �� ���� ���ٸ� �ź��� ��Ż�� ���� �ٸ� ������ �� �� �ִ�.... ��� ������ ����?)";
    			tmp_str += "\r\n#L10##b�����Ͼ�";
    			tmp_str += "\r\n#L11##b��׽ý�";
    			tmp_str += "\r\n#L12##b�丮��";
    			tmp_str += "\r\n#L13##bĿ�׽�Ƽ";
    			tmp_str += "\r\n#L14##b�����ǿ��";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2310) {
    			var tmp_str = "(�� �̻� ���췼�� �� ���� ���ٸ� �ź��� ��Ż�� ���� �ٸ� ������ �� �� �ִ�.... ��� ������ ����?)";
    			tmp_str += "\r\n#L15##b�����Ͼ�";
    			tmp_str += "\r\n#L16##b��׽ý�";
    			tmp_str += "\r\n#L17##b�丮��";
    			tmp_str += "\r\n#L18##bĿ�׽�Ƽ";
    			tmp_str += "\r\n#L19##b�����ǿ��";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2311) {
    			var tmp_str = "(�� �̻� ���췼�� �� ���� ���ٸ� �ź��� ��Ż�� ���� �ٸ� ������ �� �� �ִ�.... ��� ������ ����?)";
    			tmp_str += "\r\n#L20##b�����Ͼ�";
    			tmp_str += "\r\n#L21##b��׽ý�";
    			tmp_str += "\r\n#L22##b�丮��";
    			tmp_str += "\r\n#L23##bĿ�׽�Ƽ";
    			tmp_str += "\r\n#L24##b�����ǿ��";
			cm.sendSimple(tmp_str);
			} else if (cm.getJob() == 2312) {
    			var tmp_str = "(�� �̻� ���췼�� �� ���� ���ٸ� �ź��� ��Ż�� ���� �ٸ� ������ �� �� �ִ�.... ��� ������ ����?)";
    			tmp_str += "\r\n#L25##b�����Ͼ�";
    			tmp_str += "\r\n#L26##b��׽ý�";
    			tmp_str += "\r\n#L27##b�丮��";
    			tmp_str += "\r\n#L28##bĿ�׽�Ƽ";
    			tmp_str += "\r\n#L29##b�����ǿ��";
			cm.sendSimple(tmp_str);
		} else {
    			var tmp_str = "(�� �̻� ���췼�� �� ���� ���ٸ� �ź��� ��Ż�� ���� �ٸ� ������ �� �� �ִ�. �ٸ� �޼Ұ� �ʿ��� ���ϴ�.... ��� ������ ����?)";
    			tmp_str += "\r\n#L0##b�����Ͼ�";
    			tmp_str += "\r\n#L1##b��׽ý�";
    			tmp_str += "\r\n#L2##b�丮��";
    			tmp_str += "\r\n#L3##bĿ�׽�Ƽ";
    			tmp_str += "\r\n#L4##b�����ǿ��";
			cm.sendSimple(tmp_str);
		}
	}

function action(mode, type, selection) {
	cm.dispose();
	    if (selection == 0) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(101000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }
            } else if (selection == 1) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(100000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }
            } else if (selection == 2) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(102000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }
            } else if (selection == 3) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(103000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }
            } else if (selection == 4) {
		if (cm.getMeso() >= 2000) {
        	    cm.warp(105000000, 0);
        	    cm.gainMeso(-2000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
		}
            } else if (selection == 5) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 6) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 7) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 8) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 9) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 10) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 11) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 12) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 13) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 14) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 15) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 16) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 17) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 18) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 19) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 20) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 21) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 22) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 23) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 24) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
            } else if (selection == 25) {
        	    cm.warp(101000000, 0);
            	    cm.dispose();
            } else if (selection == 26) {
        	    cm.warp(100000000, 0);
            	    cm.dispose();
            } else if (selection == 27) {
        	    cm.warp(102000000, 0);
            	    cm.dispose();
            } else if (selection == 28) {
        	    cm.warp(103000000, 0);
            	    cm.dispose();
            } else if (selection == 29) {
        	    cm.warp(105000000, 0);
            	    cm.dispose();
		}
	}