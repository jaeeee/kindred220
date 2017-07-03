places = [
980010000, //아리안트투기장
925020000, //무릉도장
956000100,  //슈피겔만의 이상한 갤러리
980030000, //몬카2
0, 		//?
926010000, //피라미드
0, 
0, 
0,
910010500, //월묘
910340700,//동행
221023300,//차원균열
930000000,//독안개
200080101,//여신의탑
0,//?
261000021, //로미오줄리엣
0,
240080000, //드래곤라이더
//921160000 : 사자성
,0,0,0,0,0,0,0,0,
262010000 //아스완
];
function start() {
    string = "";
    //string += "#0# 아리안트 투기장"; //아리안트 투기장
    //if (cm.getPlayerStat("LVL") >= 25) string += "#1# 무릉 도장"; //무릉도장
    //string += "#2# 몬스터 카니발"; //몬스터카니발
    //string += "#3# 몬스터 카니발2"; //몬스터카니발2
    //string += "#4# It is 4 Place"; //?
    //string += "#5# 네트의 피라미드"; //네트의피라미드
    //string += "#6# 커닝시티 지하철"; //커닝시티지하철
    //string += "#7# It is 7 Place"; //?
    //string += "#8# It is 8 Place"; //?
    if (cm.getPlayerStat("LVL") >= 20) string += "#9# 월묘의 떡"; //월묘
    if (cm.getPlayerStat("LVL") >= 20) string += "#10# 첫번째 동행"; //첫번째동행
    if (cm.getPlayerStat("LVL") >= 20) string += "#11# 차원의 균열"; //차원의균열
    if (cm.getPlayerStat("LVL") >= 70) string += "#12# 독안개의 숲"; //이끼나무숲
    if (cm.getPlayerStat("LVL") >= 70) string += "#13# 여신의 탑"; //여신의 탑
    //string += "#14# It is 14 Place"; //데비존
    if (cm.getPlayerStat("LVL") >= 70) string += "#15# 로미오와 줄리엣"; //로미오줄리엣
    //string += "#16# It is 16 Place"; //샤모스
    if (cm.getPlayerStat("LVL") >= 120) string += "#17# 드래곤 라이더"; //드래곤 라이더
    //string += "#18# It is 18 Place"; //이벤트
    //string += "#19# It is 19 Place"; //할로윈
    //string += "#20# It is 20 Place"; //?
    //string += "#21# It is 21 Place"; //켄타
    //string += "#22# It is 22 Place"; //반레온
    //string += "#23# 아이스나이트의 저주"; //아이스나이트
    if (cm.getPlayerStat("LVL") >= 40) string += "#27# 아스완 해방전"; //아스완 해방전
    if (cm.getPlayerStat("LVL") >= 40) string += "#2# 슈피겔만의 이상한 갤러리"; //슈피겔만의 이상한 갤러리
    if (cm.getPlayerStat("LVL") < 20) string += "#-1# 이동할 수 있는 지역이 없습니다.";
    cm.sendPlaces(string);
}

function action(mode, type, selection) {
    if (mode > 0 && selection != -1){ //Since all the others savelocations are implemented.
        cm.saveLocation("MIRROR");
        cm.warp(places[selection], 0);
    }
    cm.dispose();
}