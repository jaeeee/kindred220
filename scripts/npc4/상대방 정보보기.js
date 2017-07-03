/*
제작자 : ljw5992@naver.com / dbg_yeane@nate.com
*/

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.constants);

function getIdByName(cname) {
    var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
    con.setString(1, cname);
    var eq = con.executeQuery();
    eq.next();
    return eq.getInt("id");
}

function getStatByName(cname) {
    var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
    con.setString(1, cname);
    var eq = con.executeQuery();
    eq.next();
    var string = new StringBuilder();
    return string.append("#e식별번호 : #n").append(Integer(eq.getInt("id")))
    .append("\r\n#e닉네임 : #n").append(eq.getString("name"))
    .append("\r\n#e레벨 : #n").append(Integer(eq.getInt("level")))
    .append("\r\n#e경험치 : #n").append(Integer(eq.getInt("exp")))
    .append(" / ")
    .append(GameConstants.getExpNeededForLevel(eq.getInt("level")).toString())
    .append("\r\n#eHP : #n").append(Integer(eq.getInt("maxhp")))
    .append("\r\n#eMP : #n").append(Integer(eq.getInt("maxmp")))
    .append("\r\n#eSTR : #n").append(Integer(eq.getInt("str")))
    .append("\r\n#eDEX : #n").append(Integer(eq.getInt("dex")))
    .append("\r\n#eLUK : #n").append(Integer(eq.getInt("luk")))
    .append("\r\n#eINT : #n").append(Integer(eq.getInt("int")))
    .append("\r\n#e인기도 : #n").append(Integer(eq.getInt("fame"))).toString();
}

function getEquippedById(cid) {
    var con = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = -1");
    con.setInt(1, cid);
    var eq = con.executeQuery();
    var string = new StringBuilder();
    while(eq.next()){
        string.append("#i").append(Integer(eq.getInt("itemid"))).append("#　#b[#t").append(eq.getInt("itemid")).append("#]#k").append("\r\n");
    }
    return string.toString();
}

function start() {
    cm.sendGetText("정보를 원하는 캐릭터의 닉네임을 적어주세요.");
}

function action() {
    cm.sendOk(getStatByName(cm.getText())+"\r\n\r\n#e착용중인 아이템#n\r\n"+getEquippedById(getIdByName(cm.getText())));
    cm.dispose();
}