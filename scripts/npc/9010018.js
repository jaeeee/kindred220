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
var min = 1;
var max = 100000000;
cm.sendGetNumber("같은 숫자 2개 = 배팅 금액의 2배\r\n같은 숫자 3개 = 배팅 금액의 5배\r\n숫자 7 3개 = 배팅 금액의 10배",min,min,max);
}
else if (status == 1) {
cm.gainMeso(-selection);
var var1 = Math.floor(Math.random()*10)
var var2 = Math.floor(Math.random()*10)
var var3 = Math.floor(Math.random()*10)
var var4 = "아쉽게도 실패입니다";

if (var1 == 7 && var2 == 7 && var3 == 7) {
var4 = "숫자 7이 3개입니다\r\n#b"+selection*10+" 메소#k를 얻었습니다"
cm.gainMeso(selection*10);
} else if (var1 == var2 && var2 == var3) {
var4 = "같은 숫자가 3개입니다\r\n#b"+selection*5+" 메소#k를 얻었습니다"
cm.gainMeso(selection*5);
} else if (var1 == var2 || var1 == var3 || var2 == var3) {
var4 = "같은 숫자가 2개입니다\r\n#b"+selection*2+" 메소#k를 얻었습니다"
cm.gainMeso(selection*2);
}

var chat = "#e"+var1+" "+var2+" "+var3+"#n\r\n"+var4
cm.sendNext(chat);
}
else {
cm.dispose();
}

}
