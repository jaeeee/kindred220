


/*

	�ھ�¶��� �ҽ� ���� ��ũ��Ʈ �Դϴ�.

        ���� : Ƽ��

	���ǽþ��̵� : 
	
	���ǽ� �̸� :

	���ǽð� �ִ� �� : 

	���ǽ� ���� : 


*/


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
                    cm.sendSimple("#bCore MS#l#kon #r[Manrep release]#l#kThe script in charge of the field.\r\n#e�ڡڡ� Let's take a manrep? !! �ڡڡ�#n \r\n\r\n#L0##r[Level: 200]#n #bManrep release#k\r\n\r\n\r\n#L1##r[Level: 120]#n #bCygnus manrep release");
        } else if (status == 1) {
            if (selection == 0) {
             cm.dispose();
             cm.openNpc(1402101);
           }else if (selection == 1) {
             cm.dispose();
             cm.openNpc(2159359);
    }
}
}