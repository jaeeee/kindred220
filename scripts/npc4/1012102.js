/*
�ƾ߳�(riel0216)
*/
importPackage(java.lang);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var cost = 50000; // ��ȯ����
var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("#r#e���������#n#k�̵��� ���Ű��� ȯ���մϴ�\r\n�ʿ������ #e:#n #b#i4310063# #z4310063# 30��#k���ʿ䷹�� #e:#n #r200LV#k\r\n\r\n#L3##b��������ͷ� �̵��ϰڽ��ϴ�.#k\r\n#L1##b��������Ͱ� �����ΰ���?#k");
 } else if(status == 1) {
  if(selection == 10) {
  if (cm.getPlayer().getLevel() >= 200) {
  cm.sendOk("#b���� 200�̻� �̿밡���Ͻʴϴ�#k");
  cm.dispose();
 } else {    
cm.warp(1040400002, 0);

 cm.dispose();
}

      } else if (selection == 1) {
        cm.dispose();
        cm.sendOk("#b���������#k������ ���͵帮�ڽ��ϴ�\r\n��������ʹ� ���� 200���� �̿��� �����Ͻʴϴ�\r\n�� ���͵��� ���� �����Ǵ� ������ �̵����ѵ帳�ϴ�\r\n"); // need GMS text
	return;

      } else if (selection == 2) {
        cm.dispose();
        cm.openNpc(1033112);
	return;

      } else if (selection == 3) {
        cm.dispose();
        cm.openNpc(2144015);
	return;

  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}