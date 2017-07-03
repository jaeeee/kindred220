/*
제작 : venids@nate.com
블로그 : www.blog.naver.com/sha_adm

용도 : 가위바위보 도박

본 스크립트파일은 무단수정 및 무단배포할수 없습니다.
*/

var cchoice; 
var choice; 
var Frock = "#fUI/UIWindow.img/RpsGame/Frock#"; 
var Fpaper = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
var Fscissor = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
var rock = "#fUI/UIWindow.img/RpsGame/rock#"; 
var paper = "#fUI/UIWindow.img/RpsGame/paper#"; 
var scissor = "#fUI/UIWindow.img/RpsGame/scissor#"; 
var win = "　　　#fUI/UIWindow.img/RpsGame/win#"; 
var lose = "　　　#fUI/UIWindow.img/RpsGame/lose#"; 
var draw = "　　　#fUI/UIWindow.img/RpsGame/draw#"; 
var money = 0;
var gamestatus = false;
var isdraw = false;


function start(){
status = -1;
action(1,0,0);
}

function action(mode,type,selection){
if(mode != 1) {
cm.dispose();
}
if(mode == 1)
status ++;
else
cm.dispose();

if(status == 0){

if(cm.getMeso() >= 100000000)
cm.sendSimple("#d저랑 가위바위보 내기 한번 해보시겟어요?\r\n#r※#k#e가위바위보를 하기위해선 1억 메소가 필요합니다.#k\r\n#b※#k#e가위바위보에서 이기면 2억 메소 비기면 무효 입니다.\r\n   진다면 1억 메소를 잃을수 잇으니 주의해주세요#k\r\n\r\n#L1#"+rock+"#l#L2#"+scissor+"#l#L3#"+paper+"#l");
 else {
cm.sendOk("저랑 가위바위보 내기를 하기위해선 1억 메소가 필요하답니다~");
cm.dispose();
}
} else if (status == 1){
if(selection == 1)
choice = "rock";
else if (selection == 2)
choice = "scissor";
else if (selection == 3)
choice = "paper";
var rand = Math.floor(Math.random() * 3);
if(rand == 0)
cchoice = "Frock";
else if (rand == 1)
cchoice = "Fpaper";
else if (rand == 2)
cchoice = "Fscissor";
else
cchoice = "Fscissor";

//가위바위보 시작
if(choice == "rock"){
choice = "#fUI/UIWindow.img/RpsGame/rock#"; 
if(cchoice == "Fscissor"){
money = 200000000
cchoice = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
gamestatus = true;
isdraw = false;
}else if (cchoice == "Fpaper"){
gamestatus = false;
isdraw = false;
cchoice = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
}else if (cchoice == "Frock"){
isdraw = true;
gamestatus = true;
cchoice = "#fUI/UIWindow.img/RpsGame/Frock#"; 
}

} else if(choice == "scissor"){
choice = "#fUI/UIWindow.img/RpsGame/scissor#"; 
if(cchoice == "Fpaper"){
money = 200000000
cchoice = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
gamestatus = true;
isdraw = false;
}else if (cchoice == "Frock"){
gamestatus = false;
isdraw = false;
cchoice = "#fUI/UIWindow.img/RpsGame/Frock#"; 
}else if (cchoice == "Fscissor"){
isdraw = true;
gamestatus = true;
cchoice = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
}

} else if(choice == "paper"){
choice = "#fUI/UIWindow.img/RpsGame/paper#"; 
if(cchoice == "Frock"){
money = 200000000
cchoice = "#fUI/UIWindow.img/RpsGame/Frock#"; 
gamestatus = true;
isdraw = false;
}else if (cchoice == "Fscissor"){
gamestatus = false;
isdraw = false;
cchoice = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
}else if (cchoice == "Fpaper"){
isdraw = true;
gamestatus = true;
cchoice = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
}
}
cm.gainMeso(-100000000);
if(gamestatus == true){
 if(isdraw == true){
 cm.sendOk("  상대방"+(cchoice)+"vs"+(choice)+"자신\r\n"+draw);
 cm.gainMeso(100000000);
 cm.dispose();
 } else {
 cm.sendOk("  상대방"+cchoice+"vs"+choice+"자신\r\n"+win);
 cm.gainMeso(money);
 cm.dispose();
 }
}else if (gamestatus == false){
 cm.sendOk("  상대방"+cchoice+"vs"+choice+"자신\r\n"+lose);
 cm.dispose();
}

}

}