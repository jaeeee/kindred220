importPackage(Packages.packet.creators);
importPackage(Packages.launch);

var status = 0;
var sel;

function start() {
    cm.sendSimple("무엇을 도와줄까?\r\n#b#L0#길드를 만들고 싶어요.#l\r\n#L1#길드를 해체하고 싶어요.#l\r\n#L2#길드 인원수를 늘리고 싶어요.#l\r\n#L3#길드에서 탈퇴하고 싶어요.#l");
}

function action(mode, type, selection) {
    if (mode == -1 || (mode == 0 && status < 2)) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 1) {
            sel = selection;
            if (selection == 0) {
                if (cm.getPlayer().getGuildId() > 0) {
                    cm.sendOk("이미 길드가 있는군. 길드를 해체하고 오던지 탈퇴하고 오게나.");
                    cm.dispose();
                } else
                    cm.sendYesNo("오! 길드를 등록하러 왔군... 길드를 등록하려면 #b150만 메소#k가 필요하다네. 준비는 되어있을 것이라 믿겠네. 자~ 길드를 만들겠는가?");
            } else if (selection == 1) {
                if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                    cm.sendOk("길드장만이 길드를 해체할 수 있다네.");
                    cm.dispose();
                } else {
                    cm.sendYesNo("길드를 정말 해체하고 싶은가?  이런...이런...  한번 해체를 해버리면 자네의 길드는 영원히 삭제되어버린다네. 여러가지 길드 특권도 물론 함께 사라지지. 그래도 하겠는가?");
		}
            } else if (selection == 2) {
                if (cm.getPlayer().getGuildId() < 1 || cm.getPlayer().getGuildRank() != 1) {
                    cm.sendOk("길드장만이 길드를 확장할 수 있다네.");
                    cm.dispose();
                } else {
                    cm.sendYesNo("길드원 수를 #b5#k명 확장하는데 #b500만 메소#k가 든다네, 할텐가?");
		}
            } else if (selection == 3) {
//		cm.getPlayer().getClient().getSession().write(MainPacketCreator.showGuildInfo(null));
//		cm.getPlayer().setGuildId(0);
//		cm.getPlayer().saveGuildStatus();
//		cm.getPlayer().getMap().broadcastMessage(cm.getPlayer(), MainPacketCreator.removePlayerFromMap(cm.getPlayer().getId()), false);
//		cm.getPalyer().getMap().broadcastMessage(cm.getPlayer(), MainPacketCreator.spawnPlayerMapobject(cm.getPlayer(),cm.getPlayer().getSoulSkillId()), false);
                ChannelServer.leaveGuild(cm.getPlayer().getMGC());
		cm.dispose();
            }
        } else if (status == 2) {
            if (sel == 0 && cm.getPlayer().getGuildId() <= 0) {
                cm.genericGuildMessage(3);
            } else if (cm.getPlayer().getGuildId() > 0 && cm.getPlayer().getGuildRank() == 1) {
                if (sel == 1) {
                    cm.disbandGuild();
                } else if (sel == 2) {
                    cm.increaseGuildCapacity();
                }
            }
            cm.dispose();
        }
    }
}
