var status = -1;
var load = 0;
var job = 0;
var level = 0;
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
            var chat = "Select a job to continue.\r\n";
            var hero = "Select a job to continue.\r\n";
            var nova = "Select a job to continue.\r\n";
            var cygh = "Select a job to continue.\r\n";
            var zero = "Select a job to continue.\r\n";


            if (cm.getPlayer().getJob() == 0) {
                chat += "";
                chat += "#L1# ���� #i1302152##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L2# ���� #i1382104##r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L3# ���� #i1452111##r�ü�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L4# ���� #i1472122##r����#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L5# ���� #i1492085##r����#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L6# ���� #i1342036##r�����̵�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L7# ���� #i1532018##rĳ����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 1000) {
                chat += "���� ����� ������ #b�����#k �Դϴ�.\r\n";
                chat += "#L8# ���� #i1302152##r�ҿ︶����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L9# ���� #i1382104##r�÷������ڵ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L10# ���� #i1452111##r����극��Ŀ#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L11# ���� #i1472122##r����Ʈ��Ŀ#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L12# ���� #i1482084##r��Ʈ����Ŀ#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 2000) {
                hero += "���� ����� ������ #b�ƶ�#k �Դϴ�.\r\n";
                hero += "#L13# ���� #i1352932##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2001) {
                hero += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                hero += "#L14# ���� #i1352942##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2002) {
                hero += "���� ����� ������ #b�޸�������#k �Դϴ�.\r\n";
                hero += "#L15# ���� #i1352003##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2003) {
                hero += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                hero += "#L16# ���� #i1352103##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 10112) {
                zero += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                zero += "#L98# ���� #i1562007##i1572007##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(zero);
            } else if (cm.getPlayer().getJob() == 2004) {
                hero += "���� ����� ������ #b��̳ʽ�#k �Դϴ�.\r\n";
                hero += "#L17# ���� #i1702180##r��Ұ迭#k�� �����ϰڽ��ϴ�.\r\n";
                hero += "#L18# ���� #i1702314##r���迭#k�� �����ϰڽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2005) {
                hero += "���� ����� ������ #b����#k �Դϴ�.#r ������ #e#rLv.20#k���� �����մϴ�.\r\n";
                hero += "#L32# ���� #i1353103##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 3000) {
                chat += "���� ����� ������ #b����������#k �Դϴ�.\r\n";
                chat += "#L19# ���� #i1352952##r��Ʋ������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L20# ���� #i1352962##r���ϵ�����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L21# ���� #i1312065##r���󽽷��̾�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L22# ���� #i1492085##r��ī��#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 3001) {
                chat += "���� ����� ������ #b���󽽷��̾�#k �Դϴ�.\r\n";
                chat += "#L28# ���� #i1312065##r���󽽷��̾�#k #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L30# ���� #i1232014##r������#k #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 3002) {
                chat += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                chat += "#L31# ���� #i1353004##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 5000) {
               cygh += "���� ����� ������ #b������#k �Դϴ�.\r\n";
               cygh += "#L23# ���� #i1098004##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
               cm.sendSimple(cygh);
            } else if (cm.getPlayer().getJob() == 6000) {
               cygh += "���� ����� ������ #bī����#k �Դϴ�.\r\n";
               cygh += "#L69# ���� #i1190001##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
               cm.sendSimple(cygh);
            } else if (cm.getPlayer().getJob() == 6001) {
               nova += "���� ����� ������ #b������������#k �Դϴ�.\r\n";
               nova += "#L25# ���� #i1352604##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
               cm.sendSimple(nova);
            } else {
               chat += "���� ����� ������ �����Ҽ� �����ϴ�.\r\n\r\n";
               chat += "�ʴ� #r����#k�� �������� ���մϴ�.\r\n";
               cm.sendSimple(chat);
            }
    } else if (status == 1) {
            var adventure = "#d#e����� #b#e2�� ������#k ������.\r\n #d#e2������ ���ý� #r#e30,60,100������#k #d#e�ڵ�����.\r\n";
            var normal = "#d#e����� #b#e2�� ������#k ������.\r\n #d#e2������ ���ý� #r#e30,60,100������#k #d#e����.\r\n";
            var normal = "#d#e����� #b#e2�� ������#k ������.\r\n #d#e2������ ���ý� #r#e30,60,100������#k #d#e����.\r\n";
            if (selection == 1) {
                adventure += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adventure += "#L1# ���� #i1352202##r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L2# ���� #i1352212##r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L3# ���� #i1352223##r���Ǿ��#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 2) {
                adventure += "���� ����� ������ �������� #b������#k �Դϴ�.\r\n";
                adventure += "#L4# ���� #i1352233##r��,�����ڵ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L5# ���� #i1352242##r��,�����ڵ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L6# ���� #i1352252##rŬ����#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 3) {
                adventure += "���� ����� ������ �������� #b�ü�#k �Դϴ�.\r\n";
                adventure += "#L7# ���� #i1352262##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L8# ���� #i1352272##r���#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 4) {
                adventure += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adventure += "#L9# ���� #i1352292##r��ؽ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L10# ���� #i1352282##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 5) {
                adventure += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adventure += "#L11# ���� #i1352902##r��������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L12# ���� #i1352912##r�ǽ�����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 6) {
                normal += "���� ����� ������ �������� #b�����̵�#k �Դϴ�.\r\n";
                normal += "#L13##e���� #i1342036##r����#k#e�� �����ϰ� �ͽ��ϴ�.#l\r\n\r\n#e#d   20,30,40,55,70,100����";
                cm.sendSimple(normal);
            } else if (selection == 7) {
                normal += "���� ����� ������ �������� #bĳ����#k �Դϴ�.\r\n";
                normal += "#L14# ���� #i1352922##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 8) {
                normal += "���� ����� ������ �������� #b�ҿ︶����#k �Դϴ�.\r\n";
                normal += "#L15# ���� #i1352972##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 9) {
                normal += "���� ����� ������ �������� #b�÷������ڵ�#k �Դϴ�.\r\n";
                normal += "#L16# ���� #i1352972##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 10) {
                normal += "���� ����� ������ �������� #b����극��Ŀ#k �Դϴ�.\r\n";
                normal += "#L17# ���� #i1352972##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 11) {
                normal += "���� ����� ������ �������� #b����Ʈ��Ŀ#k �Դϴ�.\r\n";
                normal += "#L18# ���� #i1352972##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 12) {
                normal += "���� ����� ������ �������� #b��Ʈ����Ŀ#k �Դϴ�.\r\n";
                normal += "#L19# ���� #i1352972##r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2100);
                cm.getPlayer().setKeyValue("AutoJob", "2110");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2200);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();

            } else if (selection == 98) {
                for (var i = cm.getPlayer().getLevel(); i < 100; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(10112);
                cm.getPlayer().setKeyValue("AutoJob", "10100");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();

            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2300);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
                cm.resetStats(4,25,4,4);
                cm.teachSkill(20020109, 1, 0); //������ ȸ��
                cm.teachSkill(20021110, 1, 0); //������ �ູ
                cm.teachSkill(20020111, 1, 0); //��Ÿ�ϸ��� ����
                cm.teachSkill(20020112, 1, 0); //���� �ڰ�
                cm.gainItem(3010211, 1);
                if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20557);
                cm.getPlayer().setHair(33453);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050192, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072519, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1522038, 17, 0, 0, 7, 0, 0); //����
                } else {
                cm.getPlayer().setFace(21555);
                cm.getPlayer().setHair(34423);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051237, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072519, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1522038, 17, 0, 0, 7, 0, 0); //����
                }
                cm.gainItem(1352000, 1);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2400);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
                cm.resetStats(4,25,4,4);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20659);
                cm.getPlayer().setHair(33703);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050222, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1070023, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1362000, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //����
            } else {
                cm.getPlayer().setFace(21656);
                cm.getPlayer().setHair(34703);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051272, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1071035, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1362000, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //����
            }
                cm.changeJob(2400);
                cm.teachSkill(20031203, 1, 0); //���� ���� ����
                cm.teachSkill(20030204, 1, 0); //���鸮 �ν���Ʈ
                cm.teachSkill(20031205, 1, 0); //���� ������
                cm.teachSkill(20030206, 1, 0); //���� �����ͷ�Ƽ
                cm.teachSkill(20031207, 1, 0); //��ƿ ��ų
                cm.teachSkill(20031208, 1, 0); //��ų �Ŵ�����Ʈ
                cm.teachSkill(20031209, 1, 0); //������Ʈ
                cm.gainItem(1352100, 1);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                cm.resetStats(4,4,25,4);
                cm.teachSkill(27001201,0,20);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                cm.resetStats(4,4,25,4);
                cm.teachSkill(27001100,0,20);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 19) {
                normal += "���� ����� ������ �������� #b��Ʋ������#k �Դϴ�.\r\n";
                normal += "#L20# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 20) {
                normal += "���� ����� ������ �������� #b���ϵ�����#k �Դϴ�.\r\n";
                normal += "#L21# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 21) {
                normal += "���� ����� ������ �������� #b���󽽷��̾�#k �Դϴ�.\r\n";
                normal += "#L22# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 22) {
                normal += "���� ����� ������ �������� #b��ī��#k �Դϴ�.\r\n";
                normal += "#L23# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                cm.teachSkill(30001068, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();

            } else if (selection == 69) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 24) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.resetStats(35,4,4,4);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 25) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.resetStats(4,35,4,4);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 28) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.resetStats(35,4,4,4);
                cm.teachSkill(30010111, 1, 0);
                cm.teachSkill(30010112, 1, 0);
                cm.teachSkill(30010185, 1, 0);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 30) {
                cm.resetStats(4,4,4,4);
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3101);
                cm.getPlayer().setKeyValue("AutoJob", "3120");
                cm.teachSkill(30010185, 1, 0);
                cm.teachSkill(30010230, 1, 0);
                cm.teachSkill(30010231, 1, 0);
                cm.teachSkill(30010241, 1, 0);
                cm.teachSkill(30010242, 1, 0);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
           } else if (selection == 31) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3600);
                cm.getPlayer().setKeyValue("AutoJob", "3610");
                cm.resetStats(4,4,4,4);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 32) {
                for (var i = cm.getPlayer().getLevel(); i < 20; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2500);
				cm.getPlayer().setKeyValue("AutoJob", "2510");
                cm.resetStats(4,4,4,4);
                cm.addEquip(-11, 1482191, 15, 0, 0, 7, 0, 0); // ����
                cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 0); // ���� ����
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.fakeRelog();
                cm.updateChar();
                cm.teachSkill(25001002, 25, 25);
                cm.teachSkill(25001003, 25, 25);
                cm.teachSkill(25001204, 20, 20);
                cm.teachSkill(25000105, 30, 30);
                cm.teachSkill(20050286, 2, 2);
                cm.teachSkill(20050285, 1, 1);
                cm.teachSkill(20051287, 1, 1);
                cm.dispose();
            }
    } else if (status == 2) {
            var adcheck = "����� ������ ������ �´��� Ȯ�����ּ���. ����� ������ ������ ������ ��� ������ �ֽñ� �ٶ��ϴ�.";
            if (selection == 1) {
                adcheck += "���� ����� ������ �������� #b������#k �Դϴ�.\r\n";
                adcheck += "#L1# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 2) {
                adcheck += "���� ����� ������ �������� #b������#k �Դϴ�.\r\n";
                adcheck += "#L2# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 3) {
                adcheck += "���� ����� ������ �������� #b���Ǿ��#k �Դϴ�.\r\n";
                adcheck += "#L3# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 4) {
                adcheck += "���� ����� ������ �������� #b��,�����ڵ�#k �Դϴ�.\r\n";
                adcheck += "#L4# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 5) {
                adcheck += "���� ����� ������ �������� #b��,�����ڵ�#k �Դϴ�.\r\n";
                adcheck += "#L5# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 6) {
                adcheck += "���� ����� ������ �������� #bŬ����#k �Դϴ�.\r\n";
                adcheck += "#L6# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 7) {
                adcheck += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adcheck += "#L7# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 8) {
                adcheck += "���� ����� ������ �������� #b���#k �Դϴ�.\r\n";
                adcheck += "#L8# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 9) {
                adcheck += "���� ����� ������ �������� #b�α�#k �Դϴ�.\r\n";
                adcheck += "#L9# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 10) {
                adcheck += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adcheck += "#L10# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 11) {
                adcheck += "���� ����� ������ �������� #b��������#k �Դϴ�.\r\n";
                adcheck += "#L11# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 12) {
                adcheck += "���� ����� ������ �������� #b�ǽ�����#k �Դϴ�.\r\n";
                adcheck += "#L12# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "430");
                 cm.resetStats(4,4,4,35);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();

            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
                cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1200);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
                cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
                cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
                cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 19) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.teachSkill(10000252, 1, 1);
                cm.teachSkill(10001253, 1, 1);
                cm.teachSkill(10001254, 1, 1);
                cm.dispose();
            } else if (selection == 20) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 21) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.resetStats(4,25,4,4);
                cm.changeJob(3300);
                cm.getPlayer().gainSP(4);
                //cm.fakeRelog();
                cm.updateChar();
                cm.getPlayer().setKeyValue("AutoJob", "3310");
                cm.teachSkill(30001061, 1, 0); //��ȹ
                cm.teachSkill(30001062, 1, 0); //������ �θ�
                cm.warp(931000500);
                cm.gainMeso(50000000);
                cm.gainItem(1142594,1);
                cm.gainItem(4310034,50);
                cm.gainItem(4310067,50);
                cm.dispose();
            } else if (selection == 22) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.resetStats(35,4,4,4);
                cm.teachSkill(30011109, 1, 0); //���� ����
                cm.teachSkill(30010110, 1, 0); //���� ����
                cm.teachSkill(30010111, 1, 0); //���� Ŀ��
                cm.teachSkill(30010112, 1, 0); //���� ǻ��
                cm.teachSkill(30010185, 1, 0); //����� ����
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20248);
                cm.getPlayer().setHair(33531);
                cm.getPlayer().setFace2(1012280);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050191, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072518, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1322123, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //�����ǵ�
            } else {
                cm.getPlayer().setFace(21246);
                cm.getPlayer().setHair(34411);
                cm.getPlayer().setFace2(1012280);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051236, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072518, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1322123, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //�����ǵ�
            }
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.getPlayer().setSkinColor(0);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.resetStats(4,25,4,4);
                cm.getPlayer().changeJob(3500);
                cm.teachSkill(30001068, 1, 1); //��ī�д뽬
                cm.getPlayer().gainSP(4);
                cm.updateChar();
                cm.getPlayer().setKeyValue("AutoJob", "3510");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            }
    } else if (status == 3) {
            if (selection == 1) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "110");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 2) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "120");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 3) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "130");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 4) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "210");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 5) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "220");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 6) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "230");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 7) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "310");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 8) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "320");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 9) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "410");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 10) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "420");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 11) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "510");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            } else if (selection == 12) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "520");
                cm.warp(100000000);
                cm.gainMeso(100000000);
//	        cm.gainSponserItem(1002450,'[�ʱ�����]',1000,100,0); //�Ҷ� ����
//	        cm.gainSponserItem(1142477,'[�ʱ�����]',1000,100,0); //���콺�丮 Īȣ
                cm.dispose();
            }
        } 
    }
}