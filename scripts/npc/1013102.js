/*
 made by gkskehls
 2008.06.11
*/

/*
 This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 Amon (zakum Summom)
**/
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server.life);
importPackage(java.awt);

var status = -1;

function start() {
 action(1, 0, 0);
}

function action(mode, type, selection) {
 status++;
 if (status == 0) {
  cm.sendSimple("Do you really want to go to the fishing spot?#l\r\n\r\n#L2##rYes I will go.#l#k                  ");

 } else if(status == 1) {

  if (selection == 2) {//광장으로 간다
            if (cm.getPlayer().getMapId() == 3000100) {
                cm.sendOk("You're already fishing!");
                cm.dispose();
                return;
            }
            cm.warp(3000100,0);
            cm.sendOk("#rThis is glad that's where I'll show you how to fishing and fishing#k#b\r\n\r\n1. The fishing goods purchased from taegong\r\n2. Sit in a chair with a will and leave the bait.\r\n3. Either take a dive and take care to throw less\r\n4. And to exchange points obtained from taegong to fish.\r\n5. The purchase various tem.");
            cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}
