importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.packet.creators);

var status = -1;

function action(mode, type, selection) {
    if (mode != 1) {
	cm.sendOk("두려운건가");
	cm.dispose();
	return;
    }
status++;
    if (status == 0) {
        sel = selection;
	cm.sendYesNo("#r카오스 벨룸#k을 소환하시겟습니까?");
     } else if (status == 1) {
  if (sel == 0) {
   if (cm.getMonsterCount(105200419) > 0) {
  cm.sendOk("다시 시도해주십시오.");
  cm.killAllMob();
  cm.dispose();
 }  if (cm.haveItem(4310027,500)) { // 메소제한 설정
  cm.sendOk("메소가 부족합니다.");
  cm.dispose();importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var Jessica = 0;

// 1. 기본 금액 2. 10글자 초과 시 금액 3. 20글자 초과 시 금액 4. 35글자 초과 시 금액
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
	.append("#e제목#n : ").append(title_ms[0]).append(" ")
	.append("#e보낸 이#n : ").append(eq.getString("name")).append(" ");
	if (title_ms[1] == 0) {
	txt.append("■\r\n#k");
	} else if (title_ms[1] == 1) {
	txt.append("□\r\n");
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
	txt.append("#e보낸 이#n : ").append(eq.getString("name")).append("\r\n")
	.append("#e받는 이#n : ").append(eq.getString("name2")).append("\r\n\r\n")
	.append("#e제목#n : ").append(title_ms[0]).append("\r\n\r\n")
	.append("#e편지 내용#n : ").append(eq.getString("content")).append("\r\n\r\n")
	.append("#e보내는 금액#n : ").append(eq.getString("meso")).append("\r\n");
	if (eq.getString("meso") != 0) {
	txt.append("#Cgray##L0#메소 받기");
	}
	return txt.toString();
}
	

function start() { Jessica = -1; action(1, 0, 0); }
function action(music, type, girl) { (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
if (Jessica == 0) {
	total_m(cm.getPlayer().getName());
	var Jess = "안녕하세요. 언제나 #b" + cm.getPlayer().getName() + "#k님과 함께하는~♬ ";
	Jess += "#r메이플 우체통#k입니다. 무엇을 도와드릴까요?\r\n";
	Jess += "\r\n" + cm.getPlayer().getName() + "님에게 도착한 편지 " + mail + "개\r\n\r\n";
	Jess += "#e우체국#n\r\n";
	if (mail >= 1) {
	Jess += "#L0#편지 보기";
	}
	Jess += "#L1#편지 보내기#l\r\n";
	Jess += "\r\n\r\n#e편의 기능#n\r\n";
	Jess += "#L2#출석체크";
	//Jess += "#L3#게시판";
	//Jess += "#L4#문화 상품권";
	cm.sendSimple(Jess);

} else if (Jessica == 1) {
	if (girl == 0) {
		cm.sendSimple(list_m(cm.getPlayer().getName()));
		Jessica = 5;
	} else if (girl == 1) {
		        if (cm.getPlayerStat("LVL") >= 251) {
		cm.sendGetText("편지를 보낼 상대방의 닉네임을 입력 해주세요.");
		Jessica = 1;
                     	} else {
                   		cm.sendOk("불가합니다.");
                   		cm.dispose();
			        
			}    
	} else if (girl == 2) {
	if (cm.getPlayer().getKeyValue("Today_c") == null) {
		cm.getPlayer().setKeyValue("Today_c", "1");
		cm.sendOk("출석체크 보상으로 1000만큼의 캐쉬포인트 지급되었습니다.");
		cm.dispose();
	} else {
		cm.sendOk("이미 출석체크 보상을 지급받으셨습니다. 내일 다시 찾아와주세요.");
		cm.dispose();
	}
	}

} else if (Jessica == 2) {
	mail_n = cm.getText();
	cm.sendGetText("편지 제목을 입력 해주세요.");
	Jessica = 2;

} else if (Jessica == 3) {
	mail_t = cm.getText();
	cm.sendGetText("편지 내용을 입력 해주세요.");
	Jessica = 3;

} else if (Jessica == 4) {
	mail_c = cm.getText();
	cm.sendGetText("보내실 금액을 입력 해주세요.");
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
	var Jess = "#e보낸 이#n : " + cm.getPlayer().getName() + "\r\n";
	Jess += "#e받는 이#n : " + mail_n + "\r\n\r\n";
	Jess += "#e제목#n : " + mail_t + "\r\n\r\n";
	Jess += "#e편지 내용#n : " + mail_c + "\r\n\r\n";
	Jess += "#e보내는 금액#n : " + mail_me + "\r\n\r\n";
	Jess += "#e수수료#n : " + mail_m;
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
		cm.sendOk("메소가 부족합니다.");
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
 WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, cm.getPlayer().getName()+"님께서 카오스 벨룸을 소환하였습니다.")); // 게임 채팅서버알림 메세지 
 cm.gainMeso(-5000000); // 메소 차감시키기

 cm.spawnMob(8930000,-149,443);
 cm.spawnMob(8930001,-149,443);
 cm.dispose();
}
}
}
}