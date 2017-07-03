/*
    @Author 현실도피
*/

importPackage(java.sql);
importPackage(java.lang);
importPackage(Packages.database);
importPackage(Packages.launch.world);
importPackage(Packages.packet.creators);

var status = 0;
var con = MYSQL.getConnection();

function start() {
    status = -1;
    action(1,0,0);
}

function action(mode,type,selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else
        status++;
    if (status == 0) {
        if (cm.getPlayer().isGM() == true) {
            cm.sendYesNo("운영자님 저는 자꾸 팅기는 맵에 갖치는 호구 유저들을 구원하기 위해 생겨난 엔피시입니다. 직접 바꾸기 귀찮으시다면 저를 이용해 보시는건 어떨까요?");
        } else {
            cm.sendOk("안녕하세요? " + "#r" + cm.getPlayer().getName() + "#k" + "님 메이플 월드의 여행은 즐거우신가요?");
            cm.dispose();
        }
    } else if (status == 1) {
        cm.sendGetText("이동 시킬 유저의 닉네임을 입력해주세요"); 
    } else if (status == 2) {
        name = cm.getText();
        checkChar(name);
    } else if (status >= 3 && status < 5) {
        switch (status) {
            case 3: cm.sendGetText("입력하신 유저를 어디로 바꿔드릴까요? 맵코드를 입력해주세요.\r\n헤네시스 : 100000000"); break;
            case 4: mapid = cm.getText(); changeMap(mapid,name,"입력한 유저가 있는맵을 입력하신대 장소로 업데이트 시켰습니다.","[알림]한 호구가 팅김맵에 갖혀서 정상적인 맵으로 워프 시켜주었습니다 모두들 팅김맵에 가지 않도록 주의해주세요"); break;
        }
    }
}

function checkChar(name) {
    var ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
    ps.setString(1,name);
    var rs = ps.executeQuery();
    var i = 0;
    while (rs.next()) {
       i++;
    }
    if (i != 0) {
        cm.sendYesNo("입력하신 유저를 찾는데 성공하였습니다! 이유저를 구원하시겠습니까?");
    } else {
        cm.sendOk("입력하신 유저는 존재하지 않는 캐릭터 입니다.");
        cm.dispose(); 
    }
}

function changeMap(mapid,name,chat,notice) { 
    var ps = con.prepareStatement("UPDATE characters SET map = ? WHERE name = ?");
    ps.setInt(1,mapid);
    ps.setString(2,name);
    ps.executeUpdate();
    ps.close();
    cm.sendOk(chat);
    WorldBroadcasting.broadcast(MainPacketCreator.serverNotice(6,notice));
    cm.dispose();
}