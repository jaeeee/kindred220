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
            var chat = "Please set your career. If you play the game, turn off the script, you can not have any job.\r\n\r\n";
            var hero = "Please proceed if you want to start the game.";
            var nova = "Please proceed if you want to start the game.";
            var cygh = "Please proceed if you want to start the game.";
            if (cm.getPlayer().getJob() == 0) {
                chat += "Your current occupation #badventurer#k A.\r\n";
                chat += "#L1# I am #r����#kI would like to Ex.\r\n";
                chat += "#L2# I am #r������#kI would like to Ex.\r\n";
                chat += "#L3# I am #r�ü�#kI would like to Ex.\r\n";
                chat += "#L4# I am #r����#k��I would like to Ex.\r\n";
                chat += "#L5# I am #r����#k��I would like to Ex.\r\n";
                chat += "#L6# I am #r�����̵�#kI would like to Ex.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 1000) {
                chat += "Your current occupation #b�ñ׳ʽ�#k A.\r\n";
                chat += "#L8# I am #r�ҿ︶����#kI would like to Ex.\r\n";
                chat += "#L9# I am #r�÷������ڵ�#kI would like to Ex.\r\n";
                chat += "#L10# I am #r����극��Ŀ#kI would like to Ex.\r\n";
                chat += "#L11# I am #r��ũ����Ʈ#kI would like to Ex.\r\n";
                chat += "#L12# I am #r��Ʈ����Ŀ#kI would like to Ex.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 2000) {
                hero += "Your current occupation #b�ƶ�#k A.\r\n";
                hero += "#L13# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2001) {
                hero += "Your current occupation #b����#k A.\r\n";
                hero += "#L14# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2002) {
                hero += "Your current occupation #b�޸�������#k A.\r\n";
                hero += "#L15# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2003) {
                hero += "Your current occupation #b����#k A.\r\n";
                hero += "#L16# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2004) {
                hero += "Your current occupation #b��̳ʽ�#k A.\r\n";
                hero += "#L17# I am #rDark series#kI will select the.\r\n";
                hero += "#L18# I am #rLight Series#kI will select the.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2005) {
                hero += "Your current occupation #b����#k A.#r ������ Lv.20���� �����մϴ�.\r\n";
                hero += "#L32# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 3000) {
                chat += "Your current occupation #b����������#k A.\r\n";
                chat += "#L19# I am #r��Ʋ������#kI would like to Ex.\r\n";
                chat += "#L20# I am #r���ϵ�����#kI would like to Ex.\r\n";
                chat += "#L21# I am #r���󽽷��̾�#kI would like to Ex.\r\n";
                chat += "#L22# I am #r��ī��#k��I would like to Ex.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 3001) {
                chat += "Your current occupation #b���󽽷��̾�#k A.\r\n";
                chat += "#L28# I am #rgame#k�� Start I would like to.\r\n";
                chat += "#L30# I am #b��������#k #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 3002) {
                chat += "Your current occupation #b����#k A.\r\n";
                chat += "#L31# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 5000) {
               cygh += "Your current occupation #b������#k A.\r\n";
               cygh += "#L23# I am #rgame#k�� Start I would like to.\r\n";
               cm.sendSimple(cygh);
            } else if (cm.getPlayer().getJob() == 6001) {
               nova += "Your current occupation #b������������#k A.\r\n";
               nova += "#L25# I am #rgame#k�� Start I would like to.\r\n";
               cm.sendSimple(nova);
             } else if (cm.getPlayer().getJob() == 10112) {
               chat += "Your current occupation #b����#k A.\r\n\r\n";
               chat += "���δ� ���� #rgame#k�� �������� ���մϴ�. (������ġ��)\r\n";
               cm.sendSimple(chat);
            }
    } else if (status == 1) {
            var adventure = "Please set your secondary profession. Now the job is automatically set when a certain level after the former.";
            var normal = "Check your job you choose. Please continue to jolt you proceed to select a job.";
            if (selection == 1) {
                adventure += "Current occupation you have selected is #b����#k A.\r\n";
                adventure += "#L1# I am #rFighter#kI would like to Ex.\r\n";
                adventure += "#L2# I am #r������#kI would like to Ex.\r\n";
                adventure += "#L3# I am #r���Ǿ��#k��I would like to Ex.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 2) {
                adventure += "Current occupation you have selected is #b������#k A.\r\n";
                adventure += "#L4# I am #r��,�����ڵ�#kI would like to Ex.\r\n";
                adventure += "#L5# I am #r��,�����ڵ�#kI would like to Ex.\r\n";
                adventure += "#L6# I am #rŬ����#k��I would like to Ex.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 3) {
                adventure += "Current occupation you have selected is #b�ü�#k A.\r\n";
                adventure += "#L7# I am #r����#kI would like to Ex.\r\n";
                adventure += "#L8# I am #r���#kI would like to Ex.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 4) {
                adventure += "Current occupation you have selected is #b����#k A.\r\n";
                adventure += "#L9# I am #r�α�#kI would like to Ex.\r\n";
                adventure += "#L10# I am #r����#kI would like to Ex.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 5) {
                adventure += "Current occupation you have selected is #b����#k A.\r\n";
                adventure += "#L11# I am #r��Fighter#kI would like to Ex.\r\n";
                adventure += "#L12# I am #r�ǽ�����#kI would like to Ex.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 6) {
                normal += "Current occupation you have selected is #b�����̵�#k A.\r\n";
                normal += "#L13# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 7) {
                normal += "Current occupation you have selected is #bĳ����#k A.\r\n";
                normal += "#L14# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 8) {
                normal += "Current occupation you have selected is #b�ҿ︶����#k A.\r\n";
                normal += "#L15# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 9) {
                normal += "Current occupation you have selected is #b�÷������ڵ�#k A.\r\n";
                normal += "#L16# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 10) {
                normal += "Current occupation you have selected is #b����극��Ŀ#k A.\r\n";
                normal += "#L17# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 11) {
                normal += "Current occupation you have selected is #b����Ʈ��Ŀ#k A.\r\n";
                normal += "#L18# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 12) {
                normal += "Current occupation you have selected is #b��Ʈ����Ŀ#k A.\r\n";
                normal += "#L19# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2100);
                cm.getPlayer().setKeyValue("AutoJob", "2110");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2200);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                cm.resetStats(4,4,25,4);
                cm.teachSkill(27001100,0,20);
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 19) {
                normal += "Current occupation you have selected is #b��Ʋ������#k A.\r\n";
                normal += "#L20# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 20) {
                normal += "Current occupation you have selected is #b���ϵ�����#k A.\r\n";
                normal += "#L21# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 21) {
                normal += "Current occupation you have selected is #b���󽽷��̾�#k A.\r\n";
                normal += "#L22# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 22) {
                normal += "Current occupation you have selected is #b��ī��#k A.\r\n";
                normal += "#L23# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                cm.teachSkill(30001068, 1, 1);
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 24) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.resetStats(35,4,4,4);
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 25) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.resetStats(4,35,4,4);
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
           } else if (selection == 31) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3600);
                cm.getPlayer().setKeyValue("AutoJob", "3610");
                cm.resetStats(4,4,4,4);
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 32) {
                for (var i = cm.getPlayer().getLevel(); i < 20; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2500);
                cm.resetStats(4,4,4,4);
                cm.addEquip(-11, 1482191, 15, 0, 0, 7, 0, 0); // ����
                cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 0); // ���� ����
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.fakeRelog();
                cm.updateChar();
                cm.teachSkill(25001002, 25, 25);
                cm.teachSkill(25001003, 25, 25);
                cm.teachSkill(25001204, 20, 20);
                cm.teachSkill(25000105, 0, 0);
                cm.teachSkill(20050286, 2, 2);
                cm.teachSkill(20051284, 1, 1);
                cm.teachSkill(20050285, 1, 1);
                cm.teachSkill(20051287, 1, 1);
                cm.dispose();
            }
    } else if (status == 2) {
            var adcheck = "Check your job you choose. Please continue to jolt you proceed to select a job.";
            if (selection == 1) {
                adcheck += "Current occupation you have selected is #bFighter#k A.\r\n";
                adcheck += "#L1# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 2) {
                adcheck += "Current occupation you have selected is #b������#k A.\r\n";
                adcheck += "#L2# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 3) {
                adcheck += "Current occupation you have selected is #b���Ǿ��#k A.\r\n";
                adcheck += "#L3# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 4) {
                adcheck += "Current occupation you have selected is #b��,�����ڵ�#k A.\r\n";
                adcheck += "#L4# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 5) {
                adcheck += "Current occupation you have selected is #b��,�����ڵ�#k A.\r\n";
                adcheck += "#L5# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 6) {
                adcheck += "Current occupation you have selected is #bŬ����#k A.\r\n";
                adcheck += "#L6# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 7) {
                adcheck += "Current occupation you have selected is #b����#k A.\r\n";
                adcheck += "#L7# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 8) {
                adcheck += "Current occupation you have selected is #b���#k A.\r\n";
                adcheck += "#L8# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 9) {
                adcheck += "Current occupation you have selected is #b�α�#k A.\r\n";
                adcheck += "#L9# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 10) {
                adcheck += "Current occupation you have selected is #b����#k A.\r\n";
                adcheck += "#L10# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 11) {
                adcheck += "Current occupation you have selected is #b��Fighter#k A.\r\n";
                adcheck += "#L11# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 12) {
                adcheck += "Current occupation you have selected is #b�ǽ�����#k A.\r\n";
                adcheck += "#L12# I am #rgame#k�� Start I would like to.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "430");
                 cm.resetStats(4,4,4,35);
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1200);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 19) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 20) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
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
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            }
    } else if (status == 3) {
            if (selection == 1) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "110");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 2) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "120");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 3) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "130");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 4) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "210");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 5) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "220");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 6) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "230");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 7) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "310");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 8) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "320");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 9) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "410");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 10) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "420");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 11) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "510");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            } else if (selection == 12) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "520");
                cm.warp(500000000);
                cm.gainMeso(500000000);
                cm.gainItem(2049360, 50);
                cm.dispose();
            }
        } 
    }
}