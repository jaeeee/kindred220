 // Author : ���K
// Function : ����
// ����Ͻ� �� �� �ּ��� ������ ���� �ּ����� ���ڽ��ϴ�.
importPackage(java.lang);
function start() {
status = -1;
action(1, 0, 0); }
function action(mode, type, selection) {
var reward = "#fUI/UIWindow.img/QuestIcon/4/0#";
itemlist = [2431965, 2431966, 2431967, 2432131, 2432153, 2432154, 2432207, 2432354, 2432355, 2432465, 2432479, 2432526, 2432532, 2432592, 2432638, 2432640, 2432710, 2432836, 2432972, 2432973, 2433063, 2433178] // �����ڵ�
cost = [5000000,  5000000,  5000000,  5000000,  5000000,  5000000,  5000000,  5000000,  5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000, 5000000] // ����
 if (mode == -1) { 
    cm.dispose(); 
    } else {
 if (mode == 0) {
    cm.dispose(); 
    return; 
      }
 if (mode == 1)
    status++;
    else status--;   
 if (status == 0) {
    var hello  = "�ȳ��ϼ��� #b#h0##k ����!\r\n";
    for (var i = 0; i < itemlist.length; i++) {
    hello += "#L" +i+ "# #i"+itemlist[i] + "# #z"+itemlist[i]+"# #b("+cost[i]+" �޼�)#k\r\n"
  }
    cm.sendSimple(hello);
        } else if (status == 1) {
            if(cm.getMeso() >= cost[selection]) {
               cm.gainItem(itemlist[selection], qty[selection]);
               cm.gainMeso(-cost[selection]);
               cm.sendOk("���� �ֽ��ϴ�. ����~ �����մϴ� ����~\r\n\r\n"+reward+"\r\n#i"+itemlist[selection] + "# #b[#z " + itemlist[selection]+ "#]#k");
        } else {
               cm.sendOk("�޼Ұ� �����ؿ� ����..");
    }
  
               cm.dispose();
 }
 }
}

