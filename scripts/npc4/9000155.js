/*
제작자 : ljw5992@naver.com / dbg_yeane@nate.com
*/

 

var status = -1;


var material = 4001780; 

//도박 재료 ex) 저스티스코인


var item = new Array(new Array(1113055, 1), new Array(1032200, 1), new Array(1113149, 1), new Array(1112748, 1), new Array(1022231, 1), new Array(1012478, 1), new Array(1182087, 1));
//var item = new Array(new Array(1122076, 1), new Array(1113063, 1), new Array(1112665, 1));

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
        cm.sendYesNo("돌림판을 돌리시겟습니까? 하지만 돌림파을 돌리기위해선\r\n#i" + material + "# #b#z" + material + "##k 이 한개 필요합니다.");
    }else if (status == 1){
        if (cm.haveItem(material, 1)){
            if (cm.canHold(item[0][0])){
                if (item[0][1] != 0) {
                    cm.gainItem(item[0][0], item[0][1]);
                    cm.gainItem(material, -1);
                    cm.sendOk("#i" + item[0][0] + "# #b(#z" + item[0][0] + "#) #k" + item[0][1] + " 개를 획득하셨습니다.");
                    cm.dispose();
                } else {
                    cm.sendOk("아쉽게도 꽝이 나왓습니다.");
                    cm.gainItem(material, -1);
                    cm.dispose();
                }
            } else {
                cm.sendOk("인벤토리 공간부족이 부족합니다.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#i"+material+"##b돌림판 이용권#k 을 가지고있지 않습니다.");
            cm.dispose();
        }    
    }    
}