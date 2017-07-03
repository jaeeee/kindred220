/*


 세계여행 스크립트.
 제작자 : River(stlyeboy) , 무단배포와 무단수정금지합니다.
 배포하실땐 출저를 남기고 배포를 해주세요


*/

var status = -1;
var cost, sel;
var name1, name2, name3;
var code1, code2, code3;
var map;
var back = true;

function start() {
    switch (cm.getMapId()) {
 case 800000000:
 case 500000000:
 case 701000000:
 case 740000000:
     map = cm.getSavedLocation("WORLDTOUR");
     cm.sendSimple("여행은 어떠신가요? 즐거우신가요?\n\r #b#L0# 다른 곳으로 떠나고 싶어요.#l \n\r #L1# 여행을 마치고 원래 있던 #m"+map+"#에 돌아가고 싶어요.#l");
     break;
 case 950000100:
     map = 193000000;
     cm.sendSimple("#m"+map+"#?#l 가고싶냐?");
     break;
 default:
     back = false;
     if (cm.getJob() == 0) {
  cm.sendNext("\r\n\r\n#r세계여행을 떠나보시겠어요?#k");
  cost = 300;
     } else {
  cm.sendNext("\r\n\r\n#r세계여행을 떠나보시겠어요?#k");
  cost = 3000;
     }
     break;
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
 cm.dispose();
    } else {
 if ((status <= 2 && mode == 0) || (status == 4 && mode == 1)) {
     cm.dispose();
     return;
 }
 if (mode == 1)
     status++;
 else
     status--;

 if (!back) {
     if (status == 0) {
  cm.sendSimple("안녕하세요~ 새로운 세계로 여행을 떠나보고 싶으세요? 그렇다면 저희 세계여행 서비스를 이용해보시기 바랍니다! 어디로 여행해보고 싶으세요? 초보자에게는 특별히 90% 할인된 요금으로 제공해드립니다.  #r요금은 "+cost+"메소 입니다.#k\r\n\r\n#b#L10#태국 #m500000000#  #l\r\n#L11#대만 #m740000000# #l\r\n#L12#일본 #m800000000# #l\r\n#L13#중국 #m701000000# #l\r\n#L14#코크 타운 #m219000000#");
     } else if (selection == 10) {
      cm.gainMeso(-cost);
      cm.saveLocation("WORLDTOUR");
      cm.warp(500000000, 0);
      cm.dispose();
     } else if (selection == 11) {
      cm.warp(740000000, 0);
      cm.dispose();
     } else if (selection == 14) {
      cm.warp(219000000, 0);
      cm.dispose();
     } else if (selection == 12) {
      cm.gainMeso(-cost);
      cm.saveLocation("WORLDTOUR");
      cm.warp(800000000, 0);
      cm.dispose();
     } else if (selection == 13) {
      cm.gainMeso(-cost);
      cm.saveLocation("WORLDTOUR");
      cm.warp(701000000, 0);
      cm.dispose();
     }
 } else {     
     if (status == 0) {
  if (selection == 0) {
      switch (cm.getMapId()) {
   case 740000000:
       code1 = 800000000;
       code2 = 701000000;
       code3 = 500000000;
       name1 = "일본";
       name2 = "중국";
       name3 = "대만";
   case 500000000:
       code1 = 800000000;
       code2 = 701000000;
       code3 = 740000000;
       name1 = "일본";
       name2 = "중국";
       name3 = "대만";
       break;
   case 800000000:
       code1 = 701000000;
       code2 = 500000000;
       code3 = 740000000;
       name1 = "중국";
       name2 = "태국";
       name3 = "대만";
       break;
   case 701000000:
       code1 = 500000000;
       code2 = 800000000;
       code3 = 740000000;
       name1 = "태국";
       name2 = "일본";
       name3 = "대만";
       break;
   default:
       cm.dispose();
       return;
      }
      cm.sendSimple("어디로 떠나고 싶으신가요?\n\r #b#L0#"+name1+" #m"+code1+"# (3,000 메소)#l \n\r #L1#"+name2+" #m"+code2+"# (3,000 메소)#l \n\r #L2#"+name3+" #m"+code3+"# (3,000 메소)#l");

  } else if (selection == 1) {
      cm.warp(map == -1 ? 100000000 : map);
      cm.clearSavedLocation("WORLDTOUR");
      cm.dispose();
  }
     } else if (status == 1) {
  sel = selection;
  if (sel == 0) {
      cm.sendNext("정말 #b#m"+code1+"##k으로 떠나고 싶으신가요? 요금은 #b2,000 메소#k. 지금 바로 떠나겠습니까?");
  } else if (sel == 1) {
      cm.sendNext("정말 #b#m"+code2+"##k으로 떠나고 싶으신가요? 요금은 #b2,000 메소#k. 지금 바로 떠나겠습니까?");
  } else if (sel == 2) {
      cm.sendNext("정말 #b#m"+code3+"##k으로 떠나고 싶으신가요? 요금은 #b2,000 메소#k. 지금 바로 떠나겠습니까?");
  }
     } else if (status == 2) {
  if (sel == 0) {
      cm.warp(code1);
      cm.gainMeso(-2000);
  } else if (sel == 1) {
      cm.warp(code2);
      cm.gainMeso(-2000);
  } else if (sel == 2) {
      cm.warp(code3);
      cm.gainMeso(-2000);
  }
  cm.dispose();
     }
 }
    }
}



