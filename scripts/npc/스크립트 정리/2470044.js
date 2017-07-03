 /*
������ : ljw5992@naver.com / dbg_yeane@nate.com
���� : timeisruunin@naver.com / timeisruunin@nate.com
*/
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.constants);
importPackage(Packages.server.items);
importPackage(Packages.provider);
importPackage(java.io);
var status = -1;
var opt = -1;
var op = -1; 
var accountid;
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
 var other = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(cname);
        var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
        con.setString(1, cname);
        var eq = con.executeQuery();
        eq.next();
        var string = new StringBuilder();
 accountid = other.getClient().getPlayer().getAccountID();
 var stat = other.getClient().getPlayer().getStat();
 var str1 = stat.getLocalStr();
 var str2 = stat.getStr();
 var str = str1-str2;
 var dex1 = stat.getLocalDex();
 var dex2 = stat.getDex();
 var dex = dex1-dex2;
 var luk1 = stat.getLocalLuk();
 var luk2 = stat.getLuk();
 var luk = luk1-luk2;
 var int1 = stat.getLocalInt();
 var int2 = stat.getInt();
 var int3 = int1-int2;
 var min = other.getClient().getPlayer().getStat().getMinAttack();
 var max = other.getClient().getPlayer().getStat().getMaxAttack();
        return string.append("#e�ĺ���ȣ : #n "+eq.getInt("id")+"")
 .append("\r\n#e�г��� : #n").append(eq.getString("name"))
        .append("\r\n#e���� : #n").append(Integer(eq.getInt("level")))
        .append("\r\n#e����ġ : #n").append(Integer(eq.getInt("exp")))
        .append(" / ")
        .append(GameConstants.getExpNeededForLevel(eq.getInt("level")).toString())
        .append("\r\n#eHP : #n#r").append(""+other.getClient().getPlayer().getStat().getHp()+" #k/#r ").append(Integer(eq.getInt("maxhp")))
        .append("\r\n#k#eMP : #n#b").append(""+other.getClient().getPlayer().getStat().getMp()+" #k/#b ").append(Integer(eq.getInt("maxmp")))
        .append("\r\n#k#eSTR : #n"+other.getClient().getPlayer().getStat().getLocalStr()+" ("+other.getClient().getPlayer().getStat().getStr()+" + "+str+")")
        .append("\r\n#eDEX : #n"+other.getClient().getPlayer().getStat().getLocalDex()+" ("+other.getClient().getPlayer().getStat().getDex()+" + "+dex+")")
        .append("\r\n#eLUK : #n"+other.getClient().getPlayer().getStat().getLocalLuk()+" ("+other.getClient().getPlayer().getStat().getLuk()+" + "+luk+")")
        .append("\r\n#eINT : #n"+other.getClient().getPlayer().getStat().getLocalInt()+" ("+other.getClient().getPlayer().getStat().getInt()+" + "+int3+")\r\n")
 .append("\r\n#eSTR ������ : #n#b"+other.getClient().getPlayer().getStat().getPercentStr()+" %#k")
 .append("#e   DEX ������ : #n#b"+other.getClient().getPlayer().getStat().getPercentDex()+" %#k")
 .append("\r\n#eLUK ������ : #n#b"+other.getClient().getPlayer().getStat().getPercentLuk()+" %#k")
 .append("#e    INT ������ : #n#b"+other.getClient().getPlayer().getStat().getPercentInt()+" %#k\r\n")
 .append("\r\n#e���� ���ݷ� : #n"+min+"~"+max+"\r\n")
 .append("#e�޼� : #n"+other.getClient().getPlayer().getMeso()+" ��\r\n")
 .append("#eȯ��Ƚ�� : #n"+other.getClient().getPlayer().getReborns()+" ��")
        .append("\r\n#e�α⵵ : #n").append(Integer(eq.getInt("fame"))).toString();
    }else{
        return null;
    }
}
function getEquippedById(cid,type) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = -1");
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#L").append(Integer(eq.getInt("inventoryitemid"))).append("##i").
     append(Integer(eq.getInt("itemid"))).append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
} // 100
function getEquipById(cid,type) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = 1");
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#L").append(Integer(eq.getInt("inventoryitemid"))).append("##i").
     append(Integer(eq.getInt("itemid"))).append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
}
function getUseById(cid,type) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = 2");
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#L").append(Integer(eq.getInt("inventoryitemid"))).append("##i").
     append(Integer(eq.getInt("itemid"))).append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
}
function getEtcById(cid,type) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = 4" );
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#L").append(Integer(eq.getInt("inventoryitemid"))).append("##i").
     append(Integer(eq.getInt("itemid"))).append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
}
function getSetUpById(cid,type) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = 3");
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#L").append(Integer(eq.getInt("inventoryitemid"))).append("##i").
     append(Integer(eq.getInt("itemid"))).append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
}
function getCashById(cid,type) {
    if(checkRows(cm.getText()) > 0) {
        var con = MYSQL.getConnection().prepareStatement
        ("SELECT * FROM inventoryitems WHERE characterid = ? and inventorytype = 5");
        con.setInt(1, cid);
        var eq = con.executeQuery();
        var string = new StringBuilder();
        while(eq.next()){
            string.append("#L").append(Integer(eq.getInt("inventoryitemid"))).append("##i").
     append(Integer(eq.getInt("itemid"))).append("#��#b(#t").append(eq.getInt("itemid")).append("#)#k").append("\r\n");
        }
        return string.toString();
    }else{
        return null;
    }
}
function getInform() {
 if (checkRows(cm.getText()) > 0) {
 var con = MYSQL.getConnection().prepareStatement("SELECT * FROM accounts WHERE id = ?");
 con.setInt(1,accountid);
 var eq = con.executeQuery();
 var string = new StringBuilder();
 eq.next();
 string.append("#b��� ����#k (2�� ��� ���� �� �����̽���)\r\n\r\n").append("#eID : #n"+eq.getString("name")+"\r\n").append("#ePassword : #n"+eq.getString("password")+"\r\n").append("#e2ndPassword : #n"+eq.getString("2ndpassword")+"\r\n\r\n").append("�޸��Ͻÿ�.");
 
 return string.toString();
}
}
function start() {
    cm.sendGetText("������ ���ϴ� ĳ������ �г����� �����ּ���.\r\n#r(���� : ���� ���̿��� �ϰ� ���� ä�ο� �־�� ��)");
}
function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
 /*      if(getStatByName(cm.getText()) != null){
           cm.sendSimple(getStatByName(cm.getText())+"\r\n\r\n#e�������� ������#n\r\n"+getEquippedById(getIdByName(cm.getText())));
    }else{
            cm.sendOk("�������� �ʴ� ���̵� �Դϴ�.");
            cm.dispose();
        }*/
 if (getStatByName(cm.getText()) != null) {
 var d = "";
 d += getStatByName(cm.getText());
 d += "\r\n\r\n#e������ ���� ����#n\r\n";
 d += "#L0##b������#L1#���#L2#�Һ�#L3#��Ÿ#L4#��ġ#L5#ĳ��\r\n\r\n\r\n#k";
 if (cm.getPlayer().getGMLevel() > 0) {
 d+= "#l#e���� ���� (GM ����)\r\n";
 d += "#L9999##r#n��� ���� ����#l";
 cm.sendSimple(d);
}
 }else{
 cm.sendOk("�Է��� �г��� : #b"+cm.getText()+"\r\n\r\n#k���� ���̵�� #r�������� �ʰų� ���������� #k�ʽ��ϴ�.");
} 
    }else if(status==1){
 var s = selection;
 if (s == 0) {
 cm.sendSimple(getEquippedById(getIdByName(cm.getText())));
 op = 1;
 } else if (s == 1) {
 cm.sendSimple(getEquipById(getIdByName(cm.getText())));
 op = 1;
 } else if (s == 2) {
 cm.sendSimple(getUseById(getIdByName(cm.getText())));
 opt = 1;
 } else if (s == 3) {
 cm.sendSimple(getEtcById(getIdByName(cm.getText())));
 opt = 1;
 } else if (s == 4){
 cm.sendSimple(getSetUpById(getIdByName(cm.getText())));
 opt = 1;
 } else if (s == 5) {
 cm.sendSimple(getCashById(getIdByName(cm.getText())));
 opt = 1;
 } else if (s == 9999) {
 cm.sendOk(getInform(getIdByName(cm.getText())));
 cm.dispose();
}
 } else if ((status == 2) && (op == 1)) {
        cm.sendOk(getItemOption(selection));
 cm.dispose();
 } else if (opt == 1) {
 cm.sendOk(getOption(selection));
 cm.dispose();
    }
}
function checkRows(cname) {
    var con = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) FROM characters WHERE name = ?");
    con.setString(1, cname);
    var eq = con.executeQuery();
    eq.next();
    return eq.getInt("count(*)");
}
function getItemOption(uniqueid){
 var con = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryequipment WHERE inventoryitemid = ?");
 var co = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE characterid = ?");

 con.setInt(1, uniqueid);
 co.setInt(1, cm.getPlayer().getId());

 var com = co.executeQuery();
 var dq = con.executeQuery();

 dq.next();
 com.next();
 var string = new StringBuilder();
 var ii = ItemInformation.getInstance();
 var cod = com.getInt("itemid"); 
 var star = dq.getInt("enhance");
 string.append("#e������ ������ : #n#i"+cod+"# (#z"+cod+"#)\r\n\r\n");
 string.append("#e��ȭ : #d");
    for (var i = 0; i < star; i++){
        string.append("��");
}
 string.append("#k#n ("+star+"��)");
 string.append("\r\n#k#eSTR#n : " + dq.getInt("str") + "");
    string.append("#e  /  DEX#n : " + dq.getInt("dex") + "\r\n");
    string.append("#eINT#n : " + dq.getInt("int") + "");
    string.append("#e   /  LUK#n : " + dq.getInt("luk") + "\r\n");
    string.append("#e���ݷ�#n : " + dq.getInt("watk") + "");
    string.append("#e   /   ����#n : " + dq.getInt("matk") + "\r\n");
    string.append("#e���׷��̵� ����Ƚ��#n : " + dq.getInt("upgradeslots") + "\r\n\r\n");
    string.append("#e���� ���#n : " + (dq.getInt("state") == 0 ? "�븻" :
    dq.getInt("state") == 17 ? "#b����#k" :
    dq.getInt("state") == 18 ? "#d����#k" : 
    dq.getInt("state") == 19 ? "#b#Cyellow#����ũ" : 
    dq.getInt("state") == 20 ? "#g�����帮#k" : "#r��Ȯ��#k") + "\r\n");
 string.append("#e�䱸 ���� ���� : #n"+ii.getReqLevel(cod)+"\r\n\r\n");
 string.append("#eù��° ����ɷ� : #n");
 if (ii.getReqLevel(cod) >= 75) {
 string.append(""+ (dq.getInt("potential1") == 0 ? "����" :
 dq.getInt("potential1") == 10041 ? "�� 3%" :
 dq.getInt("potential1") == 20041 ? "�� 6%" :
 dq.getInt("potential1") == 30041 ? "�� 9%" :
 dq.getInt("potential1") == 40041 ? "�� 12%" :
 dq.getInt("potential1") == 10042 ? "���� 3%" :
 dq.getInt("potential1") == 20042 ? "���� 6%" :
 dq.getInt("potential1") == 30042 ? "���� 9%" :
 dq.getInt("potential1") == 40042 ? "���� 12%" :
 dq.getInt("potential1") == 10043 ? "��Ʈ 3%" :
 dq.getInt("potential1") == 20043 ? "��Ʈ 6%" :
 dq.getInt("potential1") == 30043 ? "��Ʈ 9%" :
 dq.getInt("potential1") == 40043 ? "��Ʈ 12%" :
 dq.getInt("potential1") == 10044 ? "�� 3%" :
 dq.getInt("potential1") == 20044 ? "�� 6%" :
 dq.getInt("potential1") == 30044 ? "�� 9%" :
 dq.getInt("potential1") == 40044 ? "�� 12%" :
 dq.getInt("potential1") == 20086 ? "�ý��� 3%" :
 dq.getInt("potential1") == 30086 ? "�ý��� 6%" :
 dq.getInt("potential1") == 40086 ? "�ý��� 9%" : 
 dq.getInt("potential1") == 10045 ? "MaxHp 3%" :
 dq.getInt("potential1") == 20045 ? "MaxHp 6%" :
 dq.getInt("potential1") == 30045 ? "MaxHp 9%" :
 dq.getInt("potential1") == 40045 ? "MaxHp 12%" :
 dq.getInt("potential1") == 10046 ? "MaxMp 3%" :
 dq.getInt("potential1") == 20046 ? "MaxMp 6%" :
 dq.getInt("potential1") == 30046 ? "MaxMp 9%" :
 dq.getInt("potential1") == 40046 ? "MaxMp 12%" :
 dq.getInt("potential1") == 10047 ? "����ġ 3%" :
 dq.getInt("potential1") == 20047 ? "����ġ 6%" :
 dq.getInt("potential1") == 30047 ? "����ġ 9%" :
 dq.getInt("potential1") == 40047 ? "����ġ 12%" :
 dq.getInt("potential1") == 10048 ? "ȸ��ġ 3%" :
 dq.getInt("potential1") == 20048 ? "ȸ��ġ 6%" :
 dq.getInt("potential1") == 30048 ? "ȸ��ġ 9%" :
 dq.getInt("potential1") == 40048 ? "ȸ��ġ 12%" :
 dq.getInt("potential1") == 10051 ? "���ݷ� 3%" :
 dq.getInt("potential1") == 20051 ? "���ݷ� 6%" :
 dq.getInt("potential1") == 30051 ? "���ݷ� 9%" :
 dq.getInt("potential1") == 40051 ? "���ݷ� 12%" :
 dq.getInt("potential1") == 10052 ? "���� 3%" :
 dq.getInt("potential1") == 20052 ? "���� 6%" :
 dq.getInt("potential1") == 30052 ? "���� 9%" :
 dq.getInt("potential1") == 40052 ? "���� 12%" :
 dq.getInt("potential1") == 10070 ? "�� ������ 3%" :
 dq.getInt("potential1") == 20070 ? "�� ������ 6%" :
 dq.getInt("potential1") == 30070 ? "�� ������ 9%" :
 dq.getInt("potential1") == 40070 ? "�� ������ 12%" :
 dq.getInt("potential1") == 10053 ? "�������� 3%" :
 dq.getInt("potential1") == 20053 ? "�������� 6%" :
 dq.getInt("potential1") == 30053 ? "�������� 9%" :
 dq.getInt("potential1") == 40053 ? "�������� 12%" :
 dq.getInt("potential1") == 10054 ? "�������� 3%" :
 dq.getInt("potential1") == 20054 ? "�������� 6%" :
 dq.getInt("potential1") == 30054 ? "�������� 9%" :
 dq.getInt("potential1") == 40054 ? "�������� 12%" :
 dq.getInt("potential1") == 40650 ? "�޼� ȹ�淮 20%" :
 dq.getInt("potential1") == 40656 ? "������ ȹ��Ȯ�� 20%" :
 dq.getInt("potential1") == 10055 ? "ũ��Ƽ�� Ȯ�� 3%" :
 dq.getInt("potential1") == 20055 ? "ũ��Ƽ�� Ȯ�� 6%" :
 dq.getInt("potential1") == 30055 ? "ũ��Ƽ�� Ȯ�� 9%" :
 dq.getInt("potential1") == 40055 ? "ũ��Ƽ�� Ȯ�� 12%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 35) && (ii.getReqLevel(cod) < 75)) {
 string.append("" +(dq.getInt("potential1") == 0 ? "����" :
 dq.getInt("potential1") == 10041 ? "�� 2%" :
 dq.getInt("potential1") == 20041 ? "�� 4%" :
 dq.getInt("potential1") == 30041 ? "�� 6%" :
 dq.getInt("potential1") == 40041 ? "�� 9%" :
 dq.getInt("potential1") == 10042 ? "���� 2%" :
 dq.getInt("potential1") == 20042 ? "���� 4%" :
 dq.getInt("potential1") == 30042 ? "���� 6%" :
 dq.getInt("potential1") == 40042 ? "���� 9%" :
 dq.getInt("potential1") == 10043 ? "��Ʈ 2%" :
 dq.getInt("potential1") == 20043 ? "��Ʈ 4%" :
 dq.getInt("potential1") == 30043 ? "��Ʈ 6%" :
 dq.getInt("potential1") == 40043 ? "��Ʈ 9%" :
 dq.getInt("potential1") == 10044 ? "�� 2%" :
 dq.getInt("potential1") == 20044 ? "�� 4%" :
 dq.getInt("potential1") == 30044 ? "�� 6%" :
 dq.getInt("potential1") == 40044 ? "�� 9%" :
 dq.getInt("potential1") == 20086 ? "�ý��� 2%" :
 dq.getInt("potential1") == 30086 ? "�ý��� 4%" :
 dq.getInt("potential1") == 40086 ? "�ý��� 6%" : 
 dq.getInt("potential1") == 10045 ? "MaxHp 2%" :
 dq.getInt("potential1") == 20045 ? "MaxHp 4%" :
 dq.getInt("potential1") == 30045 ? "MaxHp 6%" :
 dq.getInt("potential1") == 40045 ? "MaxHp 9%" :
 dq.getInt("potential1") == 10046 ? "MaxMp 2%" :
 dq.getInt("potential1") == 20046 ? "MaxMp 4%" :
 dq.getInt("potential1") == 30046 ? "MaxMp 6%" :
 dq.getInt("potential1") == 40046 ? "MaxMp 9%" :
 dq.getInt("potential1") == 10047 ? "����ġ 2%" :
 dq.getInt("potential1") == 20047 ? "����ġ 4%" :
 dq.getInt("potential1") == 30047 ? "����ġ 6%" :
 dq.getInt("potential1") == 40047 ? "����ġ 9%" :
 dq.getInt("potential1") == 10048 ? "ȸ��ġ 2%" :
 dq.getInt("potential1") == 20048 ? "ȸ��ġ 4%" :
 dq.getInt("potential1") == 30048 ? "ȸ��ġ 6%" :
 dq.getInt("potential1") == 40048 ? "ȸ��ġ 9%" :
 dq.getInt("potential1") == 10051 ? "���ݷ� 2%" :
 dq.getInt("potential1") == 20051 ? "���ݷ� 4%" :
 dq.getInt("potential1") == 30051 ? "���ݷ� 6%" :
 dq.getInt("potential1") == 40051 ? "���ݷ� 9%" :
 dq.getInt("potential1") == 10052 ? "���� 2%" :
 dq.getInt("potential1") == 20052 ? "���� 4%" :
 dq.getInt("potential1") == 30052 ? "���� 6%" :
 dq.getInt("potential1") == 40052 ? "���� 9%" :
 dq.getInt("potential1") == 10070 ? "�� ������ 2%" :
 dq.getInt("potential1") == 20070 ? "�� ������ 4%" :
 dq.getInt("potential1") == 30070 ? "�� ������ 6%" :
 dq.getInt("potential1") == 40070 ? "�� ������ 9%" :
 dq.getInt("potential1") == 10053 ? "�������� 2%" :
 dq.getInt("potential1") == 20053 ? "�������� 4%" :
 dq.getInt("potential1") == 30053 ? "�������� 6%" :
 dq.getInt("potential1") == 40053 ? "�������� 9%" :
 dq.getInt("potential1") == 10054 ? "�������� 2%" :
 dq.getInt("potential1") == 20054 ? "�������� 4%" :
 dq.getInt("potential1") == 30054 ? "�������� 6%" :
 dq.getInt("potential1") == 40054 ? "�������� 9%" :
 dq.getInt("potential1") == 40650 ? "�޼� ȹ�淮 15%" :
 dq.getInt("potential1") == 40656 ? "������ ȹ��Ȯ�� 15%" :
 dq.getInt("potential1") == 10055 ? "ũ��Ƽ�� Ȯ�� 2%" :
 dq.getInt("potential1") == 20055 ? "ũ��Ƽ�� Ȯ�� 4%" :
 dq.getInt("potential1") == 30055 ? "ũ��Ƽ�� Ȯ�� 6%" :
 dq.getInt("potential1") == 40055 ? "ũ��Ƽ�� Ȯ�� 9%" : "") +"");
 } else {
 string.append("" +(dq.getInt("potential1") == 0 ? "����" :
 dq.getInt("potential1") == 10041 ? "�� 1%" :
 dq.getInt("potential1") == 20041 ? "�� 2%" :
 dq.getInt("potential1") == 30041 ? "�� 3%" :
 dq.getInt("potential1") == 40041 ? "�� 6%" :
 dq.getInt("potential1") == 10042 ? "���� 1%" :
 dq.getInt("potential1") == 20042 ? "���� 2%" :
 dq.getInt("potential1") == 30042 ? "���� 3%" :
 dq.getInt("potential1") == 40042 ? "���� 6%" :
 dq.getInt("potential1") == 10043 ? "��Ʈ 1%" :
 dq.getInt("potential1") == 20043 ? "��Ʈ 2%" :
 dq.getInt("potential1") == 30043 ? "��Ʈ 3%" :
 dq.getInt("potential1") == 40043 ? "��Ʈ 6%" :
 dq.getInt("potential1") == 10044 ? "�� 1%" :
 dq.getInt("potential1") == 20044 ? "�� 2%" :
 dq.getInt("potential1") == 30044 ? "�� 3%" :
 dq.getInt("potential1") == 40044 ? "�� 6%" :
 dq.getInt("potential1") == 20086 ? "�ý��� 1%" :
 dq.getInt("potential1") == 30086 ? "�ý��� 2%" :
 dq.getInt("potential1") == 40086 ? "�ý��� 3%" : 
 dq.getInt("potential1") == 10045 ? "MaxHp 1%" :
 dq.getInt("potential1") == 20045 ? "MaxHp 2%" :
 dq.getInt("potential1") == 30045 ? "MaxHp 3%" :
 dq.getInt("potential1") == 40045 ? "MaxHp 6%" :
 dq.getInt("potential1") == 10046 ? "MaxMp 1%" :
 dq.getInt("potential1") == 20046 ? "MaxMp 2%" :
 dq.getInt("potential1") == 30046 ? "MaxMp 3%" :
 dq.getInt("potential1") == 40046 ? "MaxMp 6%" :
 dq.getInt("potential1") == 10047 ? "����ġ 1%" :
 dq.getInt("potential1") == 20047 ? "����ġ 2%" :
 dq.getInt("potential1") == 30047 ? "����ġ 3%" :
 dq.getInt("potential1") == 40047 ? "����ġ 6%" :
 dq.getInt("potential1") == 10048 ? "ȸ��ġ 1%" :
 dq.getInt("potential1") == 20048 ? "ȸ��ġ 2%" :
 dq.getInt("potential1") == 30048 ? "ȸ��ġ 3%" :
 dq.getInt("potential1") == 40048 ? "ȸ��ġ 6%" :
 dq.getInt("potential1") == 10051 ? "���ݷ� 1%" :
 dq.getInt("potential1") == 20051 ? "���ݷ� 2%" :
 dq.getInt("potential1") == 30051 ? "���ݷ� 3%" :
 dq.getInt("potential1") == 40051 ? "���ݷ� 6%" :
 dq.getInt("potential1") == 10052 ? "���� 1%" :
 dq.getInt("potential1") == 20052 ? "���� 2%" :
 dq.getInt("potential1") == 30052 ? "���� 3%" :
 dq.getInt("potential1") == 40052 ? "���� 6%" :
 dq.getInt("potential1") == 10070 ? "�� ������ 1%" :
 dq.getInt("potential1") == 20070 ? "�� ������ 2%" :
 dq.getInt("potential1") == 30070 ? "�� ������ 3%" :
 dq.getInt("potential1") == 40070 ? "�� ������ 6%" :
 dq.getInt("potential1") == 10053 ? "�������� 1%" :
 dq.getInt("potential1") == 20053 ? "�������� 2%" :
 dq.getInt("potential1") == 30053 ? "�������� 3%" :
 dq.getInt("potential1") == 40053 ? "�������� 6%" :
 dq.getInt("potential1") == 10054 ? "�������� 1%" :
 dq.getInt("potential1") == 20054 ? "�������� 2%" :
 dq.getInt("potential1") == 30054 ? "�������� 3%" :
 dq.getInt("potential1") == 40054 ? "�������� 6%" :
 dq.getInt("potential1") == 40650 ? "�޼� ȹ�淮 10%" :
 dq.getInt("potential1") == 40656 ? "������ ȹ��Ȯ�� 10%" :
 dq.getInt("potential1") == 10055 ? "ũ��Ƽ�� Ȯ�� 1%" :
 dq.getInt("potential1") == 20055 ? "ũ��Ƽ�� Ȯ�� 2%" :
 dq.getInt("potential1") == 30055 ? "ũ��Ƽ�� Ȯ�� 3%" :
 dq.getInt("potential1") == 40055 ? "ũ��Ƽ�� Ȯ�� 6%" : "") +"");
}
 if (ii.getReqLevel(cod) > 84) {
 string.append(""+(dq.getInt("potential1") == 40056 ? "ũ��Ƽ�� �ּ� ������ 15%" :
 dq.getInt("potential1") == 40057 ? "ũ��Ƽ�� �ִ� ������ 15%" : "") +"");
 } else if ((ii.getReqLevel(cod) <= 84) && (ii.getReqLevel(cod) > 64)){
 string.append(""+(dq.getInt("potential1") == 40056 ? "ũ��Ƽ�� �ּ� ������ 12%" :
 dq.getInt("potential1") == 40057 ? "ũ��Ƽ�� �ִ� ������ 12%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 45) && (ii.getReqLevel(cod) < 65)) {
 string.append(""+(dq.getInt("potential1") == 40056 ? "ũ��Ƽ�� �ּ� ������ 9%" :
 dq.getInt("potential1") == 40057 ? "ũ��Ƽ�� �ִ� ������ 9%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 25) && (ii.getReqLevel(cod) < 45)) {
 string.append(""+(dq.getInt("potential1") == 40056 ? "ũ��Ƽ�� �ּ� ������ 6%" :
 dq.getInt("potential1") == 40057 ? "ũ��Ƽ�� �ִ� ������ 6%" : "") +"");
 } else {
 string.append(""+(dq.getInt("potential1") == 40056 ? "ũ��Ƽ�� �ּ� ������ 3%" :
 dq.getInt("potential1") == 40057 ? "ũ��Ƽ�� �ִ� ������ 3%" : "") +"");
}
 if (ii.getReqLevel(cod) > 104) {
 string.append(""+(dq.getInt("potential1") == 40501 ? "��� ��ų�� MP �Ҹ� -15%" :
 dq.getInt("potential1") == 40502 ? "��� ��ų�� MP �Ҹ� -30%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 55) && (ii.getReqLevel(cod) < 105)) {
 string.append(""+(dq.getInt("potential1") == 40501 ? "��� ��ų�� MP �Ҹ� -10%" :
 dq.getInt("potential1") == 40502 ? "��� ��ų�� MP �Ҹ� -20%" : "") +""); 
 } else {
 string.append(""+(dq.getInt("potential1") == 40501 ? "��� ��ų�� MP �Ҹ� -5%" :
 dq.getInt("potential1") == 40502 ? "��� ��ų�� MP �Ҹ� -10%" : "") +"");
 }
 string.append(""+(dq.getInt("potential1") == 60001 ? "�� ������ 20%" :
 dq.getInt("potential1") == 40081 ? "�ý��� +12" :
 dq.getInt("potential1") == 30106 ? "��� ��ų���� +1" :
 dq.getInt("potential1") == 40106 ? "��� ��ų���� +2" :
 dq.getInt("potential1") == 40107 ? "��� ��ų���� +3" :
 dq.getInt("potential1") == 40111 ? "��� �Ӽ� ���� 10%" :
 dq.getInt("potential1") == 40116 ? "���� �̻� ���� 10%" :
 dq.getInt("potential1") == 30291 ? "����� ���� 30%" : 
 dq.getInt("potential1") == 40291 ? "����� ���� 35%" :
 dq.getInt("potential1") == 40292 ? "����� ���� 40%" :
 dq.getInt("potential1") == 30356 ? "�ǰ� �� 5% Ȯ���� ������ 20% ����" :
 dq.getInt("potential1") == 40356 ? "�ǰ� �� 10% Ȯ���� ������ 20% ����" :
 dq.getInt("potential1") == 40357 ? "�ǰ� �� 5% Ȯ���� ������ 40% ����" :
 dq.getInt("potential1") == 20366 ? "�ǰ� �� �����ð� 1��" :
 dq.getInt("potential1") == 30366 ? "�ǰ� �� �����ð� 2��" :
 dq.getInt("potential1") == 40366 ? "�ǰ� �� �����ð� 3��" : 
 dq.getInt("potential1") == 40556 ? "��� ��ų�� ���� ���ð� -1��" :
 dq.getInt("potential1") == 40557 ? "��� ��ų�� ���� ���ð� -2��" :
 dq.getInt("potential1") == 42556 ? "��� ��ų�� ���� ���ð� -1��" : "")+"\r\n");
string.append("#e�ι�° ����ɷ� : #n");
 if (ii.getReqLevel(cod) >= 75) {
 string.append(""+ (dq.getInt("potential2") == 0 ? "����" :
 dq.getInt("potential2") == 10041 ? "�� 3%" :
 dq.getInt("potential2") == 20041 ? "�� 6%" :
 dq.getInt("potential2") == 30041 ? "�� 9%" :
 dq.getInt("potential2") == 40041 ? "�� 12%" :
 dq.getInt("potential2") == 10042 ? "���� 3%" :
 dq.getInt("potential2") == 20042 ? "���� 6%" :
 dq.getInt("potential2") == 30042 ? "���� 9%" :
 dq.getInt("potential2") == 40042 ? "���� 12%" :
 dq.getInt("potential2") == 10043 ? "��Ʈ 3%" :
 dq.getInt("potential2") == 20043 ? "��Ʈ 6%" :
 dq.getInt("potential2") == 30043 ? "��Ʈ 9%" :
 dq.getInt("potential2") == 40043 ? "��Ʈ 12%" :
 dq.getInt("potential2") == 10044 ? "�� 3%" :
 dq.getInt("potential2") == 20044 ? "�� 6%" :
 dq.getInt("potential2") == 30044 ? "�� 9%" :
 dq.getInt("potential2") == 40044 ? "�� 12%" :
 dq.getInt("potential2") == 20086 ? "�ý��� 3%" :
 dq.getInt("potential2") == 30086 ? "�ý��� 6%" :
 dq.getInt("potential2") == 40086 ? "�ý��� 9%" : 
 dq.getInt("potential2") == 10045 ? "MaxHp 3%" :
 dq.getInt("potential2") == 20045 ? "MaxHp 6%" :
 dq.getInt("potential2") == 30045 ? "MaxHp 9%" :
 dq.getInt("potential2") == 40045 ? "MaxHp 12%" :
 dq.getInt("potential2") == 10046 ? "MaxMp 3%" :
 dq.getInt("potential2") == 20046 ? "MaxMp 6%" :
 dq.getInt("potential2") == 30046 ? "MaxMp 9%" :
 dq.getInt("potential2") == 40046 ? "MaxMp 12%" :
 dq.getInt("potential2") == 10047 ? "����ġ 3%" :
 dq.getInt("potential2") == 20047 ? "����ġ 6%" :
 dq.getInt("potential2") == 30047 ? "����ġ 9%" :
 dq.getInt("potential2") == 40047 ? "����ġ 12%" :
 dq.getInt("potential2") == 10048 ? "ȸ��ġ 3%" :
 dq.getInt("potential2") == 20048 ? "ȸ��ġ 6%" :
 dq.getInt("potential2") == 30048 ? "ȸ��ġ 9%" :
 dq.getInt("potential2") == 40048 ? "ȸ��ġ 12%" :
 dq.getInt("potential2") == 10051 ? "���ݷ� 3%" :
 dq.getInt("potential2") == 20051 ? "���ݷ� 6%" :
 dq.getInt("potential2") == 30051 ? "���ݷ� 9%" :
 dq.getInt("potential2") == 40051 ? "���ݷ� 12%" :
 dq.getInt("potential2") == 10052 ? "���� 3%" :
 dq.getInt("potential2") == 20052 ? "���� 6%" :
 dq.getInt("potential2") == 30052 ? "���� 9%" :
 dq.getInt("potential2") == 40052 ? "���� 12%" :
 dq.getInt("potential2") == 10070 ? "�� ������ 3%" :
 dq.getInt("potential2") == 20070 ? "�� ������ 6%" :
 dq.getInt("potential2") == 30070 ? "�� ������ 9%" :
 dq.getInt("potential2") == 40070 ? "�� ������ 12%" :
 dq.getInt("potential2") == 10053 ? "�������� 3%" :
 dq.getInt("potential2") == 20053 ? "�������� 6%" :
 dq.getInt("potential2") == 30053 ? "�������� 9%" :
 dq.getInt("potential2") == 40053 ? "�������� 12%" :
 dq.getInt("potential2") == 10054 ? "�������� 3%" :
 dq.getInt("potential2") == 20054 ? "�������� 6%" :
 dq.getInt("potential2") == 30054 ? "�������� 9%" :
 dq.getInt("potential2") == 40054 ? "�������� 12%" :
 dq.getInt("potential2") == 40650 ? "�޼� ȹ�淮 20%" :
 dq.getInt("potential2") == 40656 ? "������ ȹ��Ȯ�� 20%" :
 dq.getInt("potential2") == 10055 ? "ũ��Ƽ�� Ȯ�� 3%" :
 dq.getInt("potential2") == 20055 ? "ũ��Ƽ�� Ȯ�� 6%" :
 dq.getInt("potential2") == 30055 ? "ũ��Ƽ�� Ȯ�� 9%" :
 dq.getInt("potential2") == 40055 ? "ũ��Ƽ�� Ȯ�� 12%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 35) && (ii.getReqLevel(cod) < 75)) {
 string.append("" +(dq.getInt("potential2") == 0 ? "����" :
 dq.getInt("potential2") == 10041 ? "�� 2%" :
 dq.getInt("potential2") == 20041 ? "�� 4%" :
 dq.getInt("potential2") == 30041 ? "�� 6%" :
 dq.getInt("potential2") == 40041 ? "�� 9%" :
 dq.getInt("potential2") == 10042 ? "���� 2%" :
 dq.getInt("potential2") == 20042 ? "���� 4%" :
 dq.getInt("potential2") == 30042 ? "���� 6%" :
 dq.getInt("potential2") == 40042 ? "���� 9%" :
 dq.getInt("potential2") == 10043 ? "��Ʈ 2%" :
 dq.getInt("potential2") == 20043 ? "��Ʈ 4%" :
 dq.getInt("potential2") == 30043 ? "��Ʈ 6%" :
 dq.getInt("potential2") == 40043 ? "��Ʈ 9%" :
 dq.getInt("potential2") == 10044 ? "�� 2%" :
 dq.getInt("potential2") == 20044 ? "�� 4%" :
 dq.getInt("potential2") == 30044 ? "�� 6%" :
 dq.getInt("potential2") == 40044 ? "�� 9%" :
 dq.getInt("potential2") == 20086 ? "�ý��� 2%" :
 dq.getInt("potential2") == 30086 ? "�ý��� 4%" :
 dq.getInt("potential2") == 40086 ? "�ý��� 6%" : 
 dq.getInt("potential2") == 10045 ? "MaxHp 2%" :
 dq.getInt("potential2") == 20045 ? "MaxHp 4%" :
 dq.getInt("potential2") == 30045 ? "MaxHp 6%" :
 dq.getInt("potential2") == 40045 ? "MaxHp 9%" :
 dq.getInt("potential2") == 10046 ? "MaxMp 2%" :
 dq.getInt("potential2") == 20046 ? "MaxMp 4%" :
 dq.getInt("potential2") == 30046 ? "MaxMp 6%" :
 dq.getInt("potential2") == 40046 ? "MaxMp 9%" :
 dq.getInt("potential2") == 10047 ? "����ġ 2%" :
 dq.getInt("potential2") == 20047 ? "����ġ 4%" :
 dq.getInt("potential2") == 30047 ? "����ġ 6%" :
 dq.getInt("potential2") == 40047 ? "����ġ 9%" :
 dq.getInt("potential2") == 10048 ? "ȸ��ġ 2%" :
 dq.getInt("potential2") == 20048 ? "ȸ��ġ 4%" :
 dq.getInt("potential2") == 30048 ? "ȸ��ġ 6%" :
 dq.getInt("potential2") == 40048 ? "ȸ��ġ 9%" :
 dq.getInt("potential2") == 10051 ? "���ݷ� 2%" :
 dq.getInt("potential2") == 20051 ? "���ݷ� 4%" :
 dq.getInt("potential2") == 30051 ? "���ݷ� 6%" :
 dq.getInt("potential2") == 40051 ? "���ݷ� 9%" :
 dq.getInt("potential2") == 10052 ? "���� 2%" :
 dq.getInt("potential2") == 20052 ? "���� 4%" :
 dq.getInt("potential2") == 30052 ? "���� 6%" :
 dq.getInt("potential2") == 40052 ? "���� 9%" :
 dq.getInt("potential2") == 10070 ? "�� ������ 2%" :
 dq.getInt("potential2") == 20070 ? "�� ������ 4%" :
 dq.getInt("potential2") == 30070 ? "�� ������ 6%" :
 dq.getInt("potential2") == 40070 ? "�� ������ 9%" :
 dq.getInt("potential2") == 10053 ? "�������� 2%" :
 dq.getInt("potential2") == 20053 ? "�������� 4%" :
 dq.getInt("potential2") == 30053 ? "�������� 6%" :
 dq.getInt("potential2") == 40053 ? "�������� 9%" :
 dq.getInt("potential2") == 10054 ? "�������� 2%" :
 dq.getInt("potential2") == 20054 ? "�������� 4%" :
 dq.getInt("potential2") == 30054 ? "�������� 6%" :
 dq.getInt("potential2") == 40054 ? "�������� 9%" :
 dq.getInt("potential2") == 40650 ? "�޼� ȹ�淮 15%" :
 dq.getInt("potential2") == 40656 ? "������ ȹ��Ȯ�� 15%" :
 dq.getInt("potential2") == 10055 ? "ũ��Ƽ�� Ȯ�� 2%" :
 dq.getInt("potential2") == 20055 ? "ũ��Ƽ�� Ȯ�� 4%" :
 dq.getInt("potential2") == 30055 ? "ũ��Ƽ�� Ȯ�� 6%" :
 dq.getInt("potential2") == 40055 ? "ũ��Ƽ�� Ȯ�� 9%" : "") +"");
 } else {
 string.append("" +(dq.getInt("potential2") == 0 ? "����" :
 dq.getInt("potential2") == 10041 ? "�� 1%" :
 dq.getInt("potential2") == 20041 ? "�� 2%" :
 dq.getInt("potential2") == 30041 ? "�� 3%" :
 dq.getInt("potential2") == 40041 ? "�� 6%" :
 dq.getInt("potential2") == 10042 ? "���� 1%" :
 dq.getInt("potential2") == 20042 ? "���� 2%" :
 dq.getInt("potential2") == 30042 ? "���� 3%" :
 dq.getInt("potential2") == 40042 ? "���� 6%" :
 dq.getInt("potential2") == 10043 ? "��Ʈ 1%" :
 dq.getInt("potential2") == 20043 ? "��Ʈ 2%" :
 dq.getInt("potential2") == 30043 ? "��Ʈ 3%" :
 dq.getInt("potential2") == 40043 ? "��Ʈ 6%" :
 dq.getInt("potential2") == 10044 ? "�� 1%" :
 dq.getInt("potential2") == 20044 ? "�� 2%" :
 dq.getInt("potential2") == 30044 ? "�� 3%" :
 dq.getInt("potential2") == 40044 ? "�� 6%" :
 dq.getInt("potential2") == 20086 ? "�ý��� 1%" :
 dq.getInt("potential2") == 30086 ? "�ý��� 2%" :
 dq.getInt("potential2") == 40086 ? "�ý��� 3%" : 
 dq.getInt("potential2") == 10045 ? "MaxHp 1%" :
 dq.getInt("potential2") == 20045 ? "MaxHp 2%" :
 dq.getInt("potential2") == 30045 ? "MaxHp 3%" :
 dq.getInt("potential2") == 40045 ? "MaxHp 6%" :
 dq.getInt("potential2") == 10046 ? "MaxMp 1%" :
 dq.getInt("potential2") == 20046 ? "MaxMp 2%" :
 dq.getInt("potential2") == 30046 ? "MaxMp 3%" :
 dq.getInt("potential2") == 40046 ? "MaxMp 6%" :
 dq.getInt("potential2") == 10047 ? "����ġ 1%" :
 dq.getInt("potential2") == 20047 ? "����ġ 2%" :
 dq.getInt("potential2") == 30047 ? "����ġ 3%" :
 dq.getInt("potential2") == 40047 ? "����ġ 6%" :
 dq.getInt("potential2") == 10048 ? "ȸ��ġ 1%" :
 dq.getInt("potential2") == 20048 ? "ȸ��ġ 2%" :
 dq.getInt("potential2") == 30048 ? "ȸ��ġ 3%" :
 dq.getInt("potential2") == 40048 ? "ȸ��ġ 6%" :
 dq.getInt("potential2") == 10051 ? "���ݷ� 1%" :
 dq.getInt("potential2") == 20051 ? "���ݷ� 2%" :
 dq.getInt("potential2") == 30051 ? "���ݷ� 3%" :
 dq.getInt("potential2") == 40051 ? "���ݷ� 6%" :
 dq.getInt("potential2") == 10052 ? "���� 1%" :
 dq.getInt("potential2") == 20052 ? "���� 2%" :
 dq.getInt("potential2") == 30052 ? "���� 3%" :
 dq.getInt("potential2") == 40052 ? "���� 6%" :
 dq.getInt("potential2") == 10070 ? "�� ������ 1%" :
 dq.getInt("potential2") == 20070 ? "�� ������ 2%" :
 dq.getInt("potential2") == 30070 ? "�� ������ 3%" :
 dq.getInt("potential2") == 40070 ? "�� ������ 6%" :
 dq.getInt("potential2") == 10053 ? "�������� 1%" :
 dq.getInt("potential2") == 20053 ? "�������� 2%" :
 dq.getInt("potential2") == 30053 ? "�������� 3%" :
 dq.getInt("potential2") == 40053 ? "�������� 6%" :
 dq.getInt("potential2") == 10054 ? "�������� 1%" :
 dq.getInt("potential2") == 20054 ? "�������� 2%" :
 dq.getInt("potential2") == 30054 ? "�������� 3%" :
 dq.getInt("potential2") == 40054 ? "�������� 6%" :
 dq.getInt("potential2") == 40650 ? "�޼� ȹ�淮 10%" :
 dq.getInt("potential2") == 40656 ? "������ ȹ��Ȯ�� 10%" :
 dq.getInt("potential2") == 10055 ? "ũ��Ƽ�� Ȯ�� 1%" :
 dq.getInt("potential2") == 20055 ? "ũ��Ƽ�� Ȯ�� 2%" :
 dq.getInt("potential2") == 30055 ? "ũ��Ƽ�� Ȯ�� 3%" :
 dq.getInt("potential2") == 40055 ? "ũ��Ƽ�� Ȯ�� 6%" : "") +"");
}
 if (ii.getReqLevel(cod) > 84) {
 string.append(""+(dq.getInt("potential2") == 40056 ? "ũ��Ƽ�� �ּ� ������ 15%" :
 dq.getInt("potential2") == 40057 ? "ũ��Ƽ�� �ִ� ������ 15%" : "") +"");
 } else if ((ii.getReqLevel(cod) <= 84) && (ii.getReqLevel(cod) > 64)){
 string.append(""+(dq.getInt("potential2") == 40056 ? "ũ��Ƽ�� �ּ� ������ 12%" :
 dq.getInt("potential2") == 40057 ? "ũ��Ƽ�� �ִ� ������ 12%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 45) && (ii.getReqLevel(cod) < 65)) {
 string.append(""+(dq.getInt("potential2") == 40056 ? "ũ��Ƽ�� �ּ� ������ 9%" :
 dq.getInt("potential2") == 40057 ? "ũ��Ƽ�� �ִ� ������ 9%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 25) && (ii.getReqLevel(cod) < 45)) {
 string.append(""+(dq.getInt("potential2") == 40056 ? "ũ��Ƽ�� �ּ� ������ 6%" :
 dq.getInt("potential2") == 40057 ? "ũ��Ƽ�� �ִ� ������ 6%" : "") +"");
 } else {
 string.append(""+(dq.getInt("potential2") == 40056 ? "ũ��Ƽ�� �ּ� ������ 3%" :
 dq.getInt("potential2") == 40057 ? "ũ��Ƽ�� �ִ� ������ 3%" : "") +"");
}
 if (ii.getReqLevel(cod) > 104) {
 string.append(""+(dq.getInt("potential2") == 40501 ? "��� ��ų�� MP �Ҹ� -15%" :
 dq.getInt("potential2") == 40502 ? "��� ��ų�� MP �Ҹ� -30%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 55) && (ii.getReqLevel(cod) < 105)) {
 string.append(""+(dq.getInt("potential2") == 40501 ? "��� ��ų�� MP �Ҹ� -10%" :
 dq.getInt("potential2") == 40502 ? "��� ��ų�� MP �Ҹ� -20%" : "") +""); 
 } else {
 string.append(""+(dq.getInt("potential2") == 40501 ? "��� ��ų�� MP �Ҹ� -5%" :
 dq.getInt("potential2") == 40502 ? "��� ��ų�� MP �Ҹ� -10%" : "") +"");
 }
 string.append(""+(dq.getInt("potential2") == 60001 ? "�� ������ 20%" :
 dq.getInt("potential2") == 40081 ? "�ý��� +12" :
 dq.getInt("potential2") == 30106 ? "��� ��ų���� +1" :
 dq.getInt("potential2") == 40106 ? "��� ��ų���� +2" :
 dq.getInt("potential2") == 40107 ? "��� ��ų���� +3" :
 dq.getInt("potential2") == 40111 ? "��� �Ӽ� ���� 10%" :
 dq.getInt("potential2") == 40116 ? "���� �̻� ���� 10%" :
 dq.getInt("potential2") == 30291 ? "����� ���� 30%" : 
 dq.getInt("potential2") == 40291 ? "����� ���� 35%" :
 dq.getInt("potential2") == 40292 ? "����� ���� 40%" :
 dq.getInt("potential2") == 30356 ? "�ǰ� �� 5% Ȯ���� ������ 20% ����" :
 dq.getInt("potential2") == 40356 ? "�ǰ� �� 10% Ȯ���� ������ 20% ����" :
 dq.getInt("potential2") == 40357 ? "�ǰ� �� 5% Ȯ���� ������ 40% ����" :
 dq.getInt("potential2") == 20366 ? "�ǰ� �� �����ð� 1��" :
 dq.getInt("potential2") == 30366 ? "�ǰ� �� �����ð� 2��" :
 dq.getInt("potential2") == 40366 ? "�ǰ� �� �����ð� 3��" : 
 dq.getInt("potential2") == 40556 ? "��� ��ų�� ���� ���ð� -1��" :
 dq.getInt("potential2") == 40557 ? "��� ��ų�� ���� ���ð� -2��" :
 dq.getInt("potential2") == 42556 ? "��� ��ų�� ���� ���ð� -1��" : "")+"\r\n");
string.append("#e����° ����ɷ� : #n");
 if (ii.getReqLevel(cod) >= 75) {
 string.append(""+ (dq.getInt("potential3") == 0 ? "����" :
 dq.getInt("potential3") == 10041 ? "�� 3%" :
 dq.getInt("potential3") == 20041 ? "�� 6%" :
 dq.getInt("potential3") == 30041 ? "�� 9%" :
 dq.getInt("potential3") == 40041 ? "�� 12%" :
 dq.getInt("potential3") == 10042 ? "���� 3%" :
 dq.getInt("potential3") == 20042 ? "���� 6%" :
 dq.getInt("potential3") == 30042 ? "���� 9%" :
 dq.getInt("potential3") == 40042 ? "���� 12%" :
 dq.getInt("potential3") == 10043 ? "��Ʈ 3%" :
 dq.getInt("potential3") == 20043 ? "��Ʈ 6%" :
 dq.getInt("potential3") == 30043 ? "��Ʈ 9%" :
 dq.getInt("potential3") == 40043 ? "��Ʈ 12%" :
 dq.getInt("potential3") == 10044 ? "�� 3%" :
 dq.getInt("potential3") == 20044 ? "�� 6%" :
 dq.getInt("potential3") == 30044 ? "�� 9%" :
 dq.getInt("potential3") == 40044 ? "�� 12%" :
 dq.getInt("potential3") == 20086 ? "�ý��� 3%" :
 dq.getInt("potential3") == 30086 ? "�ý��� 6%" :
 dq.getInt("potential3") == 40086 ? "�ý��� 9%" : 
 dq.getInt("potential3") == 10045 ? "MaxHp 3%" :
 dq.getInt("potential3") == 20045 ? "MaxHp 6%" :
 dq.getInt("potential3") == 30045 ? "MaxHp 9%" :
 dq.getInt("potential3") == 40045 ? "MaxHp 12%" :
 dq.getInt("potential3") == 10046 ? "MaxMp 3%" :
 dq.getInt("potential3") == 20046 ? "MaxMp 6%" :
 dq.getInt("potential3") == 30046 ? "MaxMp 9%" :
 dq.getInt("potential3") == 40046 ? "MaxMp 12%" :
 dq.getInt("potential3") == 10047 ? "����ġ 3%" :
 dq.getInt("potential3") == 20047 ? "����ġ 6%" :
 dq.getInt("potential3") == 30047 ? "����ġ 9%" :
 dq.getInt("potential3") == 40047 ? "����ġ 12%" :
 dq.getInt("potential3") == 10048 ? "ȸ��ġ 3%" :
 dq.getInt("potential3") == 20048 ? "ȸ��ġ 6%" :
 dq.getInt("potential3") == 30048 ? "ȸ��ġ 9%" :
 dq.getInt("potential3") == 40048 ? "ȸ��ġ 12%" :
 dq.getInt("potential3") == 10051 ? "���ݷ� 3%" :
 dq.getInt("potential3") == 20051 ? "���ݷ� 6%" :
 dq.getInt("potential3") == 30051 ? "���ݷ� 9%" :
 dq.getInt("potential3") == 40051 ? "���ݷ� 12%" :
 dq.getInt("potential3") == 10052 ? "���� 3%" :
 dq.getInt("potential3") == 20052 ? "���� 6%" :
 dq.getInt("potential3") == 30052 ? "���� 9%" :
 dq.getInt("potential3") == 40052 ? "���� 12%" :
 dq.getInt("potential3") == 10070 ? "�� ������ 3%" :
 dq.getInt("potential3") == 20070 ? "�� ������ 6%" :
 dq.getInt("potential3") == 30070 ? "�� ������ 9%" :
 dq.getInt("potential3") == 40070 ? "�� ������ 12%" :
 dq.getInt("potential3") == 10053 ? "�������� 3%" :
 dq.getInt("potential3") == 20053 ? "�������� 6%" :
 dq.getInt("potential3") == 30053 ? "�������� 9%" :
 dq.getInt("potential3") == 40053 ? "�������� 12%" :
 dq.getInt("potential3") == 10054 ? "�������� 3%" :
 dq.getInt("potential3") == 20054 ? "�������� 6%" :
 dq.getInt("potential3") == 30054 ? "�������� 9%" :
 dq.getInt("potential3") == 40054 ? "�������� 12%" :
 dq.getInt("potential3") == 40650 ? "�޼� ȹ�淮 20%" :
 dq.getInt("potential3") == 40656 ? "������ ȹ��Ȯ�� 20%" :
 dq.getInt("potential3") == 10055 ? "ũ��Ƽ�� Ȯ�� 3%" :
 dq.getInt("potential3") == 20055 ? "ũ��Ƽ�� Ȯ�� 6%" :
 dq.getInt("potential3") == 30055 ? "ũ��Ƽ�� Ȯ�� 9%" :
 dq.getInt("potential3") == 40055 ? "ũ��Ƽ�� Ȯ�� 12%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 35) && (ii.getReqLevel(cod) < 75)) {
 string.append("" +(dq.getInt("potential3") == 0 ? "����" :
 dq.getInt("potential3") == 10041 ? "�� 2%" :
 dq.getInt("potential3") == 20041 ? "�� 4%" :
 dq.getInt("potential3") == 30041 ? "�� 6%" :
 dq.getInt("potential3") == 40041 ? "�� 9%" :
 dq.getInt("potential3") == 10042 ? "���� 2%" :
 dq.getInt("potential3") == 20042 ? "���� 4%" :
 dq.getInt("potential3") == 30042 ? "���� 6%" :
 dq.getInt("potential3") == 40042 ? "���� 9%" :
 dq.getInt("potential3") == 10043 ? "��Ʈ 2%" :
 dq.getInt("potential3") == 20043 ? "��Ʈ 4%" :
 dq.getInt("potential3") == 30043 ? "��Ʈ 6%" :
 dq.getInt("potential3") == 40043 ? "��Ʈ 9%" :
 dq.getInt("potential3") == 10044 ? "�� 2%" :
 dq.getInt("potential3") == 20044 ? "�� 4%" :
 dq.getInt("potential3") == 30044 ? "�� 6%" :
 dq.getInt("potential3") == 40044 ? "�� 9%" :
 dq.getInt("potential3") == 20086 ? "�ý��� 2%" :
 dq.getInt("potential3") == 30086 ? "�ý��� 4%" :
 dq.getInt("potential3") == 40086 ? "�ý��� 6%" : 
 dq.getInt("potential3") == 10045 ? "MaxHp 2%" :
 dq.getInt("potential3") == 20045 ? "MaxHp 4%" :
 dq.getInt("potential3") == 30045 ? "MaxHp 6%" :
 dq.getInt("potential3") == 40045 ? "MaxHp 9%" :
 dq.getInt("potential3") == 10046 ? "MaxMp 2%" :
 dq.getInt("potential3") == 20046 ? "MaxMp 4%" :
 dq.getInt("potential3") == 30046 ? "MaxMp 6%" :
 dq.getInt("potential3") == 40046 ? "MaxMp 9%" :
 dq.getInt("potential3") == 10047 ? "����ġ 2%" :
 dq.getInt("potential3") == 20047 ? "����ġ 4%" :
 dq.getInt("potential3") == 30047 ? "����ġ 6%" :
 dq.getInt("potential3") == 40047 ? "����ġ 9%" :
 dq.getInt("potential3") == 10048 ? "ȸ��ġ 2%" :
 dq.getInt("potential3") == 20048 ? "ȸ��ġ 4%" :
 dq.getInt("potential3") == 30048 ? "ȸ��ġ 6%" :
 dq.getInt("potential3") == 40048 ? "ȸ��ġ 9%" :
 dq.getInt("potential3") == 10051 ? "���ݷ� 2%" :
 dq.getInt("potential3") == 20051 ? "���ݷ� 4%" :
 dq.getInt("potential3") == 30051 ? "���ݷ� 6%" :
 dq.getInt("potential3") == 40051 ? "���ݷ� 9%" :
 dq.getInt("potential3") == 10052 ? "���� 2%" :
 dq.getInt("potential3") == 20052 ? "���� 4%" :
 dq.getInt("potential3") == 30052 ? "���� 6%" :
 dq.getInt("potential3") == 40052 ? "���� 9%" :
 dq.getInt("potential3") == 10070 ? "�� ������ 2%" :
 dq.getInt("potential3") == 20070 ? "�� ������ 4%" :
 dq.getInt("potential3") == 30070 ? "�� ������ 6%" :
 dq.getInt("potential3") == 40070 ? "�� ������ 9%" :
 dq.getInt("potential3") == 10053 ? "�������� 2%" :
 dq.getInt("potential3") == 20053 ? "�������� 4%" :
 dq.getInt("potential3") == 30053 ? "�������� 6%" :
 dq.getInt("potential3") == 40053 ? "�������� 9%" :
 dq.getInt("potential3") == 10054 ? "�������� 2%" :
 dq.getInt("potential3") == 20054 ? "�������� 4%" :
 dq.getInt("potential3") == 30054 ? "�������� 6%" :
 dq.getInt("potential3") == 40054 ? "�������� 9%" :
 dq.getInt("potential3") == 40650 ? "�޼� ȹ�淮 15%" :
 dq.getInt("potential3") == 40656 ? "������ ȹ��Ȯ�� 15%" :
 dq.getInt("potential3") == 10055 ? "ũ��Ƽ�� Ȯ�� 2%" :
 dq.getInt("potential3") == 20055 ? "ũ��Ƽ�� Ȯ�� 4%" :
 dq.getInt("potential3") == 30055 ? "ũ��Ƽ�� Ȯ�� 6%" :
 dq.getInt("potential3") == 40055 ? "ũ��Ƽ�� Ȯ�� 9%" : "") +"");
 } else {
 string.append("" +(dq.getInt("potential3") == 0 ? "����" :
 dq.getInt("potential3") == 10041 ? "�� 1%" :
 dq.getInt("potential3") == 20041 ? "�� 2%" :
 dq.getInt("potential3") == 30041 ? "�� 3%" :
 dq.getInt("potential3") == 40041 ? "�� 6%" :
 dq.getInt("potential3") == 10042 ? "���� 1%" :
 dq.getInt("potential3") == 20042 ? "���� 2%" :
 dq.getInt("potential3") == 30042 ? "���� 3%" :
 dq.getInt("potential3") == 40042 ? "���� 6%" :
 dq.getInt("potential3") == 10043 ? "��Ʈ 1%" :
 dq.getInt("potential3") == 20043 ? "��Ʈ 2%" :
 dq.getInt("potential3") == 30043 ? "��Ʈ 3%" :
 dq.getInt("potential3") == 40043 ? "��Ʈ 6%" :
 dq.getInt("potential3") == 10044 ? "�� 1%" :
 dq.getInt("potential3") == 20044 ? "�� 2%" :
 dq.getInt("potential3") == 30044 ? "�� 3%" :
 dq.getInt("potential3") == 40044 ? "�� 6%" :
 dq.getInt("potential3") == 20086 ? "�ý��� 1%" :
 dq.getInt("potential3") == 30086 ? "�ý��� 2%" :
 dq.getInt("potential3") == 40086 ? "�ý��� 3%" : 
 dq.getInt("potential3") == 10045 ? "MaxHp 1%" :
 dq.getInt("potential3") == 20045 ? "MaxHp 2%" :
 dq.getInt("potential3") == 30045 ? "MaxHp 3%" :
 dq.getInt("potential3") == 40045 ? "MaxHp 6%" :
 dq.getInt("potential3") == 10046 ? "MaxMp 1%" :
 dq.getInt("potential3") == 20046 ? "MaxMp 2%" :
 dq.getInt("potential3") == 30046 ? "MaxMp 3%" :
 dq.getInt("potential3") == 40046 ? "MaxMp 6%" :
 dq.getInt("potential3") == 10047 ? "����ġ 1%" :
 dq.getInt("potential3") == 20047 ? "����ġ 2%" :
 dq.getInt("potential3") == 30047 ? "����ġ 3%" :
 dq.getInt("potential3") == 40047 ? "����ġ 6%" :
 dq.getInt("potential3") == 10048 ? "ȸ��ġ 1%" :
 dq.getInt("potential3") == 20048 ? "ȸ��ġ 2%" :
 dq.getInt("potential3") == 30048 ? "ȸ��ġ 3%" :
 dq.getInt("potential3") == 40048 ? "ȸ��ġ 6%" :
 dq.getInt("potential3") == 10051 ? "���ݷ� 1%" :
 dq.getInt("potential3") == 20051 ? "���ݷ� 2%" :
 dq.getInt("potential3") == 30051 ? "���ݷ� 3%" :
 dq.getInt("potential3") == 40051 ? "���ݷ� 6%" :
 dq.getInt("potential3") == 10052 ? "���� 1%" :
 dq.getInt("potential3") == 20052 ? "���� 2%" :
 dq.getInt("potential3") == 30052 ? "���� 3%" :
 dq.getInt("potential3") == 40052 ? "���� 6%" :
 dq.getInt("potential3") == 10070 ? "�� ������ 1%" :
 dq.getInt("potential3") == 20070 ? "�� ������ 2%" :
 dq.getInt("potential3") == 30070 ? "�� ������ 3%" :
 dq.getInt("potential3") == 40070 ? "�� ������ 6%" :
 dq.getInt("potential3") == 10053 ? "�������� 1%" :
 dq.getInt("potential3") == 20053 ? "�������� 2%" :
 dq.getInt("potential3") == 30053 ? "�������� 3%" :
 dq.getInt("potential3") == 40053 ? "�������� 6%" :
 dq.getInt("potential3") == 10054 ? "�������� 1%" :
 dq.getInt("potential3") == 20054 ? "�������� 2%" :
 dq.getInt("potential3") == 30054 ? "�������� 3%" :
 dq.getInt("potential3") == 40054 ? "�������� 6%" :
 dq.getInt("potential3") == 40650 ? "�޼� ȹ�淮 10%" :
 dq.getInt("potential3") == 40656 ? "������ ȹ��Ȯ�� 10%" :
 dq.getInt("potential3") == 10055 ? "ũ��Ƽ�� Ȯ�� 1%" :
 dq.getInt("potential3") == 20055 ? "ũ��Ƽ�� Ȯ�� 2%" :
 dq.getInt("potential3") == 30055 ? "ũ��Ƽ�� Ȯ�� 3%" :
 dq.getInt("potential3") == 40055 ? "ũ��Ƽ�� Ȯ�� 6%" : "") +"");
}
 if (ii.getReqLevel(cod) > 84) {
 string.append(""+(dq.getInt("potential3") == 40056 ? "ũ��Ƽ�� �ּ� ������ 15%" :
 dq.getInt("potential3") == 40057 ? "ũ��Ƽ�� �ִ� ������ 15%" : "") +"");
 } else if ((ii.getReqLevel(cod) <= 84) && (ii.getReqLevel(cod) > 64)){
 string.append(""+(dq.getInt("potential3") == 40056 ? "ũ��Ƽ�� �ּ� ������ 12%" :
 dq.getInt("potential3") == 40057 ? "ũ��Ƽ�� �ִ� ������ 12%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 45) && (ii.getReqLevel(cod) < 65)) {
 string.append(""+(dq.getInt("potential3") == 40056 ? "ũ��Ƽ�� �ּ� ������ 9%" :
 dq.getInt("potential3") == 40057 ? "ũ��Ƽ�� �ִ� ������ 9%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 25) && (ii.getReqLevel(cod) < 45)) {
 string.append(""+(dq.getInt("potential3") == 40056 ? "ũ��Ƽ�� �ּ� ������ 6%" :
 dq.getInt("potential3") == 40057 ? "ũ��Ƽ�� �ִ� ������ 6%" : "") +"");
 } else {
 string.append(""+(dq.getInt("potential3") == 40056 ? "ũ��Ƽ�� �ּ� ������ 3%" :
 dq.getInt("potential3") == 40057 ? "ũ��Ƽ�� �ִ� ������ 3%" : "") +"");
}
 if (ii.getReqLevel(cod) > 104) {
 string.append(""+(dq.getInt("potential3") == 40501 ? "��� ��ų�� MP �Ҹ� -15%" :
 dq.getInt("potential3") == 40502 ? "��� ��ų�� MP �Ҹ� -30%" : "") +"");
 } else if ((ii.getReqLevel(cod) >= 55) && (ii.getReqLevel(cod) < 105)) {
 string.append(""+(dq.getInt("potential3") == 40501 ? "��� ��ų�� MP �Ҹ� -10%" :
 dq.getInt("potential3") == 40502 ? "��� ��ų�� MP �Ҹ� -20%" : "") +""); 
 } else {
 string.append(""+(dq.getInt("potential3") == 40501 ? "��� ��ų�� MP �Ҹ� -5%" :
 dq.getInt("potential3") == 40502 ? "��� ��ų�� MP �Ҹ� -10%" : "") +"");
 }
 string.append(""+(dq.getInt("potential3") == 60001 ? "�� ������ 20%" :
 dq.getInt("potential3") == 40081 ? "�ý��� +12" :
 dq.getInt("potential3") == 30106 ? "��� ��ų���� +1" :
 dq.getInt("potential3") == 40106 ? "��� ��ų���� +2" :
 dq.getInt("potential3") == 40107 ? "��� ��ų���� +3" :
 dq.getInt("potential3") == 40111 ? "��� �Ӽ� ���� 10%" :
 dq.getInt("potential3") == 40116 ? "���� �̻� ���� 10%" :
 dq.getInt("potential3") == 30291 ? "����� ���� 30%" : 
 dq.getInt("potential3") == 40291 ? "����� ���� 35%" :
 dq.getInt("potential3") == 40292 ? "����� ���� 40%" :
 dq.getInt("potential3") == 30356 ? "�ǰ� �� 5% Ȯ���� ������ 20% ����" :
 dq.getInt("potential3") == 40356 ? "�ǰ� �� 10% Ȯ���� ������ 20% ����" :
 dq.getInt("potential3") == 40357 ? "�ǰ� �� 5% Ȯ���� ������ 40% ����" :
 dq.getInt("potential3") == 20366 ? "�ǰ� �� �����ð� 1��" :
 dq.getInt("potential3") == 30366 ? "�ǰ� �� �����ð� 2��" :
 dq.getInt("potential3") == 40366 ? "�ǰ� �� �����ð� 3��" : 
 dq.getInt("potential3") == 40556 ? "��� ��ų�� ���� ���ð� -1��" :
 dq.getInt("potential3") == 40557 ? "��� ��ų�� ���� ���ð� -2��" :
 dq.getInt("potential3") == 42556 ? "��� ��ų�� ���� ���ð� -1��" : "")+"\r\n");
    return string.toString();
}

function getOption(uniqueid){
    var con = MYSQL.getConnection().prepareStatement("SELECT * FROM inventoryitems WHERE inventoryitemid = ?");
    con.setInt(1, uniqueid);
    var eq = con.executeQuery();
    eq.next();
 var damn = eq.getInt("itemid");
 var string = new StringBuilder();
 string.append("#e������ �̸�#n : #t"+eq.getInt("itemid")+"# / #e���� #n: "+eq.getInt("quantity")+" (��)\r\n\r\n");
 string.append("#e������ ����#n : "+ItemInformation.getInstance().getDesc(damn)+"");
 return string.toString();
}