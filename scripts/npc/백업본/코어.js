function start() {
 cm.sendSimple ("#b혼 온라인#l#k의 #r[만능 기능]#l#k분야를 맡은 스크립트입니다#k\r\n#e<상　점>#n\r\n#L0##k#b캐샵이동#k#l#n#L1##k#b캐시충전#k#l#n#L3##k#d만능상점#k#l#n#L4##k#d후원상점#k#l#n\r\n#L5##k#b보조무기#k#l#n#L7##k#b낚시상점#k#l#n#L8##k#d화폐상점\r\n#k\r\n#e<이　동>\r\n#n\r\n#L11##k#b이동하기#k#l#n#L13##k#d무릉도장#k#L16##k#b자유시장#k#L17##k#d길드업무#k\r\n#L20##k몬파셔틀#k#L30##k#b차원의 거울#k#L27##k#b술래잡기#k\r\n#k\r\n#e<전　직>\r\n#n\r\n#L26##k#b전직하기#k#L9##k#b스킬마스터#k#L15##k#b하이퍼스킬#k#k#L80##k#b궁모전직#k#k\r\n#k\r\n#e<컨 텐 츠>\r\n#n\r\n#k#L81##k#b성형헤어#k#k#L82##k#b경매보기#k#k#L83##k#b강화하기#k#k#L84##k#b정보보기#k#k#L85##k#b갈바도박#k#k#L86##k#b환생하기#k#k#L87##k#b환골탈퇴#k#k#L88##k#b환포랭킹#k#k#L89##k#b레벨랭킹#k#k#L90##k#b의류수거#k#k#L91##k#b친구확장#k#L10##k#b닉네임변경#k")
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
cm.sendNext("#b운동회코인은 아프리카방송 1시간+누적시청수100\r\nOR\r\n후원금액5000원으로 구매가가능합니다");
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
     cm.sendOk("3차전직이상의레벨입니다(3차이상레벨은불가)");
   } else {
    cm.sendOk("스킬마스터가완료되었습니다");
    cm.getPlayer().maxSkillMaster();
  cm.dispose();
 }
 }
}