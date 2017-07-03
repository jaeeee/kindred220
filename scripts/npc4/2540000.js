importPackage(Packages.packet.creators);
importPackage(Packages.packet.skills);
importPackage(Packages.constants);


var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
	if (status == 0) {
		chat = "큰일이 났어!! #b더 시드#k가 붕괴할려고 해!!\r\n\r\n";
		chat += "내가 만든 이 탑이 즉 #b더 시드#k를 사악한 녀석들이 붕괴 시키고 있어! ";
		chat += "어서빨리 사악한 녀석들을 저지하고 #b더 시드#k의 붕괴를 막아줘!!";
		chat += "\r\n\r\n#e#k<파티 퀘스트 더 시드>#n#k";
		chat += "\r\n#L0##b더 시드에 대해서 설명을 해줘.\r\n";
		chat += "#e#k#k<더 시드 입장>#n";
		chat += "\r\n#L2##fUI/UIWindow2.img/EvolvingSystem/BtStart/normal/0#";
		cm.sendSimple(chat);
		} else if (status == 1) {
		if(selection == 0) {
		cm.sendOk("#b더 시드#k 에 대해서는 크게 복잡하지는 않아 나의 힘으로 #b탑 내부#k로 진입하게 되면 수많은 #r몬스터들#k과 싸우게 될거야 그 #r몬스터들#k을 진압해주면 되 하지만 시간이 너무 지체되면 #r몬스터들#k이 너무몰려 실패하게되니 신속하게 클리어 해줘야해.");
		cm.dispose();
		} else if (selection == 1) {
		cm.getPlayer().send(MainPacketCreator.sendPacket("C6 01 D0"));
		cm.getPlayer().send(MainPacketCreator.더시드랭킹());
		cm.dispose();
		} else if (selection == 2) {
		if(cm.getParty() == null) {
		cm.sendOk("더 시드는 파티로만 도전이 가능해.");
		cm.dispose();
		return;
		}
		if(!cm.isLeader()) {
		cm.sendOk("파티장만 입장신청이 가능해.");
		cm.dispose();
		return;
		}
		if(cm.getPlayerCount(992010000) > 0) {
		cm.sendOk("이미 다른 파티가 더 시드에 진입했어 잠시뒤에 와줘.");
		cm.dispose();
		return;
		}
		if (!cm.TheSidCheck()) {
		cm.sendOk("파티원중 누군가가 오늘 하루 입장 횟수를 초과 한거같아");
		cm.dispose();
		return;
		}
		cm.TheSidAdd();
		cm.resetMap(992010000);
		cm.resetMap(992018000);
		cm.resetMap(992030000);
		cm.resetMap(992040000);
		cm.TheSidMap(992010000,992000000,1800000);
		cm.getPlayer().getMap().startTheSid(1);
		cm.dispose();
			}		
		}
	}
}