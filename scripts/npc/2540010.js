


/*

	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.

	* (Guardian Project Development Source Script)

	Nell �� ���� ����� �����ϴ�.

	���ǽþ��̵� : 1033211

	���ǽ� �̸� : ������ ����

	���ǽð� �ִ� �� : ��׽ý� : ��׽ý� (100000000)

	���ǽ� ���� : �޼�ȯ��

/**
Purin (On Boat ) 1032009
**/

var status = 0;

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
 } else {
  if (status >= 2 && mode == 0) {
   cm.sendOk("������         ");
   cm.dispose();
   return;
  }
  if (mode == 1)
   status++;
  else
   status--;
  if (status == 0) {
   cm.sendNext("���ݺ��� �������¶���\r\n#rVIP���� ��������Ϳ� ���Ͽ� �˾ƺ��ô�..\r\n������ �����ּ���.");
  } else if (status == 1) {
                cm.sendOk("[1]#r#eVIP�����#k�� #r#e���������#k�� \r\nƯ���������� �̵��� �����մϴ�..\r\n[2]#r#eVIP�����#k�� #r#e����Ƽ�� ����#k�̳�\r\n#r#eVIP�ʴ��#k���� �̿��̰����Ͻø�\r\n#r#e��������ʹ� ����Ƽ�� �������� �̿밡���մϴ�.\r\n[3]#r#eVIP������Ƽ������#k��¹��� \r\n#r#e���� 3��#k�� �������ֽñ�ٶ��ϴ�.\r\n[4]#r#eVIP�����#k������ #b#e�ְ�����#k #r#eVIP������#k������ \r\n#b#e150�� ��#k #r#eVIP�����#k������ #b#e�������ΰ� ���尭#k��\r\n�����Ǽ��ֽ��ϴ�.  ");
                cm.dispose();
  } else if (selection == 1) {
   if (cm.getMeso() < 1000000000) {
   cm.sendOk("#r10�� �޼Ұ� �����ϴ�.#k "); 
   cm.dispose();
   } else {
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainMeso(-1000000000); 
   cm.gainItem(4310059,1); 
   cm.dispose();
  }
  } else if (selection == 2) {
   if (cm.getMeso() < 2000000000) {
   cm.sendOk("#r20�� �޼Ұ� �����ϴ�.#k "); 
   cm.dispose();
   } else {
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainMeso(-2000000000); 
   cm.gainItem(4310059,2); 
   cm.dispose();
  }
  } else if (selection == 3) {
  if(cm.haveItem(4310059,1) == false && cm.getMeso() >= 8000000000) { 
   cm.sendOk("ȭ�� 1���� �����ðų� �ŷ��� �޼��ִ뷮�� �Ѿ� ��ȯ�� �Ұ��մϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4310059,1) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4310059,-1);
   cm.gainMeso(1000000000);
   cm.dispose();
   }
  } else if (selection == 4) {
  if(cm.haveItem(4310059,2) == false && cm.getMeso() >= 7000000000) { 
   cm.sendOk("ȭ�� 2���� �����ðų� �ŷ��� �޼��ִ뷮�� �Ѿ� ��ȯ�� �Ұ��մϴ�.");
   cm.dispose();
  } else if(cm.haveItem(4310059,2) == true) { 
   cm.sendOk("#r��ȯ#k �Ǿ����ϴ�.");
   cm.gainItem(4310059,-2);
   cm.gainMeso(2000000000);
   cm.dispose();
   }
  }
 }
}


