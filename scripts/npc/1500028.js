/* 태후 20000 목동온 10000 짭새가 15000 포니 5000 ★ 5000
후회 5000  직녀 10000 dogoun2 25000 별똥별 5000 별리 30000
동전 10000원 험가용 10000원 Hinese 50000
그브팡 5000원(미지급,칭호도) 바다 10000 야둘 60000 sasin 20000 현아찡 30000 여우탈 20000 갱이 5000 */

/* 강호동 10000 , 여우 10000 */

/* 미련토깽이 20000 */

/* 첫번째월급 ->짭새가 35000 손나은 20000 더블 10000 너의옆사람 10000 노가뤼 20000 */

/* 땅콩 10000 콩이 110000 Play 10000 별이 35000 구찌 50000* 초콜릿악마 12000 송쥬르 45000 루느 10000 예수 10000 프리 5000 두근 20000 달빛 10000 퇴계이황 30000 Hide 10000 티비 10000 퓨전 30000 심셔틀 10000 레아 30000 */

/* 하수구 100000 네이버 10000 보스 30000 신민아 15000 송쥬르 20000 사령관 20000 이태윤 10000 장저 10000 */

/* 두번째 월급 돌핑 10000 관종 20000 된통령 40000 */

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var status = -1;

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
	var chat = "일주일 마다 후원 랭킹 1위를 하시는분은 오직 1위만이 얻을 수 있는 특별한 훈장을 지급해드립니다!\r\n\r\n#Cgray#후원 랭킹은 매주 일요일 새벽 12시에 초기화됩니다.\r\n#k"
	//chat += "#L1##e< 명예의 전당 >#n #b명예의 전당#k\r\n";
	chat += "#L5##e< 이벤트 >#n #b후원 유저 랭킹#k\r\n";
	chat += "#L2##b후원 하러가기#k\r\n";
	//chat += "#L3##e< 레벨 랭킹 >#n #b레벨 랭킹#k\r\n";
	//chat += "#L4##e< 메소 부자 >#n #b메소 랭킹#k\r\n";
	cm.sendSimple(chat);
    }else if (status == 1){
	if (selection == 1){
    cm.sendOk("#k#d#e　　　　　　　　　명예전당#n#k\r\n#e이름　:　??#n　\r\n#e레벨　:　??#n　\r\n#e직업　:　??#n　\r\n#e일시　:　??#n　\r\n#e소감　:   ??#n");
    cm.dispose();
	}
	else if (selection == 2){
        cm.dispose();
        cm.openNpc(9001004);
 } else if (selection == 0) {
		cm.dispose();
		cm.openNpc(9000001);
 } else if (selection == 5) {
                cm.sendOk("#e< 10월 둘째주 후원 랭킹 > #Cgray#랭킹 초기화 D-3#k#n\r\n\r\n[#e#r1#n#k]위 : 된통령\r\n[#e#b2#n#k]위 : 관종\r\n[#e3#n]위 : \r\n\r\n#e< 후원 랭킹 1위 보상 >#n\r\n#i1142656# #b올스텟 5000#k #b/ 공격력, 마력 3500 #k");
		cm.dispose();

}
	else if (selection == 3){
var i = 0;
var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY level DESC LIMIT 100").executeQuery();
        var print = new StringBuilder();
        while (rank.next()) {
            i++;
            switch(rank.getInt("job")){
                case 3600:
                case 3610:
                case 3611:
                case 3612:
                    job = "제논";
                    break;
                case 2001:
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
                    job = "에반";
                    break
                case 6001:
                case 6500:
                case 6510:
                case 6511:
                case 6512:
                    job = "엔젤릭버스터";
                    break;
                case 6000:
                case 6100:
                case 6110:
                case 6111:
                case 6112:
                    job = "카이저";
                    break;
                case 6001:
                case 6500:
                case 6510:
                case 6511:
                case 6512:
                    job = "엔젤릭버스터";
                    break;
                case 2004:
                case 2700:
                case 2710:
                case 2711:
                case 2712:
                    job = "루미너스";
                    break;
                case 3001:
                case 3100:
                case 3110:
                case 3111:
                case 3112:
                    job = "데몬슬레이어";
                    break;
                case 3002:
                case 3101:
                case 3120:
                case 3121:
                case 3122:
                    job = "데몬어벤져";
                    break;
                case 3001:
                case 3100:
                case 3110:
                case 3111:
                case 3112:
                    job = "데몬슬레이어";
                    break;
                case 2002:
                case 2300:
                case 2310:
                case 2311:
                case 2312:
                    job = "메르세데스";
                    break;
                case 430:
                case 431:
                case 432:
                case 433:
                case 434:
                    job = "듀얼블레이드";
                    break;
                case 2003:
                case 2400:
                case 2410:
                case 2411:
                case 2412:
                    job = "팬텀";
                    break;
                case 5000:
                case 5100:
                case 5110:
                case 5111:
                case 5112:
                    job = "미하일";
                    break;
                case 3500:
                case 3512:
                case 3511:
                case 3512:
                    job = "메카닉";
                    break;
                case 1500:
                case 1510:
                case 1511:
                case 1512:
                    job = "스트라이커";
                    break;
                case 1300:
                case 1310:
                case 1311:
                case 1312:
                    job = "윈드브레이커";
                    break;
                case 3300:
                case 3310:
                case 3311:
                case 3312:
                    job = "와일드 헌터";
                    break;
                case 100:
                    job = "검사";
                    break;
                case 200:
                    job = "마법사";
                    break;
                case 300:
                    job = "궁수";
                    break;
                case 400:
                    job = "도적";
                    break;
                case 500:
                    job = "해적";
                    break;
                case 110:
                case 111:
                case 112:
                    job = "파이터";
                    break;
                case 120:
                case 121:
                case 122:
                    job = "페이지";
                    break;
                case 130:
                case 131:
                case 132:
                    job = "스피어맨";
                    break;
                case 210:
                case 211:
                case 212:
                    job = "마법사(불, 독)";
                    break;
                case 220:
                case 221:
                case 222:
                    job = "마법사(썬, 콜)";
                    break;
                case 230:
                case 231:
                case 232:
                    job = "클레릭";
                    break;
                case 310:
                case 311:
                case 312:
                    job = "헌터";
                    break;
                case 320:
                case 321:
                case 322:
                    job = "사수";
                    break;
                case 410:
                case 411:
                case 412:
                    job = "어쌔신";
                    break;
                case 420:
                case 421:
                case 422:
                    job = "시프";
                    break;
                case 430:
                case 431:
                case 432:
                case 434:
                    job = "세미 듀어러";
                    break;
                case 510:
                case 511:
                case 512:
                    job = "인파이터";
                    break;
                case 520:
                case 521:
                case 522:
                    job = "건슬링거";
                    break;
                case 530:
                case 531:
                case 532:
                    job = "캐논슈터";
                    break;
                default:
                    job = "은월";
            }
            print.append(Integer(i)).append("위　#b").append(rank.getString("name")).append("　#k레벨 : #e").append(Integer(rank.getInt("level"))).append("#n#b　직업 : #k").append(job).append("\r\n");
    }
    cm.sendOk("#e< 서버 랭킹 안내 >#n\r\n\r\n"+print.toString());
    cm.dispose();
	}
	else if (selection == 4){

	var i = 0;
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY meso DESC LIMIT 100").executeQuery();
        var print = new StringBuilder();
        while (rank.next()) {
            i++;
	    var meso = ""+rank.getString("meso").split("E");
            print.append(Integer(i)).append("위　#b").append(rank.getString("name")).append("　#k레벨 : ").append(Integer(rank.getInt("level"))).append("#b　메소 : #k").append(rank.getString("meso")).append("\r\n");
   	}
    cm.sendOk("#e< 과연 최고의 부자는? >#n\r\n\r\n"+print.toString());
    cm.dispose();
	}
}
}