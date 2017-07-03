/*
������ : ljw5992@naver.com / dbg_yeane@nate.com
*/

 

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.constants);

 

function getIdByName(cname) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
        con.setString(1, cname);
        var eq = con.executeQuery();
        eq.next();
        return eq.getInt("id");
    }else{
        return null;
    }
}

 

function getStatByName(cname) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
        con.setString(1, cname);
        var eq = con.executeQuery();
        eq.next();
        var string = new StringBuilder();
        return string.append("#e����Ʈ���� ������ȣ : #n").append(Integer(eq.getInt("id")))
        .append("\r\n#e�г��� : #n").append(eq.getString("name"))
        .append("      #e���� : #n").append(Integer(eq.getInt("level")))
        .append("\r\n#e����ġ : #n").append(Integer(eq.getInt("exp")))
        .append(" / ")
        .append(GameConstants.getExpNeededForLevel(eq.getInt("level")).toString())
        .append("\r\n#eHP : #n").append(Integer(eq.getInt("maxhp")))
        .append("      #eMP : #n").append(Integer(eq.getInt("maxmp")))
        .append("\r\n#eSTR : #n").append(Integer(eq.getInt("str")))
        .append("     #eDEX : #n").append(Integer(eq.getInt("dex")))
        .append("\r\n#eLUK : #n").append(Integer(eq.getInt("luk")))
        .append("      #eINT : #n").append(Integer(eq.getInt("int")))
        .append("\r\n#e�α⵵ : #n").append(Integer(eq.getInt("fame"))).toString();
    }else{
        return null;
    }
}

 

function getEquippedById(cid) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = -1");
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#i").append(Integer(eq.getInt("itemid")))
            .append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
}

 

function start() {
    cm.sendGetText("������ ���ϴ� ĳ������ �г����� �����ּ���.");
}

 

function action() {
    if(getStatByName(cm.getText()) != null){
        cm.sendOk(getStatByName(cm.getText())+"\r\n\r\n#e�������� ������#n\r\n"+getEquippedById(getIdByName(cm.getText())));
    }else{
        cm.sendOk("�������� �ʴ� ���̵� �Դϴ�.");
    }
        cm.dispose();
}

 

function checkRows(cname) {
    var con = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) FROM characters WHERE name = ?");
    con.setString(1, cname);
    var eq = con.executeQuery();
    eq.next();
    return eq.getInt("count(*)");
}

