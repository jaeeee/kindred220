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
cm.sendSimple("�÷��� ������ ����¡ �ͽ��ü� �ѵ� �ذ�!\r\n#L1#[#b��ų �н�#k]");

} else if (selection == 1) {
     cm.getPlayer().maxSkillMaster();
	cm.teachSkill(12120011,30);
  }
 }
} 
