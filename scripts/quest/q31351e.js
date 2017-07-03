/*

	퓨어 소스 팩의 스크립트 입니다. (제작 : 엘도라도)

	엔피시아이디 : 
	
	엔피시 이름 : 키쿠

	엔피시가 있는 맵 : 수련의 숲1

	엔피시 설명 : 시그너스 튜토리얼


*/

importPackage(Packages.server.quest);

var status = -1;



function end(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            qm.sendOK("고맙네 ! 내몸속 보스를 처치해주셧군!!");
        } else if (status == 1) {          
	    qm.forceCompleteQuest();
            qm.gainExp(4084953);
	    qm.dispose();
        }
    }
}