/*

������ : kki_looking@naver.com / rave_esg@nate.com

*/

 

var status = -1;
var time = "#fUI/UIToolTip/Item/Equip/Star/Star#"
function start() {
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

        var choose = "#e�ȳ��ϼ���~ ���̵� �����̿���. (���̵� ����X)#n\r\n#e ���̵� �����Ͻǽÿ�#i4310066#�� �ʿ��մϴ�.#k\r\n ";
        choose += "#e#b#L0#"+time+"���̵��� ���� �;�� ��� �����?#k#n\r\n";

        choose += "#e\n#r#L1#"+time+"���̵��� ����µ� ��� Ÿ��?#k#n\r\n";

        choose += "\r\n#r#L2##i2430264# ������ ���ڷ�#k";
        choose += "#r#L3##i2430283# �� ���̵�#k"; 

        choose += "\r\n#r#L4##i2431497# ũ���� ���̵�#k"; 
        choose += "#r#L5##i2431502# ����Ű�� ����ŷ#k";

        choose += "\r\n#r#L6##i2430871# ��ũ ������#k";
        choose += "#r#L7#   #i2431491# ��� ������#k";

        choose += "\r\n#r#L8##i2431498# �ٵο� ���̵�#k";
        choose += "#r#L9##i2430259# #t2430259##k";

        choose += "\r\n#r#L10##i2431499# ���ֿ� ���̵�#k";
        choose += "#r#L11##i2430072# ZDŸ�̰� ����#k";

        choose += "\r\n#r#L12##i2430056# �̽�Ʈ �߷�#k";
        choose += "#r#L13#   #i2430718# �ֹ� ���̵�#k";

        choose += "\r\n#r#L14##i2430091# �������� ��#k";
        choose += "#r#L82#   #i2432498# Ǫ������ ��#k";

        choose += "\r\n#r#L16##i2430101# ��ũ ���ⱸ#k";
        choose += "#r#L17#   #i2430102# Ʈ������ ���̵�#k";

        choose += "\r\n#r#L18##i2430242# ���� �������#k";
        choose += "#r#L19##i2430243# �Ŀ��� ��Ʈ#k";

        choose += "\r\n#r#L20##i2430262# ���� ������#k";
        choose += "#r#L21#   #i2430610# ��Ÿ��� ���̵�#k";

        choose += "\r\n#r#L22##i2430660# �����̶��̵�#k";
        choose += "#r#L23# #i2430249# ���� �����#k";

        choose += "\r\n#r#L24##i2430249# ���� �����#k";
        choose += "#r#L25#   #i2430392# �ñ׳ʽ� ����#k";

        choose += "\r\n#r#L26##i2430266# �ߴߴ� ���̵�#k";
        choose += "#r#L27##i2430271# ���� �ξ���#k";

        choose += "\r\n#r#L28##i2431505# �ο� ���̴�#k";
        choose += "#r#L29#   #i2430275# ���ǰָ� ���ⱸ#k";

        choose += "\r\n#r#L30##i2431914# ���� �䳢��#k";
        choose += "#r#L31#   #i2430506# Ȳ�� ���̵�#k";

        choose += "\r\n#r#L32##i5530152# �䳢 ������#k";
        choose += "#r#L33#   #i2430508# ���۷��� ���̵�#k";

        choose += "\r\n#r#L34##i2430518# �ε�� ȣ��#k";
        choose += "#r#L35#   #i2431760# �� �ξ���#k";

        choose += "\r\n#r#L36##i2430937# ���ù��� ��#k";
        choose += "#r#L37#   #i2430938# ����Ʈ�� ���̵�#k";

        choose += "\r\n#r#L38##i2430939# �Ŀ���Ʈ ��#k";
        choose += "#r#L39#   #i2431137# �巡���ī#k"

        choose += "\r\n#r#L40##i2431133# ���ҿ����޷�#k";
        choose += "#r#L41# #i2431134# �Ƹ��ƴ����޷�#k"

        choose += "\r\n#r#L42##i2431267# ���� ��Ծ�#k";
        choose += "#r#L43#   #i2431422# �� ���̹�#k"

        choose += "\r\n#r#L44##i2431423# �ϴ� ������#k";
        choose += "#r#L45#   #i2431424# ���ɼ��̶��̵�#k"

        choose += "\r\n#r#L46##i2431426# �޴� ���̵�#k";
        choose += "#r#L47#   #i2431473# ��ũ�� �յ�#k"

        choose += "\r\n#r#L48##i2431474# ���� �յ�#k";
        choose += "#r#L49#   #i2431700# ����� �Բ�#k"

        choose += "\r\n#r#L50##i2430079# �սǵս� ��#k";
        choose += "#r#L51#   #i2431764# �������� ����#k"

        choose += "\r\n#r#L52##i2431765# ��鸰 ��#k";
        choose += "#r#L53#   #i5680185# ���༺ B612#k"

        choose += "\r\n#r#L54##i2431799# ���� �巡��#k";
        choose += "#r#L55#   #i1902000# ���谡 ����#k"

        choose += "\r\n#r#L56##i1902001# �������� ��#k";
        choose += "#r#L57#   #i1902002# ���� �����#k"

        choose += "\r\n#r#L58##i1902005# ƼƼ�Ƴ� ��#k";
        choose += "#r#L59#   #i1902006# ƼƼ�� �Ӵ�#k"

        choose += "\r\n#r#L60##i1902007# �ñ׳� ����#k";
        choose += "#r#L61#   #i1902015# ù��° ��ȣ#k"

        choose += "\r\n#r#L62##i1902016# �ι�° ��ȣ#k";
        choose += "#r#L63#   #i1902017# ����° ��ȣ#k"

        choose += "\r\n#r#L64##i1902018# ������ ��ȣ#k";
        choose += "#r#L65#   #i1902040# ù��° ����#k"

        choose += "\r\n#r#L66##i1902041# �ι�° ����#k";
        choose += "#r#L67#   #i1902042# ������ ����#k"

        choose += "\r\n#r#L68##i1902048# ���̿��� ��#k";
        choose += "#r#L69#   #i2431915# �縯�� ���̵�#k"

        choose += "\r\n#r#L70##i2432003# ���� ������#k";
        choose += "#r#L71#   #i2431949# �Ŵ� ��ż��#k"

        choose += "\r\n#r#L72##i5680196# �ܹ� �����#k";
        choose += "#r#L73#   #i2432015# ���� �𷡱���#k"

        choose += "\r\n#r#L74##i2432030# �� ������#k";
        choose += "#r#L75#   #i2432031# ģ�� ���̵�#k"

        choose += "\r\n#r#L76##i2432078# �˰� ���̵�#k";
        choose += "#r#L77#   #i2432218# ������ ���̵�#k"

        choose += "\r\n#r#L78##i2432293# ȣ�ڸ��� ��#k";
        choose += "#r#L79#   #i2432295# ���� ���̵�#k"

        choose += "\r\n#r#L80##i2432359# õ�� ��ī��#k";
        choose += "#r#L81#   #i2432361# �Ǹ� �����#k"

        choose += "\r\n#r#L15##i2430093# Ÿ�� ���̵�#k";
        choose += "#r#L83#   #i2432029# ���� ��Ʋ��#k";
        cm.sendSimple(choose);
    } else if (status == 1) {
        var s = selection;
        cm.dispose();
        if (s == 0) {
 cm.sendOk ("���̵��� ���� ���ؼ�, ���̵� ���� #i4310066##t4310066#�� 5�� �ʿ��մϴ�.");
 } else if (s == 1) {
 cm.sendOk ("���̵��� Ż���� ��ųâ�� ���� ���̵����� Ŭ���Ͻø� �˴ϴ�.");
 } else if (s == 2) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001026,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 3) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001003,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 4) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001004,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 5) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001005,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 6) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001006,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 7) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001021,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 8) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5);
            cm.teachSkill(80001007,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 9) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5);
            cm.teachSkill(80001008,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 10) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5);
            cm.teachSkill(80001009,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 11) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001010,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 12) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001011,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 13) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001013,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 14) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001014,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 15) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001015,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 16) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001016,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 17) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001017,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 18) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001018,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 19) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001019,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 20) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001020,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 21) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001022,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 22) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001023,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 23) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001027,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 24) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001028,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 25) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001038,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 26) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001030,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 27) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001031,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 28) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001032,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 29) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001033,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 30) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001044,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 31) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001082,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 32) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001083,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 33) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001084,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 34) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001090,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 35) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001137,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 36) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001144,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 37) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001148,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 38) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001149,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 39) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001198,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 40) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(80001220,-10); 
            cm.teachSkill(80001144,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 41) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001221,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 42) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001228,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 43) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001237,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 44) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001243,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 45) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001244,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 46) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001246,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 47) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001257,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 48) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001258,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 49) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001261,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 50) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001285,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 51) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001289,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 52) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001290,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 53) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001292,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 54) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001302,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 55) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001304,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 56) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001305,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 57) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001306,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 58) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001307,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 59) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001308,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 60) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001309,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 61) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001312,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 62) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001313,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 63) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001314,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 64) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001315,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 65) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001316,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 66) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001317,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 67) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001318,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 68) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001319,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 69) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001327,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 70) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001331,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 71) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001336,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 72) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001338,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 73) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001333,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 74) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001347,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 75) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001348,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 76) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001453,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 77) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001413,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 78) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001421,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 79) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001423,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }

 } else if (s == 80) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001445,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 81) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001447,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 82) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(80001508,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
 } else if (s == 83) {
	if(cm.haveItem(4310066, 5)) { 
            cm.gainItem(4310066,-5); 
            cm.teachSkill(1204,1,1);
            cm.sendOk("#i4310066# 5���� �����Ͻ� ���̵����� ��ȯ�ϼ̽��ϴ�.");
            cm.dispose(); 
        } else {
            cm.sendOk("#i4310066# 5���� �ִ��� �ٽ� �̺��丮â���� Ȯ���ϼ���.");
            cm.dispose();;
        }
  
        }
    }
}
