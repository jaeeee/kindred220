importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.constants);

var status = 0;



function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; }
if (mode == 1) status++; else status--;
if (status == 0) {
	cm.sendSimple("� ��ŷ�� ���ðڽ��ϱ�?\r\n#b#L0#���� ��ŷ\r\n#L1#ȯ�� ��ŷ\r\n#L2#�޼� ��ŷ");

} else if (status == 1) {
	if (selection == 0) {
	var txt = new StringBuilder();
	var no = 1;
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY level DESC LIMIT 100").executeQuery();
	while(con.next()) {
	switch(con.getInt("job")){
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
                    job = "�����";
                    break;
                case 120:
                case 121:
                case 122:
                    job = "�ȶ��";
                    break;
                case 130:
                case 131:
                case 132:
                    job = "��ũ����Ʈ";
                    break;
                case 210:
                case 211:
                case 212:
                    job = "������(��,��)";
                    break;
                case 220:
                case 221:
                case 222:
                    job = "������(��,��)";
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
                    job = "�����̵�";
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
                case 1100:
                case 1110:
                case 1111:
                case 1112:
                    job = "�ҿ︶����";
                    break;
                case 1200:
                case 1210:
                case 1211:
                case 1212:
                    job = "�÷������ڵ�";
                    break;
                case 1400:
                case 1410:
                case 1411:
                case 1412:
                    job = "����Ʈ��Ŀ";
                    break;
                case 2100:
                case 2110:
                case 2111:
                case 2112:
                    job = "�ƶ�";
                    break;
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
                    break;
                case 3101:
                case 3120:
                case 3121:
                case 3122:
                    job = "������";
                    break;
                case 3600:
                case 3610:
                case 3611:
                case 3612:
                    job = "����";
                    break;
                case 2700:
                case 2710:
                case 2711:
                case 2712:
                    job = "��̳ʽ�";
                    break;
                case 6100:
                case 6110:
                case 6111:
                case 6112:
                     job = "ī����";
                     break;
               case 6500:
               case 6510:
               case 6511:
               case 6512:
                     job = "������������";
                     break;
               case 5100:
               case 5110:
               case 5111:
               case 5112:
                     job = "������";
                     break;
               case 2400:
               case 2410:
               case 2411:
               case 2412:
                     job = "����";
                     break;
		case 2500:
		case 2510:
		case 2511:
		case 2512:
			job = "����";
		break;
default:
     job = "�ʺ���";
            }
	if (no == 2) {
	txt.append("#b��ŷ 1���� ���ϵ帳�ϴ�! ������, ���� �i�ƿ��� �𸣴� 2���� ���� �ָ� �������ñ�..\r\n");
	} else if (no == 3) {
	txt.append("#b���ݸ� ��! ���� �� ���ڱ��̸� 1���� ��Ż �� �� �ֽ��ϴ�!\r\n");
	}
	txt.append("\r\n#e#rTop. ").append(Integer(no));
	no++;
	txt.append("#n\r\n#Cgray#�̸� : #k").append(con.getString("name"))
	.append(" / #Cgray#���� : #k").append(job)
	.append(" / #Cgray#���� : #k").append(Integer(con.getInt("level"))).append("\r\n");
	}
	cm.sendOk(txt.toString());
	cm.dispose();
	}
	if (selection == 1) {
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY fame DESC LIMIT 100");
	eq = rank.executeQuery();
	var i = 0;
	var sb = new StringBuilder();
	while(eq.next()){
		i++;
		var job = "";
		sb.append(Integer(i)).append("�� #b").append(eq.getString("name")).append(" #kȯ������Ʈ : ").append(Integer(eq.getInt("fame"))).append("#k\r\n");
	}
	cm.sendOk("#e#b�޸����丮#n#k #e#rȯ����ŷ#n#k�Դϴ�.\r\n\r\n"+ sb.toString());
	cm.dispose();
}	if (selection == 2) {
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY meso DESC LIMIT 100");
	eq = rank.executeQuery();
	var i = 0;
	var sb = new StringBuilder();
	while(eq.next()){
		i++;
		var job = "#e#k";
		sb.append(Integer(i)).append("�� #e#b").append(eq.getString("name")).append(" #k�޼� : #e#b").append(eq.getString("meso")).append("#k#n\r\n");
	}
	cm.sendOk("#e#b�޸����丮#n#k #e#r�޼ҷ�ŷ#n#k�Դϴ�.\r\n\r\n"+ sb.toString());
	cm.dispose();
}
}
}
}