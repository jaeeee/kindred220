/*

 ����(seunuin)
 kms1.2.183 ���� �����ڵ带 �߰��߽��ϴ�.
 
 �߰��ϰ���� �����ڵ尡 �ִٸ� ��۷� �����ֽñ�ٶ��ϴ�.

*/

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
        if (cm.getPlayer().getKeyValue("startvalue") == "1") {
            var chat = "����� ������ �������ּ���. ���� �� ��ũ��Ʈ�� ���� ������ �÷����Ͻø�, ��� ������ ������ ���Ҽ��� �ֽ��ϴ�.";
            var demon = "����� ������ �������ּ���. ���� �� ��ũ��Ʈ�� ���� ������ �÷����Ͻø�, ��� ������ ������ ���Ҽ��� �ֽ��ϴ�.";
            var hero = "���ӽ����� ���ϽŴٸ� ��� ������ �ֽñ� �ٶ��ϴ�.";
            var nova = "���ӽ����� ���ϽŴٸ� ��� ������ �ֽñ� �ٶ��ϴ�.";
            var cygh = "���ӽ����� ���ϽŴٸ� ��� ������ �ֽñ� �ٶ��ϴ�.";
            var zeno = "���ӽ����� ���ϽŴٸ� ��� ������ �ֽñ� �ٶ��ϴ�.";
            if (cm.getPlayer().getJob() == 0) {
                chat += "���� ����� ������ #b���谡#k �Դϴ�.\r\n";
                chat += "#L1# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L2# ���� #r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L3# ���� #r�ü�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L4# ���� #r����#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L5# ���� #r����#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L6# ���� #r�����̵�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L7# ���� #rĳ����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            }
            if (cm.getPlayer().getJob() == 1000) {
                chat += "���� ����� ������ #b�ñ׳ʽ�#k �Դϴ�.\r\n";
                chat += "#L8# ���� #r�ҿ︶����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L9# ���� #r�÷������ڵ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L10# ���� #r����극��Ŀ#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L11# ���� #r����Ʈ ��Ŀ#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L12# ���� #r��Ʈ����Ŀ#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            }
            if (cm.getPlayer().getJob() == 2000) {
                hero += "���� ����� ������ #b�ƶ�#k �Դϴ�.\r\n";
                hero += "#L13# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2001) {
                hero += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                hero += "#L14# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2002) {
                hero += "���� ����� ������ #b�޸�������#k �Դϴ�.\r\n";
                hero += "#L15# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2003) {
                hero += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                hero += "#L16# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2004) {
                hero += "���� ����� ������ #b��̳ʽ�#k �Դϴ�.\r\n";
                hero += "#L17# ���� #r��Ұ迭#k�� �����ϰڽ��ϴ�.\r\n";
                hero += "#L18# ���� #r���迭#k�� �����ϰڽ��ϴ�.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 3000) {
                chat += "���� ����� ������ #b����������#k �Դϴ�.\r\n";
                chat += "#L19# ���� #r��Ʋ������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L20# ���� #r���ϵ�����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                chat += "#L22# ���� #r��ī��#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(chat);
            }
            if (cm.getPlayer().getJob() == 5000) {
               cygh += "���� ����� ������ #b������#k �Դϴ�.\r\n";
               cygh += "#L23# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
               cm.sendSimple(cygh);
            }
            if (cm.getPlayer().getJob() == 6000) {
               nova += "���� ����� ������ #bī����#k �Դϴ�.\r\n";
               nova += "#L24# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
               cm.sendSimple(nova);
            }
            if (cm.getPlayer().getJob() == 6001) {
               nova += "���� ����� ������ #b������������#k �Դϴ�.\r\n";
               nova += "#L25# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
               cm.sendSimple(nova);
            }
            if (cm.getPlayer().getJob() == 3001) {
                demon += "���� ����� �������� #b����#k �Դϴ�.\r\n";
                demon += "#L26# ���� #r���󽽷��̾�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                demon += "#L27# ���� #r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(demon);
            }
            if (cm.getPlayer().getJob() == 3002) {
                zeno += "���� ����� ������ #b����#k �Դϴ�.\r\n";
                zeno += "#L28# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(zeno);
            }
        } else if (cm.getPlayer().getKeyValue("startvalue") == "0") {
            var chat = "�¶��ο� ���Ű��� ȯ���մϴ�. ���� ������Ģ�� �Ʒ��� �����ϴ�.\r\n";
            chat += "#r[1]#k #b���� �Ǵ� ������ �߰�������� GM���� ���Ǹ� �ּž��մϴ�.#k\r\n";
            chat += "#r[2]#k #b�¶��μӿ��� �� �Ǵ� �ҹ����� ���α׷��� ����Ұ�� �������Դϴ�..#k\r\n";
            chat += "#r[���ǻ���]#k �� ������ ���λ缳���� �̹Ƿ�, �鼷�̵ǰų� �������� ĳ���Ͱ� ������ �ɼ������� ������ �ֽñ�ٶ��ϴ�.\r\n";
            cm.sendSimple(chat);
            cm.dispose();
        }
    } else if (status == 1) {
            var adventure = "����� 2�� ������ �������ּ���. ���� ������ ������ �Ŀ� ���������̵Ǹ� �ڵ����� ������ �˴ϴ�.";
            var normal = "����� ������ ������ �´��� Ȯ�����ּ���. ����� ������ ������ ������ ��� ������ �ֽñ� �ٶ��ϴ�.";
            if (selection == 1) {
                adventure += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adventure += "#L1# ���� #r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L2# ���� #r������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L3# ���� #r���Ǿ��#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 2) {
                adventure += "���� ����� ������ �������� #b������#k �Դϴ�.\r\n";
                adventure += "#L4# ���� #r��,�����ڵ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L5# ���� #r��,�����ڵ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L6# ���� #rŬ����#k���� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 3) {
                adventure += "���� ����� ������ �������� #b�ü�#k �Դϴ�.\r\n";
                adventure += "#L7# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L8# ���� #r���#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 4) {
                adventure += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adventure += "#L9# ���� #r��ؽ�#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L10# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 5) {
                adventure += "���� ����� ������ �������� #b����#k �Դϴ�.\r\n";
                adventure += "#L11# ���� #r��������#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                adventure += "#L12# ���� #r�ǽ�����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 6) {
                normal += "���� ����� ������ �������� #b�����̵�#k �Դϴ�.\r\n";
                normal += "#L13# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 7) {
                normal += "���� ����� ������ �������� #bĳ����#k �Դϴ�.\r\n";
                normal += "#L14# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 8) {
                normal += "���� ����� ������ �������� #b�ҿ︶����#k �Դϴ�.\r\n";
                normal += "#L15# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 9) {
                normal += "���� ����� ������ �������� #b�÷������ڵ�#k �Դϴ�.\r\n";
                normal += "#L16# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 10) {
                normal += "���� ����� ������ �������� #b����극��Ŀ#k �Դϴ�.\r\n";
                normal += "#L17# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 11) {
                normal += "���� ����� ������ �������� #b����Ʈ��Ŀ#k �Դϴ�.\r\n";
                normal += "#L18# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 12) {
                normal += "���� ����� ������ �������� #b��Ʈ����Ŀ#k �Դϴ�.\r\n";
                normal += "#L19# ���� #r����#k�� �����ϰ� �ͽ��ϴ�.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2100);
                cm.getPlayer().setKeyValue("AutoJob", "2110");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2200);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2300);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2400);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                cm.teachSkill(27001201, 0, 20);
                cm.teachSkill(27000207, 0, 5);
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                cm.teachSkill(27001100, 0, 20);
                cm.teachSkill(27000106, 0, 5);
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
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
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 24) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 25) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 26) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 27) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3101);
                cm.getPlayer().setKeyValue("AutoJob", "3120");
                cm.getPlayer().setHair(36460);
                cm.getPlayer().setFace(20284);
                cm.addEquip(-5, 1050249, 0, 0, 0, 0, 0, 0);
                cm.addEquip(-7, 1070029, 0, 0, 0, 0, 0, 0);
                cm.addEquip(-9, 1102505, 0, 0, 0, 0, 0, 0);
                cm.gainItem(1232001, 1);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 28) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3600);
                cm.getPlayer().setKeyValue("AutoJob", "3610");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
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
                adcheck += "���� ����� ������ �������� #b��ؽ�#k �Դϴ�.\r\n";
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
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1200);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 19) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 20) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 21) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3300);
                cm.getPlayer().setKeyValue("AutoJob", "3310");
                cm.teachSkill(30001061, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 22) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3500);
                cm.getPlayer().setKeyValue("AutoJob", "3510");
                cm.teachSkill(30001068, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
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
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 2) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "120");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 3) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "130");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 4) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "210");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 5) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "220");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 6) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "230");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 7) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "310");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 8) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "320");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 9) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "410");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 10) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "420");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 11) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "510");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
            } else if (selection == 12) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "520");
                cm.warp(100000000);
                cm.gainMeso(300000000);
                cm.gainItem(2049704,20);
                cm.dispose();
}
} 
}
}
