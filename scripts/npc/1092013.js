/*

������ : ljw5992@naver.com / dbg_yeane@nate.com
��� ���� : time_amd@nate.com

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
        /*
        ���� �������� 0���� 99����
        �̵� �������� 100���� 199����
        ������ �������� 200���� 299����
        ��� �������� 300���� 399����
        */
        var choose = "#fs 13#< �Ŀ����� >#k\r\n";
        //choose += "#L4##fn����##r[�߼��̺�Ʈ]�Ŀ� ����#k\r\n";
        choose += "#L1##fn����##fs 12##b�Ŀ� ����#k\r\n";       
        choose += "#L2##fs 12##b�Ŀ� ����2(����)#k\r\n";
        choose += "#L3##fs 12##b�Ŀ� ����2(����)#k\r\n";
        choose += "#L5##fs 12##e#b�Ŀ� ��ȭ[25��]#n\r\n";

        if (cm.getPlayer().hasGmLevel(100)){

  }
        cm.sendSimple(choose);

    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
            cm.enterCS();
            cm.dispose();
 } else if (s == 1) {
  cm.openNpc (1032005);
 } else if (s == 2) {
  cm.openNpc (2400010);
 } else if (s == 3) {
  cm.openNpc (1032100);
 } else if (s == 4) {
  cm.openNpc (1530200);
 } else if (s == 5) {
  cm.openNpc (1052125);
        }
    }
}
