var status = -1;
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
        status --;
    }
    if (mode == 1) {
        status++;
    }

if (status == 0) {
var min = 1;
var max = 100000000;
cm.sendGetNumber("���� ���� 2�� = ���� �ݾ��� 2��\r\n���� ���� 3�� = ���� �ݾ��� 5��\r\n���� 7 3�� = ���� �ݾ��� 10��",min,min,max);
}
else if (status == 1) {
cm.gainMeso(-selection);
var var1 = Math.floor(Math.random()*10)
var var2 = Math.floor(Math.random()*10)
var var3 = Math.floor(Math.random()*10)
var var4 = "�ƽ��Ե� �����Դϴ�";

if (var1 == 7 && var2 == 7 && var3 == 7) {
var4 = "���� 7�� 3���Դϴ�\r\n#b"+selection*10+" �޼�#k�� ������ϴ�"
cm.gainMeso(selection*10);
} else if (var1 == var2 && var2 == var3) {
var4 = "���� ���ڰ� 3���Դϴ�\r\n#b"+selection*5+" �޼�#k�� ������ϴ�"
cm.gainMeso(selection*5);
} else if (var1 == var2 || var1 == var3 || var2 == var3) {
var4 = "���� ���ڰ� 2���Դϴ�\r\n#b"+selection*2+" �޼�#k�� ������ϴ�"
cm.gainMeso(selection*2);
}

var chat = "#e"+var1+" "+var2+" "+var3+"#n\r\n"+var4
cm.sendNext(chat);
}
else {
cm.dispose();
}

}
