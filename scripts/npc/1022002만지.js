var arr = new Array(new Array(1142558,1, 200), new Array(3700049, 1, 50), new Array(2049704, 1, 30), new Array(2470000, 1, 20), new Array(4310034, 1, 10), new Array(4001126, 1000, 5));

function buyItem(item, quantity, cost) {
	if(cm.itemQuantity(4310057) >= cost){
		cm.gainItem(item, quantity);
		cm.gainItem(4310057, -cost);
		cm.sendOk("��ȯ�� �Ϸ�Ǿ����ϴ�.");
	}else{
		cm.sendOk("������ �����մϴ�.");
	}
}

var status = -1;

function start(){
	var tt = "��ȯ�� ���ϴ� �������� �������ּ���.\r\n���� �������ִ� #z4310057# ���� : #b"+cm.itemQuantity(4310057)+"#k\r\n";
	tt += "���佺Ʈ ������ ������⿡�� �¸��Ͻø� ���� �� �ֽ��ϴ�.\r\n";
	for(var i=0;i<arr.length;i++){
		tt += "#L"+i+"##i"+arr[i][0]+"#\t#b(#z"+arr[i][0]+"#) - #k"+arr[i][1]+"�� / #e���� : #n"+arr[i][2]+"��\r\n";
	}
	cm.sendSimple(tt);
}

function action(m,t,s){
	buyItem(arr[s][0],arr[s][1],arr[s][2]);
}