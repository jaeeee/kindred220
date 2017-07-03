var status = -1;
var mitemid = new Array(1000070, 1050312, 1082580, 1072908, 1702488, 1000072, 1050310, 1072897, 1102669, 1702485, 1050316, 1042292, 1102625, 1702497, 1702445, 1003954, 1003207, 1003639, 1003640, 1002746, 1003944, 1050242, 1042271, 1042140, 1062174, 1072832, 1012415, 1022196, 5010109, 1702304, 1702329, 1022223);
var fitemid = new Array(1001093, 1051384, 1082580, 1072908, 1702488, 1001095, 1051382, 1072897, 1102669, 1702485, 1051387, 1042292, 1102625, 1702497, 1702445, 1003954, 1003207, 1003639, 1003640, 1003943, 1003944, 1051292, 1042271, 1042140, 1062179, 1072832, 1012415, 1022196, 5010109, 1702304, 1702329, 1022223);
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
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var chat = "";
        chat += "#r#i5680157##z5680157##k If you have a coupon, I'll change one or cache items of the latest styles. #rCash coordinated with the support you can get#kIt is not even naolsu! What do you think? Now you use a coupon, right?\r\n";
        chat += "#b#L0# Now just use the coupon Maple royal style!#k\r\n";
        //chat += "#L1# 로얄 스타일 쿠폰의 장비 아이템과 메이플 포인트를 교환!\r\n";
        cm.sendSimple(chat);
    } else if (status == 1) {
        if (selection == 0) {
        cm.dispose();
        if ((cm.haveItem(5680157, 1))) {
            if (cm.getPlayer().getGender() == 0) {
                var mitemcode = mitemid[Math.floor(Math.random() * mitemid.length)];
                switch (mitemcode) {
                    case 1000072:
                    case 1050310:
                    case 1050316:
                    case 1050312:
                    case 1000070:
                    case 1050242:
                        cm.gainCashItem(mitemcode,1);
                        break;
                    default:
                        cm.gainItem(mitemcode,1);
                        break;
                }
                cm.sendOk("What do you think?#r#i" + mitemcode + "##z" + mitemcode + "##kDid you get item well? I really do not Amazing? Next time again #b#z5680159##k Saenggimyeon coupon Come find me!");
            } else {
                var fitemcode = fitemid[Math.floor(Math.random() * fitemid.length)];
                switch (fitemcode) {
                    case 1001095:
                    case 1051382:
                    case 1051387:
                    case 1051384:
                    case 1001093:
                    case 1051292:
                        cm.gainCashItem(fitemcode,1);
                        break;
                    default:
                        cm.gainItem(fitemcode,1);
                        break;
                }
                cm.sendOk("What do you think?#r#i" + fitemcode + "##z" + fitemcode + "##kDid you get item well? I really do not Amazing? Next time again #b#z5680157##k Saenggimyeon coupon Come find me!");
            }
            cm.gainItem(5680157, -1);
            return;
            } else {
            cm.sendOk("#i5680157##e Possession of a maple royal style #n and does gyesiji.\r\n#i5680157##eMaple royal style#nWill do that the drop in Royal style hunting or event! Look out good ~");
            cm.dispose();
            return;
        }
     }
   }
}