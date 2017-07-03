importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var Jessica = 0;
var servername = "타임";
var number = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9");
var skill = new Array(1000, 3, 3, 1001, 3, 3);

function coupon(numb) {
	var string = new StringBuilder();
	for(var i = 0; i < numb; i++) {
	var JessR = Math.floor(Math.random() * number.length);
	string.append(number[JessR]);
	}
	return string.toString();
}

function start() { Jessica = -1; action(1, 0, 0); }
function action(music, type, girl) { (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
if (Jessica == 0) {
	var Jess = "안녕하세요. 쿠폰아이템 발급 엔피시입니다.\r\n#b";
if (cm.getPlayer().getGMLevel() == 6) {
	Jess += "#L0#쿠폰 발급하기\r\n";
}
	Jess += "#L1#운영진이 선뜻 내어준 쿠폰 번호 입력하기\r\n";
	cm.sendSimple(Jess);

} else if (Jessica == 1) {
if (girl == 0) {
	cm.sendGetNumber("쿠폰 사용시 지급될 아이템의 코드를 입력 해 주세요.", 2000000, 0, 9999999);
	Jessica = 1;

} else if (girl == 1) {
	cm.sendGetText("쿠폰 번호를 입력 해 주세요.");
	Jessica = 3;

} else if (girl == 2) {
for (var i = 0; i < skill.length; i+= 3) {
	cm.getPlayer().changeSkillLevel(skill[i], skill[i+1], skill[i+2]);
}
	cm.sendOk("모든 스킬이 마스터 되었습니다.");
	cm.dispose();
}

} else if (Jessica == 2) {
	item = girl;
	cm.sendGetNumber("아이템의 갯수를 입력 해 주세요.", 1, 0, 999);
 
} else if (Jessica == 3) {
	itemn = girl;
	var number = coupon(4) + "-" + coupon(4) + "-" + coupon(4) + "-" + coupon(6);
	var insert = MYSQL.getConnection().prepareStatement("INSERT INTO coupon(number, name, item, itemn, date) VALUES(?,?,?,?,now())");
	insert.setString(1, number);
	insert.setString(2, cm.getName());
	insert.setString(3, item);
	insert.setString(4, itemn);
	insert.executeUpdate();
	cm.sendOk(servername + "월드의 #r쿠폰#k이 발급되었습니다.\r\n\r\n#b" + number + "\r\n\r\n#r#i" + item + "# #t" + item + "##k (이)가 " + itemn + "개 지급됩니다.");
	cm.dispose();

} else if (Jessica == 4) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM coupon WHERE number = ?");
	con.setString(1, cm.getText());
	var eq = con.executeQuery();
	var i = 0;
		var Jess = new StringBuilder();
		Jess.append("아래 아이템을 받았습니다.\r\n\r\n#b");
	while (eq.next()) {
		var itemcode = eq.getString("item");
		var itemnum = eq.getString("itemn");
		Jess.append("#i").append(eq.getString("item")).append("# #t").append(eq.getString("item")).append("#")

		.append(" / ").append(eq.getString("itemn")).append("개#k")

		.append("\r\n만들어진 날짜 : ").append(eq.getString("date"));
		i++;
	}
	if (i == 0){
		cm.sendOk("존재하지 않는 쿠폰입니다. 운영자에게 문의 해 주세요.");
		cm.dispose();
	} else {
		cm.gainItem(itemcode, itemnum);
		MYSQL.getConnection().prepareStatement("DELETE FROM coupon WHERE number = '" + cm.getText() + "'").executeUpdate();
		cm.sendOk(Jess.toString());
		cm.dispose();
	}
}
}
