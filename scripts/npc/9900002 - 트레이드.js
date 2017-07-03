importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var first = new Array("불쌍한","남장한","여장한","뚱뚱한","흑인","날씬한","가벼운","멍청한", "똑똑한", "착한", "멍청한","미련한","어리석은","먹을것을 좋아하는","남자를 좋아하는","여자를 좋아하는","여자를 밝히는","똥을 먹는","냄새나는","사랑스러운","시크한","진격의","잘생긴","못생긴","섹시한","울퉁불퉁한","하찮은","구타당하는","도발하는","우락부락한","알바하는","요리하는","허접한","도박하는","전자발찌를 찬","대리운전하는","귀여운","역겨운","귀여운척 하는", "장미무늬가 세겨진","남자를 좋아하는","돌로 만든","백마탄","나뭇잎마을의","앙증맞은","꽃을든","원탁의","전설의","성전환수술을 한","일베를 하는","","미라클온라인의","빠삐코를 싫어하는","나는","","성실한","유명한","서울사는","경기도사는","내꿈은","영양소가 풍부한","건장한","음탕한","음란한","성실한","오유를 하는","디씨를 하는","싸가지없는","도도한","쿨한","왕의","내 여자친구는","내 남자친구는","치명적 매력의","전장의", "외양간의","대장","말초신경의","대뇌의","멘탈이 강한","멘탈이 약한","동물원의","뻥쟁이","단단한","기분좋은","착한","자기중심적인","자폐가 있는","강인한","섹시한","괴도","빛의","어둠의","미국사는","전장의","신의","심장이 없는","엄마친구의");
var second = new Array("겨드랑이털","사람","짐승","미생물","단세포","소방관","경찰관","국회의원","돼지","게이","트랜스젠더","강아지","앵무새","의사","변호사","판사","가수","김기사","게이바 주인","아프리카BJ","명탐정","거인","노예","엉덩이","회사원","요리킹조리킹","장미칼","롱스톤","AV배우","라운드걸","토마토","근육몬","아구몬","마왕","여동생","남동생","아빠","엄마","폐인","강간범","고영욱","로리콘","오타쿠","민물장어","트롤","선생님","왕자님","공주님","스님","파워레인져","오크","호카게","의자왕","대통령","기사","찌니", "은윤", "백향","미녀","미남","오빠","멍청도인","독수리","이명박","클라라","화성인","방송인","네이트판녀","파워블로거","시어머니","코코몽","토박이","빌리 헤링턴","광수","모히또","언어 9등급","구미호","수리 9등급","외국어 9등급","전교 꼴찌","전교 1등","클라라 남편","여왕","김밥","돈가스","자장면","떡볶이","사기꾼","사자","코끼리","아르마딜로","뿡뿡이","아사다마오","아오이소라","유재석","럭키가이","사자엉덩이","팥빙수용 떡","미숫가루","아메리카노","카푸치노","빼빼로","미미짱","사쿠라짱","태양","부녀자","사생팬","악플러","중2병","쿠쿠다스","초코파이","클라라","가정주부","삼촌팬","이모팬","초등학생","쇼타콘","범죄자","사형수","형수","고모","피카츄","자폐아","박시온","부추","에밀레종","광복투사","신","괴물","8등신","염라대왕","켄타로우스","자쿰","모험가","메르세데스","팬텀","아란","루미너스","에반","레지스탕스","카이저","엔젤릭버스터","제로","헤카톤","시그너스","제논","과외선생님","도지사","PD","게이","게이","게이","기린");


function start() {
	if(cm.getPlayer().getGMLevel() > 0){
		///cm.getPlayer().send(MainPacketCreator.sendHint("5월17일부터 22일까지 서버호스팅 기금 마련을 위해 후원2배 이벤트가 진행된다구?", 400, 20));
	}

	var str = "";
	cm.sendYesNo("당신의 장래희망을 보고싶으세요?\r\n#e현재 장래희망 : #b"+selectHope()+"#n\r\n#Cgray#장래희망을 확인하려면 1,000,000메소가 필요합니다.");
}

function getRand(len){
	return Math.floor(Math.random()*len);
}

function shuffle() {
	return first[getRand(first.length)]+" "+second[getRand(second.length)];
}

function updateHope(str){
	var insert = MYSQL.getConnection().prepareStatement("INSERT INTO futurehope(cid,hope) VALUES(?,?)");
	insert.setInt(1,cm.getPlayer().getId());
	insert.setString(2,str);
	deleteHope(cm.getPlayer().getId());
	insert.executeUpdate();
}

function selectHope(){
	var sq = MYSQL.getConnection().prepareStatement("SELECT * FROM futurehope WHERE cid = ?");
	sq.setInt(1,cm.getPlayer().getId());
	var eq = sq.executeQuery();
	var string = new StringBuilder();
	if(eq.next()){
	string.append("[").append(eq.getString("hope")).append("]\r\n");
	}
	return string.toString();
}

function deleteHope(cid) {
	var dq = MYSQL.getConnection().prepareStatement("DELETE FROM futurehope where cid = ?");
	dq.setInt(1,cid);
	dq.executeUpdate();
}

var status=-1;

function action(m,t,s) {
	m==1?status++:cm.dispose();
	if(status==0){
	var text = shuffle();
	cm.getPlayer().send(MainPacketCreator.sendHint("장래희망 : "+text,200,20))||cm.getMeso()>1000000?cm.sendOk("당신의 장래희망은 #b"+text+"#k입니다.")||cm.gainMeso(-1000000)||updateHope(text)||WorldBroadcasting.broadcast(UIPacket.showInfo("["+cm.getPlayer().getName()+"]님의 장래희망은 "+text+"입니다.")):cm.sendOk("1,000,000메소가 부족합니다.")||cm.dispose();
	cm.dispose();
	}else{
	cm.dispose();
	}
}