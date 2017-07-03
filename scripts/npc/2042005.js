


/*
е╦юс (time_amd@nate.com)
*/


var status = -1;
var select = 0;
importPackage(java.util);
importPackage(java.lang);
importPackage(Packages.hina.tools);

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
        cm.sendSimple("#bHola, Bienvenido a PeruMS Online.\r\n1) es los que regalan con agrado un conjunto inicial de elementos compatibles\r\n#r([Requerido] Por favor, ven una sola vez!)\r\n\r\n#d#L0#Me gustaria recibir el apoyo inicial.\r\n#r#L1#Escojer un Job e ir hacer Level\r\n");
    } else if (status == 1) {
        select = selection;
        if (select == 0) {
            cm.dispose();
            cm.openNpc(2001000);
        }
        if (select == 1) {
            cm.dispose();
            cm.openNpc(2008);

        }
    }
}


