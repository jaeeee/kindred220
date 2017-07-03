


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
   cm.sendNext("지금부터 타임온라인\r\n#r에디셔널 주문서 와 큐브에 대해 알아봅시다..\r\n다음을 눌러주세요.");
  } else if (status == 1) {
                cm.sendOk("[1]#r#e에디셔널주문서#k는 바르면 #b레어~레전드리#k\r\n #r옵션이 랜덤#k으로 뜹니다.\r\n[2]여기서 #b레어#k가 뜬다면 #r큐브 한개를#k 바를시\r\n #r에디셔널옵션이 사라집니다#k.. \r\n이럴땐 #b다시 주문서를 바릅시다#k. \r\n[3]#r레어가 뜬다면 80%확률로 옵션이사라 지고#k. \r\n운좋다면 #r레어or유니크#k가 됩니다.\r\n[4]#r유니크와 레전드리#k가 뜬다면 80%확률로 \r\n#r유니크는 에픽으로. 레전드리는 유니크로 변합니다#k.\r\n 이때 운좋다면 #b방무뎀이나 보공옵션#k을 얻을수있습니다.[5]#r그럼 그만#k 해주시면되요.\r\n 큐브지를시#r옵션이 떨어지는\r\n 확률은 80%#k로 보시면되고하나씩천천히보세요.  ");
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


