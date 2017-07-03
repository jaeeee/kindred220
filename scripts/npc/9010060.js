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
                var warpmain = "어느 곳으로 이동하실래요?\r\n";
                warpmain += "\r\n#L4##e#g< #r마을#k #g>";
                warpmain += "\r\n#L5##e#g< #b사냥터#k #g>"; 
                warpmain += "\r\n#L6##e#g< #d보스#k #g>"; 
                cm.sendSimple(warpmain);
        } else if (status == 1) {


            if (selection == 4) {
                var vlig = "어느 마을로 이동하시겠어요?#b\r\n";
                vlig += "\r\n#L104000000##e#r리스항구";
                vlig += "#L100000000##b헤네시스";
                vlig += "\r\n#L103000000##g커닝시티";
                vlig += "#L101000000##d엘리니아";
                vlig += "\r\n#L102000000##r페리온";
                vlig += "   #L105000000##b슬리피우드"; 
                vlig += "\r\n#L130000000##g에레브";
                vlig += "   #L101050000##d에우렐";
                vlig += "\r\n#L140000000##r리엔"; 
                vlig += "      #L200000000##b오르비스";
                vlig += "\r\n#L211000000##g엘나스"
                vlig += "   #L220000000##d루디브리엄";
                vlig += "\r\n#L261000000##r지구방위본부";
                vlig += "#L222000000##b아랫마을";
                vlig += "\r\n#L240000000##g리프레";
                vlig += "   #L260000000##d아리안트";
                vlig += "\r\n#L261000000##r마가티아";
                vlig += " #L252000000##b황금사원";
                vlig += "\r\n#L273000000##g황혼의페리온";
                vlig += "#L301000000##d크림슨우드";
                vlig += "\r\n#L105200000##r루타비스";
                vlig += " #L931050810##b판테온";
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
                var boss = "어느 보스맵으로 이동하시겠어요?#b\r\n";
                boss += "\r\n#L280030100##e#d(Lv.70) #r자쿰";
                boss += "\r\n#L220080001##e#d(Lv.100) #b파풀라투스";
                boss += "\r\n#L230040410##e#d(Lv.100) #g피아누스";  
                boss += "\r\n#L240060200##e#d(Lv.130) #r혼테일";
                boss += "\r\n#L931050430##e#d(Lv.130) #b각성한레비아탄";
                boss += "\r\n#L931050431##e#d(Lv.130) #g각성한도도"; 
                boss += "\r\n#L931050432##e#d(Lv.135) #r각성한릴리노흐"
                boss += "\r\n#L931050433##e#d(Lv.145) #g각성한라이칸";
                boss += "\r\n#L211070100##e#d(Lv.150) #b반레온";
                boss += "\r\n#L272020200##e#d(Lv.150) #r아카이럼";
                boss += "\r\n#L271040100##e#d(Lv.170) #g시그너스";
                boss += "\r\n#L401060100##e#d(Lv.170) #b매그너스";
                cm.sendSimple(boss);
            }
            } else if (status == 2) {
 var s = selection;
 if(s >=100000000) {
 cm.dispose();
 cm.warp(s,0);
}

            }	
	   	   
      }
}
    
    