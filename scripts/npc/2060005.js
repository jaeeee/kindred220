/*
 * @Author ���̷���(v_ir_us@nate.com)
 * MYSQL - MYSQL�� ���� �Ŀ� ������ּ���.
 */
importPackage(java.lang);
importPackage(java.sql);
importPackage(Packages.database);
importPackage(Packages.packet.creators);

var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var date = time.getDate();
if (month < 10) {    month = "0"+month;}
if (date < 10) {    date = "0"+date;}
var today = year+month+date;

function start() {
    status = -1;
    if (getDate() != today) {
        updateChance();
    }
    cm.sendSimple("���������� ��, #d�����#k�Դϴ�. ������ �Ͻðڽ��ϱ�?\r\n#d(���� Ǯ �� �ִ� ��ȸ : #r"+getChance()+" #dȸ)\r\n#b#L1#������� ����ϰڽ��ϴ�.\r\n#L2#������� Ǯ�ڽ��ϴ�.\r\n#L3#����� ������� �����ϰڽ��ϴ�.");
}

function action(mode,type,selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
    return;
    }
    if (status == 0) {
        if (selection == 1) {
            cm.sendGetText("������ ������ �Է����ּ���.");
        } else if (selection == 2) {
            if (getChance() == 0) {
                sendHint("���� ����Ƚ���� �����ϴ�.",250,20);
                cm.dispose();
            } else { 
            getQuizList(1);
        }
        } else if (selection == 3) {
            getQuizList(2);
        }
        selected = selection;
    } else if (status == 1) {
        if (selected == 1) {
            main = cm.getText();
            cm.sendGetText("#e���� : #n#b"+main+"#k\r\n������ ���� �Է����ּ���. Ex) ������������,�����ý��丮");
        } else if (selected == 2) {
            number = selection;
            cm.sendGetText(getQuizInfo(number)+"������ �Է����ּ���.");
        } else if (selected == 3) {
            del = selection;
            cm.sendYesNo("���� ��� �����Ͻðڽ��ϱ�? ������ ����� �ǵ������� �� �����ϴ�.");
        }
    } else if (status == 2) {
        if (selected == 1) {
        text = cm.getText().split(",");
        if (checkText(text[0]) == false || checkText(text[1]) == false) {
            sendHint("������ �信�� ������ ���ڸ� ������ �� �����ϴ�.",300,20);
            cm.dispose();
        } else {
            var length1 = text[0].split("").length;
            var length2 = text[1].split("").length;
            if (length1 != length2) {
                sendHint("������ ���� ���̰� ���� �ʽ��ϴ�.",250,20);
                cm.dispose();
            } else {
                cm.sendGetText("��Ʈ�� �Է����ּ���. (�ִ� 4��, ������ �Է� X)\r\nEx) ��,��,��,�� (#b,#k�� ����)")
            }
        }
    } else if (selected == 2) {
        getResult(number,cm.getText());
    } else if (selected == 3) {
        var delquiz = MYSQL.getConnection().prepareStatement("DELETE FROM consonantquiz WHERE id = ?");
        delquiz.setInt(1,del);
        delquiz.executeUpdate();
        sendHint("���������� �����Ͽ����ϴ�.",250,20);
        cm.dispose();
        }
    } else if (status == 3) {
        if (selected == 1) {
            hint = cm.getText();
            cm.sendGetNumber("�޼Ҹ� �󸶳� �Žðڽ��ϱ�?\r\n#b���� �޼� ������ : "+cm.getMeso()+" �޼�",10000,10000,cm.getMeso() >= 100000000 ? 100000000 : cm.getMeso());
        }
    } else if (status == 4) {
        if (selected == 1) {
            meso = selection;
            cm.sendGetNumber("�� �� ���� ��ȸ�� �ֽðڽ��ϱ�? #b(20 ~ 50ȸ)",20,20,50);
        }
    } else if (status == 5) {
        if (selected == 1) {
            chance = selection;
            var txt = "#e���� : #n#b"+main+"#k\r\n";
            txt += "#e���� & �� : #n#r"+text[0]+" / "+text[1]+"#k\r\n";
            txt += "#e��� : #n"+meso+" �޼�\r\n";
            txt += "#e��ȸ : #n#b"+chance+" ȸ#k\r\n";
            for (var i = 0; i < 4; i++) {
                txt += !hint.equals("") ? "\r\n#e��Ʈ #n"+Integer.parseInt(i+1)+" : #n"+hint.split(",")[i]:"";
            }
            cm.sendYesNo(txt+"\r\n\r\n#k�� ������ �����ø� ���� �����ּ���.");
        }
    } else if (status == 6) {
        if (selected == 1) {
        updateQuiz(cm.getPlayer().getName(),main,text[0]+","+text[1],hint,meso,chance);
    }
    }
}
    
function sendHint(message,x,y) {
    return cm.getPlayer().getClient().getSession().write(MainPacketCreator.sendHint(message,x,y));
}

function checkText(text) {
	var arr = "<>?:{}|[]\;',./!@#$%^&*()_+1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~";
	for (var i=0;i<arr.split("").length;i++){
		for (var z=0;z<text.split("").length;z++){
			if (text.split("")[z]==arr.split("")[i]) {
				return false;
			}
		}
	}
	return true;
}

function haveChance() {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM consonantchance WHERE name = ?");
    ps.setString(1,cm.getPlayer().getName());
    var rs = ps.executeQuery();
    var isExist = false;
    while (rs.next()) {
        isExist = true;
    }
    return isExist;
}

function updateChance() {
    if (haveChance()) {
    var ps = MYSQL.getConnection().prepareStatement("UPDATE consonantchance SET date = ?, chance = ? WHERE name = ?");
    ps.setString(1,today);
    ps.setInt(2,15);
    ps.setString(3,cm.getPlayer().getName());
    ps.executeUpdate();
    } else {
        var ins = MYSQL.getConnection().prepareStatement("INSERT INTO consonantchance(name,date,chance) VALUES(?,?,?)");
        ins.setString(1,cm.getPlayer().getName());
        ins.setString(2,today);
        ins.setInt(3,15);
        ins.executeUpdate();
    }
}

function getChance() {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM consonantchance WHERE name = ?");
    ps.setString(1,cm.getPlayer().getName());
    var rs = ps.executeQuery();
    var chance = 0;
    rs.next();
    if (getDate() == today) {
    chance = rs.getInt("chance");
} else {
    chance = 0;
    }
return chance;
}

function getDate() {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM consonantchance WHERE name = ?");
    ps.setString(1,cm.getPlayer().getName());
    var rs = ps.executeQuery();
    var date;
    var isExist = false;
    while (rs.next()) {
        isExist = true;
        d = rs.getString("date");
    }
    if (isExist) {
        date = d;
    } else {
        date = "";
    }
    return date;
}

function updateQuiz(name,main,answer,hint,meso,chance) {
    var ins = MYSQL.getConnection().prepareStatement("INSERT INTO consonantquiz(name,main,answer,hint,meso,chance) VALUES(?,?,?,?,?,?)");
    ins.setString(1,name);
    ins.setString(2,main);
    ins.setString(3,answer);
    ins.setString(4,hint);
    ins.setInt(5,meso);
    ins.setInt(6,chance);
    ins.executeUpdate();
    cm.gainMeso(-meso);
    sendHint("��� ������Ʈ �Ǿ����ϴ�.",250,20);
    cm.dipsose();
}

function getQuizList(mode) {
    var sql = mode == 1 ? "SELECT * FROM consonantquiz" : mode == 2 ? "SELECT * FROM consonantquiz WHERE name = ?" : "";
    var ps = MYSQL.getConnection().prepareStatement(sql);
    if (mode == 2) {
        ps.setString(1,cm.getPlayer().getName());
    }
    var rs = ps.executeQuery();
    var string = new StringBuilder();
    var isExist = false;
    while (rs.next()) {
        isExist = true;
        question = rs.getString("answer").split(",");
        string.append("#L"+rs.getInt("id")+"#").append("���� : #n#b"+rs.getString("main")+"").append(" #k|| ��ȸ :#r "+Integer(rs.getInt("chance"))+" (ȸ)\r\n#k");
    }
    if (isExist) {
        var t = mode == 2 ? "������ ��� �������ּ���.\r\n" : mode == 1 ? "������� ��ϵ� �����Դϴ�.\r\n" : "";
        cm.sendSimple(t+string.toString());
    } else {
        sendHint("��ϵ� ��� �����ϴ�.",250,20);
        cm.dispose();
    }
}

function getQuizInfo(id) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM consonantquiz WHERE id = ?");
    ps.setInt(1,id);
    var rs = ps.executeQuery();
    var string = new StringBuilder();
    rs.next();
    chance = rs.getInt("chance");
    if (chance == 0) {
        var del = MYSQL.getConnection().prepareStatement("DELETE FROM consonantquiz WHERE id = ?");
        del.setInt(1,id);
        del.executeUpdate();
        sendHint("��� �ڵ����� �Ǿ����ϴ�. (���� - ��ȸ X)",280,20);
        cm.dispose();
    }
    quest = rs.getString("answer").split(",");
    string.append("#e���� : #n#b").append(rs.getString("main")).append("\r\n#k");
    string.append("#e���� : #n#r").append(quest[0]).append("\r\n#k");
    string.append("#e��� : #n#d").append(Integer(rs.getInt("meso"))).append(" �޼�#k\r\n");
    if (!rs.getString("hint").equals("")) {
        string.append("#e��Ʈ : #n").append(rs.getString("hint"));
    }
    string.append("\r\n\r\n");
    return string.toString();
}

function getResult(id,text) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM consonantquiz WHERE id = ?");
    ps.setInt(1,id);
    var rs = ps.executeQuery();
    rs.next();
    answer = rs.getString("answer").split(",")[1];
    if (answer != text) {
        var upd = MYSQL.getConnection().prepareStatement("UPDATE consonantquiz SET chance = ? WHERE id = ?");
        upd.setInt(1,rs.getInt("chance") - 1);
        upd.setInt(2,id);
        upd.executeUpdate();
        sendHint("�����Դϴ�. �ٽ� �������ּ���. #r(����Ƚ�� ����)",300,20);
    } else {
        cm.gainMeso(rs.getInt("meso"));
        var del = MYSQL.getConnection().prepareStatement("DELETE FROM consonantquiz WHERE id = ?");
        del.setInt(1,id);
        del.executeUpdate();
        sendHint("�����Դϴ�! �������� #b"+rs.getInt("meso")+" �޼�#k�� ���޵Ǿ����ϴ�.",320,20);
    }
    var lost = MYSQL.getConnection().prepareStatement("UPDATE consonantchance SET chance = ? WHERE name = ?");
    lost.setInt(1,getChance() - 1);
    lost.setString(2,cm.getPlayer().getName());
    lost.executeUpdate();
    cm.dispose();
}
