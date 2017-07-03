
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
cm.sendSimple("안녕하세요~ 저는 #r#e로즈온라인#k#n에서 스킬마스터를 담당해주고있는 카산드롸 라고 해용"+"\r\n#k#L1##b현재 직업의 스킬을 마스터 하겠습니다.#k#n");

} else if (selection == 1) {
     cm.getPlayer().maxSkillMaster();
     cm.sendOk("모든 스킬을 마스터 했어요!");
     cm.dispose();
   } else if (selection == 4) {
		cm.dispose();
                cm.openNpc (9000132);
   } else if (selection == 2) {
	cm.teachSkill(0001003,1,1); //데몬 점프
	cm.teachSkill(4341009,30,30);
	cm.teachSkill(50001003,1,1);//여까지 다 장인의혼
	cm.sendOk("데몬 점프 와 팬텀블로우  스킬을 마스터 했어요!");
	cm.dispose();
   } else if (selection == 5) {
	cm.teachSkill(0001003,1,1); //
	cm.teachSkill(10001003,1,1); //''
	cm.teachSkill(20001003,1,1); //''
	cm.teachSkill(20011003,1,1); //
	cm.teachSkill(30001003,1,1); //
	cm.teachSkill(20021003,1,1); //
	cm.teachSkill(30011003,1,1); // 포획
	cm.teachSkill(30001061,1,1);
	cm.sendOk("재규어를 포획할수있는 스킬을 배우셨습니다.");
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
	cm.sendOk("메이플 용사를 마스터 했어요!");
	cm.dispose();
}
 }
} 
