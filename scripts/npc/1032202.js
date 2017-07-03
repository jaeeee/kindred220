/*




Corporation.Spirit

leader.스피릿온라인 (terams_@nate.com)

member.UnknownStar (rhduddlr6996@nate.com)

member.우비 (guri__s@nate.com)

Make.공석 (iureal@nate.com)




이 스크립트는 스피릿온라인에만 사용됩니다.

만약 유출이 되더라도 이 주석은 삭제하지 않으셨으면 좋겠습니다.




*/




var status = 0;

var jessica1 = Math.floor(Math.random() * 20);

var jessica2 = Math.floor(Math.random() * 20);

var jessica3 = Math.floor(Math.random() * 20);

var jessica4 = Math.floor(Math.random() * 20);

var jessica5 = Math.floor(Math.random() * 20);

var jessica6 = Math.floor(Math.random() * 20);

var Meso = 100000000;




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

 if (cm.getMeso() > Meso) {

  cm.sendYesNo("Would you like to participate in the lottery?\r\nGold Lotto participation #b" + Meso + "circle#k(1 million) A.\r\n\r\n#e#r[Powerball jackpot is 128 billion]#k#dHow is the chosen lottery numbers and the freedom to come his nickname by taking a screenshot\r\nUp on the board and we will check from time to time.\r\n#e#rCheck check lottery winning numbers in the caf? Notice");

 } else {

  cm.sendOk("To participate in the lottery #b" + Meso + "One #k (1 million) is required.");

  cm.dispose();

  } 

 } else if (status == 1) {

  cm.gainMeso(-Meso);

  var jessica = "#rTime online lottery number drawing system#k A.\r\n";

  jessica += "\r\n#bBe the first number " + jessica1 + "It came out.";

  cm.sendNext(jessica);




 } else if (status == 2) {

  first = jessica1;

  jessica = "#rThe first number " + first + "A.\r\n";

  jessica += "\r\n#bThe second number is " + jessica2 + "It came out.";

  cm.sendNext(jessica);




 } else if (status == 3) {

  first = jessica1;

  second = jessica2;

  var jessica = "#rThe first number " + first + "A.";

  jessica += "\r\nThe second number " + second + "A.\r\n";

  jessica += "\r\n#bThe third number " + jessica3 + "It came out.";

  cm.sendNext(jessica);




 } else if (status == 4) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  var jessica = "#rThe first number " + first + "A.";

  jessica += "\r\nThe second number " + second + "A.";

  jessica += "\r\nThe third number " + third + "A.\r\n";

  jessica += "\r\n#bThe fourth number in the " + jessica4 + "It came out.";

  cm.sendNext(jessica);




 } else if (status == 5) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  fourth = jessica4;

  var jessica = "#rThe first number " + first + "A.";

  jessica += "\r\nThe second number " + second + "A.";

  jessica += "\r\nThe third number " + third + "A.";

  jessica += "\r\nFourth number " + fourth + "A.\r\n";

  jessica += "\r\n#bThe fifth number in the " + jessica5 + "It came out.";

  cm.sendNext(jessica);




 } else if (status == 6) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  fourth = jessica4;

  fifth = jessica5;

  var jessica = "#rThe first number " + first + "A.";

  jessica += "\r\nThe second number " + second + "A.";

  jessica += "\r\nThe third number " + third + "A.";

  jessica += "\r\nFourth number " + fourth + "A.";

  jessica += "\r\nThe fifth number " + fifth + "A.\r\n";

  jessica += "\r\n#bThe sixth number in the " + jessica6 + "It came out.";

  cm.sendNext(jessica);




 } else if (status == 7) {

  first = jessica1;

  second = jessica2;

  third = jessica3;

  fourth = jessica4;

  fifth = jessica5;

  sixth = jessica6;

  var jessica = "The total number so far out\r\n";

  jessica += "#r" + first + "\r\n";

  jessica += "" + second + "\r\n";

  jessica += "" + third + "\r\n";

  jessica += "" + fourth + "\r\n";

  jessica += "" + fifth + "\r\n";

  jessica += "" + sixth + "#k";

  jessica += " A.\r\n";

  cm.sendNext(jessica);

  cm.dispose();

}

}

}