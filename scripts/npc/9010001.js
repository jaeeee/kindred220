/*

Made by 가군
무단수정자제해주시길

*/
function start() {
    var tmp_str = "가군님이 운영하는 천외천월드입니다. 여러분을 환영합니다!\r\n각종 버프를 받고 싶으신가요? 마족 버프는 3개필요합니다 다받으세요\r\n\r\n#r%주의 : 마족 버프는 각 버프에 해당하는 마족 펫이 필요합니다";
    tmp_str += "#b\r\n#L0#마족버프받기1(빨강이)#l";
    tmp_str += "\r\n#L1#마족버프받기2(파랭이)#l";
    tmp_str += "\r\n#L2#마족버프받기3(노랭이)#l";
    tmp_str += "\r\n#L7##e#r[필수]#n#b몬스터 라이딩 스킬 배우기#l";
    cm.sendSimple (tmp_str);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
         if (cm.haveItem(5000228, 1)) {
      		cm.teachSkill(80000007,1,1);
        	cm.sendOk("마족 펫 버프가 정상적으로 발동되었습니다. 이용해주셔서 정말 감사합니다~~");
       		cm.playerMessage(5, "마족 펫의 버프가 정상적으로 시전되었습니다.");
        	cm.dispose();
   	} else {
        	cm.sendOk("해당하는 마족 펫을 보유하지 않았습니다. 스킬을 익히기위해 해당하는 마족 펫이 있는지 먼저 확인 해주세요~");
        	cm.dispose();
	}	
	  } else if (selection == 1) {
         if(cm.haveItem(5000229, 1)) {
      		cm.teachSkill(80000008,1,1);
       		cm.sendOk("마족 펫 버프가 정상적으로 발동되었습니다. 이용해주셔서 정말 감사합니다~~");
      		cm.playerMessage(5, "마족 펫의 버프가 정상적으로 시전되었습니다.");
       		cm.dispose();
  	 } else {
        	cm.sendOk("해당하는 마족 펫을 보유하지 않았습니다. 스킬을 익히기위해 해당하는 마족 펫이 있는지 먼저 확인 해주세요~");
        	cm.dispose();
	}
	  } else if (selection == 2) {
         if (cm.haveItem(5000230, 1)) { 
      		cm.teachSkill(80000009,1,1);
       		cm.sendOk("마족 펫 버프가 정상적으로 발동되었습니다. 이용해주셔서 정말 감사합니다~~");
        	cm.playerMessage(5, "마족 펫의 버프가 정상적으로 시전되었습니다.");
        	cm.dispose();
  	} else {
        	cm.sendOk("해당하는 마족 펫을 보유하지 않았습니다. 스킬을 익히기위해 해당하는 마족 펫이 있는지 먼저 확인 해주세요~");
        	cm.dispose();
	}
	  } else if (selection == 3) {
         if (cm.getMeso() >= 1500000000) { 
      		cm.gainMeso(-1500000000);
      		cm.teachSkill(8005,1,1);
      		cm.teachSkill(10008005,1,1);
      		cm.teachSkill(20008005,1,1);
      		cm.teachSkill(20018005,1,1);
      		cm.teachSkill(20028005,1,1);
      		cm.teachSkill(20038005,1,1);
      		cm.teachSkill(30008005,1,1);
      		cm.teachSkill(30018005,1,1);
      		cm.teachSkill(50008005,1,1);
        	cm.sendOk("쓸만한 어드벤스드 블레스 스킬을 익혔습니다. 이용해주셔서 정말 감사합니다~~");
      	   	cm.playerMessage(5, "<쓸만한 어드밴스드 블레스> 스킬이 사용 가능하게 되었습니다.");
       		cm.dispose();
 	 } else {
        	cm.sendOk("메소가 부족합니다. 스킬을 익히기에 충분한 메소가 있는지 먼저 확인 해주세요~");
        	cm.dispose();
	}
	  } else if (selection == 4) {
         if (cm.getMeso() >= 1000000000) {
      		cm.gainMeso(-1000000000); 
      		cm.teachSkill(8004,1,1);
      		cm.teachSkill(10008004,1,1);
      		cm.teachSkill(20008004,1,1);
      		cm.teachSkill(20018004,1,1);
      		cm.teachSkill(20028004,1,1);
      		cm.teachSkill(20038004,1,1);
      		cm.teachSkill(30008004,1,1);
      		cm.teachSkill(30018004,1,1);
      		cm.teachSkill(50008004,1,1);
        	cm.sendOk("쓸만한 컴벳 오더스 스킬을 익혔습니다. 이용해주셔서 정말 감사합니다~~");
        	cm.playerMessage(5, "<쓸만한 컴벳 오더스> 스킬이 사용 가능하게 되었습니다.");
        	cm.dispose();
  	} else {
      	 	cm.sendOk("메소가 부족합니다. 스킬을 익히기에 충분한 메소가 있는지 먼저 확인 해주세요~");
       		cm.dispose();
	}
	  } else if (selection == 5) {
         if (cm.getMeso() >= 500000000) { 
      		cm.gainMeso(-500000000);
      		cm.teachSkill(8004,1,1);
      		cm.teachSkill(10008003,1,1);
      		cm.teachSkill(20008003,1,1);
      		cm.teachSkill(20018003,1,1);
      		cm.teachSkill(20028003,1,1);
      		cm.teachSkill(20038003,1,1);
      		cm.teachSkill(30008003,1,1);
      		cm.teachSkill(30018003,1,1);
      		cm.teachSkill(50008003,1,1);
      		cm.sendOk("쓸만한 하이퍼 바디을 익혔습니다. 이용해주셔서 정말 감사합니다~~");
     	  	cm.playerMessage(5, "<쓸만한 하이퍼 바디> 스킬이 사용 가능하게 되었습니다.");
     	  	cm.dispose();
 	 } else {
        	cm.sendOk("메소가 부족합니다. 스킬을 익히기에 충분한 메소가 있는지 먼저 확인 해주세요~");
        	cm.dispose();
	 }
	  } else if (selection == 6) {
         if (cm.getMeso() >= 700000000) { 
      		cm.gainMeso(-700000000);
      		cm.teachSkill(8002,1,1);
      		cm.teachSkill(10008002,1,1);
      		cm.teachSkill(20008002,1,1);
      		cm.teachSkill(20018002,1,1);
      		cm.teachSkill(20028002,1,1);
      		cm.teachSkill(20038002,1,1);
      		cm.teachSkill(30008002,1,1);
      		cm.teachSkill(30018002,1,1);
      		cm.teachSkill(50008002,1,1);
        	cm.sendOk("쓸만한 샤프 아이즈 스킬을 익혔습니다. 이용해주셔서 정말 감사합니다~~");
        	cm.playerMessage(5, "<쓸만한 샤프 아이즈> 스킬이 사용 가능하게 되었습니다.");
       		cm.dispose();
  	} else {
        	cm.sendOk("메소가 부족합니다. 스킬을 익히기에 충분한 메소가 있는지 먼저 확인 해주세요~");
        	cm.dispose();
	}
	  } else if (selection == 7) {
      		cm.teachSkill(80001000,1,1);
        	cm.sendOk("몬스터 라이딩 스킬을 익혔습니다. 이용해주셔서 정말 감사합니다~~");
        	cm.playerMessage(5, "<몬스터 라이딩> 스킬이 사용 가능하게 되었습니다.");
        	cm.dispose();
	} else {
        	cm.sendOk("감사합니다~ 버프가 필요하시다면 언제든지 와서 구경해주세요~ 또 오세요!");
		cm.dispose();
	}
}