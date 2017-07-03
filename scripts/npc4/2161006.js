
var status = 0;
var points;
var sel;
var sel2;
var itemList = Array (1002357,1003112,1002971,1052202,1003621,1052526,1003622,1052527,1122000,1122076,1402179,1402180); // 아이템 목록 
var number = Array (50,80,60,60,1000,1000,1500,1500,1000,2000,3000,5000);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (status <= 2 && mode == 0) {
            cm.dispose();
            return;
        }  
        if (mode == 0) {
            cm.dispose();
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
             cm.gainItem(2022719, 1);
	     cm.warp(100000000);
             cm.sendOk("오오.. 교도관 아나를 퇴치하셨군요.. 이 은혜를 어떻게 갚아야할지, 이건 자그마한 저의 보상이니 부디 받아주십쇼")
            }
	}
 }
