


/*

	���� KMS �� �ҽ��� ��ũ��Ʈ �Դϴ�.

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/


var status = -1;
importPackage(Packages.client.stats);
importPackage(Packages.packet.creators);
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        status -- ;
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var leftExp = cm.getPlayer().getStat().getEmpathy();
        var level = 1;
        while (leftExp >= Packages.constants.GameConstants.getTraitExpNeededForLevel(level)) {
            level++;
        }
        cm.getPlayer().message(Packages.constants.GameConstants.getTraitLevel(leftExp));
        //cm.gainExp(500000000);
        //
        //
        //cm.getPlayer().updateSingleStat(PlayerStat.SENSE, 181);
        //cm.getPlayer().send(MainPacketCreator.GainEXP_Trait(20, 4, false));
        //20, 46, 80, 124, 181
        //cm.getPlayer().Message("���� : "+cm.getClient().getIDCode2());
        //cm.getPlayer().Message("2�� : "+cm.getClient().getSecondPassword());
	cm.dispose();
    }
}


