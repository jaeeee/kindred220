/*

제작 : 끼 룩(kkilook_adm)

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (4310027, 4310066, 2049360); // 아이템 목록 
var itemnum = Array (15, 200, 10)
var number = Array (100, 100, 1000); // 포인트
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
        cm.sendYesNo("안녕하세요? #b"+cm.getPlayer().getName() + "#k 님\r\n저는 #e홍보 상점#n입니다.\r\n현재는 #r홍보 포인트#k로 여러 #b아이템#k 을 교환해드리고잇습니다.");
    } else if (status == 1) {
        var list = "현재 홍보 포인트로 교환가능한 아이템들입니다.\r\n#e#r※여기서 윈터 코인의 갯수는 200개입니다.\r\n#r※여기서 이벤트 코인의 갯수는 15개 입니다.\r\n#r※여기서 놀라운 장비 강화는 10장 입니다.\r\n#n#b현재 보유 중인 홍보 포인트는 (" + cm.getPlayer().getHBPT() + "P) 입니다.#k";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#z" + itemList[i] + "#  #r(" + cm.getPlayer().getHBPT() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("정말 #b#t"+ itemList[sel] +"##k을(를) 교환하시겟습니까?");
    } else if (status == 3) {
        if (cm.getPlayer().getHBPT() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainitem(itemList[sel], itemnum[sel]);
                cm.getPlayer().gainHBPT(-number[sel]);
                cm.sendNext("홍보 포인트로 아이템교환을 완료하엿습니다.");
            } else {
                cm.sendOk("홍보 포인트로 아이템을 교환하시고싶다면 홍보 열심히하여 보상을 받으시기바랍니다.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. 님의 포인트로 아이템을 교환하기에는 부족합니다.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"님의 홍보 포인트는 #b" +number[sel] + "#k점 만큼 감소되었습니다."); 
        cm.dispose();
    }
  }
}
