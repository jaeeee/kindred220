function start() {
    if (cm.getJob() >= 3300 && cm.getJob() <= 3312) {
    var tmp_str = "나의 형제들이 있는 곳으로 가고 싶은건가?";
    tmp_str += "\r\n\r\n#L0#재규어 서식지로 이동#l";
    cm.sendSimple(tmp_str);
        } else {
    var tmp_str = "나의 형제들이 있는 곳으로 가고 싶은건가?";
    cm.sendNext(tmp_str);
            cm.dispose();
        }
}

function action(mode, type, selection) {
	cm.dispose();
       if (selection == 0) {
        cm.warp(931000500);
        cm.dispose();
	} else {
	cm.sendOk("언제든 가고 싶으면 말을 하라."); 
       	cm.dispose();
		}
	}
