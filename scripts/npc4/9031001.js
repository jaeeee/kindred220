


/*

	히나 소스 팩의 스크립트 입니다. (제작 : 티썬) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	지연 에 의해 만들어 졌습니다.

	엔피시아이디 : 9031001

	엔피시 이름 : 스타첼

	엔피시가 있는 맵 : 히든스트리트 : 전문기술마을 &lt;마이스터 빌> (910001000)

	엔피시 설명 : 약초채집의 마스터


*/
importPackage(Packages.client);
importPackage(Packages.constants);
var status = -1;
var select = -1;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == -1) {
        cm.dispose();
        return;
    }
    if (mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    }

    if (status == 0) {
        var menu = "안녕하세요. 무엇을 도와드릴까요?\r\n";
        menu += "#L0##b#e약초 채집#n에 대한 설명을 듣는다.#l\r\n";
        if (cm.getProfession(1) != MapleProfessionType.HERBALISM.getValue()) {
            menu += "#L1##e약초 채집#n을 배운다.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
            menu += "#L2##e약초 채집#n을 초기화 한다.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue() && cm.getPlayer().getProfession().getFirstProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getFirstProfessionLevel())) {
            menu += "#L3##e약초 채집#n의 레벨을 한 단계 올린다.#l\r\n";
        }
        if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
            menu += "#L4##b#t4022023#를 교환한다.#k#l";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("약초 채집은 메이플 월드에 있는 여러가지 진귀하고 효과 좋은 약초를 채집하고, 약초를 이용해서 재료를 만들 수 있어요. 연금술을 생각하신다면 필수적인 기술이 되지요.");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == 0 && cm.getProfession(2) == 0) {
                cm.sendYesNo("#b약초 채집#k을 배웁니다. 비용은 #b5000 메소#k입니다. 정말 배우시겠습니까?\r\n#b(현재 습득 하신 전문기술 갯수 : 0개)");
            } else if (cm.getProfession(2) != 0) {
              cm.sendOk("이미 약초 채집을 배우고 계셔요.");
              cm.dispose();
            } else {
                
                cm.sendOk("이미 채광을 배우고 계신것 같은데요? 채광을 배우신 상태에서는 약초 채집을 배우실 수 없어요.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b약초 채집#k을 초기화 합니다. 다시 배우시려면 수강료를 다시 내셔야 하며, 초기화 하시면 다른 전문기술을 배우실 수 있습니다. 또한, 지금까지 올리신 레벨과 숙련도가 초기화 됩니다. 정말 초기화 하시겠습니까?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b약초 채집#k의 레벨을 한단계 올립니다. 수강료는 #b"+(cm.getPlayer().getProfession().getFirstProfessionLevel()*100000)+"메소#k 입니다.");
            }
        } else if (selection == 4) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b#t4022023#를 100개#k모아오시면 #b#i2028066##t2028066# 1개#k로 교환해 드립니다. 교환하시고 싶으세요?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                if (!cm.canHold(1502000)) {
                    cm.sendOk("장비 탭 공간을 한 칸 이상 비워주세요.");
                    cm.dispose();
                    return;
                }
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainItem(1502000, 1);
                cm.setProfession(1, MapleProfessionType.HERBALISM.getValue());
                cm.sendOk("좋아. 약초채집을 성공적으로 익혔습니다.  숙련도가 다 채워야지만 레벨을 올릴 수 있으니 다시 찾아오세요.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("메소가 부족하신 것 같은데요? 죄송하지만 메소가 부족하시면 전문기술을 배우실 수 없답니다.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            if (cm.getProfession(2) != 0) {
                cm.sendOk("이미 연금술을 배우고 계신것 같은데요? 연금술을 배우고 게시면 약초 채집을 초기화할 수 없습니다.");
                cm.dispose();
                return;
            }
            cm.deleteProfession(1);
            cm.sendOk("약초 채집이 초기화 되었습니다.");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getFirstProfessionLevel()*100000)) {
                if (cm.getPlayer().getProfession().getFirstProfessionLevel() == 3) {
                    if (cm.canHold(2028066)) {
                        cm.gainItem(2028066, 1);
                    } else {
                        cm.sendOk("소비 인벤토리 공간을 한칸 이상 비워주세요.");
                        cm.dispose();
                        return;
                    }
                } else if (cm.getPlayer().getProfession().getFirstProfessionLevel() == 6) {
                    if (cm.canHold(4330000)) {
                        cm.gainItem(4330000, 1);
                    } else {
                        cm.sendOk("기타 인벤토리 공간을 한칸 이상 비워주세요.");
                        cm.dispose();
                        return;
                    }
                }
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getFirstProfessionLevel()*100000));
                cm.levelUpProfession(1);
                cm.sendOk("네. 약초채집의 단계가 한단계 상승했습니다.");
                cm.dispose();
            } else {
                cm.sendOk("메소가 부족하신건 아닌지 확인해 보세요.");
                cm.dispose();
            }
        } else if (select == 4) {
            if (!cm.haveItem(4022023, 100)) {
                cm.sendOk("#t4022023#는 잘 갖고 계신건가요? 다시 한번 확인해 보세요.");
                cm.dispose();
                return;
            } else {
                cm.sendGetNumber("몇개 교환하시고 싶으세요? 현재 #b#c4022023##k개의 #t4022023#가 있습니다.", 1, 1, 100);
            }
        }
    } else if (status == 3) {
        if (select == 4) {
            if (cm.haveItem(4022023, selection * 100)) {
                cm.sendOk("교환이 완료되었습니다.");
                cm.dispose();
                cm.gainItem(4022023, -(selection * 100));
                cm.gainItem(2028066, selection);
            }
        }
    }
}
