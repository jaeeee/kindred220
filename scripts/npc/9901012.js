var status = -1;

 

function start() {
��������status = -1;
��������action (1, 0, 0);
}

 

function action(mode, type, selection) {
��������if (mode != 1) {
����������������cm.dispose();
����������������return;
��������}
��������if (mode == 1) {
����������������status++;
��������}
��������if (status == 0) {
����������������cm.sendGetText("#b���� �� �г����� �ۼ����ֽñ� �ٶ��ϴ�.#k");
��������} else if (status == 1) {
����������������var name = cm.getText();
��������if (name.length() > 2 && name.length() < 6)
��������{
����������������cm.setName(name);
����������������cm.sendOk("#b" + name + "#k���� �г��� ������ �Ϸ� �Ǿ����ϴ�.");
����������������cm.dispose();
��������}
��������else
��������{
����������������cm.sendOk("#b2���� ���� �Ǵ� 6���� �̻� �Դϴ�.#k");
����������������cm.dispose();
����������������}
��������}
}
