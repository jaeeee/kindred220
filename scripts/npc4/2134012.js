/*

	-창용Ms 단문엔피시 자동제작 스크립트를 통해 만들어진 스크립트 입니다.-

	마주작 에 의해 만들어 졌습니다.

	엔피시아이디 : 2134012

	엔피시 이름 : 리들리

	엔피시가 있는 맵 :  :  (301000000)

	엔피시 설명 : MISSINGNO


*/

importPackage(java.awt);
importPackage(java.lang);
importPackage(Packages.packet.creators);
importPackage(Packages.launch.world);

var status = 0;
function start() {
     if (cm.getQuestStatus(31248) == 1) {
          cm.sendOk("이런.. 유령들이 전부 도망쳐버렸잖아? 증표는 다행히 남아있군");
          cm.completeQuest(31248);
          cm.gainItem(4030019, 1);
          return; 
     }
        cm.sendOk("운지");
        cm.dispose();
        return;
}

