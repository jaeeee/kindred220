/*�� ��ũ��Ʈ�� ���Ǹ��Ŵ����� ��ũ��Ʈ�� ������� ��ũ��Ʈ�Դϴ�.*/
importPackage(Packages.launch.world);
importPackage(Packages.database);
importPackage(java.sql);
importPackage(java.lang);
var status = -1;
var rank = MYSQL.getConnection().prepareStatement("SELECT * FROM characters WHERE gm = 0 ORDER BY mistic DESC LIMIT 10").executeQuery();
var mapid = Array(931050800,931050810,931050820);
var mitemid = Array(1002357,1142503,1042243,1122000,1142504,1142500,1003579,1142502,1012332,1142501);
var mcoinnn = Array(4033302,4033302,4033303,4033303,4033303,4033311,4033304,4033304,4033312,4033312);
var mnumber = Array(5,10,5,5,10,10,5,10,5,10);
var itemid = Array(1012331,1022148,1032156,1122208,1132182,1142505);
var number = Array(100,100,100,300,500,800);
var oldsel = 0;
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
var chat = "�÷ü��� �÷� �̽�ƽ ����Ʈ...\r\n\r\n";
chat += "#b#L0#�̽�ƽ ����Ʈ�� �����ΰ���#l\r\n";
if(WorldConnected.mistic) {
chat += "#L1##b�̽�ƽ ����Ʈ�� ��� �ϰڽ��ϴ�.#l\r\m";
}
chat += "#L2#�̽�ƽ ����Ʈ ��ŷ�� ���ڽ��ϴ�.\r\n";
chat += "#L3#����ǰ���� �������� ��ȯ�ϰڽ��ϴ�.#l\r\n";
cm.sendSimple(chat);
} else if (status == 1) {
if(selection == 0) {
cm.sendOk("#b�̽�ƽ ����Ʈ#k�� ���ļ� ���ԵǴ� #d�Ǵٸ� ����#k�� #r���ݱ����� ��������� �ٸ� ������ ��������� ġ���� ������#k ���ϼ��ִ� ���Դϴ�.������ �������� óġ�ϰ��� ����ǰ�� ������ #b����ǰ���� �پ��� �����۵� ��ȯ��#k �����մϴ�.\r\n#r�ع̽�ƽ ����Ʈ�� 3�ð��� �ѹ��� 1�ð����� �����ϴ�.");
cm.dispose();
} else if (selection == 1) {
if(cm.getPlayer().getParty() == null) {
cm.sendOk("#b�̽�ƽ ����Ʈ#k�� ȥ�ڼ��� �Ұ����� �����̱� ������ �ڽ��� �����ټ��ִ� #b��Ƽ����#k �����ؾ� �մϴ�.");
cm.dispose();
return;
}
if(!cm.isLeader()) {
cm.sendOk("#b�̽�ƽ ����Ʈ#k�� ��Ƽ�� ���� ������ �����Ҽ� �ֽ��ϴ�.");
cm.dispose();
return;
}
cm.sendSimple("���� �̽�ƽ ����Ʈ �� �̵� ������ ���Դϴ�.#b\r\n\r\n#fUI/UIWindow2.img/UtilDlgEx/list4#\r\n#L0#��׽ý� �̽�ƽ �ʵ�#l\r\n#L1#���׿� �̽�ƽ �ʵ�#l\r\n#L2#������ �̽�ƽ �ʵ�#l");
} else if (selection == 2) {
cm.getPlayer().saveToDB(false,false);
var i = 0;
        var print = new StringBuilder();
        while (rank.next()) {
if(rank.getInt("mistic") > 0) {
            i++;
            print.append(Integer(i)).append("����#b").append(rank.getString("name")).append("��#k�̽�ƽ ����Ʈ : ").append(Integer(rank.getInt("mistic"))).append("\r\n");
}
}
	if(i==0) {
	cm.sendOk("���������� ��Ŀ���� ������ #b" + cm.getPlayer().getName() + "#k ���� ��Ŀ�� �Ǻ��ô°� �����?");
	} else {
	cm.sendOk("���� �̽�ƽ ����Ʈ ���� " + i + "�� ��Ŀ�� �Դϴ�.\r\n"+print.toString());
	}
    cm.dispose();
} else if (selection == 3) {
cm.sendSimple("��ȯ�Ͻ� ������ ������ �ֽʽÿ�#b\r\n\r\n#L1#�̽�ƽ ����Ʈ�� ������ ��ȯ#l\r\n#L0#�̽�ƽ ����ǰ���� ������ ��ȯ#l");
oldsel = 1;
}
} else if (status == 2) {
if(oldsel == 1) {
if(selection == 0) {
oldsel = 2;
var chat = "��ȯ�Ͻ� �������� ������ �ֽʽÿ�#b\r\n\r\n";
for(var i = 0; i < mitemid.length; i ++) {
chat += "#L" + i + "##i" + mitemid[i] + "##z" + mitemid[i] + "# : #i" + mcoinnn[i] + "# " + mnumber[i] + " ��\r\n";
}
cm.sendSimple(chat);
} else if (selection == 1) {
oldsel = 3;
var chat = "��ȯ�Ͻ� �������� ������ �ֽʽÿ�#b\r\n���� �������̽� ����Ʈ�� " + cm.getPlayer().getMistic() + " ����Ʈ �Դϴ�.\r\n\r\n";
for (var i = 0; i < itemid.length; i ++) {
chat += "#L" + i + "##i" + itemid[i] + "##z" + itemid[i] + "# : " + number[i] + " ����Ʈ\r\n";
}
cm.sendSimple(chat);
}
} else {
if(cm.getPlayerCount(mapid[selection]) >= 1) {
cm.sendOk("�̹� �ٸ� ��Ƽ�� ����Ʈ���� ������ ġ��� �ֽ��ϴ�.");
cm.dispose();
return;
}
cm.resetMap(mapid[selection]);
cm.allPartyWarp(mapid[selection],true);
cm.dispose();
}
} else if (status == 3) {
if(oldsel == 2) {
if(cm.haveItem(mcoinnn[selection],mnumber[selection])) {
cm.gainItem(mcoinnn[selection],-mnumber[selection]);
cm.gainItem(mitemid[selection],1);
cm.sendOk("����ǰ�� ���������� ��ȯ�� �Ϸ��Ͽ����ϴ�.");
cm.dispose();
} else {
cm.sendOk("����ǰ�� �������� ��ȯ�ϱ⿡�� �����մϴ�.");
cm.dispose();
}
} else if (oldsel == 3) {
if(cm.getPlayer().getMistic() >= number[selection]) {
cm.getPlayer().addMistic(-number[selection]);
cm.gainItem(itemid[selection],1);
cm.sendOk("�̽�ƽ ����Ʈ�� ���������� ��ȯ�� �Ϸ��Ͽ����ϴ�.");
cm.dispose();
} else {
cm.sendOk("�̽�ƽ ����Ʈ�� �������� ��ȯ�ϱ⿡�� �����մϴ�.");
cm.dispose();
}
}
}
}
}