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
  cm.sendSimple("���� �����ͷ� �̵��Ͻðڽ��ϱ�?#l\r\n\r\n#L2##r�� �̵��ϰڽ��ϴ�.#l#k                  ");

 } else if(status == 1) {

  if (selection == 2) {//�������� ����
            if (cm.getPlayer().getMapId() == 3000100) {
                cm.sendOk("�̹� �� �������ݾ�!");
                cm.dispose();
                return;
            }
            cm.warp(3000100,0);
            cm.sendOk("#r�ݰ��� ���� �����Ͷ�� ���̾� ���ø� �ϴ¹��� �˷��ٰ�#k#b\r\n\r\n1. �°����Լ� ���ÿ�ǰ�� �����Ѵ�\r\n2. �̳��� ���ڸ� ����ä�� ���ڿ� �ɴ´�.\r\n3. �����ϴ��� �����Ÿ���� �˾Ƽ��Ѵ�\r\n4. ���� ������� �°����Լ� ����Ʈ�� ��ȯ�Ѵ�.\r\n5. ���� �۵��� �����Ѵ�.");
            cm.dispose();
  } else {
   cm.dispose();
  }
 } else {
  cm.dispose();
 }
}
