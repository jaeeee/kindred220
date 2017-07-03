/*본 스크립트는 스피릿매니저의 스크립트로 만들어진 스크립트입니다.*/
importPackage(Packages.scripting);

var status = -1;
var name;
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
else           
status--;    
if (status == 0) {
var chat = "사랑하는 사람과 결혼이 하고싶으신가요?";
chat += "\r\n그렇다면 잘 찾아오셨습니다.";
chat += "\r\n저는 에프터온라인의 커플들의 결혼을 담당 하고있는 수녀 라고합니다.";
if(cm.getPlayer().getWeId2() == 0) {
chat += "\r\n\r\n#L0##b사랑하는 사람에게 결혼신청을 하겠습니다.#l";
} else {
chat += "\r\n\r\n#L1##b사랑하는 사람과 결혼을 하겠습니다.#l";
}
cm.sendSimple(chat);
} else if (status ==1) {
if(cm.getPlayer().getGender() != 1) {
cm.sendGetText("사랑하시는분의 닉네임을 입력해주세요");
} else {
cm.sendOk("청혼은 남자분이 하는거랍니다~");
return;
}
} else if (status ==2) {
var we = 0;
name = cm.getText();
we = cm.getPlayer().getClient().getChannelServer().getCharacterByName(name);
if(selection == 0) {
if(we == 0) {
cm.sendOk("사랑하시는분이 접속중이 아니네요..");
reutrn;
}
cm.sendOk("사랑하는 분에게 청혼을 요청 하셨어요.\r\n" + name + " 양이 승낙을 한다면 저를 다시 찾아와주세요!!");
we.setWeName(cm.getPlayer().getName());
NPCScriptManager.getInstance().start(we.getClient(), 1002001);
cm.dispose();
} else if (selection == 1) {
if(we.WeCheck()) {
cm.sendOk("자그럼 아름다운 커플 한쌍이 탄생한것을 축하하며!!\r\n결혼을 끝마치도록 하겠습니다.!!\r\n행복하게 사세요!!!!");
we.setWe(cm.getPlayer().getId());
cm.getPlayer().setWe(we.getId());
cm.getPlayer().MakeCoupleRing();
we.MakeCoupleRing();
cm.dispose();
} else {
cm.sendOk("청혼이 취소되셨어요.. 아쉽내요..");
cm.dispose();
}
}
}
}
}