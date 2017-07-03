//1012112 토리
function start(){
	var txt = "#e<파티퀘스트 : 월묘의 떡>#n\r\n";
	txt += "안녕하세요? 저는 토리라고 해요. 달맞이꽃 언덕에 가보셨나요?";
	txt += "이 안은 달맞이꽃이 피어나는 아름다운 언덕이에요.\r\n";
	txt += "그런데 그 곳에 살고있는 어흥이라는 호랑이가 몹시 배가 고파 먹을 것을 찾고 있다고 하네요. ";
	txt += "여행자님께서 달맞이꽃 언덕으로 가서 파티원들과 함께 힘을 모아 어흥이를 도와주지 않으시겠어요?\r\n\r\n#b"
	txt += "#L0#달맞이꽃 언덕으로 간다.\r\n";
	txt += "#L1#떡 모자를 받고 싶어요.\r\n";
	txt += "#L2#달맞이꽃 언덕에 대해 설명을 듣는다.\r\n";
	txt += "#L3#오늘 남은 도전 횟수를 알고 싶어요.";
	cm.sendSimple(txt);
}

var status = -1;
var sel;

function startEvent(event){
	if (cm.getParty() != null) {
		if(cm.getDisconnected(event) != null && cm.getPartyMembers().size()>=2) {
			cm.getDisconnected(event).registerPlayer(cm.getPlayer());
		} else if(cm.isLeader()) {
			cm.getEventManager(event).startInstance(cm.getParty(), cm.getMap());
			cm.warp(910010000);
		} else {
			cm.sendOk("보름달의 신비한 기운이 감도는 곳이므로 혼자서는 들어갈 수 없답니다. 이 안에 들어가고 싶다면, 당신이 속한 파티의 파티장이 저에게 말을 걸어주셔야 해요. 파티장에게 부탁해 보세요.");
		}
	} else {
		cm.sendNext("여행자님이 속한 파티원이 2명이상이 아니라서 입장하실 수 없어요. 레벨 30이상의 2명이상 파티원이 있어야 입장하실 수 있으니 확인하시고 다시 저에게 말을 걸어주세요.");
	}
	cm.dispose();
}


function trade(reward,quantity){
	if(cm.canHold(reward)){
		if(cm.haveItem(4001101,quantity)){
			cm.gainItem(4001101,-quantity);
			cm.gainItem(reward,1);
			cm.sendNext("당신이 주신 떡! 맛있게 잘 먹겠습니다~");
		}else{
			cm.sendOk("떡을 가지고 있는게 확실한가요? 괜히 놀리지 마세요.");
		}
	}else{
		cm.sendOk("인벤토리 공간이 부족해요.");
	}
	cm.dispose();
}

function action(mode,type,selection){
	if(mode==1){status++;}
	else{status--;cm.dispose();}

	if(status==0){
		sel = selection;
		if(selection==0){
			startEvent("이벤트");
			cm.dispose();
		}else if(selection==1){
			cm.sendSimple("어머! 떡 모자를 갖고 싶으시다구요? 절 위해 월묘의 떡을 주시면 모자를 드릴께요. 제게 몇 개를 주실 껀가요?\r\n#b#L10# 월묘의 떡 10개 - 머리 위에 떡 하나 \r\n#L50# 월묘의 떡 50개 - 머리 위에 떡 하나 ");
		}else if(selection==2){
			cm.sendOk("#e<파티퀘스트 : 월묘의 떡>#n\r\n만월의 #b달맞이꽃 언덕#k에만 등장한다는 신비한 토끼 월묘. #b어흥이#k에게 #r월묘의 떡#k을 구해줄 모험가들을 #b헤네시스공원#k의 #b토리#k가 찾고 있어요.월묘를 만나고 싶으면 달맞이꽃 씨앗을 심어 보름달을 불러내야 해요. #r떡 10개#k를 다 만들 때까지 난폭한 동물들에게서 월묘를 안전하게 지켜주세요.\r\n- #e레벨#n : 30레벨 이상 (추천레벨 : 30 ~ 49)\r\n- #e제한시간#n : 10분\r\n- #e참가인원#n : 2 ~ 6명\r\n- #e획득 아이템1#n : #i1003418##t1003418#\r\n　 　 　　　　 　#b(떡 10개를 토리에게 주면 획득 가능)#k\r\n- #e획득 아이템2#n : #i1003419##t1003419#\r\n　　　  　　　　 #b(떡 50개를 토리에게 주면 획득 가능)#k");
			cm.dispose();
		}else if(selection==3){
			cm.sendNext("오늘 남은 도전 횟수는 @@회입니다.");
			cm.dispose();
		}
	}else if(status==1){
		if(sel==1){
			selection==10?trade(1003418,10):trade(1003419,50);
		}
	}
}

