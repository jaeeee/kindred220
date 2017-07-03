importPackage(Packages.client);
importPackage(Packages.tools);

var status = -1;
var random1 = 1 + Math.floor(Math.random() * 100 - 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
        else
        status--;

        if (status == 0) {
	    var chat = "도박을 하기 위해선 #r#r1억#k#k 필요하며, 도박에서 #b질 경우#k에는 #r1억#k을 잃게 되고 #b이길 경우#k에는 + #r2억#k을 얻어 간다";
	    chat += "#d\r\n\r\n#L0#돈을 걸고 도박을 하겠습니다.#l";
	    chat += "#d\r\n#L1#도박을 하지 않겠습니다.#l";
	    cm.sendSimple(chat);

             } else if (status == 1) {
                if (selection == 0) {
		  if (cm.getPlayer().getMeso() >= 100000000) {
		  if (random1 > 2) {
		  cm.sendOk("내가 이겼네? 이돈은 내 거다.");
		  cm.gainMeso(-100000000);
		  cm.dispose();
             } else {
		  cm.sendOk("네가 이기다니. 다음에는 이런 경우가 없을 거다.");
		  cm.gainMeso(200000000);
		  cm.dispose();
		}
             } else {
		  cm.sendOk("돈이 없는 게 어디서 도박을 하겠다고 냉큼 나가라");
		  cm.dispose();
		}
             } else if (selection == 1) {
		  cm.sendOk("이길 경우 인생역전을 하게 되는데 안 하겠다니 뭐 난 말리지 않겠어");
		  cm.dispose();
		}
	}
}
}
