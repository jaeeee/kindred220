importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var Jessica = 0;
var i = 0;

function login(jess) {
var con = MYSQL.getConnection().prepareStatement("SELECT * FROM accounts WHERE name = ?");
con.setString(1,jess);
var eq = con.executeQuery();
while(eq.next()) {
i = 1;
MYSQL.getConnection().prepareStatement("update accounts set loggedin= '0' where name = '" + jess + "'").executeUpdate();
}
return;
}

function start() { Jessica = -1; action(1, 0, 0); }
function action(music, type, girl) { (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
    (Jessica == 0) ? cm.sendGetText("���� �������� ������ �ߴ� ���̵� �Է� �� �ּ���.")
    :(Jessica == 1) ? (login(cm.getText()), (i != 0) ? (cm.sendOk("���� �Ǿ����ϴ�."), cm.dispose())
    : (cm.sendOk("���Ե� ���̵� �ƴմϴ�."), cm.dispose())) : cm.dispose();
}