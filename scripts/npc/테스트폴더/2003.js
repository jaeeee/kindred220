var status = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }
    
    if (status == 0) {
var str = "";
for (var i = 0; i < cm.getPlayer().getInnerSkills().size(); i++) {
     str += cm.getPlayer().getInnerSkills().get(i).getSkillId() + ", " + cm.getPlayer().getInnerSkills().get(i).getSkillLevel() + "/" + cm.getPlayer().getInnerSkills().get(i).getMaxLevel() + ", " + cm.getPlayer().getInnerSkills().get(i).getRank() + "\r\n";
}
cm.sendOk(str);
        //cm.sendOk("내 사전에 못따는 자물쇠는 없다해~ 열지 못하는 상자가 있다면 무엇이든 가져오라해~");
        cm.dispose();
    }
}

