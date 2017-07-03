importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var Jessica = 0;

var number = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
var worldN = "core";
var worldNE = "CoreMS";
var time = new Date();
var ymd = time.getFullYear()+"-"+(time.getMonth()+1) +"-"+time.getDate(); 

function check(name) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM bank WHERE name = ?");
	con.setString(1, name);
	var eq = con.executeQuery();
	acci = 0;
	while(eq.next()) {
	acci++;
	accountid = eq.getString("account");
	meso = eq.getString("meso");
	alog = eq.getString("log");
	log2 = eq.getString("log2");
	}
}

function connect(names) {
	con = MYSQL.getConnection().prepareStatement("SELECT * FROM bank WHERE name = ?");
	con.setString(1, names);
	eq = con.executeQuery();
}

function logclear(names) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM bank WHERE name = ?");
	con.setString(1, names);
	eq = con.executeQuery();
	eq.next();
	loglog = eq.getString("log2");
}

function ncon(names) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM bank WHERE name = ?");
	con.setString(1, names);
	var eq = con.executeQuery();
	namesi = 0;
	var txt = new StringBuilder();
	while(eq.next()) {
	namesi++;
	txt.append(eq.getString("name"));
	nmeso = eq.getString("meso");
	alog2 = eq.getString("log2");
	}
	return txt.toString();
}
	

function acon(acc) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM bank WHERE account = ?");
	con.setString(1, acc);
	var eq = con.executeQuery();
	accci = 0;
	var txt = new StringBuilder();
	while(eq.next()) {
	accci++;
	txt.append(eq.getString("name"));
	ameso = eq.getString("meso");
	alog2 = eq.getString("log2");
	}
	return txt.toString();
}

function create(num) {
	var txt = new StringBuilder();
	for(var i = 0; i < num; i++) {
	var JessR = Math.floor(Math.random() * number.length);
	txt.append(number[JessR]);
	}
	return txt.toString();
}

function start() { Jessica = -1; action(1, 0, 0); }
function action(music, type, girl) { (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
if (Jessica == 0) {
	connect(cm.getName());
	check(cm.getName());
	var Jess = "Hello. always #b" + cm.getPlayer().getName() + "#kYou and together ~ ♬ ";
	Jess += "#d" + worldN + "Bank#kA. How can I help you?\r\n\r\n";
	if (acci == 0) {
	Jess += "(I've not yet created an account?'ll Help since creation.)";
	Jess += "\r\n#b#L0#Create account";
	} else if (acci == 1) {
	Jess += "(#b" + cm.getName() + "#kS account number #r[" + accountid + "]#k)\r\n";
	Jess += "My account balances #r" + meso + "#k\r\n";
	Jess += "#b#L1#deposit";
	Jess += "#L2#출금";
	Jess += "#L3#Cleanup account";
	Jess += "#L4#OK History";
	}
	cm.sendSimple(Jess);

} else if (Jessica == 1) {
	if (girl == 0) {
		var acc = create(3) + "-" + create(6) + "-" + create(5);
		var insert = MYSQL.getConnection().prepareStatement("INSERT INTO bank(account, name, meso, log, log2, date) VALUES(?,?,?,?,?,now())");
		insert.setString(1, acc);
		insert.setString(2, cm.getName());
		insert.setString(3, 0);
		insert.setString(4, acc+" I will serve wholeheartedly. \r\n(" + worldN + "Bank SWIFT CODE : " + worldNE + ")\r\nGuests of the estate will be healthy and safe bank.");
		insert.setString(5, "\r\n");
		insert.executeUpdate();
		cm.sendOk("Congratulations! #b" + cm.getName() + "#kS account number #r[" + acc + "]#k A.");
		cm.dispose();

	} else if (girl == 1) {
		        if (cm.getPlayerStat("LVL") >= 170) {
		cm.sendSimple("I will deposit anywhere?\r\n\r\n#b#L0#Passbook#L1#Bank transfer");
		Jessica = 1;
                     	} else {
                   		cm.sendOk("Deposit #rLv.170#kFrom available.");
                   		cm.dispose();
			        
			}    
	} else if (girl == 2) {
		        if (cm.getPlayerStat("LVL") >= 170) {
		cm.sendGetNumber("Are you sure you want to withdraw how much?", 0, 0, 50000000);
		Jessica = 4;
                     	} else {
                   		cm.sendOk("Withdrawal is #rLv.170#kFrom available.");
                   		cm.dispose();
			        
			}    
	} else if (girl == 3) {
		logclear(cm.getName());
		if (loglog != "\r\n") {
		MYSQL.getConnection().prepareStatement("UPDATE bank SET log = '" + alog+log2 + "' WHERE name = '" + cm.getName() + "'").executeUpdate();
		MYSQL.getConnection().prepareStatement("UPDATE bank SET log2 = '\r\n' WHERE name = '"+ cm.getName() + "'").executeUpdate();
		cm.sendOk("Passbook cleanup has been completed.");
		cm.dispose();
		} else {
		cm.sendOk("There is no history clean.");
		cm.dispose();
		}

	} else if (girl == 4) {
		eq.next();
		cm.sendOk(eq.getString("log"));
		cm.dispose();
	}

} else if (Jessica == 2) {
	if (girl == 0) {
		cm.sendGetNumber("Are you sure you want to deposit much?", 0, 0, 50000000);
		girls = girl;

	} else if (girl == 1) {
		cm.sendGetText("Please enter your partner account number.");
		girls = girl;
	}

} else if (Jessica == 3) {
	destext = cm.getText();
	var meso2 = +meso;
	var desme = girl+meso2;
	if (girls == 0) {
	if (cm.getPlayer().getMeso() >= girl) {
	ncon(cm.getName());
		MYSQL.getConnection().prepareStatement("UPDATE bank SET log2 = '" + alog2 +"\r\n#b"+ ymd + " 거래내용 입금 입금하신 금액 #e" + girl + "#n" + "' WHERE name = '" + cm.getName() + "'").executeUpdate();
		MYSQL.getConnection().prepareStatement("UPDATE bank SET meso = '" + desme + "' WHERE name = '" + cm.getName() + "'").executeUpdate();
		cm.sendOk(girl + "It has been deposited as. My account balances #r" + desme);
		cm.gainMeso(-girl);
		cm.dispose();
	} else {
		cm.sendOk("Please check hasinji smile enough.");
		cm.dispose();
	}

	} else if (girls == 1) {
		acon(destext);
	if (accci == 1) {
		cm.sendGetNumber(acon(destext) + "Are you sure you want to deposit some in secret bank accounts?", 0, 0, 50000000);
		Jessica = 3;
	} else {
		cm.sendOk("Please check the account number once again.");
		cm.dispose();
	}
	}

} else if (Jessica == 4) {
	var meso2 = +ameso;
	var desme = girl+meso2;
	if (cm.getPlayer().getMeso() >= girl) {
		MYSQL.getConnection().prepareStatement("UPDATE bank SET meso = '" + desme + "' WHERE account = '" + destext + "'").executeUpdate();
		MYSQL.getConnection().prepareStatement("UPDATE bank SET log2 = '" + alog2 +"\r\n#b"+ ymd + " Transactions Bank transfer (" + cm.getName() + ") Your payment amount #e" + girl + "#n" + "' WHERE account = '" + destext + "'").executeUpdate();
		cm.sendOk(acon(destext) + "In other people's bank accounts " + girl + " It has been deposited as.");
		cm.dispose();
	} else {
		cm.sendOk(girl + "Please check the method as long as there is enough hasinji.");
		cm.dispose();
	}

} else if (Jessica == 5) {
	ncon(cm.getName());
	if (nmeso >= girl) {
	var meso2 = +meso;
	var wime = meso2-girl;
	MYSQL.getConnection().prepareStatement("UPDATE bank SET log2 = '" + alog2 +"\r\n#b"+ ymd + " Transactions Withdrawal Amount New search #e" + girl + "#n" + "' WHERE name = '" + cm.getName() + "'").executeUpdate();
	MYSQL.getConnection().prepareStatement("UPDATE bank SET meso = '" + wime + "' WHERE name = '" + cm.getName() + "'").executeUpdate();
	cm.gainMeso(girl);
	cm.sendOk(girl + "You have find methods. My account balances #r" + wime);
	cm.dispose();
	} else {
	cm.sendOk("Please check your account balance.");
	cm.dispose();
	}
}
}