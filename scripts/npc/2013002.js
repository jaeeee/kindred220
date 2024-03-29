/*

제작 : 스피릿매니저

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (1152014, 1152015, 1152016, 1152017, 1152018, 1152019, 1152020, 1152021); // 아이템 목록 
var itemnum = Array (20, 20, 20, 20, 30, 30, 30, 30, 1, 1, 1, 1); // 아이템 갯수 (장비템을 제외한 갯수가 가능한아이템만)
var number = Array (30, 30, 30, 30, 50, 50, 50, 50, 3000, 3000, 3000, 100); // 포인트
var sel = -1;

function start() {
   status = -1;
   action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
    if (status <= 1 && mode == 0) {
        cm.dispose();
        return;
    }  
    if (mode == 0) {
        cm.dispose();
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendYesNo("안녕하세요? #b"+cm.getPlayer().getName() + "#k 님\r\n저는 #e성배 전쟁#n을 감독하는자입니다.\r\n현재는 #r성배포인트#k로 여러 #b아이템#k 을 교환해드리고잇습니다.");
    } else if (status == 1) {
        var list = "현재 성배포인트로 교환가능한 아이템들입니다.\r\n#e#r※강인함의 단단한 숄더의 옵션은 올스텟 20입니다.\r\n#b※혼의 숄더의 옵션은 올스텟 30입니다.\r\n#n#r(성배P : " + cm.getPlayer().getSpiritp() + "P)#k";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#t" + itemList[i] + "#   #r(성배P : " + cm.getPlayer().getSpiritp() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("정말 #b#t"+ itemList[sel] +"##k을(를) 교환하시겟습니까?");
    } else if (status == 3) {
        if (cm.getPlayer().getSpiritp() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gndnjs(itemList[sel], itemnum[sel],0,0);
                cm.getPlayer().addSpiritPoint(-number[sel]);
                cm.sendNext("성배포인트로 아이템교환을 완료하엿습니다.");
            } else {
                cm.sendOk("성배포인트로 아이템을 교환하시고싶다면 레벨업을열심히하여 성배를 하시기바랍니다.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. 님의 포인트로 아이템을 교환하기에는 부족합니다.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"님의 성배포인트는 #b" +number[sel] + "#k점 만큼 하락되었습니다."); 
        cm.dispose();
    }
  }
}
