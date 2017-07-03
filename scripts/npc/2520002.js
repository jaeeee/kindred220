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
            var chat = "#e 안녕하세요 시그너스라합니다. 혼돈속에 빠져잇는 팬텀님을 구해주세요 ...#n\r\n";
            chat += "\r\n#L1#네 알겟습니다.#l";                   
            cm.sendSimple(chat);
        } else if (status == 1) {
                var warpmain = "#e몇 개월전 검은 마법사의 힘의 붙잡혀 팬텀님은 혼돈속에 빠져잇어요.. 팬텀님을 구해주실거죠?#n\r\n";
                warpmain += "";
                warpmain += "\r\n#L4##b네 알겟습니다.";
                cm.sendSimple(warpmain);
        } else if (status == 2) {


            if (selection == 4) {
                var vlig = "#e 팬텀님에게 이 물건을 꼭 전해주세요#v 4032272##n\r\n";
                vlig += "\r\n#L304070200#퀘스트를 시작하겠습니다";
               cm.gainItem(4032272,1);
               cm.sendSimple(vlig);
            } else if (selection == 5) {
                var hunt = "어느 사냥터로 이동하실건가요?#b\r\n";
 hunt += "#L100010000#(Lv.#Cgray##k10) │ #r헤네시스  　 #k │ #r헤네시스 북쪽언덕#k\r\n"
 hunt += "#L102020000#(Lv.#Cgray##k20) │ #b페리온　 　  #k │ #b페리온 북쪽령#k\r\n"
 hunt += "#L410000050#(Lv.25)   │ #r여우고개　  #k │ #b꼬두람이계곡1#k\r\n"
 hunt += "#L101070010#(Lv.30)   │ #r엘리네호　  #k │ #r한여름밤의 숲#k\r\n"
 hunt += "#L101073000#(Lv.#Cgray##k35) │ #b만드라고라 밭　  #k │ #b양파 재배지#k\r\n"
 hunt += "#L120041600#(Lv.#Cgray##k40) │ #b골드비치 　　　  #k │ #b약한 파도#k\r\n"
 hunt += "#L400010400#(Lv.40)   │ #r판테온 동쪽지역　  #k │ #r마력이 가득찬 숲#k\r\n"
 hunt += "#L141010200#(Lv.#Cgray##k51) │ #b리에나 해협　　  #k │ #b화석 출몰 지역#k\r\n"
 hunt += "#L103030100#(Lv.50)   │ #r늪지대#k    │    #g야생악어의 늪#k\r\n"
 hunt += "#L141030200#(Lv.53)   │ #r리에나해협　  #k │ #r수상한해저동굴 2#k\r\n"
 hunt += "#L105010300#(Lv.60)  │ #r슬리피우드    #k │   #r개미굴 1#k\r\n"
 hunt += "#L102040300#(Lv.#Cgray##k62) │ #r유적발굴지　　　#k │ #r발굴 중단지역#k\r\n"
 hunt += "#L952020000#(Lv.70)   │ #r설산지역　  #k │ #r1단계 설산#k\r\n"
 hunt += "#L200010300#(Lv.#Cgray##k71) │ #r스카이로드 　　  #k │ #r하늘계단1#k\r\n"
 hunt += "#L211040001#(Lv.#Cgray##k79) │ #b히든스트리트　　#k │ #b왕관을 휘날리며#k\r\n";
 hunt += "#L230020000#(Lv.79)   │ #r아쿠아로드#k   │   #동쪽바다 갈림길#k\r\n"
 hunt += "#L310050700#(Lv.82)   │ #r레벤광산　  #k  │  #r갱도3#k\r\n"
 hunt += "#L953000500#(Lv.85)   │ #r까막산고개#k    │   #r6단계 :흉가2#k\r\n"
 hunt += "#L260020600#(Lv.#Cgray##k90) │ #r선셋로드 　　　  #k │ #r사헬지대2#k\r\n"
 hunt += "#L261020400#(Lv.#Cgray##k95) │ #r알카드노 연구소  #k │ #r연구소 C-2 구역#k\r\n"
 hunt += "#L300010200#(Lv.98)   │ #r엘린 숲#k   │  #r이끼나무 서쪽숲2#k\r\n"
 hunt += "#L302050302#(Lv.100)   │ #r폭풍우치는숲#k  │ #b하얀마법사의 궤적3#k\r\n"
 hunt += "#L240011000#(Lv.103) │ #b미나르숲　　　　#k │ #b리프레 동쪽 숲#k\r\n"
 hunt += "#L401050200#(Lv.104)   │ #r폭군의성채1층로비　 #k │   #r폭군의성채#k\r\n"
 hunt += "#L304060200#(Lv.110)   │ #r위기의에레#k   │ #g에레브탈환전2#k\r\n"
 hunt += "#L220010500#(Lv.112) │ #b루디브리엄성 　  #k │ #b테라스홀#k\r\n"
 hunt += "#L220020600#(Lv.113) │ #b루디브리엄성 　  #k │ #b장난감공장<기계실>#k\r\n"
 hunt += "#L921160300#(Lv.120)  │ #r히든스트리트#k │ #b어두운탑2#k\r\n"
 hunt += "#L223010200#(Lv.120)  │ #r판타스틱 테마파크#k │ #b익스트림 스테이션#k\r\n"
 hunt += "#L250020000#(Lv.126) │ #b무릉사원 　　　 #k │ #b초급 수련장#k\r\n"
 hunt += "#L251010402#(Lv.130) │ #r무릉도원 　　  #k │ #r빨간코 해적단 소굴2#k\r\n"
 hunt += "#L240040400#(Lv.134) │ #b미나르숲　　　#k │ #b와이번의 협곡#k\r\n"
 hunt += "#L270010500#(Lv.136) │ #b타임로드 　　  #k │ #b추억의 길5#k\r\n"
 hunt += "#L240040510#(Lv.150) │ #r미나르숲 　　　 #k │ #r죽은 용의 둥지#k\r\n"
 hunt += "#L271010000#(Lv.164) │ #b파괴된 헤네시스  #k │ #b파괴된 헤네시스#k\r\n"
 hunt += "#L270030500#(Lv.167) │ #b타임로드 　　  #k │ #b망각의 길5#k\r\n"
 hunt += "#L105200607#(Lv.170)   │ #r루타비스서쪽정원　  #k │ #r<카오스>#k\r\n"
 hunt += "#L271030102#(Lv.170)   │ #r기사단요새#k  │  #r제2연무장#k\r\n"
 hunt += "#L271030310#(Lv.173) │ #r기사단 요새　　  #k │ #r무기고1#k\r\n"
 hunt += "#L271030400#(Lv.173) │ #r기사단 요새　　  #k │ #r기사단 제 4구역#k\r\n"
 hunt += "#L241000213#(Lv.186)   │ #r킹덤로드　  #k │ #d시작되는 비극의 숲3#k\r\n"
 hunt += "#L241000202#(Lv.190)   │ #r킹덤로드　  #k │ #r깊어지는 비극의숲4#k\r\n"
 hunt += "#L273000000#(Lv.190) │ #b황혼의 페리온　  #k │ #b황혼의 페리온#k\r\n"
 hunt += "#L273050000#(Lv.197) │ #r황혼의 페리온　  #k │ #r원주민들의 피난처#k\r\n"
 hunt += "#L301040100#(Lv.???)   │ #r(위험고랩)크림슨우드 성#k │ #r약탈자의 진2#k\r\n"
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
               //boss += "\r\n#L106021400#[NWE BOSS] 페페 킹 이동";                   
                boss += "\r\n#L220080001#[NWE BOSS] 파풀라투스 이동";
                boss += "\r\n#L925120100#[NWE BOSS] 라바나 이동"; 
                boss += "\r\n#L931050430#[NWE BOSS] 각성한 레비아탄 이동";
                boss += "\r\n#L931050431#[NWE BOSS] 각성한 도도 이동"; 
               boss += "\r\n#L931050432#[NWE BOSS] 각성한 릴리노흐 이동"
               cm.sendSimple(boss);   
        
                   } else if (selection == 9) {
                var boss = "";
               //boss += "\r\n#L106021400#[NWE BOSS] 페페 킹 이동";                   
      boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L322090120# 시그너스의 괴도 팬텀"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/9300762# [난이도 :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
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
    
    