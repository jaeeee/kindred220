///			1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	 19	 20	 21	 22	 23
var itemList = Array (1102376,1102377,1102378,1102491,1102511,1102385,1102386,1102453,1102450,1102451,1102452,1102546,1102547,1102548,1102487,1102532,1102466,1102572,1102624,1102629,1102630,1102643,1102644); // ������ ��� 
///			
var number = Array (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);
var pr = Array (10,10,10,10,10,30,30,30,30,30,50,50,50,80,80,80,100,100,100,100,100,100,100,100);
var status = 0;
var sel;
var sel2;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
        cm.sendYesNo("#b#z" + 4310119 + "##k���� ���� �ŷ��� �غ��پ�?");
        //        cm.sendOk("������ �������..");
        //        cm.dispose();
    } else if (status == 1) {
	var where = "���� �̸�ó�� ���� �������̾�~\r\n";
	for (var i = 0; i < itemList.length; i++) {
	where += "\r\n#L" + i + "##b#i" + itemList[i] + ":# #t" + itemList[i] + "# (" + number[i] + "��Ʈ)";
	}
        cm.sendSimple(where);
    } else if (status == 2) {
        sel = selection;
        cm.sendYesNo("#b�Ǹ��ý����� " + (sel ? 100 : pr[sel]) + "#k���� �ʿ��Ѵ� ������ ��ȯ�ϰپ�?");
    } else {
            if (cm.haveItem(4310119, pr[sel])) {
                if (cm.canHold(itemList[sel])) {
                    cm.sendOk("#b#t"+itemList[sel]+"##k�� ��ȯ �Ǿ����ϴ�.");
                    cm.gainItem(itemList[sel], number[sel]);
                    cm.gainItem(4310119, -pr[sel]);
                    cm.dispose();
                } else {
                    cm.sendOk("���â�� ����� 1ĭ�� �������ּ���");
                    cm.dispose();
                }
            } else {
                cm.sendOk("�Ǹ��ý������� �����ѰŰ�����?");
                cm.dispose();
            }
        }
    }