


/*

	���� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : �ƽ��� �ع��� ����


*/

importPackage (java.lang);
importPackage (java.util);
importPackage (Packages.tools);
importPackage (Packages.server.quest);
var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
        var date = Calendar.getInstance().get(Calendar.YEAR)%100+"/"+StringUtil.getLeftPaddedStr(Calendar.getInstance().get(Calendar.MONTH)+"", "0", 2)+"/"+Calendar.getInstance().get(Calendar.DAY_OF_MONTH);
        if (cm.getPlayer().getKeyValue("AswanOffSeason_LastDate") == null) {
            cm.getPlayer().setKeyValue("AswanOffSeason_LastDate", date);
        }
        if (cm.getQuestStatus(7963) == 0 || !cm.getPlayer().getKeyValue("AswanOffSeason_LastDate").equals(date)) {
            cm.forceStartQuest(7963, "0");
            cm.getPlayer().setKeyValue("AswanOffSeason_LastDate", date);
        }
        cm.sendSimple("#e<�ƽ��� �ع���>#n\r\n������ �ƽ��� ������ ��ȸ�ϰ� �ִ� ������ �ܴ���� �����Ͻðڽ��ϱ�?#b\r\n\r\n\r\n#L0# ������ �ܴ��� �����Ѵ�. (���� 40�̻�. ���� ���� Ƚ��: "+(5-Integer.parseInt(cm.getQuestCustomData(7963)))+"��)#l\r\n#L1# ������ ž �Ա��� �����帳�ϴ�. (���� 120�̻�)#l");
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getLevel() < 40) {
                cm.sendOk("���� ������ �ܴ��� �����Ͻ� ������ �����ϽŰ� ���׿�. �ܴ� ������ ���� 40���� ���� �����մϴ�.");
                cm.dispose();
                return;
            }
            if (cm.getQuestCustomData(7963).equals("5")) {
                cm.sendOk("���� ���尡���� Ƚ���� ��� ����ϼ̽��ϴ�. ���� �ٽ� ������ �ּ���.");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getParty() != null) {
                var em = cm.getEventManager("AswanOffSeason");
                if (!cm.isLeader()) {
                    cm.sendOk("��Ƽ���� ���� ���� �ɾ�� �մϴ�.");
                    cm.dispose();
                    return;
                }
                if (!cm.allMembersHere()) {
                    cm.sendOk("��Ƽ���� ���� �̰��� ���־�� �մϴ�.");
                    cm.dispose();
                    return;
                }
                var it = cm.getClient().getChannelServer().getPartyMembers().iterator();
                var levelPass = true;
                var limitPass = true;
                while (it.hasNext()) {
                    var chr = it.next();
                    if (!checkLevel(chr.getLevel(), 40, 200)) {
                        levelPass = false;
                        break;
                    }
                    if (chr.getQuestNAdd(MapleQuest.getInstance(7963)).getCustomData().equals("5")) {
                        limitPass = false;
                        break;
                    }
                }
                if (!levelPass) {
                    cm.sendOk("��Ƽ�� �� ������ ���� �ʴ� ��Ƽ���� �ֽ��ϴ�.\r\n#r40���� �̻�#k�� ��Ƽ���� ������ �� �ֽ��ϴ�.");
                    cm.dispose();
                    return;
                }
                if (!limitPass) {
                    cm.sendOk("��Ƽ�� �� ���� ���� Ƚ���� ��� ������ ��Ƽ���� �ֽ��ϴ�.\r\n�Ϸ翡 5���� ���� �����մϴ�.");
                    cm.dispose();
                    return;
                }
                //
                var eim = em.readyInstance();
                eim.setProperty("Global_StartMap", 955000100+"");
                eim.setProperty("Global_ExitMap", 262000000+"");
                eim.setProperty("Global_MinPerson", 1+"");
                eim.setProperty("Global_RewardMap", 262000000+"");
                eim.setProperty("CurrentStage", "1");
                eim.startEventTimer(1200000);
                cm.prepareAswanMob(955000100);
                var it2 = cm.getClient().getChannelServer().getPartyMembers(cm.getParty()).iterator();
                var quest = MapleQuest.getInstance(7963);
                while (it2.hasNext()) {
                    var chr = it2.next();
                    var count = Integer.parseInt(chr.getQuestNAdd(quest).getCustomData());
                    quest.forceStart(chr, 2100, (count+1)+"");
                }
                eim.registerParty(cm.getPlayer().getParty(), cm.getPlayer().getMap());
            } else {
                
                if (!checkLevel(cm.getPlayer().getLevel(), 40, 200)) {
                    cm.sendOk("��Ƽ�� �� ������ ���� �ʴ� ��Ƽ���� �ֽ��ϴ�.\r\n#r40���� �̻�#k�� ��Ƽ���� ������ �� �ֽ��ϴ�.");
                    cm.dispose();
                    return;
                }
            
                var em = cm.getEventManager("AswanOffSeason");
                var eim = em.readyInstance();
                eim.setProperty("Global_StartMap", 955000100+"");
                eim.setProperty("Global_ExitMap", 262000000+"");
                eim.setProperty("Global_MinPerson", 1+"");
                eim.setProperty("Global_RewardMap", 262000000+"");
                eim.setProperty("CurrentStage", "1");
                eim.startEventTimer(1200000);
                cm.prepareAswanMob(955000100, eim);
                eim.registerPlayer(cm.getPlayer());
                cm.forceStartQuest(7963, (Integer.parseInt(cm.getQuestCustomData(7963))+1)+"");
                cm.dispose();
            }
        } else {
            cm.warp(262030000,0);
            cm.dispose();
        }
    }
}


function checkLevel(cur, min, max) {
    return (cur >= min && cur <= max);
}
