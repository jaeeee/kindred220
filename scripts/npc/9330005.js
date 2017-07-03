/*

제작 : 끼 룩(kkilook_adm)

*/
importPackage(net.sf.odinms.client);
var status = 0;
var itemList = Array (4310066, 5200001, 5200002, 1672003, 1022144, 2470002, 2470007, 2049360, 2049153, 2049704, 1113014, 1112794, 1112748, 1012376, 1132228, 1152155, 1142002); // 아이템 목록 
var itemnum = Array (10, 1, 1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1, 1, 1, 1, 1); // 아이템 갯수 (장비템을 제외한 갯수가 가능한아이템만)
var number = Array (7000, 3000, 5000, 10000, 80000, 3000, 100000, 100000, 100000, 100000, 48000, 50000, 50000, 300000, 500000, 500000, 1000000); // 포인트
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
        cm.sendYesNo("안녕하세요? #b"+cm.getPlayer().getName() + "#k 님\r\n저는 #e낚시 상점#n입니다.\r\n현재는 #r낚시 포인트#k로 여러 #b아이템#k 을 교환해드리고잇습니다.");
    } else if (status == 1) {
        var list = "#e\r\n#r※[ 참고 ] 윈코,놀장강,놀긍,레잠은 20개 입니다.\r\n#b※[ 참고 ] 낚시 훈장의 옵션은 올스텟 300입니다#n#k";
        for (var i = 0; i < itemList.length; i++)
        list += "\r\n#L" + i + "##i"+itemList[i]+"##b#z" + itemList[i] + "#  #r(" + cm.getPlayer().getFPT() + "#k / #r" + number[i] + "P)#k";
        cm.sendSimple(list);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("정말 #b#t"+ itemList[sel] +"##k을(를) 교환하시겟습니까?");
    } else if (status == 3) {
        if (cm.getPlayer().getFPT() >= number[sel]) {
            if (cm.canHold(itemList[sel])) {
                cm.gainItem(itemList[sel], itemnum[sel]);
                cm.getPlayer().addFPT(-number[sel]);
                cm.sendNext("낚시 포인트로 아이템교환을 완료하엿습니다.");
            } else {
                cm.sendOk("낚시 포인트로 아이템을 교환하시고싶다면 낚시 열심히하여 미끼를 파시기바랍니다.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#b"+ cm.getPlayer().getName() +"#k. 님의 포인트로 아이템을 교환하기에는 부족합니다.");
            cm.dispose();
        }
    } else if (status == 4) {
        cm.sendOk(cm.getPlayer().getName()+"님의 낚시 포인트는 #b" +number[sel] + "#k점 만큼 감소되었습니다."); 
        cm.dispose();
    }
  }
}
