function enter(pi) {
    if (pi.getInfoQuest(21002).equals("arr0=o;mo1=o;mo2=o;mo3=o")) {
	pi.playerMessage(5,"CtrlŰ�� ���� ���͸� �Ϲݰ��� �� �� �ֽ��ϴ�.");
	pi.updateInfoQuest(21002,"normal=o;arr0=o;mo1=o;mo2=o;mo3=o");
	pi.AranTutorialGuide("aran/tutorialGuide1");
    }
}