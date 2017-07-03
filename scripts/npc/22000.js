importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	var chat = "#L0##l\r\n"
chat += "#k#e#d��E-Lend���� 4���� ��ŷ �ý����� �����մϴ�!\r\n����� ��ŷ�� ���ðھ��? �Ʒ����� ��󺸼���!#n#k\r\n";
	chat += "#L1##e< ������ >#n        E-Lend�¶����� ��ŷ\r\n\r\n";
	chat += "#L2##e< ȯ����ŷ >#n        ȯ�� ����Ʈ ��ŷ\r\n\r\n";
	chat += "#L3##e< ������ŷ >#n        ���� ��ŷ\r\n\r\n";
	chat += "#L4##e< �޼ҷ�ŷ >#n        �޼� ��ŷ\r\n";
	cm.sendSimple(chat);
    }else if (status == 1){
	if (selection == 1){
    cm.sendOk("#k#d#e������������������������ŷ ����#n#k\r\n#e�̸���:��E-Lend�Ŵ���#n��\r\n#e������:��250#n��\r\n#e������:�����#n��\r\n#e�Ͻá�:��2014-06-01 PM 02:20#n��\r\n#e�Ұ���:������� ��������פ�;;;#n");
    cm.dispose();
	}
	else if (selection == 2){
		cm.dispose();
		cm.openNpc(1002010);
 } else if (selection == 0) {
		cm.dispose();
		cm.openNpc(9000001);

}
	else if (selection == 3){
var i = 0;
var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY level DESC LIMIT 100").executeQuery();
        var print = new StringBuilder();
        while (rank.next()) {
            i++;
            switch(rank.getInt("job")){
                case 3600:
                case 3610:
                case 3611:
                case 3612:
                    job = "����";
                    break;
                case 2001:
                case 2200:
                case 2210:
                case 2211:
                case 2212:
                case 2213:
                case 2214:
                case 2215:
                case 2216:
                case 2217:
                case 2218:
                    job = "����";
                    break
                case 6001:
                case 6500:
                case 6510:
                case 6511:
                case 6512:
                    job = "������������";
                    break;
                case 6000:
                case 6100:
                case 6110:
                case 6111:
                case 6112:
                    job = "ī����";
                    break;
                case 6001:
                case 6500:
                case 6510:
                case 6511:
                case 6512:
                    job = "������������";
                    break;
                case 2004:
                case 2700:
                case 2710:
                case 2711:
                case 2712:
                    job = "��̳ʽ�";
                    break;
                case 3001:
                case 3100:
                case 3110:
                case 3111:
                case 3112:
                    job = "���󽽷��̾�";
                    break;
                case 3002:
                case 3101:
                case 3120:
                case 3121:
                case 3122:
                    job = "������";
                    break;
                case 3001:
                case 3100:
                case 3110:
                case 3111:
                case 3112:
                    job = "���󽽷��̾�";
                    break;
                case 2002:
                case 2300:
                case 2310:
                case 2311:
                case 2312:
                    job = "�޸�������";
                    break;
                case 430:
                case 431:
                case 432:
                case 433:
                case 434:
                    job = "�����̵�";
                    break;
                case 2003:
                case 2400:
                case 2410:
                case 2411:
                case 2412:
                    job = "����";
                    break;
                case 5000:
                case 5100:
                case 5110:
                case 5111:
                case 5112:
                    job = "������";
                    break;
                case 3500:
                case 3512:
                case 3511:
                case 3512:
                    job = "��ī��";
                    break;
                case 1500:
                case 1510:
                case 1511:
                case 1512:
                    job = "��Ʈ����Ŀ";
                    break;
                case 1300:
                case 1310:
                case 1311:
                case 1312:
                    job = "����극��Ŀ";
                    break;
                case 3300:
                case 3310:
                case 3311:
                case 3312:
                    job = "���ϵ� ����";
                    break;
                case 100:
                    job = "�˻�";
                    break;
                case 200:
                    job = "������";
                    break;
                case 300:
                    job = "�ü�";
                    break;
                case 400:
                    job = "����";
                    break;
                case 500:
                    job = "����";
                    break;
                case 110:
                case 111:
                case 112:
                    job = "������";
                    break;
                case 120:
                case 121:
                case 122:
                    job = "������";
                    break;
                case 130:
                case 131:
                case 132:
                    job = "���Ǿ��";
                    break;
                case 210:
                case 211:
                case 212:
                    job = "������(��, ��)";
                    break;
                case 220:
                case 221:
                case 222:
                    job = "������(��, ��)";
                    break;
                case 230:
                case 231:
                case 232:
                    job = "Ŭ����";
                    break;
                case 310:
                case 311:
                case 312:
                    job = "����";
                    break;
                case 320:
                case 321:
                case 322:
                    job = "���";
                    break;
                case 410:
                case 411:
                case 412:
                    job = "��ؽ�";
                    break;
                case 420:
                case 421:
                case 422:
                    job = "����";
                    break;
                case 430:
                case 431:
                case 432:
                case 434:
                    job = "���� ��";
                    break;
                case 510:
                case 511:
                case 512:
                    job = "��������";
                    break;
                case 520:
                case 521:
                case 522:
                    job = "�ǽ�����";
                    break;
                case 530:
                case 531:
                case 532:
                    job = "ĳ����";
                    break;
                default:
                    job = "��Ȯ��";
            }
            print.append(Integer(i)).append("����#b").append(rank.getString("name")).append("��#k���� : #e").append(Integer(rank.getInt("level"))).append("#n#b������ : #k").append(job).append("\r\n");
    }
    cm.sendOk("�̷���¶����� ���� ��ŷ�Դϴ�.\r\n\r\n"+print.toString());
    cm.dispose();
	}
	else if (selection == 4){

	var i = 0;
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY meso DESC LIMIT 100").executeQuery();
        var print = new StringBuilder();
        while (rank.next()) {
            i++;
	    var meso = ""+rank.getString("meso").split("E");
            print.append(Integer(i)).append("����#b").append(rank.getString("name")).append("��#k���� : ").append(Integer(rank.getInt("level"))).append("#b���޼� : #k").append(rank.getString("meso")).append("\r\n");
   	}
    cm.sendOk("�̷���¶����� �޼� ��ŷ�Դϴ�.\r\n\r\n"+print.toString());
    cm.dispose();
	}
}
}