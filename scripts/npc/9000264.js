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
            var chat = "당신의 직업을 설정해주세요. 만약 이 스크립트를 끄고 게임을 플레이하시면, 어떠한 직업도 가지지 못할수가 있습니다.\r\n\r\n";
            var hero = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
            var nova = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
            var cygh = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
            if (cm.getPlayer().getJob() == 0) {
                chat += "현재 당신의 직업은 #b모험가#k 입니다.\r\n";
                chat += "#L1# 저는 #r전사#k로 전직하고 싶습니다.\r\n";
                chat += "#L2# 저는 #r마법사#k로 전직하고 싶습니다.\r\n";
                chat += "#L3# 저는 #r궁수#k로 전직하고 싶습니다.\r\n";
                chat += "#L4# 저는 #r도적#k으로 전직하고 싶습니다.\r\n";
                chat += "#L5# 저는 #r해적#k으로 전직하고 싶습니다.\r\n";
                chat += "#L6# 저는 #r듀얼블레이드#k로 전직하고 싶습니다.\r\n";
                chat += "#L7# 저는 #r캐논슈터#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 1000) {
                chat += "현재 당신의 직업은 #b시그너스#k 입니다.\r\n";
                chat += "#L8# 저는 #r소울마스터#k로 전직하고 싶습니다.\r\n";
                chat += "#L9# 저는 #r플레임위자드#k로 전직하고 싶습니다.\r\n";
                chat += "#L10# 저는 #r윈드브레이커#k로 전직하고 싶습니다.\r\n";
                chat += "#L11# 저는 #r다크나이트#k로 전직하고 싶습니다.\r\n";
                chat += "#L12# 저는 #r스트라이커#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 2000) {
                hero += "현재 당신의 직업은 #b아란#k 입니다.\r\n";
                hero += "#L13# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2001) {
                hero += "현재 당신의 직업은 #b에반#k 입니다.\r\n";
                hero += "#L14# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2002) {
                hero += "현재 당신의 직업은 #b메르세데스#k 입니다.\r\n";
                hero += "#L15# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2003) {
                hero += "현재 당신의 직업은 #b팬텀#k 입니다.\r\n#b<참고> 팬텀 스틸 스킬은 사용하실수 없습니다.#k";
                hero += "#L16# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2004) {
                hero += "현재 당신의 직업은 #b루미너스#k 입니다.\r\n";
                hero += "#L17# 저는 #r어둠계열#k을 선택하겠습니다.\r\n";
                hero += "#L18# 저는 #r빛계열#k을 선택하겠습니다.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 2500) {
                hero += "현재 당신의 직업은 #b은월#k 입니다.#r 은월은 Lv.20부터 시작합니다.\r\n";
                hero += "#L32# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            } else if (cm.getPlayer().getJob() == 3000) {
                chat += "현재 당신의 직업은 #b레지스탕스#k 입니다.\r\n";
                chat += "#L20# 저는 #r와일드헌터#k로 전직하고 싶습니다.\r\n";
                chat += "#L21# 저는 #r데몬슬레이어#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 3001) {
                chat += "현재 당신의 직업은 #b데몬슬레이어#k 입니다.\r\n";
                chat += "#L28# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                chat += "#L30# 저는 #b데몬어벤저로#k #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 3002) {
                chat += "현재 당신의 직업은 #b제논#k 입니다.\r\n";
                chat += "#L31# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            } else if (cm.getPlayer().getJob() == 5000) {
               cygh += "현재 당신의 직업은 #b미하일#k 입니다.\r\n";
               cygh += "#L23# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
            } else if (cm.getPlayer().getJob() == 6000) {
               cygh += "현재 당신의 직업은 #b카이저#k 입니다.\r\n";
              cygh += "#L24# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
               cm.sendSimple(cygh);
            } else if (cm.getPlayer().getJob() == 6001) {
               nova += "엔젤릭버스터는 현재 금지직업입니다. 다른직업을 선택해주세요.\r\n";
               cm.sendSimple(nova);
             } else if (cm.getPlayer().getJob() == 10112) {
               chat += "현재 당신의 직업은 #b제로#k 입니다.\r\n\r\n";
               chat += "제로는 현재 #r게임#k을 시작하지 못합니다. (오류패치중)\r\n";
               cm.sendSimple(chat);
            }
    } else if (status == 1) {
            var adventure = "당신의 2차 직업을 설정해주세요. 지금 설정한 직업은 후에 일정레벨이되면 자동으로 전직이 됩니다.";
            var normal = "당신이 선택한 직업이 맞는지 확인해주세요. 당신이 선택한 직업이 맞으면 계속 진행해 주시길 바랍니다.";
            if (selection == 1) {
                adventure += "현재 당신이 선택한 직업군은 #b전사#k 입니다.\r\n";
                adventure += "#L1# 저는 #r파이터#k로 전직하고 싶습니다.\r\n";
                adventure += "#L2# 저는 #r페이지#k로 전직하고 싶습니다.\r\n";
                adventure += "#L3# 저는 #r스피어맨#k으로 전직하고 싶습니다.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 2) {
                adventure += "현재 당신이 선택한 직업군은 #b마법사#k 입니다.\r\n";
                adventure += "#L4# 저는 #r불,독위자드#k로 전직하고 싶습니다.\r\n";
                adventure += "#L5# 저는 #r썬,콜위자드#k로 전직하고 싶습니다.\r\n";
                adventure += "#L6# 저는 #r클레릭#k으로 전직하고 싶습니다.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 3) {
                adventure += "현재 당신이 선택한 직업군은 #b궁수#k 입니다.\r\n";
                adventure += "#L7# 저는 #r헌터#k로 전직하고 싶습니다.\r\n";
                adventure += "#L8# 저는 #r사수#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 4) {
                adventure += "현재 당신이 선택한 직업군은 #b도적#k 입니다.\r\n";
                adventure += "#L9# 저는 #r로그#k로 전직하고 싶습니다.\r\n";
                adventure += "#L10# 저는 #r시프#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 5) {
                adventure += "현재 당신이 선택한 직업군은 #b해적#k 입니다.\r\n";
                adventure += "#L11# 저는 #r인파이터#k로 전직하고 싶습니다.\r\n";
                adventure += "#L12# 저는 #r건슬링거#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(adventure);
            } else if (selection == 6) {
                normal += "현재 당신이 선택한 직업군은 #b듀얼블레이드#k 입니다.\r\n";
                normal += "#L13# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 7) {
                normal += "현재 당신이 선택한 직업군은 #b캐논슈터#k 입니다.\r\n";
                normal += "#L14# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 8) {
                normal += "현재 당신이 선택한 직업군은 #b소울마스터#k 입니다.\r\n";
                normal += "#L15# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 9) {
                normal += "현재 당신이 선택한 직업군은 #b플레임위자드#k 입니다.\r\n";
                normal += "#L16# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 10) {
                normal += "현재 당신이 선택한 직업군은 #b윈드브레이커#k 입니다.\r\n";
                normal += "#L17# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 11) {
                normal += "현재 당신이 선택한 직업군은 #b나이트워커#k 입니다.\r\n";
                normal += "#L18# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 12) {
               normal += "금지직업.\r\n";
             //   normal += "#L19# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2100);
                cm.getPlayer().setKeyValue("AutoJob", "2110");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.gainItem(1142477, 1);
                cm.dispose();
                cm.warp(100000000);
                cm.gainMeso(100000000);
		cm.gainItem(5072000,500);
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2200);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.gainItem(1142477, 1);
                cm.dispose();
                cm.warp(100000000);
                cm.gainMeso(100000000);
		cm.gainItem(5072000,500);
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2300);
		cm.gainItem(5072000,500);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(4,25,4,4);
                cm.teachSkill(20020109, 1, 0); //엘프의 회복
                cm.teachSkill(20021110, 1, 0); //엘프의 축복
                cm.teachSkill(20020111, 1, 0); //스타일리쉬 무브
                cm.teachSkill(20020112, 1, 0); //왕의 자격
                cm.gainItem(3010211, 1);
                if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20557);
                cm.getPlayer().setHair(33453);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050192, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1072519, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1522038, 17, 0, 0, 7, 0, 0); //무기
                } else {
                cm.getPlayer().setFace(21555);
                cm.getPlayer().setHair(34423);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051237, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1072519, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1522038, 17, 0, 0, 7, 0, 0); //무기
                }
                cm.gainItem(1352000, 1);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2400);
		cm.gainItem(5072000,500);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(4,25,4,4);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20659);
                cm.getPlayer().setHair(33703);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050222, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1070023, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1362000, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //망토
            } else {
                cm.getPlayer().setFace(21656);
                cm.getPlayer().setHair(34703);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051272, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1071035, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1362000, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //망토
            }
                cm.changeJob(2400);
                cm.teachSkill(20031203, 1, 0); //리턴 오브 팬텀
                cm.teachSkill(20030204, 1, 0); //데들리 인스팅트
                cm.teachSkill(20031205, 1, 0); //팬텀 슈라우드
                cm.teachSkill(20030206, 1, 0); //하이 덱스터러티
                cm.teachSkill(20031207, 1, 0); //스틸 스킬
                cm.teachSkill(20031208, 1, 0); //스킬 매니지먼트
                cm.teachSkill(20031209, 1, 0); //저지먼트
                cm.gainItem(1352100, 1);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(4,4,25,4);
                cm.teachSkill(27001201,0,20);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2700);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(4,4,25,4);
                cm.teachSkill(27001100,0,20);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 19) {
                normal += "현재 당신이 선택한 직업군의 #b베틀메이지#k 입니다.\r\n";
                normal += "#L20# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 20) {
                normal += "현재 당신이 선택한 직업군은 #b와일드헌터#k 입니다.\r\n";
                normal += "#L21# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 21) {
                normal += "현재 당신이 선택한 직업군은 #b데몬슬레이어#k 입니다.\r\n";
                normal += "#L22# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 22) {
           //     normal += "현재 당신이 선택한 직업군은 #b메카닉#k 입니다.\r\n";
            //    normal += "#L23# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.teachSkill(30001068, 1, 1);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 24) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(35,4,4,4);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 25) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(4,35,4,4);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 28) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(35,4,4,4);
                cm.teachSkill(30010111, 1, 0);
                cm.teachSkill(30010112, 1, 0);
                cm.teachSkill(30010185, 1, 0);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);//1232000
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 30) {
                cm.resetStats(4,4,4,4);
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3101);
                cm.getPlayer().setKeyValue("AutoJob", "3120");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.teachSkill(30010185, 1, 0);
                cm.teachSkill(30010230, 1, 0);
                cm.teachSkill(30010231, 1, 0);
                cm.teachSkill(30010241, 1, 0);
                cm.teachSkill(30010242, 1, 0);
                cm.warp(100000000);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(1232000, 1);
                cm.dispose();
           } else if (selection == 31) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3600);
                cm.getPlayer().setKeyValue("AutoJob", "3610");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(4,4,4,4);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
                cm.fakeRelog();
                cm.updateChar();
            } else if (selection == 32) {
                for (var i = cm.getPlayer().getLevel(); i < 20; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2500);
                cm.getPlayer().setKeyValue("AutoJob", "2510");
           //     cm.getPlayer().setHp(800);
           //     cm.getPlayer().setMp(800);
                cm.resetStats(4,4,4,4);
                cm.addEquip(-11, 1482191, 15, 0, 0, 7, 0, 0); // 무기
                cm.addEquip(-10, 1353100, 0, 0, 0, 0, 0, 0); // 여우 구슬
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.fakeRelog();
                cm.updateChar();
                cm.teachSkill(25001002, 25, 25);
                cm.teachSkill(25001003, 25, 25);
                cm.teachSkill(25001204, 20, 20);
                cm.teachSkill(25000105, 20, 20);
                cm.teachSkill(20050286, 2, 2);
                cm.teachSkill(20051284, 1, 1);
                cm.teachSkill(20050285, 1, 1);
                cm.teachSkill(20051287, 1, 1);
                cm.dispose();
                cm.warp(100000000);
		cm.gainItem(5072000,500);
            }
    } else if (status == 2) {
            var adcheck = "당신이 선택한 직업이 맞는지 확인해주세요. 당신이 선택한 직업이 맞으면 계속 진행해 주시길 바랍니다.";
            if (selection == 1) {
                adcheck += "현재 당신이 선택한 직업군은 #b파이터#k 입니다.\r\n";
                adcheck += "#L1# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 2) {
                adcheck += "현재 당신이 선택한 직업군은 #b페이지#k 입니다.\r\n";
                adcheck += "#L2# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 3) {
                adcheck += "현재 당신이 선택한 직업군은 #b스피어맨#k 입니다.\r\n";
                adcheck += "#L3# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 4) {
                adcheck += "현재 당신이 선택한 직업군은 #b불,독위자드#k 입니다.\r\n";
                adcheck += "#L4# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 5) {
                adcheck += "현재 당신이 선택한 직업군은 #b썬,콜위자드#k 입니다.\r\n";
                adcheck += "#L5# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 6) {
                adcheck += "현재 당신이 선택한 직업군은 #b클레릭#k 입니다.\r\n";
                adcheck += "#L6# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 7) {
                adcheck += "현재 당신이 선택한 직업군은 #b헌터#k 입니다.\r\n";
                adcheck += "#L7# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 8) {
                adcheck += "현재 당신이 선택한 직업군은 #b사수#k 입니다.\r\n";
                adcheck += "#L8# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 9) {
                adcheck += "현재 당신이 선택한 직업군은 #b로그#k 입니다.\r\n";
                adcheck += "#L9# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 10) {
                adcheck += "현재 당신이 선택한 직업군은 #b시프#k 입니다.\r\n";
                adcheck += "#L10# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 11) {
                adcheck += "현재 당신이 선택한 직업군은 #b인파이터#k 입니다.\r\n";
                adcheck += "#L11# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 12) {
                adcheck += "현재 당신이 선택한 직업군은 #b건슬링거#k 입니다.\r\n";
                adcheck += "#L12# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(adcheck);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "430");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                 cm.resetStats(4,4,4,35);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1200);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
		cm.gainItem(5072000,500);
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 19) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
		cm.gainItem(5072000,500);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 20) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
		cm.gainItem(5072000,500);
                cm.gainItem(1142477, 1);
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
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.teachSkill(30001061, 1, 0); //포획
                cm.teachSkill(30001062, 1, 0); //헌터의 부름
                cm.warp(931000500);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 22) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.resetStats(35,4,4,4);
                cm.teachSkill(30011109, 1, 0); //데빌 윙즈
                cm.teachSkill(30010110, 1, 0); //데몬 점프
                cm.teachSkill(30010111, 1, 0); //데쓰 커스
                cm.teachSkill(30010112, 1, 0); //데몬스 퓨리
                cm.teachSkill(30010185, 1, 0); //데모닉 블러드
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20248);
                cm.getPlayer().setHair(33531);
                cm.getPlayer().setFace2(1012280);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050191, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1072518, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1322123, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //포스실드
            } else {
                cm.getPlayer().setFace(21246);
                cm.getPlayer().setHair(34411);
                cm.getPlayer().setFace2(1012280);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051236, 0, 3, 0, 7, 0, 0); //상의
                cm.addEquip(-7, 1072518, 0, 2, 0, 7, 0, 0); //신발
                cm.addEquip(-11, 1322123, 17, 0, 0, 7, 0, 0); //무기
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //포스실드
            }
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.getPlayer().setSkinColor(0);
                cm.getPlayer().gainSP(4);
                cm.fakeRelog();
                cm.updateChar();
                cm.warp(100000000);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.resetStats(4,25,4,4);
                cm.getPlayer().changeJob(3500);
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.teachSkill(30001068, 1, 1); //메카닉대쉬
                cm.getPlayer().gainSP(4);
                cm.updateChar();
                cm.getPlayer().setKeyValue("AutoJob", "3510");
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
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
             //   //cm.getPlayer().setHp(500);
             //   //cm.getPlayer().setMp(500);
		cm.gainItem(5072000,500);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 2) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "120");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 3) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "130");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 4) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "210");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
		cm.gainItem(5072000,500);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 5) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "220");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 6) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "230");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 7) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "310");
                //cm.getPlayer().setHp(500);
		cm.gainItem(5072000,500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 8) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "320");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 9) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "410");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
		cm.gainItem(5072000,500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 10) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "420");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
		cm.gainItem(5072000,500);
                cm.gainItem(1142477, 1);
                cm.dispose();
            } else if (selection == 11) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "510");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
		cm.gainItem(5072000,500);
                cm.dispose();
            } else if (selection == 12) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "520");
                //cm.getPlayer().setHp(500);
                //cm.getPlayer().setMp(500);
                cm.warp(100000000);
		cm.gainItem(5072000,500);
                cm.gainMeso(100000000);
                cm.gainItem(1142477, 1);
                cm.dispose();
            }
        } 
    }
}