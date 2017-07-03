importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var status = -1;

function start() {
	var chat = "#e< 랭킹 : 축복 포인트 >#n\r\n\r\n#h #님, 안녕하세요. 저는 여러분들의 축복 포인트 랭킹을 알려드리고 있습니다.\r\n현재 당신의 축복 포인트는 #b"+cm.getPlayer().getReborns()+" #k입니다.\r\n#b";
	chat += "#L1#축복 포인트 랭킹"
	chat += "#L2#축복 포인트 상점"
	cm.sendSimple(chat);
}

function getRebornRank(){
	var level = 0;
	var rank = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) FROM characters where gm = 0 and `reborns` > ?");
	rank.setInt(1,cm.getReborns());
	eq = rank.executeQuery();
        if(eq.next()) {
		if(cm.getPlayer().getGMLevel() != 0){
			return 0;
		}else{
			return eq.getInt("count(*)")+1;
		}
	}
}

function action(mode, type, selection) {
	mode==1?status++:(cm.dispose())
	if (status == 0){
		if (selection == 1){
			var i = 0;
			var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY reborns DESC LIMIT 50").executeQuery();
			var print = new StringBuilder();
			while (rank.next()) {
				i++;
	    			var meso = ""+rank.getString("reborns").split("E");
				print.append(Integer(i)).append("위　#b").append(rank.getString("name")).append("　#k레벨 : ").append(Integer(rank.getInt("level"))).append("#b　축복 : #k").append(rank.getString("reborns")).append("\r\n");
   			}
    			cm.sendOk("축복 포인트 랭킹입니다.\r\n현재 당신의 순위는 #b"+getRebornRank()+"#k위 입니다.\r\n\r\n"+print.toString());
    			cm.dispose();
		}else if (selection == 2){
    			cm.dispose();
			cm.openNpc(2460021);
			cm.dispose();
		}
	}
}