var status = 0;
var now = "#r(�����)#k#b";
var maps = 0;
var mob = new Array(1, 2, 3, 4, 5);
var mobr = Math.floor(Math.random() * mob.length);
var x = 0;
var y = 0;
function action(mode, type, selection) {
        if (cm.TimeCheck(1, 35)) {
        now = "(���尡��)";
    }
    if (status == 0) {
        cm.sendSimple("#e<���������� : �̽�ƽ �ʵ�>#n\r\n���� �� ������ ����� ������� �ѷ����� �Ȱ����Բ� ������ �������͵��� �����Ѵٰ� �մϴ�. �츮�� �� ������ �̽�ƽ �ʵ��� �θ�����. �̽�ƽ �ʵ�� Ư���ð��뿡�� ��� ��Ÿ���ٰ� �ٽ� ������� �ʵ���½ð��� Ȯ�����ֽð� �������ֽñ� �ٶ��ϴ�.#b\r\n#L0#�̽�ƽ �ʵ忡 �����ϰ� �ͽ��ϴ�. " + now + "#l\r\n#L1#�̽�ƽ ������ ����ǰ�� ��ȯ�ϰ� �ͽ��ϴ�.#l");
        status++;
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.TimeCheck(1, 35)) {
                if (mob[mobr] == 1) { // �̽�ƽ����
                    maps = 931050800;
                    x = 3080;
                    y = 575;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300563, x, y);
                    cm.spawnMob(9300566, x, y);
                    cm.spawnMob(9300567, x, y);
                    cm.spawnMob(9300568, x, y);
                    cm.spawnMob(9300569, x, y);
                    cm.spawnMob(9300570, x, y);
                    cm.spawnMob(9300571, x, y);
                    cm.spawnMob(9300572, x, y);
                    cm.spawnMob(9300573, x, y);
                } else if (mob[mobr] == 2) { // �̽�ƽ�ݷ���
                    maps = 931050800;
                    x = 3080;
                    y = 575;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300594, x, y);
                } else if (mob[mobr] == 3) { // �̽�ƽ ��ī�̷�
                    maps = 931050810;
                    x = -2100;
                    y = 29;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300608, x, y);
                } else if (mob[mobr] == 4) { // �̽�ƽ����
                    maps = 931050820;
                    x = 20;
                    y = 392;
                    cm.warp(maps);
	    
                    cm.spawnMob(9300600, x, y);
                }
		cm.sendOk("�̽�ƽ ������ ����ּ��� !!");
            } else {
                cm.sendOk("�̽�ƽ �ʵ�� ���� #r���� 6�ú��� 8��#k ���̿��� ��Ÿ���ٰ� �ٽ� �Ȱ������� ������ٰ� �մϴ�. �ð��� Ȯ���Ͻð� �ٽ� ã�ƿ��ֽñ� �ٶ��ϴ�.");
                cm.dispose();
            }
        } else if (selection == 1) {
	cm.warp(980001003);
	cm.sendOk("#e< ������ ��ȯ : �̽�ƽ �ʵ� >#n\r\n\r\n�� ������ ��ȭ�� ���� �������� ��ȯ �Ͻð� ������ ����\r\n@��׽ý��� �Ͻø� �˴ϴ�.");
                cm.dispose();
        }
        cm.dispose();
    }
}
