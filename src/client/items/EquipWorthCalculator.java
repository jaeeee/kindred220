package client.items;

import client.MapleClient;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import packet.creators.MainPacketCreator;

/**
 *
 * @author 온라인월드
 */
public class EquipWorthCalculator {
    private int seed = new Random().nextInt();

    public static EquipWorthCalculator ewc() {
        return new EquipWorthCalculator();
    }

    public static int worth(Equip eqp) {
        int k = 0;
        k += eqp.getStr() * 3; //45
        k += eqp.getDex() * 3; //45
        k += eqp.getInt() * 3; //45
        k += eqp.getLuk() * 3; //45
        k += eqp.getWatk() * 10; //200
        k += eqp.getMatk() * 10; //200
        k += eqp.getWdef(); //150
        k += eqp.getMdef(); //150
        k += eqp.getAvoid() + eqp.getAcc(); //300
        return k; //1190 (약 1200이 평균)
    }

    public String listByClient(MapleClient c) {
        StringBuilder sb = new StringBuilder("#b#e[장비 아이템 목록]#n#k");
        for (IItem item : c.getPlayer().getInventory(MapleInventoryType.EQUIP).list()) {
            sb.append("\r\n#L").append(item.getPosition()).append("##i").append(item.getItemId()).append("##t").append(item.getItemId()).append("#");
        }
        return sb.toString();
    }

    public boolean grind(MapleClient c, int slot) {
        Equip eqp = (Equip) c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((short) slot);
        if (eqp.getLines() > 0) {
            final int modify; //값이 높을수록 받을 수 있는 큐브의 폭이 넓어짐
            int w = worth(eqp);
            if (w >= 0 && w < 200) { //씨발 좆 썩은 아이템을 분해하려고 함?; 이거 걍 검이지 씨발련아
                c.getPlayer().dropMessage(5, "장비에 어두운 빛이 감돌기 시작합니다.");//스레드슬립은왜걸음 ?
                modify = -1;
            } else if (w >= 200 && w < 3600) { //장비가 존나 하급이시네여. 쓰레기네.
                c.getPlayer().dropMessage(5, "약간의 섬광과 함께 장비가 분해됩니다.");//스레드슬립은왜걸음 ?
                modify = 0;
            } else if (w >= 3600 && w < 8100) { //평타 취시네요.
                c.getPlayer().dropMessage(5, "조금의 섬광과 함께 장비가 분해됩니다.");//스레드슬립은왜걸음 ?
                modify = 1;
            } else if (w >= 8100 && w < 14400) { //열 ㅋ
                c.getPlayer().dropMessage(5, "보통의 섬광과 함께 장비가 분해됩니다.");//스레드슬립은왜걸음 ?
                modify = 2;
            } else if (w >= 14400 && w < 30000) { //ㅅㅌㅊ
                c.getPlayer().dropMessage(5, "밝은 섬광과 함께 장비가 분해됩니다.");//스레드슬립은왜걸음 ?
                modify = 3;
            } else { //헐 이게 아이템이여, 너 운영자지
                c.getPlayer().dropMessage(5, "눈부신 섬광과 함께 장비가 분해됩니다.");//스레드슬립은왜걸음 ?
                modify = 4;
            }
            c.getPlayer().getInventory(MapleInventoryType.EQUIP).removeItem((short) slot);
            c.getPlayer().getClient().getSession().write(MainPacketCreator.getPlayerInfo(c.getPlayer()));
            c.getPlayer().getMap().removePlayer(c.getPlayer());
            c.getPlayer().getMap().addPlayer(c.getPlayer());
            if (modify >= 0) {
                if (Math.random() * (10 - modify) != 0) {
                    short q = makeQuantity(modify);
                    if (q > 0) {
                        int r = reward(modify);
                        c.getPlayer().gainItem(r, makeQuantity(modify), false, -1, "장비 분해로 얻은 미라클 큐브");
                        c.getPlayer().dropMessage(1, "장비를 성공적으로 분해했습니다.");
                    } else c.getPlayer().dropMessage(1, "장비 분해에 실패했습니다.");
                } else c.getPlayer().dropMessage(1, "장비 분해에 실패했습니다.");
            } else c.getPlayer().dropMessage(1, "장비 분해에 실패했습니다.");
            return true;
        }
        c.getPlayer().dropMessage(1, "잠재 능력이 없는 아이템은 큐브로 분해될 수 없습니다.");
        return false;
    }

    public int reward(int m) {
        List<Integer> l = Arrays.asList(5062000, 5062002, 5062005, 5062500, 5062006, 5062090);
        Collections.shuffle(l);
        return l.get(Math.max(5, ((int) (Math.random() * m)) + RewardRandomizeIndexCode())); //Math random이 더욱 자유로운 랜더마이징 가능
    }

    public short makeQuantity(int m) {
        String arr[] = {"0~5", "0~8", "0~10", "0~20", "0~25"}; //0~4
        int x = Short.parseShort(arr[m].split("~")[0]);
        int y = Short.parseShort(arr[m].split("~")[1]);
        int z = y - x;
        return (short) (x + z + RewardRandomizeIndexCode()); //보너스 0~3개
    }

    private int RewardRandomizeIndexCode() {
        switch (seed % 10) {
            case 0: case 1: case 2: case 3: return 0;
            case 4: case 5: case 6: return 1;
            case 7: case 8: return 2;
            case 9: return 3;
        }
        return -1;
    }
}