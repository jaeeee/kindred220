/*
 * @Author 바이러스(v_ir_us@nate.com)
 */
importPackage(Packages.database);
importPackage(java.sql);
importPackage(java.lang);

var time = new Date();
var day = time.getDay();

switch(day){
	case 0:
	var d = "일요일";
	break;
	case 1:
	var d = "월요일";
	break;
	case 2:
	var d = "화요일";
	break;
	case 3:
	var d = "수요일";
	break;
	case 4:
	var d = "목요일";
	break;
	case 5:
	var d = "금요일";
	break;
	case 6:
	var d = "토요일";
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

var today = ""+year+"년 "+month+"월 "+date+"일 "+d+" "+apm+""+hour+" : "+min+" : "+sec+"";

function start() {
	cm.sendSimple("미라클 우체통입니다. 무엇을 도와드릴까요?\r\n#b#L1#편지를 쓰겠습니다.\r\n#L2#편지를 확인하겠습니다.");
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
	cm.sendGetText("누구에게 보내시겠습니까?")
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
            title = "없음";
        }
	if (memo == undefined || memo == "") {
	memo = "없음";
	}
	cm.sendYesNo("#e제목 : #n"+title+"\r\n#e내용 : #n"+memo+"\r\n위 내용이 맞다면 확인을 눌러주세요.");
    } else if (selected == 2) {
        if (s == 1) {
            deletePost(delid);
        } else if (s == 2) {
            receiver = rec;
            cm.sendGetText("제목, 내용을 입력해주세요.\r\nEx) 안녕/나는 바이러스야");
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
            title = "없음";
        }
	if (memo == undefined || memo == "") {
	memo = "없음";
	}
	cm.sendYesNo("#e제목 : #n"+title+"\r\n#e내용 : #n"+memo+"\r\n위 내용이 맞다면 확인을 눌러주세요.");
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
	ins.setString(5,"안읽음");
        ins.executeUpdate();
	cm.sendOk("성공적으로 편지를 보냈습니다."); 
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
	string.append(" #n"+rs.getString("title")+" /#d "+rs.getString("sender")+"#k  [확인여부 : ");
	string.append(check == "안읽음" ? "#e#rX#n#k]\r\n" : "#e#rO#k#n]\r\n#n");
	}
	if (i != 0) {
	cm.sendSimple("#h #님에게 온 편지입니다. (제목 / 보낸이)\r\n"+string.toString()); 
	} else {
	cm.sendOk("#h #님에게 온 편지가 없습니다.");
	cm.dispose();
}
}

function deletePost(id) {
        var del = SystemSQL.getConnection().prepareStatement("DELETE FROM post WHERE id = ?");
        del.setInt(1,id);
        del.executeUpdate();
        cm.sendOk("편지가 삭제되었습니다.");
        cm.dipsose();
}

function readPost(id) {
	var ps = SystemSQL.getConnection().prepareStatement("SELECT * FROM post WHERE id = ?");
	ps.setInt(1,id);
	var rs = ps.executeQuery();
	var string = new StringBuilder();
	rs.next();
        memo = rs.getString("memo").split("/");
	string.append("#e제목 : #n").append(rs.getString("title")).append("\r\n");
	string.append("#e내용 : #n").append(memo[0]).append("\r\n");
	string.append("#e날짜 : #n").append(memo[1]).append("\r\n");
	cm.sendSimple(string.toString()+"#b#L1#편지를 삭제하겠습니다.\r\n#L2#답장을 보내겠습니다.\r\n#L3#창을 닫겠습니다.");
        if (rs.getString("date") == "안읽음") {
	updatePost(id);
    }
    rec = rs.getString("sender");
    delid = id;
}

function updatePost(id) {
	var ps = SystemSQL.getConnection().prepareStatement("UPDATE post SET date = ? WHERE id = ?");
        ps.setString(1,"읽음");
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
	cm.sendGetText("제목, 내용을 입력해주세요.\r\nEx) 안녕/나는 바이러스야");
	} else {
	cm.sendOk("#b"+name+"#k 님을 찾을 수 없습니다.");
	cm.dispose();
}
}