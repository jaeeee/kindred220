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
 * @author TSun
 */
public enum HighRankingType {
    
    FirstAdvance,SecondAdvance,ThirdAdvance,ForthAdvance;
    
    public int getType() {
        return ordinal();
    }
}
