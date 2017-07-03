/*
    @Author ���ǵ���
*/

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var con = MYSQL.getConnection();

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else
        status++;
    if (status == 0) {
        if (cm.getPlayer().isGM() == true) {
            cm.sendYesNo("��ڴ� ���� �ڲ� �ñ�� �ʿ� ��ġ�� ȣ�� �������� �����ϱ� ���� ���ܳ� ���ǽ��Դϴ�. ���� �ٲٱ� �������ôٸ� ���� �̿��� ���ô°� ����?");
        } else {
            cm.sendOk("�ȳ��ϼ���? " + "#r" + cm.getPlayer().getName() + "#k" + "�� ������ ������ ������ ��ſ�Ű���?");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendGetText("�̵� ��ų ������ �г����� �Է����ּ���"); 
    } else if (status == 2) {
        name = cm.getText();
        checkChar(name);
    } else if (status >= 3 && status < 5) {
        switch (status) {
            case 3: cm.sendGetText("�Է��Ͻ� ������ ���� �ٲ�帱���? ���ڵ带 �Է����ּ���.\r\n��׽ý� : 100000000"); break;
            case 4: mapid = cm.getText(); changeMap(mapid,name,"�Է��� ������ �ִ¸��� �Է��ϽŴ� ��ҷ� ������Ʈ ���׽��ϴ�.","[�˸�]�� ȣ���� �ñ�ʿ� ������ �������� ������ ���� �����־����ϴ� ��ε� �ñ�ʿ� ���� �ʵ��� �������ּ���"); break;
        }
    }
}

function checkChar(name) {
    var ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
    ps.setString(1,name);
    var rs = ps.executeQuery();
    var i = 0;
    while (rs.next()) {
       i++;
    }
    if (i != 0) {
        cm.sendYesNo("�Է��Ͻ� ������ ã�µ� �����Ͽ����ϴ�! �������� �����Ͻðڽ��ϱ�?");
    } else {
        cm.sendOk("�Է��Ͻ� ������ �������� �ʴ� ĳ���� �Դϴ�.");
        cm.dispose(); 
    }
}

function changeMap(mapid,name,chat,notice) { 
    var ps = con.prepareStatement("UPDATE characters SET map = ? WHERE name = ?");
    ps.setInt(1,mapid);
    ps.setString(2,name);
    ps.executeUpdate();
    ps.close();
    cm.sendOk(chat);
    WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6,notice));
    cm.dispose();
}