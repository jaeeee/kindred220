/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package server.items;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import provider.*;
import tools.Pair;
import tools.Triple;

/**
 *
 * @author 에반테이르
 */
public class MapleProfessionRecipe {
    public Map<Integer, MapleProfessionRecipeEntry> recipes = new HashMap<Integer, MapleProfessionRecipeEntry>();
    private static MapleProfessionRecipe instance = null;
    
    public static MapleProfessionRecipe getInstance() {
        if (instance == null) {
            instance = new MapleProfessionRecipe();
        }
        return instance;
    }
    
    public MapleProfessionRecipeEntry getRecipe(int skillid) {
        return recipes.get(skillid);
    }
    
    public void cache() {
        MapleDataProvider skillData = MapleDataProviderFactory.getDataProvider(new File("wz/Skill.wz"));
        MapleDataDirectoryEntry dir = skillData.getRoot();
        for (MapleDataFileEntry file : dir.getFiles()) {
            if (file.getName().startsWith("Recipe_")) {
                MapleData data = skillData.getData(file.getName());
                for (MapleData skill : data.getChildren()) {
                    List<Pair<Integer, Integer>> recipe = new ArrayList<Pair<Integer, Integer>>();
                    List<Triple<Integer, Integer, Integer>> target = new ArrayList<Triple<Integer, Integer, Integer>>();
                    int reqSkillLevel = MapleDataTool.getInt("reqSkillLevel", skill, 0);
                    int reqSkillProficiency = MapleDataTool.getInt("reqSkillProficiency", skill, 0);
                    int incSkillProficiency = MapleDataTool.getInt("incSkillProficiency", skill, 0);
                    int incFatigability = MapleDataTool.getInt("incFatigability", skill, 0);
                    int needOpenItem = MapleDataTool.getInt("needOpenItem", skill, 0);
                    int period = MapleDataTool.getInt("period", skill, -1);
                    
                    for (MapleData targetData : skill.getChildByPath("target")) {
                        target.add(new Triple<Integer, Integer, Integer>(MapleDataTool.getInt("item", targetData, 0), MapleDataTool.getInt("count", targetData, 0), MapleDataTool.getInt("probWeight", targetData, 100)));
                    }
                    for (MapleData recipeData : skill.getChildByPath("recipe")) {
                        recipe.add(new Pair<Integer, Integer>(MapleDataTool.getInt("item", recipeData, 0), MapleDataTool.getInt("count", recipeData, 0)));
                    }
                    MapleProfessionRecipeEntry entry = new MapleProfessionRecipeEntry(recipe, target, reqSkillLevel, reqSkillProficiency, incSkillProficiency, incFatigability, needOpenItem, period);
                    recipes.put(Integer.parseInt(skill.getName()), entry);
                }
            }
        }
        //System.out.println("[캐싱] 전문기술 캐싱.");
    }
}
