/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.items;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author �ֿ��� <virgo_s_t@naver.com>
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
