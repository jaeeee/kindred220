/*
택시스크립트 파란돌륜군
*/

var status = 0;
var select = -1;
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
            var chat = "#b유화온라인#k에 오신것을 환영합니다\r\n";
            chat += "\r\n#b#L1#이동하겠습니다#k#l";                   
            cm.sendSimple(chat);
        } else if (status == 1) {
                var warpmain = "가고싶은 #b맵#k의 종류를 선택해주시면 됩니다\r\n";
                warpmain += "";
                warpmain += "\r\n#L5# #b사냥터로 이동을 하겠습니다.#k";
                warpmain += "\r\n#L4##fUI/UIToolTip/Item/Equip/Star/Star# #b재규어맵으로 이동하겠습니다";
                warpmain += "\r\n#L6##fUI/UIToolTip/Item/Equip/Star/Star# #b보스맵으로 이동하겠습니다";
                cm.sendSimple(warpmain);
        } else if (status == 2) {


            if (selection == 4) {
                var vlig = "#fn궁서체##e재규어맵 으로 이동해드리겠습니다.#k\r\n";
                vlig += "\r\n#L931000500#재규어맵 이동";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "#e[WARP]#n #d원하시는 맵#k을 선택해주세요.\r\n";
 hunt += "#fn나눔고딕 ExtraBold##b#L100010000#(Lv.10) 헤네시스 - 헤네시스 북쪽언덕\r\n"
 hunt += "#L410000050#(Lv.25) 여우고개 - 꼬두람이계곡1\r\n"
 hunt += "#L101073000#(Lv.35) 만드라고라 밭 - 양파 재배지\r\n"
 hunt += "#L120041600#(Lv.40) 골드비치 - 약한 파도\r\n"
 hunt += "#L400010400#(Lv.40) 판테온 동쪽지역 - 마력이 가득찬 숲\r\n"
 hunt += "#L141010200#(Lv.51) 리에나 해협 - 화석 출몰 지역\r\n"
 hunt += "#L103030100#(Lv.50) 늪지대 - 야생악어의 늪\r\n"
 hunt += "#L141030200#(Lv.53) 리에나해협 - 수상한해저동굴 2\r\n"
 hunt += "#L105010300#(Lv.60) 슬리피우드 - 개미굴 1\r\n"
 hunt += "#L200010300#(Lv.71) 스카이로드 - 하늘계단1\r\n"
 hunt += "#L211040001#(Lv.79) 히든스트리트 - 왕관을 휘날리며\r\n";
 hunt += "#L260020600#(Lv.90) 선셋로드 - 사헬지대2\r\n"
 hunt += "#L261020400#(Lv.95) 알카드노 연구소 - 연구소 C-2 구역\r\n"
 hunt += "#L220020600#(Lv.113) 루디브리엄성 - 장난감공장<기계실>\r\n"
 hunt += "#L223010200#(Lv.120) 판타스틱 테마파크 - 익스트림 스테이션\r\n"
 hunt += "#L251010402#(Lv.130) 무릉도원 - 빨간코 해적단 소굴2\r\n"
 hunt += "#L240040510#(Lv.150) 미나르숲 - 죽은 용의 둥지\r\n"
 hunt += "#L105200607#(Lv.170) 루타비스서쪽정원 - 카오스 잡몹\r\n"
 hunt += "#L271030102#(Lv.170) 기사단요새 - 제2연무장\r\n"
 hunt += "#L271030310#(Lv.173) 기사단 요새 - 무기고1\r\n"
 hunt += "#L271030400#(Lv.173) 기사단 요새 - 기사단 제 4구역\r\n"
 hunt += "#L241000213#(Lv.185) 킹덤로드 - 시작되는 비극의 숲3\r\n"
 hunt += "#e#r#L241020226#(Lv.186) 킹덤로드 - 타락한 마력의 숲3#n#k\r\n"
 hunt += "#b#L241000202#(Lv.190) 킹덤로드 - 깊어지는 비극의숲4#k\r\n"
 hunt += "#b#L273000000#(Lv.190) 황혼의 페리온 - 황혼의 페리온#k\r\n"
 hunt += "#b#L273050000#(Lv.197) 황혼의 페리온 - 원주민들의 피난처#k\r\n"
 hunt += "#e#r#L273060300#(Lv.198) 황혼의 페리온 - 전사들의 결전지#n#k\r\n"
                cm.sendSimple(hunt);

            } else if (selection == 6) {
                var boss = "";
                     boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L230040410# 바다속 심해의 왕 피아누스\r\n#l"
                      boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8510000# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"   
                    boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/2# #k\#L280030100# 심연속 폐광의 군주 카오스 자쿰\r\n#l"
                      boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8800000# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
               boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/3# #k\#L240060200# 용의 군주라 불리는 카오스 혼테일"
                     boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8810018# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "k\r\n #fUI/UIWindow2.img/NewPyramid/Number/4# #k\#L211070100# 검은마법사의 수문장 반 레온"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8840000# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/5# #k\#L262031300# 아스완의 망령을 다스리는 힐라"
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8870000# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]l\r\n"                  
                boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/6# #k\#L272020200# 시간을 탈취한자 아카이럼"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8860000# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/7# #k\#L271040100# 미래의 여제 시그너스"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8850011# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/8# #k\#L401060100# 폭군의 왕 매그너스"
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8880000# [난이도 :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/9# #k\#L270050100# 미래와 과거의 지배자 카오스 핑크빈"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8820001# [난이도 :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
                cm.sendSimple(boss);

                    } else if (selection == 8) {
                var boss = "";
                   boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L105200529# 또다른 시간의 파괴자 카오스 반반"
                   boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8910100# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                   boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/2# #k\#L105200710# 부서진 여왕 의 분노 카오스 블러디 퀸"
                    boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8920100# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                  boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/3# #k\#L105200610# 파멸의 광기 카오스 피에르"
                 boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8900100# [난이도 : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
               boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/4# #k\#L105200810# 종말의 심판자 카오스 벨룸"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8930100# [난이도 :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
               cm.sendSimple(boss);   

                    } else if (selection == 7) {
                var boss = "";
               //boss += "\r\n#L106021400##b페페 킹 이동";                   
                boss += "\r\n#L220080001##b파풀라투스 이동";
                boss += "\r\n#L925120100##b라바나 이동"; 
                boss += "\r\n#L931050430##b각성한 레비아탄 이동";
                boss += "\r\n#L931050431##b각성한 도도 이동"; 
               boss += "\r\n#L931050432##b각성한 릴리노흐 이동"
               cm.sendSimple(boss);   
        

         
            }  
            } else if (status == 3) {
 var s = selection;
 if(s >=100000000) {
 cm.dispose();
 cm.warp(s,0);
}

            }	
	   	   
      }
}
    
    