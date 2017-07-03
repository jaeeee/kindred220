function start() {
    St = -1;
    action(1, 0, 0);
}
 
function action(M, T, S) {
    if (M != 1) {
        cm.dispose();
        return;
    } else {
        St++;
    }
    if (St == 0) {
        if (!cm.haveItem(2433509)) {
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getKeyValue2("BLACK_WEAPON") == 5) {
            cm.gainItem(2433509, -1);
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getKeyValue2("BLACK_WEAPON") == -1) {
            cm.getPlayer().setKeyValue2("BLACK_WEAPON", 0);
        }
        switch (armorValue(cm.getPlayer().getJob() % 1000)) {
            case 1:
                array = [1302334, 1312200, 1322251, 1232110, 1402252, 1412178, 1422185, 1432215, 1442269, 1582021];
                break;
            case 2:
                array = [1372223, 1382260, 1212116, 1262027];
                break;
            case 3:
                array = [1452253, 1462240, 1522139];
                break;
            case 4:
                array = [1332275, 1362136, 1242117, 1472262];
                break;
            default:
                array = [1222110, 1242117, 1482217, 1492232, 1532145];
                break;
        }
        selStr = "현재 직업군에서 선택 가능한 블랙 무기입니다. 어느 것을 선택하시겠어요? #e#r(남은 횟수 " + Number(5 - cm.getPlayer().getKeyValue2("BLACK_WEAPON")) + " / 5회)#k#n\r\n";
        for (i = 0; i < array.length; i++) {
            selStr += "#L" + i + "##i" + array[i] + ":# #b#t" + array[i] + "#\r\n";
        }
        cm.sendSimpleS(selStr, 4, 2007);
 
    } else if (St == 1) {
        wValue = S;
        w = Packages.server.items.ItemInformation.getInstance().getEquipById(array[wValue]);
        switch (armorValue(cm.getPlayer().getJob() % 1000)) {
            case 1:
                if (array[wValue] == 1232110) {
                    w.setHp(w.getHp() + 115 * 8 + 2000);
                } else {
                    w.setStr(w.getStr() + 2 * 8 + 40);
                    w.setDex(w.getDex() + 40);
                }
                w.setWatk(w.getWatk() + 5 * 8 + 36);
                w.setPotential1(30051);
                break;
            case 2:
                w.setInt(w.getInt() + 2 * 8 + 40);
                w.setLuk(w.getLuk() + 40);
                w.setMatk(w.getMatk() + 5 * 8 + 36);
                w.setPotential1(30052);
                break;
            case 3:
                w.setDex(w.getDex() + 2 * 8 + 40);
                w.setStr(w.getStr() + 40);
                w.setWatk(w.getWatk() + 5 * 8 + 36);
                w.setPotential1(30051);
                break;
            case 4:
                w.setLuk(w.getLuk() + 2 * 8 + 40);
                w.setDex(w.getDex() + 40);
                w.setWatk(w.getWatk() + 5 * 8 + 36);
                w.setPotential1(30051);
                break;
            default:
                if (array[wValue] == 1482217) {
                    w.setStr(w.getStr() + 2 * 8 + 40);
                    w.setDex(w.getDex() + 40);
                } else {
                    w.setDex(w.getDex() + 2 * 8 + 40);
                    w.setStr(w.getStr() + 40);
                }
                w.setWatk(w.getWatk() + 5 * 8 + 36);
                w.setPotential1(30051);
                break;
        }
        w.setLevel(8);
        w.setUpgradeSlots(0);
        w.setEnhance(33);
        w.setDownLevel(90);
        w.setState(19);
        w.setPotential2(30070);
        w.setPotential3(30291);
        w.setExpiration(Number(java.lang.System.currentTimeMillis()) + (3600 * 7 * 24 * 1000));
        Packages.server.items.InventoryManipulator.addFromDrop(cm.getC(), w, false);
        cm.getPlayer().setKeyValue2("BLACK_WEAPON", (cm.getPlayer().getKeyValue2("BLACK_WEAPON") + 1));
        if (cm.getPlayer().getKeyValue2("BLACK_WEAPON") == 5) {
            cm.gainItem(2433509, -1);
        }
        cm.getPlayer().dropMessage(5, "　");
        cm.getPlayer().dropMessage(5, "블랙 무기를 " + cm.getPlayer().getKeyValue2("BLACK_WEAPON") + "번 지급받으셨습니다. 앞으로 " + (5 - cm.getPlayer().getKeyValue("BLACK_WEAPON")) + "회 더 지원받을 수 있습니다.");
        cm.getPlayer().dropMessage(5, "지원받은 무기는 강화가 완료된 상태로 더 이상 강화를 진행할 수 없으며 사용 기간은 7일 입니다.");
        cm.dispose();
    }
}
 
function armorValue(i) {
    switch (i) {
        case 600:
        case 610:
        case 611:
        case 612:
            return 4;
        case 700:
        case 710:
        case 711:
        case 712:
            if (i + cm.getPlayer().getJob() >= 3700) {
                return 1;
            } else {
                return 2;
            }
        default:
            return Math.floor(i / 100);
    }
}