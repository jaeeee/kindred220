var status = -1;

importPackage(java.sql);
importPackage(java.lang);
importPackage(java.io);
importPackage(Packages.database);
importPackage(Packages.packet.creators);

function start(){
    action(1,0,0);
}

//SELECT inventoryitemid FROM inventoryitems WHERE NOT EXISTS (SELECT * FROM characters WHERE id = inventoryitems.characterid);

//SELECT accountid FROM characters WHERE NOT EXISTS (SELECT * FROM accounts WHERE accountid = accounts.id);

//SELECT characterid FROM skills WHERE NOT EXISTS (SELECT * FROM characters WHERE id = skills.characterid);
//SELECT characterid FROM keymap WHERE NOT EXISTS (SELECT * FROM characters WHERE id = keymap.characterid);








function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.sendOk("����ϼ̽��ϴ�.");
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendYesNo("������ DB�� �����Ͻðڽ��ϱ�?");
    } else if (status == 1){

	cm.getPlayer().send(MainPacketCreator.sendHint("������DB�� �˻����Դϴ�.",200,20));
/*
        var ins = MYSQL.getConnection().prepareStatement("SELECT characterid FROM inventoryitems WHERE NOT EXISTS (SELECT * FROM characters WHERE id = inventoryitems.characterid)").executeQuery();
	cm.getPlayer().send(MainPacketCreator.sendHint("�κ�DB ��ĵ�� �Ϸ�Ǿ����ϴ�. ������DB ������ �����մϴ�.",400,20));
	var mm = 0;
        while (ins.next()){
            var del = MYSQL.getConnection().prepareStatement("DELETE FROM inventoryitems WHERE characterid = ?");
            del.setInt(1, ins.getInt("characterid"));
            System.out.println(ins.getInt("characterid")+"���� �Ϸ�");
            del.executeUpdate();
	    mm++
        }
*/
        var ins = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE NOT EXISTS (SELECT * FROM inventoryitems where accountid > -1) or NOT EXISTS (SELECT * FROM inventoryitems WHERE inventoryitemid = inventoryequipment.inventoryitemid)").executeQuery();
	cm.getPlayer().send(MainPacketCreator.sendHint("��ŢDB ��ĵ�� �Ϸ�Ǿ����ϴ�. ������DB ������ �����մϴ�.",400,20));
	var ii = 0;
        while (ins.next()){
            var del = MYSQL.getConnection().prepareStatement("DELETE FROM inventoryequipment WHERE inventoryitemid = ?");
            del.setInt(1, ins.getInt("inventoryitemid"));
            System.out.println(ins.getInt("inventoryitemid")+"���� �Ϸ�");
            del.executeUpdate();
	    ii++
        }


        var ins = MYSQL.getConnection().prepareStatement("SELECT characterid FROM skills WHERE NOT EXISTS (SELECT * FROM characters WHERE id = skills.characterid)").executeQuery();
	cm.getPlayer().send(MainPacketCreator.sendHint("��ųDB ��ĵ�� �Ϸ�Ǿ����ϴ�. ������DB ������ �����մϴ�.",400,20));
	var zz = 0;
        while (ins.next()){
            var del = MYSQL.getConnection().prepareStatement("DELETE FROM skills WHERE characterid = ?");
            del.setInt(1, ins.getInt("characterid"));
            System.out.println(ins.getInt("characterid")+"���� �Ϸ�");
            del.executeUpdate();
	    zz++
        }


        var ins = MYSQL.getConnection().prepareStatement("SELECT characterid FROM keymap WHERE NOT EXISTS (SELECT * FROM characters WHERE id = keymap.characterid)").executeQuery();
	cm.getPlayer().send(MainPacketCreator.sendHint("Ű��DB ��ĵ�� �Ϸ�Ǿ����ϴ�. ������DB ������ �����մϴ�.",400,20));
	var xx = 0;
        while (ins.next()){
            var del = MYSQL.getConnection().prepareStatement("DELETE FROM keymap WHERE characterid = ?");
            del.setInt(1, ins.getInt("characterid"));
            System.out.println(ins.getInt("characterid")+"���� �Ϸ�");
            del.executeUpdate();
	    xx++
        }
	cm.getPlayer().send(MainPacketCreator.sendHint("�� "+ii+"���� ��ŢDB�� �����߽��ϴ�.\r\n�� "+zz+"���� ��ųDB�� �����߽��ϴ�.\r\n�� "+xx+"���� Ű��DB�� �����߽��ϴ�.",300,20));
        cm.dispose();  
    }
}
