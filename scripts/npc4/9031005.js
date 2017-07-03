


/*

	히나 소스 팩의 스크립트 입니다. (제작 : 티썬) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	지연 에 의해 만들어 졌습니다.

	엔피시아이디 : 9031005

	엔피시 이름 : 카리엔

	엔피시가 있는 맵 : 히든스트리트 : 전문기술마을 &lt;마이스터 빌> (910001000)

	엔피시 설명 : 연금술의 마스터


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
        var menu = "안녕하세요. 혹시 연금술에 관심있으세요?\r\n";
        menu += "#L0##b#e연금술#n에 대한 설명을 듣는다.#l\r\n";
        if (cm.getProfession(2) == MapleProfessionType.NONE.getValue()) {
            menu += "#L1##e연금술#n을 배운다.#l\r\n";
        }
        
        
        if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
            menu += "#L2##e연금술#n을 초기화 한다.#l\r\n";
        }
        if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue() && cm.getPlayer().getProfession().getSecondProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getSecondProfessionLevel())) {
            menu += "#L3##e연금술#n의 레벨을 한 단계 올린다.#l\r\n";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("연금술은 허브의 오일을 이용하여 다양한 물약을 만드는 기술이랍니다. HP와 MP를 회복하는 물약부터 당신을 강하게 할 수 있는 다양한 물약도 만들 수 있어요. 지금까지 체험하지 못했던 신기한 물약도 당연히 만들 수 있구요.");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendYesNo("#b연금술#k을 배워보시고 싶으세요? 비용은 #b5000 메소#k입니다. 정말 배우시겠어요?\r\n#b(현재 습득 하신 전문기술 갯수 : 1개)");
            } else if (cm.getProfession(1) == MapleProfessionType.MINING.getValue()) {
                cm.sendOk("이미 채광을 배우신 것 같은데요? 그렇다면 #b장비 제작#k이나 #b장신구 제작#k을 해보시는건 어떠세요?");
                cm.dispose();
                return;
            } else {
                cm.sendOk("연금술은 약초채집을 배운 후에 가르쳐 드릴 수 있답니다. 약초채집은 오른쪽으로 가시면 솥에 열심히 약초를 넣고 있는 약초채집의 마스터 #b스타첼#k에게 배울 수 있어요.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
                cm.sendYesNo("연금술을 배우지 않은 상태로 초기화합니다. 지금까지 쌓으신 레벨과 숙련도가 모두 초기화 됩니다. 정말 초기화 하시고 싶으세요?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(2) == MapleProfessionType.ALCHEMY.getValue()) {
                cm.sendYesNo("#b연금술#k의 레벨을 한단계 올려드립니다. 수강료는 #b"+(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)+"메소#k 랍니다. 정말 배우고 싶으세요?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.setProfession(2, MapleProfessionType.ALCHEMY.getValue());
                cm.sendOk("자아~ 연금술에 대한 기본적인 지식을 알려드렸어요. 그리고 숙련도가 다 차게되면 연금술의 레벨을 올릴 수 있으니 꼭 저에게 다시 찾아와주세요. 새로운 지식을 알려드릴게요.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("메소가 부.족.하신걸요? 메소가 부족하시면 연금술을 가르쳐 드릴 수 없답니다.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            cm.deleteProfession(2);
            cm.sendOk("연금술 기술을 초기화해드렸어요. 다시 배우시고 싶으시다면 언제든지 찾아주세요!");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)) {
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000));
                cm.levelUpProfession(2);
                cm.sendOk("약초 채집의 기술이 한단계 올랐어요! 축하드려요~");
                cm.dispose();
            } else {
                cm.sendOk("수강료가 부족하신 것 같은데요? 다시 한번 확인해 보세요~");
                cm.dispose();
            }
        }
    }
}
