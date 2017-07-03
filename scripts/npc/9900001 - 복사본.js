/*
	바카라
*/

importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = -1;

var heart = "#r♥#k";
var clover = "♣";
var diamond = "#r◆#k";
var spade = "♠"

var rand1 = Math.floor(Math.random()*12+1);
var num_p1 = rand1;
if (rand1 == 11){
    rand1 = "J";
    }else if(rand1 == 12){
    rand1 = "Q";
    }else if(rand1 == 13){
    rand1 = "K";
    }else if(rand1 == 1){
    rand1 = "A";
    }else if(rand1 == 10){
    num_p1 = 0;
    }

var rand2 = Math.floor(Math.random()*3+1);
if (rand2 == 1){
    rand2 = heart;
    }else if(rand2 == 2){
    rand2 = clover;
    }else if(rand2 == 3){
    rand2 = diamond;
    }else if(rand2 == 4){
    rand2 = spade;
}

var rand3 = Math.floor(Math.random()*12+1);
var num_b1 = rand3;
if (rand3 == 11){
    rand3 = "J";
    }else if(rand3 == 12){
    rand3 = "Q";
    }else if(rand3 == 13){
    rand3 = "K";
    }else if(rand3 == 1){
    rand3 = "A";
    }else if(rand3 == 10){
    num_b1 = 0;
    }

var rand4 = Math.floor(Math.random()*3+1);
if (rand4 == 1){
    rand4 = heart;
    }else if(rand4 == 2){
    rand4 = clover;
    }else if(rand4 == 3){
    rand4 = diamond;
    }else if(rand4 == 4){
    rand4 = spade;
}

var rand5 = Math.floor(Math.random()*12+1);
var num_p2 = rand5;
if (rand5 == 11){
    rand5 = "J";
    }else if(rand5 == 12){
    rand5 = "Q";
    }else if(rand5 == 13){
    rand5 = "K";
    }else if(rand5 == 1){
    rand5 = "A";
    }else if(rand5 == 10){
    num_p2 = 0;
    }

var rand6 = Math.floor(Math.random()*3+1);
if (rand6 == 1){
    rand6 = heart;
    }else if(rand6 == 2){
    rand6 = clover;
    }else if(rand6 == 3){
    rand6 = diamond;
    }else if(rand6 == 4){
    rand6 = spade;
}

var rand7 = Math.floor(Math.random()*12+1);
var num_b2 = rand7;
if (rand7 == 11){
    rand7 = "J";
    }else if(rand7 == 12){
    rand7 = "Q";
    }else if(rand7 == 13){
    rand7 = "K";
    }else if(rand7 == 1){
    rand7 = "A";
    }else if(rand7 == 10){
    num_b2 = 0;
    }

var rand8 = Math.floor(Math.random()*3+1);
if (rand8 == 1){
    rand8 = heart;
    }else if(rand8 == 2){
    rand8 = clover;
    }else if(rand8 == 3){
    rand8 = diamond;
    }else if(rand8 == 4){
    rand8 = spade;
}

var rand9 = Math.floor(Math.random()*12+1);
var num_p3 = rand9;
if (rand9 == 11){
    rand9 = "J";
    }else if(rand9 == 12){
    rand9 = "Q";
    }else if(rand9 == 13){
    rand9 = "K";
    }else if(rand9 == 1){
    rand9 = "A";
    }else if(rand9 == 10){
    num_p3 = 0;
    }

var rand10 = Math.floor(Math.random()*3+1);
if (rand10 == 1){
    rand10 = heart;
    }else if(rand10 == 2){
    rand10 = clover;
    }else if(rand10 == 3){
    rand10 = diamond;
    }else if(rand10 == 4){
    rand10 = spade;
}

var rand11 = Math.floor(Math.random()*12+1);
var num_b3 = rand11;
if (rand11 == 11){
    rand11 = "J";
    }else if(rand11 == 12){
    rand11 = "Q";
    }else if(rand11 == 13){
    rand11 = "K";
    }else if(rand11 == 1){
    rand11 = "A";
    }else if(rand11 == 10){
    num_b3 = 0;
    }

var rand12 = Math.floor(Math.random()*3+1);
if (rand12 == 1){
    rand12 = heart;
    }else if(rand12 == 2){
    rand12 = clover;
    }else if(rand12 == 3){
    rand12 = diamond;
    }else if(rand12 == 4){
    rand12 = spade;
}

	if (num_p1 >= 10){
	num_p1 = 0;
	}
	if (num_b1 >= 10){
	num_b1 = 0;
	}
	if (num_p2 >= 10){
	num_p2 = 0;
	}
	if (num_b2 >= 10){
	num_b2 = 0;
	}
var total_p1=num_p1;
var total_b1=num_b1;
var total_p2=num_p1+num_p2;
var total_b2=num_b1+num_b2;
var total_p3=num_p1+num_p2+num_p3;
var total_b3=num_b1+num_b2+num_b3;
var score_p=0;
var score_b=0;

var sel1;
var sel2;
var sel3;
var sel4;

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
	var leaf = cm.itemQuantity(4001126);
	cm.sendGetText("\r\n안녕하세요 #e#d#h0##k#n님. 바카라에 오신것을 환영합니다.\r\n#r#e플레이어(Player)#n#k와 #r#e뱅커(Banker)#k#n에 배팅하셔서 승리하시면 각각 #e#b2배#k#n의 단풍잎을 얻을 수 있고, #e#r비긴다(Tie)#n#k에 배팅하셔서 승리하시면 #e#b5배#k#n의 단풍잎을 얻을 수 있습니다.\r\n#r※주의 : 중간에 종료하시면 아무것도 얻을 수 없습니다.#k\r\n\r\n#b현재 소지중인 단풍잎 : "+leaf+"#k\r\n\r\n몇개의 단풍잎을 거시겠습니까?")
    } else if (status == 1) {
	var text = cm.getText();
	if (text > leaf){
	cm.sendOk("소시중인 단풍잎보다 더 많은 단풍잎을 배팅했습니다.");
	cm.dispose();
	} else if (text < 100){
	cm.sendOk("최소 100개 이상의 단풍잎을 배팅해야 합니다.");
	cm.dispose();
	} else if (text >5000){
	cm.sendOk("최대 3000개 까지밖에 배팅할 수 없습니다.");
	cm.dispose();
	} else {
	var leaf = cm.itemQuantity(4001126);
        var bacara = "#k\r\n"+text+"개의 단풍잎을 배팅하셨습니다.\r\n";
	bacara += "#L1#플레이어(Player)에 배팅\r\n";
	bacara += "#L2#뱅커(Banker)에 배팅\r\n";
	bacara += "#L3#비긴다(Tie)에 배팅\r\n";
	bacara += "#L4#기권한다"
	cm.sendSimple(bacara);
	}
    } else if (status == 2) {
	sel1 = selection;
	var text = cm.getText();
	var batt = "";
	cm.gainItem(4001126, -text)
	if (selection == 1){
	batt += "당신은 #r플레이어#k를 선택하셨습니다.\r\n";
	if (text > 999){
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님이 바카라에서 플레이어에 "+text+"개의 단풍잎을 배팅하셨습니다!"));
	}
	batt += "플레이어 : "+rand2+""+rand1+"　("+total_p1+")\r\n";
	batt += "뱅　　커 : "+rand4+""+rand3+"　("+total_b1+")";
	}if (selection == 2){
	batt += "당신은 #r뱅커#k를 선택하셨습니다.\r\n";
	if (text > 999){
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님이 바카라에서 뱅커에 "+text+"개의 단풍잎을 배팅하셨습니다!"));
	}
	batt += "플레이어 : "+rand2+""+rand1+"　("+total_p1+")\r\n";
	batt += "뱅　　커 : "+rand4+""+rand3+"　("+total_b1+")";
	}if (selection == 3){
	batt += "당신은 #r타이#k를 선택하셨습니다.\r\n";
	if (text > 999){
	WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님이 바카라에서 타이에 "+text+"개의 단풍잎을 배팅하셨습니다!"));
	}
	batt += "플레이어 : "+rand2+""+rand1+"　("+total_p1+")\r\n";
	batt += "뱅　　커 : "+rand4+""+rand3+"　("+total_b1+")";
	}if (selection == 4){
	cm.gainItem(4001126, text);
	batt += "안녕히 가세요. 배팅하신 단풍잎은 다시 돌려드립니다."
	cm.dispose();
	}
	cm.sendOk(batt);
    } else if (status == 3) {
	sel2 = sel1;
	if (total_p2 >= 10 && total_p2 < 20){
	total_p2 = total_p2 - 10;
	}else if (total_p2 >= 20){
	total_p2 = total_p2 - 20;
	}
	if (total_b2 >= 10 && total_b2 < 20){
	total_b2 = total_b2 - 10;
	}else if (total_b2 >= 20){
	total_b2 = total_b2 - 20;
	}
	var batt = "";
	var batt = "플레이어 : "+rand2+""+rand1+" / "+rand6+""+rand5+"　("+total_p2+")\r\n";
	batt += "뱅　　커 : "+rand4+""+rand3+" / "+rand8+""+rand7+"　("+total_b2+")";　　
	cm.sendOk(batt);　
    } else if (status == 4) {
	sel3 = sel2;
	if (total_p3 >= 10 && total_p3 < 20){
	total_p3 = total_p3 - 10;
	}else if (total_p3 >= 20){
	total_p3 = total_p3 - 20;
	}
	if (total_b3 >= 10 && total_b3 < 20){
	total_b3 = total_b3 - 10;
	}else if (total_b3 >= 20){
	total_b3 = total_b3 - 20;
	}
	var batt = "";
	var batt = "플레이어 : "+rand2+""+rand1+" / "+rand6+""+rand5+" / "+rand10+""+rand9+"　("+total_p3+")\r\n";
	batt += "뱅　　커 : "+rand4+""+rand3+" / "+rand8+""+rand7+" / "+rand12+""+rand11+"　("+total_b3+")";　
	cm.sendOk(batt);　
    } else if (status == 5) {
	sel4 = sel3;
	var text = cm.getText();
	var total_p = num_p1+num_p2+num_p3;
	var total_b = num_b1+num_b2+num_b3;
	var batt = "";

	if (total_p3>total_b3) {
	batt += "플레이어가 이겼습니다.\r\n";
	if (sel4 > 1){
	batt += "단풍잎을 잃었습니다.";
		if(text > 999){
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님께서 뱅커에 배팅하여 "+text+"개의 단풍잎을 잃으셨습니다."));
		}
	} else if (sel4 == 1){
	cm.gainItem(4001126, text*3);
	batt += ""+text*2+"개의 단풍잎을 얻었습니다."
		if(text > 999){
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님께서 플레이어에 배팅하여 "+text*2+"개의 단풍잎을 획득하셨습니다!"));
		}
	}
	}
	else if (total_p3<total_b3) {
	batt += "뱅커가 이겼습니다.\r\n";
	if (sel4 == 1 || sel4 == 3){
	batt += "단풍잎을 잃었습니다.";
		if(text > 999){
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님께서 플레이어에 배팅하여 "+text+"개의 단풍잎을 잃으셨습니다."));
		}
	} else if (sel4 == 2){
	cm.gainItem(4001126, text*3);
	batt += ""+text*2+"개의 단풍잎을 얻었습니다."
		if(text > 999){
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님께서 뱅커에 배팅하여 "+text*2+"개의 단풍잎을 획득하셨습니다!"));
		}
	}

	}else if (total_p3==total_b3){
	batt += "비겼습니다.\r\n";
	if (sel4 < 3){
	batt += "비겼기 때문에 배팅하신 단풍잎은 다시 돌려드리겠습니다.";
	} else if (sel4 == 3){
	cm.gainItem(4001126, text*6);
	batt += ""+text*5+"개의 단풍잎을 얻었습니다."
		if(text > 999){
		WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6, ""+cm.getPlayer().getName()+"님께서 타이에 배팅하여 "+text*5+"개의 단풍잎을 획득하셨습니다!"));
		}
	}
	cm.gainItem(4001126, text);
	}
	
	cm.sendOk(batt);
	cm.dispose();
	}else{
	cm.sendOk("안녕히 가십시오");
	cm.dispose();
	}
}









