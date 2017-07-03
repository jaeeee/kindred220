/*
위치 : 리스항구 / 펭귄 항구
엔피시이름 : 푸로 - 리엔행
출발 : 104000000, 도착 : 140020300
*/
function start(){
	var txt = "아아, 지루하다... 배는 고래가 몰고 나는 한가롭게 하늘만 보면 되고... 저기, 심심한데 리엔에 대해 설명이라도 해줄까?\r\n"
	txt += "#L0##b응, 설명해줘\r\n";
	txt += "#L1#아니, 배나 잘 몰아."
	cm.sendSimple(txt);
}

var status = -1;

function action(mode,type,selection){
	if(mod) 
	if(status==0){
		if(selection == 0){
			cm.sendNext("리엔은 메이플 월드의 가장 큰 섬, 빅토리아 아일랜드 옆에 있는 아주 작은 섬이야. 정확한 위치는 리스항구에서 서쪽으로 1분 정도 고래를 타고 가면 도착하는 지점이라고 할까나.");
		}else if(selection == 1){
			cm.sendNext("쳇... 딱딱하게 굴긴.");
			cm.dispose();
		}
	}else if(status==1){
		cm.sendNextPrev("리엔은 북쪽 지역과 거리가 먼데도 불구하고 이상할 정도로 기온이 낮아서 항상 얼어붙어 있어. 사실 리엔 자체가 얼음으로 이루어진 섬이라고 할 수 있지. 이렇게 기후가 이상한 건 분명 인위적인 이유가 있다던데... 흠.");
	}else if(status==2){

		cm.sendNextPrev("얼음으로 된 섬이기에 리엔은 식물이 적어. 그나마도 열매가 달리는 식물은 거의 없지. 펭귄이면 몰라도 인간이 살기에는 좋지 않은 곳이야. 그렇기에 사람들이 거의 떠나버린 거겠지. 리엔에 사는 인간은 오직 한 명 뿐...");
	}else if(status==3){
		cm.sendNextPrev("하지만 그래도 리엔은 나름대로 활기차. 얼음 속에서 새로운 걸 발굴해내기를 기다리면서 열심히 일하는 펭귄들로 가득하니까.");
	}else if(status==4){
		cm.sendPrev("#b(푸로는 물 만난 고기처럼 수다를 떨었다. 어지간히 심심했나보다...)");
		cm.dispose();
	}
}