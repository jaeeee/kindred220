var status = 0;
var i = 0;
importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
var rank = DatabaseConnection.getConnection().prepareStatement("SELECT * FROM timetower WHERE id = 0 ORDER BY number DESC LIMIT 1").executeQuery();
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
		var chat = "시간에 끝이란건 존재하는거라고 생각하시나요..\r\n";
		chat += "\r\n지금 시공간이 심각하게 뒤틀려 ";
		chat += "영원의 시간이 뒤틀려 끝이 생길려고 합니다. ";
		chat += "누구의 소행인지는 모르지만 이 뒤틀림을 다시 본래의 모습으로 되돌려야만 합니다. ";
		chat += "부디 일그러진 시간의 탑을 구해주시겠습니까 용사여...\r\n\r\n";
		chat += "#e<그랜드 퀘스트>#n\r\n";
		chat += "\r\n#b퀘스트 : 일그러진 시간의탑 클리어#k";
                while (rank.next()) {
		i = rank.getInt("number");
		chat += "\r\n#d현재 " +rank.getString("charid") + " 님의 파티가 " + rank.getInt("number") + " 층까지 클리어 하였습니다.#k\r\n\r\n";
		}
		chat += "#L0##b일그러진 시간의탑에 대해서 설명을 듣고싶습니다.#l\r\n";
		chat += "#L1#일그러진 시간의탑을 원래모습으로 되돌리러 가겠습니다.#l";
                chat += "";
		cm.sendSimple(chat);
		} else if (status == 1) {
		if(selection == 0) {
			cm.sendOk("일그러진 시간의탑은 모든유저 공통의 그랜드 퀘스트입니다.\r\n일그러진 시간의탑은 100층까지 존재하며 50층 이상은 클리어 할때마다 아이템박스가 지급됩니다.\r\n#b(아이템박스에서 나올 아이템은 클리어한 층마다 달라집니다)#k\r\n일그러진 시간의탑은 다른유저가 1층을 클리어하면 다음부턴 2층으로 바로 올라갈수 있습니다.\r\n하지만 클리어에 실패했을시 해당유저는 하루간 일그러진 시간의탑 도전에 응할수 없습니다.\r\n하루 최대 2번 도전이 가능하며 일그러진 시간의탑은 파티로만 입장이 가능합니다.");
			cm.dispose();
		} else if (selection == 1) {
				cm.sendYesNo("#b일그러진 시간의탑  <" + (i + 1) + "> 층에 도전 해보시겠습니까..");
			} 
		} else if (status == 2) {
			if(cm.getParty() == null) {
				cm.sendOk("일그러진 시간의탑은 파티로만 도전이 가능합니다.");
				cm.dispose();
				return;
			} 
			if(!cm.isLeader()) {
				cm.sendOk("일그러진 시간의탑 도전은 파티장만이 신청할수 있습니다.");
				cm.dispose();
				return;
			}
			    var q = cm.getEventManager("TimeTower");
                            if (!cm.TimeTowerCheck()) {
			        cm.sendOk("파티원중 오늘 도전가능한 횟수를 초과한 멤버가 있습니다.");
                                cm.dispose();
                            } else {
                                cm.TimeTowerAdd();
			        q.startInstance(cm.getParty(), cm.getMap());
                                cm.dispose();
			}
		}
	}
}