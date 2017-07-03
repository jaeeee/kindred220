importPackage(Packages.constants);

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
cm.sendSimple("저는 스킬을 마스터 해주는 #b[빅 헤드워드]#k입니다."+"\r\n#k#L1#[#b스킬 학습#k] 스킬마스터"+"#k\r\n#L3#[#b스킬 학습#k] 메이플 용사"+"\r\n#k#L2#[#b스킬 학습#k] 장인의 혼\r\n\r\n"+"#k");

} else if (selection == 1) {
     cm.getPlayer().maxSkillMaster();
	if (cm.getJob() == 3610 || cm.getJob() == 3612 || cm.getJob() == 3611 || cm.getJob() == 3600){
	cm.teachSkill(30020232, 1, 0); //서플러스 서플라이
        cm.teachSkill(30020233, 1, 0); //하이브리드 로직
        cm.teachSkill(30020234, 1, 0); //멀티래터럴
        cm.teachSkill(30021235, 1, 0); //프로멧사 어썰트
        cm.teachSkill(30020236, 1, 0); //멀티 모드 링커
        cm.teachSkill(30021237, 1, 0); //에비에이션 리버티
        cm.teachSkill(30020240, 1, 0); //카모플라쥬
        cm.teachSkill(30021236, 1, 0); //멀티 모드 링커
	}
	if (cm.getJob() == 434){
	cm.teachSkill(4341009,30,30);
	cm.teachSkill(4341002,30,30);
	cm.teachSkill(4311003,0,0);
	}
	if (cm.getJob() == 431)	cm.teachSkill(4311003,0,0);
	if (cm.getJob() == 112){
	cm.teachSkill(1120003,30,30);
	}
	if (cm.getJob() == 122)	cm.teachSkill(1220010,1,1);
	
	if (cm.getJob() == 1311 || 1312){
	cm.teachSkill(13111002,30,30);
	}
	if (cm.getJob() == 2511 || cm.getJob() == 2512){
	cm.teachSkill(20050285,1,1);
	cm.teachSkill(25001002,20,20);
	cm.teachSkill(25001204,20,20);
	cm.teachSkill(25000105,20,20);
	cm.teachSkill(25101000,20,20);
	cm.teachSkill(25101003,10,10);
	cm.teachSkill(25101004,10,10);
	cm.teachSkill(25101205,10,10);
	cm.teachSkill(25100009,10,10);
	cm.teachSkill(25100108,10,10);
	cm.teachSkill(25100106,10,10);
	cm.teachSkill(25100107,10,10);
	cm.teachSkill(25110000,20,20);
	cm.teachSkill(25111004,10,10);
        cm.teachSkill(25111209,10,10);
	}
	if (cm.getJob() == 2217){
	cm.teachSkill(22171003,30,30);
	}
	if (cm.getJob() == 2112){
	cm.teachSkill(21120005,30,30);
	cm.teachSkill(21120004,30,30);
	cm.teachSkill(21120006,30,30);
	cm.teachSkill(21120007,30,30);
	}
	if (cm.getJob() == 232){
	cm.teachSkill(2321007,30,30);
	}
	if (cm.getJob() == 1512){ 10001253
	cm.teachSkill(15121000,30,30);
	}
	if (cm.getJob() == 1312){
	cm.teachSkill(13121000,30,30);
	}
	if (cm.getJob() == 1312 || cm.getJob() == 1512){
	cm.teachSkill(10001253,1,1);

	}
	if (cm.getJob() == 3100 || cm.getJob() == 3110 || cm.getJob() == 3111 || cm.getJob() == 3112){
	cm.teachSkill(30010185,1,1);
	}
	if (cm.getJob() == 6500 || cm.getJob() == 6510){
	cm.teachSkill(60011216, 1, 1); //석세서
        cm.teachSkill(60011218, 1, 1); //매지컬 리프트
        cm.teachSkill(60011219, 1, 1); //소울 컨트랙트
        cm.teachSkill(60011220, 1, 1); //데이드림
        cm.teachSkill(60011221, 1, 1); //코디네이트
        cm.teachSkill(60011222, 1, 1); //드레스 업
	}
	if (cm.getJob() == 6100 || cm.getJob() == 6110) {
	    cm.teachSkill(60001218, 1, 1); //바티컬커넥트
            cm.teachSkill((60001219), 1, 1); //아이언 윌
            cm.teachSkill(60000219, 1, 1); //커맨드
            cm.teachSkill(60000220, 1, 1); //트랜스피규레이션
            cm.teachSkill(60000221, 1, 1); //트랜스피규레이션
            cm.teachSkill(60000222, 1, 1); //트랜스피규레이션
            cm.teachSkill(60000225, 1, 1); //커맨드
	}if (cm.getJob() == 3120 || cm.getJob() == 3121) {
            cm.teachSkill(30010230,  1, 1); //익시드
            cm.teachSkill(30010231, 1, 1); //하이 이피션시
            cm.teachSkill(30010241, 1, 1); //와일드 레이지
            cm.teachSkill(30010242, 1, 1); //블러드 컨트랙트
            cm.teachSkill(30010110, 1, 1); //데몬 점프
            cm.teachSkill(30010185, 1, 1); //데모닉 블러드	
	}if (cm.getJob() == 3100 || cm.getJob() == 3101){            
	    cm.teachSkill(30010241, 1, 1); //와일드 레이지
            cm.teachSkill(30010110, 1, 1); //데몬 점프
            cm.teachSkill(30010185, 1, 1); //데모닉 블러드
	}if (cm.getJob() == 2700 || cm.getJob() == 2710) {
            cm.teachSkill(20040216, 1, 1);//선파이어
            cm.teachSkill(20040217, 1, 1); //이클립스
            cm.teachSkill(20040218, 1, 1); //퍼미에이트
            cm.teachSkill(20040221, 1, 1); //파워오브라이트
            cm.teachSkill(20041222, 1, 1); //라이트 블링크
	}if (cm.getJob() == 2300 || cm.getJob() == 2002) {
            cm.teachSkill((20020109), 1, 1); //엘프의 회복
            cm.teachSkill((20021110), 1, 1); //엘프의 축복
            cm.teachSkill((20020111), 1, 1); //스타일리쉬 무브
            cm.teachSkill((20020112), 1, 1); //왕의 자격
	}if (cm.getJob() == 2003 || cm.getJob() == 2400){
             cm.teachSkill((20031203),1,1); //리턴 오브 팬텀
             cm.teachSkill((20030204),1,1); //데들리 인스팅트
             cm.teachSkill((20031205),1,1); //팬텀 슈라우드
             cm.teachSkill((20030206),1,1); //하이 덱스터러티
             cm.teachSkill((20031207),1,1); //스틸 스킬
             cm.teachSkill((20031208),1,1); //스킬 매니지먼트
             cm.teachSkill((20031209),1,1); //저지먼트
	}if (cm.getJob() == 5100){
	     cm.teachSkill(50001214,1,1);
	}
        if (cm.getJob() == 10112) {
if (cm.getJob() == 10112 && cm.getLevel >=170) {
cm.teachSkill (100001283, 1, 1);
}
if (cm.getJob() == 10112 && cm.getLevel >=200) {
cm.teachSkill (100001005, 1, 1);
}
if (cm.getJob() == 10112 && cm.getLevel >=120) {
cm.teachSkill (100001274, 1, 1);
}
if (cm.getJob() == 10112 && cm.getLevel >=140) {
cm.teachSkill (100001272, 1, 1);
}
if (cm.getJob() == 10112 && cm.getLevel >=110) {
cm.teachSkill (100001261, 1, 1);
}
cm.teachSkill (101001100, 10, 10);
cm.teachSkill (101000100, 10, 10);
cm.teachSkill (101000101, 10, 10);
cm.teachSkill (101000102, 10, 10);
cm.teachSkill (101000103, 10, 10);
cm.teachSkill (101001200, 10, 10);
cm.teachSkill (101000200, 10, 10);
cm.teachSkill (101000201, 10, 10);
cm.teachSkill (101000202, 10, 10);
cm.teachSkill (101000203, 10, 10);
cm.teachSkill (101101100, 10, 10);
cm.teachSkill (101100100, 10, 10);
cm.teachSkill (101100101, 10, 10);
cm.teachSkill (101100102, 10, 10);
cm.teachSkill (101101200, 10, 10);
cm.teachSkill (101100200, 10, 10);
cm.teachSkill (101100201, 10, 10);
cm.teachSkill (101100202, 10, 10);
cm.teachSkill (101100203, 10, 10);
cm.teachSkill (101111100, 10, 10);
cm.teachSkill (101110101, 10, 10);
cm.teachSkill (101110102, 10, 10);
cm.teachSkill (101110103, 10, 10);
cm.teachSkill (101110104, 10, 10);
cm.teachSkill (101111200, 10, 10);
cm.teachSkill (101110200, 10, 10);
cm.teachSkill (101110201, 10, 10);
cm.teachSkill (101110202, 10, 10);
cm.teachSkill (101110203, 10, 10);
cm.teachSkill (101110204, 10, 10);
cm.teachSkill (101110205, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101120100, 10, 10);
cm.teachSkill (101120101, 10, 10);
cm.teachSkill (101120102, 10, 10);
cm.teachSkill (101120103, 10, 10);
cm.teachSkill (101120104, 10, 10);
cm.teachSkill (101120105, 10, 10);
cm.teachSkill (101120106, 10, 10);
cm.teachSkill (101120109, 10, 10);
cm.teachSkill (101120110, 10, 10);
cm.teachSkill (101121200, 10, 10);
cm.teachSkill (101120200, 10, 10);
cm.teachSkill (101120201, 10, 10);
cm.teachSkill (101120202, 10, 10);
cm.teachSkill (101120203, 10, 10);
cm.teachSkill (101120204, 10, 10);
cm.teachSkill (101120205, 10, 10);
cm.teachSkill (101120206, 10, 10);
cm.teachSkill (101120207, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (101121100, 10, 10);
cm.teachSkill (100001263, 1, 1);
cm.teachSkill (100001264, 1, 1);
cm.teachSkill (100001265, 1, 1);
cm.teachSkill (100001266, 1, 1);
}
	if (cm.getJob() == 1300 || cm.getJob() == 1500|| cm.getJob() == 1510|| cm.getJob() == 1310|| cm.getJob() == 1311|| cm.getJob() == 1511|| cm.getJob() == 1312|| cm.getJob() == 1512){
	     cm.teachSkill(10001254,1,1);

	     cm.teachSkill(10001253,1,1);
	     cm.teachSkill(10001254,1,1);

	     cm.teachSkill(10001244,1,1);
	     cm.teachSkill(10000246,1,1);
	     cm.teachSkill(10000247,1,1);
	     cm.teachSkill(10000248,1,1);
	     cm.teachSkill(10000249,1,1);

	     cm.teachSkill(10000252,1,1);
	     cm.teachSkill(10000253,1,1);
	     cm.teachSkill(10000250,1,1);
	}
     cm.sendOk("모든 스킬을 마스터 했어요!");

     cm.dispose();
   } else if (selection == 4) {
		cm.dispose();
        cm.openNpc (1012122);

   } else if (selection == 9) {
cm.teachSkill (101001100, 0, 0);
cm.teachSkill (101000100, 0, 0);
cm.teachSkill (101000101, 0, 0);
cm.teachSkill (101000102, 0, 0);
cm.teachSkill (101000103, 0, 0);
cm.teachSkill (101001200, 0, 0);
cm.teachSkill (101000200, 0, 0);
cm.teachSkill (101000201, 0, 0);
cm.teachSkill (101000202, 0, 0);
cm.teachSkill (101000203, 0, 0);
cm.teachSkill (101101100, 0, 0);
cm.teachSkill (101100100, 0, 0);
cm.teachSkill (101100101, 0, 0);
cm.teachSkill (101100102, 0, 0);
cm.teachSkill (101101200, 0, 0);
cm.teachSkill (101100200, 0, 0);
cm.teachSkill (101100201, 0, 0);
cm.teachSkill (101100202, 0, 0);
cm.teachSkill (101100203, 0, 0);
cm.teachSkill (101111100, 0, 0);
cm.teachSkill (101110101, 0, 0);
cm.teachSkill (101110102, 0, 0);
cm.teachSkill (101110103, 0, 0);
cm.teachSkill (101110104, 0, 0);
cm.teachSkill (101111200, 0, 0);
cm.teachSkill (101110200, 0, 0);
cm.teachSkill (101110201, 0, 0);
cm.teachSkill (101110202, 0, 0);
cm.teachSkill (101110203, 0, 0);
cm.teachSkill (101110204, 0, 0);
cm.teachSkill (101110205, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101120100, 0, 0);
cm.teachSkill (101120101, 0, 0);
cm.teachSkill (101120102, 0, 0);
cm.teachSkill (101120103, 0, 0);
cm.teachSkill (101120104, 0, 0);
cm.teachSkill (101120105, 0, 0);
cm.teachSkill (101120106, 0, 0);
cm.teachSkill (101120109, 0, 0);
cm.teachSkill (101120110, 0, 0);
cm.teachSkill (101121200, 0, 0);
cm.teachSkill (101120200, 0, 0);
cm.teachSkill (101120201, 0, 0);
cm.teachSkill (101120202, 0, 0);
cm.teachSkill (101120203, 0, 0);
cm.teachSkill (101120204, 0, 0);
cm.teachSkill (101120205, 0, 0);
cm.teachSkill (101120206, 0, 0);
cm.teachSkill (101120207, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (101121100, 0, 0);
cm.teachSkill (100001261, 0, 0);
cm.teachSkill (100001272, 0, 0);
cm.teachSkill (100001274, 0, 0);
cm.teachSkill (100001005, 0, 0);
cm.teachSkill (100001283, 0, 0);
cm.teachSkill (100001263, 0, 0);
cm.teachSkill (100001264, 0, 0);
cm.teachSkill (100001265, 0, 0);
cm.teachSkill (100001266, 0, 0);

cm.sendOk("제로재접팅방지를완료하였습니다.협조감사합니다");
cm.dispose();
   } else if (selection == 2) {
	cm.teachSkill(1003,1,1); //장인의 혼
	cm.teachSkill(10001003,1,1); //''
	cm.teachSkill(20001003,1,1); //''
	cm.teachSkill(20011003,1,1);
	cm.teachSkill(30001003,1,1);
	cm.teachSkill(20021003,1,1);
	cm.teachSkill(20031003,1,1);
	cm.teachSkill(20041003,1,1);
	cm.teachSkill(30011003,1,1);
	cm.teachSkill(30021003,1,1);
	cm.teachSkill(60001003,1,1);
	cm.teachSkill(30021003,1,1);
	cm.teachSkill(60011003,1,1);
	cm.teachSkill(50001003,1,1);//여까지 다 장인의혼

	cm.sendOk("장인의 혼을 마스터 했어요!");
	cm.dispose();
   } else if (selection == 3) {
	cm.teachSkill(1121000,30,30); //메용
	cm.teachSkill(1221000,30,30); //메용
	cm.teachSkill(1321000,30,30); //메용
	cm.teachSkill(2121000,30,30); //메용
	cm.teachSkill(2221000,30,30); //메용
	cm.teachSkill(2321000,30,30); //메용
	cm.teachSkill(3121000,30,30); //메용
	cm.teachSkill(3221000,30,30); //메용
	cm.teachSkill(4121000,30,30); //메용
	cm.teachSkill(4221000,30,30); //메용
	cm.teachSkill(4341000,30,30); //메용
	cm.teachSkill(5121000,30,30); //메용
	cm.teachSkill(5221000,30,30); //메용
	cm.teachSkill(21121000,30,30); //메용
	cm.teachSkill(22171000,30,30); //메용
	cm.teachSkill(32121007,30,30); //메용
	cm.teachSkill(33121007,30,30); //메용
	cm.teachSkill(35121007,30,30); //메용
	cm.teachSkill(5321005,30,30); //메용
	cm.teachSkill(23121005,30,30); //메용
	cm.teachSkill(31121004,30,30); //메용
	cm.teachSkill(24121008,30,30); //메용
	cm.teachSkill(51121005,30,30); //메용
	cm.teachSkill(31221008,30,30); //메용
	cm.teachSkill(36121008,30,30); //메용
	cm.sendOk("메이플 용사를 마스터 했어요!");

	cm.dispose();
} else if (selection == 5){
	if(cm.getJob()%100 == 12){
	cm.changeJob(cm.getJob()-12);
	cm.sendOk("1차로 변경되었습니다. 다시 스킬마스터를 하고 전직하세요.");
	cm.fakeRelog();
	cm.updateChar();
	cm.dispose();
	}else{
	cm.sendOk("4차직업이 아닙니다.");
	cm.dispose();
	}
  }else if (selection == 6){
	if (cm.getJob() == 2218){
	for (var i=cm.getJob()*10000+30;i < cm.getJob()*10000+52;i++){
	cm.teachSkill(i,0,0);
	}
	}else{
	for (var i=cm.getJob()*10000+30;i < cm.getJob()*10000+52;i++){
	cm.teachSkill(i,0,0);
	}	
	}
	cm.sendOk("하이퍼 패시브가 삭제되었습니다.");
	cm.dispose();
  }
 }
} 
