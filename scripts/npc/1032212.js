/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���ŷâ�� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 9000178

	���ǽ� �̸� : ��ü�Ҹ��� ������

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý� (100000000)

	���ǽ� ���� : ��ȥ������
        QS2 += "\r\n#fUI/UIWindow2.img/MapleStyle/RewardPopup/backgrnd2#\r\n"

*/

var status = 0;
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage (java.util);
importPackage (Packages.tools);
importPackage (Packages.server.quest);
importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.client.inventory);
importPackage(Packages.server.items);
importPackage(Packages.client.items);
importPackage(Packages.tools.RandomStream);

var selected = 0;
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
        var str = "�ȳ��ϼ���? �ݰ����ϴ�. ��� N �̶�� �մϴ�.\r\n���� #b�ھ�¶���#k�� #r���̵� ����Ʈ#k ������� �߷ɹ޾Ҿ��.#b\r\n";
        if (!cm.haveItem(1022224, 1)&& !cm.haveItem(1022225, 1)&& !cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n#L1#[ù��°] �ʺ� ����� �ǰ� �ͽ��ϴ�.#l\r\n\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n\r\n      �Ϸ��Ҽ��ִ� ����Ʈ�������ϴ�.#l\r\n";

        } else if (cm.haveItem(1022224, 1) && !cm.haveItem(1022225, 1)&& !cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n#L2#[�ι�°] ��� ����� �ǰ� �ͽ��ϴ�..#l\r\n\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n#L11# [ù��°] �ʺ� ����� ����! (�Ϸ�)#l\r\n";

        } else if (cm.haveItem(1022225, 1) && !cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n#L3#[������] ���׶� ����� �ǰ� �ͽ��ϴ�#l\r\n\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n#L12# [�ι�°] ��� ����� ����! (�Ϸ�)#l\r\n";

        } else if (cm.haveItem(1022226, 1)) { 
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#"
        str += "\r\n\r\n      �����Ҽ��ִ� ����Ʈ�������ϴ�.#l\r\n";
        str += "\r\n#fUI/UIWindow2.img/UtilDlgEx/list3#"
        str += "\r\n#L13# [������] ���׶� ����� ����! (�Ϸ�)#l\r\n";

        }
        cm.sendSimple(str);
     } else if (status == 1) {
        if (selection == 999) {
        if(cm.getQuestStatus(31229) == 2 && cm.getPlayer().getKeyValue("QUEST1") == null) { 
        cm.gainItem(2430368, 1);
        cm.gainItem(5062000, 30);
        cm.gainItem(2048709, 2);
        cm.getPlayer().setKeyValue("QUEST1", "1");
        cm.dispose();
      } else {
        cm.sendOk("�̹� ������ �����̰ų� ���� ���丮����Ʈ�� �Ϸ����� ���ϼ̽��ϴ�.");
        cm.dispose();
      }

          } else if (selection == 1) {
                    cm.dispose();
                    cm.warp(109060001);
                    cm.sendOk("���͸� ������ ���� Ȯ���� #i1022224#�� ���ɴϴ�.\r\n#i1022224#�� ŉ���ϽðԵǸ� ����Ʈ�� �Ϸ��� �� �ֽ��ϴ�.\r\n�� ���� ��� ��� ����Ʈ�� ������ �� �ִ� ������ ����ϴ�.\r\n�Ϸ�� #i2430794# ŉ��, �ᱹ ���� �밡���� �������̿� �����̴ϴ�!");

          } else if (selection == 2) {
                    cm.dispose();
                    cm.warp(109060003);
                    cm.sendOk("���͸� ������ ���� Ȯ���� #i1022225#�� ���ɴϴ�.\r\n#i1022225#�� ŉ���ϽðԵǸ� ����Ʈ�� �Ϸ��� �� �ֽ��ϴ�.\r\n�� ���� ���׶� ��� ����Ʈ�� ������ �� �ִ� ������ ����ϴ�.\r\n�Ϸ�� #i2430242# ŉ��, �ᱹ ���� �밡���� �������̿� �����̴ϴ�!");

          } else if (selection == 3) {
                    cm.dispose();
                    cm.warp(109060005);
                    cm.sendOk("���͸� ������ ���� Ȯ���� #i1022226#�� ���ɴϴ�.\r\n#i1022226#�� ŉ���ϽðԵǸ� ����Ʈ�� �Ϸ��� �� �ֽ��ϴ�.\r\n�Ϸ�� #i2430243# ŉ��, �ᱹ ���� �밡���� �������̿� �����̴ϴ�!");

         } else if (selection == 11) {
                if (cm.haveItem(1022224, 1)) {
                    cm.teachSkill(80001449,1,1);
                    cm.sendOk("#i2430794# ���Ͻô� ���̵��� �����Ű���?\r\n���̵��� ��ų�ǿ��� ã�ƺ��� ���־��.");
                } else {
                    cm.sendOk("#i1022224##k ���� ��ᰡ �����ؿ�");
                }
		    cm.dispose();
         } else if (selection == 12) {
                if (cm.haveItem(1022225, 1)) {
                    cm.teachSkill(80001450,1,1);
                    cm.sendOk("#i2430242# ���Ͻô� ���̵��� �����Ű���?\r\n���̵��� ��ų�ǿ��� ã�ƺ��� ���־��.");
                } else {
                    cm.sendOk("#i1022225##k ���� ��ᰡ �����ؿ�");
                }
		    cm.dispose();
         } else if (selection == 13) {
                if (cm.haveItem(1022226, 1)) {
                    cm.teachSkill(80001451,1,1);
                    cm.sendOk("#i2430243# ���Ͻô� ���̵��� �����Ű���?\r\n���̵��� ��ų�ǿ��� ã�ƺ��� ���־��.");
                } else {
                    cm.sendOk("#i1022226##k ���� ��ᰡ �����ؿ�");
                }
		    cm.dispose();
      }
    }
  }
}
