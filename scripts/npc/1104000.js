
var quiz = new Array("���� ���� ���� ���� �Դϴ�.\r\n\r\n��������\r\n\r\n%�ҳʱ���%4",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ \r\n\r\n\r\n%������%3",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n���� ������\r\n\r\n\r\n%���� ��ġ��%5",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n������ ������\r\n\r\n\r\n%������ �Ͱ���%6",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n\r\n%�׽�Ʈ ��%5",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n����������\r\n\r\n\r\n%õ��������%5",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n��������\r\n\r\n\r\n%�����ð�%4",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n������\r\n\r\n\r\n%ī��Ÿ%3",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n%���� ����%5",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n������ ���� ����\r\n\r\n%�峭�� ���� ����%7",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n��������\r\n\r\n\r\n%������%4",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n����\r\n\r\n\r\n%ũ��%2",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n�������� �������� *��������\r\n\r\n\r\n%Ÿ�Ӹ��� ���˽���%8",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n������ ��������\r\n\r\n\r\n%��ɽ� ����ĸ��%7",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n������ ��������\r\n\r\n\r\n%������ ��������%7",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n\r\n%������ ����%5",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n\r\n%���̾� ����%5",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n���� ����\r\n\r\n\r\n%��ũ �ε�%4",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ������\r\n\r\n\r\n%�Ʒÿ� ¤����%6",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n�������� ������\r\n\r\n\r\n%������ ������%7",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n������\r\n\r\n\r\n%����Ʈ%3",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n������ ������\r\n\r\n\r\n%�׶��� �ֵ���%6",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n������\r\n\r\n\r\n%�κ�%3",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n%���ϵ� ī��%5",
"������ ���� ���� ���� �Դϴ�.\r\n(������� �����ؾ� �մϴ�.)\r\n\r\n�������� ������������\r\n\r\n\r\n%Ÿ�Ӹ��� ����ť���ʽ�%10",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n%���ϵ� ī��%5",
"���� ���� ���� ���� �Դϴ�.\r\n\r\n���� ������\r\n\r\n\r\n%���� ������%5",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n�������� ������\r\n\r\n\r\n%�Ʊ���� ������%7",
"���ǽ� ���� ���� ���� �Դϴ�.\r\n\r\n������ ����\r\n\r\n\r\n%������ ��Ű%5",
"������ ���� ���� ���� �Դϴ�.\r\n\r\n���� ������\r\n\r\n%�ҵ� �̾%5");

importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.tools.RandomStream);
importPackage(Packages.packet.creators);


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
        if (cm.getPlayer().getEventInstance() == null) {
            cm.warp(100000000);
            cm.dispose();
            return;
        }
        var eim = cm.getPlayer().getEventInstance();
        if (eim.getProperty("2P_Progress").equals("0")) {
            cm.sendNext("��������������! ��� ������� �Դ����� �𸣰�����, ������� �� �̻� �׾���߰ڴ�. �̰��� �Ѿ�� �ʹٸ�.. ���� ���� ������ ����� �Ѵ�. ������ ���ϸ�... ������ �� ������ �̰����� �����°ž�! ����������!!!");
        } else if (eim.getProperty("2P_Progress").equals("1")) {
            var num = Integer.parseInt(eim.getProperty("2P_QuizNum"));
            var quizThing = quiz[num].split("%");
            var question = quizThing[0];
            cm.sendGetText("������... ���� ������ ���ҰŴ�!\r\n\r\n"+question);
        } 
    } else if (status == 1) {
        var eim = cm.getPlayer().getEventInstance();
        if (eim.getProperty("2P_Progress").equals("0")) {
            eim.setProperty("2P_Progress", "1");
            var rand = Randomizer.nextInt(quiz.length);
            eim.setProperty("2P_QuizNum", rand+"");
            cm.getPlayer().getMap().startMapEffect("�����ý��� �ٽ� Ŭ���Ͽ� ��� �ذ��ϼ���!", 5120035);
            cm.dispose();
        } else if (eim.getProperty("2P_Progress").equals("1")) {
            var text = cm.getText();
            var numz = Integer.parseInt(eim.getProperty("2P_QuizNum"));
            var quizThingz = quiz[numz].split("%");
            var answer = quizThingz[1];
            if (text.equals(answer)) {
                cm.sendNext("����...! ������ ���ߴٴ�!!! �̷� �� ����!! ���ƾƾƾ�!!!");
                eim.setProperty("2P_Progress", "2");
            } else {
                cm.sendNext("������.. Ʋ�ȴ� ������.. �װ� ���� �����ϰŶ�� �����ߴ���? Ǫ��������...");
                status = -1;
            }
        } else {
            cm.dispose();
        }
    } else if (status == 2) {
        var eim = cm.getPlayer().getEventInstance();
        if (eim.getProperty("2P_Progress").equals("2")) {
            cm.getPlayer().send(MainPacketCreator.showEffect("monsterPark/clear"));
            cm.getPlayer().send(MainPacketCreator.playSound("Party1/Clear"));
            cm.getPlayer().send(MainPacketCreator.getGMText(7, "��� �� ���� ������ �̵��˴ϴ�."));
            cm.getPlayer().send(UIPacket.showInfo("��� �� ���� ������ �̵��˴ϴ�."));    
            eim.schedule("move2P", 5000);
            
            var progress = Integer.parseInt(eim.getProperty("allProgress"));
            progress += 10;
            eim.setProperty("allProgress", progress+"");
            var it = eim.getPlayers().iterator();
            while (it.hasNext()) {
                var chr = it.next();
                chr.send(UIPacket.AchievementRatio(progress));
            }
            
            cm.dispose();
        }
    }
}

