/*
���� : venids@nate.com
��α� : www.blog.naver.com/sha_adm

�뵵 : ���������� ����

�� ��ũ��Ʈ������ ���ܼ��� �� ���ܹ����Ҽ� �����ϴ�.
*/

var cchoice; 
var choice; 
var Frock = "#fUI/UIWindow.img/RpsGame/Frock#"; 
var Fpaper = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
var Fscissor = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
var rock = "#fUI/UIWindow.img/RpsGame/rock#"; 
var paper = "#fUI/UIWindow.img/RpsGame/paper#"; 
var scissor = "#fUI/UIWindow.img/RpsGame/scissor#"; 
var win = "������#fUI/UIWindow.img/RpsGame/win#"; 
var lose = "������#fUI/UIWindow.img/RpsGame/lose#"; 
var draw = "������#fUI/UIWindow.img/RpsGame/draw#"; 
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
cm.sendSimple("#d���� ���������� ���� �ѹ� �غ��ðپ��?\r\n#r��#k#e������������ �ϱ����ؼ� 1�� �޼Ұ� �ʿ��մϴ�.#k\r\n#b��#k#e�������������� �̱�� 2�� �޼� ���� ��ȿ �Դϴ�.\r\n   ���ٸ� 1�� �޼Ҹ� ������ ������ �������ּ���#k\r\n\r\n#L1#"+rock+"#l#L2#"+scissor+"#l#L3#"+paper+"#l");
 else {
cm.sendOk("���� ���������� ���⸦ �ϱ����ؼ� 1�� �޼Ұ� �ʿ��ϴ�ϴ�~");
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

//���������� ����
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
 cm.sendOk("  ����"+(cchoice)+"vs"+(choice)+"�ڽ�\r\n"+draw);
 cm.gainMeso(100000000);
 cm.dispose();
 } else {
 cm.sendOk("  ����"+cchoice+"vs"+choice+"�ڽ�\r\n"+win);
 cm.gainMeso(money);
 cm.dispose();
 }
}else if (gamestatus == false){
 cm.sendOk("  ����"+cchoice+"vs"+choice+"�ڽ�\r\n"+lose);
 cm.dispose();
}

}

}