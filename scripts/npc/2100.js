 function start() { Status = -1; action(1, 0, 0); }




 function action(M, T, S) {




 if (M == -1) { cm.dispose(); } else {

  if (M == 0) {cm.dispose(); return; }

  if (M == 1) Status++; else Status--;    




 if(getFever() == -1)   { setFever(0); }

 if(getFever() == null) { setFever(0); }




 if (Status == 0) {




 cm.sendYesNo("장비창 1, 소비창 2개의 빈 공간이 있어야 합니다. 판도라의 상자를 열어보시겠습니까? "

  + "#b#z5060028##k\와 #b#z4170049##k\가 필요합니다. "

  + "또한 #r모든 결과에 대한 모든 책임은 사용자에게 있습니다.#k\r\n\r\n"

  + "#e현재 Fever 게이지 : #r"+getFever()+"%");

 }




 else if(Status == 1) {




 setFever(getFever() + 11);




 Items = [1212073, 1222068, 1232065, 1302280, 1312158, 1322208, 1332230, 1362095, 1372182, 1382214, 1402203, 1412140, 1422145, 1432172, 1442228, 1452210, 1462198, 1472219, 1482173, 1492184, 1522099, 1302292, 1312168, 1322218, 1332241, 1372191, 1382225, 1402213, 1412150, 1422155, 1432181, 1442237, 1452219, 1462207, 1472229, 1482182, 1492193, 2430932, 2430933, 2430934, 2430935, 2430936, 2430937, 2430938, 2430939, 2430948, 2431135, 2431136, 2431137, 2431267, 2431268, 2431353, 2431473, 2431745, 2431797, 2431799, 2431898, 2431915, 2431949, 2432030, 2432031, 2432078, 2432085, 2432149, 2432151, 2432218, 2432295, 2432309, 2432359, 2432361, 2432431, 2432433, 2432449, 2432552, 2432580, 2432582, 2432645, 2432653, 2432733, 2432735, 2432751, 2432806, 2433051, 2433053];




 Fever = [1212063, 1222058, 1232057, 1242060, 1242061, 1302275, 1312153, 1322203, 1332225, 1342082, 1362090, 1372177, 1382208, 1402196, 1412135, 1422140, 1432167, 1442223, 1452205, 1462193, 1472214, 1482168, 1492179, 1522094, 1532098];




 Items = Items[Math.floor(Math.random() * Items.length)];

 Fever = Fever[Math.floor(Math.random() * Fever.length)];




 Dx  = "판도라의 열쇠로 판도라의 상자를 열었습니다.\r\n";

 Dx += "판도라의 상자를 한 번 더 열어보시겠습니까?\r\n";

 Dx += "#e현재 Fever 게이지 : #r"+getFever()+"%#k#n\r\n\r\n";

 Dx += "#fUI/UIWindow.img/QuestIcon/4/0#\r\n";

 Dx += "#i"+Items+"# #z"+Items+"#";

 cm.gainItem(Items, 1);

  if(getFever() >= 100) {

  Dx += "\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# #r#e[피버 보너스]#k#n\r\n";

  Dx += "#i"+Fever+"# #z"+Fever+"";

  cm.gainItem(Fever, 1);

  setFever(getFever() - 100);

  }

 cm.sendYesNo(Dx);

 Status--;

 }




 }

 }







 function getFever() {

 return cm.getPlayer().getKeyValue2("FEVER");

 }




 function setFever(i) {

 cm.getPlayer().setKeyValue2("FEVER", i);

 }
