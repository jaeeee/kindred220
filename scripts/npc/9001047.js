importPackage(Packages.packet.creators);
importPackage(Packages.client.items);
importPackage(Packages.server.items);
importPackage(Packages.launch.world);
importPackage(Packages.main.world);
importPackage(java.lang);

var status;
var select;

var ���� = 4310080
var �̹��� = "#b#i"+����+"# #z"+����+"##k"
var �̹��� = "#b#z"+����+"##k"

var ���� = new Array(3010000, 3010001, 3010007, 3010008, 3010009, 3010018, 3010025, 3010060, 3010061, 3010062, 3010063, 3010064, 3010065, 3010066, 3010067, 3010080, 3010081, 3010082, 3010083, 3010084, 3010086, 3010092, 3010097, 3010107, 3010108, 3010109, 3010110, 3010113, 3010114, 3010115, 3010021, 3010049, 3010055, 3010129, 3010130, 3010131, 3010132, 3010133, 3010134, 3010154, 3010157, 3010186, 3010191, 3010194, 3010202, 3010203, 3010205, 3010206, 3010207, 3010208, 3010211, 3010224, 3010225, 3010257, 3010279, 3010288, 3010297, 3010298, 3010307, 3010314, 3010315, 3010316, 3010317, 3010318, 3010319, 3010320, 3010321, 3010322, 3010354, 3010360, 3010364, 3010365, 3010368, 3010369, 3010370, 3010371, 3010373, 3010374, 3010375, 3010376, 3010377, 3010383, 3010390, 3010397, 3010402, 3010403, 3010404, 3010405, 3010406, 3010421, 3010423, 3010429, 3010430, 3010431, 3010432, 3010433, 3010434, 3010435, 3010436, 3010437, 3010438, 3010439, 3010440, 3010441, 3010442, 3010443, 3010444, 3010445, 3010446, 3010447, 3010448, 3010449, 3010450, 3010451, 3010452, 3010455, 3010457, 3010458, 3010459, 3010464, 3010465, 3010493, 3010500, 3010501, 3010502, 3010503, 3010504, 3010505, 3010506, 3010512, 3010513, 3010514, 3010515, 3010516, 3010517, 3010518, 3010519, 3010520, 3010521, 3010522, 3010523, 3010524, 3010525, 3010526, 3010530, 3010531, 3010532, 3010533, 3010534, 3010535, 3010536, 3010537, 3010538, 3010539, 3010540, 3010541, 3010542, 3010543, 3010544, 3010545, 3010546, 3010547, 3010548, 3010549, 3010550, 3010551, 3010552, 3010553, 3010554, 3010555, 3010556, 3010557, 3010558, 3010559, 3010560, 3010561, 3010562, 3010563, 3010564, 3010565, 3010566, 3010567, 3010568, 3010569, 3010570, 3010571, 3010572, 3010573, 3010574, 3010575, 3010576, 3010577, 3010578, 3010579, 3010580, 3010581, 3010582, 3010584, 3010585, 3010587, 3010589, 3010590, 3010592, 3010593, 3010596, 3010597, 3010598, 3010600, 3010601, 3010611, 3010612, 3010613, 3012017, 3010622, 3010623, 3010624, 3010636, 3010637, 3010638, 3010639, 3010640, 3010641, 3010642, 3010643, 3010644, 3010651, 3010652, 3010653, 3010654, 3010655, 3010656, 3010659, 3010662, 3010672, 3010673, 3010674, 3010675, 3010676, 3010677, 3010678, 3010679, 3010680, 3010681, 3010682, 3010683, 3010685, 3010690, 3010691, 3010692, 3010693, 3010694, 3010695, 3010697, 3010700, 3010702, 3010703, 3010704, 3010705, 3010708, 3010719, 3010720, 3010721, 3010722, 3010723, 3010733, 3010734, 3010735, 3010742, 3010743, 3010744, 3010757, 3010760, 3010761, 3010766, 3010767, 3010783, 3010797, 3010798, 3010800, 3010801, 3010802, 3010803, 3010804, 3010810, 3010811, 3010812, 3010814, 3010815, 3010835, 3010844, 3010851, 3010852, 3010854, 3010862, 3010863, 3014000, 3014001, 3014002, 3014003, 3014004, 3014005);

var ���̵� = new Array(2430050, 2430056, 2432580, 2430263, 2430093, 2430262, 2430260, 2430991, 2432724, 2430243, 2430264, 2430265, 2430392, 2430266, 2430271, 2430935, 2431760, 2430272, 2430091, 2430933, 2432498, 2430458, 2430506, 2430507, 2430906, 2430508, 2430908, 2430610, 2430937, 2430938, 2430939, 2430794, 2430871, 2430934, 2430936, 2430932, 2431137, 2431135, 2431136, 2431267, 2431353, 2431423, 2431424, 2431425, 2431426, 2431473, 2431474, 2431073, 2431491, 2431497, 2431498, 2430057, 2431500, 2431501, 2431502, 2431722, 2431733, 2431764, 2431779, 2431797, 2430968, 2431779, 2431898, 2431915, 2431949, 2432418, 2432003, 2432008, 2432015, 2432029, 2432031, 2432078, 2432085, 2432149, 2432151, 2432218, 2432295, 2432309, 2432328, 2432347, 2432348, 2432349, 2432350, 2432351, 2432359, 2432361, 2432449, 2432527, 2432528, 2432552);

var �� = new Array(5000000, 5000001, 5000002, 5000003, 5000004, 5000005, 5000006, 5000007, 5000008, 5000009, 5000010, 5000011, 5000012, 5000013, 5000014, 5000015, 5000017, 5000020, 5000021, 5000022, 5000023, 5000024, 5000026, 5000040, 5000041, 5000042, 5000043, 5000054, 5000064, 5000065, 5000068, 5000072, 5000083, 5000084, 5000089, 5000090, 5000091, 5000152, 5000171, 5000201, 5000202, 5000206, 5000211, 5000215, 5000216, 5000217, 5000221, 5000225, 5000228, 5000229, 5000230, 5000231, 5000232, 5000233, 5000237, 5000238, 5000239, 5000240, 5000243, 5000244, 5000245, 5000249, 5000250, 5000251, 5000256, 5000257, 5000258, 5000261, 5000271, 5000272, 5000273, 5000275, 5000276, 5000277, 5000281, 5000282, 5000283, 5000290, 5000291, 5000292, 5000293 ,5000294, 5000295, 5000296, 5000297, 5000298, 5000299, 5000309, 5000310, 5000311, 5000312, 5000314, 5000315, 5000317, 5000320, 5000321, 5000322, 5000328, 5000330, 5000331, 5000332, 5000341, 5000342, 5000343, 5000344, 5000352, 5000353, 5000354, 5000365, 5000366, 5000367, 5000368, 5000375, 5000376, 5000377, 5000381, 5000383, 5000385, 5000386, 5000387);

var ����Ʈ = new Array(5010000, 5010001, 5010002, 5010003, 5010004, 5010005, 5010006, 5010007, 5010009, 5010010, 5010011, 5010012, 5010013, 5010014, 5010016, 5010017, 5010018, 5010019, 5010020, 5010021, 5010022, 5010023, 5010024, 5010025, 5010026, 5010027, 5010031, 5010032, 5010033, 5010034, 5010035, 5010038, 5010039, 5010041, 5010042, 5010043, 5010044, 5010045, 5010051, 5010052, 5010053, 5010054, 5010057, 5010060, 5010064, 5010068, 5010069, 5010070, 5010071, 5010078, 5010079, 5010080, 5010081, 5010082, 5010083, 5010100, 5010101, 5010105, 5010106, 5010107, 5010108, 5010109, 5010111, 5010112, 5010122, 5010123, 5010124);

var �ȵ���̵� = new Array(1662000, 1662001, 1662002, 1662003, 1662004, 1662005, 1662007, 1662008, 1662009, 1662010, 1662011, 1662012, 1662013, 1662014, 1662015, 1662016, 1662017, 1662018, 1662019, 1662020, 1662021, 1662022, 1662024, 1662025, 1662026, 1662027, 1662032, 1662035, 1662036, 1662039, 1662041, 1662043, 1662044, 1662046, 1672000, 1672001, 1672002, 1672003, 1672004, 1672005, 1672006, 1672007, 1672008, 1672009, 1672010, 1672018, 1672019, 1672020, 1672021, 1672022, 1672023, 1672027, 1672028, 1672029, 1672040);

var ���� = new Array(1140000, 1140001, 1140002, 1141000, 1141001, 1141002, 1142000, 1142001, 1142002, 1142003, 1142004, 1142005, 1142006, 1142007, 1142008, 1142009, 1142010, 1142011, 1142012, 1142013, 1142014, 1142015, 1142016, 1142017, 1142018, 1142019, 1142020, 1142021, 1142022, 1142023, 1142024, 1142025, 1142026, 1142027, 1142028, 1142029, 1142030, 1142031, 1142032, 1142033, 1142034, 1142035, 1142036, 1142037, 1142038, 1142039, 1142040, 1142041, 1142042, 1142043, 1142044, 1142045, 1142046, 1142047, 1142048, 1142049, 1142050, 1142051, 1142052, 1142053, 1142054, 1142055, 1142056, 1142057, 1142058, 1142059, 1142060, 1142061, 1142062, 1142063, 1142064, 1142065, 1142066, 1142067, 1142068, 1142069, 1142070, 1142071, 1142072, 1142073, 1142074, 1142075, 1142076, 1142077, 1142078, 1142079, 1142080, 1142081, 1142082, 1142083, 1142084, 1142085, 1142086, 1142087, 1142088, 1142089, 1142090, 1142091, 1142092, 1142093, 1142094, 1142095, 1142096, 1142097, 1142098, 1142099, 1142100, 1142101, 1142107, 1142108, 1142109, 1142110, 1142111, 1142112, 1142113, 1142114, 1142115, 1142116, 1142117, 1142118, 1142119, 1142120, 1142122, 1142123, 1142124, 1142125, 1142126, 1142134, 1142135, 1142136, 1142137, 1142138, 1142139, 1142140, 1142141, 1142142, 1142143, 1142144, 1142149, 1142150, 1142151, 1142166, 1142187, 1142188, 1142190, 1142191, 1142217, 1142218, 1142295, 1142296, 1142297, 1142298, 1142299, 1142300, 1142301, 1142305, 1142306, 1142307, 1142329, 1142334, 1142335, 1142360, 1142373, 1142406, 1142408, 1142441, 1142442, 1142443, 1142444, 1142457, 1142477, 1142511, 1142512, 1142543, 1142558, 1142569, 1142573, 1142627, 1142656);

var ���� = new Array(1182079, 1182087, 1182000, 1182001, 1182002, 1182003, 1182005, 1182006, 1182007, 1182009, 1182010, 1182011, 1182019, 1182021, 1182022, 1182023, 1182053, 1182056, 1182058, 1182059, 1182061, 1182062, 1182063, 1182064, 1182066, 1182067, 1182069, 1182071);

var �ҿ� = new Array(2591010, 2591011, 2591012, 2591013, 2591014, 2591015, 2591016, 2591017, 2591018, 2591019, 2591020, 2591021, 2591022, 2591023, 2591024, 2591025, 2591026, 2591027, 2591028, 2591029, 2591030, 2591031, 2591032, 2591033, 2591034, 2591035, 2591036, 2591037, 2591038, 2591039, 2591040, 2591041, 2591042, 2591043, 2591044, 2591045, 2591046, 2591047, 2591048, 2591049, 2591050, 2591051, 2591052, 2591053, 2591054, 2591148, 2591149, 2591150, 2591151, 2591152, 2591153, 2591154, 2591055, 2591056, 2591057, 2591058, 2591059, 2591060, 2591061, 2591062, 2591063, 2591064, 2591065, 2591066, 2591067, 2591068, 2591069, 2591070, 2591071, 2591072, 2591073, 2591074, 2591075, 2591076, 2591077, 2591078, 2591079, 2591080, 2591081, 2591082, 2591155, 2591156, 2591157, 2591158, 2591159, 2591160, 2591161, 2591162, 2591163, 2591187, 2591188, 2591189, 2591190, 2591191, 2591192, 2591193, 2591218, 2591219, 2591220, 2591221, 2591222, 2591223, 2591224, 2591225, 2591226, 2591227, 2591228, 2591229, 2591230, 2591231, 2591232, 2591233, 2591249, 2591250, 2591251, 2591252, 2591253, 2591254, 2591255, 2591256, 2591257, 2591258, 2591259, 2591260, 2591261, 2591262, 2591263, 2591264, 2591288, 2591289, 2591290, 2591291, 2591292, 2591293, 2591294, 2591295, 2591296, 2591297, 2591298, 2591299, 2591300, 2591301, 2591302, 2591303, 2591304, 2591305, 2591306, 2591307, 2591308, 2591309, 2591310, 2591311, 2591312, 2591313, 2591314, 2591315, 2591316, 2591317, 2591318, 2591319, 2591320, 2591321, 2591322, 2591323, 2591324, 2591325, 2591326, 2591327, 2591328, 2591329, 2591330, 2591331, 2591332, 2591333, 2591334, 2591335, 2591336, 2591337, 2591338, 2591339, 2591340, 2591341);

var ��������Ų = new Array(2432640, 2432661, 2432710, 2432592, 2432532, 2432526, 2432479, 2432465, 2432355, 2432354, 2432207, 2432154, 2432154, 2432153, 2432084, 2431967, 2431965, 2431966);

function start() {
    status = -1;
    action(1, 1, 0);
}


var time = new Date();
var day = time.getDay();

switch(day){
	case 0:
	var d = "�Ͽ���";
	break;
	case 1:
	var d = "������";
	break;
	case 2:
	var d = "ȭ����";
	break;
	case 3:
	var d = "������";
	break;
	case 4:
	var d = "�����";
	break;
	case 5:
	var d = "�ݿ���";
	break;
	case 6:
	var d = "�����";
	break;
	default:
}
	var year = time.getFullYear();
	var month = time.getMonth() + 1
	var date = time.getDate();
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();

var ��¥ = ""+year+"�� "+month+"�� "+date+"�� "+hour+"�� "+min+"�� "+sec+"��"


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
	cm.sendSimple("�Ͼ� ������������ ���� ���� ������ �� �������ٵ� �߰ſ�ſ��䡦\r\n\r\n"
			+ "#fUI/UIWindow2.img/UtilDlgEx/list1#\r\n"
			+ "#b#L0#"+�̹���+" 10��#k�� ���� ��ȯ#k#l\r\n"
			+ "#b#L1#"+�̹���+" 20��#k�� ���̵� ��ȯ#k#l\r\n"
			+ "#b#L2#"+�̹���+" 30��#k�� �� ��ȯ#k#l\r\n"
			+ "#b#L3#"+�̹���+" 50��#k�� ����Ʈ ��ȯ#k#l\r\n"
			+ "#b#L4#"+�̹���+" 100��#k�� �ȵ���̵� ��ȯ#k#l\r\n"
		//	+ "#b#L5#"+�̹���+" 100��#k�� ���� ��ȯ#k#l\r\n"
		//	+ "#b#L6#"+�̹���+" 100��#k�� ���� ��ȯ#k#l\r\n"
		//	+ "#b#L7#"+�̹���+" 100��#k�� �ҿ� ��ȯ#k#l\r\n"
		//	+ "#b#L8#"+�̹���+" 200��#k�� ��������Ų ��ȯ#k#l\r\n"

);

        } else if(status == 1) {
	�з�     = selection;
	�ʿ䰳�� = �з� == 0 ? 10     : �з� == 1 ? 20       : �з� == 2 ? 30   : �з� == 3 ? 50       : �з� == 8 ? 200 : 100
	������   = �з� == 0 ? "����" : �з� == 1 ? "���̵�" : �з� == 2 ? "��" : �з� == 3 ? "����Ʈ" : �з� == 4 ? "�ȵ���̵�" : �з� == 5 ? "����" : �з� == 6 ? "����" : �з� == 7 ? "�ҿ�" : "��������Ų"
	����     = �з� == 0 ? "��"   : �з� == 1 ? "��"     : �з� == 2 ? "��" : �з� == 3 ? "��"     : �з� == 4 ? "��"         : �з� == 5 ? "��"   : �з� == 6 ? "��"   : �з� == 7 ? "��"   : "��" 
	��       = �з� == 0 ? ""     : �з� == 1 ? "��"     : �з� == 2 ? "��" : �з� == 3 ? ""       : �з� == 4 ? ""           : �з� == 5 ? "��"   : �з� == 6 ? ""     : �з� == 7 ? "��"   : "��"


	if(!cm.haveItem(����, �ʿ䰳��)) {
	cm.sendNext(""+������+""+����+" ������ ���� #h #���� ������ �����ϰ����� #r"+�ʿ䰳��+"���� ��ȭ�� ������ "+������+""+��+"�� �ٲ�帱 �� �����.#k ��� ��ƿ��� �Ŀ� �ٽ� ã�ƿ��ֽðھ��?");
		cm.dispose();
	} else {
	cm.sendYesNo("���� "+������+""+��+"�� ��ȯ�Ͻðھ��? ��� ������ �ǵ��� �� ���µ��� ���� �������� �ȳ��Դٰ� ���� �׷��� �ٲ�帱 �� �����!!");
	}


	} else if (status == 2) {
	��ȭ        = "�κ��丮�� �� ������ ���� �������� ���Ͽ����ϴ�. �ٽ� �õ����ּ���. ���� ���� ������ �ݺ��ȴٸ� �����ڿ��� �����ּ���."
	ȹ��        = "���� ��ȭ�� �ּ����� ���� #h #�Բ� "+������+""+��+"�� �����ҰԿ䡦�� ������ ������� �𸣰����� �������� �����ּ���.\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#b"

	����        = ����[Math.floor(Math.random() * ����.length)];
	���̵�      = ���̵�[Math.floor(Math.random() * ���̵�.length)];
	��          = ��[Math.floor(Math.random() * ��.length)];
	����Ʈ      = ����Ʈ[Math.floor(Math.random() * ����Ʈ.length)];
	�ȵ���̵�  = �ȵ���̵�[Math.floor(Math.random() * �ȵ���̵�.length)];
	����        = ����[Math.floor(Math.random() * ����.length)];
	����        = ����[Math.floor(Math.random() * ����.length)];
	�ҿ�        = �ҿ�[Math.floor(Math.random() * �ҿ�.length)];
	��������Ų  = ��������Ų[Math.floor(Math.random() * ��������Ų.length)];

	���� = �з� == 0 ? ����   : �з� == 1 ? ���̵�   : �з� ==  2 ? ��   : �з� == 3 ?  ����Ʈ  : �з� == 4 ?  �ȵ���̵�  : �з� == 5 ?  ����  : �з� == 6 ?  ����  :  �з� == 7 ? �ҿ� : ��������Ų

	switch(�з�) {
		case 0:
		if(cm.canHold(����)) { cm.gainItem(����, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+����+"# #z"+����+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose();
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/1_����.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;

		case 1:
		if(cm.canHold(���̵�)) { cm.gainItem(���̵�, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+���̵�+"# #z"+���̵�+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose();
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/2_���̵�.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;

		case 2:
		if(cm.canHold(��)) { cm.BuyPET(��); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+��+"# #z"+��+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose();
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/3_��.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;

		case 3:
		if(cm.canHold(����Ʈ)) { cm.gainItem(����Ʈ, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+����Ʈ+"# #z"+����Ʈ+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose(); 
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/4_����Ʈ.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;


		case 4:
		if(cm.canHold(�ȵ���̵�)) { cm.gainItem(�ȵ���̵�, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+�ȵ���̵�+"# #z"+�ȵ���̵�+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose(); 
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/5_�ȵ���̵�.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;


		case 5:
		if(cm.canHold(����)) { cm.gainItem(����, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+����+"# #z"+����+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose(); 
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/6_����.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;


		case 6:
		if(cm.canHold(����)) { cm.gainItem(����, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+����+"# #z"+����+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose(); 
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/7_����.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;

		case 7:
		if(cm.canHold(�ҿ�)) { cm.gainItem(�ҿ�, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+�ҿ�+"# #z"+�ҿ�+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose(); 
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/8_�ҿ�.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;

		case 8:
		if(cm.canHold(��������Ų)) { cm.gainItem(��������Ų, 1); cm.gainItem(����, -�ʿ䰳��); cm.sendOk(""+ȹ��+"#i"+��������Ų+"# #z"+��������Ų+"#") } else { cm.sendOk(""+��ȭ+"") } cm.dispose(); 
		var fw = new java.io.FileWriter(new java.io.File("�α�/���ǳ׾�/9_��������Ų.txt"), true);
		fw.write("�Ͻ� : "+��¥+" �� �г��� : "+cm.getPlayer().getName()+" �� �ڵ� : "+����+" �� "+Packages.server.items.ItemInformation.getInstance().getName(����)+"\r\n");
		fw.close(); break;
	}
	}
    }
}