/*importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.constants);

var status = 0;

var txt = new StringBuilder();
var 순위 = 0;

function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; }
if (mode == 1) status++; else status--;
if (status == 0) {

	cm.sendSimple("유화온라인에 오신 것을 환영합니다! 너에게 랭킹을 알려주려고해 너의 랭킹도 알수있지 얼른확인해봐!!\r\n#b"
		+ "#L0##b레벨 랭킹 #r(내 순위 : "+getMYLevelRank()+"위)\r\n"
		+ "#L1##b환생 랭킹 #r(내 순위 : "+getMYRebornRank()+"위)");

} else if (status == 1) {
	if (selection == 0) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters ORDER BY level DESC LIMIT 50").executeQuery();
		while(con.next()) {
			switch(con.getInt("job")){
				case 3001:
				case 3100:
				case 3110:
				case 3111:
				case 3112:
				job = "데몬슬레이어"; break;

				case 2002:
				case 2300:
				case 2310:
				case 2311:
				case 2312:
				job = "메르세데스"; break;

				case 430:
				case 431:
				case 432:
				case 433: case 434:
				job = "듀얼블레이더"; break;

				case 3500:
				case 3512:
				case 3511:
				case 3512:
				job = "메카닉"; break;

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
				    job = "히어로";
				    break;
				case 120:
				case 121:
				case 122:
				    job = "팔라딘";
				    break;
				case 130:
				case 131:
				case 132:
				    job = "다크나이트";
				    break;
				case 210:
				case 211:
				case 212:
				    job = "마법사(불,독)";
				    break;
				case 220:
				case 221:
				case 222:
				    job = "마법사(썬,콜)";
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
				    job = "듀얼블레이드";
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
				case 1100:
				case 1110:
				case 1111:
				case 1112:
				    job = "소울마스터";
				    break;
				case 1200:
				case 1210:
				case 1211:
				case 1212:
				    job = "플레임위자드";
				    break;
				case 1400:
				case 1410:
				case 1411:
				case 1412:
				    job = "나이트워커";
				    break;
				case 2100:
				case 2110:
				case 2111:
				case 2112:
				    job = "아란";
				    break;
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
				    break;
				case 3101:
				case 3120:
				case 3121:
				case 3122:
				    job = "데몬어벤져";
				    break;
				case 3600:
				case 3610:
				case 3611:
				case 3612:
				    job = "제논";
				    break;
				case 2700:
				case 2710:
				case 2711:
				case 2712:
				    job = "루미너스";
				    break;
				case 6100:
				case 6110:
				case 6111:
				case 6112:
				     job = "카이저";
				     break;
				case 6500:
				case 6510:
				case 6511:
				case 6512:
				     job = "엔젤릭버스터";
				     break;
				case 5100:
				case 5110:
				case 5111:
				case 5112:
				     job = "미하일";
				     break;
				case 2400:
				case 2410:
				case 2411:
				case 2412:
				     job = "팬텀";
				     break;
				case 2500:
				case 2510:
				case 2511:
				case 2512:
				     job = "은월";
				     break;
				default:
				job = "초보자";
			}

		순위++;
		txt.append("")
			if(순위 == 1) {
			}

			if(순위 < 10) {
			txt.append("#Cgray#").append(Integer(0)+0).append("#b#e").append(Integer(순위))
			} else if (순위 >= 10 && 순위 < 100) {
			txt.append("#Cgray#").append(Integer(0)).append("#b#e").append(Integer(순위))
			} else {
			txt.append("#Cgray#").append("#b#e").append(Integer(순위))
			}
		txt.append("위#n#k")

			if(con.getString("name") == cm.getPlayer().getName()) {
			txt.append("　#rLv.").append(Integer(con.getInt("level"))).append("　#e")
			txt.append(con.getString("name")).append("#k#n")
			} else {
			txt.append("　Lv.").append(Integer(con.getInt("level"))).append("　")
			txt.append(con.getString("name"))
			}

		txt.append(" #Cgray#(").append(job).append(")\r\n");
		}

		cm.sendOk(txt.toString());
		cm.dispose();


	} else if (selection == 1) {
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters ORDER BY reborns DESC LIMIT 50").executeQuery();
		while(con.next()) {

			switch(con.getInt("job")){
				case 3001:
				case 3100:
				case 3110:
				case 3111:
				case 3112:
				job = "데몬슬레이어"; break;

				case 2002:
				case 2300:
				case 2310:
				case 2311:
				case 2312:
				job = "메르세데스"; break;

				case 430:
				case 431:
				case 432:
				case 433: case 434:
				job = "듀얼블레이더"; break;

				case 3500:
				case 3512:
				case 3511:
				case 3512:
				job = "메카닉"; break;

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
				    job = "히어로";
				    break;
				case 120:
				case 121:
				case 122:
				    job = "팔라딘";
				    break;
				case 130:
				case 131:
				case 132:
				    job = "다크나이트";
				    break;
				case 210:
				case 211:
				case 212:
				    job = "마법사(불,독)";
				    break;
				case 220:
				case 221:
				case 222:
				    job = "마법사(썬,콜)";
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
				    job = "듀얼블레이드";
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
				case 1100:
				case 1110:
				case 1111:
				case 1112:
				    job = "소울마스터";
				    break;
				case 1200:
				case 1210:
				case 1211:
				case 1212:
				    job = "플레임위자드";
				    break;
				case 1400:
				case 1410:
				case 1411:
				case 1412:
				    job = "나이트워커";
				    break;
				case 2100:
				case 2110:
				case 2111:
				case 2112:
				    job = "아란";
				    break;
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
				    break;
				case 3101:
				case 3120:
				case 3121:
				case 3122:
				    job = "데몬어벤져";
				    break;
				case 3600:
				case 3610:
				case 3611:
				case 3612:
				    job = "제논";
				    break;
				case 2700:
				case 2710:
				case 2711:
				case 2712:
				    job = "루미너스";
				    break;
				case 6100:
				case 6110:
				case 6111:
				case 6112:
				     job = "카이저";
				     break;
				case 6500:
				case 6510:
				case 6511:
				case 6512:
				     job = "엔젤릭버스터";
				     break;
				case 5100:
				case 5110:
				case 5111:
				case 5112:
				     job = "미하일";
				     break;
				case 2400:
				case 2410:
				case 2411:
				case 2412:
				     job = "팬텀";
				     break;
				case 2500:
				case 2510:
				case 2511:
				case 2512:
				     job = "은월";
				     break;
				default:
				job = "초보자";
			}


		순위++;
		txt.append("")
			if(순위 == 1) {
			}

			if(순위 < 10) {
			txt.append("#Cgray#").append(Integer(0)+0).append("#b#e").append(Integer(순위))
			} else if (순위 >= 10 && 순위 < 100) {
			txt.append("#Cgray#").append(Integer(0)).append("#b#e").append(Integer(순위))
			} else {
			txt.append("#Cgray#").append("#b#e").append(Integer(순위))
			}
		txt.append("위#n#k")

			if(con.getString("name") == cm.getPlayer().getName()) {

				if(con.getInt("reborns") < 10) {
				txt.append("　#r").append(Integer(0)+0).append(Integer(con.getInt("reborns"))).append("회　#e")
				} else if(con.getInt("reborns") >= 10 && con.getInt("reborns") < 100) {
				txt.append("　#r").append(Integer(0)).append(Integer(con.getInt("reborns"))).append("회　#e")
				} else {
				txt.append("　#r").append(Integer(con.getInt("reborns"))).append("회　#e")
				}

			txt.append(con.getString("name")).append("#k#n")
			} else {
				if(con.getInt("reborns") < 10) {
				txt.append("　#Cgray#").append(Integer(0)+0).append("#k").append(Integer(con.getInt("reborns"))).append("회　")
				} else if(con.getInt("reborns") >= 10 && con.getInt("reborns") < 100) {
				txt.append("　#Cgray#").append(Integer(0)).append("#k").append(Integer(con.getInt("reborns"))).append("회　")
				} else {
				txt.append("#k").append.(Integer(con.getInt("reborns"))).append("회　")
				}

			txt.append(con.getString("name"))
			}
		txt.append(" #Cgray#(").append(job).append(")\r\n");
		}

		cm.sendOk(txt.toString());
		cm.dispose();	
		}
	
	}

}
}




function getMYLevelRank(){
	var level = 0;
	var rank = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) FROM characters where gm = 0 and `level` > ?");

        rank.setInt(1, cm.getPlayer().getLevel());
        eq = rank.executeQuery();
        if (eq.next()) {
			return eq.getInt("count(*)")+1;
	}
}


function getMYRebornRank(){
	var level = 0;
	var rank = MYSQL.getConnection().prepareStatement("SELECT COUNT(*) FROM characters where gm = 0 and `reborns` > ?");
	rank.setInt(1,cm.getPlayer().getReborns());
	eq = rank.executeQuery();
        if(eq.next()) {
			return eq.getInt("count(*)")+1;
		}
}
*/
importPackage(Packages.client);
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.constants);

var status = 0;



function start() { status = -1; action(1, 0, 0); }
function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; }
if (mode == 1) status++; else status--;
if (status == 0) {
	cm.sendSimple("어떤 랭킹을 보시겠습니까?\r\n#b#L0#레벨 랭킹\r\n#b#L1#환생 랭킹\r\n#L2#메소 랭킹");

} else if (status == 1) {
	if (selection == 0) {
	var txt = new StringBuilder();
	var no = 1;
	var con = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY level DESC LIMIT 100").executeQuery();
	while(con.next()) {
	switch(con.getInt("job")){
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
                    job = "히어로";
                    break;
                case 120:
                case 121:
                case 122:
                    job = "팔라딘";
                    break;
                case 130:
                case 131:
                case 132:
                    job = "다크나이트";
                    break;
                case 210:
                case 211:
                case 212:
                    job = "마법사(불,독)";
                    break;
                case 220:
                case 221:
                case 222:
                    job = "마법사(썬,콜)";
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
                    job = "듀얼블레이드";
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
                case 1100:
                case 1110:
                case 1111:
                case 1112:
                    job = "소울마스터";
                    break;
                case 1200:
                case 1210:
                case 1211:
                case 1212:
                    job = "플레임위자드";
                    break;
                case 1400:
                case 1410:
                case 1411:
                case 1412:
                    job = "나이트워커";
                    break;
                case 2100:
                case 2110:
                case 2111:
                case 2112:
                    job = "아란";
                    break;
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
                    break;
                case 3101:
                case 3120:
                case 3121:
                case 3122:
                    job = "데몬어벤져";
                    break;
                case 3600:
                case 3610:
                case 3611:
                case 3612:
                    job = "제논";
                    break;
                case 2700:
                case 2710:
                case 2711:
                case 2712:
                    job = "루미너스";
                    break;
                case 6100:
                case 6110:
                case 6111:
                case 6112:
                     job = "카이저";
                     break;
               case 6500:
               case 6510:
               case 6511:
               case 6512:
                     job = "엔젤릭버스터";
                     break;
               case 5100:
               case 5110:
               case 5111:
               case 5112:
                     job = "미하일";
                     break;
               case 2400:
               case 2410:
               case 2411:
               case 2412:
                     job = "팬텀";
                     break;
		case 2500:
		case 2510:
		case 2511:
		case 2512:
			job = "은월";
		break;
default:
     job = "초보자";
            }
	if (no == 2) {
	txt.append("#b\r\n");
	} else if (no == 3) {
	txt.append("#b\r\n");
	}
	txt.append("\r\n#e#rTop. ").append(Integer(no));
	no++;
	txt.append("#n\r\n#Cgray#이름 : #k").append(con.getString("name"))
	.append(" / #Cgray#직업 : #k").append(job)
	.append(" / #Cgray#레벨 : #k").append(Integer(con.getInt("level"))).append("\r\n");
	}
	cm.sendOk(txt.toString());
	cm.dispose();
	}
	if (selection == 1) {
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY fame DESC LIMIT 100");
	eq = rank.executeQuery();
	var i = 0;
	var sb = new StringBuilder();
	while(eq.next()){
		i++;
		var job = "";
		sb.append(Integer(i)).append("위 #b").append(eq.getString("name")).append(" #k환생포인트 : ").append(Integer(eq.getInt("fame"))).append("#k\r\n");
	}
	cm.sendOk("#e#b유화온라인#n#k #e#r환생랭킹#n#k입니다.\r\n\r\n"+ sb.toString());
	cm.dispose();
}	if (selection == 2) {
	var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY meso DESC LIMIT 100");
	eq = rank.executeQuery();
	var i = 0;
	var sb = new StringBuilder();
	while(eq.next()){
		i++;
		var job = "#e#k";
		sb.append(Integer(i)).append("위 #e#b").append(eq.getString("name")).append(" #k메소 : #e#b").append(eq.getString("meso")).append("#k#n\r\n");
	}
	cm.sendOk("#e#b유화온라인#n#k #e#r메소랭킹#n#k입니다.\r\n\r\n"+ sb.toString());
	cm.dispose();
}
}
}
}