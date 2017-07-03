

/* 

   스크립트 작업 환경은 크므스1.2.155입니다.

   1.2.155기준 팬텀직업군 팅스킬, 공격 안되는 스킬 전부 패치 되어있습니다.
 

 

   없는 직업 : 레지스탕스(배틀메이지, 와일드헌터, 메카닉)

   그외 시그너스직업군

*/


var status = 0;

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
                 return;
 } else {
  if (mode == 1)
   status++;
  else
   status--;

                if(mode == 0){
                  cm.dispose();
                  return;
                 }
  if (status == 0) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L80#[전사]스킬마스터" +"#k\r\n#L81#[마법사]스킬마스터" +"#k\r\n#L82#[궁수]스킬마스터" +"#k\r\n#L83#[도적]스킬마스터" +"#k\r\n#L84#[해적]스킬마스터" +"#k\r\n#L85#[듀얼블레이드]스킬마스터"+"#k\r\n#L86#[메르.데몬.캐논]스킬마스터"+"#k\r\n#L87#[팬텀]스킬마스터"+"#k\r\n#L88#[아란]스킬마스터"+"#k\r\n#L89#[에반]스킬마스터"+"#k\r\n#L90#[미하일]스킬마스터");
} else if (selection == 80) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L800#[히어로]스킬마스터" +"#k\r\n#L801#[팔라딘]스킬마스터" +"#k\r\n#L802#[다크나이트]스킬마스터");
} else if (selection == 81) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L803#[아크메이지(불.독)]스킬마스터" +"#k\r\n#L804#[아크메이지(썬.콜)]스킬마스터" +"#k\r\n#L805#[비숍]스킬마스터");
} else if (selection == 82) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L806#[보우마스터]스킬마스터" +"#k\r\n#L807#[신궁]스킬마스터");
} else if (selection == 83) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L808#[나이트로드]스킬마스터" +"#k\r\n#L809#[섀도어]스킬마스터");
} else if (selection == 84) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L810#[바이퍼]스킬마스터" +"#k\r\n#L811#[캡틴]스킬마스터");
} else if (selection == 85) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L812#[듀얼블레이더]스킬마스터");
} else if (selection == 86) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L813#[메르세데스]스킬마스터" +"#k\r\n#L814#[데몬슬레이어]스킬마스터" +"#k\r\n#L815#[캐논마스터]스킬마스터");
} else if (selection == 87) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L816#[팬텀]스킬마스터");
} else if (selection == 88) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L817#[아란]스킬마스터");
} else if (selection == 89) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L818#[에반]스킬마스터");
} else if (selection == 90) {
cm.sendSimple("#h #님 안녕하세요^^ 저는 스킬을 마스터 해주는 NPC 입니다.\r\n스킬마스터 할 직업을 선택해주세요^^" +"#k\r\n#L819#[미하일]스킬마스터");


} else if (selection == 800) {
  cm.teachSkill(1001003,20,20); // 아이언 바디 -- 1차스킬
  cm.teachSkill(1001004,20,20); // 파워 스트라이크
  cm.teachSkill(1001005,20,20); // 슬래시 블러스트
  cm.teachSkill(1001006,10,10); // HP증가 -- 1차스킬끝
  cm.teachSkill(1100000,20,20); // 웨폰 마스터리 -- 2차스킬 시작
  cm.teachSkill(1100002,20,20); // 파이널 어택
  cm.teachSkill(1100004,20,20); // 웨폰 부스터
  cm.teachSkill(1100006,20,20); // 분노
  cm.teachSkill(1100007,20,20); // 파워 리플렉션
  cm.teachSkill(1100008,10,10); // 그라운드 스매시
  cm.teachSkill(1100009,10,10); // 피지컬 트레이닝
  cm.teachSkill(1101010,10,10); // 러쉬 -- 2차스킬 끝
  cm.teachSkill(1110000,20,20); // 셀프 리커버리 -- 3차스킬 시작
  cm.teachSkill(1111002,20,20); // 콤보 어택
  cm.teachSkill(1111003,20,20); // 패닉
  cm.teachSkill(1111005,20,20); // 코마
  cm.teachSkill(1111010,20,20); // 브랜디쉬
  cm.teachSkill(1111007,20,20); // 매직 크래쉬
  cm.teachSkill(1111008,20,20); // 샤우트
  cm.teachSkill(1111009,20,20); // 찬스 어택 -- 3차스킬 끝
  cm.teachSkill(1121000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(1121001,30,30); // 몬스터 마그넷
  cm.teachSkill(1121002,30,30); // 스탠스
  cm.teachSkill(1121006,30,30); // 돌진
  cm.teachSkill(1121008,30,30); // 브레이브 슬래시
  cm.teachSkill(1121010,30,30); // 인레이지
  cm.teachSkill(1120012,10,10); // 컴뱃 마스터리
  cm.teachSkill(1120013,30,30); // 어드밴스드 파이널 어택 -- 4차끝
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 801) {
  cm.teachSkill(1001003,20,20); // 아이언 바디 -- 1차스킬
  cm.teachSkill(1001004,20,20); // 파워 스트라이크
  cm.teachSkill(1001005,20,20); // 슬래시 블러스트
  cm.teachSkill(1001006,10,10); // HP증가 -- 1차스킬끝
  cm.teachSkill(1200000,20,20); // 웨폰 마스터리 -- 2차스킬 시작
  cm.teachSkill(1200002,20,20); // 파이널 어택
  cm.teachSkill(1201004,20,20); // 웨폰 부스터
  cm.teachSkill(1201006,20,20); // 위협
  cm.teachSkill(1201007,20,20); // 파워 가드
  cm.teachSkill(1201008,10,10); // 그라운드 스매시
  cm.teachSkill(1200009,10,10); // 피지컬 트레이닝
  cm.teachSkill(1201010,10,10); // 러쉬 -- 2차스킬 끝
  cm.teachSkill(1210001,20,20); // 쉴드 마스터리 -- 3차스킬 시작
  cm.teachSkill(1211002,30,30); // 차지 블로우
  cm.teachSkill(1211004,20,20); // 플레임 차지
  cm.teachSkill(1211006,20,20); // 블리자드 차지
  cm.teachSkill(1211008,20,20); // 라이트닝 차지
  cm.teachSkill(1211011,20,20); // 컴뱃 오더스
  cm.teachSkill(1211009,20,20); // 매직 크래쉬
  cm.teachSkill(1211010,10,10); // 리스토네이션 -- 3차스킬 끝
  cm.teachSkill(1221000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(1220005,30,30); // 아킬레스
  cm.teachSkill(1220006,30,30); // 가디언 스피릿
  cm.teachSkill(1221009,30,30); // 블래스트
  cm.teachSkill(1220013,10,10); // 블래싱 아머
  cm.teachSkill(1221002,30,30); // 스탠스
  cm.teachSkill(1221007,30,30); // 돌진
  cm.teachSkill(1221004,20,20); // 디바인 차지
  cm.teachSkill(1221011,30,30); // 생츄어리
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();
  
} else if (selection == 802) {
  cm.teachSkill(1001003,20,20); // 아이언 바디 -- 1차스킬
  cm.teachSkill(1001004,20,20); // 파워 스트라이크
  cm.teachSkill(1001005,20,20); // 슬래시 블러스트
  cm.teachSkill(1001006,10,10); // HP증가 -- 1차스킬끝
  cm.teachSkill(1300000,20,20); // 웨폰 마스터리 -- 2차스킬 시작
  cm.teachSkill(1300002,20,20); // 파이널 어택
  cm.teachSkill(1301004,20,20); // 웨폰 부스터
  cm.teachSkill(1301006,20,20); // 아이언 월
  cm.teachSkill(1301007,20,20); // 하이퍼 바디
  cm.teachSkill(1301008,10,10); // 그라운드 스매시
  cm.teachSkill(1300009,10,10); // 피지컬 트레이닝
  cm.teachSkill(1301010,10,10); // 러쉬 -- 2차스킬 끝
  cm.teachSkill(1310000,20,20); // 엘리먼트 레지스턴스 -- 3차스킬 시작
  cm.teachSkill(1311001,20,20); // 드래곤 버스터
  cm.teachSkill(1311003,20,20); // 드래곤 쓰레셔
  cm.teachSkill(1311005,20,20); // 새크리파이스
  cm.teachSkill(1311006,30,30); // 드래곤 로어
  cm.teachSkill(1311007,20,20); // 매직 크래쉬
  cm.teachSkill(1311008,20,20); // 드래곤 스트랭스
  cm.teachSkill(1310009,10,10); // 드래곤 저지먼트 -- 3차스킬 끝
  cm.teachSkill(1321000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(1320006,30,30); // 다크포스
  cm.teachSkill(1321001,30,30); // 몬스터 마그넷
  cm.teachSkill(1321002,30,30); // 스탠스
  cm.teachSkill(1321003,30,30); // 돌진
  cm.teachSkill(1321007,10,10); // 비홀더
  cm.teachSkill(1320008,20,20); // 비홀더스 힐링
  cm.teachSkill(1320011,10,10); // 비홀더스 리벤지
  cm.teachSkill(1320009,20,20); // 비홀더스 버프
  cm.teachSkill(1321012,30,30); // 다크 임페일
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 803) {
  cm.teachSkill(2001002,15,15); // 매직 가드 -- 1차스킬
  cm.teachSkill(2001003,15,15); // 매직 아머
  cm.teachSkill(2001004,20,20); // 에너지 볼트
  cm.teachSkill(2001005,20,20); // 매직 클로
  cm.teachSkill(2000006,10,10); // MP 증가 -- 1차 스킬 끝
  cm.teachSkill(2100000,20,20); // MP 이터 -- 2차 스킬 시작
  cm.teachSkill(2101001,20,20); // 매디테이션
  cm.teachSkill(2101002,20,20); // 텔레포트
  cm.teachSkill(2101003,10,10); // 슬로우
  cm.teachSkill(2101004,20,20); // 플레임 애로우
  cm.teachSkill(2101005,20,20); // 포이즌 브레스
  cm.teachSkill(2100006,20,20); // 스펠 마스터리
  cm.teachSkill(2100007,10,10); // 하이 위즈덤 -- 2차 스킬 끝
  cm.teachSkill(2110000,10,10); // 익스트림 매직(불,독) -- 3차 스킬 시작
  cm.teachSkill(2110001,20,20); // 엘리먼트 엠플리피케이션
  cm.teachSkill(2111002,20,20); // 익스플로젼
  cm.teachSkill(2111003,20,20); // 포이즌 미스트
  cm.teachSkill(2111004,20,20); // 씰
  cm.teachSkill(2111005,20,20); // 매직 부스터
  cm.teachSkill(2111006,10,10); // 파이어 데몬
  cm.teachSkill(2111007,10,10); // 텔레포트 마스터리
  cm.teachSkill(2111008,10,10); // 엘리멘탈 리셋
  cm.teachSkill(2110009,20,20); // 매직 크리티컬 -- 3차스킬 끝
  cm.teachSkill(2121000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(2121001,30,30); // 빅뱅
  cm.teachSkill(2121003,30,30); // 미스트 이럽션
  cm.teachSkill(2121004,30,30); // 인피니티
  cm.teachSkill(2121005,30,30); // 이프리트
  cm.teachSkill(2121006,30,30); // 페럴라이즈
  cm.teachSkill(2121007,30,30); // 매테오
  cm.teachSkill(2121009,10,10); // 마스터 매직
  cm.teachSkill(2120010,30,30); // 아케인 에임
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 804) {
  cm.teachSkill(2001002,15,15); // 매직 가드 -- 1차스킬
  cm.teachSkill(2001003,15,15); // 매직 아머
  cm.teachSkill(2001004,20,20); // 에너지 볼트
  cm.teachSkill(2001005,20,20); // 매직 클로
  cm.teachSkill(2000006,10,10); // MP 증가 -- 1차 스킬 끝
  cm.teachSkill(2200000,20,20); // MP 이터 -- 2차 스킬 시작
  cm.teachSkill(2201001,20,20); // 매디테이션
  cm.teachSkill(2201002,20,20); // 텔레포트
  cm.teachSkill(2201003,10,10); // 슬로우
  cm.teachSkill(2201004,20,20); // 플레임 애로우
  cm.teachSkill(2201005,20,20); // 포이즌 브레스
  cm.teachSkill(2200006,20,20); // 스펠 마스터리
  cm.teachSkill(2200007,10,10); // 하이 위즈덤 -- 2차 스킬 끝
  cm.teachSkill(2210000,10,10); // 익스트림 매직(썬,콜) -- 3차 스킬 시작
  cm.teachSkill(2210001,20,20); // 엘리먼트 엠플리피케이션
  cm.teachSkill(2211002,20,20); // 아이스 스트라이크
  cm.teachSkill(2211003,20,20); // 썬더 스피어
  cm.teachSkill(2211004,20,20); // 씰
  cm.teachSkill(2211005,20,20); // 매직 부스터
  cm.teachSkill(2211006,10,10); // 아이스 데몬
  cm.teachSkill(2211007,10,10); // 텔레포트 마스터리
  cm.teachSkill(2211008,10,10); // 엘리멘탈 리셋
  cm.teachSkill(2210009,20,20); // 매직 크리티컬 -- 3차스킬 끝
  cm.teachSkill(2221000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(2221001,30,30); // 빅뱅
  cm.teachSkill(2221003,30,30); // 글레이셜 체인
  cm.teachSkill(2221004,30,30); // 인피니티
  cm.teachSkill(2221005,30,30); // 엘퀴네스
  cm.teachSkill(2221006,30,30); // 체인 라이트닝
  cm.teachSkill(2221007,30,30); // 블리자드
  cm.teachSkill(2221009,10,10); // 마스터 매직
  cm.teachSkill(2220010,30,30); // 아케인 에임
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 805) {
  cm.teachSkill(2001002,15,15); // 매직 가드 -- 1차스킬
  cm.teachSkill(2001003,15,15); // 매직 아머
  cm.teachSkill(2001004,20,20); // 에너지 볼트
  cm.teachSkill(2001005,20,20); // 매직 클로
  cm.teachSkill(2000006,10,10); // MP 증가 -- 1차 스킬 끝
  cm.teachSkill(2300000,20,20); // MP 이터 -- 2차 스킬 시작
  cm.teachSkill(2301001,20,20); // 텔레포트
  cm.teachSkill(2301002,20,20); // 힐
  cm.teachSkill(2301003,15,15); // 인빈서블
  cm.teachSkill(2301004,15,15); // 블레스
  cm.teachSkill(2301005,20,20); // 홀리 애로우
  cm.teachSkill(2300006,20,20); // 스펠 마스터리
  cm.teachSkill(2300007,10,10); // 하이 위즈덤 -- 2차 스킬 끝
  cm.teachSkill(2311001,10,10); // 디스펠 -- 3차 스킬 시작
  cm.teachSkill(2311002,10,10); // 미스틱 도어
  cm.teachSkill(2311003,20,20); // 홀리 심볼
  cm.teachSkill(2311004,20,20); // 샤이닝 레이
  cm.teachSkill(2311005,10,10); // 둠
  cm.teachSkill(2311006,20,20); // 매직 부스터
  cm.teachSkill(2311007,10,10); // 텔레포트 마스터리
  cm.teachSkill(2310008,20,20); // 홀리 포커스
  cm.teachSkill(2311009,20,20); // 홀리 매직쉘
  cm.teachSkill(2310010,20,20); // 매직 크리티컬 -- 3차스킬 끝
  cm.teachSkill(2321000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(2321001,30,30); // 빅뱅
  cm.teachSkill(2321002,30,30); // 마나 리플렉션
  cm.teachSkill(2321004,30,30); // 인피니티
  cm.teachSkill(2321003,30,30); // 바하뮤트
  cm.teachSkill(2321005,30,30); // 어드밴스드 블레스
  cm.teachSkill(2321006,5,5); // 리저렉션
  cm.teachSkill(2321007,30,30); // 엔젤레이
  cm.teachSkill(2321008,30,30); // 제네시스
  cm.teachSkill(2321010,10,10); // 마스터 매직
  cm.teachSkill(2320011,30,30); // 아케인 에임
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 806) {
  cm.teachSkill(3000001,20,20); // 크리티컬 샷 -- 1차스킬
  cm.teachSkill(3000002,15,15); // 아처 마스터리
  cm.teachSkill(3001004,15,15); // 애로우 블로우
  cm.teachSkill(3001005,15,15); // 더블샷 -- 1차 스킬 끝
  cm.teachSkill(3100000,20,20); // 보우 마스터리 -- 2차 스킬 시작
  cm.teachSkill(3100001,20,20); // 파이널 어택 : 활
  cm.teachSkill(3101002,20,20); // 보우 부스터
  cm.teachSkill(3101003,10,10); // 더블 점프
  cm.teachSkill(3101004,10,10); // 소울 애로우 : 활
  cm.teachSkill(3101005,20,20); // 애로우 봄 : 활
  cm.teachSkill(3100006,10,10); // 피지컬 트레이닝
  cm.teachSkill(3101007,15,15); // 실버 호크 -- 2차 스킬 끝
  cm.teachSkill(3111000,20,20); // 집중 -- 3차 스킬 시작
  cm.teachSkill(3110001,15,15); // 모탈 블로우
  cm.teachSkill(3111002,15,15); // 퍼펫
  cm.teachSkill(3111003,20,20); // 플레임 샷
  cm.teachSkill(3111004,20,20); // 애로우 레인
  cm.teachSkill(3111005,20,20); // 피닉스
  cm.teachSkill(3111006,20,20); // 스트레이프
  cm.teachSkill(3110007,10,10); // 닷지
  cm.teachSkill(3111008,20,20); // 드레인 애로우 -- 3차스킬 끝
  cm.teachSkill(3121000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(3120005,30,30); // 보우 엑스퍼트 
  cm.teachSkill(3121002,30,30); // 샤프 아이즈
  cm.teachSkill(3121004,30,30); // 폭풍의 시
  cm.teachSkill(3121007,30,30); // 일루젼 스탭
  cm.teachSkill(3120006,30,30); // 스피릿 링크 : 피닉스
  cm.teachSkill(3120008,30,30); // 어드밴스드 파이널 어택
  cm.teachSkill(3120010,10,10); // 얼티밋 플레임샷
  cm.teachSkill(3120011,10,10); // 마크맨쉽
  cm.teachSkill(3120012,15,15); // 엘리트 퍼펫
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 807) {
  cm.teachSkill(3000001,20,20); // 크리티컬 샷 -- 1차스킬
  cm.teachSkill(3000002,15,15); // 아처 마스터리
  cm.teachSkill(3001004,15,15); // 애로우 블로우
  cm.teachSkill(3001005,15,15); // 더블샷 -- 1차 스킬 끝
  cm.teachSkill(3200000,20,20); // 크로스보우 마스터리 -- 2차 스킬 시작
  cm.teachSkill(3200001,20,20); // 파이널 어택 : 석궁
  cm.teachSkill(3201005,20,20); // 아이언 애로우 : 석궁
  cm.teachSkill(3201002,20,20); // 크로스보우 부스터
  cm.teachSkill(3201003,10,10); // 더블 점프
  cm.teachSkill(3201004,10,10); // 소울 애로우 : 석궁
  cm.teachSkill(3200006,10,10); // 피지컬 트레이닝
  cm.teachSkill(3201007,15,15); // 골든 이글 -- 2차 스킬 끝
  cm.teachSkill(3211000,20,20); // 집중 -- 3차 스킬 시작
  cm.teachSkill(3210001,15,15); // 모탈 블로우
  cm.teachSkill(3211002,15,15); // 퍼펫
  cm.teachSkill(3211003,20,20); // 블리자드 샷
  cm.teachSkill(3211004,20,20); // 애로우 이럽션
  cm.teachSkill(3211005,20,20); // 프리져
  cm.teachSkill(3211006,20,20); // 스트레이프
  cm.teachSkill(3210007,10,10); // 닷지
  cm.teachSkill(3211008,20,20); // 드래곤 펄스 -- 3차스킬 끝
  cm.teachSkill(3221000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(3220004,30,30); // 크로스보우 엑스퍼트
  cm.teachSkill(3220010,10,10); // 얼티밋 스트레이프
  cm.teachSkill(3221002,30,30); // 샤프 아이즈
  cm.teachSkill(3221001,30,30); // 피어싱
  cm.teachSkill(3221006,30,30); // 일루젼 스탭
  cm.teachSkill(3220005,30,30); // 스피릿 링크 : 프리져
  cm.teachSkill(3221007,30,30); // 스나이핑
  cm.teachSkill(3220009,10,10); // 마크맨쉽
  cm.teachSkill(3220012,15,15); // 엘리트 퍼펫
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 808) {
  cm.teachSkill(4000000,10,10); // 님블 바디 -- 1차스킬
  cm.teachSkill(4001003,10,10); // 다크 사이트
  cm.teachSkill(4001334,20,20); // 더블 스탭
  cm.teachSkill(4001344,20,20); // 럭키 세븐 
  cm.teachSkill(4001005,20,20); // 헤이스트 -- 1차 스킬 끝
  cm.teachSkill(4100000,20,20); // 자벨린 마스터리 -- 2차 스킬 시작
  cm.teachSkill(4100001,20,20); // 크리티컬 스로우
  cm.teachSkill(4101003,20,20); // 자벨린 부스터
  cm.teachSkill(4100007,10,10); // 피지컬 트레이닝
  cm.teachSkill(4101008,20,20); // 슈리켄 버스트
  cm.teachSkill(4101009,10,10); // 플래시 점프
  cm.teachSkill(4101010,20,20); // 윈드 탈리스만 -- 2차 스킬 끝
  cm.teachSkill(4111002,20,20); // 쉐도우 파트너 -- 3차 스킬 시작
  cm.teachSkill(4111003,10,10); // 쉐도우 웹
  cm.teachSkill(4111007,20,20); // 다크 플레어
  cm.teachSkill(4110008,20,20); // 래디컬 다크니스
  cm.teachSkill(4111009,10,10); // 스피릿 자벨린
  cm.teachSkill(4111010,20,20); // 트리플 스로우
  cm.teachSkill(4110011,20,20); // 베놈
  cm.teachSkill(4110012,10,10); // 숙련된 표창술
  cm.teachSkill(4111013,20,20); // 쉐이드 스플릿
  cm.teachSkill(4110014,10,10); // 아드레날린 -- 3차스킬 끝
  cm.teachSkill(4121000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(4120002,30,30); // 페이크
  cm.teachSkill(4121003,20,20); // 쇼다운
  cm.teachSkill(4120011,10,10); // 페이탈 베놈
  cm.teachSkill(4120012,30,30); // 자벨린 엑스퍼트
  cm.teachSkill(4121013,30,30); // 쿼드러플 스로우
  cm.teachSkill(4121014,30,30); // 다크 세레니티
  cm.teachSkill(4121015,30,30); // 퍼지 에어리어
  cm.teachSkill(4121016,30,30); // 써든레이드
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 808) {
  cm.teachSkill(4000000,10,10); // 님블 바디 -- 1차스킬
  cm.teachSkill(4001003,10,10); // 다크 사이트
  cm.teachSkill(4001334,20,20); // 더블 스탭
  cm.teachSkill(4001344,20,20); // 럭키 세븐 
  cm.teachSkill(4001005,20,20); // 헤이스트 -- 1차 스킬 끝
  cm.teachSkill(4100000,20,20); // 자벨린 마스터리 -- 2차 스킬 시작
  cm.teachSkill(4100001,20,20); // 크리티컬 스로우
  cm.teachSkill(4101003,20,20); // 자벨린 부스터
  cm.teachSkill(4100007,10,10); // 피지컬 트레이닝
  cm.teachSkill(4101008,20,20); // 슈리켄 버스트
  cm.teachSkill(4101009,10,10); // 플래시 점프
  cm.teachSkill(4101010,20,20); // 윈드 탈리스만 -- 2차 스킬 끝
  cm.teachSkill(4111002,20,20); // 쉐도우 파트너 -- 3차 스킬 시작
  cm.teachSkill(4111003,10,10); // 쉐도우 웹
  cm.teachSkill(4111007,20,20); // 다크 플레어
  cm.teachSkill(4110008,20,20); // 래디컬 다크니스
  cm.teachSkill(4111009,10,10); // 스피릿 자벨린
  cm.teachSkill(4111010,20,20); // 트리플 스로우
  cm.teachSkill(4110011,20,20); // 베놈
  cm.teachSkill(4110012,10,10); // 숙련된 표창술
  cm.teachSkill(4111013,20,20); // 쉐이드 스플릿
  cm.teachSkill(4110014,10,10); // 아드레날린 -- 3차스킬 끝
  cm.teachSkill(4121000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(4120002,30,30); // 페이크
  cm.teachSkill(4121003,20,20); // 쇼다운
  cm.teachSkill(4120011,10,10); // 페이탈 베놈
  cm.teachSkill(4120012,30,30); // 자벨린 엑스퍼트
  cm.teachSkill(4121013,30,30); // 쿼드러플 스로우
  cm.teachSkill(4121014,30,30); // 다크 세레니티
  cm.teachSkill(4121015,30,30); // 퍼지 에어리어
  cm.teachSkill(4121016,30,30); // 써든레이드
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 809) {
  cm.teachSkill(4000000,10,10); // 님블 바디 -- 1차스킬
  cm.teachSkill(4001003,10,10); // 다크 사이트
  cm.teachSkill(4001334,20,20); // 더블 스탭
  cm.teachSkill(4001344,20,20); // 럭키 세븐 
  cm.teachSkill(4001005,20,20); // 헤이스트 -- 1차 스킬 끝
  cm.teachSkill(4200000,20,20); // 대거 마스터리 -- 2차 스킬 시작
  cm.teachSkill(4201002,20,20); // 대거 부스터
  cm.teachSkill(4201004,10,10); // 스틸
  cm.teachSkill(4201005,20,20); // 새비지 블로우
  cm.teachSkill(4200007,10,10); // 피지컬 트레이닝
  cm.teachSkill(4201008,10,10); // 플래시 점프
  cm.teachSkill(4201009,20,20); // 카르마 
  cm.teachSkill(4200010,10,10); // 쉴드 마스터리
  cm.teachSkill(4201011,10,10); // 메소 가드 -- 2차 스킬 끝
  cm.teachSkill(4211002,20,20); // 무스펠 하임 -- 3차 스킬 시작
  cm.teachSkill(4211003,10,10); // 픽파킷
  cm.teachSkill(4211006,20,20); // 메소 익스플로젼
  cm.teachSkill(4211007,20,20); // 다크 플레어
  cm.teachSkill(4211008,20,20); // 쉐도우 파트너
  cm.teachSkill(4210010,20,20); // 베놈
  cm.teachSkill(4211011,20,20); // 엣지 카니발
  cm.teachSkill(4210012,10,10); // 그리드 
  cm.teachSkill(4210013,20,20); // 래디컬 다크니스-- 3차스킬 끝
  cm.teachSkill(4221000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(4221001,30,30); // 암살
  cm.teachSkill(4220002,30,30); // 페이크
  cm.teachSkill(4221006,30,30); // 연막탄
  cm.teachSkill(4221007,30,30); // 부메랑 스탭
  cm.teachSkill(4221010,30,30); // 써든레이드
  cm.teachSkill(4220011,10,10); // 페이탈 베놈
  cm.teachSkill(4220012,30,30); // 대거 엑스퍼트
  cm.teachSkill(4221013,20,20); // 섀도어 인스팅트
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 810) {
  cm.teachSkill(5000000,10,10); // 퀵모션 -- 1차스킬
  cm.teachSkill(5001002,20,20); // 써머솔트 킥
  cm.teachSkill(5001003,20,20); // 더블 파이어
  cm.teachSkill(5001005,10,10); // 대쉬
  cm.teachSkill(5000007,10,10); // 트리티컬 로어 -- 1차 스킬 끝
  cm.teachSkill(5100001,20,20); // 너클 마스터리 -- 2차 스킬 시작
  cm.teachSkill(5101004,20,20); // 스크류 펀치
  cm.teachSkill(5101006,20,20); // 너클 부스터
  cm.teachSkill(5100009,10,10); // hp 증가
  cm.teachSkill(5100010,10,10); // 피지컬 트레이닝
  cm.teachSkill(5101011,20,20); // 멘탈 클리어리티
  cm.teachSkill(5101012,20,20); // 토네이도 어퍼
  cm.teachSkill(5100013,10,10); // 인듀어런스 -- 2차 스킬 끝
  cm.teachSkill(5110000,20,20); // 스턴 마스터리 -- 3차 스킬 시작
  cm.teachSkill(5110001,20,20); // 에너지 차지 
  cm.teachSkill(5111002,20,20); // 에너지 버스터
  cm.teachSkill(5111007,20,20); // 럭키 다이스
  cm.teachSkill(5111009,20,20); // 더블 스파이럴
  cm.teachSkill(5111010,20,20); // 윌로우 디펜시브
  cm.teachSkill(5110011,20,20); // 크리티컬 레이지
  cm.teachSkill(5111012,20,20); // 쇼크웨이브 -- 3차스킬 끝
  cm.teachSkill(5121000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(5121001,30,30); // 드래곤 스트라이크
  cm.teachSkill(5121007,30,30); // 피스트 인레이지
  cm.teachSkill(5121009,20,20); // 윈드 부스터
  cm.teachSkill(5121010,5,5); // 타임 리프
  cm.teachSkill(5120011,10,10); // 카운터 어택
  cm.teachSkill(5120012,5,5); // 더블 럭키 다이스
  cm.teachSkill(5121013,30,30); // 전함 노틸러스
  cm.teachSkill(5120014,20,20); // 가드 크러쉬
  cm.teachSkill(5121015,30,30); // 바이퍼지션
  cm.teachSkill(5121016,30,30); // 에너지 블라스트
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 811) {
  cm.teachSkill(5000000,10,10); // 퀵모션 -- 1차스킬
  cm.teachSkill(5001002,20,20); // 써머솔트 킥
  cm.teachSkill(5001003,20,20); // 더블 파이어
  cm.teachSkill(5001005,10,10); // 대쉬
  cm.teachSkill(5000007,10,10); // 트리티컬 로어 -- 1차 스킬 끝
  cm.teachSkill(5200000,20,20); // 건 마스터리  -- 2차 스킬 시작
  cm.teachSkill(5201001,20,20); // 매그넘 샷
  cm.teachSkill(5201003,20,20); // 건 부스터
  cm.teachSkill(5201006,20,20); // 백스텝샷
  cm.teachSkill(5201008,10,10); // 인피닛 불릿
  cm.teachSkill(5200009,10,10); // 피지컬 트레이닝
  cm.teachSkill(5200010,20,20); // 트리플 파이어
  cm.teachSkill(5201011,5,5); // 윙즈 -- 2차 스킬 끝
  cm.teachSkill(5211007,20,20); // 럭키 다이스 -- 3차 스킬 시작
  cm.teachSkill(5211008,20,20); // 더블 배럴 샷
  cm.teachSkill(5211009,20,20); // 할로포인트 불릿
  cm.teachSkill(5211010,20,20); // 불릿 스매시
  cm.teachSkill(5211011,20,20); // 어셈블 크루
  cm.teachSkill(5210012,20,20); // 발키리 페이션트
  cm.teachSkill(5210013,20,20); // 풀메탈 자켓
  cm.teachSkill(5211014,20,20); // 옥타 쿼터덱 -- 3차스킬 끝
  cm.teachSkill(5221000,30,30); // 메이플 용사 -- 4차스킬 시작
  cm.teachSkill(5221004,30,30); // 래피드 파이어
  cm.teachSkill(5220012,10,10); // 카운터 어택
  cm.teachSkill(5221013,30,30); // 전함 노틸러스
  cm.teachSkill(5220014,5,5); // 더블 럭키 다이스
  cm.teachSkill(5221015,20,20); // 컨티뉴얼 에이밍
  cm.teachSkill(5221016,30,30); // 헤드 샷
  cm.teachSkill(5221017,30,30); // 퍼실레이드
  cm.teachSkill(5221018,20,20); // 파이렛 스타일
  cm.teachSkill(5220019,10,10); // 크루 커맨더쉽
  cm.teachSkill(5220020,30,30); // 캡틴 디그니티
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 812) {
  cm.teachSkill(4000000,10,10); // 님블 바디 -- 1차스킬
  cm.teachSkill(4001003,10,10); // 다크 사이트
  cm.teachSkill(4001334,20,20); // 더블 스탭
  cm.teachSkill(4001344,20,20); // 럭키 세븐 
  cm.teachSkill(4001005,20,20); // 헤이스트 -- 1차 스킬 끝
  cm.teachSkill(4300000,20,20); // 이도류 마스터리 -- 2차 스킬 시작
  cm.teachSkill(4301003,10,10); // 셀프 헤이스트
  cm.teachSkill(4301004,15,15); // 토네이도 스핀 -- 2차 스킬 끝
  cm.teachSkill(4311002,20,20); // 페이탈 블로우 -- 3차 스킬 시작
  cm.teachSkill(4311003,20,20); // 슬래시 스톰
  cm.teachSkill(4311005,20,20); // 카르마
  cm.teachSkill(4310006,10,10); // 피지컬 트레이닝
  cm.teachSkill(4311009,10,10); // 이도 부스터 -- 3차스킬 끝
  cm.teachSkill(4321002,5,5); // 플래시 뱅 -- 4차스킬 시작
  cm.teachSkill(4321004,20,20); // 어퍼 스탭 
  cm.teachSkill(4320005,20,20); // 베놈
  cm.teachSkill(4321006,20,20); // 플라잉 어썰터 -- 4차스킬 끝
  cm.teachSkill(4331000,20,20); // 블러디 스톰 -- 5차스킬 시작
  cm.teachSkill(4330001,10,10); // 어드밴스드 다크 사이트
  cm.teachSkill(4331002,20,20); // 미러 이미징
  cm.teachSkill(4331006,20,20); // 사슬지옥
  cm.teachSkill(4330007,10,10); // 바이탈 스틸
  cm.teachSkill(4330008,20,20); // 래디컬 다크니스
  cm.teachSkill(4330009,20,20); // 섀도우 이베이젼 -- 5차스킬 끝
  cm.teachSkill(4341000,30,30); // 쇼다운 -- 6차스킬 시작
  cm.teachSkill(4341004,30,30); // 블레이드 퓨리
  cm.teachSkill(4341006,30,30); // 더미 이펙트
  cm.teachSkill(4341007,30,30); // 쏜즈 이펙트
  cm.teachSkill(4340010,10,10); // 샤프니스
  cm.teachSkill(4341011,30,30); // 써든레이드
  cm.teachSkill(4340012,10,10); // 페이탈 베놈
  cm.teachSkill(4340013,30,30); // 이도류 엑스퍼트
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 813) {
  cm.teachSkill(20020109,1,1); // 엘프의 회복 -- 0차 스킬
  cm.teachSkill(20021110,1,1); // 엘프의 축복
  cm.teachSkill(20020111,1,1); // 스타일리쉬 무브
  cm.teachSkill(20020112,1,1); // 왕의 자격 -- 0차 스킬 끝
  cm.teachSkill(23001000,20,20); // 스피드 듀얼샷 -- 1차 스킬 시작
  cm.teachSkill(23000001,15,15); // 포텐셜 파워 
  cm.teachSkill(23001002,10,10); // 아크로바틱 점프
  cm.teachSkill(23000003,20,20); // 샤프 에이밍 -- 1차 스킬 끝
  cm.teachSkill(23101000,20,20); // 크로스 피어싱 -- 2차 스킬 시작
  cm.teachSkill(23101001,15,15); // 차지 드라이브
  cm.teachSkill(23100004,5,5); // 파이널 샷
  cm.teachSkill(23101002,20,20); // 듀얼보우건 부스터
  cm.teachSkill(23101003,15,15); // 스피릿 인퓨전
  cm.teachSkill(23100005,20,20); // 듀얼보우건 마스터리
  cm.teachSkill(23100006,20,20); // 파이널 어택 : 듀얼보우건
  cm.teachSkill(23100008,10,10); // 피지컬 트레이닝 -- 2차스킬 끝
  cm.teachSkill(23111000,20,20); // 스트라이크 듀얼샷 -- 3차스킬 시작
  cm.teachSkill(23111001,20,20); // 리프 토네이도
  cm.teachSkill(23111002,20,20); // 유니콘 스파이크
  cm.teachSkill(23111003,20,20); // 거스트 다이브
  cm.teachSkill(23110006,15,15); // 하이킥 데몰리션
  cm.teachSkill(23111004,20,20); // 이그니스 로어
  cm.teachSkill(23111005,20,20); // 워터 쉴드
  cm.teachSkill(23111008,20,20); // 엘리멘탈 나이트 -- 3차스킬 끝
  cm.teachSkill(23121000,30,30); // 이슈타르의 링 -- 4차스킬 시작
  cm.teachSkill(23121002,20,20); // 레전드리 스피어
  cm.teachSkill(23121003,30,30); // 라이트닝 엣지
  cm.teachSkill(23120011,20,20); // 롤링 문썰트
  cm.teachSkill(23121004,30,30); // 앤시언트 스피릿
  cm.teachSkill(23120009,30,30); // 듀얼보우건 엑스퍼트
  cm.teachSkill(23120010,20,20); // 디펜스 브레이크
  cm.teachSkill(23120012,30,30); // 어드밴스드 파이널 어택
  cm.teachSkill(23121005,30,30); // 메이플 용사
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 814) {
  cm.teachSkill(30010110,1,1); // 데몬 점프 -- 0차 스킬
  cm.teachSkill(30010185,1,1); // 데모닉 블러드
  cm.teachSkill(30010111,1,1); // 데쓰 커스 -- 0차 스킬끝
  cm.teachSkill(31000004,10,10); // 데몬 슬래시 -- 1차 스킬 시작
  cm.teachSkill(31001000,15,15); // 데빌 사이더
  cm.teachSkill(31001001,20,20); // 데몬 부스터
  cm.teachSkill(31000002,10,10); // 다크 어질리티
  cm.teachSkill(31000003,10,10); // hp증가 -- 1차 스킬 끝
  cm.teachSkill(31100007,1,1); // 데몬 슬래시 1차 강화 -- 2차 스킬 시작
  cm.teachSkill(31101000,20,20); // 소울 이터
  cm.teachSkill(31101001,20,20); // 다크 쓰러스트
  cm.teachSkill(31101002,15,15); // 데몬 트레이스
  cm.teachSkill(31101003,20,20); // 다크 리벤지
  cm.teachSkill(31100004,20,20); // 웨폰 마스터리
  cm.teachSkill(31100006,20,20); // 아웃레이지
  cm.teachSkill(31100005,10,10); // 피지컬 트레이닝 -- 2차스킬 끝
  cm.teachSkill(31110010,1,1); // 데몬 슬래시 2차 강화 -- 3차스킬 시작
  cm.teachSkill(31111000,20,20); // 다크 저지먼트
  cm.teachSkill(31111001,20,20); // 데쓰 드로우
  cm.teachSkill(31111003,20,20); // 블러디 레이븐
  cm.teachSkill(31111005,20,20); // 데모닉 브레스
  cm.teachSkill(31111004,20,20); // 다크 인듀어
  cm.teachSkill(31110006,15,15); // 이블 토쳐
  cm.teachSkill(31110007,20,20); // 컨센트레이션 
  cm.teachSkill(31110008,15,15); // 포스 가드 
  cm.teachSkill(31110009,5,5); // 맥스 포스 -- 3차스킬 끝
  cm.teachSkill(31120011,1,1); // 데몬 슬래시 최종 강화 -- 4차스킬 시작
  cm.teachSkill(31121000,30,30); // 데몬 익스플로젼
  cm.teachSkill(31121001,30,30); // 데몬 임팩트
  cm.teachSkill(31121003,20,20); // 데빌 크라이
  cm.teachSkill(31121006,20,20); // 다크 바인드
  cm.teachSkill(31121005,30,30); // 메타모포시스
  cm.teachSkill(31121007,15,15); // 인피니티 포스
  cm.teachSkill(31121002,10,10); // 뱀피릭 터치
  cm.teachSkill(31121004,30,30); // 메이플 용사
  cm.teachSkill(31120008,30,30); // 어드밴스드 웨폰 마스터리
  cm.teachSkill(31120009,30,30); // 하드 스킨
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 815) {
  cm.teachSkill(109,1,1); // 수영의 달인 -- 0차 스킬
  cm.teachSkill(110,1,1); // 파이렛 블레스
  cm.teachSkill(111,1,1); // 수납의 달인 -- 0차스킬 끝
  cm.teachSkill(5011000,20,20); // 캐논 스플래셔 -- 1차 스킬 시작
  cm.teachSkill(5011002,15,15); // 기간택 백스탭
  cm.teachSkill(5011001,20,20); // 펀칭 캐논
  cm.teachSkill(5010003,10,10); // 빌드업 캐논 -- 1차 스킬 끝
  cm.teachSkill(5301000,20,20); // 슬러그 샷 -- 2차 스킬 시작
  cm.teachSkill(5301001,20,20); // 몽키 러쉬붐
  cm.teachSkill(5301002,20,20); // 캐논 부스터
  cm.teachSkill(5301003,20,20); // 몽키 매직
  cm.teachSkill(5300005,20,20); // 캐논 마스터리
  cm.teachSkill(5300004,15,15); // 크리티컬 파이어
  cm.teachSkill(5300008,10,10); // 파이렛 트레이닝 -- 2차스킬 끝
  cm.teachSkill(5311000,20,20); // 캐논 스파이크 -- 3차스킬 시작
  cm.teachSkill(5311001,20,20); // 몽키 파워붐
  cm.teachSkill(5311003,15,15); // 캐논 점프
  cm.teachSkill(5311002,20,20); // 몽키 웨이브
  cm.teachSkill(5311004,10,10); // 오크통 룰렛
  cm.teachSkill(5311005,20,20); // 럭키 다이스
  cm.teachSkill(5310006,15,15); // 라인포스 캐논
  cm.teachSkill(5310007,20,20); // 바이탈 익스트림
  cm.teachSkill(5310009,15,15); // 반격의 슈터 -- 3차스킬 끝
  cm.teachSkill(5321000,30,30); // 캐논 바주카 -- 4차스킬 시작
  cm.teachSkill(5321012,30,30); // 캐논 버스터
  cm.teachSkill(5321001,30,30); // 전함 노틸러스
  cm.teachSkill(5321010,30,30); // 파이렛 스피릿
  cm.teachSkill(5321003,15,15); // 마그네틱 앵커
  cm.teachSkill(5321004,15,15); // 서포트 몽키 트윈스
  cm.teachSkill(5321005,30,30); // 메이플 용사
  cm.teachSkill(5320009,30,30); // 오버버닝 캐논
  cm.teachSkill(5320008,30,30); // 하이퍼 몽키 스펠
  cm.teachSkill(5320007,5,5); // 더블 럭키 다이스
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 816) {
  cm.teachSkill(20030204,1,1); // 데들리 인스팅트 -- 0차 스킬
  cm.teachSkill(20031205,1,1); // 팬텀 슈라우드
  cm.teachSkill(20030206,1,1); // 하이 덱스터러티 
  cm.teachSkill(20031207,1,1); // 스틸 스킬 
  cm.teachSkill(20031208,1,1); // 스킬 매니지먼트
  cm.teachSkill(20031209,1,2); // 저지먼트 -- 0차스킬 끝
  cm.teachSkill(24001000,20,20); // 더블 피어싱 -- 1차 스킬 시작
  cm.teachSkill(24001001,20,20); // 탤런트 오브 팬텀시프 Ⅰ
  cm.teachSkill(24001002,15,15); // 스위프트 팬텀
  cm.teachSkill(24000003,10,10); // 퀵 이베이젼 -- 1차스킬 끝
  cm.teachSkill(24101000,20,20); // 콜 오브 페이트 -- 2차스킬 시작
  cm.teachSkill(24101001,20,20); // 탤런트 오브 팬텀시프 Ⅱ
  cm.teachSkill(24101002,20,20); // 브리즈 카르트
  cm.teachSkill(24100003,10,10); // 블랑 카르트 
  cm.teachSkill(24100004,20,20); // 케인 마스터리
  cm.teachSkill(24101005,20,20); // 케인 부스터
  cm.teachSkill(24100006,10,10); // 럭 모노폴리 -- 2차스킬 끝
  cm.teachSkill(24111000,20,20); // 코트 오브 암즈
  cm.teachSkill(24111001,20,20); // 탤런트 오브 팬텀시프 Ⅲ
  cm.teachSkill(24111002,20,20); // 럭 오브 팬텀시프
  cm.teachSkill(24111003,20,20); // 미스포츈 프로텍션
  cm.teachSkill(24110004,20,20); // 플래시 앤 플리
  cm.teachSkill(24111005,20,20); // 문라이트
  cm.teachSkill(24110007,20,20); // 어큐트 센스 
  cm.teachSkill(24111008,20,20); // 팬텀 차지(스킬팅김 방지용)
  cm.teachSkill(24121000,30,30); // 얼티밋 드라이브 -- 4차스킬 시작
  cm.teachSkill(24121001,30,30); // 탤런트 오브 팬텀시프 Ⅳ
  cm.teachSkill(24120002,20,20); // 느와르 카르트
  cm.teachSkill(24121003,20,20); // 트와일라이트
  cm.teachSkill(24121004,30,30); // 프레이 오브 아리아
  cm.teachSkill(24121005,30,30); // 템페스트 오브 카드
  cm.teachSkill(24120006,30,30); // 케인 엑스퍼트
  cm.teachSkill(24121007,20,20); // 소울 스틸
  cm.teachSkill(24121008,30,30); // 메이플 용사
  cm.teachSkill(24121010,20,20); // 트와일라이트(팅김방지용)
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 817) {
  cm.teachSkill(21000002,20,20); // 더블 스윙 -- 1차 스킬 시작
  cm.teachSkill(21000000,10,10); // 콤보 어빌리티
  cm.teachSkill(21001001,5,5); // 컴뱃 스탭
  cm.teachSkill(21001003,20,20); // 폴암 부스터
  cm.teachSkill(21000004,10,10); // 콤보 스매쉬 -- 1차 스킬 끝
  cm.teachSkill(21100001,20,20); // 트리플 스윙 -- 2차 스킬 시작
  cm.teachSkill(21100000,20,20); // 폴암 마스터리
  cm.teachSkill(21100002,10,10); // 파이널 차지 
  cm.teachSkill(21101003,10,10); // 바디 프레셔
  cm.teachSkill(21100005,10,10); // 콤보 드레인
  cm.teachSkill(21101006,10,10); // 스노우 차지
  cm.teachSkill(21100007,20,20); // 콤보 펜릴
  cm.teachSkill(21100008,10,10); // 피지컬 트레이닝
  cm.teachSkill(21100010,20,20); // 파이널 어택 -- 2차 스킬 끝
  cm.teachSkill(21110002,20,20); // 풀 스윙 -- 3차 스킬 시작
  cm.teachSkill(21110000,20,20); // 콤보 크리티컬
  cm.teachSkill(21110003,20,20); // 파이널 토스
  cm.teachSkill(21110006,20,20); // 롤링 스핀 
  cm.teachSkill(21111001,20,20); // 마이트
  cm.teachSkill(21111009,20,20); // 콤보 리차지
  cm.teachSkill(21110010,10,10); // 클리빙 어택
  cm.teachSkill(21110011,20,20); // 콤보 저지먼트
  cm.teachSkill(21111012,10,10); // 블레싱 마하 -- 3차 스킬 끝
  cm.teachSkill(21121000,30,30); // 메이플 용사
  cm.teachSkill(21120002,30,30); // 오버 스윙
  cm.teachSkill(21120001,20,20); // 하이 마스터리
  cm.teachSkill(21120005,30,30); // 파이널 블로우
  cm.teachSkill(21121003,20,20); // 프리즈 스탠딩
  cm.teachSkill(21120004,20,20); // 하이 디펜스
  cm.teachSkill(21120006,30,30); // 콤보 템페스트
  cm.teachSkill(21120007,30,30); // 콤보 배리어
  cm.teachSkill(21120011,10,10); // 스위프트 무브
  cm.teachSkill(21120012,30,30); // 어드밴스드 파이널 어택
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 818) {
  cm.teachSkill(22000000,20,20); // 드래곤 소울 -- 1차 스킬 시작
  cm.teachSkill(22001001,20,20); // 매직 미사일 -- 1차 스킬 끝
  cm.teachSkill(22101000,20,20); // 파이어 서클 -- 2차 스킬 시작
  cm.teachSkill(22101001,20,20); // 텔레포트 -- 2차 스킬 끝
  cm.teachSkill(22111000,20,20); // 라이트닝 볼트 -- 3차 스킬 시작
  cm.teachSkill(22111001,20,20); // 매직 가드 -- 3차 스킬 끝
  cm.teachSkill(22121000,20,20); // 아이스 브레스 -- 4차 스킬 시작
  cm.teachSkill(22120001,10,10); // 하이 위즈덤 
  cm.teachSkill(22120002,10,10); // 스펠 마스터리 -- 4차 스킬 끝
  cm.teachSkill(22131000,20,20); // 매직 플레어 -- 5차 스킬 시작
  cm.teachSkill(22131001,10,10); // 매직 실드
  cm.teachSkill(22131002,10,10); // 엘리멘탈 리셋 -- 5차 스킬 끝
  cm.teachSkill(22140000,15,15); // 크리티컬 매직 -- 6차 스킬 시작
  cm.teachSkill(22141001,20,20); // 드래곤 쓰러스트 
  cm.teachSkill(22141002,20,20); // 매직 부스터
  cm.teachSkill(22141004,10,10); // 드래곤 블링크 -- 6차 스킬 끝
  cm.teachSkill(22150000,15,15); // 매직 엠플리피케이션 -- 7차 스킬 시작
  cm.teachSkill(22151001,20,20); // 브레스
  cm.teachSkill(22151002,10,10); // 킬링 윙
  cm.teachSkill(22151003,10,10); // 매직 레지스턴스 -- 7차 스킬 끝
  cm.teachSkill(22160000,5,5); // 드래곤 퓨리 -- 8차 스킬 시작
  cm.teachSkill(22161001,20,20); // 어스퀘이크
  cm.teachSkill(22161002,10,10); // 고스트 레터링
  cm.teachSkill(22161003,5,5); // 리커버리 오로라 -- 8차 스킬 끝
  cm.teachSkill(22171000,30,30); // 메이플 용사 -- 9차 스킬 시작
  cm.teachSkill(22171002,30,30); // 일루전 -- 9차 스킬 끝
  cm.teachSkill(22181000,25,25); // 오닉스의 축복 -- 10차 스킬 시작
  cm.teachSkill(22181001,30,30); // 블레이즈 
  cm.teachSkill(22181004,20,20); // 오닉스의 의지 -- 10차 스킬 끝
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();

} else if (selection == 819) {
  cm.teachSkill(50001214,1,1); // 빛의수호 -- 0차스킬
  cm.teachSkill(51000001,15,15); // 소울 실드 -- 1차 스킬 시작
  cm.teachSkill(51001004,20,20); // 소울 블레이드
  cm.teachSkill(51001003,10,10); // 소울 점프
  cm.teachSkill(51000002,10,10); // 소울 어질리티
  cm.teachSkill(51000000,10,10); // HP 증가 -- 1차 스킬 끝
  cm.teachSkill(51100001,20,20); // 소드 마스터리 -- 2차 스킬 시작 
  cm.teachSkill(51100002,20,20); // 파이널 어택
  cm.teachSkill(51101003,20,20); // 소드 부스터
  cm.teachSkill(51101004,20,20); // 분노 
  cm.teachSkill(51101005,20,20); // 소울 드라이버
  cm.teachSkill(51101006,20,20); // 샤이닝 체이스 
  cm.teachSkill(51100000,10,10); // 피지컬 트레이닝 -- 2차 스킬 끝 
  cm.teachSkill(51111006,20,20); // 소울 슬래시 -- 3차 스킬 시작
  cm.teachSkill(51111007,20,20); // 샤이닝 버스터
  cm.teachSkill(51111003,10,10); // 샤이닝 차지
  cm.teachSkill(51111004,20,20); // 소울 인듀어 
  cm.teachSkill(51111005,20,20); // 매직 크래쉬
  cm.teachSkill(51110001,20,20); // 인텐션
  cm.teachSkill(51110002,20,20); // 소울 어택 
  cm.teachSkill(51110000,30,30); // 셀프 리커버리 -- 3차 스킬 끝
  cm.teachSkill(51120003,30,30); // 어드밴스드 소울 실드 -- 4차 스킬 시작
  cm.teachSkill(51120001,30,30); // 어드밴스드 소드 마스터리
  cm.teachSkill(51120002,30,30); // 어드밴스드 파이널 어택
  cm.teachSkill(51121007,30,30); // 소울 어썰트 
  cm.teachSkill(51121008,30,30); // 샤이닝 블라스트
  cm.teachSkill(51121006,30,30); // 소울 레이지
  cm.teachSkill(51120000,10,10); // 컴뱃 마스터리
  cm.teachSkill(51121004,30,30); // 스탠스
  cm.teachSkill(51121005,30,30); // 메이플 용사
  cm.sendOk ("스킬마스터가 완료되었습니다.");
  dispose();


   }
 }
} 
