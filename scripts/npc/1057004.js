function start() {
 cm.sendSimple ("#L1##k#b����������ϰڽ��ϴ�(����ġ : 15��)#k#l#n\r\n#L2##b��������������ʰڽ��ϴ�(��������)#k#l#n\r\n#L3##b���������������ڽ��ϴ�#k#l#n")
}

function action(mode, type, selection) {
 cm.dispose();
 if (selection == 0) {
  cm.enterCS();
 } else if (selection == 1) {
  cm.getPlayer().setKeyValue("hellmode", "1");
  cm.warp(109090200, 0);
  cm.gainMeso(5000000);
 } else if (selection == 2) {
  cm.warp(109090200, 0);
  cm.gainMeso(5000000);
 } else if (selection == 3) {
  cm.sendOk("����� �����ҽÿ�\r\n ���������� AP�� 1~10 �������� ���ְ� ���������帳�ϴ�")
  cm.dispose();
 }
}