/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
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
