/*
     @Author ���ǵ���(dla3753@naver.com)
*/

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.packet.creators);

var jungeunji = -1;
var apink = -1;

function isMapTown(mapid) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM townmap WHERE mapid = ?");
    ps.setInt(1,mapid);
    var rs = ps.executeQuery();
    var isExist = false;
    while (rs.next()) {
       isExist = true;
    }
    return isExist;
}

function isMapMaster(cid,mapid) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM mapmaster WHERE cid = ? and mapid = ?");
    ps.setInt(1,cid);
    ps.setInt(2,mapid);
    var rs = ps.executeQuery();
    var isExist = false;
    while (rs.next()) {
       isExist = true;
    }
    return isExist;
}

function getIdByName(name) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
    ps.setString(1,name);
    var rs = ps.executeQuery();
    var cid = null;
    if (rs.next()) {
        cid = rs.getInt("id");
    }
    return cid;
}

function showMapList(cid) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM mapmaster WHERE cid = ?");
    ps.setInt(1,cid);
    var rs = ps.executeQuery();
    var string = new StringBuilder();
    var count = 0;
    while (rs.next()) {
       count++;
       string.append("#L").append(Integer(rs.getInt("id")))
       .append("#").append(Integer(count))
       .append(". #b������ �� : #m ").append(Integer(rs.getInt("mapid")))
       .append("##k\r\n");
    }
    return string.toString();
}

function getMapCount(cid) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) FROM mapmaster WHERE cid = ?");
    ps.setInt(1,cid);
    var rs = ps.executeQuery();
    rs.next();
    return rs.getInt("count(*)");
}

function getMapIdByCid(cid) {
    var ps = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE id = ?");
    ps.setInt(1,cid);
    var rs = ps.executeQuery();
    rs.next();
    return rs.getInt("map");
}

function action(mode, type, selection) { (mode != 1) ? (cm.dispose() , jungeunji--) : jungeunji++;
    if (jungeunji == 0) {
        var chat = "���� ������ �ǰ�ʹٸ� ���� �̿��ϼ���.";
        if (getMapCount(cm.getPlayer().getId()) > 0) {
            chat += "\r\n#b#h ##k���� ������ ���� ��: " + "#r" + getMapCount(cm.getPlayer().getId()) + "#k";
        }
        if (!isMapMaster(cm.getPlayer().getId(),cm.getPlayer().getMapId())) {
            chat += "#b\r\n#L0#���� �����Ѵ�.";
        }
        chat += "#b\r\n#L1#���� �Ѵ�.";
        chat += "\r\n#L2#�ʼ������� �絵�Ѵ�.";
        chat += "\r\n#L3#������ �ʵ�� �̵��Ѵ�.#k";
        cm.sendSimple(chat);
    } else if (jungeunji == 1) {
        apink = selection;
        if (selection == 0) {
            var jeji = MYSQL.getConnection().prepareStatement("SELECT * FROM mapmaster WHERE mapid = " + cm.getPlayer().getMapId()).executeQuery();
            if (!jeji.next()) {
                if (!isMapTown(cm.getPlayer().getMapId())) {
                    var ps = MYSQL.getConnection().prepareStatement("INSERT INTO mapmaster (cid,mapid) VALUES (?,?)");
                    ps.setInt(1,cm.getPlayer().getId());
                    ps.setInt(2,cm.getPlayer().getMapId());
                    ps.executeUpdate();
                    ps.close();  
                    cm.getPlayer().send(UIPacket.showInfo("���� �̰��� �����ϴ�."));
                } else {
                    cm.getPlayer().send(UIPacket.showInfo("������ �����ϽǼ� �����ϴ�."));
                }
            } else {
                var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(Integer(jeji.getInt("cid")));
                if (chr != null) {
                    if (cm.getPlayer().getMapId() != chr.getMapId()) {//0 chr == null) {
                        chr.send(UIPacket.showInfo("�����ִ� ���� �� ������ " + cm.getPlayer().getName() + "�Կ��� ����̽��ϴ�."));  
                    } else {
                        cm.getPlayer().send(UIPacket.showInfo("�̸��� ������ �̹� �����մϴ�."));
                        cm.dispose();
                        return;
                    }
                }
                cm.getPlayer().send(UIPacket.showInfo("���� �̰��� �����ϴ�."));
                MYSQL.getConnection().prepareStatement("UPDATE mapmaster SET cid = '" + cm.getPlayer().getId() + "' WHERE cid = '" + Integer(jeji.getInt("cid")) + "'").executeUpdate();
            }
            cm.dispose();
        } else if (selection >= 1 && selection < 3) {
            if (!isMapMaster(cm.getPlayer().getId(),cm.getPlayer().getMapId())) {
                cm.sendOk("#b#h ##k���� �̸ʿ� ������ �ƴմϴ�.");
                cm.dispose();
                return;
            }
            cm.sendGetText(selection == 1 ? "������ �����Ͻðڽ��ϱ�?" : "�������� �絵�Ͻðڽ��ϱ�?");
        } else {
            if (getMapCount(cm.getPlayer().getId()) == 0) {
                cm.sendOk("#b#h ##k���� ������ ���� �Ѱ��� �������� �ʽ��ϴ�.");
                cm.dispose();
                return;
            }
            cm.sendSimple("#b#h ##k���� ������ ���� ��ϵ� �Դϴ�. ������� �̵� �Ͻðڽ��ϱ�?\r\n" + showMapList(cm.getPlayer().getId()));
        }
    } else if (jungeunji == 2) {
        //var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText());
        if (cm.getText() == cm.getPlayer().getName()) {
            cm.getPlayer().send(UIPacket.showInfo("�ڱ� �ڽ��� �Է��ϽǼ� �����ϴ�."));
            cm.dispose();
            return;
        }
        if (cm.getText() == "") {
            cm.getPlayer().send(UIPacket.showInfo("������ �Է����ּ���"));
            cm.sendOk("������ �Է����ּ���");
            cm.dispose();
            return;
        }
        if (apink == 3) {
            var apinkjej = MYSQL.getConnection().prepareStatement("SELECT * FROM mapmaster WHERE id = " + selection).executeQuery();
            apinkjej.next();
            if (Integer(apinkjej.getInt("mapid")) != cm.getPlayer().getMapId()) {
                cm.warp(Integer(apinkjej.getInt("mapid")));
            } else {
                cm.getPlayer().send(UIPacket.showInfo("������ �ʿ� �̹� �����ϰ� ��ʴϴ�."));
            }
            cm.dispose();
            return;
        }
        //var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(getIdByName(cm.getText()));
        if (getIdByName(cm.getText()) != null) {
            var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(getIdByName(cm.getText()));
            if (chr == null) {
                cm.getPlayer().send(UIPacket.showInfo("���� �������� ĳ���Ͱ� �ƴմϴ�."));
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getMapId() == chr.getMapId()) {
                if (apink == 1) {
                    //chr.warp(100000000);
                    MYSQL.getConnection().prepareStatement("UPDATE characters SET map = '" + 100000000 + "' WHERE id = '" + getIdByName(cm.getText()) + "'").executeUpdate();
                    cm.getPlayer().saveToDB(false, false);
                    var left = cm.getPlayer().getClient().getChannelServer().getMapFactory().getMap(100000000);
                    chr.changeMap(left, left.getPortal(0));
                    chr.send(UIPacket.showInfo("������ " + cm.getPlayer().getName() + "�� ���� ������ ���� �̵� �Ǿ����ϴ�."));
                } else {
                    cm.getPlayer().send(UIPacket.showInfo("�� �������� " + cm.getText() + "�� ���� �絵�Ͽ����ϴ�."));
                    chr.send(UIPacket.showInfo("������ " + cm.getPlayer().getName() + "�� ���� ����ʿ� �������� �絵 �����̽��ϴ�."));
                }
            } else {
                cm.getPlayer().send(UIPacket.showInfo("������ �ʿ� �ִ� ������ ���Ը� " + (apink == 1 ? "����" : "�絵") + " �ϽǼ� �ֽ��ϴ�."));
            }
        } else {
            cm.getPlayer().send(UIPacket.showInfo("�������� �ʴ� ĳ���� �Դϴ�."));
        }
        cm.dispose();
    }
}