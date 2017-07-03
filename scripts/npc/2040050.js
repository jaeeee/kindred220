/*
		레이스 스타일 스크립트
		
		제작자 : 레이스매니저(race_adm)

		용도 : 보상 엔피씨
*/
var status = 0;
var select=0;
function start() {


    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getPlayer().getRewardDB().size() == 0) {
		cm.sendOk("#h0#님은 보상을 받을 아이템이 없어요.");
		cm.dispose();
		return;
	    }
		cm.sendSimple("안녕하세요! #h0#님! 받을 아이템을 선택해 주세요.\r\n\r\n#b"+cm.getPlayer().printRewardsSaves());
        } else if (status == 1) {
		select = selection;
		cm.sendYesNo("정말 다음 아이템을 받으시겠습니까?\r\n\r\n#b#i"+cm.getPlayer().getRewardsSavedItem(select)[0]+"# #z"+cm.getPlayer().getRewardsSavedItem(select)[0]+"# "+cm.getPlayer().getRewardsSavedItem(select)[1]+" 개");
	} else if (status == 2) {
		if(cm.canHold(cm.getPlayer().getRewardsSavedItem(select)[0])) {
			cm.gainItem(cm.getPlayer().getRewardsSavedItem(select)[0],cm.getPlayer().getRewardsSavedItem(select)[1]);
			cm.sendOk("아이템이 정상적으로 지급되었습니다.");
			cm.dispose();
			cm.getPlayer().removeRewardsDB(cm.getPlayer().getRewardsSavedItem(select)[0],cm.getPlayer().getRewardsSavedItem(select)[1],cm.getPlayer().getId());
		} else {
			cm.sendOk("죄송합니다. 받으실 인벤토리 공간을 확인하신 후 다시 시도해 주세요.");
			cm.dispose();
		}
	}
    }
}

