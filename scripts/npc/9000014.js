
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
cm.sendSimple("���� ��ų�� ������ ���ִ� #b����#k�̿���."+"\r\n#k#L1#[#b��ų �н�#k] ���� ��ų������"+"\r\n#k#L2#[#b��ų �н�#k] ������ ȥ ����\r\n\r\n#e#r ��ų�����ʹ� [@����] �� ���ֽø鰣���մϴ� ");

} else if (selection == 1) {
     cm.getPlayer().maxSkillMaster();
	if (cm.getJob() == 3610 || cm.getJob() == 3612 || cm.getJob() == 3611 || cm.getJob() == 3600){
	cm.teachSkill(30020232, 1, 0); //���÷��� ���ö���
        cm.teachSkill(30020233, 1, 0); //���̺긮�� ����
        cm.teachSkill(30020234, 1, 0); //��Ƽ���ͷ�
        cm.teachSkill(30021235, 1, 0); //���θ�� ���Ʈ
        cm.teachSkill(30020236, 1, 0); //��Ƽ ��� ��Ŀ
        cm.teachSkill(30021237, 1, 0); //�����̼� ����Ƽ
        cm.teachSkill(30020240, 1, 0); //ī���ö���
        cm.teachSkill(30021236, 1, 0); //��Ƽ ��� ��Ŀ
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
	cm.teachSkill(60011216, 1, 1); //������
        cm.teachSkill(60011218, 1, 1); //������ ����Ʈ
        cm.teachSkill(60011219, 1, 1); //�ҿ� ��Ʈ��Ʈ
        cm.teachSkill(60011220, 1, 1); //���̵帲
        cm.teachSkill(60011221, 1, 1); //�ڵ����Ʈ
        cm.teachSkill(60011222, 1, 1); //�巹�� ��
	}
	if (cm.getJob() == 6100 || cm.getJob() == 6110) {
	    cm.teachSkill(60001218, 1, 1); //��Ƽ��Ŀ��Ʈ
            cm.teachSkill((60001219), 1, 1); //���̾� ��
            cm.teachSkill(60000219, 1, 1); //Ŀ�ǵ�
            cm.teachSkill(60000220, 1, 1); //Ʈ�����ǱԷ��̼�
            cm.teachSkill(60000221, 1, 1); //Ʈ�����ǱԷ��̼�
            cm.teachSkill(60000222, 1, 1); //Ʈ�����ǱԷ��̼�
            cm.teachSkill(60000225, 1, 1); //Ŀ�ǵ�
	}if (cm.getJob() == 3120 || cm.getJob() == 3121) {
            cm.teachSkill(30010230,  1, 1); //�ͽõ�
            cm.teachSkill(30010231, 1, 1); //���� ���Ǽǽ�
            cm.teachSkill(30010241, 1, 1); //���ϵ� ������
            cm.teachSkill(30010242, 1, 1); //���� ��Ʈ��Ʈ
            cm.teachSkill(30010110, 1, 1); //���� ����
            cm.teachSkill(30010185, 1, 1); //����� ����	
	}if (cm.getJob() == 3100 || cm.getJob() == 3101){            
	    cm.teachSkill(30010241, 1, 1); //���ϵ� ������
            cm.teachSkill(30010110, 1, 1); //���� ����
            cm.teachSkill(30010185, 1, 1); //����� ����
	}if (cm.getJob() == 2700 || cm.getJob() == 2710) {
            cm.teachSkill(20040216, 1, 1);//�����̾�
            cm.teachSkill(20040217, 1, 1); //��Ŭ����
            cm.teachSkill(20040218, 1, 1); //�۹̿���Ʈ
            cm.teachSkill(20040221, 1, 1); //�Ŀ��������Ʈ
            cm.teachSkill(20041222, 1, 1); //����Ʈ ��ũ
	}if (cm.getJob() == 2300 || cm.getJob() == 2002) {
            cm.teachSkill((20020109), 1, 1); //������ ȸ��
            cm.teachSkill((20021110), 1, 1); //������ �ູ
            cm.teachSkill((20020111), 1, 1); //��Ÿ�ϸ��� ����
            cm.teachSkill((20020112), 1, 1); //���� �ڰ�
	}if (cm.getJob() == 2003 || cm.getJob() == 2400){
             cm.teachSkill((20031203),1,1); //���� ���� ����
             cm.teachSkill((20030204),1,1); //���鸮 �ν���Ʈ
             cm.teachSkill((20031205),1,1); //���� ������
             cm.teachSkill((20030206),1,1); //���� �����ͷ�Ƽ
             cm.teachSkill((20031207),1,1); //��ƿ ��ų
             cm.teachSkill((20031208),1,1); //��ų �Ŵ�����Ʈ
             cm.teachSkill((20031209),1,1); //������Ʈ
	}if (cm.getJob() == 5100){
	     cm.teachSkill(50001214,1,1);
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
     cm.sendOk("���� ��ų�� ������ �߾��! ��ų�����ʹ� @��ų�����ͷε� �����ؿ�.");

     cm.dispose();
   } else if (selection == 6) {
		cm.dispose();
                cm.openNpc (9900000);
   } else if (selection == 2) {
	cm.teachSkill(1003,1,1); //������ ȥ
	cm.teachSkill(10001003,1,1); //''
	cm.teachSkill(20001003,1,1); //''
	cm.teachSkill(20011003,1,1);
	cm.teachSkill(30001003,1,1);
	cm.teachSkill(20021003,1,1);
	cm.teachSkill(30011003,1,1);
	cm.teachSkill(20031003,1,1);
	cm.teachSkill(20041003,1,1);
	cm.teachSkill(60001003,1,1);
	cm.teachSkill(60011003,1,1);
	cm.teachSkill(50001003,1,1);//������ �� ������ȥ
	cm.sendOk("������ ȥ�� ������ �߾��! �׷��� �ȹ�����ٸ� ä�ù濡 @������ȥ �� �ĺ�����");
	cm.dispose();
   } else if (selection == 3) {
	cm.teachSkill(0001003,1,1); //���� ����
	cm.teachSkill(4341009,1,1);
	cm.teachSkill(50001003,1,1);//������ �� ������ȥ
	cm.sendOk("[����,��� �ٸ��� �ȹ����]���� ���� �� ���Һ�ο�  ��ų�� ������ �߾��!");
	cm.dispose();
   } else if (selection == 4) {
	cm.teachSkill(0001003,1,1); //
	cm.teachSkill(10001003,1,1); //''
	cm.teachSkill(20001003,1,1); //''
	cm.teachSkill(20011003,1,1); //
	cm.teachSkill(30001003,1,1); //
	cm.teachSkill(20021003,1,1); //
	cm.teachSkill(30011003,1,1); // ��ȹ
	cm.teachSkill(30001061,1,1);
	cm.sendOk("[���� �ƴҽ� �ȹ����]��Ծ ��ȹ�Ҽ��ִ� ��ų�� ���̽��ϴ�.");
	cm.dispose();
   } else if (selection == 5) {
		cm.dispose();
                cm.openNpc (1002101);
                return;
}
 }
} 
