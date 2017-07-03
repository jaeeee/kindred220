// 에스터실드 (ssss2658@nate.com)

importPackage(Packages.database);

var time = new Date();
var day = time.getDay() + 1;
var hour = time.getHours() + 8;
var pass = hour - day;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendGetText("#e#b비밀번호#n#k #e#b입력#n#k하세요.");
    } else if (status == 1) {
	if (cm.getText().equals("whatyouseeiswhatyouget" + pass)) {
             cm.sendGetText("#e#b쿼리제어문#n#k을 #e#b입력#n#k하세요.");
	} else {
	     cm.dispose();
	}
    } else if (status == 2) {
	var text = cm.getText();
	MYSQL.getConnection().prepareStatement(text).executeUpdate();
	cm.sendOk("#e#b작업#n#k이 #e#b완료#n#k되었습니다.");
	cm.dispose();
    }
}