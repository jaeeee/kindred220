/*
홍보 스크립트
*/

var status = -1;

var cost;
var item;
var quantity;
var name;
var allstat;
var damage;
var mhp;
var equip = 0;
var cost2;
var cost3;
var cost4;
var text1;
var text2;
var cash;
var buycash;
var buymeso;
var meso;


function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.openShop (1012008);
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
//\r\n = 엔터
//#b = 파란글씨
//#r = 빨간글씨
//#k = 검정글씨
//#e = 굵은글씨
//#n = 보통글씨
//#Cgray# = 회색글씨
 
        var text = "안녕하세요 #b#h0##k님. 홍보상점에 오신것을 환영합니다.\r\n#r※아이템 추가 문의는 #e#k'매니저 끼 룩'#r#n에게 해주세요.#k\r\n";
	text += "\r\n#r홍보 장비 제작이란? 밑에 아이템을 골라 홍보 포인트의 비율을 맞춰 옵션(올스텟,공마)을 자기마음대로 설정하는 시스템입니다. 홍보포인트 100당 올스텟20,공마3 입니다.#k\r\n";
	text += "\r\n#e소지중인 홍보포인트#n : #r"+cm.getPlayer().getHBPT()+"#k포인트\r\n\r\n";
	text += "\r\n#l#e<해신 세트>#n\r\n";
	text += "#L127# #i1000021# (기본 100(+a)원)";
	text += "#L128# #i1050114# (기본 100(+a)원)\r\n";
	text += "#L129# #i1010004# (기본 100(+a)원)";
	text += "#L130# #i1000022# (기본 100(+a)원)\r\n";
	text += "#L131# #i1050115# (기본 100(+a)원)";
	text += "#L132# #i1010005# (기본 100(+a)원)\r\n";
	text += "#L133# #i1001028# (기본 100(+a)원)";
	text += "#L134# #i1051115# (기본 100(+a)원)\r\n";
	text += "#L135# #i1071010# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<레인보우 세트>#n\r\n";
	text += "#L68# #i1002785# (기본 100(+a)원)";
	text += "#L69# #i1022068# (기본 100(+a)원)\r\n";
	text += "#L70# #i1042142# (기본 100(+a)원)";
	text += "#L71# #i1062093# (기본 100(+a)원)\r\n";
	text += "#L41# #i1702155# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<여제 세트>#n\r\n";
	text += "#L64# #i1003398# (기본 100(+a)원)";
	text += "#L27# #i1702269# (기본 100(+a)원)\r\n";
	text += "#L61# #i1003399# (기본 100(+a)원)";
	text += "#L28# #i1702270# (기본 100(+a)원)\r\n";
	text += "#L62# #i1003400# (기본 100(+a)원)";
	text += "#L29# #i1702271# (기본 100(+a)원)\r\n";
	text += "#L63# #i1003401# (기본 100(+a)원)";
	text += "#L30# #i1702272# (기본 100(+a)원)\r\n";
	text += "#L65# #i1003402# (기본 100(+a)원)";
	text += "#L31# #i1702273# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<스노우 세트>#n\r\n";
	text += "#L56# #i1000050# (기본 100(+a)원)";
	text += "#L72# #i1050227# (기본 100(+a)원)\r\n";
	text += "#L58# #i1001076# (기본 100(+a)원)";
	text += "#L73# #i1051278# (기본 100(+a)원)\r\n";
	text += "#L78# #i1702348# (기본 800(+a)원)\r\n\r\n";
	text += "\r\n#l#e<엘븐 단풍잎 세트>#n\r\n";
	text += "#L55# #i1000051# (기본 100(+a)원)";
	text += "#L57# #i1001077# (기본 100(+a)원)\r\n";
	text += "#L74# #i1050228# (기본 100(+a)원)";
	text += "#L75# #i1051279# (기본 100(+a)원)\r\n";
	text += "#L76# #i1072646# (기본 100(+a)원)";
	text += "#L77# #i1102367# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<마린 세트>#n\r\n";
	text += "#L79# #i1002943# (기본 100(+a)원)";
	text += "#L80# #i1050152# (기본 100(+a)원)\r\n";
	text += "#L81# #i1051180# (기본 100(+a)원)";
	text += "#L42# #i1702217# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<아쿠아 세트>#n\r\n";
	text += "#L82# #i1003636# (기본 100(+a)원)";
	text += "#L83# #i1052536# (기본 100(+a)원)\r\n";
	text += "#L84# #i1102491# (기본 100(+a)원)";
	text += "#L43# #i1702375# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<핑크 수피아 세트>#n\r\n";
	text += "#L85# #i1042241# (기본 100(+a)원)";
	text += "#L86# #i1062156# (기본 100(+a)원)\r\n";
	text += "#L54# #i1102453# (기본 100(+a)원)";
	text += "#L45# #i1702367# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<블랙 수피아 세트>#n\r\n";
	text += "#L87# #i1042237# (기본 100(+a)원)";
	text += "#L88# #i1062043# (기본 100(+a)원)\r\n";
	text += "#L54# #i1102453# (기본 100(+a)원)";
	text += "#L46# #i1702368# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<천공의 시엘 세트>#n\r\n";
	text += "#L89# #i1003376# (기본 100(+a)원)";
	text += "#L90# #i1050210# (기본 100(+a)원)\r\n";
	text += "#L91# #i1051256# (기본 100(+a)원)";
	text += "#L92# #i1702334# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<꽃도령 세트>#n\r\n";
	text += "#L93# #i1003217# (기본 100(+a)원)";
	text += "#L94# #i1050188# (기본 100(+a)원)\r\n";
	text += "#L95# #i1070006# (기본 100(+a)원)";
	text += "#L14# #i1102290# (기본 100(+a)원)\r\n";
	text += "#L96# #i1702306# (기본 800(+a)원)\r\n\r\n";
	text += "\r\n#l#e<로얄 레인보우 세트>#n\r\n";
	text += "#L97# #i1003109# (기본 100(+a)원)";
	text += "#L98# #i1052275# (기본 100(+a)원)\r\n";
	text += "#L99# #i1072448# (기본 100(+a)원)";
	text += "#L100# #i1102245# (기본 100(+a)원)\r\n";
	text += "#L101# #i1702275# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<로얄 네이비 세트>#n\r\n";
	text += "#L102# #i1002995# (기본 100(+a)원)";
	text += "#L103# #i1052209# (기본 100(+a)원)\r\n";
	text += "#L104# #i1051192# (기본 100(+a)원)";
	text += "#L105# #i1702289# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<꽃분홍아씨 / 늘푸른 사또>#n\r\n";
	text += "#L106# #i1000058# (기본 100(+a)원)";
	text += "#L107# #i1001085# (기본 100(+a)원)\r\n";
	text += "#L108# #i1050247# (기본 100(+a)원)";
	text += "#L109# #i1051302# (기본 100(+a)원)\r\n";
	text += "#L110# #i1070028# (기본 100(+a)원)";
	text += "#L111# #i1071044# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<퓨전 한복 세트>#n\r\n";
	text += "#L112# #i1050142# (기본 100(+a)원)";
	text += "#L113# #i1051166# (기본 100(+a)원)\r\n";
	text += "#L114# #i1702174# (기본 100(+a)원)\r\n\w\n";
	text += "\r\n#l#e<반짝 눈꽃 세트>#n\r\n";
	text += "#L115# #i1002878# (기본 100(+a)원)";
	text += "#L116# #i1052178# (기본 100(+a)원)\r\n";
	text += "#L67# #i1702211# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<인형의 집 세트>#n\r\n";
	text += "#L117# #i1002885# (기본 100(+a)원)";
	text += "#L118# #i1051261# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<엘리자베스 세트>#n\r\n";
	text += "#L119# #i1001062# (기본 100(+a)원)";
	text += "#L120# #i1051220# (기본 100(+a)원)\r\n";
	text += "#L121# #i1081007# (기본 100(+a)원)";
	text += "#L122# #i1702291# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<나폴레옹 세트>#n\r\n";
	text += "#L123# #i1000042# (기본 100(+a)원)";
	text += "#L124# #i1050178# (기본 100(+a)원)\r\n";
	text += "#L125# #i1070019# (기본 100(+a)원)";
	text += "#L126# #i1100001# (기본 100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<희귀망토>#n\r\n";
	text += "#L9# #i1102511# (기본 1500(+a)원)";
	text += "#L59# #i1102385# (기본100(+a)원)\r\n";
	text += "#L60# #i1102386# (기본100(+a)원)";
	text += "#L10# #i1102466# (기본100(+a)원)\r\n";
	text += "#L11# #i1102376# (기본100(+a)원)";
	text += "#L12# #i1102377# (기본100(+a)원)\r\n";
	text += "#L13# #i1102378# (기본100(+a)원)";
	text += "#L17# #i1102307# (기본100(+a)원)\r\n";
	text += "#L18# #i1102308# (기본100(+a)원)";
	text += "#L40# #i1102309# (기본100(+a)원)\r\n";
	text += "#L25# #i1102450# (기본100(+a)원)";
	text += "#L26# #i1102451# (기본100(+a)원)\r\n";
	text += "#L37# #i1102546# (기본100(+a)원)";
	text += "#L38# #i1102547# (기본100(+a)원)\r\n";
	text += "#L39# #i1102548# (기본100(+a)원)\r\n\r\n";
	text += "\r\n#l#e<희귀무기>#n\r\n";
	text += "#L32# #i1702361# (기본100(+a)원)";
	text += "#L33# #i1702365# (기본100(+a)원)\r\n";
	text += "#L34# #i1702366# (기본100(+a)원)";
	text += "#L35# #i1702400# (기본100(+a)원)\r\n";
	text += "#L36# #i1702416# (기본100(+a)원)";
	text += "#L49# #i1702196# (기본100(+a)원)\r\n";
	text += "#L41# #i1702155# (기본100(+a)원)";
	text += "#L47# #i1702397# (기본100(+a)원)\r\n";
	text += "#L48# #i1702398# (기본100(+a)원)";
	text += "#L53# #i1702399# (기본100(+a)원)\r\n";
	text += "#L50# #i1702364# (기본100(+a)원)";
	text += "#L51# #i1702328# (기본100(+a)원)\r\n";
	text += "#L52# #i1702415# (기본100(+a)원)\r\n\r\n";

        cm.sendSimple(text);
    }else if (status == 1){
	sel = selection;
	if (sel == 1){
	    item = 4001126;
	    cost = 1000;
	    quantity = 2000;
	    name = "단풍잎";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 2) {
	    item = 4001126;
	    cost = 2000;                 //80
	    quantity = 4000;
	    name = "단풍잎";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 3) {
	    item = 1002186;
	    quantity = 1;
	    cost = 100;
	    name = "투명모자";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 4) {
	    item = 1102039;
	    quantity = 1;
	    cost = 100;
	    name = "투명망토";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 5) {
	    item = 1072153;
	    quantity = 1;                   //100
	    cost = 100;
	    name = "투명신발";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 6) {
	    item = 1082102;
	    quantity = 1;
	    cost = 100;
	    name = "투명장갑";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 7) {
	    item = 1032024;
	    quantity = 1;
	    cost = 100;
	    name = "투명귀고리";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 8) {
	    item = 1022079;
	    quantity = 1;
	    cost = 100;
	    name = "투명안경";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 9) {
	    item = 1102511;
	    quantity = 1;
	    cost = 100;
	    name = "엔젤케루빔";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 10) {
	    item = 1102466;
	    quantity = 1;
	    cost = 100;
	    name = "노빌리타스아우라";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 11) {
	    item = 1102376;                //140
	    quantity = 1;
	    cost = 100;
	    name = "프쉬케플로라";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 12) {
	    item = 1102377;
	    quantity = 1;
	    cost = 100;
	    name = "프쉬케미스틱";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 13) {
	    item = 1102378;
	    quantity = 1;
	    cost = 100;
	    name = "프쉬케멜로디";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 14) {            //160
	    item = 1102290;
	    quantity = 1;
	    cost = 100;
	    name = "꽃비단날개띠";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 15) {
	    item = 4310034;
	    quantity = 10;
	    cost = 100;
	    name = "저스티스 코인";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 16) {
	    item = 4310058;
	    quantity = 1;
	    cost = 100;
	    name = "매그너스 코인";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 17) {
	    item = 1102307;             //180
	    quantity = 1;
	    cost = 100;
	    name = "샤키엘의 날개";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 18) {
	    item = 1102308;
	    quantity = 1;
	    cost = 100;
	    name = "베에모트의 날개";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 19) {
 cm.sendGetText("홍보포인트를 얼마나 사용하시겠어요?");
	buymeso = 1;
	}else if (sel == 191) {
 cm.sendGetText("홍보포인트를 얼마나 사용하시겠어요?");
	buycash = 1;
}else if (sel == 20) {
	   cm.dispose();
	cm.openNpc(1013001);
           return;
	}else if (sel == 21) {
	    item = 3010519;
	    quantity = 1;
	    cost = 400;
	    name = "거대 예티의자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 22) {
	    item = 3010520;
	    quantity = 1;
	    cost = 400;
	    name = "거대 페페의자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 23) {
	    item = 2049122;
	    cost = 3200;                 //80
	    quantity = 5;
	    name = "긍정의 혼돈 주문서 50%";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b"+cost+"#k포인트에 구매하시겠습니까?");
	}else if (sel == 24) {
	    item = 1142593;
	    quantity = 1;
	    cost = 4900;
	    name = "★★13개의 별★★";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 25) {
	    item = 1102450;             //180
	    quantity = 1;
	    cost = 100;
	    name = "안젤리크 아우라";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 26) {
	    item = 1102451;
	    quantity = 1;
	    cost = 100;
	    name = "다크니스 아우라";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 27) {
	    item = 1702269;
	    quantity = 1;
	    cost = 100;
	    name = "미하일의 수호";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 28) {
	    item = 1702270;
	    quantity = 1;
	    cost = 100;
	    name = "오즈의 수호";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 29) {
	    item = 1702271;
	    quantity = 1;
	    cost = 100;
	    name = "이리나의 수호";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 30) {
	    item = 1702272;
	    quantity = 1;
	    cost = 100;
	    name = "아카르트의 수호";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 31) {
	    item = 1702273;
	    quantity = 1;
	    cost = 100;
	    name = "호크아이의 수호";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 32) {
	    item = 1702361;
	    quantity = 1;
	    cost = 100;
	    name = "헌터 호크";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 33) {
	    item = 1702365;
	    quantity = 1;
	    cost = 100;
	    name = "곰돌이는 재간둥이";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 34) {
	    item = 1702366;
	    quantity = 1;
	    cost = 100;
	    name = "냉동 상어";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 35) {
	    item = 1702400;
	    quantity = 1;
	    cost = 100;
	    name = "스우의 토끼인형";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 36) {
	    item = 1702416;
	    quantity = 1;
	    cost = 100;
	    name = "당근의 제왕";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 37) {
	    item = 1102546;
	    quantity = 1;
	    cost = 100;
	    name = "파랑새의 꿈";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 38) {
	    item = 1102547;
	    quantity = 1;
	    cost = 100;
	    name = "자수정의 꿈";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 39) {
	    item = 1102548;
	    quantity = 1;
	    cost = 100;
	    name = "잎새의 꿈";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 40) {
	    item = 1102309;
	    quantity = 1;
	    cost = 100;
	    name = "야누스의 날개";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 41) {
	    item = 1702155;
	    quantity = 1;
	    cost = 100;
	    name = "레인보우 스타";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 42) {
	    item = 1702217;
	    quantity = 1;
	    cost = 100;
	    name = "더키 튜브";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 43) {
	    item = 1702375;
	    quantity = 1;
	    cost = 100;
	    name = "아틀란티스";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 44) {
	    item = 1702336;
	    quantity = 1;
	    cost = 100;
	    name = "로드 템페스트";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 45) {
	    item = 1702367;
	    quantity = 1;
	    cost = 100;
	    name = "로즈 수피아";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 46) {
	    item = 1702368;
	    quantity = 1;
	    cost = 100;
	    name = "아이리스 수피아";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 47) {
	    item = 1702397;
	    quantity = 1;
	    cost = 100;
	    name = "아롱아롱 미리내";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 48) {
	    item = 1702398;
	    quantity = 1;
	    cost = 100;
	    name = "램프의 요정";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 53) {
	    item = 1702399;
	    quantity = 1;
	    cost = 100;
	    name = "네오 라이트 세이버";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 50) {
	    item = 1702364;
	    quantity = 1;
	    cost = 100;
	    name = "드래곤 슬레이브";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 51) {
	    item = 1702328;
	    quantity = 1;
	    cost = 100;
	    name = "핑크엔젤 주사기";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 52) {
	    item = 1702415;
	    quantity = 1;
	    cost = 100;
	    name = "꿈꾸는 사탕 베개";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 49) {
	    item = 1702196;
	    quantity = 1;
	    cost = 100;
	    name = "날아라 파랑새!";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 55) {
	    item = 1000051;
	    quantity = 1;
	    cost = 100;
	    name = "엘븐 단풍잎 밴드 (남)";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 56) {
	    item = 1000050;
	    quantity = 1;
	    cost = 100;
	    name = "민트 스노우 크리스탈 (남)";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 57) {
	    item = 1001077;
	    quantity = 1;
	    cost = 100;
	    name = "엘븐 단풍잎 밴드 (여)";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 58) {
	    item = 1001076;
	    quantity = 1;
	    cost = 100;
	    name = "체리 스노우 크리스탈 (여)";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 61) {
	    item = 1003399;
	    quantity = 1;
	    cost = 100;
	    name = "다크 오즈";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 62) {
	    item = 1003400;
	    quantity = 1;
	    cost = 100;
	    name = "다크 이리나";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 63) {
	    item = 1003401;
	    quantity = 1;
	    cost = 100;
	    name = "다크 이카르트";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 64) {
	    item = 1003398;
	    quantity = 1;
	    cost = 100;
	    name = "다크 미하일";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 65) {
	    item = 1003402;
	    quantity = 1;
	    cost = 100;
	    name = "다크 호크아이";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 59) {
	    item = 1102385;
	    quantity = 1;
	    cost = 100;
	    name = "룩스 케루빔";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 60) {
	    item = 1102386;
	    quantity = 1;
	    cost = 100;
	    name = "낙스 케루빔";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 54) {
	    item = 1102453;
	    quantity = 1;
	    cost = 100;
	    name = "드라이어드";
	    equip = 1;
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 66) {
	    item = 1142558;
	    quantity = 1;
	    cost = 3100;
	    name = "언리미티드 훈장";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+")#k포인트에 구매하시겠습니까?");
	}else if (sel == 67) {
	    item = 1702211;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "블리자드 스틱";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 68) {
	    item = 1002785;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "레인보우 썬캡";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 69) {
	    item = 1022068;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "화이트 쉐이드";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 70) {
	    item = 1042142;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "레인보우 탑";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 71) {
	    item = 1062093;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "그래스 그린 팬츠";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 72) {
	    item = 1050227;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "민트 스노우 케이프";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 73) {
	    item = 1051278;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "체리 스노우 케이프";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 74) {
	    item = 1050228;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘븐 단풍잎 코트 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 75) {
	    item = 1051279;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘븐 단풍잎 코트 (여)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 76) {
	    item = 1072646;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘븐 단풍잎 부츠";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 77) {
	    item = 1102367;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘븐 단풍잎 망토";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 78) {
	    item = 1702348;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "스노우 플레이크";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 79) {
	    item = 1002943;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "세일러 모자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 80) {
	    item = 1050152;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "세일러복 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 81) {
	    item = 1051180;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "세일러복 (여)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 82) {
	    item = 1003636;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "아쿠아쉘";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 83) {
	    item = 1052536;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "마린 스타라이프";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 84) {
	    item = 1102491;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "써니데이";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 85) {
	    item = 1042241;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "플라잉 바이올렛";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 86) {
	    item = 1062156;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "모자이크 퍼플";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 87) {
	    item = 1042237;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "골든 테일러 베스트";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 88) {
	    item = 1062043;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "블랙 스타리움";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 89) {
	    item = 1003376;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "메모리얼 엔젤";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 90) {
	    item = 1050210;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "하늘하늘 솜사탕";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 91) {
	    item = 1051256;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "하늘하늘 보송이";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 92) {
	    item = 1702334;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "크리스탈 판타지아";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 93) {
	    item = 1003217;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃도령 머리띠";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 94) {
	    item = 1050188;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃도령 한복";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 95) {
	    item = 1070006;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "궁중 신발";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 96) {
	    item = 1702306;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃바람 파초선";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 97) {
	    item = 1003109;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 레인보우 후드";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 98) {
	    item = 1052275;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 레인보우 짚업 자켓";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 99) {
	    item = 1072448;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 레인보우 부츠";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 100) {
	    item = 1102245;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해님 망토";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 101) {
	    item = 1702275;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 레인보우 우산";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 102) {
	    item = 1002995;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 네이비 모자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 103) {
	    item = 1052209;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 네이비 제복";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 104) {
	    item = 1051192;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "블루 마린걸";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 105) {
	    item = 1702289;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "로얄 마린 깃발";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 106) {
	    item = 1000058;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "늘푸른 사또 모자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 107) {
	    item = 1001085;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃분홍 나비머리핀";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 108) {
	    item = 1050247;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "늘푸른 사또복장";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 109) {
	    item = 1051302;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃분홍 아씨한복";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 110) {
	    item = 1070028;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "늘푸른 사또꽃신";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 111) {
	    item = 1071044;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃분홍 아씨꽃신";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 112) {
	    item = 1050142;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "후드 퓨전 한복";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 113) {
	    item = 1051166;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "드레스 퓨전 한복";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 114) {
	    item = 1702174;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "꽃보다 나비";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 115) {
	    item = 1002878;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "눈꽃 빛나는 모자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 116) {
	    item = 1052178;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "눈꽃 니트";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 117) {
	    item = 1002885;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "핑크 드레시 리본";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 118) {
	    item = 1051261;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "메르헨 판타지";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 119) {
	    item = 1001062;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘리자베스 가발";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 120) {
	    item = 1051220;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘리자베스 드레스";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 121) {
	    item = 1081007;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘리자베스 장갑";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 122) {
	    item = 1702291;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "엘리자베스 부채";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 123) {
	    item = 1000042;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "나폴레옹 모자";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 124) {
	    item = 1050178;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "나폴레옹 제복";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 125) {
	    item = 1070019;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "나폴레옹 부츠";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 126) {
	    item = 1100001;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "나폴레옹 망토";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 127) {
	    item = 1000021;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 장보고 가발 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 128) {
	    item = 1050114;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 장보고 의상 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 129) {
	    item = 1010004;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 장보고 수염 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 130) {
	    item = 1000022;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 염장 가발 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 131) {
	    item = 1050115;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 염장 의상 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 132) {
	    item = 1010005;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 염장 수염 (남)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 133) {
	    item = 1001028;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 자미부인 가발 (여)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 134) {
	    item = 1051115;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 자미부인 의상 (여)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 135) {
	    item = 1071010;
	    quantity = 1;
	    cost = 100;
	    equip = 1;
	    name = "해신 자미부인 신발 (여)";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 200) {
	    item = 1112586;
	    quantity = 1;
	    cost = 2500;
	    equip = 1;
	    name = "다크 엔젤릭 블레스";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}else if (sel == 201) {
	    item = 1112663;
	    quantity = 1;
	    cost = 3500;
	    equip = 1;
	    name = "화이트 엔젤릭 블레스";
	    cm.sendYesNo("정말 #i"+item+"##b"+quantity+"개#k를 #b("+cost+"+a)#k포인트에 구매하시겠습니까?");
	}
    }else if (status == 2){
if (buycash == 1){
	cash = cm.getText();
	cm.sendYesNo("환전을 원하시는 홍보포인트가 #b"+cash+"원("+cash*100+"캐시)#k 맞습니까?");
} else if (buymeso == 1){
	meso = cm.getText();
	cm.sendYesNo("환전을 원하시는 홍보포인트가 #b"+meso+"원("+meso*20000+"메소)#k 맞습니까?");
	}else{
	cost1 = cost;
    if(cm.canHold(item)){
	    if (equip == 1) {
	        cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost+"포인트)#k\r\n\r\n#i"+item+"#\r\n#r올스텟과 공격력,마력#k에 투자할 금액을 입력하세요\r\n#r100 홍보포인트#k = #b올스텟15 공마1");
	    }else {
	    if(cm.getPlayer().getHBPT() >=cost) {
	    cm.gainItem(item,quantity);
	    cm.sendOk("구매하셨습니다.");
	    cm.playerMessage(""+(cost)+"원를 사용하여 "+name+" "+quantity+"개를 구매하셨습니다.");
	    cm.getPlayer().gainHBPT(-cost);
	    cm.dispose();
            cm.getPlayer().saveToDB(false, false); 
	    }else {
	    cm.sendOk("홍보포인트가 부족합니다.");   
	    cm.dispose();
	}
    }
	}else {
	cm.sendOk("인벤토리 공간이 부족합니다.");
	cm.dispose();
	}
}
    }else if (status == 3){
	if(buycash == 1){
	    if(cash>0 &&cm.getPlayer().getHBPT() > cash&&cm.getPlayer().getNX()+(cash*100) > 900000){
		cm.sendOk("캐시가 너무 많습니다.");
	    	cm.dispose();
	    }else if (cash>0 && cm.getPlayer().getHBPT() > cash&&cm.getPlayer().getNX()+(cash*100) <= 900000){
		cm.getPlayer().modifyCSPoints(1, cash * 100, false);
		cm.getPlayer().gainHBPT(-cash);
		cm.sendOk("홍보포인트를 캐시로 환전하셨습니다.");
		cm.dispose();
	    }else{
		cm.sendOk("홍보포인트가 부족합니다.");
		cm.dispose();
		}
	} else if(buymeso == 1){
	    if(meso>0 &&cm.getPlayer().getHBPT() > meso&&cm.getMeso()+(meso*20000) > 9999999999){
		cm.sendOk("메소가 너무 많습니다.");
	    	cm.dispose();
	    }else if (meso>0 && cm.getPlayer().getHBPT() > meso&&cm.getMeso()+(meso*20000) <= 9999999999){
		cm.gainMeso(meso*20000);
		cm.getPlayer().gainHBPT(-meso);
		cm.sendOk("홍보포인트를 메소로 환전하셨습니다.");
		cm.dispose();
	    }else{
		cm.sendOk("홍보포인트가 부족합니다.");
		cm.dispose();
		}
	}else{
	
	allstat = cm.getText()/100 * 20;
	damage = cm.getText()/100 * 3
	text1 = cm.getText();
	if (text1 >= 0){
	cost2 = text1/1; 
	cost2 = cost1 + cost2;
	if (!(text1%100) == 0){
	    cm.sendOk("정해진 홍보포인트의 단위에 맞추어 적어주세요. 공백도 가능합니다. \r\n※(홍보포인트 100 당 = 올스텟 20 , 공마3)");
	    cm.dispose();
	}else{
	cm.sendGetText("선택한 아이템 (현재 가격 : #b"+cost2+"포인트#k)\r\n\r\n#i"+item+"#\r\n#r현재 입력한 옵션 ("+text1+"포인트 (올스텟+"+allstat+" 공,마"+damage+"))#k\r\n원하시는 #r최대HP (데벤져전용)#k을 입력하세요\r\n#r(데벤져 전용)100 홍보포인트#k = #b최대HP 100#k 공백도 가능합니다.");
        }
	}else{
	cm.sendOk("잘못 입력하셨습니다.");
	cm.dispose();
	}
}
    }else if(status == 4){
	mhp = cm.getText()/100 * 500;
	text2 = cm.getText();
	if (text2 >= 0){
	cost3 = text2/1; 
	cost3 = cost2 + cost3;
	if (!(text2%100) == 0){
	    cm.sendOk("정해진 홍보포인트의 단위에 맞추어 적어주세요. 공백도 가능합니다.\r\n※(홍보포인트 100 = 최대HP 500)");
	    cm.dispose();
	}else{
	cm.sendYesNo("선택한 아이템 (현재 가격 : #b"+cost3+"#k)\r\n\r\n#i"+item+"#\r\n#r("+text1+"포인트 (올스텟+"+allstat+" 공,마+"+damage+"))#k\r\n#r("+text2+"포인트 (최대HP+"+mhp+"))#k\r\n\r\n※위의 아이템을 제작 하시겠습니까?");
    	}
	}else{
	cm.sendOk("잘못 입력하셨습니다.");
	cm.dispose();
	}
    }else if(status == 5){
	if(cm.getPlayer().getHBPT() >= cost3){
	cm.sendOk(""+(cost3)+"원를 사용하여 "+name+"을 제작하셨습니다.");
	cm.playerMessage(""+(cost3)+"원를 사용하여 "+name+"을 제작하셨습니다.");
	cm.gainHpItem(item,'[홍보아이템]',allstat,damage,mhp);
	cm.getPlayer().gainHBPT(-cost3);
	cm.dispose(); 
	}else{
	cm.sendOk("홍보포인트가 부족합니다.");
	}
	}else{
	cm.dispose();
	}
}

