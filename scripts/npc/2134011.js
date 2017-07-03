/*
아야노(riel0216)
*/
var status = -1;

function start() {
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
var choose ="";
	choose +="#L1##e전사상점#k#l";
	choose +="#L2##e마법사상점#k#l";
        choose +="#L3##e궁수상점#k#l";
	choose +="#L4##e도적상점#k#l\r\n";     
	choose +="#L5##e해적상점#k#l";
	choose +="#L6##e공용상점#k#l\r\n";

 cm.sendSimple(choose);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.enterCS();
 } else if (s == 1) {
  cm.openNpc (1032200);
 } else if (s == 2) {
  cm.openNpc (2152009);
 } else if (s == 3) {
  cm.openNpc (2010009);
 } else if (s == 4) {
  cm.openNpc (2008);
 } else if (s == 5) {
  cm.openNpc (9001001);
 } else if (s == 6) {
  cm.openNpc (1032207);
        }
    }
}