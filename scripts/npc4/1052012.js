/*
 * 추가 : 쿠션씨 (pok_showinfo@nate.com)
*/
importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var Jessica = 0;
var i = 0;

function login(jess) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE name = ?");
	con.setString(1,jess);
	var eq = con.executeQuery();
	while(eq.next()) {
		i = 1;
		MYSQL.getConnection().prepareStatement("update characters set map = '100000000' where name = '" + jess + "'").executeUpdate();
}
return;
}

function start() {
	Jessica = -1;
	action(1, 0, 0);
 }
function action(music, type, girl) {
 (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
    (Jessica == 0) ? cm.sendGetText("현재 팅맵에 있는 캐릭터의 이름을 입력해 주세요.")
    :(Jessica == 1) ? (login(cm.getText()), (i != 0) ? (cm.sendOk("해제되었습니다."), cm.dispose())
    : (cm.sendOk("캐릭터명을 확인해주세요."), cm.dispose())) : cm.dispose();
}