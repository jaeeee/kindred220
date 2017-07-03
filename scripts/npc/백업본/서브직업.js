/*


RaceMS 전용 스크립트 입니다.


*/
 var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
if (cm.getPlayer().getSubclass() == 1) {
    cm.sendSimple ("#b안녕하세요?\r 단풍잎 온라인 #r경험자#n#k 정보를 알려주는 엔피씨 입니다.\r\n\r\n무엇이 궁금하십니까?\r\n\r\n" +"#k\r\n#L90##r[단풍잎 온라인]경험자란 ?#k");
}else if (cm.getPlayer().getSubclass() == 2) {
  cm.sendSimple ("#b안녕하세요?\r 단풍잎 온라인 #r메이커#n#k 정보를 알려주는 엔피씨 입니다.\r\n\r\n무엇이 궁금하십니까?\r\n\r\n" +"#k\r\n#L100##r[단풍잎 온라인]메이커란 ?#k"+"#k\r\n#L101##g[단풍잎 온라인]주문서 받기(하루1회)" + "#k\r\n#L102##g[단풍잎 온라인]주문서 지급받기");
}else {
cm.sendSimple ("#b안녕하세요?\r 단풍잎 온라인 서브직업 정보를 알려주는 엔피씨 입니다.\r\n현재 #h0#님의 부 직업은 없습니다. \r\n무엇이 궁금하십니까?\r\n\r\n" +"#k\r\n#L80##r[단풍잎 온라인]부 직업이란 ?#k" +"#k\r\n#L81##b[단풍잎 온라인]부 직업을 가지고싶습니다.#r");
}
      } else if (selection == 80) {
               cm.sendSimple (" 고르세요. #d" +
            "#k\r\n#L0##r부 직업이란 무엇인가요?" +
            "#k\r\n#L2##r부 직업은 바꿀수있나요?");
      } else if (selection == 81) {
if (cm.getPlayer().getRacePT() >= 1000 && cm.haveItem(2003548, 1)) {
               cm.sendSimple ("고르세요. #e#d" +
            "#k\r\n#L7##b살육자가 되고싶습니다." +
            "#k\r\n#L8##r메이커가 되고싶습니다.");
} else {
	cm.sendOk ("단풍잎 포인트가 부족하거나 각성의비약이 없습니다.\r\n단풍잎 포인트는 1000포인트가 필요하며\r\n 각성의 비약은 후원과 이벤트로만 얻으실수 있습니다.");
}
      } else if (selection == 90) {
               cm.sendSimple ("고르세요. #d" +
            "#k\r\n#L17##r경험자란 무엇인가요?" +
            "#k\r\n#L18##r경험자의 혜택은 무엇인가요?");
      } else if (selection == 100) {
               cm.sendSimple ("고르세요. #d" +
            "#k\r\n#L111##r메이커란 무엇인가요?" +
            "#k\r\n#L112##r메이커의 혜택은 무엇인가요?");
      } else if (selection == 0) {
        cm.sendOk ("\r\n #r부 직업#b이란!\r\n제2의 전직을 말하며 서브직업에 따라 고유한 혜택이있습니다.\r\n\r\n#r#e살육자#k#n는 사냥시 경험치와,공격력,마력증가 혜택을 볼수있습니다.\r\n#r#e메이커#k#n는 주문서효과에서 좋은 혜택을받으실수있습니다.\r\n\r\n#b서브직업은 레이스포인트와 각성의 비약이 필요합니다.\r\n#r#e각성의비약#n#k이란 후원이나 이벤트로만 얻으실 수 있습니다.");
	cm.dispose();
      } else if (selection == 2) {
        cm.sendOk ("\r\n #r#e 서브직업은 바꾸실 수 없습니다.");
	cm.dispose();
      } else if (selection == 17) {
        cm.sendOk ("\r\n#r#e<경험자>#n#k란 단풍잎 온라인에서 주어지는 제2의 직업이며 그의맞는 혜택이 주어집니다.");
	cm.dispose();
      } else if (selection == 18) {
	cm.sendOk ("\r\n#r#e<경험자>#n#k의 혜택은 전체채팅이 깔쌈하게 바뀌며 몬스터사냥시 추가경험치 30%획득\r\n그리고 경험자의 마족 버프를 획득합니다. 경험자 버프는 초기접속시 공마30이 오르며 그이후1시간이흐르면 60씩오르게됩니다.");
	cm.dispose();
      } else if (selection == 111) {
        cm.sendOk ("\r\n#r#e<메이커>#n#k란 단풍잎 온라인에서 주어지는 제2의 직업이며 그의맞는 혜택이 주어집니다.");
	cm.dispose();
      } else if (selection == 112) {
	cm.sendOk ("\r\n#r#e<메이커>#n#k의 혜택은 전체채팅이 깔쌈하게 바뀌며 주문서를 바를시 확률이 10% 증가합니다.\r\n주문서작시 랜덤으로 부가스텟을얻으실수있으며 하루에1번씩 #r#e방어구강화주문서#n#k를 얻으실수있습니다.\r\n#r#e방어구강화 주문서#n#k란 방어구에만지를수있으며 공마5~10 올스텟10~20 이랜덤으로 오르게됩니다.");
	cm.dispose();
      } else if (selection == 7) {
	cm.sendOk ("\r\n#r#e<경험자>#n#k가 되었습니다. 자세한정보를 알고싶다면 다시 말을 걸어주세요");
	cm.getPlayer().setSubclass(1);
	cm.getPlayer().cm.addRacePT(-1000);
	cm.getPlayer().cm.gainItem(2003548, -1);
	cm.dispose();
      } else if (selection == 8) {
	cm.sendOk ("\r\n#r#e<메이커>#n#k가 되었습니다. 자세한정보를 알고싶다면 다시 말을 걸어주세요");
	cm.getPlayer().setSubclass(2);
	cm.getPlayer().cm.addRacePT(-1000);
	cm.getPlayer().cm.gainItem(2003548, -1);
	cm.dispose();
      } else if (selection == 102) {
	cm.dispose();
	cm.openNpc(2040001);
	return;
      } else if (selection == 101) {
	cm.dispose();
	cm.openNpc(9010033);
	return;
}
}
}