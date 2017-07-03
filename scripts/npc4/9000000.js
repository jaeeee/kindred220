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
var mainc = "#r#h0##k님 저는 보조무기지급을 담당하고 있습니다.\r\n\r\n";
mainc += "#b#L0##i1352403##l";
mainc += "#b#L1##i1352503##l";
mainc += "#b#L2##i1352604##l";
mainc += "#b#L3##i1099009#";
mainc += "#b#L4##i1352103#";
mainc += "\r\n#b#L5##i1352003#";
mainc += "#b#L6##i1098003#";
mainc += "#b#L7##i1352703#";
mainc += "#b#L8##i1190201#";
mainc += "\r\n#b#L9##i1353004#";
mainc += "#b#L10##i1353104#";


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
soulring += "\r\n#r장비창 반지 자리(왼쪽아래)에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
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
var mss = "#b메카닉 매그넘";
mss += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
mss += "\r\n#b#L800#메카닉 매그넘";
cm.sendSimple(mss);
}
	if (selection ==8) {
var mss = "#b데몬어벤져 포스쉴드";
mss += "\r\n#r장비창 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
mss += "\r\n#b#L900##i1190201##t1190201# 받기";
cm.sendSimple(mss);
}
	if (selection ==9) {
var controller = "#b제논 컨트롤러";
controller += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
controller += "\r\n#b#L901#제논 컨트롤러 받기";
cm.sendSimple(controller);
}
	if (selection ==10) {
var controller = "#b은월 구슬";
controller += "\r\n#r장비창 방패 자리에 다른아이템이 있을경우 장착중인 해당아이템은 증발합니다.";
controller += "\r\n#b#L902#은월 구슬 받기";
cm.sendSimple(controller);
}
} else if (status == 2) {
        if (selection == 100) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352400, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352401, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352402, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
} else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352403, 0, 0, 0, 0, 0, 0); //루미너스 오브
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}



        if (selection == 200) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352501, 0, 10, 10, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352502, 0, 20, 20, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352503, 0, 30, 30, 0, 0, 0);  //카이저 정수
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}



        if (selection == 300) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-12, 1352601, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-12, 1352602, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-12, 1352603, 0, 20, 20, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-12, 1352604, 0, 30, 30, 0, 0, 0);  //엔버 소울링
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}


        if (selection == 400) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1099001, 0, 0, 0, 0, 0, 20);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1099002, 0, 0, 0, 0, 0, 50);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1099003, 0, 20, 20, 0, 0, 80);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1099004, 0, 30, 30, 0, 0, 110); //데몬 포스쉴드
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}


       if (selection == 902) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 20);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1353101, 0, 0, 0, 0, 0, 50);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1353102, 0, 20, 20, 0, 0, 80);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1353103, 0, 30, 30, 0, 0, 110); //데몬 포스쉴드
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}




        if (selection == 500) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352101, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352102, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352103, 0, 0, 0, 0, 0, 0); //팬텀 카르트
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}




        if (selection == 600) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352001, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352002, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352003, 0, 0, 0, 0, 0, 0); //메르 마법화살
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}


        if (selection == 700) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1098000, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1098001, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1098002, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1098003, 0, 0, 0, 0, 0, 0); //미하일 소울실드
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}

if (selection == 800) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1352700, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1352701, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1352702, 0, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1352703, 0, 0, 0, 0, 0, 0); //메카닉 매그넘
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}
if (selection == 900) {
			cm.gainItem(1190201, 1);
cm.dispose();
}
if (selection == 901) {
if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 30) {
cm.addEquip(-10, 1353001, 1, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 60) {
cm.addEquip(-10, 1353002, 2, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 100) {
cm.addEquip(-10, 1353003, 5, 0, 0, 0, 0, 0);
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getLevel() < 250) {
cm.addEquip(-10, 1353004, 10, 0, 0, 0, 0, 0); //제논 컨트롤러
cm.fakeRelog();
cm.updateChar();
cm.dispose();
}else{
cm.sendOk("당신의 직업으로는 해당 아이템을 받을 수 없습니다.");
cm.dispose();
}
}
}
}