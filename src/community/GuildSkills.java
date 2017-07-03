/*
 * ArcStory Project
 * 최주원 sch2307@naver.com
 * 이준 junny_adm@naver.com
 * 우지훈 raccoonfox69@gmail.com
 * 강정규 ku3135@nate.com
 * 김진홍 designer@inerve.kr
 */

package community;

import java.io.Serializable;

/**
 *
 * @author Administrator
 */
public class GuildSkills implements Serializable {
    public static final long serialVersionUID = 3565477792055301248L;
    public String purchaser, activator;
    public long timestamp;
    public int skillID, level;

    public GuildSkills(final int skillID, final int level, final long timestamp, final String purchaser, final String activator) {
        this.timestamp = timestamp;
	this.skillID = skillID;
	this.level = level;
	this.purchaser = purchaser;
	this.activator = activator;
    }

}
