/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package client;

import client.stats.PlayerStat;
import constants.GameConstants;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author 에반테이르
 */
public class MapleProfession {
    private int firstProfession, secondProfession, firstProfessionExp, secondProfessionExp, firstProfessionLevel, secondProfessionLevel, fatigue;
    private List<Integer> availableRecipes = new ArrayList<Integer>();
    
    private WeakReference<MapleCharacter> chr;
    public MapleProfession (MapleCharacter chr) {
        this.chr = new WeakReference<MapleCharacter>(chr);
    }
    
    public void setFirstProfession(MapleProfessionType type) {
        this.firstProfession = type.getValue();
    }
    
    public void setSecondProfession(MapleProfessionType type) {
        this.secondProfession = type.getValue();
    }
    
    public MapleProfessionType getFirstProfession() {
        return MapleProfessionType.getProfessionById(firstProfession);
    }
    
    public MapleProfessionType getSecondProfession() {
        return MapleProfessionType.getProfessionById(secondProfession);
    }
    
    public int getFirstProfessionSkill() {
        return firstProfession;
    }
    
    public int getSecondProfessionSkill() {
        return secondProfession;
    }
    
    public void setFirstProfessionExp(int amount) {
        this.firstProfessionExp = Math.min(amount, GameConstants.getProfessionExpNeededForLevel(getFirstProfessionLevel()));
    }
    
    public void setSecondProfessionExp(int amount) {
        this.secondProfessionExp = Math.min(amount, GameConstants.getProfessionExpNeededForLevel(getSecondProfessionLevel()));
    }
    
    public void setFirstProfessionLevel(int amount) {
        this.firstProfessionLevel = Math.min(amount, 10);
    }
    
    public void setSecondProfessionLevel(int amount) {
        this.secondProfessionLevel = Math.min(amount, 10);
    }
    
    public void addFirstProfessionExp(int amount) {
        setFirstProfessionExp(getFirstProfessionExp() + amount);
    }
    
    public void addSecondProfessionExp(int amount) {
        setSecondProfessionExp(getSecondProfessionExp() + amount);
    }
    
    public void addFirstProfessionLevel(int amount) {
        setFirstProfessionLevel(getFirstProfessionLevel() + amount);
    }
    
    public void addSecondProfessionLevel(int amount) {
        setSecondProfessionLevel(getSecondProfessionLevel() + amount);
    }
    
    public int getFirstProfessionExp() {
        return firstProfessionExp;
    }
    
    public int getSecondProfessionExp() {
        return secondProfessionExp;
    }
    
    public int getFirstProfessionLevel() {
        return firstProfessionLevel;
    }
    
    public int getSecondProfessionLevel() {
        return secondProfessionLevel;
    }
    
    public int getFatigue() {
        return fatigue;
    }
    
    public void setFatigue(int amount) {
        this.fatigue = Math.min(200, amount);
        this.fatigue = Math.max(0, amount);
    }
    
    public void addFatigue(int amount) {
        if (chr.get() == null) {
            return;
        }
        setFatigue(fatigue + amount);
        chr.get().updateSingleStat(PlayerStat.FATIGUE, Math.max(0, Math.min(200, fatigue + amount)));
    }
    
    public void addRecipe(int recipeid) {
        if (availableRecipes.contains(recipeid)) {
            return;
        }
        availableRecipes.add(recipeid);
    }
    
    public List<Integer> getRecipes() {
        return availableRecipes;
    }
    
    
    
    
    
}
