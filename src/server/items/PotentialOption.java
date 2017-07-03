/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.items;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author 최용재 <virgo_s_t@naver.com>
 */
public class PotentialOption {
    
    private Map<Integer, List<Integer>> option = new HashMap<Integer, List<Integer>>();
    
    public PotentialOption(final Map<Integer, List<Integer>> option) {
        this.option = option;
    }
    
    public Map<Integer, List<Integer>> getPotentialOption() {
        return option;
    }
}
