


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	페이 에 의해 만들어 졌습니다.

	엔피시아이디 : 2152019

	엔피시 이름 : 에델슈타인 게시판

	엔피시가 있는 맵 : 팩스 스타일 : 팩스 스타일 광장 (101000100)

	엔피시 설명 : MISSINGNO


*/

var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
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
	    var cps ="#b[#h #] : #d퀘스트#k를 진행하고싶은데 무슨 퀘스트를 하지.....?\r\n\r\n";
            cps += "#e                      <퀘스트 목록>   #n                            ";
            cps += "#L1##b#e[팩스 스타일]  #k#e팩스의 부탁#n\r\n\r\n";
            cps += "#l   보상 : #e<#v2048214# #t2048214# 1개>#n#l\r\n";
            cps += "#L5##b#e[팩스 스타일]  #k#e로즈 로즈 I#n\r\n\r\n";
            cps += "#l   보상 : #e<#v2048305# 에디셔널 잠재능력 부여 주문서 1개>#n#l\r\n";
            cps += "#L6##b#e[팩스 스타일]  #k#e로즈 로즈 II#n\r\n\r\n";
            cps += "#l   보상 : #e<#v2049360# #t2049360# 1개>#n#l\r\n";
            cps += "#L2##b#e[팩스 스타일]#k  #e용사의 시험#k#e#n\r\n\r\n";
            cps += "#l   보상 : #e<#v4310058# #t4310058# 1개>\r\n";
            cps += "#L3##b[팩스 스타일]#k  #e아도비스의 임무#k#e#n\r\n\r\n";
            cps += "#l   보상 : #e<#v2049153# #t2049153# 1개>#n\r\n";
            cps += "#L4##b#e[팩스 스타일]#k  #e팩스 스타일 월드의 소란#k#e#n\r\n\r\n";
            cps += "#l   #e            < 4개 中 택 1>\r\n#n";
            cps += "#l   보상 : #e<#v1122150# #t1122150# 1개>\r\n#n   옵션 : #r[올스탯:150/공마50/업횟50]#k#n\r\n";
            cps += "#l   보상 : #e<#v1112735# #t1112735# 1개>\r\n#n   옵션 : #b[올스탯:100/공마50/업횟0]#k#n\r\n";
            cps += "#l   보상 : #e<#v1112665# #t1112665# 1개>\r\n#n   옵션 : #g[올스탯:50/공마40/업횟40]#k#n\r\n";
            cps += "#l   보상 : #e<#v1112664# #t1112664# 1개>\r\n#n   옵션 : #d[올스탯:50/공마30/업횟30]#k#n\r\n";
	    cm.sendSimple(cps);

		} else if (selection == 1) {
		cm.dispose();
		cm.openNpc(1061006);
		} else if (selection == 2) {
		cm.dispose();
		cm.openNpc(9075111);
		} else if (selection == 3) {
		cm.dispose();
		cm.openNpc(2030013);
		} else if (selection == 4) {
		cm.dispose();
		cm.openNpc(1022000);
		} else if (selection == 5) {
		cm.dispose();
		cm.warp(910130102, 0);
		} else if (selection == 6) {
		cm.dispose();
		cm.warp(910530101, 0);
		}
	}
}