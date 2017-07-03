function action() {
        if (cm.getPlayer().getLevel() < 230) {
	    cm.gainItem(2430218,-1);
            cm.getPlayer().levelUp();
	    cm.dispose();
        }else{ 
            cm.sendOk("230레벨 이상은 효과를 볼 수 없습니다.");
            cm.dispose();
        }
}