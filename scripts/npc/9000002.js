
/*
	�� ��ũ��Ʈ�� �������� �����Դϴ�.
	�������� KMS �������� ����������ϴ�.

	���̹� : ����(seonwoo__@naver.com)

	���ǽ� : 9000030
*/

var status = 0;

function start() {
	status = -1;
	action(1,0,0);
}


function action(mode , type , selection){
	if (mode == -1) {
		cm.dispose();
	} else {
	if (mode == 0 && (status == 0)) {
		cm.sendOk("�ȳ��� ������.");
		cm.dispose();
	} 
	if (mode > 0)
	    status++;
	else
	    status--;
	if (status == 0) {
            cm.sendYesNo("#bHi~Hello#e�޸տ¶���#n #e�ʱ� ���� ������#n�� �������� NPC�Դϴ�..\r\n����#e�޸տ¶���#n�� #i1004384##i1082634##i1052865##i1073019##i1142140#�� �����۵���\r\n��� ���Դϴ�. #e#r(�ý��� 500 , ���ݷ�,���� 30)\r\n#r\r\n#b�������� �����ðڽ��ϱ�??\r\n#r�����ĭ 5ĭ�� ���ܵμ���~")
        } else if (status == 1){
           if (cm.getPlayer().getKeyValue(cm.getNpc()+"_Pure") == null) { 
	    cm.gainSponserItem(1004384,'[�ʱ�����]',500,30,30); //����������
	    cm.gainSponserItem(1082634,'[�ʱ�����]',500,30,30); //��������尩
	    cm.gainSponserItem(1052865,'[�ʱ�����]',500,30,30); //������� �ѹ���
	    cm.gainSponserItem(1073019,'[�ʱ�����]',500,30,30); //�������Ź�
	    cm.gainSponserItem(1142140,'[�ʱ�����]',500,30,30); //�޸տ¶�������
            cm.getPlayer().setKeyValue(cm.getNpc()+"_Pure", "1");
		        cm.sendOk("�������� ���޵Ǿ����ϴ�.");
			cm.dispose();
		    } else {
		        cm.sendOk("�̹� �����̽��ϴ�.");
		        cm.dispose();
			}
		}
	}
}