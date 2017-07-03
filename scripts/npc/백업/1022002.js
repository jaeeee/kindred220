var arr = new Array(new Array(1142558,1, 200), new Array(3700049, 1, 50), new Array(2049704, 1, 30), new Array(2470000, 1, 20), new Array(4310034, 1, 10), new Array(4001126, 1000, 5));

function buyItem(item, quantity, cost) {
	if(cm.itemQuantity(4310057) >= cost){
		cm.gainItem(item, quantity);
		cm.gainItem(4310057, -cost);
		cm.sendOk("교환이 완료되었습니다.");
	}else{
		cm.sendOk("코인이 부족합니다.");
	}
}

var status = -1;

function start(){
	var tt = "교환을 원하는 아이템을 선택해주세요.\r\n현재 가지고있는 #z4310057# 갯수 : #b"+cm.itemQuantity(4310057)+"#k\r\n";
	tt += "템페스트 코인은 술래잡기에서 승리하시면 얻을 수 있습니다.\r\n";
	for(var i=0;i<arr.length;i++){
		tt += "#L"+i+"##i"+arr[i][0]+"#\t#b(#z"+arr[i][0]+"#) - #k"+arr[i][1]+"개 / #e가격 : #n"+arr[i][2]+"개\r\n";
	}
	cm.sendSimple(tt);
}

function action(m,t,s){
	buyItem(arr[s][0],arr[s][1],arr[s][2]);
}