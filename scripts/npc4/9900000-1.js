var arr = new Array(1242060,1242061,1302275,1312153,1322203,1402196,1362090,1412135,1422140,1432167,1442223,1372177,1382208,1452205,1462193,1522094,1332225,1342082,1472214,1482168,1492179,1532098);
function start() {
    var text = "현재 파프니르 아이템 이벤트 중입니다.\r\n#b2013-04-04 부터 2013-04-10#k까지\r\n#b매그너스코인 2개#k로 구매하실 수 있습니다.\r\n#r※선택 후 바로 교환이 되니 주의깊게 선택해 주시기 바랍니다.#k\r\n";
    for (i=0;i<arr.length;i++){
        text+="#L"+arr[i]+"##i"+arr[i]+"# #b[#z"+arr[i]+"#]#l\r\n";
    }
    cm.sendSimple(text);
}

function action(m,t,s){
    if (s > 0){
        if (cm.haveItem(4310058, 2)){
            if (cm.canHold(s)){
                cm.sendOk("#i"+s+"##b[#z"+s+"#]#k로 교환이 완료되었습니다.");
                cm.gainItem(4310058,-2);
                cm.gainItem(s,1);
            }else{
                cm.sendOk("인벤토리가 부족합니다.");
            }
        }else{
            cm.sendOk("매그너스코인이 부족합니다.");
        }
    }
    cm.dispose();
}

