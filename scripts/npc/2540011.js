


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	Nell 에 의해 만들어 졌습니다.

	엔피시아이디 : 1033211

	엔피시 이름 : 엘프의 하프

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 (100000000)

	엔피시 설명 : 메소환전

/**
Purin (On Boat ) 1032009
**/

var status = 0;

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
 } else {
  if (status >= 2 && mode == 0) {
   cm.sendOk("ㅇㅅㅇ         ");
   cm.dispose();
   return;
  }
  if (mode == 1)
   status++;
  else
   status--;
  if (status == 0) {
   cm.sendNext("지금부터 라이프온라인\r\n#r파프니르,타일런트,큐브#k에대하여 알아봅시다.\r\n다음을 눌러주세요.");
  } else if (status == 1) {
                cm.sendOk("[1]#r#e파프니르무기#k와 #r#e타일런트#k는 구매가 가능합니다..\r\n[2]타일런트는 ALL상점-각종인기상점 에 있으며.\r\n#r#e파프니르는 35레벨 장비상자#k에서 얻습니다. \r\n[3]#r#e35레벨 장비상자#k는 ALL상점 - 강력한 무기상점 에서 구매가 가능합니다.\r\n[4]마지막으로 큐브외 놀긍혼도 인기상점 탭에있습니다. ");
                cm.dispose();
  } else if (selection == 1) {
   if (cm.getMeso() < 1000000000) {
   cm.sendOk("#r10억 메소가 없습니다.#k "); 
   cm.dispose();
   } else {
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainMeso(-1000000000); 
   cm.gainItem(4310059,1); 
   cm.dispose();
  }
  } else if (selection == 2) {
   if (cm.getMeso() < 2000000000) {
   cm.sendOk("#r20억 메소가 없습니다.#k "); 
   cm.dispose();
   } else {
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainMeso(-2000000000); 
   cm.gainItem(4310059,2); 
   cm.dispose();
  }
  } else if (selection == 3) {
  if(cm.haveItem(4310059,1) == false && cm.getMeso() >= 8000000000) { 
   cm.sendOk("화폐 1개가 없으시거나 거래시 메소최대량을 넘어 교환이 불가합니다.");
   cm.dispose();
  } else if(cm.haveItem(4310059,1) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4310059,-1);
   cm.gainMeso(1000000000);
   cm.dispose();
   }
  } else if (selection == 4) {
  if(cm.haveItem(4310059,2) == false && cm.getMeso() >= 7000000000) { 
   cm.sendOk("화폐 2개가 없으시거나 거래시 메소최대량을 넘어 교환이 불가합니다.");
   cm.dispose();
  } else if(cm.haveItem(4310059,2) == true) { 
   cm.sendOk("#r교환#k 되었습니다.");
   cm.gainItem(4310059,-2);
   cm.gainMeso(2000000000);
   cm.dispose();
   }
  }
 }
}


