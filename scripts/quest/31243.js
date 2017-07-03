/*
파란돌륜군
*/
importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendNextS("\r\n#b(나는 페파에게 이곳에 오게 된 경위를 설명했다.)",2);
        } else if (status == 1) {
            qm.sendSimple("차원의 문을 타고 다른 곳에서 왔다...? 그러고 보니 넌 마스테리아의 주민이 아니군. 여기 갇혀있는 모두들은 이 근방의 작은 마을의 주민들이야. 부끄럽지만 힘이 없었기 때문에 이곳에 구금되어있는 중이지.\r\n\r\n#L0##b 누군가 구하러 올 사람은 없습니까?#l");
        } else if (status == 2) {
            qm.sendSimple("그런 건 바라지도 않아... 넌 마스테리아의 주민이 아니어서 아무것도 모르는구나. 계속되는 전쟁에 이미 국가라는 것은 의미를 잃었고 몇몇 마을 단위의 공동체만이 삶을 꾸려가고 있어. 그렇게 근근이 살아가던 와중, 정체를 알 수 없는 난폭한 무리들이 우리를 납치했지. 마치 수렵이라도 하듯이 말이야. \r\n\r\n#L0##b 왜죠?#l");
        } else if (status == 3) {
            qm.sendSimple("글쎄, 납치되던 당시에 언뜻 들은 말로는 무슨 #b의식의 제물#k로 바치려고 하는가 봐. \r\n\r\n#L0##b 의식의 제물... ?#l");
        } else if (status == 4) {
            qm.sendSimple("그래, 꽤 흔한 일이지. 그런데 넌 정말 아무것도 모르는군. 잠시 의심했었지만, 네가 말하는 걸 보니 일단 우리를 납치한 세력은 아닌 것 같다는 생각이 들어. 하지만 우린 정말로 구조 요청 같은 걸 보낸 적이 없는데? \r\n\r\n#L0##b 이 중 리들리라는 이름의 마법사가 있습니까?#l");
        } else if (status == 5) {
            qm.sendYesNo("그럴 리가 없잖아. 우리 중에 마법사가 있어 보여? 그런 이름을 가진 사람도 본적이 없다고.");
        } else if (status == 6) {
            qm.sendOk("다시 생각해봐도 확실해. 우리 중에는 리들리라는 이름을 가진 자는 없어.\r\n\r\n#b(그럼 리들리는 어디에 있을까? 주변을 좀 더 찾아보자.)");
            qm.forceStartQuest();
            qm.dispose();
        }
    }
}