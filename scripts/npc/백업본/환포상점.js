/*

제작 : 끼 룩(kkilook_adm)

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (4310027, 4310066, 1662002, 1662003, 1142076); // 아이템 목록 
var itemnum = Array (10, 100, 1, 1, 1); // 아이템 갯수 (장비템을 제외한 갯수가 가능한아이템만)
var number = Array (5000, 2000, 2000, 2000, 20000); // 포인트
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
        cm.sendYesNo("안녕하세요? #b"+cm.getPlayer().getName() + "#k 님\r\n저는 #e환포 상점#n입니다.\r\n현재는 #r환생 포인트#k로 여러 #b아이템#k 을 교환해드리고잇습니다.");
    } else if (status == 1) {
        var list = "현재 환생 포인트로 교환가능한 아이템들입니다.\r\n#e#r※[윈터 코인] 100개 // [훈장] 올스텟200/공마100 \r\n[이벤트 코인] 10개";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#t" + itemList[i] + "#  #r(" + cm.getPlayer().getFame() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("정말 #b#t"+ itemList[sel] +"##k을(를) 교환하시겟습니까?");
    } else if (status == 3) {
        if (cm.getPlayer().getFame() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainItem(itemList[sel], itemnum[sel]);
                cm.getPlayer().addFame(-number[sel]);
                cm.sendNext("환생 포인트로 아이템교환을 완료하엿습니다.");
            } else {
                cm.sendOk("환생 포인트로 아이템을 교환하시고싶다면 레벨업을열심히하여 환생을 하시기바랍니다.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. 님의 포인트로 아이템을 교환하기에는 부족합니다.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"님의 환생 포인트는 #b" +number[sel] + "#k점 만큼 감소되었습니다."); 
        cm.dispose();
    }
  }
}
