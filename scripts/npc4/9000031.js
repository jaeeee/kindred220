
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
cm.sendSimple("�ȳ��ϼ���~ ���� #r#e����¶���#k#n���� ��ų�����͸� ������ְ��ִ� ī���� ��� �ؿ�"+"\r\n#k#L1##b���� ������ ��ų�� ������ �ϰڽ��ϴ�.#k#n");

} else if (selection == 1) {
     cm.getPlayer().maxSkillMaster();
     cm.sendOk("��� ��ų�� ������ �߾��!");
     cm.dispose();
   } else if (selection == 4) {
		cm.dispose();
                cm.openNpc (9000132);
   } else if (selection == 2) {
	cm.teachSkill(0001003,1,1); //���� ����
	cm.teachSkill(4341009,30,30);
	cm.teachSkill(50001003,1,1);//������ �� ������ȥ
	cm.sendOk("���� ���� �� ���Һ�ο�  ��ų�� ������ �߾��!");
	cm.dispose();
   } else if (selection == 5) {
	cm.teachSkill(0001003,1,1); //
	cm.teachSkill(10001003,1,1); //''
	cm.teachSkill(20001003,1,1); //''
	cm.teachSkill(20011003,1,1); //
	cm.teachSkill(30001003,1,1); //
	cm.teachSkill(20021003,1,1); //
	cm.teachSkill(30011003,1,1); // ��ȹ
	cm.teachSkill(30001061,1,1);
	cm.sendOk("��Ծ ��ȹ�Ҽ��ִ� ��ų�� ���̽��ϴ�.");
	cm.dispose();
   } else if (selection == 3) {
	cm.teachSkill(1121000,30,30); //�޿�
	cm.teachSkill(1221000,30,30); //�޿�
	cm.teachSkill(1321000,30,30); //�޿�
	cm.teachSkill(2121000,30,30); //�޿�
	cm.teachSkill(2221000,30,30); //�޿�
	cm.teachSkill(2321000,30,30); //�޿�
	cm.teachSkill(3121000,30,30); //�޿�
	cm.teachSkill(3221000,30,30); //�޿�
	cm.teachSkill(4121000,30,30); //�޿�
	cm.teachSkill(4221000,30,30); //�޿�
	cm.teachSkill(4341000,30,30); //�޿�
	cm.teachSkill(5121000,30,30); //�޿�
	cm.teachSkill(5221000,30,30); //�޿�
	cm.teachSkill(21121000,30,30); //�޿�
	cm.teachSkill(22171000,30,30); //�޿�
	cm.teachSkill(32121007,30,30); //�޿�
	cm.teachSkill(33121007,30,30); //�޿�
	cm.teachSkill(35121007,30,30); //�޿�
	cm.teachSkill(5321005,30,30); //�޿�
	cm.teachSkill(23121005,30,30); //�޿�
	cm.teachSkill(31121004,30,30); //�޿�
	cm.teachSkill(24121008,30,30); //�޿�
	cm.teachSkill(51121005,30,30); //�޿�
	cm.sendOk("������ ��縦 ������ �߾��!");
	cm.dispose();
}
 }
} 
