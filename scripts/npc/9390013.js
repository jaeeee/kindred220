/*
 * Mady By Spirit(Spiritcube)
 */
var items = new Array(new Array(3010636,1,100), new Array(3010637,1,100), new Array(3010624,1,100), new Array(3012017,1,100), new Array(3010613,1,100), new Array(3010612,1,100), new Array(3010601,1,100), new Array(3010600,1,100), new Array(3010598,1,100), new Array(3010592,1,100), new Array(3010590,1,100), new Array(3010582,1,100), new Array(3010581,1,100), new Array(3010577,1,100), new Array(3010576,1,100), new Array(3010575,1,100), new Array(3010574,1,100), new Array(3010573,1,100), new Array(3010572,1,100), new Array(3010571,1,100), new Array(3010569,1,100), new Array(3010564,1,100), new Array(3010562,1,100), new Array(3010561,1,100), new Array(3010558,1,100), new Array(3010557,1,100), new Array(3010556,1,100), new Array(3010553,1,100), new Array(3010551,1,100), new Array(3010550,1,100), new Array(3010549,1,100), new Array(3010548,1,100), new Array(3010546,1,100), new Array(3010545,1,100), new Array(3010542,1,100), new Array(3010541,1,100), new Array(3010540,1,100), new Array(3010539,1,100), new Array(3010538,1,100), new Array(3010537,1,100), new Array(3010526,1,100), new Array(3010525,1,100), new Array(3010524,1,100), new Array(3010523,1,100), new Array(3010520,1,100), new Array(3010519,1,100), new Array(3010515,1,100), new Array(3010506,1,100), new Array(3010563,1,100), new Array(3010092,1,100), new Array(3010194,1,100), new Array(3010307,1,100), new Array(3010215,1,100), new Array(3010216,1,100), new Array(3010565,1,100), new Array(3010319,1,100), new Array(3010322,1,100), new Array(3010544,1,100), new Array(3010432,1,100), new Array(3010568,1,100), new Array(3010566,1,100), new Array(3010567,1,100), new Array(3010370,1,100), new Array(3010365,1,100), new Array(3010555,1,100), new Array(3010554,1,100), new Array(3010552,1,100), new Array(3010562,1,100), new Array(3010547,1,100), new Array(3010493,1,100), new Array(3010458,1,100), new Array(3010505,1,100), new Array(3010512,1,100), new Array(3010514,1,100), new Array(3010513,1,100), new Array(3010522,1,100), new Array(3010531,1,100), new Array(3010526,1,100), new Array(3010525,1,100), new Array(3010543,1,100), new Array(3010584,1,100), new Array(3010651,1,100), new Array(3010652,1,100), new Array(3010653,1,100), new Array(3010654,1,100), new Array(3010655,1,100), new Array(3010656,1,100),new Array(3015263,1,100),new Array(3015272,1,100),new Array(3015236,1,100),new Array(3015041,1,100),new Array(3015301,1,100),new Array(3015245,1,100),new Array(3015264,1,100),new Array(3015277,1,100),new Array(3015278,1,100),new Array(3015302,1,100),new Array(3015297,1,100),new Array(3015248,1,100),new Array(3015161,1,100),new Array(3015167,1,100),new Array(3015172,1,100),new Array(3015155,1,100),new Array(3015174,1,100),new Array(3015175,1,100));

function start() {
 var txt = "어떤 의자를 구매하시습니까?\r\n";
 for (var i = 0; i < items.length; i++) {
 txt += "#L"+i+"# #i"+items[i][0]+"# #t"+items[i][0]+"# (x "+items[i][1]+")\r\n";
 }
 cm.sendSimple(txt);
}

function action(m,t,s) {
 meso = items[s][2] * 10;
 if (cm.getMeso() >= meso) {
 cm.gainMeso(-meso);
 cm.gainItem(items[s][0], items[s][1]);
 cm.sendOk("성공적으로 구매하였습니다.");
 } else {
 cm.sendOk("메소가 부족합니다.\r\n#b(아이템 가격 : "+meso+")");
 }
 cm.dispose();
}

 
