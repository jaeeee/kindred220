importPackage(Packages.launch.world);
    
function start() {
    status = -1;
    if (WorldCommunity.startTotoTime > 0) cm.sendSimple("#e������ ����#n\r\n#r" + WorldCommunity.team_1 + "(" + WorldCommunity.team_1_rate + "��)#k VS #b" + WorldCommunity.team_2 + "(" + WorldCommunity.team_2_rate + "��)\r\n#d\r\n#L0# ����#l\r\n#L1# �����������?#l");
    else {
        cm.sendOk("������ ���䰡 ���������� �ʽ��ϴ�.");
        cm.dispose();
    }
}

function action(m, t, s) {
    if (m != 1) {
        cm.dispose();
        return;
    }
    status++;
    if (s == 1 && status < 1) {
        cm.sendOk("#b����������#k�� ������ ��⿡ �޼Ҹ� �ɾ� ������ ���� �̱�� �� ���� ������ŭ �޼Ҹ� ȹ���ϴ� ������ #r����#k�Դϴ�.\r\n#r#e�����ǻ��� : 19���� ���� ��̵��� ������ �� �����ϴ�.");
        cm.dispose();
    } else if (cm.getPlayer().getKeyValue2("SportsToto_Team") != -1 && cm.getPlayer().getKeyValue2("SportsToto_Bet") != -1) {
        cm.sendOk((cm.getPlayer().getKeyValue2("SportsToto_Team") == 1 ? WorldCommunity.team_1 : WorldCommunity.team_2) + " ���� " + cm.getPlayer().getKeyValue2("SportsToto_Bet") + " �޼Ҹ� �ż̳׿�. ����� ���ϴ�!");
        cm.dispose();
    } else {
        if (status == 0) {
            cm.sendSimple("� ���� ������ �Ͻðڽ��ϱ�?\r\n#L1# #r" + WorldCommunity.team_1 + "(" + WorldCommunity.team_1_rate + "��)#l#k#l\r\n#b#L2# " + WorldCommunity.team_2 + "(" + WorldCommunity.team_2_rate + "��)#l");
            cm.getPlayer().initToto();
        } else if (status == 1) {
            cm.getPlayer().setKeyValue2("SportsToto_Team", s);
            cm.sendGetNumber("�󸶸� �����Ͻðڽ��ϱ�?", 50000, 0, cm.getPlayer().getMeso());
        } else if (status == 2) {
            if (cm.getPlayer() < s) {
                cm.sendOk("�޼Ұ� �����մϴ�.");
                cm.dispose();
                return;
            }
            cm.getPlayer().setKeyValue2("SportsToto_Bet", s);
            cm.getPlayer().gainMeso(-s);
        }
    }
}