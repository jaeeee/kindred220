/*

리안스토리 전직스크립트

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
            var chat = "직업을 고르게나~ ";
            var demon = "직업을 고르게나~ ";
            var hero = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
            var nova = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
            var cygh = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
            var zeno = "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";


            if(cm.getPlayer().getJob() == 10112) {
              var zero = "제로";
              zero += "\r\n\r\n#L100# 저의 직업은 #r제로#k 입니다.";
              cm.sendSimple(zero);
           }
if(cm.getPlayer().getJob() == 2005) {
              var eunwol= "게임시작을 원하신다면 계속 진행해 주시길 바랍니다.";
              eunwol += "\r\n\r\n#L111# 저의 직업은 #r은월#k 입니다.";
              cm.sendSimple(eunwol);
           }
            if (cm.getPlayer().getJob() == 0) {
                chat += "자네의 직업은 #b모험가#k 라네.\r\n";
                chat += "#L1# 저는 #r전사#k로 전직하고 싶습니다.\r\n";
                chat += "#L2# 저는 #r마법사#k로 전직하고 싶습니다.\r\n";
                chat += "#L3# 저는 #r궁수#k로 전직하고 싶습니다.\r\n";
                chat += "#L4# 저는 #r도적#k으로 전직하고 싶습니다.\r\n";
                chat += "#L5# 저는 #r해적#k으로 전직하고 싶습니다.\r\n";
                chat += "#L6# 저는 #r듀얼블레이드#k로 전직하고 싶습니다.\r\n";
                chat += "#L7# 저는 #r캐논슈터#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            }
            if (cm.getPlayer().getJob() == 1000) {
                chat += "자네의 직업은  #b시그너스#k 입니다.\r\n";
                chat += "#L8# 저는 #r소울마스터#k로 전직하고 싶습니다.\r\n";
                chat += "#L9# 저는 #r플레임위자드#k로 전직하고 싶습니다.\r\n";
                chat += "#L10# 저는 #r윈드브레이커#k로 전직하고 싶습니다.\r\n";
                chat += "#L11# 저는 #r나이트워커#k로 전직하고 싶습니다.\r\n";
                chat += "#L12# 저는 #r스트라이커#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            }
            if (cm.getPlayer().getJob() == 2000) {
                hero += "자네의 직업은 #b아란#k 입니다.\r\n";
                hero += "#L13# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2001) {
                hero += "자네의 직업은 #b에반#k 입니다.\r\n";
                hero += "#L14# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2002) {
                hero += "자네의 직업은 #b메르세데스#k 입니다.\r\n";
                hero += "#L15# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2003) {
                hero += "자네의 직업은  #b팬텀#k 입니다.\r\n";
                hero += "#L16# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 2004) {
                hero += "자네의 직업은 #b루미너스#k 입니다.\r\n";
                hero += "#L17# 저는 #r어둠계열#k을 선택하겠습니다.\r\n";
                hero += "#L18# 저는 #r빛계열#k을 선택하겠습니다.\r\n";
                cm.sendSimple(hero);
            }
            if (cm.getPlayer().getJob() == 3000) {
                chat += "자네의 직업은 #b레지스탕스#k 입니다.\r\n";
                chat += "#L19# 저는 #r배틀메이지#k로 전직하고 싶습니다.\r\n";
                chat += "#L20# 저는 #r와일드헌터#k로 전직하고 싶습니다.\r\n";
                chat += "#L22# 저는 #r메카닉#k으로 전직하고 싶습니다.\r\n";
                cm.sendSimple(chat);
            }
            if (cm.getPlayer().getJob() == 5000) {
               cygh += "자네의 직업은 #b미하일#k 입니다.\r\n";
               cygh += "#L23# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
               cm.sendSimple(cygh);
            }
            if (cm.getPlayer().getJob() == 6000) {
               nova += "자네의 직업은 #b카이저#k 입니다.\r\n";
               nova += "#L24# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
               cm.sendSimple(nova);
            }
            if (cm.getPlayer().getJob() == 6001) {
               nova += "자네의 직업은 #b엔젤릭버스터#k 입니다.\r\n";
               nova += "#L25# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
               cm.sendSimple(nova);
            }
            if (cm.getPlayer().getJob() == 3001) {
                demon += "자네의 직업은 #b데몬#k 입니다.\r\n";
                demon += "#L26# 저는 #r데몬슬레이어#k로13213 전직하고 싶습니다.\r\n";
                demon += "#L27# 저는 #r데몬어벤져#k로 전직하고 싶습니다.\r\n";
                cm.sendSimple(demon);
            }
            if (cm.getPlayer().getJob() == 3002) {
                zeno += "자네의 직업은 #b제논#k 입니다.\r\n";
                zeno += "#L28# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(zeno);
            }
        } else if (cm.getPlayer().getKeyValue("startvalue") == "0") {
            var chat = "리안스토리에 오신 것을 환영합니다. 저희 서버규칙은 아래와 같습니다.\r\n";
            chat += "#r[1]#k #b버그를 발견했을시, 운영자에게 바로 보고해야합니다.#k\r\n";
            chat += "#r[2]#k #b절대로, 서버안을 망치거나 다른부정행위를 해선 안됩니다.#k\r\n";
            chat += "#r[주의사항]#k 이 서버는 개인사설서버 이므로, 백섭이되거나 언제든지 캐릭터가 삭제가 될수있음에 유의해 주시길바랍니다.\r\n";
            cm.sendSimple(chat);
            cm.dispose();
    } else if (status == 1) {
            var adventure = "당신의 2차 직업을 설정해주세요. 지금 설정한 직업은 후에 일정레벨이되면 자동으로 전직이 됩니다.";
            var normal = "당신이 선택한 직업이 맞는지 확인해주세요. 당신이 선택한 직업이 맞으면 계속 진행해 주시길 바랍니다.";
          if (selection == 100) {
             cm.warp(100000000);
             cm.getPlayer().setKeyValue("AutoJob", "110112");
             cm.gainStartItem();
             cm.dispose();
          } else if (selection == 111) {
           for (var i = cm.getPlayer().getLevel(); i < 20; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
             cm.getPlayer().changeJob(2500);
             cm.warp(100000000);
             cm.getPlayer().setKeyValue("AutoJob", "2510");
           //  cm.addEquip2(-10, 1353100);
             cm.taschSkill(20050286, 1, 1);
             cm.teachSkill(25111000,20,20);
             cm.teachSkill(25101000,20,20);
             cm.teachSkill(25101003,10,10);
             cm.teachSkill(25001000,25,25);
             cm.teachSkill(25001002,25,25);
             cm.teachSkill(25110210,20,20);
             cm.teachSkill(25001204,20,20);
             cm.teachSkill(25000105,20,20);
             cm.gainStartItem();
             cm.dispose();
} else if (selection == 100) {
             cm.warp(100000000);
cm.gainMeso(5000000);
             cm.getPlayer().setKeyValue("AutoJob", "110112");
             cm.dispose();
            }if (selection == 1) {
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
                adventure += "#L9# 저는 #r어쌔신#k로 전직하고 싶습니다.\r\n";
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
                normal += "현재 당신이 선택한 직업군은 #b스트라이커#k 입니다.\r\n";
                normal += "#L19# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 13) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2100);
                cm.getPlayer().setKeyValue("AutoJob", "2110");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2200);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2300);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(2400);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
                cm.warp(100000000);
	cm.gainStartItem();
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
	cm.gainStartItem();
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
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 19) {
                normal += "현재 당신이 선택한 직업군은 #b배틀메이지#k 입니다.\r\n";
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
                normal += "현재 당신이 선택한 직업군은 #b메카닉#k 입니다.\r\n";
                normal += "#L23# 저는 #r게임#k을 시작하고 싶습니다.\r\n";
                cm.sendSimple(normal);
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 24) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 25) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 26) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.warp(100000000);
	cm.gainStartItem();
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
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 28) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3600);
                cm.getPlayer().setKeyValue("AutoJob", "3610");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
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
                adcheck += "현재 당신이 선택한 직업군은 #b어쌔신#k 입니다.\r\n";
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
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 14) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 15) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
                cm.warp(100000000);
                cm.teachSkill(10001253,1,1);
                cm.teachSkill(10001254,1,1);                
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 16) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1200);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 17) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.teachSkill(10001253,1,1);
                cm.teachSkill(10001254,1,1);
                cm.dispose();
            } else if (selection == 18) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 19) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.teachSkill(10001253,1,1);
                cm.teachSkill(10001254,1,1);
                cm.dispose();
            } else if (selection == 20) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 21) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3300);
                cm.getPlayer().setKeyValue("AutoJob", "3310");
                cm.teachSkill(30001061, 1, 1);
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 22) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 23) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(3500);
                cm.getPlayer().setKeyValue("AutoJob", "3510");
                cm.teachSkill(30001068, 1, 1);
                cm.warp(100000000);
	cm.gainStartItem();
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
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 2) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "120");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 3) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(100);
                cm.getPlayer().setKeyValue("AutoJob", "130");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 4) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "210");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 5) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "220");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 6) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(200);
                cm.getPlayer().setKeyValue("AutoJob", "230");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 7) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "310");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 8) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(300);
                cm.getPlayer().setKeyValue("AutoJob", "320");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 9) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "410");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 10) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "420");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 11) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "510");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            } else if (selection == 12) {
                for (var i = cm.getPlayer().getLevel(); i < 10; i++) {
                    cm.gainExp(Packages.constants.GameConstants.getExpNeededForLevel(i));
                }
                cm.getPlayer().changeJob(500);
                cm.getPlayer().setKeyValue("AutoJob", "520");
                cm.warp(100000000);
	cm.gainStartItem();
                cm.dispose();
            }
    } 
}
}
