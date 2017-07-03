


/*

	히나 소스 팩의 스크립트 입니다. (제작 : 티썬) - 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.

	지연 에 의해 만들어 졌습니다.

	엔피시아이디 : 9031003

	엔피시 이름 : 에이센

	엔피시가 있는 맵 : 히든스트리트 : 전문기
술마을 &lt;마이스터 빌> (910001000)

	엔피시 설명 : 장비 제작의 마스터


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
        var menu = "예쁘고 멋진 장신구들을 제작하는~ 장비 제작에 관심이 있나?\r\n";
        menu += "#L0##b#e장비 제작#n에 대한 설명을 듣는다.#l\r\n";
        if (cm.getProfession(2) != MapleProfessionType.EQUIP.getValue()) {
            menu += "#L1##e장비 제작#n을 배운다.#l\r\n";
        }
        if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
            menu += "#L2##e장비 제작#n을 초기화 한다.#l\r\n";
        }
        if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue() && cm.getPlayer().getProfession().getSecondProfessionExp() == GameConstants.getProfessionExpNeededForLevel(cm.getPlayer().getProfession().getSecondProfessionLevel())) {
            menu += "#L3##e장비 제작#n의 레벨을 한 단계 올린다.#l\r\n";
        }
        cm.sendSimple(menu);
    } else if (status == 1) {
        select = selection;
        if (selection == 0) {
            cm.sendOk("장비 제작은 제련된 보석과 광물을 이용하여 멋진 장비들을 만드는 매력적인 기술이라네.");
            cm.dispose();
            return;
        } else if (selection == 1) {
            if (cm.getProfession(1) == MapleProfessionType.MINING.getValue() && cm.getProfession(2) == MapleProfessionType.NONE.getValue()) {
                cm.sendYesNo("#b장비 제작#k을 배워보고 싶나? 비용은 #b5000 메소#k라네. 정말 배워보고 싶나?\r\n#b(현재 습득 하신 전문기술 갯수 : 1개)");
            } else if (cm.getProfession(1) == MapleProfessionType.HERBALISM.getValue()) {
                cm.sendOk("이미 연금술을 배우신 것 같은데? 그렇다면 #b연금술#k을 해보는건 어떤가?");
                cm.dispose();
                return;
            } else if (cm.getProfession(2) == MapleProfessionType.ACC.getValue()) {
                cm.sendOk("이미 자네는 장신구 제작을 배운것 같은데? 그렇다면 장비제작을 배울 수 없다네.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("장비 제작은 채광을 배운 후에 가르쳐 줄 수 있다네. 채광은 오른쪽의 #b노붐#k에게서 배울 수 있지.");
                cm.dispose();
                return;
            }
        } else if (selection == 2) {
            if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
                cm.sendYesNo("장비 제작을 배우지 않은 상태로 초기화하는가? 지금까지 쌓은 레벨과 숙련도가 모두 초기화 된다네. 정말 초기화 하고 싶나?");
            }
        } else if (selection == 3) {
            if (cm.getProfession(2) == MapleProfessionType.EQUIP.getValue()) {
                cm.sendYesNo("#b장비 제작#k의 레벨을 한단계 올려주겠네. 수수료는 #b"+(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)+"메소#k 라네. 정말 배우고 싶나?");
            }
        }
    } else if (status == 2) {
        if (select == 1) {
            if (cm.getPlayer().getMeso() >= 5000) {
                cm.gainMeso(-5000);
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.setProfession(2, MapleProfessionType.EQUIP.getValue());
                cm.sendOk("장비 제작의 지식을 알려주었다네. 그리고 숙련도가 다 차게되면 장비 제작의 레벨을 올릴 수 있으니 꼭 다시 찾아오게. 더 자세한 지식을 알려주겠네.");
                cm.dispose();
                return;
            } else {
                cm.sendOk("메소가 부족한데? 미안하지만 돈이 없으면 장비 제작을 가르쳐 줄 수 없다네.");
                cm.dispose();
                return;
            }
        } else if (select == 2) {
            cm.deleteProfession(2);
            cm.sendOk("장비 제작 기술을 초기화했다네. 다시 배우고 싶다면 언제든지 찾아오게.");
            cm.dispose();
        } else if (select == 3) {
            if (cm.getPlayer().getMeso() >= (cm.getPlayer().getProfession().getSecondProfessionLevel()*100000)) {
                cm.playSound(false, "profession/levelup");
                cm.showWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.broadcastWZEffect("Effect/OnUserEff.img/professions/equip_product_levelup", 1);
                cm.gainMeso(-(cm.getPlayer().getProfession().getSecondProfessionLevel()*100000));
                cm.levelUpProfession(2);
                cm.sendOk("장비 제작의 기술이 한단계 올랐다네.");
                cm.dispose();
            } else {
                cm.sendOk("메소는 제대로 가지고 있는건가?");
                cm.dispose();
            }
        }
    }
}
