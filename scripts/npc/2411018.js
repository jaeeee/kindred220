importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var status = -1;

function start() {
	var chat = "#e< ��ŷ : �ູ ����Ʈ >#n\r\n\r\n#h #��, �ȳ��ϼ���. ���� �����е��� �ູ ����Ʈ ��ŷ�� �˷��帮�� �ֽ��ϴ�.\r\n���� ����� �ູ ����Ʈ�� #b"+cm.getPlayer().getReborns()+" #k�Դϴ�.\r\n#b";
	chat += "#L1#�ູ ����Ʈ ��ŷ"
	chat += "#L2#�ູ ����Ʈ ����"
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
				print.append(Integer(i)).append("����#b").append(rank.getString("name")).append("��#k���� : ").append(Integer(rank.getInt("level"))).append("#b���ູ : #k").append(rank.getString("reborns")).append("\r\n");
   			}
    			cm.sendOk("�ູ ����Ʈ ��ŷ�Դϴ�.\r\n���� ����� ������ #b"+getRebornRank()+"#k�� �Դϴ�.\r\n\r\n"+print.toString());
    			cm.dispose();
		}else if (selection == 2){
    			cm.dispose();
			cm.openNpc(2460021);
			cm.dispose();
		}
	}
}