importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);

var status = 0;
var points;
var sel;
var sel2;
var itemList = Array (1052526,1142281,1002971,1052202,1003621,1052526,1003622,1052527,1122000,1122076,1402179,1402180); // ������ ��� 
var number = Array (300,500,60,60,1000,1000,1500,1500,1000,2000,3000,100000);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (status <= 2 && mode == 0) {
            cm.dispose();
            return;
        }  
        if (mode == 0) {
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("#e#r[�̵��� ����ϰ� �ִ� �������Դϴ�]\r\n\r\n#L2#[����� ����]#l        #L1#[��Ÿÿ�� ���ʹ�]\r\n\r\n#L3#[�ʽ����� ��б���]#l#L4#[�ʽ����� ��г���]\r\n\r\n#L5#[�߱����� ��б���]#l#L6#[�߱����� ��г���]\r\n\r\n#L7#[������� ��б���]#l#L8#[������� ��г���]\r\n\r\n#L9#[�������� ��б���]#l#L10#[�������� ��г���]");
         } else if (status == 1) {
            if (selection == 0) {
       if (cm.getPlayer().getParty() == null) {
            cm.sendOk("��Ƽ�� ������ ������ �Ұ����մϴ�.");
            cm.dispose();
            return;
        }
            if (!cm.isLeader()) {
                cm.sendOk("��Ƽ���� �����û�� �� �� �ֽ��ϴ�.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                cm.dispose();
                return;
            }
if (cm.getClient().getChannelServer().getMapFactory().getMap(921160400).getCharactersSize() > 0) {
             cm.sendOk("�̹� �ٸ� ������ �������̵带 �̿����Դϴ�.\r\n�ٸ�ä���� �̿����ֽðų� ����Ŀ� �������ֽʽÿ�.");
             cm.dispose();
             return;
    }
   try {
                var em = cm.getEventManager("newCharacter");
                em.startInstance(cm.getPlayer());
                cm.resetMap(910340500);
                cm.allPartyWarp(910340500, true);
                cm.dispose();
            } catch (err) {
                cm.sendOk(err);
            }
 

        } else if (selection == 1) {
      
                cm.warp(910001001, 0);
 cm.dispose();

        } else if (selection == 2) {
       
             cm.warp(910001002,0);
          cm.dispose();
     
          
        } else if (selection == 3) {

                cm.warp(910001005, 0);
                cm.dispose();
       } else if (selection == 4) {
		
                cm.warp(910001003, 0);
                cm.dispose();
   } else if (selection == 5) {
	cm.warp(910001006, 0);
                cm.dispose();
   } else if (selection == 6) {
	cm.warp(910001004, 0);
                cm.dispose();
   } else if (selection == 7) {
	    cm.warp(910001008, 0);
                cm.dispose();
   } else if (selection == 8) {
             cm.warp(910001007, 0);
                cm.dispose();
   } else if (selection == 9) {
             cm.warp(910001010, 0);
                cm.dispose();
   } else if (selection == 10) {
             cm.warp(910001009, 0);
                cm.dispose();

            }

    }
}
}