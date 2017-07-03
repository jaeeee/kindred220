


/*

	오딘 KMS 팀 소스의 스크립트 입니다.

	엔피시아이디 : 1012102
	
	엔피시 이름 : 피아

	엔피시가 있는 맵 : 광장

	엔피시 설명 : 주문서 교환


*/
var itemsz0 = new Array(new Array(4, 1003776, 1), new Array(4, 1052587, 1), new Array(4, 1082493, 1), new Array(4, 1702454, 1), new Array(4, 1003953, 1), new Array(4, 1050298, 1), new Array(4, 1051365, 1), new Array(4, 1072859, 1), new Array(4, 1102616, 1), new Array(4, 1102617, 1), new Array(4, 1003945, 1), new Array(4, 1050296, 1), new Array(4, 1051362, 1), new Array(4, 1072852, 1), new Array(4, 1102608, 1), new Array(4, 1102617, 1), new Array(4, 1003920, 1), new Array(4, 1050293, 1), new Array(4, 1051359, 1), new Array(4, 1072843, 1), new Array(4, 1702446, 1), new Array(4, 1003909, 1), new Array(4, 1050291, 1), new Array(4, 1051357, 1), new Array(4, 1072836, 1), new Array(4, 1102593, 1), new Array(4, 1702442, 1), new Array(4, 1003892, 1), new Array(4, 1051352, 1), new Array(4, 1072831, 1), new Array(4, 1102583, 1), new Array(4, 1702433, 1), new Array(4, 1003865, 1), new Array(4, 1050284, 1), new Array(4, 1051350, 1), new Array(4, 1072821, 1), new Array(4, 1102564, 1), new Array(4, 1702423, 1), new Array(4, 1003867, 1), new Array(4, 1042264, 1), new Array(4, 1060182, 1), new Array(4, 1061206, 1), new Array(4, 1072823, 1), new Array(4, 1082527, 1));
var itemsz1 = new Array(new Array(4, 1003998, 1), new Array(4, 1050304, 1), new Array(4, 1051372, 1), new Array(4, 1072876, 1), new Array(4, 1082565, 1), new Array(4, 1702468, 1), new Array(4, 1004003, 1), new Array(4, 1004004, 1), new Array(4, 1052074, 1), new Array(4, 1082166, 1), new Array(4, 1072742, 1), new Array(4, 1003951, 1), new Array(4, 1051374, 1), new Array(4, 1072857, 1), new Array(4, 1003952, 1), new Array(4, 1051375, 1), new Array(4, 1072858, 1), new Array(4, 1003955, 1), new Array(4, 1050299, 1), new Array(4, 1051366, 1), new Array(4, 1072860, 1), new Array(4, 1082555, 1), new Array(4, 1702456, 1), new Array(4, 1003971, 1), new Array(4, 1003972, 1), new Array(4, 1050302, 1), new Array(4, 1051369, 1), new Array(4, 1072868, 1), new Array(4, 1102621, 1), new Array(4, 1003968, 1), new Array(4, 1052667, 1), new Array(4, 1082552, 1), new Array(4, 1072867, 1), new Array(4, 1702467, 1), new Array(4, 1003965, 1), new Array(4, 1052661, 1), new Array(4, 1082549, 1), new Array(4, 1702461, 1), new Array(4, 1003957, 1), new Array(4, 1003958, 1), new Array(4, 1050300, 1), new Array(4, 1072862, 1), new Array(4, 1102619, 1), new Array(4, 1051367, 1));
var itemsz2 = new Array(new Array(4, 1000072, 1), new Array(4, 1001095, 1), new Array(4, 1050310, 1), new Array(4, 1051382, 1), new Array(4, 1072897, 1), new Array(4, 1102669, 1), new Array(4, 1000070, 1), new Array(4, 1001093, 1), new Array(4, 1050312, 1), new Array(4, 1051384, 1), new Array(4, 1082580, 1), new Array(4, 1072897, 1), new Array(4, 1072908, 1), new Array(4, 1003853, 1), new Array(4, 1082524, 1), new Array(4, 1072817, 1), new Array(4, 1004081, 1), new Array(4, 1052655, 1), new Array(4, 1072856, 1), new Array(4, 1000069, 1), new Array(4, 1001092, 1), new Array(4, 1050311, 1), new Array(4, 1051383, 1), new Array(4, 1072901, 1), new Array(4, 1102667, 1), new Array(4, 1002962, 1), new Array(4, 1002973, 1), new Array(4, 1050153, 1), new Array(4, 1051182, 1), new Array(4, 1072748, 1), new Array(4, 1102620, 1), new Array(4, 1004002, 1), new Array(4, 1050305, 1), new Array(4, 1051373, 1), new Array(4, 1070057, 1), new Array(4, 1071074, 1), new Array(4, 1102632, 1), new Array(4, 1004000, 1), new Array(4, 1052674, 1), new Array(4, 1072877, 1), new Array(4, 1082560, 1), new Array(4, 1702471, 1));
var itemsz3 = new Array(new Array(4, 1003859, 1), new Array(4, 1003855, 1), new Array(4, 1003853, 1), new Array(4, 1003848, 1), new Array(4, 1003849, 1), new Array(4, 1003850, 1), new Array(4, 1003851, 1), new Array(4, 1003847, 1), new Array(4, 1003846, 1), new Array(4, 1003845, 1), new Array(4, 1003844, 1), new Array(4, 1003839, 1), new Array(4, 1003838, 1), new Array(4, 1003837, 1), new Array(4, 1003836, 1), new Array(4, 1003816, 1), new Array(4, 1003817, 1), new Array(4, 1003818, 1), new Array(4, 1003819, 1), new Array(4, 1003820, 1), new Array(4, 1003779, 1), new Array(4, 1003778, 1), new Array(4, 1003777, 1), new Array(4, 1003739, 1), new Array(4, 1003541, 1), new Array(4, 1003542, 1), new Array(4, 1003543, 1), new Array(4, 1003639, 1), new Array(4, 1003640, 1), new Array(4, 1003641, 1), new Array(4, 1003642, 1), new Array(4, 1003538, 1), new Array(4, 1000044, 1), new Array(4, 1001064, 1), new Array(4, 1002665, 1), new Array(4, 1000042, 1), new Array(4, 1002943, 1), new Array(4, 1002995, 1));
var itemsz4 = new Array(new Array(4, 1052579, 1), new Array(4, 1072782, 1), new Array(4, 1082505, 1), new Array(4, 1702399, 1), new Array(4, 1003503, 1), new Array(4, 1050232, 1), new Array(4, 1051282, 1), new Array(4, 1702352, 1), new Array(4, 1003831, 1), new Array(4, 1052605, 1), new Array(4, 1072808, 1), new Array(4, 1082520, 1), new Array(4, 1702415, 1), new Array(4, 1003842, 1), new Array(4, 1051349, 1), new Array(4, 1072816, 1), new Array(4, 1082525, 1), new Array(4, 1102554, 1), new Array(4, 1002824, 1), new Array(4, 1003083, 1), new Array(4, 1102349, 1), new Array(4, 1003855, 1), new Array(4, 1052245, 1), new Array(4, 1072438, 1), new Array(4, 1000062, 1), new Array(4, 1040192, 1), new Array(4, 1060180, 1), new Array(4, 1001089, 1), new Array(4, 1041194, 1), new Array(4, 1061203, 1), new Array(4, 1001062, 1), new Array(4, 1051220, 1), new Array(4, 1081007, 1), new Array(4, 1000042, 1), new Array(4, 1050178, 1), new Array(4, 1070019, 1), new Array(4, 1002885, 1), new Array(4, 1051261, 1), new Array(4, 1001065, 1), new Array(4, 1051252, 1), new Array(4, 1071031, 1),
new Array(4, 1702328, 1), new Array(4, 1001085, 1), new Array(4, 1051302, 1), new Array(4, 1071044, 1), new Array(4, 1000058, 1), new Array(4, 1050247, 1),
new Array(4, 1070028, 1));
var itemsz5 = new Array(new Array(4, 1052032, 1), new Array(4, 1052033, 1), new Array(4, 1052034, 1), new Array(4, 1052020, 1), new Array(4, 1052021, 1), new Array(4, 1052022, 1), new Array(4, 1052023, 1), new Array(4, 1051256, 1), new Array(4, 1050210, 1), new Array(4, 1051192, 1), new Array(4, 1052209, 1), new Array(4, 1050152, 1), new Array(4, 1051180, 1), new Array(4, 1052245, 1), new Array(4, 1052495, 1), new Array(4, 1052586, 1), new Array(4, 1052601, 1), new Array(4, 1052603, 1), new Array(4, 1052605, 1));
var itemsz6 = new Array(new Array(4, 1102376, 1), new Array(4, 1102377, 1), new Array(4, 1102378, 1), new Array(4, 1102356, 1), new Array(4, 1102288, 1), new Array(4, 1102389, 1), new Array(4, 1102390, 1), new Array(4, 1102450, 1), new Array(4, 1102451, 1), new Array(4, 1102452, 1), new Array(4, 1102466, 1), new Array(4, 1102546, 1), new Array(4, 1102547, 1), new Array(4, 1102548, 1));
var itemsz7 = new Array(new Array(4, 1702155, 1), new Array(4, 1702174, 1), new Array(4, 1702191, 1), new Array(4, 1702196, 1), new Array(4, 1702211, 1), new Array(4, 1702217, 1), new Array(4, 1702269, 1), new Array(4, 1702270, 1), new Array(4, 1702271, 1), new Array(4, 1702272, 1), new Array(4, 1702273, 1), new Array(4, 1702287, 1), new Array(4, 1702288, 1), new Array(4, 1702291, 1), new Array(4, 1702293, 1), new Array(4, 1702299, 1), new Array(4, 1702306, 1), new Array(4, 1702308, 1), new Array(4, 1702309, 1), new Array(4, 1702330, 1), new Array(4, 1702334, 1), new Array(4, 1702336, 1), new Array(4, 1702337, 1), new Array(4, 1702347, 1), new Array(4, 1702348, 1), new Array(4, 1702350, 1), new Array(4, 1702352, 1), new Array(4, 1702357, 1), new Array(4, 1702367, 1), new Array(4, 1702368, 1), new Array(4, 1702399, 1));
var itemsz8 = new Array(new Array(4, 1050210, 1), new Array(4, 1051256, 1), new Array(4, 1702334, 1), new Array(4, 1050142, 1), new Array(4, 1051166, 1), new Array(4, 1702174, 1), new Array(4, 1042241, 1), new Array(4, 1062156, 1), new Array(4, 1702367, 1), new Array(4, 1042237, 1), new Array(4, 1062043, 1), new Array(4, 1702368, 1), new Array(4, 1003636, 1), new Array(4, 1052536, 1), new Array(4, 1102491, 1), new Array(4, 1702375, 1), new Array(4, 1002995, 1), new Array(4, 1052209, 1), new Array(4, 1051192, 1), new Array(4, 1702289, 1), new Array(4, 1002943, 1), new Array(4, 1050152, 1), new Array(4, 1051180, 1), new Array(4, 1702217, 1), new Array(4, 1000051, 1), new Array(4, 1001077, 1), new Array(4, 1050228, 1), new Array(4, 1051279, 1), new Array(4, 1072646, 1), new Array(4, 1102367, 1), new Array(4, 1000050, 1), new Array(4, 1001076, 1), new Array(4, 1050227, 1), new Array(4, 1051278, 1), new Array(4, 1702348, 1), new Array(4, 1003422, 1), new Array(4, 1050226, 1), new Array(4, 1051276, 1), new Array(4, 1070024, 1), new Array(4, 1071036, 1), new Array(4, 1102355, 1),
new Array(4, 1001075, 1), new Array(4, 1051277, 1), new Array(4, 1071037, 1), new Array(4, 1102356, 1), new Array(4, 1702347, 1), new Array(4, 1702269, 1),
new Array(4, 1702270, 1), new Array(4, 1702271, 1), new Array(4, 1702272, 1), new Array(4, 1702273, 1), new Array(4, 1003398, 1), new Array(4, 1003399, 1),
new Array(4, 1003400, 1), new Array(4, 1003401, 1), new Array(4, 1003402, 1), new Array(4, 1003109, 1), new Array(4, 1052275, 1), new Array(4, 1072448, 1),
new Array(4, 1102245, 1), new Array(4, 1702275, 1), new Array(4, 1002785, 1), new Array(4, 1022068, 1), new Array(4, 1042142, 1), new Array(4, 1062093, 1), new Array(4, 1702155, 1), new Array(4, 1112904, 1));

var itemCategorys = new Array("#rSET 1#k#b[10개] 물범, 신의아이, 슈퍼스타, 시원한바타,           메이플야구,샐리멘더, 금방울, 골프, ","#rSET 2#k#b[10개] 초코퐁듀, 그레이핑크, 오데트오딜,          폭신구름양, 페어리, 버클러, 꼬꼬닭, 아이스썸머,", "#rSET 3#k#b[10개] 쇼퍼홀릭, 마스터포니, 엔젤, 소울베어,    은월, 이국적인축제, 암염의속죄자, 소악마,", "#r단품#k#b[10개] 한정모자#k", "#rSET 4#k#b[10개] 제논틱, 홍차, 아기양, 서큐버스, 식목일,    샤오슈, 엘리자베스, 나폴레옹, 인형의집, 핑크엔젤, 꽃아씨, 사또, 꽃도령#k", "#r단품#k#b[10개] 한정한벌#k", "#r단품#k#b[10개] 한정망토#k", "#r단품#k#b[10개] 한정무기#K", "#rSET 4#k#b[10개] 시엘, 한복, 수피아, 아쿠아, 로얄네이비,    마린보이, 엘븐스피릿, 스노우, 팬텀, 시그너스, 기사단장,    로얄레인보우, 바캉스레인보우, #K");


var status = -1;
var menuSelect = -1;
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
	var leaf = cm.itemQuantity(4310027);
        var trade = "한정캐시 아이템 상점입니다. 어떤 아이템을 원하세요?\r\n아, 참고로 한정캐시 아이템은 #b[레전드 코인]#k 10개로 교환하실수 있습니다. #b[레전드 코인]#k은 #r홍보#k로 지급한다고 하네요.\r\n";
        for (var i = 0; i < itemCategorys.length; i++) {
            trade += "#L"+i+"#"+itemCategorys[i]+"#l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 1) {
        menuSelect = selection;
        var trade = "원하는 아이템을 골라보세요.\r\n\r\n";
        var itemsArray = getArray(selection);
        for (var i = 0;i < itemsArray.length; i++) {
            trade += "#L"+i+"##i"+itemsArray[i][1]+"# #z"+itemsArray[i][1]+"##l\r\n";
        }
        cm.sendSimple(trade);
    } else if (status == 2) {
        select = selection;
        var itemsArray = getArray(menuSelect);
        cm.sendYesNo("레전드 코인 "+itemsArray[select][0]+"개를 #b#i"+itemsArray[select][1]+"# #z"+itemsArray[select][1]+"#으로 교환 하시겠습니까?");
    } else if (status == 3) {
        var itemsArray = getArray(menuSelect);
        if (cm.haveItem(4310027, itemsArray[select][0]) && cm.canHold(itemsArray[select][1])) {
            cm.gainItem(4310027, -itemsArray[select][0]);
            cm.gainItem(itemsArray[select][1], itemsArray[select][2]);
            cm.sendOk("교환완료! 인벤토리를 확인해봐!");
            cm.dispose();
        } else {
            cm.sendOk("인벤토리가 가득 찼거나 레전드 코인이 부족한것 같네요.");
            cm.dispose();
            return;
        }
    }
}

function getArray(sel) {
if (sel==0)return itemsz0;
if (sel==1)return itemsz1;
if (sel==2)return itemsz2;
if (sel==3)return itemsz3;
if (sel==4)return itemsz4;
if (sel==5)return itemsz5;
if (sel==6)return itemsz6;
if (sel==7)return itemsz7;
if (sel==8)return itemsz8;
}