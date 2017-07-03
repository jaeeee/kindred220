var a=Math.floor(Math.random()*3+1);
var b=Math.floor(Math.random()*3+1);
var c=Math.floor(Math.random()*3+1);
var d=Math.floor(Math.random()*3+1);
var e=Math.floor(Math.random()*3+1);
var f=Math.floor(Math.random()*3+1);
var g=Math.floor(Math.random()*3+1);
var h=Math.floor(Math.random()*3+1);
var i=Math.floor(Math.random()*3+1);
var total_a=0;
var total_b=0;
var total_c=0;
var total_d=0;
var total_e=0;
var total_f=0;
var total_g=0;
var total_h=0;

	if (a == b && c == a && b == c) {
	total_a = 1;
	}else{
	total_a = 0;
	}
	if (d == e && f == e && d == f) {
	total_b = 1;
	}else{
	total_b = 0;
	}
	if (g == h && i == g && h == i) {
	total_c = 1;
	}else{
	total_c = 0;	
	}
	if (a == d && g == d && a == d) {
	total_d = 1;
	}else{
	total_d = 0;	
	}
	if (b == e && h == e && b == h) {
	total_e = 1;
	}else{
	total_e = 0;	
	}
	if (c == f && i == f && c == i) {
	total_f = 1;
	}else{
	total_f = 0;
	}
	if (a == e && i == e && a == i) {
	total_g = 1;
	}else{
	total_g = 0;	
	}
	if (c == e && c == g && e == g) {
	total_h = 1;
	}else{
	total_h = 0;	
	}
	
	var total_i = total_a+total_b+total_c+total_d+total_e+total_f+total_g+total_h;

if (a == 1){
a = 4441000;
}if (a == 2){
a = 4442000;
}if (a == 3){
a = 4443000;
}
if (b == 1){
b = 4441000;
}  if (b == 2){
b = 4442000;
}  if (b == 3){
b = 4443000;
}
if (c == 1){
c = 4441000;
}  if (c == 2){
c = 4442000;
}  if (c == 3){
c = 4443000;
}
if (d == 1){
d = 4441000;
}  if (d == 2){
d = 4442000;
}  if (d == 3){
d = 4443000;
}
if (e == 1){
e = 4441000;
}  if (e == 2){
e = 4442000;
}  if (e == 3){
e = 4443000;
}
if (f == 1){
f = 4441000;
}  if (f == 2){
f = 4442000;
}  if (f == 3){
f = 4443000;
}
if (g == 1){
g = 4441000;
}  if (g == 2){
g = 4442000;
}  if (g == 3){
g = 4443000;
}
if (h == 1){
h = 4441000;
}  if (h == 2){
h = 4442000;
}  if (h == 3){
h = 4443000;
}
if (i == 1){
i = 4441000;
}  if (i == 2){
i = 4442000;
}  if (i == 3){
i = 4443000;
}


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
	var chat = "Hi #b#h0##k? Do you wanna play bingo?\r\n";
	chat += "\r\n#L0#Yes";
	chat += "\r\n#L1#No ";
	cm.sendSimple(chat);
	} if (selection == 0) {
	cm.sendOk("#i"+a+"#   #i"+b+"#   #i"+c+"#\r\n#i"+d+"#   #i"+e+"#   #i"+f+"#\r\n#i"+g+"#   #i"+h+"#   #i"+i+"#\r\n"+total_i+" Bingo!");

	} if (selection == 1) {
	cm.sendOk("C ya~");
	 
		}
	}
}



