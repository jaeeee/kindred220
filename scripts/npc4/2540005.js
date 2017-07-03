importPackage(Packages.packet.creators);
importPackage(Packages.client);
importPackage(Packages.constants);
importPackage(Packages.launch.world);

var status = -1;

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
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
	if(cm.getPlayer().getMapId() == 992010000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("거대 거미까지 처치하다니 너 정말 강하구나!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("여기까지 잘 해주었어 정말 고마워!! 하지만 더 시드는 여기서 끝이아니야 #b" + cm.getPlayer().getName() + "#k 너가 원한다면 다음 스테이지로 보내줄수도 있어 하지만 원하지 않으면 이제 로비로 보내주도록 해줄께 어떻게 할래?\r\n\r\n#L0##b로비로 돌아간다.\r\n#L1#다음 층으로 올라간다.#l");
	} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초뒤 로비로 이동됩니다."));
	cm.getPlayer().getMap().TheSidClear(10,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992018000,true);
	cm.getPlayer().getMap().startTheSid(5);
	cm.dispose();
			}
		}
	} else if (cm.getPlayer().getMapId() == 992018000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("양철 나무꾼까지 처치하다니 너 정말 강하구나!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("여기까지 잘 해주었어 정말 고마워!! 하지만 더 시드는 여기서 끝이아니야 #b" + cm.getPlayer().getName() + "#k 너가 원한다면 다음 스테이지로 보내줄수도 있어 하지만 원하지 않으면 이제 로비로 보내주도록 해줄께 어떻게 할래?\r\n\r\n#L0##b로비로 돌아간다.\r\n#L1#다음 층으로 올라간다.#l");
		} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초뒤 로비로 이동됩니다."));
	cm.getPlayer().getMap().TheSidClear(20,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992030000,true);
	cm.getPlayer().getMap().startTheSid(6);
	cm.dispose();
			}
		}
	} else if(cm.getPlayer().getMapId() == 992030000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("겁에 질린 사자까지 처치하다니 너 정말 강하구나!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("여기까지 잘 해주었어 정말 고마워!! 하지만 더 시드는 여기서 끝이아니야 #b" + cm.getPlayer().getName() + "#k 너가 원한다면 다음 스테이지로 보내줄수도 있어 하지만 원하지 않으면 이제 로비로 보내주도록 해줄께 어떻게 할래?\r\n\r\n#L0##b로비로 돌아간다.\r\n#L1#다음 층으로 올라간다.#l");
		} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초뒤 로비로 이동됩니다."));
	cm.getPlayer().getMap().TheSidClear(30,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992040000,true);
	cm.getPlayer().getMap().startTheSid(7);
	cm.dispose();
			}
		}
	} else if (cm.getPlayer().getMapId() == 992040000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("허수아비까지 처치하다니 너 정말 강하구나!!");
	cm.dispose();
	return;
	}
	cm.sendSimple("여기까지 잘 해주었어 정말 고마워!! 하지만 더 시드는 여기서 끝이아니야 #b" + cm.getPlayer().getName() + "#k 너가 원한다면 다음 스테이지로 보내줄수도 있어 하지만 원하지 않으면 이제 로비로 보내주도록 해줄께 어떻게 할래?\r\n\r\n#L0##b로비로 돌아간다.\r\n#L1#다음 층으로 올라간다.#l");
		} else if (status == 1) {
	if(selection == 0) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초뒤 로비로 이동됩니다."));
	cm.getPlayer().getMap().TheSidClear(40,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		} else if (selection == 1) {
	cm.allPartyWarp(992050000,true);
	cm.getPlayer().getMap().startTheSid(8);
	cm.dispose();
			}
		}
	} else if (cm.getPlayer().getMapId() == 992050000) {
	if(status == 0) {
	if(!cm.isLeader()) {
	cm.sendOk("더 시드를 구한 #b" + cm.getPlayer() + "#k 용사 님이라고 불러줄까나~");
	cm.dispose();
	return;
	}
	cm.sendSimple("더 시드를 구한걸 정말 축하해!! 이제 이탑을 구하는 여행도 끝이났어!! 다시한번더 정말로 축하해 그리고 고마워!\r\n\r\n#L0##b로비로 돌아간다.#l");
		} else if(status == 1) {
	cm.getPlayer().getMap().broadcastMessage(UIPacket.showInfo("3초뒤 로비로 이동됩니다."));
	cm.getPlayer().getMap().TheSidClear(50,cm.getPlayer());
	cm.removeNpc(2540005);
	cm.dispose();
		}
	}
}