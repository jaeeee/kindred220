/**
 * 
 * @author Daniel
 * Skill vendor.
 * 
 * For Kindred.
 * @version 1.0
 * 
 */
var status = 0;
var skills = [25101205, 20051284, 1121052, 4341002, 1311015, 33121004, 2121004, 5121009, 60001218, 1221054, 9001006, 11101022];
var picked;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 1) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
            if (status == 0) {
                cm.sendSimple("#bEach skill costs 5 #i4033366#.#k \r\n "
                		+ "Pick a skill you want to learn: \r\n"
                		+ "#L0# #s25101205# - Backstep #l \r\n"
                		+ "#L1# #s20051284# - Fox Trot#l \r\n"
                		+ "#L2# #s1121052# - Rising Rage#l \r\n"
                		+ "#L3# #s4341002# - Final Cut#l \r\n"
                		+ "#L4# #s1311015# - Cross Surge#l \r\n"
                		+ "#L5# #s33121004# - Sharp Eyes#l \r\n"
                		+ "#L6# #s2121004# - Infinity#l \r\n"
                		+ "#L7# #s5121009# - Speed Infusion#l \r\n"
//1221054
                		+ "#L8# #s60001218# - Vertical Grapple#l \r\n"
                		+ "#L9# #s1221054# - Sacrosancity#l \r\n"
                	//	+ "#L10# #s9001006# - Super Dragon Roar#l \r\n"
                		+ "#L11# #s11101022# - Rising Moon#l \r\n"); 
            } else if (status == 1) {
            	picked = skills[selection];
                cm.sendSimple("Which key do you want #s" + picked + "# on? #b\r\n#L59#F1#L60#F2#L61#F3#L62#F4#L63#F5#L64#F6#L65#F7#L66#F8#L67#F9 \r\n #L68#F10#L87#F11#L88#F12 \r\n#L2#1#L3#2#L4#3#L5#4#L6#5#L7#6#L8#7#L9#8#L10#9#L11#0#L12#-#L13#= \r\n#L16#Q#L17#W#L18#E#L19#R#L20#T#L21#Y#L22#U#L23#I#L24#O#L25#P#L26#[#L27#] \r\n#L30#A#L31#S#L32#D#L33#F#L34#G#L35#H#L36#J#L37#K#L38#L#L39#;#L40#' \r\n#L42#Shift#L44#Z#L45#X#L46#C#L47#V#L48#B#L49#N#L50#M#L51#,#L52#.#L42#Shift \r\n#L29#Ctrl#L56#Alt#L57#SPACE#L56#Alt#L29#Ctrl \r\n#L82#Ins#L71#Hm#L73#Pup#L83#Del#L79#End#L81#Pdn");
            } else if (status == 2) {
            	if (cm.itemQuantity(4033366) < 5) {
            		cm.sendOk("Sorry, you need #r" + (5 - cm.itemQuantity(4033366)) + "#k more #i4033366# in order to make this purchase.");
            		cm.dispose();
            		return;
            	}
            cm.gainItem(4033366, -5);
        	cm.getPlayer().learnSkill(picked);
            cm.sendOk("There you go!");
		    cm.changeKeyBinding(selection, 1, picked);
		    cm.dispose();
	    } else {
		cm.sendOk("See you next time then.");
                cm.dispose();
                
            }
    } 
}