importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	var chat = "The overall ranking board. Please choose a ranking you want to see.\r\n\r\n";
	chat += "#L2##b Reborn points Ranking#k";
	chat += "#L3##r Level Rankings#k";
	chat += "#L4##b Ranking methods#k";
	cm.sendSimple(chat);
    }else if (status == 1){
	if (selection == 1){
	var reborn = "The number of ranking reincarnation.\r\n\r\n"+cm.getRebornRank();
	cm.sendOk(reborn);
	cm.dispose();
	}
	else if (selection == 2){
	var fame = "The reincarnation ranking points.\r\n\r\n"+cm.getFameRank();
	cm.sendOk(fame);
	cm.dispose();
	}
	else if (selection == 3){
	var fame = "The level rankings.\r\n\r\n"+cm.getLevelRank();
	cm.sendOk(fame);
	cm.dispose();
	}
	else if (selection == 4){

	var i = 0;
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY meso DESC LIMIT 100").executeQuery();
        var print = new StringBuilder();
        while (rank.next()) {
            i++;
	    var meso = ""+rank.getString("meso").split("E");
            print.append(Integer(i)).append("top¢®¢®#b").append(rank.getString("name")).append("¢®¢®#klevel : ").append(Integer(rank.getInt("level"))).append("#b¢®¢®Methodist : #k").append(rank.getString("meso")).append("\r\n");
   	}
    cm.sendOk("The ranking method.\r\n"+print.toString());
    cm.dispose();
	}
}
}