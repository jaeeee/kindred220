/*
	곰고(leehodud302@naver.com)님의  스크립트 파일입니다.
*/

var status = -1;

function start() {
	status = -1;
	action (1, 0, 0);
}
function action(mode, type, selection) {
	if(mode == 1) {
		status++;
public void SearchItem(String gomgo) {
        NPCConversationManager cm = this;
        if(gomgo.getBytes().length < 4) {
            cm.sendOk("검색어는 2글자 이상이어야 합니다.");
            cm.dispose();
            return;
        }
        c.send(UIPacket.greenShowInfo(gomgo+"(으)로 검색중입니다. 잠시만 기다려주세요."));
        String chat = "";
        ItemInformation ii = ItemInformation.getInstance();
        int g = 0;
        List<String> retItems = new ArrayList<String>();
	for (Pair<Integer, String> itemPair : ItemInformation.getInstance().getAllEquips()) {
            if (itemPair.getRight().toLowerCase().contains(gomgo.toLowerCase())) {
                if(ii.isCash(itemPair.getLeft())) {
                    if(itemPair.getLeft() / 100000 >= 1) {
                        chat += "#L"+itemPair.getLeft()+"# #i"+itemPair.getLeft() + "# #fs14##b" + itemPair.getRight()+"#fs12##k#l\r\n";
                        g++;
                    }
                }
            }
        }
        if (g != 0) {
            cm.sendSimple(chat);   
        } else {
            chat = "발견된 아이템이 없습니다.";
            cm.sendOk(chat);
            cm.dispose();
        }
    }