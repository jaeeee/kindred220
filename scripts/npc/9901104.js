


/*

	히나 온라인 소스 팩의 스크립트 입니다.

        제작 : 티썬

	엔피시아이디 : 9071002
	
	엔피시 이름 : 메리

	엔피시가 있는 맵 : 몬스터파크

	엔피시 설명 : 몬스터파크 티켓 교환구매


*/


var status = -1;
var select = 0;
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.Harmony.tools);

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
        cm.sendSimple("#b주황버섯의 갓100개를 모아오시면 메소를드립니다!#k\r\n#b#e#L0##t4000001#을 메소로 바꿉니다.#n#l#k");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.sendYesNo("#e#b#t4000001##k#n을 벌써 다모으신거에요?");
        } else if (select == 1) {
            cm.sendYesNo("정말 #b#t4001515##k 10장과 #b#t4001516##k 1장을 바꿀꺼야?");
        } else if (select == 2) {
            cm.sendYesNo("정말 #b#t4001521##k 10장과 #b#t4001522##k 1장을 바꿀꺼야?");
        } else if (select == 3) {
            cm.sendSimple("음~원래 이러면 안되지만, 요새 내 기분이 좋아서 특별히 판매하는거야. #r티켓 종류와 상관없이 1인당 하루에 딱 5장#k만 팔꺼야. 참, 슈피겔만에겐 비밀이야! \r\n#b#L0##t4001514# 5만 메소#l\r\n#L1##t4001516# 10만 메소#l\r\n#L2##t4001522# 20만 메소#l#k");
        }
    } else if (status == 2) {
        if (select == 0) {
            if (!cm.haveItem(4000001, 100)) {
                cm.sendOk("다모으신것 같지않은대요?");
                cm.dispose();
                return;
            }
            if (!cm.canHold(4001133)) {
                cm.sendOk("인벤토리창을 1칸 비우고 와줘");
                cm.dispose();
                return;
            }
            cm.gainMeso(5000000);
            cm.sendOk("다모아오셧군요! 감사의 뜻으로 메소 500만메소를 드리겟습니당!");
            cm.gainItem(4000001, -100);
            cm.dispose();
        } else if (select == 1) {
            if (!cm.haveItem(4001515, 80)) {
                cm.sendOk("카드키 100장이 없는듯 합니다. 어서 모아다주세요.");
                cm.dispose();
                return;
            }
            if (!cm.canHold(4001516)) {
                cm.sendOk("네 인벤토리 기타 탭이 꽉 찬거 같은데?");
                cm.dispose();
                return;
            }
            cm.sendOk("티켓은 잘 받았지? 그럼 몬스터파크에서 즐거운 시간 보내도록 해~ 후후후.");
            cm.gainItem(4001515, -10);
            cm.gainItem(4001516, 1);
            cm.dispose();
        } else if (select == 2) {
            if (!cm.haveItem(4001521, 10)) {
                cm.sendOk("뭐야 없잖아. 티켓 조각은 제대로 갖고 있는거 맞아?");
                cm.dispose();
                return;
            }
            if (!cm.canHold(4001522)) {
                cm.sendOk("네 인벤토리 기타 탭이 꽉 찬거 같은데?");
                cm.dispose();
                return;
            }
            cm.sendOk("티켓은 잘 받았지? 그럼 몬스터파크에서 즐거운 시간 보내도록 해~ 후후후.");
            cm.gainItem(4001521, -10);
            cm.gainItem(4001522, 1);
            cm.dispose();
        } else if (select == 3) {
            var meso = 0;
            var itemid = 0;
            var questid = 0;
            if (selection == 0) {
                meso = 50000;
                itemid = 4001514;
                questid = 7902;
            }
            if (selection == 1) {
                meso = 100000;
                itemid = 4001516;
                questid = 7903;
            }
            if (selection == 2) {
                meso = 200000;
                itemid = 4001522;
                questid = 7904;
            }
            if (cm.getPlayer().getMeso() < meso) {
                cm.sendOk("음.. 구매할 메소가 부족한거 같은데? 다시 한번 확인해 봐.");
                cm.dispose();
                return;
            }
            if (!cm.canHold(itemid)) {
                cm.sendOk("네 인벤토리 기타탭이 꽉 찬것 같아. 비우고 다시 말을 걸어줘~");
                cm.dispose();
                return;
            }
            var date = Calendar.getInstance().get(Calendar.YEAR)%100+"/"+StringUtil.getLeftPaddedStr(Calendar.getInstance().get(Calendar.MONTH)+"", "0", 2)+"/"+Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
            if (cm.getPlayer().getOneInfoQuest(questid, "eNum").equals("5") && cm.getPlayer().getOneInfoQuest(questid, "lastDate").equals(date)) {
                cm.sendOk("넌 이미 오늘 5장을 구입했어. 더 이상은 곤란해~ 이러다 슈피겔만이 눈치챈다구. 내일 다시 와~");
                cm.dispose();
                return;
            }
            cm.gainMeso(-meso);
            cm.gainItem(itemid, 1);
            if (!cm.getPlayer().getOneInfoQuest(questid, "lastDate").equals(date)) {
                cm.getPlayer().updateOneInfoQuest(questid, "eNum", "1");
                cm.getPlayer().updateOneInfoQuest(questid, "lastDate", date);
            } else {
                var eNum = Integer.parseInt(cm.getPlayer().getOneInfoQuest(questid, "eNum"));
                cm.getPlayer().updateOneInfoQuest(questid, "eNum", (eNum+1)+"");
            }
            cm.sendOk("그럼 몬스터파크에서 즐거운 시간 보내~");
            cm.dispose();
            
        }
    }
}


