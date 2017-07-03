importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.database);

var status = -1;

function start() {
	var chat = "#e<환생 포인트 : 랭킹과 상점>#n\r\n\r\n#h #님, 저는 리안 스토리 #b환생 포인트 랭킹#k과 #b환생 포인트 상점#k을 담당하고 있습니다. 환생 포인트는 #r벨데로스#k를 통해 얻는 방법을 들으실 수 있습니다.\r\n현재 당신의 환생 포인트는 #b"+cm.getPlayer().getReborns()+" #k입니다.\r\n";
	chat += "#d#L1#환생 포인트 랭킹"
	chat += "#d#L2#환생 포인트 상점"
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
			job = GameConstants.getJobNameById(rank.getInt("job"));
	    		var meso = ""+rank.getString("reborns").split("E");
			print.append(Integer(i)).append("위  #k").append(rank.getString("name")).append("#b  직업#k : ").append(job).append("#b  환생포인트 : #k").append(rank.getString("reborns")).append("#b\r\n");
   			}
    			cm.sendOk("환생 포인트 랭킹입니다.\r\n현재 당신의 순위는 #b"+getRebornRank()+"#k위 입니다.\r\n\r\n"+print.toString());
    			cm.dispose();
		} else if (selection == 2) {
    			cm.dispose();
			cm.openNpc(2460021);
			cm.dispose();
		}
}	}
