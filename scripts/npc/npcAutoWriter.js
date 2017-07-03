


/*

	ǻ�� �ҽ�  ���� ��ũ��Ʈ �Դϴ�. (���� : ��ũ��)

	���ǽþ��̵� : NPC �ڵ� ������
	
	���ǽ� �̸� : NPC �ڵ� ������

	���ǽð� �ִ� �� : NPC �ڵ� ������

	���ǽ� ���� : NPC �ڵ� ������


*/
importPackage(Packages.scripting);

var status = -1;
var text;
var helper;

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
        if (cm.getPlayer().hasGmLevel(5)) {
            
            helper = new Packages.scripting.NPCAutoWriterHelper(cm.getNpc(), cm.getClient());
            if (helper.checkFileExist()) {
                cm.sendOk("���� �����Ͻ� ���ǽô� #b#e"+cm.getNpc()+"#k#r �Դϴ�. ��ũ��Ʈ ������ ������ ��������� �����˴ϴ�.");
                cm.dispose();
                return;
            }
            cm.sendYesNo("���� �����Ͻ� ���ǽô� #b"+cm.getNpc()+"#k �Դϴ�. ���� ��ũ��Ʈ�� �������� �����Ƿ� �ܹ��� ���ǽø� ���� �� �ֽ��ϴ�. ���� ����� ���ðھ��?");
        } else {
            cm.dispose();
            return;
        }
    } else if (status == 1) {
        cm.sendGetText("���ǽø� Ŭ���� ���ϰ� �� ������ �Է��ϼ���. ������ �Ǵ� ������ ������ �����ϴ�. \r\n\r\n#e#b���ǽ� �ڵ� : "+ cm.getNpc() +"\r\n"+helper.addInfo(cm.getNpc()));
    } else if (status == 2) {
        text = cm.getText();
        cm.sendYesNo("�Է��Ͻ� ������ ������ �����ϴ�. \r\n\r\n#b#e"+text+"#k#n\r\n\r\n���� ���� ���� ���ǽ� ��ȭ�� �����Ͻðڽ��ϱ�?");
    } else if (status == 3) {
        try {
            helper.doMain();
            helper.newLine();
            helper.newLine();
            helper.newLine();
            helper.writeLine("/*");
            helper.newLine();
            helper.newLine();
            helper.writeLine("	* �ܹ����ǽ� �ڵ����� ��ũ��Ʈ�� ���� ������� ��ũ��Ʈ �Դϴ�.");
            helper.newLine();
            helper.newLine();
            helper.writeLine("	* (Guardian Project Development Source Script)");
            helper.newLine();
            helper.newLine();
            helper.writeLine("	"+cm.getPlayer().getName()+" �� ���� ����� �����ϴ�.");
            helper.newLine();
            helper.newLine();
            helper.writeLine("	���ǽþ��̵� : "+cm.getNpc()+"");
            helper.newLine();
            helper.newLine();
            helper.writeLine("	���ǽ� �̸� : "+helper.getNpcName());
            helper.newLine();
            helper.newLine();
            helper.writeLine("	���ǽð� �ִ� �� : "+cm.getPlayer().getMap().getStreetName() + " : " + cm.getPlayer().getMap().getMapName() + " ("+cm.getPlayer().getMapId()+")");
            helper.newLine();
            helper.newLine();
            helper.writeLine("	���ǽ� ���� : "+helper.getNpcFunc());
            helper.newLine();
            helper.newLine();
            helper.newLine();
            helper.writeLine("*/");
            helper.newLine();
            helper.newLine();
            helper.writeLine("var status = -1;");
            helper.newLine();
            helper.newLine();
            helper.writeLine("function start() {");
            helper.newLine();
            helper.writeLine("    status = -1;");
            helper.newLine();
            helper.writeLine("    action (1, 0, 0);");
            helper.newLine();
            helper.writeLine("}");
            helper.newLine();
            helper.newLine();
            helper.writeLine("function action(mode, type, selection) {");
            helper.newLine();
            helper.newLine();
            helper.writeLine("    if (mode == -1) {");
            helper.newLine();
            helper.writeLine("        cm.dispose();");
            helper.newLine();
            helper.writeLine("        return;");
            helper.newLine();
            helper.writeLine("    }");
            helper.newLine();
            helper.writeLine("    if (mode == 0) {");
            helper.newLine();
            helper.writeLine("        status --;");
            helper.newLine();
            helper.writeLine("    }");
            helper.newLine();
            helper.writeLine("    if (mode == 1) {");
            helper.newLine();
            helper.writeLine("        status++;");
            helper.newLine();
            helper.writeLine("    }");
            helper.newLine();
            helper.newLine();
            helper.writeLine("    if (status == 0) {");
            helper.newLine();
            helper.writeLine("        cm.sendOk(\""+text+"\");");
            helper.newLine();
            helper.writeLine("        cm.dispose();");
            helper.newLine();
            helper.writeLine("        return;");
            helper.newLine();
            helper.writeLine("    }");
            helper.newLine();
            helper.writeLine("}");
            helper.newLine();
            helper.closeFile();
            cm.sendOk("�۾��� �Ϸ�Ǿ����ϴ�.");
            cm.dispose();
        } catch (err) {
            cm.sendOk("�۾��� �����߽��ϴ�!.."+err);
            cm.dispose();
        }
        return;
    }
}

