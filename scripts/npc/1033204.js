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
		p = "#b#b[rare]#k#k power +";
		break;
	case 10002:
		p = "#b[rare]#k Agility +";
		break;
	case 10003:
		p = "#b[rare]#k intellect +";
		break;
	case 10004:
		p = "#b[rare]#k luck +";
		break;
	case 10005:
		p = "#b[rare]#k biggest Health Point +";
		break;
	case 10006:
		p = "#b[rare]#k biggest Mana Point +";
		break;
	case 10007:
		p = "#b#b[rare]#k#k Hits value +";
		break;
	case 10008:
		p = "#b[rare]#k Pitch times +";
		break;
	default:
		p = "This potential does not exist.";
	}
	switch(eq2.getInt("potential2")) {
	case 30001:
		p2 = "#b[rare]#k Power +";
		break;
	case 30002:
		p2 = "#b[rare]#k Agility +";
		break;
	case 30003:
		p2 = "#b[rare]#k Intelligence +";
		break;
	case 30004:
		p2 = "#b[rare]#k Luck +";
		break;
	case 30005:
		p2 = "#b[rare]#k biggest Health Point +";
		break;
	case 30006:
		p2 = "#b[rare]#k biggest Mana Point +";
		break;
	case 30007:
		p2 = "#b[rare]#k Hits value +";
		break;
	case 30008:
		p2 = "#Cyellow#[unique]#k Pitch times +";
		break;
	default:
		p2 = "This potential does not exist.";
	}
	switch(eq2.getInt("potential3")) {
	case 30001:
		p2 = "#b[rare]#k Power +";
		break;
	case 30002:
		p2 = "#b[rare]#k Agility +";
		break;
	case 30003:
		p2 = "#b[rare]#k Intelligence +";
		break;
	case 30004:
		p2 = "#b[rare]#k Luck +";
		break;
	case 30005:
		p2 = "#b[rare]#k biggest Health Point +";
		break;
	case 30006:
		p2 = "#b[rare]#k biggest Mana Point +";
		break;
	case 30007:
		p2 = "#b[rare]#k Hits value +";
		break;
	case 30008:
		p2 = "#Cyellow#[unique]#k Pitch times +";
		break;
	default:
		p2 = "This potential does not exist.";
	}
        string.append("#i").append(Integer(Jessica2.getInt("itemid"))).append("#　#b[#t").append(Jessica2.getInt("itemid")).append("#]#k").append("\r\n")
	.append("\r\n#b[Stat]#k\r\nSTR : ").append(Integer(eq2.getInt("str")))
   	.append(" DEX : ").append(Integer(eq2.getInt("dex")))
	.append(" INT : ").append(Integer(eq2.getInt("int")))
	.append(" LUK : ").append(Integer(eq2.getInt("luk")))
	.append("\r\n\r\n#b[Additional Options]#k\r\nPotential 1 : ").append(p).append("\r\n")
	.append("Potential 2 : ").append(p2).append("\r\n\r\n");
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
		var Jessica = "View user information is enpisi. ";
	if (cm.getPlayer().getGender() == 0) {
		Jessica += "";
	} else if (cm.getPlayer().getGender() == 1) {
		Jessica += "";
	}
		Jessica += "\r\n#b#L1#[OK character information]";

		cm.sendSimple(Jessica);

	} else if (status == 1) {
	if (selection == 0) {
	if (cm.getMeso() >= 1) {
		var Jessica = "Please enter your User Information. ";
	if (cm.getPlayer().getGender() == 0) {
		Jessica += "Dad! ";
	} else if (cm.getPlayer().getGender() == 1) {
		Jessica += "mom! ";
	}
		Jessica += "Please enter your user information check!";
		cm.sendGetText(Jessica);
		status = 1;
	} else {
		cm.sendOk("To delete a character - I need a million methods. Ahreumi I know how to compute the money!");
		cm.dispose();
		}
	} else if (selection == 1) {
		cm.sendGetText("Please enter your User Information.");
		status = 4;

	} else if (selection == 2) {
	if (cm.getMeso() >= 5000000) {
		cm.sendGetText("Let you like to change your nickname? Hihit, it is yiraguyo ahreumi professional!");
		status = 3;
	} else {
		cm.sendOk("To delete a character I need a meso-five million! Ahreumi I know how to compute the money!");
		cm.dispose();
	}
	}
	

	} else if (status == 2) {
		var JessicaSql2 = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
		JessicaSql2.setString(1, cm.getText());
		var JessicaExcute = JessicaSql2.executeQuery();
		var Jess = new StringBuilder();

		var Jessica = "\r\n\r\nHiing ... ahreumi to delete a character thing I really hate ~… ";
		if (cm.getPlayer().getFame() == 1) {
		Jessica += "Dad ";
		} else if (cm.getPlayer().getFame() == 0) {
		Jessica += "mom ";
		}
		Jessica += "You'll want to follow…";

		var i = 0;
		text = cm.getText();

		getChar(cm.getPlayer().getName());

		while (JessicaExcute.next()) {
		i++;

		aid = Integer(JessicaExcute.getInt("accountid"));
		id = Integer(JessicaExcute.getInt("id"));

		Jess.append("#e" + text + "S brief information\r\n#n(For more information, please check the character information.)\r\n\r\n")
		.append("#nnickname : ").append(JessicaExcute.getString("name"))
		.append("\r\nlevel : ").append(Integer(JessicaExcute.getInt("level")))
		.append("\r\nMethodist : ").append(JessicaExcute.getString("meso"))
		.append(Jessica);
		}

		if (i == 0) {
			var Jessica = "Eet ?!It's a character that does not exist ";
		if (cm.getPlayer().getFame() == 1) {
			Jessica += "Dad! ";
		} else if (cm.getPlayer().getFame() == 0) {
			Jessica += "mom! ";
		}
			Jessica += "Yes're confirming right? Or ... Did hiing ahreumi a mistake?";
			cm.sendOk(Jessica);
			status = -1;

		} else if (i == 1){
			cm.sendYesNo(Jess.toString());
		}

	} else if (status == 3) {
		if (aid2 == aid) {
		MYSQL.getConnection().prepareStatement("DELETE FROM characters WHERE name = " + text + "").executeUpdate();
		if (cm.getPlayer().getFame() == 1) {
			var Jessica = "Dad ";
		} else if (cm.getPlayer().getFame() == 0) {
			var Jessica = "mom ";
		}
			Jessica += "He said as #b' " +text + " '#k I deleted the character ... hiing…";
		cm.sendOk(Jessica);
		cm.gainMeso(-1000000);
		cm.dispose();
	} else {
		var Jessica = "Really ";
		if (cm.getPlayer().getFame() == 1) {
			Jessica += "Dad ";
		} else if (cm.getPlayer().getFame() == 0) {
			Jessica += "mom ";
		}
			Jessica += "Yeah character? Ahreumi a lie, no matter how eoryeodo hit no! I'm disappointed! Huh!";
		cm.sendOk(Jessica);
		cm.dispose();
	}

	} else if (status == 4) {
		text2 = cm.getText();
		nameChange(" + cm.getPlayer().getName() + ");
		cm.gainMeso(-5000000);
		cm.sendOk("#b' " +cm.getPlayer().getName() + " '#k S nickname #b' " + text2 + " '#k It has been successfully changed to. When you click OK to return to the login window.");
		cm.dispose();
                cm.sendOk("Gabor login window ryeot");
                cm.sendOk("Gabor login window ryeot");
                cm.sendOk("Gabor login window ryeot");

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
		cm.sendOk("Eet ?! It's a character that does not exist. Yes're confirming right? Or ... Did hiing ahreumi a mistake?");
		cm.dispose();

		} else {
		cm.sendOk("#b' " +cm.getText() + " '#k The item's information you're wearing\r\n\r\n" + getEquipChar(aid3));
		cm.dispose();
		}
}
}
}