


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/


var status = -1;
var select = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        
//            case 105000000:
//            case 240000000:
//            case 220000000:
//            case 221000000:
//            case 222000000:
        if (cm.getPlayer().getMapId() == 105000000) {
            cm.sendYesNo("�ȳ��ϼ���! ������ �޷����� �������� �Ѿ��ý��Դϴ�! �ܵ� 30000�޼ҿ� #b�� �ٸ� ��#k���� �̵����ѵ帮�� �ֽ��ϴ�. ���� �̵��� ���ðھ��?");
        }
        if (cm.getPlayer().getMapId() == 240000000) {
            cm.sendYesNo("�ȳ��ϼ���! ������ �޷����� �������� �Ѿ��ý��Դϴ�! �ܵ� 50000�޼ҿ� #b���� �� �Ա�#k���� �̵����ѵ帮�� �ֽ��ϴ�. ���� �̵��� ���ðھ��?");
        }
        if (cm.getPlayer().getMapId() == 220000000) {
            cm.sendSimple("�ȳ��ϼ���! ������ �޷����� �������� �Ѿ��ý��Դϴ�! �̵��Ͻð� ���� ���� �����ϼ���!\r\n\r\n#b#L0#�ð��� ��� (50000�޼�)#l\r\n#L1#������������ (120000�޼�)#l\r\n#L2#���� �� (60000�޼�)#l\r\n#L3#�Ʒ� ���� (120000�޼�)#l");
        }
        if (cm.getPlayer().getMapId() == 221000000) {
            cm.sendYesNo("�ȳ��ϼ���! ������ �޷����� �������� �Ѿ��ý��Դϴ�! �ܵ� 120000�޼ҿ� #b���긮��#k���� �̵����ѵ帮�� �ֽ��ϴ�. ���� �̵��� ���ðھ��?");
        }
        if (cm.getPlayer().getMapId() == 222000000) {
            cm.sendYesNo("�ȳ��ϼ���! ������ �޷����� �������� �Ѿ��ý��Դϴ�! �ܵ� 120000�޼ҿ� #b���긮��#k���� �̵����ѵ帮�� �ֽ��ϴ�. ���� �̵��� ���ðھ��?");
        }
        if (cm.getPlayer().getMapId() == 300000100) {
            cm.sendYesNo("�ȳ��ϼ���! ������ �޷����� �������� �Ѿ��ý��Դϴ�! �ܵ� 120000�޼ҿ� #b���긮��#k���� �̵����ѵ帮�� �ֽ��ϴ�. ���� �̵��� ���ðھ��?");
        }
    } else if (status == 1) {
        if (cm.getPlayer().getMapId() == 105000000) {
            if (cm.getPlayer().getMeso() >= 30000) {
                cm.gainMeso(-30000);
                cm.warp(105030000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 240000000) {
            if (cm.getPlayer().getMeso() >= 50000) {
                cm.gainMeso(-50000);
                cm.warp(240030000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 220000000) {
            select = selection;
            if (select == 0) {
                cm.sendYesNo("���ð� ������ ���� #b�ð��� ���#k �� �½��ϱ�? ����� #b50000�޼�#k �Դϴ�.");
            }
            if (select == 1) {
                cm.sendYesNo("���ð� ������ ���� #b������������#k �� �½��ϱ�? ����� #b120000�޼�#k �Դϴ�.");
            }
            if (select == 2) {
                cm.sendYesNo("���ð� ������ ���� #b���� ��#k �� �½��ϱ�? ����� #b60000�޼�#k �Դϴ�.");
            }
            if (select == 3) {
                cm.sendYesNo("���ð� ������ ���� #b�Ʒ� ����#k �� �½��ϱ�? ����� #b120000�޼�#k �Դϴ�.");
            }
        }
        if (cm.getPlayer().getMapId() == 221000000) {
            if (cm.getPlayer().getMeso() >= 120000) {
                cm.gainMeso(-120000);
                cm.warp(220000000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 222000000) {
            if (cm.getPlayer().getMeso() >= 120000) {
                cm.gainMeso(-120000);
                cm.warp(220000000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 300000100) {
            if (cm.getPlayer().getMeso() >= 120000) {
                cm.gainMeso(-120000);
                cm.warp(220000000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                cm.dispose();
                return;
            }
        }
    } else if (status == 2) {
        if (cm.getPlayer().getMapId() == 220000000) {
            if (select == 0) {
                if (cm.getPlayer().getMeso() >= 50000) {
                    cm.gainMeso(-50000);
                    cm.warp(220050300);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                    cm.dispose();
                    return;
                }
            }
            if (select == 1) {
                if (cm.getPlayer().getMeso() >= 120000) {
                    cm.gainMeso(-120000);
                    cm.warp(221000000);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                    cm.dispose();
                    return;
                }
            }
            if (select == 2) {
                if (cm.getPlayer().getMeso() >= 60000) {
                    cm.gainMeso(-60000);
                    cm.warp(300000000);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                    cm.dispose();
                    return;
                }
            }
            if (select == 3) {
                if (cm.getPlayer().getMeso() >= 120000) {
                    cm.gainMeso(-120000);
                    cm.warp(222000000);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("����� �����ϽŰ� �ƴѰ���? �ٽ��ѹ� Ȯ���� �ּ���.");
                    cm.dispose();
                    return;
                }
            }
        }
        
    }
}


