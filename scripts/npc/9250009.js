 /*
비번 변경 by 자유인 (timeisruunin@nate.com)
*/

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var status = -1;
var account;
var pass;
var newpass;
var newpass1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
 cm.sendGetText("Please change your password. Please enter your ID.");
 } else if (status == 1) {
 account = cm.getText();
 cm.sendGetText("Please enter your password.");
 } else if (status == 2) {
 pass = cm.getText();
        var con = MYSQL.getConnection().prepareStatement("SELECT * FROM accounts WHERE id = ?");
 con.setInt(1,cm.getPlayer().getAccountID());
 var eq = con.executeQuery();
 eq.next();
 var name = eq.getString("name");
 var password = eq.getString("password");
 if ((account == name) && (pass == password)) {
 cm.sendGetText("#bLogin Successful!\r\n\r\n#kPlease enter a new password.");
 } else {
 cm.sendOk("#rLogin Failed! Please check again");
 cm.dispose();
 }
 } else if (status == 3) {
 newpass = cm.getText();
 if (newpass.split("").length<8) {
 cm.sendOk("Set over a six-digit password.");
 cm.dispose();
 } else {
 cm.sendGetText("Please enter your new password again.");
}
 } else if (status == 4) {
 var upd = MYSQL.getConnection().prepareStatement("UPDATE accounts SET password = ? WHERE name = ?");
 newpass1 = cm.getText();
 if (newpass == newpass1) {
 upd.setString(1,newpass);
 upd.setString(2,account);
 upd.executeUpdate();
 cm.sendOk("Your password has been changed successfully.\r\n#bbefore : "+pass+" -> present : "+newpass+"");
 cm.dispose();
 }else{
 cm.sendOk("Please check again your new password.");
 cm.dispose();
}
    }
}



