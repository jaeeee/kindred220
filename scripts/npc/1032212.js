/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Pure Online Development Source Script)

	통수킹창용 에 의해 만들어 졌습니다.

	엔피시아이디 : 9000178

	엔피시 이름 : 정체불명의 마법사

	엔피시가 있는 맵 : 헤네시스 : 헤네시스 (100000000)

	엔피시 설명 : 영혼연구가
        QS2 += "\r\n#fUI/UIWindow2.img/MapleStyle/RewardPopup/backgrnd2#\r\n"

*/

var status = 0;
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage (java.util);
importPackage (Packages.tools);
importPackage (Packages.server.quest);
importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(Packages.tools.RandomStream);

var selected = 0;
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
        var str = "안녕하세요? 반갑습니다. 요원 N 이라고 합니다.\r\n저는 #b코어온라인#k의 #r라이딩 퀘스트#k 요원으로 발령받았어요.#b\r\n";
        if (!cm.haveItem(1022224, 1)&& !cm.haveItem(1022225, 1)&& !cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n#L1#[첫번째] 초보 요원이 되고 싶습니다.#l\r\n\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n\r\n      완료할수있는 퀘스트가없습니다.#l\r\n";

        } else if (cm.haveItem(1022224, 1) && !cm.haveItem(1022225, 1)&& !cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n#L2#[두번째] 상급 요원이 되고 싶습니다..#l\r\n\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n#L11# [첫번째] 초보 요원이 되자! (완료)#l\r\n";

        } else if (cm.haveItem(1022225, 1) && !cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n#L3#[마지막] 베테랑 요원이 되고 싶습니다#l\r\n\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n#L12# [두번째] 상급 요원이 되자! (완료)#l\r\n";

        } else if (cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n\r\n      수행할수있는 퀘스트가없습니다.#l\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n#L13# [마지막] 베테랑 요원이 되자! (완료)#l\r\n";

        }
        cm.sendSimple(str);
     } else if (status == 1) {
        if (selection == 999) {
        if(cm.getQuestStatus(31229) == 2 && cm.getPlayer().getKeyValue("QUEST1") == null) { 
        cm.gainItem(2430368, 1);
        cm.gainItem(5062000, 30);
        cm.gainItem(2048709, 2);
        cm.getPlayer().setKeyValue("QUEST1", "1");
        cm.dispose();
      } else {
        cm.sendOk("이미 보상을 받으셨거나 아직 스토리퀘스트를 완료하지 못하셨습니다.");
        cm.dispose();
      }

          } else if (selection == 1) {
                    cm.dispose();
                    cm.warp(109060001);
                    cm.sendOk("몬스터를 잡으면 일정 확률로 #i1022224#가 나옵니다.\r\n#i1022224#를 흭득하시게되면 퀘스트를 완료할 수 있습니다.\r\n또 다음 상급 요원 퀘스트를 진행할 수 있는 권한을 얻습니다.\r\n완료시 #i2430794# 흭득, 결국 님은 노가다의 구렁텅이에 빠진겁니다!");

          } else if (selection == 2) {
                    cm.dispose();
                    cm.warp(109060003);
                    cm.sendOk("몬스터를 잡으면 일정 확률로 #i1022225#가 나옵니다.\r\n#i1022225#를 흭득하시게되면 퀘스트를 완료할 수 있습니다.\r\n또 다음 베테랑 요원 퀘스트를 진행할 수 있는 권한을 얻습니다.\r\n완료시 #i2430242# 흭득, 결국 님은 노가다의 구렁텅이에 빠진겁니다!");

          } else if (selection == 3) {
                    cm.dispose();
                    cm.warp(109060005);
                    cm.sendOk("몬스터를 잡으면 일정 확률로 #i1022226#가 나옵니다.\r\n#i1022226#를 흭득하시게되면 퀘스트를 완료할 수 있습니다.\r\n완료시 #i2430243# 흭득, 결국 님은 노가다의 구렁텅이에 빠진겁니다!");

         } else if (selection == 11) {
                if (cm.haveItem(1022224, 1)) {
                    cm.teachSkill(80001449,1,1);
                    cm.sendOk("#i2430794# 원하시던 라이딩이 맞으신가요?\r\n라이딩은 스킬탭에서 찾아보실 수있어요.");
                } else {
                    cm.sendOk("#i1022224##k 아직 재료가 부족해요");
                }
		    cm.dispose();
         } else if (selection == 12) {
                if (cm.haveItem(1022225, 1)) {
                    cm.teachSkill(80001450,1,1);
                    cm.sendOk("#i2430242# 원하시던 라이딩이 맞으신가요?\r\n라이딩은 스킬탭에서 찾아보실 수있어요.");
                } else {
                    cm.sendOk("#i1022225##k 아직 재료가 부족해요");
                }
		    cm.dispose();
         } else if (selection == 13) {
                if (cm.haveItem(1022226, 1)) {
                    cm.teachSkill(80001451,1,1);
                    cm.sendOk("#i2430243# 원하시던 라이딩이 맞으신가요?\r\n라이딩은 스킬탭에서 찾아보실 수있어요.");
                } else {
                    cm.sendOk("#i1022226##k 아직 재료가 부족해요");
                }
		    cm.dispose();
      }
    }
  }
}
