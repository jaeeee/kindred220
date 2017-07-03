/*

제작자 : kki_looking@naver.com / rave_esg@nate.com

*/

 

var status = -1;
var time = "#fUI/UIToolTip/Item/Equip/Star/Star#"
function start() {
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

        var choose = "#e안녕하세요~ 라이딩 상점이에요. (라이딩 기한X)#n\r\n#e 라이딩 구매하실시에#i4310066#가 필요합니다.#k\r\n ";
        choose += "#e#b#L0#"+time+"라이딩을 배우고 싶어요 어떻게 배우죠?#k#n\r\n";

        choose += "#e\n#r#L1#"+time+"라이딩을 배웠는데 어디서 타죠?#k#n\r\n";

        choose += "\r\n#r#L2##i2430264# 마녀의 빗자루#k";
        choose += "#r#L3##i2430283# 목마 라이딩#k"; 

        choose += "\r\n#r#L4##i2431497# 크로코 라이딩#k"; 
        choose += "#r#L5##i2431502# 네이키드 바이킹#k";

        choose += "\r\n#r#L6##i2430871# 핑크 스쿠터#k";
        choose += "#r#L7#   #i2431491# 블루 스쿠터#k";

        choose += "\r\n#r#L8##i2431498# 근두운 라이딩#k";
        choose += "#r#L9##i2430259# #t2430259##k";

        choose += "\r\n#r#L10##i2431499# 경주용 라이딩#k";
        choose += "#r#L11##i2430072# ZD타이거 쿠폰#k";

        choose += "\r\n#r#L12##i2430056# 미스트 발록#k";
        choose += "#r#L13#   #i2430718# 주벗 라이딩#k";

        choose += "\r\n#r#L14##i2430091# 붉은불의 말#k";
        choose += "#r#L82#   #i2432498# 푸른물의 말#k";

        choose += "\r\n#r#L16##i2430101# 핑크 열기구#k";
        choose += "#r#L17#   #i2430102# 트랜스폼 라이딩#k";

        choose += "\r\n#r#L18##i2430242# 빨간 오토바이#k";
        choose += "#r#L19##i2430243# 파워드 슈트#k";

        choose += "\r\n#r#L20##i2430262# 레오 나르도#k";
        choose += "#r#L21#   #i2430610# 산타썰매 라이딩#k";

        choose += "\r\n#r#L22##i2430660# 복만이라이딩#k";
        choose += "#r#L23# #i2430249# 나무 비행기#k";

        choose += "\r\n#r#L24##i2430249# 빨간 비행기#k";
        choose += "#r#L25#   #i2430392# 시그너스 전차#k";

        choose += "\r\n#r#L26##i2430266# 닭닭닭 라이딩#k";
        choose += "#r#L27##i2430271# 갈색 부엉이#k";

        choose += "\r\n#r#L28##i2431505# 로우 라이더#k";
        choose += "#r#L29#   #i2430275# 슈피겔만 열기구#k";

        choose += "\r\n#r#L30##i2431914# 꼬마 토끼임#k";
        choose += "#r#L31#   #i2430506# 황소 라이딩#k";

        choose += "\r\n#r#L32##i5530152# 토끼 수레임#k";
        choose += "#r#L33#   #i2430508# 슈퍼래빗 라이딩#k";

        choose += "\r\n#r#L34##i2430518# 인디언 호그#k";
        choose += "#r#L35#   #i2431760# 블랙 부엉이#k";

        choose += "\r\n#r#L36##i2430937# 막시무스 임#k";
        choose += "#r#L37#   #i2430938# 빨간트럭 라이딩#k";

        choose += "\r\n#r#L38##i2430939# 파워슈트 임#k";
        choose += "#r#L39#   #i2431137# 드래고니카#k"

        choose += "\r\n#r#L40##i2431133# 팬텀오빠달려#k";
        choose += "#r#L41# #i2431134# 아리아누나달려#k"

        choose += "\r\n#r#L42##i2431267# 간지 재규어#k";
        choose += "#r#L43#   #i2431422# 블랙 와이번#k"

        choose += "\r\n#r#L44##i2431423# 하늘 자전거#k";
        choose += "#r#L45#   #i2431424# 눈꽃송이라이딩#k"

        choose += "\r\n#r#L46##i2431426# 달달 라이딩#k";
        choose += "#r#L47#   #i2431473# 핑크빈 둥둥#k"

        choose += "\r\n#r#L48##i2431474# 블랙빈 둥둥#k";
        choose += "#r#L49#   #i2431700# 찬사와 함께#k"

        choose += "\r\n#r#L50##i2430079# 둥실둥실 임#k";
        choose += "#r#L51#   #i2431764# 데비존의 포로#k"

        choose += "\r\n#r#L52##i2431765# 흔들린 목마#k";
        choose += "#r#L53#   #i5680185# 소행성 B612#k"

        choose += "\r\n#r#L54##i2431799# 검은 드래곤#k";
        choose += "#r#L55#   #i1902000# 모험가 돼지#k"

        choose += "\r\n#r#L56##i1902001# 은빛갈기 임#k";
        choose += "#r#L57#   #i1902002# 레드 드라코#k"

        choose += "\r\n#r#L58##i1902005# 티티아나 임#k";
        choose += "#r#L59#   #i1902006# 티티오 임다#k"

        choose += "\r\n#r#L60##i1902007# 시그너 신조#k";
        choose += "#r#L61#   #i1902015# 첫번째 류호#k"

        choose += "\r\n#r#L62##i1902016# 두번째 류호#k";
        choose += "#r#L63#   #i1902017# 세번째 류호#k"

        choose += "\r\n#r#L64##i1902018# 마지막 류호#k";
        choose += "#r#L65#   #i1902040# 첫번째 에반#k"

        choose += "\r\n#r#L66##i1902041# 두번째 에반#k";
        choose += "#r#L67#   #i1902042# 마지막 에반#k"

        choose += "\r\n#r#L68##i1902048# 하이에나 임#k";
        choose += "#r#L69#   #i2431915# 펠릭스 라이딩#k"

        choose += "\r\n#r#L70##i2432003# 전투 비행정#k";
        choose += "#r#L71#   #i2431949# 거대 수탉이#k"

        choose += "\r\n#r#L72##i5680196# 꿀벌 기관차#k";
        choose += "#r#L73#   #i2432015# 붉은 모래구름#k"

        choose += "\r\n#r#L74##i2432030# 블랙 가고일#k";
        choose += "#r#L75#   #i2432031# 친구 라이딩#k"

        choose += "\r\n#r#L76##i2432078# 똥개 라이딩#k";
        choose += "#r#L77#   #i2432218# 마법진 라이딩#k"

        choose += "\r\n#r#L78##i2432293# 호박마차 임#k";
        choose += "#r#L79#   #i2432295# 벨룸 라이딩#k"

        choose += "\r\n#r#L80##i2432359# 천사 미카엘#k";
        choose += "#r#L81#   #i2432361# 악마 루시퍼#k"

        choose += "\r\n#r#L15##i2430093# 타조 라이딩#k";
        choose += "#r#L83#   #i2432029# 구형 배틀쉽#k";
        cm.sendSimple(choose);
    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
 cm.sendOk ("라이딩을 배우기 위해선, 라이딩 마다 #i4310066##t4310066#이 5개 필요합니다.");
 } else if (s == 1) {
 cm.sendOk ("라이딩을 탈려면 스킬창을 열어 라이딩탭을 클릭하시면 됩니다.");
 } else if (s == 2) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001026,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 3) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001003,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 4) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001004,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 5) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001005,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 6) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001006,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 7) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001021,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 8) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5);
            cm.teachSkill(80001007,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 9) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5);
            cm.teachSkill(80001008,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 10) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5);
            cm.teachSkill(80001009,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 11) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001010,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 12) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001011,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 13) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001013,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 14) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001014,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 15) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001015,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 16) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001016,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 17) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001017,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 18) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001018,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 19) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001019,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 20) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001020,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 21) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001022,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 22) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001023,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 23) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001027,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 24) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001028,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 25) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001038,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 26) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001030,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 27) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001031,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 28) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001032,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 29) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001033,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 30) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001044,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 31) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001082,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 32) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001083,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 33) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001084,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 34) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001090,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 35) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001137,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 36) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001144,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 37) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001148,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 38) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001149,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 39) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001198,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 40) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(80001220,-10); 
            cm.teachSkill(80001144,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 41) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001221,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 42) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001228,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 43) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001237,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 44) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001243,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 45) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001244,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 46) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001246,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 47) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001257,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 48) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001258,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 49) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001261,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 50) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001285,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 51) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001289,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 52) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001290,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 53) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001292,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 54) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001302,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 55) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001304,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 56) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001305,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 57) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001306,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 58) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001307,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 59) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001308,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 60) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001309,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 61) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001312,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 62) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001313,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 63) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001314,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 64) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001315,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 65) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001316,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 66) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001317,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 67) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001318,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 68) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001319,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 69) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001327,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 70) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001331,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 71) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001336,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 72) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001338,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 73) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001333,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 74) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001347,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 75) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001348,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 76) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001453,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 77) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001413,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 78) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001421,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 79) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001423,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }

 } else if (s == 80) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001445,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 81) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001447,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 82) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001508,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
 } else if (s == 83) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(1204,1,1);
            cm.sendOk("#i4310066# 5개로 선택하신 라이딩으로 교환하셨습니다.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5개가 있는지 다시 이벤토리창에서 확인하세요.");
            cm.dispose();;
        }
  
        }
    }
}
