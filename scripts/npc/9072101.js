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
var mainc = "#r#h0##kI am a halo won Yevhen's a witch is responsible for paying secondary weapon.\r\n\r\n";
mainc += "#b#L0##i1352402##l";
mainc += "#b#L1##i1352503##l";
mainc += "#b#L2##i1352604##l";
mainc += "#b#L3##i1099010#";
mainc += "#b#L4##i1352103#";
mainc += "\r\n#b#L5##i1352003#";
mainc += "#b#L6##i1098003#";
mainc += "#b#L7##i1352703#";
mainc += "#b#L8##i1190201#";
mainc += "#b#L9##i1353005\r\n\r\n";
mainc += "#b#L10##i1353104#";
cm.sendSimple(mainc);
} else if (status == 1) {
        if (selection == 0) {
var ovc = "#bOf Luminous ";
ovc += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
ovc += "#b\r\n#L100#Get Luminous Of";
cm.sendSimple(ovc);
}
        if (selection == 1) {
var integer = "#bKaiser integer";
integer += " \r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
integer += "\r\n#b#L200#Get Kaiser integer";
cm.sendSimple(integer);
}
        if (selection == 2) {
var soulring = "#bAngelic Soul Buster ring";
soulring += "\r\n#rJangbichang seat ring that is being fitted if there are other items (below left) items will evaporate.";
soulring += "\r\n#b#L300#Getting Angelic Soul Buster ring";
cm.sendSimple(soulring);
}
	if (selection ==3) {
var dfs = "#bDaemon Slayer Shield Force";
dfs += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
dfs += "\r\n#b#L400#Daemon Slayer Shield Force Download";
cm.sendSimple(dfs);
}
	if (selection ==4) {
var ptc = "#bPhantom carte";
ptc += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
ptc += "\r\n#b#L500#Download Phantom carte";
cm.sendSimple(ptc);
}
	if (selection ==5) {
var mma = "#bMercedes magic arrows";
mma += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
mma += "\r\n#b#L600#Download Mercedes magic arrows";
cm.sendSimple(mma);
}
	if (selection ==6) {
var mss = "#bMikhail Soul Shield";
mss += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
mss += "\r\n#b#L700#Getting Mikhail Soul Shield";
cm.sendSimple(mss);
}

	if (selection ==7) {
var mss = "#bMechanic Magnum";
mss += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
mss += "\r\n#b#L800#Mechanic Magnum";
cm.sendSimple(mss);
}
	if (selection ==8) {
var mss = "#bDaemon Force Shield Avenger";
mss += "\r\n#rIf you have other items on the spot that is being mounted jangbichang item will evaporate.";
mss += "\r\n#b#L900##i1190201##t1190201# Download";
cm.sendSimple(mss);
}
	if (selection ==9) {
var controller = "#bXenon controller";
controller += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
controller += "\r\n#b#L901#Get Xenon controller";
cm.sendSimple(controller);
}
	if (selection ==10) {
var controller = "#bEunwol beads";
controller += "\r\n#rJangbichang if there are other items you place the item being attached to the shield is evaporated.";
controller += "\r\n#b#L902#Eunwol beads driving";
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
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
cm.sendOk("Your job is not to get the item.");
cm.dispose();
}
}
}
}