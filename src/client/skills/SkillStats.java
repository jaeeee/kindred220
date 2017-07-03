/*
 * ArcStory Project
 * √÷¡÷ø¯ sch2307@naver.com
 * ¿Ã¡ÿ junny_adm@naver.com
 * øÏ¡ˆ»∆ raccoonfox69@gmail.com
 * ∞≠¡§±‘ ku3135@nate.com
 * ±Ë¡¯»´ designer@inerve.kr
 */

package client.skills;

import tools.CaltechEval;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 */
public class SkillStats {
    private final int level;
    private final Map <String, Integer> stats = new HashMap<String, Integer>();
    
    public SkillStats(int skilllevel) {
        this.level = skilllevel;
    }
    public final void setStats(String name, int value) {
        if (stats.containsKey(name)) {
            stats.remove(name);
        }
        stats.put(name, value);
    }
    
public final void setStats(final String name, final String fomular, boolean rn) {
        if (stats.containsKey(name)) {
            stats.remove(name);
        }
        if (fomular != null) {
            String fomular_ = fomular;
            if (!rn) {
                if (fomular_.substring(0, 1).equals("-")) { //-30+3*x
                    fomular_ = "n" + fomular_.substring(1, fomular_.length()); //n30+3*x
                }
            }
            int result = (int) (new CaltechEval(fomular_.replace("x", level+"")).evaluate());
            stats.put(name, result);
        }
}
    public final int getStats(String key) {
        if (stats.containsKey(key)) {
            return stats.get(key);
        }
        return SkillEffectDefaultValues.getDef(key);
    }
}

