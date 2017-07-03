


/*

	* 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	* (Guardian Project Development Source Script)

	팬더 에 의해 만들어 졌습니다.

	엔피시아이디 : 1064017

	엔피시 이름 : 벨룸

	엔피시가 있는 맵 : 루타비스 : 심연의 동굴 (105200410)

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
        return;
    }
    if (mode == 0) {
        status --;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNextS("윽.....",2);
} else {
	cm.sendNext("어리석은 자여! 어찌 #r'그 분'#k의 뜻에 반하려 하는가!");
}    
} else if (status == 1) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNext("겨우 이정도 공격에 나가떨어지다니, 네가 얼마나 허무맹랑한 소리를 해댔는지 이제야 알겠느냐?");
} else {
	cm.sendNextS("누,누구?!",2);
}
} else if (status == 2) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNext("이곳에는 나 말고도 세 명의 봉인의 수호자가 더 있다. 세계수에게 걸린 봉인을 풀고 싶다면 우리 모두를 쓰러뜨려야만 한다.하지만 네 힘으로는 그 중 하나도 이길 수 없을 것이다.");
} else {
	cm.sendNext("나는 위대하신 #r'그 분'#k을 섬기는 봉인의 수호자 #b벨룸#k이다. 어리석은 자여, 어찌 이곳에 발을 들여놓아 #r'그 분'#k의 심기를 어지럽히느냐.");
}
} else if (status == 3) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.sendNext("네가 얼마나 보잘것없는 존재인지 알았다면 썩 꺼져라! 네 미천한 목숨, 이번만은 살려주마. 다시는 이곳에 발을 들이지 말거라.내게 두 번 다시 자비란 없다.");
} else {	
	cm.sendNextS("봉인의 수호자? 혹시 세계수에 봉인을 건 사람이 너야?",2);
}
} else if (status == 4) {
if(cm.getPlayer().getKeyValue("ba") == "attack") {
	cm.warp(105200001);
	cm.dispose();
	cm.openNpc(1064001);	
} else {
	cm.sendNext("봉인은 #r'그 분'#k께서 행하신 일이다.나는 #r'그 분'#k의 명에 따라 세계수의 봉인을 지키고 있을 뿐이다.");
}
} else if (status == 5) {
	cm.sendNextS("#r'그 분'#k이라는 게 혹시 한 쪽 눈에 안대를 했따는 바로 그 마족?",2); 
} else if (status == 6) {
	cm.sendNext("닥쳐라! 너 따위가 감히 입에 올릴 수 있는 분이 아니시다! 위대하신 #r'그 분'#k의 힘 앞에 너 따위는 먼지만도 못한 존재이니,너 또한 #r'그 분'#k의 발 앞에 무릎을 꿇어야 할 것이다!");
} else if (status == 7) {
	cm.sendNextS("나는 그와 싸우려는 게 아냐. 그와 같은 마족인 데몬 슬레이어도 우리의 동료가 되어 뜻을 함께 하고 있어. 그러니까 너희도 우리와 함께.....",2);
} else if (status == 8) {
	cm.sendNext("감히 더러운 배신자놈을 #r'그 분'#k과 엮으려 하다니,네 놈이 진정 죽고 싶은 게로구나!");
} else if (status == 9) {
	cm.sendNextS("말로 설득하는 건 어려울 것 같군. 그렇다면 제압한 후 정보를 알아내는 수밖에!",2);
} else if (status == 10) {
	cm.sendNext("너 따위가 나를 제압해? 그렇다면 내 공격을 막아보아라!");
	cm.getPlayer().setKeyValue("ba","attack");
} else if (status == 11) {
	cm.getPlayer().setHp2();
	cm.dispose();
}
}
