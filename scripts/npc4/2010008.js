/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* guild emblem npc */

var status = 0;
var sel;

function start() {
    cm.sendSimple("안녕하세요? 전 #b길드 마크#k를 담당하고 있는 #b레아#k라고 합니다.\r\n#b#L0#길드 마크를 등록or변경 하고 싶어요#l#k");
}

function action(mode, type, selection) {
    if (mode < 1)
        cm.dispose();
    else {
        status++;
        if (status == 1) {
            sel = selection;
            if (sel == 0) {
                if (cm.getPlayer().getGuildRank() == 1)
                    cm.sendYesNo("길드 마크를 생성하는 데는 #r50만 메소#k의 비용이 듭니다. 좀 더 설명을 하자면, 길드 마크는 길드마다 가질 수 있는 고유의 문장이라고 할 수 있죠. 현재 길드명이 표시되는 곳의 좌측에 붙게 됩니다.\r\n어때요? 길드 마크를 만드시겠습니까?");
                else
                    cm.sendOk("길드장만이 엠블럼 변경을 할 수 있습니다. 길드장이 말을 걸어주세요.");
            }
        }
        else if (status == 2 && sel == 0) {
            cm.genericGuildMessage(0x12);
            cm.dispose();
        } else
            cm.dispose();
    }
}
