var status = -1;
var a = 0;
function start() {
    status = -1;
    action (1, 0, 0);
}

function action(mode, type, selection) {

if (status == 0) {
cm.sendSimple("저는 원장님을 돕고 있는 #p2012007# 에요. 혹시 #b#t5150052##k을 가지고 있으시다면 저에게 맡겨보는 건 어떠세요?\r\n#b#L0# 머리 바꾸기(일반 쿠폰 사용)#l\r\n#L1# 염색하기(일반 쿠폰 사용)#l");
} else if (status == 1) {
if (selection == 0) {
a=1;
cm.sendYesNo("일반 쿠폰을 사용하면 무작위로 머리 모양이 바뀌게 된답니다. #b#t5150052##k을 사용하여 정말 머리 모양을 바꾸시겠어요?");          
} else if (selection == 1) {
a=2;
cm.sendYesNo("일반 쿠폰을 사용하면 무작위로 머리 색깔이 바뀌게 된답니다. #b#t5151035##k을 사용하여 정말 머리 모양을 바꾸시겠어요?");  
} 
} else if (status == 2){
if (a == 1) {
cm.setRandomAvatar(4000000,31010);
cm.sendOk("자~ 거울을 한번 보세요. 머리손질이 모두 끝났답니다. 어떠세요? 비록 서툴기는 하지만 그래도 잘 된것 같죠? 지금 그 머리가 지겨워 진다면 다시 절 찾아주세요");
cm.dispose();
} else if (a==2) {
cm.setRandomAvatar(4000000,d);
cm.sendOk("자~ 거울을 한번 보세요. 염색이 모두 끝났답니다. 어떠세요? 비록 서툴기는 하지만 그래도 잘 된것 같죠? 지금 그 색깔이 지겨워 진다면 다시 절 찾아주세요");
cm.dispose();
} 
} else {
cm.dispose();
}
}
