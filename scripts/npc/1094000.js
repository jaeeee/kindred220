var status = 0;
var time = "#fUI/UIToolTip/Item/Equip/Star/Star#"
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
    cm.sendSimple ("�ȳ��ϼ���?\r\n���� �̴ϰ���/������ �ð��ִ� #b��Ʈ#k ����մϴ�.\r\n" + "#k\r\n#L1##r"+time+" ����ã��#k ������ �̿��ϰڽ��ϴ�." +"\r\r#k#L91##b"+time+" ���ϴ¹���#k ������ �ϰڽ��ϴ�." +"#k\r\n#L81##b"+time+" �귿#k ������ �ϰڽ��ϴ�." +"#k\r\n#L82##b"+time+" ����������#k ������ �ϰڽ��ϴ�." +"#k\r\n#L84##b"+time+" ����#k ������ �ϰڽ��ϴ�." +"#k\r\n#L85##b"+time+" �ε��Ȧ��#k ������ �ϰڽ��ϴ�.");
      } else if (selection == 1) {
        cm.dispose();
        cm.openNpc(9001001);
      } else if (selection == 81) {
        cm.dispose();
        cm.openNpc(9074006);
      } else if (selection == 82) {
        cm.dispose();
        cm.openNpc(9000019);
      } else if (selection == 84) {
        cm.dispose();
        cm.openNpc(1022002);
      } else if (selection == 85) {
        cm.dispose();
        cm.openNpc(1102003);
      } else if (selection == 91) {
        cm.dispose();
        cm.openNpc(9010018);
  
      	    } 
         }
      }