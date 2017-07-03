/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package server.items;

import tools.Pair;
import tools.Triple;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author �������̸�
 */
public class MapleProfessionRecipeEntry {
    private List<Pair<Integer, Integer>> recipe = new ArrayList<Pair<Integer, Integer>>();
    private List<Triple<Integer, Integer, Integer>> target = new ArrayList<Triple<Integer, Integer, Integer>>();
    private int reqSkillLevel, reqSkillProficiency, incSkillProficiency, incFatigability, period, needOpenItem;
    public int getReqSkillLevel() {
        return reqSkillLevel;
    }
    
    public int getReqSkillProficiency() {
        return reqSkillProficiency;
    }
    
    public int getIncSkillProficiency(int playerLvl) {
        if (incSkillProficiency == 0) {
            incSkillProficiency = (((incFatigability * 20) - (reqSkillLevel - playerLvl) * 2));
        }
        return incSkillProficiency;
    }
    
    public int getIncFatigability() {
        return incFatigability;
    }
    
    public int getNeedOpenItem() {
        return needOpenItem;
    }
    
    public int getPeriod() {
        return period;
    }
    
    public List<Pair<Integer, Integer>> getRecipe() {
        return recipe;
    }
    
    public List<Triple<Integer, Integer, Integer>> getTargets() {
        return target;
    }
    
    
    public MapleProfessionRecipeEntry (List<Pair<Integer, Integer>> recipe, List<Triple<Integer, Integer, Integer>> target, int reqSkillLevel, int reqSkillProficiency, int incSkillProficiency, int incFatigability, int needOpenItem, int period) {
        this.recipe = recipe;
        this.target = target;
        this.reqSkillLevel = reqSkillLevel;
        this.reqSkillProficiency = reqSkillProficiency;
        this.incSkillProficiency = incSkillProficiency;
        this.incFatigability = incFatigability;
        this.needOpenItem = needOpenItem;
        this.period = period;
    }
    
}
