/*

제작자 : ljw5992@naver.com / dbg_yeane@nate.com

*/

var status = 0;
var item = 4001126; //교환을 원하는 아이템
var rate = 50; // 배율 ex) item(1):cash(50)

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode ==0 && status == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }if (status == 0) {
        var quantity = cm.itemQuantity(4001126);
        cm.sendGetText("#z"+item+"#을 캐쉬로 교환해드립니다.\r\n현재 [#b"+quantity+"#k]개의 #z"+item+"#을 가지고 있습니다.\r\n몇개의 #z"+item+"#을 캐쉬로 교환하시겠습니까?\r\n#Cgray#배율 : (#z"+item+"# 1개 : "+rate+"캐쉬)\r\n");
    }else if (status == 1) {
        if (cm.getText()>0){
            var text = cm.getText();
            cm.sendOk("#i"+item+"#"+text+"개를 "+text*rate+"캐쉬로 교환 하시겠습니까?");
        }else {
            cm.sendOk("1개 이상 입력해 주세요.");
            cm.dispose();
        }
    }else if (status == 2) {
        var text = cm.getText();
        var quantity = cm.itemQuantity(4001126);
        if (cm.getPlayer().getNX()+(text*rate) < 900000){
            if (text <= quantity){
                cm.gainItem(item,-text);
                cm.gainNX(text*rate);
                cm.sendOk("#i"+item+"#"+text+"개를 "+text*rate+"캐쉬로 교환 했습니다.");
                cm.dispose();
            }else{
                cm.sendOk("입력한 숫자가 가지고있는 #z"+item+"#의 갯수보다 큽니다.");
                cm.dispose();
            }
        }else{
        cm.sendOk("최대한도를 초과하셨습니다.");
        cm.dispose();
        }
    }
}
}
