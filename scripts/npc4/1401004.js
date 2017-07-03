/*
아야노(riel0216)
*/

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1|| mode == 0) {
 cm.sendOk("알겠어.. 다른사람들에게 도움을 요청해볼게..");
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        cm.sendNext("\r\n#r#e스우#k#n를 구하고싶어..\r\n하지만.. 나혼자 할 수 있을까..?");
    } else if (status == 1) {
 cm.sendNext("#fs25##fn고딕##r#e 어이!! 너!!");
    } else if (status == 2) {
        cm.sendNextS("어?? 나?? 나를 부른거야??",2);
    } else if (status == 3) {
        cm.sendYesNo("그래! #h # #e나를 좀 도와주지 않겠어?#n \r\n\r\n#r#e파티플레이 : 최소 0명필요 #k\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#b 크림을 도와준다.");   
} else if (status == 4) {
 if (cm.getPlayer().getParty() == null) {
 cm.sendOk("혼자서는안되..다른파티원과 파티를 이루어줘...");
        cm.dispose();
 } else if (!cm.isLeader()) {
 cm.sendOk("나는 파티장하고만 말을한다궁...");
 cm.dispose();
 } else if (!cm.allMembersHere()) {
 cm.sendOk("다른파티원들은 어디에 있지??");
 cm.dispose();
 return;
 } else if(cm.getPlayer().getParty().getMembers().size() <= 0) {
 cm.sendOk("최소 0명의 파티원이 필요해..");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(992017000) > 0) {
 cm.sendOk("이미다른 파티플레이어가 #r블랙헤븐#k을 진행중이야");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(900020200) > 0) {
 cm.sendOk("이미다른 파티플레이어가 #r블랙헤븐#k을 진행중이야");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(900020210) > 0) {
 cm.sendOk("이미다른 파티플레이어가 #r블랙헤븐#k을 진행중이야");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(900020220) > 0) {
 cm.sendOk("이미다른 파티플레이어가 #r블랙헤븐#k을 진행중이야");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(957020001) > 0) {
 cm.sendOk("이미다른 파티플레이어가 #r블랙헤븐#k을 진행중이야");
 cm.dispose();
 return;
 }{
 cm.allPartyWarp(992017000, true);
 cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("암흑속에 미로를 가다보면 포탈이 있어!!!..."));
 cm.dispose();
                }   
    }

} 