/*

��ϸ����丮

*/

importPackage(Packages.packet.creators);
importPackage(Packages.main.world);
importPackage(java.lang);

var status = -1;
var select = 0;
var trial = 0;
var mode_ = 0;

function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("�ð��� ���߿��⼼��.");
		cm.dispose();
	} else {
		if ((status == 0 || status == 1 || status == 2 || status == 4 || status == 6) && mode == 0) {
			cm.sendOk("�ð��� ���߿��⼼��.");
			cm.dispose();
			return;
		}
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	var intro = "����� ������ �İ���, ���� ���̶� �ҷ����� #b����#k�ΰ���?..\r\n\r\n#Cgray#�Ҿ���� ��ų�� ���� 110, 130, 150 ������ �����Ͻ� �� �ֽ��ϴ�.#k\r\n";
        //intro += "#L0##b���谡 (Adventurer)#l\r\n";
        //intro += "#L1#���� (Hero)#l\r\n";
        //intro += "#L2#�ñ׳ʽ� (Cygnus)\r\n";
	//intro += "#L3#���������� (Resistance)#l\r\n";
	//intro += "#L4#��� (Nova)#l\r\n";
	intro += "#L5##b�Ҿ���� ��ų�� ���ڽ��ϴ�.#k#l\r\n";
	//intro += "#L6#���� (Eunwol)#l\r\n";
	cm.sendSimple(intro);
     } else if (status == 1) {
        if (selection == 0) {
	var ADVR = "#r���谡#k�� ���� �ϼ̱���, ���谡�� �������� ������ ���带 �����ϴ� #b�̹���#k�� ������ �ʾ�����, ������ ���带 �����ϴ� ���� �������� ������ �޾� �׿� �ݰ��ϴ� �����ְ� �ǰ� �˴ϴ�.#b\r\n";
        ADVR += "#L0#����� ���� ���� ���谡, ����� �����ϰڽ��ϴ�.#l\r\n";
        ADVR += "#L1#���� ������ �����ϴ� ���谡, ������� �����ϰڽ��ϴ�.#l\r\n";
        ADVR += "#L2#Ȱ�� �������� �ٷ�� ���谡, �ü��� �����ϰڽ��ϴ�.#l\r\n";
        ADVR += "#L3#��ô ����� �ܰ��� �ٷ�� ���谡, �������� �����ϰڽ��ϴ�.#l\r\n";
        ADVR += "#L4#��Ŭ�̳� ���� �ٷ�� ���谡, �������� �����ϰڽ��ϴ�.#l\r\n";
        ADVR += "#L5#�̵����� ������, �����̵�� �����ϰڽ��ϴ�.#l\r\n";
        ADVR += "#L6#ĳ���� ����, ĳ���ͷ� �����ϰڽ��ϴ�.#l\r\n";
	cm.sendSimple(ADVR);
        } else if (selection == 1) {
	var Hero = "#r����#k�� ���� �ϼ̱���, �������� ���� �� ������ ���带 �����ߴ� ���� ������� �����ϰ�, ���ο� �����ߴ� ����� �������Դϴ�..#b\r\n";
        Hero += "#L7#������ �ٷ�� �޺� Ŀ�Ǵ�, ���� �ƶ����� �����ϰڽ��ϴ�.#l\r\n";
        Hero += "#L8#��ȯ������ ������, �巡�� ������ �������� �����ϰڽ��ϴ�.#l\r\n";
        Hero += "#L9#����� ������ ����, ������ �� �޸��������� �����ϰڽ��ϴ�.#l\r\n";
        Hero += "#L10#��ų�� ��ġ�� �ⱳ�� ��, ���� �������� �����ϰڽ��ϴ�.#l\r\n";
        Hero += "#L11#���� ����� �ٷ�� ��, ��̳ʽ��� �����ϰڽ��ϴ�.#l\r\n";
	cm.sendSimple(Hero);
        } else if (selection == 2) {
	var CY = "#r�ñ׳ʽ� ����#k�� ���� �ϼ̱���, �ñ׳ʽ� ������ ���� �ñ׳ʽ��� �ż��� ���� �����ϴ� ���ܿ�, ������ ������ �̷���� �ֽ��ϴ�.#b\r\n";
        CY += "#L12#���� ��� �ҿ︶���Ϳ� ������ �ֽ��ϴ�.#l\r\n";
        CY += "#L13#���� ��� �÷������ڵ忡 ������ �ֽ��ϴ�.#l\r\n";
        CY += "#L14#�ٶ��� ��� ����극��Ŀ�� ������ �ֽ��ϴ�.#l\r\n";
        CY += "#L15#����� ��� ����Ʈ ��Ŀ�� ������ �ֽ��ϴ�..#l\r\n";
        CY += "#L16#������ ��� ��Ʈ����Ŀ�� ������ �ֽ��ϴ�.#l\r\n";
        CY += "#L17#������ �����Ͽ� ������ �ֽ��ϴ�.#l\r\n";
	cm.sendSimple(CY);
        } else if (selection == 3) {
	var Regestangs = "#r����������#k�� ���� �ϼ̽��ϴ�. ���������簡 ���δ��� �� ��, ������ ����ī�� ����� ������ �Ἲ�Ͽ� ���� �����縦 ��Ȱ��Ű���� �մϴ�. ������ �� �ڿ��� ���������� �Ͽ����� �׻� ���ظ� �ϸ� ��ȭ�� �������ְ� �ֽ��ϴ�..#b\r\n";
        Regestangs += "#L18#���� Ư��ȭ ������, ��Ʋ�������� �����ϰڽ��ϴ�.#l\r\n";
        Regestangs += "#L19#��Ծ� ���̴�, ���ϵ����ͷ� �����ϰڽ��ϴ�.#l\r\n";
        Regestangs += "#L20#������������ ��������, ��ī������ �����ϰڽ��ϴ�.#l\r\n";
        Regestangs += "#L21#����� ������, ���󽽷��̾�� �����ϰڽ��ϴ�.#l\r\n";
        Regestangs += "#L24#������ ������ ���� �������� �����ϰڽ��ϴ�.#l\r\n";
        Regestangs += "#L25#�ָ��޸��� �������� �����ΰ� �������� �����ϰڽ��ϴ�.#l\r\n";
	cm.sendSimple(Regestangs);
        } else if (selection == 4) {
	var NOBA = "#r���#k�� ���� �ϼ̽��ϴ�. ��� ������ ����� ���γ��� New�� �����Դϴ�. ��ų ������ ������ ������ ����ְ� �÷��� �Ͻ� �� �ִ� �������Դϴ�. ���丮�� ���׿��̶� ���迡�� ã�ƿ� �̵�� ������������ �������� �ޱ׳ʽ��� ����ġ������ ���谡��� ���� ��� �˴ϴ�..#b\r\n";
        NOBA += "#L22#����� ����, ī������ �����ϰڽ��ϴ�.#l\r\n";
        NOBA += "#L23#������ ���̵�, �����������ͷ� �����ϰڽ��ϴ�.#l\r\n";
	cm.sendSimple(NOBA);
        } else if (selection == 5) {
	var Zero = "�� ������ �¾ѱ���. ���ϽŴٸ� ��ų�� �����ĵ帮�ڽ��ϴ�.\r\n";
        Zero += "#L100##b��ų ����";
	cm.sendSimple(Zero);
        } else if (selection == 6) {
	var Zero = "#r����#k�� �����ϼ˽��ϴ�.\r\n";
        Zero += "#L101##b������ �����ϰڽ��ϴ�.#k#l\r\n";
	cm.sendSimple(Zero);
	}
     } else if (status == 2) {
        if (selection == 0) {
	var Warreor = "#r����#k�� ���� �ϼ̱���, ����� #b�˰� ���� ���� ����#k�� ����ϸ� �������� ����, ���谡�� �����δ��Դϴ�. 2�� ������ ���� �˰� ������ ���� ������, �˰� �б⸦ ���� ������, â�� ������ ���� ���Ǿ������ ������ �����մϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Warreor += "#L0#����� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 100) {
        	Warreor += "#L1#�����ͷ� �����Ϸ��� �մϴ�.#l\r\n";
        	Warreor += "#L2#�������� �����Ϸ��� �մϴ�.#l\r\n";
        	Warreor += "#L3#���Ǿ������ �����Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 110) {
        	Warreor += "#L4#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 120) {
        	Warreor += "#L5#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 130) {
        	Warreor += "#L6#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 111) {
        	Warreor += "#L7#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 121) {
        	Warreor += "#L8#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 131) {
        	Warreor += "#L9#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Warreor); 
	 } else {
		Warreor += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Warreor);
			cm.dispose();
			return;
		    }
        } else if (selection == 1) {
	var Magic = "#r������#k�� ���� �ϼ̱���, ������� #b���� ����#k�� ����ϸ� ��Ȱ�� ������ ����, ���谡�� ����������Դϴ�. 2�� ������ ���� ��� ������ �� �Ӽ��� �����ϰ� �˴ϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Magic += "#L10#������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 200) {
        	Magic += "#L11#���ڵ�(��,��)�� �����Ϸ��� �մϴ�.#l\r\n";
        	Magic += "#L12#���ڵ�(��,��)�� �����Ϸ��� �մϴ�.#l\r\n";
        	Magic += "#L13#Ŭ�������� �����Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 210) {
        	Magic += "#L14#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 220) {
        	Magic += "#L15#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 230) {
        	Magic += "#L16#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 211) {
        	Magic += "#L17#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 221) {
        	Magic += "#L18#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Magic); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 231) {
        	Magic += "#L19#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Magic); 
	 } else {
		Magic += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Magic);
			cm.dispose();
			return;
		    }
        } else if (selection == 2) {
	var Archer = "#r�ü�#k�� ���� �ϼ̱���, �ü��� #bȰ�� ���� �� ��Ÿ� ��ô ����#k�� ����ϸ� ���� ���߷��� ���� ���� �Ÿ��� ����, ���谡�� ���Ÿ� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Archer += "#L20#�ü��� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 300) {
        	Archer += "#L21#����(Ȱ)�� �����Ϸ��� �մϴ�.#l\r\n";
        	Archer += "#L22#���(����)�� �����Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 310) {
        	Archer += "#L23#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 320) {
        	Archer += "#L24#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 311) {
        	Archer += "#L25#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Archer); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 321) {
        	Archer += "#L26#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Archer); 
	 } else {
		Archer += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Archer);
			cm.dispose();
			return;
		    }
        } else if (selection == 3) {
	var theif = "#r����#k�� ���� �ϼ̱���, ������ #b���� ���ݼӵ���#k�ڶ��ϸ� ���� ��ø���� �Ǵܷ��� ����, ��ҼӼ� ���谡�Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	theif += "#L27#�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 400) {
        	theif += "#L28#��ؽ�(ǥâ)���� �����Ϸ��� �մϴ�.#l\r\n";
        	theif += "#L29#����(�ܰ�)���� �����Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 410) {
         	theif += "#L30#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 420) {
         	theif += "#L31#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 411) {
         	theif += "#L32#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(theif); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 421) {
         	theif += "#L33#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(theif); 
	 } else {
		theif += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(theif);
			cm.dispose();
			return;
		    }
        } else if (selection == 4) {
	var Prirat = "#r����#k�� ���� �ϼ̱���, ������ #b������ �ѹ� ����#k�� �ڶ��ϸ� ���� ���ݷ°� ���� �̵��ӵ��� ������, �������� ���谡�Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
        	Prirat += "#L39#�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Prirat);
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 500) {
        	Prirat += "#L40#��������(��Ŭ)�� �����Ϸ��� �մϴ�.#l\r\n";
        	Prirat += "#L41#�ǽ�����(��)�� �����Ϸ��� �մϴ�.#l\r\n";
 	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 510) {
        	Prirat += "#L42#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 520) {
         	Prirat += "#L43#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 511) {
         	Prirat += "#L44#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Prirat); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 521) {
         	Prirat += "#L45#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Prirat); 
	 } else {
		Prirat += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Prirat);
			cm.dispose();
			return;
		    } 
        } else if (selection == 5) {
	var Dual = "�����̵�#k�� ���� �ϼ̱���, �����̵�� ���״�� #b�̵����� ������#k�̸� ��� �������� ����� ����/�̵� �ӵ��� �ڶ��մϴ�, �� ��ũ�ε��� ���� ��ũ�ε带 ������ ������ ���ڵ��� �ٷ� �����̵� �Դϴ�.#b\r\n";
              if (cm.getPlayer().getLevel() >= 10 && cm.getPlayer().getJob() == 0) {
        	Dual += "#L34#�����̵�(�̵���)���� �����Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 430) {
        	Dual += "#L35#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 55 && cm.getPlayer().getJob() == 431) {
        	Dual += "#L36#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 432) {
        	Dual += "#L37#3+�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Dual); 
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 433) {
        	Dual += "#L38#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Dual);
	 } else {
		Dual += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Dual);
			cm.dispose();
			return;
		    }
        } else if (selection == 6) {
	var Canon = "#b#n ĳ����#k�� ���� �ϼ̱���, ĳ���ʹ� #b���� ���� �ӵ�#k�� �ڶ��ϴ� ������ ����� ���谡�Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Canon += "#L46#ĳ����(�ڵ�ĳ��)���� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Canon); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 501) {
         	Canon += "#L47#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Canon); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 530) {
          	Canon += "#L48#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Canon);   
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 531) {
          	Canon += "#L49#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Canon);  
	 } else {
		Canon += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Canon);
			cm.dispose();
			return;
		    } 
        } else if (selection == 7) {
	var Aran = "#r�ƶ�#k�� ���� �ϼ̱���, �ƶ��� ������ ���带 ��ȣ�ϴ� ���� �� �Ѹ����ν�, #b�Ŵ��� ����#k�� ����ϴ� ���� �����Դϴ�. �ַ� �޺� �ý����� ����ϴ� Ŀ�ǵ� ������ �׼� Ÿ���� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Aran += "#L50#�ƶ����� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Aran); 
              } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2100) {
         	Aran += "#L51#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Aran); 
              } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2110) {
          	Aran += "#L52#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Aran);   
              } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2111) {
          	Aran += "#L53#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Aran);  
	 } else {
		Aran += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Aran);
			cm.dispose();
			return;
		    } 
        } else if (selection == 8) {
	var evan = "#r����#k�� ���� �ϼ̱���, ������ ������ ���带 ��ȣ�ϴ� ���� �� �Ѹ����ν�, #b�巡��#k�� �ϳ��Ǿ� ������ ����ϴ� ��ȯ�� �迭(������) �����Դϴ�. �ַ� �巡���� �̿��� ��ų�� �̷���� �մ� ������ �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	//evan += "#L54#�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(evan); 
              } else if (cm.getPlayer().getLevel() >= 20 && cm.getPlayer().getJob() == 2200) {
         	evan += "#L55#2�� ������ �ϰ� �ͽ��ϴ�..#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2210) {
         	evan += "#L56#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 40 && cm.getPlayer().getJob() == 2211) {
         	evan += "#L57#4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 50 && cm.getPlayer().getJob() == 2212) {
         	evan += "#L58#5�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2213) {
         	evan += "#L59#6�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan); 
 	      } else if (cm.getPlayer().getLevel() >= 80 && cm.getPlayer().getJob() == 2214) {
        	evan += "#L60#7�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2215) {
         	evan += "#L61#8�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan);
	      } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getJob() == 2216) {
         	evan += "#L62#9�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan); 
	      } else if (cm.getPlayer().getLevel() >= 160 && cm.getPlayer().getJob() == 2217) {
         	evan += "#L63#����� 10�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(evan);
	 } else {
		evan += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(evan);
			cm.dispose();
			return;
		    }   
        } else if (selection == 9) {
	var Mercedes = "#r�޸�������#k�� ���� �ϼ̱���, �޸��������� ������ ���带 ��ȣ�ϴ� ���� �� �Ѹ����ν�, #b������ ��#k���ν� �˷��� ������, �ΰ��� ������� ����Ͽ� ���� ������ �ֵ��ϴ� ������ �����Դϴ�. �ַ� ������ ó���� �� �ִ� ��ų�� �̷���� �մ� ������ �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Mercedes += "#L64#�޸��������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Mercedes);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2300) {
         	Mercedes += "#L65#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Mercedes);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2310) {
         	Mercedes += "#L66#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Mercedes);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2311) {
         	Mercedes += "#L67#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Mercedes);
	 } else {
		Mercedes += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Mercedes);
			cm.dispose();
			return;
		    }   
        } else if (selection == 10) {
	var Pantom = "#r����#k�� ���� �ϼ̱���, ������ ������ ���带 ��ȣ�ϴ� ���� �� �Ѹ����ν�, #b���� ����#k�̶�� ������ ��︱ ������ ��ġ��� ��ü�÷�, �ݻ�Ű��� ��ô �����ϴ�, �ַ� ���谡���� ��ų�� ���ľ��� ������ �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Pantom += "#L68#�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Pantom);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2400) {
         	Pantom += "#L69#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Pantom);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2410) {
         	Pantom += "#L70#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Pantom);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2411) {
         	Pantom += "#L71#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Pantom);
	 } else {
		Pantom += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Pantom);
			cm.dispose();
			return;
		    } 
        } else if (selection == 11) {
	var LumiNus = "#r��̳ʽ�#k�� ���� �ϼ̱���, ��̳ʽ��� ������ ���带 ��ȣ�ϴ� ���� �� �Ѹ����ν�, #b��Ұ� ���� ����#k�� ������� ������ �ֽ��ϴ�. ��Ұ� �� �� �Ӽ��� ��� ����ϸ�, ���� �������� �ڶ��ϴ� ������ �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	LumiNus += "#L72#��̳ʽ��� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(LumiNus);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2700) {
         	LumiNus += "#L73#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(LumiNus);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2710) {
         	LumiNus += "#L74#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(LumiNus);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2711) {
         	LumiNus += "#L75#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(LumiNus);
	 } else {
		LumiNus += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(LumiNus);
			cm.dispose();
			return;
		    } 
        } else if (selection == 12) {
	var A = "#r�ҿ︶����#k�� ���� �ϼ̱���, �ҿ︶���ʹ� �ñ׳ʽ� ���� �� ���� ����̸�, #b���� �Ӽ�#k�� ����ϴ� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	A += "#L76#�ҿ︶���ͷ� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(A);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1100) {
         	A += "#L77#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(A);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1110) {
         	A += "#L78#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(A);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1111) {
         	A += "#L79#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(A);
	 } else {
		A += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(A);
			cm.dispose();
			return;
		    } 
        } else if (selection == 13) {
	var b = "#r�÷������ڵ�#k�� ���� �ϼ̱���, �÷������ڵ�� �ñ׳ʽ� ���� �� ������ ����̸�, #b���� �Ӽ�#k�� ����ϴ� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	b += "#L80#�÷������ڵ�� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(b);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1200) {
         	b += "#L81#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(b);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1210) {
         	b += "#L82#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(b);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1211) {
         	b += "#L83#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(b);
	 } else {
		b += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(b);
			cm.dispose();
			return;
		    } 
        } else if (selection == 14) {
	var c = "#r����극��Ŀ#k�� ���� �ϼ̱���, ����극��Ŀ�� �ñ׳ʽ� ���� �� �ü� ����̸�, #b�ٶ��� �Ӽ�#k�� ����ϴ� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	c += "#L84#����극��Ŀ�� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(c);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1300) {
         	c += "#L85#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(c);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1310) {
         	c += "#L86#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(c);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1311) {
         	c += "#L87#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(c);
	 } else {
		c += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(c);
			cm.dispose();
			return;
		    } 
        } else if (selection == 15) {
	var d = "#r����Ʈ��Ŀ#k�� ���� �ϼ̱���, ����Ʈ��Ŀ�� �ñ׳ʽ� ���� �� ���� ����̸�, #b����� �Ӽ�#k�� ����ϴ� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	d += "#L88#����Ʈ��Ŀ�� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(d);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1400) {
         	d += "#L89#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(d);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1410) {
         	d += "#L90#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(d);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1411) {
         	d += "#L91#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(d);
	 } else {
		d += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(d);
			cm.dispose();
			return;
		    } 
        } else if (selection == 16) {
	var e = "#r��Ʈ����Ŀ#k�� ���� �ϼ̱���, ��Ʈ����Ŀ�� �ñ׳ʽ� ���� �� ���� ����̸�, #b������ �Ӽ�#k�� ����ϴ� �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 1000) {
         	e += "#L92#��Ʈ����Ŀ�� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(e);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 1500) {
         	e += "#L93#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(e);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 1510) {
         	e += "#L94#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(e);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 1511) {
         	e += "#L95#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(e);
	 } else {
		e += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(e);
			cm.dispose();
			return;
		    } 
        } else if (selection == 17) {
	var f = "������#k�� ���� �ϼ̱���, �������� �ñ׳ʽ� ������ �������̸�, #b���� �Ӽ�#k�� ����ϴ� ������ �Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 5000) {
         	f += "#L96#�����Ϸ� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(f);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 5100) {
         	f += "#L97#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(f);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 5110) {
         	f += "#L98#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(f);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 5111) {
         	f += "#L99#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(f);
	 } else {
		f += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(f);
			cm.dispose();
			return;
		    } 
        } else if (selection == 18) {
	var BM = "#r��Ʋ������#k�� ���� �ϼ̱���, ��Ʋ�������� ������������ �Ͽ��̸�, ������ ���ݸ��� ���ϴ� �������Դϴ� �ַ� ������ ���õ� ������ ��� �ϴ� �������Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	BM += "#L100#��Ʋ�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(BM);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3200) {
         	BM += "#L101#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(BM);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3210) {
         	BM += "#L102#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(BM);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3211) {
         	BM += "#L103#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(BM);
	 } else {
		BM += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(BM);
			cm.dispose();
			return;
		    }
        } else if (selection == 19) {
	var wh = "#r���ϵ�����#k�� ���� �ϼ̱���, ���ϵ����ʹ� ������������ �Ͽ��̸�, ��Ծ Ÿ�� ������ �����ϴ� �����Դϴ�, �ַ� ��Ծ�� ���õ� ��ų�� ��� �ϴ� �������Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	wh += "#L104#���ϵ����ͷ� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(wh);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3300) {
         	wh += "#L105#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(wh);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3310) {
         	wh += "#L106#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(wh);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3311) {
         	wh += "#L107#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(wh);
	 } else {
		wh += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(wh);
			cm.dispose();
			return;
		    }
        } else if (selection == 20) {
	var mc = "#r��ī��#k�� ���� �ϼ̱���, ��ī���� ������������ �Ͽ��̸�, ��Ż�Ƹ�(�κ�)�� Ÿ�� ���� ��ų�� �����ϴ� �������Դϴ�, �ַ� ��Ż�Ƹ�(�κ�)�� ���õ� ��ų�� ��� �ϴ� �������Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	mc += "#L108#��ī������ �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(mc);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3500) {
         	mc += "#L109#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(mc);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3510) {
         	mc += "#L110#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(mc);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3511) {
         	mc += "#L111#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(mc);
	 } else {
		mc += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(mc);
			cm.dispose();
			return;
		    }
        } else if (selection == 21) {
	var Demon = "#r���󽽷��̾�#k�� ���� �ϼ̱���, ���󽽷��̾�� �Ѷ� ���� �������� �������̿�����, ���� �����簡 ����� ����, ������������� ���� ������ �¼��� �˴ϴ�. ���󽽷��̾�� #b����#k�� ����ϴ� ����� ���������� �Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	Demon += "#L112#���󽽷��̾�� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3100) {
         	Demon += "#L113#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3110) {
         	Demon += "#L114#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3111) {
         	Demon += "#L115#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	 } else {
		Demon += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Demon);
			cm.dispose();
			return;
		    }
        } else if (selection == 24) {
	var Demon = "#r������#k�� ���� �ϼ̱���, �������� �Ѷ� ���� �������� �������̿�����, ���� �����簡 ����� ����, ������������� ���� ������ �¼��� �˴ϴ�. �������� #b����#k�� ����ϴ� ����� ���������� �Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 3002) {
         	Demon += "#L112#�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3101) {
         	Demon += "#L501#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3120) {
         	Demon += "#L502#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3121) {
         	Demon += "#L503#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	 } else {
		Demon += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Demon);
			cm.dispose();
			return;
		    }
        } else if (selection == 25) {
	var Demon = "#r����#k�� ���� �ϼ̱���, ������ �� ������ �ָ��޸����� ��ġ���� �ڽ��� ������ �������\r\n�������� �ָ��޸��� ��к����Դϴ�.\r\n���� ���ǵ�,ȭ������ ������ �����Դϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 3000) {
         	Demon += "#L112#�������� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 3600) {
         	Demon += "#L504#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 3610) {
         	Demon += "#L505#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 3611) {
         	Demon += "#L506#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(Demon);
	 } else {
		Demon += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(Demon);
			cm.dispose();
			return;
		    }   
        } else if (selection == 22) {
	var NOVA1 = "#rī����#k�� ���� �ϼ̱���, ī������ ��������� �����̸�, ���׿��� ��Ű�� ��ȣ�����Դϴ�. ������������ ������ �ޱ׳ʽ��� �������� ��� �ִ� ���� �������Դϴ�. #b�μհ�#k�� ����ϸ�, #r���� ������#k�� �� �����ϸ� �� ������ ���� ��ų�� �� �� �ֽ��ϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	NOVA1 += "#L116#ī���� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(NOVA1);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 6100) {
         	NOVA1 += "#L117#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(NOVA1);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 6110) {
         	NOVA1 += "#L118#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(NOVA1);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 6111) {
         	NOVA1 += "#L119#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(NOVA1);
	 } else {
		NOVA1 += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(NOVA1);
			cm.dispose();
			return;
		    } 
        } else if (selection == 23) {
	var NOVA2 = "#r������ ������#k�� ���� �ϼ̱���, ������ �����ʹ� ��������� �������������, ���׿��� ������ �ȿ� ������ ������, �� ������ ��ȥ�� �ϳ��� �Ǿ� ������ �ϰԵ˴ϴ�. ������ �����������ʹ� ������ ���� ������ �˴ϴ�.#b\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	NOVA2 += "#L120#������ �����ͷ� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(NOVA2);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 6500) {
         	NOVA2 += "#L121#2�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(NOVA2);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 6510) {
         	NOVA2 += "#L122#3�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(NOVA2);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 6511) {
         	NOVA2 += "#L123#����� 4�� ������ �ϰ� �ͽ��ϴ�.#l\r\n";
	cm.sendSimple(NOVA2);
	 } else {
		NOVA2 += "\r\n����� �̹� ������ ��ġ�̰ų�, �����Ҽ� �ִ� ���°� �ƴմϴ�.";
			cm.sendNext(NOVA2);
			cm.dispose();
			return;
		    }
        } else if (selection == 100) {
	var ZERO1 = "�Ҿ���� ��� ��ų�� �ѹ��� ������ �帱 �� �����. ������ ������,������ ������ �ڽ��� �ٶ󺸰� ���� ����,�����ؿ��ñ� �ٶ��ϴ�.\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	//ZERO1 += "#L120#������ �����ͷ� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(ZERO1);
	      } else if (cm.getPlayer().getLevel() >= 110 && cm.getPlayer().getJob() == 10100) {
         	ZERO1 += "#L10000#[2��] #b��ų ����#k#k#l\r\n";
	cm.sendSimple(ZERO1);
	      } else if (cm.getPlayer().getLevel() >= 130 && cm.getPlayer().getJob() == 10110) {
         	ZERO1 += "#L10001#[3��] #b��ų ����#k#l\r\n";
	cm.sendSimple(ZERO1);
	      } else if (cm.getPlayer().getLevel() >= 150 && cm.getPlayer().getJob() == 10111) {
         	ZERO1 += "#L10002#[4��] #b��ų ����#k#l\r\n";
	cm.sendSimple(ZERO1);
	 } else {
		ZERO1 += "\r\n#e< �Ҿ���� ��ų�� ���� �� �� �ִ� ������ �ƴմϴ� >#n";
			cm.sendNext(ZERO1);
			cm.dispose();
			return;
		    }
        } else if (selection == 101) {
	var Eunwol1 = "�ٽ��ѹ� ���ٽ��ϴ�. #b����#k�� �����ϼ˴µ� ���� Ȯ���ϽŰ̴ϱ�?\r\n";
              if (cm.getPlayer().getJob() == 0) {
         	Eunwol1 += "#L120#������ �����ͷ� �Թ��Ϸ��� �մϴ�.#l\r\n";
	cm.sendSimple(Eunwol1);
	      } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob() == 2500) {
         	Eunwol1 += "#L10003##b2�� ������ �ϰ� �ͽ��ϴ�.#k#l\r\n";
	cm.sendSimple(Eunwol1);
	      } else if (cm.getPlayer().getLevel() >= 60 && cm.getPlayer().getJob() == 2510) {
         	Eunwol1 += "#L10004##b3�� ������ �ϰ� �ͽ��ϴ�.#k#l\r\n";
	cm.sendSimple(Eunwol1);
	      } else if (cm.getPlayer().getLevel() >= 100 && cm.getPlayer().getJob() == 2511) {
         	Eunwol1 += "#L10005##b����� 4�� ������ �ϰ� �ͽ��ϴ�.#k#l\r\n";
	cm.sendSimple(Eunwol1);
	 } else {
		Eunwol1 += "\r\n������ �Ұ����մϴ�.";
			cm.sendNext(Eunwol1);
			cm.dispose();
			return;
		    }
         }
     } else if (status == 3) {
        if (selection == 0) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(100);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    cm.playerMessage(5, "<�ʺ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 1) {
            cm.warp(101072000,0);cm.changeJob(110);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 2) {
            cm.warp(101072000,0);cm.changeJob(120);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 3) {
            cm.warp(101072000,0);cm.changeJob(130);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 4) {
            cm.warp(101072000,0);cm.changeJob(111);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 5) {
            cm.warp(101072000,0);cm.changeJob(121);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 6) {
            cm.warp(101072000,0);cm.changeJob(131);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 7) {
  	    cm.teachSkill(1121000,0,30); // ������ ��� -- 4����ų ����
  	    cm.teachSkill(1121001,0,30); // ���� ���׳�
  	    cm.teachSkill(1121002,0,30); // ���Ľ�
  	    cm.teachSkill(1120003,0,30); // ���꽺�� �޺�
  	    cm.teachSkill(1121006,0,30); // ����
 	    cm.teachSkill(1121008,0,30); // ����¡ ��ο�
 	    cm.teachSkill(1121010,0,30); // �η�����
  	    cm.teachSkill(1120012,0,10); // �Ĺ� �����͸�
  	    cm.teachSkill(1120013,0,30); // ���꽺�� ���̳� ���� -- 4����
            cm.warp(101072000,0);cm.changeJob(112);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 8){
  	  cm.teachSkill(1221000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(1220005,0,30); // ��ų����
	  cm.teachSkill(1220006,0,30); // ����� ���Ǹ�
	  cm.teachSkill(1221010,0,30); // ���꽺�� ����
	  cm.teachSkill(1221009,0,30); // ����Ʈ
	  cm.teachSkill(1220013,0,10); // ���� �Ƹ�
	  cm.teachSkill(1221001,0,30); // ���� ���׳�
	  cm.teachSkill(1221002,0,30); // ���Ľ�
	  cm.teachSkill(1221007,0,30); // ����
	  cm.teachSkill(1221004,0,20); // ����� ����
	  cm.teachSkill(1221011,0,30); // ����
            cm.warp(101072000,0);cm.changeJob(122);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 9) {
  	 cm.teachSkill(1321000,0,30); // ������ ��� -- 4����ų ����
 	 cm.teachSkill(1320006,0,30); // ��ũ����
 	 cm.teachSkill(1321001,0,30); // ���� ���׳�
 	 cm.teachSkill(1321002,0,30); // ���Ľ�
	 cm.teachSkill(1321003,0,30); // ����
	 cm.teachSkill(1321007,0,10); // ��Ȧ��
	 cm.teachSkill(1320008,0,20); // ��Ȧ���� ����
 	 cm.teachSkill(1320011,0,10); // ��Ȧ���� ������
 	 cm.teachSkill(1320009,0,20); // ��Ȧ���� ����
 	 cm.teachSkill(1321012,0,30); // ��ũ ������
            cm.warp(101072000,0);cm.changeJob(132);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 10) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(200);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    cm.playerMessage(5, "<�ʺ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 11) {
            cm.warp(101072000,0);cm.changeJob(210);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 12) {
            cm.warp(101072000,0);cm.changeJob(220);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 13) {
            cm.warp(101072000,0);cm.changeJob(230);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 14) {
            cm.warp(101072000,0);cm.changeJob(211);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 15) {
            cm.warp(101072000,0);cm.changeJob(221);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 16) {
            cm.warp(101072000,0);cm.changeJob(231);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 17) {
	  cm.teachSkill(2121000,0,30); // ������ ��� -- 4����ų ����
 	  cm.teachSkill(2121001,0,30); // ���
 	  cm.teachSkill(2121003,0,30); // �̽�Ʈ �̷���
 	  cm.teachSkill(2121004,0,30); // ���Ǵ�Ƽ
 	  cm.teachSkill(2121005,0,30); // ������Ʈ
 	  cm.teachSkill(2121006,0,30); // �䷲������
 	  cm.teachSkill(2121007,0,30); // ���׿�
	  cm.teachSkill(2121009,0,10); // ������ ����
	  cm.teachSkill(2120010,0,30); // ������ ����
            cm.warp(101072000,0);cm.changeJob(212);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 18){
	  cm.teachSkill(2221000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(2221001,0,30); // ���
	  cm.teachSkill(2221003,0,30); // �۷��̼� ü��
	  cm.teachSkill(2221004,0,30); // ���Ǵ�Ƽ
	  cm.teachSkill(2221005,0,30); // �����׽�
	  cm.teachSkill(2221006,0,30); // ü�� ����Ʈ��
	  cm.teachSkill(2221007,0,30); // ���ڵ�
	  cm.teachSkill(2221009,0,10); // ������ ����
	  cm.teachSkill(2220010,0,30); // ������ ����
            cm.warp(101072000,0);cm.changeJob(222);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 19) {
	  cm.teachSkill(2321000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(2321001,0,30); // ���
	  cm.teachSkill(2321002,0,30); // ���� ���÷���
	  cm.teachSkill(2321004,0,30); // ���Ǵ�Ƽ
	  cm.teachSkill(2321003,0,30); // ���Ϲ�Ʈ
	  cm.teachSkill(2321005,0,30); // ���꽺�� ����
	  cm.teachSkill(2321006,0,5); // ��������
	  cm.teachSkill(2321007,0,30); // ��������
	  cm.teachSkill(2321008,0,30); // ���׽ý�
	  cm.teachSkill(2321010,0,10); // ������ ����
	  cm.teachSkill(2320011,0,30); // ������ ����
            cm.warp(101072000,0);cm.changeJob(232);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();	
        } else if (selection == 20) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(300);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    cm.playerMessage(5, "<�ʺ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 21) {
            cm.warp(101072000,0);cm.changeJob(310);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 22) {
            cm.warp(101072000,0);cm.changeJob(320);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 23) {
            cm.warp(101072000,0);cm.changeJob(311);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 24) {
            cm.warp(101072000,0);cm.changeJob(321);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 25) {
	  cm.teachSkill(3121000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(3120005,0,30); // ���� ������Ʈ 
	  cm.teachSkill(3121002,0,30); // ���� ������
	  cm.teachSkill(3121004,0,30); // ��ǳ�� ��
	  cm.teachSkill(3121007,0,30); // �Ϸ��� ����
	  cm.teachSkill(3120006,0,30); // ���Ǹ� ��ũ : �Ǵн�
	  cm.teachSkill(3120008,0,30); // ���꽺�� ���̳� ����
	  cm.teachSkill(3120010,0,10); // ��Ƽ�� �÷��Ӽ�
	  cm.teachSkill(3120011,0,10); // ��ũ�ǽ�
	  cm.teachSkill(3120012,0,15); // ����Ʈ ����
            cm.warp(101072000,0);cm.changeJob(312);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 26){
	  cm.teachSkill(3221000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(3220004,0,30); // ũ�ν����� ������Ʈ
	  cm.teachSkill(3220010,0,10); // ��Ƽ�� ��Ʈ������
	  cm.teachSkill(3221002,0,30); // ���� ������
	  cm.teachSkill(3221001,0,30); // �Ǿ��
	  cm.teachSkill(3221006,0,30); // �Ϸ��� ����
	  cm.teachSkill(3220005,0,30); // ���Ǹ� ��ũ : ������
	  cm.teachSkill(3221007,0,30); // ��������
	  cm.teachSkill(3220009,0,10); // ��ũ�ǽ�
	  cm.teachSkill(3220012,0,15); // ����Ʈ ����
            cm.warp(101072000,0);cm.changeJob(322);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 27) {
            cm.resetStats(4,4,4,25);
            cm.warp(101072000,0);cm.changeJob(400);
                cm.getPlayer().setKeyValue("AutoJob", "430");
		cm.teachSkill(190,1,1);
	    cm.gainItem(1142107, 1);
	    cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    cm.playerMessage(5, "<�ʺ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 28) {
            cm.warp(101072000,0);cm.changeJob(410);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 29) {
            cm.warp(101072000,0);cm.changeJob(420);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 30) {
            cm.warp(101072000,0);cm.changeJob(411);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 31) {
            cm.warp(101072000,0);cm.changeJob(421);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 32) {
	  cm.teachSkill(4121000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(4120002,0,30); // ����ũ
	  cm.teachSkill(4121003,0,20); // ��ٿ�
    	  cm.teachSkill(4120011,0,10); // ����Ż ����
	  cm.teachSkill(4120012,0,30); // �ں��� ������Ʈ
	  cm.teachSkill(4121013,0,30); // ���巯�� ���ο�
	  cm.teachSkill(4121014,0,30); // ��ũ ������Ƽ
	  cm.teachSkill(4121015,0,30); // ���� �����
	  cm.teachSkill(4121016,0,30); // ��緹�̵�
            cm.warp(101072000,0);cm.changeJob(412);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 33){
	  cm.teachSkill(4221000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(4221001,0,30); // �ϻ�
	  cm.teachSkill(4220002,0,30); // ����ũ
	  cm.teachSkill(4221006,0,30); // ����ź
	  cm.teachSkill(4221007,0,30); // �θ޶� ����
	  cm.teachSkill(4221010,0,30); // ��緹�̵�
	  cm.teachSkill(4220011,0,10); // ����Ż ����
	  cm.teachSkill(4220012,0,30); // ��� ������Ʈ
	  cm.teachSkill(4221013,0,20); // ������ �ν���Ʈ
            cm.warp(101072000,0);cm.changeJob(422);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 34) {
            cm.warp(101072000,0);cm.changeJob(430);
	  cm.teachSkill(4341002,10,10); 
	  cm.teachSkill(4341009,30,30);
	  cm.teachSkill(4341008,5,5); 
	    cm.gainItem(5051001, 1);
	    cm.gainItem(1012191, 1);
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.playerMessage(5, "�����̵� ������ �Ϸ��ϰ� <SP �ʱ�ȭ �ֹ���> �� ȹ�� �ϼ̽��ϴ�.")
	    cm.fakeRelog();
            cm.updateChar();
	    cm.dispose();
        } else if (selection == 35) {
            cm.warp(101072000,0);cm.changeJob(431);
  	    cm.teachSkill(4311003,0,20); // ������ ����
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();        
	} else if (selection == 36) {
            cm.warp(101072000,0);cm.changeJob(432);
  	    cm.teachSkill(4321006,0,20); // �ö��� ����� -- 4����ų ��
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 37) {
            cm.warp(101072000,0);cm.changeJob(433);
	    cm.gainItem(1142109, 1);
  	    cm.teachSkill(4331000,0,20); // ���� ���� -- 5����ų ����
	    cm.teachSkill(4331002,0,20); // �̷� �̹�¡
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 38){
	  cm.teachSkill(4341000,0,30); // ������ ��� -- 6����ų ����
	  cm.teachSkill(4341009,0,30); // ���� ��ο�
	  cm.teachSkill(4341004,0,30); // ���̵� ǻ��
	  cm.teachSkill(4341006,0,30); // ���� ����Ʈ
	  cm.teachSkill(4341007,0,30); // ���� ����Ʈ
	  cm.teachSkill(4340010,0,10); // �����Ͻ�
	  cm.teachSkill(4341011,0,30); // ��緹�̵�
	  cm.teachSkill(4340012,0,10); // ����Ż ����
	  cm.teachSkill(4340013,0,30); // �̵��� ������Ʈ
	  cm.teachSkill(4341002,0,30); // ���̳� ��
            cm.warp(101072000,0);cm.changeJob(434);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 39) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(500);
	    cm.gainItem(1142107, 1);
		cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    cm.playerMessage(5, "<�ʺ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 40) {
            cm.warp(101072000,0);cm.changeJob(510);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 41) {
            cm.warp(101072000,0);cm.changeJob(520);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 42) {
            cm.warp(101072000,0);cm.changeJob(511);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 43) {
            cm.warp(101072000,0);cm.changeJob(521);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 44) {
	  cm.teachSkill(5121000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(5121001,0,30); // �巡�� ��Ʈ����ũ
	  cm.teachSkill(5121007,0,30); // �ǽ�Ʈ �η�����
	  cm.teachSkill(5121009,0,20); // ���� �ν���
	  cm.teachSkill(5121010,0,5); // Ÿ�� ����
	  cm.teachSkill(5120011,0,10); // ī���� ����
	  cm.teachSkill(5120012,0,5); // ���� ��Ű ���̽�
	  cm.teachSkill(5121013,0,30); // ���� ��ƿ����
	  cm.teachSkill(5120014,0,20); // ���� ũ����
	  cm.teachSkill(5121015,0,30); // ����������
	  cm.teachSkill(5121016,0,30); // ������ ���Ʈ
            cm.warp(101072000,0);cm.changeJob(512);
	    cm.gainItem(1142110, 1);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
        } else if (selection == 45){
	  cm.teachSkill(5221000,0,30); // ������ ��� -- 4����ų ����
	  cm.teachSkill(5221004,0,30); // ���ǵ� ���̾�
	  cm.teachSkill(5220012,0,10); // ī���� ����
	  cm.teachSkill(5221013,0,30); // ���� ��ƿ����
	  cm.teachSkill(5220014,0,5); // ���� ��Ű ���̽�
	  cm.teachSkill(5221015,0,20); // ��Ƽ���� ���̹�
	  cm.teachSkill(5221016,0,30); // ��� ��
	  cm.teachSkill(5221017,0,30); // �۽Ƿ��̵�
	  cm.teachSkill(5221018,0,20); // ���̷� ��Ÿ��
	  cm.teachSkill(5220019,0,10); // ũ�� Ŀ�Ǵ���
	  cm.teachSkill(5220020,0,30); // ĸƾ ��״�Ƽ
            cm.warp(101072000,0);cm.changeJob(522);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 46) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(501);
                cm.getPlayer().setKeyValue("AutoJob", "530");
	    cm.gainItem(1142107, 1);
	    cm.teachSkill(109,1,1); // ������ ����
	    cm.teachSkill(110,1,1); // ���̷� ����
	    cm.teachSkill(112,1,2); // ������ ����
	    cm.teachSkill(190,1,1);
	    cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    cm.playerMessage(5, "<�ʺ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 47) {
	    cm.teachSkill(112,2,2); // ������ ����
            cm.warp(101072000,0);cm.changeJob(530);
	    cm.gainItem(1142108, 1);
	    cm.playerMessage(5, "<�ִϾ� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 48) {
            cm.warp(101072000,0);cm.changeJob(531);
	    cm.gainItem(1142109, 1);
	    cm.playerMessage(5, "<���׶� ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 49){
	  cm.teachSkill(5321000,0,30); // ĳ�� ����ī -- 4����ų ����
	  cm.teachSkill(5321012,0,30); // ĳ�� ������
	  cm.teachSkill(5321001,0,30); // ���� ��ƿ����
 	  cm.teachSkill(5321010,0,30); // ���̷� ���Ǹ�
 	  cm.teachSkill(5321003,0,15); // ���׳�ƽ ��Ŀ
 	  cm.teachSkill(5321004,0,15); // ����Ʈ ��Ű Ʈ����
	  cm.teachSkill(5321005,0,30); // ������ ���
	  cm.teachSkill(5320009,0,30); // �������� ĳ��
	  cm.teachSkill(5320008,0,30); // ������ ��Ű ����
	  cm.teachSkill(5320007,0,5); // ���� ��Ű ���̽�
            cm.warp(101072000,0);cm.changeJob(532);
	    cm.gainItem(1142110, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������ ���谡> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 50) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(2100);
            cm.getPlayer().setKeyValue("AutoJob", "2110");
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20000);
                cm.getPlayer().setHair(30027);
                cm.getPlayer().setSkinColor(11);
                cm.resetEquip();
                cm.addEquip(-5, 1042167, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-6, 1062115, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072383, 0, 2, 0, 7, 0, 0); //�Ź�
	    	cm.gainItem(1142129, 1);
		cm.teachSkill(20000190,1,1); //������ ���� 
		cm.teachSkill(20000194,1,1); //��ã�� ���
		cm.teachSkill(21120005,30,30); //���̳� ��ο� (�ƶ�4��)
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<��� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
                cm.getPlayer().setFace(21000);
                cm.getPlayer().setHair(31007);
                cm.getPlayer().setSkinColor(11);
                cm.resetEquip();
                cm.addEquip(-5, 1042167, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-6, 1062115, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072383, 0, 2, 0, 7, 0, 0); //�Ź�
	    	cm.gainItem(1142129, 1);
		cm.teachSkill(20000190,1,1); //������ ���� 
		cm.teachSkill(20000194,1,1); //��ã�� ���
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<��� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		}
        } else if (selection == 51) {
            cm.warp(101072000,0);cm.changeJob(2110);
	    cm.gainItem(1142130, 1);
	    cm.playerMessage(5, "<������ �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 52) {
            cm.warp(101072000,0);cm.changeJob(2111);
	    cm.gainItem(1142131, 1);
	    cm.playerMessage(5, "<�÷ü��� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 53){
	  cm.teachSkill(21121000,0,30); // ������ ���
	  cm.teachSkill(21120002,0,30); // ���� ����
	  cm.teachSkill(21120001,0,20); // ���� �����͸�
	  cm.teachSkill(21120005,30,30); // ���̳� ��ο�
	  cm.teachSkill(21121003,0,20); // ������ ���ĵ�
	  cm.teachSkill(21120004,0,20); // ���� ���潺
	  cm.teachSkill(21120006,0,30); // �޺� ���佺Ʈ
	  cm.teachSkill(21120007,0,30); // �޺� �踮��
	  cm.teachSkill(21120011,0,10); // ������Ʈ ����
	  cm.teachSkill(21120012,0,30); // ���꽺�� ���̳� ����
            cm.warp(101072000,0);cm.changeJob(2112);
	    cm.gainItem(1142132, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<������� �ƶ�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 54) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(2200);
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20000);
                cm.getPlayer().setHair(30027);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1042180, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-6, 1060138, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-11, 1302132, 17, 0, 0, 7, 0, 0); //����
		cm.teachSkill(20010190,1,1); //������ ���� 
		cm.teachSkill(20010194,1,1); //��µ� ����
	   	cm.gainItem(1142152, 1);
	   	cm.playerMessage(5, "<���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
                cm.getPlayer().setFace(21000);
                cm.getPlayer().setHair(31007);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1042180, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-6, 1061160, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-11, 1302132, 17, 0, 0, 7, 0, 0); //����
		cm.teachSkill(20010190,1,1); //������ ���� 
		cm.teachSkill(20010194,1,1); //��µ� ����
	   	cm.gainItem(1142152, 1);
	   	cm.playerMessage(5, "<���� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		}
        } else if (selection == 55) {
            cm.warp(101072000,0);cm.changeJob(2210);
                cm.getPlayer().setKeyValue("AutoJob", "2210");
	    cm.gainItem(1142153, 1);
	    cm.playerMessage(5, "<�丮�� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 56) {
            cm.warp(101072000,0);cm.changeJob(2211);
	    cm.gainItem(1142154, 1);
	    cm.playerMessage(5, "<Ŀ�׽�Ƽ ���ù�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 57) {
            cm.warp(101072000,0);cm.changeJob(2212);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 58) {
            cm.warp(101072000,0);cm.changeJob(2213);
	    cm.gainItem(1142155, 1);
	    cm.playerMessage(5, "<��д�ü �ӽø��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 59) {
            cm.warp(101072000,0);cm.changeJob(2214);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 60) {
            cm.warp(101072000,0);cm.changeJob(2215);
	    cm.gainItem(1142156, 1);
	    cm.playerMessage(5, "<�巡�� ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 61) {
            cm.warp(101072000,0);cm.changeJob(2216);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 62) {
            cm.warp(101072000,0);cm.changeJob(2217);
	    cm.getPlayer().gainAp(5);
    	  cm.teachSkill(22170001,0,30); // ���� �����͸�
  	  cm.teachSkill(22171000,0,30); // ������ ���
	  cm.teachSkill(22171002,0,30); // �Ϸ���
	  cm.teachSkill(22171003,0,30); // �÷��� ��
	    cm.gainItem(1142157, 1);
	    cm.playerMessage(5, "<�巡�� ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 63){
            cm.warp(101072000,0);cm.changeJob(2218);
	    cm.getPlayer().gainAp(5);
	  cm.teachSkill(22181000,0,25); // ���н��� �ູ
	  cm.teachSkill(22181001,0,30); // ������
	  cm.teachSkill(22181002,0,30); // ��ũ���� 
	  cm.teachSkill(22181003,0,20); // �ҿｺ��  
	  cm.teachSkill(22181004,0,20); // ���н��� ����
	    cm.getPlayer().gainAp(5);
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 64) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(2300);
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
               cm.resetEquip();
                cm.getPlayer().setFace(20157);
                cm.getPlayer().setHair(33454);
	  	cm.teachSkill(20020109,1,1); 
	  	cm.teachSkill(20021110,1,1);
	  	cm.teachSkill(20020111,1,1);
	  	cm.teachSkill(20020112,1,1); 
                cm.addEquip(-5, 1050192, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072519, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1522000, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0); //ȭ��
	  	cm.teachSkill(20020190,1,1); // ������ ����
	    	cm.gainItem(1142336, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<�����̿��� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
               cm.resetEquip();
                cm.getPlayer().setFace(21155);
                cm.getPlayer().setHair(34424);
                cm.addEquip(-5, 1051237, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072519, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1522000, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1352000, 0, 0, 0, 0, 0, 0); //ȭ��
	  	cm.teachSkill(20020190,1,1); // ������ ����
	    	cm.gainItem(1142336, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<�����̿��� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		}
        } else if (selection == 65) {
            cm.warp(101072000,0);cm.changeJob(2310);
                cm.getPlayer().setKeyValue("AutoJob", "2310");
	    cm.gainItem(1142337, 1);
            cm.removeEquip(1352000);
	    cm.addEquip(-10, 1352001, 0, 0, 0, 0, 0, 0); //ȭ��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<���췼�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 66) {
            cm.warp(101072000,0);cm.changeJob(2311);
	    cm.gainItem(1142338, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352001);
	    cm.addEquip(-10, 1352002, 0, 0, 0, 0, 0, 0); //ȭ��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<����� ���� ǥ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 67){
  	  cm.teachSkill(23121000,0,30); // �̽�Ÿ���� �� -- 4����ų ����
  	  cm.teachSkill(23121002,0,20); // �����帮 ���Ǿ�
  	  cm.teachSkill(23121003,0,30); // ����Ʈ�� ����
 	  cm.teachSkill(23120011,0,20); // �Ѹ� ����Ʈ
	  cm.teachSkill(23121004,0,30); // �ؽþ�Ʈ ���Ǹ�
	  cm.teachSkill(23120009,0,30); // ��󺸿�� ������Ʈ
	  cm.teachSkill(23120010,0,20); // ���潺 �극��ũ
	  cm.teachSkill(23120012,0,30); // ���꽺�� ���̳� ����
	  cm.teachSkill(23121005,0,30); // ������ ���
            cm.warp(101072000,0);cm.changeJob(2312);
	    cm.gainItem(1142339, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352002);
	    cm.addEquip(-10, 1352003, 0, 0, 0, 0, 0, 0); //ȭ��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<������ ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();	
        } else if (selection == 68) {
            cm.resetStats(4,4,4,25);
            cm.warp(101072000,0);cm.changeJob(2400);
	    cm.gainSp(2);
            if (cm.getPlayer().getGender() == 0) {
                cm.getPlayer().setFace(20659);
                cm.getPlayer().setHair(33743);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1050222, 0, 5, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1070023, 0, 2, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //����
                cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0); //ī��
	  	cm.teachSkill(20030190,1,1); // ������ ����
	    	cm.gainItem(1142375, 1);
	  	cm.teachSkill(20030204,1,1); // ���鸮 �ν���Ʈ -- 0�� ��ų
	  	cm.teachSkill(20031205,1,1); // ���� ������
	  	cm.teachSkill(20030206,1,1); // ���� �����ͷ�Ƽ 
	  	cm.teachSkill(20031207,1,1); // ��ƿ ��ų 
	  	cm.teachSkill(20031208,1,1); // ��ų �Ŵ�����Ʈ
	  	cm.teachSkill(20031209,1,1); // ������Ʈ -- 0����ų ��
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<�����̿��� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
                cm.getPlayer().setFace(21657);
                cm.getPlayer().setHair(34743);
                cm.getPlayer().setSkinColor(0);
                cm.resetEquip();
                cm.addEquip(-5, 1051272, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1071035, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-9, 1102347, 0, 5, 5, 7, 0, 0); //����
                cm.addEquip(-10, 1352100, 0, 0, 0, 0, 0, 0); //ī��
	  	cm.teachSkill(20030190,1,1); // ������ ����
	    	cm.gainItem(1142375, 1);
	  	cm.teachSkill(20030204,1,1); // ���鸮 �ν���Ʈ -- 0�� ��ų
	  	cm.teachSkill(20031205,1,1); // ���� ������
	  	cm.teachSkill(20030206,1,1); // ���� �����ͷ�Ƽ 
	  	cm.teachSkill(20031207,1,1); // ��ƿ ��ų 
	  	cm.teachSkill(20031208,1,1); // ��ų �Ŵ�����Ʈ
 	  	cm.teachSkill(20031209,1,1); // ������Ʈ -- 0����ų ��
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<�����̿��� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		}
        } else if (selection == 69) {
            cm.warp(101072000,0);cm.changeJob(2410);
                cm.getPlayer().setKeyValue("AutoJob", "2410");
	    cm.gainItem(1142376, 1);
            cm.removeEquip(1352100);
	    cm.addEquip(-10, 1352101, 0, 0, 0, 0, 0, 0); //ī��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<����͸�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 70) {
            cm.warp(101072000,0);cm.changeJob(2411);
	    cm.gainItem(1142377, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352101);
	    cm.addEquip(-10, 1352102, 0, 0, 0, 0, 0, 0); //ī��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<���� ���̺��� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 71){
	  cm.teachSkill(24121000,0,30); // ��Ƽ�� ����̺� -- 4����ų ����
	  cm.teachSkill(24121001,0,30); // �ŷ�Ʈ ���� ���ҽ��� ��
	  cm.teachSkill(24120002,0,20); // ���͸� ī��Ʈ
	  cm.teachSkill(24121003,0,20); // Ʈ���϶���Ʈ
	  cm.teachSkill(24121004,0,30); // ������ ���� �Ƹ���
	  cm.teachSkill(24121005,0,30); // ���佺Ʈ ���� ī��
	  cm.teachSkill(24120006,0,30); // ���� ������Ʈ
	  cm.teachSkill(24121007,0,20); // �ҿ� ��ƿ
	  cm.teachSkill(24121008,0,30); // ������ ���
	  cm.teachSkill(20031209,0,0); // ������Ʈ ����
	  cm.teachSkill(20031210,1,1); // ������Ʈ ��ȭ
            cm.warp(101072000,0);cm.changeJob(2412);
	    cm.gainItem(1142378, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1352102);
	    cm.addEquip(-10, 1352103, 0, 0, 0, 0, 0, 0); //ī��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<�Ƹ��Ƹ� ����ϴ� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 72) {
	    	cm.dispose();
		cm.openNpc(1032216);

      	} else if (selection == 73) {
            cm.warp(101072000,0);cm.changeJob(2710);
                cm.getPlayer().setKeyValue("AutoJob", "2710");
	    cm.gainItem(1142480, 1);
            cm.removeEquip(1352400);
	    cm.addEquip(-10, 1352401, 0, 0, 0, 0, 0, 0); //����
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<����� �غ��� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 74) {
            cm.warp(101072000,0);cm.changeJob(2711);
	    cm.gainItem(1142481, 1);
            cm.removeEquip(1352401);
	    cm.addEquip(-10, 1352402, 0, 0, 0, 0, 0, 0); //����
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<����� ����� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 75) {
            cm.warp(101072000,0);cm.changeJob(2712);
  		cm.teachSkill(27121100,0,30); // ����Ʈ ���÷��� -- 4�� ��ų ����
  		cm.teachSkill(27121201,0,30); // ��� ��Ÿ��
  		cm.teachSkill(27121202,0,30); // ����Į����
  		cm.teachSkill(27121303,0,30); // �ۼַ�Ʈ ų 
  		cm.teachSkill(27121005,0,30); // ��ũ ũ������
  		cm.teachSkill(27121006,0,30); // ��ũ�Ͻ� �Ҽ���
  		cm.teachSkill(27120007,0,30); // ���� �����͸�
  		cm.teachSkill(27120008,0,5); // ��ũ����Ʈ �����͸�
  		cm.teachSkill(27121009,0,30); // ������ ���
	    cm.gainItem(1142482, 1);
            cm.removeEquip(1352402);
	    cm.getPlayer().gainAp(5);
	    cm.addEquip(-10, 1352403, 0, 0, 0, 0, 0, 0); //����
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<���� ����� ��ȣ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 76) {
            cm.resetStats(35,4,4,4);
	    cm.gainSp(2);
            cm.warp(101072000,0);cm.changeJob(1100);
                cm.getPlayer().setKeyValue("AutoJob", "1110");
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // ������ ����
	    cm.playerMessage(5, "<���ñ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 77) {
            cm.warp(101072000,0);cm.changeJob(1110);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<���ı��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 78) {
            cm.warp(101072000,0);cm.changeJob(1111);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(11110005,0,20); // ���꽺�� �޺�
	    cm.teachSkill(11111006,0,20); // �ҿ� ����̹�
	    cm.teachSkill(11111008,0,1); // ���� ũ����
	    cm.playerMessage(5, "<��ޱ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 79) {
            cm.warp(101072000,0);cm.changeJob(1112);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // ������ �޾Ƹ�
	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 80) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(1200);
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // ������ ����
	    cm.playerMessage(5, "<���ñ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 81) {
            cm.warp(101072000,0);cm.changeJob(1210);
                cm.getPlayer().setKeyValue("AutoJob", "1210");
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<���ı��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 82) {
            cm.warp(101072000,0);cm.changeJob(1211);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(12111003,0,20); // ���׿�
	    cm.teachSkill(12111004,0,20); // ������Ʈ
	    cm.teachSkill(12111007,0,1); // �ڷ���Ʈ �����͸�
	    cm.playerMessage(5, "<��ޱ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 83) {
            cm.warp(101072000,0);cm.changeJob(1212);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // ������ �޾Ƹ�
	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 84) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(1300);
                cm.getPlayer().setKeyValue("AutoJob", "1310");
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // ������ ����
	    cm.playerMessage(5, "<���ñ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 85) {
            cm.warp(101072000,0);cm.changeJob(1310);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<���ı��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 86) {
            cm.warp(101072000,0);cm.changeJob(1311);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(13110009,0,1); // ��Ż ��ο�
	    cm.teachSkill(13111002,0,30); // ��ǳ�� ��
	    cm.teachSkill(13110003,0,20); // ���� ������Ʈ
	    cm.playerMessage(5, "<��ޱ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 87) {
            cm.warp(101072000,0);cm.changeJob(1312);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // ������ �޾Ƹ�
	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 88) {
            cm.resetStats(4,4,4,25);
            cm.warp(101072000,0);cm.changeJob(1400);
                cm.getPlayer().setKeyValue("AutoJob", "1410");
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // ������ ����
	    cm.playerMessage(5, "<���ñ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 89) {
            cm.warp(101072000,0);cm.changeJob(1410);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<���ı��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 90) {
            cm.warp(101072000,0);cm.changeJob(1411);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(14110004,0,20); // ����
	    cm.teachSkill(14111005,0,20); // ���巯�� ���ο�
	    cm.teachSkill(14111010,0,1); // ��ũ �÷���
	    cm.playerMessage(5, "<��ޱ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 91) {
            cm.warp(101072000,0);cm.changeJob(1412);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // ������ �޾Ƹ�
	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 92) {
            cm.resetStats(25,4,4,4);
            cm.warp(101072000,0);cm.changeJob(1500);
                cm.getPlayer().setKeyValue("AutoJob", "1510");
	    cm.gainSp(2);
	    cm.gainItem(1142066, 1);
	    cm.teachSkill(10000190,1,1); // ������ ����
	    cm.playerMessage(5, "<���ñ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 93) {
            cm.warp(101072000,0);cm.changeJob(1510);
	    cm.gainItem(1142067, 1);
	    cm.playerMessage(5, "<���ı��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 94) {
            cm.warp(101072000,0);cm.changeJob(1511);
	    cm.gainItem(1142068, 1);
	    cm.teachSkill(15111004,0,20); // �ǽ�Ʈ �η�����
	    cm.teachSkill(15111005,0,20); // ���� �ν���
	    cm.teachSkill(15111011,0,1); // ��Ű ���̽�
	    cm.playerMessage(5, "<��ޱ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 95) {
            cm.warp(101072000,0);cm.changeJob(1512);
	    cm.gainItem(1142069, 1);
	    cm.teachSkill(10001005,1,1); // ������ �޾Ƹ�
	    cm.playerMessage(5, "<������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 96) {
             if (cm.getPlayer().getGender() == 0) {
            	cm.resetStats(35,4,4,4);
	    	cm.gainSp(2);	
		cm.warp(101072000,0);cm.changeJob(5100);
                cm.getPlayer().setKeyValue("AutoJob", "5110");
                cm.getPlayer().setFace(20069);
                cm.getPlayer().setHair(36033);
                cm.getPlayer().setSkinColor(10);
                cm.addEquip(-10, 1098000, 0, 10, 5, 0, 0, 0); //�ҿｯ��
	    	cm.gainItem(1142399, 1);
  		cm.teachSkill(50001214,1,1); // ���Ǽ�ȣ -- 0����ų
	    	cm.teachSkill(50000190,1,1); // ������ ����
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<���� �¾ ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		} else {
	    	cm.sendOk("#r������#k ������ ���� ������ ĳ���͸� ������ �����մϴ�.");
	    	cm.dispose();
		}		
        } else if (selection == 97) {
            cm.warp(101072000,0);cm.changeJob(5110);
	    cm.gainItem(1142400, 1);
	    cm.removeEquip(1098000);
	    cm.addEquip(-10, 1098001, 0, 30, 15, 0, 150, 0); //�ҿｯ��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<���� ���� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 98) {
            cm.warp(101072000,0);cm.changeJob(5111);
	    cm.gainItem(1142401, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1098001);
	    cm.addEquip(-10, 1098002, 0, 60, 30, 7, 350, 0); //�ҿｯ��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<���� ���� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 99){
  	cm.teachSkill(51120003,0,30); // ���꽺�� �ҿ� �ǵ� -- 4�� ��ų ����
  	cm.teachSkill(51120001,0,30); // ���꽺�� �ҵ� �����͸�
  	cm.teachSkill(51120002,0,30); // ���꽺�� ���̳� ����
  	cm.teachSkill(51121007,0,30); // �ҿ� ���Ʈ 
  	cm.teachSkill(51121008,0,30); // ���̴� ���Ʈ
  	cm.teachSkill(51121006,0,30); // �ҿ� ������
  	cm.teachSkill(51120000,0,10); // �Ĺ� �����͸�
  	cm.teachSkill(51121004,0,30); // ���Ľ�
  	cm.teachSkill(51121005,0,30); // ������ ���
            cm.warp(101072000,0);cm.changeJob(5112);
	    cm.gainItem(1142402, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1098002);
	    cm.addEquip(-10, 1098003, 0, 85, 45, 12, 600, 110); //�ҿｯ��
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<���� ������> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 100) {
            cm.resetStats(4,4,25,4);
            cm.warp(101072000,0);cm.changeJob(3200);
                cm.getPlayer().setKeyValue("AutoJob", "3210");
	    cm.gainSp(2);
	    cm.gainItem(1142242, 1);
	    cm.teachSkill(30000190,1,1); // ������ ����
	    cm.playerMessage(5, "<Ư������ ���Ի�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 101) {
            cm.warp(101072000,0);cm.changeJob(3210);
	    cm.gainItem(1142243, 1);
	    cm.playerMessage(5, "<Ư������ �߱޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 102) {
            cm.warp(101072000,0);cm.changeJob(3211);
	    cm.gainItem(1142244, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<Ư������ ��޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 103) {
            cm.warp(101072000,0);cm.changeJob(3212);
	    cm.gainItem(1142245, 1);
	    cm.getPlayer().gainAp(5);
  	    cm.teachSkill(32120000,0,30); // ���꽺�� ��ũ ����
  	    cm.teachSkill(32120001,0,30); // ���꽺�� ���ο� ����
  	    cm.teachSkill(32121002,0,30); // �ǴϽ� ��ο�
  	    cm.teachSkill(32121003,0,30); // ����Ŭ��
  	    cm.teachSkill(32121004,0,30); // ��ũ ���׽ý�
  	    cm.teachSkill(32121006,0,30); // ����
  	    cm.teachSkill(32121007,0,30); // ������ ���
  	    cm.teachSkill(32120009,0,30); // ����������
	    cm.playerMessage(5, "<Ư������ �ֻ�޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 104) {
            cm.resetStats(4,25,4,4);
	    cm.gainSp(2);
            cm.warp(101072000,0);cm.changeJob(3300);
                cm.getPlayer().setKeyValue("AutoJob", "3310");
	    cm.gainItem(1142242, 1);
	    cm.teachSkill(30000190,1,1); // ������ ����
	    cm.teachSkill(30001061,1,1); // ��ȹ
	    cm.playerMessage(5, "<Ư������ ���Ի�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 105) {
            cm.warp(101072000,0);cm.changeJob(3310);
	    cm.gainItem(1142243, 1);
	    cm.playerMessage(5, "<Ư������ �߱޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 106) {
            cm.warp(101072000,0);cm.changeJob(3311);
	    cm.gainItem(1142244, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<Ư������ ��޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 107) {
            cm.warp(101072000,0);cm.changeJob(3312);
	    cm.gainItem(1142245, 1);
	    cm.getPlayer().gainAp(5);
  	    cm.teachSkill(33120000,0,30); // ũ�ν����� ������Ʈ
  	    cm.teachSkill(33120010,0,10); // ���ϵ� �ν���Ʈ
  	    cm.teachSkill(33120011,0,30); // ���꽺�� ���̳� ����
  	    cm.teachSkill(33121001,0,30); // �÷��� ����
  	    cm.teachSkill(33121002,0,30); // �Ҵ� ��
  	    cm.teachSkill(33121004,0,30); // ���� ������
  	    cm.teachSkill(33121005,0,10); // �ɹ��� ��
  	    cm.teachSkill(33121007,0,30); // ������ ���
  	    cm.teachSkill(33121009,0,30); // ���ϵ� ��
	    cm.playerMessage(5, "<Ư������ �ֻ�޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
      	} else if (selection == 108) {
            cm.resetStats(4,25,4,4);
            cm.warp(101072000,0);cm.changeJob(3500);
                cm.getPlayer().setKeyValue("AutoJob", "3510");
	    cm.gainSp(2);
	    cm.gainItem(1142242, 1);
	    cm.teachSkill(30000190,1,1); // ������ ����
	    cm.playerMessage(5, "<Ư������ ���Ի�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 109) {
            cm.warp(101072000,0);cm.changeJob(3510);
	    cm.gainItem(1142243, 1);
	    cm.playerMessage(5, "<Ư������ �߱޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 110) {
            cm.warp(101072000,0);cm.changeJob(3511);
	    cm.gainItem(1142244, 1);
	    cm.getPlayer().gainAp(5);
	    cm.playerMessage(5, "<Ư������ ��޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 111) {
            cm.warp(101072000,0);cm.changeJob(3512);
	    cm.gainItem(1142245, 1);
	    cm.getPlayer().gainAp(5);
  	    cm.teachSkill(35120000,0,30); // ��Ż�Ƹ� �ͽ�Ʈ��
  	    cm.teachSkill(35120001,0,30); // �κ� �����͸�
  	    cm.teachSkill(35121003,0,30); // ���ӽ� : Ÿ��ź
  	    cm.teachSkill(35121005,0,30); // ��Ż�Ƹ� : �̻��� ��ũ
  	    cm.teachSkill(35121006,0,30); // ������Ƽ
  	    cm.teachSkill(35121007,0,30); // ������ ���
  	    cm.teachSkill(35121009,0,30); // �κ� ���丮 : RM1
  	    cm.teachSkill(35121010,0,30); // ���ø����̾� : AF-11
  	    cm.teachSkill(35121012,0,30); // ������ ����Ʈ
  	    cm.teachSkill(35121013,0,30); // ��Ż�Ƹ� : ��� �ӽŰ�
	    cm.playerMessage(5, "<Ư������ �ֻ�޻�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 112) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(3100);
                cm.getPlayer().setKeyValue("AutoJob", "3110");
            if (cm.getPlayer().getGender() == 0) {
                cm.resetEquip();
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20148);
                cm.getPlayer().setHair(33531);
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.addEquip(-5, 1050191, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072518, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1322122, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1099000, 0, 10, 5, 0, 0, 20); //���� �ǵ�
	  	cm.teachSkill(30010190,1,1); // ������ ����
	  	cm.teachSkill(30011109,1,1); // ��������
	  	cm.teachSkill(30010110,1,1); // ���� ���� 
	  	cm.teachSkill(30010111,1,1); // ���� Ŀ��
	  	cm.teachSkill(30010112,1,1); // ���� ǻ��
	    	cm.gainItem(1142341, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<��Ȱ�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
                cm.resetEquip();
                cm.getPlayer().setFace(21146);
                cm.getPlayer().setHair(34411);
                cm.getPlayer().getStat().setMaxMp(5);
                cm.getPlayer().getStat().setMp(cm.getPlayer().getStat().getCurrentMaxMp());
                cm.addEquip(-5, 1051236, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072518, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1322122, 17, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1099000, 0, 10, 5, 7, 0, 20); //���� �ǵ�
	  	cm.teachSkill(30010190,1,1); // ������ ����
	  	cm.teachSkill(30011109,1,1); // ��������
	  	cm.teachSkill(30010110,1,1); // ���� ���� 
	  	cm.teachSkill(30010111,1,1); // ���� Ŀ��
	  	cm.teachSkill(30010112,1,1); // ���� ǻ��
	    	cm.gainItem(1142341, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<��Ȱ�� ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		}
        } else if (selection == 113) {
            cm.warp(101072000,0);cm.changeJob(3110);
	    cm.gainItem(1142342, 1);
            cm.removeEquip(1099000);
	    cm.addEquip(-10, 1099002, 0, 30, 15, 7, 150, 50); //���� �ǵ�
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<����� �����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 114) {
            cm.warp(101072000,0);cm.changeJob(3111);
	    cm.gainItem(1142343, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1099002);
	    cm.addEquip(-10, 1099003, 0, 60, 30, 7, 350, 80); //���� �ǵ�
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<������ ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 115){
  		cm.teachSkill(31120011,1,1); // ���� ������ ���� ��ȭ -- 4����ų ����
  		cm.teachSkill(31121000,0,30); // ���� �ͽ��÷���
  		cm.teachSkill(31121001,0,30); // ���� ����Ʈ
  		cm.teachSkill(31121003,0,20); // ���� ũ����
  		cm.teachSkill(31121006,0,20); // ��ũ ���ε�
  		cm.teachSkill(31121005,0,30); // ��Ÿ�����ý�	
		cm.teachSkill(31121007,0,15); // ���Ǵ�Ƽ ����
  		cm.teachSkill(31121002,0,10); // ���Ǹ� ��ġ
  		cm.teachSkill(31121004,0,30); // ������ ���
  		cm.teachSkill(31120008,0,30); // ���꽺�� ���� �����͸�
  		cm.teachSkill(31120009,0,30); // �ϵ� ��Ų
            cm.warp(101072000,0);cm.changeJob(3112);
	    cm.gainItem(1142344, 1);
	    cm.getPlayer().gainAp(5);
            cm.removeEquip(1099003);
	    cm.addEquip(-10, 1099004, 0, 85, 45, 7, 600, 110); //���� ����
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<����� ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 116) {
            cm.resetStats(35,4,4,4);
            cm.warp(101072000,0);cm.changeJob(6100);
                cm.getPlayer().setKeyValue("AutoJob", "6110");
            if (cm.getPlayer().getGender() == 0) {
                cm.resetEquip();
	    	cm.gainSp(2);
                cm.getPlayer().setFace(20376);
                cm.getPlayer().setHair(36245);
                cm.addEquip(-5, 1052529, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072730, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1402177, 30, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0); //����
	    	cm.gainItem(1142484, 1);
		cm.teachSkill(61110211, 1, 1);
		cm.teachSkill(61121217, 1, 1);
		cm.teachSkill(60000190, 1, 1);
		cm.teachSkill(60001216, 1, 1);
		cm.teachSkill(60001217, 1, 1);
		cm.teachSkill(60001218, 1, 1);
		cm.teachSkill(60000219, 1, 1);
		cm.teachSkill(60000222, 1, 1);
		cm.teachSkill(60001225, 1, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<ȯ���� ī����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
                cm.resetEquip();
                cm.getPlayer().setFace(21371);
                cm.getPlayer().setHair(37135);
                cm.addEquip(-5, 1052529, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1072730, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1402177, 30, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1352500, 0, 0, 0, 0, 0, 0); //����
	    	cm.gainItem(1142484, 1);
		cm.teachSkill(60000190, 1, 1);
		cm.teachSkill(60001216, 1, 1);
		cm.teachSkill(60001217, 1, 1);
		cm.teachSkill(60001218, 1, 1);
		cm.teachSkill(60000219, 1, 1);
		cm.teachSkill(60000222, 1, 1);
		cm.teachSkill(60001225, 1, 1);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<ȯ���� ī����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
		}
        } else if (selection == 117) {
            cm.warp(101072000,0);cm.changeJob(6110);
	    cm.gainItem(1142485, 1);
            cm.removeEquip(1352500);
	    cm.addEquip(-10, 1352501, 0, 10, 10, 0, 0, 0); //����
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<ī������ ����� �ȴ� ��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 118) {
            cm.warp(101072000,0);cm.changeJob(6111);
	    cm.gainItem(1142486, 1);
            cm.removeEquip(1352501);
	    cm.addEquip(-10, 1352502, 0, 20, 20, 0, 0, 0); //����
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<������ ī����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 119) {
            cm.warp(101072000,0);cm.changeJob(6112);
	    cm.gainItem(1142487, 1);
            cm.removeEquip(1352502);
	    cm.addEquip(-10, 1352503, 0, 30, 30, 0, 0, 0); //����
  	cm.teachSkill(61120020,0,2); // �巡�� ������ 3�� ��ȭ -- 4�� ��ų ����
  	cm.teachSkill(61121100,0,30); // �Ⱑ ������
  	cm.teachSkill(61121102,0,30); // ��� ��Ʈ��
  	cm.teachSkill(61121104,0,20); // �ҵ� ��Ʈ����ũ 
  	cm.teachSkill(61121105,0,20); // ���۳� �극��
  	cm.teachSkill(61120007,0,30); // ��庥�� �� ���� �ҵ�
  	cm.teachSkill(61121009,0,20); // �ι���Ʈ �Ƹ�
  	cm.teachSkill(61120011,0,30); // ���ø�Ī Ŀ����
  	cm.teachSkill(61120012,0,30); // ��庥�� �ҵ� �����͸�
  	cm.teachSkill(61121014,0,30); // ����� ���
  	cm.teachSkill(61120010,0,1); // ����� 3�� ��ȭ
  	cm.teachSkill(61120013,0,1); // ���ݸ�� 3�� ��ȭ
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<ī������ ������ �մ���> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 120) {
            if (cm.getPlayer().getGender() == 1) {
            	cm.resetStats(4,35,4,4);
            	cm.warp(101072000,0);cm.changeJob(6500);
                cm.getPlayer().setKeyValue("AutoJob", "6510");
                cm.resetEquip();
                cm.getPlayer().setFace(21574);
                cm.getPlayer().setHair(37252);
                cm.addEquip(-5, 1051293, 0, 3, 0, 7, 0, 0); //����
                cm.addEquip(-7, 1071041, 0, 3, 0, 7, 0, 0); //�Ź�
                cm.addEquip(-11, 1222000, 35, 0, 0, 7, 0, 0); //����
                cm.addEquip(-10, 1352601, 0, 100, 100, 0, 300, 0); //�ҿ︵
                cm.getPlayer().getStat().setMaxMp(1);
	  	cm.teachSkill(60010190,1,1); // ������ ����
	    	cm.gainItem(1142495, 1);
		cm.teachSkill(60011216,1,1);
		cm.teachSkill(60011218,1,1);
		cm.teachSkill(60011219,1,1);
		cm.teachSkill(60011220,1,1);
		cm.teachSkill(60011221,1,1);
		cm.teachSkill(60011222,1,1);
		cm.teachSkill(65121007,1,1);//Ʈ����Ƽ 2Ÿ
		cm.teachSkill(65121008,1,1); // Ʈ����Ƽ 3Ÿ
	    	cm.gainSp(2);
	    	cm.fakeRelog();
            	cm.updateChar();
	    	cm.playerMessage(5, "1�� ������ �Ϸ� �Ǿ����ϴ�, �ʿ��� ����� �⺻ �������� 1000�޼ҿ� ���Ű� �����մϴ�.")
	    	cm.playerMessage(5, "<��� ����� �����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    	//cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    	cm.dispose();
            } else {
	    	cm.sendOk("#r������������#k ������ ���� ���谡 ĳ���͸� ������ �����մϴ�.");
	    	cm.dispose();
		}
        } else if (selection == 121) {
            cm.warp(101072000,0);cm.changeJob(6510);
	    cm.gainItem(1142496, 1);
            cm.removeEquip(1352601);
            cm.addEquip(-10, 1352602, 0, 150, 150, 0, 500, 0); //�ҿ︵
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<������ �븮��> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 122) {
            cm.warp(101072000,0);cm.changeJob(6511);
	    cm.gainItem(1142497, 1);
            cm.removeEquip(1352602);
            cm.addEquip(-10, 1352603, 0, 200, 200, 0, 700, 0); //�ҿ︵
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<��ũ ����> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 123) {
            cm.warp(101072000,0);cm.changeJob(6512);
	    cm.gainItem(1142498, 1);
            cm.removeEquip(1352603);
            cm.addEquip(-10, 1352604, 0, 300, 300, 0, 900, 0); //�ҿ︵
  	cm.teachSkill(65121100,0,30); // �����̸� �ξ� -- 4�� ��ų ����
  	cm.teachSkill(65121101,0,30); // Ʈ����Ƽ
  	cm.teachSkill(65121002,0,30); // �Ǵ����� ����ġ��
  	cm.teachSkill(65121003,0,30); // �ҿ� �����ͽ�
  	cm.teachSkill(65121004,0,30); // �ҿ� ������
  	cm.teachSkill(65120005,0,30); // �ҿｴ�� ������Ʈ
  	cm.teachSkill(65120006,0,30); // ���Ǵ�Ƽ ��
  	cm.teachSkill(65121009,0,30); // ����� ���
  	cm.teachSkill(60010217,1,1); // Ʈ�� ������
	    cm.getPlayer().gainAp(5);
	    cm.fakeRelog();
            cm.updateChar();
	    cm.playerMessage(5, "<������ ���̵�> Īȣ�� ȹ�� �ϼ̽��ϴ�.");
	    //cm.playerMessage(6, "ȭ���� : ��ſ��� �ణ�� AP�� SP�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 501) {
            cm.warp(101072000,0);cm.changeJob(3120);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 502) {
            cm.warp(101072000,0);cm.changeJob(3121);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 503) {
            cm.warp(101072000,0);cm.changeJob(3122);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 504) {
            cm.warp(101072000,0);cm.changeJob(3610);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 505) {
            cm.warp(101072000,0);cm.changeJob(3611);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();
        } else if (selection == 506) {
            cm.warp(101072000,0);cm.changeJob(3612);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.");
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.dispose();

       } else if (selection == 10000) {
            cm.warp(101072000,0);cm.changeJob(10110);
	    cm.playerMessage(5, "���ο� ��ų�� �����߽��ϴ�.")
	    cm.getPlayer().send(MainPacketCreator.sendHint("3�� ��ų ���� ���� : 130",150,20));
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10001) {
            cm.warp(101072000,0);cm.changeJob(10111);
	    cm.playerMessage(5, "���ο� ��ų�� �����߽��ϴ�.")
	    cm.getPlayer().send(MainPacketCreator.sendHint("4�� ��ų ���� ���� : 150",150,20));
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10002) {
            cm.warp(101072000,0);cm.changeJob(10112);
	    cm.playerMessage(5, "���ο� ��ų�� �����߽��ϴ�.")
	    cm.getPlayer().send(MainPacketCreator.sendHint("�Ҿ���� ��� ��ų�� �����߽��ϴ�.",210,20));
	    cm.getPlayer().gainAp(5);
	    cm.dispose();

       } else if (selection == 10003) {
            cm.warp(101072000,0);cm.changeJob(2510);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10004) {
            cm.warp(101072000,0);cm.changeJob(2511);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
       } else if (selection == 10005) {
            cm.warp(101072000,0);cm.changeJob(2512);
	    cm.playerMessage(5, "���� ������ �Ϸ��Ͽ����ϴ�.")
	    cm.sendNext("��ſ��� �ణ�� #rAP�� SP#k�� ��Ƚ��ϴ�. ����� ���� �濡 ���� �ϸ� �����ñ� �ٶ��ϴ�~");
	    cm.getPlayer().gainAp(5);
	    cm.dispose();
			}
		}	
		
	}
}