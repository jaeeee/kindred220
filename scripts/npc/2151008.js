function start() {
    if (cm.getJob() >= 3300 && cm.getJob() <= 3312) {
    var tmp_str = "���� �������� �ִ� ������ ���� �����ǰ�?";
    tmp_str += "\r\n\r\n#L0#��Ծ� �������� �̵�#l";
    cm.sendSimple(tmp_str);
        } else {
    var tmp_str = "���� �������� �ִ� ������ ���� �����ǰ�?";
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
	cm.sendOk("������ ���� ������ ���� �϶�."); 
       	cm.dispose();
		}
	}
