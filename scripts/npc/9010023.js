importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);

var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("�η���ǰ�");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
        sel = selection;
	cm.sendYesNo("#rī���� ����#k�� ��ȯ�Ͻðٽ��ϱ�?");
     } else if (status == 1) {
  if (sel == 0) {
   if (cm.getMonsterCount(105200419) > 0) {
  cm.sendOk("�ٽ� �õ����ֽʽÿ�.");
  cm.killAllMob();
  cm.dispose();
 }  if (cm.haveItem(4310027,500)) { // �޼����� ����
  cm.sendOk("�޼Ұ� �����մϴ�.");
  cm.dispose();importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var Jessica = 0;

// 1. �⺻ �ݾ� 2. 10���� �ʰ� �� �ݾ� 3. 20���� �ʰ� �� �ݾ� 4. 35���� �ʰ� �� �ݾ�
var meso = new Array(2000, 3000, 5000, 10000);

function total_m(name) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM mail WHERE name2 = ?");
	con.setString(1, name);
	var eq = con.executeQuery();
	mail = 0;
	while(eq.next()) {
	mail++;
	var title_m = eq.getString("title");
	var title_ms = title_m.split("%");
	if (title_ms[1] == 1) {
	mail--;
	}
	}
}

function list_m(name) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM mail WHERE name2 = ? ORDER BY id DESC");
	con.setString(1, name);
	var eq = con.executeQuery();
	var txt = new StringBuilder();
	while(eq.next()) {
	var title_m = eq.getString("title");
	var title_ms = title_m.split("%");
	txt.append("#L").append(eq.getInt("id")).append("#")
	.append("#e����#n : ").append(title_ms[0]).append(" ")
	.append("#e���� ��#n : ").append(eq.getString("name")).append(" ");
	if (title_ms[1] == 0) {
	txt.append("��\r\n#k");
	} else if (title_ms[1] == 1) {
	txt.append("��\r\n");
	}
	}
	return txt.toString();
}

function show_m(mid) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM mail WHERE id = ?");
	con.setInt(1, mid);
	var eq = con.executeQuery();
	var txt = new StringBuilder();
	eq.next();
	var title_m = eq.getString("title");
	var title_ms = title_m.split("%");
	var title_ = title_ms[0] + "%1";
	mail_m2 = eq.getString("meso");
	mid2 = mid;
	show_meso = eq.getString("meso");
	if (title_ms[1] == 0) {
	MYSQL.getConnection().prepareStatement("UPDATE mail SET title = '" + title_ + "' WHERE id = '" + mid + "'").executeUpdate();
	}
	txt.append("#e���� ��#n : ").append(eq.getString("name")).append("\r\n")
	.append("#e�޴� ��#n : ").append(eq.getString("name2")).append("\r\n\r\n")
	.append("#e����#n : ").append(title_ms[0]).append("\r\n\r\n")
	.append("#e���� ����#n : ").append(eq.getString("content")).append("\r\n\r\n")
	.append("#e������ �ݾ�#n : ").append(eq.getString("meso")).append("\r\n");
	if (eq.getString("meso") != 0) {
	txt.append("#Cgray##L0#�޼� �ޱ�");
	}
	return txt.toString();
}
	

function start() { Jessica = -1; action(1, 0, 0); }
function action(music, type, girl) { (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
if (Jessica == 0) {
	total_m(cm.getPlayer().getName());
	var Jess = "�ȳ��ϼ���. ������ #b" + cm.getPlayer().getName() + "#k�԰� �Բ��ϴ�~�� ";
	Jess += "#r������ ��ü��#k�Դϴ�. ������ ���͵帱���?\r\n";
	Jess += "\r\n" + cm.getPlayer().getName() + "�Կ��� ������ ���� " + mail + "��\r\n\r\n";
	Jess += "#e��ü��#n\r\n";
	if (mail >= 1) {
	Jess += "#L0#���� ����";
	}
	Jess += "#L1#���� ������#l\r\n";
	Jess += "\r\n\r\n#e���� ���#n\r\n";
	Jess += "#L2#�⼮üũ";
	//Jess += "#L3#�Խ���";
	//Jess += "#L4#��ȭ ��ǰ��";
	cm.sendSimple(Jess);

} else if (Jessica == 1) {
	if (girl == 0) {
		cm.sendSimple(list_m(cm.getPlayer().getName()));
		Jessica = 5;
	} else if (girl == 1) {
		        if (cm.getPlayerStat("LVL") >= 251) {
		cm.sendGetText("������ ���� ������ �г����� �Է� ���ּ���.");
		Jessica = 1;
                     	} else {
                   		cm.sendOk("�Ұ��մϴ�.");
                   		cm.dispose();
			        
			}    
	} else if (girl == 2) {
	if (cm.getPlayer().getKeyValue("Today_c") == null) {
		cm.getPlayer().setKeyValue("Today_c", "1");
		cm.sendOk("�⼮üũ �������� 1000��ŭ�� ĳ������Ʈ ���޵Ǿ����ϴ�.");
		cm.dispose();
	} else {
		cm.sendOk("�̹� �⼮üũ ������ ���޹����̽��ϴ�. ���� �ٽ� ã�ƿ��ּ���.");
		cm.dispose();
	}
	}

} else if (Jessica == 2) {
	mail_n = cm.getText();
	cm.sendGetText("���� ������ �Է� ���ּ���.");
	Jessica = 2;

} else if (Jessica == 3) {
	mail_t = cm.getText();
	cm.sendGetText("���� ������ �Է� ���ּ���.");
	Jessica = 3;

} else if (Jessica == 4) {
	mail_c = cm.getText();
	cm.sendGetText("������ �ݾ��� �Է� ���ּ���.");
	Jessica = 4;

} else if (Jessica == 5) {
	mail_me = cm.getText();
	if (mail_c.length() <= 10) {
	var mail_m = meso[0];

	} else if (mail_c.length() >= 11) {
	var mail_m = meso[1];
	}

	if (mail_c.length() >= 20) {
	var mail_m = meso[2];
	}

	if (mail_c.length() >= 35) {
	var mail_m = meso[3];
	}
	var Jess = "#e���� ��#n : " + cm.getPlayer().getName() + "\r\n";
	Jess += "#e�޴� ��#n : " + mail_n + "\r\n\r\n";
	Jess += "#e����#n : " + mail_t + "\r\n\r\n";
	Jess += "#e���� ����#n : " + mail_c + "\r\n\r\n";
	Jess += "#e������ �ݾ�#n : " + mail_me + "\r\n\r\n";
	Jess += "#e������#n : " + mail_m;
	if (cm.getMeso() >= mail_me && cm.getMeso() >= mail_m) {
		var insert = MYSQL.getConnection().prepareStatement("INSERT INTO mail(name, name2, title, content, meso, date) VALUES(?,?,?,?,?,now())");
		insert.setString(1, cm.getPlayer().getName());
		insert.setString(2, mail_n);
		insert.setString(3, mail_t+"%0");
		insert.setString(4, mail_c);
		insert.setString(5, mail_me);
		insert.executeUpdate();
		cm.sendOk(Jess);
		cm.gainMeso(-mail_me);
		cm.gainMeso(-mail_m);
		cm.dispose();
	} else {
		cm.sendOk("�޼Ұ� �����մϴ�.");
		cm.dispose();
	}

} else if (Jessica == 6) {
	show_m(girl);
	if (show_meso == 0) {
		cm.sendOk(show_m(girl));
		cm.dispose();
	} else {
		cm.sendSimple(show_m(girl));
		Jessica = 6;
	}

} else if (Jessica == 7) {
	MYSQL.getConnection().prepareStatement("UPDATE mail SET meso = '0' WHERE id = '" + mid2 + "'").executeUpdate();
	cm.gainMeso(mail_m2);
	cm.dispose();
}
}
 } else {    
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"�Բ��� ī���� ������ ��ȯ�Ͽ����ϴ�.")); // ���� ä�ü����˸� �޼��� 
 cm.gainMeso(-5000000); // �޼� ������Ű��

 cm.spawnMob(8930000,-149,443);
 cm.spawnMob(8930001,-149,443);
 cm.dispose();
}
}
}
}