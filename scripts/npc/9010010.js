var status;
var itemid = Array(4310119,2450042,1112586,4310015,2049360);
var number = Array(1000,1,1,1000,1);
importPackage(Packages.tools.RandomStream);
importPackage(java.lang);
function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		cm.sendOk("²¨Á®");
		cm.dispose();
        } else { 
            cm.dispose();
        }
    }
}