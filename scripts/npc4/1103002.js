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
cm.sendSimple(""+"#k#L2##fUI/UIToolTip/Item/Equip/Star/Star##b 라이딩스킬 배우기#k\r\n#k");



   } else if (selection == 1) {
	cm.dispose();
	cm.openNpc(2090100);
   } else if (selection == 2) {
	cm.teachSkill(80001016,1,1);
	cm.teachSkill(80001003,1,1);
	cm.teachSkill(80001004,1,1);
	cm.teachSkill(80001015,1,1);
	cm.teachSkill(80001002,1,1);
	cm.teachSkill(80001006,1,1);
	cm.teachSkill(80001007,1,1);
	cm.teachSkill(80001008,1,1);
	cm.teachSkill(80001009,1,1);
	cm.teachSkill(80001010,1,1);
	cm.teachSkill(80001011,1,1);
	cm.teachSkill(80001012,1,1);
	cm.teachSkill(80001013,1,1);
	cm.teachSkill(80001015,1,1);
	cm.teachSkill(80001017,1,1);
	cm.teachSkill(80001018,1,1);
	cm.teachSkill(80001019,1,1);
	cm.teachSkill(80001021,1,1);
	cm.teachSkill(80001022,1,1);
	cm.teachSkill(80001023,1,1);
	cm.teachSkill(80001026,1,1);
	cm.teachSkill(80001027,1,1);
	cm.teachSkill(80001028,1,1);
	cm.teachSkill(80001029,1,1);
	cm.teachSkill(80001030,1,1);
	cm.teachSkill(80001032,1,1);
	cm.teachSkill(80001037,1,1);
	cm.teachSkill(80001038,1,1);
	cm.teachSkill(80001039,1,1);
	cm.teachSkill(80001040,1,1);
	cm.teachSkill(80001041,1,1);
	cm.teachSkill(80001042,1,1);
	cm.teachSkill(80001148,1,1);
	cm.teachSkill(80001184,1,1);
	cm.teachSkill(80001198,1,1);
	cm.teachSkill(80001228,1,1);
	cm.teachSkill(80001243,1,1);
	cm.teachSkill(80001245,1,1);
	cm.teachSkill(80001300,1,1);
	cm.teachSkill(80001423,1,1);
	cm.teachSkill(80001425,1,1);
	cm.sendOk("#fUI/UIToolTip/Item/Equip/Star/Star##b 모든 라이딩 스킬을 익혔습니다#k\r\n");

	cm.dispose();
}
 }
} 
