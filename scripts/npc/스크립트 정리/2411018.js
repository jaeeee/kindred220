importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.constants);
importPackage(Packages.database);

var status = -1;

function start() {
	var chat = "#e<ȯ�� ����Ʈ : ��ŷ�� ����>#n\r\n\r\n#h #��, ���� ���� ���丮 #bȯ�� ����Ʈ ��ŷ#k�� #bȯ�� ����Ʈ ����#k�� ����ϰ� �ֽ��ϴ�. ȯ�� ����Ʈ�� #r�����ν�#k�� ���� ��� ����� ������ �� �ֽ��ϴ�.\r\n���� ����� ȯ�� ����Ʈ�� #b"+cm.getPlayer().getReborns()+" #k�Դϴ�.\r\n";
	chat += "#d#L1#ȯ�� ����Ʈ ��ŷ"
	chat += "#d#L2#ȯ�� ����Ʈ ����"
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
			print.append(Integer(i)).append("��  #k").append(rank.getString("name")).append("#b  ����#k : ").append(job).append("#b  ȯ������Ʈ : #k").append(rank.getString("reborns")).append("#b\r\n");
   			}
    			cm.sendOk("ȯ�� ����Ʈ ��ŷ�Դϴ�.\r\n���� ����� ������ #b"+getRebornRank()+"#k�� �Դϴ�.\r\n\r\n"+print.toString());
    			cm.dispose();
		} else if (selection == 2) {
    			cm.dispose();
			cm.openNpc(2460021);
			cm.dispose();
		}
}	}
