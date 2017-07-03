var status = 0;

function start() {
 status = -1;
 action(1, 0, 0);
}

function action(mode, type, selection) {
 if (mode == -1) {
  cm.dispose();
                 return;
 } else {
  if (mode == 1)
   status++;
  else
   status--;

                if(mode == 0){
                  cm.dispose();
                  return;
                 }
  if (status == 0) {
cm.sendSimple("#r#e#h #Your Hi ^^#n#k\r\m\n#r#n#d#eI am only responsible for the jump flash NPC for people you do not have mobility. You can flash the jump master from the fourth.#n#k\r\n#g#e#n#k" +"#k\r\n#L80##b#eI want to learn flash I jump?#n#k");
} else if (selection == 80) {
cm.sendSimple("#r#e#h #Your Hi ^^#n#k\r\m\n#r#n#d#eThat job mobility is not possible. In addition tteumyeo peulraeji do not jump to seukilchang just press and hold the jump button to jump flash.#n#k\r\n#g#e#n#k" + "#k\r\n#L812##d#eJump to learn flash#n#k");

} else if (selection == 812) {
if (cm.getJob() == 0||cm.getJob() == 2000||cm.getJob() == 2001||cm.getJob() == 2002||cm.getJob() == 2003||cm.getJob() == 2004||cm.getJob() == 2005||cm.getJob() == 3212||cm.getJob() == 212|| cm.getJob() == 222||cm.getJob() == 2216|| cm.getJob() == 2217||cm.getJob() == 2218||cm.getJob() == 1211) {

  cm.teachSkill(51001003,10,10); // ????
  cm.sendOk ("Flash jump skill master has been completed.");
  dispose();

} else {
cm.sendOk("The hukou mobility profession or is not or can not learn the 4th abnormalities (Cygnus is the third, the fourth round of restructuring Cygnus) skills.");
dispose();
}





   }
 }
} 
