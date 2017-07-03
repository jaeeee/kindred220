var names = Array("커닝스퀘어 로비", "1층 2층 : 버블티 매장", "3층 4층 : 인형 매장", "5층 6층 : 의류 매장 & 향수 매장", "7층 8층 : 음반 매장 & VIP 존", "커닝스퀘어 밖으로 나간다");

var mid = Array("103040000", "103040100", "103040200", "103040300", "103040400", "103020020");




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

            text = "엘리베이터를 이용해 원하는 층으로 이동할 수 있스니다. 몇 층으로 이동하길 원하십니까?\r\n"; 

            for (var i = 0; i < names.length; text += "#L"+i+"##b"+names[i]+"#k\r\n#l", i++); 

            cm.sendSimple(text);

        } else if (status == 1) {

            cm.sendNext(""+names[selection]+"으로 이동합니다. 이동을 원치 않으시면 ESC를 눌러주세요.");

            map = mid[selection];

        } else if (status == 2) {

            cm.warp(map, "enter00");

            cm.dispose();

        }

    }
}


