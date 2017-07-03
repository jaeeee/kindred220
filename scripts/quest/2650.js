importPackage(Packages.server.quest);

var status = -1;

function start(mode, type, selection) {
    if (mode == -1 || mode == 0) {
        qm.dispose();
        return;
    } else {
        status++;
        if (status == 0) {
            qm.sendNext("\r\n안녕하세여~ 음. #b#h0##k님? 조만간 커닝스퀘어에 신나는이벤트가 벌어지는데 관심 없으세여? 무슨일이냐고여? 아이참, 천상의목소리 혁이 오빠의 사인회가 열리잖아여~ 소식이 참느리시네여.");
        } else if (status == 1) {
            qm.sendYesNo("어쨌든, 곧 사인회가 시작이에여~ #b#h0##k님도 꼭 오셔서 혁이 오빠를 응원해 주세여~ 수락하시면 바로 이곳 커닝스퀘어로 이동하실 수 있으실 거예여!"); 
        } else if (status == 2) {
            qm.sendOk("자~! 당신의 새로운 힘, 어빌리티를 개방해 드렸습니다. 캐릭터 스탯창을 통해서 확인해보세요~!");
            qm.dispose();
        } else if (status == 3) {
            qm.sendOk("어빌리티는 개방하면 나쁠건 없으니 다음에 다시 확인해주세요~!");
            qm.dispose();
        }
    }
}