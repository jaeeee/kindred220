/* dhae0107 ���� */
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
         cm.sendYesNo("#e#r����#n#k�� ���̷� ������ ���� �����ּ���#k");
} else if (status == 1) {
      if (cm.getPlayer().getParty() != null) { 	
cm.killAllMob();
cm.allPartyWarp(957020001,true);
cm.sendOk("#e�����Ƕ� @���� ġ�ð� �����ø�˴ϴ�#k");			
cm.killAllMob();	
cm.spawnMob(8240104,211,136);
cm.removeNpc(1032104);
cm.dispose();        
 } else {         
cm.sendOk("��Ƽ�� �����ϼž� �����ϽǼ� �ֽ��ϴ�.");          
cm.dispose();    
}
}
}
