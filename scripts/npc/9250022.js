/*
�ƾ߳�(riel0216)
*/




var status = 0;

var jessica1 = Math.floor(Math.random() * 20);

var jessica2 = Math.floor(Math.random() * 20);

var jessica3 = Math.floor(Math.random() * 20);

var jessica4 = Math.floor(Math.random() * 20);

var jessica5 = Math.floor(Math.random() * 20);

var jessica6 = Math.floor(Math.random() * 20);

var Meso = 100000000;




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

 if (cm.getMeso() > Meso) {

  cm.sendYesNo("�ζǿ� �����Ͻðڽ��ϱ�?\r\n�ζ� �������� #b" + Meso + "��#k(1��) �Դϴ�.\r\n\r\n#e#r[�ζ� ��÷���� 1280��]#k#d�Դϴ� �ϴ¹���� ���� �ζǹ�ȣ�� �ڽ��� �г��ӳ������� �������� �� ����\r\n�Խ��ǿ� �÷��ֽø� ���÷� Ȯ���ص帮�ڽ��ϴ�.\r\n#e#r�ζ� ��÷��ȣ Ȯ���� ī�� �������׿��� Ȯ��");

 } else {

  cm.sendOk("�ζǿ� �����Ͻ÷��� #b" + Meso + "��#k(1��) �� �ʿ��մϴ�.");

  cm.dispose();

  } 

 } else if (status == 1) {

  cm.gainMeso(-Meso);

  var jessica = "#r�����ý��丮 �ζ� ��ȣ �̱� �ý���#k �Դϴ�.\r\n";

  jessica += "\r\n#bù��° ���ڷ� " + jessica1 + "�� ���Խ��ϴ�.";

  cm.sendNext(jessica);




 } else if (status == 2) {

  first = jessica1;

  jessica = "#rù��° ���ڴ� " + first + "�Դϴ�.\r\n";

  jessica += "\r\n#b�ι�° ���ڷδ� " + jessica2 + "�� ���Խ��ϴ�.";

  cm.sendNext(jessica);




 } else if (status == 3) {

  first = jessica1;

  second = jessica2;

  var jessica = "#rù��° ���ڴ� " + first + "�Դϴ�.";

  jessica += "\r\n�ι�° ���ڴ� " + second + "�Դϴ�.\r\n";

  jessica += "\r\n#b����° ���ڷδ� " + jessica3 + "�� ���Խ��ϴ�.";

  cm.sendNext(jessica);




 } else if (status == 4) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  var jessica = "#rù��° ���ڴ� " + first + "�Դϴ�.";

  jessica += "\r\n�ι�° ���ڴ� " + second + "�Դϴ�.";

  jessica += "\r\n����° ���ڴ� " + third + "�Դϴ�.\r\n";

  jessica += "\r\n#b�׹�° ���ڷδ� " + jessica4 + "�� ���Խ��ϴ�.";

  cm.sendNext(jessica);




 } else if (status == 5) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  fourth = jessica4;

  var jessica = "#rù��° ���ڴ� " + first + "�Դϴ�.";

  jessica += "\r\n�ι�° ���ڴ� " + second + "�Դϴ�.";

  jessica += "\r\n����° ���ڴ� " + third + "�Դϴ�.";

  jessica += "\r\n�׹�° ���ڴ� " + fourth + "�Դϴ�.\r\n";

  jessica += "\r\n#b�ټ���° ���ڷδ� " + jessica5 + "�� ���Խ��ϴ�.";

  cm.sendNext(jessica);




 } else if (status == 6) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  fourth = jessica4;

  fifth = jessica5;

  var jessica = "#rù��° ���ڴ� " + first + "�Դϴ�.";

  jessica += "\r\n�ι�° ���ڴ� " + second + "�Դϴ�.";

  jessica += "\r\n����° ���ڴ� " + third + "�Դϴ�.";

  jessica += "\r\n�׹�° ���ڴ� " + fourth + "�Դϴ�.";

  jessica += "\r\n�ټ���° ���ڴ� " + fifth + "�Դϴ�.\r\n";

  jessica += "\r\n#b������° ���ڷδ� " + jessica6 + "�� ���Խ��ϴ�.";

  cm.sendNext(jessica);




 } else if (status == 7) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  fourth = jessica4;

  fifth = jessica5;

  sixth = jessica6;

  var jessica = "���ݱ��� �� ���� ���ڴ�\r\n";

  jessica += "#r" + first + "\r\n";

  jessica += "" + second + "\r\n";

  jessica += "" + third + "\r\n";

  jessica += "" + fourth + "\r\n";

  jessica += "" + fifth + "\r\n";

  jessica += "" + sixth + "#k";

  jessica += " �Դϴ�.\r\n";

  cm.sendNext(jessica);

  cm.dispose();

}

}

}