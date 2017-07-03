var status = -1;

var npcs = new Array("³îÀå³îÈ¥ »óÁ¡","ÈÆÀå»óÁ¡","¹îÁö»óÁ¡","¹ÝÁö»óÁ¡","¾î±úÀå½Ä","±Í°ÉÀÌ","¸ñ°ÉÀÌ","¾È°æ");
var shops = new Array(13,5,8,7,9,10,11,12);

function start() {
	action(1,0,0);
}

function action(mode, type, selection) {
if (mode == 1) { 
    status++;
} else { 
    cm.dispose(); 
    return;
}
if (status == 0) {
        try { 
	var chat = "»óÁ¡À» ¼±ÅÃÇÏ¼¼¿ä.\r\n";
	for (var i = 0; i < npcs.length; i++) {
		chat += "#L"+i+"#"+npcs[i];
	}
	cm.sendSimple(chat);
        } catch (e) {
            cm.sendOk(e);
            cm.dispose();
        }
} else if (status == 1) {
	cm.openShop(shops[selection]);
	cm.dispose();
}
}	