


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Pure Online Development Source Script)

	���۷� �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 2510012

	���ǽ� �̸� : �Ͼ� ������

	���ǽð� �ִ� �� : �����÷ε� : ��ǳ���� ��� (10000)

	���ǽ� ���� : MISSINGNO


*/

var status = 0;

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
		var petbuy2 = "#L1##b�ű����� �����ϰڽ��ϴ�!\r\n";
		cm.sendSimple(petbuy2);

        } else if (status == 1) {
	if (selection == 0) {
		cm.sendOk("#bģ��#k�� �����̳İ��??\r\n\r\n#bģ��#k�� �������� #b��#k�̶� �θ��°Ϳ� �����ϴ�.");
		cm.dispose();

	} else if (selection == 1) {
		var petbuy = "�Ѹ��� ��󺸼���. �������ٷ�ž��ؿ�!\r\n";

		petbuy += "#b\r\n#L0##i5000290#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L1##i5000291#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L2##i5000292#�� �����մϴ�.#e (3.000.000)#n\r\n#k#l";
		petbuy += "#b\r\n#L3##i5000249#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L4##i5000250#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L5##i5000251#�� �����մϴ�.#e (3.000.000)#n\r\n#k#l";
		petbuy += "#b\r\n#L9##i5000089#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L10##i5000090#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L11##i5000091#�� �����մϴ�.#e (3.000.000)#n\r\n#k#l";
		petbuy += "#b\r\n#L12##i5000217#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L13##i5000221#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L14##i5000237#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L15##i5000201#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "#b\r\n#L6##i5000330#�� �����մϴ�.#e (3.000.000)#n";
		petbuy += "\r\n#L7##i5000331#�� �����մϴ�.#e (3.000.000)#n";
 	        petbuy += "\r\n#L8##i5000332#�� �����մϴ�.#e (3.000.000)#n\r\n#k#l";
		petbuy += "\r\n#L16##i5000225#�� �����մϴ�.#e (3.000.000)#n\r\n#k#l";
		cm.sendSimple(petbuy);

	} else if (selection == 2) {
               cm.dispose();
               cm.openNpc(9020004);
	}

        //õ��
        } else if (status == 2) {
	if (selection == 0) {
		if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000290);
		cm.gainMeso(-3000000);
		cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
		cm.dispose();
	} else {
		ccm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
		cm.dispose();
	}
        } else if (selection == 1) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000291);

		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        } else if (selection == 2) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000292);

		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        //������
        } else if (selection == 3) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000249);

		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        } else if (selection == 4) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000250);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
	} else if (selection == 5) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000251);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        //������
        } else if (selection == 6) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000330);

		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        } else if (selection == 7) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000331);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
	} else if (selection == 8) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000332);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        //������
        } else if (selection == 9) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000089);

		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        } else if (selection == 10) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000090);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
	} else if (selection == 11) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000091);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }


        //��Ÿ
        } else if (selection == 12) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000217);

		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        } else if (selection == 13) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000221);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
	} else if (selection == 14) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000091);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
        } else if (selection == 15) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000201);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }
	} else if (selection == 16) {
                if (cm.getMeso() >= 3000000) {
		cm.BuyPET(5000225);
		cm.gainMeso(-3000000);
                cm.sendOk("���ϵ帳�ϴ�.ģ���� ����� �����Ͽ�����.");
                cm.dispose();
        } else {
                cm.sendOk("�ּ��� ģ���� ���� �� �ɷ��� �Ǿ������ �ʰڽ��ϱ�?");
        }


     }
   }
 }
}
