/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package tools;

import java.util.List;

public class AttackPair {

    public int objectid;
    public List<Pair<Integer, Boolean>> attack;

    public AttackPair(int objectid, List<Pair<Integer, Boolean>> attack) {
	this.objectid = objectid;
	this.attack = attack;
    }
}
