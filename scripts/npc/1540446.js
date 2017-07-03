/* dhae0107 제작 */
importPackage(Packages.packet.crators);
function start() {
   status = -1;
   action(1, 0, 0);
}
function action(mode, type, selection) {
   if (mode == -1| mode == 0) {
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
         cm.sendYesNo("#e#r스우#n#k를 죽이려 갈려면 예를 눌러주세요#k");
} else if (status == 1) {
      if (cm.getPlayer().getParty() != null) { 	
cm.killAllMob();
cm.allPartyWarp(957020001,true);
cm.sendOk("#e나가실땐 @마을 치시고 나가시면됩니다#k");			
cm.killAllMob();	
cm.spawnMob(8240104,211,136);
cm.removeNpc(1032104);
cm.dispose();        
 } else {         
cm.sendOk("파티에 가입하셔야 입장하실수 있습니다.");          
cm.dispose();    
}
}
}
