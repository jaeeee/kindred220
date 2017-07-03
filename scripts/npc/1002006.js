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
	    var chat = "#b#h #��, �ȳ��ϼ���. #k\r\n��ų������ ��� #rü��#k��� �մϴ�.\r\n�Ʒ����� �����ؼ� �����ּ���.��\r\n\r\n#k#l"
	    chat += "#e< ���谡 ������ >#n\r\n";
	    chat += "#L1#�����#l";
	    chat += "#L2#�ȶ��#l";
	    chat += "#L3#��ũ����Ʈ#l\r\n";
	    chat += "#L4#��.��#l";
	    chat += "#L5#��.��#l";
	    chat += "#L6#���#l\r\n";
	    chat += "#L7#���츶����#l";
	    chat += "#L8#�ű�#l";
	    chat += "#L18#ĳ����#l\r\n";
	    chat += "#L9#����Ʈ�ε�#l";
	    chat += "#L10#������#l";
	    chat += "#L19#�����̵�#l\r\n\r\n";	   	
	    chat += "#e< ���� ������ >#n\r\n";
	    chat += "#L13#�ƶ�#l";
	    chat += "#L14#����#l";
	    chat += "#L15#�޸�������#l\r\n";
	    chat += "#L16#����#l";
            chat += "#L29#������#l";
            chat += "#L28#��̳ʽ�#l";
	    chat += "#L17#����#l\r\n\r\n";
	    chat += "#e< ���������� ������ >#n\r\n";
	    chat += "#L20#���󽽷��̾�#l";
	    chat += "#L21#��Ʋ������#l";
	    chat += "#L22#���ϵ�����#l";
	    chat += "#L23#��ī��#l\r\n";
	    chat += "#L24#������#l";
	    chat += "#L25#����#l\r\n\r\n";
	    chat += "#e< ��� ������ >#n\r\n";
	    chat += "#L26#������������#l";
	    chat += "#L27#ī����#l\r\n\r\n";  	        

	    cm.sendSimple(chat);



		
} else if (selection == 17) {
    if (cm.getJob() == 2005 || cm.getJob() == 2500 || cm.getJob() == 2510 || cm.getJob() == 2511 || cm.getJob() == 2512){
  cm.teachSkill(25111000,20,20);
  cm.teachSkill(25101000,20,20);
  cm.teachSkill(25101003,10,10);
  cm.teachSkill(25001000,25,25);
  cm.teachSkill(25001002,25,25);
  cm.teachSkill(25110210,20,20);
  cm.teachSkill(25001204,20,20);
  cm.teachSkill(25000105,20,20);
  cm.teachSkill(25101004,10,10);
  cm.teachSkill(25101205,15,15);
  cm.teachSkill(25100106,10,10);
  cm.teachSkill(20050285,1,1);
  cm.teachSkill(25100107,10,10);
  cm.teachSkill(25100108,10,10);
  cm.teachSkill(25100009,10,10);
  cm.teachSkill(25111004,10,10);
  cm.teachSkill(25111005,20,20);
  cm.teachSkill(25111206,15,15);
  cm.teachSkill(25110107,20,20);
  cm.teachSkill(25110108,10,10);
  cm.teachSkill(25111005,20,20);
  cm.teachSkill(25111209,10,10);
  cm.teachSkill(25111211,10,10);
  cm.teachSkill(20051284,1,1);
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 1) {
    if (cm.getJob() == 100 || cm.getJob() == 110 || cm.getJob() == 111 || cm.getJob() == 112){
  cm.teachSkill(1001008,10,10); //�������  1��
  cm.teachSkill(1001003,20,20); // ���̾� �ٵ� 
  cm.teachSkill(1001005,20,20); // ������ ����Ʈ 
  cm.teachSkill(1000009,15,15); // ������ �����͸�  ��
  cm.teachSkill(1100000,10,10); // ���� �����͸� -- 2����ų ����
  cm.teachSkill(1100002,20,20); // ���̳� ����
  cm.teachSkill(1101012,10,10); // �޺� ����
  cm.teachSkill(1101004,10,10); // ���� �ν���
  cm.teachSkill(1100009,5,5); // ������ Ʈ���̴�
  cm.teachSkill(1101006,20,20); // �г�
  cm.teachSkill(1101011,20,20); // �귣��
  cm.teachSkill(1101009,10,10); // ������ Ʈ���̴�
  cm.teachSkill(1101013,1,1); // �޺� ����
  cm.teachSkill(1110000,20,20); // ���� ��Ŀ���� -- 3����ų ����
  cm.teachSkill(1111012,10,10); // ����
  cm.teachSkill(1110013,20,20); // �޺� �ó���
  cm.teachSkill(1111010,20,20); // �극�̺� ������
  cm.teachSkill(1111003,20,20); // �д�
  cm.teachSkill(1111008,20,20); // ����Ʈ
  cm.teachSkill(1110011,20,20); // �ε��
  cm.teachSkill(1110009,20,20); // ���� ���� -- 3����ų ��
  cm.teachSkill(1121000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(1121001,30,30); // ���� ���׳�
  cm.teachSkill(1120014,30,30); // ���� ũ����
  cm.teachSkill(1121002,30,30); // ���Ľ�
  cm.teachSkill(1121015,30,30); // �λ���¡
  cm.teachSkill(1121016,20,20); // ���Ľ�
  cm.teachSkill(1121006,30,30); // ����
  cm.teachSkill(1120003,30,30); // ���꽺�� �޺�
  cm.teachSkill(1121010,30,30); // �η�����
  cm.teachSkill(1120012,30,30); // �Ĺ� �����͸�
  cm.teachSkill(1121008,30,30); // ����¡ ��ο�
  cm.teachSkill(1121011,5,5); // ����� ����
  cm.teachSkill(1120013,30,30); // ���꽺�� ���̳� ���� -- 4����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 2) {
if (cm.getJob() == 100 || cm.getJob() == 120 || cm.getJob() == 121 || cm.getJob() == 122){
  cm.teachSkill(1001003,20,20); // ���̾� �ٵ� -- 1����ų
  cm.teachSkill(1001004,20,20); // �Ŀ� ��Ʈ����ũ
  cm.teachSkill(1001005,20,20); // ������ ����Ʈ
  cm.teachSkill(1001006,10,10); // HP���� -- 1����ų��
  cm.teachSkill(1200000,20,20); // ���� �����͸� -- 2����ų ����
  cm.teachSkill(1201011,20,20); // ���̳� ����
  cm.teachSkill(1200002,20,20); // ���̳� ����
  cm.teachSkill(1201012,20,20); // ���̳� ����
  cm.teachSkill(1201013,10,10); // ���̳� ����
  cm.teachSkill(1211012,10,10); // ���̳� ����
  cm.teachSkill(1211013,20,20); // ���̳� ����
  cm.teachSkill(1211014,20,20); // ���̳� ����
  cm.teachSkill(1210015,20,20); // ���̳� ����
  cm.teachSkill(1210016,10,10); // ���̳� ����
  cm.teachSkill(1221014,20,20); // ���̳� ����
  cm.teachSkill(1221015,30,30); // ���̳� ����
  cm.teachSkill(1221016,20,20); // ���̳� ����
  cm.teachSkill(1221012,5,5); // ���̳� ����
  cm.teachSkill(1201002,20,20); // ���̳� ����
  cm.teachSkill(1220017,30,30); // ���̳� ����
  cm.teachSkill(1220018,30,30); // ���̳� ����
  cm.teachSkill(1220010,30,30); // ���̳� ����
  cm.teachSkill(1201004,10,10); // ���� �ν���
  cm.teachSkill(1200009,10,10); // ������ Ʈ���̴�
  cm.teachSkill(1210001,20,20); // ���� �����͸� -- 3����ų ����
  cm.teachSkill(1211002,30,30); // ���� ��ο�
  cm.teachSkill(1211004,20,20); // �÷��� ����
  cm.teachSkill(1211006,20,20); // ���ڵ� ����
  cm.teachSkill(1211008,20,20); // ����Ʈ�� ����
  cm.teachSkill(1211011,20,20); // �Ĺ� ������
  cm.teachSkill(1211009,20,20); // ���� ũ����
  cm.teachSkill(1211010,10,10); // ��������̼� -- 3����ų ��
  cm.teachSkill(1221000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(1220005,30,30); // ��ų����
  cm.teachSkill(1220006,30,30); // ����� ���Ǹ�
  cm.teachSkill(1221009,30,30); // ����Ʈ
  cm.teachSkill(1220013,10,10); // ���� �Ƹ�
  cm.teachSkill(1221002,30,30); // ���Ľ�
  cm.teachSkill(1221007,30,30); // ����
  cm.teachSkill(1221004,20,20); // ����� ����
  cm.teachSkill(1221011,30,30); // ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
  
  
} else if (selection == 3) {
 if (cm.getJob() == 100 || cm.getJob() == 130 || cm.getJob() == 131 || cm.getJob() == 132){
    cm.teachSkill(1301011,20,20); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1301012,10,10); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1311011,20,20); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1311012,10,10); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1311013,10,10); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1311014,20,20); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1311015,20,20); // �Ŀ� ��Ʈ����ũ
    cm.teachSkill(1310016,20,20); // �Ŀ� ��Ʈ����ũ
 cm.teachSkill(1001003,20,20); // ���̾� �ٵ� -- 1�� ��ų
  cm.teachSkill(1001004,20,20); // �Ŀ� ��Ʈ����ũ
  cm.teachSkill(1001005,20,20); // ������ ����Ʈ
  cm.teachSkill(1001006,10,10); // HP���� -- 1�� ��ų��
  cm.teachSkill(1300000,20,20); // ���� �����͸� -- 2�� ��ų ����
  cm.teachSkill(1300002,20,20); // ���̳� ����
  cm.teachSkill(1301004,20,20); // ���� �ν���
  cm.teachSkill(1301006,20,20); // ���̾� ��
  cm.teachSkill(1301007,20,20); // ������ �ٵ�
  cm.teachSkill(1301008,10,10); // �׶��� ���Ž�
  cm.teachSkill(1300009,10,10); // ������ Ʈ���̴�
  cm.teachSkill(1301010,10,10); // ���� -- 2�� ��ų ��
  cm.teachSkill(1310000,20,20); // ������Ʈ �������Ͻ� -- 3�� ��ų ����
  cm.teachSkill(1311001,20,20); // �巡�� ������
  cm.teachSkill(1311003,20,20); // �巡�� ������
  cm.teachSkill(1311005,20,20); // ��ũ�����̽�
  cm.teachSkill(1311006,30,30); // �巡�� �ξ�
  cm.teachSkill(1311007,20,20); // ���� ũ����
  cm.teachSkill(1311008,20,20); // �巡�� ��Ʈ����
  cm.teachSkill(1310010,20,20); // �ε��
  cm.teachSkill(1310009,10,10); // �巡�� ������Ʈ -- 3�� ��ų ��
  cm.teachSkill(1321000,30,30); // ������ ��� -- 4�� ��ų ����
  cm.teachSkill(1320006,30,30); // ��ũ����
  cm.teachSkill(1321001,30,30); // ���� ���׳�
  cm.teachSkill(1321002,30,30); // ���Ľ�
  cm.teachSkill(1321003,30,30); // ����
  cm.teachSkill(1321007,10,10); // ��Ȧ��
  cm.teachSkill(1320008,20,20); // ��Ȧ���� ����
  cm.teachSkill(1320011,10,10); // ��Ȧ���� ������
  cm.teachSkill(1320009,20,20); // ��Ȧ���� ����
  cm.teachSkill(1321012,30,30); // ��ũ ������ -- 4�� ��ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 4) {
 if (cm.getJob() == 200 || cm.getJob() == 210 || cm.getJob() == 211 || cm.getJob() == 212){
    cm.teachSkill(2101008,30,30); // ���ο�
    cm.teachSkill(2100010,30,30); // ���ο�
    cm.teachSkill(2111010,30,30); // ���ο�
    cm.teachSkill(2111011,30,30); // ���ο�
    cm.teachSkill(2110012,30,30); // ���ο�
  cm.teachSkill(2001002,15,15); // ���� ���� -- 1����ų
  cm.teachSkill(2001002,15,15); // ���� �Ƹ�
  cm.teachSkill(2001008,20,20); // ������ ��Ʈ
  cm.teachSkill(2001005,20,20); // ���� Ŭ��
  cm.teachSkill(2000006,20,20); // MP ���� -- 1�� ��ų ��
  cm.teachSkill(2100000,20,20); // MP ���� -- 2�� ��ų ����
  cm.teachSkill(2101001,20,20); // �ŵ����̼�
  cm.teachSkill(2001009,20,20); // �ڷ���Ʈ
  cm.teachSkill(2101003,10,10); // ���ο�
  cm.teachSkill(2101004,20,20); // �÷��� �ַο�
  cm.teachSkill(2101005,20,20); // ������ �극��
  cm.teachSkill(2100006,20,20); // ���� �����͸�
  cm.teachSkill(2100007,10,10); // ���� ����� -- 2�� ��ų ��
  cm.teachSkill(2110000,10,10); // �ͽ�Ʈ�� ����(��,��) -- 3�� ��ų ����
  cm.teachSkill(2110001,20,20); // ������Ʈ ���ø������̼�
  cm.teachSkill(2111002,20,20); // �ͽ��÷���
  cm.teachSkill(2111003,20,20); // ������ �̽�Ʈ
  cm.teachSkill(2111004,20,20); // ��
  cm.teachSkill(2111005,20,20); // ���� �ν���
  cm.teachSkill(2111006,10,10); // ���̾� ����
  cm.teachSkill(2111007,10,10); // �ڷ���Ʈ �����͸�
  cm.teachSkill(2111008,10,10); // ������Ż ����
  cm.teachSkill(2110009,20,20); // ���� ũ��Ƽ�� -- 3����ų ��
  cm.teachSkill(2121000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(2121001,30,30); // ���
  cm.teachSkill(2121003,30,30); // �̽�Ʈ �̷���
  cm.teachSkill(2121004,30,30); // ���Ǵ�Ƽ
  cm.teachSkill(2121005,30,30); // ������Ʈ
  cm.teachSkill(2121006,30,30); // �䷲������
  cm.teachSkill(2121007,30,30); // ���׿�
  cm.teachSkill(2121009,10,10); // ������ ����
  cm.teachSkill(2120010,30,30); // ������ ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 5) {
     if (cm.getJob() == 200 || cm.getJob() == 220 || cm.getJob() == 221 || cm.getJob() == 222){
      cm.teachSkill(2201008,30,30); // ���ο�
      cm.teachSkill(2201009,30,30); // ���ο�
      cm.teachSkill(2201010,30,30); // ���ο�
      cm.teachSkill(2211010,30,30); // ���ο�
      cm.teachSkill(2211011,30,30); // ���ο�
      cm.teachSkill(2211012,30,30); // ���ο�
      cm.teachSkill(2210013,30,30); // ���ο�
cm.teachSkill(2001008,20,20); // ������ ��Ʈ
cm.teachSkill(2001002,15,15); // ���� ���� -- 1����ų
  cm.teachSkill(2000010,15,15); // ���� �Ƹ�
  cm.teachSkill(2001004,20,20); // ������ ��Ʈ
  cm.teachSkill(2001005,20,20); // ���� Ŭ��
  cm.teachSkill(2000006,20,20); // MP ���� -- 1�� ��ų ��
  cm.teachSkill(2200000,20,20); // MP ���� -- 2�� ��ų ����
  cm.teachSkill(2201001,20,20); // �ŵ����̼�
  cm.teachSkill(2001009,20,20); // �ڷ���Ʈ
  cm.teachSkill(2201003,10,10); // ���ο�
  cm.teachSkill(2201004,20,20); // �÷��� �ַο�
  cm.teachSkill(2201005,20,20); // ������ �극��
  cm.teachSkill(2200006,20,20); // ���� �����͸�
  cm.teachSkill(2200007,10,10); // ���� ����� -- 2�� ��ų ��
  cm.teachSkill(2210000,10,10); // �ͽ�Ʈ�� ����(��,��) -- 3�� ��ų ����
  cm.teachSkill(2210001,20,20); // ������Ʈ ���ø������̼�
  cm.teachSkill(2211002,20,20); // ���̽� ��Ʈ����ũ
  cm.teachSkill(2211003,20,20); // ��� ���Ǿ�
  cm.teachSkill(2211004,20,20); // ��
  cm.teachSkill(2211005,20,20); // ���� �ν���
  cm.teachSkill(2211006,10,10); // ���̽� ����
  cm.teachSkill(2211007,10,10); // �ڷ���Ʈ �����͸�
  cm.teachSkill(2211008,10,10); // ������Ż ����
  cm.teachSkill(2210009,20,20); // ���� ũ��Ƽ�� -- 3����ų ��
  cm.teachSkill(2221000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(2221001,30,30); // ���
  cm.teachSkill(2221003,30,30); // �۷��̼� ü��
  cm.teachSkill(2221004,30,30); // ���Ǵ�Ƽ
  cm.teachSkill(2221005,30,30); // �����׽�
  cm.teachSkill(2221006,30,30); // ü�� ����Ʈ��
  cm.teachSkill(2221007,30,30); // ���ڵ�
  cm.teachSkill(2221009,10,10); // ������ ����
  cm.teachSkill(2220010,30,30); // ������ ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 6) {
     if (cm.getJob() == 200 || cm.getJob() == 230 || cm.getJob() == 231 || cm.getJob() == 232){
 
  cm.teachSkill(2311011,30,30); // Ȧ�� �ɺ�
  cm.teachSkill(2311012,30,30); // Ȧ�� �ɺ�
   cm.teachSkill(2001008,20,20); // ������ ��Ʈ
cm.teachSkill(2001002,15,15); // ���� ���� -- 1����ų
  cm.teachSkill(2001002,15,15); // ���� �Ƹ�
  cm.teachSkill(2001004,20,20); // ������ ��Ʈ
  cm.teachSkill(2001005,20,20); // ���� Ŭ��
  cm.teachSkill(2000006,20,20); // MP ���� -- 1�� ��ų ��
  cm.teachSkill(2300000,20,20); // MP ���� -- 2�� ��ų ����
  cm.teachSkill(2001009,20,20); // �ڷ���Ʈ
  cm.teachSkill(2301002,20,20); // ��
  cm.teachSkill(2301003,15,15); // �κ󼭺�
  cm.teachSkill(2301004,15,15); // ����
  cm.teachSkill(2301005,20,20); // Ȧ�� �ַο�
  cm.teachSkill(2300006,20,20); // ���� �����͸�
  cm.teachSkill(2300007,10,10); // ���� ����� -- 2�� ��ų ��
  cm.teachSkill(2311001,10,10); // ���� -- 3�� ��ų ����
  cm.teachSkill(2311002,10,10); // �̽�ƽ ����
  cm.teachSkill(2311003,20,20); // Ȧ�� �ɺ�
  cm.teachSkill(2311004,20,20); // ���̴� ����
  cm.teachSkill(2311005,10,10); // ��
  cm.teachSkill(2311006,20,20); // ���� �ν���
  cm.teachSkill(2311007,10,10); // �ڷ���Ʈ �����͸�
  cm.teachSkill(2310008,20,20); // Ȧ�� ��Ŀ��
  cm.teachSkill(2311009,20,20); // Ȧ�� ������
  cm.teachSkill(2310010,20,20); // ���� ũ��Ƽ�� -- 3����ų ��
  cm.teachSkill(2321000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(2321001,30,30); // ���
  cm.teachSkill(2321002,30,30); // ���� ���÷���
  cm.teachSkill(2321004,30,30); // ���Ǵ�Ƽ
  cm.teachSkill(2321003,30,30); // ���Ϲ�Ʈ
  cm.teachSkill(2321005,30,30); // ���꽺�� ����
  cm.teachSkill(2321006,5,5); // ��������
  cm.teachSkill(2321007,30,30); // ��������
  cm.teachSkill(2321008,30,30); // ���׽ý�
  cm.teachSkill(2321010,10,10); // ������ ����
  cm.teachSkill(2320011,30,30); // ������ ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 7) {
     if (cm.getJob() == 300 || cm.getJob() == 310 || cm.getJob() == 311 || cm.getJob() == 312){
   cm.teachSkill(3001007,30,30); // ���� ������Ʈ
   cm.teachSkill(3110012,30,30); // ���� ������Ʈ
   cm.teachSkill(3101008,30,30); // ���� ������Ʈ
   cm.teachSkill(3111009,30,30); // ���� ������Ʈ
   cm.teachSkill(3111019,30,30); // ���� ������Ʈ
   cm.teachSkill(3111011,30,30); // ���� ������Ʈ
   cm.teachSkill(3110014,30,30); // ���� ������Ʈ
   cm.teachSkill(3111010,30,30); // ���� ������Ʈ
 cm.teachSkill(3000001,20,20); // ũ��Ƽ�� �� -- 1����ų
  cm.teachSkill(3000002,15,15); // ��ó �����͸�
  cm.teachSkill(3001004,20,20); // �ַο� ��ο�
  cm.teachSkill(3001005,15,15); // ���� -- 1�� ��ų ��
  cm.teachSkill(3100000,20,20); // ���� �����͸� -- 2�� ��ų ����
  cm.teachSkill(3100001,20,20); // ���̳� ���� : Ȱ
  cm.teachSkill(3101002,20,20); // ���� �ν���
  cm.teachSkill(3101003,10,10); // ���� ����
  cm.teachSkill(3101004,20,20); // �ҿ� �ַο� : Ȱ
  cm.teachSkill(3101005,20,20); // �ַο� �� : Ȱ
  cm.teachSkill(3100006,10,10); // ������ Ʈ���̴�
  cm.teachSkill(3101007,15,15); // �ǹ� ȣũ -- 2�� ��ų ��
  cm.teachSkill(3111000,20,20); // ���� -- 3�� ��ų ����
  cm.teachSkill(3110001,15,15); // ��Ż ��ο�
  cm.teachSkill(3111002,15,15); // ����
  cm.teachSkill(3111003,20,20); // �÷��� ��
  cm.teachSkill(3111004,20,20); // �ַο� ����
  cm.teachSkill(3111005,20,20); // �Ǵн�
  cm.teachSkill(3111006,20,20); // ��Ʈ������
  cm.teachSkill(3110007,10,10); // ����
  cm.teachSkill(3111008,20,20); // �巹�� �ַο� -- 3����ų ��
  cm.teachSkill(3121000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(3120005,30,30); // ���� ������Ʈ 
  cm.teachSkill(3121002,30,30); // ���� ������
  cm.teachSkill(3121004,30,30); // ��ǳ�� ��
  cm.teachSkill(3121007,30,30); // �Ϸ��� ����
  cm.teachSkill(3120006,30,30); // ���Ǹ� ��ũ : �Ǵн�
  cm.teachSkill(3120008,30,30); // ���꽺�� ���̳� ����
  cm.teachSkill(3120010,10,10); // ��Ƽ�� �÷��Ӽ�
  cm.teachSkill(3120011,10,10); // ��ũ�ǽ�
  cm.teachSkill(3120012,15,15); // ����Ʈ ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 8) {
  if (cm.getJob() == 300 || cm.getJob() == 320 || cm.getJob() == 321 || cm.getJob() == 322){
   
  cm.teachSkill(3201008,30,30); // ���� ������
  cm.teachSkill(3211009,30,30); // ���� ������
  cm.teachSkill(3211010,30,30); // ���� ������
  cm.teachSkill(3211011,30,30); // ���� ������
  cm.teachSkill(3211012,30,30); // ���� ������
  cm.teachSkill(3210013,30,30); // ���� ������
  cm.teachSkill(3210015,30,30); // ���� ������
  cm.teachSkill(3001007,30,30); // ���� ������Ʈ
cm.teachSkill(3000001,20,20); // ũ��Ƽ�� �� -- 1����ų
  cm.teachSkill(3000002,15,15); // ��ó �����͸�
  cm.teachSkill(3001004,20,20); // �ַο� ��ο�
  cm.teachSkill(3001005,15,15); // ���� -- 1�� ��ų ��
  cm.teachSkill(3200000,20,20); // ũ�ν����� �����͸� -- 2�� ��ų ����
  cm.teachSkill(3200001,20,20); // ���̳� ���� : ����
  cm.teachSkill(3201005,20,20); // ���̾� �ַο� : ����
  cm.teachSkill(3201002,20,20); // ũ�ν����� �ν���
  cm.teachSkill(3201003,20,20); // ���� ����
  cm.teachSkill(3201004,20,20); // �ҿ� �ַο� : ����
  cm.teachSkill(3200006,10,10); // ������ Ʈ���̴�
  cm.teachSkill(3201007,15,15); // ��� �̱� -- 2�� ��ų ��
  cm.teachSkill(3211000,20,20); // ���� -- 3�� ��ų ����
  cm.teachSkill(3210001,15,15); // ��Ż ��ο�
  cm.teachSkill(3211002,15,15); // ����
  cm.teachSkill(3211003,20,20); // ���ڵ� ��
  cm.teachSkill(3211004,20,20); // �ַο� �̷���
  cm.teachSkill(3211005,20,20); // ������
  cm.teachSkill(3211006,20,20); // ��Ʈ������
  cm.teachSkill(3210007,10,10); // ����
  cm.teachSkill(3211008,20,20); // �巡�� �޽� -- 3����ų ��
  cm.teachSkill(3221000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(3220004,30,30); // ũ�ν����� ������Ʈ
  cm.teachSkill(3220010,10,10); // ��Ƽ�� ��Ʈ������
  cm.teachSkill(3221002,30,30); // ���� ������
  cm.teachSkill(3221001,30,30); // �Ǿ��
  cm.teachSkill(3221006,30,30); // �Ϸ��� ����
  cm.teachSkill(3220005,30,30); // ���Ǹ� ��ũ : ������
  cm.teachSkill(3221007,30,30); // ��������
  cm.teachSkill(3220009,10,10); // ��ũ�ǽ�
  cm.teachSkill(3220012,15,15); // ����Ʈ ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 9) {
  if (cm.getJob() == 400 || cm.getJob() == 410 || cm.getJob() == 411 || cm.getJob() == 412){
   cm.teachSkill(4111015,30,30); // ���� ������

  cm.teachSkill(4000000,10,10); // �Ժ� �ٵ� -- 1����ų
  cm.teachSkill(4001003,10,10); // ��ũ ����Ʈ
  cm.teachSkill(4001334,20,20); // ���� ����
  cm.teachSkill(4001344,20,20); // ��Ű ���� 
  cm.teachSkill(4001005,20,20); // ���̽�Ʈ -- 1�� ��ų ��
  cm.teachSkill(4100000,20,20); // �ں��� �����͸� -- 2�� ��ų ����
  cm.teachSkill(4100001,30,30); // ũ��Ƽ�� ���ο�
  cm.teachSkill(4101003,20,20); // �ں��� �ν���
  cm.teachSkill(4100007,10,10); // ������ Ʈ���̴�
  cm.teachSkill(4101008,20,20); // ������ ����Ʈ
  cm.teachSkill(4001014,10,10); // �÷��� ����
  cm.teachSkill(4101010,20,20); // ���� Ż������ -- 2�� ��ų ��
  cm.teachSkill(4111002,20,20); // ������ ��Ʈ�� -- 3�� ��ų ����
  cm.teachSkill(4111003,10,10); // ������ ��
  cm.teachSkill(4111007,20,20); // ��ũ �÷���
  cm.teachSkill(4110008,20,20); // ������ ��ũ�Ͻ�
  cm.teachSkill(4111009,10,10); // ���Ǹ� �ں���
  cm.teachSkill(4111010,20,20); // Ʈ���� ���ο�
  cm.teachSkill(4110011,20,20); // ����
  cm.teachSkill(4110012,10,10); // ���õ� ǥâ��
  cm.teachSkill(4111013,20,20); // ���̵� ���ø�
  cm.teachSkill(4110014,10,10); // �Ƶ巹���� -- 3����ų ��
  cm.teachSkill(4121000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(4120002,30,30); // ����ũ
  cm.teachSkill(4121003,20,20); // ��ٿ�
  cm.teachSkill(4120011,10,10); // ����Ż ����
  cm.teachSkill(4120012,30,30); // �ں��� ������Ʈ
  cm.teachSkill(4121013,30,30); // ���巯�� ���ο�
  cm.teachSkill(4121014,30,30); // ��ũ ������Ƽ
  cm.teachSkill(4121015,30,30); // ���� �����
  cm.teachSkill(4121016,30,30); // ��緹�̵�
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 10) {
  if (cm.getJob() == 400 || cm.getJob() == 420 || cm.getJob() == 421 || cm.getJob() == 422){
  cm.teachSkill(4000000,10,10); // �Ժ� �ٵ� -- 1����ų
  cm.teachSkill(4001003,10,10); // ��ũ ����Ʈ
  cm.teachSkill(4001334,20,20); // ���� ����
  cm.teachSkill(4001344,20,20); // ��Ű ���� 
  cm.teachSkill(4001005,20,20); // ���̽�Ʈ -- 1�� ��ų ��
  cm.teachSkill(4200000,20,20); // ��� �����͸� -- 2�� ��ų ����
  cm.teachSkill(4201002,20,20); // ��� �ν���
  cm.teachSkill(4201004,10,10); // ��ƿ
  cm.teachSkill(4201012,20,20); // ������ ��ο�
  cm.teachSkill(4200007,10,10); // ������ Ʈ���̴�
  cm.teachSkill(4001014,10,10); // �÷��� ����
  cm.teachSkill(4201009,20,20); // ī���� 
  cm.teachSkill(4200010,10,10); // ���� �����͸�
  cm.teachSkill(4201011,10,10); // �޼� ���� -- 2�� ��ų ��
  cm.teachSkill(4211002,20,20); // ������ ���� -- 3�� ��ų ����
  cm.teachSkill(4211003,10,10); // ����Ŷ
  cm.teachSkill(4211006,20,20); // �޼� �ͽ��÷���
  cm.teachSkill(4211007,20,20); // ��ũ �÷���
  cm.teachSkill(4211008,20,20); // ������ ��Ʈ��
  cm.teachSkill(4210010,20,20); // ����
  cm.teachSkill(4211011,20,20); // ���� ī�Ϲ�
  cm.teachSkill(4210012,10,10); // �׸��� 
  cm.teachSkill(4210013,20,20); // ������ ��ũ�Ͻ�-- 3����ų ��
  cm.teachSkill(4221000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(4221001,30,30); // �ϻ�
  cm.teachSkill(4220002,30,30); // ����ũ
  cm.teachSkill(4221006,30,30); // ����ź
  cm.teachSkill(4221007,30,30); // �θ޶� ����
  cm.teachSkill(4221010,30,30); // ��緹�̵�
  cm.teachSkill(4220011,10,10); // ����Ż ����
  cm.teachSkill(4220012,30,30); // ��� ������Ʈ
  cm.teachSkill(4221013,20,20); // ������ �ν���Ʈ
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 11) {
  if (cm.getJob() == 500 || cm.getJob() == 510 || cm.getJob() == 511 || cm.getJob() == 512){
  cm.teachSkill(5110014,30,30); // ����� -- 1����ų
cm.teachSkill(5001010,10,10); // ����� -- 1����ų
  cm.teachSkill(5001002,20,20); // ��Ӽ�Ʈ ű
  cm.teachSkill(5001003,20,20); // ���� ���̾�
  cm.teachSkill(5001005,10,10); // �뽬
  cm.teachSkill(5000007,10,10); // Ʈ��Ƽ�� �ξ� -- 1�� ��ų ��
  cm.teachSkill(5100001,20,20); // ��Ŭ �����͸� -- 2�� ��ų ����
  cm.teachSkill(5101004,20,20); // ��ũ�� ��ġ
  cm.teachSkill(5101006,20,20); // ��Ŭ �ν���
  cm.teachSkill(5100009,10,10); // hp ����
  cm.teachSkill(5100010,10,10); // ������ Ʈ���̴�
  cm.teachSkill(5101011,20,20); // ��Ż Ŭ���Ƽ
  cm.teachSkill(5101012,20,20); // ����̵� ����
  cm.teachSkill(5100013,10,10); // �ε��� -- 2�� ��ų ��
  cm.teachSkill(5110000,20,20); // ���� �����͸� -- 3�� ��ų ����
  cm.teachSkill(5110001,20,20); // ������ ���� 
  cm.teachSkill(5111002,20,20); // ������ ������
  cm.teachSkill(5111007,20,20); // ��Ű ���̽�
  cm.teachSkill(5111009,20,20); // ���� �����̷�
  cm.teachSkill(5111010,20,20); // ���ο� ����ú�
  cm.teachSkill(5110011,20,20); // ũ��Ƽ�� ������
  cm.teachSkill(5111012,20,20); // ��ũ���̺� -- 3����ų ��
  cm.teachSkill(5121000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(5121001,30,30); // �巡�� ��Ʈ����ũ
  cm.teachSkill(5121007,30,30); // �ǽ�Ʈ �η�����
  cm.teachSkill(5121009,20,20); // ���� �ν���
  cm.teachSkill(5121010,5,5); // Ÿ�� ����
  cm.teachSkill(5120011,10,10); // ī���� ����
  cm.teachSkill(5120012,5,5); // ���� ��Ű ���̽�
  cm.teachSkill(5121013,30,30); // ���� ��ƿ����
  cm.teachSkill(5120014,20,20); // ���� ũ����
  cm.teachSkill(5121015,30,30); // ����������
  cm.teachSkill(5121016,30,30); // ������ ���Ʈ
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 12) {
  if (cm.getJob() == 500 || cm.getJob() == 520 || cm.getJob() == 521 || cm.getJob() == 522){
 cm.teachSkill(5001010,10,10); // ����� -- 1����ų
 cm.teachSkill(5000000,10,10); // ����� -- 1����ų
cm.teachSkill(5210015,10,10); // ����� -- 1����ų
  cm.teachSkill(5001002,20,20); // ��Ӽ�Ʈ ű
  cm.teachSkill(5001003,20,20); // ���� ���̾�
  cm.teachSkill(5001005,10,10); // �뽬
  cm.teachSkill(5000007,10,10); // Ʈ��Ƽ�� �ξ� -- 1�� ��ų ��
  cm.teachSkill(5200000,20,20); // �� �����͸�  -- 2�� ��ų ����
  cm.teachSkill(5201001,20,20); // �ű׳� ��
  cm.teachSkill(5201003,20,20); // �� �ν���
  cm.teachSkill(5201006,20,20); // �齺�ܼ�
  cm.teachSkill(5201008,10,10); // ���Ǵ� �Ҹ�
  cm.teachSkill(5200009,10,10); // ������ Ʈ���̴�
  cm.teachSkill(5200010,20,20); // Ʈ���� ���̾�
  cm.teachSkill(5201011,5,5); // ���� -- 2�� ��ų ��
  cm.teachSkill(5211007,20,20); // ��Ű ���̽� -- 3�� ��ų ����
  cm.teachSkill(5211008,20,20); // ���� �跲 ��
  cm.teachSkill(5211009,20,20); // �ҷ�����Ʈ �Ҹ�
  cm.teachSkill(5211010,20,20); // �Ҹ� ���Ž�
  cm.teachSkill(5211011,20,20); // ����� ũ��
  cm.teachSkill(5210012,20,20); // ��Ű�� ���̼�Ʈ
  cm.teachSkill(5210013,20,20); // Ǯ��Ż ����
  cm.teachSkill(5211014,20,20); // ��Ÿ ���͵� -- 3����ų ��
  cm.teachSkill(5221000,30,30); // ������ ��� -- 4����ų ����
  cm.teachSkill(5221004,30,30); // ���ǵ� ���̾�
  cm.teachSkill(5220012,10,10); // ī���� ����
  cm.teachSkill(5221013,30,30); // ���� ��ƿ����
  cm.teachSkill(5220014,5,5); // ���� ��Ű ���̽�
  cm.teachSkill(5221015,20,20); // ��Ƽ���� ���̹�
  cm.teachSkill(5221016,30,30); // ��� ��
  cm.teachSkill(5221017,30,30); // �۽Ƿ��̵�
  cm.teachSkill(5221018,20,20); // ���̷� ��Ÿ��
  cm.teachSkill(5220019,10,10); // ũ�� Ŀ�Ǵ���
  cm.teachSkill(5220020,30,30); // ĸƾ ��״�Ƽ
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 19) {
  if (cm.getJob() == 400 || cm.getJob() == 430 || cm.getJob() == 431 || cm.getJob() == 432  || cm.getJob() == 433  || cm.getJob() == 434){
  cm.teachSkill(4001344,20,20); // ��Ű ����
  cm.teachSkill(4001334,20,20); // ���� ����
  cm.teachSkill(4331011,30,30); // ���� ������
  cm.teachSkill(4000000,10,10); // �Ժ� �ٵ� -- 1����ų
  cm.teachSkill(4001011,5,5); // �÷��� ����
  cm.teachSkill(4001014,20,20); // ���̵� ����
  cm.teachSkill(4001013,20,20); // ���� ������
  cm.teachSkill(4001005,20,20); // ���̽�Ʈ -- 1�� ��ų ��
  cm.teachSkill(4300000,20,20); // �̵��� �����͸� -- 2�� ��ų ����
  cm.teachSkill(4301003,10,10); // ���� ���̽�Ʈ
  cm.teachSkill(4301004,15,15); // ����̵� ���� -- 2�� ��ų ��
  cm.teachSkill(4311002,20,20); // ����Ż ��ο� -- 3�� ��ų ����
  cm.teachSkill(4311003,20,20); // ������ ����
  cm.teachSkill(4311005,20,20); // ī����
  cm.teachSkill(4310006,10,10); // ������ Ʈ���̴�
  cm.teachSkill(4311009,10,10); // �̵� �ν��� -- 3����ų ��
  cm.teachSkill(4321002,5,5); // �÷��� �� -- 4����ų ����
  cm.teachSkill(4321004,20,20); // ���� ���� 
  cm.teachSkill(4320005,20,20); // ����
  cm.teachSkill(4321006,20,20); // �ö��� ����� -- 4����ų ��
  cm.teachSkill(4331000,20,20); // ���� ���� -- 5����ų ����
  cm.teachSkill(4330001,10,10); // ���꽺�� ��ũ ����Ʈ
  cm.teachSkill(4331002,20,20); // �̷� �̹�¡
  cm.teachSkill(4331006,20,20); // �罽����
  cm.teachSkill(4330007,10,10); // ����Ż ��ƿ
  cm.teachSkill(4330008,20,20); // ������ ��ũ�Ͻ�
  cm.teachSkill(4330009,20,20); // ������ �̺����� -- 5����ų ��
  cm.teachSkill(4341000,30,30); // ��ٿ� -- 6����ų ����
  cm.teachSkill(4341004,30,30); // ���̵� ǻ��
  cm.teachSkill(4341006,30,30); // ���� ����Ʈ
  cm.teachSkill(4341007,30,30); // ���� ����Ʈ
  cm.teachSkill(4340010,10,10); // �����Ͻ�
  cm.teachSkill(4341011,30,30); // ��緹�̵�
  cm.teachSkill(4340012,10,10); // ����Ż ����
  cm.teachSkill(4340013,30,30); // �̵��� ������Ʈ
  cm.teachSkill(4341009,30,30); // ���� ��ο�
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 15) {
  if (cm.getJob() == 2002 || cm.getJob() == 2300 || cm.getJob() == 2310 || cm.getJob() == 2311 || cm.getJob() == 2312){
  cm.teachSkill(20020109,1,1); // ������ ȸ�� -- 0�� ��ų
  cm.teachSkill(20021110,1,1); // ������ �ູ
  cm.teachSkill(20020111,1,1); // ��Ÿ�ϸ��� ����
  cm.teachSkill(20020112,1,1); // ���� �ڰ� -- 0�� ��ų ��
  cm.teachSkill(23001000,20,20); // ���ǵ� ��� -- 1�� ��ų ����
  cm.teachSkill(23000001,15,15); // ���ټ� �Ŀ� 
  cm.teachSkill(23001002,10,10); // ��ũ�ι�ƽ ����
  cm.teachSkill(23000003,20,20); // ���� ���̹� -- 1�� ��ų ��
  cm.teachSkill(23101000,20,20); // ũ�ν� �Ǿ�� -- 2�� ��ų ����
  cm.teachSkill(23101001,15,15); // ���� ����̺�
  cm.teachSkill(23100004,5,5); // ���̳� ��
  cm.teachSkill(23101002,20,20); // ��󺸿�� �ν���
  cm.teachSkill(23101003,15,15); // ���Ǹ� ��ǻ��
  cm.teachSkill(23100005,20,20); // ��󺸿�� �����͸�
  cm.teachSkill(23100006,20,20); // ���̳� ���� : ��󺸿��
  cm.teachSkill(23100008,10,10); // ������ Ʈ���̴� -- 2����ų ��
  cm.teachSkill(23111000,20,20); // ��Ʈ����ũ ��� -- 3����ų ����
  cm.teachSkill(23111001,20,20); // ���� ����̵�
  cm.teachSkill(23111002,20,20); // ������ ������ũ
  cm.teachSkill(23111003,20,20); // �Ž�Ʈ ���̺�
  cm.teachSkill(23110006,15,15); // ����ű ��������
  cm.teachSkill(23111004,20,20); // �̱״Ͻ� �ξ�
  cm.teachSkill(23111005,20,20); // ���� ����
  cm.teachSkill(23111008,20,20); // ������Ż ����Ʈ -- 3����ų ��
  cm.teachSkill(23121000,30,30); // �̽�Ÿ���� �� -- 4����ų ����
  cm.teachSkill(23121002,20,20); // �����帮 ���Ǿ�
  cm.teachSkill(23121003,30,30); // ����Ʈ�� ����
  cm.teachSkill(23120011,20,20); // �Ѹ� ����Ʈ
  cm.teachSkill(23121004,30,30); // �ؽþ�Ʈ ���Ǹ�
  cm.teachSkill(23120009,30,30); // ��󺸿�� ������Ʈ
  cm.teachSkill(23120010,20,20); // ���潺 �극��ũ
  cm.teachSkill(23120012,30,30); // ���꽺�� ���̳� ����
  cm.teachSkill(23121005,30,30); // ������ ���
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 20) {
  if (cm.getJob() == 3001 || cm.getJob() == 3100 || cm.getJob() == 3110 || cm.getJob() == 3111 || cm.getJob() == 3112){
  cm.teachSkill(30010110,1,1); // ���� ���� -- 0�� ��ų
  cm.teachSkill(30010185,1,1); // ����� ����
  cm.teachSkill(30010111,1,1); // ���� Ŀ�� -- 0�� ��ų��
  cm.teachSkill(31000004,10,10); // ���� ������ -- 1�� ��ų ����
  cm.teachSkill(31001000,15,15); // ���� ���̴�
  cm.teachSkill(31001001,20,20); // ���� �ν���
  cm.teachSkill(31000002,10,10); // ��ũ ������Ƽ
  cm.teachSkill(31000003,10,10); // hp���� -- 1�� ��ų ��
  cm.teachSkill(31100007,1,1); // ���� ������ 1�� ��ȭ -- 2�� ��ų ����
  cm.teachSkill(31101000,20,20); // �ҿ� ����
  cm.teachSkill(31101001,20,20); // ��ũ ������Ʈ
  cm.teachSkill(31101002,15,15); // ���� Ʈ���̽�
  cm.teachSkill(31101003,20,20); // ��ũ ������
  cm.teachSkill(31100004,20,20); // ���� �����͸�
  cm.teachSkill(31100006,20,20); // �ƿ�������
  cm.teachSkill(31100005,10,10); // ������ Ʈ���̴� -- 2����ų ��
  cm.teachSkill(31110010,1,1); // ���� ������ 2�� ��ȭ -- 3����ų ����
  cm.teachSkill(31111000,20,20); // ��ũ ������Ʈ
  cm.teachSkill(31111001,20,20); // ���� ��ο�
  cm.teachSkill(31111003,20,20); // ���� ���̺�
  cm.teachSkill(31111005,20,20); // ����� �극��
  cm.teachSkill(31111004,20,20); // ��ũ �ε��
  cm.teachSkill(31110006,15,15); // �̺� ����
  cm.teachSkill(31110007,20,20); // ����Ʈ���̼� 
  cm.teachSkill(31110008,15,15); // ���� ���� 
  cm.teachSkill(31110009,5,5); // �ƽ� ���� -- 3����ų ��
  cm.teachSkill(31120011,1,1); // ���� ������ ���� ��ȭ -- 4����ų ����
  cm.teachSkill(31121000,30,30); // ���� �ͽ��÷���
  cm.teachSkill(31121001,30,30); // ���� ����Ʈ
  cm.teachSkill(31121003,20,20); // ���� ũ����
  cm.teachSkill(31121006,20,20); // ��ũ ���ε�
  cm.teachSkill(31121005,30,30); // ��Ÿ�����ý�
  cm.teachSkill(31121007,15,15); // ���Ǵ�Ƽ ����
  cm.teachSkill(31121002,10,10); // ���Ǹ� ��ġ
  cm.teachSkill(31121004,30,30); // ������ ���
  cm.teachSkill(31120008,30,30); // ���꽺�� ���� �����͸�
  cm.teachSkill(31120009,30,30); // �ϵ� ��Ų
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 18) {
  if (cm.getJob() == 501 || cm.getJob() == 530 || cm.getJob() == 531 || cm.getJob() == 532){
  cm.teachSkill(5011006,10,10); // ����� -- 1����ų
cm.teachSkill(5311010,30,30); // ����� -- 1����ų
  cm.teachSkill(109,1,1); // ������ ���� -- 0�� ��ų
  cm.teachSkill(110,1,1); // ���̷� ����
  cm.teachSkill(111,1,1); // ������ ���� -- 0����ų ��
  cm.teachSkill(5011000,20,20); // ĳ�� ���÷��� -- 1�� ��ų ����
  cm.teachSkill(5011002,15,15); // �Ⱓ�� �齺��
  cm.teachSkill(5011001,20,20); // ��Ī ĳ��
  cm.teachSkill(5010003,10,10); // ����� ĳ�� -- 1�� ��ų ��
  cm.teachSkill(5301000,20,20); // ������ �� -- 2�� ��ų ����
  cm.teachSkill(5301001,20,20); // ��Ű ������
  cm.teachSkill(5301002,20,20); // ĳ�� �ν���
  cm.teachSkill(5301003,20,20); // ��Ű ����
  cm.teachSkill(5300005,20,20); // ĳ�� �����͸�
  cm.teachSkill(5300004,15,15); // ũ��Ƽ�� ���̾�
  cm.teachSkill(5300008,10,10); // ���̷� Ʈ���̴� -- 2����ų ��
  cm.teachSkill(5311000,20,20); // ĳ�� ������ũ -- 3����ų ����
  cm.teachSkill(5311001,20,20); // ��Ű �Ŀ���
  cm.teachSkill(5311003,15,15); // ĳ�� ����
  cm.teachSkill(5311002,20,20); // ��Ű ���̺�
  cm.teachSkill(5311004,10,10); // ��ũ�� �귿
  cm.teachSkill(5311005,20,20); // ��Ű ���̽�
  cm.teachSkill(5310006,15,15); // �������� ĳ��
  cm.teachSkill(5310007,20,20); // ����Ż �ͽ�Ʈ��
  cm.teachSkill(5310009,15,15); // �ݰ��� ���� -- 3����ų ��
  cm.teachSkill(5321000,30,30); // ĳ�� ����ī -- 4����ų ����
  cm.teachSkill(5321012,30,30); // ĳ�� ������
  cm.teachSkill(5321001,30,30); // ���� ��ƿ����
  cm.teachSkill(5321010,30,30); // ���̷� ���Ǹ�
  cm.teachSkill(5321003,15,15); // ���׳�ƽ ��Ŀ
  cm.teachSkill(5321004,15,15); // ����Ʈ ��Ű Ʈ����
  cm.teachSkill(5321005,30,30); // ������ ���
  cm.teachSkill(5320009,30,30); // �������� ĳ��
  cm.teachSkill(5320008,30,30); // ������ ��Ű ����
  cm.teachSkill(5320007,5,5); // ���� ��Ű ���̽�
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 16) {
  if (cm.getJob() == 2003 || cm.getJob() == 2400 || cm.getJob() == 2410 || cm.getJob() == 2411 || cm.getJob() == 2412){
  cm.teachSkill(20030204,1,1); // ���鸮 �ν���Ʈ -- 0�� ��ų
  cm.teachSkill(20031205,1,1); // ���� ������
  cm.teachSkill(20030206,1,1); // ���� �����ͷ�Ƽ 
  cm.teachSkill(20031207,1,1); // ��ƿ ��ų 
  cm.teachSkill(20031208,1,1); // ��ų �Ŵ�����Ʈ
  cm.teachSkill(20031209,1,2); // ������Ʈ -- 0����ų ��
  cm.teachSkill(24001000,20,20); // ���� �Ǿ�� -- 1�� ��ų ����
  cm.teachSkill(24001001,20,20); // �ŷ�Ʈ ���� ���ҽ��� ��
  cm.teachSkill(24001002,15,15); // ������Ʈ ����
  cm.teachSkill(24000003,10,10); // �� �̺����� -- 1�� ��ų ��
  cm.teachSkill(24101000,20,20); // �� ���� ����Ʈ -- 2�� ��ų ����
  cm.teachSkill(24101001,20,20); // �ŷ�Ʈ ���� ���ҽ��� ��
  cm.teachSkill(24101002,20,20); // �긮�� ī��Ʈ
  cm.teachSkill(24100003,10,10); // ��� ī��Ʈ 
  cm.teachSkill(24100004,20,20); // ���� �����͸�
  cm.teachSkill(24101005,20,20); // ���� �ν���
  cm.teachSkill(24100006,10,10); // �� ������� -- 2�� ��ų ��
  cm.teachSkill(24111000,20,20); // ��Ʈ ���� ���� -- 3�� ��ų ����
  cm.teachSkill(24111001,20,20); // �ŷ�Ʈ ���� ���ҽ��� ��
  cm.teachSkill(24111002,20,20); // �� ���� ���ҽ���
  cm.teachSkill(24111003,20,20); // �̽����� �����ؼ�
  cm.teachSkill(24110004,20,20); // �÷��� �� �ø�
  cm.teachSkill(24111005,20,20); // ������Ʈ
  cm.teachSkill(24110007,20,20); // ��ťƮ ���� 
  cm.teachSkill(24111006,20,20); // ���� ����
  cm.teachSkill(24111008,20,20); // ���� ����(��ų�ñ� ������)
  cm.teachSkill(24121000,30,30); // ��Ƽ�� ����̺� -- 4����ų ����
  cm.teachSkill(24121001,30,30); // �ŷ�Ʈ ���� ���ҽ��� ��
  cm.teachSkill(24120002,20,20); // ���͸� ī��Ʈ
  cm.teachSkill(24121003,20,20); // Ʈ���϶���Ʈ
  cm.teachSkill(24121004,30,30); // ������ ���� �Ƹ���
  cm.teachSkill(24121005,30,30); // ���佺Ʈ ���� ī��
  cm.teachSkill(24120006,30,30); // ���� ������Ʈ
  cm.teachSkill(24121007,20,20); // �ҿ� ��ƿ
  cm.teachSkill(24121008,30,30); // ������ ���
  cm.teachSkill(24121010,20,20); // Ʈ���϶���Ʈ(�ñ������)
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose(); 
  }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 13) {
  if (cm.getJob() == 2100 || cm.getJob() == 2110 || cm.getJob() == 2111 || cm.getJob() == 2112){
  cm.teachSkill(21100002,20,20); // �޺� �渱
  cm.teachSkill(21101011,20,20); // �޺� �渱
  cm.teachSkill(21101005,20,20); // �޺� �渱
  cm.teachSkill(21110003,20,20); // �޺� �渱
  cm.teachSkill(21111013,20,20); // �޺� �渱
  cm.teachSkill(21110006,20,20); // �޺� �渱
  cm.teachSkill(21111014,20,20); // �޺� �渱

  cm.teachSkill(21000002,20,20); // ���� ���� -- 1�� ��ų ����
  cm.teachSkill(21000000,10,10); // �޺� �����Ƽ
  cm.teachSkill(21001001,5,5); // �Ĺ� ����
  cm.teachSkill(21001003,20,20); // ���� �ν���
  cm.teachSkill(21000004,10,10); // �޺� ���Ž� -- 1�� ��ų ��
  cm.teachSkill(21100001,20,20); // Ʈ���� ���� -- 2�� ��ų ����
  cm.teachSkill(21100000,20,20); // ���� �����͸�
  cm.teachSkill(21100002,10,10); // ���̳� ���� 
  cm.teachSkill(21101003,10,10); // �ٵ� ������
  cm.teachSkill(21100005,10,10); // �޺� �巹��
  cm.teachSkill(21101006,10,10); // ����� ����
  cm.teachSkill(21100007,20,20); // �޺� �渱
  cm.teachSkill(21100008,10,10); // ������ Ʈ���̴�
  cm.teachSkill(21100010,20,20); // ���̳� ���� -- 2�� ��ų ��
  cm.teachSkill(21110002,20,20); // Ǯ ���� -- 3�� ��ų ����
  cm.teachSkill(21110000,20,20); // �޺� ũ��Ƽ��
  cm.teachSkill(21110003,20,20); // ���̳� �佺
  cm.teachSkill(21110006,20,20); // �Ѹ� ���� 
  cm.teachSkill(21111001,20,20); // ����Ʈ
  cm.teachSkill(21111009,20,20); // �޺� ������
  cm.teachSkill(21110010,10,10); // Ŭ���� ����
  cm.teachSkill(21110011,20,20); // �޺� ������Ʈ
  cm.teachSkill(21111012,10,10); // ���� ���� -- 3�� ��ų ��
  cm.teachSkill(21121000,30,30); // ������ ���
  cm.teachSkill(21120002,30,30); // ���� ����
  cm.teachSkill(21120001,20,20); // ���� �����͸�
  cm.teachSkill(21120005,30,30); // ���̳� ��ο�
  cm.teachSkill(21121003,20,20); // ������ ���ĵ�
  cm.teachSkill(21120004,20,20); // ���� ���潺
  cm.teachSkill(21120006,30,30); // �޺� ���佺Ʈ
  cm.teachSkill(21120007,30,30); // �޺� �踮��
  cm.teachSkill(21120011,10,10); // ������Ʈ ����
  cm.teachSkill(21120012,30,30); // ���꽺�� ���̳� ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 14) {
  if (cm.getJob() == 2200 || cm.getJob() == 2210 || cm.getJob() == 2211 || cm.getJob() == 2212 || cm.getJob() == 2213 || cm.getJob() == 2214 || cm.getJob() == 2215 || cm.getJob() == 2216 || cm.getJob() == 2217 || cm.getJob() == 2218){
   cm.teachSkill(22171052,20,20); // �巡�� �ҿ� -- 1�� ��ų ����
  cm.teachSkill(22171053,20,20); // �巡�� �ҿ� -- 1�� ��ų ����
  cm.teachSkill(22171054,20,20); // �巡�� �ҿ� -- 1�� ��ų ����
 cm.teachSkill(22000000,20,20); // �巡�� �ҿ� -- 1�� ��ų ����
  cm.teachSkill(22001001,20,20); // ���� �̻��� -- 1�� ��ų ��
  cm.teachSkill(22101000,20,20); // ���̾� ��Ŭ -- 2�� ��ų ����
  cm.teachSkill(22101001,20,20); // �ڷ���Ʈ -- 2�� ��ų ��
  cm.teachSkill(22111000,20,20); // ����Ʈ�� ��Ʈ -- 3�� ��ų ����
  cm.teachSkill(22111001,20,20); // ���� ���� -- 3�� ��ų ��
  cm.teachSkill(22121000,20,20); // ���̽� �극�� -- 4�� ��ų ����
  cm.teachSkill(22120001,10,10); // ���� ����� 
  cm.teachSkill(22120002,10,10); // ���� �����͸� -- 4�� ��ų ��
  cm.teachSkill(22131000,20,20); // ���� �÷��� -- 5�� ��ų ����
  cm.teachSkill(22131001,10,10); // ���� �ǵ�
  cm.teachSkill(22131002,10,10); // ������Ż ���� -- 5�� ��ų ��
  cm.teachSkill(22140000,15,15); // ũ��Ƽ�� ���� -- 6�� ��ų ����
  cm.teachSkill(22141001,20,20); // �巡�� ������Ʈ 
  cm.teachSkill(22141002,20,20); // ���� �ν���
  cm.teachSkill(22141004,10,10); // �巡�� ��ũ -- 6�� ��ų ��
  cm.teachSkill(22150000,15,15); // ���� ���ø������̼� -- 7�� ��ų ����
  cm.teachSkill(22151001,20,20); // �극��
  cm.teachSkill(22151002,10,10); // ų�� ��
  cm.teachSkill(22150004,10,10); // �巡�� ����ŷ -- 7�� ��ų ��
  cm.teachSkill(22160000,5,5); // �巡�� ǻ�� -- 8�� ��ų ����
  cm.teachSkill(22161001,20,20); // �����ũ
  cm.teachSkill(22161002,10,10); // ��Ʈ ���͸�
  cm.teachSkill(22161004,15,15); // ���н��� ��ȣ
  cm.teachSkill(22161005,10,10); // �ڷ���Ʈ �����͸�
  cm.teachSkill(22161003,5,5); // ��Ŀ���� ���ζ� -- 8�� ��ų ��
  cm.teachSkill(22171000,30,30); // ������ ��� -- 9�� ��ų ����
  cm.teachSkill(22170001,30,30); // ���� �����͸�
  cm.teachSkill(22171003,30,30); // �÷��� ��
  cm.teachSkill(22171004,30,30); // ����� ����
  cm.teachSkill(22171002,30,30); // �Ϸ��� -- 9�� ��ų ��
  cm.teachSkill(22181000,25,25); // ���н��� �ູ -- 10�� ��ų ����
  cm.teachSkill(22181001,30,30); // ������ 
  cm.teachSkill(22181002,30,30); // ��ũ����
  cm.teachSkill(22181003,30,30); // �ҿｺ��  
  cm.teachSkill(22181004,20,20); // ���н��� ���� -- 10�� ��ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }

} else if (selection == 819) {
  cm.teachSkill(50001214,1,1); // ���Ǽ�ȣ -- 0����ų
  cm.teachSkill(51000001,15,15); // �ҿ� �ǵ� -- 1�� ��ų ����
  cm.teachSkill(51001004,20,20); // �ҿ� ���̵�
  cm.teachSkill(51001003,10,10); // �ҿ� ����
  cm.teachSkill(51000002,10,10); // �ҿ� ������Ƽ
  cm.teachSkill(51000000,10,10); // HP ���� -- 1�� ��ų ��
  cm.teachSkill(51100001,20,20); // �ҵ� �����͸� -- 2�� ��ų ���� 
  cm.teachSkill(51100002,20,20); // ���̳� ����
  cm.teachSkill(51101003,20,20); // �ҵ� �ν���
  cm.teachSkill(51101004,20,20); // �г� 
  cm.teachSkill(51101005,20,20); // �ҿ� ����̹�
  cm.teachSkill(51101006,20,20); // ���̴� ü�̽� 
  cm.teachSkill(51100000,10,10); // ������ Ʈ���̴� -- 2�� ��ų �� 
  cm.teachSkill(51111006,20,20); // �ҿ� ������ -- 3�� ��ų ����
  cm.teachSkill(51111007,20,20); // ���̴� ������
  cm.teachSkill(51111003,10,10); // ���̴� ����
  cm.teachSkill(51111004,20,20); // �ҿ� �ε�� 
  cm.teachSkill(51111005,20,20); // ���� ũ����
  cm.teachSkill(51110001,20,20); // ���ټ�
  cm.teachSkill(51110002,20,20); // �ҿ� ���� 
  cm.teachSkill(51110000,30,30); // ���� ��Ŀ���� -- 3�� ��ų ��
  cm.teachSkill(51120003,30,30); // ���꽺�� �ҿ� �ǵ� -- 4�� ��ų ����
  cm.teachSkill(51120001,30,30); // ���꽺�� �ҵ� �����͸�
  cm.teachSkill(51120002,30,30); // ���꽺�� ���̳� ����
  cm.teachSkill(51121007,30,30); // �ҿ� ���Ʈ 
  cm.teachSkill(51121008,30,30); // ���̴� ���Ʈ
  cm.teachSkill(51121006,30,30); // �ҿ� ������
  cm.teachSkill(51120000,10,10); // �Ĺ� �����͸�
  cm.teachSkill(51121004,30,30); // ���Ľ�
  cm.teachSkill(51121005,30,30); // ������ ���
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
} else if (selection == 820) {
 if (cm.getJob() == 2004 || cm.getJob() == 2700 || cm.getJob() == 2710 || cm.getJob() == 2711 || cm.getJob() == 2712){
  cm.teachSkill(20040216,1,1); // �����̾� -- 0�� ��ų ����
  cm.teachSkill(20040217,1,1); // ��Ŭ���� 
  cm.teachSkill(20040218,1,1); // �۹̿���Ʈ
  cm.teachSkill(20041222,1,1); // �۹̿���Ʈ
  cm.teachSkill(20040221,1,1); // �Ŀ� ���� ����Ʈ -- 0�� ��ų ��
  cm.teachSkill(27001100,20,20); // Ʈ��Ŭ �÷��� -- 1�� ��ų ����
  cm.teachSkill(27001002,10,10); // ����Ʈ��������
  cm.teachSkill(27000003,10,10); // ����ʸ� ��������
  cm.teachSkill(27001004,20,20); // �ͽ��ٵ� ����
  cm.teachSkill(27000106,5,5); // �� ���� ��ȭ -- 1�� ��ų ��
  cm.teachSkill(27101100,20,20); // ���ǵ� ���� -- 2�� ��ų ���� 
  cm.teachSkill(27101101,10,10); // �ι��̷�����Ƽ
  cm.teachSkill(27101202,20,20); // ���̵� ������
  cm.teachSkill(27100003,20,20); // ���� ���� ��ũ�Ͻ�
  cm.teachSkill(27101004,10,10); // �����ν���
  cm.teachSkill(27100005,10,10); // ���� �����͸� 
  cm.teachSkill(27100006,5,5); // ���� ����� -- 2�� ��ų �� 
  cm.teachSkill(27111100,20,20); // ����Ʈ�� ����Ʈ -- 3�� ��ų ����
  cm.teachSkill(27111101,20,20); // ���� ������
  cm.teachSkill(27111202,20,20); // �콺�Ǿ�
  cm.teachSkill(27111303,20,20); // ���� ���̵� 
  cm.teachSkill(27111004,10,10); // ��Ƽ ������
  cm.teachSkill(27111005,10,10); // ������������ ����
  cm.teachSkill(27111006,20,20); // ��ƽ �޵����̼�
  cm.teachSkill(27110007,20,20); // ������ Ÿ�̴� -- 3�� ��ų ��
  cm.teachSkill(27121100,30,30); // ����Ʈ ���÷��� -- 4�� ��ų ����
  cm.teachSkill(27121201,30,30); // ��� ��Ÿ��
  cm.teachSkill(27121202,30,30); // ����Į����
  cm.teachSkill(27121303,30,30); // �ۼַ�Ʈ ų 
  cm.teachSkill(27121005,30,30); // ��ũ ũ������
  cm.teachSkill(27121006,30,30); // ��ũ�Ͻ� �Ҽ���
  cm.teachSkill(27120007,30,30); // ���� �����͸�
  cm.teachSkill(27120008,5,5); // ��ũ����Ʈ �����͸�
  cm.teachSkill(27121009,30,30); // ������ ���
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 27) {
 if (cm.getJob() == 6000 || cm.getJob() == 6100 || cm.getJob() == 6110 || cm.getJob() == 6111 || cm.getJob() == 6112){
  cm.teachSkill(60001216,1,1); // �����ý���ġ: ����� -- 0�� ��ų ����
  cm.teachSkill(60001217,1,1); // �����ý���ġ: ���ݸ�� 
  cm.teachSkill(60001218,1,1); // ��Ƽ�� Ŀ��Ʈ
  cm.teachSkill(60000219,1,1); // Ʈ�����ǱԷ��̼�
  cm.teachSkill(60000222,1,1); // ���̿� ��
  cm.teachSkill(60001225,1,1); // Ŀ�ǵ� -- 0�� ��ų ��
  cm.teachSkill(61001000,20,20); // �巡�ｽ���� -- 1�� ��ų ����
  cm.teachSkill(61001101,20,20); // �÷��� ��
  cm.teachSkill(61001002,15,15); // ���� ����
  cm.teachSkill(61001004,10,10); // ��Ų�����ؼ�
  cm.teachSkill(61000003,20,20); // �巡�ｽ����
  cm.teachSkill(61001005,20,20); // �巡�ｽ���� -- 1�� ��ų ��
  cm.teachSkill(61100009,2,2); // �巡�ｽ���� 1�� ��ȭ -- 2�� ��ų ���� 
  cm.teachSkill(61101100,20,20); // ����Ʈ ���̺�
  cm.teachSkill(61101101,10,10); // �Ǿ ����
  cm.teachSkill(61101002,20,20); // �� ���� �ҵ�
  cm.teachSkill(61101004,20,20); // ������ ��
  cm.teachSkill(61100006,10,10); // �ҵ� �����͸�
  cm.teachSkill(61100007,10,10); // �̳� ������
  cm.teachSkill(61100005,1,1); // ����� 1�� ��ȭ
  cm.teachSkill(61100008,1,1); // ���ݸ�� 1�� ��ȭ -- 2�� ��ų ��
  cm.teachSkill(61110015,2,2); // �巡�ｽ���� 2�� ��ȭ -- 3�� ��ų ����
  cm.teachSkill(61111100,20,20); // ����Ʈ
  cm.teachSkill(61111101,20,20); // ü���ø�
  cm.teachSkill(61111008,10,10); // ���̳� �ǱԷ��̼�
  cm.teachSkill(61111002,15,15); // ��Ʈ�����̵�
  cm.teachSkill(61111003,20,20); // ������ ��Ʈ����
  cm.teachSkill(61111004,20,20); // īŻ������
  cm.teachSkill(61110006,5,5); // ���� ��Ŀ����
  cm.teachSkill(61110007,10,10); // ��庥���� �̳� ������
  cm.teachSkill(61110005,1,1); // ����� 2�� ��ȭ
  cm.teachSkill(61110010,1,1); // ���ݸ�� 2�� ��ȭ -- 3�� ��ų ��
  cm.teachSkill(61120020,2,2); // �巡�� ������ 3�� ��ȭ -- 4�� ��ų ����
  cm.teachSkill(61121100,30,30); // �Ⱑ ������
  cm.teachSkill(61121201,30,30); // �Ⱑ ������ (Ʈ�����ǱԷ��̼�)
  cm.teachSkill(61121102,30,30); // ��� ��Ʈ��
  cm.teachSkill(61121104,20,20); // �ҵ� ��Ʈ����ũ 
  cm.teachSkill(61121105,20,20); // ���۳� �극��
  cm.teachSkill(61120007,30,30); // ��庥�� �� ���� �ҵ�
  cm.teachSkill(61121009,20,20); // �ι���Ʈ �Ƹ�
  cm.teachSkill(61120008,10,10); // ���̳� �ǱԷ��̼�
  cm.teachSkill(61120011,30,30); // ���ø�Ī Ŀ����
  cm.teachSkill(61120012,30,30); // ��庥�� �ҵ� �����͸�
  cm.teachSkill(61121014,30,30); // ����� ���
  cm.teachSkill(61120010,1,1); // ����� 3�� ��ȭ
  cm.teachSkill(61120013,1,1); // ���ݸ�� 3�� ��ȭ
  cm.teachSkill(61121203,1,1); // ��� ��Ʈ�� Ʈ�����ǱԷ��̼�
  cm.teachSkill(61121217,1,1); // ����彺 �� ���� �ҵ� 
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose(); 
  }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
  

} else if (selection == 26) {
 if (cm.getJob() == 6001 || cm.getJob() == 6500 || cm.getJob() == 6510 || cm.getJob() == 6511 || cm.getJob() == 6512){
  cm.teachSkill(60011216,1,1); // ������ -- 0�� ��ų ����
  cm.teachSkill(60010217,1,1); // Ʈ�� ������
  cm.teachSkill(60011218,1,1); // ������ ����Ʈ 
  cm.teachSkill(60011219,1,1); // �ҿ� ��Ʈ��Ʈ
  cm.teachSkill(60011221,1,1); // �ڵ����Ʈ 
  cm.teachSkill(60011222,1,1); // �巹�� �� -- 0�� ��ų ��
  cm.teachSkill(65001100,20,20); // ���� ��Ÿ -- 1�� ��ų ����
  cm.teachSkill(65001001,10,10); // ������ ����Ʈ
  cm.teachSkill(65001002,15,15); // ������ ũ�ν�
  cm.teachSkill(65000003,20,20); // ���Ǵ�Ƽ �� -- 1�� ��ų ��
  cm.teachSkill(65101100,20,20); // ���� �ͽ��÷��� -- 2�� ��ų ���� 
  cm.teachSkill(65101001,20,20); // ��ũ ��Ŀ��
  cm.teachSkill(65101002,20,20); // �Ŀ� Ʈ������
  cm.teachSkill(65100003,10,10); // �ҿｴ�� �����͸�
  cm.teachSkill(65100004,5,5); // �̳�������
  cm.teachSkill(65100005,20,20); // ���Ǵ�Ƽ �� -- 2�� ��ų ��
  cm.teachSkill(65111100,20,20); // �ҿ� ��Ŀ -- 3�� ��ų ����
  cm.teachSkill(65111007,20,20); // �ҿ� ��Ŀ
  cm.teachSkill(65111101,20,20); // ���� ��Ÿ
  cm.teachSkill(65111002,20,20); // ���� ũ����
  cm.teachSkill(65111003,20,20); // �� ���� ���̼�Ʈ
  cm.teachSkill(65111004,20,20); // ���̾� ���ͽ�
  cm.teachSkill(65110005,20,20); // �̳� �ǽ�
  cm.teachSkill(65110006,20,20); // ���Ǵ�Ƽ �� -- 3�� ��ų ��
  cm.teachSkill(65121100,30,30); // �����̸� �ξ� -- 4�� ��ų ����
  cm.teachSkill(65121101,30,30); // Ʈ����Ƽ
  cm.teachSkill(65121007,30,30); // Ʈ����Ƽ(2Ÿ)
  cm.teachSkill(65121008,30,30); // Ʈ����Ƽ(3Ÿ)
  cm.teachSkill(65121002,30,30); // �Ǵ����� ����ġ��
  cm.teachSkill(65121003,30,30); // �ҿ� �����ͽ�
  cm.teachSkill(65121004,30,30); // �ҿ� ������
  cm.teachSkill(65120005,30,30); // �ҿｴ�� ������Ʈ
  cm.teachSkill(65120006,30,30); // ���Ǵ�Ƽ ��
  cm.teachSkill(65121009,30,30); // ����� ���
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 515) { // ����Ʈ��Ŀ
  cm.teachSkill(14000000,10,10); // �Ժ�ٵ� -- 1����ų ����
  cm.teachSkill(14001003,10,10); // ��ũ ����Ʈ
  cm.teachSkill(14001005,10,10); // ��ũ�Ͻ�
  cm.teachSkill(14001004,20,20); // ��Ű ����
  cm.teachSkill(14001007,20,20); // ���̽�Ʈ -- 1����ų ��
  cm.teachSkill(14101006,20,20); // �����̾� -- 2����ų ����
  cm.teachSkill(14101008,20,20); // ������ ����Ʈ
  cm.teachSkill(14101009,20,20); // ���� Ż������
  cm.teachSkill(14100000,20,20); // �ں��� �����͸�
  cm.teachSkill(14101002,20,20); // �ں��� �ν���
  cm.teachSkill(14100001,20,20); // ũ��Ƽ�� ���ο�
  cm.teachSkill(14101004,10,10); // �÷��� ����
  cm.teachSkill(14100010,10,10); // ������ Ʈ���̴� -- 2����ų ��
  cm.teachSkill(14111010,1,1); // ��ũ �÷��� -- 3����ų ����
  cm.teachSkill(14110004,20,20); // ����
  cm.teachSkill(14111001,20,20); // ������ ��
  cm.teachSkill(14111000,20,20); // ������ ��Ʈ��
  cm.teachSkill(14111008,20,20); // ���̵� ���ø�
  cm.teachSkill(14111007,10,10); // ���Ǹ� �ں���
  cm.teachSkill(14110011,10,10); // �Ƶ巹����
  cm.teachSkill(14111005,20,20); // ���巯�� ���ο�
  cm.teachSkill(14110009,20,20); // ������ ��ũ�Ͻ� -- 3����ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();

} else if (selection == 514) { // ��Ʈ����Ŀ
 if (cm.getJob() == 1500 || cm.getJob() == 1510 || cm.getJob() == 1511 || cm.getJob() == 1512){
  cm.teachSkill(15000000,10,10); // �� ��� -- 1����ų ����
  cm.teachSkill(15001002,20,20); // ��Ӽ�Ʈ ű
  cm.teachSkill(15001003,10,10); // �뽬
  cm.teachSkill(15001004,10,10); // ����Ʈ��
  cm.teachSkill(15000008,10,10); // HP ����
  cm.teachSkill(15000006,10,10); // ũ��Ƽ�� �ξ� -- 1����ų ��
  cm.teachSkill(15100001,20,20); // ��Ŭ �����͸� -- 2����ų ����
  cm.teachSkill(15101002,20,20); // ��Ŭ �ν���
  cm.teachSkill(15100004,20,20); // ������ ����
  cm.teachSkill(15100009,10,10); // ������ Ʈ���̴�
  cm.teachSkill(15101003,10,10); // ��ũ�� ��ġ
  cm.teachSkill(15101005,20,20); // ������ ������
  cm.teachSkill(15101008,20,20); // ��Ż Ŭ���Ƽ
  cm.teachSkill(15101010,20,20); // ����̵� ���� -- 2����ų ��
  cm.teachSkill(15111011,1,1); // ��Ű ���̽� -- 3����ų ����
  cm.teachSkill(15111007,30,30); // ��ũ ���̺�
  cm.teachSkill(15111003,20,20); // ��ũ ���̺�
  cm.teachSkill(15111012,20,20); // ��ũ ���̺�
  cm.teachSkill(15110010,20,20); // ���� �����͸�
  cm.teachSkill(15111006,10,10); // ����ũ
  cm.teachSkill(15110009,20,20); // ũ��Ƽ�� ������
  cm.teachSkill(15111004,20,20); // �ǽ�Ʈ �η�����
  cm.teachSkill(15111005,20,20); // ���� �ν���
  cm.teachSkill(15111008,20,20); // ������ ���Ʈ -- 3����ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 511) {
  cm.teachSkill(11001002,20,20); // �Ŀ� ��Ʈ����ũ -- 1����ų
  cm.teachSkill(11001001,10,10); // ���̾� �ٵ�
  cm.teachSkill(11001003,20,20); // ������ ����Ʈ
  cm.teachSkill(11001004,10,10); // �ҿ�
  cm.teachSkill(11000005,10,10); // HP���� -- 1����ų��
  cm.teachSkill(11100000,20,20); // �ҵ� �����͸� -- 2����ų ����
  cm.teachSkill(11101001,20,20); // �ҵ� �ν���
  cm.teachSkill(11101002,20,20); // ���̳� ����
  cm.teachSkill(11101003,20,20); // �г�
  cm.teachSkill(11101004,20,20); // �ҿ� ���̵�
  cm.teachSkill(11101005,10,10); // �ҿ� ����
  cm.teachSkill(11101006,20,20); // �Ŀ� ���÷���
  cm.teachSkill(11101008,20,20); // �귣��
  cm.teachSkill(11100007,10,10); // ������ Ʈ���̴� -- 2����ų ��
  cm.teachSkill(11110000,20,20); // ���� ��Ŀ���� -- 3����ų ����
  cm.teachSkill(11111001,20,20); // �޺� ����
  cm.teachSkill(11111002,20,20); // �д�
  cm.teachSkill(11111003,20,20); // �ڸ�
  cm.teachSkill(11111004,20,20); // �극�̺� ������
  cm.teachSkill(11111007,10,10); // ���� ũ����
  cm.teachSkill(11110005,20,20); // ���꽺�� �޺�
  cm.teachSkill(11111006,20,20); // �ҿ� ����̹� --3����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();

} else if (selection == 512) {
  cm.teachSkill(12001001,15,15); // ���� ���� -- 1����ų
  cm.teachSkill(12001002,15,15); // ���� �Ƹ�
  cm.teachSkill(12001003,20,20); // ����Ŭ��
  cm.teachSkill(12001004,10,10); // �÷���
  cm.teachSkill(12000005,10,10); // HP���� -- 1����ų��
  cm.teachSkill(12101000,20,20); // �޵����̼� -- 2����ų ����
  cm.teachSkill(12101001,10,10); // ���ο�
  cm.teachSkill(12101002,20,20); // ���̳� �ַο�
  cm.teachSkill(12101003,20,20); // �ڷ���Ʈ
  cm.teachSkill(12101005,20,20); // ������Ż ����
  cm.teachSkill(12101004,20,20); // ���� �ν���
  cm.teachSkill(12101006,20,20); // ���̾� �ʶ�
  cm.teachSkill(12100007,20,20); // ���� �����͸�
  cm.teachSkill(12100008,10,10); // ���� ����� -- 2����ų ��
  cm.teachSkill(12110000,20,20); // ���� ũ��Ƽ�� -- 3����ų ����
  cm.teachSkill(12110001,20,20); // ������Ʈ ���ø������̼�
  cm.teachSkill(12111002,20,20); // ��
  cm.teachSkill(12111003,20,20); // ���׿�
  cm.teachSkill(12111004,20,20); // ������Ʈ
  cm.teachSkill(12111005,20,20); // �÷��ӱ��
  cm.teachSkill(12111006,30,30); // ���̾� ��Ʈ����ũ -- 3����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();

} else if (selection == 513) {
 if (cm.getJob() == 1300 || cm.getJob() == 1310 || cm.getJob() == 1311 || cm.getJob() == 1312){
  cm.teachSkill(10001253,1,1);
  cm.teachSkill(10001254,1,1);
  cm.teachSkill(13001020,30,30); // ���� -- 3����
  cm.teachSkill(13001021,30,30); // ���� -- 3����
  cm.teachSkill(13001022,30,30); // ���� -- 3����
  cm.teachSkill(13000023,30,30); // ���� -- 3����
  cm.teachSkill(13101020,30,30); // ���� -- 3����
  cm.teachSkill(13101021,30,30); // ���� -- 3����
  cm.teachSkill(13100022,30,30); // ���� -- 3����
  cm.teachSkill(13101001,30,30); // ���� -- 3����
  cm.teachSkill(13101023,30,30); // ���� -- 3����
  cm.teachSkill(13101024,30,30); // ���� -- 3����
  cm.teachSkill(13100000,30,30); // ���� -- 3����
  cm.teachSkill(13100025,30,30); // ���� -- 3����
  cm.teachSkill(13100026,30,30); // ���� -- 3����
  cm.teachSkill(13111020,30,30); // ���� -- 3����
  cm.teachSkill(13111021,30,30); // ���� -- 3����
  cm.teachSkill(13110022,30,30); // ���� -- 3����
  cm.teachSkill(13111023,30,30); // ���� -- 3����
  cm.teachSkill(13111024,30,30); // ���� -- 3����
  cm.teachSkill(13110025,30,30); // ���� -- 3����
  cm.teachSkill(13110026,30,30); // ���� -- 3����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 21) {
 if (cm.getJob() == 3200 || cm.getJob() == 3210 || cm.getJob() == 3211 || cm.getJob() == 3212){
  cm.teachSkill(32001000,20,20); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(32001001,10,10); // �ǴϽ� ����
  cm.teachSkill(32000015,20,20); // �ǴϽ� ����
  cm.teachSkill(32001008,10,10); // �ǴϽ� ����
  cm.teachSkill(32001009,10,10); // �ǴϽ� ����
  cm.teachSkill(32001010,10,10); // �ǴϽ� ����
  cm.teachSkill(32001011,10,10); // �ǴϽ� ����
  cm.teachSkill(32001013,10,10); // �ǴϽ� ����
  cm.teachSkill(32001012,1,1); // ������Ż ��ū
  cm.teachSkill(32001002,15,15); // �ڷ���Ʈ
  cm.teachSkill(32001003,20,20); // ��ũ ���� -- 1�� ��ų ��
  cm.teachSkill(32101000,20,20); // ���� ��ο� -- 2�� ��ų ���� 
  cm.teachSkill(32101001,20,20); // ������ ��ũ ü��
  cm.teachSkill(32101003,20,20); // ���ο� ���� 
  cm.teachSkill(32101004,20,20); // ���� �巹�� 
  cm.teachSkill(32101005,20,20); // ������ �ν���
  cm.teachSkill(32100006,20,20); // ������ �����͸�
  cm.teachSkill(32100008,10,10); // ����ʸ� ������ 
  cm.teachSkill(32100007,10,10); // ���� ����� -- 2�� ��ų �� 
  cm.teachSkill(32111002,20,20); // ���� ��ο� -- 3�� ��ų ����
  cm.teachSkill(32111015,10,10); // ��Ʋ ����Ʈ
  cm.teachSkill(32111003,20,20); // ��ũ ����Ʈ��
  cm.teachSkill(32110001,20,20); // ��Ʋ �����͸�
  cm.teachSkill(32111012,20,20); // ��� ���� 
  cm.teachSkill(32110000,10,10); // ���꽺�� ��� ����
  cm.teachSkill(32111004,10,10); // ������
  cm.teachSkill(32111005,20,20); // ���۹ٵ� 
  cm.teachSkill(32111006,20,20); // �����̺�
  cm.teachSkill(32111010,10,10); // �ڷ���Ʈ �����͸�
  cm.teachSkill(32111014,10,10); // ���Ľ� -- 3�� ��ų ��
  cm.teachSkill(32120000,30,30); // ���Ľ� -- 4�� ��ų ����
  cm.teachSkill(32120001,30,30); // ���Ľ�
  cm.teachSkill(32121002,30,30); // ���Ľ�
  cm.teachSkill(32121003,30,30); // ���Ľ�
  cm.teachSkill(32121004,30,30); // ���Ľ�
  cm.teachSkill(32121006,30,30); // ���Ľ�
  cm.teachSkill(32121007,30,30); // ���Ľ�
  cm.teachSkill(32121010,30,30); // ���Ľ�
  cm.teachSkill(32120009,30,30); // ���Ľ� -- 4�� ��ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 22) {
  cm.teachSkill(33001000,20,20); // Ʈ���� �� -- 1�� ��ų ����
  cm.teachSkill(33001001,15,15); // ��Ծ� ���̵�
  cm.teachSkill(33001002,10,10); // ���� ����
  cm.teachSkill(33000005,20,20); // �����ƽ ���� ����̽�  -- 1�� ��ų ��
  cm.teachSkill(33100000,10,10); // ũ�ν����� �����͸� -- 2�� ��ų ���� 
  cm.teachSkill(33101001,20,20); // �� ��
  cm.teachSkill(33101002,10,10); // ��Ծ� �ξ� 
  cm.teachSkill(33101003,10,10); // �ҿ� �ַο� : ����
  cm.teachSkill(33101004,10,10); // ����
  cm.teachSkill(33101005,10,10); // �Ͽ︵
  cm.teachSkill(33101006,10,10); // ���зο�
  cm.teachSkill(33101007,20,20); // ���зο�
  cm.teachSkill(33101008,10,10); // ����(hidden ����)
  cm.teachSkill(33100009,20,20); // ���̳� ����
  cm.teachSkill(33100010,5,5); // ������ Ʈ���̴� 
  cm.teachSkill(33101012,20,20); // ũ�ν����� �ν���
  cm.teachSkill(33101011,15,15); // �ǹ� ȣũ -- 2�� ��ų ��
  cm.teachSkill(33110000,15,15); // ���̵� �����͸� -- 3�� ��ų ����
  cm.teachSkill(33111001,20,20); // ���ϵ� �� 
  cm.teachSkill(33111010,10,10); // ���ϵ� ��
  cm.teachSkill(33111002,20,20); // ũ�ν��ε�
  cm.teachSkill(33111003,15,15); // ���ϵ� Ʈ��
  cm.teachSkill(33111004,10,10); // ����ε�
  cm.teachSkill(33111005,30,30); // �ǹ� ȣũ
  cm.teachSkill(33111006,20,20); // Ŭ�ο� ��
  cm.teachSkill(33111007,30,30); // ��Ʈ ��
  cm.teachSkill(33110008,20,20); // �÷���
  cm.teachSkill(33111011,20,20); // ��ο�� -- 3�� ��ų ��
  cm.teachSkill(33120000,30,30); // ũ�ν����� ������Ʈ -- 4�� ��ų ����
  cm.teachSkill(33121001,30,30); // �÷��� ���� 
  cm.teachSkill(33121002,30,30); // �Ҵ� ��
  cm.teachSkill(33121004,30,30); // ���� ������
  cm.teachSkill(33121005,10,10); // ĳ���� �� 
  cm.teachSkill(33121007,30,30); // ������ ���
  cm.teachSkill(33121008,30,30); // ����� ����
  cm.teachSkill(33121009,30,30); // ���ϵ� ��ĭ 
  cm.teachSkill(33120010,10,10); // ���ϵ� �ν���Ʈ
  cm.teachSkill(33120011,30,30); // ���꽺�� ���̳� ���� -- 4�� ��ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
} else if (selection == 23) {
 if (cm.getJob() == 3000 || cm.getJob() == 3500 || cm.getJob() == 3510 || cm.getJob() == 3511 || cm.getJob() == 3512){
  cm.teachSkill(30001068,1,1); // ��ī�� �뽬 -- 0�� ��ų ����,��
  cm.teachSkill(35001001,20,20); // �÷��� ��ó -- 1�� ��ų ����
  cm.teachSkill(35001002,10,10); // ��Ż�Ƹ� : ������Ÿ��
  cm.teachSkill(35001003,20,20); // �帱 ����
  cm.teachSkill(35001004,15,15); // ��Ʋ�� ��
  cm.teachSkill(35000005,1,1); // ���� ����  -- 1�� ��ų ��
  cm.teachSkill(35100000,10,10); // ��ī�� �����͸� -- 2�� ��ų ���� 
  cm.teachSkill(35101003,20,20); // ����� �ظ�
  cm.teachSkill(35101004,5,5); // ���� �ν��� 
  cm.teachSkill(35101005,10,10); // ���°���Ʈ : GX-9 
  cm.teachSkill(35101006,10,10); // ��ī�� �ν���
  cm.teachSkill(35101007,20,20); // ����Ʈ �Ƹ�
  cm.teachSkill(35100008,20,20); // ������ �����͸�
  cm.teachSkill(35101009,20,20); // ��ȭ�� �÷��� ��ó
  cm.teachSkill(35101010,20,20); // ��ȭ�� ��Ʋ�� ��
  cm.teachSkill(35100011,5,5); // ������ Ʈ���̴� -- 2�� ��ų ��
  cm.teachSkill(35111001,10,10); // ��Ʋ����Ʈ -- 3�� ��ų ����
  cm.teachSkill(35111002,10,10); // ���׳�ƽ �ʵ� 
  cm.teachSkill(35111004,20,20); // ��Ż�Ƹ� : ��� �ӽŰ�
  cm.teachSkill(35111005,10,10); // ���������� : EX-7
  cm.teachSkill(35111009,10,10); // ��Ʋ����Ʈ
  cm.teachSkill(35111010,10,10); // ��Ʋ����Ʈ
  cm.teachSkill(35111011,10,10); // �����κ� : H-LX
  cm.teachSkill(35111013,20,20); // ��Ű ���̽�
  cm.teachSkill(35110014,10,10); // ��Ż�ǽ�Ʈ �����͸�
  cm.teachSkill(35111015,20,20); // ���� ��ġ
  cm.teachSkill(35111016,15,15); // ���� Ʃ�� -- 3�� ��ų ��
  cm.teachSkill(35120000,20,20); // ��Ż�Ƹ� �ͽ�Ʈ�� -- 4�� ��ų ����
  cm.teachSkill(35120001,30,30); // �κ� �����͸� 
  cm.teachSkill(35121003,30,30); // ���ӽ� : Ÿ��ź
  cm.teachSkill(35121005,30,30); // ��Ż�Ƹ� : �̻��� ��ũ
  cm.teachSkill(35121006,30,30); // ������Ƽ
  cm.teachSkill(35121007,10,10); // ������ ���
  cm.teachSkill(35121008,30,30); // ����� ����
  cm.teachSkill(35121009,30,30); // �κ� ���丮 : RM1
  cm.teachSkill(35121010,30,30); // ���ø����̾� : AF-11
  cm.teachSkill(35121012,30,30); // ������ ����Ʈ
  cm.teachSkill(35121013,30,30); // ��Ż�Ƹ� : ��� �ӽŰ�
  cm.teachSkill(35120014,5,5); // ���� ��Ű ���̽� -- 4�� ��ų ��
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
   }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 25) {
 if (cm.getJob() == 3600 || cm.getJob() == 3610 || cm.getJob() == 3611 || cm.getJob() == 3612){
  cm.teachSkill(36001000,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36001001,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36001002,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36000003,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36001004,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36001005,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101000,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101008,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101009,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101001,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101002,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101003,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36101004,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36100005,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36100006,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36100007,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36100010,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111000,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111001,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111009,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111010,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111002,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111003,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36110004,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36110005,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111006,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36110007,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36111008,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36110012,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(36000004,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(30020232,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(30020234,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(30021237,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(30021236,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(30020240,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 24) {
 if (cm.getJob() == 3001 || cm.getJob() == 3101 || cm.getJob() == 3120 || cm.getJob() == 3121 || cm.getJob() == 3122){
  cm.teachSkill(30010110,30,30); // Ʈ���� ��ο� -- 1�� ��ų ����
  cm.teachSkill(30010185,30,30); 
  cm.teachSkill(31011000,30,30); 
  cm.teachSkill(31011001,30,30); 
  cm.teachSkill(31010002,30,30); 
  cm.teachSkill(31010003,30,30); 
  cm.teachSkill(31201000,30,30); 
  cm.teachSkill(31201001,30,30); 
  cm.teachSkill(31201002,30,30); 
  cm.teachSkill(31201003,30,30); 
  cm.teachSkill(31200004,30,30); 
  cm.teachSkill(31200005,30,30); 
  cm.teachSkill(31200006,30,30); 
  cm.teachSkill(31211000,30,30); 
  cm.teachSkill(31211001,30,30); 
  cm.teachSkill(31211002,30,30); 
  cm.teachSkill(31211003,30,30); 
  cm.teachSkill(31211004,30,30);
  cm.teachSkill(31210005,30,30);  
  cm.teachSkill(31210006,30,30); 
cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 28) {
 if (cm.getJob() == 2700 || cm.getJob() == 2710 || cm.getJob() == 2711 || cm.getJob() == 2712){
  cm.teachSkill(20040216,1,1); // �����̾� -- 0�� ��ų ����
  cm.teachSkill(20040217,1,1); // ��Ŭ���� 
  cm.teachSkill(20040218,1,1); // �۹̿���Ʈ
  cm.teachSkill(20040221,1,1); // �Ŀ� ���� ����Ʈ -- 0�� ��ų ��
  cm.teachSkill(27001100,20,20); // Ʈ��Ŭ �÷��� -- 1�� ��ų ����
  cm.teachSkill(27001002,10,10); // ����Ʈ��������
  cm.teachSkill(27000003,10,10); // ����ʸ� ��������
  cm.teachSkill(27001004,20,20); // �ͽ��ٵ� ����
  cm.teachSkill(27000106,5,5); // �� ���� ��ȭ -- 1�� ��ų ��
  cm.teachSkill(27101100,20,20); // ���ǵ� ���� -- 2�� ��ų ���� 
  cm.teachSkill(27101101,10,10); // �ι��̷�����Ƽ
  cm.teachSkill(27101202,20,20); // ���̵� ������
  cm.teachSkill(27100003,20,20); // ���� ���� ��ũ�Ͻ�
  cm.teachSkill(27101004,10,10); // �����ν���
  cm.teachSkill(27100005,10,10); // ���� �����͸� 
  cm.teachSkill(27100006,5,5); // ���� ����� -- 2�� ��ų �� 
  cm.teachSkill(27111100,20,20); // ����Ʈ�� ����Ʈ -- 3�� ��ų ����
  cm.teachSkill(27111101,20,20); // ���� ������
  cm.teachSkill(27111202,20,20); // �콺�Ǿ�
  cm.teachSkill(27111303,20,20); // ���� ���̵� 
  cm.teachSkill(27111004,10,10); // ��Ƽ ������
  cm.teachSkill(27111005,10,10); // ������������ ����
  cm.teachSkill(27111006,20,20); // ��ƽ �޵����̼�
  cm.teachSkill(27110007,20,20); // ������ Ÿ�̴� -- 3�� ��ų ��
  cm.teachSkill(27121100,30,30); // ����Ʈ ���÷��� -- 4�� ��ų ����
  cm.teachSkill(27121201,30,30); // ��� ��Ÿ��
  cm.teachSkill(27121202,30,30); // ����Į����
  cm.teachSkill(27121303,30,30); // �ۼַ�Ʈ ų 
  cm.teachSkill(27121005,30,30); // ��ũ ũ������
  cm.teachSkill(27121006,30,30); // ��ũ�Ͻ� �Ҽ���
  cm.teachSkill(27120007,30,30); // ���� �����͸�
  cm.teachSkill(27120008,5,5); // ��ũ����Ʈ �����͸�
  cm.teachSkill(27121009,30,30); // ������ ���
cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
} else if (selection == 29) {
 if (cm.getJob() == 5100 || cm.getJob() == 5110 || cm.getJob() == 5111 || cm.getJob() == 5112){
  cm.teachSkill(50001214,1,1); // ���Ǽ�ȣ -- 0����ų
  cm.teachSkill(51000001,15,15); // �ҿ� �ǵ� -- 1�� ��ų ����
  cm.teachSkill(51001004,20,20); // �ҿ� ���̵�
  cm.teachSkill(51001003,10,10); // �ҿ� ����
  cm.teachSkill(51000002,10,10); // �ҿ� ������Ƽ
  cm.teachSkill(51000000,10,10); // HP ���� -- 1�� ��ų ��
  cm.teachSkill(51100001,20,20); // �ҵ� �����͸� -- 2�� ��ų ���� 
  cm.teachSkill(51100002,20,20); // ���̳� ����
  cm.teachSkill(51101003,20,20); // �ҵ� �ν���
  cm.teachSkill(51101004,20,20); // �г� 
  cm.teachSkill(51101005,20,20); // �ҿ� ����̹�
  cm.teachSkill(51101006,20,20); // ���̴� ü�̽� 
  cm.teachSkill(51100000,10,10); // ������ Ʈ���̴� -- 2�� ��ų �� 
  cm.teachSkill(51111006,20,20); // �ҿ� ������ -- 3�� ��ų ����
  cm.teachSkill(51111007,20,20); // ���̴� ������
  cm.teachSkill(51111003,10,10); // ���̴� ����
  cm.teachSkill(51111004,20,20); // �ҿ� �ε�� 
  cm.teachSkill(51111005,20,20); // ���� ũ����
  cm.teachSkill(51110001,20,20); // ���ټ�
  cm.teachSkill(51110002,20,20); // �ҿ� ���� 
  cm.teachSkill(51110000,30,30); // ���� ��Ŀ���� -- 3�� ��ų ��
  cm.teachSkill(51120003,30,30); // ���꽺�� �ҿ� �ǵ� -- 4�� ��ų ����
  cm.teachSkill(51120001,30,30); // ���꽺�� �ҵ� �����͸�
  cm.teachSkill(51120002,30,30); // ���꽺�� ���̳� ����
  cm.teachSkill(51121007,30,30); // �ҿ� ���Ʈ 
  cm.teachSkill(51121008,30,30); // ���̴� ���Ʈ
  cm.teachSkill(51121006,30,30); // �ҿ� ������
  cm.teachSkill(51120000,15,15); // �Ĺ� �����͸�
  cm.teachSkill(51121004,30,30); // ���Ľ�
  cm.teachSkill(51121005,30,30); // ������ ���
cm.sendOk ("��ų�����Ͱ� �Ϸ�Ǿ����ϴ�.");
  dispose();
 }else{
     cm.sendOk("#b#h #��,#k ������ �̰� �ƴմϴ�. �ٽ� �������ּ���.");
     cm.dispose();
 }
 }
 }
}