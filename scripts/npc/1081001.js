/*
���� : ������(skymin0307)
*/
/**
������� ���� NPC
**/
var status = 0;
var musicplayer

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
 } else {
 if (mode == 0) {
  cm.sendOk("BGM�� �ٲ㼭 ���ο� ������� ����� �϶�.");
  cm.dispose();
 }
  status++;
  if(status == 0) {
   cm.sendSimple ("#h ##k�� �ȳ��ϼ���\r\n���� BGM DJ#n#k  #b���ǽ�#k#n��� �մϴ�. \r\n �� ������Ǵ� 50,000�޼ұ���, ������ ����Ͻǰ�쿡�� �� �ʿ� ���� �ִ� ����� ��� �˴ϴ�. ���� �����ϴ� ����� ���� ����ؾ� ������ �ֽ��ϴ�. \r\n#e���Ͻô� ��������� ��󺸼���.\r\n#I#L8# ��׽ý� ���� �����\r\n#I#L9# �丮�� ����\r\n#I#L10# Ŀ�׽�Ƽ\r\n#I#L11# �����Ͼ� ����\r\n#I#L12# �����Ͼ�\r\n#I#L13# �̺���̱�\r\n#I#L14# Ŀ�׽�Ƽ ��Ƽ����Ʈ\r\n#I#L15# �����ױ�\r\n#I#L16# Ŀ�׽�Ƽ ����ö\r\n#I#L17# �����ױ�\r\n#I#L19# �÷θ�����ġ\r\n#I#L20# ������\r\n#I#L22# �ູ�Ѹ���\r\n#I#L23# ������\r\n#I#L24# ũ�����߷� ����\r\n#I#L25# ������\r\n#I#L26# ������ �����\r\n#I#L29# ��\r\n#I#L30# �÷��� ����\r\n#I#L31# �������� ���ϴ� ��\r\n#I#L32# ���� ����\r\n#I#L33# ������ ����\r\n#I#L34# ������ ž\r\n#I#L35# ���긮�� ����\r\n#I#L36# ���긮��\r\n#I#L37# �峭�� ����\r\n#I#L38# �ð��� �ҿ뵹��\r\n#I#L39# ������ ž ����\r\n#I#L40# ������ ž �ܺ�\r\n#I#L41# ���긮�� ��Ƽ����Ʈ\r\n#I#L42# ������������\r\n#I#L44# ��� �ʿ�\r\n#I#L45# �ν��� �ʿ�\r\n#I#L46# �����Ƚ�#I\r\n#I#L47# ž�� ����#I\r\n#I#L48# �ð��� �տ�#I\r\n#I#L49# ������ �ð��� ��#I\r\n#I#L50# ������ �ð��� ��2#I\r\n#I#L51# ��Ǯ������ & ī�Ϲ�#I\r\n#I#L52# ��Ʋ�� �ð��� ��#I\r\n#I#L53# ��Ʋ�� �ð��� ��2#I\r\n#I#L54# Ÿ���佺#I\r\n#I#L55# ����ƮŰ��#I\r\n#I#L57# ����Ƹ��� �����#I\r\n#I#L58# ����Ƹ���#I\r\n#I#L59# ����Ƹ��� �����2#I\r\n#I#L60# �Ʒ�����#I\r\n#I#L61# ���#I\r\n#I#L62# �Ǿƴ���#I\r\n#I#L63# ����Ƹ��� ����#I\r\n#I#L67# ����Ƽ��#I\r\n#I#L68# ��ũŸ��#I\r\n#I#L69# ������#I\r\n#I#L70# ������ �����#I\r\n#I#L71# ������ ����\r\n#I#L72# ������ ž\r\n#I#L73# �Ƹ���Ʈ ������\r\n#I#L74# ���� ��\r\n#I#L75# ȥ����\r\n#I#L76# ȥ������ ����\r\n#I#L77# ���� ����\r\n#I#L78# �Ƹ���Ʈ\r\n#I#L79# �Ƹ���Ʈ �����\r\n#I#L80# ����\r\n#I#L81# ���� �����\r\n#I#L82# ���� ����\r\n#I#L83# ������ �ұ�\r\n#I#L84# �Ƹ���Ʈ ������\r\n#I#L85# ��ƿ���� ������\r\n#I#L86# ��ƿ����ȣ ����\r\n#I#L87# ������\r\n#I#L89# ���������ؼ�\r\n#I#L90# ���������ؼ�������\r\n#I#L91# ��ȥ\r\n#I#L92# ��ȥ ��\r\n#I#L93# ����������\r\n#I#L94# ���� ��\r\n#I#L95# ����\r\n#I#L96# ����2\r\n#I#L100# ��Ƽ��Ǽ�\r\n#I#L116# ĳ�ü�\r\n#I#L117# Ÿ��Ʋ#I");
  } else if(status == 1) {
musicplayer = cm.getChar().getName();
    if (selection == 0) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/Everybody");
     cm.sendOk("#fMap/MapHelper.img/mark/Dungeon##e [����Ƽ�� ũ��] Every body ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [����Ƽ�� ũ��] Every body�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 1) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/Let it go");
     cm.sendOk("#fMap/MapHelper.img/mark/Henesys##e [ȿ��] Let it go ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [ȿ��] Let it go�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 2) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/Officially Missing You");
     cm.sendOk("#fMap/MapHelper.img/mark/SouthPerry##e [�㽺] Officially Missing You ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [�㽺] Officially Missing You�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 3) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/����ϴ�?");
     cm.sendOk("#fMap/MapHelper.img/mark/Perion##e [�ٶ���] ����ϴ�? ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [�ٶ���] ����ϴ�?���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 4) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/�������ÿ�");
     cm.sendOk("#fMap/MapHelper.img/mark/Henesys##e [��â��] �������ÿ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [��â��] �������ÿ� �� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 5) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/�� �𸣰�");
     cm.sendOk("#fMap/MapHelper.img/mark/Dungeon##e [����ġ] �� �𸣰� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [����ġ] �� �𸣰� �� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 6) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/�峭�Ƴ�");
     cm.sendOk("#fMap/MapHelper.img/mark/Ellinia##e [ƾž] �峭�Ƴ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [ƾž] �峭�Ƴ� �� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 7) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BGM SYSTEM/���غ�����");
     cm.sendOk("#fMap/MapHelper.img/mark/TestServer##e [����&�ŵ�Ŭ���] ���غ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� [����&�ŵ�Ŭ���] ���غ����� �� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 8) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm01/CavaBien");
     cm.sendOk("#fMap/MapHelper.img/mark/Henesys##e ��׽ý� ���� ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��׽ý� ���� ����ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 9) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm01/HighlandStar");
     cm.sendOk("#fMap/MapHelper.img/mark/Perion##e ��׽ý� ���� ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��׽ý� ���� ����ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 10) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm01/BadGuys");
     cm.sendOk("#fMap/MapHelper.img/mark/KerningCity##e Ŀ�׽�Ƽ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ŀ�׽�Ƽ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 11) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm02/MissingYou");
     cm.sendOk("#fMap/MapHelper.img/mark/Ellinia##e �����Ͼ� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����Ͼ� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 12) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm02/WhenTheMorningComes");
     cm.sendOk("#fMap/MapHelper.img/mark/Ellinia##e �����Ͼ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����ϾƷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 13) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm02/EvilEyes");
     cm.sendOk("#fMap/MapHelper.img/mark/Dungeon##e �̺���̱��� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� �̺���̱��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 14) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm02/JungleBook");
     cm.sendOk("#fMap/MapHelper.img/mark/KerningParty##e Ŀ�׽�Ƽ ��Ƽ����Ʈ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ŀ�׽�Ƽ ��Ƽ����Ʈ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 15) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm02/AboveTheTreetops");
     cm.sendOk("#fMap/MapHelper.img/mark/Rith##e �����ױ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����ױ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 16) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm03/Subway");
     cm.sendOk("#fMap/MapHelper.img/mark/KerningCity##e Ŀ�׽�Ƽ ����ö ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ŀ�׽�Ƽ ����ö�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 17) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm03/Elfwood");
     cm.sendOk("#fMap/MapHelper.img/mark/Rith##e �����ױ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����ױ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 18) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm03/BlueSky");
     cm.sendOk("#fMap/MapHelper.img/mark/KerningCity##e Ŀ�׽�Ƽ ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ŀ�׽�Ƽ �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 19) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm03/Beachway");
     cm.sendOk("#fMap/MapHelper.img/mark/SouthPerry##e �÷θ�����ġ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �÷θ��� ��ġ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 20) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm03/SnowyVillage");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNath##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 21) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm04/PlayWithMe");
     cm.sendOk("#fMap/MapHelper.img/mark/TestServer##e ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 22) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm04/WhiteChristmas");
     cm.sendOk("#fMap/MapHelper.img/mark/HappyVillage##e �ູ�Ѹ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �ູ�Ѹ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 23) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm04/UponTheSky");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 24) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm04/ArabPirate");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ũ�����߷� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ũ�����߷� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 25) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm04/Shinin'Harbor");
     cm.sendOk("#fMap/MapHelper.img/mark/Orbis##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����񽺷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 26) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm04/WarmRegard");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNath##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 27) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm05/WolfWood");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNathDungeon##e ������ ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 28) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm05/DownToTheCave");
     cm.sendOk("#fMap/MapHelper.img/mark/Dungeon##e ���̱�2 ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���̱�2�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 29) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm05/AbandonedMine");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNathDungeon##e �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 30) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm05/MineQuest");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNathDungeon##e �÷��� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �÷��� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 31) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm05/HellGate");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNathDungeon##e �������� ���ϴ¹� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� ���ϴ¹� ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 32) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm06/FinalFight");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNathDungeon##e ���� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 33) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm06/WelcomeToTheHell");
     cm.sendOk("#fMap/MapHelper.img/mark/ElNathDungeon##e ������ ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 34) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm06/ComeWithMe");
     cm.sendOk("#fMap/MapHelper.img/mark/GoddessTower##e ������ ž ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ž���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 35) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm06/FlyingInABlueDream");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ���긮�� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���긮�� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 36) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm06/FantasticThinking");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ���긮�� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���긮������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 37) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm07/WaltzForWork");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e �峭�� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �峭�� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 38) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm07/WhereverYouAre");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e �ð��� �ҿ뵹���� ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �ð��� �ҿ뵹�̷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 39) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm07/FunnyTimeMaker");
     cm.sendOk("#fMap/MapHelper.img/mark/LudiTower1##e ������ ž ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ž ���� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 40) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm07/HighEnough");
     cm.sendOk("#fMap/MapHelper.img/mark/LudiTower1##e ������ ž �ܺ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������������� ž �ܺη� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 41) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm07/Fantasia");
     cm.sendOk("#fMap/MapHelper.img/mark/AbandonTower##e ���긮�� ��Ƽ����Ʈ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���긮�� ��Ƽ����Ʈ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 42) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm08/LetsMarch");
     cm.sendOk("#fMap/MapHelper.img/mark/OmegaSector##e ������������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����������η� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 43) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm08/ForTheGlory");
     cm.sendOk("#fMap/MapHelper.img/mark/OmegaSector##e �ݳ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �ݳ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 44) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm08/FindingForest");
     cm.sendOk("#fMap/MapHelper.img/mark/OmegaSector##e ��� �ʿ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��� �ʿ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 45) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm08/LetsHuntAliens");
     cm.sendOk("#fMap/MapHelper.img/mark/OmegaSector##e �ν��� �ʿ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �ν��� �ʿ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 46) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm08/PlotOfPixie");
     cm.sendOk("#fMap/MapHelper.img/mark/GoddessTower##e �����Ƚ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����Ƚ÷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 47) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm09/DarkShadow");
     cm.sendOk("#fMap/MapHelper.img/mark/AbandonTower##e ž�� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ž�� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 48) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm09/TheyMenacingYou");
     cm.sendOk("#fMap/MapHelper.img/mark/AbandonTower##e �ð��� �տ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �ð��� �տ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 49) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm09/FairyTale");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ������ �ð��� �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �ð��� ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 50) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm09/FairyTalediffvers");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ������ �ð��� ��2 ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �ð��� ��2�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 51) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm09/TimeAttack");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ��Ǯ������ & ī�Ϲ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ǯ������ & ī�Ϲ߷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 52) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm10/Timeless");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ��Ʋ�� �ð��� �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ʋ�� �ð��� ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 53) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm10/TimelessB");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ��Ʋ�� �ð��� ��2 ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ʋ�� �ð��� ��2�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 54) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm10/BizarreTales");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e Ÿ���佺 ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ÿ���佺�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 55) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm10/TheWayGrotesque");
     cm.sendOk("#fMap/MapHelper.img/mark/Ludibrium##e ����ƮŰ�� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����ƮŰ�۷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 56) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm10/Eregos");
     cm.sendOk("#fMap/MapHelper.img/mark/Guild##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 57) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm11/BlueWorld");
     cm.sendOk("#fMap/MapHelper.img/mark/AquaRoad##e ����Ƹ��� ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����Ƹ��� ����ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 58) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm11/Aquarium");
     cm.sendOk("#fMap/MapHelper.img/mark/AquaRoad##e ����Ƹ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����Ƹ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 59) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm11/ShiningSea");
     cm.sendOk("#fMap/MapHelper.img/mark/AquaRoad##e ����Ƹ��� ����� 2 ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����Ƹ��� ����� 2�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 60) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm11/DownTown");
     cm.sendOk("#fMap/MapHelper.img/mark/Folkvillige##e �Ʒ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ʒ������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 61) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm11/DarkMountain");
     cm.sendOk("#fMap/MapHelper.img/mark/Folkvillige##e ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 62) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm12/AquaCave");
     cm.sendOk("#fMap/MapHelper.img/mark/AquaRoad##e �Ǿƴ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ǿƴ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 63) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm12/DeepSee");
     cm.sendOk("#fMap/MapHelper.img/mark/AquaRoad##e ����Ƹ��� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����Ƹ��� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 64) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm12/WaterWay");
     cm.sendOk("#fMap/MapHelper.img/mark/Guild##e �����Ͼ� ���ϼ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����Ͼ� ���ϼ��η� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 65) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm12/AcientRemain");
     cm.sendOk("#fMap/MapHelper.img/mark/Guild##e �����Ͼ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �����Ͼ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 66) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm12/RuinCastle");
     cm.sendOk("#fMap/MapHelper.img/mark/Guild##e �������� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� ���·� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 67) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm12/Dispute");
     cm.sendOk("#fMap/MapHelper.img/mark/Magatia##e ����Ƽ�� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ����Ƽ�Ʒ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 68) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm13/CokeTown");
     cm.sendOk("#fMap/MapHelper.img/mark/CokeTown##e ��ũŸ�� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ũŸ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 69) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm13/Leafre");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 70) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm13/Minar'sDream");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ������ ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ����ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 71) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm13/AcientForest");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 72) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm13/TowerOfGoddess");
     cm.sendOk("#fMap/MapHelper.img/mark/GoddessTower##e ������ ž ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ž���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 73) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm13/FightSand");
     cm.sendOk("#fMap/MapHelper.img/mark/Ariant##e �Ƹ���Ʈ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ƹ���Ʈ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 74) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm14/DragonLoad");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ���� �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 75) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm14/HonTale");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ȥ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ȥ�������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 76) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm14/CaveOfHontale");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ȥ������ ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ȥ������ ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 77) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm14/DragonNest");
     cm.sendOk("#fMap/MapHelper.img/mark/Leafre##e ���� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 78) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm14/Ariant");
     cm.sendOk("#fMap/MapHelper.img/mark/Ariant##e �Ƹ���Ʈ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ƹ���Ʈ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 79) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm14/HotDesert");
     cm.sendOk("#fMap/MapHelper.img/mark/Ariant##e �Ƹ���Ʈ ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ƹ���Ʈ ����ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 80) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/MureungHill");
     cm.sendOk("#fMap/MapHelper.img/mark/Mureung##e ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 81) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/MureungForest");
     cm.sendOk("#fMap/MapHelper.img/mark/Mureung##e ���� ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��������ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 82) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/WhiteHerb");
     cm.sendOk("#fMap/MapHelper.img/mark/WhiteHerb##e ���ʸ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���ʸ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 83) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/Pirate");
     cm.sendOk("#fMap/MapHelper.img/mark/DevijonParty##e ������ �ұ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ �ұ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 84) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/SunsetDesert");
     cm.sendOk("#fMap/MapHelper.img/mark/Ariant##e �Ƹ���Ʈ ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ƹ���Ʈ ���������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 85) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/Nautilus");
     cm.sendOk("#fMap/MapHelper.img/mark/Nautilus##e ��ƿ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ƿ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 86) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/inNautilus");
     cm.sendOk("#fMap/MapHelper.img/mark/Nautilus##e ��ƿ����ȣ ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ƿ����ȣ ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 87) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/ElinForest");
     cm.sendOk("#fMap/MapHelper.img/mark/ElinForest##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 88) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("Bgm15/PoisonForest");
     cm.sendOk("#fMap/MapHelper.img/mark/ElinForest##e ������ �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 89) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmEvent/FunnyRabbit");
     cm.sendOk("#fMap/MapHelper.img/mark/Event##e ������ ���ؼ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ���ؼ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 90) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmEvent/FunnyRabbitFaster");
     cm.sendOk("#fMap/MapHelper.img/mark/Event##e ���������ؼ� ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���������ؼ� �����Է� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }    } else if (selection == 91) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmEvent/wedding");
     cm.sendOk("#fMap/MapHelper.img/mark/Wedding##e ��ȥ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ȥ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 92) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmEvent/weddingDance");
     cm.sendOk("#fMap/MapHelper.img/mark/Wedding##e ��ȥ �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��ȥ ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 93) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/amoria");
     cm.sendOk("#fMap/MapHelper.img/mark/Wedding##e ���������� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 94) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/chapel");
     cm.sendOk("#fMap/MapHelper.img/mark/Wedding##e ������ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 95) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/cathedral");
     cm.sendOk("#fMap/MapHelper.img/mark/Wedding##e ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �������� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 96) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/cathedral");
     cm.sendOk("#fMap/MapHelper.img/mark/Wedding##e ���� 2 ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���� 2�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 97) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/NLCupbeat");
     cm.sendOk("#fMap/MapHelper.img/mark/NLC##e ��������Ƽ ����Ʈ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��������Ƽ ����Ʈ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 98) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/NLChunt");
     cm.sendOk("#fMap/MapHelper.img/mark/NLC##e ��������Ƽ ����� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��������Ƽ ����ͷ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 99) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/NLCtown");
     cm.sendOk("#fMap/MapHelper.img/mark/NLC##e ��������Ƽ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��������Ƽ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 100) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/HauntedHouse");
     cm.sendOk("#fMap/MapHelper.img/mark/HuntedMansion##e ��Ƽ�� �Ǽ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ƽ�� �Ǽ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 101) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/CrimsonwoodKeep");
     cm.sendOk("#fMap/MapHelper.img/mark/Crimsonwood##e ũ������� Ű�� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ũ������� Ű���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 102) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/Bigfoot");
     cm.sendOk("#fMap/MapHelper.img/mark/Crimsonwood##e �Ŵ��ѹ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ŵ��ѹ߷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 103) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmGL/PhantomForest");
     cm.sendOk("#fMap/MapHelper.img/mark/Crimsonwood##e ������ �� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ������ ���� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 104) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/Feeling");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� �����Ż� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� �����Ż�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 105) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/BizarreForest");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� ������ �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 106) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/Hana");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� �ϳ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� �ϳ��� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 107) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/Yume");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� Ʈ��Ʈ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� Ʈ��Ʈ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 108) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/Bathroom");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� ȭ��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� ȭ��Ƿ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 109) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/BattleField");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� ��Ʋ�ʵ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� ��Ʋ�ʵ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 110) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmJp/FirstStepMaster");
     cm.sendOk("#fMap/MapHelper.img/mark/jipangu##e �Ϻ� ù���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �Ϻ� ù���Ƿ� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 111) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmSG/CBD_town");
     cm.sendOk("#fMap/MapHelper.img/mark/Singapore##e �̰��� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �̰����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 112) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmSG/CBD_field");
     cm.sendOk("#fMap/MapHelper.img/mark/Singapore##e �̰��� �ʵ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� �̰��� �ʵ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 113) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmSG/BoatQuay_field");
     cm.sendOk("#fMap/MapHelper.img/mark/Singapore##e ��Ʈ���� �ʵ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ʈ���� �ʵ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 114) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmSG/Ghostship");
     cm.sendOk("#fMap/MapHelper.img/mark/Singapore##e ���ɼ� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ���ɼ����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 115) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmSG/BoatQuay_town");
     cm.sendOk("#fMap/MapHelper.img/mark/Singapore##e ��Ʈ���� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ��Ʈ���̷� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 116) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmUI/ShopBgm");
     cm.sendOk("#fMap/MapHelper.img/mark/TestServer##e ĳ�ü� ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� ĳ�ü����� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
    } else if (selection == 117) {
    if(cm.getMeso() > 50000 == true) { 
     cm.gainMeso(-50000);
     cm.changeMusic("BgmUI/Title");
     cm.sendOk("#fMap/MapHelper.img/mark/TestServer##e Ÿ��Ʋ ������ ����˴ϴ�.");
     cm.mapMessage("[BGM����] "+ musicplayer +"���� ��������� Ÿ��Ʋ�� �ٲټ̽��ϴ�.");
     cm.dispose();
    } else {
     cm.sendOk("�޼Ҹ� �������� ������ ��������� �ٲٽǼ� �����ϴ�.");
     cm.dispose();
    }
   }
  }
 }
}