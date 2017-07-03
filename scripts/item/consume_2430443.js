/*

     [ PlatinumMS ]

     이 스크립트는 PlatinumMS 에서 제작한 스크립트 입니다.

     스크립트 용도 : 10레벨 장비상자

*/

importPackage(Packages.client.items);
var status = -1;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var leftslot = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot();
            if (leftslot < 9) {
                cm.sendOk("인벤토리 공간이 최소한 9칸은 필요합니다. 장비 탭의 공간을 9칸이상 비워주신 후 다시 열어주세요.");
                cm.dispose();
                return;
            }
            
            switch (cm.getPlayer().getJob()) {
                case 100:
		case 112:
		case 122:
		case 132:
                case 1100:
                case 1111:
		case 1112:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040015, 1);
                        cm.gainItem(1060008, 1);
                    } else {
                        cm.gainItem(1041014, 1);
                        cm.gainItem(1061023, 1);

                    }
                    cm.gainItem(1002002, 1);
                    cm.gainItem(1082003, 1);
                    cm.gainItem(1092005, 1); 
                    cm.gainItem(1302077, 1);
                    break;
                case 2100:
		case 2112:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040015, 1);
                        cm.gainItem(1060008, 1);
                    } else {
                        cm.gainItem(1041014, 1);
                        cm.gainItem(1061023, 1);

                    }
                    cm.gainItem(1442000, 1);
                    cm.gainItem(1002002, 1);
                    cm.gainItem(1082003, 1);
                    break;
                case 3100:
		case 3112:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040015, 1);
                        cm.gainItem(1060008, 1);
                    } else {
                        cm.gainItem(1041014, 1);
                        cm.gainItem(1061023, 1);

                    }
                    cm.gainItem(1002002, 1);
                    cm.gainItem(1082003, 1);
                    break;
		case 3101:
		    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040015, 1);
                        cm.gainItem(1060008, 1);
                    } else {
                        cm.gainItem(1041014, 1);
                        cm.gainItem(1061023, 1);

                    }
                    cm.gainItem(1002002, 1);
                    cm.gainItem(1082003, 1);
					cm.gainItem(1232000, 1);
				//	cm.gainItem(1099000, 1);
					break;
		case 3122:
		break;
                case 5100:
		case 5112:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040015, 1);
                        cm.gainItem(1060008, 1);
                    } else {
                        cm.gainItem(1041014, 1);
                        cm.gainItem(1061023, 1);
                    }
                    cm.gainItem(1002002, 1);
                    cm.gainItem(1082003, 1);
                    cm.gainItem(1052444, 1); 
                    cm.gainItem(1302077, 1); 
                    break;
                case 200:
		case 212:
		case 222:
		case 232:
                case 1200:
                case 1211:
		case 1212:
                case 2200:
		case 2210:
		case 2211:
		case 2212:
		case 2213:
		case 2214:
		case 2215:
		case 2216:
		case 2217:
		case 2218:
                case 3200:
		case 3212:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040004, 1);
                        cm.gainItem(1060012, 1);
                    } else {
                        cm.gainItem(1061010, 1);
                        cm.gainItem(1041015, 1);
                    }
                    cm.gainItem(1002017, 1);
                    cm.gainItem(1072006, 1);
                    cm.gainItem(1382000, 1);
                    break;
                case 300:
		case 312:
		case 322:
                case 1300:
                case 1311:
		case 1312:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040161, 1);
                        cm.gainItem(1060151, 1);
                    } else {
                        cm.gainItem(1041163, 1);
                        cm.gainItem(1061173, 1);
                    }
                    cm.gainItem(1003299, 1);
                    cm.gainItem(1072561, 1);
                    cm.gainItem(1452002, 1);
                    cm.gainItem(2060000, 2000);
                    cm.gainItem(2060000, 2000);
                    cm.gainItem(2060000, 2000);
                    break;
                case 2300:
		case 2312:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040161, 1);
                        cm.gainItem(1060151, 1);
                    } else {
                        cm.gainItem(1041163, 1);
                        cm.gainItem(1061173, 1);
                    }
                    cm.gainItem(1003299, 1);
                    cm.gainItem(1072561, 1);
                    cm.gainItem(1352000, 1);
                    cm.gainItem(1522000, 1);
                    break;
                case 3300:
		case 3312:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040161, 1);
                        cm.gainItem(1060151, 1);
                    } else {
                        cm.gainItem(1041163, 1);
                        cm.gainItem(1061173, 1);
                    }
                    cm.gainItem(1003299, 1);
                    cm.gainItem(1072561, 1);
                    cm.gainItem(1462001, 1);
                    cm.gainItem(2061000, 2000);
                    cm.gainItem(2061000, 2000);
                    cm.gainItem(2061000, 2000);
                    break;
                case 400:
		case 412:
		case 422:
		case 430:
		case 431:
		case 432:
		case 433:
		case 434:
                case 1400:
                case 1411:
		case 1412:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040162, 1);
                        cm.gainItem(1060152, 1);
                    } else {
                        cm.gainItem(1041164, 1);
                        cm.gainItem(1061174, 1);
                    }
                    cm.gainItem(1003300, 1);
                    cm.gainItem(1072562, 1);
                    cm.gainItem(1332102, 1);
                    if (cm.getPlayer().getKeyValue("dualBlade") == null)
                        cm.gainItem(1472061, 1);
                    cm.gainItem(2070000, 500);
                    cm.gainItem(2070000, 500);
                    cm.gainItem(2070000, 500);
                    break;
                case 2400:
		case 2412:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040162, 1);
                        cm.gainItem(1060152, 1);
                    } else {
                        cm.gainItem(1041164, 1);
                        cm.gainItem(1061174, 1);
                    }
                    cm.gainItem(1003300, 1);
                    cm.gainItem(1072562, 1);
                    cm.gainItem(1362046, 1);
                    cm.gainItem(1352105, 1);
                    break;
                case 500:
		case 512:
		case 522:
                case 1500:
                case 1511:
		case 1512:
                    cm.gainItem(1003301, 1);
                    cm.gainItem(1052389, 1);
                    cm.gainItem(1482014, 1);
                    cm.gainItem(1492014, 1);
                    cm.gainItem(2330006, 600);
                    cm.gainItem(2330006, 600);
                    cm.gainItem(2330006, 600);
                    break;
                case 3500:
		case 3512:
                    cm.gainItem(1003301, 1);
                    cm.gainItem(1052389, 1);
                    cm.gainItem(1492014, 1);
                    cm.gainItem(2330006, 600);
                    cm.gainItem(2330006, 600);
                    cm.gainItem(2330006, 600);
                    break;
                case 501:
		case 532:
                    cm.gainItem(1003301, 1);
                    cm.gainItem(1052389, 1);
                    cm.gainItem(1532045, 1);
                    break;
                case 6100:
		case 6112:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040015, 1);
                        cm.gainItem(1060008, 1);
                    } else {
                        cm.gainItem(1041014, 1);
                        cm.gainItem(1061023, 1);

                    }
                    cm.gainItem(1002002, 1);
                    cm.gainItem(1082003, 1);
                    cm.gainItem(1402001, 1);
                    cm.gainItem(1352504, 1);
		    break;
                case 6500:
		case 6512:
                    cm.gainItem(1003301, 1);
                    cm.gainItem(1052389, 1);
                    cm.gainItem(1222036, 1);
                    cm.gainItem(1352601, 1);
		    break;
                case 2700:
		case 2712:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040004, 1);
                        cm.gainItem(1060012, 1);
                    } else {
                        cm.gainItem(1061010, 1);
                        cm.gainItem(1041015, 1);
                    }
                    cm.gainItem(1002017, 1);
                    cm.gainItem(1072006, 1);
                    cm.gainItem(1352400, 1);
                    cm.gainItem(1212001, 1);
		    break;
                default:
                    cm.sendOk("장비를 지급받을 수 있는 직업단계가 아닙니다. 전직이 가능한 레벨인 경우, 전직을 하신 후 장비를 받을 수 있습니다.");
                    cm.dispose();
                    return;
                    
            }
	    cm.gainItem(2430443,-1);
	    cm.dispose();
        }
    }
}