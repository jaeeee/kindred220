/* dhae0107 제작 */

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
        cm.sendYesNo("#e#n#r#e파티플레이 : 최소 3명필요 #k\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#b#b 스우를 죽이러 갈려면 예를 눌르세요");   
} else if (status == 1) {
 if (cm.getPlayer().getParty() == null) {
 cm.sendOk("혼자서는안되..다른파티원과 파티를 이루어줘...");
        cm.dispose();
 } else if (!cm.isLeader()) {
 cm.sendOk("파티장이 말을 걸어주세요!");
 cm.dispose();
 } else if (!cm.allMembersHere()) {
 cm.sendOk("다른 파티원들은 어디에있나요??");
 cm.dispose();
 return;
 } else if(cm.getPlayer().getParty().getMembers().size() <= 3) {
 cm.sendOk("최소 3명의 파티원이 필요해..");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(350060000) > 0) {
 cm.sendOk("이미다른 파티플레이어가 #r블랙헤븐#k을 진행중이야");
 cm.dispose();
 return;
 } else if(cm.getPlayerCount(957020001) > 0) {
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
 cm.allPartyWarp(350060000, true);
 cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("암흑속에 미로를 가다보면 포탈이 있어!!!..."));
 cm.dispose();
                }   
    }

} 

