var status = 0;  var select = -1;
function start() {  status = -1;  action(1, 0, 0);  }

function action(mode, type, selection) { if (mode == -1) { cm.dispose(); } else { if (mode == 0) { cm.dispose(); return; }
if (mode == 1) status++; else status--;


if (status == 0) {  
var chat = "안녕하세요 반갑습니다~! 빅토리아 중형택시입니다. 다른 곳으로 안전하고 빠르게 이동하고 싶으신가요? 그렇다면 고객 만족을 최우선으로 생각하는 #b빅토리아 중형택시#k를 이용해보세요. 특별히 무료로! 원하시는 곳까지 친절하게 모셔다 드리고 있습니다. "; 
chat += "#b\r\n#L1#이 곳을 떠나 다른 곳으로 가고 싶습니다.#l"; 
cm.sendSimple(chat);

 } else if (status == 1) { 
var warpmain = "#b#h #님#k 환영합니다. 목적지를 선택해주세요.\r\n\r\n#e#r[캐릭터 육성 관련 이동]#n#k"; 
warpmain += "\r\n#L5##r사냥터#b로 이동을 하겠습니다.#l"; 
warpmain += "\r\n#L7##r보스#b를 퇴치하러 가겠습니다.#l"; 
warpmain += "\r\n\r\n\r\n#r#e[게임 편의 이동]#n#k"; 
warpmain += "\r\n#L4##r마을#b로 이동을 하겠습니다."; 
//warpmain += "\r\n#L6##r이벤트 맵#Cgray#(인내의 숲, 끈기의 숲)#b으로 가겠습니다."; 
cm.sendSimple(warpmain);

            } else if (status == 2) { 
              if (selection == 4) { 
	        cm.dispose();
		cm.openNpc(3000012);

            } else if (selection == 5) {
                var hunt = "어느 사냥터로 이동하실건가요?#b#k\r\n";
                hunt += "#L100010000#(Lv.#Cgray#0#k10) │ #r헤네시스  　　　 #k │ #r헤네시스 북쪽언덕#k\r\n"
                hunt += "#L102020000#(Lv.#Cgray#0#k20) │ #b페리온　 　　　  #k │ #b페리온 북쪽령#k\r\n"
                hunt += "#L101071000#(Lv.#Cgray#0#k30) │ #b엘리넬 호수  　　#k │ #b호수 위#k\r\n"
                hunt += "#L101073000#(Lv.#Cgray#0#k35) │ #b만드라고라 밭　  #k │ #b양파 재배지#k\r\n"
                hunt += "#L120041600#(Lv.#Cgray#0#k40) │ #b골드비치  　　　 #k │ #b약한 파도#k\r\n"
                hunt += "#L141010200#(Lv.#Cgray#0#k51) │ #b리에나 해협　　  #k │ #b화석 출몰 지역#k\r\n"
                hunt += "#L102040300#(Lv.#Cgray#0#k62) │ #r유적발굴지　　　#k │ #r발굴 중단지역#k\r\n"
                hunt += "#L200010300#(Lv.#Cgray#0#k71) │ #r스카이로드 　　  #k │ #r하늘계단1#k\r\n"
                hunt += "#L211040001#(Lv.#Cgray#0#k79) │ #b히든스트리트　　#k │ #b왕관을 휘날리며#k\r\n";
                hunt += "#L260020600#(Lv.#Cgray#0#k90) │ #r선셋로드 　　　  #k │ #r사헬지대2#k\r\n"
                hunt += "#L261020400#(Lv.#Cgray#0#k95) │ #r알카드노 연구소  #k │ #r연구소 C-2 구역#k\r\n"
                hunt += "#L300010200#(Lv.#Cgray#0#k98) │ #b엘린 숲　 　  　  #k │ #b이끼나무 서쪽숲2#k\r\n"
                hunt += "#L240011000#(Lv.103) │ #b미나르숲　　　　#k │ #b리프레 동쪽 숲#k\r\n"
                hunt += "#L220010500#(Lv.112) │ #b루디브리엄성 　  #k │ #b테라스홀#k\r\n"
                hunt += "#L220020600#(Lv.113) │ #b루디브리엄성 　  #k │ #b장난감공장<기계실>#k\r\n"
                hunt += "#L223010200#(Lv.120) │ #b판타스틱 테마파크#k│ #b익스트림 스테이션#k\r\n"
                hunt += "#L250020000#(Lv.126) │ #b무릉사원 　　 　 #k │ #b초급 수련장#k\r\n"
                hunt += "#L251010402#(Lv.130) │ #r무릉도원 　　　  #k │ #r빨간코 해적단 소굴2#k\r\n"
                hunt += "#L240040400#(Lv.134) │ #b미나르숲　　　　#k │ #b와이번의 협곡#k\r\n"
                hunt += "#L270010500#(Lv.136) │ #b타임로드 　　　  #k │ #b추억의 길5#k\r\n"
                hunt += "#L240040510#(Lv.150) │ #r미나르숲 　　　  #k │ #r죽은 용의 둥지#k\r\n"
                hunt += "#L271010000#(Lv.164) │ #b파괴된 헤네시스  #k │ #b파괴된 헤네시스#k\r\n"
                hunt += "#L270030500#(Lv.167) │ #b타임로드 　　　  #k │ #b망각의 길5#k\r\n"
                hunt += "#L271030102#(Lv.170) │ #r기사단요새　　   #k │ #r제2연무장#k\r\n"
                hunt += "#L271030310#(Lv.173) │ #r기사단 요새　　  #k │ #r무기고1#k\r\n"
                hunt += "#L271030400#(Lv.173) │ #r기사단 요새　　  #k │ #r기사단 제 4구역#k\r\n"
            //    hunt += "#L241000213#(Lv.186) │ #b킹덤로드　  #k │ #d시작되는 비극의 숲3#k\r\n"
            //    hunt += "#L241000202#(Lv.190) │ #r킹덤로드　  #k │ #r깊어지는 비극의숲4#k\r\n"
                hunt += "#L273000000#(Lv.190) │ #b황혼의 페리온　  #k │ #b황혼의 페리온#k\r\n"
                hunt += "#L273050000#(Lv.197) │ #r황혼의 페리온　  #k │ #r원주민들의 피난처#k\r\n"
         //       hunt += "#L301040100#(Lv.???) │ #b(위험고랩)크림슨우드 성#k │ #r약탈자의 진2#k\r\n"
                cm.sendSimple(hunt);
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
    
    