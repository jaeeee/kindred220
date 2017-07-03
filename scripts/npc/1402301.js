var status = -1;
var bluenote

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

if (status == 0) {
cm.sendGetText("#e#d버프코드#k#k를입력해주세요");
} 
else if (status == 1) {

text = cm.getText();
bluenote = text; 

cm.giveBuff(bluenote,20);
cm.sendOk("버프지급 완료");
cm.dispose();
}
}
}
