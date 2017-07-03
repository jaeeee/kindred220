// 아스완 재무대신 우드완 스크립트
var status = -1;
var select = -1;

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
		var text = "뭐요... 무슨 일이요? #b";
		text += "\r\n#L0# 해방전 클리어 보상을 받으러 왔습니다.#l";
		text += "\r\n#L1# 아스완 해방전 종료 보상을 받으러 왔습니다.#l";
		text += "\r\n#b#L4# 아스완에서 얻을 수 있는 것에 대해 다시 듣고 싶습니다.#l#k";
		text += "\r\n#b#L5# 해방전 공략법을 다시 듣고 싶습니다.#l#k";
		text += "\r\n\r\n#b#e오늘 코인 획득 가능 수량 : #r0#k #b/ 150#k#n";
        cm.sendSimple(text);
    } else if (status == 1) {
		if (selection == 0)
		{
			cm.sendNext("흠.. 미지급된 코인은 없는 것 같은데. 코인은 해방전의 각 모드를 클리어할 때마다 기록해 두고, 기록된 코인만 지급해 주고 있어. 해방전을 클리어하고 다시 와 보도록.");
			cm.dispose();
		} else if (selection == 1)
		{ //getBonus=0
			cm.sendOk("아직 금일의 해방전이 시작되지 않았군. 오늘 해방전의 모든 라운드가 끝나는 8시 이후에 다시 찾아오도록.")
			cm.dispose();
		} else if (selection == 4)
		{
			cm.sendOk("상점은 쟝피엘이 운영하고있으니 살 것이 있다면 쟝피엘에게 가보도록...")
			cm.dispose();
		} else if (selection == 5)
		{
			cm.sendOk("해방전 이벤트는 미구현 상태입니다.")
			cm.dispose();
			}
		}
	}
