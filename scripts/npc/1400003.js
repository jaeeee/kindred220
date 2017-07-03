/*
제작자 : ljw5992@naver.com / dbg_yeane@nate.com
주석 삭제 금지
*/

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);

var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY level DESC LIMIT 10").executeQuery();

function start() {
var i = 0;
        var print = new StringBuilder();
        while (rank.next()) {
            i++;
            switch(rank.getInt("job")){
                case 1100:
                case 1110:
                case 1111:
                case 1112:
                    job = "소울마스터";
                    break;
                case 1300:
                case 1310:
                case 1311:
                case 1312:
                    job = "윈드브레이커";
                case 1400:
                case 1410:
                case 1411:
                case 1412:
                    job = "스트라이커";
                    break;
                    break;
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
                    job = "미확인";
            }
            print.append(Integer(i)).append("위　#b").append(rank.getString("name")).append("　#k레벨 : ").append(Integer(rank.getInt("level"))).append("#b　직업 : #k").append(job).append("\r\n");
    }
    cm.sendOk("랭킹입니다.\r\n"+print.toString());
    cm.dispose();
}

