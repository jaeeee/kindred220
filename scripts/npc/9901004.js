/*

õ��õ���丮 ������ ��ũ��Ʈ (�����̵�)    	} else {
�����ڴ� ����(qor6101)

*/

importPackage(Packages.packet.creators);
importPackage(Packages.main.world);
importPackage(java.lang);

var status = -1;
var select = 0;
var trial = 0;
var mode_ = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("Ȥ�ö� ������ ���Ŵٸ� �����Է� ������~ �̵��� ���� �����ִ�ϴ�~ ����� �̵��� ���ؼ��� �����ϽŰ� �⺻����̽Ű� ����? �׷��� �������� ������..������");
		cm.dispose();
	} else {
		if ((status == 0 || status == 1 || status == 2 || status == 4 || status == 6) && mode == 0) {
			cm.sendOk("Ȥ�ö� ������ ���Ŵٸ� �����Է� ������~ �̵��� ���� �����ִ�ϴ�~ ����� �̵��� ���ؼ��� �����ϽŰ� �⺻����̽Ű� ����? �׷��� �������� ������..������");
			cm.dispose();
			return;
		}
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	var intro = "�ȳ��ϼ���~ ���� õ��õ���丮 3�� ȫ����� #r������#k�Դϴ�. ���� �ִ� #b������#k�� ���� ī��Ÿ�� ���ָ� �̿��� �ڽ��� ���� ��Ų �Ŷ��ϴ�~~ Ȥ�� �����̵��� �Ͻñ� ���Ͻó���? #b\r\n";
        intro += "#L0#������ �̵��ϰ� �;��#l\r\n";
        intro += "#L1#���� ����ͷ� �̵��ϰ� �;��#l\r\n";
	cm.sendSimple(intro);
    } else if (status == 1) {
        if (selection == 0) {
	var Town = "#r���� �̵�#k�� ���� �ϼ̱���, ���� �̵��� #b��� ���� ������� ���� ����#k�� ���ؼ� �̵��� �����ϸ�, �̵������ #r50�� �޼�#k�Դϴ�.#b\r\n";
        Town += "#L0#�÷θ�����ġ - �غ��� ���θ����� �̵�#l\r\n";
        Town += "#L1#�������Ϸ��� - �������� �̵�#l\r\n";
        Town += "#L2#�����ε� - ������� �̵�#l\r\n";
        Town += "#L3#��ī�̷ε� - �����񽺷� �̵�#l\r\n";
        Town += "#L4#��������� - �������� �̵�#l\r\n";
        Town += "#L5#���ڿ��� �� - ������ �������� �̵�#l\r\n";
        Town += "#L6#����Ʒε� - ����Ƹ������� �̵�#l\r\n";
        Town += "#L7#���긮���� - ���긮������ �̵�#l\r\n";
        Town += "#L8#����� ȣ�� - �����������η� �̵�#l\r\n";
        Town += "#L9#����� ȣ�� - �Ʒ������� �̵�#l\r\n";
        Town += "#L10#�������� - ���� ������� �̵�#l\r\n";
        Town += "#L11#�������� - ���ʸ����� �̵�#l\r\n";
        Town += "#L12#���׷ε� - �Ƹ���Ʈ�� �̵�#l\r\n";
        Town += "#L13#���·ε� - ����Ƽ�Ʒ� �̵�#l\r\n";
        Town += "#L14#�̳����� - �������� �̵�#l\r\n";
        Town += "#L15#���� ������ - ������Ÿ������ �̵�#l\r\n";
        Town += "#L16#Ȳ�ݻ�� - Ȳ�ݻ������ �̵�#l\r\n";
	cm.sendSimple(Town);
        } else if (selection == 1) {
	var Attack = "#r���� ����� �̵�#k�� ���� �ϼ̱���, ���� ����� �̵��� #b���� ����Ʈ�� ������ ����ؼ�#k �̵��� �����ϸ�, �̵������ #r100�� �޼�#k�Դϴ�.#b\r\n";
	Attack += "#L17#�ð�ž ���� ������ �̵� - ��Ǯ������#l\r\n"
	Attack += "#L18#���ļ��� �������� �̵� - �Ǿƴ���#l\r\n"
	Attack += "#L24#������ �� ������ �̵� - �� ����#l\r\n"
	Attack += "#L19#�÷��� ����3 ���� �̵� - ���� & ī���� ����#l\r\n"
	Attack += "#L20#������ ���� �Ա��� �̵� - ȥ���� & ī���� ȥ����#l\r\n"
	Attack += "#L21#�μ��� ȸ������ �̵� - ��ũ��#l\r\n"
	Attack += "#L22#���� �������� �̵� - �ñ׳ʽ�#l\r\n"
	Attack += "#L23#�ð��� �տ��� �̵� - ��ī�̷�#l\r\n"
	cm.sendSimple(Attack);
		}
	
    } else if (status == 2) {
        if (selection == 0) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(120030000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }	
        } else if (selection == 1) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(140000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }
        } else if (selection == 2) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(130000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }  
        } else if (selection == 3) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(200000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }     
        } else if (selection == 4) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(211000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }    
        } else if (selection == 5) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(211060000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }    
        } else if (selection == 6) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(230000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }   
        } else if (selection == 7) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(220000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }   
        } else if (selection == 8) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(221000000, 0);
        	    cm.gainMeso(-500000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       } 
        } else if (selection == 9) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(222000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }     
        } else if (selection == 10) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(250000100, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }  
        } else if (selection == 11) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(251000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }    
        } else if (selection == 12) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(260000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }                   
        } else if (selection == 13) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(261000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       }                   
        } else if (selection == 14) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(240000000, 0);
        	    cm.gainMeso(-500000);	
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       } 
        } else if (selection == 15) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(310000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();
	       } 
        } else if (selection == 16) {
		if (cm.getMeso() >= 500000) {
        	    cm.warp(252000000, 0);
        	    cm.gainMeso(-500000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 17) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(220080000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 18) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(230040400, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 19) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(211042200, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 20) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(240040700, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 21) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(270040000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 22) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(271040000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
		}
        } else if (selection == 23) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(272000000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
				}
        } else if (selection == 24) {
		if (cm.getMeso() >= 1000000) {
        	    cm.warp(211070000, 0);
        	    cm.gainMeso(-1000000);	
            	    cm.dispose();
	       } else {
	    	cm.sendOk("�̵��� ������ �޼Ұ� �����մϴ�.");
            	cm.dispose();	
				}
			}
		}
	}
}