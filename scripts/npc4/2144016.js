


/*

	퓨어 온라인 소스 팩의 스크립트 입니다.

        제작 : 주크블랙

	엔피시아이디 : 2144016
	
	엔피시 이름 : 륀느

	엔피시가 있는 맵 : 헤네시스

	엔피시 설명 : 빠진스킬 주는 엔피시


*/
importPackage(java.lang);
importPackage(Packages.client.skills);

var skillz = new Array(
new Array("몬스터 마그넷", 1121001, 10),
new Array("스탠스", 1121002, 10),
new Array("어드밴스드 콤보", 1120003, 10),
new Array("돌진", 1121006, 10),
new Array("레이징 블로우", 1121008, 10),
new Array("인레이지", 1121010, 10),
new Array("용사의 의지", 1121011, 5),
new Array("어드밴스드 파이널 어택", 1120013, 10),
new Array("스탠스", 1221002, 10),
new Array("디바인 차지", 1221002, 10),
new Array("아킬레스", 1220005, 10),
new Array("가디언 스피릿", 1220006, 10),
new Array("돌진", 1221007, 10),
new Array("블래스트", 1221009, 10),
new Array("어드밴스드 차지", 1220010, 10),
new Array("생츄어리", 1221011, 10),
new Array("용사의 의지", 1221012, 5),
new Array("몬스터 마그넷", 1321001, 10),
new Array("스탠스", 1321002, 10),
new Array("돌진", 1321003, 10),
new Array("다크포스", 1320006, 10),
new Array("비홀더", 1321007, 10),
new Array("비홀더스 힐링", 1320008, 10),
new Array("비홀더스 버프", 1320009, 10),
new Array("용사의 의지", 1321010, 5),
new Array("다크 임페일", 1321012, 10),
new Array("빅뱅", 2121001, 10),
new Array("미스트 이럽션", 2121003, 10),
new Array("인피니티", 2121004, 10),
new Array("이프리트", 2121005, 10),
new Array("페럴라이즈",  2121006, 10),
new Array("메테오",  2121007, 10),
new Array("용사의 의지",  2121008, 5),
new Array("아케인 에임",  2120010, 10),
new Array("빅뱅",  2221001, 10),
new Array("글레이셜 체인",  2221003, 10),
new Array("인피니티",  2221004, 10),
new Array("엘퀴네스",  2221005, 10),
new Array("체인 라이트닝",  2221006, 10),
new Array("블리자드",  2221007, 10),
new Array("용사의 의지",  2221008, 5),
new Array("아케인 에임",  2220010, 10),
new Array("빅뱅",  2321001, 10),
new Array("마나 리플렉션",  2321002, 10),
new Array("바하뮤트",  2321003, 10),
new Array("인피니티",  2321004, 10),
new Array("어드밴스드 블레스",  2321005, 10),
new Array("리저렉션",  2321006, 10),
new Array("엔젤레이",  2321007, 10),
new Array("제네시스",  2321008, 10),
new Array("용사의 의지",  2321009, 5),
new Array("아케인 에임",  2320011, 10),
new Array("샤프 아이즈",  3121002, 10),
new Array("폭풍의 시",  3121004, 10),
new Array("보우 엑스퍼트",  3120005, 10),
new Array("스피릿 링크 : 피닉스",  3120006, 10),
new Array("일루젼 스탭",  3121007, 10),
new Array("어드밴스드 파이널 어택",  3120008, 10),
new Array("용사의 의지",  3121009, 5),
new Array("피어싱",  3221001, 10),
new Array("샤프 아이즈",  3221002, 10),
new Array("크로스보우 엑스퍼트",  3220004, 10),
new Array("스피릿 링크 : 프리져",  3220005, 10),
new Array("일루젼 스탭",  3221006, 10),
new Array("스나이핑",  3221007, 10),
new Array("용사의 의지",  3221008, 5),
new Array("페이크",  4120002, 10),
new Array("쇼다운",  4121003, 10),
new Array("닌자 앰부쉬",  4121004, 10),
new Array("베놈",  4120005, 10),
new Array("트리플 스로우",  4121007, 10),
new Array("닌자 스톰",  4121008, 10),
new Array("용사의 의지",  4121009, 5),
new Array("숙련된 표창술",  4120010, 10),
new Array("페이탈 베놈",  4120011, 10),
new Array("자벨린 엑스퍼트",  4120012, 10),
new Array("쿼드러플 스로우",  4121013, 10),
new Array("다크 세레니티",  4121014, 10),
new Array("퍼지 에어리어",  4121015, 10),
new Array("써든레이드",  4121016, 10),
new Array("암살",  4221001, 10),
new Array("페이크",  4220002, 10),
new Array("쇼다운",  4221003, 10),
new Array("닌자 앰부쉬",  4221004, 10),
new Array("베놈",  4220005, 10),
new Array("연막탄",  4221006, 10),
new Array("부메랑 스탭",  4221007, 10),
new Array("용사의 의지",  4221008, 5),
new Array("그리드",  4220009, 10),
new Array("써든레이드",  4221010, 10),
new Array("페이탈 베놈",  4220011, 10),
new Array("대거 엑스퍼트",  4220012, 10),
new Array("섀도어 인스팅트",  4221013, 10),
new Array("슬래시 스톰", 4311003, 20),
new Array("드래곤 스트라이크",  5121001, 10),
new Array("에너지 오브",  5121002, 10),
new Array("데몰리션",  5121004, 10),
new Array("스내치",  5121005, 10),
new Array("피스트 인레이지",  5121007, 10),
new Array("용사의 의지",  5121008, 5),
new Array("윈드 부스터",  5121009, 10),
new Array("타임 리프",  5121010, 10),
new Array("전함 노틸러스",  5121013, 10),
new Array("가드 크러쉬",  5120014, 10),
new Array("바이퍼지션",  5121015, 10),
new Array("에너지 블라스트",  5121016, 10),
new Array("서포트 옥토퍼스",  5220002, 10),
new Array("에어 스트라이크",  5221003, 10),
new Array("래피드 파이어",  5221004, 10),
new Array("용사의 의지",  5221010, 5),
new Array("어드밴스드 호밍",  5220011, 10),
new Array("전함 노틸러스",  5221013, 10),
new Array("컨티뉴얼 에이밍",  5221015, 10),
new Array("헤드 샷",  5221016, 10),
new Array("퍼실레이드",  5221017, 10),
new Array("파이렛 스타일",  5221018, 10),
new Array("크루 커맨더쉽",  5220019, 10),
new Array("캡틴 디그니티",  5220020, 10),
new Array("캐논 바주카",  5321000, 10),
new Array("전함 노틸러스",  5321001, 10),
new Array("마그네틱 앵커",  5321003, 10),
new Array("서포트 몽키 트윈스",  5321004, 10),
new Array("메이플 용사",  5321005, 10),
new Array("용사의 의지",  5321006, 5),
new Array("더블 럭키 다이스",  5320007, 5),
new Array("하이퍼 몽키 스펠",  5320008, 10),
new Array("오버버닝 캐논",  5320009, 10),
new Array("파이렛 스피릿",  5321010, 10),
new Array("캐논 버스터",  5321012, 10),
new Array("하이 마스터리",  21120001, 10),
new Array("오버 스윙",  21120002, 10),
new Array("프리즈 스탠딩",  21121003, 10),
new Array("하이 디펜스",  21120004, 10),
new Array("파이널 블로우",  21120005, 10),
new Array("콤보 템페스트",  21120006, 10),
new Array("콤보 배리어",  21120007, 10),
new Array("용사의 의지",  21121008, 5),
new Array("어드밴스드 파이널 어택",  21120012, 10),
new Array("이슈타르의 링",  23121000, 10),
new Array("레전드리 스피어",  23121002, 10),
new Array("라이트닝 엣지",  23121003, 10),
new Array("앤시언트 스피릿",  23121004, 10),
new Array("용사의 의지",  23121008, 5),
new Array("듀얼보우건 엑스퍼트",  23120009, 10),
new Array("디펜스 브레이크",  23120010, 10),
new Array("어드밴스드 파이널 어택",  23120012, 10),
new Array("데몬 익스플로젼",  31121000, 10),
new Array("데몬 임팩트",  31121001, 10),
new Array("뱀피릭 터치",  31121002, 10),
new Array("데빌 크라이",  31121003, 10),
new Array("메타모포시스",  31121005, 10),
new Array("다크 바인드",  31121006, 10),
new Array("인피니티 포스",  31121007, 10),
new Array("어드밴스드 웨폰 마스터리",  31120008, 10),
new Array("하드 스킨",  31120009, 10),
new Array("데몬 슬래시 최종 강화",  31120011, 10),
new Array("얼티밋 드라이브",  24121000, 10),
new Array("탤런트 오브 팬텀시프 IV",  24121001, 10),
new Array("느와르 카르트",  24120002, 10),
new Array("트와일라이트",  24121003, 10),
new Array("프레이 오브 아리아",  24121004, 10),
new Array("템페스트 오브 카드",  24121005, 10),
new Array("케인 엑스퍼트",  24120006, 10),
new Array("소울 스틸",  24121007, 10),
new Array("용사의 의지",  24121009, 5),
new Array("어드밴스드 소드 마스터리",  51120001, 10),
new Array("어드밴스드 파이널 어택",  51120002, 10),
new Array("어드밴스드 소울 실드",  51120003, 10),
new Array("스탠스",  51121004, 10),
new Array("소울 레이지",  51121006, 10),
new Array("소울 어썰트",  51121007, 10),
new Array("샤이닝 블라스트",  51121008, 10),
new Array("어드밴스드 다크 오라",  32120000, 10),
new Array("어드밴스드 옐로우 오라",  32120001, 10),
new Array("피니쉬 블로우",  32121002, 10),
new Array("싸이클론",  32121003, 10),
new Array("다크 제네시스",  32121004, 10),
new Array("쉘터",  32121006, 10),
new Array("용사의 의지",  32121008, 5),
new Array("에너자이즈",  32120009, 10),
new Array("크로스보우 엑스퍼트",  33120000, 10),
new Array("와일드 발칸",  33121009, 10),
new Array("플래쉬 레인",  33121001, 10),
new Array("소닉 붐",  33121002, 10),
new Array("샤프 아이즈",  33121004, 10),
new Array("용사의 의지",  33121008, 5),
new Array("어드밴스드 파이널 어택",  33120011, 10),
new Array("메탈아머 익스트림",  35120000, 10),
new Array("로봇 마스터리",  35120001, 10),
new Array("워머신 : 타이탄",  35121003, 10),
new Array("메탈아머 : 미사일 탱크",  35121005, 10),
new Array("세이프티",  35121006, 10),
new Array("용사의 의지",  35121008, 5),
new Array("로보 팩토리 : RM1",  35121009, 10),
new Array("앰플리파이어 : AF-11",  35121010, 10),
new Array("레이져 블래스트",  35121025, 10),
new Array("메탈아머 : 헤비 머신건", 35121013 ,10),
new Array("트윙클 플래쉬", 27001100, 20),
new Array("라이트 리플렉션", 27121100, 10),
new Array("모닝 스타폴", 27121201, 10),
new Array("아포칼립스", 27121202, 10),
new Array("앱솔루트킬", 27121303, 10),
new Array("다크 크레센도", 27121005, 10),
new Array("다크니스 소서리", 27121006, 10),
new Array("매직 마스터리", 27121007, 10),
new Array("다트라이트 마스터리", 27121008, 10),
new Array("메이플 용사", 27121009, 10),
new Array("용사의 의지", 27121010, 5),
new Array("모닝스타폴", 27120211, 10),
new Array("기가 슬래셔", 61121100, 10),
new Array("블루 스트릭", 61121102, 10),
new Array("소드 스크라이크", 61121104, 10),
new Array("인퍼널 브레스", 61121105, 10),
new Array("어드밴스드 월 오브 소드", 61120007, 10),
new Array("로버스트 아머", 61121009, 10),
new Array("방어모드 3차강화", 61120010, 1),
new Array("언플리칭 커리지", 61120011, 10),
new Array("어드밴스드 소드 마스터리", 61120012, 10),
new Array("공격모드 3차 강화", 61120013, 1),
new Array("노바의 용사", 61120014, 10),
new Array("노바의 용사의 의지", 61120015, 5),
new Array("드래곤슬래시 3차 강화", 61120020, 2),
new Array("프라이멀 로어", 65121100, 10),
new Array("트리니티", 65121101, 10),
new Array("피니투라 페투치아", 65121002, 10),
new Array("소울 레조넌스", 65121003, 10),
new Array("소울 게이즈", 65121004, 10),
new Array("소울슈터 엑스퍼트", 65120005, 10),
new Array("어피티니 IV", 65120006, 10),
new Array("노바의 용사", 65121009, 10),
new Array("노바의 용사의 의지", 65121010, 5)
//메이플용사 추가
);


var status = -1;

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
        var text = "배우지 못한 스킬들이 있으신가요..? 또는 마스터 레벨이 0이라서 찍지 못한 스킬이 있으신가요? #b\r\b\r\b";
        
        if (cm.getPlayer().getJob() >= 431 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4311003) == 0) {
                text += "#L0#슬래시 스톰#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 432 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4321006) == 0) {
                text += "#L1#플라잉 어썰트#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 433 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4331002) == 0) {
                text += "#L2#미러 이미징#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 433 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4330009) == 0) {
                text += "#L3#섀도우 이베이젼#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341004) == 0) {
                text += "#L4#블레이드 퓨리#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341006) == 0) {
                text += "#L5#더미 이펙트#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341007) == 0) {
                text += "#L6#쏜즈 이펙트#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341011) == 0) {
                text += "#L7#써든레이드#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4340013) == 0) {
                text += "#L8#이도류 엑스퍼트#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22170001) == 0) {
                text += "#L9#매직 마스터리#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22171002) == 0) {
                text += "#L10#일루전#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22171003) == 0) {
                text += "#L11#플레임 휠#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22171004) == 0) {
                text += "#L12#용사의 의지#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181000) == 0) {
                text += "#L13#오닉스의 축복#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181001) == 0) {
                text += "#L14#블레이즈#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181002) == 0) {
                text += "#L15#다크포그#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181003) == 0) {
                text += "#L16#소울스톤#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1111 && cm.getPlayer().getJob() <= 1112) {
            if (getMasterLevel(cm, 11110005) == 0) {
                text += "#L17#어드밴스드 콤보#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1111 && cm.getPlayer().getJob() <= 1112) {
            if (getMasterLevel(cm, 11111008) == 0) {
                text += "#L18#매직 크래쉬#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1211 && cm.getPlayer().getJob() <= 1212) {
            if (getMasterLevel(cm, 12111003) == 0) {
                text += "#L19#메테오#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1211 && cm.getPlayer().getJob() <= 1212) {
            if (getMasterLevel(cm, 12111007) == 0) {
                text += "#L20#텔레포트 마스터리#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1311 && cm.getPlayer().getJob() <= 1312) {
            if (getMasterLevel(cm, 13111002) == 0) {
                text += "#L21#폭풍의 시#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1311 && cm.getPlayer().getJob() <= 1312) {
            if (getMasterLevel(cm, 13110009) == 0) {
                text += "#L22#모탈 블로우#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1411 && cm.getPlayer().getJob() <= 1412) {
            if (getMasterLevel(cm, 14111005) == 0) {
                text += "#L23#쿼드러플 스로우#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1411 && cm.getPlayer().getJob() <= 1412) {
            if (getMasterLevel(cm, 14110004) == 0) {
                text += "#L24#베놈#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1411 && cm.getPlayer().getJob() <= 1412) {
            if (getMasterLevel(cm, 14111010) == 0) {
                text += "#L25#다크 플레어#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1511 && cm.getPlayer().getJob() <= 1512) {
            if (getMasterLevel(cm, 15111004) == 0) {
                text += "#L26#피스트 인레이지#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1511 && cm.getPlayer().getJob() <= 1512) {
            if (getMasterLevel(cm, 15111005) == 0) {
                text += "#L27#윈드 부스터#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1511 && cm.getPlayer().getJob() <= 1512) {
            if (getMasterLevel(cm, 15111011) == 0) {
                text += "#L28#럭키 다이스#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 0 && cm.getPlayer().getJob() <= 532) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(1003) == 0) {
                    text += "#L29#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 1000 && cm.getPlayer().getJob() <= 1512) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(10001003) == 0) {
                    text += "#L30#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2100 && cm.getPlayer().getJob() <= 2112) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20001003) == 0) {
                    text += "#L31#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2200 && cm.getPlayer().getJob() <= 2218) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20011003) == 0) {
                    text += "#L32#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2300 && cm.getPlayer().getJob() <= 2312) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20021003) == 0) {
                    text += "#L33#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2400 && cm.getPlayer().getJob() <= 2412) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20031003) == 0) {
                    text += "#L34#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 3200 && cm.getPlayer().getJob() <= 3512) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(30001003) == 0) {
                    text += "#L35#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 3100 && cm.getPlayer().getJob() <= 3112) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(30011003) == 0) {
                    text += "#L36#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 5000 && cm.getPlayer().getJob() <= 5112) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(50001003) == 0) {
                    text += "#L37#장인의 혼#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341009) == 0) {
                text += "#L38#이도류 엑스퍼트#l\r\n";
            }
        }
//        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
//            if (getMasterLevel(cm, 4340013) == 0) {
//                text += "#L8#이도류 엑스퍼트#l\r\n";
//            }
//        }
        for (var i = 0 ; i < skillz.length ; i++) {
            if (Math.floor(skillz[i][1] / 10000) == cm.getPlayer().getJob()) {
                if (SkillFactory.getSkill(skillz[i][1]) == null) {
                    continue;
                }
                if (getMasterLevel(cm, skillz[i][1]) == 0) {
                    text += "#L"+skillz[i][1]+"#"+skillz[i][0]+"#l\r\n";
                }
            }
        }
        
        
        
        
        if (text.equals("배우지 못한 스킬들이 있으신가요..? 또는 마스터 레벨이 0이라서 찍지 못한 스킬이 있으신가요? #b\r\b\r\b")) {
            text += "#L999#배울 스킬이 없습니다.#l\r\n";
        }
        text += "#L1000#스킬북 또는 마스터리북을 받고 싶습니다.#l";
        cm.sendSimple(text);
    } else if (status == 1) {
        var skills = false;
        if (selection == 999) {
            cm.sendOk("배울 수 있는 스킬이 없으세요.");
            cm.dispose();
        } else if (selection == 1000) {
            cm.dispose();
            cm.openNpc(9010000);
        } else if (selection == 0) {
            skills = true;
            cm.teachSkill(4311003, 0, 5);
        } else if (selection == 1) {
            skills = true;
            cm.teachSkill(4321006, 0, 5);
        } else if (selection == 2) {
            skills = true;
            cm.teachSkill(4331002, 0, 10);
        } else if (selection == 3) {
            skills = true;
            cm.teachSkill(4330009, 0, 10);
        } else if (selection == 4) {
            skills = true;
            cm.teachSkill(4341004, 0, 10);
        } else if (selection == 5) {
            skills = true;
            cm.teachSkill(4341006, 0, 10);
        } else if (selection == 6) {
            skills = true;
            cm.teachSkill(4341007, 0, 10);
        } else if (selection == 7) {
            skills = true;
            cm.teachSkill(4341011, 0, 10);
        } else if (selection == 8) {
            skills = true;
            cm.teachSkill(4340013, 0, 10);
        } else if (selection == 9) {
            skills = true;
            cm.teachSkill(22170001, 0, 10);
        } else if (selection == 10) {
            skills = true;
            cm.teachSkill(22171002, 0, 10);
        } else if (selection == 11) {
            skills = true;
            cm.teachSkill(22171003, 0, 10);
        } else if (selection == 12) {
            skills = true;
            cm.teachSkill(22171004, 0, 10);
        } else if (selection == 13) {
            skills = true;
            cm.teachSkill(22181000, 0, 10);
        } else if (selection == 14) {
            skills = true;
            cm.teachSkill(22181001, 0, 10);
        } else if (selection == 15) {
            skills = true;
            cm.teachSkill(22181002, 0, 10);
        } else if (selection == 16) {
            skills = true;
            cm.teachSkill(22181003, 0, 10);
        } else if (selection == 17) {
            skills = true;
            cm.teachSkill(11110005, 0, 20);
        } else if (selection == 18) {
            skills = true;
            cm.teachSkill(11111008, 0, 1);
        } else if (selection == 19) {
            skills = true;
            cm.teachSkill(12111003, 0, 20);
        } else if (selection == 20) {
            skills = true;
            cm.teachSkill(12111007, 0, 1);
        } else if (selection == 21) {
            skills = true;
            cm.teachSkill(13111002, 0, 30);
        } else if (selection == 22) {
            skills = true;
            cm.teachSkill(13110009, 0, 1);
        } else if (selection == 23) {
            skills = true;
            cm.teachSkill(14111005, 0, 20);
        } else if (selection == 24) {
            skills = true;
            cm.teachSkill(14110004, 0, 20);
        } else if (selection == 25) {
            skills = true;
            cm.teachSkill(14111010, 0, 1);
        } else if (selection == 26) {
            skills = true;
            cm.teachSkill(15111004, 0, 20);
        } else if (selection == 27) {
            skills = true;
            cm.teachSkill(15111005, 0, 20);
        } else if (selection == 28) {
            skills = true;
            cm.teachSkill(15111011, 0, 1);
        } else if (selection == 29) {
            skills = true;
            cm.teachSkill(1003, 1, 0);
        } else if (selection == 30) {
            skills = true;
            cm.teachSkill(10001003, 1, 0);
        } else if (selection == 31) {
            skills = true;
            cm.teachSkill(20001003, 1, 0);
        } else if (selection == 32) {
            skills = true;
            cm.teachSkill(20011003, 1, 0);
        } else if (selection == 33) {
            skills = true;
            cm.teachSkill(20021003, 1, 0);
        } else if (selection == 34) {
            skills = true;
            cm.teachSkill(20031003, 1, 0);
        } else if (selection == 35) {
            skills = true;
            cm.teachSkill(30001003, 1, 0);
        } else if (selection == 36) {
            skills = true;
            cm.teachSkill(30011003, 1, 0);
        } else if (selection == 37) {
            skills = true;
            cm.teachSkill(50001003, 1, 0);
        } else if (selection == 38) {
            skills = true;
            cm.teachSkill(4341009, 0, 30);
        } else if (selection > 1000000) {
            skills = true;
            for (var i = 0 ; i < skillz.length ; i++) {
                if (skillz[i][1] == selection) {
                    cm.teachSkill(selection, 0, skillz[i][2]);
                }
            }
        }
        if (skills) {
            cm.sendOk("스킬을 지급해 드렸습니다. 선택하신 스킬의 레벨을 확인해 보세요.");
            cm.dispose();
        }
    }
}



function getMasterLevel(cm, skill) {
    return cm.getPlayer().getMasterLevel(SkillFactory.getSkill(skill));
}