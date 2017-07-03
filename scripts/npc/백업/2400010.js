/*
후원 스크립트
*/

var status = -1;

var cost;
var item;
var quantity;
var name;
var allstat;
var damage;
var upgrade;
var equip = 0;
var cost2;
var cost3;
var cost4;
var text1;
var text2;
var meso;
var buymeso;


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
 
        var text = "※ #b#h #님은 #r"+cm.getRC()+"#b 포인트를 보유하고 있습니다.#k\r\n";
	text += "※ #d추가됐으면 하는 아이템이 있으면 GM한테 말하면 됩니다.#k";
	text += "※ #r후원포인트 ×2배 지급 이벤트가 진행중입니다.#k";
	text +="\r\n\r\n\r\n"
	text += "#e#b[쥬얼 악세서리 아이템]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L3000##i1112763#";
	text += "#L3001##i1112775#";
	text += "#L3002##i1112771#";
	text += "#L3003##i1112767#";
	text += "#L200##i1112586#";
	text += "#L3024##i1112135#\r\n";
	text += "#L3004##i1132192#";
	text += "#L3005##i1132204#";
	text += "#L3006##i1132200#";
	text += "#L3007##i1132196#";
	text += "#L201##i1112663#";
	text += "#L3025##i1112238#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[캐릭터 반지 아이템]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L3018##i1112900#";
	text += "#L3019##i1112901#";
	text += "#L3020##i1112908#";
	text += "#L3021##i1112924#";
	text += "#L3022##i1112925#";
	text += "#L3023##i1112926#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[투명 아이템 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L3##i1002186#";
	text += "#L999##i1012289#";
	text += "#L7##i1032024#";
	text += "#L8##i1022079#";
	text += "#L5##i1072153#";
	text += "#L6##i1082102#";
	text += "#L4##i1102039##l";
	text += "\r\n\r\n\r\n";

/*
	text += "\r\n#l#e<해신 세트>#n\r\n";
	text += "#L127# #i1000021# (기본 1200(+a)원)　　";
	text += "#L128# #i1050114# (기본 1500(+a)원)\r\n";
	text += "#L129# #i1010004# (기본 1200(+a)원)　　";
	text += "#L130# #i1000022# (기본 1200(+a)원)\r\n";
	text += "#L131# #i1050115# (기본 1500(+a)원)　　";
	text += "#L132# #i1010005# (기본 1200(+a)원)\r\n";
	text += "#L133# #i1001028# (기본 1200(+a)원)　　";
	text += "#L134# #i1051115# (기본 1500(+a)원)\r\n";
	text += "#L135# #i1071010# (기본 1200(+a)원)\r\n\r\n";
*/

	text += "#e#b[바캉스 레인보우 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L68##i1002785#";
	text += "#L69##i1022068#";
	text += "#L70##i1042142#";
	text += "#L71##i1062093#";
	text += "#L41##i1702155#";
	text += "#L1001##i1112904##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[로얄 레인보우 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L97##i1003109#";
	text += "#L98##i1052275#";
	text += "#L99##i1072448#";
	text += "#L100##i1102245#";
	text += "#L101##i1702275##l";
	text += "#l\r\n\r\n\r\n";
	
	text += "#e#b[기사단장 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L64##i1003398#";
	text += "#L61##i1003399#";
	text += "#L62##i1003400#";
	text += "#L63##i1003401#";
	text += "#L65##i1003402#\r\n";
	text += "#L27##i1702269#";
	text += "#L28##i1702270#";
	text += "#L29##i1702271#";
	text += "#L30##i1702272#";
	text += "#L31##i1702273##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[시그너스 세트#r(여)#b]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2000##i1001075#";
	text += "#L2001##i1051277#";
	text += "#L2003##i1071037#";
	text += "#L2004##i1102356#";
	text += "#L2005##i1702347##l";
	text += "\r\n\r\n\r\n"

	text += "#e#b[비커밍 팬텀 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2037##i1003422#";
	text += "#L2038##i1050226#";
	text += "#L2040##i1051276#";
	text += "#L2039##i1070024#";
	text += "#L2041##i1071036#";
	text += "#L2042##i1102355##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[윈터 스노우 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L56##i1000050##l";
	text += "#L58##i1001076##l";
	text += "#L72##i1050227##l";
	text += "#L73##i1051278##l";
	text += "#L78##i1702348##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[엘븐 스피릿 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L55##i1000051#";
	text += "#L57##i1001077#";
	text += "#L74##i1050228#";
	text += "#L75##i1051279#";
	text += "#L76##i1072646#";
	text += "#L77##i1102367##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[마린 보이/걸 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L79##i1002943#";
	text += "#L80##i1050152#";
	text += "#L81##i1051180#";
	text += "#L42##i1702217##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[로얄 네이비 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L102##i1002995#";
	text += "#L103##i1052209#";
	text += "#L104##i1051192#";
	text += "#L105##i1702289##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[아쿠아 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L82##i1003636#";
	text += "#L83##i1052536#";
	text += "#L84##i1102491#";
	text += "#L43##i1702375##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[핑크/블랙 수피아 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L85##i1042241#";
	text += "#L86##i1062156#";
	text += "#L45##i1702367##l　  ";
	text += "#L87##i1042237#";
	text += "#L88##i1062043#";
//	text += "#L54##i1102453#";
	text += "#L46##i1702368##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[천공의 시엘/퓨전 한복 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
//	text += "#L89##i1003376#";
	text += "#L90##i1050210#";
	text += "#L91##i1051256#";
	text += "#L92##i1702334##l#e　 #n";
	text += "#L112##i1050142#";
	text += "#L113##i1051166#";
	text += "#L114##i1702174##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[꽃도령 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L93##i1003217#";
	text += "#L94##i1050188#";
	text += "#L95##i1070006#";
	text += "#L14##i1102290#";
	text += "#L96##i1702306##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[꽃아씨/늘푸른 사또 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L107##i1001085#";
	text += "#L109##i1051302#";
	text += "#L111##i1071044##l　 ";
	text += "#L106##i1000058#";
	text += "#L108##i1050247#";
	text += "#L110##i1070028##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[인형의 집/핑크엔젤 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L117##i1002885#";
	text += "#L118##i1051261##l　";
	text += "#L156##i1001065#";
	text += "#L157##i1051252#";
	text += "#L158##i1071031#";
	text += "#L51##i1702328##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[엘리자베스/나폴레옹 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L119##i1001062#";
	text += "#L120##i1051220#";
	text += "#L121##i1081007##l　";
	text += "#L123##i1000042#";
	text += "#L124##i1050178#";
	text += "#L125##i1070019##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[샤오슈 토끼 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2010##i1000062#";
	text += "#L2011##i1040192#";
	text += "#L2012##i1060180##l　  ";
	text += "#L2013##i1001089#";
	text += "#L2014##i1041194#";
	text += "#L2015##i1061203##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[식목일 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2016##i1002824#";
	text += "#L2017##i1003083#";
	text += "#L2018##i1102349##l#e　 #n";
	text += "#L2019##i1003855#";
	text += "#L2020##i1052245#";
	text += "#L2021##i1072438##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[서큐버스 세트#r(여)#b]#k#n\r\n";
	text += "#L2022##i1003842#";
	text += "#L2023##i1051349#";
	text += "#L2024##i1072816#";
	text += "#L2025##i1082525#";
	text += "#L2026##i1102554##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[아기양 잠옷 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2027##i1003831#";
	text += "#L2028##i1052605#";
	text += "#L2029##i1072808#";
	text += "#L2030##i1082520#";
	text += "#L52##i1702415##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[오후의 홍차 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2031##i1003503#";
	text += "#L2032##i1050232#";
	text += "#L2033##i1051282#";
	text += "#L2034##i1702352##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[제논틱 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2035##i1052579#";
	text += "#L2036##i1072782#";
	text += "#L2099##i1082505#";
	text += "#L53##i1702399##l";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[골프 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2100##i1003867#";
	text += "#L2101##i1042264#";
	text += "#L2102##i1060182#";
	text += "#L2103##i1061206#";
	text += "#L2104##i1072823#";
	text += "#L2105##i1082527#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[금방울 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2107##i1003865#";
	text += "#L2108##i1050284#";
	text += "#L2109##i1051350#";
	text += "#L2110##i1072821#";
	text += "#L2112##i1102564#";
	text += "#L2113##i1702423#"; // 도꺠비불
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[샐리맨더 세트#r(여)#b]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2114##i1003892#";
	text += "#L2115##i1051352#";
	text += "#L2116##i1072831#";
	text += "#L2117##i1102583#";
	text += "#L2118##i1702433#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[메이플 야구 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2121##i1003909#";
	text += "#L2122##i1050291#";
	text += "#L2123##i1051357#";
	text += "#L2124##i1072836#";
	text += "#L2125##i1102593#";
	text += "#L2126##i1702442#"; // 야구배트
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[시원한 바다 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2127##i1003920#";
	text += "#L2128##i1050293#";
	text += "#L2129##i1051359#";
	text += "#L2130##i1072843#";
	text += "#L2131##i1702446#"; // 해달과 함꼐
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[슈퍼스타 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2132##i1003945#";
	text += "#L2133##i1050296#";
	text += "#L2134##i1051362#";
	text += "#L2135##i1072852#";
	text += "#L2136##i1102608#";
	text += "#L2137##i1702451#"; // 야구배트
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[신의 아이 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2138##i1003953#";
	text += "#L2139##i1050298#";
	text += "#L2140##i1051365#";
	text += "#L2143##i1702453#"; // 아스트라피
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[퍼펙트 하프물범 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2144##i1003776#";
	text += "#L2145##i1052587#";
	text += "#L2146##i1082493#";
	text += "#L2147##i1702454#"; // 파도 물개 쿠션
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[아이스 썸머 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2149##i1003957#";
	text += "#L2150##i1003958#";
	text += "#L2151##i1050300#";
	text += "#L2152##i1051367#";
	text += "#L2153##i1072862#";
	text += "#L2154##i1702457#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[꼬꼬닭 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2155##i1003965#";
	text += "#L2156##i1052661#";
	text += "#L2157##i1082549#";
	text += "#L2158##i1702461#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[메이드/버클러 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2171##i1003971#";
	text += "#L2160##i1003972#";
	text += "#L2161##i1050302#";
	text += "#L2162##i1051369#";
	text += "#L2163##i1072868#";
	text += "#L2164##i1702464#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[마스터 페어리 세트]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L2165##i1003955#";
	text += "#L2166##i1050299#";
	text += "#L2167##i1051366#";
	text += "#L2168##i1072860#";
	text += "#L2169##i1082555#";
	text += "#L2170##i1702456#";
	text += "#l\r\n\r\n\r\n";

	text += "#e#b[업그레이드 망토]#k#n (가격 : #Cgray#2000#r + ＠#Cgray#원#k)\r\n";
	text += "#L37##i1102546#";
	text += "#L38##i1102547#";
	text += "#L39##i1102548#";
	text += "#L11##i1102376#";
	text += "#L12##i1102377#";
	text += "#L13##i1102378##l\r\n";
	text += "#L17##i1102307#";
	text += "#L18##i1102308#";
	text += "#L40##i1102309##l#e #n";
	text += "#L10##i1102466#";
	text += "#L25##i1102450#";
	text += "#L26##i1102451##l";
	text += "\r\n\r\n\r\n";

	text += "#e#b[업그레이드 무기]#k#n (가격 : #Cgray#1000#r + ＠#Cgray#원#k)\r\n";
	text += "#L122##i1702291#";
	text += "#L32##i1702361#";
	text += "#L33##i1702365#";
	text += "#L50##i1702364#";
	text += "#L41##i1702155#"; // 레인보우스타
	text += "#L49##i1702196#\r\n";
	text += "#L67##i1702211#";
	text += "#L35##i1702400#";
	text += "#L34##i1702366#";
	text += "#L48##i1702398#";
	text += "#L36##i1702416#";
	text += "#L47##i1702397##l"; // 미리내
	text += "#L2106##i1702424#"; // 스타일리쉬 아이언
	text += "#L2119##i1702444#"; // 페르마타
	text += "#L2120##i1702443#"; // 인형사의 약속
	text += "#L2148##i1702340#"; // 모자 속 토끼
	text += "#L2159##i1702466#"; // 민트 쇼콜라티에 스틱

        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 2){
	    item = 4001126;
	    cost = 2000;
	    quantity = 4000;
	    name = "단풍잎";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2106) {
	    item = 1702424;
	    quantity = 1;
	    cost = 1000;
	    name = "스타일러쉬 아이언";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2119) {
	    item = 1702444;
	    quantity = 1;
	    cost = 1000;
	    name = "페르마타";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2120) {
	    item = 1702443;
	    quantity = 1;
	    cost = 1000;
	    name = "인형사의 약속";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2148) {
	    item = 1702340;
	    quantity = 1;
	    cost = 1000;
	    name = "모자 속 토끼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2159) {
	    item = 1702466;
	    quantity = 1;
	    cost = 1000;
	    name = "민트 쇼콜라티에 스틱";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2100) {
	    item = 1003867;
	    quantity = 1;
	    cost = 1000;
	    name = "나이스샷 썬캡";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2101) {
	    item = 1042264;
	    quantity = 1;
	    cost = 1000;
	    name = "카라 골프 나시";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2102) {
	    item = 1060182;
	    quantity = 1;
	    cost = 1000;
	    name = "골프 반바지";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2103) {
	    item = 1061206;
	    quantity = 1;
	    cost = 1000;
	    name = "골프 스커트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2104) {
	    item = 1072823;
	    quantity = 1;
	    cost = 1000;
	    name = "골프 운동화";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2105) {
	    item = 1082527;
	    quantity = 1;
	    cost = 1000;
	    name = "골프 장갑";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2107) {
	    item = 1003865;
	    quantity = 1;
	    cost = 1000;
	    name = "별빛나래";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2108) {
	    item = 1050284;
	    quantity = 1;
	    cost = 1000;
	    name = "금령도령";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2109) {
	    item = 1051350;
	    quantity = 1;
	    cost = 1000;
	    name = "금령아씨";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2110) {
	    item = 1072821;
	    quantity = 1;
	    cost = 1000;
	    name = "금령꽃신";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2112) {
	    item = 1102564;
	    quantity = 1;
	    cost = 1000;
	    name = "천의무봉";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2113) {
	    item = 1702423;
	    quantity = 1;
	    cost = 1000;
	    name = "도깨비불";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2114) {
	    item = 1003892;
	    quantity = 1;
	    cost = 1000;
	    name = "리프 다이아";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2115) {
	    item = 1051352;
	    quantity = 1;
	    cost = 1000;
	    name = "테르미도르";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2116) {
	    item = 1072831;
	    quantity = 1;
	    cost = 1000;
	    name = "플레임 부츠";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2117) {
	    item = 1102583;
	    quantity = 1;
	    cost = 1000;
	    name = "아기드래곤 포비";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2118) {
	    item = 1702433;
	    quantity = 1;
	    cost = 1000;
	    name = "샐리맨더";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2121) {
	    item = 1003909;
	    quantity = 1;
	    cost = 1000;
	    name = "핑크소다 캡";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2122) {
	    item = 1050291;
	    quantity = 1;
	    cost = 1000;
	    name = "팅키 베이스볼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2123) {
	    item = 1051357;
	    quantity = 1;
	    cost = 1000;
	    name = "핑키 베이스볼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2124) {
	    item = 1072836;
	    quantity = 1;
	    cost = 1000;
	    name = "베이스볼 슈즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2125) {
	    item = 1102593;
	    quantity = 1;
	    cost = 1000;
	    name = "두둥실 야구공";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2126) {
	    item = 1702442;
	    quantity = 1;
	    cost = 1000;
	    name = "야구배트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2127) {
	    item = 1003920;
	    quantity = 1;
	    cost = 1000;
	    name = "하와이안 페도라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2128) {
	    item = 1050293;
	    quantity = 1;
	    cost = 1000;
	    name = "해변의 쿨가이";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2129) {
	    item = 1051359;
	    quantity = 1;
	    cost = 1000;
	    name = "해변의 여인";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2130) {
	    item = 1072843;
	    quantity = 1;
	    cost = 1000;
	    name = "버블버블 플랍";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2131) {
	    item = 1702446;
	    quantity = 1;
	    cost = 1000;
	    name = "해달과 함께";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2132) {
	    item = 1003945;
	    quantity = 1;
	    cost = 1000;
	    name = "슈퍼스타 크라운";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2133) {
	    item = 1050296;
	    quantity = 1;
	    cost = 1000;
	    name = "슈퍼스타 슈트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2134) {
	    item = 1051362;
	    quantity = 1;
	    cost = 1000;
	    name = "슈퍼스타 원피스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2135) {
	    item = 1072852;
	    quantity = 1;
	    cost = 1000;
	    name = "슈퍼스타 슈즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2136) {
	    item = 1102608;
	    quantity = 1;
	    cost = 1000;
	    name = "슈퍼스타 미러볼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2137) {
	    item = 1702451;
	    quantity = 1;
	    cost = 1000;
	    name = "슈퍼스타 마이크";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");


	}else if (sel == 2138) {
	    item = 1003953;
	    quantity = 1;
	    cost = 1000;
	    name = "비쥬 드 륀느";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2139) {
	    item = 1050298;
	    quantity = 1;
	    cost = 1000;
	    name = "알파 세라핌";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2140) {
	    item = 1051365;
	    quantity = 1;
	    cost = 1000;
	    name = "베타 세라핌";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2143) {
	    item = 1702453;
	    quantity = 1;
	    cost = 1000;
	    name = "아스트라피";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2144) {
	    item = 1003776;
	    quantity = 1;
	    cost = 1000;
	    name = "하프물범 모자";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2145) {
	    item = 1052587;
	    quantity = 1;
	    cost = 1000;
	    name = "하프물범 인형옷";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2146) {
	    item = 1082493;
	    quantity = 1;
	    cost = 1000;
	    name = "하프물범 인형장갑";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2147) {
	    item = 1702454;
	    quantity = 1;
	    cost = 1000;
	    name = "파도 물개 쿠션";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2149) {
	    item = 1003957;
	    quantity = 1;
	    cost = 1000;
	    name = "민트 찹쌀아이스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2150) {
	    item = 1003958;
	    quantity = 1;
	    cost = 1000;
	    name = "핑크 찹쌀아이스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2151) {
	    item = 1050300;
	    quantity = 1;
	    cost = 1000;
	    name = "프레쉬 아이스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2152) {
	    item = 1051367;
	    quantity = 1;
	    cost = 1000;
	    name = "프레쉬 아이스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2153) {
	    item = 1072862;
	    quantity = 1;
	    cost = 1000;
	    name = "하트푸딩 슬리퍼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2154) {
	    item = 1702457;
	    quantity = 1;
	    cost = 1000;
	    name = "아이스바 맛나";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2155) {
	    item = 1003965;
	    quantity = 1;
	    cost = 1000;
	    name = "꼬꼬 인형탈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2156) {
	    item = 1052661;
	    quantity = 1;
	    cost = 1000;
	    name = "꼬꼬 인형옷";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2157) {
	    item = 1082549;
	    quantity = 1;
	    cost = 1000;
	    name = "꼬꼬 인형장갑";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2158) {
	    item = 1702461;
	    quantity = 1;
	    cost = 1000;
	    name = "효심 깊은 병아리";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2171) {
	    item = 1003971;
	    quantity = 1;
	    cost = 1000;
	    name = "블루리본 페도라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2160) {
	    item = 1003972;
	    quantity = 1;
	    cost = 1000;
	    name = "블루리본 레이스캡";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2161) {
	    item = 1050302;
	    quantity = 1;
	    cost = 1000;
	    name = "버틀러의 품격";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2162) {
	    item = 1051369;
	    quantity = 1;
	    cost = 1000;
	    name = "메이드의 긍지";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2163) {
	    item = 1072868;
	    quantity = 1;
	    cost = 1000;
	    name = "제복 구두";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2164) {
	    item = 1702464;
	    quantity = 1;
	    cost = 1000;
	    name = "반짝반짝 친구들";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");


	}else if (sel == 2165) {
	    item = 1003955;
	    quantity = 1;
	    cost = 1000;
	    name = "로망 로즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2166) {
	    item = 1050299;
	    quantity = 1;
	    cost = 1000;
	    name = "베이비돌 푸카";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2167) {
	    item = 1051366;
	    quantity = 1;
	    cost = 1000;
	    name = "베이비돌 링카";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2168) {
	    item = 1072860;
	    quantity = 1;
	    cost = 1000;
	    name = "스타 윙클";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2169) {
	    item = 1082555;
	    quantity = 1;
	    cost = 1000;
	    name = "페어리 스파크";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 2170) {
	    item = 1702456;
	    quantity = 1;
	    cost = 1000;
	    name = "페어리 피코";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
































	}else if (sel == 1000){
	    item = 3700010;
	    cost = 30000;
	    quantity = 1;
	    name = "여름 전설의 레전드";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 1000;
	    name = "투명 모자";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 999) {
	    item = 1012289;
	    quantity = 1;
	    cost = 1000;
	    name = "투명 얼굴장식";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 1000;
	    name = "투명 망토";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 1000;
	    name = "투명 신발";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 1000;
	    name = "투명 장갑";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 1000;
	    name = "투명 귀고리";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 1000;
	    name = "투명 안경";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 1001) {
	    item = 1112904;
	    quantity = 1;
	    cost = 1000;
	    name = "레인보우 스타 반지";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2000) {
	    item = 1001075;
	    quantity = 1;
	    cost = 1000;
	    name = "에레브의 별";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2001) {
	    item = 1051277;
	    quantity = 1;
	    cost = 1000;
	    name = "시그너스 드레스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2003) {
	    item = 1071037;
	    quantity = 1;
	    cost = 1000;
	    name = "시그너스 샌들";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2004) {
	    item = 1102356;
	    quantity = 1;
	    cost = 1000;
	    name = "엔젤릭 에메랄드";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2005) {
	    item = 1702347;
	    quantity = 1;
	    cost = 1000;
	    name = "포츈 플래쉬";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2037) {
	    item = 1003422;
	    quantity = 1;
	    cost = 1000;
	    name = "가넷 레이븐 페르소나";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2038) {
	    item = 1050226;
	    quantity = 1;
	    cost = 1000;
	    name = "임페리얼 가넷 수트(남)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2040) {
	    item = 1051276;
	    quantity = 1;
	    cost = 1000;
	    name = "임페리얼 가넷 수트(여)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2039) {
	    item = 1070024;
	    quantity = 1;
	    cost = 1000;
	    name = "가넷 세공 부츠(남)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2041) {
	    item = 1071036;
	    quantity = 1;
	    cost = 1000;
	    name = "가넷 세공 부츠(여)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2042) {
	    item = 1102355;
	    quantity = 1;
	    cost = 1000;
	    name = "쥬얼리 스노우";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3000) {
	    item = 1112763;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 힘의 쥬얼링";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3001) {
	    item = 1112775;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 민첩함의 쥬얼링";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3002) {
	    item = 1112771;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 지혜의 쥬얼링";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3003) {
	    item = 1112767;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 행운의 쥬얼링";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3004) {
	    item = 1132192;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 힘의 쥬얼벨트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3005) {
	    item = 1132204;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 민첩함의 쥬얼벨트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3006) {
	    item = 1132200;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 지혜의 쥬얼벨트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3007) {
	    item = 1132196;
	    quantity = 1;
	    cost = 1000;
	    name = "S급 행운의 쥬얼벨트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");





	}else if (sel == 2010) {
	    item = 1000062;
	    quantity = 1;
	    cost = 1000;
	    name = "포근한 당근 모자";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2011) {
	    item = 1040192;
	    quantity = 1;
	    cost = 1000;
	    name = "그린 토끼티";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2012) {
	    item = 1060180;
	    quantity = 1;
	    cost = 1000;
	    name = "주름 호박바지";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2013) {
	    item = 1001089;
	    quantity = 1;
	    cost = 1000;
	    name = "따듯한 당근 모자";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2014) {
	    item = 1041194;
	    quantity = 1;
	    cost = 1000;
	    name = "핑크 토끼티";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2015) {
	    item = 1061203;
	    quantity = 1;
	    cost = 1000;
	    name = "주름 호박치마";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2016) {
	    item = 1002824;
	    quantity = 1;
	    cost = 1000;
	    name = "새삭 수영모자";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2017) {
	    item = 1003083;
	    quantity = 1;
	    cost = 1000;
	    name = "새싹 이슬";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2018) {
	    item = 1102349;
	    quantity = 1;
	    cost = 1000;
	    name = "나빌레라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2019) {
	    item = 1003855;
	    quantity = 1;
	    cost = 1000;
	    name = "한 잎의 모자";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2020) {
	    item = 1052245;
	    quantity = 1;
	    cost = 1000;
	    name = "잎사귀 가운";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2021) {
	    item = 1072438;
	    quantity = 1;
	    cost = 1000;
	    name = "잎사귀 샌들";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2022) {
	    item = 1003842;
	    quantity = 1;
	    cost = 1000;
	    name = "서큐버스 캡";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2023) {
	    item = 1051349;
	    quantity = 1;
	    cost = 1000;
	    name = "서큐버스 원피스(여)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2024) {
	    item = 1072816;
	    quantity = 1;
	    cost = 1000;
	    name = "서큐버스 슈즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2025) {
	    item = 1082525;
	    quantity = 1;
	    cost = 1000;
	    name = "서큐버스 글러브";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2026) {
	    item = 1102554;
	    quantity = 1;
	    cost = 1000;
	    name = "서큐버스 윙즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2027) {
	    item = 1003831;
	    quantity = 1;
	    cost = 1000;
	    name = "아기양 머리핀";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2028) {
	    item = 1052605;
	    quantity = 1;
	    cost = 1000;
	    name = "아기양 포근잠옷";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2029) {
	    item = 1072808;
	    quantity = 1;
	    cost = 1000;
	    name = "아기양 슬리퍼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2030) {
	    item = 1082520;
	    quantity = 1;
	    cost = 1000;
	    name = "아기양 털장갑";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2031) {
	    item = 1003503;
	    quantity = 1;
	    cost = 1000;
	    name = "앨리스의 티컵";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2032) {
	    item = 1050232;
	    quantity = 1;
	    cost = 1000;
	    name = "캐모마일 티타임(남)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2033) {
	    item = 1051282;
	    quantity = 1;
	    cost = 1000;
	    name = "로즈마리 티타임(여)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2034) {
	    item = 1702352;
	    quantity = 1;
	    cost = 1000;
	    name = "매직허브 티스푼";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2035) {
	    item = 1052579;
	    quantity = 1;
	    cost = 1000;
	    name = "제논틱 네오 수트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2036) {
	    item = 1072782;
	    quantity = 1;
	    cost = 1000;
	    name = "제논틱 네오 슈즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 2099) {
	    item = 1082505;
	    quantity = 1;
	    cost = 1000;
	    name = "제논틱 네오 글러브";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");






	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 1000;
	    name = "엔젤케루빔";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 2000;
	    name = "노빌리타스 아우라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 11) {
	    item = 1102376;                //140
	    quantity = 1;
	    cost = 2000;
	    name = "프쉬케 플로라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 12) {
	    item = 1102377;
	    quantity = 1;
	    cost = 2000;
	    name = "프쉬케 미스틱";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 13) {
	    item = 1102378;
	    quantity = 1;
	    cost = 2000;
	    name = "프쉬케 멜로디";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 1000;
	    name = "꽃비단 날개띠";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 15) {
	    item = 4310034;
	    quantity = 10;
	    cost = 2500;
	    name = "저스티스 코인";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 6000;
	    name = "매그너스 코인";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 2000;
	    name = "샤키엘의 날개";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 2000;
	    name = "베에모트의 날개";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 19) {
	    buymeso =1;
	    cm.sendGetText("메소로 환전을 원하시는 후원포인트를 입력해주세요\r\n\r\n#r※ 1 후원포인트#k = #b20000메소#k");
	}else if (sel == 20) {
	    item = 2430130;
	    quantity = 1;
	    cost = 1500;
	    name = "레지스탕스 에너지 캡슐";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "거대 예티의자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "거대 페페의자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3000;                 //80
	    quantity = 5;
	    name = "긍정의 혼돈 주문서 50%";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 24) {
	    item = 1142593;
	    quantity = 1;
	    cost = 4500;
	    name = "★★13개의 별★★";
//	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 25) {
	    item = 1102450;             //180
	    quantity = 1;
	    cost = 2000;
	    name = "안젤리크 아우라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 2000;
	    name = "다크니스 아우라";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 27) {
	    item = 1702269;
	    quantity = 1;
	    cost = 1000;
	    name = "미하일의 수호";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 28) {
	    item = 1702270;
	    quantity = 1;
	    cost = 1000;
	    name = "오즈의 수호";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 29) {
	    item = 1702271;
	    quantity = 1;
	    cost = 1000;
	    name = "이리나의 수호";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 30) {
	    item = 1702272;
	    quantity = 1;
	    cost = 1000;
	    name = "아카르트의 수호";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 31) {
	    item = 1702273;
	    quantity = 1;
	    cost = 1000;
	    name = "호크아이의 수호";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 32) {
	    item = 1702361;
	    quantity = 1;
	    cost = 1000;
	    name = "헌터 호크";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 33) {
	    item = 1702365;
	    quantity = 1;
	    cost = 1000;
	    name = "곰돌이는 재간둥이";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 34) {
	    item = 1702366;
	    quantity = 1;
	    cost = 1000;
	    name = "냉동 상어";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 35) {
	    item = 1702400;
	    quantity = 1;
	    cost = 1000;
	    name = "스우의 토끼인형";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 36) {
	    item = 1702416;
	    quantity = 1;
	    cost = 1000;
	    name = "당근의 제왕";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 37) {
	    item = 1102546;
	    quantity = 1;
	    cost = 2000;
	    name = "파랑새의 꿈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 38) {
	    item = 1102547;
	    quantity = 1;
	    cost = 2000;
	    name = "자수정의 꿈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 39) {
	    item = 1102548;
	    quantity = 1;
	    cost = 2000;
	    name = "잎새의 꿈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 40) {
	    item = 1102309;
	    quantity = 1;
	    cost = 2000;
	    name = "야누스의 날개";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 41) {
	    item = 1702155;
	    quantity = 1;
	    cost = 1000;
	    name = "레인보우 스타";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 42) {
	    item = 1702217;
	    quantity = 1;
	    cost = 1000;
	    name = "더키 튜브";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 43) {
	    item = 1702375;
	    quantity = 1;
	    cost = 1000;
	    name = "아틀란티스";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 44) {
	    item = 1702336;
	    quantity = 1;
	    cost = 1000;
	    name = "로드 템페스트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 45) {
	    item = 1702367;
	    quantity = 1;
	    cost = 1000;
	    name = "로즈 수피아";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 46) {
	    item = 1702368;
	    quantity = 1;
	    cost = 1000;
	    name = "아이리스 수피아";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 47) {
	    item = 1702397;
	    quantity = 1;
	    cost = 1000;
	    name = "아롱아롱 미리내";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 48) {
	    item = 1702398;
	    quantity = 1;
	    cost = 1000;
	    name = "램프의 요정";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 53) {
	    item = 1702399;
	    quantity = 1;
	    cost = 1000;
	    name = "네오 라이트 세이버";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 50) {
	    item = 1702364;
	    quantity = 1;
	    cost = 1000;
	    name = "드래곤 슬레이브";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 51) {
	    item = 1702328;
	    quantity = 1;
	    cost = 1000;
	    name = "핑크엔젤 주사기";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 52) {
	    item = 1702415;
	    quantity = 1;
	    cost = 1000;
	    name = "꿈꾸는 사탕 베개";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 49) {
	    item = 1702196;
	    quantity = 1;
	    cost = 1000;
	    name = "날아라 파랑새!";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 55) {
	    item = 1000051;
	    quantity = 1;
	    cost = 1000;
	    name = "엘븐 스피릿 밴드 (남)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 56) {
	    item = 1000050;
	    quantity = 1;
	    cost = 1000;
	    name = "민트 스노우 크리스탈 (남)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 57) {
	    item = 1001077;
	    quantity = 1;
	    cost = 1000;
	    name = "엘븐 스피릿 밴드 (여)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 58) {
	    item = 1001076;
	    quantity = 1;
	    cost = 1000;
	    name = "체리 스노우 크리스탈 (여)";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 61) {
	    item = 1003399;
	    quantity = 1;
	    cost = 1000;
	    name = "다크 오즈";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 62) {
	    item = 1003400;
	    quantity = 1;
	    cost = 1000;
	    name = "다크 이리나";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 63) {
	    item = 1003401;
	    quantity = 1;
	    cost = 1000;
	    name = "다크 이카르트";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 64) {
	    item = 1003398;
	    quantity = 1;
	    cost = 1000;
	    name = "다크 미하일";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 65) {
	    item = 1003402;
	    quantity = 1;
	    cost = 1000;
	    name = "다크 호크아이";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 59) {
	    item = 1102385;
	    quantity = 1;
	    cost = 1000;
	    name = "룩스 케루빔";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 60) {
	    item = 1102386;
	    quantity = 1;
	    cost = 1000;
	    name = "낙스 케루빔";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 54) {
	    item = 1102453;
	    quantity = 1;
	    cost = 2000;
	    name = "드라이어드";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 66) {
	    item = 1142558;
	    quantity = 1;
	    cost = 4500;
	    name = "언리미티드 훈장";
//	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3008) {
	    item = 1142249;
	    quantity = 1;
	    cost = 4500;
	    name = "나는야 럭키가이★";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3009) {
	    item = 1182006;
	    quantity = 1;
	    cost = 4500;
	    name = "전설의 용사 뱃지";
//	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3010) {
	    item = 1182011;
	    quantity = 1;
	    cost = 4500;
	    name = "정의로운 영웅의 뱃지";
//	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3011) {
	    item = 1182023;
	    quantity = 1;
	    cost = 1000;
//	    name = "메이플스쿨 금 뱃지";
	    equip = 1;
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");

	}else if (sel == 67) {
	    item = 1702211;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "블리자드 스틱";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 68) {
	    item = 1002785;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "레인보우 썬캡";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 69) {
	    item = 1022068;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "화이트 쉐이드";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 70) {
	    item = 1042142;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "레인보우 탑";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 71) {
	    item = 1062093;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "그래스 그린 팬츠";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 72) {
	    item = 1050227;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "민트 스노우 케이프";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 73) {
	    item = 1051278;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "체리 스노우 케이프";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 74) {
	    item = 1050228;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘븐 스피릿 코트 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 75) {
	    item = 1051279;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘븐 스피릿 코트 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 76) {
	    item = 1072646;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘븐 스피릿 부츠";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 77) {
	    item = 1102367;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘븐 스피릿 망토";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 78) {
	    item = 1702348;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "스노우 플레이크";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 79) {
	    item = 1002943;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "세일러 모자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 80) {
	    item = 1050152;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "세일러복 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 81) {
	    item = 1051180;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "세일러복 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 82) {
	    item = 1003636;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "아쿠아쉘";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 83) {
	    item = 1052536;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "마린 스타라이프";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 84) {
	    item = 1102491;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "써니데이";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 85) {
	    item = 1042241;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "플라잉 바이올렛";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 86) {
	    item = 1062156;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "모자이크 퍼플";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 87) {
	    item = 1042237;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "골든 테일러 베스트";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 88) {
	    item = 1062043;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "블랙 스타리움";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 89) {
	    item = 1003376;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "메모리얼 엔젤";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 90) {
	    item = 1050210;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "하늘하늘 솜사탕";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 91) {
	    item = 1051256;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "하늘하늘 보송이";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 92) {
	    item = 1702334;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "크리스탈 판타지아";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 93) {
	    item = 1003217;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃도령 머리띠";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 94) {
	    item = 1050188;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃도령 한복";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 95) {
	    item = 1070006;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "궁중 신발";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 96) {
	    item = 1702306;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃바람 파초선";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 97) {
	    item = 1003109;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 레인보우 후드";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 98) {
	    item = 1052275;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 레인보우 짚업 자켓";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 99) {
	    item = 1072448;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 레인보우 부츠";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 100) {
	    item = 1102245;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해님 망토";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 101) {
	    item = 1702275;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 레인보우 우산";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 102) {
	    item = 1002995;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 네이비 모자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 103) {
	    item = 1052209;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 네이비 제복";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 104) {
	    item = 1051192;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "블루 마린걸";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 105) {
	    item = 1702289;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "로얄 마린 깃발";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 106) {
	    item = 1000058;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "늘푸른 사또 모자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 107) {
	    item = 1001085;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃분홍 나비머리핀";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 108) {
	    item = 1050247;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "늘푸른 사또복장";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 109) {
	    item = 1051302;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃분홍 아씨한복";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 110) {
	    item = 1070028;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "늘푸른 사또꽃신";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 111) {
	    item = 1071044;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃분홍 아씨꽃신";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 112) {
	    item = 1050142;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "후드 퓨전 한복";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 113) {
	    item = 1051166;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "드레스 퓨전 한복";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 114) {
	    item = 1702174;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꽃보다 나비";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 115) {
	    item = 1002878;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "눈꽃 빛나는 모자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 116) {
	    item = 1052178;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "눈꽃 니트";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 117) {
	    item = 1002885;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "핑크 드레시 리본";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 118) {
	    item = 1051261;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "메르헨 판타지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 119) {
	    item = 1001062;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘리자베스 가발";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 120) {
	    item = 1051220;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘리자베스 드레스";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 121) {
	    item = 1081007;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘리자베스 장갑";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 122) {
	    item = 1702291;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "엘리자베스 부채";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 123) {
	    item = 1000042;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "나폴레옹 모자";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 124) {
	    item = 1050178;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "나폴레옹 제복";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 125) {
	    item = 1070019;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "나폴레옹 부츠";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 126) {
	    item = 1100001;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "나폴레옹 망토";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 127) {
	    item = 1000021;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 장보고 가발 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 128) {
	    item = 1050114;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 장보고 의상 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 129) {
	    item = 1010004;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 장보고 수염 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 130) {
	    item = 1000022;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 염장 가발 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 131) {
	    item = 1050115;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 염장 의상 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 132) {
	    item = 1010005;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 염장 수염 (남)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 133) {
	    item = 1001028;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 자미부인 가발 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 134) {
	    item = 1051115;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 자미부인 의상 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 135) {
	    item = 1071010;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "해신 자미부인 신발 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 200) {
	    item = 1112586;
	    quantity = 1;
	    cost = 2500;
	    equip = 1;
	    name = "다크 엔젤릭 블레스";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 201) {
	    item = 1112663;
	    quantity = 1;
	    cost = 3500;
	    equip = 1;
	    name = "화이트 엔젤릭 블레스";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 150) {
	    item = 2048712;
	    quantity = 1;
	    cost = 1000;
	    name = "환생의 불꽃 레벨100";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 151) {
	    item = 2048701;
	    quantity = 1;
	    cost = 1000;
	    name = "환생의 불꽃 레벨110";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 152) {
	    item = 2048702;
	    quantity = 1;
	    cost = 1600;
	    name = "환생의 불꽃 레벨120";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 153) {
	    item = 2048703;
	    quantity = 1;
	    cost = 1800;
	    name = "환생의 불꽃 레벨130";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 154) {
	    item = 2048704;
	    quantity = 1;
	    cost = 2000;
	    name = "환생의 불꽃 레벨140";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3012) {
	    item = 1003854;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꿈속의 자쿰 투구";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3013) {
	    item = 1032185;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꿈속의 지옥 불꽃";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3014) {
	    item = 1122249;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꿈속의 혼테일 목걸이";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3015) {
	    item = 1052611;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꿈속의 핑크빈 슈트";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3016) {
	    item = 1072818;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "꿈속의 발록 슈즈";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3024) {
	    item = 1112135;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "수묵화 명찰 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3025) {
	    item = 1112238;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "수묵화 말풍선 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");


	}else if (sel == 3018) {
	    item = 1112900;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "라랄라 음표 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3019) {
	    item = 1112901;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "샤방샤방 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3020) {
	    item = 1112908;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "오로라 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3021) {
	    item = 1112924;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "레몬 슈팅스타 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3022) {
	    item = 1112925;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "블루 슈팅스타 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 3023) {
	    item = 1112926;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "핑크 슈팅스타 반지";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");





	}else if (sel == 155) {
	    cm.dispose();
	    cm.openNpc(2182002);
	}else if (sel == 156) {
	    item = 1001065;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "핑크엔젤 윙 캡 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 157) {
	    item = 1051252;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "핑크엔젤 유니폼 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}else if (sel == 158) {
	    item = 1071031;
	    quantity = 1;
	    cost = 1000;
	    equip = 1;
	    name = "핑크엔젤 윙 슈즈 (여)";
	    cm.sendYesNo("#b#i"+item+"# #z"+item+"# #r"+quantity+"개#k를 #Cgray##e"+cost+"#n#r + ＠#k#e포인트#n에 구매하시겠습니까?");
	}
    }else if (status == 2){
if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("환전을 원하시는 후원포인트가 #b"+meso+"포인트 맞습니까?\r\n환전 후 #r"+meso*20000+"메소#k를 얻으실 수 있습니다.");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("\r\n#e선택 아이템#n : #i"+item+"# #z"+item+"#\r\n#e아이템 가격#n : #b#e"+cost+"#n포인트#k\r\n\r\n#r※ 100 후원포인트#k = #b올스텟 ＋100#k\r\n");
	    }else {
	    if(cm.getRC() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("#b"+(cost)+" 후원포인트#k를 사용하여 #b"+name+"#k "+quantity+"개를 구매하였습니다.");
//	    cm.sendOk("구매가 완료되었습니다.");
	    cm.playerMessage(""+(cost)+" 후원포인트를 사용하여 "+name+" "+quantity+"개를 구매하셨습니다.");
	    cm.gainRC(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("후원포인트가 부족합니다.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("인벤토리 공간이 부족합니다.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buymeso == 1){
	    if(meso>0 &&cm.getRC() > meso&&cm.getMeso()+(meso*20000) > 2147483647){
		cm.sendOk("메소가 너무 많습니다.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getRC() > meso&&cm.getMeso()+(meso*20000) <= 2147483647){
		cm.gainMeso(meso*20000);
		cm.gainRC(-meso);
		cm.sendOk("후원포인트를 메소로 환전하셨습니다.");
		cm.dispose();
	    }else{
		cm.sendOk("후원포인트가 부족합니다.");
		cm.dispose();
		}
	}else{
	
	allstat = cm.getText()/100 * 100;
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("정해진 후원포인트의 단위에 맞추어 적어주세요.\r\n#r※ 100 후원포인트#k = #b올스텟 ＋100#k");
	    cm.dispose();
	}else{
	cm.sendGetText("\r\n#e선택 아이템#n : #i"+item+"# #z"+item+"#\r\n#e아이템 가격#n : #b#e"+cost2+"#n포인트#k\r\n\r\n#e#Cgray#※ "+text1+" 후원포인트 = 올스텟 ＋"+allstat+" #k#n\r\n#r※ 1000 후원포인트#k = #b공격력/마력 ＋5#k");
        }
	}else{
	cm.sendOk("숫자만 입력가능합니다.");
	cm.dispose();
	}
}
    }else if(status == 4){
	damage = cm.getText()/1000 * 5;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%500) == 0){
	    cm.sendOk("정해진 후원포인트의 단위에 맞추어 적어주세요.\r\n#r※ 1000 후원포인트#k = #b공격력/마력 ＋5#k");
	    cm.dispose();
	}else{
	cm.sendYesNo("#e선택 아이템#n : #i"+item+"# #z"+item+"#\r\n#e아이템 가격#n : #b#e"+cost3+"#n포인트\r\n\r\n#e#Cgray#※ "+text1+" 후원포인트 = #r올스텟 ＋"+allstat+" #Cgray##n\r\n#e#Cgray#※ "+text2+" 후원포인트 = #r공격력/마력 ＋"+damage+" #k#n\r\n\r\n※ 이 아이템을 제작 하시겠습니까?");
    	}
	}else{
	cm.sendOk("숫자만 입력가능합니다.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getRC() >= cost3){
	cm.sendOk("#b"+(cost3)+" 후원포인트#k를 사용하여 #b"+name+"#k을(를) 제작하셨습니다.");
	cm.playerMessage(""+(cost3)+" 후원포인트를 사용하여 "+name+"을(를) 제작하셨습니다.");
	cm.gainSponserItem(item,'[후원아이템]',allstat,damage,0);
	cm.gainRC(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("후원포인트가 부족합니다.");
	}
	}else{
	cm.dispose();
	}
}

