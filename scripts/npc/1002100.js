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
  cm.sendSimple("정말 낚시터로 이동하시겠습니까?#l\r\n\r\n#L2##r네 이동하겠습니다.#l#k                  ");

 } else if(status == 1) {

  if (selection == 2) {//광장으로 간다
            if (cm.getPlayer().getMapId() == 3000100) {
                cm.sendOk("이미 넌 낚시터잖아!");
                cm.dispose();
                return;
            }
            cm.warp(3000100,0);
            cm.sendOk("#r반가워 여긴 낚시터라는 곳이야 낚시를 하는법을 알려줄게#k#b\r\n\r\n1. 태공에게서 낚시용품을 구입한다\r\n2. 미끼와 의자를 가진채로 의자에 앉는다.\r\n3. 작을하던지 잠수를타던지 알아서한다\r\n4. 얻은 물고기들로 태공에게서 포인트로 교환한다.\r\n5. 각종 템들을 구입한다.");
            cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}
