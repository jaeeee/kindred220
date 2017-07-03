importPackage(java.lang);
importPackage(Packages.handling.world);
importPackage(Packages.handling.server.community);
importPackage(java.lang);

var status = 0;
var map = 262030100;
var lvmin = 120; //���� �ּҷ���
var lvmax = 200; //���� �ִ뷹��

var off = false;
var on = false;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status <= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) status++;
    else status--;
    if (status == 0) {
        cm.sendSimple("#e<�ƽ��� : ���� ������> #n\r\n������ ���� �����ϰ�, �ƽ����� ������ �ع��� �̷ﳾ �غ�� �Ǽ̽��ϱ�? �ٸ� ������ �ִ� ��������� �ִٸ�, ��� �� �ּ���.#b\r\n\r\n#L0#���� ������ ���� ��û�� �Ѵ�.#l");
    } else if (status == 1) {
		if (selection == 0) {
			if (cm.getParty() == null) {
				cm.sendOk("���Ե� ��Ƽ�� �����ϴ�.");
				cm.dispose();
				return;
			}
			if (cm.getParty().getExpeditionId() == -1) {
				cm.sendOk("���Ե� ��Ƽ�� �����밡 �����ϴ�.");
				cm.dispose();
				return;
			}
			var chrs = cm.getClient().getChannelServer().getMapFactory().getMap(map).getCharacters().iterator();
			while (chrs.hasNext()) {
				var player = chrs.next();
				if (player.getParty().getExpeditionId() != cm.getParty().getExpeditionId()) {
					off = true; //�ٸ� ������
				} else if (player.getParty().getExpeditionId() == cm.getParty().getExpeditionId()) {
					on = true; //���� ������
				}
			}
            if (!off && World.Party.getExped(cm.getParty().getExpeditionId()).getLeader() == cm.getPlayer().getId()) {
				cm.sendSimple("#e<���� ������>#n\r\n���Ͻô� ��带 �������ּ���.\r\n\r\n#L0#�븻 ��� ( ���� 120 �̻� )#l\r\n#L1#�ϵ� ��� ( ���� 170 �̻� )#l");
			} else if (World.Party.getExped(cm.getParty().getExpeditionId()).getLeader() != cm.getPlayer().getId()) {
				cm.sendOk("���������� ��û�Ͻñ� �ٶ��ϴ�.");
				cm.dispose();
			}
		}
	} else if (status == 2) {
		if (cm.getParty() == null || cm.getParty().getExpeditionId() == -1) {
			cm.sendOk("���Ե� ��Ƽ�� �����밡 �����ϴ�.");
			cm.dispose();
		}
		if (selection == 0) {
			if (World.Party.getExped(cm.getParty().getExpeditionId()).getType() != ExpeditionType.HILA) {
				cm.sendOk("���������� �������� �ʾҰų� ȥ���� �����뿡 �ҼӵǾ����� �ʽ��ϴ�.");
				cm.dispose();
				return;
			}
			if (World.Party.getExped(cm.getParty().getExpeditionId()).getAllMembers() < 2) {
				cm.sendOk("�����밡 2�� �̻����� �����Ǿ�� ������ �� �ִ�..");
				cm.dispose();
				return;
			}
			//if (cm.getPlayerCount(map) == 0) 
				//cm.getClient().getChannelServer().getMapFactory().disposeMap(map);
			if (cm.getPlayerCount(Integer.parseInt(map)) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 100) == 0 && cm.getPlayerCount(Integer.parseInt(map) + 200) == 0) {
				map = Integer.parseInt(map);
				
				var em = cm.getEventManager("AswanHillah");
				var eim = em.readyInstance();
				for (var i = 0; i < 3; i++) {
					cm.prepareAswanMob(Integer.parseInt(map) + (i * 100), em);
				}
				eim.setProperty("Global_StartMap", map);
				eim.setProperty("Global_ExitMap", "262010000");
				eim.setProperty("Global_MinPerson", "1");
				eim.setProperty("Global_RewardMap", "262010000");
				eim.setProperty("CurrentStage", "1");
				eim.setProperty("StageMob", "1");
				eim.startEventTimer(1200000);
				eim.registerExpedition(World.Party.getExped(cm.getParty().getExpeditionId()), cm.getPlayer().getMap());
				//cm.PartyDayAdd("aswan");
				cm.dispose();
				return true;
			} else {
				cm.sendOk("������ �̹� ������ ���� �����ϰ��ֽ��ϴ�.");
				cm.dispose();
				return true;
			}
		}
	}
}