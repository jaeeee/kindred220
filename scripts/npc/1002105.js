/*
 * @Author ���̷���(v_ir_us@nate.com)
 */
importPackage(Packages.database);
importPackage(java.sql);
importPackage(java.lang);

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

var today = ""+year+"�� "+month+"�� "+date+"�� "+d+" "+apm+""+hour+" : "+min+" : "+sec+"";

function start() {
	cm.sendSimple("�̶�Ŭ ��ü���Դϴ�. ������ ���͵帱���?\r\n#b#L1#������ ���ڽ��ϴ�.\r\n#L2#������ Ȯ���ϰڽ��ϴ�.");
	status = -1;
}

function action(m,t,s) {
	if (m == 1) {
	status++;
	}
	if (m == -1 || m == 0) {
	cm.dispose();
	return;
	}
	if (status == 0) {
	if (s == 1) {
	cm.sendGetText("�������� �����ðڽ��ϱ�?")
	} else if (s == 2) {
	checkPost(cm.getPlayer().getName());
	}
	selected = s;
	
	} else if (status == 1) {
	if (selected == 1) {
	receiver = cm.getText();
	checkName(receiver);
	} else if (selected == 2) {
	sel = s;
	readPost(sel)
	}

	} else if (status == 2) {
	if (selected == 1) {
	comments = cm.getText().split("/");
	title = comments[0];
	memo = comments[1];
        if (title == "" || title == undefined) {
            title = "����";
        }
	if (memo == undefined || memo == "") {
	memo = "����";
	}
	cm.sendYesNo("#e���� : #n"+title+"\r\n#e���� : #n"+memo+"\r\n�� ������ �´ٸ� Ȯ���� �����ּ���.");
    } else if (selected == 2) {
        if (s == 1) {
            deletePost(delid);
        } else if (s == 2) {
            receiver = rec;
            cm.sendGetText("����, ������ �Է����ּ���.\r\nEx) �ȳ�/���� ���̷�����");
        } else if (s == 3) {
            cm.dispose();
        }
	}
	
	} else if (status == 3) {
	if (selected == 1) {
	sendPost(cm.getPlayer().getName(),receiver,title,memo,today);
}   else if (selected == 2) {
    comments = cm.getText().split("/");
	title = comments[0];
	memo = comments[1];
        if (title == "" || title == undefined) {
            title = "����";
        }
	if (memo == undefined || memo == "") {
	memo = "����";
	}
	cm.sendYesNo("#e���� : #n"+title+"\r\n#e���� : #n"+memo+"\r\n�� ������ �´ٸ� Ȯ���� �����ּ���.");
}
        } else if (status == 4) {
            if (selected == 2) {
                sendPost(cm.getPlayer().getName(),receiver,"re) "+title,memo,today);
            }
}
}

function sendPost(sender,receiver,title,memo,date) {
	var ins = SystemSQL.getConnection().prepareStatement("INSERT INTO post(sender,receiver,title,memo,date) VALUES(?,?,?,?,?)");
	ins.setString(1,sender);
	ins.setString(2,receiver);
	ins.setString(3,title);
	ins.setString(4,memo+"/"+date);
	ins.setString(5,"������");
        ins.executeUpdate();
	cm.sendOk("���������� ������ ���½��ϴ�."); 
	cm.dispose();
}

function checkPost(name) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM post WHERE receiver = ?");
	ps.setString(1,name);
	var rs = ps.executeQuery();
	var i = 0;
	var string = new StringBuilder();
	while (rs.next()) {
	i++;
        check = rs.getString("date");
	string.append("#L"+rs.getInt("id")+"#").append("#b(").append(Integer(i)).append(")#k");
	string.append(" #n"+rs.getString("title")+" /#d "+rs.getString("sender")+"#k  [Ȯ�ο��� : ");
	string.append(check == "������" ? "#e#rX#n#k]\r\n" : "#e#rO#k#n]\r\n#n");
	}
	if (i != 0) {
	cm.sendSimple("#h #�Կ��� �� �����Դϴ�. (���� / ������)\r\n"+string.toString()); 
	} else {
	cm.sendOk("#h #�Կ��� �� ������ �����ϴ�.");
	cm.dispose();
}
}

function deletePost(id) {
        var del = SystemSQL.getConnection().prepareStatement("DELETE FROM post WHERE id = ?");
        del.setInt(1,id);
        del.executeUpdate();
        cm.sendOk("������ �����Ǿ����ϴ�.");
        cm.dipsose();
}

function readPost(id) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM post WHERE id = ?");
	ps.setInt(1,id);
	var rs = ps.executeQuery();
	var string = new StringBuilder();
	rs.next();
        memo = rs.getString("memo").split("/");
	string.append("#e���� : #n").append(rs.getString("title")).append("\r\n");
	string.append("#e���� : #n").append(memo[0]).append("\r\n");
	string.append("#e��¥ : #n").append(memo[1]).append("\r\n");
	cm.sendSimple(string.toString()+"#b#L1#������ �����ϰڽ��ϴ�.\r\n#L2#������ �����ڽ��ϴ�.\r\n#L3#â�� �ݰڽ��ϴ�.");
        if (rs.getString("date") == "������") {
	updatePost(id);
    }
    rec = rs.getString("sender");
    delid = id;
}

function updatePost(id) {
	var ps = SystemSQL.getConnection().prepareStatement("UPDATE post SET date = ? WHERE id = ?");
        ps.setString(1,"����");
	ps.setInt(2,id);
	ps.executeUpdate();
}

function checkName(name) {
	var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	ps.setString(1,name);
	var rs = ps.executeQuery();
	var isExist = false;
	while (rs.next()) {
	isExist = true;
	}
	if (isExist) {
	cm.sendGetText("����, ������ �Է����ּ���.\r\nEx) �ȳ�/���� ���̷�����");
	} else {
	cm.sendOk("#b"+name+"#k ���� ã�� �� �����ϴ�.");
	cm.dispose();
}
}