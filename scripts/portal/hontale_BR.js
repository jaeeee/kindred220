/*
 * 퓨어온라인 소스 스크립트 입니다.
 * 
 * 포탈위치 : 시험의 동굴 1
 * 포탈설명 : 다음 맵 이동
 * 
 * 제작 : 주크블랙
 * 
 */
function enter(pi) {
    var map = pi.getPlayer().getMap();
    if (pi.getMonsterCount(map.getId()) <= 0 && map.getReactor(2408003).getState() == 1) {
        pi.setLastBossMap(map.getId() + 100);
        pi.warp(map.getId() + 100);
    } else {
        pi.getPlayer().message(5, "아직 혼테일의 머리가 남아 있습니다.");
    }
    return false;
}
