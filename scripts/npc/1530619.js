item = [3010690, 3010697, 3010700, 3010702, 3010703, 3010704, 3010705, 3010708, 3010719, 3010946, 3010964, 3010965, 3010976, 3010978, 3010979, 3010980,3014005,3015090, 3015091, 3015092, 3015107, 3015109, 3015111, 3015112, 3015118, 3015119, 3015120, 3015155, 3015156, 3015157, 3015159, 3015167, 3015171, 3015172, 3015173, 3015174, 3015175, 3015223, 3015234, 3015235, 3015236, 3015238,  3015239,  3015240,  3015241, 3015243, 3015244, 3015245, 3015248, 3015263, 3015272, 3015276, 3015277, 3015278, 3015279, 3015295, 3015297,3015299, 3015300, 3015301,3015302, 1702453, 1702454, 1702455, 1702456, 1702457, 1702461, 1702464, 1702466, 1702467, 1702468, 1702470, 1702471, 1702473, 1702478, 1702555, 1702565, 1702594, 1702620, 1702623, 1702624, 1702625, 1003910, 1003913, 1003965, 1003966, 1003967, 1003968, 1003971, 1003998, 1004000, 1004002, 1004003, 1004004, 1004014, 1004026, 1004027, 1004028, 1004029, 1004039, 1004109, 1004117, 1004124, 1004156, 1004166, 1004167, 1004403, 1004441, 1004442, 1004450, 1004532, 1004533, 1004540, 1004490, 1004558, 1004589, 1004581, 1004527, 1004472, 1004591, 1004597, 1004598, 1004599, 1042272, 1042279, 1042280, 1042281, 1042282, 1042285, 1042286, 1042287, 1042290, 1042292, 1042294, 1042312, 1042313, 1042314, 1042315, 1042316, 1042319, 1042330, 1042334, 1042335, 1042337, 1042341, 1042351, 1042344, 1042349, 1061067, 1062112, 1062209, 1062212, 1062214, 1062216, 1052852, 1052853, 1052892, 1052898, 1052909, 1052912, 1052939, 1052942, 1052948, 1052954, 1052970, 1052975, 1052976, 1052977, 1052940, 1052201, 1052200, 1052209, 1052228, 1052245, 1051389, 1051167, 1051188, 1051189, 1051190, 1051192, 1051193, 1051200, 1051282, 1051284, 1051292, 1051294, 1051295, 1050356, 1050361, 1050365, 1050368, 1050370, 1050371, 1050372, 1050373, 1050375, 1050380, 1050351, 1051368, 1051369, 1051370, 1051371, 1051372, 1051374, 1051375, 1051387, 1051450, 1051451, 1052661, 1052671, 1051426, ];

//item = [3015172, 3015173, 3015174, 3015175, 30152310, 3015223, 3015234, 3015235, 3015236, 3015238,  3015239,  3015240,  3015241, 3015243, 3015244, 3015245, 3015248, 3015263, 3015272, 3015276, 3015277, 3015278];

function start() {
	blah = "Hello #rBeta tester#k! \r\n Please help yourself to these free items from our developers. \r\n\r\n Free chairs: \r\n";
	for (var i = 0; i < item.length; i++) {
		blah += "#L" + i +"# #i" + item[i] + "##l"; 
		if (item[i] == 3015302) {
			blah += "\r\n \r\n #rEND OF CHAIR LIST#k \r\n \r\n Free cash weapons: \r\n";
		}
		if (item[i] == 1702625) {
			blah += "\r\n \r\n #rEND OF WEAPON LIST#k \r\n \r\n Free cash hats: \r\n";
		}
		if (item[i] == 1004599) {
			blah += "\r\n \r\n #rEND OF HAT LIST#k \r\n \r\n Free cash tops: \r\n";
		}
		if (item[i] == 1042349) {
			blah += "\r\n \r\n #rEND OF TOP LIST#k \r\n \r\n Free cash bottoms: \r\n";
		}
		if (item[i] == 1062216) {
			blah += "\r\n \r\n #rEND OF BOTTOM LIST#k \r\n \r\n Free cash overalls: \r\n";
		}
//		if (item[i] == 1051426) {
//			blah += "\r\n \r\n #rEND OF OVERALL LIST#k \r\n \r\n Free rings: \r\n";
//		}
		// 1051426
		// 1062216
	}
	cm.sendSimple(blah);
} 

function action(mode, type, selection) { 
    if (mode == 1) { 
        cm.gainItem(item[selection], 1); 
    } 
    cm.dispose(); 
}