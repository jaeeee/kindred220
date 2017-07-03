var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	if(qm.haveItem(4000047,1)) {
	qm.sendOk("#b프리미엄 PC방#k 퀘스트를 완료하기 위해선 #d프리미엄PC방 혜택#k 매뉴를 선택해 주십시오");
	cm.dispose();
	} else {
	qm.sendNext("#b프리미엄 PC방#k 이란 보통 PC방에 접속하면 혜택을 받을수 있지만 #r스피릿 스타일#k 에서는 다릅니다. #b홍보 이벤트#k 에 참가함으로써 쉽게 참가할수 있습니다.");
			}
		} else if (status == 1) {
	qm.sendNext("#b홍보 이벤트#k 에 참가하고 나면 #b빨간돌륜군#k 님께서 #z4000047# 를 받을수 있습니다. #z4000047# 를 저에게 주시면 #b#z1142145#훈장#k 을 드리겠습니다.\r\n\r\n#e<프리미엄 PC방 훈장 추가옵션>#n\r\n#i1142145##b#z1142145#훈장#k 을 착용하고 사냥시 5%의 추가경험치를 획득할수 있습니다.\r\n#r게임 종료시 #z1142145#훈장 은 사라집니다.");
		} else if (status == 2) {
	qm.sendNext("#b프리미엄 PC방#k 이벤트는 무한 반복 퀘스트 입니다.");
	qm.dispose();
		}
	}
}