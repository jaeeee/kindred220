/*

Copyright ⓒ 2013 Spirit Corporaion. All Rights Reserved.

leader. Spirit온라인 (terams_@nate.com)
member.UnknownStar (rhduddlr6996@nate.com)
member.우비 (guri__s@nate.com)
Make.공석 (iureal@nate.com)

이 스크립트는  Spirit온라인에만 사용됩니다.
만약 유출이 되더라도 이 주석은 삭제하지 않으셨으면 좋겠습니다.

*/
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.database);
importPackage(Packages.constants);

var status = 0;

function getChar(Jessica) {
	var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	JessicaSql2.setString(1, Jessica);
	var JessicaExcute = JessicaSql2.executeQuery();
	JessicaExcute.next();
	var Jess = new StringBuilder();
	aid2 = Integer(JessicaExcute.getInt("accountid"));
	id = Integer(JessicaExcute.getInt("id"));
}

function nameChange(Jessica) {
	var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	JessicaSql2.setString(1, Jessica);
	var JessicaExcute = JessicaSql2.executeQuery();
	JessicaExcute.next();
	MYSQL.getConnection().prepareStatement("update characters set name= '" + text2 + "' where name = '" + cm.getPlayer().getName() + "'").executeUpdate();
}

function getEquipChar(Jessica) {
    var JessicaS = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = -1");
    JessicaS.setInt(1, Jessica);
    var Jessica2 = JessicaS.executeQuery();
    var string = new StringBuilder();
    while(Jessica2.next()){
	invenid = Integer(Jessica2.getInt("inventoryitemid"));
	var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
	JessicaSql2.setInt(1, invenid);
	var eq2 = JessicaSql2.executeQuery();
	eq2.next();
	switch(eq2.getInt("potential1")) {
	case 10001:
		p = "#b#b[레어]#k#k 힘 +";
		break;
	case 10002:
		p = "#b[레어]#k 민첩성 +";
		break;
	case 10003:
		p = "#b[레어]#k 지력 +";
		break;
	case 10004:
		p = "#b[레어]#k 행운 +";
		break;
	case 10005:
		p = "#b[레어]#k 최대 Health Point +";
		break;
	case 10006:
		p = "#b[레어]#k 최대 Mana Point +";
		break;
	case 10007:
		p = "#b#b[레어]#k#k 명중치 +";
		break;
	case 10008:
		p = "#b[레어]#k 회피치 +";
		break;
	default:
		p = "잠재능력이 존재하지 않습니다.";
	}
	switch(eq2.getInt("potential2")) {
	case 30001:
		p2 = "#b[레어]#k 힘 +";
		break;
	case 30002:
		p2 = "#b[레어]#k 민첩성 +";
		break;
	case 30003:
		p2 = "#b[레어]#k 지력 +";
		break;
	case 30004:
		p2 = "#b[레어]#k 행운 +";
		break;
	case 30005:
		p2 = "#b[레어]#k 최대 Health Point +";
		break;
	case 30006:
		p2 = "#b[레어]#k 최대 Mana Point +";
		break;
	case 30007:
		p2 = "#b[레어]#k 명중치 +";
		break;
	case 30008:
		p2 = "#Cyellow#[유니크]#k 회피치 +";
		break;
	default:
		p2 = "잠재능력이 존재하지 않습니다.";
	}
	switch(eq2.getInt("potential3")) {
	case 30001:
		p2 = "#b[레어]#k 힘 +";
		break;
	case 30002:
		p2 = "#b[레어]#k 민첩성 +";
		break;
	case 30003:
		p2 = "#b[레어]#k 지력 +";
		break;
	case 30004:
		p2 = "#b[레어]#k 행운 +";
		break;
	case 30005:
		p2 = "#b[레어]#k 최대 Health Point +";
		break;
	case 30006:
		p2 = "#b[레어]#k 최대 Mana Point +";
		break;
	case 30007:
		p2 = "#b[레어]#k 명중치 +";
		break;
	case 30008:
		p2 = "#Cyellow#[유니크]#k 회피치 +";
		break;
	default:
		p2 = "잠재능력이 존재하지 않습니다.";
	}
        string.append("#i").append(Integer(Jessica2.getInt("itemid"))).append("#　#b[#t").append(Jessica2.getInt("itemid")).append("#]#k").append("\r\n")
	.append("\r\n#b[스텟]#k\r\nSTR : ").append(Integer(eq2.getInt("str")))
   	.append(" DEX : ").append(Integer(eq2.getInt("dex")))
	.append(" INT : ").append(Integer(eq2.getInt("int")))
	.append(" LUK : ").append(Integer(eq2.getInt("luk")))
	.append("\r\n\r\n#b[부가 옵션]#k\r\n잠재능력1 : ").append(p).append("\r\n")
	.append("잠재능력2 : ").append(p2).append("\r\n\r\n");
    }
	return string.toString();
}

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		var Jessica = "#e#b안녕하세요#r#e#k #b#h #님은 #r"+cm.getRC()+"#b 현재 포인트를 보유중 입니다 닉네임 변경은 후원 13000 Point 입니다. #k\r\n ";
	if (cm.getPlayer().getGender() == 0) {
		Jessica += "";
	} else if (cm.getPlayer().getGender() == 1) {
		Jessica += "";
	}
		Jessica += "\r\n#L2#[닉네임 변경]";

		cm.sendSimple(Jessica);

	} else if (status == 1) {
	if (selection == 0) {
	if (cm.getMeso() >= 1000000) {
		var Jessica = "히힛! 아르미가 맞췄어요 ";
	if (cm.getPlayer().getGender() == 0) {
		Jessica += " ";
	} else if (cm.getPlayer().getGender() == 1) {
		Jessica += " ";
	}
		Jessica += "으음… 그런데 캐릭터들을 삭제하시게요? 그럼, 삭제할 캐릭터 닉네임을 입력해주세요!";
		cm.sendGetText(Jessica);
		status = 1;
	} else {
		cm.sendOk("캐릭터를 삭제하시려면~ 100만 메소가 필요해요. 아르미도 돈 계산은 할 줄 안다구요!");
		cm.dispose();
		}
	} else if (selection == 1) {
		cm.sendGetText("정보를 확인하실꺼에요? 흐음~ 그럼 아르미가 도와드릴게요!");
		status = 4;

	} else if (selection == 2) {
	if (cm.getRC() >= 13000) {
		cm.sendGetText("닉네임 변경을하시려면 후원 Point 13000 입니다.");
		cm.getPlayer().gainHPT(-13000);
		status = 3;
	} else {
		cm.sendOk("닉네임 변경은 후원포인트 13000 Point 입니다");
		cm.dispose();
	}
	}
	

	} else if (status == 2) {
		var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
		JessicaSql2.setString(1, cm.getText());
		var JessicaExcute = JessicaSql2.executeQuery();
		var Jess = new StringBuilder();

		var Jessica = "\r\n\r\n히잉… 아르미는 캐릭터 삭제하는거 정말~ 싫은데… ";
		if (cm.getPlayer().getFame() == 1) {
		Jessica += "아빠가 ";
		} else if (cm.getPlayer().getFame() == 0) {
		Jessica += "엄마가 ";
		}
		Jessica += "원하면 따를게요…";

		var i = 0;
		text = cm.getText();

		getChar(cm.getPlayer().getName());

		while (JessicaExcute.next()) {
		i++;

		aid = Integer(JessicaExcute.getInt("accountid"));
		id = Integer(JessicaExcute.getInt("id"));

		Jess.append("#e" + text + "님의 간단한 정보\r\n#n(자세한 정보는 캐릭터 정보로 확인해주세요.)\r\n\r\n")
		.append("#n닉네임 : ").append(JessicaExcute.getString("name"))
		.append("\r\n레벨 : ").append(Integer(JessicaExcute.getInt("level")))
		.append("\r\n메소 : ").append(JessicaExcute.getString("meso"))
		.append(Jessica);
		}

		if (i == 0) {
			var Jessica = "에엣?! 존재하지 않는 캐릭터에요 ";
		if (cm.getPlayer().getFame() == 1) {
			Jessica += "아빠! ";
		} else if (cm.getPlayer().getFame() == 0) {
			Jessica += "엄마! ";
		}
			Jessica += "제대로 확인하신 거 맞아요? 히잉… 아니면 아르미가 실수했나?";
			cm.sendOk(Jessica);
			status = -1;

		} else if (i == 1){
			cm.sendYesNo(Jess.toString());
		}

	} else if (status == 3) {
		if (aid2 == aid) {
		MYSQL.getConnection().prepareStatement("DELETE FROM characters WHERE name = " + text + "").executeUpdate();
		if (cm.getPlayer().getFame() == 1) {
			var Jessica = "아빠가 ";
		} else if (cm.getPlayer().getFame() == 0) {
			var Jessica = "엄마가 ";
		}
			Jessica += "말씀하신대로 #b' " +text + " '#k 캐릭터를 삭제했어요… 히잉…";
		cm.sendOk(Jessica);
		cm.gainMeso(-1000000);
		cm.dispose();
	} else {
		var Jessica = "정말 ";
		if (cm.getPlayer().getFame() == 1) {
			Jessica += "아빠의 ";
		} else if (cm.getPlayer().getFame() == 0) {
			Jessica += "엄마의 ";
		}
			Jessica += "캐릭터가 맞아요? 아무리 아르미가 어려도 거짓말은 치면 안되죠! 실망이에요! 흥!";
		cm.sendOk(Jessica);
		cm.dispose();
	}

	} else if (status == 4) {
		text2 = cm.getText();
		nameChange(" + cm.getPlayer().getName() + ");
		cm.gainMeso(-5000000);
		cm.sendOk("#b' " +cm.getPlayer().getName() + " '#k 님의 닉네임이 #b' " + text2 + " '#k 로 성공적으로 변경되었습니다. 확인을 누르면 로그인창으로 되 돌아갑니다.");
		cm.dispose();
                cm.sendOk("로그인창으로 가버렷");
                cm.sendOk("로그인창으로 가버렷");
                cm.sendOk("로그인창으로 가버렷");

	} else if (status == 5) {
		var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
		JessicaSql2.setString(1, cm.getText());
		var JessicaExcute = JessicaSql2.executeQuery();

		var i = 0;

		while(JessicaExcute.next()) {
		i++;
		aid3 = Integer(JessicaExcute.getInt("id"));
		}
		if (i == 0) {
		cm.sendOk("에엣?! 존재하지 않는 캐릭터에요. 제대로 확인하신 거 맞아요? 히잉… 아니면 아르미가 실수했나?");
		cm.dispose();

		} else {
		cm.sendOk("#b' " +cm.getText() + " '#k 님이 착용하고 계신 아이템 정보\r\n\r\n" + getEquipChar(aid3));
		cm.dispose();
		}
}
}
}