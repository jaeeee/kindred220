


/*

	ǻ�� �¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : ��ũ��

	���ǽþ��̵� : 2144016
	
	���ǽ� �̸� : ����

	���ǽð� �ִ� �� : ��׽ý�

	���ǽ� ���� : ������ų �ִ� ���ǽ�


*/
importPackage(java.lang);
importPackage(Packages.client.skills);

var skillz = new Array(
new Array("���� ���׳�", 1121001, 10),
new Array("���Ľ�", 1121002, 10),
new Array("���꽺�� �޺�", 1120003, 10),
new Array("����", 1121006, 10),
new Array("����¡ ��ο�", 1121008, 10),
new Array("�η�����", 1121010, 10),
new Array("����� ����", 1121011, 5),
new Array("���꽺�� ���̳� ����", 1120013, 10),
new Array("���Ľ�", 1221002, 10),
new Array("����� ����", 1221002, 10),
new Array("��ų����", 1220005, 10),
new Array("����� ���Ǹ�", 1220006, 10),
new Array("����", 1221007, 10),
new Array("����Ʈ", 1221009, 10),
new Array("���꽺�� ����", 1220010, 10),
new Array("����", 1221011, 10),
new Array("����� ����", 1221012, 5),
new Array("���� ���׳�", 1321001, 10),
new Array("���Ľ�", 1321002, 10),
new Array("����", 1321003, 10),
new Array("��ũ����", 1320006, 10),
new Array("��Ȧ��", 1321007, 10),
new Array("��Ȧ���� ����", 1320008, 10),
new Array("��Ȧ���� ����", 1320009, 10),
new Array("����� ����", 1321010, 5),
new Array("��ũ ������", 1321012, 10),
new Array("���", 2121001, 10),
new Array("�̽�Ʈ �̷���", 2121003, 10),
new Array("���Ǵ�Ƽ", 2121004, 10),
new Array("������Ʈ", 2121005, 10),
new Array("�䷲������",  2121006, 10),
new Array("���׿�",  2121007, 10),
new Array("����� ����",  2121008, 5),
new Array("������ ����",  2120010, 10),
new Array("���",  2221001, 10),
new Array("�۷��̼� ü��",  2221003, 10),
new Array("���Ǵ�Ƽ",  2221004, 10),
new Array("�����׽�",  2221005, 10),
new Array("ü�� ����Ʈ��",  2221006, 10),
new Array("���ڵ�",  2221007, 10),
new Array("����� ����",  2221008, 5),
new Array("������ ����",  2220010, 10),
new Array("���",  2321001, 10),
new Array("���� ���÷���",  2321002, 10),
new Array("���Ϲ�Ʈ",  2321003, 10),
new Array("���Ǵ�Ƽ",  2321004, 10),
new Array("���꽺�� ����",  2321005, 10),
new Array("��������",  2321006, 10),
new Array("��������",  2321007, 10),
new Array("���׽ý�",  2321008, 10),
new Array("����� ����",  2321009, 5),
new Array("������ ����",  2320011, 10),
new Array("���� ������",  3121002, 10),
new Array("��ǳ�� ��",  3121004, 10),
new Array("���� ������Ʈ",  3120005, 10),
new Array("���Ǹ� ��ũ : �Ǵн�",  3120006, 10),
new Array("�Ϸ��� ����",  3121007, 10),
new Array("���꽺�� ���̳� ����",  3120008, 10),
new Array("����� ����",  3121009, 5),
new Array("�Ǿ��",  3221001, 10),
new Array("���� ������",  3221002, 10),
new Array("ũ�ν����� ������Ʈ",  3220004, 10),
new Array("���Ǹ� ��ũ : ������",  3220005, 10),
new Array("�Ϸ��� ����",  3221006, 10),
new Array("��������",  3221007, 10),
new Array("����� ����",  3221008, 5),
new Array("����ũ",  4120002, 10),
new Array("��ٿ�",  4121003, 10),
new Array("���� �ںν�",  4121004, 10),
new Array("����",  4120005, 10),
new Array("Ʈ���� ���ο�",  4121007, 10),
new Array("���� ����",  4121008, 10),
new Array("����� ����",  4121009, 5),
new Array("���õ� ǥâ��",  4120010, 10),
new Array("����Ż ����",  4120011, 10),
new Array("�ں��� ������Ʈ",  4120012, 10),
new Array("���巯�� ���ο�",  4121013, 10),
new Array("��ũ ������Ƽ",  4121014, 10),
new Array("���� �����",  4121015, 10),
new Array("��緹�̵�",  4121016, 10),
new Array("�ϻ�",  4221001, 10),
new Array("����ũ",  4220002, 10),
new Array("��ٿ�",  4221003, 10),
new Array("���� �ںν�",  4221004, 10),
new Array("����",  4220005, 10),
new Array("����ź",  4221006, 10),
new Array("�θ޶� ����",  4221007, 10),
new Array("����� ����",  4221008, 5),
new Array("�׸���",  4220009, 10),
new Array("��緹�̵�",  4221010, 10),
new Array("����Ż ����",  4220011, 10),
new Array("��� ������Ʈ",  4220012, 10),
new Array("������ �ν���Ʈ",  4221013, 10),
new Array("������ ����", 4311003, 20),
new Array("�巡�� ��Ʈ����ũ",  5121001, 10),
new Array("������ ����",  5121002, 10),
new Array("��������",  5121004, 10),
new Array("����ġ",  5121005, 10),
new Array("�ǽ�Ʈ �η�����",  5121007, 10),
new Array("����� ����",  5121008, 5),
new Array("���� �ν���",  5121009, 10),
new Array("Ÿ�� ����",  5121010, 10),
new Array("���� ��ƿ����",  5121013, 10),
new Array("���� ũ����",  5120014, 10),
new Array("����������",  5121015, 10),
new Array("������ ���Ʈ",  5121016, 10),
new Array("����Ʈ �����۽�",  5220002, 10),
new Array("���� ��Ʈ����ũ",  5221003, 10),
new Array("���ǵ� ���̾�",  5221004, 10),
new Array("����� ����",  5221010, 5),
new Array("���꽺�� ȣ��",  5220011, 10),
new Array("���� ��ƿ����",  5221013, 10),
new Array("��Ƽ���� ���̹�",  5221015, 10),
new Array("��� ��",  5221016, 10),
new Array("�۽Ƿ��̵�",  5221017, 10),
new Array("���̷� ��Ÿ��",  5221018, 10),
new Array("ũ�� Ŀ�Ǵ���",  5220019, 10),
new Array("ĸƾ ��״�Ƽ",  5220020, 10),
new Array("ĳ�� ����ī",  5321000, 10),
new Array("���� ��ƿ����",  5321001, 10),
new Array("���׳�ƽ ��Ŀ",  5321003, 10),
new Array("����Ʈ ��Ű Ʈ����",  5321004, 10),
new Array("������ ���",  5321005, 10),
new Array("����� ����",  5321006, 5),
new Array("���� ��Ű ���̽�",  5320007, 5),
new Array("������ ��Ű ����",  5320008, 10),
new Array("�������� ĳ��",  5320009, 10),
new Array("���̷� ���Ǹ�",  5321010, 10),
new Array("ĳ�� ������",  5321012, 10),
new Array("���� �����͸�",  21120001, 10),
new Array("���� ����",  21120002, 10),
new Array("������ ���ĵ�",  21121003, 10),
new Array("���� ���潺",  21120004, 10),
new Array("���̳� ��ο�",  21120005, 10),
new Array("�޺� ���佺Ʈ",  21120006, 10),
new Array("�޺� �踮��",  21120007, 10),
new Array("����� ����",  21121008, 5),
new Array("���꽺�� ���̳� ����",  21120012, 10),
new Array("�̽�Ÿ���� ��",  23121000, 10),
new Array("�����帮 ���Ǿ�",  23121002, 10),
new Array("����Ʈ�� ����",  23121003, 10),
new Array("�ؽþ�Ʈ ���Ǹ�",  23121004, 10),
new Array("����� ����",  23121008, 5),
new Array("��󺸿�� ������Ʈ",  23120009, 10),
new Array("���潺 �극��ũ",  23120010, 10),
new Array("���꽺�� ���̳� ����",  23120012, 10),
new Array("���� �ͽ��÷���",  31121000, 10),
new Array("���� ����Ʈ",  31121001, 10),
new Array("���Ǹ� ��ġ",  31121002, 10),
new Array("���� ũ����",  31121003, 10),
new Array("��Ÿ�����ý�",  31121005, 10),
new Array("��ũ ���ε�",  31121006, 10),
new Array("���Ǵ�Ƽ ����",  31121007, 10),
new Array("���꽺�� ���� �����͸�",  31120008, 10),
new Array("�ϵ� ��Ų",  31120009, 10),
new Array("���� ������ ���� ��ȭ",  31120011, 10),
new Array("��Ƽ�� ����̺�",  24121000, 10),
new Array("�ŷ�Ʈ ���� ���ҽ��� IV",  24121001, 10),
new Array("���͸� ī��Ʈ",  24120002, 10),
new Array("Ʈ���϶���Ʈ",  24121003, 10),
new Array("������ ���� �Ƹ���",  24121004, 10),
new Array("���佺Ʈ ���� ī��",  24121005, 10),
new Array("���� ������Ʈ",  24120006, 10),
new Array("�ҿ� ��ƿ",  24121007, 10),
new Array("����� ����",  24121009, 5),
new Array("���꽺�� �ҵ� �����͸�",  51120001, 10),
new Array("���꽺�� ���̳� ����",  51120002, 10),
new Array("���꽺�� �ҿ� �ǵ�",  51120003, 10),
new Array("���Ľ�",  51121004, 10),
new Array("�ҿ� ������",  51121006, 10),
new Array("�ҿ� ���Ʈ",  51121007, 10),
new Array("���̴� ���Ʈ",  51121008, 10),
new Array("���꽺�� ��ũ ����",  32120000, 10),
new Array("���꽺�� ���ο� ����",  32120001, 10),
new Array("�ǴϽ� ��ο�",  32121002, 10),
new Array("����Ŭ��",  32121003, 10),
new Array("��ũ ���׽ý�",  32121004, 10),
new Array("����",  32121006, 10),
new Array("����� ����",  32121008, 5),
new Array("����������",  32120009, 10),
new Array("ũ�ν����� ������Ʈ",  33120000, 10),
new Array("���ϵ� ��ĭ",  33121009, 10),
new Array("�÷��� ����",  33121001, 10),
new Array("�Ҵ� ��",  33121002, 10),
new Array("���� ������",  33121004, 10),
new Array("����� ����",  33121008, 5),
new Array("���꽺�� ���̳� ����",  33120011, 10),
new Array("��Ż�Ƹ� �ͽ�Ʈ��",  35120000, 10),
new Array("�κ� �����͸�",  35120001, 10),
new Array("���ӽ� : Ÿ��ź",  35121003, 10),
new Array("��Ż�Ƹ� : �̻��� ��ũ",  35121005, 10),
new Array("������Ƽ",  35121006, 10),
new Array("����� ����",  35121008, 5),
new Array("�κ� ���丮 : RM1",  35121009, 10),
new Array("���ø����̾� : AF-11",  35121010, 10),
new Array("������ ����Ʈ",  35121025, 10),
new Array("��Ż�Ƹ� : ��� �ӽŰ�", 35121013 ,10),
new Array("Ʈ��Ŭ �÷���", 27001100, 20),
new Array("����Ʈ ���÷���", 27121100, 10),
new Array("��� ��Ÿ��", 27121201, 10),
new Array("����Į����", 27121202, 10),
new Array("�ۼַ�Ʈų", 27121303, 10),
new Array("��ũ ũ������", 27121005, 10),
new Array("��ũ�Ͻ� �Ҽ���", 27121006, 10),
new Array("���� �����͸�", 27121007, 10),
new Array("��Ʈ����Ʈ �����͸�", 27121008, 10),
new Array("������ ���", 27121009, 10),
new Array("����� ����", 27121010, 5),
new Array("��׽�Ÿ��", 27120211, 10),
new Array("�Ⱑ ������", 61121100, 10),
new Array("��� ��Ʈ��", 61121102, 10),
new Array("�ҵ� ��ũ����ũ", 61121104, 10),
new Array("���۳� �극��", 61121105, 10),
new Array("���꽺�� �� ���� �ҵ�", 61120007, 10),
new Array("�ι���Ʈ �Ƹ�", 61121009, 10),
new Array("����� 3����ȭ", 61120010, 1),
new Array("���ø�Ī Ŀ����", 61120011, 10),
new Array("���꽺�� �ҵ� �����͸�", 61120012, 10),
new Array("���ݸ�� 3�� ��ȭ", 61120013, 1),
new Array("����� ���", 61120014, 10),
new Array("����� ����� ����", 61120015, 5),
new Array("�巡�ｽ���� 3�� ��ȭ", 61120020, 2),
new Array("�����̸� �ξ�", 65121100, 10),
new Array("Ʈ����Ƽ", 65121101, 10),
new Array("�Ǵ����� ����ġ��", 65121002, 10),
new Array("�ҿ� �����ͽ�", 65121003, 10),
new Array("�ҿ� ������", 65121004, 10),
new Array("�ҿｴ�� ������Ʈ", 65120005, 10),
new Array("����Ƽ�� IV", 65120006, 10),
new Array("����� ���", 65121009, 10),
new Array("����� ����� ����", 65121010, 5)
//�����ÿ�� �߰�
);


var status = -1;

function start() {
    status = -1;
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
        var text = "����� ���� ��ų���� �����Ű���..? �Ǵ� ������ ������ 0�̶� ���� ���� ��ų�� �����Ű���? #b\r\b\r\b";
        
        if (cm.getPlayer().getJob() >= 431 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4311003) == 0) {
                text += "#L0#������ ����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 432 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4321006) == 0) {
                text += "#L1#�ö��� ���Ʈ#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 433 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4331002) == 0) {
                text += "#L2#�̷� �̹�¡#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 433 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4330009) == 0) {
                text += "#L3#������ �̺�����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341004) == 0) {
                text += "#L4#���̵� ǻ��#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341006) == 0) {
                text += "#L5#���� ����Ʈ#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341007) == 0) {
                text += "#L6#���� ����Ʈ#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341011) == 0) {
                text += "#L7#��緹�̵�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4340013) == 0) {
                text += "#L8#�̵��� ������Ʈ#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22170001) == 0) {
                text += "#L9#���� �����͸�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22171002) == 0) {
                text += "#L10#�Ϸ���#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22171003) == 0) {
                text += "#L11#�÷��� ��#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2217 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22171004) == 0) {
                text += "#L12#����� ����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181000) == 0) {
                text += "#L13#���н��� �ູ#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181001) == 0) {
                text += "#L14#������#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181002) == 0) {
                text += "#L15#��ũ����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 2218 && cm.getPlayer().getJob() <= 2218) {
            if (getMasterLevel(cm, 22181003) == 0) {
                text += "#L16#�ҿｺ��#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1111 && cm.getPlayer().getJob() <= 1112) {
            if (getMasterLevel(cm, 11110005) == 0) {
                text += "#L17#���꽺�� �޺�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1111 && cm.getPlayer().getJob() <= 1112) {
            if (getMasterLevel(cm, 11111008) == 0) {
                text += "#L18#���� ũ����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1211 && cm.getPlayer().getJob() <= 1212) {
            if (getMasterLevel(cm, 12111003) == 0) {
                text += "#L19#���׿�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1211 && cm.getPlayer().getJob() <= 1212) {
            if (getMasterLevel(cm, 12111007) == 0) {
                text += "#L20#�ڷ���Ʈ �����͸�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1311 && cm.getPlayer().getJob() <= 1312) {
            if (getMasterLevel(cm, 13111002) == 0) {
                text += "#L21#��ǳ�� ��#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1311 && cm.getPlayer().getJob() <= 1312) {
            if (getMasterLevel(cm, 13110009) == 0) {
                text += "#L22#��Ż ��ο�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1411 && cm.getPlayer().getJob() <= 1412) {
            if (getMasterLevel(cm, 14111005) == 0) {
                text += "#L23#���巯�� ���ο�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1411 && cm.getPlayer().getJob() <= 1412) {
            if (getMasterLevel(cm, 14110004) == 0) {
                text += "#L24#����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1411 && cm.getPlayer().getJob() <= 1412) {
            if (getMasterLevel(cm, 14111010) == 0) {
                text += "#L25#��ũ �÷���#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1511 && cm.getPlayer().getJob() <= 1512) {
            if (getMasterLevel(cm, 15111004) == 0) {
                text += "#L26#�ǽ�Ʈ �η�����#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1511 && cm.getPlayer().getJob() <= 1512) {
            if (getMasterLevel(cm, 15111005) == 0) {
                text += "#L27#���� �ν���#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 1511 && cm.getPlayer().getJob() <= 1512) {
            if (getMasterLevel(cm, 15111011) == 0) {
                text += "#L28#��Ű ���̽�#l\r\n";
            }
        }
        if (cm.getPlayer().getJob() >= 0 && cm.getPlayer().getJob() <= 532) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(1003) == 0) {
                    text += "#L29#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 1000 && cm.getPlayer().getJob() <= 1512) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(10001003) == 0) {
                    text += "#L30#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2100 && cm.getPlayer().getJob() <= 2112) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20001003) == 0) {
                    text += "#L31#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2200 && cm.getPlayer().getJob() <= 2218) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20011003) == 0) {
                    text += "#L32#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2300 && cm.getPlayer().getJob() <= 2312) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20021003) == 0) {
                    text += "#L33#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 2400 && cm.getPlayer().getJob() <= 2412) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(20031003) == 0) {
                    text += "#L34#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 3200 && cm.getPlayer().getJob() <= 3512) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(30001003) == 0) {
                    text += "#L35#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 3100 && cm.getPlayer().getJob() <= 3112) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(30011003) == 0) {
                    text += "#L36#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 5000 && cm.getPlayer().getJob() <= 5112) {
            if (cm.getPlayer().getLevel() >= 70) {
                if (cm.getPlayer().getSkillLevel(50001003) == 0) {
                    text += "#L37#������ ȥ#l\r\n";
                }
            }
        }
        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
            if (getMasterLevel(cm, 4341009) == 0) {
                text += "#L38#�̵��� ������Ʈ#l\r\n";
            }
        }
//        if (cm.getPlayer().getJob() >= 434 && cm.getPlayer().getJob() <= 434) {
//            if (getMasterLevel(cm, 4340013) == 0) {
//                text += "#L8#�̵��� ������Ʈ#l\r\n";
//            }
//        }
        for (var i = 0 ; i < skillz.length ; i++) {
            if (Math.floor(skillz[i][1] / 10000) == cm.getPlayer().getJob()) {
                if (SkillFactory.getSkill(skillz[i][1]) == null) {
                    continue;
                }
                if (getMasterLevel(cm, skillz[i][1]) == 0) {
                    text += "#L"+skillz[i][1]+"#"+skillz[i][0]+"#l\r\n";
                }
            }
        }
        
        
        
        
        if (text.equals("����� ���� ��ų���� �����Ű���..? �Ǵ� ������ ������ 0�̶� ���� ���� ��ų�� �����Ű���? #b\r\b\r\b")) {
            text += "#L999#��� ��ų�� �����ϴ�.#l\r\n";
        }
        text += "#L1000#��ų�� �Ǵ� �����͸����� �ް� �ͽ��ϴ�.#l";
        cm.sendSimple(text);
    } else if (status == 1) {
        var skills = false;
        if (selection == 999) {
            cm.sendOk("��� �� �ִ� ��ų�� ��������.");
            cm.dispose();
        } else if (selection == 1000) {
            cm.dispose();
            cm.openNpc(9010000);
        } else if (selection == 0) {
            skills = true;
            cm.teachSkill(4311003, 0, 5);
        } else if (selection == 1) {
            skills = true;
            cm.teachSkill(4321006, 0, 5);
        } else if (selection == 2) {
            skills = true;
            cm.teachSkill(4331002, 0, 10);
        } else if (selection == 3) {
            skills = true;
            cm.teachSkill(4330009, 0, 10);
        } else if (selection == 4) {
            skills = true;
            cm.teachSkill(4341004, 0, 10);
        } else if (selection == 5) {
            skills = true;
            cm.teachSkill(4341006, 0, 10);
        } else if (selection == 6) {
            skills = true;
            cm.teachSkill(4341007, 0, 10);
        } else if (selection == 7) {
            skills = true;
            cm.teachSkill(4341011, 0, 10);
        } else if (selection == 8) {
            skills = true;
            cm.teachSkill(4340013, 0, 10);
        } else if (selection == 9) {
            skills = true;
            cm.teachSkill(22170001, 0, 10);
        } else if (selection == 10) {
            skills = true;
            cm.teachSkill(22171002, 0, 10);
        } else if (selection == 11) {
            skills = true;
            cm.teachSkill(22171003, 0, 10);
        } else if (selection == 12) {
            skills = true;
            cm.teachSkill(22171004, 0, 10);
        } else if (selection == 13) {
            skills = true;
            cm.teachSkill(22181000, 0, 10);
        } else if (selection == 14) {
            skills = true;
            cm.teachSkill(22181001, 0, 10);
        } else if (selection == 15) {
            skills = true;
            cm.teachSkill(22181002, 0, 10);
        } else if (selection == 16) {
            skills = true;
            cm.teachSkill(22181003, 0, 10);
        } else if (selection == 17) {
            skills = true;
            cm.teachSkill(11110005, 0, 20);
        } else if (selection == 18) {
            skills = true;
            cm.teachSkill(11111008, 0, 1);
        } else if (selection == 19) {
            skills = true;
            cm.teachSkill(12111003, 0, 20);
        } else if (selection == 20) {
            skills = true;
            cm.teachSkill(12111007, 0, 1);
        } else if (selection == 21) {
            skills = true;
            cm.teachSkill(13111002, 0, 30);
        } else if (selection == 22) {
            skills = true;
            cm.teachSkill(13110009, 0, 1);
        } else if (selection == 23) {
            skills = true;
            cm.teachSkill(14111005, 0, 20);
        } else if (selection == 24) {
            skills = true;
            cm.teachSkill(14110004, 0, 20);
        } else if (selection == 25) {
            skills = true;
            cm.teachSkill(14111010, 0, 1);
        } else if (selection == 26) {
            skills = true;
            cm.teachSkill(15111004, 0, 20);
        } else if (selection == 27) {
            skills = true;
            cm.teachSkill(15111005, 0, 20);
        } else if (selection == 28) {
            skills = true;
            cm.teachSkill(15111011, 0, 1);
        } else if (selection == 29) {
            skills = true;
            cm.teachSkill(1003, 1, 0);
        } else if (selection == 30) {
            skills = true;
            cm.teachSkill(10001003, 1, 0);
        } else if (selection == 31) {
            skills = true;
            cm.teachSkill(20001003, 1, 0);
        } else if (selection == 32) {
            skills = true;
            cm.teachSkill(20011003, 1, 0);
        } else if (selection == 33) {
            skills = true;
            cm.teachSkill(20021003, 1, 0);
        } else if (selection == 34) {
            skills = true;
            cm.teachSkill(20031003, 1, 0);
        } else if (selection == 35) {
            skills = true;
            cm.teachSkill(30001003, 1, 0);
        } else if (selection == 36) {
            skills = true;
            cm.teachSkill(30011003, 1, 0);
        } else if (selection == 37) {
            skills = true;
            cm.teachSkill(50001003, 1, 0);
        } else if (selection == 38) {
            skills = true;
            cm.teachSkill(4341009, 0, 30);
        } else if (selection > 1000000) {
            skills = true;
            for (var i = 0 ; i < skillz.length ; i++) {
                if (skillz[i][1] == selection) {
                    cm.teachSkill(selection, 0, skillz[i][2]);
                }
            }
        }
        if (skills) {
            cm.sendOk("��ų�� ������ ��Ƚ��ϴ�. �����Ͻ� ��ų�� ������ Ȯ���� ������.");
            cm.dispose();
        }
    }
}



function getMasterLevel(cm, skill) {
    return cm.getPlayer().getMasterLevel(SkillFactory.getSkill(skill));
}