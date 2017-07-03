/*

                          자쿰 폐광 1단계 아우라 스크립트입니다.
                          제작자 : 가군 (qor6101@naver.com)

*/
var select = -1;
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        if (cm.getPlayer().getEventInstance() == null) {
            cm.warp(280090000);
            cm.dispose();
            return;
        }
         cm.sendNext("폐광 동굴을 조사하러 오신 분들이군요. 여러분들은 최종 목표인 자쿰던전의 보스를 만나기 위해 필요한 물건을 입수하셔야 합니다. 그 물건을 얻으려면 우선은 물건의 재료를 얻는 것이 우선이겠지요. 재료중에 하나인 #b불의 원석#k을 바로 이곳에서 얻을 수 있습니다. 물론 쉬운 일은 아니지만 말이죠.");
    } else if (status == 1) {
         cm.sendNextPrev("이곳에는 수 많은 동굴로 통하는 입구가 있습니다. 동굴 안에는 상자들이 있는 상자를 파괴한 후 #b열쇠 7개#k를 모으셔야 합니다. 상자는 스킬 공격으로는 부술 수 없으며 오로지 일반 공격으로만 타격을 줄 수 있으니 주의해 주세요. 그 후 7개의 열쇠를 가장 안쪽 방에 있는 커다란 보물상자에 떨어뜨리면 #b불의 원석#k을 얻을 수 있을 겁니다. 떨어뜨린후 얼마간의 시간이 지나야 얻을 수 있으니 기다려 보세요.");
    } else if (status == 2) {
            cm.sendNextPrev("물론 모든 상자에 열쇠가 있는건 아닙니다. 생각치 못했던 일이 벌어질 수도 있으니 조심해야 하죠. 상자를 조사하다 보면 가끔 종이 문서가 나오는데 이것도 모아와 주시면 틀림없이 좋은 일이 있을 겁니다. 종이 문서는 30장 이상 모아오시면 됩니다. 제가 설명해 드릴수 있는건 여기까지군요.");
    } else if (status == 3) {
             var chat = "더 궁금한 점이 있으신가요?\r\n";
             chat += "\r\n#L0##b불의 원석#k을 가져왔습니다.";
             chat += "\r\n#L1#퀘스틑 포기하고 이 곳에서 나갑니다.";
             cm.sendSimple(chat);
    } else if (status == 4) {
        select = selection;
        if (select == 0) {
            if (!cm.isLeader()) {
                cm.sendOk("파티장이 아니시군요. 파티장이 제게 말을 걸어 진행할 수 있습니다.");
                cm.dispose();
                return;
            }
            if (!cm.haveItem(4001018)) {
                cm.sendOk("파티원들이 동굴에서 얻은 물건은 파티장이 모두 모아 저에게 주셔야 합니다. 다시 한 번 확인해 주세요.");
                cm.dispose();
                return;
            }
            var paper = cm.haveItem(4001015, 30);
            if (paper) {                
	        cm.sendYesNo("#b불의 원석 1개#k와 종이 문서 #b" + cm.itemQuantity(4001015) + "개#k를 모아와 주셨군요. 파티원들이 모으신 물건은 이게 전부가 맞습니까?");
               } else {
                cm.sendYesNo("#b불의 원석 1개#k는 무사히 가져오셨지만, #b종이 문서#k는 #r30개 이상 모으지 못하셨군요.#k 파티원들이 모으신 물건은 이게 전부가 맞습니까?");
	}
        } else if (select == 1) {
            cm.sendYesNo("포기하신다면 처음부터 다시 도전하셔야 할텐데... 게다가 파티가 모두 다 함께 진행하는 퀘스트이기 때문에 한 명이라도 도중에 나간다면 클리어가 어려울지도 모르는 일... 정말 나가시겠어요?");
        }
    } else if (status == 5) {
      cm.sendNext("좋습니다. 저 쪽에 생긴 포탈을 통해 아도비스가 있던 맵으로 돌아가실 수 있습니다. 포탈을 지나는 도중에 저에게 주신 #b불의 원석#k을 #b불의 원석 조각#k으로 만들어 파티원 각각에게 나누어 드립니다. 그럼 1단계를 클리어 하신것을 축하드립니다. 안녕히...");
    } else if (status == 6) {
	if (select == 0) {
            var paper = cm.haveItem(4001015, 30);
            var eim = cm.getPlayer().getEventInstance();
            cm.gainItem(4001018, -1);
            cm.givePartyItems(4031061, 1, cm.getClient().getChannelServer().getPartyMembers(cm.getParty()));
            if (paper) {
                cm.removeAll(4001015);
                cm.givePartyItems(2030007, 10, cm.getClient().getChannelServer().getPartyMembers(cm.getParty()));
            }
            var it = eim.getPlayers().iterator();
            while (it.hasNext()) {
                var chr = it.next();
                chr.setKeyValue("Quest_Zakum03", "1");
            }
	    cm.forceCompleteQuest(100001);
            eim.finishPQ();
            cm.dispose();
        } else if (select == 1) {
            var eim = cm.getPlayer().getEventInstance();
            if (!cm.isLeader()) {
                eim.leftParty(cm.getPlayer());
            } else {
                eim.disbandParty();
            }
      }
   }
}