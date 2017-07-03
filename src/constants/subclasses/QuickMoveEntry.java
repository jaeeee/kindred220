/*
 * ArcStory Project
 * ���ֿ� sch2307@naver.com
 * ���� junny_adm@naver.com
 * ������ raccoonfox69@gmail.com
 * ������ ku3135@nate.com
 * ����ȫ designer@inerve.kr
 */

package constants.subclasses;

/**
 *
 * @author T-Sun
 * 
 *   This file was written by T-Sun (doomgate17@naver.com)
 *
 *
 *
 */
public class QuickMoveEntry {
    private String name;
    private String desc;
    private int npcId;
    private int levelLimit;
    private int icon;
    
    public QuickMoveEntry (String nn, int np, int i, int l, String dd) {
        this.name = nn;
        this.desc = dd;
        this.npcId = np;
        this.levelLimit = l;
        this.icon = i;
    }
    
    public String getName() {
        return name;
    }
    
    public String getDesc() {
        return desc;
    }
    
    public int getNpcId() {
        return npcId;
    }
    
    public int getLevelLimit() {
        return levelLimit;
    }
    
    public int getIcon() {
        return icon;
    }
    
    
}
