/*
	����(leehodud302@naver.com)����  ��ũ��Ʈ �����Դϴ�.
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
            cm.sendOk("�˻���� 2���� �̻��̾�� �մϴ�.");
            cm.dispose();
            return;
        }
        c.send(UIPacket.greenShowInfo(gomgo+"(��)�� �˻����Դϴ�. ��ø� ��ٷ��ּ���."));
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
            chat = "�߰ߵ� �������� �����ϴ�.";
            cm.sendOk(chat);
            cm.dispose();
        }
    }