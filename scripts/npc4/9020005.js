importPackage(Packages.client);
importPackage(Packages.constants);


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
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
	var chat = "당신의 전문기술 직업은 #b";
	if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
        chat += "대장장이#k 입니다.#b";
        chat += "\r\n\r\n#L1##e장비 제작 관련 퀘스트 START#n";
if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
         chat += "#e#r <진행중>#n#k"
}
}
        if (cm.getProfession(2) == MapleProfessionType.ACC.getValue()) {
        chat += "쥬얼메이커#k 입니다.#b";
        chat += "\r\n\r\n#L2##e장신구 제작 관련 퀘스트 START#n";
if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
         chat += "#e#r <진행중>#n#k"
}
}
	if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
        chat += "연금술사#k 입니다.#b";
        chat += "\r\n\r\n#L3##e연금술 관련 퀘스트 START#n";
if (cm.haveItem(4033324,1) || cm.haveItem(4220046,1) || cm.haveItem(4220178,1) || cm.haveItem(4220179,1) || cm.haveItem(4220175,1) || cm.haveItem(4220045,1)) {
         chat += "#e#r <진행중>#n#k"
}
}

        if (cm.getProfession(1) == 0 && cm.getProfession(2) == 0) {
	chat += "없네요..";
	chat += "\r\n\r\n퀘스트를 수행하시려면 전문기술 ( 장비제작 / 장신구제작 / 연금술 ) 을 배우고 오십시오.";
}
	cm.sendSimple(chat);
 }else if (status == 1){
	if (selection == 1){
cm.dispose();
cm.openNpc(9000134);
	}
	else if (selection == 2){
cm.dispose();
cm.openNpc(9000135);
	}
	else if (selection == 3){
	cm.dispose();
cm.openNpc(9000140);

		}
	}
}
