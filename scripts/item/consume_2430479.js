function action() {
        if (cm.getPlayer().getLevel() < 230) {
	    cm.gainItem(2430479,-1);
            cm.getPlayer().levelUp();
	    cm.dispose();
        }else{ 
            cm.sendOk("230���� �̻��� ȿ���� �� �� �����ϴ�.");
            cm.dispose();
        }
}