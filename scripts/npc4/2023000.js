


/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

	엔피시아이디 : 
	
	엔피시 이름 :

	엔피시가 있는 맵 : 

	엔피시 설명 : 


*/


var status = -1;
var select = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        
//            case 105000000:
//            case 240000000:
//            case 220000000:
//            case 221000000:
//            case 222000000:
        if (cm.getPlayer().getMapId() == 105000000) {
            cm.sendYesNo("안녕하세요! 어디던지 달려가는 위험지역 총알택시입니다! 단돈 30000메소에 #b또 다른 문#k까지 이동시켜드리고 있습니다. 지금 이동해 보시겠어요?");
        }
        if (cm.getPlayer().getMapId() == 240000000) {
            cm.sendYesNo("안녕하세요! 어디던지 달려가는 위험지역 총알택시입니다! 단돈 50000메소에 #b용의 숲 입구#k까지 이동시켜드리고 있습니다. 지금 이동해 보시겠어요?");
        }
        if (cm.getPlayer().getMapId() == 220000000) {
            cm.sendSimple("안녕하세요! 어디던지 달려가는 위험지역 총알택시입니다! 이동하시고 싶은 곳을 선택하세요!\r\n\r\n#b#L0#시간의 통로 (50000메소)#l\r\n#L1#지구방위본부 (120000메소)#l\r\n#L2#엘린 숲 (60000메소)#l\r\n#L3#아랫 마을 (120000메소)#l");
        }
        if (cm.getPlayer().getMapId() == 221000000) {
            cm.sendYesNo("안녕하세요! 어디던지 달려가는 위험지역 총알택시입니다! 단돈 120000메소에 #b루디브리엄#k까지 이동시켜드리고 있습니다. 지금 이동해 보시겠어요?");
        }
        if (cm.getPlayer().getMapId() == 222000000) {
            cm.sendYesNo("안녕하세요! 어디던지 달려가는 위험지역 총알택시입니다! 단돈 120000메소에 #b루디브리엄#k까지 이동시켜드리고 있습니다. 지금 이동해 보시겠어요?");
        }
        if (cm.getPlayer().getMapId() == 300000100) {
            cm.sendYesNo("안녕하세요! 어디던지 달려가는 위험지역 총알택시입니다! 단돈 120000메소에 #b루디브리엄#k까지 이동시켜드리고 있습니다. 지금 이동해 보시겠어요?");
        }
    } else if (status == 1) {
        if (cm.getPlayer().getMapId() == 105000000) {
            if (cm.getPlayer().getMeso() >= 30000) {
                cm.gainMeso(-30000);
                cm.warp(105030000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 240000000) {
            if (cm.getPlayer().getMeso() >= 50000) {
                cm.gainMeso(-50000);
                cm.warp(240030000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 220000000) {
            select = selection;
            if (select == 0) {
                cm.sendYesNo("가시고 싶으신 곳이 #b시간의 통로#k 가 맞습니까? 요금은 #b50000메소#k 입니다.");
            }
            if (select == 1) {
                cm.sendYesNo("가시고 싶으신 곳이 #b지구방위본부#k 가 맞습니까? 요금은 #b120000메소#k 입니다.");
            }
            if (select == 2) {
                cm.sendYesNo("가시고 싶으신 곳이 #b엘린 숲#k 이 맞습니까? 요금은 #b60000메소#k 입니다.");
            }
            if (select == 3) {
                cm.sendYesNo("가시고 싶으신 곳이 #b아랫 마을#k 이 맞습니까? 요금은 #b120000메소#k 입니다.");
            }
        }
        if (cm.getPlayer().getMapId() == 221000000) {
            if (cm.getPlayer().getMeso() >= 120000) {
                cm.gainMeso(-120000);
                cm.warp(220000000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 222000000) {
            if (cm.getPlayer().getMeso() >= 120000) {
                cm.gainMeso(-120000);
                cm.warp(220000000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                cm.dispose();
                return;
            }
        }
        if (cm.getPlayer().getMapId() == 300000100) {
            if (cm.getPlayer().getMeso() >= 120000) {
                cm.gainMeso(-120000);
                cm.warp(220000000);
                cm.dispose();
                return;
            } else {
                cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                cm.dispose();
                return;
            }
        }
    } else if (status == 2) {
        if (cm.getPlayer().getMapId() == 220000000) {
            if (select == 0) {
                if (cm.getPlayer().getMeso() >= 50000) {
                    cm.gainMeso(-50000);
                    cm.warp(220050300);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                    cm.dispose();
                    return;
                }
            }
            if (select == 1) {
                if (cm.getPlayer().getMeso() >= 120000) {
                    cm.gainMeso(-120000);
                    cm.warp(221000000);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                    cm.dispose();
                    return;
                }
            }
            if (select == 2) {
                if (cm.getPlayer().getMeso() >= 60000) {
                    cm.gainMeso(-60000);
                    cm.warp(300000000);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                    cm.dispose();
                    return;
                }
            }
            if (select == 3) {
                if (cm.getPlayer().getMeso() >= 120000) {
                    cm.gainMeso(-120000);
                    cm.warp(222000000);
                    cm.dispose();
                    return;
                } else {
                    cm.sendOk("요금이 부족하신건 아닌가요? 다시한번 확인해 주세요.");
                    cm.dispose();
                    return;
                }
            }
        }
        
    }
}


