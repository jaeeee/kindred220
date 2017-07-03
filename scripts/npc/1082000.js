/*
제작자 : ljw5992@naver.com / dbg_yeane@nate.com
*/

 

var status = -1;


var material = 4001780; 

//도박 재료 ex) 저스티스코인


var item = new Array(new Array(1132004, 1), new Array(1132103, 1), new Array(1122077, 1), new Array(1022137, 1), new Array(4001109, 1), new Array(2431042, 1));
//var item = new Array(new Array(4001126, 1), new Array(4001126, 0), new Array(4310034, 0));

function start(){
    action(1,0,0);
}

 

item.sort(function(){
    return Math.random() - Math.random();
});

 

function action(mode,type,selection){
    if(mode == 1){
        status++;
    }else{
        status--;
        cm.dispose();
    }
    if (status == 0){
        cm.sendYesNo("The Nuggets did dolrisi dolrimpan? But make turning the dolrimpan\r\n#i" + material + "# #b#z" + material + "##k You need one.");
    }else if (status == 1){
        if (cm.haveItem(material, 1)){
            if (cm.canHold(item[0][0])){
                if (item[0][1] != 0) {
                    cm.gainItem(item[0][0], item[0][1]);
                    cm.gainItem(material, -1);
                    cm.sendOk("#i" + item[0][0] + "# #b(#z" + item[0][0] + "#) #k" + item[0][1] + " It has acquired a dog.");
                    cm.dispose();
                } else {
                    cm.sendOk("Unfortunately, it was slammed Shinawatra.");
                    cm.gainItem(material, -1);
                    cm.dispose();
                }
            } else {
                cm.sendOk("Inventory space is insufficient.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#i"+material+"##bDolrimpan ticket#k You do not have to.");
            cm.dispose();
        }    
    }    
}