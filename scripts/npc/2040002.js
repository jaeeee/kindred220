/* 
������ : �Ķ������� 
*/
importPackage(java.util);
importPackage(Packages.packet.creators);


var status = 0;
var ID;
var ID2;
var ID3;
var i = 0;

function start() {
	status = -1;
	action(1, 0, 0);
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
	 var ask = "�������ΰ���? ���谡��";
	 ask +="\r\n#L2##b���̵������� �����ϰ�ͽ��ϴ�.#k"
	 ask +="\r\n#L0##bĳ���������� �����ϰ�ͽ��ϴ�.#k"
	 ask +="\r\n#L1##b���ǰ�����ȣ�� �˰�ͽ��ϴ�.#k"
	 ask +="\r\n#L3##b����ǰ�����ȣ�� �˰�ͽ��ϴ�.#k"
         cm.sendSimple(ask);
      } else if (status == 1) {
        if (selection == 0) {
          cm.sendGetText("ĳ���ʹг��Ӹ� �Է����ּ���.");
        } else if (selection == 1) {
          cm.sendOk("������ȣ��� : "+ cm.getPlayer().getId() + "\r\n������ȣ����� �Ϸ�Ǿ����ϴ�");
          cm.dispose();
        } else if (selection == 2) {
          cm.dispose();
          cm.openNpc(2040028);
          return;
        } else if (selection == 3) {
          if (cm.haveItem(4140103, 1)) {
          cm.dispose();
          cm.openNpc(1052014);
      } else {
          cm.sendOk("������ �̹߱�");
      }
}
      } else if (status == 2) {
          text = cm.getText();
          ID = text;
	  cm.sendGetText("������ȣ�� �Է����ּ���.");
      } else if (status == 3) {
	  text = cm.getText();
          ID2 = text;
	  var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(ID);
      if (ID2 == conn.getId()) {
      if (conn == null) {
          cm.sendOk("���� �������� �ƴϰų� ä���� �ٸ��ٳ�. Ȥ�� �������� �ʴ� ���̵��� ���� �ֽ��ϴ�.");
	  cm.dispose();
      } else {
	  conn.getClient().getPlayer().dropMessage(1, ""+cm.getPlayer().getName()+" ���� ������ ��û�Ͽ����ϴ�.");
          conn.getClient().getSession().close();
          conn.getClient().disconnect(true, false);
	  cm.sendOk(ID + " �Կ��� ������ ��û�Ͽ����ϴ�.");
	  cm.dispose();
        }
     } else {
	cm.sendOk("����");
        cm.dispose();
     }
  }	
}