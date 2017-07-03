importPackage(Packages.client);
importPackage(java.sql);
importPackage(Packages.database);

var Jessica = 0;

var openNpc = new Array("운영자", 9010000);
var openShop = new Array("무기", 2013);

function startc() {
 var con = MYSQL.getConnection().prepareStatement("SELECT * FROM boom WHERE status = ?");
 con.setString(1, "시작")
 var eq = con.executeQuery();
 start = 0;
 gun = 0;
 while(eq.next()) {
 start = 1;
 total_gun = eq.getString("gun");
 }
}

function start() { Jessica = -1; action(1, 0, 0); }
function action(music, type, girl) { (music == 1) ? Jessica++ : (Jessica--, cm.dispose());
if (Jessica == 0) {
 startc();
 var Jess = "히히~ 저에게 #e#r화약통#k#n을 줘보시겠어요?\r\n\r\n";

 if (start == 0) {
 Jess += "#b#L0#화약통 모으기 시작";
 } else {
 Jess += "히히~ 현재까지 모인 #e#r화약통#k#n의 갯수는 #b" + total_gun + "개#k 에요~\r\n\r\n";
 Jess += "#b#L1#화약통 주기";
 }
 if (cm.getPlayer().getGMLevel() >= 1) {
 Jess += "\r\n#r#L2#[GM]버닝 종료\r\n";
 }
 cm.sendSimple(Jess);

} else if (Jessica == 1) {
if (girl == 2) {
cm.아르미끝();
cm.dispose();
}
 if (girl == 0) {
  var insert = MYSQL.getConnection().prepareStatement("INSERT INTO boom(status, gun, date) VALUES(?,?,now())");
  insert.setString(1, "시작");
  insert.setString(2, 0);
  insert.executeUpdate();
  cm.sendOk("히히~ #r모두가 함께 폭죽을 터트리자!!#k 이벤트가 시작되었어요~");
  cm.dispose();
 } else if (girl == 1) {
  cm.sendGetNumber("히히~ 몇개의 #r화약통#k을 주시겠어요?", 1, 1, 999);
  Jessica = 1;
 }

} else if (Jessica == 2) {
if (cm.haveItem(4001128, girl)) {
 txt = cm.getText();
 var total_guns = +total_gun;
 var plus_gun = total_guns+girl;
 MYSQL.getConnection().prepareStatement("UPDATE boom SET gun = '" + plus_gun + "' WHERE status = '시작'").executeUpdate();
 if (plus_gun >= 1000) {
 cm.sendOk("우와~~ 여러분 덕분에 #b예쁜 폭죽#k을 터트렸어요!!");
 cm.gainItem(4001128, -girl);
 MYSQL.getConnection().prepareStatement("DELETE FROM boom").executeUpdate();
 cm.아르미();
 cm.dispose();
 } else {
 cm.sendOk(girl + "개의 화약통을 주셔서 #b" + plus_gun + "#k개 의 #e#r화약통#n#k이 모였어요~");
 cm.gainItem(4001128, -girl);
 cm.dispose();
} 
} else {
 cm.sendOk("#e#r화약통#k#n갯수를 확인해봐주세요");
 cm.dispose();
}
}
}