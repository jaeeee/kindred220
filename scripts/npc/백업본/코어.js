function start() {
 cm.sendSimple ("#bȥ �¶���#l#k�� #r[���� ���]#l#k�о߸� ���� ��ũ��Ʈ�Դϴ�#k\r\n#e<����>#n\r\n#L0##k#bĳ���̵�#k#l#n#L1##k#bĳ������#k#l#n#L3##k#d���ɻ���#k#l#n#L4##k#d�Ŀ�����#k#l#n\r\n#L5##k#b��������#k#l#n#L7##k#b���û���#k#l#n#L8##k#dȭ�����\r\n#k\r\n#e<�̡���>\r\n#n\r\n#L11##k#b�̵��ϱ�#k#l#n#L13##k#d��������#k#L16##k#b��������#k#L17##k#d������#k\r\n#L20##k���ļ�Ʋ#k#L30##k#b������ �ſ�#k#L27##k#b�������#k\r\n#k\r\n#e<������>\r\n#n\r\n#L26##k#b�����ϱ�#k#L9##k#b��ų������#k#L15##k#b�����۽�ų#k#k#L80##k#b�ø�����#k#k\r\n#k\r\n#e<�� �� ��>\r\n#n\r\n#k#L81##k#b�������#k#k#L82##k#b��ź���#k#k#L83##k#b��ȭ�ϱ�#k#k#L84##k#b��������#k#k#L85##k#b���ٵ���#k#k#L86##k#bȯ���ϱ�#k#k#L87##k#bȯ��Ż��#k#k#L88##k#bȯ����ŷ#k#k#L89##k#b������ŷ#k#k#L90##k#b�Ƿ�����#k#k#L91##k#bģ��Ȯ��#k#L10##k#b�г��Ӻ���#k")
}

function action(mode, type, selection) {
 cm.dispose();
 if (selection == 0) {
  cm.enterCS();
 } else if (selection == 1) {
  cm.openNpc (9010008);
 } else if (selection == 2) {
  cm.openNpc (9071001);
 } else if (selection == 3) {
  cm.openNpc (9071001); 
 } else if (selection == 4) {
  cm.openNpc (2040001); 
 } else if (selection == 8) {
  cm.openNpc (1033104); 
 } else if (selection == 6) {
  cm.openNpc (2040001); 
 } else if (selection == 7) {
  cm.openNpc (9000028); 
 } else if (selection == 30) {
  cm.openNpc (9010022); 
 } else if (selection == 5) {
  cm.openNpc (9072101); 
 } else if (selection == 9) {
  cm.openNpc (1012117); 
 } else if (selection == 10) {
  cm.openNpc (9000008); 
 } else if (selection == 16) {
  cm.warp(910000000); 
 } else if (selection == 12) {
  cm.openNpc (1012102); 
 } else if (selection == 11) {
  cm.openNpc (1012000);  
 } else if (selection == 14) {
  cm.openNpc (9000131);
 } else if (selection == 15) {
  cm.openNpc (9000080);
 } else if (selection == 13) {
  cm.warp(925020001);
 } else if (selection == 17) {
  cm.openNpc (2010011);
 } else if (selection == 26) {
  cm.openNpc (1063016);
 } else if (selection == 19) {
cm.sendNext("#b�ȸ������ ������ī��� 1�ð�+������û��100\r\nOR\r\n�Ŀ��ݾ�5000������ ���Ű������մϴ�");
 } else if (selection == 20) {
  cm.openNpc (9071003);
 } else if (selection == 80) {
  cm.openNpc (1104313); 
 } else if (selection == 81) {
  cm.openNpc (9000007); 
 } else if (selection == 82) {
  cm.openNpc (1032100); 
 } else if (selection == 83) {
  cm.openNpc (3000149);  
 } else if (selection == 84) {
  cm.openNpc (2152015);
 } else if (selection == 85) {
  cm.openNpc (1022002);
 } else if (selection == 86) {
  cm.openNpc (3000144);
 } else if (selection == 87) {
  cm.openNpc (1052101);
 } else if (selection == 88) {
  cm.openNpc (9000132); 
 } else if (selection == 89) {
  cm.openNpc (9040011); 
 } else if (selection == 90) {
  cm.openNpc (1012121); 
 } else if (selection == 91) {
  cm.openNpc (1002003);  
 } else if (selection == 92) {
  cm.openNpc (9050009);
 } else if (selection == 93) {
  cm.openNpc (9050009);
 } else if (selection == 94) {
  cm.warp(925020001);
 } else if (selection == 21) {
  cm.openNpc (1063016);
 } else if (selection == 22) {
cm.warp (271000000, 0);
 } else if (selection == 23) {
cm.warp (270000000, 0);
 } else if (selection == 24) {
  cm.warp(100000001, 0);
 } else if (selection == 25) {
cm.warp (910000000, 0);
 } else if (selection == 27) {
cm.warp (109090000, 0);
 } else if (selection == 28) {
cm.warp (910530000, 0);
 } else if (selection == 18) {
  if (cm.getPlayer().getLevel() >= 99) {
     cm.sendOk("3�������̻��Ƿ����Դϴ�(3���̻󷹺����Ұ�)");
   } else {
    cm.sendOk("��ų�����Ͱ��Ϸ�Ǿ����ϴ�");
    cm.getPlayer().maxSkillMaster();
  cm.dispose();
 }
 }
}