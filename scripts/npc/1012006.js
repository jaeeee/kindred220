var map = new Array(100000202, 220000006, 910130000, 910130001, 910130100, 910130101, 910130102);

function start() {
	var ask = "���� ���ðڽ��ϱ�?\r\n#b";
	var str = "";
	for (var i=0;i<map.length;i++){
	if(map[i]/900000000 >= 1){
		str = "�γ��ǽ�";
	}
	if(cm.getPlayer().getMapId() == map[i])
		ask += "#L100000202#��� �� ��å��\r\n"
	else
		ask += "#L"+map[i]+"#"+str+"#m"+map[i]+"#\r\n";
	}

	cm.sendSimple(ask);
}

function action(m,t,s) {
	cm.dispose();
	cm.warp(s);
}