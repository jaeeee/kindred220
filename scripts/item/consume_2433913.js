/*
제작 : (Dhae) dhae0107
목적 : 공부및 배포용
코드 : 2433913 (예티X페페 데미지스킨)
설명 : 변생 진행 엔피시
*/

function start() {    status = -1;    action(1, 1, 0);}
function action(mode, type, selection) {
    if (mode == -1) {	cm.dispose();	return;	}
    if (mode == 0) {	status --;	}
    if (mode == 1) {	status++;	}

스킨코드 = (2433913);
스킨번호 = (26);

if (status == 0) {
	cm.gainItem(2433913, -1)
	cm.setDamageSkin(26);
	cm.showMessage("데미지 스킨이 설정 되었습니다.");
	cm.dispose();
}
}