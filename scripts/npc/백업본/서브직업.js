/*


RaceMS ���� ��ũ��Ʈ �Դϴ�.


*/
 var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
if (cm.getPlayer().getSubclass() == 1) {
    cm.sendSimple ("#b�ȳ��ϼ���?\r ��ǳ�� �¶��� #r������#n#k ������ �˷��ִ� ���Ǿ� �Դϴ�.\r\n\r\n������ �ñ��Ͻʴϱ�?\r\n\r\n" +"#k\r\n#L90##r[��ǳ�� �¶���]�����ڶ� ?#k");
}else if (cm.getPlayer().getSubclass() == 2) {
  cm.sendSimple ("#b�ȳ��ϼ���?\r ��ǳ�� �¶��� #r����Ŀ#n#k ������ �˷��ִ� ���Ǿ� �Դϴ�.\r\n\r\n������ �ñ��Ͻʴϱ�?\r\n\r\n" +"#k\r\n#L100##r[��ǳ�� �¶���]����Ŀ�� ?#k"+"#k\r\n#L101##g[��ǳ�� �¶���]�ֹ��� �ޱ�(�Ϸ�1ȸ)" + "#k\r\n#L102##g[��ǳ�� �¶���]�ֹ��� ���޹ޱ�");
}else {
cm.sendSimple ("#b�ȳ��ϼ���?\r ��ǳ�� �¶��� �������� ������ �˷��ִ� ���Ǿ� �Դϴ�.\r\n���� #h0#���� �� ������ �����ϴ�. \r\n������ �ñ��Ͻʴϱ�?\r\n\r\n" +"#k\r\n#L80##r[��ǳ�� �¶���]�� �����̶� ?#k" +"#k\r\n#L81##b[��ǳ�� �¶���]�� ������ ������ͽ��ϴ�.#r");
}
      } else if (selection == 80) {
               cm.sendSimple (" ������. #d" +
            "#k\r\n#L0##r�� �����̶� �����ΰ���?" +
            "#k\r\n#L2##r�� ������ �ٲܼ��ֳ���?");
      } else if (selection == 81) {
if (cm.getPlayer().getRacePT() >= 1000 && cm.haveItem(2003548, 1)) {
               cm.sendSimple ("������. #e#d" +
            "#k\r\n#L7##b�����ڰ� �ǰ�ͽ��ϴ�." +
            "#k\r\n#L8##r����Ŀ�� �ǰ�ͽ��ϴ�.");
} else {
	cm.sendOk ("��ǳ�� ����Ʈ�� �����ϰų� �����Ǻ���� �����ϴ�.\r\n��ǳ�� ����Ʈ�� 1000����Ʈ�� �ʿ��ϸ�\r\n ������ ����� �Ŀ��� �̺�Ʈ�θ� �����Ǽ� �ֽ��ϴ�.");
}
      } else if (selection == 90) {
               cm.sendSimple ("������. #d" +
            "#k\r\n#L17##r�����ڶ� �����ΰ���?" +
            "#k\r\n#L18##r�������� ������ �����ΰ���?");
      } else if (selection == 100) {
               cm.sendSimple ("������. #d" +
            "#k\r\n#L111##r����Ŀ�� �����ΰ���?" +
            "#k\r\n#L112##r����Ŀ�� ������ �����ΰ���?");
      } else if (selection == 0) {
        cm.sendOk ("\r\n #r�� ����#b�̶�!\r\n��2�� ������ ���ϸ� ���������� ���� ������ �������ֽ��ϴ�.\r\n\r\n#r#e������#k#n�� ��ɽ� ����ġ��,���ݷ�,�������� ������ �����ֽ��ϴ�.\r\n#r#e����Ŀ#k#n�� �ֹ���ȿ������ ���� �����������Ǽ��ֽ��ϴ�.\r\n\r\n#b���������� ���̽�����Ʈ�� ������ ����� �ʿ��մϴ�.\r\n#r#e�����Ǻ��#n#k�̶� �Ŀ��̳� �̺�Ʈ�θ� ������ �� �ֽ��ϴ�.");
	cm.dispose();
      } else if (selection == 2) {
        cm.sendOk ("\r\n #r#e ���������� �ٲٽ� �� �����ϴ�.");
	cm.dispose();
      } else if (selection == 17) {
        cm.sendOk ("\r\n#r#e<������>#n#k�� ��ǳ�� �¶��ο��� �־����� ��2�� �����̸� ���Ǹ´� ������ �־����ϴ�.");
	cm.dispose();
      } else if (selection == 18) {
	cm.sendOk ("\r\n#r#e<������>#n#k�� ������ ��üä���� ����ϰ� �ٲ�� ���ͻ�ɽ� �߰�����ġ 30%ȹ��\r\n�׸��� �������� ���� ������ ȹ���մϴ�. ������ ������ �ʱ����ӽ� ����30�� ������ ������1�ð����帣�� 60�������Ե˴ϴ�.");
	cm.dispose();
      } else if (selection == 111) {
        cm.sendOk ("\r\n#r#e<����Ŀ>#n#k�� ��ǳ�� �¶��ο��� �־����� ��2�� �����̸� ���Ǹ´� ������ �־����ϴ�.");
	cm.dispose();
      } else if (selection == 112) {
	cm.sendOk ("\r\n#r#e<����Ŀ>#n#k�� ������ ��üä���� ����ϰ� �ٲ�� �ֹ����� �ٸ��� Ȯ���� 10% �����մϴ�.\r\n�ֹ����۽� �������� �ΰ������������Ǽ������� �Ϸ翡1���� #r#e����ȭ�ֹ���#n#k�� �����Ǽ��ֽ��ϴ�.\r\n#r#e����ȭ �ֹ���#n#k�� ������������������ ����5~10 �ý���10~20 �̷������� �����Ե˴ϴ�.");
	cm.dispose();
      } else if (selection == 7) {
	cm.sendOk ("\r\n#r#e<������>#n#k�� �Ǿ����ϴ�. �ڼ��������� �˰�ʹٸ� �ٽ� ���� �ɾ��ּ���");
	cm.getPlayer().setSubclass(1);
	cm.getPlayer().cm.addRacePT(-1000);
	cm.getPlayer().cm.gainItem(2003548, -1);
	cm.dispose();
      } else if (selection == 8) {
	cm.sendOk ("\r\n#r#e<����Ŀ>#n#k�� �Ǿ����ϴ�. �ڼ��������� �˰�ʹٸ� �ٽ� ���� �ɾ��ּ���");
	cm.getPlayer().setSubclass(2);
	cm.getPlayer().cm.addRacePT(-1000);
	cm.getPlayer().cm.gainItem(2003548, -1);
	cm.dispose();
      } else if (selection == 102) {
	cm.dispose();
	cm.openNpc(2040001);
	return;
      } else if (selection == 101) {
	cm.dispose();
	cm.openNpc(9010033);
	return;
}
}
}