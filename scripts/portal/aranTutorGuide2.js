function enter(pi) {
    if (pi.getInfoQuest(21002).equals("normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o")) {
	pi.playerMessage(5,"���� ���� �� ����Ű�� ����Ű�� �̿��� Ŀ�ǵ� ������ �� �� �ֽ��ϴ�.");
	pi.updateInfoQuest(21002,"cmd=o;normal=o;arr0=o;arr1=o;arr2=o;mo1=o;chain=o;mo2=o;mo3=o;mo4=o");
	pi.AranTutorialGuide("aran/tutorialGuide3");
    }
}