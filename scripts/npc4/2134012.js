/*

	-â��Ms �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.-

	������ �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2134012

	���ǽ� �̸� : ���鸮

	���ǽð� �ִ� �� :  :  (301000000)

	���ǽ� ���� : MISSINGNO


*/

importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.packet.creators);
importPackage(Packages.launch.world);

var status = 0;
function start() {
     if (cm.getQuestStatus(31248) == 1) {
          cm.sendOk("�̷�.. ���ɵ��� ���� �����Ĺ����ݾ�? ��ǥ�� ������ �����ֱ�");
          cm.completeQuest(31248);
          cm.gainItem(4030019, 1);
          return; 
     }
        cm.sendOk("����");
        cm.dispose();
        return;
}

