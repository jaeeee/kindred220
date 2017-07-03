/*

포션조합 NPC by자쿰

*/

importPackage(java.lang);

var status = -1;
var select = -1;
var potion =  Array(2000001, 2000008, 2000002, 2000009, 2000006, 2000011, 2022003, 2001001, 2020012, 2020013, 2020014, 2020015, 2000005);
var need =    Array(2000000, 2000007, 2000001, 2000008, 2000003, 2000010, 2000002, 2022003, 2001001, 2020012, 2000006, 2020014, 2000004);
var need2 =  Array(0,            0,           0,            0,           0,            0,           2000000, 0,            0,           2022003, 2000003, 2000006, 2000006);
var need3 =  Array(0,            0,           0,            0,           0,            0,           0,            0,           0,           0,            0,            2000003, 0);
var quantity =   Array(3, 3, 2, 2, 3, 3, 3, 2, 2, 1, 13, 1, 1);
var quantity2 = Array(0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1,   3, 1);
var quantity3 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,   1, 0);
var index = 0;
var count = 0;
var melt = Array(2000000, 2000001, 2000002, 2000006);
var hard = Array(2000007, 2000008, 2000009, 2000011);

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        if (status == 0 || status == 1 || status == 2 || status == 4 || status == 3) {
            if (status == 2 || status == 4 || status == 3) cm.sendNext("관리할 포션이 생기면 언제든 포션 조합을 이용해주세요~");
            cm.dispose();
            return;
        } else {
            status--;
        }
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("안녕하세요? 포션 관리를 담당하고 있는 #b#p" + cm.getNpc() + "##k입니다.\r\n무엇을 도와드릴까요?\r\n#b#L0#포션 조합하기 #r(교환 불가나 특수한 경우가 아닌 포션)#b\r\n#L1#포션 조합은 무엇인가요?\r\n#L2#포션 굳히기 #r(교환 불가나 특수한 경우가 아닌 포션)#b\r\n#L3#포션 녹이기 #r(교환 불가나 특수한 경우가 아닌 포션)#b\r\n#L4#아무것도 아니에요.");
    } else if (status == 1) {
        select = selection;
        var exchange = "";
        if (select == 0) {
            for (var i = 0; i < potion.length; i++) {
                exchange += "#b#L" + (i + 5) + "##i" + potion[i] + "# #t" + potion[i] + "##k\r\n";
            }
            cm.sendSimple("조합하실 포션을 선택해 주세요.\r\n" + exchange);
        } else if (select == 1) {
            cm.sendOk("#b포션 조합#k이란 용량이 작은 포션들을 조합하여 용량이 높은 포션으로 만드는 기능입니다. 이젠 작은 포션이라도 버리지 마세요~");
            cm.dispose();
        } else if (select == 2 || select == 3) {
            for (var i = 0; i < (select == 2 ? melt.length : hard.length); i++) {
                exchange += "#b#L" + (i + 5) + "##i" + (select == 2 ? melt[i] : hard[i]) + "# #t" + (select == 2 ? melt[i]: hard[i]) + "##k " + (select == 2 ? "굳히기" : "녹이기") + "\r\n";
            }
            cm.sendSimple((select == 2 ? "굳힐" : "녹일") + " 포션을 선택해 주세요.\r\n" + exchange);
        } else if (select == 4) {
            cm.sendNext("관리할 포션이 생기면 언제든 포션 조합을 이용해주세요~");
            cm.dispose();
        }
    } else if (status == 2) {
        index = selection - 5;
        if (select == 0) {
            cm.askAcceptDecline("#b#i" + potion[index] + "# #t" + potion[index] + "##k을(를) 조합하기 위해서는 #b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] + "개#k" + (need2[index] == 0 ? "" : "와 #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "개") + (need3[index] == 0 ? "" : "#k와 #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "개") + "#k가 필요합니다.\r\n\r\n정말 조합하시겠어요?");
        } else if (select == 2 || select == 3) {
            cm.sendGetText("몇 개의 #b#t" + (select == 2 ? melt[index] : hard[index]) + "##k을(를) " + (select == 2 ? "굳히" : " 녹이") + "시겠어요? #r(" + cm.itemQuantity((select == 2 ? melt[index] : hard[index])) + "개 가능)");
        }
    } else if (status == 3) {
        if (select == 0) {
            cm.sendGetText("몇 개를 조합하시겠어요? #r(" + (need2[index] == 0 ? Math.floor((cm.itemQuantity(need[index]) / quantity[index])) : need3[index] == 0 ? Math.min(Math.floor((cm.itemQuantity(need[index]) / quantity[index])), Math.floor((cm.itemQuantity(need2[index]) / quantity2[index]))) : Math.min(Math.floor((cm.itemQuantity(need[index]) / quantity[index])), Math.floor((cm.itemQuantity(need2[index]) / quantity2[index])), Math.floor((cm.itemQuantity(need3[index]) / quantity3[index])))) + "개 조합 가능)#k");
        } else if (select == 2 || select == 3) {
            count = cm.getText();
            if (isNaN(count) || count == null || count <= 0) {
                cm.sendOk("1개 이상의 개수를 입력해주세요.");
                cm.dispose();
                return;
            }
            if (cm.itemQuantity((select == 2 ? melt[index] : hard[index])) >= count) {
                cm.askAcceptDecline("정말로  #b#i" + (select == 2 ? melt[index] : hard[index]) + "# #t" + (select == 2 ? melt[index] : hard[index]) + "##k #r" + count + "개#k를 " + (select == 2 ? "굳히" : "녹이") + "시겠어요?");
            } else {
                cm.sendOk("#b#i" + (select == 2 ? melt[index] : hard[index]) + "# #t" + (select == 2 ? melt[index] : hard[index]) + "##k 이 #r#e부족합니다.#n#k");
                cm.dispose();
            }
        }
    } else if (status == 4) {
        if (select == 0) {
            count = cm.getText();
            if (isNaN(count) || count == null || count <= 0) {
                cm.sendOk("1개 이상의 조합할 개수를 입력해주세요.");        
                cm.dispose();
                return;
            }
            if ((cm.itemQuantity(need[index]) >= quantity[index] * count)  && (cm.itemQuantity(need2[index]) >= quantity2[index] * count) && (cm.itemQuantity(need3[index]) >= quantity3[index] * count)) {
                cm.askAcceptDecline("#b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] * count + "개#k" + (need2[index] == 0 ? "" : "와 #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "개#k")  + (need3[index] == 0 ? "" : "와 #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "개#k") + "를 조합하여 #b#i" + potion[index] + "# #t" + potion[index] + "##r " + count + "개#k를 만드시겠어요?");
            } else {
                cm.sendOk("#b#i" + potion[index] + "# #t" + potion[index] + "##r " + count + "개#k를 조합하기 위해서는 #b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] * count + "개#k" + (need2[index] == 0 ? "" : "와 #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "개#k") + (need3[index] == 0 ? "가 필요합니다." : "와 #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "개#k가 필요합니다.")  + "\r\n\r\n#e#r재료가 부족합니다.#k#n");
                cm.dispose();
            }
        } else if (select == 2 || select == 3) {
            cm.gainItem(select == 2 ? melt[index] : hard[index], -count);
            cm.gainItem(select == 2 ? hard[index] : melt[index], count);
            cm.sendOk("#b#i" + (select == 2 ? melt[index] : hard[index]) + "##t " + (select == 2 ? melt[index] : hard[index]) + "# #r" + count + "개#k를 " + (select == 2 ? "굳혀" : "녹여") + " #b#i" + (select == 2 ? hard[index] : melt[index]) + "# #t" + (select == 2 ? hard[index] : melt[index]) + "# #r" +count + "개#k를 얻었습니다.\r\n다음에 또 이용해주세요~");
            cm.dispose();
        }
    } else if (status == 5) {
            cm.gainItem(need[index], -(quantity[index] * count));
            if (need2[index] != 0) cm.gainItem(need2[index], -(quantity2[index] * count));
            if (need3[index] != 0) cm.gainItem(need3[index], -(quantity3[index] * count));
            cm.gainItem(potion[index], count);
            cm.sendOk("#b#i" + need[index] + " # #t" + need[index] + "##k #r" + quantity[index] * count + "개#k" + (need2[index] == 0 ? "" : "와 #b#i" + need2[index] + "# #t" + need2[index] + "##k #r" + quantity2[index] + "개#k") + (need3[index] == 0 ? "" : "와 #b#i" + need3[index] + "# #t" + need3[index] + "##k #r" + quantity3[index] + "개#k") + "를 조합하여 #b#i" + potion[index] + "# #t" + potion[index] + "##r " + count + "개#k를 얻었습니다. \r\n다음에 또 이용해주세요~");
            cm.dispose();
    }
}

/*function euclid(x, y) {
    var n = 0;
    while (1) {
        n = x % y;
        if (n == 0) return y;
        x = y;
        y = n;
    }
}

function euclid2(x, y) {
    return x * y / euclid(x, y);
}
*/
