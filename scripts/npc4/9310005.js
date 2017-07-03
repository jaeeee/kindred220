/*
제작 : 퐁퐁(pongpong___@naver.com)
*/

var status = -1;

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
        	cm.TimeMoveMap(931000610, 1000000, 120);
		cm.sendOk("넌 서버규칙에 위반되는 비매너 적인 행동을 했군. 이곳에서 \r\n#b2분#k동안 반성하고있어! 그리고 명심해\r\n#r강제종료를 하거나 나를 다시 클릭할경우 처음부터 다시 #b2분#k을 기다려야하니 후회말고 그냥기다려#k\r\n그러게 왜 그런짓을 하고그러는지 원.. 반성이나해!!#k");
		cm.dispose();
	}
		
    }
