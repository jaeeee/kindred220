/*

������ : ljw5992@naver.com / dbg_yeane@nate.com
�޸� ��ũ��Ʈ
�ּ� ���� ����

*/

var status = -1;
var ok = -1;
var tit = "";
var memo = "";
var kk = -1;
var sel = -1;
var sell = -1;

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var time = new Date();
var day = time.getDay();

switch(day){
	case 0:
	var d = "�Ͽ���";
	break;
	case 1:
	var d = "������";
	break;
	case 2:
	var d = "ȭ����";
	break;
	case 3:
	var d = "������";
	break;
	case 4:
	var d = "�����";
	break;
	case 5:
	var d = "�ݿ���";
	break;
	case 6:
	var d = "�����";
	break;
	default:
}
	var year = time.getFullYear();
	var month = time.getMonth();
	var date = time.getDate();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

if (hour > 12){
	hour-=12;
	var apm = "pm";
}else{
	var apm = "am";
}
	if (hour < 10) {
	hour = "0"+hour;
}
	if (min < 10) {
	min = "0"+min;
}
	if (sec < 10) {
	sec = "0"+sec;
}

var insert = MYSQL.getConnection().prepareStatement("INSERT INTO memo(name,title,date,memo,reply) VALUES(?,?,?,?,?)");

function start() {
	return action(1,0,0);
}

function action(mode,type,selection) {
	if (mode == -1 || mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	}
	if (status == 0) {
		var str = "";
		str += "#l#e�Ŀ� ��û �Խ����Դϴ�.#n\r\n"
		str += "#L1##b�Ŀ� ��û �ϱ�\r\n";
		str += "#L7##b�Ŀ� ��û ����\r\n";
		str += "#L8##b�ڽ��� �Ŀ���û�� ����#k\r\n\r\n";
		if (cm.getPlayer().getGMLevel() == 10) {
			str += "#l#eGM����#n\r\n"
			str += "#L100##b�Խñ� �ʱ�ȭ\r\n";
		str += "#L2##b�Խñ� ����\r\n";
		str += "#L7##b�Խñ� ����";
		str += "#L4##b�ۼ��� �˻�\r\n";
		str += "#L3##b���� �˻���\r\n";
		str += "#L5##b���� �˻���\r\n";
		str += "#L6##b��� �˻���#k\r\n\r\n\r\n";
		}
		cm.sendSimple(str);
	} else if (status == 1) {
		if (selection == 1){
			cm.sendGetText("�Ŀ���û ����Դϴ�.\r\n���� ���� / �ɹ�ȣ / �Ŀ��ݾ�\r\n\r\nex) ���ǸӴ� / 123-123-123-123 / 2����\r\n");
			kk = 1;
		}else if (selection == 2){
			var title = MYSQL.getConnection().prepareStatement("SELECT * FROM memo ORDER BY id DESC LIMIT 100").executeQuery();
			var i = 0;
			var string = new StringBuilder();
			while (title.next()) {
				i++;
				string.append("#L"+title.getInt("id")+"#("+title.getInt("id")+")#e ���� : #n").append(title.getString("title").replace('\r\n','')).append("#b (").append(Integer(title.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
				cm.sendSimple(string.toString());
			}else{
				cm.sendOk("���� �����ϴ�.");
				cm.dispose();
			}
			kk = 2;
		}else if (selection == 3){
			cm.sendGetText("�˻��� ������ �Է����ּ���");
			kk = 3;
		}else if (selection == 4){
			cm.sendGetText("�˻��� �ۼ��ڸ� �Է����ּ���.");
			kk = 4;
		}else if (selection == 5){
			cm.sendGetText("�׿� �ٸ� �Ҹ��� ��û������ �������ּ���.");
			kk = 5;
		}else if (selection == 6){
			cm.sendGetText("�˻��� ����� �Է����ּ���.");
			kk = 6;
		}else if (selection == 100){
			MYSQL.getConnection().prepareStatement("DELETE FROM memo").executeUpdate();
			cm.sendOk("�޸� �ʱ�ȭ�� �Ϸ��߽��ϴ�.");
			cm.dispose();
		}else if (selection == 7){
			var title = MYSQL.getConnection().prepareStatement("SELECT * FROM memo where name = ?");
			title.setString(1,cm.getPlayer().getName());
			var i = 0;
			var b = title.executeQuery();
			var string = new StringBuilder();
			while (b.next()) {
				i++;
				string.append("#L"+b.getInt("id")+"##e���� : #n").append(b.getString("title").replace('\r\n','')).append("#b (").append(Integer(b.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
				cm.sendSimple("������ �Խñ��� �������ּ���.\r\n"+string.toString());
				kk = 7;
			}else{
				cm.sendOk("���� �����ϴ�.");
				cm.dispose();
			}
		}else if (selection == 8){
			var title = MYSQL.getConnection().prepareStatement("SELECT * FROM memo where name = ?");
			title.setString(1,cm.getPlayer().getName());
			var i = 0;
			var b = title.executeQuery();
			var string = new StringBuilder();
			while (b.next()) {
				i++;
				string.append("#L"+b.getInt("id")+"##e���� : #n").append(b.getString("title").replace('\r\n','')).append("#b (").append(Integer(b.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
				cm.sendSimple("#h0#���� �ۼ��� �� ����Դϴ�.\r\n"+string.toString());
				kk = 2;
			}else{
				cm.sendOk("���� �����ϴ�.");
				cm.dispose();
			}
			}
	} else if (status == 2) {
		sel = selection;
		if (kk == 1){
			tit = cm.getText();
			if (cm.getText().split("").length<25) {
				cm.sendGetText("�׿� ������� ��Ź������ �����ּ���.");
				ok = 1;
			}else{
			if (kk < 3){
				cm.sendOk("������ 25���̻� �Է��� �� �����ϴ�.");
				cm.dispose();
			}
			}
		}
		else if (kk == 2){
			var mem = MYSQL.getConnection().prepareStatement("SELECT * FROM memo WHERE id = ?");
			mem.setInt(1, selection);
			var mc = mem.executeQuery();
			var string = new StringBuilder();
			var reply = MYSQL.getConnection().prepareStatement("SELECT * FROM memo WHERE id = ?");
			reply.setInt(1, selection);
			var rc = reply.executeQuery();
			var stringg = new StringBuilder();
			mc.next();
			string.append("#e�ۼ� ���� : #n").append(mc.getString("date")).append("\r\n#e�ۼ��� : #n").append(mc.getString("name")).append("\r\n#e���� : #n").append(mc.getString("title")).append("\r\n\r\n#e���� : #n").append(mc.getString("memo")).append("\r\n");
			for (var z = 1 ; z < mc.getString("reply").split(",,,").length; z++){
				stringg.append("#b��#k ").append(mc.getString("reply").split(",,,")[z]).append("\r\n");
			}
			cm.sendGetText(string.toString()+""+stringg.toString()+"\r\n#Cgray#����� �Է��� �ּ���");
			ok = 2;
		}	
	
		else if (kk == 3){
		var titl = MYSQL.getConnection().prepareStatement("SELECT * FROM memo where title LIKE CONCAT('%',?,'%')");
		titl.setString(1,cm.getText());
		var title = titl.executeQuery();
			var i = 0;
			var string = new StringBuilder();
			while (title.next()) {
				i++;
				string.append("#L"+title.getInt("id")+"##e���� : #n").append(title.getString("title").replace('\r\n','')).append("#b (").append(Integer(title.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
			cm.sendSimple(string.toString());
			}else{
				cm.sendOk("�˻��� : "+cm.getText()+"\r\n\r\n��ġ�ϴ� ������ ã�� �� �����ϴ�.");
				cm.dispose();
			}
		}

		else if (kk == 4){
		var titl = MYSQL.getConnection().prepareStatement("SELECT * FROM memo where name LIKE CONCAT('%',?,'%')");
		titl.setString(1,cm.getText());
		var title = titl.executeQuery();
			var i = 0;
			var string = new StringBuilder();
			while (title.next()) {
				i++;
				string.append("#L"+title.getInt("id")+"##e���� : #n").append(title.getString("title").replace('\r\n','')).append("#b (").append(Integer(title.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
			cm.sendSimple(string.toString());
			}else{
				cm.sendOk("�˻��� : "+cm.getText()+"\r\n\r\n��ġ�ϴ� �ۼ��ڸ� ã�� �� �����ϴ�.");
				cm.dispose();
			}
		}

		else if (kk == 5){
		var titl = MYSQL.getConnection().prepareStatement("SELECT * FROM memo where memo LIKE CONCAT('%',?,'%')");
		titl.setString(1,cm.getText());
		var title = titl.executeQuery();
			var i = 0;
			var string = new StringBuilder();
			while (title.next()) {
				i++;
				string.append("#L"+title.getInt("id")+"##e���� : #n").append(title.getString("title").replace('\r\n','')).append("#b (").append(Integer(title.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
			cm.sendSimple(string.toString());
			}else{
				cm.sendOk("�˻��� : "+cm.getText()+"\r\n\r\n��ġ�ϴ� ������ ã�� �� �����ϴ�.");
				cm.dispose();
			}
		}

		else if (kk == 6){
		var titl = MYSQL.getConnection().prepareStatement("SELECT * FROM memo where reply LIKE CONCAT('%',?,'%')");
		titl.setString(1,cm.getText());
		var title = titl.executeQuery();
			var i = 0;
			var string = new StringBuilder();
			while (title.next()) {
				i++;
				string.append("#L"+title.getInt("id")+"##e���� : #n").append(title.getString("title").replace('\r\n','')).append("#b (").append(Integer(title.getString("reply").split(",,,").length-1)).append(")#k\r\n");
			}
			if (i != 0){
				cm.sendSimple(string.toString());
			}else{
				cm.sendOk("�˻��� : "+cm.getText()+"\r\n\r\n��ġ�ϴ� ����� ã�� �� �����ϴ�.");
				cm.dispose();
			}
		}

		else if (kk == 7){
		var del = MYSQL.getConnection().prepareStatement("DELETE FROM memo WHERE name = ? and id = ?");
		del.setString(1,cm.getPlayer().getName());
		del.setInt(2,selection);
		del.executeUpdate();
		cm.sendOk("�Խñ��� �����߽��ϴ�.");
		cm.dispose();
		}
	} else if (status == 3) {
		sell = selection;
		if (ok == 1){
		memo = cm.getText();
			if (cm.getPlayer().getMeso() >= 100000){
				insert.setString(1,cm.getPlayer().getName());
				insert.setString(2,tit);
				insert.setString(3,""+year+"�� "+month+"�� "+date+"�� "+d+" "+apm+""+hour+" : "+min+" : "+sec+"");
				insert.setString(4,memo);
				insert.setString(5,"");
				insert.executeUpdate();
				cm.gainMeso(-100000);
				cm.sendOk("�Ŀ���û�� �Ϸ�Ǿ����ϴ�. �ִ��� �������ϳ� Ȯ���� �����ص帮�ڽ��ϴ�.");
			//	WorldBroadcasting.broadcast(UIPacket.showInfo("���� : "+tit));
			//	WorldBroadcasting.broadcast(UIPacket.showInfo(cm.getPlayer().getName()+"���� �����Խ��ǿ� ���� �ۼ��ϼ̽��ϴ�."));
				cm.dispose();
			}else{
				cm.sendOk("���� ����� ���ؼ� 10���޼Ұ� �ʿ��մϴ�.");
				cm.dispose();
			}
		}

		else if (ok == 2){
			re = cm.getText();
			if (re.split("").length > 1){
				var rs = MYSQL.getConnection().prepareStatement("SELECT * FROM memo WHERE id = ?");
				rs.setInt(1, sel);
				var ps = rs.executeQuery();
				var upd = MYSQL.getConnection().prepareStatement("UPDATE memo SET reply = ? WHERE id = ?");
				var sb = new StringBuilder();
				ps.next();
				upd.setString(1, sb.append(ps.getString("reply"))+",,,#b"+cm.getPlayer().getName()+"#k : "+re);
				upd.setInt(2, sel);
				upd.executeUpdate();
				cm.sendOk("���������� ����� �޾ҽ��ϴ�.");
				cm.dispose();
			}else{
				cm.sendOk("�ƹ��͵� ���� �ʾҽ��ϴ�.");
				cm.dispose();
			}
		}else{
			var mem = MYSQL.getConnection().prepareStatement("SELECT * FROM memo WHERE id = ?");
			mem.setInt(1, selection);
			var mc = mem.executeQuery();
			var string = new StringBuilder();
			var reply = MYSQL.getConnection().prepareStatement("SELECT * FROM memo WHERE id = ?");
			reply.setInt(1, selection);
			var rc = reply.executeQuery();
			var stringg = new StringBuilder();
			mc.next();
			string.append("#e�ۼ� ���� : #n").append(mc.getString("date")).append("\r\n#e�ۼ��� : #n").append(mc.getString("name")).append("\r\n#e���� : #n").append(mc.getString("title")).append("\r\n\r\n#e���� : #n").append(mc.getString("memo")).append("\r\n");
			for (var z = 1 ; z < mc.getString("reply").split(",,,").length; z++){
				stringg.append("#b��#k ").append(mc.getString("reply").split(",,,")[z]).append("\r\n");
			}
			cm.sendGetText(string.toString()+""+stringg.toString()+"\r\n#Cgray#����� �Է��� �ּ���");
			ok = 3;
		}
	} else if (status == 4) {
			re = cm.getText();
			var rs = MYSQL.getConnection().prepareStatement("SELECT * FROM memo WHERE id = ?");
			rs.setInt(1, sell);
			var ps = rs.executeQuery();
			var upd = MYSQL.getConnection().prepareStatement("UPDATE memo SET reply = ? WHERE id = ?");
			var sb = new StringBuilder();
			ps.next();
			upd.setString(1, sb.append(ps.getString("reply"))+",,,#b"+cm.getPlayer().getName()+"#k : "+re);
			upd.setInt(2, sell);
			upd.executeUpdate();
			cm.sendOk("���������� ����� �޾ҽ��ϴ�.");	
			cm.dispose();
	}
}
