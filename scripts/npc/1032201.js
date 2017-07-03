importPackage
var status = 0;
var sele = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
	    var chat = "안녕하세요? #b" +cm.getPlayer().getName() + "#k님\r\n저는 에프터월드에서 쿠폰을 관리하고있는 #r라니아#k 라고해요.\r\n";
            chat += "#L2##b쿠폰이란게 뭐야??#l\r\n";
	    chat += "#L1##b쿠폰을 사용하겠어!!#l\r\n";
	    if(cm.getPlayer().getGMLevel() >= 6)
            chat += "#L0#쿠폰 번호 제작#l";
	    cm.sendSimple(chat);
        } else if (status == 1) {
	    sele = selection;
	    if (sele == 0) {
    	    	cm.sendGetText("아이템,갯수");
            } else if (sele == 1) {
    	    	cm.sendGetText("#r에프터매니저#k #b님에게서\r\n발급받으신 쿠폰번호를 입력해주세요\r\n#r(EX:ABCDE-12345-FGHIJ-67891-KLNMO)");
	    } else if (sele == 2) {
                cm.sendOk("#b쿠폰#k에대해서 궁금하신가봐요?\r\n그렇다면 #r라니아#k 가 자세하게 설명을 해드릴게요.\r\n#b쿠폰#k은 #d에프터매니저#k님만 발급이 가능하며\r\n#b쿠폰#k을등록하면 아이템을 휙득할수있습니다.\r\n#b쿠폰#k에있는 아이템은 쿠폰마다 다르며\r\n#r한번 사용한 쿠폰 은 중복사용이 불가능합니다.");
                cm.dispose();
        } 
      } else if (status == 2) {
	    itemSelection = selection;
	    if (sele == 0) {
	      cm.sendOk(cm.쿠폰등록(cm.getText()));
	      cm.dispose();
            } else if (sele == 1) {
	     	cm.sendOk(cm.쿠폰입력(cm.getText()));
cm.dispose();
            }
	 
	} 
    }
}