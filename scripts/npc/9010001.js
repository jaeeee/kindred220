/*

Made by ����
���ܼ����������ֽñ�

*/
function start() {
    var tmp_str = "�������� ��ϴ� õ��õ�����Դϴ�. �������� ȯ���մϴ�!\r\n���� ������ �ް� �����Ű���? ���� ������ 3���ʿ��մϴ� �ٹ�������\r\n\r\n#r%���� : ���� ������ �� ������ �ش��ϴ� ���� ���� �ʿ��մϴ�";
    tmp_str += "#b\r\n#L0#���������ޱ�1(������)#l";
    tmp_str += "\r\n#L1#���������ޱ�2(�ķ���)#l";
    tmp_str += "\r\n#L2#���������ޱ�3(�뷩��)#l";
    tmp_str += "\r\n#L7##e#r[�ʼ�]#n#b���� ���̵� ��ų ����#l";
    cm.sendSimple (tmp_str);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {
         if (cm.haveItem(5000228, 1)) {
      		cm.teachSkill(80000007,1,1);
        	cm.sendOk("���� �� ������ ���������� �ߵ��Ǿ����ϴ�. �̿����ּż� ���� �����մϴ�~~");
       		cm.playerMessage(5, "���� ���� ������ ���������� �����Ǿ����ϴ�.");
        	cm.dispose();
   	} else {
        	cm.sendOk("�ش��ϴ� ���� ���� �������� �ʾҽ��ϴ�. ��ų�� ���������� �ش��ϴ� ���� ���� �ִ��� ���� Ȯ�� ���ּ���~");
        	cm.dispose();
	}	
	  } else if (selection == 1) {
         if(cm.haveItem(5000229, 1)) {
      		cm.teachSkill(80000008,1,1);
       		cm.sendOk("���� �� ������ ���������� �ߵ��Ǿ����ϴ�. �̿����ּż� ���� �����մϴ�~~");
      		cm.playerMessage(5, "���� ���� ������ ���������� �����Ǿ����ϴ�.");
       		cm.dispose();
  	 } else {
        	cm.sendOk("�ش��ϴ� ���� ���� �������� �ʾҽ��ϴ�. ��ų�� ���������� �ش��ϴ� ���� ���� �ִ��� ���� Ȯ�� ���ּ���~");
        	cm.dispose();
	}
	  } else if (selection == 2) {
         if (cm.haveItem(5000230, 1)) { 
      		cm.teachSkill(80000009,1,1);
       		cm.sendOk("���� �� ������ ���������� �ߵ��Ǿ����ϴ�. �̿����ּż� ���� �����մϴ�~~");
        	cm.playerMessage(5, "���� ���� ������ ���������� �����Ǿ����ϴ�.");
        	cm.dispose();
  	} else {
        	cm.sendOk("�ش��ϴ� ���� ���� �������� �ʾҽ��ϴ�. ��ų�� ���������� �ش��ϴ� ���� ���� �ִ��� ���� Ȯ�� ���ּ���~");
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
        	cm.sendOk("������ ��庥���� ���� ��ų�� �������ϴ�. �̿����ּż� ���� �����մϴ�~~");
      	   	cm.playerMessage(5, "<������ ���꽺�� ����> ��ų�� ��� �����ϰ� �Ǿ����ϴ�.");
       		cm.dispose();
 	 } else {
        	cm.sendOk("�޼Ұ� �����մϴ�. ��ų�� �����⿡ ����� �޼Ұ� �ִ��� ���� Ȯ�� ���ּ���~");
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
        	cm.sendOk("������ �ĺ� ������ ��ų�� �������ϴ�. �̿����ּż� ���� �����մϴ�~~");
        	cm.playerMessage(5, "<������ �ĺ� ������> ��ų�� ��� �����ϰ� �Ǿ����ϴ�.");
        	cm.dispose();
  	} else {
      	 	cm.sendOk("�޼Ұ� �����մϴ�. ��ų�� �����⿡ ����� �޼Ұ� �ִ��� ���� Ȯ�� ���ּ���~");
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
      		cm.sendOk("������ ������ �ٵ��� �������ϴ�. �̿����ּż� ���� �����մϴ�~~");
     	  	cm.playerMessage(5, "<������ ������ �ٵ�> ��ų�� ��� �����ϰ� �Ǿ����ϴ�.");
     	  	cm.dispose();
 	 } else {
        	cm.sendOk("�޼Ұ� �����մϴ�. ��ų�� �����⿡ ����� �޼Ұ� �ִ��� ���� Ȯ�� ���ּ���~");
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
        	cm.sendOk("������ ���� ������ ��ų�� �������ϴ�. �̿����ּż� ���� �����մϴ�~~");
        	cm.playerMessage(5, "<������ ���� ������> ��ų�� ��� �����ϰ� �Ǿ����ϴ�.");
       		cm.dispose();
  	} else {
        	cm.sendOk("�޼Ұ� �����մϴ�. ��ų�� �����⿡ ����� �޼Ұ� �ִ��� ���� Ȯ�� ���ּ���~");
        	cm.dispose();
	}
	  } else if (selection == 7) {
      		cm.teachSkill(80001000,1,1);
        	cm.sendOk("���� ���̵� ��ų�� �������ϴ�. �̿����ּż� ���� �����մϴ�~~");
        	cm.playerMessage(5, "<���� ���̵�> ��ų�� ��� �����ϰ� �Ǿ����ϴ�.");
        	cm.dispose();
	} else {
        	cm.sendOk("�����մϴ�~ ������ �ʿ��Ͻôٸ� �������� �ͼ� �������ּ���~ �� ������!");
		cm.dispose();
	}
}