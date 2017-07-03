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
            var chat = "#e FoxK Welcome to the online.#n\r\n";
            chat += "\r\n#L1#go GO#l";                   
            cm.sendSimple(chat);
        } else if (status == 1) {
                var warpmain = "#e Are you sure you want to move to any place?#n\r\n";
                warpmain += "";
                warpmain += "\r\n#L4##bI will move to the town.";
                warpmain += "\r\n#L5##bI will move to the hunting grounds."; 
                warpmain += "\r\n#L6##r[NEW]#bThe boss will move to the map.";
                warpmain += "\r\n#L7##r[NEW]#bGo to the map will be a small boss.";
                warpmain += "\r\n#L8##r[NEW]#bI will go to the boss bis rue maps.";
                warpmain += "\r\n#L9##r[NEW]#bWe will hear the final boss a job";
                cm.sendSimple(warpmain);
        } else if (status == 2) {


            if (selection == 4) {
                var vlig = "Would you like to move to a town?#b\r\n";
             //   vlig += "\r\n#L3000500#낚시터 이동";
                vlig += "\r\n#L104000000#Lease Harbor Go";
                vlig += "\r\n#L100000000#Hennessy's move";
                vlig += "\r\n#L103000000#Kern City move";
                vlig += "\r\n#L101000000#Eli California Go";
                vlig += "\r\n#L102000000#Go Hyperion";
                vlig += "\r\n#L105000000#Sleepy Wood moved"; 
                vlig += "\r\n#L130000000#Erev move";
                vlig += "\r\n#L101050000#Go Marla ewoo";
                vlig += "\r\n#L140000000#Go Lien"; 
                vlig += "\r\n#L200000000#Go Orbis";
                vlig += "\r\n#L211000000#El Nath moved"
                vlig += "\r\n#L220000000#Rudy William probe moves";
                vlig += "\r\n#L261000000#Earth Defense HQ moves";
                vlig += "\r\n#L222000000#Move the lower town";
                vlig += "\r\n#L240000000#Go repressor";
                vlig += "\r\n#L260000000#Aryan root movement";
                vlig += "\r\n#L261000000#Mark Tia Go";
                vlig += "\r\n#L252000000#Golden Temple Go";
                vlig += "\r\n#L273000000#Hyperion's situation Fox";
                vlig += "\r\n#L301000000#Crimson Wood";
                vlig += "\r\n#L105200000#Bis rue move";
                vlig += "\r\n#L931050810#Pantheon move";
                cm.sendSimple(vlig);

            } else if (selection == 5) {
                var hunt = "Are you going to move to any hunting?#b\r\n";
 hunt += "#L100010000#(Lv.#Cgray##k10) │ #rHennessy's  　 #k │ #rHennessy's North Hills#k\r\n"
 hunt += "#L102020000#(Lv.#Cgray##k20) │ #bHyperion　 　  #k │ #bHyperion North English#k\r\n"
 hunt += "#L410000050#(Lv.25)   │ #rFox Hill　  #k │ #bThe valley twisted duram1#k\r\n"
 hunt += "#L101070010#(Lv.30)   │ #rEli neho　  #k │ #rA Midsummer Night 숲#k\r\n"
 hunt += "#L101073000#(Lv.#Cgray##k35) │ #bMandragora field　  #k │ #bOnion plantations#k\r\n"
 hunt += "#L120041600#(Lv.#Cgray##k40) │ #bGolden Beach 　　　  #k │ #b약한 파도#k\r\n"
 hunt += "#L400010400#(Lv.40)   │ #rPantheon East Region　  #k │ #r마력이 가득찬 숲#k\r\n"
 hunt += "#L141010200#(Lv.#Cgray##k51) │ #bLiege and the Straits　　  #k │ #b화석 출몰 지역#k\r\n"
 hunt += "#L103030100#(Lv.50)   │ #rWilds#k    │    #g야생악어의 늪#k\r\n"
 hunt += "#L141030200#(Lv.53)   │ #rLiege and the Straits　  #k │ #r수상한해저동굴 2#k\r\n"
 hunt += "#L105010300#(Lv.60)  │ #rSleepy Wood    #k │   #r개미굴 1#k\r\n"
 hunt += "#L102040300#(Lv.#Cgray##k62) │ #rRuins balgulji　　　#k │ #r발굴 중단지역#k\r\n"
 hunt += "#L952020000#(Lv.70)   │ #rSnow Mountain area　  #k │ #r1단계 설산#k\r\n"
 hunt += "#L200010300#(Lv.#Cgray##k71) │ #rSky Road 　　  #k │ #r하늘계단1#k\r\n"
 hunt += "#L211040001#(Lv.#Cgray##k79) │ #bHidden Street　　#k │ #b왕관을 휘날리며#k\r\n";
 hunt += "#L230020000#(Lv.79)   │ #rAqua Road#k   │   #동쪽바다 갈림길#k\r\n"
 hunt += "#L310050700#(Lv.82)   │ #rLeuven mines　  #k  │  #r갱도3#k\r\n"
 hunt += "#L953000500#(Lv.85)   │ #rBlackcurrant Mountain Pass#k    │   #r6단계 :흉가2#k\r\n"
 hunt += "#L260020600#(Lv.#Cgray##k90) │ #rSunset Road 　　　  #k │ #r사헬지대2#k\r\n"
 hunt += "#L261020400#(Lv.#Cgray##k95) │ #rNo Arkad Institute  #k │ #r연구소 C-2 구역#k\r\n"
 hunt += "#L300010200#(Lv.98)   │ #rElin Woods#k   │  #r이끼나무 서쪽숲2#k\r\n"
 hunt += "#L302050302#(Lv.100)   │ #rStormy Forest#k  │ #b하얀마법사의 궤적3#k\r\n"
 hunt += "#L240011000#(Lv.103) │ #bUS carry forest　　　　#k │ #b리프레 동쪽 숲#k\r\n"
 hunt += "#L401050200#(Lv.104)   │ #rFirst floor lobby of the tyrant Citadel　 #k │   #r폭군의성채#k\r\n"
 hunt += "#L304060200#(Lv.110)   │ #rError crisis#k   │ #g에레브탈환전2#k\r\n"
 hunt += "#L220010500#(Lv.112) │ #bRudy Brie eomseong 　  #k │ #b테라스홀#k\r\n"
 hunt += "#L220020600#(Lv.113) │ #bRudy Brie eomseong 　  #k │ #b장난감공장<기계실>#k\r\n"
 hunt += "#L921160300#(Lv.120)  │ #rHidden Street#k │ #b어두운탑2#k\r\n"
 hunt += "#L223010200#(Lv.120)  │ #rFantastic Theme Park#k │ #b익스트림 스테이션#k\r\n"
 hunt += "#L250020000#(Lv.126) │ #bMureung four won 　　　 #k │ #b초급 수련장#k\r\n"
 hunt += "#L251010402#(Lv.130) │ #rOne mureungdo 　　  #k │ #r빨간코 해적단 소굴2#k\r\n"
 hunt += "#L240040400#(Lv.134) │ #bUS carry forest　　　#k │ #b와이번의 협곡#k\r\n"
 hunt += "#L270010500#(Lv.136) │ #bLoad time 　　  #k │ #b추억의 길5#k\r\n"
 hunt += "#L240040510#(Lv.150) │ #rUS carry forest 　　　 #k │ #r죽은 용의 둥지#k\r\n"
 hunt += "#L271010000#(Lv.164) │ #bDestroyed Hennessy's  #k │ #bDestroyed Hennessy's#k\r\n"
 hunt += "#L270030500#(Lv.167) │ #bLoad time 　　  #k │ #bOblivion Road 5#k\r\n"
 hunt += "#L105200607#(Lv.170)   │ #rBis rue west garden　  #k │ #r<Chaos>#k\r\n"
 hunt += "#L271030102#(Lv.170)   │ #rTemplar fortress#k  │  #rThe second gymnasium#k\r\n"
 hunt += "#L271030310#(Lv.173) │ #rTemplar fortress　　  #k │ #rArsenal 1#k\r\n"
 hunt += "#L271030400#(Lv.173) │ #rTemplar fortress　　  #k │ #rKnights 4th District#k\r\n"
 hunt += "#L241000213#(Lv.186)   │ #rKingdom load　  #k │ #dForest beginning of the tragedy3#k\r\n"
 hunt += "#L241000202#(Lv.190)   │ #rKingdom load　  #k │ #rForest of deepening tragedy4#k\r\n"
 hunt += "#L273000000#(Lv.190) │ #bHyperion's situation Fox　  #k │ #bHyperion's situation Fox#k\r\n"
 hunt += "#L273050000#(Lv.197) │ #rHyperion's situation Fox　  #k │ #rAboriginal shelter#k\r\n"
 hunt += "#L301040100#(Lv.???)   │ #r(Risk goraep) Crimson Wood Castle#k │ #rJean Predator 2#k\r\n"
                cm.sendSimple(hunt);

            } else if (selection == 6) {
                var boss = "";
                     boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L230040410# King of the deep-sea underwater Pia Taunus\r\n#l"
                      boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8510000# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"   
                    boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/2# #k\#L280030100# Abandoned chaotic succession of monarchs core jakum\r\n#l"
                      boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8800000# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
               boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/3# #k\#L240060200# Lord of Chaos, called for FoxK tail"
                     boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8810018# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "k\r\n #fUI/UIWindow2.img/NewPyramid/Number/4# #k\#L211070100# Half of the goalkeeper Leon Black Wizard"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8840000# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/5# #k\#L262031300# Hilra govern the specter of Aswan"
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8870000# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]l\r\n"                  
                boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/6# #k\#L272020200# Chinese Aka seize the time takin"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8860000# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                 boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/7# #k\#L271040100# The future Empress Cygnus"
                 boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8850011# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                boss += "\r\n #fUI/UIWindow2.img/NewPyramid/Number/8# #k\#L401060100# King of the tyrant Magnus"
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8880000# [difficulty :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/9# #k\#L270050100# Past and future of the Lords of Chaos Pink empty"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8820001# [difficulty :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
                cm.sendSimple(boss);

                    } else if (selection == 8) {
                var boss = "";
                   boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L105200529# Another destroyer of the other half-and-half-hour chaos"
                   boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8910100# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                   boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/2# #k\#L105200710# Queen of the Broken Bloody Rage Chaos Queen"
                    boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8920100# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
                  boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/3# #k\#L105200610# Pierre chaotic madness of destruction"
                 boss += "\r\n #l\n #fUI/UIWindow2.img/MobGage/Mob/8900100# [difficulty : #e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"
               boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/4# #k\#L105200810# Judge chaos of the end belrum"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/8930100# [difficulty :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
               cm.sendSimple(boss);   

                    } else if (selection == 7) {
                var boss = "";
               //boss += "\r\n#L106021400#[NWE BOSS] 페페 킹 이동";                   
                boss += "\r\n#L220080001#[NWE BOSS] Pula wave tooth movement";
                boss += "\r\n#L925120100#[NWE BOSS] Go rabana"; 
                boss += "\r\n#L931050430#[NWE BOSS] By awakening movement rebiahtan";
                boss += "\r\n#L931050431#[NWE BOSS] Awakening movement by Dodo"; 
               boss += "\r\n#L931050432#[NWE BOSS] A wake Lily moved noheu"
               cm.sendSimple(boss);   
        
                   } else if (selection == 9) {
                var boss = "";
               //boss += "\r\n#L106021400#[NWE BOSS] 페페 킹 이동";                   
      boss += "\r\n#fUI/UIWindow2.img/NewPyramid/Number/1# #k\#L927030070# Kaito Phantom of Cygnus"                
                boss += "\r\n#l\r\n #fUI/UIWindow2.img/MobGage/Mob/9300762# [difficulty :　#e[#fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star##fUI/UIWindow2.img/ToolTip/Equip/Star/Star#]#n#l]\r\n"              
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
    
    