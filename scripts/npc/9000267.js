/*
     @Author 현실도피(dla3753@naver.com)
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
       .append(". #b점령한 맵 : #m ").append(Integer(rs.getInt("mapid")))
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
        var chat = "맵의 주인이 되고싶다면 저를 이용하세요.";
        if (getMapCount(cm.getPlayer().getId()) > 0) {
            chat += "\r\n#b#h ##k님이 점령한 맵의 수: " + "#r" + getMapCount(cm.getPlayer().getId()) + "#k";
        }
        if (!isMapMaster(cm.getPlayer().getId(),cm.getPlayer().getMapId())) {
            chat += "#b\r\n#L0#맵을 점령한다.";
        }
        chat += "#b\r\n#L1#강퇴를 한다.";
        chat += "\r\n#L2#맵소유권을 양도한다.";
        chat += "\r\n#L3#점령한 맵들로 이동한다.#k";
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
                    cm.getPlayer().send(UIPacket.showInfo("이제 이곳은 제껍니다."));
                } else {
                    cm.getPlayer().send(UIPacket.showInfo("마을은 점령하실수 없습니다."));
                }
            } else {
                var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(Integer(jeji.getInt("cid")));
                if (chr != null) {
                    if (cm.getPlayer().getMapId() != chr.getMapId()) {//0 chr == null) {
                        chr.send(UIPacket.showInfo("나가있는 사이 맵 주인을 " + cm.getPlayer().getName() + "님에게 뺏기셨습니다."));  
                    } else {
                        cm.getPlayer().send(UIPacket.showInfo("이맵의 주인은 이미 존재합니다."));
                        cm.dispose();
                        return;
                    }
                }
                cm.getPlayer().send(UIPacket.showInfo("이제 이곳은 제껍니다."));
                MYSQL.getConnection().prepareStatement("UPDATE mapmaster SET cid = '" + cm.getPlayer().getId() + "' WHERE cid = '" + Integer(jeji.getInt("cid")) + "'").executeUpdate();
            }
            cm.dispose();
        } else if (selection >= 1 && selection < 3) {
            if (!isMapMaster(cm.getPlayer().getId(),cm.getPlayer().getMapId())) {
                cm.sendOk("#b#h ##k님은 이맵에 주인이 아닙니다.");
                cm.dispose();
                return;
            }
            cm.sendGetText(selection == 1 ? "누구를 강퇴하시겠습니까?" : "누구에게 양도하시겠습니까?");
        } else {
            if (getMapCount(cm.getPlayer().getId()) == 0) {
                cm.sendOk("#b#h ##k님은 점령한 맵이 한곳도 존재하지 않습니다.");
                cm.dispose();
                return;
            }
            cm.sendSimple("#b#h ##k님이 점령한 맵의 목록들 입니다. 어떤곳으로 이동 하시겠습니까?\r\n" + showMapList(cm.getPlayer().getId()));
        }
    } else if (jungeunji == 2) {
        //var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cm.getText());
        if (cm.getText() == cm.getPlayer().getName()) {
            cm.getPlayer().send(UIPacket.showInfo("자기 자신은 입력하실수 없습니다."));
            cm.dispose();
            return;
        }
        if (cm.getText() == "") {
            cm.getPlayer().send(UIPacket.showInfo("내용을 입력해주세요"));
            cm.sendOk("내용을 입력해주세요");
            cm.dispose();
            return;
        }
        if (apink == 3) {
            var apinkjej = MYSQL.getConnection().prepareStatement("SELECT * FROM mapmaster WHERE id = " + selection).executeQuery();
            apinkjej.next();
            if (Integer(apinkjej.getInt("mapid")) != cm.getPlayer().getMapId()) {
                cm.warp(Integer(apinkjej.getInt("mapid")));
            } else {
                cm.getPlayer().send(UIPacket.showInfo("선택한 맵에 이미 존재하고 계십니다."));
            }
            cm.dispose();
            return;
        }
        //var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(getIdByName(cm.getText()));
        if (getIdByName(cm.getText()) != null) {
            var chr = cm.getClient().getChannelServer().getPlayerStorage().getCharacterById(getIdByName(cm.getText()));
            if (chr == null) {
                cm.getPlayer().send(UIPacket.showInfo("현재 접속중인 캐릭터가 아닙니다."));
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
                    chr.send(UIPacket.showInfo("맵주인 " + cm.getPlayer().getName() + "에 의해 마을로 강제 이동 되었습니다."));
                } else {
                    cm.getPlayer().send(UIPacket.showInfo("맵 소유권을 " + cm.getText() + "님 에게 양도하였습니다."));
                    chr.send(UIPacket.showInfo("맵주인 " + cm.getPlayer().getName() + "에 의해 현재맵에 소유권을 양도 받으셨습니다."));
                }
            } else {
                cm.getPlayer().send(UIPacket.showInfo("점령한 맵에 있는 유저들 에게만 " + (apink == 1 ? "강퇴" : "양도") + " 하실수 있습니다."));
            }
        } else {
            cm.getPlayer().send(UIPacket.showInfo("존재하지 않는 캐릭터 입니다."));
        }
        cm.dispose();
    }
}