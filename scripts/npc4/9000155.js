/*
������ : ljw5992@naver.com / dbg_yeane@nate.com
*/

 

var status = -1;


var material = 4001780; 

//���� ��� ex) ����Ƽ������


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
        cm.sendYesNo("�������� �����ðٽ��ϱ�? ������ �������� ���������ؼ�\r\n#i" + material + "# #b#z" + material + "##k �� �Ѱ� �ʿ��մϴ�.");
    }else if (status == 1){
        if (cm.haveItem(material, 1)){
            if (cm.canHold(item[0][0])){
                if (item[0][1] != 0) {
                    cm.gainItem(item[0][0], item[0][1]);
                    cm.gainItem(material, -1);
                    cm.sendOk("#i" + item[0][0] + "# #b(#z" + item[0][0] + "#) #k" + item[0][1] + " ���� ȹ���ϼ̽��ϴ�.");
                    cm.dispose();
                } else {
                    cm.sendOk("�ƽ��Ե� ���� ���ӽ��ϴ�.");
                    cm.gainItem(material, -1);
                    cm.dispose();
                }
            } else {
                cm.sendOk("�κ��丮 ���������� �����մϴ�.");
                cm.dispose();
            }
        } else {
            cm.sendOk("#i"+material+"##b������ �̿��#k �� ���������� �ʽ��ϴ�.");
            cm.dispose();
        }    
    }    
}