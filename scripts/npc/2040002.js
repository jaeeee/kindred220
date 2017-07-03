/* 
제작자 : 파란돌륜군 
*/
importPackage(java.util);
importPackage(Packages.packet.creators);


var status = 0;
var ID;
var ID2;
var ID3;
var i = 0;

function start() {
	status = -1;
	action(1, 0, 0);
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
	 var ask = "무슨일인가요? 모험가님";
	 ask +="\r\n#L2##b아이디접속을 해제하고싶습니다.#k"
	 ask +="\r\n#L0##b캐릭터접속을 해제하고싶습니다.#k"
	 ask +="\r\n#L1##b저의고유번호를 알고싶습니다.#k"
	 ask +="\r\n#L3##b상대의고유번호를 알고싶습니다.#k"
         cm.sendSimple(ask);
      } else if (status == 1) {
        if (selection == 0) {
          cm.sendGetText("캐릭터닉네임를 입력해주세요.");
        } else if (selection == 1) {
          cm.sendOk("고유번호출력 : "+ cm.getPlayer().getId() + "\r\n고유번호출력이 완료되었습니다");
          cm.dispose();
        } else if (selection == 2) {
          cm.dispose();
          cm.openNpc(2040028);
          return;
        } else if (selection == 3) {
          if (cm.haveItem(4140103, 1)) {
          cm.dispose();
          cm.openNpc(1052014);
      } else {
          cm.sendOk("인증서 미발급");
      }
}
      } else if (status == 2) {
          text = cm.getText();
          ID = text;
	  cm.sendGetText("고유번호를 입력해주세요.");
      } else if (status == 3) {
	  text = cm.getText();
          ID2 = text;
	  var conn = cm.getClient().getChannelServer().getPlayerStorage().getCharacterByName(ID);
      if (ID2 == conn.getId()) {
      if (conn == null) {
          cm.sendOk("현재 접속중이 아니거나 채널이 다르다네. 혹은 존재하지 않는 아이디일 수도 있습니다.");
	  cm.dispose();
      } else {
	  conn.getClient().getPlayer().dropMessage(1, ""+cm.getPlayer().getName()+" 님이 응답을 요청하였습니다.");
          conn.getClient().getSession().close();
          conn.getClient().disconnect(true, false);
	  cm.sendOk(ID + " 님에게 응답을 요청하였습니다.");
	  cm.dispose();
        }
     } else {
	cm.sendOk("실패");
        cm.dispose();
     }
  }	
}