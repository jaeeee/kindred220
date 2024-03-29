/* 자쿰 본섭화 스크립트
   만든이 : 가군(qor6101@naver.com) */

 var status = 0;
 var selectioned = 0;
 var selectiones = 0;
 var selectionet = 0;

 

 function start() {
     status = -1;
     action(1, 0, 0);
 }

 

 function action(mode, type, selection) {
     if (mode == -1) {
         cm.dispose();
     } else {
         if (mode == 0 || (mode == 0 && status == 1)) {
             cm.sendNext("그렇군... 하지만 언제라도 마음이 정해졌다면 다시 날 찾아와 주길 바라네.");
             cm.dispose();
             return;
         }
         if (mode == 1)
             status++;
         else
             status--;
         if (status == 0) {
             if (cm.getQuestStatus(100000) == 1) {
                 var adobis = "뭐... 좋소. 당신들은 충분한 자격이 되어 보이는군. 어느 단계에 도전해 보겠소?#b\r\n";
                 adobis += "\r\n#L0#폐광 동굴을 조사하러 떠난다. (1단계)";
                 adobis += "\r\n#L1#자쿰 던전을 탐사한다. (2단계)";
                 adobis += "\r\n#L2#제련을 요청한다. (3단계)";
                 adobis += "\r\n#L3#퀘스트에 관한 설명을 듣는다.";
                 cm.sendSimple(adobis);
             } else {
                 cm.sendNext("이 앞은 혼자서는 결코 해결할 수 없는 미궁으로 가득차 있지. 혹시라도 도전해 보고 싶다면 엘나스의 장로의 관저에 있는 각 직업별 장로에게 퀘스트를 받아오도록 하게.");
                 cm.dispose();
             }
         } else if (status == 1) {
             if (selection == 0) {
            if (cm.getPlayer().getParty() == null) {
                cm.sendOk("퀘스트를 받아온 후 파티를 맺어 파티장이 나에게 말을 걸면 여러가지 퀘스트를 수행할 수 있다네. 모든 준비가 끝났다면 파티장한테 나에게 말을 걸라고 전해주게나.");
                cm.dispose();
                return;
            }
            if (!cm.isLeader()) {
                cm.sendOk("퀘스트를 받아온 후 파티를 맺어 파티장이 나에게 말을 걸면 여러가지 퀘스트를 수행할 수 있다네. 모든 준비가 끝났다면 파티장한테 나에게 말을 걸라고 전해주게나.");
                cm.dispose();
                return;
            }
            if (!cm.allMembersHere()) {
                cm.sendOk("퀘스트를 받아온 후 파티를 맺어 파티장이 나에게 말을 걸면 여러가지 퀘스트를 수행할 수 있다네. 모든 준비가 끝났다면 파티장한테 나에게 말을 걸라고 전해주게나.");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("PartyQuest");
            if (em == null) {
                cm.sendOk("파티퀘스트에 현재 문제가 생긴것 같군. 미안하지만 지금은 입장할 수 없겠네.");
                cm.dispose();
                return;
            }
            var eim = em.readyInstance();
            eim.setProperty("Global_StartMap", 280010000+"");
            eim.setProperty("Global_ExitMap", 280090000+"");
            eim.setProperty("Global_MinPerson", 1+"");
            eim.setProperty("Global_RewardMap", 280090000+"");
            eim.startEventTimer(1800000);
            eim.registerParty(cm.getParty(), cm.getPlayer().getMap());
            cm.dispose();
             } else if (selection == 1) {
                 if (cm.getQuestStatus(100001) < 2) {
                     cm.sendNext("자네는 1단계를 진행중인 것 같군 그래. 2단계를 도전하기 위해서는 1단계를 성공적으로 클리어 한 상태여야만 하네. 우선 1단계를 클리어 하게나.");
                     cm.dispose();
                 } else if (cm.getQuestStatus(100002) == 2) {
                     cm.sendYesNo("흠... 자네는 이미 2단계를 클리어 한 적이 있는 모양이로군. 하지만 원한다면 언제든지 또 도전이 가능하다네. 어떤가... 다시 한 번 2단계에 도전해 보겠는가?");
                 } else if (cm.getPlayer().getMap(), "Quest_Zakum01", "1") {
                     cm.sendYesNo("자네는 1단계를 무사히 클리어 했군 그래. 하지만 아직 자쿰 던전 보스를 만나기 위해서는 많은 난관이 남아있지. 어떤가... 2단계에 도전해 보겠는가?");
                 } else {
                     cm.sendYesNo(" ");
                 }
             } else if (selection == 2) {
                 if (cm.getQuestStatus(100002) < 2) {
                     cm.sendNext("아직 자네는 이전 단계를 클리어 하지 않은 것 같군. 이전 단계를 클리어 한 후에 다시 시도해 주길 바라네.");
                     cm.dispose();
                 } else if (cm.getQuestStatus(100003) == 2) {
                     cm.sendYesNo("흠... 자네는 일전에 #b불의 눈#k을 제련해 간 사람이 아닌가. 그런데 나에게 무슨 볼일인가. 다시 한 번 #b불의 원석 조각#k과 #b화산의 숨결#k을 조합하여 #b불의 눈#k을 만들어 볼텐가?");
                 } else {
                     cm.sendYesNo("자네는 2단계를 무사히 클리어 했군 그래. 하지만 아직 자쿰 던전 보스를 만나기 위해서는 마지막 과정이 남아 있다네. 어떤가... 지금까지 모아온 재물을 조합해서 재련을 해 볼 텐가?");
                 }
             } else if (selection == 3) {
                 cm.sendNext("어떻게 해야하는지 감이 잡히질 않는 모양이로구만? 이 퀘스트를 하려면 장로의 관저에 가서 퀘스트 수행 승인을 받아와야 하네. 그렇지 않고서 들여보냈다가 추궁 받긴 싫다구... 퀘스트를 받아온 이들로만 파티를 맺으면 들여보낼 수 있네.");
             }
         selectioned = selection;
         } else if (status == 2) {
             if (selectioned == 1) {
                 cm.sendNext("좋네! 이제부터 자네를 수 많은 장애물들이 있는 맵으로 이동될 것일세. 그곳의 가장 안쪽에는 보물상자가 있는데 보물상자를 조사하면 보스를 소환하는 데 필요한 아이템의 재료 중 하나를 얻을 수 있을 거야. 재료를 얻어서 나에게 가져와 주게나. 그럼 힘내주게!");
             } else if (selectioned == 2) {
                 cm.sendNext("흠, #b불의 원석 조각#k와 #b화산의 숨결#k을 조합하면 보스를 부르는데 제물로 바쳐야 하는 아이템인 #b불의 눈#k를 만들 수 있지. 하지만... 쿨럭쿨럭...! 보다시피 몸이 좋질 않아 뭐든 구하기가 여간 어려운게 아니라네. 그러니 혹, #b헥터의 꼬리 30개#k만 구해다 줄 소 있소? 어디에 쓸 지는 묻지 말고... 흠흠...");
             } else if (selectioned == 3) {
                 cm.sendNextPrev("순서대로 수행해나가면 자쿰던전의 보스를 만날 수 있을 걸세. 내가 모아오라는 것을 모아오면 제물을 만들어주겠네. 그 제물을 제단에 바치라고. 그럼 당신이 원하는 걸 보게 될 것이네. 그러기 위해서는 먼저 폐광 동굴을 조사하여 #b불의 원석#k을 가져와야 한다네.");
             }
             selectiones = selectioned;
         } else if (status == 3) {
             if (selectiones == 1) {
                 if (cm.getQuestStatus(100002) < 2) {
                     cm.forceStartQuest(100002);
                 }
            var em = cm.getEventManager("PartyQuest");
            var eim = em.readyInstance();
            eim.setProperty("Global_StartMap", 280020000+"");
            eim.setProperty("Global_ExitMap", 280090000+"");
            eim.setProperty("Global_MinPerson", 1+"");
            eim.setProperty("Global_RewardMap", 280090000+"");
            eim.registerParty(cm.getParty(), cm.getPlayer().getMap());
            cm.dispose();
             } else if (selectiones == 2) {
                 if (cm.haveItem(4031061,1) && cm.haveItem(4031062,1) && cm.haveItem(4000051,30)) {
                     cm.sendNext("하하하, 전광석화와 같이 금세 만들어주겠네.");
                 } else {
                     cm.sendNext("아직 #b헥터의 꼬리 30개#k를 구해오지 못한 것 같군 그래. 이것만 모아와 준다면 그동안 자네들이 가져다 준 것을 제련해서 특별한 물건을 만들수도 있을 것 같은데 말이지. 아참, 이전 단계에서 모은 #b불의 원석#k과 #b화산의 숨결#k도 물론 모아와야 한다는 것을 잊지 말게.");
                     cm.dispose();
                 }
             } else if (selectiones == 3) {
                 cm.sendNextPrev("거기는 #b불의 원석#k 외에도 종이문서를 발견할 수 있을 걸세. 그걸 #b아우라#k에게 가져다주면 도움이 되는 것을 만들어줄 거야. 다음은 용암지대를 건너가 #b화산의 숨결#k을 구해와야 한다네. 험난한 길이겠지만... 제물을 만들기 위해서는 반드시 필요한 것이라네.");
             }
             selectionet = selectiones;
         } else if (status == 4) {
             if (selectionet == 2) {
                 cm.gainItem(4031061,-1);
                 cm.gainItem(4031062,-1);
                 cm.gainItem(4000051,-30);
                 cm.gainItem(4001017,5);
                 cm.forceCompleteQuest(100003);
                 cm.sendNext("여깄네. 자, 이제 저 문이 열리면 안으로 들어갈 수 있을 걸세. 이 #b불의 눈#k을 갖고 있어야만 문을 통해 입장을 할 수 있다네. 뭐, 열 명까지 입장이 가능하다던가...");
                 cm.dispose();
             } else if (selectionet == 3) {
                 cm.sendPrev("#b화산의 숨결#k까지 구했다면 1, 2단계에서 얻은 #b불의 원석 조각#k과 #b화산의 숨결#k을 제련하는 일이 필요하다네. 제련은 내가 할 수 있으니 걱정 말게. 이 모든게 끝났다면 자쿰의 보스를 만나는 일만 남게 되지. 결코 쉽지는 않겠지만 열심히 해 보게나.");
                 cm.dispose();
             }
         }
     }
 }  