


/*

	퓨어 소스  팩의 스크립트 입니다. (제작 : 주크블랙) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	asdwdbd 에 의해 만들어 졌습니다.

	엔피시아이디 : 1012008

	엔피시 이름 : 카이지

	엔피시가 있는 맵 : 헤네시스 : 헤네시스게임공원 (100000203)

	엔피시 설명 : 미니게임 마스터


*/

var select = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    if (status == 0) {
var mainc = "안녕? 난 히나스타일 보조무기 지급 엔피시야~\n즐거운 하루 보내~";
mainc += "#r\n\r\n#b#L0#루미너스 오브#l";
mainc += "\r\n#b#L1#카이저 정수#l";
mainc += "\r\n#b#L2#엔젤릭 버스터 소울링#l";
mainc += "\r\n#b#L3#데몬슬레이어 포스쉴드";
mainc += "\r\n#b#L4#팬텀 카르트";
mainc += "\r\n#b#L5#메르세데스 마법화살";
mainc += "\r\n#b#L6#미하일 소울실드";
mainc += "\r\n#b#L7#데몬어벤져 포스쉴드";
cm.sendSimple(mainc);
} else if (status == 1) {
        if (selection == 0) {
var ovc = "#b루미너스 오브 ";
ovc += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
ovc += "#b\r\n#L100#루미너스 오브 받기";
cm.sendSimple(ovc);
}
        if (selection == 1) {
var integer = "#b카이저 정수";
integer += " \r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
integer += "\r\n#b#L200#카이저 정수 받기";
cm.sendSimple(integer);
}
        if (selection == 2) {
var soulring = "#b엔젤릭 버스터 소울링";
soulring += "\r\n#r장비창 방패자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
soulring += "\r\n#b#L300#엔젤릭 버스터 소울링 받기";
cm.sendSimple(soulring);
}
	if (selection ==3) {
var dfs = "#b데몬슬레이어 포스쉴드";
dfs += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
dfs += "\r\n#b#L400#데몬슬레이어 포스쉴드 받기";
cm.sendSimple(dfs);
}
	if (selection ==4) {
var ptc = "#b팬텀 카르트";
ptc += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
ptc += "\r\n#b#L500#팬텀 카르트 받기";
cm.sendSimple(ptc);
}
	if (selection ==5) {
var mma = "#b메르세데스 마법화살";
mma += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
mma += "\r\n#b#L600#메르세데스 마법화살 받기";
cm.sendSimple(mma);
}
	if (selection ==6) {
var mss = "#b미하일 소울실드";
mss += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
mss += "\r\n#b#L700#미하일 소울쉴드 받기";
cm.sendSimple(mss);
}
	if (selection ==7) {
var mss = "#b데몬어벤져 포스쉴드";
mss += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
mss += "\r\n#b#L800#데몬어벤져 포스쉴드 받기";
cm.sendSimple(mss);
}

} else if (status == 2) {
        if (selection == 100) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352400);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352401);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352402);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352403); //루미너스 오브
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}



        if (selection == 200) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352500);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352501);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352502);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352503);  //카이저 정수
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}



        if (selection == 300) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352601);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352602);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352603);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352604);  //엔버 소울링
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}


        if (selection == 400) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1099001);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1099002);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1099003);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1099004); //데몬 포스쉴드
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}




        if (selection == 500) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352100);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352101);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352102);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352103); //팬텀 카르트
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}




        if (selection == 600) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1352000);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1352001);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1352002);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1352003); //메르 마법화살
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}


        if (selection == 700) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1098000);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1098001);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1098002);
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1098003); //미하일 소울실드
// cm.fakeRelog();
// cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}

        if (selection == 800) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip2(-10, 1099006);

cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip2(-10, 1099007);

cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip2(-10, 1099008);

cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() <= 200) {
cm.addEquip2(-10, 1099009); //미하일 소울실드

cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}



}
}