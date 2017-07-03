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
  cm.sendSimple("#r힐라#k를 잡고싶나? 선택해보게나#l\r\n#L2#1#b번방 으로 이동#l#k #l\r\n#L3##b2번방 으로 이동#l#k #l#k#l\r\n#L4##b3번방 으로 이동#l#k");
 } else if(status == 1) {
  if(selection == 1) {//
   if(cm.getMobQuantity() < 1) {
    cm.sendNotice("[보스소환] "+cm.c.getPlayer().getName() + "님이 "+cm.getChannel()+"채널에서 이동 :                             ")
    cm.spawnMob(8840010, 0, -181);
    cm.c.getPlayer().getMap().spawnMonsterOnGroudBelow(mob1, Point(-20,-216));
    cm.dispose();
   } else {
    cm.sendOk("암것도아님")
    cm.dispose();
   }
  } else if (selection == 2) {//헤네시스로 간다
   cm.warp(262030310, 0);
   cm.dispose();
  } else if (selection == 3) {//헤네시스로 간다
   cm.warp(262031210, 0);
   cm.dispose();
  } else if (selection == 4) {//헤네시스로 간다
   cm.warp(262031310, 0);
   cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}

